import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GUI from 'lil-gui';

import sgDataRaw from './space_groups.json';

// --- 1. JSON 구조 자동 대응 ---
const sgData = {};
if (Array.isArray(sgDataRaw)) {
    sgDataRaw.forEach(item => {
        if (item && item.number) sgData[item.number] = item;
    });
} else {
    Object.assign(sgData, sgDataRaw);
}

const keys = Object.keys(sgData);
const defaultSgNumber = keys.length > 0 ? Number(keys[0]) : 1;

// --- 2. 렌더러 및 씬 초기화 ---
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.autoClear = false;

renderer.domElement.style.position = 'absolute';
renderer.domElement.style.top = '0px';
renderer.domElement.style.left = '0px';
renderer.domElement.style.zIndex = '-1';
renderer.domElement.style.pointerEvents = 'none';

document.body.appendChild(renderer.domElement);

const tooltip = document.createElement('div');
tooltip.id = 'hkl-tooltip';
Object.assign(tooltip.style, {
    position: 'absolute', display: 'none', background: 'rgba(0,0,0,0.85)',
    color: '#fff', padding: '8px 12px', borderRadius: '6px',
    pointerEvents: 'none', zIndex: '100', fontSize: '13px',
    fontFamily: 'sans-serif', border: '1px solid #555',
    boxShadow: '0px 4px 10px rgba(0,0,0,0.5)'
});
document.body.appendChild(tooltip);

const scenes = [new THREE.Scene(), new THREE.Scene(), new THREE.Scene()];
scenes[0].background = new THREE.Color(0xffffff);
scenes[1].background = new THREE.Color(0x050505);
scenes[2].background = new THREE.Color(0x000000);

const aspect = (window.innerWidth / 7 * 2) / window.innerHeight;

const cameras = [
    new THREE.PerspectiveCamera(45, aspect, 0.1, 10000),
    new THREE.PerspectiveCamera(45, aspect, 0.1, 10000),
    new THREE.PerspectiveCamera(45, aspect, 0.1, 10000)
];

// 초기 카메라 위치 조정
cameras[0].position.set(80, 80, 80);
cameras[1].position.set(-300, 200, 500);

const ctrls = [
    new OrbitControls(cameras[0], document.getElementById('view1')),
    new OrbitControls(cameras[1], document.getElementById('view2')),
    new OrbitControls(cameras[2], document.getElementById('view3'))
];

ctrls.forEach(c => {
    c.enableDamping = true;
    c.mouseButtons = {
        LEFT: THREE.MOUSE.ROTATE,
        MIDDLE: THREE.MOUSE.PAN, 
        RIGHT: THREE.MOUSE.PAN
    };
});

scenes.slice(0, 2).forEach(s => {
    const l = new THREE.DirectionalLight(0xffffff, 1.2);
    l.position.set(100, 200, 100);
    s.add(l);
    s.add(new THREE.AmbientLight(0x707070));
});

const groups = scenes.map(s => {
    const g = new THREE.Group();
    s.add(g);
    return g;
});

// 최적화 변수
let cachedSpots = [];
let currentSpotMesh = null;
let currentSpotData = [];
let spotMesh1 = null;
let spotMesh2 = null;

const crystalGroup = new THREE.Group();
groups[1].add(crystalGroup);

// X선 빔 라인 고정
const beamGeom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(-500, 0, 0),
    new THREE.Vector3(500, 0, 0)
]);
const beamLine = new THREE.Line(beamGeom, new THREE.LineBasicMaterial({ color: 0xff0000, linewidth: 2 }));
groups[1].add(beamLine);

const detPlane = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.MeshBasicMaterial({ color: 0x333333, side: THREE.DoubleSide, transparent: true, opacity: 0.3 })
);
detPlane.rotation.y = Math.PI / 2;
groups[1].add(detPlane);

const params = {
    sgNumber: defaultSgNumber, a: 42.2, b: 42.2, c: 74.0, alpha: 90, beta: 104, gamma: 90,
    omega: 0, chi: 0, phi: 0, wavelength: 0.9, detectorDist: 250,
    animateChi: false, blockScale: 3, threshold: 0.05
};

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function parseXYZ(str) {
    const mat = [0,0,0,0, 0,0,0,0, 0,0,0,0, 0,0,0,1];
    const parts = str.toLowerCase().replace(/\s/g, '').split(',');
    for(let i=0; i<3; i++) {
        let s = parts[i];
        if (!s) continue;
        const tMatch = s.match(/([+-]?\d+)\/(\d+)/);
        if (tMatch) {
            mat[i*4 + 3] = parseInt(tMatch[1]) / parseInt(tMatch[2]);
            s = s.replace(tMatch[0], '');
        } else {
            const dMatch = s.match(/([+-]?\d+\.\d+)/);
            if (dMatch) {
                mat[i*4 + 3] = parseFloat(dMatch[1]);
                s = s.replace(dMatch[0], '');
            }
        }
        if(s.includes('x')) mat[i*4 + 0] = s.includes('-x') ? -1 : 1;
        if(s.includes('y')) mat[i*4 + 1] = s.includes('-y') ? -1 : 1;
        if(s.includes('z')) mat[i*4 + 2] = s.includes('-z') ? -1 : 1;
    }
    return mat;
}

const getSafeMatrix = (op) => {
    let flatOp;
    if (typeof op === 'string') {
        flatOp = parseXYZ(op);
    } else if (Array.isArray(op)) {
        flatOp = op.flat(Infinity);
    } else {
        throw new Error("Invalid format");
    }
    if (flatOp.length !== 16) return new THREE.Matrix4();
    return new THREE.Matrix4().fromArray(flatOp).transpose();
};

const getBasis = (rot, p) => {
    const d2r = Math.PI / 180;
    const v1 = new THREE.Vector3(p.a, 0, 0);
    const v2 = new THREE.Vector3(p.b * Math.cos(p.gamma * d2r), p.b * Math.sin(p.gamma * d2r), 0);
    const sinG = Math.sin(p.gamma * d2r);
    const v3z = p.c * Math.sqrt(Math.max(0, 1 - Math.cos(p.alpha*d2r)**2 - Math.cos(p.beta*d2r)**2 - Math.cos(p.gamma*d2r)**2 + 2*Math.cos(p.alpha*d2r)*Math.cos(p.beta*d2r)*Math.cos(p.gamma*d2r))) / sinG;
    const v3 = new THREE.Vector3(p.c * Math.cos(p.beta * d2r), p.c * (Math.cos(p.alpha * d2r) - Math.cos(p.beta * d2r) * Math.cos(p.gamma * d2r)) / sinG, v3z);
    [v1, v2, v3].forEach(v => v.applyMatrix4(rot));
    return { v1, v2, v3, mat: new THREE.Matrix4().makeBasis(v1, v2, v3) };
};

function buildLattice() {
    try {
        groups[0].clear();
        crystalGroup.clear();
        cachedSpots = [];

        const sg = sgData[params.sgNumber];
        if (!sg) return;

        document.getElementById('sg-name').innerText = sg.symbol_hm || `SG ${sg.number}`;
        document.getElementById('sg-system').innerText = sg.crystal_system || 'System';

        const bReal = getBasis(new THREE.Matrix4(), params);
        const atomRadius = 1.5; 
        const atomGeom = new THREE.SphereGeometry(atomRadius, 16, 16);
        const atomMat = new THREE.MeshPhongMaterial({ color: 0x4488ff });
        const opsList = sg.operations || sg.symops || [ "x,y,z" ];

        const unitMesh = new THREE.InstancedMesh(atomGeom, atomMat, opsList.length);
        opsList.forEach((op, i) => {
            const mat = getSafeMatrix(op);
            const fPos = new THREE.Vector4(0,0,0,1).applyMatrix4(mat);
            const pos = new THREE.Vector3(((fPos.x%1)+1)%1, ((fPos.y%1)+1)%1, ((fPos.z%1)+1)%1).applyMatrix4(bReal.mat);
            unitMesh.setMatrixAt(i, new THREE.Matrix4().makeTranslation(pos.x, pos.y, pos.z));
        });
        unitMesh.instanceMatrix.needsUpdate = true;
        groups[0].add(unitMesh);
        
        const pts = [[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]].map(p => new THREE.Vector3(...p).applyMatrix4(bReal.mat));
        const lineMat = new THREE.LineBasicMaterial({ color: 0x888888 });
        const addL = (i, j) => groups[0].add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([pts[i], pts[j]]), lineMat));
        [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].forEach(p => addL(p[0], p[1]));

        const n = params.blockScale;
        const blockMesh = new THREE.InstancedMesh(atomGeom, atomMat, opsList.length * (n**3));
        let bIdx = 0;
        const offset = new THREE.Vector3((n-1)/2, (n-1)/2, (n-1)/2).applyMatrix4(bReal.mat);
        for(let i=0; i<n; i++) for(let j=0; j<n; j++) for(let k=0; k<n; k++) {
            const cPos = new THREE.Vector3(i,j,k).applyMatrix4(bReal.mat).sub(offset);
            opsList.forEach(op => {
                const mat = getSafeMatrix(op);
                const fPos = new THREE.Vector4(0,0,0,1).applyMatrix4(mat);
                const pos = new THREE.Vector3(fPos.x, fPos.y, fPos.z).applyMatrix4(bReal.mat).add(cPos);
                blockMesh.setMatrixAt(bIdx++, new THREE.Matrix4().makeTranslation(pos.x, pos.y, pos.z));
            });
        }
        blockMesh.instanceMatrix.needsUpdate = true;
        crystalGroup.add(blockMesh);

        const vol = Math.abs(bReal.v1.dot(new THREE.Vector3().crossVectors(bReal.v2, bReal.v3)));
        const rV = [
            new THREE.Vector3().crossVectors(bReal.v2, bReal.v3).multiplyScalar(2 * Math.PI / vol),
            new THREE.Vector3().crossVectors(bReal.v3, bReal.v1).multiplyScalar(2 * Math.PI / vol),
            new THREE.Vector3().crossVectors(bReal.v1, bReal.v2).multiplyScalar(2 * Math.PI / vol)
        ];

        const RESOLUTION_LIMIT = 0.5;
        const max_G = (2 * Math.PI) / RESOLUTION_LIMIT;
        let h_max = Math.ceil(max_G / rV[0].length());
        let k_max = Math.ceil(max_G / rV[1].length());
        let l_max = Math.ceil(max_G / rV[2].length());

        const MAX_IDX = 35; 
        h_max = Math.min(h_max, MAX_IDX);
        k_max = Math.min(k_max, MAX_IDX);
        l_max = Math.min(l_max, MAX_IDX);

        const dummyAtom = new THREE.Vector3(0.12, 0.25, 0.38);

        for (let h = -h_max; h <= h_max; h++) {
            for (let k = -k_max; k <= k_max; k++) {
                for (let l = -l_max; l <= l_max; l++) {
                    if (h===0 && k===0 && l===0) continue; 
                    const G_unrot = new THREE.Vector3().addScaledVector(rV[0], h).addScaledVector(rV[1], k).addScaledVector(rV[2], l);
                    if (G_unrot.length() > max_G) continue;

                    let F_real = 0;
                    let F_imag = 0;
                    opsList.forEach(op => {
                        const mat = getSafeMatrix(op);
                        const fPos = new THREE.Vector4(dummyAtom.x, dummyAtom.y, dummyAtom.z, 1).applyMatrix4(mat);
                        const phase = 2 * Math.PI * (h * fPos.x + k * fPos.y + l * fPos.z);
                        F_real += Math.cos(phase);
                        F_imag += Math.sin(phase);
                    });
                    const intensity = (F_real**2 + F_imag**2) / opsList.length;
                    if (intensity > 0.1) {
                        const scale = Math.max(0.3, Math.log10(intensity + 1.5));
                        cachedSpots.push({ h, k, l, G_unrot, scale });
                    }
                }
            }
        }

        if (spotMesh1) groups[2].remove(spotMesh1);
        if (spotMesh2) groups[1].remove(spotMesh2);

        const safeCount = Math.max(1, cachedSpots.length);
        const spotGeom = new THREE.CircleGeometry(1.5, 16);
        const spotMat = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
        
        spotMesh1 = new THREE.InstancedMesh(spotGeom, spotMat, safeCount);
        spotMesh2 = new THREE.InstancedMesh(spotGeom, spotMat, safeCount);
        
        groups[2].add(spotMesh1);
        groups[1].add(spotMesh2);
        currentSpotMesh = spotMesh1;

        // 누락되었던 초기 호출 추가
        updateExperiment();
    } catch (e) { console.error(e); }
}

function updateExperiment() {
    if (!spotMesh1 || !spotMesh2) return;

    const d2r = Math.PI / 180;
    const mRot = new THREE.Matrix4().multiplyMatrices(
        new THREE.Matrix4().makeRotationY(params.omega * d2r),
        new THREE.Matrix4().makeRotationZ(params.chi * d2r)
    ).multiply(new THREE.Matrix4().makeRotationX(params.phi * d2r));

    crystalGroup.setRotationFromMatrix(mRot);

    const k_mag = 2 * Math.PI / params.wavelength;
    const ewaldCenter = new THREE.Vector3(-k_mag, 0, 0);
    detPlane.position.x = params.detectorDist;

    let sIdx = 0;
    const hide = new THREE.Matrix4().makeScale(0,0,0);
    currentSpotData = [];

    for (let i = 0; i < cachedSpots.length; i++) {
        const spot = cachedSpots[i];
        const G_rot = spot.G_unrot.clone().applyMatrix4(mRot);

        // Spot Tolerance (거리 기반)
        if (Math.abs(G_rot.distanceTo(ewaldCenter) - k_mag) < params.threshold) {
            const k_out = new THREE.Vector3(k_mag, 0, 0).add(G_rot).normalize();
            if (k_out.x > 0) {
                const p = params.detectorDist / k_out.x;
                const sP = k_out.multiplyScalar(p);
                const transform = new THREE.Matrix4()
                    .makeTranslation(params.detectorDist, sP.y, sP.z)
                    .multiply(new THREE.Matrix4().makeRotationY(Math.PI/2))
                    .multiply(new THREE.Matrix4().makeScale(spot.scale, spot.scale, spot.scale));
                
                spotMesh1.setMatrixAt(sIdx, transform);
                spotMesh2.setMatrixAt(sIdx, transform);
                const sinTheta = Math.min(1, G_rot.length() / (2 * k_mag));
                const theta2 = 2 * Math.asin(sinTheta) * (180 / Math.PI);
                currentSpotData[sIdx] = { h: spot.h, k: spot.k, l: spot.l, theta2 };
                sIdx++;
            }
        }
    }

    for (let i = sIdx; i < Math.max(1, cachedSpots.length); i++) {
        spotMesh1.setMatrixAt(i, hide);
        spotMesh2.setMatrixAt(i, hide);
    }

    spotMesh1.instanceMatrix.needsUpdate = true;
    spotMesh2.instanceMatrix.needsUpdate = true;
    cameras[2].position.set(params.detectorDist + 350, 0, 0);
    cameras[2].lookAt(params.detectorDist, 0, 0);
}

window.addEventListener('mousemove', (event) => {
    if (!currentSpotMesh) return;
    const w = window.innerWidth;
    const view3Left = w * (4 / 7);
    const view3Width = w * (2 / 7);
    if (event.clientX >= view3Left && event.clientX <= view3Left + view3Width) {
        mouse.x = ((event.clientX - view3Left) / view3Width) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, cameras[2]);
        const intersects = raycaster.intersectObject(currentSpotMesh);
        if (intersects.length > 0) {
            const instanceId = intersects[0].instanceId;
            const data = currentSpotData[instanceId];
            if (data) {
                tooltip.style.display = 'block';
                tooltip.style.left = event.clientX + 15 + 'px';
                tooltip.style.top = event.clientY + 15 + 'px';
                tooltip.innerHTML = `<span style="color:#ffcc00; font-weight:bold;">hkl:</span> (${data.h}, ${data.k}, ${data.l})<br/><span style="color:#00ffff; font-weight:bold;">2&theta;:</span> ${data.theta2.toFixed(2)}&deg;`;
                return;
            }
        }
    }
    tooltip.style.display = 'none';
});

function animate() {
    requestAnimationFrame(animate);
    ctrls.forEach(c => c.update());
    if (params.animateChi) { params.chi = (params.chi + 0.4) % 360; updateExperiment(); }
    const w = window.innerWidth, h = window.innerHeight;
    const unit = w / 7;
    renderer.clear();
    for(let i=0; i<3; i++) {
        renderer.setViewport(unit * 2 * i, 0, unit * 2, h);
        renderer.setScissor(unit * 2 * i, 0, unit * 2, h);
        renderer.setScissorTest(true);
        renderer.render(scenes[i], cameras[i]);
    }
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    const aspect = (window.innerWidth / 7 * 2) / window.innerHeight;
    cameras.forEach((c) => { c.aspect = aspect; c.updateProjectionMatrix(); });
    gui.domElement.style.width = `${window.innerWidth / 7}px`;
});

const gui = new GUI({ container: document.getElementById('gui-container'), width: window.innerWidth / 7 });
const f1 = gui.addFolder('Lattice & SG');
const sgOptions = {};
keys.forEach(key => { const sg = sgData[key]; sgOptions[`${sg.number}: ${sg.symbol_hm || 'Unknown'}`] = Number(key); });
f1.add(params, 'sgNumber', sgOptions).name('Space Group').onChange(buildLattice);
['a','b','c','alpha','beta','gamma'].forEach(v => f1.add(params, v, 10, 300).onChange(buildLattice));
f1.add(params, 'blockScale', 1, 7, 1).name('Crystal Size').onChange(buildLattice);

const f2 = gui.addFolder('Goniometer (Rotation)');
['omega','chi','phi'].forEach(v => f2.add(params, v, -180, 180).listen().onChange(updateExperiment));
f2.add(params, 'animateChi').name('Auto-rotate Chi');

const f3 = gui.addFolder('Experiment');
f3.add(params, 'wavelength', 0.5, 3).name('X-ray λ (Å)').onChange(updateExperiment);
f3.add(params, 'detectorDist', 50, 400).name('Detector Dist').onChange(updateExperiment);
f3.add(params, 'threshold', 0.05, 0.5).step(0.001).name('Spot Tolerance').onChange(updateExperiment);

buildLattice();
animate();