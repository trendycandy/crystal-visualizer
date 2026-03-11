(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Pr="183",_e={ROTATE:0,DOLLY:1,PAN:2},_n={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a1=0,oo=1,l1=2,Ti=1,c1=2,Bn=3,Fe=0,Lt=1,Xt=2,ge=0,gn=1,ao=2,lo=3,co=4,h1=5,Xe=100,u1=101,d1=102,f1=103,p1=104,m1=200,_1=201,g1=202,x1=203,Ls=204,Is=205,v1=206,y1=207,b1=208,M1=209,S1=210,E1=211,T1=212,A1=213,w1=214,Us=0,Fs=1,Ns=2,vn=3,Os=4,Bs=5,zs=6,Vs=7,Dr=0,C1=1,R1=2,ee=0,ga=1,xa=2,va=3,ya=4,ba=5,Ma=6,Sa=7,Ea=300,je=301,yn=302,Xi=303,Yi=304,Bi=306,Hs=1e3,me=1001,ks=1002,vt=1003,P1=1004,Jn=1005,Et=1006,qi=1007,qe=1008,Ot=1009,Ta=1010,Aa=1011,Hn=1012,Lr=1013,re=1014,qt=1015,ve=1016,Ir=1017,Ur=1018,kn=1020,wa=35902,Ca=35899,Ra=1021,Pa=1022,$t=1023,ye=1026,$e=1027,Fr=1028,Nr=1029,bn=1030,Or=1031,Br=1033,Ai=33776,wi=33777,Ci=33778,Ri=33779,Gs=35840,Ws=35841,Xs=35842,Ys=35843,qs=36196,$s=37492,js=37496,Zs=37488,Ks=37489,Js=37490,Qs=37491,tr=37808,er=37809,nr=37810,ir=37811,sr=37812,rr=37813,or=37814,ar=37815,lr=37816,cr=37817,hr=37818,ur=37819,dr=37820,fr=37821,pr=36492,mr=36494,_r=36495,gr=36283,xr=36284,vr=36285,yr=36286,D1=3200,Da=0,L1=1,Le="",zt="srgb",Mn="srgb-linear",Li="linear",Q0="srgb",tn=7680,ho=519,I1=512,U1=513,F1=514,zr=515,N1=516,O1=517,Vr=518,B1=519,uo=35044,fo="300 es",te=2e3,Gn=2001;function z1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ii(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function V1(){const i=Ii("canvas");return i.style.display="block",i}const po={};function mo(...i){const t="THREE."+i.shift();console.log(t,...i)}function La(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function P0(...i){i=La(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Y0(...i){i=La(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ui(...i){const t=i.join(" ");t in po||(po[t]=!0,P0(...i))}function H1(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const k1={[Us]:Fs,[Ns]:zs,[Os]:Vs,[vn]:Bs,[Fs]:Us,[zs]:Ns,[Vs]:Os,[Bs]:vn};class Ze{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pi=Math.PI/180,br=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[t&255]+Mt[t>>8&255]+"-"+Mt[t>>16&15|64]+Mt[t>>24&255]+"-"+Mt[e&63|128]+Mt[e>>8&255]+"-"+Mt[e>>16&255]+Mt[e>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function G0(i,t,e){return Math.max(t,Math.min(e,i))}function G1(i,t){return(i%t+t)%t}function $i(i,t,e){return(1-e)*i+e*t}function Cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const W1={DEG2RAD:Pi};class I0{constructor(t=0,e=0){I0.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=G0(this.x,t.x,e.x),this.y=G0(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=G0(this.x,t,e),this.y=G0(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(G0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(G0(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],u=r[o+0],m=r[o+1],g=r[o+2],b=r[o+3];if(p!==b||c!==u||l!==m||d!==g){let f=c*u+l*m+d*g+p*b;f<0&&(u=-u,m=-m,g=-g,b=-b,f=-f);let h=1-a;if(f<.9995){const y=Math.acos(f),E=Math.sin(y);h=Math.sin(h*y)/E,a=Math.sin(a*y)/E,c=c*h+u*a,l=l*h+m*a,d=d*h+g*a,p=p*h+b*a}else{c=c*h+u*a,l=l*h+m*a,d=d*h+g*a,p=p*h+b*a;const y=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=y,l*=y,d*=y,p*=y}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+d*p+c*m-l*u,t[e+1]=c*g+d*u+l*p-a*m,t[e+2]=l*g+d*m+a*u-c*p,t[e+3]=d*g-a*p-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),p=a(r/2),u=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*d*p+l*m*g,this._y=l*m*p-u*d*g,this._z=l*d*g+u*m*p,this._w=l*d*p-u*m*g;break;case"YXZ":this._x=u*d*p+l*m*g,this._y=l*m*p-u*d*g,this._z=l*d*g-u*m*p,this._w=l*d*p+u*m*g;break;case"ZXY":this._x=u*d*p-l*m*g,this._y=l*m*p+u*d*g,this._z=l*d*g+u*m*p,this._w=l*d*p-u*m*g;break;case"ZYX":this._x=u*d*p-l*m*g,this._y=l*m*p+u*d*g,this._z=l*d*g-u*m*p,this._w=l*d*p+u*m*g;break;case"YZX":this._x=u*d*p+l*m*g,this._y=l*m*p+u*d*g,this._z=l*d*g-u*m*p,this._w=l*d*p-u*m*g;break;case"XZY":this._x=u*d*p-l*m*g,this._y=l*m*p-u*d*g,this._z=l*d*g+u*m*p,this._w=l*d*p+u*m*g;break;default:P0("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],p=e[10],u=n+a+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(G0(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*d,this.y=n+c*d+a*l-r*p,this.z=s+c*p+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=G0(this.x,t.x,e.x),this.y=G0(this.y,t.y,e.y),this.z=G0(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=G0(this.x,t,e),this.y=G0(this.y,t,e),this.z=G0(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(G0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ji.copy(this).projectOnVector(t),this.sub(ji)}reflect(t){return this.sub(ji.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(G0(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ji=new I,_o=new Ne;class N0{constructor(t,e,n,s,r,o,a,c,l){N0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],m=n[5],g=n[8],b=s[0],f=s[3],h=s[6],y=s[1],E=s[4],T=s[7],R=s[2],A=s[5],P=s[8];return r[0]=o*b+a*y+c*R,r[3]=o*f+a*E+c*A,r[6]=o*h+a*T+c*P,r[1]=l*b+d*y+p*R,r[4]=l*f+d*E+p*A,r[7]=l*h+d*T+p*P,r[2]=u*b+m*y+g*R,r[5]=u*f+m*E+g*A,r[8]=u*h+m*T+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],p=d*o-a*l,u=a*c-d*r,m=l*r-o*c,g=e*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return t[0]=p*b,t[1]=(s*l-d*n)*b,t[2]=(a*n-s*o)*b,t[3]=u*b,t[4]=(d*e-s*c)*b,t[5]=(s*r-a*e)*b,t[6]=m*b,t[7]=(n*c-l*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Zi.makeScale(t,e)),this}rotate(t){return this.premultiply(Zi.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zi.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zi=new N0,go=new N0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xo=new N0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X1(){const i={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Q0&&(s.r=xe(s.r),s.g=xe(s.g),s.b=xe(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Q0&&(s.r=xn(s.r),s.g=xn(s.g),s.b=xn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Le?Li:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mn]:{primaries:t,whitePoint:n,transfer:Li,toXYZ:go,fromXYZ:xo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:t,whitePoint:n,transfer:Q0,toXYZ:go,fromXYZ:xo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const q0=X1();function xe(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let en;class Y1{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{en===void 0&&(en=Ii("canvas")),en.width=t.width,en.height=t.height;const s=en.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=en}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ii("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xe(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xe(e[n]/255)*255):e[n]=xe(e[n]);return{data:e,width:t.width,height:t.height}}else return P0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let q1=0;class Hr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ki(s[o].image)):r.push(Ki(s[o]))}else r=Ki(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ki(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Y1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(P0("Texture: Unable to serialize Texture."),{})}let $1=0;const Ji=new I;class wt extends Ze{constructor(t=wt.DEFAULT_IMAGE,e=wt.DEFAULT_MAPPING,n=me,s=me,r=Et,o=qe,a=$t,c=Ot,l=wt.DEFAULT_ANISOTROPY,d=Le){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=qn(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new I0(0,0),this.repeat=new I0(1,1),this.center=new I0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new N0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ji).x}get height(){return this.source.getSize(Ji).y}get depth(){return this.source.getSize(Ji).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){P0(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){P0(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ea)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case me:t.x=t.x<0?0:1;break;case ks:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case me:t.y=t.y<0?0:1;break;case ks:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Ea;wt.DEFAULT_ANISOTROPY=1;class at{constructor(t=0,e=0,n=0,s=1){at.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],d=c[4],p=c[8],u=c[1],m=c[5],g=c[9],b=c[2],f=c[6],h=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-b)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+b)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,T=(m+1)/2,R=(h+1)/2,A=(d+u)/4,P=(p+b)/4,x=(g+f)/4;return E>T&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=P/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=x/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=x/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-g)*(f-g)+(p-b)*(p-b)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(p-b)/y,this.z=(u-d)/y,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=G0(this.x,t.x,e.x),this.y=G0(this.y,t.y,e.y),this.z=G0(this.z,t.z,e.z),this.w=G0(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=G0(this.x,t,e),this.y=G0(this.y,t,e),this.z=G0(this.z,t,e),this.w=G0(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(G0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class j1 extends Ze{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new at(0,0,t,e),this.scissorTest=!1,this.viewport=new at(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new wt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ne extends j1{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ia extends wt{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=me,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Z1 extends wt{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=me,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O0{constructor(t,e,n,s,r,o,a,c,l,d,p,u,m,g,b,f){O0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,d,p,u,m,g,b,f)}set(t,e,n,s,r,o,a,c,l,d,p,u,m,g,b,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=d,h[10]=p,h[14]=u,h[3]=m,h[7]=g,h[11]=b,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new O0().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/nn.setFromMatrixColumn(t,0).length(),r=1/nn.setFromMatrixColumn(t,1).length(),o=1/nn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=o*d,m=o*p,g=a*d,b=a*p;e[0]=c*d,e[4]=-c*p,e[8]=l,e[1]=m+g*l,e[5]=u-b*l,e[9]=-a*c,e[2]=b-u*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*d,m=c*p,g=l*d,b=l*p;e[0]=u+b*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=m*a-g,e[6]=b+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*d,m=c*p,g=l*d,b=l*p;e[0]=u-b*a,e[4]=-o*p,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*d,e[9]=b-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*d,m=o*p,g=a*d,b=a*p;e[0]=c*d,e[4]=g*l-m,e[8]=u*l+b,e[1]=c*p,e[5]=b*l+u,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,m=o*l,g=a*c,b=a*l;e[0]=c*d,e[4]=b-u*p,e[8]=g*p+m,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=m*p+g,e[10]=u-b*p}else if(t.order==="XZY"){const u=o*c,m=o*l,g=a*c,b=a*l;e[0]=c*d,e[4]=-p,e[8]=l*d,e[1]=u*p+b,e[5]=o*d,e[9]=m*p-g,e[2]=g*p-m,e[6]=a*d,e[10]=b*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(K1,t,J1)}lookAt(t,e,n){const s=this.elements;return Ft.subVectors(t,e),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Ee.crossVectors(n,Ft),Ee.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Ee.crossVectors(n,Ft)),Ee.normalize(),Qn.crossVectors(Ft,Ee),s[0]=Ee.x,s[4]=Qn.x,s[8]=Ft.x,s[1]=Ee.y,s[5]=Qn.y,s[9]=Ft.y,s[2]=Ee.z,s[6]=Qn.z,s[10]=Ft.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],m=n[13],g=n[2],b=n[6],f=n[10],h=n[14],y=n[3],E=n[7],T=n[11],R=n[15],A=s[0],P=s[4],x=s[8],S=s[12],q=s[1],w=s[5],z=s[9],V=s[13],X=s[2],B=s[6],H=s[10],F=s[14],K=s[3],j=s[7],a0=s[11],d0=s[15];return r[0]=o*A+a*q+c*X+l*K,r[4]=o*P+a*w+c*B+l*j,r[8]=o*x+a*z+c*H+l*a0,r[12]=o*S+a*V+c*F+l*d0,r[1]=d*A+p*q+u*X+m*K,r[5]=d*P+p*w+u*B+m*j,r[9]=d*x+p*z+u*H+m*a0,r[13]=d*S+p*V+u*F+m*d0,r[2]=g*A+b*q+f*X+h*K,r[6]=g*P+b*w+f*B+h*j,r[10]=g*x+b*z+f*H+h*a0,r[14]=g*S+b*V+f*F+h*d0,r[3]=y*A+E*q+T*X+R*K,r[7]=y*P+E*w+T*B+R*j,r[11]=y*x+E*z+T*H+R*a0,r[15]=y*S+E*V+T*F+R*d0,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],p=t[6],u=t[10],m=t[14],g=t[3],b=t[7],f=t[11],h=t[15],y=c*m-l*u,E=a*m-l*p,T=a*u-c*p,R=o*m-l*d,A=o*u-c*d,P=o*p-a*d;return e*(b*y-f*E+h*T)-n*(g*y-f*R+h*A)+s*(g*E-b*R+h*P)-r*(g*T-b*A+f*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],p=t[9],u=t[10],m=t[11],g=t[12],b=t[13],f=t[14],h=t[15],y=e*a-n*o,E=e*c-s*o,T=e*l-r*o,R=n*c-s*a,A=n*l-r*a,P=s*l-r*c,x=d*b-p*g,S=d*f-u*g,q=d*h-m*g,w=p*f-u*b,z=p*h-m*b,V=u*h-m*f,X=y*V-E*z+T*w+R*q-A*S+P*x;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/X;return t[0]=(a*V-c*z+l*w)*B,t[1]=(s*z-n*V-r*w)*B,t[2]=(b*P-f*A+h*R)*B,t[3]=(u*A-p*P-m*R)*B,t[4]=(c*q-o*V-l*S)*B,t[5]=(e*V-s*q+r*S)*B,t[6]=(f*T-g*P-h*E)*B,t[7]=(d*P-u*T+m*E)*B,t[8]=(o*z-a*q+l*x)*B,t[9]=(n*q-e*z-r*x)*B,t[10]=(g*A-b*T+h*y)*B,t[11]=(p*T-d*A-m*y)*B,t[12]=(a*S-o*w-c*x)*B,t[13]=(e*w-n*S+s*x)*B,t[14]=(b*E-g*R-f*y)*B,t[15]=(d*R-p*E+u*y)*B,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,p=a+a,u=r*l,m=r*d,g=r*p,b=o*d,f=o*p,h=a*p,y=c*l,E=c*d,T=c*p,R=n.x,A=n.y,P=n.z;return s[0]=(1-(b+h))*R,s[1]=(m+T)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(m-T)*A,s[5]=(1-(u+h))*A,s[6]=(f+y)*A,s[7]=0,s[8]=(g+E)*P,s[9]=(f-y)*P,s[10]=(1-(u+b))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=nn.set(s[0],s[1],s[2]).length();const a=nn.set(s[4],s[5],s[6]).length(),c=nn.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kt.copy(this);const l=1/o,d=1/a,p=1/c;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=d,kt.elements[5]*=d,kt.elements[6]*=d,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,e.setFromRotationMatrix(kt),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=te,c=!1){const l=this.elements,d=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s);let g,b;if(c)g=r/(o-r),b=o*r/(o-r);else if(a===te)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Gn)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=te,c=!1){const l=this.elements,d=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s);let g,b;if(c)g=1/(o-r),b=o/(o-r);else if(a===te)g=-2/(o-r),b=-(o+r)/(o-r);else if(a===Gn)g=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const nn=new I,kt=new O0,K1=new I(0,0,0),J1=new I(1,1,1),Ee=new I,Qn=new I,Ft=new I,vo=new O0,yo=new Ne;class oe{constructor(t=0,e=0,n=0,s=oe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(G0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-G0(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(G0(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-G0(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(G0(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-G0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:P0("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yo.setFromEuler(this),this.setFromQuaternion(yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}oe.DEFAULT_ORDER="XYZ";class kr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Q1=0;const bo=new I,sn=new Ne,he=new O0,ti=new I,Rn=new I,tl=new I,el=new Ne,Mo=new I(1,0,0),So=new I(0,1,0),Eo=new I(0,0,1),To={type:"added"},nl={type:"removed"},rn={type:"childadded",child:null},Qi={type:"childremoved",child:null};class yt extends Ze{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const t=new I,e=new oe,n=new Ne,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new O0},normalMatrix:{value:new N0}}),this.matrix=new O0,this.matrixWorld=new O0,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return sn.setFromAxisAngle(t,e),this.quaternion.multiply(sn),this}rotateOnWorldAxis(t,e){return sn.setFromAxisAngle(t,e),this.quaternion.premultiply(sn),this}rotateX(t){return this.rotateOnAxis(Mo,t)}rotateY(t){return this.rotateOnAxis(So,t)}rotateZ(t){return this.rotateOnAxis(Eo,t)}translateOnAxis(t,e){return bo.copy(t).applyQuaternion(this.quaternion),this.position.add(bo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mo,t)}translateY(t){return this.translateOnAxis(So,t)}translateZ(t){return this.translateOnAxis(Eo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(he.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ti.copy(t):ti.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Rn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?he.lookAt(Rn,ti,this.up):he.lookAt(ti,Rn,this.up),this.quaternion.setFromRotationMatrix(he),s&&(he.extractRotation(s.matrixWorld),sn.setFromRotationMatrix(he),this.quaternion.premultiply(sn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Y0("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(To),rn.child=t,this.dispatchEvent(rn),rn.child=null):Y0("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nl),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),he.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),he.multiply(t.parent.matrixWorld)),t.applyMatrix4(he),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(To),rn.child=t,this.dispatchEvent(rn),rn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rn,t,tl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rn,el,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),p=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const il={type:"move"};class ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const b of t.hand.values()){const f=e.getJointPose(b,n),h=this._getHandJoint(l,b);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(il)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new zn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Ua={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Te={h:0,s:0,l:0},ei={h:0,s:0,l:0};function es(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class X0{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,q0.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=q0.workingColorSpace){return this.r=t,this.g=e,this.b=n,q0.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=q0.workingColorSpace){if(t=G1(t,1),e=G0(e,0,1),n=G0(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=es(o,r,t+1/3),this.g=es(o,r,t),this.b=es(o,r,t-1/3)}return q0.colorSpaceToWorking(this,s),this}setStyle(t,e=zt){function n(r){r!==void 0&&parseFloat(r)<1&&P0("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:P0("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);P0("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){const n=Ua[t.toLowerCase()];return n!==void 0?this.setHex(n,e):P0("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xe(t.r),this.g=xe(t.g),this.b=xe(t.b),this}copyLinearToSRGB(t){return this.r=xn(t.r),this.g=xn(t.g),this.b=xn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return q0.workingToColorSpace(St.copy(this),t),Math.round(G0(St.r*255,0,255))*65536+Math.round(G0(St.g*255,0,255))*256+Math.round(G0(St.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=q0.workingColorSpace){q0.workingToColorSpace(St.copy(this),e);const n=St.r,s=St.g,r=St.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=d<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=q0.workingColorSpace){return q0.workingToColorSpace(St.copy(this),e),t.r=St.r,t.g=St.g,t.b=St.b,t}getStyle(t=zt){q0.workingToColorSpace(St.copy(this),t);const e=St.r,n=St.g,s=St.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Te),this.setHSL(Te.h+t,Te.s+e,Te.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Te),t.getHSL(ei);const n=$i(Te.h,ei.h,e),s=$i(Te.s,ei.s,e),r=$i(Te.l,ei.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new X0;X0.NAMES=Ua;class ns extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oe,this.environmentIntensity=1,this.environmentRotation=new oe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gt=new I,ue=new I,is=new I,de=new I,on=new I,an=new I,Ao=new I,ss=new I,rs=new I,os=new I,as=new at,ls=new at,cs=new at;class Yt{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gt.subVectors(t,e),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gt.subVectors(s,e),ue.subVectors(n,e),is.subVectors(t,e);const o=Gt.dot(Gt),a=Gt.dot(ue),c=Gt.dot(is),l=ue.dot(ue),d=ue.dot(is),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(l*c-a*d)*u,g=(o*d-a*c)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,de)===null?!1:de.x>=0&&de.y>=0&&de.x+de.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,de)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,de.x),c.addScaledVector(o,de.y),c.addScaledVector(a,de.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return as.setScalar(0),ls.setScalar(0),cs.setScalar(0),as.fromBufferAttribute(t,e),ls.fromBufferAttribute(t,n),cs.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(as,r.x),o.addScaledVector(ls,r.y),o.addScaledVector(cs,r.z),o}static isFrontFacing(t,e,n,s){return Gt.subVectors(n,e),ue.subVectors(t,e),Gt.cross(ue).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gt.subVectors(this.c,this.b),ue.subVectors(this.a,this.b),Gt.cross(ue).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yt.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Yt.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Yt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;on.subVectors(s,n),an.subVectors(r,n),ss.subVectors(t,n);const c=on.dot(ss),l=an.dot(ss);if(c<=0&&l<=0)return e.copy(n);rs.subVectors(t,s);const d=on.dot(rs),p=an.dot(rs);if(d>=0&&p<=d)return e.copy(s);const u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(on,o);os.subVectors(t,r);const m=on.dot(os),g=an.dot(os);if(g>=0&&m<=g)return e.copy(r);const b=m*l-c*g;if(b<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(an,a);const f=d*g-m*p;if(f<=0&&p-d>=0&&m-g>=0)return Ao.subVectors(r,s),a=(p-d)/(p-d+(m-g)),e.copy(s).addScaledVector(Ao,a);const h=1/(f+b+u);return o=b*h,a=u*h,e.copy(n).addScaledVector(on,o).addScaledVector(an,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ke{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wt.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wt.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wt):Wt.fromBufferAttribute(r,o),Wt.applyMatrix4(t.matrixWorld),this.expandByPoint(Wt);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ni.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ni.copy(n.boundingBox)),ni.applyMatrix4(t.matrixWorld),this.union(ni)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wt),Wt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pn),ii.subVectors(this.max,Pn),ln.subVectors(t.a,Pn),cn.subVectors(t.b,Pn),hn.subVectors(t.c,Pn),Ae.subVectors(cn,ln),we.subVectors(hn,cn),ze.subVectors(ln,hn);let e=[0,-Ae.z,Ae.y,0,-we.z,we.y,0,-ze.z,ze.y,Ae.z,0,-Ae.x,we.z,0,-we.x,ze.z,0,-ze.x,-Ae.y,Ae.x,0,-we.y,we.x,0,-ze.y,ze.x,0];return!hs(e,ln,cn,hn,ii)||(e=[1,0,0,0,1,0,0,0,1],!hs(e,ln,cn,hn,ii))?!1:(si.crossVectors(Ae,we),e=[si.x,si.y,si.z],hs(e,ln,cn,hn,ii))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wt).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wt).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const fe=[new I,new I,new I,new I,new I,new I,new I,new I],Wt=new I,ni=new Ke,ln=new I,cn=new I,hn=new I,Ae=new I,we=new I,ze=new I,Pn=new I,ii=new I,si=new I,Ve=new I;function hs(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ve.fromArray(i,r);const a=s.x*Math.abs(Ve.x)+s.y*Math.abs(Ve.y)+s.z*Math.abs(Ve.z),c=t.dot(Ve),l=e.dot(Ve),d=n.dot(Ve);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const dt=new I,ri=new I0;let sl=0;class jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sl++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ri.fromBufferAttribute(this,e),ri.applyMatrix3(t),this.setXY(e,ri.x,ri.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)dt.fromBufferAttribute(this,e),dt.applyMatrix3(t),this.setXYZ(e,dt.x,dt.y,dt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)dt.fromBufferAttribute(this,e),dt.applyMatrix4(t),this.setXYZ(e,dt.x,dt.y,dt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dt.fromBufferAttribute(this,e),dt.applyNormalMatrix(t),this.setXYZ(e,dt.x,dt.y,dt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dt.fromBufferAttribute(this,e),dt.transformDirection(t),this.setXYZ(e,dt.x,dt.y,dt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Cn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ct(e,this.array),n=Ct(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ct(e,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ct(e,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uo&&(t.usage=this.usage),t}}class Fa extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Na extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tt extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const rl=new Ke,Dn=new I,us=new I;class En{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):rl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dn.subVectors(t,this.center);const e=Dn.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Dn,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(us.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dn.copy(t.center).add(us)),this.expandByPoint(Dn.copy(t.center).sub(us))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let ol=0;const Bt=new O0,ds=new yt,un=new I,Nt=new Ke,Ln=new Ke,gt=new I;class It extends Ze{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(z1(t)?Na:Fa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new N0().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bt.makeRotationFromQuaternion(t),this.applyMatrix4(Bt),this}rotateX(t){return Bt.makeRotationX(t),this.applyMatrix4(Bt),this}rotateY(t){return Bt.makeRotationY(t),this.applyMatrix4(Bt),this}rotateZ(t){return Bt.makeRotationZ(t),this.applyMatrix4(Bt),this}translate(t,e,n){return Bt.makeTranslation(t,e,n),this.applyMatrix4(Bt),this}scale(t,e,n){return Bt.makeScale(t,e,n),this.applyMatrix4(Bt),this}lookAt(t){return ds.lookAt(t),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(un).negate(),this.translate(un.x,un.y,un.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&P0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Y0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Y0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new En);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Y0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,Ln.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,Ln.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(Ln.min),Nt.expandByPoint(Ln.max))}Nt.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)gt.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gt));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)gt.fromBufferAttribute(a,l),c&&(un.fromBufferAttribute(t,l),gt.add(un)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Y0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Y0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new I,c[x]=new I;const l=new I,d=new I,p=new I,u=new I0,m=new I0,g=new I0,b=new I,f=new I;function h(x,S,q){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,q),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,q),d.sub(l),p.sub(l),m.sub(u),g.sub(u);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(w),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(w),a[x].add(b),a[S].add(b),a[q].add(b),c[x].add(f),c[S].add(f),c[q].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,S=y.length;x<S;++x){const q=y[x],w=q.start,z=q.count;for(let V=w,X=w+z;V<X;V+=3)h(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const E=new I,T=new I,R=new I,A=new I;function P(x){R.fromBufferAttribute(s,x),A.copy(R);const S=a[x];E.copy(S),E.sub(R.multiplyScalar(R.dot(S))).normalize(),T.crossVectors(A,S);const w=T.dot(c[x])<0?-1:1;o.setXYZW(x,E.x,E.y,E.z,w)}for(let x=0,S=y.length;x<S;++x){const q=y[x],w=q.start,z=q.count;for(let V=w,X=w+z;V<X;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,d=new I,p=new I;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),b=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,f),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,f),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gt.fromBufferAttribute(t,e),gt.normalize(),t.setXYZ(e,gt.x,gt.y,gt.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,p=a.normalized,u=new l.constructor(c.length*d);let m=0,g=0;for(let b=0,f=c.length;b<f;b++){a.isInterleavedBufferAttribute?m=c[b]*a.data.stride+a.offset:m=c[b]*d;for(let h=0;h<d;h++)u[g++]=l[m++]}return new jt(u,d,p)}if(this.index===null)return P0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new It,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,p=l.length;d<p;d++){const u=l[d],m=t(u,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){const m=l[p];d.push(m.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],p=r[l];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let al=0;class Tn extends Ze{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:al++}),this.uuid=qn(),this.name="",this.type="Material",this.blending=gn,this.side=Fe,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Is,this.blendEquation=Xe,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new X0(0,0,0),this.blendAlpha=0,this.depthFunc=vn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tn,this.stencilZFail=tn,this.stencilZPass=tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){P0(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){P0(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gn&&(n.blending=this.blending),this.side!==Fe&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ls&&(n.blendSrc=this.blendSrc),this.blendDst!==Is&&(n.blendDst=this.blendDst),this.blendEquation!==Xe&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const pe=new I,fs=new I,oi=new I,Ce=new I,ps=new I,ai=new I,ms=new I;class zi{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pe.copy(this.origin).addScaledVector(this.direction,e),pe.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){fs.copy(t).add(e).multiplyScalar(.5),oi.copy(e).sub(t).normalize(),Ce.copy(this.origin).sub(fs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(oi),a=Ce.dot(this.direction),c=-Ce.dot(oi),l=Ce.lengthSq(),d=Math.abs(1-o*o);let p,u,m,g;if(d>0)if(p=o*c-a,u=o*a-c,g=r*d,p>=0)if(u>=-g)if(u<=g){const b=1/d;p*=b,u*=b,m=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u<=-g?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l):u<=g?(p=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(fs).addScaledVector(oi,u),m}intersectSphere(t,e){pe.subVectors(t.center,this.origin);const n=pe.dot(this.direction),s=pe.dot(pe)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-u.z)*p,c=(t.max.z-u.z)*p):(a=(t.max.z-u.z)*p,c=(t.min.z-u.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pe)!==null}intersectTriangle(t,e,n,s,r){ps.subVectors(e,t),ai.subVectors(n,t),ms.crossVectors(ps,ai);let o=this.direction.dot(ms),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ce.subVectors(this.origin,t);const c=a*this.direction.dot(ai.crossVectors(Ce,ai));if(c<0)return null;const l=a*this.direction.dot(ps.cross(Ce));if(l<0||c+l>o)return null;const d=-a*Ce.dot(ms);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fi extends Tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new X0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oe,this.combine=Dr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wo=new O0,He=new zi,li=new En,Co=new I,ci=new I,hi=new I,ui=new I,_s=new I,di=new I,Ro=new I,fi=new I;class Vt extends yt{constructor(t=new It,e=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){di.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],p=r[c];d!==0&&(_s.fromBufferAttribute(p,t),o?di.addScaledVector(_s,d):di.addScaledVector(_s.sub(e),d))}e.add(di)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),li.copy(n.boundingSphere),li.applyMatrix4(r),He.copy(t.ray).recast(t.near),!(li.containsPoint(He.origin)===!1&&(He.intersectSphere(li,Co)===null||He.origin.distanceToSquared(Co)>(t.far-t.near)**2))&&(wo.copy(r).invert(),He.copy(t.ray).applyMatrix4(wo),!(n.boundingBox!==null&&He.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,He)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){const f=u[g],h=o[f.materialIndex],y=Math.max(f.start,m.start),E=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let T=y,R=E;T<R;T+=3){const A=a.getX(T),P=a.getX(T+1),x=a.getX(T+2);s=pi(this,h,t,n,l,d,p,A,P,x),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let f=g,h=b;f<h;f+=3){const y=a.getX(f),E=a.getX(f+1),T=a.getX(f+2);s=pi(this,o,t,n,l,d,p,y,E,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){const f=u[g],h=o[f.materialIndex],y=Math.max(f.start,m.start),E=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let T=y,R=E;T<R;T+=3){const A=T,P=T+1,x=T+2;s=pi(this,h,t,n,l,d,p,A,P,x),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let f=g,h=b;f<h;f+=3){const y=f,E=f+1,T=f+2;s=pi(this,o,t,n,l,d,p,y,E,T),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function ll(i,t,e,n,s,r,o,a){let c;if(t.side===Lt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Fe,a),c===null)return null;fi.copy(a),fi.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(fi);return l<e.near||l>e.far?null:{distance:l,point:fi.clone(),object:i}}function pi(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ci),i.getVertexPosition(c,hi),i.getVertexPosition(l,ui);const d=ll(i,t,e,n,ci,hi,ui,Ro);if(d){const p=new I;Yt.getBarycoord(Ro,ci,hi,ui,p),s&&(d.uv=Yt.getInterpolatedAttribute(s,a,c,l,p,new I0)),r&&(d.uv1=Yt.getInterpolatedAttribute(r,a,c,l,p,new I0)),o&&(d.normal=Yt.getInterpolatedAttribute(o,a,c,l,p,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};Yt.getNormal(ci,hi,ui,u.normal),d.face=u,d.barycoord=p}return d}class Oa extends wt{constructor(t=null,e=1,n=1,s,r,o,a,c,l=vt,d=vt,p,u){super(null,o,a,c,l,d,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po extends jt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const dn=new O0,Do=new O0,mi=[],Lo=new Ke,cl=new O0,In=new Vt,Un=new En;class _i extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cl)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ke),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,dn),Lo.copy(t.boundingBox).applyMatrix4(dn),this.boundingBox.union(Lo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new En),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,dn),Un.copy(t.boundingSphere).applyMatrix4(dn),this.boundingSphere.union(Un)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(In.geometry=this.geometry,In.material=this.material,In.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Un.copy(this.boundingSphere),Un.applyMatrix4(n),t.ray.intersectsSphere(Un)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,dn),Do.multiplyMatrices(n,dn),In.matrixWorld=Do,In.raycast(t,mi);for(let o=0,a=mi.length;o<a;o++){const c=mi[o];c.instanceId=r,c.object=this,e.push(c)}mi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oa(new Float32Array(s*this.count),s,this.count,Fr,qt));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gs=new I,hl=new I,ul=new N0;class De{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=gs.subVectors(n,e).cross(hl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(gs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ul.getNormalMatrix(t),s=this.coplanarPoint(gs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ke=new En,dl=new I0(.5,.5),gi=new I;class Gr{constructor(t=new De,e=new De,n=new De,s=new De,r=new De,o=new De){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=te,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],p=r[5],u=r[6],m=r[7],g=r[8],b=r[9],f=r[10],h=r[11],y=r[12],E=r[13],T=r[14],R=r[15];if(s[0].setComponents(l-o,m-d,h-g,R-y).normalize(),s[1].setComponents(l+o,m+d,h+g,R+y).normalize(),s[2].setComponents(l+a,m+p,h+b,R+E).normalize(),s[3].setComponents(l-a,m-p,h-b,R-E).normalize(),n)s[4].setComponents(c,u,f,T).normalize(),s[5].setComponents(l-c,m-u,h-f,R-T).normalize();else if(s[4].setComponents(l-c,m-u,h-f,R-T).normalize(),e===te)s[5].setComponents(l+c,m+u,h+f,R+T).normalize();else if(e===Gn)s[5].setComponents(c,u,f,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ke.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ke.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ke)}intersectsSprite(t){ke.center.set(0,0,0);const e=dl.distanceTo(t.center);return ke.radius=.7071067811865476+e,ke.applyMatrix4(t.matrixWorld),this.intersectsSphere(ke)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(gi.x=s.normal.x>0?t.max.x:t.min.x,gi.y=s.normal.y>0?t.max.y:t.min.y,gi.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(gi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Mr extends Tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new X0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ni=new I,Oi=new I,Io=new O0,Fn=new zi,xi=new En,xs=new I,Uo=new I;class Fo extends yt{constructor(t=new It,e=new Mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ni.fromBufferAttribute(e,s-1),Oi.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ni.distanceTo(Oi);t.setAttribute("lineDistance",new Tt(n,1))}else P0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(s),xi.radius+=r,t.ray.intersectsSphere(xi)===!1)return;Io.copy(s).invert(),Fn.copy(t.ray).applyMatrix4(Io);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=m,f=g-1;b<f;b+=l){const h=d.getX(b),y=d.getX(b+1),E=vi(this,t,Fn,c,h,y,b);E&&e.push(E)}if(this.isLineLoop){const b=d.getX(g-1),f=d.getX(m),h=vi(this,t,Fn,c,b,f,g-1);h&&e.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=m,f=g-1;b<f;b+=l){const h=vi(this,t,Fn,c,b,b+1,b);h&&e.push(h)}if(this.isLineLoop){const b=vi(this,t,Fn,c,g-1,m,g-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function vi(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Ni.fromBufferAttribute(a,s),Oi.fromBufferAttribute(a,r),e.distanceSqToSegment(Ni,Oi,xs,Uo)>n)return;xs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(xs);if(!(l<t.near||l>t.far))return{distance:l,point:Uo.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class Ba extends wt{constructor(t=[],e=je,n,s,r,o,a,c,l,d){super(t,e,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Wn extends wt{constructor(t,e,n=re,s,r,o,a=vt,c=vt,l,d=ye,p=1){if(d!==ye&&d!==$e)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:p};super(u,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class fl extends Wn{constructor(t,e=re,n=je,s,r,o=vt,a=vt,c,l=ye){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class za extends wt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class $n extends It{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function g(b,f,h,y,E,T,R,A,P,x,S){const q=T/P,w=R/x,z=T/2,V=R/2,X=A/2,B=P+1,H=x+1;let F=0,K=0;const j=new I;for(let a0=0;a0<H;a0++){const d0=a0*w-V;for(let J=0;J<B;J++){const m0=J*q-z;j[b]=m0*y,j[f]=d0*E,j[h]=X,l.push(j.x,j.y,j.z),j[b]=0,j[f]=0,j[h]=A>0?1:-1,d.push(j.x,j.y,j.z),p.push(J/P),p.push(1-a0/x),F+=1}}for(let a0=0;a0<x;a0++)for(let d0=0;d0<P;d0++){const J=u+d0+B*a0,m0=u+d0+B*(a0+1),F0=u+(d0+1)+B*(a0+1),z0=u+(d0+1)+B*a0;c.push(J,m0,z0),c.push(m0,F0,z0),K+=6}a.addGroup(m,K,S),m+=K,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Wr extends It{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,d=new I0;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=e;p++,u+=3){const m=n+p/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/t+1)/2,d.y=(o[u+1]/t+1)/2,c.push(d.x,d.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class jn extends It{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,p=t/a,u=e/c,m=[],g=[],b=[],f=[];for(let h=0;h<d;h++){const y=h*u-o;for(let E=0;E<l;E++){const T=E*p-r;g.push(T,-y,0),b.push(0,0,1),f.push(E/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const E=y+l*h,T=y+l*(h+1),R=y+1+l*(h+1),A=y+1+l*h;m.push(E,T,A),m.push(T,R,A)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xr extends It{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],p=new I,u=new I,m=[],g=[],b=[],f=[];for(let h=0;h<=n;h++){const y=[],E=h/n;let T=0;h===0&&o===0?T=.5/e:h===n&&c===Math.PI&&(T=-.5/e);for(let R=0;R<=e;R++){const A=R/e;p.x=-t*Math.cos(s+A*r)*Math.sin(o+E*a),p.y=t*Math.cos(o+E*a),p.z=t*Math.sin(s+A*r)*Math.sin(o+E*a),g.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),f.push(A+T,1-E),y.push(l++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const E=d[h][y+1],T=d[h][y],R=d[h+1][y],A=d[h+1][y+1];(h!==0||o>0)&&m.push(E,T,A),(h!==n-1||c<Math.PI)&&m.push(T,R,A)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Sn(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(P0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function At(i){const t={};for(let e=0;e<i.length;e++){const n=Sn(i[e]);for(const s in n)t[s]=n[s]}return t}function pl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Va(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:q0.workingColorSpace}const ml={clone:Sn,merge:At};var _l=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ae extends Tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_l,this.fragmentShader=gl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sn(t.uniforms),this.uniformsGroups=pl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class xl extends ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vl extends Tn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new X0(16777215),this.specular=new X0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new X0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Da,this.normalScale=new I0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oe,this.combine=Dr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yl extends Tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bl extends Tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ha extends yt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new X0(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const vs=new O0,No=new I,Oo=new I;class Ml{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new I0(512,512),this.mapType=Ot,this.map=null,this.mapPass=null,this.matrix=new O0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new I0(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;No.setFromMatrixPosition(t.matrixWorld),e.position.copy(No),Oo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oo),e.updateMatrixWorld(),vs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vs,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Gn||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yi=new I,bi=new Ne,Kt=new I;class ka extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new O0,this.projectionMatrix=new O0,this.projectionMatrixInverse=new O0,this.coordinateSystem=te,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(yi,bi,Kt),Kt.x===1&&Kt.y===1&&Kt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yi,bi,Kt.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(yi,bi,Kt),Kt.x===1&&Kt.y===1&&Kt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yi,bi,Kt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Re=new I,Bo=new I0,zo=new I0;class Pt extends ka{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=br*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return br*2*Math.atan(Math.tan(Pi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Re.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Re.x,Re.y).multiplyScalar(-t/Re.z),Re.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Re.x,Re.y).multiplyScalar(-t/Re.z)}getViewSize(t,e){return this.getViewBounds(t,Bo,zo),e.subVectors(zo,Bo)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Pi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Yr extends ka{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Sl extends Ml{constructor(){super(new Yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class El extends Ha{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Sl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Tl extends Ha{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const fn=-90,pn=1;class Al extends yt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pt(fn,pn,t,e);s.layers=this.layers,this.add(s);const r=new Pt(fn,pn,t,e);r.layers=this.layers,this.add(r);const o=new Pt(fn,pn,t,e);o.layers=this.layers,this.add(o);const a=new Pt(fn,pn,t,e);a.layers=this.layers,this.add(a);const c=new Pt(fn,pn,t,e);c.layers=this.layers,this.add(c);const l=new Pt(fn,pn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===te)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gn)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wl extends Pt{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Vo=new O0;class Cl{constructor(t,e,n=0,s=1/0){this.ray=new zi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new kr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Y0("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vo),this}intersectObject(t,e=!0,n=[]){return Sr(t,this,n,e),n.sort(Ho),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sr(t[s],this,n,e);return n.sort(Ho),n}}function Ho(i,t){return i.distance-t.distance}function Sr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Sr(r[o],t,e,!0)}}class ko{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=G0(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(G0(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rl extends Ze{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){P0("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Go(i,t,e,n){const s=Pl(n);switch(e){case Ra:return i*t;case Fr:return i*t/s.components*s.byteLength;case Nr:return i*t/s.components*s.byteLength;case bn:return i*t*2/s.components*s.byteLength;case Or:return i*t*2/s.components*s.byteLength;case Pa:return i*t*3/s.components*s.byteLength;case $t:return i*t*4/s.components*s.byteLength;case Br:return i*t*4/s.components*s.byteLength;case Ai:case wi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ci:case Ri:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ws:case Ys:return Math.max(i,16)*Math.max(t,8)/4;case Gs:case Xs:return Math.max(i,8)*Math.max(t,8)/2;case qs:case $s:case Zs:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case er:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ir:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case or:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ar:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case lr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ur:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pr:case mr:case _r:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gr:case xr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case vr:case yr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Pl(i){switch(i){case Ot:case Ta:return{byteLength:1,components:1};case Hn:case Aa:case ve:return{byteLength:2,components:1};case Ir:case Ur:return{byteLength:2,components:4};case re:case Lr:case qt:return{byteLength:4,components:1};case wa:case Ca:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pr}}));typeof window<"u"&&(window.__THREE__?P0("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pr);function Ga(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Dl(i){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const d=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,d);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,p[u]=b)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const b=p[m];i.bufferSubData(l,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Ll=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Il=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ul=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ol=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vl=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ql=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$l=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jl=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ql=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ec=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ic=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,sc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ac=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lc="gl_FragColor = linearToOutputTexel( gl_FragColor );",cc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_c=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ec=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Tc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ac=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pc=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ic=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Uc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hc=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qc=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$c=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zc=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,th=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ih=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ah=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_h=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Th=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ah=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ph=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,su=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ru=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ou=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,au=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,B0={alphahash_fragment:Ll,alphahash_pars_fragment:Il,alphamap_fragment:Ul,alphamap_pars_fragment:Fl,alphatest_fragment:Nl,alphatest_pars_fragment:Ol,aomap_fragment:Bl,aomap_pars_fragment:zl,batching_pars_vertex:Vl,batching_vertex:Hl,begin_vertex:kl,beginnormal_vertex:Gl,bsdfs:Wl,iridescence_fragment:Xl,bumpmap_pars_fragment:Yl,clipping_planes_fragment:ql,clipping_planes_pars_fragment:$l,clipping_planes_pars_vertex:jl,clipping_planes_vertex:Zl,color_fragment:Kl,color_pars_fragment:Jl,color_pars_vertex:Ql,color_vertex:tc,common:ec,cube_uv_reflection_fragment:nc,defaultnormal_vertex:ic,displacementmap_pars_vertex:sc,displacementmap_vertex:rc,emissivemap_fragment:oc,emissivemap_pars_fragment:ac,colorspace_fragment:lc,colorspace_pars_fragment:cc,envmap_fragment:hc,envmap_common_pars_fragment:uc,envmap_pars_fragment:dc,envmap_pars_vertex:fc,envmap_physical_pars_fragment:Ec,envmap_vertex:pc,fog_vertex:mc,fog_pars_vertex:_c,fog_fragment:gc,fog_pars_fragment:xc,gradientmap_pars_fragment:vc,lightmap_pars_fragment:yc,lights_lambert_fragment:bc,lights_lambert_pars_fragment:Mc,lights_pars_begin:Sc,lights_toon_fragment:Tc,lights_toon_pars_fragment:Ac,lights_phong_fragment:wc,lights_phong_pars_fragment:Cc,lights_physical_fragment:Rc,lights_physical_pars_fragment:Pc,lights_fragment_begin:Dc,lights_fragment_maps:Lc,lights_fragment_end:Ic,logdepthbuf_fragment:Uc,logdepthbuf_pars_fragment:Fc,logdepthbuf_pars_vertex:Nc,logdepthbuf_vertex:Oc,map_fragment:Bc,map_pars_fragment:zc,map_particle_fragment:Vc,map_particle_pars_fragment:Hc,metalnessmap_fragment:kc,metalnessmap_pars_fragment:Gc,morphinstance_vertex:Wc,morphcolor_vertex:Xc,morphnormal_vertex:Yc,morphtarget_pars_vertex:qc,morphtarget_vertex:$c,normal_fragment_begin:jc,normal_fragment_maps:Zc,normal_pars_fragment:Kc,normal_pars_vertex:Jc,normal_vertex:Qc,normalmap_pars_fragment:th,clearcoat_normal_fragment_begin:eh,clearcoat_normal_fragment_maps:nh,clearcoat_pars_fragment:ih,iridescence_pars_fragment:sh,opaque_fragment:rh,packing:oh,premultiplied_alpha_fragment:ah,project_vertex:lh,dithering_fragment:ch,dithering_pars_fragment:hh,roughnessmap_fragment:uh,roughnessmap_pars_fragment:dh,shadowmap_pars_fragment:fh,shadowmap_pars_vertex:ph,shadowmap_vertex:mh,shadowmask_pars_fragment:_h,skinbase_vertex:gh,skinning_pars_vertex:xh,skinning_vertex:vh,skinnormal_vertex:yh,specularmap_fragment:bh,specularmap_pars_fragment:Mh,tonemapping_fragment:Sh,tonemapping_pars_fragment:Eh,transmission_fragment:Th,transmission_pars_fragment:Ah,uv_pars_fragment:wh,uv_pars_vertex:Ch,uv_vertex:Rh,worldpos_vertex:Ph,background_vert:Dh,background_frag:Lh,backgroundCube_vert:Ih,backgroundCube_frag:Uh,cube_vert:Fh,cube_frag:Nh,depth_vert:Oh,depth_frag:Bh,distance_vert:zh,distance_frag:Vh,equirect_vert:Hh,equirect_frag:kh,linedashed_vert:Gh,linedashed_frag:Wh,meshbasic_vert:Xh,meshbasic_frag:Yh,meshlambert_vert:qh,meshlambert_frag:$h,meshmatcap_vert:jh,meshmatcap_frag:Zh,meshnormal_vert:Kh,meshnormal_frag:Jh,meshphong_vert:Qh,meshphong_frag:tu,meshphysical_vert:eu,meshphysical_frag:nu,meshtoon_vert:iu,meshtoon_frag:su,points_vert:ru,points_frag:ou,shadow_vert:au,shadow_frag:lu,sprite_vert:cu,sprite_frag:hu},l0={common:{diffuse:{value:new X0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new N0},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new N0}},envmap:{envMap:{value:null},envMapRotation:{value:new N0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new N0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new N0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new N0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new N0},normalScale:{value:new I0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new N0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new N0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new N0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new N0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new X0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new X0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0},uvTransform:{value:new N0}},sprite:{diffuse:{value:new X0(16777215)},opacity:{value:1},center:{value:new I0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new N0},alphaMap:{value:null},alphaMapTransform:{value:new N0},alphaTest:{value:0}}},Qt={basic:{uniforms:At([l0.common,l0.specularmap,l0.envmap,l0.aomap,l0.lightmap,l0.fog]),vertexShader:B0.meshbasic_vert,fragmentShader:B0.meshbasic_frag},lambert:{uniforms:At([l0.common,l0.specularmap,l0.envmap,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.fog,l0.lights,{emissive:{value:new X0(0)},envMapIntensity:{value:1}}]),vertexShader:B0.meshlambert_vert,fragmentShader:B0.meshlambert_frag},phong:{uniforms:At([l0.common,l0.specularmap,l0.envmap,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.fog,l0.lights,{emissive:{value:new X0(0)},specular:{value:new X0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:B0.meshphong_vert,fragmentShader:B0.meshphong_frag},standard:{uniforms:At([l0.common,l0.envmap,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.roughnessmap,l0.metalnessmap,l0.fog,l0.lights,{emissive:{value:new X0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:B0.meshphysical_vert,fragmentShader:B0.meshphysical_frag},toon:{uniforms:At([l0.common,l0.aomap,l0.lightmap,l0.emissivemap,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.gradientmap,l0.fog,l0.lights,{emissive:{value:new X0(0)}}]),vertexShader:B0.meshtoon_vert,fragmentShader:B0.meshtoon_frag},matcap:{uniforms:At([l0.common,l0.bumpmap,l0.normalmap,l0.displacementmap,l0.fog,{matcap:{value:null}}]),vertexShader:B0.meshmatcap_vert,fragmentShader:B0.meshmatcap_frag},points:{uniforms:At([l0.points,l0.fog]),vertexShader:B0.points_vert,fragmentShader:B0.points_frag},dashed:{uniforms:At([l0.common,l0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:B0.linedashed_vert,fragmentShader:B0.linedashed_frag},depth:{uniforms:At([l0.common,l0.displacementmap]),vertexShader:B0.depth_vert,fragmentShader:B0.depth_frag},normal:{uniforms:At([l0.common,l0.bumpmap,l0.normalmap,l0.displacementmap,{opacity:{value:1}}]),vertexShader:B0.meshnormal_vert,fragmentShader:B0.meshnormal_frag},sprite:{uniforms:At([l0.sprite,l0.fog]),vertexShader:B0.sprite_vert,fragmentShader:B0.sprite_frag},background:{uniforms:{uvTransform:{value:new N0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:B0.background_vert,fragmentShader:B0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new N0}},vertexShader:B0.backgroundCube_vert,fragmentShader:B0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:B0.cube_vert,fragmentShader:B0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:B0.equirect_vert,fragmentShader:B0.equirect_frag},distance:{uniforms:At([l0.common,l0.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:B0.distance_vert,fragmentShader:B0.distance_frag},shadow:{uniforms:At([l0.lights,l0.fog,{color:{value:new X0(0)},opacity:{value:1}}]),vertexShader:B0.shadow_vert,fragmentShader:B0.shadow_frag}};Qt.physical={uniforms:At([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new N0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new N0},clearcoatNormalScale:{value:new I0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new N0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new N0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new N0},sheen:{value:0},sheenColor:{value:new X0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new N0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new N0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new N0},transmissionSamplerSize:{value:new I0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new N0},attenuationDistance:{value:0},attenuationColor:{value:new X0(0)},specularColor:{value:new X0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new N0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new N0},anisotropyVector:{value:new I0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new N0}}]),vertexShader:B0.meshphysical_vert,fragmentShader:B0.meshphysical_frag};const Mi={r:0,b:0,g:0},Ge=new oe,uu=new O0;function du(i,t,e,n,s,r){const o=new X0(0);let a=s===!0?0:1,c,l,d=null,p=0,u=null;function m(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){const T=y.backgroundBlurriness>0;E=t.get(E,T)}return E}function g(y){let E=!1;const T=m(y);T===null?f(o,a):T&&T.isColor&&(f(T,1),E=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,E){const T=m(E);T&&(T.isCubeTexture||T.mapping===Bi)?(l===void 0&&(l=new Vt(new $n(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:Sn(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Ge.copy(E.backgroundRotation),Ge.x*=-1,Ge.y*=-1,Ge.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ge.y*=-1,Ge.z*=-1),l.material.uniforms.envMap.value=T,l.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uu.makeRotationFromEuler(Ge)),l.material.toneMapped=q0.getTransfer(T.colorSpace)!==Q0,(d!==T||p!==T.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=T,p=T.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Vt(new jn(2,2),new ae({name:"BackgroundMaterial",uniforms:Sn(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=q0.getTransfer(T.colorSpace)!==Q0,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||p!==T.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=T,p=T.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,E){y.getRGB(Mi,Va(i)),e.buffers.color.setClear(Mi.r,Mi.g,Mi.b,E,r)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,f(o,a)},render:g,addToRenderList:b,dispose:h}}function fu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(w,z,V,X,B){let H=!1;const F=p(w,X,V,z);r!==F&&(r=F,l(r.object)),H=m(w,X,V,B),H&&g(w,X,V,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,T(w,z,V,X),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return i.createVertexArray()}function l(w){return i.bindVertexArray(w)}function d(w){return i.deleteVertexArray(w)}function p(w,z,V,X){const B=X.wireframe===!0;let H=n[z.id];H===void 0&&(H={},n[z.id]=H);const F=w.isInstancedMesh===!0?w.id:0;let K=H[F];K===void 0&&(K={},H[F]=K);let j=K[V.id];j===void 0&&(j={},K[V.id]=j);let a0=j[B];return a0===void 0&&(a0=u(c()),j[B]=a0),a0}function u(w){const z=[],V=[],X=[];for(let B=0;B<e;B++)z[B]=0,V[B]=0,X[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:X,object:w,attributes:{},index:null}}function m(w,z,V,X){const B=r.attributes,H=z.attributes;let F=0;const K=V.getAttributes();for(const j in K)if(K[j].location>=0){const d0=B[j];let J=H[j];if(J===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),d0===void 0||d0.attribute!==J||J&&d0.data!==J.data)return!0;F++}return r.attributesNum!==F||r.index!==X}function g(w,z,V,X){const B={},H=z.attributes;let F=0;const K=V.getAttributes();for(const j in K)if(K[j].location>=0){let d0=H[j];d0===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(d0=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(d0=w.instanceColor));const J={};J.attribute=d0,d0&&d0.data&&(J.data=d0.data),B[j]=J,F++}r.attributes=B,r.attributesNum=F,r.index=X}function b(){const w=r.newAttributes;for(let z=0,V=w.length;z<V;z++)w[z]=0}function f(w){h(w,0)}function h(w,z){const V=r.newAttributes,X=r.enabledAttributes,B=r.attributeDivisors;V[w]=1,X[w]===0&&(i.enableVertexAttribArray(w),X[w]=1),B[w]!==z&&(i.vertexAttribDivisor(w,z),B[w]=z)}function y(){const w=r.newAttributes,z=r.enabledAttributes;for(let V=0,X=z.length;V<X;V++)z[V]!==w[V]&&(i.disableVertexAttribArray(V),z[V]=0)}function E(w,z,V,X,B,H,F){F===!0?i.vertexAttribIPointer(w,z,V,B,H):i.vertexAttribPointer(w,z,V,X,B,H)}function T(w,z,V,X){b();const B=X.attributes,H=V.getAttributes(),F=z.defaultAttributeValues;for(const K in H){const j=H[K];if(j.location>=0){let a0=B[K];if(a0===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(a0=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(a0=w.instanceColor)),a0!==void 0){const d0=a0.normalized,J=a0.itemSize,m0=t.get(a0);if(m0===void 0)continue;const F0=m0.buffer,z0=m0.type,G=m0.bytesPerElement,t0=z0===i.INT||z0===i.UNSIGNED_INT||a0.gpuType===Lr;if(a0.isInterleavedBufferAttribute){const n0=a0.data,C0=n0.stride,A0=a0.offset;if(n0.isInstancedInterleavedBuffer){for(let w0=0;w0<j.locationSize;w0++)h(j.location+w0,n0.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=n0.meshPerAttribute*n0.count)}else for(let w0=0;w0<j.locationSize;w0++)f(j.location+w0);i.bindBuffer(i.ARRAY_BUFFER,F0);for(let w0=0;w0<j.locationSize;w0++)E(j.location+w0,J/j.locationSize,z0,d0,C0*G,(A0+J/j.locationSize*w0)*G,t0)}else{if(a0.isInstancedBufferAttribute){for(let n0=0;n0<j.locationSize;n0++)h(j.location+n0,a0.meshPerAttribute);w.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=a0.meshPerAttribute*a0.count)}else for(let n0=0;n0<j.locationSize;n0++)f(j.location+n0);i.bindBuffer(i.ARRAY_BUFFER,F0);for(let n0=0;n0<j.locationSize;n0++)E(j.location+n0,J/j.locationSize,z0,d0,J*G,J/j.locationSize*n0*G,t0)}}else if(F!==void 0){const d0=F[K];if(d0!==void 0)switch(d0.length){case 2:i.vertexAttrib2fv(j.location,d0);break;case 3:i.vertexAttrib3fv(j.location,d0);break;case 4:i.vertexAttrib4fv(j.location,d0);break;default:i.vertexAttrib1fv(j.location,d0)}}}}y()}function R(){S();for(const w in n){const z=n[w];for(const V in z){const X=z[V];for(const B in X){const H=X[B];for(const F in H)d(H[F].object),delete H[F];delete X[B]}}delete n[w]}}function A(w){if(n[w.id]===void 0)return;const z=n[w.id];for(const V in z){const X=z[V];for(const B in X){const H=X[B];for(const F in H)d(H[F].object),delete H[F];delete X[B]}}delete n[w.id]}function P(w){for(const z in n){const V=n[z];for(const X in V){const B=V[X];if(B[w.id]===void 0)continue;const H=B[w.id];for(const F in H)d(H[F].object),delete H[F];delete B[w.id]}}}function x(w){for(const z in n){const V=n[z],X=w.isInstancedMesh===!0?w.id:0,B=V[X];if(B!==void 0){for(const H in B){const F=B[H];for(const K in F)d(F[K].object),delete F[K];delete B[H]}delete V[X],Object.keys(V).length===0&&delete n[z]}}}function S(){q(),o=!0,r!==s&&(r=s,l(r.object))}function q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:q,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:f,disableUnusedAttributes:y}}function pu(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,p){p!==0&&(i.drawArraysInstanced(n,l,d,p),e.update(d,n,p))}function a(l,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,n,1)}function c(l,d,p,u){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],d[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,p);let g=0;for(let b=0;b<p;b++)g+=d[b]*u[b];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function mu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==$t&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===ve&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ot&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==qt&&!x)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(P0("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:T,maxSamples:R,samples:A}}function _u(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new De,a=new N0,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=d(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,b=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?d(null):l();else{const y=r?0:n,E=y*4;let T=h.clippingState||null;c.value=T,T=d(g,u,E,m);for(let R=0;R!==E;++R)T[R]=e[R];h.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,u,m,g){const b=p!==null?p.length:0;let f=null;if(b!==0){if(f=c.value,g!==!0||f===null){const h=m+b*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<h)&&(f=new Float32Array(h));for(let E=0,T=m;E!==b;++E,T+=4)o.copy(p[E]).applyMatrix4(y,a),o.normal.toArray(f,T),f[T+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}const Ue=4,Wo=[.125,.215,.35,.446,.526,.582],Ye=20,gu=256,Nn=new Yr,Xo=new X0;let ys=null,bs=0,Ms=0,Ss=!1;const xu=new I;class Yo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=xu}=r;ys=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ys,bs,Ms),this._renderer.xr.enabled=Ss,t.scissorTest=!1,mn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===je||t.mapping===yn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ys=this._renderer.getRenderTarget(),bs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:ve,format:$t,colorSpace:Mn,depthBuffer:!1},s=qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qo(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vu(r)),this._blurMaterial=bu(r,t,e),this._ggxMaterial=yu(r,t,e)}return s}_compileMaterial(t){const e=new Vt(new It,t);this._renderer.compile(e,Nn)}_sceneToCubeUV(t,e,n,s,r){const c=new Pt(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Xo),p.toneMapping=ee,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new $n,new Fi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,f=b.material;let h=!1;const y=t.background;y?y.isColor&&(f.color.copy(y),t.background=null,h=!0):(f.color.copy(Xo),h=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[E],r.y,r.z)):T===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[E]));const R=this._cubeSize;mn(s,T*R,E>2?R:0,R,R),p.setRenderTarget(s),h&&p.render(b,c),p.render(t,c)}p.toneMapping=m,p.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===je||t.mapping===yn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;mn(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Nn)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),u=0+l*1.25,m=p*u,{_lodMax:g}=this,b=this._sizeLods[n],f=3*b*(n>g-Ue?n-g+Ue:0),h=4*(this._cubeSize-b);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=g-e,mn(r,f,h,3*b,2*b),s.setRenderTarget(r),s.render(a,Nn),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,mn(t,f,h,3*b,2*b),s.setRenderTarget(t),s.render(a,Nn)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Y0("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[s];p.material=l;const u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ye-1),b=r/g,f=isFinite(r)?1+Math.floor(d*b):Ye;f>Ye&&P0(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Ye}`);const h=[];let y=0;for(let P=0;P<Ye;++P){const x=P/b,S=Math.exp(-x*x/2);h.push(S),P===0?y+=S:P<f&&(y+=2*S)}for(let P=0;P<h.length;P++)h[P]=h[P]/y;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:E}=this;u.dTheta.value=g,u.mipInt.value=E-n;const T=this._sizeLods[s],R=3*T*(s>E-Ue?s-E+Ue:0),A=4*(this._cubeSize-T);mn(e,R,A,3*T,2*T),c.setRenderTarget(e),c.render(p,Nn)}}function vu(i){const t=[],e=[],n=[];let s=i;const r=i-Ue+1+Wo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ue?c=Wo[o-i+Ue-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),d=-l,p=1+l,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,b=3,f=2,h=1,y=new Float32Array(b*g*m),E=new Float32Array(f*g*m),T=new Float32Array(h*g*m);for(let A=0;A<m;A++){const P=A%3*2/3-1,x=A>2?0:-1,S=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];y.set(S,b*g*A),E.set(u,f*g*A);const q=[A,A,A,A,A,A];T.set(q,h*g*A)}const R=new It;R.setAttribute("position",new jt(y,b)),R.setAttribute("uv",new jt(E,f)),R.setAttribute("faceIndex",new jt(T,h)),n.push(new Vt(R,null)),s>Ue&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function qo(i,t,e){const n=new ne(i,t,e);return n.texture.mapping=Bi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mn(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yu(i,t,e){return new ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vi(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ge,depthTest:!1,depthWrite:!1})}function bu(i,t,e){const n=new Float32Array(Ye),s=new I(0,1,0);return new ae({name:"SphericalGaussianBlur",defines:{n:Ye,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ge,depthTest:!1,depthWrite:!1})}function $o(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ge,depthTest:!1,depthWrite:!1})}function jo(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ge,depthTest:!1,depthWrite:!1})}function Vi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Wa extends ne{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ba(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $n(5,5,5),r=new ae({name:"CubemapFromEquirect",uniforms:Sn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:ge});r.uniforms.tEquirect.value=e;const o=new Vt(s,r),a=e.minFilter;return e.minFilter===qe&&(e.minFilter=Et),new Al(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Mu(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Xi||m===Yi)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const b=new Wa(g.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",l),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,g=m===Xi||m===Yi,b=m===je||m===yn;if(g||b){let f=e.get(u);const h=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Yo(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{const y=u.image;return g&&y&&y.height>0||b&&y&&c(y)?(n===null&&(n=new Yo(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",d),f.texture):null}}}return u}function a(u,m){return m===Xi?u.mapping=je:m===Yi&&(u.mapping=yn),u}function c(u){let m=0;const g=6;for(let b=0;b<g;b++)u[b]!==void 0&&m++;return m===g}function l(u){const m=u.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Su(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ui("WebGLRenderer: "+n+" extension not supported."),s}}}function Eu(i,t,e,n){const s={},r=new WeakMap;function o(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(p){const u=p.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER)}function l(p){const u=[],m=p.index,g=p.attributes.position;let b=0;if(g===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let E=0,T=y.length;E<T;E+=3){const R=y[E+0],A=y[E+1],P=y[E+2];u.push(R,A,A,P,P,R)}}else{const y=g.array;b=g.version;for(let E=0,T=y.length/3-1;E<T;E+=3){const R=E+0,A=E+1,P=E+2;u.push(R,A,A,P,P,R)}}const f=new(g.count>=65535?Na:Fa)(u,1);f.version=b;const h=r.get(p);h&&t.remove(h),r.set(p,f)}function d(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:d}}function Tu(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*o),e.update(m,n,1)}function l(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*o,g),e.update(m,n,g))}function d(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];e.update(f,n,1)}function p(u,m,g,b){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)l(u[h]/o,m[h],b[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,b,0,g);let h=0;for(let y=0;y<g;y++)h+=m[y]*b[y];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Au(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Y0("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wu(i,t,e){const n=new WeakMap,s=new at;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==p){let q=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",q)};var m=q;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let T=0;g===!0&&(T=1),b===!0&&(T=2),f===!0&&(T=3);let R=a.attributes.position.count*T,A=1;R>t.maxTextureSize&&(A=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*A*4*p),x=new Ia(P,R,A,p);x.type=qt,x.needsUpdate=!0;const S=T*4;for(let w=0;w<p;w++){const z=h[w],V=y[w],X=E[w],B=R*A*4*w;for(let H=0;H<z.count;H++){const F=H*S;g===!0&&(s.fromBufferAttribute(z,H),P[B+F+0]=s.x,P[B+F+1]=s.y,P[B+F+2]=s.z,P[B+F+3]=0),b===!0&&(s.fromBufferAttribute(V,H),P[B+F+4]=s.x,P[B+F+5]=s.y,P[B+F+6]=s.z,P[B+F+7]=0),f===!0&&(s.fromBufferAttribute(X,H),P[B+F+8]=s.x,P[B+F+9]=s.y,P[B+F+10]=s.z,P[B+F+11]=X.itemSize===4?s.w:1)}}u={count:p,texture:x,size:new I0(R,A)},n.set(a,u),a.addEventListener("dispose",q)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const b=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Cu(i,t,e,n,s){let r=new WeakMap;function o(l){const d=s.render.frame,p=l.geometry,u=t.get(l,p);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return u}function a(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const Ru={[ga]:"LINEAR_TONE_MAPPING",[xa]:"REINHARD_TONE_MAPPING",[va]:"CINEON_TONE_MAPPING",[ya]:"ACES_FILMIC_TONE_MAPPING",[Ma]:"AGX_TONE_MAPPING",[Sa]:"NEUTRAL_TONE_MAPPING",[ba]:"CUSTOM_TONE_MAPPING"};function Pu(i,t,e,n,s){const r=new ne(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new ne(t,e,{type:ve,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const c=new xl({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Vt(a,c),d=new Yr(-1,1,1,-1,0,1);let p=null,u=null,m=!1,g,b=null,f=[],h=!1;this.setSize=function(y,E){r.setSize(y,E),o.setSize(y,E);for(let T=0;T<f.length;T++){const R=f[T];R.setSize&&R.setSize(y,E)}},this.setEffects=function(y){f=y,h=f.length>0&&f[0].isRenderPass===!0;const E=r.width,T=r.height;for(let R=0;R<f.length;R++){const A=f[R];A.setSize&&A.setSize(E,T)}},this.begin=function(y,E){if(m||y.toneMapping===ee&&f.length===0)return!1;if(b=E,E!==null){const T=E.width,R=E.height;(r.width!==T||r.height!==R)&&this.setSize(T,R)}return h===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=ee,!0},this.hasRenderPass=function(){return h},this.end=function(y,E){y.toneMapping=g,m=!0;let T=r,R=o;for(let A=0;A<f.length;A++){const P=f[A];if(P.enabled!==!1&&(P.render(y,R,T,E),P.needsSwap!==!1)){const x=T;T=R,R=x}}if(p!==y.outputColorSpace||u!==y.toneMapping){p=y.outputColorSpace,u=y.toneMapping,c.defines={},q0.getTransfer(p)===Q0&&(c.defines.SRGB_TRANSFER="");const A=Ru[u];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(b),y.render(l,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Xa=new wt,Er=new Wn(1,1),Ya=new Ia,qa=new Z1,$a=new Ba,Zo=[],Ko=[],Jo=new Float32Array(16),Qo=new Float32Array(9),ta=new Float32Array(4);function An(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Zo[s];if(r===void 0&&(r=new Float32Array(s),Zo[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pt(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function mt(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hi(i,t){let e=Ko[t];e===void 0&&(e=new Int32Array(t),Ko[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Du(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Lu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pt(e,t))return;i.uniform2fv(this.addr,t),mt(e,t)}}function Iu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pt(e,t))return;i.uniform3fv(this.addr,t),mt(e,t)}}function Uu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pt(e,t))return;i.uniform4fv(this.addr,t),mt(e,t)}}function Fu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pt(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),mt(e,t)}else{if(pt(e,n))return;ta.set(n),i.uniformMatrix2fv(this.addr,!1,ta),mt(e,n)}}function Nu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pt(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),mt(e,t)}else{if(pt(e,n))return;Qo.set(n),i.uniformMatrix3fv(this.addr,!1,Qo),mt(e,n)}}function Ou(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(pt(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),mt(e,t)}else{if(pt(e,n))return;Jo.set(n),i.uniformMatrix4fv(this.addr,!1,Jo),mt(e,n)}}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pt(e,t))return;i.uniform2iv(this.addr,t),mt(e,t)}}function Vu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pt(e,t))return;i.uniform3iv(this.addr,t),mt(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pt(e,t))return;i.uniform4iv(this.addr,t),mt(e,t)}}function ku(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pt(e,t))return;i.uniform2uiv(this.addr,t),mt(e,t)}}function Wu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pt(e,t))return;i.uniform3uiv(this.addr,t),mt(e,t)}}function Xu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pt(e,t))return;i.uniform4uiv(this.addr,t),mt(e,t)}}function Yu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Er.compareFunction=e.isReversedDepthBuffer()?Vr:zr,r=Er):r=Xa,e.setTexture2D(t||r,s)}function qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||qa,s)}function $u(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$a,s)}function ju(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ya,s)}function Zu(i){switch(i){case 5126:return Du;case 35664:return Lu;case 35665:return Iu;case 35666:return Uu;case 35674:return Fu;case 35675:return Nu;case 35676:return Ou;case 5124:case 35670:return Bu;case 35667:case 35671:return zu;case 35668:case 35672:return Vu;case 35669:case 35673:return Hu;case 5125:return ku;case 36294:return Gu;case 36295:return Wu;case 36296:return Xu;case 35678:case 36198:case 36298:case 36306:case 35682:return Yu;case 35679:case 36299:case 36307:return qu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return ju}}function Ku(i,t){i.uniform1fv(this.addr,t)}function Ju(i,t){const e=An(t,this.size,2);i.uniform2fv(this.addr,e)}function Qu(i,t){const e=An(t,this.size,3);i.uniform3fv(this.addr,e)}function td(i,t){const e=An(t,this.size,4);i.uniform4fv(this.addr,e)}function ed(i,t){const e=An(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function nd(i,t){const e=An(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function id(i,t){const e=An(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sd(i,t){i.uniform1iv(this.addr,t)}function rd(i,t){i.uniform2iv(this.addr,t)}function od(i,t){i.uniform3iv(this.addr,t)}function ad(i,t){i.uniform4iv(this.addr,t)}function ld(i,t){i.uniform1uiv(this.addr,t)}function cd(i,t){i.uniform2uiv(this.addr,t)}function hd(i,t){i.uniform3uiv(this.addr,t)}function ud(i,t){i.uniform4uiv(this.addr,t)}function dd(i,t,e){const n=this.cache,s=t.length,r=Hi(e,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Er:o=Xa;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function fd(i,t,e){const n=this.cache,s=t.length,r=Hi(e,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||qa,r[o])}function pd(i,t,e){const n=this.cache,s=t.length,r=Hi(e,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||$a,r[o])}function md(i,t,e){const n=this.cache,s=t.length,r=Hi(e,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Ya,r[o])}function _d(i){switch(i){case 5126:return Ku;case 35664:return Ju;case 35665:return Qu;case 35666:return td;case 35674:return ed;case 35675:return nd;case 35676:return id;case 5124:case 35670:return sd;case 35667:case 35671:return rd;case 35668:case 35672:return od;case 35669:case 35673:return ad;case 5125:return ld;case 36294:return cd;case 36295:return hd;case 36296:return ud;case 35678:case 36198:case 36298:case 36306:case 35682:return dd;case 35679:case 36299:case 36307:return fd;case 35680:case 36300:case 36308:case 36293:return pd;case 36289:case 36303:case 36311:case 36292:return md}}class gd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zu(e.type)}}class xd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_d(e.type)}}class vd{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function ea(i,t){i.seq.push(t),i.map[t.id]=t}function yd(i,t,e){const n=i.name,s=n.length;for(Es.lastIndex=0;;){const r=Es.exec(n),o=Es.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ea(e,l===void 0?new gd(a,i,t):new xd(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new vd(a),ea(e,p)),e=p}}}class Di{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);yd(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function na(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const bd=37297;let Md=0;function Sd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ia=new N0;function Ed(i){q0._getMatrix(ia,q0.workingColorSpace,i);const t=`mat3( ${ia.elements.map(e=>e.toFixed(4))} )`;switch(q0.getTransfer(i)){case Li:return[t,"LinearTransferOETF"];case Q0:return[t,"sRGBTransferOETF"];default:return P0("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function sa(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Sd(i.getShaderSource(t),a)}else return r}function Td(i,t){const e=Ed(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Ad={[ga]:"Linear",[xa]:"Reinhard",[va]:"Cineon",[ya]:"ACESFilmic",[Ma]:"AgX",[Sa]:"Neutral",[ba]:"Custom"};function wd(i,t){const e=Ad[t];return e===void 0?(P0("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Si=new I;function Cd(){q0.getLuminanceCoefficients(Si);const i=Si.x.toFixed(4),t=Si.y.toFixed(4),e=Si.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vn).join(`
`)}function Pd(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Dd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vn(i){return i!==""}function ra(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ld=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tr(i){return i.replace(Ld,Ud)}const Id=new Map;function Ud(i,t){let e=B0[t];if(e===void 0){const n=Id.get(t);if(n!==void 0)e=B0[n],P0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Tr(e)}const Fd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function aa(i){return i.replace(Fd,Nd)}function Nd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function la(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Od={[Ti]:"SHADOWMAP_TYPE_PCF",[Bn]:"SHADOWMAP_TYPE_VSM"};function Bd(i){return Od[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zd={[je]:"ENVMAP_TYPE_CUBE",[yn]:"ENVMAP_TYPE_CUBE",[Bi]:"ENVMAP_TYPE_CUBE_UV"};function Vd(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zd[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const Hd={[yn]:"ENVMAP_MODE_REFRACTION"};function kd(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Hd[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gd={[Dr]:"ENVMAP_BLENDING_MULTIPLY",[C1]:"ENVMAP_BLENDING_MIX",[R1]:"ENVMAP_BLENDING_ADD"};function Wd(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Gd[i.combine]||"ENVMAP_BLENDING_NONE"}function Xd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Yd(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Bd(e),l=Vd(e),d=kd(e),p=Wd(e),u=Xd(e),m=Rd(e),g=Pd(r),b=s.createProgram();let f,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vn).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vn).join(`
`),h.length>0&&(h+=`
`)):(f=[la(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vn).join(`
`),h=[la(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ee?"#define TONE_MAPPING":"",e.toneMapping!==ee?B0.tonemapping_pars_fragment:"",e.toneMapping!==ee?wd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",B0.colorspace_pars_fragment,Td("linearToOutputTexel",e.outputColorSpace),Cd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vn).join(`
`)),o=Tr(o),o=ra(o,e),o=oa(o,e),a=Tr(a),a=ra(a,e),a=oa(a,e),o=aa(o),a=aa(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===fo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=y+f+o,T=y+h+a,R=na(s,s.VERTEX_SHADER,E),A=na(s,s.FRAGMENT_SHADER,T);s.attachShader(b,R),s.attachShader(b,A),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(w){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(b)||"",V=s.getShaderInfoLog(R)||"",X=s.getShaderInfoLog(A)||"",B=z.trim(),H=V.trim(),F=X.trim();let K=!0,j=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,R,A);else{const a0=sa(s,R,"vertex"),d0=sa(s,A,"fragment");Y0("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+a0+`
`+d0)}else B!==""?P0("WebGLProgram: Program Info Log:",B):(H===""||F==="")&&(j=!1);j&&(w.diagnostics={runnable:K,programLog:B,vertexShader:{log:H,prefix:f},fragmentShader:{log:F,prefix:h}})}s.deleteShader(R),s.deleteShader(A),x=new Di(s,b),S=Dd(s,b)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let q=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=s.getProgramParameter(b,bd)),q},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Md++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=A,this}let qd=0;class $d{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new jd(t),e.set(t,n)),n}}class jd{constructor(t){this.id=qd++,this.code=t,this.usedTimes=0}}function Zd(i,t,e,n,s,r){const o=new kr,a=new $d,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function b(x,S,q,w,z){const V=w.fog,X=z.geometry,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?w.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||B,H),K=F&&F.mapping===Bi?F.image.height:null,j=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&P0("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const a0=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,d0=a0!==void 0?a0.length:0;let J=0;X.morphAttributes.position!==void 0&&(J=1),X.morphAttributes.normal!==void 0&&(J=2),X.morphAttributes.color!==void 0&&(J=3);let m0,F0,z0,G;if(j){const J0=Qt[j];m0=J0.vertexShader,F0=J0.fragmentShader}else m0=x.vertexShader,F0=x.fragmentShader,a.update(x),z0=a.getVertexShaderID(x),G=a.getFragmentShaderID(x);const t0=i.getRenderTarget(),n0=i.state.buffers.depth.getReversed(),C0=z.isInstancedMesh===!0,A0=z.isBatchedMesh===!0,w0=!!x.map,ot=!!x.matcap,W0=!!F,j0=!!x.aoMap,K0=!!x.lightMap,V0=!!x.bumpMap,ct=!!x.normalMap,C=!!x.displacementMap,ut=!!x.emissiveMap,Z0=!!x.metalnessMap,st=!!x.roughnessMap,b0=x.anisotropy>0,M=x.clearcoat>0,_=x.dispersion>0,L=x.iridescence>0,$=x.sheen>0,Z=x.transmission>0,Y=b0&&!!x.anisotropyMap,_0=M&&!!x.clearcoatMap,r0=M&&!!x.clearcoatNormalMap,T0=M&&!!x.clearcoatRoughnessMap,R0=L&&!!x.iridescenceMap,Q=L&&!!x.iridescenceThicknessMap,i0=$&&!!x.sheenColorMap,g0=$&&!!x.sheenRoughnessMap,v0=!!x.specularMap,u0=!!x.specularColorMap,H0=!!x.specularIntensityMap,D=Z&&!!x.transmissionMap,o0=Z&&!!x.thicknessMap,s0=!!x.gradientMap,p0=!!x.alphaMap,e0=x.alphaTest>0,W=!!x.alphaHash,x0=!!x.extensions;let D0=ee;x.toneMapped&&(t0===null||t0.isXRRenderTarget===!0)&&(D0=i.toneMapping);const rt={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:m0,fragmentShader:F0,defines:x.defines,customVertexShaderID:z0,customFragmentShaderID:G,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:A0,batchingColor:A0&&z._colorsTexture!==null,instancing:C0,instancingColor:C0&&z.instanceColor!==null,instancingMorph:C0&&z.morphTexture!==null,outputColorSpace:t0===null?i.outputColorSpace:t0.isXRRenderTarget===!0?t0.texture.colorSpace:Mn,alphaToCoverage:!!x.alphaToCoverage,map:w0,matcap:ot,envMap:W0,envMapMode:W0&&F.mapping,envMapCubeUVHeight:K,aoMap:j0,lightMap:K0,bumpMap:V0,normalMap:ct,displacementMap:C,emissiveMap:ut,normalMapObjectSpace:ct&&x.normalMapType===L1,normalMapTangentSpace:ct&&x.normalMapType===Da,metalnessMap:Z0,roughnessMap:st,anisotropy:b0,anisotropyMap:Y,clearcoat:M,clearcoatMap:_0,clearcoatNormalMap:r0,clearcoatRoughnessMap:T0,dispersion:_,iridescence:L,iridescenceMap:R0,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:i0,sheenRoughnessMap:g0,specularMap:v0,specularColorMap:u0,specularIntensityMap:H0,transmission:Z,transmissionMap:D,thicknessMap:o0,gradientMap:s0,opaque:x.transparent===!1&&x.blending===gn&&x.alphaToCoverage===!1,alphaMap:p0,alphaTest:e0,alphaHash:W,combine:x.combine,mapUv:w0&&g(x.map.channel),aoMapUv:j0&&g(x.aoMap.channel),lightMapUv:K0&&g(x.lightMap.channel),bumpMapUv:V0&&g(x.bumpMap.channel),normalMapUv:ct&&g(x.normalMap.channel),displacementMapUv:C&&g(x.displacementMap.channel),emissiveMapUv:ut&&g(x.emissiveMap.channel),metalnessMapUv:Z0&&g(x.metalnessMap.channel),roughnessMapUv:st&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:_0&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:r0&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:T0&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:R0&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:i0&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:g0&&g(x.sheenRoughnessMap.channel),specularMapUv:v0&&g(x.specularMap.channel),specularColorMapUv:u0&&g(x.specularColorMap.channel),specularIntensityMapUv:H0&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:o0&&g(x.thicknessMap.channel),alphaMapUv:p0&&g(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ct||b0),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(w0||p0),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||X.attributes.normal===void 0&&ct===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:n0,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:d0,morphTextureStride:J,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:D0,decodeVideoTexture:w0&&x.map.isVideoTexture===!0&&q0.getTransfer(x.map.colorSpace)===Q0,decodeVideoTextureEmissive:ut&&x.emissiveMap.isVideoTexture===!0&&q0.getTransfer(x.emissiveMap.colorSpace)===Q0,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xt,flipSided:x.side===Lt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:x0&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(x0&&x.extensions.multiDraw===!0||A0)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const q in x.defines)S.push(q),S.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(h(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function h(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const S=m[x.type];let q;if(S){const w=Qt[S];q=ml.clone(w.uniforms)}else q=x.uniforms;return q}function T(x,S){let q=d.get(S);return q!==void 0?++q.usedTimes:(q=new Yd(i,S,x,s),l.push(q),d.set(S,q)),q}function R(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function A(x){a.remove(x)}function P(){a.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:E,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:l,dispose:P}}function Kd(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Jd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ca(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ha(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,g,b,f,h){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:m,material:g,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:h},i[t]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=g,y.materialVariant=o(u),y.groupOrder=b,y.renderOrder=u.renderOrder,y.z=f,y.group=h),t++,y}function c(u,m,g,b,f,h){const y=a(u,m,g,b,f,h);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function l(u,m,g,b,f,h){const y=a(u,m,g,b,f,h);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function d(u,m){e.length>1&&e.sort(u||Jd),n.length>1&&n.sort(m||ca),s.length>1&&s.sort(m||ca)}function p(){for(let u=t,m=i.length;u<m;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:d}}function Qd(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ha,i.set(n,[o])):s>=r.length?(o=new ha,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function tf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new X0};break;case"SpotLight":e={position:new I,direction:new I,color:new X0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new X0,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new X0,groundColor:new X0};break;case"RectAreaLight":e={color:new X0,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function ef(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I0};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I0};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new I0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let nf=0;function sf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rf(i){const t=new tf,e=ef(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new O0,o=new O0;function a(l){let d=0,p=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,b=0,f=0,h=0,y=0,E=0,T=0,R=0,A=0,P=0;l.sort(sf);for(let S=0,q=l.length;S<q;S++){const w=l[S],z=w.color,V=w.intensity,X=w.distance;let B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===bn?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)d+=z.r*V,p+=z.g*V,u+=z.b*V;else if(w.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(w.sh.coefficients[H],V);P++}else if(w.isDirectionalLight){const H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,K=e.get(w);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,n.directionalShadow[m]=K,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=w.shadow.matrix,y++}n.directional[m]=H,m++}else if(w.isSpotLight){const H=t.get(w);H.position.setFromMatrixPosition(w.matrixWorld),H.color.copy(z).multiplyScalar(V),H.distance=X,H.coneCos=Math.cos(w.angle),H.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),H.decay=w.decay,n.spot[b]=H;const F=w.shadow;if(w.map&&(n.spotLightMap[R]=w.map,R++,F.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[b]=F.matrix,w.castShadow){const K=e.get(w);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,n.spotShadow[b]=K,n.spotShadowMap[b]=B,T++}b++}else if(w.isRectAreaLight){const H=t.get(w);H.color.copy(z).multiplyScalar(V),H.halfWidth.set(w.width*.5,0,0),H.halfHeight.set(0,w.height*.5,0),n.rectArea[f]=H,f++}else if(w.isPointLight){const H=t.get(w);if(H.color.copy(w.color).multiplyScalar(w.intensity),H.distance=w.distance,H.decay=w.decay,w.castShadow){const F=w.shadow,K=e.get(w);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,K.shadowCameraNear=F.camera.near,K.shadowCameraFar=F.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=w.shadow.matrix,E++}n.point[g]=H,g++}else if(w.isHemisphereLight){const H=t.get(w);H.skyColor.copy(w.color).multiplyScalar(V),H.groundColor.copy(w.groundColor).multiplyScalar(V),n.hemi[h]=H,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=l0.LTC_FLOAT_1,n.rectAreaLTC2=l0.LTC_FLOAT_2):(n.rectAreaLTC1=l0.LTC_HALF_1,n.rectAreaLTC2=l0.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==b||x.rectAreaLength!==f||x.hemiLength!==h||x.numDirectionalShadows!==y||x.numPointShadows!==E||x.numSpotShadows!==T||x.numSpotMaps!==R||x.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=f,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=T+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,x.directionalLength=m,x.pointLength=g,x.spotLength=b,x.rectAreaLength=f,x.hemiLength=h,x.numDirectionalShadows=y,x.numPointShadows=E,x.numSpotShadows=T,x.numSpotMaps=R,x.numLightProbes=P,n.version=nf++)}function c(l,d){let p=0,u=0,m=0,g=0,b=0;const f=d.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const E=l[h];if(E.isDirectionalLight){const T=n.directional[p];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),p++}else if(E.isSpotLight){const T=n.spot[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),m++}else if(E.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),o.identity(),r.copy(E.matrixWorld),r.premultiply(f),o.extractRotation(r),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const T=n.point[u];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(f),u++}else if(E.isHemisphereLight){const T=n.hemi[b];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(f),b++}}}return{setup:a,setupView:c,state:n}}function ua(i){const t=new rf(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function of(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ua(i),t.set(s,[a])):r>=o.length?(a=new ua(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const af=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,cf=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],hf=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],da=new O0,On=new I,Ts=new I;function uf(i,t,e){let n=new Gr;const s=new I0,r=new I0,o=new at,a=new yl,c=new bl,l={},d=e.maxTextureSize,p={[Fe]:Lt,[Lt]:Fe,[Xt]:Xt},u=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new I0},radius:{value:4}},vertexShader:af,fragmentShader:lf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Vt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ti;let h=this.type;this.render=function(A,P,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;this.type===c1&&(P0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ti);const S=i.getRenderTarget(),q=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),z=i.state;z.setBlending(ge),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=h!==this.type;V&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(B=>B.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,B=A.length;X<B;X++){const H=A[X],F=H.shadow;if(F===void 0){P0("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();s.multiply(K),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/K.y),s.y=r.y*K.y,F.mapSize.y=r.y));const j=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=j,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Bn){if(H.isPointLight){P0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ne(s.x,s.y,{format:bn,type:ve,minFilter:Et,magFilter:Et,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new Wn(s.x,s.y,qt),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=ye,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vt,F.map.depthTexture.magFilter=vt}else H.isPointLight?(F.map=new Wa(s.x),F.map.depthTexture=new fl(s.x,re)):(F.map=new ne(s.x,s.y),F.map.depthTexture=new Wn(s.x,s.y,re)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=ye,this.type===Ti?(F.map.depthTexture.compareFunction=j?Vr:zr,F.map.depthTexture.minFilter=Et,F.map.depthTexture.magFilter=Et):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vt,F.map.depthTexture.magFilter=vt);F.camera.updateProjectionMatrix()}const a0=F.map.isWebGLCubeRenderTarget?6:1;for(let d0=0;d0<a0;d0++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,d0),i.clear();else{d0===0&&(i.setRenderTarget(F.map),i.clear());const J=F.getViewport(d0);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),z.viewport(o)}if(H.isPointLight){const J=F.camera,m0=F.matrix,F0=H.distance||J.far;F0!==J.far&&(J.far=F0,J.updateProjectionMatrix()),On.setFromMatrixPosition(H.matrixWorld),J.position.copy(On),Ts.copy(J.position),Ts.add(cf[d0]),J.up.copy(hf[d0]),J.lookAt(Ts),J.updateMatrixWorld(),m0.makeTranslation(-On.x,-On.y,-On.z),da.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),F._frustum.setFromProjectionMatrix(da,J.coordinateSystem,J.reversedDepth)}else F.updateMatrices(H);n=F.getFrustum(),T(P,x,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===Bn&&y(F,x),F.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(S,q,w)};function y(A,P){const x=t.update(b);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ne(s.x,s.y,{format:bn,type:ve})),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(P,null,x,u,b,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(P,null,x,m,b,null)}function E(A,P,x,S){let q=null;const w=x.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)q=w;else if(q=x.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=q.uuid,V=P.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let B=X[V];B===void 0&&(B=q.clone(),X[V]=B,P.addEventListener("dispose",R)),q=B}if(q.visible=P.visible,q.wireframe=P.wireframe,S===Bn?q.side=P.shadowSide!==null?P.shadowSide:P.side:q.side=P.shadowSide!==null?P.shadowSide:p[P.side],q.alphaMap=P.alphaMap,q.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,q.map=P.map,q.clipShadows=P.clipShadows,q.clippingPlanes=P.clippingPlanes,q.clipIntersection=P.clipIntersection,q.displacementMap=P.displacementMap,q.displacementScale=P.displacementScale,q.displacementBias=P.displacementBias,q.wireframeLinewidth=P.wireframeLinewidth,q.linewidth=P.linewidth,x.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const z=i.properties.get(q);z.light=x}return q}function T(A,P,x,S,q){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&q===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,A.matrixWorld);const V=t.update(A),X=A.material;if(Array.isArray(X)){const B=V.groups;for(let H=0,F=B.length;H<F;H++){const K=B[H],j=X[K.materialIndex];if(j&&j.visible){const a0=E(A,j,S,q);A.onBeforeShadow(i,A,P,x,V,a0,K),i.renderBufferDirect(x,null,V,a0,A,K),A.onAfterShadow(i,A,P,x,V,a0,K)}}}else if(X.visible){const B=E(A,X,S,q);A.onBeforeShadow(i,A,P,x,V,B,null),i.renderBufferDirect(x,null,V,B,A,null),A.onAfterShadow(i,A,P,x,V,B,null)}}const z=A.children;for(let V=0,X=z.length;V<X;V++)T(z[V],P,x,S,q)}function R(A){A.target.removeEventListener("dispose",R);for(const x in l){const S=l[x],q=A.target.uuid;q in S&&(S[q].dispose(),delete S[q])}}}function df(i,t){function e(){let D=!1;const o0=new at;let s0=null;const p0=new at(0,0,0,0);return{setMask:function(e0){s0!==e0&&!D&&(i.colorMask(e0,e0,e0,e0),s0=e0)},setLocked:function(e0){D=e0},setClear:function(e0,W,x0,D0,rt){rt===!0&&(e0*=D0,W*=D0,x0*=D0),o0.set(e0,W,x0,D0),p0.equals(o0)===!1&&(i.clearColor(e0,W,x0,D0),p0.copy(o0))},reset:function(){D=!1,s0=null,p0.set(-1,0,0,0)}}}function n(){let D=!1,o0=!1,s0=null,p0=null,e0=null;return{setReversed:function(W){if(o0!==W){const x0=t.get("EXT_clip_control");W?x0.clipControlEXT(x0.LOWER_LEFT_EXT,x0.ZERO_TO_ONE_EXT):x0.clipControlEXT(x0.LOWER_LEFT_EXT,x0.NEGATIVE_ONE_TO_ONE_EXT),o0=W;const D0=e0;e0=null,this.setClear(D0)}},getReversed:function(){return o0},setTest:function(W){W?t0(i.DEPTH_TEST):n0(i.DEPTH_TEST)},setMask:function(W){s0!==W&&!D&&(i.depthMask(W),s0=W)},setFunc:function(W){if(o0&&(W=k1[W]),p0!==W){switch(W){case Us:i.depthFunc(i.NEVER);break;case Fs:i.depthFunc(i.ALWAYS);break;case Ns:i.depthFunc(i.LESS);break;case vn:i.depthFunc(i.LEQUAL);break;case Os:i.depthFunc(i.EQUAL);break;case Bs:i.depthFunc(i.GEQUAL);break;case zs:i.depthFunc(i.GREATER);break;case Vs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}p0=W}},setLocked:function(W){D=W},setClear:function(W){e0!==W&&(e0=W,o0&&(W=1-W),i.clearDepth(W))},reset:function(){D=!1,s0=null,p0=null,e0=null,o0=!1}}}function s(){let D=!1,o0=null,s0=null,p0=null,e0=null,W=null,x0=null,D0=null,rt=null;return{setTest:function(J0){D||(J0?t0(i.STENCIL_TEST):n0(i.STENCIL_TEST))},setMask:function(J0){o0!==J0&&!D&&(i.stencilMask(J0),o0=J0)},setFunc:function(J0,le,ce){(s0!==J0||p0!==le||e0!==ce)&&(i.stencilFunc(J0,le,ce),s0=J0,p0=le,e0=ce)},setOp:function(J0,le,ce){(W!==J0||x0!==le||D0!==ce)&&(i.stencilOp(J0,le,ce),W=J0,x0=le,D0=ce)},setLocked:function(J0){D=J0},setClear:function(J0){rt!==J0&&(i.clearStencil(J0),rt=J0)},reset:function(){D=!1,o0=null,s0=null,p0=null,e0=null,W=null,x0=null,D0=null,rt=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let d={},p={},u=new WeakMap,m=[],g=null,b=!1,f=null,h=null,y=null,E=null,T=null,R=null,A=null,P=new X0(0,0,0),x=0,S=!1,q=null,w=null,z=null,V=null,X=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=F>=1):K.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=F>=2);let j=null,a0={};const d0=i.getParameter(i.SCISSOR_BOX),J=i.getParameter(i.VIEWPORT),m0=new at().fromArray(d0),F0=new at().fromArray(J);function z0(D,o0,s0,p0){const e0=new Uint8Array(4),W=i.createTexture();i.bindTexture(D,W),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let x0=0;x0<s0;x0++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(o0,0,i.RGBA,1,1,p0,0,i.RGBA,i.UNSIGNED_BYTE,e0):i.texImage2D(o0+x0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,e0);return W}const G={};G[i.TEXTURE_2D]=z0(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=z0(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=z0(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=z0(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),t0(i.DEPTH_TEST),o.setFunc(vn),V0(!1),ct(oo),t0(i.CULL_FACE),j0(ge);function t0(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function n0(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function C0(D,o0){return p[D]!==o0?(i.bindFramebuffer(D,o0),p[D]=o0,D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=o0),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=o0),!0):!1}function A0(D,o0){let s0=m,p0=!1;if(D){s0=u.get(o0),s0===void 0&&(s0=[],u.set(o0,s0));const e0=D.textures;if(s0.length!==e0.length||s0[0]!==i.COLOR_ATTACHMENT0){for(let W=0,x0=e0.length;W<x0;W++)s0[W]=i.COLOR_ATTACHMENT0+W;s0.length=e0.length,p0=!0}}else s0[0]!==i.BACK&&(s0[0]=i.BACK,p0=!0);p0&&i.drawBuffers(s0)}function w0(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const ot={[Xe]:i.FUNC_ADD,[u1]:i.FUNC_SUBTRACT,[d1]:i.FUNC_REVERSE_SUBTRACT};ot[f1]=i.MIN,ot[p1]=i.MAX;const W0={[m1]:i.ZERO,[_1]:i.ONE,[g1]:i.SRC_COLOR,[Ls]:i.SRC_ALPHA,[S1]:i.SRC_ALPHA_SATURATE,[b1]:i.DST_COLOR,[v1]:i.DST_ALPHA,[x1]:i.ONE_MINUS_SRC_COLOR,[Is]:i.ONE_MINUS_SRC_ALPHA,[M1]:i.ONE_MINUS_DST_COLOR,[y1]:i.ONE_MINUS_DST_ALPHA,[E1]:i.CONSTANT_COLOR,[T1]:i.ONE_MINUS_CONSTANT_COLOR,[A1]:i.CONSTANT_ALPHA,[w1]:i.ONE_MINUS_CONSTANT_ALPHA};function j0(D,o0,s0,p0,e0,W,x0,D0,rt,J0){if(D===ge){b===!0&&(n0(i.BLEND),b=!1);return}if(b===!1&&(t0(i.BLEND),b=!0),D!==h1){if(D!==f||J0!==S){if((h!==Xe||T!==Xe)&&(i.blendEquation(i.FUNC_ADD),h=Xe,T=Xe),J0)switch(D){case gn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ao:i.blendFunc(i.ONE,i.ONE);break;case lo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case co:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Y0("WebGLState: Invalid blending: ",D);break}else switch(D){case gn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lo:Y0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case co:Y0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Y0("WebGLState: Invalid blending: ",D);break}y=null,E=null,R=null,A=null,P.set(0,0,0),x=0,f=D,S=J0}return}e0=e0||o0,W=W||s0,x0=x0||p0,(o0!==h||e0!==T)&&(i.blendEquationSeparate(ot[o0],ot[e0]),h=o0,T=e0),(s0!==y||p0!==E||W!==R||x0!==A)&&(i.blendFuncSeparate(W0[s0],W0[p0],W0[W],W0[x0]),y=s0,E=p0,R=W,A=x0),(D0.equals(P)===!1||rt!==x)&&(i.blendColor(D0.r,D0.g,D0.b,rt),P.copy(D0),x=rt),f=D,S=!1}function K0(D,o0){D.side===Xt?n0(i.CULL_FACE):t0(i.CULL_FACE);let s0=D.side===Lt;o0&&(s0=!s0),V0(s0),D.blending===gn&&D.transparent===!1?j0(ge):j0(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const p0=D.stencilWrite;a.setTest(p0),p0&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?t0(i.SAMPLE_ALPHA_TO_COVERAGE):n0(i.SAMPLE_ALPHA_TO_COVERAGE)}function V0(D){q!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),q=D)}function ct(D){D!==a1?(t0(i.CULL_FACE),D!==w&&(D===oo?i.cullFace(i.BACK):D===l1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):n0(i.CULL_FACE),w=D}function C(D){D!==z&&(H&&i.lineWidth(D),z=D)}function ut(D,o0,s0){D?(t0(i.POLYGON_OFFSET_FILL),(V!==o0||X!==s0)&&(V=o0,X=s0,o.getReversed()&&(o0=-o0),i.polygonOffset(o0,s0))):n0(i.POLYGON_OFFSET_FILL)}function Z0(D){D?t0(i.SCISSOR_TEST):n0(i.SCISSOR_TEST)}function st(D){D===void 0&&(D=i.TEXTURE0+B-1),j!==D&&(i.activeTexture(D),j=D)}function b0(D,o0,s0){s0===void 0&&(j===null?s0=i.TEXTURE0+B-1:s0=j);let p0=a0[s0];p0===void 0&&(p0={type:void 0,texture:void 0},a0[s0]=p0),(p0.type!==D||p0.texture!==o0)&&(j!==s0&&(i.activeTexture(s0),j=s0),i.bindTexture(D,o0||G[D]),p0.type=D,p0.texture=o0)}function M(){const D=a0[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){Y0("WebGLState:",D)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(D){Y0("WebGLState:",D)}}function $(){try{i.texSubImage2D(...arguments)}catch(D){Y0("WebGLState:",D)}}function Z(){try{i.texSubImage3D(...arguments)}catch(D){Y0("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Y0("WebGLState:",D)}}function _0(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Y0("WebGLState:",D)}}function r0(){try{i.texStorage2D(...arguments)}catch(D){Y0("WebGLState:",D)}}function T0(){try{i.texStorage3D(...arguments)}catch(D){Y0("WebGLState:",D)}}function R0(){try{i.texImage2D(...arguments)}catch(D){Y0("WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){Y0("WebGLState:",D)}}function i0(D){m0.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),m0.copy(D))}function g0(D){F0.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),F0.copy(D))}function v0(D,o0){let s0=l.get(o0);s0===void 0&&(s0=new WeakMap,l.set(o0,s0));let p0=s0.get(D);p0===void 0&&(p0=i.getUniformBlockIndex(o0,D.name),s0.set(D,p0))}function u0(D,o0){const p0=l.get(o0).get(D);c.get(o0)!==p0&&(i.uniformBlockBinding(o0,p0,D.__bindingPointIndex),c.set(o0,p0))}function H0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},j=null,a0={},p={},u=new WeakMap,m=[],g=null,b=!1,f=null,h=null,y=null,E=null,T=null,R=null,A=null,P=new X0(0,0,0),x=0,S=!1,q=null,w=null,z=null,V=null,X=null,m0.set(0,0,i.canvas.width,i.canvas.height),F0.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:t0,disable:n0,bindFramebuffer:C0,drawBuffers:A0,useProgram:w0,setBlending:j0,setMaterial:K0,setFlipSided:V0,setCullFace:ct,setLineWidth:C,setPolygonOffset:ut,setScissorTest:Z0,activeTexture:st,bindTexture:b0,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:R0,texImage3D:Q,updateUBOMapping:v0,uniformBlockBinding:u0,texStorage2D:r0,texStorage3D:T0,texSubImage2D:$,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:_0,scissor:i0,viewport:g0,reset:H0}}function ff(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new I0,d=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):Ii("canvas")}function b(M,_,L){let $=1;const Z=b0(M);if((Z.width>L||Z.height>L)&&($=L/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor($*Z.width),_0=Math.floor($*Z.height);p===void 0&&(p=g(Y,_0));const r0=_?g(Y,_0):p;return r0.width=Y,r0.height=_0,r0.getContext("2d").drawImage(M,0,0,Y,_0),P0("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+_0+")."),r0}else return"data"in M&&P0("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),M;return M}function f(M){return M.generateMipmaps}function h(M){i.generateMipmap(M)}function y(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(M,_,L,$,Z=!1){if(M!==null){if(i[M]!==void 0)return i[M];P0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=_;if(_===i.RED&&(L===i.FLOAT&&(Y=i.R32F),L===i.HALF_FLOAT&&(Y=i.R16F),L===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.R8UI),L===i.UNSIGNED_SHORT&&(Y=i.R16UI),L===i.UNSIGNED_INT&&(Y=i.R32UI),L===i.BYTE&&(Y=i.R8I),L===i.SHORT&&(Y=i.R16I),L===i.INT&&(Y=i.R32I)),_===i.RG&&(L===i.FLOAT&&(Y=i.RG32F),L===i.HALF_FLOAT&&(Y=i.RG16F),L===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RG8UI),L===i.UNSIGNED_SHORT&&(Y=i.RG16UI),L===i.UNSIGNED_INT&&(Y=i.RG32UI),L===i.BYTE&&(Y=i.RG8I),L===i.SHORT&&(Y=i.RG16I),L===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),L===i.UNSIGNED_INT&&(Y=i.RGB32UI),L===i.BYTE&&(Y=i.RGB8I),L===i.SHORT&&(Y=i.RGB16I),L===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),L===i.UNSIGNED_INT&&(Y=i.RGBA32UI),L===i.BYTE&&(Y=i.RGBA8I),L===i.SHORT&&(Y=i.RGBA16I),L===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const _0=Z?Li:q0.getTransfer($);L===i.FLOAT&&(Y=i.RGBA32F),L===i.HALF_FLOAT&&(Y=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Y=_0===Q0?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function T(M,_){let L;return M?_===null||_===re||_===kn?L=i.DEPTH24_STENCIL8:_===qt?L=i.DEPTH32F_STENCIL8:_===Hn&&(L=i.DEPTH24_STENCIL8,P0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===re||_===kn?L=i.DEPTH_COMPONENT24:_===qt?L=i.DEPTH_COMPONENT32F:_===Hn&&(L=i.DEPTH_COMPONENT16),L}function R(M,_){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==vt&&M.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function A(M){const _=M.target;_.removeEventListener("dispose",A),x(_),_.isVideoTexture&&d.delete(_)}function P(M){const _=M.target;_.removeEventListener("dispose",P),q(_)}function x(M){const _=n.get(M);if(_.__webglInit===void 0)return;const L=M.source,$=u.get(L);if($){const Z=$[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(M),Object.keys($).length===0&&u.delete(L)}n.remove(M)}function S(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const L=M.source,$=u.get(L);delete $[_.__cacheKey],o.memory.textures--}function q(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Z=0;Z<_.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=M.textures;for(let $=0,Z=L.length;$<Z;$++){const Y=n.get(L[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(L[$])}n.remove(M)}let w=0;function z(){w=0}function V(){const M=w;return M>=s.maxTextures&&P0("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),w+=1,M}function X(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function B(M,_){const L=n.get(M);if(M.isVideoTexture&&Z0(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){const $=M.image;if($===null)P0("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)P0("WebGLRenderer: Texture marked for update but image is incomplete");else{G(L,M,_);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function H(M,_){const L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){G(L,M,_);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function F(M,_){const L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){G(L,M,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function K(M,_){const L=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){t0(L,M,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const j={[Hs]:i.REPEAT,[me]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},a0={[vt]:i.NEAREST,[P1]:i.NEAREST_MIPMAP_NEAREST,[Jn]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[qi]:i.LINEAR_MIPMAP_NEAREST,[qe]:i.LINEAR_MIPMAP_LINEAR},d0={[I1]:i.NEVER,[B1]:i.ALWAYS,[U1]:i.LESS,[zr]:i.LEQUAL,[F1]:i.EQUAL,[Vr]:i.GEQUAL,[N1]:i.GREATER,[O1]:i.NOTEQUAL};function J(M,_){if(_.type===qt&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Et||_.magFilter===qi||_.magFilter===Jn||_.magFilter===qe||_.minFilter===Et||_.minFilter===qi||_.minFilter===Jn||_.minFilter===qe)&&P0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,j[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,a0[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,a0[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,d0[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vt||_.minFilter!==Jn&&_.minFilter!==qe||_.type===qt&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function m0(M,_){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",A));const $=_.source;let Z=u.get($);Z===void 0&&(Z={},u.set($,Z));const Y=X(_);if(Y!==M.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Z[Y].usedTimes++;const _0=Z[M.__cacheKey];_0!==void 0&&(Z[M.__cacheKey].usedTimes--,_0.usedTimes===0&&S(_)),M.__cacheKey=Y,M.__webglTexture=Z[Y].texture}return L}function F0(M,_,L){return Math.floor(Math.floor(M/L)/_)}function z0(M,_,L,$){const Y=M.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,$,_.data);else{Y.sort((Q,i0)=>Q.start-i0.start);let _0=0;for(let Q=1;Q<Y.length;Q++){const i0=Y[_0],g0=Y[Q],v0=i0.start+i0.count,u0=F0(g0.start,_.width,4),H0=F0(i0.start,_.width,4);g0.start<=v0+1&&u0===H0&&F0(g0.start+g0.count-1,_.width,4)===u0?i0.count=Math.max(i0.count,g0.start+g0.count-i0.start):(++_0,Y[_0]=g0)}Y.length=_0+1;const r0=i.getParameter(i.UNPACK_ROW_LENGTH),T0=i.getParameter(i.UNPACK_SKIP_PIXELS),R0=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Q=0,i0=Y.length;Q<i0;Q++){const g0=Y[Q],v0=Math.floor(g0.start/4),u0=Math.ceil(g0.count/4),H0=v0%_.width,D=Math.floor(v0/_.width),o0=u0,s0=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,H0),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,H0,D,o0,s0,L,$,_.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,r0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,T0),i.pixelStorei(i.UNPACK_SKIP_ROWS,R0)}}function G(M,_,L){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Z=m0(M,_),Y=_.source;e.bindTexture($,M.__webglTexture,i.TEXTURE0+L);const _0=n.get(Y);if(Y.version!==_0.__version||Z===!0){e.activeTexture(i.TEXTURE0+L);const r0=q0.getPrimaries(q0.workingColorSpace),T0=_.colorSpace===Le?null:q0.getPrimaries(_.colorSpace),R0=_.colorSpace===Le||r0===T0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,R0);let Q=b(_.image,!1,s.maxTextureSize);Q=st(_,Q);const i0=r.convert(_.format,_.colorSpace),g0=r.convert(_.type);let v0=E(_.internalFormat,i0,g0,_.colorSpace,_.isVideoTexture);J($,_);let u0;const H0=_.mipmaps,D=_.isVideoTexture!==!0,o0=_0.__version===void 0||Z===!0,s0=Y.dataReady,p0=R(_,Q);if(_.isDepthTexture)v0=T(_.format===$e,_.type),o0&&(D?e.texStorage2D(i.TEXTURE_2D,1,v0,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,v0,Q.width,Q.height,0,i0,g0,null));else if(_.isDataTexture)if(H0.length>0){D&&o0&&e.texStorage2D(i.TEXTURE_2D,p0,v0,H0[0].width,H0[0].height);for(let e0=0,W=H0.length;e0<W;e0++)u0=H0[e0],D?s0&&e.texSubImage2D(i.TEXTURE_2D,e0,0,0,u0.width,u0.height,i0,g0,u0.data):e.texImage2D(i.TEXTURE_2D,e0,v0,u0.width,u0.height,0,i0,g0,u0.data);_.generateMipmaps=!1}else D?(o0&&e.texStorage2D(i.TEXTURE_2D,p0,v0,Q.width,Q.height),s0&&z0(_,Q,i0,g0)):e.texImage2D(i.TEXTURE_2D,0,v0,Q.width,Q.height,0,i0,g0,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&o0&&e.texStorage3D(i.TEXTURE_2D_ARRAY,p0,v0,H0[0].width,H0[0].height,Q.depth);for(let e0=0,W=H0.length;e0<W;e0++)if(u0=H0[e0],_.format!==$t)if(i0!==null)if(D){if(s0)if(_.layerUpdates.size>0){const x0=Go(u0.width,u0.height,_.format,_.type);for(const D0 of _.layerUpdates){const rt=u0.data.subarray(D0*x0/u0.data.BYTES_PER_ELEMENT,(D0+1)*x0/u0.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,e0,0,0,D0,u0.width,u0.height,1,i0,rt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,e0,0,0,0,u0.width,u0.height,Q.depth,i0,u0.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,e0,v0,u0.width,u0.height,Q.depth,0,u0.data,0,0);else P0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?s0&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,e0,0,0,0,u0.width,u0.height,Q.depth,i0,g0,u0.data):e.texImage3D(i.TEXTURE_2D_ARRAY,e0,v0,u0.width,u0.height,Q.depth,0,i0,g0,u0.data)}else{D&&o0&&e.texStorage2D(i.TEXTURE_2D,p0,v0,H0[0].width,H0[0].height);for(let e0=0,W=H0.length;e0<W;e0++)u0=H0[e0],_.format!==$t?i0!==null?D?s0&&e.compressedTexSubImage2D(i.TEXTURE_2D,e0,0,0,u0.width,u0.height,i0,u0.data):e.compressedTexImage2D(i.TEXTURE_2D,e0,v0,u0.width,u0.height,0,u0.data):P0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?s0&&e.texSubImage2D(i.TEXTURE_2D,e0,0,0,u0.width,u0.height,i0,g0,u0.data):e.texImage2D(i.TEXTURE_2D,e0,v0,u0.width,u0.height,0,i0,g0,u0.data)}else if(_.isDataArrayTexture)if(D){if(o0&&e.texStorage3D(i.TEXTURE_2D_ARRAY,p0,v0,Q.width,Q.height,Q.depth),s0)if(_.layerUpdates.size>0){const e0=Go(Q.width,Q.height,_.format,_.type);for(const W of _.layerUpdates){const x0=Q.data.subarray(W*e0/Q.data.BYTES_PER_ELEMENT,(W+1)*e0/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,W,Q.width,Q.height,1,i0,g0,x0)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,i0,g0,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,v0,Q.width,Q.height,Q.depth,0,i0,g0,Q.data);else if(_.isData3DTexture)D?(o0&&e.texStorage3D(i.TEXTURE_3D,p0,v0,Q.width,Q.height,Q.depth),s0&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,i0,g0,Q.data)):e.texImage3D(i.TEXTURE_3D,0,v0,Q.width,Q.height,Q.depth,0,i0,g0,Q.data);else if(_.isFramebufferTexture){if(o0)if(D)e.texStorage2D(i.TEXTURE_2D,p0,v0,Q.width,Q.height);else{let e0=Q.width,W=Q.height;for(let x0=0;x0<p0;x0++)e.texImage2D(i.TEXTURE_2D,x0,v0,e0,W,0,i0,g0,null),e0>>=1,W>>=1}}else if(H0.length>0){if(D&&o0){const e0=b0(H0[0]);e.texStorage2D(i.TEXTURE_2D,p0,v0,e0.width,e0.height)}for(let e0=0,W=H0.length;e0<W;e0++)u0=H0[e0],D?s0&&e.texSubImage2D(i.TEXTURE_2D,e0,0,0,i0,g0,u0):e.texImage2D(i.TEXTURE_2D,e0,v0,i0,g0,u0);_.generateMipmaps=!1}else if(D){if(o0){const e0=b0(Q);e.texStorage2D(i.TEXTURE_2D,p0,v0,e0.width,e0.height)}s0&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,i0,g0,Q)}else e.texImage2D(i.TEXTURE_2D,0,v0,i0,g0,Q);f(_)&&h($),_0.__version=Y.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function t0(M,_,L){if(_.image.length!==6)return;const $=m0(M,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+L);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+L);const _0=q0.getPrimaries(q0.workingColorSpace),r0=_.colorSpace===Le?null:q0.getPrimaries(_.colorSpace),T0=_.colorSpace===Le||_0===r0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,T0);const R0=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,i0=[];for(let W=0;W<6;W++)!R0&&!Q?i0[W]=b(_.image[W],!0,s.maxCubemapSize):i0[W]=Q?_.image[W].image:_.image[W],i0[W]=st(_,i0[W]);const g0=i0[0],v0=r.convert(_.format,_.colorSpace),u0=r.convert(_.type),H0=E(_.internalFormat,v0,u0,_.colorSpace),D=_.isVideoTexture!==!0,o0=Y.__version===void 0||$===!0,s0=Z.dataReady;let p0=R(_,g0);J(i.TEXTURE_CUBE_MAP,_);let e0;if(R0){D&&o0&&e.texStorage2D(i.TEXTURE_CUBE_MAP,p0,H0,g0.width,g0.height);for(let W=0;W<6;W++){e0=i0[W].mipmaps;for(let x0=0;x0<e0.length;x0++){const D0=e0[x0];_.format!==$t?v0!==null?D?s0&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0,0,0,D0.width,D0.height,v0,D0.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0,H0,D0.width,D0.height,0,D0.data):P0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?s0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0,0,0,D0.width,D0.height,v0,u0,D0.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0,H0,D0.width,D0.height,0,v0,u0,D0.data)}}}else{if(e0=_.mipmaps,D&&o0){e0.length>0&&p0++;const W=b0(i0[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,p0,H0,W.width,W.height)}for(let W=0;W<6;W++)if(Q){D?s0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,i0[W].width,i0[W].height,v0,u0,i0[W].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,H0,i0[W].width,i0[W].height,0,v0,u0,i0[W].data);for(let x0=0;x0<e0.length;x0++){const rt=e0[x0].image[W].image;D?s0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0+1,0,0,rt.width,rt.height,v0,u0,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0+1,H0,rt.width,rt.height,0,v0,u0,rt.data)}}else{D?s0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,v0,u0,i0[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,H0,v0,u0,i0[W]);for(let x0=0;x0<e0.length;x0++){const D0=e0[x0];D?s0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0+1,0,0,v0,u0,D0.image[W]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+W,x0+1,H0,v0,u0,D0.image[W])}}}f(_)&&h(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function n0(M,_,L,$,Z,Y){const _0=r.convert(L.format,L.colorSpace),r0=r.convert(L.type),T0=E(L.internalFormat,_0,r0,L.colorSpace),R0=n.get(_),Q=n.get(L);if(Q.__renderTarget=_,!R0.__hasExternalTextures){const i0=Math.max(1,_.width>>Y),g0=Math.max(1,_.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,T0,i0,g0,_.depth,0,_0,r0,null):e.texImage2D(Z,Y,T0,i0,g0,0,_0,r0,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,Q.__webglTexture,0,C(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function C0(M,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const $=_.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=T(_.stencilBuffer,Z),_0=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),Y,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_0,i.RENDERBUFFER,M)}else{const $=_.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],_0=r.convert(Y.format,Y.colorSpace),r0=r.convert(Y.type),T0=E(Y.internalFormat,_0,r0,Y.colorSpace);ut(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),T0,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),T0,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,T0,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function A0(M,_,L){const $=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),J(i.TEXTURE_CUBE_MAP,_.depthTexture);const R0=r.convert(_.depthTexture.format),Q=r.convert(_.depthTexture.type);let i0;_.depthTexture.format===ye?i0=i.DEPTH_COMPONENT24:_.depthTexture.format===$e&&(i0=i.DEPTH24_STENCIL8);for(let g0=0;g0<6;g0++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+g0,0,i0,_.width,_.height,0,R0,Q,null)}}else B(_.depthTexture,0);const Y=Z.__webglTexture,_0=C(_),r0=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,T0=_.depthTexture.format===$e?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===ye)ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T0,r0,Y,0,_0):i.framebufferTexture2D(i.FRAMEBUFFER,T0,r0,Y,0);else if(_.depthTexture.format===$e)ut(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,T0,r0,Y,0,_0):i.framebufferTexture2D(i.FRAMEBUFFER,T0,r0,Y,0);else throw new Error("Unknown depthTexture format")}function w0(M){const _=n.get(M),L=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const $=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=$}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let $=0;$<6;$++)A0(_.__webglFramebuffer[$],M,$);else{const $=M.texture.mipmaps;$&&$.length>0?A0(_.__webglFramebuffer[0],M,0):A0(_.__webglFramebuffer,M,0)}else if(L){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),C0(_.__webglDepthbuffer[$],M,!1);else{const Z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else{const $=M.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),C0(_.__webglDepthbuffer,M,!1);else{const Z=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(M,_,L){const $=n.get(M);_!==void 0&&n0($.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&w0(M)}function W0(M){const _=M.texture,L=n.get(M),$=n.get(_);M.addEventListener("dispose",P);const Z=M.textures,Y=M.isWebGLCubeRenderTarget===!0,_0=Z.length>1;if(_0||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,o.memory.textures++),Y){L.__webglFramebuffer=[];for(let r0=0;r0<6;r0++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[r0]=[];for(let T0=0;T0<_.mipmaps.length;T0++)L.__webglFramebuffer[r0][T0]=i.createFramebuffer()}else L.__webglFramebuffer[r0]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let r0=0;r0<_.mipmaps.length;r0++)L.__webglFramebuffer[r0]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(_0)for(let r0=0,T0=Z.length;r0<T0;r0++){const R0=n.get(Z[r0]);R0.__webglTexture===void 0&&(R0.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&ut(M)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let r0=0;r0<Z.length;r0++){const T0=Z[r0];L.__webglColorRenderbuffer[r0]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[r0]);const R0=r.convert(T0.format,T0.colorSpace),Q=r.convert(T0.type),i0=E(T0.internalFormat,R0,Q,T0.colorSpace,M.isXRRenderTarget===!0),g0=C(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,g0,i0,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+r0,i.RENDERBUFFER,L.__webglColorRenderbuffer[r0])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),C0(L.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),J(i.TEXTURE_CUBE_MAP,_);for(let r0=0;r0<6;r0++)if(_.mipmaps&&_.mipmaps.length>0)for(let T0=0;T0<_.mipmaps.length;T0++)n0(L.__webglFramebuffer[r0][T0],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+r0,T0);else n0(L.__webglFramebuffer[r0],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+r0,0);f(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_0){for(let r0=0,T0=Z.length;r0<T0;r0++){const R0=Z[r0],Q=n.get(R0);let i0=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(i0=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(i0,Q.__webglTexture),J(i0,R0),n0(L.__webglFramebuffer,M,R0,i.COLOR_ATTACHMENT0+r0,i0,0),f(R0)&&h(i0)}e.unbindTexture()}else{let r0=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(r0=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(r0,$.__webglTexture),J(r0,_),_.mipmaps&&_.mipmaps.length>0)for(let T0=0;T0<_.mipmaps.length;T0++)n0(L.__webglFramebuffer[T0],M,_,i.COLOR_ATTACHMENT0,r0,T0);else n0(L.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,r0,0);f(_)&&h(r0),e.unbindTexture()}M.depthBuffer&&w0(M)}function j0(M){const _=M.textures;for(let L=0,$=_.length;L<$;L++){const Z=_[L];if(f(Z)){const Y=y(M),_0=n.get(Z).__webglTexture;e.bindTexture(Y,_0),h(Y),e.unbindTexture()}}}const K0=[],V0=[];function ct(M){if(M.samples>0){if(ut(M)===!1){const _=M.textures,L=M.width,$=M.height;let Z=i.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_0=n.get(M),r0=_.length>1;if(r0)for(let R0=0;R0<_.length;R0++)e.bindFramebuffer(i.FRAMEBUFFER,_0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R0,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+R0,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_0.__webglMultisampledFramebuffer);const T0=M.texture.mipmaps;T0&&T0.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_0.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_0.__webglFramebuffer);for(let R0=0;R0<_.length;R0++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),r0){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_0.__webglColorRenderbuffer[R0]);const Q=n.get(_[R0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,L,$,0,0,L,$,Z,i.NEAREST),c===!0&&(K0.length=0,V0.length=0,K0.push(i.COLOR_ATTACHMENT0+R0),M.depthBuffer&&M.resolveDepthBuffer===!1&&(K0.push(Y),V0.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V0)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K0))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),r0)for(let R0=0;R0<_.length;R0++){e.bindFramebuffer(i.FRAMEBUFFER,_0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R0,i.RENDERBUFFER,_0.__webglColorRenderbuffer[R0]);const Q=n.get(_[R0]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+R0,i.TEXTURE_2D,Q,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_0.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function C(M){return Math.min(s.maxSamples,M.samples)}function ut(M){const _=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z0(M){const _=o.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function st(M,_){const L=M.colorSpace,$=M.format,Z=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Mn&&L!==Le&&(q0.getTransfer(L)===Q0?($!==$t||Z!==Ot)&&P0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Y0("WebGLTextures: Unsupported texture color space:",L)),_}function b0(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=K,this.rebindTextures=ot,this.setupRenderTarget=W0,this.updateRenderTargetMipmap=j0,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=w0,this.setupFrameBufferTexture=n0,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function pf(i,t){function e(n,s=Le){let r;const o=q0.getTransfer(s);if(n===Ot)return i.UNSIGNED_BYTE;if(n===Ir)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ur)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ca)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ta)return i.BYTE;if(n===Aa)return i.SHORT;if(n===Hn)return i.UNSIGNED_SHORT;if(n===Lr)return i.INT;if(n===re)return i.UNSIGNED_INT;if(n===qt)return i.FLOAT;if(n===ve)return i.HALF_FLOAT;if(n===Ra)return i.ALPHA;if(n===Pa)return i.RGB;if(n===$t)return i.RGBA;if(n===ye)return i.DEPTH_COMPONENT;if(n===$e)return i.DEPTH_STENCIL;if(n===Fr)return i.RED;if(n===Nr)return i.RED_INTEGER;if(n===bn)return i.RG;if(n===Or)return i.RG_INTEGER;if(n===Br)return i.RGBA_INTEGER;if(n===Ai||n===wi||n===Ci||n===Ri)if(o===Q0)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ai)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ci)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ri)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ai)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ci)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ri)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gs||n===Ws||n===Xs||n===Ys)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ws)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xs)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ys)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qs||n===$s||n===js||n===Zs||n===Ks||n===Js||n===Qs)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qs||n===$s)return o===Q0?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===js)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zs)return r.COMPRESSED_R11_EAC;if(n===Ks)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Js)return r.COMPRESSED_RG11_EAC;if(n===Qs)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tr||n===er||n===nr||n===ir||n===sr||n===rr||n===or||n===ar||n===lr||n===cr||n===hr||n===ur||n===dr||n===fr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===er)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ir)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===or)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ar)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ur)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fr)return o===Q0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pr||n===mr||n===_r)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===pr)return o===Q0?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_r)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gr||n===xr||n===vr||n===yr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===kn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const mf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_f=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new za(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ae({vertexShader:mf,fragmentShader:_f,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xf extends Ze{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,p=null,u=null,m=null,g=null;const b=typeof XRWebGLBinding<"u",f=new gf,h={},y=e.getContextAttributes();let E=null,T=null;const R=[],A=[],P=new I0;let x=null;const S=new Pt;S.viewport=new at;const q=new Pt;q.viewport=new at;const w=[S,q],z=new wl;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let t0=R[G];return t0===void 0&&(t0=new ts,R[G]=t0),t0.getTargetRaySpace()},this.getControllerGrip=function(G){let t0=R[G];return t0===void 0&&(t0=new ts,R[G]=t0),t0.getGripSpace()},this.getHand=function(G){let t0=R[G];return t0===void 0&&(t0=new ts,R[G]=t0),t0.getHandSpace()};function B(G){const t0=A.indexOf(G.inputSource);if(t0===-1)return;const n0=R[t0];n0!==void 0&&(n0.update(G.inputSource,G.frame,l||o),n0.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",F);for(let G=0;G<R.length;G++){const t0=A[G];t0!==null&&(A[G]=null,R[G].disconnect(t0))}V=null,X=null,f.reset();for(const G in h)delete h[G];t.setRenderTarget(E),m=null,u=null,p=null,s=null,T=null,z0.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&P0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&P0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",H),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let n0=null,C0=null,A0=null;y.depth&&(A0=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,n0=y.stencil?$e:ye,C0=y.stencil?kn:re);const w0={colorFormat:e.RGBA8,depthFormat:A0,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(w0),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new ne(u.textureWidth,u.textureHeight,{format:$t,type:Ot,depthTexture:new Wn(u.textureWidth,u.textureHeight,C0,void 0,void 0,void 0,void 0,void 0,void 0,n0),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const n0={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,n0),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),T=new ne(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Ot,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),z0.setContext(s),z0.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function F(G){for(let t0=0;t0<G.removed.length;t0++){const n0=G.removed[t0],C0=A.indexOf(n0);C0>=0&&(A[C0]=null,R[C0].disconnect(n0))}for(let t0=0;t0<G.added.length;t0++){const n0=G.added[t0];let C0=A.indexOf(n0);if(C0===-1){for(let w0=0;w0<R.length;w0++)if(w0>=A.length){A.push(n0),C0=w0;break}else if(A[w0]===null){A[w0]=n0,C0=w0;break}if(C0===-1)break}const A0=R[C0];A0&&A0.connect(n0)}}const K=new I,j=new I;function a0(G,t0,n0){K.setFromMatrixPosition(t0.matrixWorld),j.setFromMatrixPosition(n0.matrixWorld);const C0=K.distanceTo(j),A0=t0.projectionMatrix.elements,w0=n0.projectionMatrix.elements,ot=A0[14]/(A0[10]-1),W0=A0[14]/(A0[10]+1),j0=(A0[9]+1)/A0[5],K0=(A0[9]-1)/A0[5],V0=(A0[8]-1)/A0[0],ct=(w0[8]+1)/w0[0],C=ot*V0,ut=ot*ct,Z0=C0/(-V0+ct),st=Z0*-V0;if(t0.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(st),G.translateZ(Z0),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),A0[10]===-1)G.projectionMatrix.copy(t0.projectionMatrix),G.projectionMatrixInverse.copy(t0.projectionMatrixInverse);else{const b0=ot+Z0,M=W0+Z0,_=C-st,L=ut+(C0-st),$=j0*W0/M*b0,Z=K0*W0/M*b0;G.projectionMatrix.makePerspective(_,L,$,Z,b0,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function d0(G,t0){t0===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(t0.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let t0=G.near,n0=G.far;f.texture!==null&&(f.depthNear>0&&(t0=f.depthNear),f.depthFar>0&&(n0=f.depthFar)),z.near=q.near=S.near=t0,z.far=q.far=S.far=n0,(V!==z.near||X!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,X=z.far),z.layers.mask=G.layers.mask|6,S.layers.mask=z.layers.mask&-5,q.layers.mask=z.layers.mask&-3;const C0=G.parent,A0=z.cameras;d0(z,C0);for(let w0=0;w0<A0.length;w0++)d0(A0[w0],C0);A0.length===2?a0(z,S,q):z.projectionMatrix.copy(S.projectionMatrix),J(G,z,C0)};function J(G,t0,n0){n0===null?G.matrix.copy(t0.matrixWorld):(G.matrix.copy(n0.matrixWorld),G.matrix.invert(),G.matrix.multiply(t0.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(t0.projectionMatrix),G.projectionMatrixInverse.copy(t0.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=br*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(G){c=G,u!==null&&(u.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(z)},this.getCameraTexture=function(G){return h[G]};let m0=null;function F0(G,t0){if(d=t0.getViewerPose(l||o),g=t0,d!==null){const n0=d.views;m!==null&&(t.setRenderTargetFramebuffer(T,m.framebuffer),t.setRenderTarget(T));let C0=!1;n0.length!==z.cameras.length&&(z.cameras.length=0,C0=!0);for(let W0=0;W0<n0.length;W0++){const j0=n0[W0];let K0=null;if(m!==null)K0=m.getViewport(j0);else{const ct=p.getViewSubImage(u,j0);K0=ct.viewport,W0===0&&(t.setRenderTargetTextures(T,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(T))}let V0=w[W0];V0===void 0&&(V0=new Pt,V0.layers.enable(W0),V0.viewport=new at,w[W0]=V0),V0.matrix.fromArray(j0.transform.matrix),V0.matrix.decompose(V0.position,V0.quaternion,V0.scale),V0.projectionMatrix.fromArray(j0.projectionMatrix),V0.projectionMatrixInverse.copy(V0.projectionMatrix).invert(),V0.viewport.set(K0.x,K0.y,K0.width,K0.height),W0===0&&(z.matrix.copy(V0.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),C0===!0&&z.cameras.push(V0)}const A0=s.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();const W0=p.getDepthInformation(n0[0]);W0&&W0.isValid&&W0.texture&&f.init(W0,s.renderState)}if(A0&&A0.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let W0=0;W0<n0.length;W0++){const j0=n0[W0].camera;if(j0){let K0=h[j0];K0||(K0=new za,h[j0]=K0);const V0=p.getCameraImage(j0);K0.sourceTexture=V0}}}}for(let n0=0;n0<R.length;n0++){const C0=A[n0],A0=R[n0];C0!==null&&A0!==void 0&&A0.update(C0,t0,l||o)}m0&&m0(G,t0),t0.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:t0}),g=null}const z0=new Ga;z0.setAnimationLoop(F0),this.setAnimationLoop=function(G){m0=G},this.dispose=function(){}}}const We=new oe,vf=new O0;function yf(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Va(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,y,E,T){h.isMeshBasicMaterial?r(f,h):h.isMeshLambertMaterial?(r(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(f,h),p(f,h)):h.isMeshPhongMaterial?(r(f,h),d(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(f,h),u(f,h),h.isMeshPhysicalMaterial&&m(f,h,T)):h.isMeshMatcapMaterial?(r(f,h),g(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),b(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,y,E):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Lt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Lt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const y=t.get(h),E=y.envMap,T=y.envMapRotation;E&&(f.envMap.value=E,We.copy(T),We.x*=-1,We.y*=-1,We.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(We.y*=-1,We.z*=-1),f.envMapRotation.value.setFromMatrix4(vf.makeRotationFromEuler(We)),f.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,y,E){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*y,f.scale.value=E*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,y){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function b(f,h){const y=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bf(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,E){const T=E.program;n.uniformBlockBinding(y,T)}function l(y,E){let T=s[y.id];T===void 0&&(g(y),T=d(y),s[y.id]=T,y.addEventListener("dispose",f));const R=E.program;n.updateUBOMapping(y,R);const A=t.render.frame;r[y.id]!==A&&(u(y),r[y.id]=A)}function d(y){const E=p();y.__bindingPointIndex=E;const T=i.createBuffer(),R=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Y0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const E=s[y.id],T=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,P=T.length;A<P;A++){const x=Array.isArray(T[A])?T[A]:[T[A]];for(let S=0,q=x.length;S<q;S++){const w=x[S];if(m(w,A,S,R)===!0){const z=w.__offset,V=Array.isArray(w.value)?w.value:[w.value];let X=0;for(let B=0;B<V.length;B++){const H=V[B],F=b(H);typeof H=="number"||typeof H=="boolean"?(w.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,z+X,w.__data)):H.isMatrix3?(w.__data[0]=H.elements[0],w.__data[1]=H.elements[1],w.__data[2]=H.elements[2],w.__data[3]=0,w.__data[4]=H.elements[3],w.__data[5]=H.elements[4],w.__data[6]=H.elements[5],w.__data[7]=0,w.__data[8]=H.elements[6],w.__data[9]=H.elements[7],w.__data[10]=H.elements[8],w.__data[11]=0):(H.toArray(w.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,E,T,R){const A=y.value,P=E+"_"+T;if(R[P]===void 0)return typeof A=="number"||typeof A=="boolean"?R[P]=A:R[P]=A.clone(),!0;{const x=R[P];if(typeof A=="number"||typeof A=="boolean"){if(x!==A)return R[P]=A,!0}else if(x.equals(A)===!1)return x.copy(A),!0}return!1}function g(y){const E=y.uniforms;let T=0;const R=16;for(let P=0,x=E.length;P<x;P++){const S=Array.isArray(E[P])?E[P]:[E[P]];for(let q=0,w=S.length;q<w;q++){const z=S[q],V=Array.isArray(z.value)?z.value:[z.value];for(let X=0,B=V.length;X<B;X++){const H=V[X],F=b(H),K=T%R,j=K%F.boundary,a0=K+j;T+=j,a0!==0&&R-a0<F.storage&&(T+=R-a0),z.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=F.storage}}}const A=T%R;return A>0&&(T+=R-A),y.__size=T,y.__cache={},this}function b(y){const E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?P0("WebGLRenderer: Texture samplers can not be part of an uniforms group."):P0("WebGLRenderer: Unsupported uniform value type.",y),E}function f(y){const E=y.target;E.removeEventListener("dispose",f);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}const Mf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function Sf(){return Jt===null&&(Jt=new Oa(Mf,16,16,bn,ve),Jt.name="DFG_LUT",Jt.minFilter=Et,Jt.magFilter=Et,Jt.wrapS=me,Jt.wrapT=me,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Ef{constructor(t={}){const{canvas:e=V1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ot}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const b=m,f=new Set([Br,Or,Nr]),h=new Set([Ot,re,Hn,kn,Ir,Ur]),y=new Uint32Array(4),E=new Int32Array(4);let T=null,R=null;const A=[],P=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ee,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let q=!1;this._outputColorSpace=zt;let w=0,z=0,V=null,X=-1,B=null;const H=new at,F=new at;let K=null;const j=new X0(0);let a0=0,d0=e.width,J=e.height,m0=1,F0=null,z0=null;const G=new at(0,0,d0,J),t0=new at(0,0,d0,J);let n0=!1;const C0=new Gr;let A0=!1,w0=!1;const ot=new O0,W0=new I,j0=new at,K0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V0=!1;function ct(){return V===null?m0:1}let C=n;function ut(v,U){return e.getContext(v,U)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Pr}`),e.addEventListener("webglcontextlost",x0,!1),e.addEventListener("webglcontextrestored",D0,!1),e.addEventListener("webglcontextcreationerror",rt,!1),C===null){const U="webgl2";if(C=ut(U,v),C===null)throw ut(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw Y0("WebGLRenderer: "+v.message),v}let Z0,st,b0,M,_,L,$,Z,Y,_0,r0,T0,R0,Q,i0,g0,v0,u0,H0,D,o0,s0,p0;function e0(){Z0=new Su(C),Z0.init(),o0=new pf(C,Z0),st=new mu(C,Z0,t,o0),b0=new df(C,Z0),st.reversedDepthBuffer&&u&&b0.buffers.depth.setReversed(!0),M=new Au(C),_=new Kd,L=new ff(C,Z0,b0,_,st,o0,M),$=new Mu(S),Z=new Dl(C),s0=new fu(C,Z),Y=new Eu(C,Z,M,s0),_0=new Cu(C,Y,Z,s0,M),u0=new wu(C,st,L),i0=new _u(_),r0=new Zd(S,$,Z0,st,s0,i0),T0=new yf(S,_),R0=new Qd,Q=new of(Z0),v0=new du(S,$,b0,_0,g,c),g0=new uf(S,_0,st),p0=new bf(C,M,st,b0),H0=new pu(C,Z0,M),D=new Tu(C,Z0,M),M.programs=r0.programs,S.capabilities=st,S.extensions=Z0,S.properties=_,S.renderLists=R0,S.shadowMap=g0,S.state=b0,S.info=M}e0(),b!==Ot&&(x=new Pu(b,e.width,e.height,s,r));const W=new xf(S,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=Z0.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Z0.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return m0},this.setPixelRatio=function(v){v!==void 0&&(m0=v,this.setSize(d0,J,!1))},this.getSize=function(v){return v.set(d0,J)},this.setSize=function(v,U,k=!0){if(W.isPresenting){P0("WebGLRenderer: Can't change size while VR device is presenting.");return}d0=v,J=U,e.width=Math.floor(v*m0),e.height=Math.floor(U*m0),k===!0&&(e.style.width=v+"px",e.style.height=U+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(d0*m0,J*m0).floor()},this.setDrawingBufferSize=function(v,U,k){d0=v,J=U,m0=k,e.width=Math.floor(v*k),e.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(b===Ot){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(H)},this.getViewport=function(v){return v.copy(G)},this.setViewport=function(v,U,k,O){v.isVector4?G.set(v.x,v.y,v.z,v.w):G.set(v,U,k,O),b0.viewport(H.copy(G).multiplyScalar(m0).round())},this.getScissor=function(v){return v.copy(t0)},this.setScissor=function(v,U,k,O){v.isVector4?t0.set(v.x,v.y,v.z,v.w):t0.set(v,U,k,O),b0.scissor(F.copy(t0).multiplyScalar(m0).round())},this.getScissorTest=function(){return n0},this.setScissorTest=function(v){b0.setScissorTest(n0=v)},this.setOpaqueSort=function(v){F0=v},this.setTransparentSort=function(v){z0=v},this.getClearColor=function(v){return v.copy(v0.getClearColor())},this.setClearColor=function(){v0.setClearColor(...arguments)},this.getClearAlpha=function(){return v0.getClearAlpha()},this.setClearAlpha=function(){v0.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,k=!0){let O=0;if(v){let N=!1;if(V!==null){const c0=V.texture.format;N=f.has(c0)}if(N){const c0=V.texture.type,f0=h.has(c0),h0=v0.getClearColor(),y0=v0.getClearAlpha(),S0=h0.r,U0=h0.g,k0=h0.b;f0?(y[0]=S0,y[1]=U0,y[2]=k0,y[3]=y0,C.clearBufferuiv(C.COLOR,0,y)):(E[0]=S0,E[1]=U0,E[2]=k0,E[3]=y0,C.clearBufferiv(C.COLOR,0,E))}else O|=C.COLOR_BUFFER_BIT}U&&(O|=C.DEPTH_BUFFER_BIT),k&&(O|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&C.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",x0,!1),e.removeEventListener("webglcontextrestored",D0,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),v0.dispose(),R0.dispose(),Q.dispose(),_.dispose(),$.dispose(),_0.dispose(),s0.dispose(),p0.dispose(),r0.dispose(),W.dispose(),W.removeEventListener("sessionstart",Jr),W.removeEventListener("sessionend",Qr),Oe.stop()};function x0(v){v.preventDefault(),mo("WebGLRenderer: Context Lost."),q=!0}function D0(){mo("WebGLRenderer: Context Restored."),q=!1;const v=M.autoReset,U=g0.enabled,k=g0.autoUpdate,O=g0.needsUpdate,N=g0.type;e0(),M.autoReset=v,g0.enabled=U,g0.autoUpdate=k,g0.needsUpdate=O,g0.type=N}function rt(v){Y0("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function J0(v){const U=v.target;U.removeEventListener("dispose",J0),le(U)}function le(v){ce(v),_.remove(v)}function ce(v){const U=_.get(v).programs;U!==void 0&&(U.forEach(function(k){r0.releaseProgram(k)}),v.isShaderMaterial&&r0.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,O,N,c0){U===null&&(U=K0);const f0=N.isMesh&&N.matrixWorld.determinant()<0,h0=e1(v,U,k,O,N);b0.setMaterial(O,f0);let y0=k.index,S0=1;if(O.wireframe===!0){if(y0=Y.getWireframeAttribute(k),y0===void 0)return;S0=2}const U0=k.drawRange,k0=k.attributes.position;let E0=U0.start*S0,tt=(U0.start+U0.count)*S0;c0!==null&&(E0=Math.max(E0,c0.start*S0),tt=Math.min(tt,(c0.start+c0.count)*S0)),y0!==null?(E0=Math.max(E0,0),tt=Math.min(tt,y0.count)):k0!=null&&(E0=Math.max(E0,0),tt=Math.min(tt,k0.count));const ht=tt-E0;if(ht<0||ht===1/0)return;s0.setup(N,O,h0,k,y0);let lt,et=H0;if(y0!==null&&(lt=Z.get(y0),et=D,et.setIndex(lt)),N.isMesh)O.wireframe===!0?(b0.setLineWidth(O.wireframeLinewidth*ct()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(N.isLine){let bt=O.linewidth;bt===void 0&&(bt=1),b0.setLineWidth(bt*ct()),N.isLineSegments?et.setMode(C.LINES):N.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else N.isPoints?et.setMode(C.POINTS):N.isSprite&&et.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ui("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Z0.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,M0=N._multiDrawCounts,Ut=N._multiDrawCount,$0=y0?Z.get(y0).bytesPerElement:1,Ht=_.get(O).currentProgram.getUniforms();for(let Zt=0;Zt<Ut;Zt++)Ht.setValue(C,"_gl_DrawID",Zt),et.render(bt[Zt]/$0,M0[Zt])}else if(N.isInstancedMesh)et.renderInstances(E0,ht,N.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,M0=Math.min(k.instanceCount,bt);et.renderInstances(E0,ht,M0)}else et.render(E0,ht)};function Kr(v,U,k){v.transparent===!0&&v.side===Xt&&v.forceSinglePass===!1?(v.side=Lt,v.needsUpdate=!0,Kn(v,U,k),v.side=Fe,v.needsUpdate=!0,Kn(v,U,k),v.side=Xt):Kn(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),R=Q.get(k),R.init(U),P.push(R),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),R.setupLights();const O=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const c0=N.material;if(c0)if(Array.isArray(c0))for(let f0=0;f0<c0.length;f0++){const h0=c0[f0];Kr(h0,k,N),O.add(h0)}else Kr(c0,k,N),O.add(c0)}),R=P.pop(),O},this.compileAsync=function(v,U,k=null){const O=this.compile(v,U,k);return new Promise(N=>{function c0(){if(O.forEach(function(f0){_.get(f0).currentProgram.isReady()&&O.delete(f0)}),O.size===0){N(v);return}setTimeout(c0,10)}Z0.get("KHR_parallel_shader_compile")!==null?c0():setTimeout(c0,10)})};let Gi=null;function t1(v){Gi&&Gi(v)}function Jr(){Oe.stop()}function Qr(){Oe.start()}const Oe=new Ga;Oe.setAnimationLoop(t1),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(v){Gi=v,W.setAnimationLoop(v),v===null?Oe.stop():Oe.start()},W.addEventListener("sessionstart",Jr),W.addEventListener("sessionend",Qr),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Y0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;const k=W.enabled===!0&&W.isPresenting===!0,O=x!==null&&(V===null||k)&&x.begin(S,V);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(U),U=W.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,V),R=Q.get(v,P.length),R.init(U),P.push(R),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),C0.setFromProjectionMatrix(ot,te,U.reversedDepth),w0=this.localClippingEnabled,A0=i0.init(this.clippingPlanes,w0),T=R0.get(v,A.length),T.init(),A.push(T),W.enabled===!0&&W.isPresenting===!0){const f0=S.xr.getDepthSensingMesh();f0!==null&&Wi(f0,U,-1/0,S.sortObjects)}Wi(v,U,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(F0,z0),V0=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,V0&&v0.addToRenderList(T,v),this.info.render.frame++,A0===!0&&i0.beginShadows();const N=R.state.shadowsArray;if(g0.render(N,v,U),A0===!0&&i0.endShadows(),this.info.autoReset===!0&&this.info.reset(),(O&&x.hasRenderPass())===!1){const f0=T.opaque,h0=T.transmissive;if(R.setupLights(),U.isArrayCamera){const y0=U.cameras;if(h0.length>0)for(let S0=0,U0=y0.length;S0<U0;S0++){const k0=y0[S0];eo(f0,h0,v,k0)}V0&&v0.render(v);for(let S0=0,U0=y0.length;S0<U0;S0++){const k0=y0[S0];to(T,v,k0,k0.viewport)}}else h0.length>0&&eo(f0,h0,v,U),V0&&v0.render(v),to(T,v,U)}V!==null&&z===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),O&&x.end(S),v.isScene===!0&&v.onAfterRender(S,v,U),s0.resetDefaultState(),X=-1,B=null,P.pop(),P.length>0?(R=P[P.length-1],A0===!0&&i0.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?T=A[A.length-1]:T=null};function Wi(v,U,k,O){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||C0.intersectsSprite(v)){O&&j0.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);const f0=_0.update(v),h0=v.material;h0.visible&&T.push(v,f0,h0,k,j0.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||C0.intersectsObject(v))){const f0=_0.update(v),h0=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),j0.copy(v.boundingSphere.center)):(f0.boundingSphere===null&&f0.computeBoundingSphere(),j0.copy(f0.boundingSphere.center)),j0.applyMatrix4(v.matrixWorld).applyMatrix4(ot)),Array.isArray(h0)){const y0=f0.groups;for(let S0=0,U0=y0.length;S0<U0;S0++){const k0=y0[S0],E0=h0[k0.materialIndex];E0&&E0.visible&&T.push(v,f0,E0,k,j0.z,k0)}}else h0.visible&&T.push(v,f0,h0,k,j0.z,null)}}const c0=v.children;for(let f0=0,h0=c0.length;f0<h0;f0++)Wi(c0[f0],U,k,O)}function to(v,U,k,O){const{opaque:N,transmissive:c0,transparent:f0}=v;R.setupLightsView(k),A0===!0&&i0.setGlobalState(S.clippingPlanes,k),O&&b0.viewport(H.copy(O)),N.length>0&&Zn(N,U,k),c0.length>0&&Zn(c0,U,k),f0.length>0&&Zn(f0,U,k),b0.buffers.depth.setTest(!0),b0.buffers.depth.setMask(!0),b0.buffers.color.setMask(!0),b0.setPolygonOffset(!1)}function eo(v,U,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[O.id]===void 0){const E0=Z0.has("EXT_color_buffer_half_float")||Z0.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[O.id]=new ne(1,1,{generateMipmaps:!0,type:E0?ve:Ot,minFilter:qe,samples:Math.max(4,st.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:q0.workingColorSpace})}const c0=R.state.transmissionRenderTarget[O.id],f0=O.viewport||H;c0.setSize(f0.z*S.transmissionResolutionScale,f0.w*S.transmissionResolutionScale);const h0=S.getRenderTarget(),y0=S.getActiveCubeFace(),S0=S.getActiveMipmapLevel();S.setRenderTarget(c0),S.getClearColor(j),a0=S.getClearAlpha(),a0<1&&S.setClearColor(16777215,.5),S.clear(),V0&&v0.render(k);const U0=S.toneMapping;S.toneMapping=ee;const k0=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),R.setupLightsView(O),A0===!0&&i0.setGlobalState(S.clippingPlanes,O),Zn(v,k,O),L.updateMultisampleRenderTarget(c0),L.updateRenderTargetMipmap(c0),Z0.has("WEBGL_multisampled_render_to_texture")===!1){let E0=!1;for(let tt=0,ht=U.length;tt<ht;tt++){const lt=U[tt],{object:et,geometry:bt,material:M0,group:Ut}=lt;if(M0.side===Xt&&et.layers.test(O.layers)){const $0=M0.side;M0.side=Lt,M0.needsUpdate=!0,no(et,k,O,bt,M0,Ut),M0.side=$0,M0.needsUpdate=!0,E0=!0}}E0===!0&&(L.updateMultisampleRenderTarget(c0),L.updateRenderTargetMipmap(c0))}S.setRenderTarget(h0,y0,S0),S.setClearColor(j,a0),k0!==void 0&&(O.viewport=k0),S.toneMapping=U0}function Zn(v,U,k){const O=U.isScene===!0?U.overrideMaterial:null;for(let N=0,c0=v.length;N<c0;N++){const f0=v[N],{object:h0,geometry:y0,group:S0}=f0;let U0=f0.material;U0.allowOverride===!0&&O!==null&&(U0=O),h0.layers.test(k.layers)&&no(h0,U,k,y0,U0,S0)}}function no(v,U,k,O,N,c0){v.onBeforeRender(S,U,k,O,N,c0),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(S,U,k,O,v,c0),N.transparent===!0&&N.side===Xt&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,S.renderBufferDirect(k,U,O,N,v,c0),N.side=Fe,N.needsUpdate=!0,S.renderBufferDirect(k,U,O,N,v,c0),N.side=Xt):S.renderBufferDirect(k,U,O,N,v,c0),v.onAfterRender(S,U,k,O,N,c0)}function Kn(v,U,k){U.isScene!==!0&&(U=K0);const O=_.get(v),N=R.state.lights,c0=R.state.shadowsArray,f0=N.state.version,h0=r0.getParameters(v,N.state,c0,U,k),y0=r0.getProgramCacheKey(h0);let S0=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,O.fog=U.fog;const U0=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=$.get(v.envMap||O.environment,U0),O.envMapRotation=O.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,S0===void 0&&(v.addEventListener("dispose",J0),S0=new Map,O.programs=S0);let k0=S0.get(y0);if(k0!==void 0){if(O.currentProgram===k0&&O.lightsStateVersion===f0)return so(v,h0),k0}else h0.uniforms=r0.getUniforms(v),v.onBeforeCompile(h0,S),k0=r0.acquireProgram(h0,y0),S0.set(y0,k0),O.uniforms=h0.uniforms;const E0=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(E0.clippingPlanes=i0.uniform),so(v,h0),O.needsLights=i1(v),O.lightsStateVersion=f0,O.needsLights&&(E0.ambientLightColor.value=N.state.ambient,E0.lightProbe.value=N.state.probe,E0.directionalLights.value=N.state.directional,E0.directionalLightShadows.value=N.state.directionalShadow,E0.spotLights.value=N.state.spot,E0.spotLightShadows.value=N.state.spotShadow,E0.rectAreaLights.value=N.state.rectArea,E0.ltc_1.value=N.state.rectAreaLTC1,E0.ltc_2.value=N.state.rectAreaLTC2,E0.pointLights.value=N.state.point,E0.pointLightShadows.value=N.state.pointShadow,E0.hemisphereLights.value=N.state.hemi,E0.directionalShadowMatrix.value=N.state.directionalShadowMatrix,E0.spotLightMatrix.value=N.state.spotLightMatrix,E0.spotLightMap.value=N.state.spotLightMap,E0.pointShadowMatrix.value=N.state.pointShadowMatrix),O.currentProgram=k0,O.uniformsList=null,k0}function io(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Di.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function so(v,U){const k=_.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function e1(v,U,k,O,N){U.isScene!==!0&&(U=K0),L.resetTextureUnits();const c0=U.fog,f0=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?U.environment:null,h0=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Mn,y0=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,S0=$.get(O.envMap||f0,y0),U0=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,k0=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),E0=!!k.morphAttributes.position,tt=!!k.morphAttributes.normal,ht=!!k.morphAttributes.color;let lt=ee;O.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(lt=S.toneMapping);const et=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=et!==void 0?et.length:0,M0=_.get(O),Ut=R.state.lights;if(A0===!0&&(w0===!0||v!==B)){const _t=v===B&&O.id===X;i0.setState(O,v,_t)}let $0=!1;O.version===M0.__version?(M0.needsLights&&M0.lightsStateVersion!==Ut.state.version||M0.outputColorSpace!==h0||N.isBatchedMesh&&M0.batching===!1||!N.isBatchedMesh&&M0.batching===!0||N.isBatchedMesh&&M0.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&M0.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&M0.instancing===!1||!N.isInstancedMesh&&M0.instancing===!0||N.isSkinnedMesh&&M0.skinning===!1||!N.isSkinnedMesh&&M0.skinning===!0||N.isInstancedMesh&&M0.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&M0.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&M0.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&M0.instancingMorph===!1&&N.morphTexture!==null||M0.envMap!==S0||O.fog===!0&&M0.fog!==c0||M0.numClippingPlanes!==void 0&&(M0.numClippingPlanes!==i0.numPlanes||M0.numIntersection!==i0.numIntersection)||M0.vertexAlphas!==U0||M0.vertexTangents!==k0||M0.morphTargets!==E0||M0.morphNormals!==tt||M0.morphColors!==ht||M0.toneMapping!==lt||M0.morphTargetsCount!==bt)&&($0=!0):($0=!0,M0.__version=O.version);let Ht=M0.currentProgram;$0===!0&&(Ht=Kn(O,U,N));let Zt=!1,Be=!1,Je=!1;const it=Ht.getUniforms(),xt=M0.uniforms;if(b0.useProgram(Ht.program)&&(Zt=!0,Be=!0,Je=!0),O.id!==X&&(X=O.id,Be=!0),Zt||B!==v){b0.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),it.setValue(C,"projectionMatrix",v.projectionMatrix),it.setValue(C,"viewMatrix",v.matrixWorldInverse);const Se=it.map.cameraPosition;Se!==void 0&&Se.setValue(C,W0.setFromMatrixPosition(v.matrixWorld)),st.logarithmicDepthBuffer&&it.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&it.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),B!==v&&(B=v,Be=!0,Je=!0)}if(M0.needsLights&&(Ut.state.directionalShadowMap.length>0&&it.setValue(C,"directionalShadowMap",Ut.state.directionalShadowMap,L),Ut.state.spotShadowMap.length>0&&it.setValue(C,"spotShadowMap",Ut.state.spotShadowMap,L),Ut.state.pointShadowMap.length>0&&it.setValue(C,"pointShadowMap",Ut.state.pointShadowMap,L)),N.isSkinnedMesh){it.setOptional(C,N,"bindMatrix"),it.setOptional(C,N,"bindMatrixInverse");const _t=N.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),it.setValue(C,"boneTexture",_t.boneTexture,L))}N.isBatchedMesh&&(it.setOptional(C,N,"batchingTexture"),it.setValue(C,"batchingTexture",N._matricesTexture,L),it.setOptional(C,N,"batchingIdTexture"),it.setValue(C,"batchingIdTexture",N._indirectTexture,L),it.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&it.setValue(C,"batchingColorTexture",N._colorsTexture,L));const Me=k.morphAttributes;if((Me.position!==void 0||Me.normal!==void 0||Me.color!==void 0)&&u0.update(N,k,Ht),(Be||M0.receiveShadow!==N.receiveShadow)&&(M0.receiveShadow=N.receiveShadow,it.setValue(C,"receiveShadow",N.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&U.environment!==null&&(xt.envMapIntensity.value=U.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Sf()),Be&&(it.setValue(C,"toneMappingExposure",S.toneMappingExposure),M0.needsLights&&n1(xt,Je),c0&&O.fog===!0&&T0.refreshFogUniforms(xt,c0),T0.refreshMaterialUniforms(xt,O,m0,J,R.state.transmissionRenderTarget[v.id]),Di.upload(C,io(M0),xt,L)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Di.upload(C,io(M0),xt,L),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&it.setValue(C,"center",N.center),it.setValue(C,"modelViewMatrix",N.modelViewMatrix),it.setValue(C,"normalMatrix",N.normalMatrix),it.setValue(C,"modelMatrix",N.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const _t=O.uniformsGroups;for(let Se=0,Qe=_t.length;Se<Qe;Se++){const ro=_t[Se];p0.update(ro,Ht),p0.bind(ro,Ht)}}return Ht}function n1(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function i1(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,U,k){const O=_.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),_.get(v.texture).__webglTexture=U,_.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const k=_.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const s1=C.createFramebuffer();this.setRenderTarget=function(v,U=0,k=0){V=v,w=U,z=k;let O=null,N=!1,c0=!1;if(v){const h0=_.get(v);if(h0.__useDefaultFramebuffer!==void 0){b0.bindFramebuffer(C.FRAMEBUFFER,h0.__webglFramebuffer),H.copy(v.viewport),F.copy(v.scissor),K=v.scissorTest,b0.viewport(H),b0.scissor(F),b0.setScissorTest(K),X=-1;return}else if(h0.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(h0.__hasExternalTextures)L.rebindTextures(v,_.get(v.texture).__webglTexture,_.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const U0=v.depthTexture;if(h0.__boundDepthTexture!==U0){if(U0!==null&&_.has(U0)&&(v.width!==U0.image.width||v.height!==U0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const y0=v.texture;(y0.isData3DTexture||y0.isDataArrayTexture||y0.isCompressedArrayTexture)&&(c0=!0);const S0=_.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(S0[U])?O=S0[U][k]:O=S0[U],N=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?O=_.get(v).__webglMultisampledFramebuffer:Array.isArray(S0)?O=S0[k]:O=S0,H.copy(v.viewport),F.copy(v.scissor),K=v.scissorTest}else H.copy(G).multiplyScalar(m0).floor(),F.copy(t0).multiplyScalar(m0).floor(),K=n0;if(k!==0&&(O=s1),b0.bindFramebuffer(C.FRAMEBUFFER,O)&&b0.drawBuffers(v,O),b0.viewport(H),b0.scissor(F),b0.setScissorTest(K),N){const h0=_.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,h0.__webglTexture,k)}else if(c0){const h0=U;for(let y0=0;y0<v.textures.length;y0++){const S0=_.get(v.textures[y0]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+y0,S0.__webglTexture,k,h0)}}else if(v!==null&&k!==0){const h0=_.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,h0.__webglTexture,k)}X=-1},this.readRenderTargetPixels=function(v,U,k,O,N,c0,f0,h0=0){if(!(v&&v.isWebGLRenderTarget)){Y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let y0=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&f0!==void 0&&(y0=y0[f0]),y0){b0.bindFramebuffer(C.FRAMEBUFFER,y0);try{const S0=v.textures[h0],U0=S0.format,k0=S0.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+h0),!st.textureFormatReadable(U0)){Y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(k0)){Y0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-O&&k>=0&&k<=v.height-N&&C.readPixels(U,k,O,N,o0.convert(U0),o0.convert(k0),c0)}finally{const S0=V!==null?_.get(V).__webglFramebuffer:null;b0.bindFramebuffer(C.FRAMEBUFFER,S0)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,O,N,c0,f0,h0=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let y0=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&f0!==void 0&&(y0=y0[f0]),y0)if(U>=0&&U<=v.width-O&&k>=0&&k<=v.height-N){b0.bindFramebuffer(C.FRAMEBUFFER,y0);const S0=v.textures[h0],U0=S0.format,k0=S0.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+h0),!st.textureFormatReadable(U0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(k0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const E0=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,E0),C.bufferData(C.PIXEL_PACK_BUFFER,c0.byteLength,C.STREAM_READ),C.readPixels(U,k,O,N,o0.convert(U0),o0.convert(k0),0);const tt=V!==null?_.get(V).__webglFramebuffer:null;b0.bindFramebuffer(C.FRAMEBUFFER,tt);const ht=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await H1(C,ht,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,E0),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,c0),C.deleteBuffer(E0),C.deleteSync(ht),c0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,k=0){const O=Math.pow(2,-k),N=Math.floor(v.image.width*O),c0=Math.floor(v.image.height*O),f0=U!==null?U.x:0,h0=U!==null?U.y:0;L.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,f0,h0,N,c0),b0.unbindTexture()};const r1=C.createFramebuffer(),o1=C.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,O=null,N=0,c0=0){let f0,h0,y0,S0,U0,k0,E0,tt,ht;const lt=v.isCompressedTexture?v.mipmaps[c0]:v.image;if(k!==null)f0=k.max.x-k.min.x,h0=k.max.y-k.min.y,y0=k.isBox3?k.max.z-k.min.z:1,S0=k.min.x,U0=k.min.y,k0=k.isBox3?k.min.z:0;else{const xt=Math.pow(2,-N);f0=Math.floor(lt.width*xt),h0=Math.floor(lt.height*xt),v.isDataArrayTexture?y0=lt.depth:v.isData3DTexture?y0=Math.floor(lt.depth*xt):y0=1,S0=0,U0=0,k0=0}O!==null?(E0=O.x,tt=O.y,ht=O.z):(E0=0,tt=0,ht=0);const et=o0.convert(U.format),bt=o0.convert(U.type);let M0;U.isData3DTexture?(L.setTexture3D(U,0),M0=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),M0=C.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),M0=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=C.getParameter(C.UNPACK_ROW_LENGTH),$0=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ht=C.getParameter(C.UNPACK_SKIP_PIXELS),Zt=C.getParameter(C.UNPACK_SKIP_ROWS),Be=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,lt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,S0),C.pixelStorei(C.UNPACK_SKIP_ROWS,U0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,k0);const Je=v.isDataArrayTexture||v.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const xt=_.get(v),Me=_.get(U),_t=_.get(xt.__renderTarget),Se=_.get(Me.__renderTarget);b0.bindFramebuffer(C.READ_FRAMEBUFFER,_t.__webglFramebuffer),b0.bindFramebuffer(C.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Qe=0;Qe<y0;Qe++)Je&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(v).__webglTexture,N,k0+Qe),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(U).__webglTexture,c0,ht+Qe)),C.blitFramebuffer(S0,U0,f0,h0,E0,tt,f0,h0,C.DEPTH_BUFFER_BIT,C.NEAREST);b0.bindFramebuffer(C.READ_FRAMEBUFFER,null),b0.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||_.has(v)){const xt=_.get(v),Me=_.get(U);b0.bindFramebuffer(C.READ_FRAMEBUFFER,r1),b0.bindFramebuffer(C.DRAW_FRAMEBUFFER,o1);for(let _t=0;_t<y0;_t++)Je?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.__webglTexture,N,k0+_t):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,N),it?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Me.__webglTexture,c0,ht+_t):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Me.__webglTexture,c0),N!==0?C.blitFramebuffer(S0,U0,f0,h0,E0,tt,f0,h0,C.COLOR_BUFFER_BIT,C.NEAREST):it?C.copyTexSubImage3D(M0,c0,E0,tt,ht+_t,S0,U0,f0,h0):C.copyTexSubImage2D(M0,c0,E0,tt,S0,U0,f0,h0);b0.bindFramebuffer(C.READ_FRAMEBUFFER,null),b0.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else it?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(M0,c0,E0,tt,ht,f0,h0,y0,et,bt,lt.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(M0,c0,E0,tt,ht,f0,h0,y0,et,lt.data):C.texSubImage3D(M0,c0,E0,tt,ht,f0,h0,y0,et,bt,lt):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,c0,E0,tt,f0,h0,et,bt,lt.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,c0,E0,tt,lt.width,lt.height,et,lt.data):C.texSubImage2D(C.TEXTURE_2D,c0,E0,tt,f0,h0,et,bt,lt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,$0),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ht),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be),c0===0&&U.generateMipmaps&&C.generateMipmap(M0),b0.unbindTexture()},this.initRenderTarget=function(v){_.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),b0.unbindTexture()},this.resetState=function(){w=0,z=0,V=null,b0.reset(),s0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return te}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=q0._getDrawingBufferColorSpace(t),e.unpackColorSpace=q0._getUnpackColorSpace()}}const fa={type:"change"},qr={type:"start"},ja={type:"end"},Ei=new zi,pa=new De,Tf=Math.cos(70*W1.DEG2RAD),ft=new I,Rt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},As=1e-6;class ws extends Rl{constructor(t,e=null){super(t,e),this.state=nt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_e.ROTATE,MIDDLE:_e.DOLLY,RIGHT:_e.PAN},this.touches={ONE:_n.ROTATE,TWO:_n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ne,this._lastTargetPosition=new I,this._quat=new Ne().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ko,this._sphericalDelta=new ko,this._scale=1,this._panOffset=new I,this._rotateStart=new I0,this._rotateEnd=new I0,this._rotateDelta=new I0,this._panStart=new I0,this._panEnd=new I0,this._panDelta=new I0,this._dollyStart=new I0,this._dollyEnd=new I0,this._dollyDelta=new I0,this._dollyDirection=new I,this._mouse=new I0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wf.bind(this),this._onPointerDown=Af.bind(this),this._onPointerUp=Cf.bind(this),this._onContextMenu=Ff.bind(this),this._onMouseWheel=Df.bind(this),this._onKeyDown=Lf.bind(this),this._onTouchStart=If.bind(this),this._onTouchMove=Uf.bind(this),this._onMouseDown=Rf.bind(this),this._onMouseMove=Pf.bind(this),this._interceptControlDown=Nf.bind(this),this._interceptControlUp=Of.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(fa),this.update(),this.state=nt.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ft.copy(e).sub(this.target),ft.applyQuaternion(this._quat),this._spherical.setFromVector3(ft),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),s<-Math.PI?s+=Rt:s>Math.PI&&(s-=Rt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ft.setFromSpherical(this._spherical),ft.applyQuaternion(this._quatInverse),e.copy(this.target).add(ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ft.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ei.origin.copy(this.object.position),Ei.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ei.direction))<Tf?this.object.lookAt(this.target):(pa.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ei.intersectPlane(pa,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>As||8*(1-this._lastQuaternion.dot(this.object.quaternion))>As||this._lastTargetPosition.distanceToSquared(this.target)>As?(this.dispatchEvent(fa),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rt/60*this.autoRotateSpeed*t:Rt/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ft.setFromMatrixColumn(e,0),ft.multiplyScalar(-t),this._panOffset.add(ft)}_panUp(t,e){this.screenSpacePanning===!0?ft.setFromMatrixColumn(e,1):(ft.setFromMatrixColumn(e,0),ft.crossVectors(this.object.up,ft)),ft.multiplyScalar(t),this._panOffset.add(ft)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ft.copy(s).sub(this.target);let r=ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new I0,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Af(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wf(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Cf(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ja),this.state=nt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Rf(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case _e.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case _e.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case _e.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(qr)}function Pf(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Df(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(qr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ja))}function Lf(i){this.enabled!==!1&&this._handleKeyDown(i)}function If(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _n.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case _n.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case _n.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case _n.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(qr)}function Uf(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function Ff(i){this.enabled!==!1&&i.preventDefault()}function Nf(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Of(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class ie{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),ie.nextNameID=ie.nextNameID||0,this.$name.id=`lil-gui-name-${++ie.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Bf extends ie{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ar(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const zf={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Ar,toHexString:Ar},Xn={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},Vf={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,t,e=1){const n=Xn.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Xn.toHexString(s)}},Hf={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Xn.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return Xn.toHexString(s)}},kf=[zf,Xn,Vf,Hf];function Gf(i){return kf.find(t=>t.match(i))}class Wf extends ie{constructor(t,e,n,s){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Gf(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ar(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Cs extends ie{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Xf extends ie{constructor(t,e,n,s,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const E=parseFloat(this.$input.value);isNaN(E)||(this._snapClampSetValue(E+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,c,l,d,p;const u=5,m=y=>{a=y.clientX,c=l=y.clientY,o=!0,d=this.getValue(),p=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",b)},g=y=>{if(o){const E=y.clientX-a,T=y.clientY-c;Math.abs(T)>u?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(E)>u&&b()}if(!o){const E=y.clientY-l;p-=E*this._step*this._arrowKeyMultiplier(y),d+p>this._max?p=this._max-d:d+p<this._min&&(p=this._min-d),this._snapClampSetValue(d+p)}l=y.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",b)},f=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(h,y,E,T,R)=>(h-y)/(E-y)*(R-T)+T,e=h=>{const y=this.$slider.getBoundingClientRect();let E=t(h,y.left,y.right,this._min,this._max);this._snapClampSetValue(E)},n=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{e(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},d=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,c=h.touches[0].clientY,o=!0):l(h),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",u))},p=h=>{if(o){const y=h.touches[0].clientX-a,E=h.touches[0].clientY-c;Math.abs(y)>Math.abs(E)?l(h):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",u))}else h.preventDefault(),e(h.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),g=400;let b;const f=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const E=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+E),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Yf extends ie{constructor(t,e,n,s){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class qf extends ie{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var $f=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function jf(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ma=!1;class $r{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!ma&&a&&(jf($f),ma=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Yf(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Xf(this,t,e,n,s,r);case"boolean":return new Bf(this,t,e);case"string":return new qf(this,t,e);case"function":return new Cs(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Wf(this,t,e,n)}addFolder(t){const e=new $r({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Cs||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Cs)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Rs={1:{number:1,symbol_hm:"P1",crystal_system:"Triclinic",point_group:"1",full_symbol:"P1",operations_count:1,operations:[[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},2:{number:2,symbol_hm:"P-1",crystal_system:"Triclinic",point_group:"-1",full_symbol:"P-1",operations_count:2,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},3:{number:3,symbol_hm:"P121",crystal_system:"Monoclinic",point_group:"2",full_symbol:"P121",operations_count:2,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},4:{number:4,symbol_hm:"P12_11",crystal_system:"Monoclinic",point_group:"2",full_symbol:"P12_11",operations_count:2,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},5:{number:5,symbol_hm:"C121",crystal_system:"Monoclinic",point_group:"2",full_symbol:"C121",operations_count:4,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},6:{number:6,symbol_hm:"P1m1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"P1m1",operations_count:2,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},7:{number:7,symbol_hm:"P1c1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"P1c1",operations_count:2,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},8:{number:8,symbol_hm:"C1m1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"C1m1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},9:{number:9,symbol_hm:"C1c1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"C1c1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},10:{number:10,symbol_hm:"P12/m1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12/m1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},11:{number:11,symbol_hm:"P12_1/m1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12_1/m1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},12:{number:12,symbol_hm:"C12/m1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"C12/m1",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},13:{number:13,symbol_hm:"P12/c1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12/c1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},14:{number:14,symbol_hm:"P12_1/c1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12_1/c1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},15:{number:15,symbol_hm:"C12/c1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"C12/c1",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},16:{number:16,symbol_hm:"P222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P222",operations_count:4,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},17:{number:17,symbol_hm:"P222_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P222_1",operations_count:4,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},18:{number:18,symbol_hm:"P2_12_12",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P2_12_12",operations_count:4,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},19:{number:19,symbol_hm:"P2_12_12_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P2_12_12_1",operations_count:4,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},20:{number:20,symbol_hm:"C222_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"C222_1",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]]]},21:{number:21,symbol_hm:"C222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"C222",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]]]},22:{number:22,symbol_hm:"F222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"F222",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]]]},23:{number:23,symbol_hm:"I222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"I222",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]]]},24:{number:24,symbol_hm:"I2_12_12_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"I2_12_12_1",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]]]},25:{number:25,symbol_hm:"Pmm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pmm2",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},26:{number:26,symbol_hm:"Pmc2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pmc2_1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},27:{number:27,symbol_hm:"Pcc2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pcc2",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},28:{number:28,symbol_hm:"Pma2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pma2",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},29:{number:29,symbol_hm:"Pca2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pca2_1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},30:{number:30,symbol_hm:"Pnc2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pnc2",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},31:{number:31,symbol_hm:"Pmn2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pmn2_1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},32:{number:32,symbol_hm:"Pba2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pba2",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},33:{number:33,symbol_hm:"Pna2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pna2_1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},34:{number:34,symbol_hm:"Pnn2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pnn2",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},35:{number:35,symbol_hm:"Cmm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Cmm2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},36:{number:36,symbol_hm:"Cmc2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Cmc2_1",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},37:{number:37,symbol_hm:"Ccc2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Ccc2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},38:{number:38,symbol_hm:"Amm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Amm2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},39:{number:39,symbol_hm:"Aem2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Aem2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]]]},40:{number:40,symbol_hm:"Ama2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Ama2",operations_count:8,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},41:{number:41,symbol_hm:"Aea2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Aea2",operations_count:8,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]]]},42:{number:42,symbol_hm:"Fmm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Fmm2",operations_count:16,operations:[[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},43:{number:43,symbol_hm:"Fdd2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Fdd2",operations_count:16,operations:[[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,1.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,1.25],[0,0,1,.25],[0,0,0,1]]]},44:{number:44,symbol_hm:"Imm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Imm2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},45:{number:45,symbol_hm:"Iba2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Iba2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]]]},46:{number:46,symbol_hm:"Ima2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Ima2",operations_count:8,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},47:{number:47,symbol_hm:"Pmmm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/m2/m2/m",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},48:{number:48,symbol_hm:"Pnnn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/n2/n2/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},49:{number:49,symbol_hm:"Pccm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/c2/c2/m",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},50:{number:50,symbol_hm:"Pban",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/b2/a2/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},51:{number:51,symbol_hm:"Pmma",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/m2/m2/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},52:{number:52,symbol_hm:"Pnna",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/n2_1/n2/a",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},53:{number:53,symbol_hm:"Pmna",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/m2/n2_1/a",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},54:{number:54,symbol_hm:"Pcca",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/c2/c2/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},55:{number:55,symbol_hm:"Pbam",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/b2_1/a2/m",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]]]},56:{number:56,symbol_hm:"Pccn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/c2_1/c2/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},57:{number:57,symbol_hm:"Pbcm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/b2_1/c2_1/m",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},58:{number:58,symbol_hm:"Pnnm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/n2_1/n2/m",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},59:{number:59,symbol_hm:"Pmmn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/m2_1/m2/n",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},60:{number:60,symbol_hm:"Pbcn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/b2/c2_1/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},61:{number:61,symbol_hm:"Pbca",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/b2_1/c2_1/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},62:{number:62,symbol_hm:"Pnma",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/n2_1/m2_1/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]]]},63:{number:63,symbol_hm:"Cmcm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/c2_1/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},64:{number:64,symbol_hm:"Cmce",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/c2_1/e",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},65:{number:65,symbol_hm:"Cmmm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/m2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},66:{number:66,symbol_hm:"Cccm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/c2/c2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},67:{number:67,symbol_hm:"Cmme",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/m2/e",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]]]},68:{number:68,symbol_hm:"Ccce",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/c2/c2/e",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},69:{number:69,symbol_hm:"Fmmm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"F2/m2/m2/m",operations_count:32,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]]]},70:{number:70,symbol_hm:"Fddd",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"F2/d2/d2/d",operations_count:32,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.75],[0,0,-1,.25],[0,0,0,1]]]},71:{number:71,symbol_hm:"Immm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2/m2/m2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},72:{number:72,symbol_hm:"Ibam",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2/b2/a2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},73:{number:73,symbol_hm:"Ibca",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2_1/b2_1/c2_1/a",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},74:{number:74,symbol_hm:"Imma",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2_1/m2_1/m2_1/a",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]]]},75:{number:75,symbol_hm:"P4",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},76:{number:76,symbol_hm:"P4_1",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4_1",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},77:{number:77,symbol_hm:"P4_2",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4_2",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},78:{number:78,symbol_hm:"P4_3",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4_3",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},79:{number:79,symbol_hm:"I4",crystal_system:"Tetragonal",point_group:"4",full_symbol:"I4",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},80:{number:80,symbol_hm:"I4_1",crystal_system:"Tetragonal",point_group:"4",full_symbol:"I4_1",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]]]},81:{number:81,symbol_hm:"P-4",crystal_system:"Tetragonal",point_group:"-4",full_symbol:"P-4",operations_count:4,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},82:{number:82,symbol_hm:"I-4",crystal_system:"Tetragonal",point_group:"-4",full_symbol:"I-4",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},83:{number:83,symbol_hm:"P4/m",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4/m",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},84:{number:84,symbol_hm:"P4_2/m",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4_2/m",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]]]},85:{number:85,symbol_hm:"P4/n",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4/n",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},86:{number:86,symbol_hm:"P4_2/n",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4_2/n",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},87:{number:87,symbol_hm:"I4/m",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"I4/m",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},88:{number:88,symbol_hm:"I4_1/a",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"I4_1/a",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,0],[0,0,0,1]]]},89:{number:89,symbol_hm:"P422",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P422",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},90:{number:90,symbol_hm:"P42_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P42_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},91:{number:91,symbol_hm:"P4_122",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_122",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.25],[0,0,0,1]]]},92:{number:92,symbol_hm:"P4_12_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_12_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},93:{number:93,symbol_hm:"P4_222",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_222",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},94:{number:94,symbol_hm:"P4_22_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_22_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},95:{number:95,symbol_hm:"P4_322",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_322",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.75],[0,0,0,1]]]},96:{number:96,symbol_hm:"P4_32_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_32_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},97:{number:97,symbol_hm:"I422",crystal_system:"Tetragonal",point_group:"422",full_symbol:"I422",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},98:{number:98,symbol_hm:"I4_122",crystal_system:"Tetragonal",point_group:"422",full_symbol:"I4_122",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,1,0,1],[1,0,0,1],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,1.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},99:{number:99,symbol_hm:"P4mm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4mm",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},100:{number:100,symbol_hm:"P4bm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4bm",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},101:{number:101,symbol_hm:"P4_2cm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2cm",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},102:{number:102,symbol_hm:"P4_2nm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2nm",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},103:{number:103,symbol_hm:"P4cc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4cc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},104:{number:104,symbol_hm:"P4nc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4nc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},105:{number:105,symbol_hm:"P4_2mc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2mc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},106:{number:106,symbol_hm:"P4_2bc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2bc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},107:{number:107,symbol_hm:"I4mm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4mm",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},108:{number:108,symbol_hm:"I4cm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4cm",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,1],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,1],[0,0,0,1]]]},109:{number:109,symbol_hm:"I4_1md",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4_1md",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,1,1.25],[0,0,0,1]]]},110:{number:110,symbol_hm:"I4_1cd",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4_1cd",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,1],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,1,.75],[0,0,0,1]]]},111:{number:111,symbol_hm:"P-42m",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42m",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},112:{number:112,symbol_hm:"P-42c",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42c",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},113:{number:113,symbol_hm:"P-42_1m",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42_1m",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},114:{number:114,symbol_hm:"P-42_1c",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42_1c",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},115:{number:115,symbol_hm:"P-4m2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4m2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},116:{number:116,symbol_hm:"P-4c2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4c2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},117:{number:117,symbol_hm:"P-4b2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4b2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]]]},118:{number:118,symbol_hm:"P-4n2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4n2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},119:{number:119,symbol_hm:"I-4m2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-4m2",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},120:{number:120,symbol_hm:"I-4c2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-4c2",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,1],[0,0,0,1]]]},121:{number:121,symbol_hm:"I-42m",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-42m",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},122:{number:122,symbol_hm:"I-42d",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-42d",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,1,1.25],[0,0,0,1]]]},123:{number:123,symbol_hm:"P4/mmm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2/m2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},124:{number:124,symbol_hm:"P4/mcc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2/c2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},125:{number:125,symbol_hm:"P4/nbm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2/b2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},126:{number:126,symbol_hm:"P4/nnc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2/n2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},127:{number:127,symbol_hm:"P4/mbm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2_1/b2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,0],[0,0,0,1]]]},128:{number:128,symbol_hm:"P4/mnc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2_1/n2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},129:{number:129,symbol_hm:"P4/nmm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2_1/m2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},130:{number:130,symbol_hm:"P4/ncc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2_1/c2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,-.5],[0,0,0,1]]]},131:{number:131,symbol_hm:"P4_2/mmc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2/m2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},132:{number:132,symbol_hm:"P4_2/mcm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2/c2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},133:{number:133,symbol_hm:"P4_2/nbc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2/b2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},134:{number:134,symbol_hm:"P4_2/nnm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2/n2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},135:{number:135,symbol_hm:"P4_2/mbc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2_1/b2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},136:{number:136,symbol_hm:"P4_2/mnm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2_1/n2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},137:{number:137,symbol_hm:"P4_2/nmc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2_1/m2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},138:{number:138,symbol_hm:"P4_2/ncm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2_1/c2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},139:{number:139,symbol_hm:"I4/mmm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4/m2/m2/m",operations_count:32,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},140:{number:140,symbol_hm:"I4/mcm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4/m2/c2/m",operations_count:32,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},141:{number:141,symbol_hm:"I4_1/amd",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4_1/a2/m2/d",operations_count:32,operations:[[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,1],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,0],[0,0,1,-.25],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,1],[1,0,0,1],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,1.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.25],[0,0,0,1]]]},142:{number:142,symbol_hm:"I4_1/acd",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4_1/a2/c2/d",operations_count:32,operations:[[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,-.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,1],[0,-1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1.25],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,1],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,1,.25],[0,0,0,1]]]},143:{number:143,symbol_hm:"P3",crystal_system:"Trigonal",point_group:"3",full_symbol:"P3",operations_count:3,operations:[[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},144:{number:144,symbol_hm:"P3_1",crystal_system:"Trigonal",point_group:"3",full_symbol:"P3_1",operations_count:3,operations:[[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},145:{number:145,symbol_hm:"P3_2",crystal_system:"Trigonal",point_group:"3",full_symbol:"P3_2",operations_count:3,operations:[[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},146:{number:146,symbol_hm:"R3",crystal_system:"Trigonal",point_group:"3",full_symbol:"R3",operations_count:9,operations:[[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]]]},147:{number:147,symbol_hm:"P-3",crystal_system:"Trigonal",point_group:"-3",full_symbol:"P-3",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},148:{number:148,symbol_hm:"R-3",crystal_system:"Trigonal",point_group:"-3",full_symbol:"R-3",operations_count:18,operations:[[[0,1,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,0,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,0,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]]]},149:{number:149,symbol_hm:"P312",crystal_system:"Trigonal",point_group:"32",full_symbol:"P312",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]]]},150:{number:150,symbol_hm:"P321",crystal_system:"Trigonal",point_group:"32",full_symbol:"P321",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]]]},151:{number:151,symbol_hm:"P3_112",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_112",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},152:{number:152,symbol_hm:"P3_121",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_121",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},153:{number:153,symbol_hm:"P3_212",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_212",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},154:{number:154,symbol_hm:"P3_221",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_221",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},155:{number:155,symbol_hm:"R32",crystal_system:"Trigonal",point_group:"32",full_symbol:"R32",operations_count:18,operations:[[[-1,0,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]]]},156:{number:156,symbol_hm:"P3m1",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P3m1",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},157:{number:157,symbol_hm:"P31m",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P31m",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},158:{number:158,symbol_hm:"P3c1",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P3c1",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]]]},159:{number:159,symbol_hm:"P31c",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P31c",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]]]},160:{number:160,symbol_hm:"R3m",crystal_system:"Trigonal",point_group:"3m",full_symbol:"R3m",operations_count:18,operations:[[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]]]},161:{number:161,symbol_hm:"R3c",crystal_system:"Trigonal",point_group:"3m",full_symbol:"R3c",operations_count:18,operations:[[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.8333333333333334],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.8333333333333334],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,1.1666666666666667],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,1.1666666666666667],[0,0,0,1]],[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,1.1666666666666667],[0,0,0,1]]]},162:{number:162,symbol_hm:"P-31m",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-312/m",operations_count:12,operations:[[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},163:{number:163,symbol_hm:"P-31c",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-312/c",operations_count:12,operations:[[[-1,0,0,0],[-1,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},164:{number:164,symbol_hm:"P-3m1",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-32/m1",operations_count:12,operations:[[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},165:{number:165,symbol_hm:"P-3c1",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-32/c1",operations_count:12,operations:[[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},166:{number:166,symbol_hm:"R-3m",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"R-32/m",operations_count:36,operations:[[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]]]},167:{number:167,symbol_hm:"R-3c",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"R-32/c",operations_count:36,operations:[[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.16666666666666666],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.8333333333333334],[0,0,0,1]],[[-1,0,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.8333333333333334],[0,0,0,1]],[[1,-1,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.8333333333333334],[0,0,0,1]],[[-1,0,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.16666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.16666666666666666],[0,0,0,1]],[[1,-1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,-.16666666666666666],[0,0,0,1]],[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,-.16666666666666666],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,-.16666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,1.1666666666666667],[0,0,0,1]],[[-1,0,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,1.1666666666666667],[0,0,0,1]],[[1,-1,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,1.1666666666666667],[0,0,0,1]]]},168:{number:168,symbol_hm:"P6",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]]]},169:{number:169,symbol_hm:"P6_1",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_1",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.16666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.8333333333333334],[0,0,0,1]]]},170:{number:170,symbol_hm:"P6_5",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_5",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.16666666666666666],[0,0,0,1]]]},171:{number:171,symbol_hm:"P6_2",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_2",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]]]},172:{number:172,symbol_hm:"P6_4",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_4",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]]]},173:{number:173,symbol_hm:"P6_3",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_3",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]]]},174:{number:174,symbol_hm:"P-6",crystal_system:"Hexagonal",point_group:"-6",full_symbol:"P-6",operations_count:6,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]]]},175:{number:175,symbol_hm:"P6/m",crystal_system:"Hexagonal",point_group:"6/m",full_symbol:"P6/m",operations_count:12,operations:[[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]]]},176:{number:176,symbol_hm:"P6_3/m",crystal_system:"Hexagonal",point_group:"6/m",full_symbol:"P6_3/m",operations_count:12,operations:[[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]]]},177:{number:177,symbol_hm:"P622",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P622",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},178:{number:178,symbol_hm:"P6_122",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_122",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.16666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.8333333333333334],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.16666666666666666],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},179:{number:179,symbol_hm:"P6_522",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_522",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.16666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.16666666666666666],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.8333333333333334],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},180:{number:180,symbol_hm:"P6_222",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_222",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},181:{number:181,symbol_hm:"P6_422",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_422",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},182:{number:182,symbol_hm:"P6_322",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_322",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},183:{number:183,symbol_hm:"P6mm",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6mm",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},184:{number:184,symbol_hm:"P6cc",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6cc",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},185:{number:185,symbol_hm:"P6_3cm",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6_3cm",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},186:{number:186,symbol_hm:"P6_3mc",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6_3mc",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},187:{number:187,symbol_hm:"P-6m2",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-6m2",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},188:{number:188,symbol_hm:"P-6c2",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-6c2",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},189:{number:189,symbol_hm:"P-62m",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-62m",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},190:{number:190,symbol_hm:"P-62c",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-62c",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},191:{number:191,symbol_hm:"P6/mmm",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6/m2/m2/m",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]]]},192:{number:192,symbol_hm:"P6/mcc",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6/m2/c2/c",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},193:{number:193,symbol_hm:"P6_3/mcm",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6_3/m2/c2/m",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},194:{number:194,symbol_hm:"P6_3/mmc",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6_3/m2/m2/c",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]]]},195:{number:195,symbol_hm:"P23",crystal_system:"Cubic",point_group:"23",full_symbol:"P23",operations_count:12,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]]]},196:{number:196,symbol_hm:"F23",crystal_system:"Cubic",point_group:"23",full_symbol:"F23",operations_count:48,operations:[[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]]]},197:{number:197,symbol_hm:"I23",crystal_system:"Cubic",point_group:"23",full_symbol:"I23",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]]]},198:{number:198,symbol_hm:"P2_13",crystal_system:"Cubic",point_group:"23",full_symbol:"P2_13",operations_count:12,operations:[[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]]]},199:{number:199,symbol_hm:"I2_13",crystal_system:"Cubic",point_group:"23",full_symbol:"I2_13",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]]]},200:{number:200,symbol_hm:"Pm-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"P2/m-3",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]]]},201:{number:201,symbol_hm:"Pn-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"P2/n-3",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]]]},202:{number:202,symbol_hm:"Fm-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"F2/m-3",operations_count:96,operations:[[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]]]},203:{number:203,symbol_hm:"Fd-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"F2/d-3",operations_count:96,operations:[[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,1,.25],[1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.25],[-1,0,0,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.75],[-1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.75],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.25],[1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.75],[0,0,1,.25],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.25],[-1,0,0,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.75],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,.75],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.75],[-1,0,0,.25],[0,0,0,1]]]},204:{number:204,symbol_hm:"Im-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"I2/m-3",operations_count:48,operations:[[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]]]},205:{number:205,symbol_hm:"Pa-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"P2_1/a-3",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,-.5],[1,0,0,-.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,-.5],[0,0,1,-.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.5],[0,0,1,0],[-1,0,0,-.5],[0,0,0,1]]]},206:{number:206,symbol_hm:"Ia-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"I2_1/a-3",operations_count:48,operations:[[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,-.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,-.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.5],[0,0,1,0],[-1,0,0,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]]]},207:{number:207,symbol_hm:"P432",crystal_system:"Cubic",point_group:"432",full_symbol:"P432",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]]]},208:{number:208,symbol_hm:"P4_232",crystal_system:"Cubic",point_group:"432",full_symbol:"P4_232",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]]]},209:{number:209,symbol_hm:"F432",crystal_system:"Cubic",point_group:"432",full_symbol:"F432",operations_count:96,operations:[[[1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]]]},210:{number:210,symbol_hm:"F4_132",crystal_system:"Cubic",point_group:"432",full_symbol:"F4_132",operations_count:96,operations:[[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.25],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.25],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.25],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,0,1,.25],[0,1,0,1.25],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,1],[0,1,0,1],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,1,0,1.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,1,1],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,1.25],[1,0,0,.25],[0,0,0,1]]]},211:{number:211,symbol_hm:"I432",crystal_system:"Cubic",point_group:"432",full_symbol:"I432",operations_count:48,operations:[[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},212:{number:212,symbol_hm:"P4_332",crystal_system:"Cubic",point_group:"432",full_symbol:"P4_332",operations_count:24,operations:[[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.25],[1,0,0,.75],[0,0,0,1]]]},213:{number:213,symbol_hm:"P4_132",crystal_system:"Cubic",point_group:"432",full_symbol:"P4_132",operations_count:24,operations:[[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.25],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]]]},214:{number:214,symbol_hm:"I4_132",crystal_system:"Cubic",point_group:"432",full_symbol:"I4_132",operations_count:48,operations:[[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,1,1.25],[0,-1,0,1.25],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,1,1.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[0,0,1,1.25],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,1.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.25],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,1.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,1,0,.75],[1,0,0,1.25],[0,0,-1,1.25],[0,0,0,1]]]},215:{number:215,symbol_hm:"P-43m",crystal_system:"Cubic",point_group:"-43m",full_symbol:"P-43m",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]]]},216:{number:216,symbol_hm:"F-43m",crystal_system:"Cubic",point_group:"-43m",full_symbol:"F-43m",operations_count:96,operations:[[[-1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]]]},217:{number:217,symbol_hm:"I-43m",crystal_system:"Cubic",point_group:"-43m",full_symbol:"I-43m",operations_count:48,operations:[[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},218:{number:218,symbol_hm:"P-43n",crystal_system:"Cubic",point_group:"-43m",full_symbol:"P-43n",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]]]},219:{number:219,symbol_hm:"F-43c",crystal_system:"Cubic",point_group:"-43m",full_symbol:"F-43c",operations_count:96,operations:[[[-1,0,0,0],[0,0,1,1],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,1],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,1],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,1],[0,0,0,1]],[[0,-1,0,1],[0,0,1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,1],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,1],[0,-1,0,.5],[-1,0,0,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,1],[-1,0,0,1],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,1],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,1],[0,0,1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,1],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,1],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,1],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,1],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,1],[1,0,0,1],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,1],[0,1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,1],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,1],[0,-1,0,1],[-1,0,0,.5],[0,0,0,1]]]},220:{number:220,symbol_hm:"I-43d",crystal_system:"Cubic",point_group:"-43m",full_symbol:"I-43d",operations_count:48,operations:[[[-1,0,0,1.25],[0,0,1,1.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,1.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,1,1.25],[0,1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,1,0,1.25],[1,0,0,1.25],[0,0,1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,1.25],[0,-1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.75],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,1.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.25],[1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,1.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,1.25],[1,0,0,1.25],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,1.25],[0,0,1,1.25],[0,0,0,1]]]},221:{number:221,symbol_hm:"Pm-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4/m-32/m",operations_count:48,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},222:{number:222,symbol_hm:"Pn-3n",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4/n-32/n",operations_count:48,operations:[[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},223:{number:223,symbol_hm:"Pm-3n",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4_2/m-32/n",operations_count:48,operations:[[[-1,0,0,-.5],[0,0,1,-.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,-.5],[0,0,-1,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,-.5],[0,0,1,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,0,-1,-.5],[0,-1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,-.5],[0,1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,-.5],[0,0,-1,-.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},224:{number:224,symbol_hm:"Pn-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4_2/n-32/m",operations_count:48,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},225:{number:225,symbol_hm:"Fm-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4/m-32/m",operations_count:192,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]]]},226:{number:226,symbol_hm:"Fm-3c",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4/m-32/c",operations_count:192,operations:[[[-1,0,0,0],[0,0,1,-.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,-.5],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,-.5],[-1,0,0,-.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,-.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,-.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,-.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,-.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,-.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,-.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[1,0,0,-.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[1,0,0,-.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,1],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,1],[1,0,0,1],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.5],[0,0,-1,0],[1,0,0,-.5],[0,0,0,1]],[[0,0,1,-.5],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,1],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,1],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,1],[1,0,0,1],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,1],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,1],[0,1,0,1],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,1],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,1],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,-.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,-.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,-.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,-.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,1],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,1],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,1],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,1],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,1],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,-.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,-.5],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,-.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,-.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,1],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,1],[0,0,1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[1,0,0,1],[0,0,0,1]],[[0,0,-1,1],[0,1,0,.5],[1,0,0,1],[0,0,0,1]],[[1,0,0,1],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]]]},227:{number:227,symbol_hm:"Fd-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4_1/d-32/m",operations_count:192,operations:[[[-1,0,0,-.5],[0,0,1,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,-.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,-.5],[0,0,1,0],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,-.25],[0,0,1,.25],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[1,0,0,-.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,-.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.25],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,-.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,-.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.25],[0,-1,0,-.25],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.75],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.25],[1,0,0,.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,1],[0,1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.25],[0,1,0,1.25],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.25],[0,0,-1,-.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.25],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.25],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,1],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,1,0,1.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,1,1],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,1.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,-.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.25],[1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,-.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.75],[0,1,0,-.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,-.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[0,1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,-.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.25],[1,0,0,-.25],[0,-1,0,-.25],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.25],[0,1,0,-.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.25],[0,0,1,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,-.25],[0,0,-1,.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.25],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.75],[0,0,0,1]]]},228:{number:228,symbol_hm:"Fd-3c",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4_1/d-32/c",operations_count:192,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,-.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.25],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,1],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,1.25],[0,0,1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,0,-1,1],[0,1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,1.25],[1,0,0,-.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,1.25],[1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,1.25],[-1,0,0,-.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,1.25],[0,0,-1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.25],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,-.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,-.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,1.25],[1,0,0,.25],[0,-1,0,-.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,1.25],[1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,1.25],[-1,0,0,.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,1.25],[0,0,-1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.75],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,.25],[1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,1],[0,1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.25],[0,1,0,1.25],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,-.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.25],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.25],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,1.25],[0,1,0,.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,1.25],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,1.25],[-1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[1,0,0,1],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,1],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,1,0,1.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,1,1],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,1.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,1],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1.25],[0,0,1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,1],[0,1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,-.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,1],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,1.25],[0,1,0,-.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1.25],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,-.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,1.25],[-1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,1],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.75],[1,0,0,-.25],[0,-1,0,-.25],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.75],[0,1,0,-.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.25],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.75],[0,0,0,1]]]},229:{number:229,symbol_hm:"Im-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"I4/m-32/m",operations_count:96,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]]]},230:{number:230,symbol_hm:"Ia-3d",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"I4_1/a-32/d",operations_count:96,operations:[[[-1,0,0,-.25],[0,0,1,-.25],[0,-1,0,-.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,-.5],[0,0,0,1]],[[-1,0,0,-.25],[0,0,-1,-.75],[0,1,0,-.75],[0,0,0,1]],[[0,0,1,-.5],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,-.25],[0,0,1,-.25],[0,1,0,-.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,-.5],[0,0,1,-.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.25],[1,0,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,-.25],[1,0,0,-.25],[0,0,-1,-.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,-.25],[-1,0,0,-.75],[0,0,1,-.75],[0,0,0,1]],[[0,1,0,.75],[1,0,0,1.25],[0,0,-1,1.25],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,1.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,1,1.25],[0,-1,0,1.25],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,1.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[0,0,1,1.25],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,-.25],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,-1,-.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,0,1,-.75],[0,-1,0,-.25],[-1,0,0,-.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,1.25],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,-.75],[0,-1,0,-.25],[1,0,0,-.25],[0,0,0,1]],[[0,1,0,0],[0,0,-1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,0,1,-.25],[0,1,0,-.25],[1,0,0,-.25],[0,0,0,1]],[[0,1,0,-.5],[0,0,1,0],[-1,0,0,-.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,-.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,-1,0,-.25],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,-.25],[0,1,0,-.25],[0,0,0,1]],[[0,0,-1,-.75],[0,1,0,-.75],[-1,0,0,-.25],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,-.25],[0,0,-1,-.75],[0,-1,0,-.25],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.25],[1,0,0,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.25],[-1,0,0,-.75],[0,0,-1,-.25],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,-.25],[0,-1,0,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,-.25],[0,1,0,-.25],[-1,0,0,.25],[0,0,0,1]],[[0,0,1,-.25],[0,-1,0,.25],[-1,0,0,-.25],[0,0,0,1]]]}},Yn={};Array.isArray(Rs)?Rs.forEach(i=>{i&&i.number&&(Yn[i.number]=i)}):Object.assign(Yn,Rs);const wr=Object.keys(Yn),Zf=wr.length>0?Number(wr[0]):1,Dt=new Ef({antialias:!0});Dt.setSize(window.innerWidth,window.innerHeight);Dt.autoClear=!1;Dt.domElement.style.position="absolute";Dt.domElement.style.top="0px";Dt.domElement.style.left="0px";Dt.domElement.style.zIndex="-1";Dt.domElement.style.pointerEvents="none";document.body.appendChild(Dt.domElement);const Ie=document.createElement("div");Ie.id="hkl-tooltip";Object.assign(Ie.style,{position:"absolute",display:"none",background:"rgba(0,0,0,0.85)",color:"#fff",padding:"8px 12px",borderRadius:"6px",pointerEvents:"none",zIndex:"100",fontSize:"13px",fontFamily:"sans-serif",border:"1px solid #555",boxShadow:"0px 4px 10px rgba(0,0,0,0.5)"});document.body.appendChild(Ie);const wn=[new ns,new ns,new ns];wn[0].background=new X0(16777215);wn[1].background=new X0(328965);wn[2].background=new X0(0);const Ps=window.innerWidth/7*2/window.innerHeight,se=[new Pt(45,Ps,.1,1e4),new Pt(45,Ps,.1,1e4),new Pt(45,Ps,.1,1e4)];se[0].position.set(100,100,100);se[1].position.set(-300,200,500);const Za=[new ws(se[0],document.getElementById("view1")),new ws(se[1],document.getElementById("view2")),new ws(se[2],document.getElementById("view3"))];Za.forEach(i=>{i.enableDamping=!0,i.mouseButtons={LEFT:_e.ROTATE,MIDDLE:_e.PAN,RIGHT:_e.PAN}});wn.slice(0,2).forEach(i=>{const t=new El(16777215,1.2);t.position.set(100,200,100),i.add(t),i.add(new Tl(7368816))});const Pe=wn.map(i=>{const t=new zn;return i.add(t),t}),L0={sgNumber:Zf,a:42.2,b:42.2,c:74,alpha:90,beta:104,gamma:90,omega:0,chi:0,phi:0,wavelength:1.54,detectorDist:150,animateChi:!1,blockScale:3,threshold:.05},_a=new Cl,Ds=new I0;let Cr=null,Rr=[];function Kf(i){const t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],e=i.toLowerCase().replace(/\s/g,"").split(",");for(let n=0;n<3;n++){let s=e[n];if(!s)continue;const r=s.match(/([+-]?\d+)\/(\d+)/);if(r)t[n*4+3]=parseInt(r[1])/parseInt(r[2]),s=s.replace(r[0],"");else{const o=s.match(/([+-]?\d+\.\d+)/);o&&(t[n*4+3]=parseFloat(o[1]),s=s.replace(o[0],""))}s.includes("x")&&(t[n*4+0]=s.includes("-x")?-1:1),s.includes("y")&&(t[n*4+1]=s.includes("-y")?-1:1),s.includes("z")&&(t[n*4+2]=s.includes("-z")?-1:1)}return t}function be(){try{Pe.forEach(J=>J.clear()),Rr=[];const i=Yn[L0.sgNumber];if(!i)throw new Error(`SG ${L0.sgNumber} Not Found`);document.getElementById("sg-name").innerText=i.symbol_hm||`SG ${i.number}`,document.getElementById("sg-system").innerText=i.crystal_system||"System";const t=Math.PI/180,e=new O0().multiplyMatrices(new O0().makeRotationY(L0.omega*t),new O0().makeRotationZ(L0.chi*t)).multiply(new O0().makeRotationX(L0.phi*t)),n=J=>{const m0=new I(L0.a,0,0),F0=new I(L0.b*Math.cos(L0.gamma*t),L0.b*Math.sin(L0.gamma*t),0),z0=Math.sin(L0.gamma*t),G=L0.c*Math.sqrt(Math.max(0,1-Math.cos(L0.alpha*t)**2-Math.cos(L0.beta*t)**2-Math.cos(L0.gamma*t)**2+2*Math.cos(L0.alpha*t)*Math.cos(L0.beta*t)*Math.cos(L0.gamma*t)))/z0,t0=new I(L0.c*Math.cos(L0.beta*t),L0.c*(Math.cos(L0.alpha*t)-Math.cos(L0.beta*t)*Math.cos(L0.gamma*t))/z0,G);return[m0,F0,t0].forEach(n0=>n0.applyMatrix4(J)),{v1:m0,v2:F0,v3:t0,mat:new O0().makeBasis(m0,F0,t0)}},s=n(new O0),r=n(e),o=1.5,a=new Xr(o,16,16),c=new vl({color:4491519}),l=J=>{let m0;if(typeof J=="string")m0=Kf(J);else if(Array.isArray(J))m0=J.flat(1/0);else throw new Error("Invalid format");return m0.length!==16?new O0:new O0().fromArray(m0).transpose()},d=i.operations||i.symops||["x,y,z"],p=new _i(a,c,d.length);d.forEach((J,m0)=>{const F0=l(J),z0=new at(0,0,0,1).applyMatrix4(F0),G=new I((z0.x%1+1)%1,(z0.y%1+1)%1,(z0.z%1+1)%1).applyMatrix4(s.mat);p.setMatrixAt(m0,new O0().makeTranslation(G.x,G.y,G.z))}),p.instanceMatrix.needsUpdate=!0,Pe[0].add(p);const u=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]].map(J=>new I(...J).applyMatrix4(s.mat)),m=new Mr({color:8947848}),g=(J,m0)=>Pe[0].add(new Fo(new It().setFromPoints([u[J],u[m0]]),m));[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].forEach(J=>g(J[0],J[1]));const b=L0.blockScale,f=new _i(a,c,d.length*b**3);let h=0;const y=new I((b-1)/2,(b-1)/2,(b-1)/2).applyMatrix4(r.mat);for(let J=0;J<b;J++)for(let m0=0;m0<b;m0++)for(let F0=0;F0<b;F0++){const z0=new I(J,m0,F0).applyMatrix4(r.mat).sub(y);d.forEach(G=>{const t0=l(G),n0=new at(0,0,0,1).applyMatrix4(t0),C0=new I(n0.x,n0.y,n0.z).applyMatrix4(r.mat).add(z0);f.setMatrixAt(h++,new O0().makeTranslation(C0.x,C0.y,C0.z))})}f.instanceMatrix.needsUpdate=!0,Pe[1].add(f);const E=2*Math.PI/L0.wavelength,T=new I(-E,0,0);Pe[1].add(new Fo(new It().setFromPoints([new I(-500,0,0),new I(L0.detectorDist,0,0)]),new Mr({color:16711680})));const R=new Vt(new jn(600,600),new Fi({color:3355443,side:Xt,transparent:!0,opacity:.3}));R.position.x=L0.detectorDist,R.rotation.y=Math.PI/2,Pe[1].add(R);const A=Math.abs(r.v1.dot(new I().crossVectors(r.v2,r.v3))),P=[new I().crossVectors(r.v2,r.v3).multiplyScalar(2*Math.PI/A),new I().crossVectors(r.v3,r.v1).multiplyScalar(2*Math.PI/A),new I().crossVectors(r.v1,r.v2).multiplyScalar(2*Math.PI/A)],S=2*Math.PI/.8;let q=Math.ceil(S/P[0].length()),w=Math.ceil(S/P[1].length()),z=Math.ceil(S/P[2].length());const V=40;q=Math.min(q,V),w=Math.min(w,V),z=Math.min(z,V);const X=(q*2+1)*(w*2+1)*(z*2+1),B=new Wr(1.5,16),H=new Fi({color:16776960,side:Xt}),F=new _i(B,H,X),K=new _i(B,H,X);let j=0;const a0=new O0().makeScale(0,0,0),d0=new I(.12,.25,.38);for(let J=-q;J<=q;J++)for(let m0=-w;m0<=w;m0++)for(let F0=-z;F0<=z;F0++){if(J===0&&m0===0&&F0===0){F.setMatrixAt(j,a0),K.setMatrixAt(j,a0),j++;continue}const z0=new I().addScaledVector(P[0],J).addScaledVector(P[1],m0).addScaledVector(P[2],F0);if(z0.length()>S){F.setMatrixAt(j,a0),K.setMatrixAt(j,a0),j++;continue}if(Math.abs(z0.distanceTo(T)-E)<L0.threshold){let G=0,t0=0;d.forEach(C0=>{const A0=l(C0),w0=new at(d0.x,d0.y,d0.z,1).applyMatrix4(A0),ot=2*Math.PI*(J*w0.x+m0*w0.y+F0*w0.z);G+=Math.cos(ot),t0+=Math.sin(ot)});const n0=(G**2+t0**2)/d.length;if(n0>.1){const C0=new I(E,0,0).add(z0).normalize();if(C0.x>0){const A0=L0.detectorDist/C0.x,w0=C0.multiplyScalar(A0),ot=Math.max(.3,Math.log10(n0+1.5)),W0=new O0().makeTranslation(L0.detectorDist,w0.y,w0.z).multiply(new O0().makeRotationY(Math.PI/2)).multiply(new O0().makeScale(ot,ot,ot));F.setMatrixAt(j,W0),K.setMatrixAt(j,W0);const j0=Math.min(1,z0.length()/(2*E)),K0=2*Math.asin(j0)*(180/Math.PI);Rr[j]={h:J,k:m0,l:F0,theta2:K0}}else F.setMatrixAt(j,a0),K.setMatrixAt(j,a0)}else F.setMatrixAt(j,a0),K.setMatrixAt(j,a0)}else F.setMatrixAt(j,a0),K.setMatrixAt(j,a0);j++}F.instanceMatrix.needsUpdate=!0,K.instanceMatrix.needsUpdate=!0,Pe[2].add(F),Pe[1].add(K),Cr=F,se[2].position.set(L0.detectorDist+350,0,0),se[2].lookAt(L0.detectorDist,0,0)}catch(i){console.error("데이터 계산 중 에러 발생:",i),document.getElementById("sg-name").innerText="Data Format Error",document.getElementById("sg-system").innerText="Check Console (F12)"}}window.addEventListener("mousemove",i=>{if(!Cr)return;const t=window.innerWidth,e=t*(4/7),n=t*(2/7);if(i.clientX>=e&&i.clientX<=e+n){Ds.x=(i.clientX-e)/n*2-1,Ds.y=-(i.clientY/window.innerHeight)*2+1,_a.setFromCamera(Ds,se[2]);const s=_a.intersectObject(Cr);if(s.length>0){const r=s[0].instanceId,o=Rr[r];if(o){Ie.style.display="block",Ie.style.left=i.clientX+15+"px",Ie.style.top=i.clientY+15+"px",Ie.innerHTML=`<span style="color:#ffcc00; font-weight:bold;">hkl:</span> (${o.h}, ${o.k}, ${o.l})<br/><span style="color:#00ffff; font-weight:bold;">2&theta;:</span> ${o.theta2.toFixed(2)}&deg;`;return}}}Ie.style.display="none"});function Ka(){requestAnimationFrame(Ka),Za.forEach(n=>n.update()),L0.animateChi&&(L0.chi=(L0.chi+.4)%360,be());const i=window.innerWidth,t=window.innerHeight,e=i/7;Dt.clear();for(let n=0;n<3;n++)Dt.setViewport(e*2*n,0,e*2,t),Dt.setScissor(e*2*n,0,e*2,t),Dt.setScissorTest(!0),Dt.render(wn[n],se[n])}window.addEventListener("resize",()=>{Dt.setSize(window.innerWidth,window.innerHeight);const i=window.innerWidth/7*2/window.innerHeight;se.forEach(t=>{t.aspect=i,t.updateProjectionMatrix()}),ki.domElement.style.width=`${window.innerWidth/7}px`});const ki=new $r({container:document.getElementById("gui-container"),width:window.innerWidth/7}),jr=ki.addFolder("Lattice & SG"),Ja={};wr.forEach(i=>{const t=Yn[i];Ja[`${t.number}: ${t.symbol_hm||"Unknown"}`]=Number(i)});jr.add(L0,"sgNumber",Ja).name("Space Group").onChange(be);["a","b","c","alpha","beta","gamma"].forEach(i=>jr.add(L0,i,10,100).onChange(be));jr.add(L0,"blockScale",1,7,1).name("Crystal Size").onChange(be);const Qa=ki.addFolder("Goniometer (Rotation)");["omega","chi","phi"].forEach(i=>Qa.add(L0,i,-180,180).listen().onChange(be));Qa.add(L0,"animateChi").name("Auto-rotate Chi");const Zr=ki.addFolder("Experiment");Zr.add(L0,"wavelength",.5,3).name("X-ray λ (Å)").onChange(be);Zr.add(L0,"detectorDist",50,400).name("Detector Dist").onChange(be);Zr.add(L0,"threshold",.01,.5).name("Mosaicity").onChange(be);be();Ka();
