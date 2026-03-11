(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Fr="183",xe={ROTATE:0,DOLLY:1,PAN:2},gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},p1=0,po=1,m1=2,Ci=1,_1=2,kn=3,Ne=0,Lt=1,Xt=2,ve=0,vn=1,mo=2,_o=3,go=4,g1=5,Ye=100,x1=101,v1=102,y1=103,b1=104,M1=200,S1=201,E1=202,T1=203,Bs=204,zs=205,A1=206,w1=207,C1=208,R1=209,P1=210,D1=211,L1=212,I1=213,U1=214,Vs=0,Hs=1,ks=2,Mn=3,Gs=4,Ws=5,Xs=6,Ys=7,Nr=0,F1=1,N1=2,ne=0,Sa=1,Ea=2,Ta=3,Aa=4,wa=5,Ca=6,Ra=7,Pa=300,Ze=301,Sn=302,Zi=303,Ki=304,Hi=306,qs=1e3,ge=1001,$s=1002,vt=1003,O1=1004,ei=1005,Et=1006,Ji=1007,$e=1008,Ot=1009,Da=1010,La=1011,Wn=1012,Or=1013,oe=1014,qt=1015,be=1016,Br=1017,zr=1018,Xn=1020,Ia=35902,Ua=35899,Fa=1021,Na=1022,$t=1023,Me=1026,je=1027,Vr=1028,Hr=1029,En=1030,kr=1031,Gr=1033,Ri=33776,Pi=33777,Di=33778,Li=33779,js=35840,Zs=35841,Ks=35842,Js=35843,Qs=36196,tr=37492,er=37496,nr=37488,ir=37489,sr=37490,rr=37491,or=37808,ar=37809,lr=37810,cr=37811,hr=37812,ur=37813,dr=37814,fr=37815,pr=37816,mr=37817,_r=37818,gr=37819,xr=37820,vr=37821,yr=36492,br=36494,Mr=36495,Sr=36283,Er=36284,Tr=36285,Ar=36286,B1=3200,Oa=0,z1=1,Le="",zt="srgb",Tn="srgb-linear",Fi="linear",j0="srgb",en=7680,xo=519,V1=512,H1=513,k1=514,Wr=515,G1=516,W1=517,Xr=518,X1=519,vo=35044,yo="300 es",ee=2e3,Yn=2001;function Y1(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ni(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function q1(){const i=Ni("canvas");return i.style.display="block",i}const bo={};function Mo(...i){const t="THREE."+i.shift();console.log(t,...i)}function Ba(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function w0(...i){i=Ba(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function G0(...i){i=Ba(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Oi(...i){const t=i.join(" ");t in bo||(bo[t]=!0,w0(...i))}function $1(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const j1={[Vs]:Hs,[ks]:Xs,[Gs]:Ys,[Mn]:Ws,[Hs]:Vs,[Xs]:ks,[Ys]:Gs,[Ws]:Mn};class Ke{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ii=Math.PI/180,wr=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[t&255]+Mt[t>>8&255]+"-"+Mt[t>>16&15|64]+Mt[t>>24&255]+"-"+Mt[e&63|128]+Mt[e>>8&255]+"-"+Mt[e>>16&255]+Mt[e>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function V0(i,t,e){return Math.max(t,Math.min(e,i))}function Z1(i,t){return(i%t+t)%t}function Qi(i,t,e){return(1-e)*i+e*t}function Ln(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const K1={DEG2RAD:Ii};class P0{constructor(t=0,e=0){P0.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=V0(this.x,t.x,e.x),this.y=V0(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=V0(this.x,t,e),this.y=V0(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(V0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(V0(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],d=n[s+2],p=n[s+3],u=r[o+0],m=r[o+1],g=r[o+2],b=r[o+3];if(p!==b||c!==u||l!==m||d!==g){let f=c*u+l*m+d*g+p*b;f<0&&(u=-u,m=-m,g=-g,b=-b,f=-f);let h=1-a;if(f<.9995){const y=Math.acos(f),T=Math.sin(y);h=Math.sin(h*y)/T,a=Math.sin(a*y)/T,c=c*h+u*a,l=l*h+m*a,d=d*h+g*a,p=p*h+b*a}else{c=c*h+u*a,l=l*h+m*a,d=d*h+g*a,p=p*h+b*a;const y=1/Math.sqrt(c*c+l*l+d*d+p*p);c*=y,l*=y,d*=y,p*=y}}t[e]=c,t[e+1]=l,t[e+2]=d,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],d=n[s+3],p=r[o],u=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+d*p+c*m-l*u,t[e+1]=c*g+d*u+l*p-a*m,t[e+2]=l*g+d*m+a*u-c*p,t[e+3]=d*g-a*p-c*u-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),d=a(s/2),p=a(r/2),u=c(n/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*d*p+l*m*g,this._y=l*m*p-u*d*g,this._z=l*d*g+u*m*p,this._w=l*d*p-u*m*g;break;case"YXZ":this._x=u*d*p+l*m*g,this._y=l*m*p-u*d*g,this._z=l*d*g-u*m*p,this._w=l*d*p+u*m*g;break;case"ZXY":this._x=u*d*p-l*m*g,this._y=l*m*p+u*d*g,this._z=l*d*g+u*m*p,this._w=l*d*p-u*m*g;break;case"ZYX":this._x=u*d*p-l*m*g,this._y=l*m*p+u*d*g,this._z=l*d*g-u*m*p,this._w=l*d*p+u*m*g;break;case"YZX":this._x=u*d*p+l*m*g,this._y=l*m*p+u*d*g,this._z=l*d*g-u*m*p,this._w=l*d*p-u*m*g;break;case"XZY":this._x=u*d*p-l*m*g,this._y=l*m*p-u*d*g,this._z=l*d*g+u*m*p,this._w=l*d*p+u*m*g;break;default:w0("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],d=e[6],p=e[10],u=n+a+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(d-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(n>a&&n>p){const m=2*Math.sqrt(1+n-a-p);this._w=(d-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>p){const m=2*Math.sqrt(1+a-n-p);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+d)/m}else{const m=2*Math.sqrt(1+p-n-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(V0(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,d=e._w;return this._x=n*d+o*a+s*l-r*c,this._y=s*d+o*c+r*a-n*l,this._z=r*d+o*l+n*c-s*a,this._w=o*d-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),d=Math.sin(l);c=Math.sin(c*l)/d,e=Math.sin(e*l)/d,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),d=2*(a*e-r*s),p=2*(r*n-o*e);return this.x=e+c*l+o*p-a*d,this.y=n+c*d+a*l-r*p,this.z=s+c*p+r*d-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=V0(this.x,t.x,e.x),this.y=V0(this.y,t.y,e.y),this.z=V0(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=V0(this.x,t,e),this.y=V0(this.y,t,e),this.z=V0(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(V0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ts.copy(this).projectOnVector(t),this.sub(ts)}reflect(t){return this.sub(ts.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(V0(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ts=new I,So=new Oe;class I0{constructor(t,e,n,s,r,o,a,c,l){I0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const d=this.elements;return d[0]=t,d[1]=s,d[2]=a,d[3]=e,d[4]=r,d[5]=c,d[6]=n,d[7]=o,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],d=n[4],p=n[7],u=n[2],m=n[5],g=n[8],b=s[0],f=s[3],h=s[6],y=s[1],T=s[4],E=s[7],R=s[2],w=s[5],P=s[8];return r[0]=o*b+a*y+c*R,r[3]=o*f+a*T+c*w,r[6]=o*h+a*E+c*P,r[1]=l*b+d*y+p*R,r[4]=l*f+d*T+p*w,r[7]=l*h+d*E+p*P,r[2]=u*b+m*y+g*R,r[5]=u*f+m*T+g*w,r[8]=u*h+m*E+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8];return e*o*d-e*a*l-n*r*d+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],p=d*o-a*l,u=a*c-d*r,m=l*r-o*c,g=e*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return t[0]=p*b,t[1]=(s*l-d*n)*b,t[2]=(a*n-s*o)*b,t[3]=u*b,t[4]=(d*e-s*c)*b,t[5]=(s*r-a*e)*b,t[6]=m*b,t[7]=(n*c-l*e)*b,t[8]=(o*e-n*r)*b,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(es.makeScale(t,e)),this}rotate(t){return this.premultiply(es.makeRotation(-t)),this}translate(t,e){return this.premultiply(es.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const es=new I0,Eo=new I0().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),To=new I0().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function J1(){const i={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===j0&&(s.r=ye(s.r),s.g=ye(s.g),s.b=ye(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===j0&&(s.r=yn(s.r),s.g=yn(s.g),s.b=yn(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Le?Fi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Tn]:{primaries:t,whitePoint:n,transfer:Fi,toXYZ:Eo,fromXYZ:To,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:t,whitePoint:n,transfer:j0,toXYZ:Eo,fromXYZ:To,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const W0=J1();function ye(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yn(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let nn;class Q1{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{nn===void 0&&(nn=Ni("canvas")),nn.width=t.width,nn.height=t.height;const s=nn.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=nn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ni("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ye(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ye(e[n]/255)*255):e[n]=ye(e[n]);return{data:e,width:t.width,height:t.height}}else return w0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let tl=0;class Yr{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tl++}),this.uuid=Zn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ns(s[o].image)):r.push(ns(s[o]))}else r=ns(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Q1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(w0("Texture: Unable to serialize Texture."),{})}let el=0;const is=new I;class wt extends Ke{constructor(t=wt.DEFAULT_IMAGE,e=wt.DEFAULT_MAPPING,n=ge,s=ge,r=Et,o=$e,a=$t,c=Ot,l=wt.DEFAULT_ANISOTROPY,d=Le){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=Zn(),this.name="",this.source=new Yr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new P0(0,0),this.repeat=new P0(1,1),this.center=new P0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new I0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(is).x}get height(){return this.source.getSize(is).y}get depth(){return this.source.getSize(is).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){w0(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){w0(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case ge:t.x=t.x<0?0:1;break;case $s:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case ge:t.y=t.y<0?0:1;break;case $s:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=Pa;wt.DEFAULT_ANISOTROPY=1;class st{constructor(t=0,e=0,n=0,s=1){st.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],d=c[4],p=c[8],u=c[1],m=c[5],g=c[9],b=c[2],f=c[6],h=c[10];if(Math.abs(d-u)<.01&&Math.abs(p-b)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+b)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,E=(m+1)/2,R=(h+1)/2,w=(d+u)/4,P=(p+b)/4,x=(g+f)/4;return T>E&&T>R?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=P/n):E>R?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=x/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=P/r,s=x/r),this.set(n,s,r,e),this}let y=Math.sqrt((f-g)*(f-g)+(p-b)*(p-b)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(f-g)/y,this.y=(p-b)/y,this.z=(u-d)/y,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=V0(this.x,t.x,e.x),this.y=V0(this.y,t.y,e.y),this.z=V0(this.z,t.z,e.z),this.w=V0(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=V0(this.x,t,e),this.y=V0(this.y,t,e),this.z=V0(this.z,t,e),this.w=V0(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(V0(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nl extends Ke{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new st(0,0,t,e),this.scissorTest=!1,this.viewport=new st(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new wt(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Yr(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ie extends nl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class za extends wt{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class il extends wt{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=ge,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class U0{constructor(t,e,n,s,r,o,a,c,l,d,p,u,m,g,b,f){U0.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,d,p,u,m,g,b,f)}set(t,e,n,s,r,o,a,c,l,d,p,u,m,g,b,f){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=c,h[2]=l,h[6]=d,h[10]=p,h[14]=u,h[3]=m,h[7]=g,h[11]=b,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new U0().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,s=1/sn.setFromMatrixColumn(t,0).length(),r=1/sn.setFromMatrixColumn(t,1).length(),o=1/sn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),d=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){const u=o*d,m=o*p,g=a*d,b=a*p;e[0]=c*d,e[4]=-c*p,e[8]=l,e[1]=m+g*l,e[5]=u-b*l,e[9]=-a*c,e[2]=b-u*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*d,m=c*p,g=l*d,b=l*p;e[0]=u+b*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*p,e[5]=o*d,e[9]=-a,e[2]=m*a-g,e[6]=b+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*d,m=c*p,g=l*d,b=l*p;e[0]=u-b*a,e[4]=-o*p,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*d,e[9]=b-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*d,m=o*p,g=a*d,b=a*p;e[0]=c*d,e[4]=g*l-m,e[8]=u*l+b,e[1]=c*p,e[5]=b*l+u,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,m=o*l,g=a*c,b=a*l;e[0]=c*d,e[4]=b-u*p,e[8]=g*p+m,e[1]=p,e[5]=o*d,e[9]=-a*d,e[2]=-l*d,e[6]=m*p+g,e[10]=u-b*p}else if(t.order==="XZY"){const u=o*c,m=o*l,g=a*c,b=a*l;e[0]=c*d,e[4]=-p,e[8]=l*d,e[1]=u*p+b,e[5]=o*d,e[9]=m*p-g,e[2]=g*p-m,e[6]=a*d,e[10]=b*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sl,t,rl)}lookAt(t,e,n){const s=this.elements;return Ft.subVectors(t,e),Ft.lengthSq()===0&&(Ft.z=1),Ft.normalize(),Te.crossVectors(n,Ft),Te.lengthSq()===0&&(Math.abs(n.z)===1?Ft.x+=1e-4:Ft.z+=1e-4,Ft.normalize(),Te.crossVectors(n,Ft)),Te.normalize(),ni.crossVectors(Ft,Te),s[0]=Te.x,s[4]=ni.x,s[8]=Ft.x,s[1]=Te.y,s[5]=ni.y,s[9]=Ft.y,s[2]=Te.z,s[6]=ni.z,s[10]=Ft.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],d=n[1],p=n[5],u=n[9],m=n[13],g=n[2],b=n[6],f=n[10],h=n[14],y=n[3],T=n[7],E=n[11],R=n[15],w=s[0],P=s[4],x=s[8],S=s[12],G=s[1],A=s[5],O=s[9],V=s[13],W=s[2],z=s[6],H=s[10],F=s[14],Q=s[3],Z=s[7],c0=s[11],p0=s[15];return r[0]=o*w+a*G+c*W+l*Q,r[4]=o*P+a*A+c*z+l*Z,r[8]=o*x+a*O+c*H+l*c0,r[12]=o*S+a*V+c*F+l*p0,r[1]=d*w+p*G+u*W+m*Q,r[5]=d*P+p*A+u*z+m*Z,r[9]=d*x+p*O+u*H+m*c0,r[13]=d*S+p*V+u*F+m*p0,r[2]=g*w+b*G+f*W+h*Q,r[6]=g*P+b*A+f*z+h*Z,r[10]=g*x+b*O+f*H+h*c0,r[14]=g*S+b*V+f*F+h*p0,r[3]=y*w+T*G+E*W+R*Q,r[7]=y*P+T*A+E*z+R*Z,r[11]=y*x+T*O+E*H+R*c0,r[15]=y*S+T*V+E*F+R*p0,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],d=t[2],p=t[6],u=t[10],m=t[14],g=t[3],b=t[7],f=t[11],h=t[15],y=c*m-l*u,T=a*m-l*p,E=a*u-c*p,R=o*m-l*d,w=o*u-c*d,P=o*p-a*d;return e*(b*y-f*T+h*E)-n*(g*y-f*R+h*w)+s*(g*T-b*R+h*P)-r*(g*E-b*w+f*P)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],d=t[8],p=t[9],u=t[10],m=t[11],g=t[12],b=t[13],f=t[14],h=t[15],y=e*a-n*o,T=e*c-s*o,E=e*l-r*o,R=n*c-s*a,w=n*l-r*a,P=s*l-r*c,x=d*b-p*g,S=d*f-u*g,G=d*h-m*g,A=p*f-u*b,O=p*h-m*b,V=u*h-m*f,W=y*V-T*O+E*A+R*G-w*S+P*x;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/W;return t[0]=(a*V-c*O+l*A)*z,t[1]=(s*O-n*V-r*A)*z,t[2]=(b*P-f*w+h*R)*z,t[3]=(u*w-p*P-m*R)*z,t[4]=(c*G-o*V-l*S)*z,t[5]=(e*V-s*G+r*S)*z,t[6]=(f*E-g*P-h*T)*z,t[7]=(d*P-u*E+m*T)*z,t[8]=(o*O-a*G+l*x)*z,t[9]=(n*G-e*O-r*x)*z,t[10]=(g*w-b*E+h*y)*z,t[11]=(p*E-d*w-m*y)*z,t[12]=(a*S-o*A-c*x)*z,t[13]=(e*A-n*S+s*x)*z,t[14]=(b*T-g*R-f*y)*z,t[15]=(d*R-p*T+u*y)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,d=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,d*a+n,d*c-s*o,0,l*c-s*a,d*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,d=o+o,p=a+a,u=r*l,m=r*d,g=r*p,b=o*d,f=o*p,h=a*p,y=c*l,T=c*d,E=c*p,R=n.x,w=n.y,P=n.z;return s[0]=(1-(b+h))*R,s[1]=(m+E)*R,s[2]=(g-T)*R,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(u+h))*w,s[6]=(f+y)*w,s[7]=0,s[8]=(g+T)*P,s[9]=(f-y)*P,s[10]=(1-(u+b))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return n.set(1,1,1),e.identity(),this;let o=sn.set(s[0],s[1],s[2]).length();const a=sn.set(s[4],s[5],s[6]).length(),c=sn.set(s[8],s[9],s[10]).length();r<0&&(o=-o),kt.copy(this);const l=1/o,d=1/a,p=1/c;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=d,kt.elements[5]*=d,kt.elements[6]*=d,kt.elements[8]*=p,kt.elements[9]*=p,kt.elements[10]*=p,e.setFromRotationMatrix(kt),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=ee,c=!1){const l=this.elements,d=2*r/(e-t),p=2*r/(n-s),u=(e+t)/(e-t),m=(n+s)/(n-s);let g,b;if(c)g=r/(o-r),b=o*r/(o-r);else if(a===ee)g=-(o+r)/(o-r),b=-2*o*r/(o-r);else if(a===Yn)g=-o/(o-r),b=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ee,c=!1){const l=this.elements,d=2/(e-t),p=2/(n-s),u=-(e+t)/(e-t),m=-(n+s)/(n-s);let g,b;if(c)g=1/(o-r),b=o/(o-r);else if(a===ee)g=-2/(o-r),b=-(o+r)/(o-r);else if(a===Yn)g=-1/(o-r),b=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const sn=new I,kt=new U0,sl=new I(0,0,0),rl=new I(1,1,1),Te=new I,ni=new I,Ft=new I,Ao=new U0,wo=new Oe;class ae{constructor(t=0,e=0,n=0,s=ae.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],d=s[9],p=s[2],u=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(V0(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-V0(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(V0(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-V0(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(V0(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-V0(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:w0("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ao.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ao,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wo.setFromEuler(this),this.setFromQuaternion(wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ae.DEFAULT_ORDER="XYZ";class qr{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ol=0;const Co=new I,rn=new Oe,ue=new U0,ii=new I,In=new I,al=new I,ll=new Oe,Ro=new I(1,0,0),Po=new I(0,1,0),Do=new I(0,0,1),Lo={type:"added"},cl={type:"removed"},on={type:"childadded",child:null},ss={type:"childremoved",child:null};class yt extends Ke{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ol++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const t=new I,e=new ae,n=new Oe,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new U0},normalMatrix:{value:new I0}}),this.matrix=new U0,this.matrixWorld=new U0,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rn.setFromAxisAngle(t,e),this.quaternion.multiply(rn),this}rotateOnWorldAxis(t,e){return rn.setFromAxisAngle(t,e),this.quaternion.premultiply(rn),this}rotateX(t){return this.rotateOnAxis(Ro,t)}rotateY(t){return this.rotateOnAxis(Po,t)}rotateZ(t){return this.rotateOnAxis(Do,t)}translateOnAxis(t,e){return Co.copy(t).applyQuaternion(this.quaternion),this.position.add(Co.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ro,t)}translateY(t){return this.translateOnAxis(Po,t)}translateZ(t){return this.translateOnAxis(Do,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ue.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ii.copy(t):ii.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),In.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ue.lookAt(In,ii,this.up):ue.lookAt(ii,In,this.up),this.quaternion.setFromRotationMatrix(ue),s&&(ue.extractRotation(s.matrixWorld),rn.setFromRotationMatrix(ue),this.quaternion.premultiply(rn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(G0("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lo),on.child=t,this.dispatchEvent(on),on.child=null):G0("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(cl),ss.child=t,this.dispatchEvent(ss),ss.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ue.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ue.multiply(t.parent.matrixWorld)),t.applyMatrix4(ue),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lo),on.child=t,this.dispatchEvent(on),on.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,t,al),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(In,ll,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),d=o(t.images),p=o(t.shapes),u=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const d=a[l];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new I(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class xn extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hl={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const b of t.hand.values()){const f=e.getJointPose(b,n),h=this._getHandJoint(l,b);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hl)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Va={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ae={h:0,s:0,l:0},si={h:0,s:0,l:0};function os(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class H0{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,W0.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=W0.workingColorSpace){return this.r=t,this.g=e,this.b=n,W0.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=W0.workingColorSpace){if(t=Z1(t,1),e=V0(e,0,1),n=V0(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=os(o,r,t+1/3),this.g=os(o,r,t),this.b=os(o,r,t-1/3)}return W0.colorSpaceToWorking(this,s),this}setStyle(t,e=zt){function n(r){r!==void 0&&parseFloat(r)<1&&w0("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:w0("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);w0("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){const n=Va[t.toLowerCase()];return n!==void 0?this.setHex(n,e):w0("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ye(t.r),this.g=ye(t.g),this.b=ye(t.b),this}copyLinearToSRGB(t){return this.r=yn(t.r),this.g=yn(t.g),this.b=yn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return W0.workingToColorSpace(St.copy(this),t),Math.round(V0(St.r*255,0,255))*65536+Math.round(V0(St.g*255,0,255))*256+Math.round(V0(St.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=W0.workingColorSpace){W0.workingToColorSpace(St.copy(this),e);const n=St.r,s=St.g,r=St.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const d=(a+o)/2;if(a===o)c=0,l=0;else{const p=o-a;switch(l=d<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=d,t}getRGB(t,e=W0.workingColorSpace){return W0.workingToColorSpace(St.copy(this),e),t.r=St.r,t.g=St.g,t.b=St.b,t}getStyle(t=zt){W0.workingToColorSpace(St.copy(this),t);const e=St.r,n=St.g,s=St.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ae),this.setHSL(Ae.h+t,Ae.s+e,Ae.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ae),t.getHSL(si);const n=Qi(Ae.h,si.h,e),s=Qi(Ae.s,si.s,e),r=Qi(Ae.l,si.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new H0;H0.NAMES=Va;class as extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ae,this.environmentIntensity=1,this.environmentRotation=new ae,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Gt=new I,de=new I,ls=new I,fe=new I,an=new I,ln=new I,Io=new I,cs=new I,hs=new I,us=new I,ds=new st,fs=new st,ps=new st;class Yt{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Gt.subVectors(t,e),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Gt.subVectors(s,e),de.subVectors(n,e),ls.subVectors(t,e);const o=Gt.dot(Gt),a=Gt.dot(de),c=Gt.dot(ls),l=de.dot(de),d=de.dot(ls),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(l*c-a*d)*u,g=(o*d-a*c)*u;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fe)===null?!1:fe.x>=0&&fe.y>=0&&fe.x+fe.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,fe)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fe.x),c.addScaledVector(o,fe.y),c.addScaledVector(a,fe.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ds.setScalar(0),fs.setScalar(0),ps.setScalar(0),ds.fromBufferAttribute(t,e),fs.fromBufferAttribute(t,n),ps.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ds,r.x),o.addScaledVector(fs,r.y),o.addScaledVector(ps,r.z),o}static isFrontFacing(t,e,n,s){return Gt.subVectors(n,e),de.subVectors(t,e),Gt.cross(de).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gt.subVectors(this.c,this.b),de.subVectors(this.a,this.b),Gt.cross(de).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Yt.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Yt.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Yt.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Yt.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Yt.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;an.subVectors(s,n),ln.subVectors(r,n),cs.subVectors(t,n);const c=an.dot(cs),l=ln.dot(cs);if(c<=0&&l<=0)return e.copy(n);hs.subVectors(t,s);const d=an.dot(hs),p=ln.dot(hs);if(d>=0&&p<=d)return e.copy(s);const u=c*p-d*l;if(u<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(an,o);us.subVectors(t,r);const m=an.dot(us),g=ln.dot(us);if(g>=0&&m<=g)return e.copy(r);const b=m*l-c*g;if(b<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ln,a);const f=d*g-m*p;if(f<=0&&p-d>=0&&m-g>=0)return Io.subVectors(r,s),a=(p-d)/(p-d+(m-g)),e.copy(s).addScaledVector(Io,a);const h=1/(f+b+u);return o=b*h,a=u*h,e.copy(n).addScaledVector(an,o).addScaledVector(ln,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Je{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Wt.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Wt.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Wt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Wt):Wt.fromBufferAttribute(r,o),Wt.applyMatrix4(t.matrixWorld),this.expandByPoint(Wt);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ri.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ri.copy(n.boundingBox)),ri.applyMatrix4(t.matrixWorld),this.union(ri)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Wt),Wt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Un),oi.subVectors(this.max,Un),cn.subVectors(t.a,Un),hn.subVectors(t.b,Un),un.subVectors(t.c,Un),we.subVectors(hn,cn),Ce.subVectors(un,hn),Ve.subVectors(cn,un);let e=[0,-we.z,we.y,0,-Ce.z,Ce.y,0,-Ve.z,Ve.y,we.z,0,-we.x,Ce.z,0,-Ce.x,Ve.z,0,-Ve.x,-we.y,we.x,0,-Ce.y,Ce.x,0,-Ve.y,Ve.x,0];return!ms(e,cn,hn,un,oi)||(e=[1,0,0,0,1,0,0,0,1],!ms(e,cn,hn,un,oi))?!1:(ai.crossVectors(we,Ce),e=[ai.x,ai.y,ai.z],ms(e,cn,hn,un,oi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Wt).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Wt).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const pe=[new I,new I,new I,new I,new I,new I,new I,new I],Wt=new I,ri=new Je,cn=new I,hn=new I,un=new I,we=new I,Ce=new I,Ve=new I,Un=new I,oi=new I,ai=new I,He=new I;function ms(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){He.fromArray(i,r);const a=s.x*Math.abs(He.x)+s.y*Math.abs(He.y)+s.z*Math.abs(He.z),c=t.dot(He),l=e.dot(He),d=n.dot(He);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>a)return!1}return!0}const ut=new I,li=new P0;let ul=0;class jt{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ul++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=qt,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)li.fromBufferAttribute(this,e),li.applyMatrix3(t),this.setXY(e,li.x,li.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ut.fromBufferAttribute(this,e),ut.applyMatrix3(t),this.setXYZ(e,ut.x,ut.y,ut.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ut.fromBufferAttribute(this,e),ut.applyMatrix4(t),this.setXYZ(e,ut.x,ut.y,ut.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ut.fromBufferAttribute(this,e),ut.applyNormalMatrix(t),this.setXYZ(e,ut.x,ut.y,ut.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ut.fromBufferAttribute(this,e),ut.transformDirection(t),this.setXYZ(e,ut.x,ut.y,ut.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ct(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ct(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ct(e,this.array),n=Ct(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ct(e,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ct(e,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),t}}class Ha extends jt{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class ka extends jt{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tt extends jt{constructor(t,e,n){super(new Float32Array(t),e,n)}}const dl=new Je,Fn=new I,_s=new I;class wn{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fn.subVectors(t,this.center);const e=Fn.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fn,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_s.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fn.copy(t.center).add(_s)),this.expandByPoint(Fn.copy(t.center).sub(_s))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fl=0;const Bt=new U0,gs=new yt,dn=new I,Nt=new Je,Nn=new Je,gt=new I;class It extends Ke{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fl++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Y1(t)?ka:Ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new I0().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bt.makeRotationFromQuaternion(t),this.applyMatrix4(Bt),this}rotateX(t){return Bt.makeRotationX(t),this.applyMatrix4(Bt),this}rotateY(t){return Bt.makeRotationY(t),this.applyMatrix4(Bt),this}rotateZ(t){return Bt.makeRotationZ(t),this.applyMatrix4(Bt),this}translate(t,e,n){return Bt.makeTranslation(t,e,n),this.applyMatrix4(Bt),this}scale(t,e,n){return Bt.makeScale(t,e,n),this.applyMatrix4(Bt),this}lookAt(t){return gs.lookAt(t),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dn).negate(),this.translate(dn.x,dn.y,dn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&w0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){G0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Nt.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&G0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){G0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Nn.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(Nt.min,Nn.min),Nt.expandByPoint(gt),gt.addVectors(Nt.max,Nn.max),Nt.expandByPoint(gt)):(Nt.expandByPoint(Nn.min),Nt.expandByPoint(Nn.max))}Nt.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)gt.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gt));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,d=a.count;l<d;l++)gt.fromBufferAttribute(a,l),c&&(dn.fromBufferAttribute(t,l),gt.add(dn)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&G0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){G0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new I,c[x]=new I;const l=new I,d=new I,p=new I,u=new P0,m=new P0,g=new P0,b=new I,f=new I;function h(x,S,G){l.fromBufferAttribute(n,x),d.fromBufferAttribute(n,S),p.fromBufferAttribute(n,G),u.fromBufferAttribute(r,x),m.fromBufferAttribute(r,S),g.fromBufferAttribute(r,G),d.sub(l),p.sub(l),m.sub(u),g.sub(u);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(b.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(A),f.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(A),a[x].add(b),a[S].add(b),a[G].add(b),c[x].add(f),c[S].add(f),c[G].add(f))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,S=y.length;x<S;++x){const G=y[x],A=G.start,O=G.count;for(let V=A,W=A+O;V<W;V+=3)h(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new I,E=new I,R=new I,w=new I;function P(x){R.fromBufferAttribute(s,x),w.copy(R);const S=a[x];T.copy(S),T.sub(R.multiplyScalar(R.dot(S))).normalize(),E.crossVectors(w,S);const A=E.dot(c[x])<0?-1:1;o.setXYZW(x,T.x,T.y,T.z,A)}for(let x=0,S=y.length;x<S;++x){const G=y[x],A=G.start,O=G.count;for(let V=A,W=A+O;V<W;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new jt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,d=new I,p=new I;if(t)for(let u=0,m=t.count;u<m;u+=3){const g=t.getX(u+0),b=t.getX(u+1),f=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,b),o.fromBufferAttribute(e,f),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,f),a.add(d),c.add(d),l.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let u=0,m=e.count;u<m;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),d.subVectors(o,r),p.subVectors(s,r),d.cross(p),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gt.fromBufferAttribute(t,e),gt.normalize(),t.setXYZ(e,gt.x,gt.y,gt.z)}toNonIndexed(){function t(a,c){const l=a.array,d=a.itemSize,p=a.normalized,u=new l.constructor(c.length*d);let m=0,g=0;for(let b=0,f=c.length;b<f;b++){a.isInterleavedBufferAttribute?m=c[b]*a.data.stride+a.offset:m=c[b]*d;for(let h=0;h<d;h++)u[g++]=l[m++]}return new jt(u,d,p)}if(this.index===null)return w0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new It,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let d=0,p=l.length;d<p;d++){const u=l[d],m=t(u,n);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let p=0,u=l.length;p<u;p++){const m=l[p];d.push(m.toJSON(t.data))}d.length>0&&(s[c]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const d=s[l];this.setAttribute(l,d.clone(e))}const r=t.morphAttributes;for(const l in r){const d=[],p=r[l];for(let u=0,m=p.length;u<m;u++)d.push(p[u].clone(e));this.morphAttributes[l]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,d=o.length;l<d;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pl=0;class Cn extends Ke{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pl++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=vn,this.side=Ne,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bs,this.blendDst=zs,this.blendEquation=Ye,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H0(0,0,0),this.blendAlpha=0,this.depthFunc=Mn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=en,this.stencilZFail=en,this.stencilZPass=en,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){w0(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){w0(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vn&&(n.blending=this.blending),this.side!==Ne&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Bs&&(n.blendSrc=this.blendSrc),this.blendDst!==zs&&(n.blendDst=this.blendDst),this.blendEquation!==Ye&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==en&&(n.stencilFail=this.stencilFail),this.stencilZFail!==en&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==en&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const me=new I,xs=new I,ci=new I,Re=new I,vs=new I,hi=new I,ys=new I;class ki{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,me)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=me.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(me.copy(this.origin).addScaledVector(this.direction,e),me.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xs.copy(t).add(e).multiplyScalar(.5),ci.copy(e).sub(t).normalize(),Re.copy(this.origin).sub(xs);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ci),a=Re.dot(this.direction),c=-Re.dot(ci),l=Re.lengthSq(),d=Math.abs(1-o*o);let p,u,m,g;if(d>0)if(p=o*c-a,u=o*a-c,g=r*d,p>=0)if(u>=-g)if(u<=g){const b=1/d;p*=b,u*=b,m=p*(p+o*u+2*a)+u*(o*p+u+2*c)+l}else u=r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;else u<=-g?(p=Math.max(0,-(-o*r+a)),u=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l):u<=g?(p=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(p=Math.max(0,-(o*r+a)),u=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l);else u=o>0?-r:r,p=Math.max(0,-(o*u+a)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(xs).addScaledVector(ci,u),m}intersectSphere(t,e){me.subVectors(t.center,this.origin);const n=me.dot(this.direction),s=me.dot(me)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),d>=0?(r=(t.min.y-u.y)*d,o=(t.max.y-u.y)*d):(r=(t.max.y-u.y)*d,o=(t.min.y-u.y)*d),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(t.min.z-u.z)*p,c=(t.max.z-u.z)*p):(a=(t.max.z-u.z)*p,c=(t.min.z-u.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,me)!==null}intersectTriangle(t,e,n,s,r){vs.subVectors(e,t),hi.subVectors(n,t),ys.crossVectors(vs,hi);let o=this.direction.dot(ys),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Re.subVectors(this.origin,t);const c=a*this.direction.dot(hi.crossVectors(Re,hi));if(c<0)return null;const l=a*this.direction.dot(vs.cross(Re));if(l<0||c+l>o)return null;const d=-a*Re.dot(ys);return d<0?null:this.at(d/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gi extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new H0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ae,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Uo=new U0,ke=new ki,ui=new wn,Fo=new I,di=new I,fi=new I,pi=new I,bs=new I,mi=new I,No=new I,_i=new I;class Vt extends yt{constructor(t=new It,e=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=a[c],p=r[c];d!==0&&(bs.fromBufferAttribute(p,t),o?mi.addScaledVector(bs,d):mi.addScaledVector(bs.sub(e),d))}e.add(mi)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ui.copy(n.boundingSphere),ui.applyMatrix4(r),ke.copy(t.ray).recast(t.near),!(ui.containsPoint(ke.origin)===!1&&(ke.intersectSphere(ui,Fo)===null||ke.origin.distanceToSquared(Fo)>(t.far-t.near)**2))&&(Uo.copy(r).invert(),ke.copy(t.ray).applyMatrix4(Uo),!(n.boundingBox!==null&&ke.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ke)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){const f=u[g],h=o[f.materialIndex],y=Math.max(f.start,m.start),T=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let E=y,R=T;E<R;E+=3){const w=a.getX(E),P=a.getX(E+1),x=a.getX(E+2);s=gi(this,h,t,n,l,d,p,w,P,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),b=Math.min(a.count,m.start+m.count);for(let f=g,h=b;f<h;f+=3){const y=a.getX(f),T=a.getX(f+1),E=a.getX(f+2);s=gi(this,o,t,n,l,d,p,y,T,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=u.length;g<b;g++){const f=u[g],h=o[f.materialIndex],y=Math.max(f.start,m.start),T=Math.min(c.count,Math.min(f.start+f.count,m.start+m.count));for(let E=y,R=T;E<R;E+=3){const w=E,P=E+1,x=E+2;s=gi(this,h,t,n,l,d,p,w,P,x),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),b=Math.min(c.count,m.start+m.count);for(let f=g,h=b;f<h;f+=3){const y=f,T=f+1,E=f+2;s=gi(this,o,t,n,l,d,p,y,T,E),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function ml(i,t,e,n,s,r,o,a){let c;if(t.side===Lt?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ne,a),c===null)return null;_i.copy(a),_i.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(_i);return l<e.near||l>e.far?null:{distance:l,point:_i.clone(),object:i}}function gi(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,di),i.getVertexPosition(c,fi),i.getVertexPosition(l,pi);const d=ml(i,t,e,n,di,fi,pi,No);if(d){const p=new I;Yt.getBarycoord(No,di,fi,pi,p),s&&(d.uv=Yt.getInterpolatedAttribute(s,a,c,l,p,new P0)),r&&(d.uv1=Yt.getInterpolatedAttribute(r,a,c,l,p,new P0)),o&&(d.normal=Yt.getInterpolatedAttribute(o,a,c,l,p,new I),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};Yt.getNormal(di,fi,pi,u.normal),d.face=u,d.barycoord=p}return d}class Ga extends wt{constructor(t=null,e=1,n=1,s,r,o,a,c,l=vt,d=vt,p,u){super(null,o,a,c,l,d,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo extends jt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const fn=new U0,Bo=new U0,xi=[],zo=new Je,_l=new U0,On=new Vt,Bn=new wn;class vi extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Oo(new Float32Array(n*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_l)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Je),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fn),zo.copy(t.boundingBox).applyMatrix4(fn),this.boundingBox.union(zo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fn),Bn.copy(t.boundingSphere).applyMatrix4(fn),this.boundingSphere.union(Bn)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=t.previousInstanceMatrix.clone()),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(On.geometry=this.geometry,On.material=this.material,On.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bn.copy(this.boundingSphere),Bn.applyMatrix4(n),t.ray.intersectsSphere(Bn)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,fn),Bo.multiplyMatrices(n,fn),On.matrixWorld=Bo,On.raycast(t,xi);for(let o=0,a=xi.length;o<a;o++){const c=xi[o];c.instanceId=r,c.object=this,e.push(c)}xi.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Oo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ga(new Float32Array(s*this.count),s,this.count,Vr,qt));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ms=new I,gl=new I,xl=new I0;class De{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ms.subVectors(n,e).cross(gl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ms),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||xl.getNormalMatrix(t),s=this.coplanarPoint(Ms).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ge=new wn,vl=new P0(.5,.5),yi=new I;class $r{constructor(t=new De,e=new De,n=new De,s=new De,r=new De,o=new De){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ee,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],d=r[4],p=r[5],u=r[6],m=r[7],g=r[8],b=r[9],f=r[10],h=r[11],y=r[12],T=r[13],E=r[14],R=r[15];if(s[0].setComponents(l-o,m-d,h-g,R-y).normalize(),s[1].setComponents(l+o,m+d,h+g,R+y).normalize(),s[2].setComponents(l+a,m+p,h+b,R+T).normalize(),s[3].setComponents(l-a,m-p,h-b,R-T).normalize(),n)s[4].setComponents(c,u,f,E).normalize(),s[5].setComponents(l-c,m-u,h-f,R-E).normalize();else if(s[4].setComponents(l-c,m-u,h-f,R-E).normalize(),e===ee)s[5].setComponents(l+c,m+u,h+f,R+E).normalize();else if(e===Yn)s[5].setComponents(c,u,f,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ge.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ge.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ge)}intersectsSprite(t){Ge.center.set(0,0,0);const e=vl.distanceTo(t.center);return Ge.radius=.7071067811865476+e,Ge.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ge)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yi.x=s.normal.x>0?t.max.x:t.min.x,yi.y=s.normal.y>0?t.max.y:t.min.y,yi.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jr extends Cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new H0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bi=new I,zi=new I,Vo=new U0,zn=new ki,bi=new wn,Ss=new I,Ho=new I;class Wa extends yt{constructor(t=new It,e=new jr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Bi.fromBufferAttribute(e,s-1),zi.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Bi.distanceTo(zi);t.setAttribute("lineDistance",new Tt(n,1))}else w0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bi.copy(n.boundingSphere),bi.applyMatrix4(s),bi.radius+=r,t.ray.intersectsSphere(bi)===!1)return;Vo.copy(s).invert(),zn.copy(t.ray).applyMatrix4(Vo);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let b=m,f=g-1;b<f;b+=l){const h=d.getX(b),y=d.getX(b+1),T=Mi(this,t,zn,c,h,y,b);T&&e.push(T)}if(this.isLineLoop){const b=d.getX(g-1),f=d.getX(m),h=Mi(this,t,zn,c,b,f,g-1);h&&e.push(h)}}else{const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let b=m,f=g-1;b<f;b+=l){const h=Mi(this,t,zn,c,b,b+1,b);h&&e.push(h)}if(this.isLineLoop){const b=Mi(this,t,zn,c,g-1,m,g-1);b&&e.push(b)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mi(i,t,e,n,s,r,o){const a=i.geometry.attributes.position;if(Bi.fromBufferAttribute(a,s),zi.fromBufferAttribute(a,r),e.distanceSqToSegment(Bi,zi,Ss,Ho)>n)return;Ss.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ss);if(!(l<t.near||l>t.far))return{distance:l,point:Ho.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}class Xa extends wt{constructor(t=[],e=Ze,n,s,r,o,a,c,l,d){super(t,e,n,s,r,o,a,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qn extends wt{constructor(t,e,n=oe,s,r,o,a=vt,c=vt,l,d=Me,p=1){if(d!==Me&&d!==je)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:p};super(u,s,r,o,a,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class yl extends qn{constructor(t,e=oe,n=Ze,s,r,o=vt,a=vt,c,l=Me){const d={width:t,height:t,depth:1},p=[d,d,d,d,d,d];super(t,t,e,n,s,r,o,a,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ya extends wt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kn extends It{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],d=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function g(b,f,h,y,T,E,R,w,P,x,S){const G=E/P,A=R/x,O=E/2,V=R/2,W=w/2,z=P+1,H=x+1;let F=0,Q=0;const Z=new I;for(let c0=0;c0<H;c0++){const p0=c0*A-V;for(let u0=0;u0<z;u0++){const F0=u0*G-O;Z[b]=F0*y,Z[f]=p0*T,Z[h]=W,l.push(Z.x,Z.y,Z.z),Z[b]=0,Z[f]=0,Z[h]=w>0?1:-1,d.push(Z.x,Z.y,Z.z),p.push(u0/P),p.push(1-c0/x),F+=1}}for(let c0=0;c0<x;c0++)for(let p0=0;p0<P;p0++){const u0=u+p0+z*c0,F0=u+p0+z*(c0+1),rt=u+(p0+1)+z*(c0+1),it=u+(p0+1)+z*c0;c.push(u0,F0,it),c.push(F0,rt,it),Q+=6}a.addGroup(m,Q,S),m+=Q,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zr extends It{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,d=new P0;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,u=3;p<=e;p++,u+=3){const m=n+p/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),d.x=(o[u]/t+1)/2,d.y=(o[u+1]/t+1)/2,c.push(d.x,d.y)}for(let p=1;p<=e;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Jn extends It{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,d=c+1,p=t/a,u=e/c,m=[],g=[],b=[],f=[];for(let h=0;h<d;h++){const y=h*u-o;for(let T=0;T<l;T++){const E=T*p-r;g.push(E,-y,0),b.push(0,0,1),f.push(T/a),f.push(1-h/c)}}for(let h=0;h<c;h++)for(let y=0;y<a;y++){const T=y+l*h,E=y+l*(h+1),R=y+1+l*(h+1),w=y+1+l*h;m.push(T,E,w),m.push(E,R,w)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Kr extends It{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const d=[],p=new I,u=new I,m=[],g=[],b=[],f=[];for(let h=0;h<=n;h++){const y=[],T=h/n;let E=0;h===0&&o===0?E=.5/e:h===n&&c===Math.PI&&(E=-.5/e);for(let R=0;R<=e;R++){const w=R/e;p.x=-t*Math.cos(s+w*r)*Math.sin(o+T*a),p.y=t*Math.cos(o+T*a),p.z=t*Math.sin(s+w*r)*Math.sin(o+T*a),g.push(p.x,p.y,p.z),u.copy(p).normalize(),b.push(u.x,u.y,u.z),f.push(w+E,1-T),y.push(l++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<e;y++){const T=d[h][y+1],E=d[h][y],R=d[h+1][y],w=d[h+1][y+1];(h!==0||o>0)&&m.push(T,E,w),(h!==n-1||c<Math.PI)&&m.push(E,R,w)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(b,3)),this.setAttribute("uv",new Tt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function An(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(w0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function At(i){const t={};for(let e=0;e<i.length;e++){const n=An(i[e]);for(const s in n)t[s]=n[s]}return t}function bl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qa(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W0.workingColorSpace}const Ml={clone:An,merge:At};var Sl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,El=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class le extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sl,this.fragmentShader=El,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=An(t.uniforms),this.uniformsGroups=bl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tl extends le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Al extends Cn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new H0(16777215),this.specular=new H0(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H0(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oa,this.normalScale=new P0(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ae,this.combine=Nr,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wl extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cl extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $a extends yt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new H0(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Es=new U0,ko=new I,Go=new I;class Rl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new P0(512,512),this.mapType=Ot,this.map=null,this.mapPass=null,this.matrix=new U0,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new P0(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ko.setFromMatrixPosition(t.matrixWorld),e.position.copy(ko),Go.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Go),e.updateMatrixWorld(),Es.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Es,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Yn||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Es)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Si=new I,Ei=new Oe,Kt=new I;class ja extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new U0,this.projectionMatrix=new U0,this.projectionMatrixInverse=new U0,this.coordinateSystem=ee,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Si,Ei,Kt),Kt.x===1&&Kt.y===1&&Kt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Si,Ei,Kt.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(Si,Ei,Kt),Kt.x===1&&Kt.y===1&&Kt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Si,Ei,Kt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pe=new I,Wo=new P0,Xo=new P0;class Pt extends ja{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pe.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pe.x,Pe.y).multiplyScalar(-t/Pe.z),Pe.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pe.x,Pe.y).multiplyScalar(-t/Pe.z)}getViewSize(t,e){return this.getViewBounds(t,Wo,Xo),e.subVectors(Xo,Wo)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Jr extends ja{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Pl extends Rl{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends $a{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Pl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Ll extends $a{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const pn=-90,mn=1;class Il extends yt{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pt(pn,mn,t,e);s.layers=this.layers,this.add(s);const r=new Pt(pn,mn,t,e);r.layers=this.layers,this.add(r);const o=new Pt(pn,mn,t,e);o.layers=this.layers,this.add(o);const a=new Pt(pn,mn,t,e);a.layers=this.layers,this.add(a);const c=new Pt(pn,mn,t,e);c.layers=this.layers,this.add(c);const l=new Pt(pn,mn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===ee)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Yn)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,d]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let f=!1;t.isWebGLRenderer===!0?f=t.state.buffers.depth.getReversed():f=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,s),f&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(p,u,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ul extends Pt{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Yo=new U0;class Fl{constructor(t,e,n=0,s=1/0){this.ray=new ki(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):G0("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Yo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yo),this}intersectObject(t,e=!0,n=[]){return Cr(t,this,n,e),n.sort(qo),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Cr(t[s],this,n,e);return n.sort(qo),n}}function qo(i,t){return i.distance-t.distance}function Cr(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Cr(r[o],t,e,!0)}}class $o{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=V0(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(V0(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Nl extends Ke{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){w0("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function jo(i,t,e,n){const s=Ol(n);switch(e){case Fa:return i*t;case Vr:return i*t/s.components*s.byteLength;case Hr:return i*t/s.components*s.byteLength;case En:return i*t*2/s.components*s.byteLength;case kr:return i*t*2/s.components*s.byteLength;case Na:return i*t*3/s.components*s.byteLength;case $t:return i*t*4/s.components*s.byteLength;case Gr:return i*t*4/s.components*s.byteLength;case Ri:case Pi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Di:case Li:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Zs:case Js:return Math.max(i,16)*Math.max(t,8)/4;case js:case Ks:return Math.max(i,8)*Math.max(t,8)/2;case Qs:case tr:case nr:case ir:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case er:case sr:case rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ar:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case cr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ur:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case pr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case mr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _r:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case gr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case vr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case yr:case br:case Mr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Sr:case Er:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tr:case Ar:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ol(i){switch(i){case Ot:case Da:return{byteLength:1,components:1};case Wn:case La:case be:return{byteLength:2,components:1};case Br:case zr:return{byteLength:2,components:4};case oe:case Or:case qt:return{byteLength:4,components:1};case Ia:case Ua:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fr}}));typeof window<"u"&&(window.__THREE__?w0("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fr);function Za(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bl(i){const t=new WeakMap;function e(a,c){const l=a.array,d=a.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,d),a.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){const d=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,d);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],b=p[m];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++u,p[u]=b)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const b=p[m];i.bufferSubData(l,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var zl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vl=`#ifdef USE_ALPHAHASH
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
#endif`,Hl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xl=`#ifdef USE_AOMAP
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
#endif`,Yl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ql=`#ifdef USE_BATCHING
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
#endif`,$l=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jl=`#ifdef USE_IRIDESCENCE
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
#endif`,Ql=`#ifdef USE_BUMPMAP
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
#endif`,tc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ec=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ac=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lc=`#define PI 3.141592653589793
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
} // validated`,cc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hc=`vec3 transformedNormal = objectNormal;
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
#endif`,uc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mc="gl_FragColor = linearToOutputTexel( gl_FragColor );",_c=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gc=`#ifdef USE_ENVMAP
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
#endif`,xc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vc=`#ifdef USE_ENVMAP
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
#endif`,yc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bc=`#ifdef USE_ENVMAP
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
#endif`,Mc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ec=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ac=`#ifdef USE_GRADIENTMAP
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
}`,wc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pc=`uniform bool receiveShadow;
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
#endif`,Dc=`#ifdef USE_ENVMAP
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
#endif`,Lc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ic=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fc=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nc=`PhysicalMaterial material;
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
#endif`,Oc=`uniform sampler2D dfgLUT;
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
}`,Bc=`
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
#endif`,zc=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$c=`#if defined( USE_POINTS_UV )
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
#endif`,jc=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kc=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jc=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,th=`#ifdef USE_MORPHTARGETS
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
#endif`,eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ah=`#ifdef USE_NORMALMAP
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
#endif`,lh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ph=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_h=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sh=`float getShadowMask() {
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
}`,Eh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Th=`#ifdef USE_SKINNING
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
#endif`,Ah=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wh=`#ifdef USE_SKINNING
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
#endif`,Ch=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lh=`#ifdef USE_TRANSMISSION
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
#endif`,Ih=`#ifdef USE_TRANSMISSION
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
#endif`,Uh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zh=`uniform sampler2D t2D;
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
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`#include <common>
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
}`,Xh=`#if DEPTH_PACKING == 3200
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
}`,Yh=`#define DISTANCE
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
}`,qh=`#define DISTANCE
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
}`,$h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zh=`uniform float scale;
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
}`,Kh=`uniform vec3 diffuse;
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
}`,Jh=`#include <common>
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
}`,Qh=`uniform vec3 diffuse;
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
}`,tu=`#define LAMBERT
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
}`,eu=`#define LAMBERT
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
}`,nu=`#define MATCAP
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
}`,iu=`#define MATCAP
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
}`,su=`#define NORMAL
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
}`,ru=`#define NORMAL
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
}`,ou=`#define PHONG
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
}`,au=`#define PHONG
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
}`,lu=`#define STANDARD
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
}`,cu=`#define STANDARD
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
}`,hu=`#define TOON
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
}`,uu=`#define TOON
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
}`,du=`uniform float size;
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
}`,fu=`uniform vec3 diffuse;
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
}`,pu=`#include <common>
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
}`,mu=`uniform vec3 color;
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
}`,_u=`uniform float rotation;
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
}`,gu=`uniform vec3 diffuse;
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
}`,N0={alphahash_fragment:zl,alphahash_pars_fragment:Vl,alphamap_fragment:Hl,alphamap_pars_fragment:kl,alphatest_fragment:Gl,alphatest_pars_fragment:Wl,aomap_fragment:Xl,aomap_pars_fragment:Yl,batching_pars_vertex:ql,batching_vertex:$l,begin_vertex:jl,beginnormal_vertex:Zl,bsdfs:Kl,iridescence_fragment:Jl,bumpmap_pars_fragment:Ql,clipping_planes_fragment:tc,clipping_planes_pars_fragment:ec,clipping_planes_pars_vertex:nc,clipping_planes_vertex:ic,color_fragment:sc,color_pars_fragment:rc,color_pars_vertex:oc,color_vertex:ac,common:lc,cube_uv_reflection_fragment:cc,defaultnormal_vertex:hc,displacementmap_pars_vertex:uc,displacementmap_vertex:dc,emissivemap_fragment:fc,emissivemap_pars_fragment:pc,colorspace_fragment:mc,colorspace_pars_fragment:_c,envmap_fragment:gc,envmap_common_pars_fragment:xc,envmap_pars_fragment:vc,envmap_pars_vertex:yc,envmap_physical_pars_fragment:Dc,envmap_vertex:bc,fog_vertex:Mc,fog_pars_vertex:Sc,fog_fragment:Ec,fog_pars_fragment:Tc,gradientmap_pars_fragment:Ac,lightmap_pars_fragment:wc,lights_lambert_fragment:Cc,lights_lambert_pars_fragment:Rc,lights_pars_begin:Pc,lights_toon_fragment:Lc,lights_toon_pars_fragment:Ic,lights_phong_fragment:Uc,lights_phong_pars_fragment:Fc,lights_physical_fragment:Nc,lights_physical_pars_fragment:Oc,lights_fragment_begin:Bc,lights_fragment_maps:zc,lights_fragment_end:Vc,logdepthbuf_fragment:Hc,logdepthbuf_pars_fragment:kc,logdepthbuf_pars_vertex:Gc,logdepthbuf_vertex:Wc,map_fragment:Xc,map_pars_fragment:Yc,map_particle_fragment:qc,map_particle_pars_fragment:$c,metalnessmap_fragment:jc,metalnessmap_pars_fragment:Zc,morphinstance_vertex:Kc,morphcolor_vertex:Jc,morphnormal_vertex:Qc,morphtarget_pars_vertex:th,morphtarget_vertex:eh,normal_fragment_begin:nh,normal_fragment_maps:ih,normal_pars_fragment:sh,normal_pars_vertex:rh,normal_vertex:oh,normalmap_pars_fragment:ah,clearcoat_normal_fragment_begin:lh,clearcoat_normal_fragment_maps:ch,clearcoat_pars_fragment:hh,iridescence_pars_fragment:uh,opaque_fragment:dh,packing:fh,premultiplied_alpha_fragment:ph,project_vertex:mh,dithering_fragment:_h,dithering_pars_fragment:gh,roughnessmap_fragment:xh,roughnessmap_pars_fragment:vh,shadowmap_pars_fragment:yh,shadowmap_pars_vertex:bh,shadowmap_vertex:Mh,shadowmask_pars_fragment:Sh,skinbase_vertex:Eh,skinning_pars_vertex:Th,skinning_vertex:Ah,skinnormal_vertex:wh,specularmap_fragment:Ch,specularmap_pars_fragment:Rh,tonemapping_fragment:Ph,tonemapping_pars_fragment:Dh,transmission_fragment:Lh,transmission_pars_fragment:Ih,uv_pars_fragment:Uh,uv_pars_vertex:Fh,uv_vertex:Nh,worldpos_vertex:Oh,background_vert:Bh,background_frag:zh,backgroundCube_vert:Vh,backgroundCube_frag:Hh,cube_vert:kh,cube_frag:Gh,depth_vert:Wh,depth_frag:Xh,distance_vert:Yh,distance_frag:qh,equirect_vert:$h,equirect_frag:jh,linedashed_vert:Zh,linedashed_frag:Kh,meshbasic_vert:Jh,meshbasic_frag:Qh,meshlambert_vert:tu,meshlambert_frag:eu,meshmatcap_vert:nu,meshmatcap_frag:iu,meshnormal_vert:su,meshnormal_frag:ru,meshphong_vert:ou,meshphong_frag:au,meshphysical_vert:lu,meshphysical_frag:cu,meshtoon_vert:hu,meshtoon_frag:uu,points_vert:du,points_frag:fu,shadow_vert:pu,shadow_frag:mu,sprite_vert:_u,sprite_frag:gu},o0={common:{diffuse:{value:new H0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new I0},alphaMap:{value:null},alphaMapTransform:{value:new I0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new I0}},envmap:{envMap:{value:null},envMapRotation:{value:new I0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new I0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new I0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new I0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new I0},normalScale:{value:new P0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new I0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new I0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new I0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new I0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new H0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new I0},alphaTest:{value:0},uvTransform:{value:new I0}},sprite:{diffuse:{value:new H0(16777215)},opacity:{value:1},center:{value:new P0(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new I0},alphaMap:{value:null},alphaMapTransform:{value:new I0},alphaTest:{value:0}}},te={basic:{uniforms:At([o0.common,o0.specularmap,o0.envmap,o0.aomap,o0.lightmap,o0.fog]),vertexShader:N0.meshbasic_vert,fragmentShader:N0.meshbasic_frag},lambert:{uniforms:At([o0.common,o0.specularmap,o0.envmap,o0.aomap,o0.lightmap,o0.emissivemap,o0.bumpmap,o0.normalmap,o0.displacementmap,o0.fog,o0.lights,{emissive:{value:new H0(0)},envMapIntensity:{value:1}}]),vertexShader:N0.meshlambert_vert,fragmentShader:N0.meshlambert_frag},phong:{uniforms:At([o0.common,o0.specularmap,o0.envmap,o0.aomap,o0.lightmap,o0.emissivemap,o0.bumpmap,o0.normalmap,o0.displacementmap,o0.fog,o0.lights,{emissive:{value:new H0(0)},specular:{value:new H0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:N0.meshphong_vert,fragmentShader:N0.meshphong_frag},standard:{uniforms:At([o0.common,o0.envmap,o0.aomap,o0.lightmap,o0.emissivemap,o0.bumpmap,o0.normalmap,o0.displacementmap,o0.roughnessmap,o0.metalnessmap,o0.fog,o0.lights,{emissive:{value:new H0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:N0.meshphysical_vert,fragmentShader:N0.meshphysical_frag},toon:{uniforms:At([o0.common,o0.aomap,o0.lightmap,o0.emissivemap,o0.bumpmap,o0.normalmap,o0.displacementmap,o0.gradientmap,o0.fog,o0.lights,{emissive:{value:new H0(0)}}]),vertexShader:N0.meshtoon_vert,fragmentShader:N0.meshtoon_frag},matcap:{uniforms:At([o0.common,o0.bumpmap,o0.normalmap,o0.displacementmap,o0.fog,{matcap:{value:null}}]),vertexShader:N0.meshmatcap_vert,fragmentShader:N0.meshmatcap_frag},points:{uniforms:At([o0.points,o0.fog]),vertexShader:N0.points_vert,fragmentShader:N0.points_frag},dashed:{uniforms:At([o0.common,o0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N0.linedashed_vert,fragmentShader:N0.linedashed_frag},depth:{uniforms:At([o0.common,o0.displacementmap]),vertexShader:N0.depth_vert,fragmentShader:N0.depth_frag},normal:{uniforms:At([o0.common,o0.bumpmap,o0.normalmap,o0.displacementmap,{opacity:{value:1}}]),vertexShader:N0.meshnormal_vert,fragmentShader:N0.meshnormal_frag},sprite:{uniforms:At([o0.sprite,o0.fog]),vertexShader:N0.sprite_vert,fragmentShader:N0.sprite_frag},background:{uniforms:{uvTransform:{value:new I0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:N0.background_vert,fragmentShader:N0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new I0}},vertexShader:N0.backgroundCube_vert,fragmentShader:N0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:N0.cube_vert,fragmentShader:N0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N0.equirect_vert,fragmentShader:N0.equirect_frag},distance:{uniforms:At([o0.common,o0.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:N0.distance_vert,fragmentShader:N0.distance_frag},shadow:{uniforms:At([o0.lights,o0.fog,{color:{value:new H0(0)},opacity:{value:1}}]),vertexShader:N0.shadow_vert,fragmentShader:N0.shadow_frag}};te.physical={uniforms:At([te.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new I0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new I0},clearcoatNormalScale:{value:new P0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new I0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new I0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new I0},sheen:{value:0},sheenColor:{value:new H0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new I0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new I0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new I0},transmissionSamplerSize:{value:new P0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new I0},attenuationDistance:{value:0},attenuationColor:{value:new H0(0)},specularColor:{value:new H0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new I0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new I0},anisotropyVector:{value:new P0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new I0}}]),vertexShader:N0.meshphysical_vert,fragmentShader:N0.meshphysical_frag};const Ti={r:0,b:0,g:0},We=new ae,xu=new U0;function vu(i,t,e,n,s,r){const o=new H0(0);let a=s===!0?0:1,c,l,d=null,p=0,u=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const E=y.backgroundBlurriness>0;T=t.get(T,E)}return T}function g(y){let T=!1;const E=m(y);E===null?f(o,a):E&&E.isColor&&(f(E,1),T=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,T){const E=m(T);E&&(E.isCubeTexture||E.mapping===Hi)?(l===void 0&&(l=new Vt(new Kn(1,1,1),new le({name:"BackgroundCubeMaterial",uniforms:An(te.backgroundCube.uniforms),vertexShader:te.backgroundCube.vertexShader,fragmentShader:te.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),We.copy(T.backgroundRotation),We.x*=-1,We.y*=-1,We.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(We.y*=-1,We.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xu.makeRotationFromEuler(We)),l.material.toneMapped=W0.getTransfer(E.colorSpace)!==j0,(d!==E||p!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,p=E.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Vt(new Jn(2,2),new le({name:"BackgroundMaterial",uniforms:An(te.background.uniforms),vertexShader:te.background.vertexShader,fragmentShader:te.background.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=W0.getTransfer(E.colorSpace)!==j0,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,p=E.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,T){y.getRGB(Ti,qa(i)),e.buffers.color.setClear(Ti.r,Ti.g,Ti.b,T,r)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,T=1){o.set(y),a=T,f(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,f(o,a)},render:g,addToRenderList:b,dispose:h}}function yu(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(A,O,V,W,z){let H=!1;const F=p(A,W,V,O);r!==F&&(r=F,l(r.object)),H=m(A,W,V,z),H&&g(A,W,V,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,E(A,O,V,W),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function d(A){return i.deleteVertexArray(A)}function p(A,O,V,W){const z=W.wireframe===!0;let H=n[O.id];H===void 0&&(H={},n[O.id]=H);const F=A.isInstancedMesh===!0?A.id:0;let Q=H[F];Q===void 0&&(Q={},H[F]=Q);let Z=Q[V.id];Z===void 0&&(Z={},Q[V.id]=Z);let c0=Z[z];return c0===void 0&&(c0=u(c()),Z[z]=c0),c0}function u(A){const O=[],V=[],W=[];for(let z=0;z<e;z++)O[z]=0,V[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:W,object:A,attributes:{},index:null}}function m(A,O,V,W){const z=r.attributes,H=O.attributes;let F=0;const Q=V.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const p0=z[Z];let u0=H[Z];if(u0===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(u0=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(u0=A.instanceColor)),p0===void 0||p0.attribute!==u0||u0&&p0.data!==u0.data)return!0;F++}return r.attributesNum!==F||r.index!==W}function g(A,O,V,W){const z={},H=O.attributes;let F=0;const Q=V.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let p0=H[Z];p0===void 0&&(Z==="instanceMatrix"&&A.instanceMatrix&&(p0=A.instanceMatrix),Z==="instanceColor"&&A.instanceColor&&(p0=A.instanceColor));const u0={};u0.attribute=p0,p0&&p0.data&&(u0.data=p0.data),z[Z]=u0,F++}r.attributes=z,r.attributesNum=F,r.index=W}function b(){const A=r.newAttributes;for(let O=0,V=A.length;O<V;O++)A[O]=0}function f(A){h(A,0)}function h(A,O){const V=r.newAttributes,W=r.enabledAttributes,z=r.attributeDivisors;V[A]=1,W[A]===0&&(i.enableVertexAttribArray(A),W[A]=1),z[A]!==O&&(i.vertexAttribDivisor(A,O),z[A]=O)}function y(){const A=r.newAttributes,O=r.enabledAttributes;for(let V=0,W=O.length;V<W;V++)O[V]!==A[V]&&(i.disableVertexAttribArray(V),O[V]=0)}function T(A,O,V,W,z,H,F){F===!0?i.vertexAttribIPointer(A,O,V,z,H):i.vertexAttribPointer(A,O,V,W,z,H)}function E(A,O,V,W){b();const z=W.attributes,H=V.getAttributes(),F=O.defaultAttributeValues;for(const Q in H){const Z=H[Q];if(Z.location>=0){let c0=z[Q];if(c0===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(c0=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(c0=A.instanceColor)),c0!==void 0){const p0=c0.normalized,u0=c0.itemSize,F0=t.get(c0);if(F0===void 0)continue;const rt=F0.buffer,it=F0.type,$=F0.bytesPerElement,n0=it===i.INT||it===i.UNSIGNED_INT||c0.gpuType===Or;if(c0.isInterleavedBufferAttribute){const r0=c0.data,L0=r0.stride,T0=c0.offset;if(r0.isInstancedInterleavedBuffer){for(let C0=0;C0<Z.locationSize;C0++)h(Z.location+C0,r0.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=r0.meshPerAttribute*r0.count)}else for(let C0=0;C0<Z.locationSize;C0++)f(Z.location+C0);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let C0=0;C0<Z.locationSize;C0++)T(Z.location+C0,u0/Z.locationSize,it,p0,L0*$,(T0+u0/Z.locationSize*C0)*$,n0)}else{if(c0.isInstancedBufferAttribute){for(let r0=0;r0<Z.locationSize;r0++)h(Z.location+r0,c0.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=c0.meshPerAttribute*c0.count)}else for(let r0=0;r0<Z.locationSize;r0++)f(Z.location+r0);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let r0=0;r0<Z.locationSize;r0++)T(Z.location+r0,u0/Z.locationSize,it,p0,u0*$,u0/Z.locationSize*r0*$,n0)}}else if(F!==void 0){const p0=F[Q];if(p0!==void 0)switch(p0.length){case 2:i.vertexAttrib2fv(Z.location,p0);break;case 3:i.vertexAttrib3fv(Z.location,p0);break;case 4:i.vertexAttrib4fv(Z.location,p0);break;default:i.vertexAttrib1fv(Z.location,p0)}}}}y()}function R(){S();for(const A in n){const O=n[A];for(const V in O){const W=O[V];for(const z in W){const H=W[z];for(const F in H)d(H[F].object),delete H[F];delete W[z]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;const O=n[A.id];for(const V in O){const W=O[V];for(const z in W){const H=W[z];for(const F in H)d(H[F].object),delete H[F];delete W[z]}}delete n[A.id]}function P(A){for(const O in n){const V=n[O];for(const W in V){const z=V[W];if(z[A.id]===void 0)continue;const H=z[A.id];for(const F in H)d(H[F].object),delete H[F];delete z[A.id]}}}function x(A){for(const O in n){const V=n[O],W=A.isInstancedMesh===!0?A.id:0,z=V[W];if(z!==void 0){for(const H in z){const F=z[H];for(const Q in F)d(F[Q].object),delete F[Q];delete z[H]}delete V[W],Object.keys(V).length===0&&delete n[O]}}}function S(){G(),o=!0,r!==s&&(r=s,l(r.object))}function G(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:G,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:f,disableUnusedAttributes:y}}function bu(i,t,e){let n;function s(l){n=l}function r(l,d){i.drawArrays(n,l,d),e.update(d,n,1)}function o(l,d,p){p!==0&&(i.drawArraysInstanced(n,l,d,p),e.update(d,n,p))}function a(l,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];e.update(m,n,1)}function c(l,d,p,u){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],d[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,d,0,u,0,p);let g=0;for(let b=0;b<p;b++)g+=d[b]*u[b];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Mu(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==$t&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const x=P===be&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Ot&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==qt&&!x)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const d=c(l);d!==l&&(w0("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:f,maxAttributes:h,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:E,maxSamples:R,samples:w}}function Su(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new De,a=new I0,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=d(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,b=p.clipIntersection,f=p.clipShadows,h=i.get(p);if(!s||g===null||g.length===0||r&&!f)r?d(null):l();else{const y=r?0:n,T=y*4;let E=h.clippingState||null;c.value=E,E=d(g,u,T,m);for(let R=0;R!==T;++R)E[R]=e[R];h.clippingState=E,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(p,u,m,g){const b=p!==null?p.length:0;let f=null;if(b!==0){if(f=c.value,g!==!0||f===null){const h=m+b*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(f===null||f.length<h)&&(f=new Float32Array(h));for(let T=0,E=m;T!==b;++T,E+=4)o.copy(p[T]).applyMatrix4(y,a),o.normal.toArray(f,E),f[E+3]=o.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,f}}const Ue=4,Zo=[.125,.215,.35,.446,.526,.582],qe=20,Eu=256,Vn=new Jr,Ko=new H0;let Ts=null,As=0,ws=0,Cs=!1;const Tu=new I;class Jo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Tu}=r;Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ts,As,ws),this._renderer.xr.enabled=Cs,t.scissorTest=!1,_n(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ze||t.mapping===Sn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ts=this._renderer.getRenderTarget(),As=this._renderer.getActiveCubeFace(),ws=this._renderer.getActiveMipmapLevel(),Cs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:be,format:$t,colorSpace:Tn,depthBuffer:!1},s=Qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Au(r)),this._blurMaterial=Cu(r,t,e),this._ggxMaterial=wu(r,t,e)}return s}_compileMaterial(t){const e=new Vt(new It,t);this._renderer.compile(e,Vn)}_sceneToCubeUV(t,e,n,s,r){const c=new Pt(90,1,e,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,m=p.toneMapping;p.getClearColor(Ko),p.toneMapping=ne,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Kn,new Gi({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,f=b.material;let h=!1;const y=t.background;y?y.isColor&&(f.color.copy(y),t.background=null,h=!0):(f.color.copy(Ko),h=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[T],r.y,r.z)):E===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[T]));const R=this._cubeSize;_n(s,E*R,T>2?R:0,R,R),p.setRenderTarget(s),h&&p.render(b,c),p.render(t,c)}p.toneMapping=m,p.autoClear=u,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ze||t.mapping===Sn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ta());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;_n(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Vn)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),u=0+l*1.25,m=p*u,{_lodMax:g}=this,b=this._sizeLods[n],f=3*b*(n>g-Ue?n-g+Ue:0),h=4*(this._cubeSize-b);c.envMap.value=t.texture,c.roughness.value=m,c.mipInt.value=g-e,_n(r,f,h,3*b,2*b),s.setRenderTarget(r),s.render(a,Vn),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,_n(t,f,h,3*b,2*b),s.setRenderTarget(t),s.render(a,Vn)}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&G0("blur direction must be either latitudinal or longitudinal!");const d=3,p=this._lodMeshes[s];p.material=l;const u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*qe-1),b=r/g,f=isFinite(r)?1+Math.floor(d*b):qe;f>qe&&w0(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${qe}`);const h=[];let y=0;for(let P=0;P<qe;++P){const x=P/b,S=Math.exp(-x*x/2);h.push(S),P===0?y+=S:P<f&&(y+=2*S)}for(let P=0;P<h.length;P++)h[P]=h[P]/y;u.envMap.value=t.texture,u.samples.value=f,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;const E=this._sizeLods[s],R=3*E*(s>T-Ue?s-T+Ue:0),w=4*(this._cubeSize-E);_n(e,R,w,3*E,2*E),c.setRenderTarget(e),c.render(p,Vn)}}function Au(i){const t=[],e=[],n=[];let s=i;const r=i-Ue+1+Zo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ue?c=Zo[o-i+Ue-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),d=-l,p=1+l,u=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,g=6,b=3,f=2,h=1,y=new Float32Array(b*g*m),T=new Float32Array(f*g*m),E=new Float32Array(h*g*m);for(let w=0;w<m;w++){const P=w%3*2/3-1,x=w>2?0:-1,S=[P,x,0,P+2/3,x,0,P+2/3,x+1,0,P,x,0,P+2/3,x+1,0,P,x+1,0];y.set(S,b*g*w),T.set(u,f*g*w);const G=[w,w,w,w,w,w];E.set(G,h*g*w)}const R=new It;R.setAttribute("position",new jt(y,b)),R.setAttribute("uv",new jt(T,f)),R.setAttribute("faceIndex",new jt(E,h)),n.push(new Vt(R,null)),s>Ue&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Qo(i,t,e){const n=new ie(i,t,e);return n.texture.mapping=Hi,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _n(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function wu(i,t,e){return new le({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Eu,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wi(),fragmentShader:`

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
		`,blending:ve,depthTest:!1,depthWrite:!1})}function Cu(i,t,e){const n=new Float32Array(qe),s=new I(0,1,0);return new le({name:"SphericalGaussianBlur",defines:{n:qe,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wi(),fragmentShader:`

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
		`,blending:ve,depthTest:!1,depthWrite:!1})}function ta(){return new le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wi(),fragmentShader:`

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
		`,blending:ve,depthTest:!1,depthWrite:!1})}function ea(){return new le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ve,depthTest:!1,depthWrite:!1})}function Wi(){return`

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
	`}class Ka extends ie{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kn(5,5,5),r=new le({name:"CubemapFromEquirect",uniforms:An(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:ve});r.uniforms.tEquirect.value=e;const o=new Vt(s,r),a=e.minFilter;return e.minFilter===$e&&(e.minFilter=Et),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Ru(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,m=!1){return u==null?null:m?o(u):r(u)}function r(u){if(u&&u.isTexture){const m=u.mapping;if(m===Zi||m===Ki)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const b=new Ka(g.height);return b.fromEquirectangularTexture(i,u),t.set(u,b),u.addEventListener("dispose",l),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,g=m===Zi||m===Ki,b=m===Ze||m===Sn;if(g||b){let f=e.get(u);const h=f!==void 0?f.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Jo(i)),f=g?n.fromEquirectangular(u,f):n.fromCubemap(u,f),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),f.texture;if(f!==void 0)return f.texture;{const y=u.image;return g&&y&&y.height>0||b&&y&&c(y)?(n===null&&(n=new Jo(i)),f=g?n.fromEquirectangular(u):n.fromCubemap(u),f.texture.pmremVersion=u.pmremVersion,e.set(u,f),u.addEventListener("dispose",d),f.texture):null}}}return u}function a(u,m){return m===Zi?u.mapping=Ze:m===Ki&&(u.mapping=Sn),u}function c(u){let m=0;const g=6;for(let b=0;b<g;b++)u[b]!==void 0&&m++;return m===g}function l(u){const m=u.target;m.removeEventListener("dispose",l);const g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function d(u){const m=u.target;m.removeEventListener("dispose",d);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Pu(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function Du(i,t,e,n){const s={},r=new WeakMap;function o(p){const u=p.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const m=r.get(u);m&&(t.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(p,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(p){const u=p.attributes;for(const m in u)t.update(u[m],i.ARRAY_BUFFER)}function l(p){const u=[],m=p.index,g=p.attributes.position;let b=0;if(g===void 0)return;if(m!==null){const y=m.array;b=m.version;for(let T=0,E=y.length;T<E;T+=3){const R=y[T+0],w=y[T+1],P=y[T+2];u.push(R,w,w,P,P,R)}}else{const y=g.array;b=g.version;for(let T=0,E=y.length/3-1;T<E;T+=3){const R=T+0,w=T+1,P=T+2;u.push(R,w,w,P,P,R)}}const f=new(g.count>=65535?ka:Ha)(u,1);f.version=b;const h=r.get(p);h&&t.remove(h),r.set(p,f)}function d(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:d}}function Lu(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*o),e.update(m,n,1)}function l(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*o,g),e.update(m,n,g))}function d(u,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let f=0;for(let h=0;h<g;h++)f+=m[h];e.update(f,n,1)}function p(u,m,g,b){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u.length;h++)l(u[h]/o,m[h],b[h]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,b,0,g);let h=0;for(let y=0;y<g;y++)h+=m[y]*b[y];e.update(h,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Iu(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:G0("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Uu(i,t,e){const n=new WeakMap,s=new st;function r(o,a,c){const l=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==p){let G=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",G)};var m=G;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),b===!0&&(E=2),f===!0&&(E=3);let R=a.attributes.position.count*E,w=1;R>t.maxTextureSize&&(w=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const P=new Float32Array(R*w*4*p),x=new za(P,R,w,p);x.type=qt,x.needsUpdate=!0;const S=E*4;for(let A=0;A<p;A++){const O=h[A],V=y[A],W=T[A],z=R*w*4*A;for(let H=0;H<O.count;H++){const F=H*S;g===!0&&(s.fromBufferAttribute(O,H),P[z+F+0]=s.x,P[z+F+1]=s.y,P[z+F+2]=s.z,P[z+F+3]=0),b===!0&&(s.fromBufferAttribute(V,H),P[z+F+4]=s.x,P[z+F+5]=s.y,P[z+F+6]=s.z,P[z+F+7]=0),f===!0&&(s.fromBufferAttribute(W,H),P[z+F+8]=s.x,P[z+F+9]=s.y,P[z+F+10]=s.z,P[z+F+11]=W.itemSize===4?s.w:1)}}u={count:p,texture:x,size:new P0(R,w)},n.set(a,u),a.addEventListener("dispose",G)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let f=0;f<l.length;f++)g+=l[f];const b=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Fu(i,t,e,n,s){let r=new WeakMap;function o(l){const d=s.render.frame,p=l.geometry,u=t.get(l,p);if(r.get(u)!==d&&(t.update(u),r.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==d&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,d))),l.isSkinnedMesh){const m=l.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return u}function a(){r=new WeakMap}function c(l){const d=l.target;d.removeEventListener("dispose",c),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:a}}const Nu={[Sa]:"LINEAR_TONE_MAPPING",[Ea]:"REINHARD_TONE_MAPPING",[Ta]:"CINEON_TONE_MAPPING",[Aa]:"ACES_FILMIC_TONE_MAPPING",[Ca]:"AGX_TONE_MAPPING",[Ra]:"NEUTRAL_TONE_MAPPING",[wa]:"CUSTOM_TONE_MAPPING"};function Ou(i,t,e,n,s){const r=new ie(t,e,{type:i,depthBuffer:n,stencilBuffer:s}),o=new ie(t,e,{type:be,depthBuffer:!1,stencilBuffer:!1}),a=new It;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const c=new Tl({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Vt(a,c),d=new Jr(-1,1,1,-1,0,1);let p=null,u=null,m=!1,g,b=null,f=[],h=!1;this.setSize=function(y,T){r.setSize(y,T),o.setSize(y,T);for(let E=0;E<f.length;E++){const R=f[E];R.setSize&&R.setSize(y,T)}},this.setEffects=function(y){f=y,h=f.length>0&&f[0].isRenderPass===!0;const T=r.width,E=r.height;for(let R=0;R<f.length;R++){const w=f[R];w.setSize&&w.setSize(T,E)}},this.begin=function(y,T){if(m||y.toneMapping===ne&&f.length===0)return!1;if(b=T,T!==null){const E=T.width,R=T.height;(r.width!==E||r.height!==R)&&this.setSize(E,R)}return h===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=ne,!0},this.hasRenderPass=function(){return h},this.end=function(y,T){y.toneMapping=g,m=!0;let E=r,R=o;for(let w=0;w<f.length;w++){const P=f[w];if(P.enabled!==!1&&(P.render(y,R,E,T),P.needsSwap!==!1)){const x=E;E=R,R=x}}if(p!==y.outputColorSpace||u!==y.toneMapping){p=y.outputColorSpace,u=y.toneMapping,c.defines={},W0.getTransfer(p)===j0&&(c.defines.SRGB_TRANSFER="");const w=Nu[u];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(b),y.render(l,d),b=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}const Ja=new wt,Rr=new qn(1,1),Qa=new za,t1=new il,e1=new Xa,na=[],ia=[],sa=new Float32Array(16),ra=new Float32Array(9),oa=new Float32Array(4);function Rn(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=na[s];if(r===void 0&&(r=new Float32Array(s),na[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function ft(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function pt(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xi(i,t){let e=ia[t];e===void 0&&(e=new Int32Array(t),ia[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ft(e,t))return;i.uniform2fv(this.addr,t),pt(e,t)}}function Vu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ft(e,t))return;i.uniform3fv(this.addr,t),pt(e,t)}}function Hu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ft(e,t))return;i.uniform4fv(this.addr,t),pt(e,t)}}function ku(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ft(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),pt(e,t)}else{if(ft(e,n))return;oa.set(n),i.uniformMatrix2fv(this.addr,!1,oa),pt(e,n)}}function Gu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ft(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),pt(e,t)}else{if(ft(e,n))return;ra.set(n),i.uniformMatrix3fv(this.addr,!1,ra),pt(e,n)}}function Wu(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ft(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),pt(e,t)}else{if(ft(e,n))return;sa.set(n),i.uniformMatrix4fv(this.addr,!1,sa),pt(e,n)}}function Xu(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Yu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ft(e,t))return;i.uniform2iv(this.addr,t),pt(e,t)}}function qu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ft(e,t))return;i.uniform3iv(this.addr,t),pt(e,t)}}function $u(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ft(e,t))return;i.uniform4iv(this.addr,t),pt(e,t)}}function ju(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zu(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ft(e,t))return;i.uniform2uiv(this.addr,t),pt(e,t)}}function Ku(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ft(e,t))return;i.uniform3uiv(this.addr,t),pt(e,t)}}function Ju(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ft(e,t))return;i.uniform4uiv(this.addr,t),pt(e,t)}}function Qu(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rr.compareFunction=e.isReversedDepthBuffer()?Xr:Wr,r=Rr):r=Ja,e.setTexture2D(t||r,s)}function td(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||t1,s)}function ed(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||e1,s)}function nd(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Qa,s)}function id(i){switch(i){case 5126:return Bu;case 35664:return zu;case 35665:return Vu;case 35666:return Hu;case 35674:return ku;case 35675:return Gu;case 35676:return Wu;case 5124:case 35670:return Xu;case 35667:case 35671:return Yu;case 35668:case 35672:return qu;case 35669:case 35673:return $u;case 5125:return ju;case 36294:return Zu;case 36295:return Ku;case 36296:return Ju;case 35678:case 36198:case 36298:case 36306:case 35682:return Qu;case 35679:case 36299:case 36307:return td;case 35680:case 36300:case 36308:case 36293:return ed;case 36289:case 36303:case 36311:case 36292:return nd}}function sd(i,t){i.uniform1fv(this.addr,t)}function rd(i,t){const e=Rn(t,this.size,2);i.uniform2fv(this.addr,e)}function od(i,t){const e=Rn(t,this.size,3);i.uniform3fv(this.addr,e)}function ad(i,t){const e=Rn(t,this.size,4);i.uniform4fv(this.addr,e)}function ld(i,t){const e=Rn(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cd(i,t){const e=Rn(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hd(i,t){const e=Rn(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ud(i,t){i.uniform1iv(this.addr,t)}function dd(i,t){i.uniform2iv(this.addr,t)}function fd(i,t){i.uniform3iv(this.addr,t)}function pd(i,t){i.uniform4iv(this.addr,t)}function md(i,t){i.uniform1uiv(this.addr,t)}function _d(i,t){i.uniform2uiv(this.addr,t)}function gd(i,t){i.uniform3uiv(this.addr,t)}function xd(i,t){i.uniform4uiv(this.addr,t)}function vd(i,t,e){const n=this.cache,s=t.length,r=Xi(e,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Rr:o=Ja;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function yd(i,t,e){const n=this.cache,s=t.length,r=Xi(e,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||t1,r[o])}function bd(i,t,e){const n=this.cache,s=t.length,r=Xi(e,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||e1,r[o])}function Md(i,t,e){const n=this.cache,s=t.length,r=Xi(e,s);ft(n,r)||(i.uniform1iv(this.addr,r),pt(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qa,r[o])}function Sd(i){switch(i){case 5126:return sd;case 35664:return rd;case 35665:return od;case 35666:return ad;case 35674:return ld;case 35675:return cd;case 35676:return hd;case 5124:case 35670:return ud;case 35667:case 35671:return dd;case 35668:case 35672:return fd;case 35669:case 35673:return pd;case 5125:return md;case 36294:return _d;case 36295:return gd;case 36296:return xd;case 35678:case 36198:case 36298:case 36306:case 35682:return vd;case 35679:case 36299:case 36307:return yd;case 35680:case 36300:case 36308:case 36293:return bd;case 36289:case 36303:case 36311:case 36292:return Md}}class Ed{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=id(e.type)}}class Td{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sd(e.type)}}class Ad{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function aa(i,t){i.seq.push(t),i.map[t.id]=t}function wd(i,t,e){const n=i.name,s=n.length;for(Rs.lastIndex=0;;){const r=Rs.exec(n),o=Rs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){aa(e,l===void 0?new Ed(a,i,t):new Td(a,i,t));break}else{let p=e.map[a];p===void 0&&(p=new Ad(a),aa(e,p)),e=p}}}class Ui{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);wd(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function la(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Cd=37297;let Rd=0;function Pd(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ca=new I0;function Dd(i){W0._getMatrix(ca,W0.workingColorSpace,i);const t=`mat3( ${ca.elements.map(e=>e.toFixed(4))} )`;switch(W0.getTransfer(i)){case Fi:return[t,"LinearTransferOETF"];case j0:return[t,"sRGBTransferOETF"];default:return w0("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ha(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Pd(i.getShaderSource(t),a)}else return r}function Ld(i,t){const e=Dd(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const Id={[Sa]:"Linear",[Ea]:"Reinhard",[Ta]:"Cineon",[Aa]:"ACESFilmic",[Ca]:"AgX",[Ra]:"Neutral",[wa]:"Custom"};function Ud(i,t){const e=Id[t];return e===void 0?(w0("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ai=new I;function Fd(){W0.getLuminanceCoefficients(Ai);const i=Ai.x.toFixed(4),t=Ai.y.toFixed(4),e=Ai.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nd(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gn).join(`
`)}function Od(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Bd(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Gn(i){return i!==""}function ua(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function da(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zd=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pr(i){return i.replace(zd,Hd)}const Vd=new Map;function Hd(i,t){let e=N0[t];if(e===void 0){const n=Vd.get(t);if(n!==void 0)e=N0[n],w0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pr(e)}const kd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fa(i){return i.replace(kd,Gd)}function Gd(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pa(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}const Wd={[Ci]:"SHADOWMAP_TYPE_PCF",[kn]:"SHADOWMAP_TYPE_VSM"};function Xd(i){return Wd[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yd={[Ze]:"ENVMAP_TYPE_CUBE",[Sn]:"ENVMAP_TYPE_CUBE",[Hi]:"ENVMAP_TYPE_CUBE_UV"};function qd(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yd[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const $d={[Sn]:"ENVMAP_MODE_REFRACTION"};function jd(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$d[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Zd={[Nr]:"ENVMAP_BLENDING_MULTIPLY",[F1]:"ENVMAP_BLENDING_MIX",[N1]:"ENVMAP_BLENDING_ADD"};function Kd(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Zd[i.combine]||"ENVMAP_BLENDING_NONE"}function Jd(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Qd(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Xd(e),l=qd(e),d=jd(e),p=Kd(e),u=Jd(e),m=Nd(e),g=Od(r),b=s.createProgram();let f,h,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gn).join(`
`),f.length>0&&(f+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gn).join(`
`),h.length>0&&(h+=`
`)):(f=[pa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gn).join(`
`),h=[pa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ne?"#define TONE_MAPPING":"",e.toneMapping!==ne?N0.tonemapping_pars_fragment:"",e.toneMapping!==ne?Ud("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",N0.colorspace_pars_fragment,Ld("linearToOutputTexel",e.outputColorSpace),Fd(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gn).join(`
`)),o=Pr(o),o=ua(o,e),o=da(o,e),a=Pr(a),a=ua(a,e),a=da(a,e),o=fa(o),a=fa(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,h=["#define varying in",e.glslVersion===yo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=y+f+o,E=y+h+a,R=la(s,s.VERTEX_SHADER,T),w=la(s,s.FRAGMENT_SHADER,E);s.attachShader(b,R),s.attachShader(b,w),e.index0AttributeName!==void 0?s.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function P(A){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(b)||"",V=s.getShaderInfoLog(R)||"",W=s.getShaderInfoLog(w)||"",z=O.trim(),H=V.trim(),F=W.trim();let Q=!0,Z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,R,w);else{const c0=ha(s,R,"vertex"),p0=ha(s,w,"fragment");G0("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+c0+`
`+p0)}else z!==""?w0("WebGLProgram: Program Info Log:",z):(H===""||F==="")&&(Z=!1);Z&&(A.diagnostics={runnable:Q,programLog:z,vertexShader:{log:H,prefix:f},fragmentShader:{log:F,prefix:h}})}s.deleteShader(R),s.deleteShader(w),x=new Ui(s,b),S=Bd(s,b)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let G=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=s.getProgramParameter(b,Cd)),G},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rd++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=w,this}let tf=0;class ef{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new nf(t),e.set(t,n)),n}}class nf{constructor(t){this.id=tf++,this.code=t,this.usedTimes=0}}function sf(i,t,e,n,s,r){const o=new qr,a=new ef,c=new Set,l=[],d=new Map,p=n.logarithmicDepthBuffer;let u=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function b(x,S,G,A,O){const V=A.fog,W=O.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,F=t.get(x.envMap||z,H),Q=F&&F.mapping===Hi?F.image.height:null,Z=m[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&w0("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));const c0=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,p0=c0!==void 0?c0.length:0;let u0=0;W.morphAttributes.position!==void 0&&(u0=1),W.morphAttributes.normal!==void 0&&(u0=2),W.morphAttributes.color!==void 0&&(u0=3);let F0,rt,it,$;if(Z){const $0=te[Z];F0=$0.vertexShader,rt=$0.fragmentShader}else F0=x.vertexShader,rt=x.fragmentShader,a.update(x),it=a.getVertexShaderID(x),$=a.getFragmentShaderID(x);const n0=i.getRenderTarget(),r0=i.state.buffers.depth.getReversed(),L0=O.isInstancedMesh===!0,T0=O.isBatchedMesh===!0,C0=!!x.map,mt=!!x.matcap,k0=!!F,q0=!!x.aoMap,Q0=!!x.lightMap,O0=!!x.bumpMap,lt=!!x.normalMap,C=!!x.displacementMap,ht=!!x.emissiveMap,Y0=!!x.metalnessMap,et=!!x.roughnessMap,y0=x.anisotropy>0,M=x.clearcoat>0,_=x.dispersion>0,L=x.iridescence>0,q=x.sheen>0,j=x.transmission>0,Y=y0&&!!x.anisotropyMap,m0=M&&!!x.clearcoatMap,i0=M&&!!x.clearcoatNormalMap,E0=M&&!!x.clearcoatRoughnessMap,A0=L&&!!x.iridescenceMap,K=L&&!!x.iridescenceThicknessMap,t0=q&&!!x.sheenColorMap,_0=q&&!!x.sheenRoughnessMap,x0=!!x.specularMap,h0=!!x.specularColorMap,B0=!!x.specularIntensityMap,D=j&&!!x.transmissionMap,s0=j&&!!x.thicknessMap,e0=!!x.gradientMap,f0=!!x.alphaMap,J=x.alphaTest>0,X=!!x.alphaHash,g0=!!x.extensions;let R0=ne;x.toneMapped&&(n0===null||n0.isXRRenderTarget===!0)&&(R0=i.toneMapping);const nt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:F0,fragmentShader:rt,defines:x.defines,customVertexShaderID:it,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:T0,batchingColor:T0&&O._colorsTexture!==null,instancing:L0,instancingColor:L0&&O.instanceColor!==null,instancingMorph:L0&&O.morphTexture!==null,outputColorSpace:n0===null?i.outputColorSpace:n0.isXRRenderTarget===!0?n0.texture.colorSpace:Tn,alphaToCoverage:!!x.alphaToCoverage,map:C0,matcap:mt,envMap:k0,envMapMode:k0&&F.mapping,envMapCubeUVHeight:Q,aoMap:q0,lightMap:Q0,bumpMap:O0,normalMap:lt,displacementMap:C,emissiveMap:ht,normalMapObjectSpace:lt&&x.normalMapType===z1,normalMapTangentSpace:lt&&x.normalMapType===Oa,metalnessMap:Y0,roughnessMap:et,anisotropy:y0,anisotropyMap:Y,clearcoat:M,clearcoatMap:m0,clearcoatNormalMap:i0,clearcoatRoughnessMap:E0,dispersion:_,iridescence:L,iridescenceMap:A0,iridescenceThicknessMap:K,sheen:q,sheenColorMap:t0,sheenRoughnessMap:_0,specularMap:x0,specularColorMap:h0,specularIntensityMap:B0,transmission:j,transmissionMap:D,thicknessMap:s0,gradientMap:e0,opaque:x.transparent===!1&&x.blending===vn&&x.alphaToCoverage===!1,alphaMap:f0,alphaTest:J,alphaHash:X,combine:x.combine,mapUv:C0&&g(x.map.channel),aoMapUv:q0&&g(x.aoMap.channel),lightMapUv:Q0&&g(x.lightMap.channel),bumpMapUv:O0&&g(x.bumpMap.channel),normalMapUv:lt&&g(x.normalMap.channel),displacementMapUv:C&&g(x.displacementMap.channel),emissiveMapUv:ht&&g(x.emissiveMap.channel),metalnessMapUv:Y0&&g(x.metalnessMap.channel),roughnessMapUv:et&&g(x.roughnessMap.channel),anisotropyMapUv:Y&&g(x.anisotropyMap.channel),clearcoatMapUv:m0&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:i0&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:E0&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:A0&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:K&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:t0&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:_0&&g(x.sheenRoughnessMap.channel),specularMapUv:x0&&g(x.specularMap.channel),specularColorMapUv:h0&&g(x.specularColorMap.channel),specularIntensityMapUv:B0&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:s0&&g(x.thicknessMap.channel),alphaMapUv:f0&&g(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(lt||y0),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!W.attributes.uv&&(C0||f0),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&lt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:r0,skinning:O.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:p0,morphTextureStride:u0,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:R0,decodeVideoTexture:C0&&x.map.isVideoTexture===!0&&W0.getTransfer(x.map.colorSpace)===j0,decodeVideoTextureEmissive:ht&&x.emissiveMap.isVideoTexture===!0&&W0.getTransfer(x.emissiveMap.colorSpace)===j0,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Xt,flipSided:x.side===Lt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:g0&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(g0&&x.extensions.multiDraw===!0||T0)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function f(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)S.push(G),S.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(h(S,x),y(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function h(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),x.push(o.mask)}function T(x){const S=m[x.type];let G;if(S){const A=te[S];G=Ml.clone(A.uniforms)}else G=x.uniforms;return G}function E(x,S){let G=d.get(S);return G!==void 0?++G.usedTimes:(G=new Qd(i,S,x,s),l.push(G),d.set(S,G)),G}function R(x){if(--x.usedTimes===0){const S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),d.delete(x.cacheKey),x.destroy()}}function w(x){a.remove(x)}function P(){a.dispose()}return{getParameters:b,getProgramCacheKey:f,getUniforms:T,acquireProgram:E,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:P}}function rf(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function of(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ma(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function _a(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function a(u,m,g,b,f,h){let y=i[t];return y===void 0?(y={id:u.id,object:u,geometry:m,material:g,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:f,group:h},i[t]=y):(y.id=u.id,y.object=u,y.geometry=m,y.material=g,y.materialVariant=o(u),y.groupOrder=b,y.renderOrder=u.renderOrder,y.z=f,y.group=h),t++,y}function c(u,m,g,b,f,h){const y=a(u,m,g,b,f,h);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function l(u,m,g,b,f,h){const y=a(u,m,g,b,f,h);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):e.unshift(y)}function d(u,m){e.length>1&&e.sort(u||of),n.length>1&&n.sort(m||ma),s.length>1&&s.sort(m||ma)}function p(){for(let u=t,m=i.length;u<m;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:d}}function af(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new _a,i.set(n,[o])):s>=r.length?(o=new _a,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function lf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new H0};break;case"SpotLight":e={position:new I,direction:new I,color:new H0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new H0,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new H0,groundColor:new H0};break;case"RectAreaLight":e={color:new H0,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function cf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P0};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P0};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new P0,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let hf=0;function uf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function df(i){const t=new lf,e=cf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new U0,o=new U0;function a(l){let d=0,p=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,b=0,f=0,h=0,y=0,T=0,E=0,R=0,w=0,P=0;l.sort(uf);for(let S=0,G=l.length;S<G;S++){const A=l[S],O=A.color,V=A.intensity,W=A.distance;let z=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===En?z=A.shadow.map.texture:z=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)d+=O.r*V,p+=O.g*V,u+=O.b*V;else if(A.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(A.sh.coefficients[H],V);P++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const F=A.shadow,Q=e.get(A);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=z,n.directionalShadowMatrix[m]=A.shadow.matrix,y++}n.directional[m]=H,m++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(O).multiplyScalar(V),H.distance=W,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,n.spot[b]=H;const F=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,F.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[b]=F.matrix,A.castShadow){const Q=e.get(A);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,n.spotShadow[b]=Q,n.spotShadowMap[b]=z,E++}b++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(O).multiplyScalar(V),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),n.rectArea[f]=H,f++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const F=A.shadow,Q=e.get(A);Q.shadowIntensity=F.intensity,Q.shadowBias=F.bias,Q.shadowNormalBias=F.normalBias,Q.shadowRadius=F.radius,Q.shadowMapSize=F.mapSize,Q.shadowCameraNear=F.camera.near,Q.shadowCameraFar=F.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=A.shadow.matrix,T++}n.point[g]=H,g++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(V),H.groundColor.copy(A.groundColor).multiplyScalar(V),n.hemi[h]=H,h++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=o0.LTC_FLOAT_1,n.rectAreaLTC2=o0.LTC_FLOAT_2):(n.rectAreaLTC1=o0.LTC_HALF_1,n.rectAreaLTC2=o0.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=u;const x=n.hash;(x.directionalLength!==m||x.pointLength!==g||x.spotLength!==b||x.rectAreaLength!==f||x.hemiLength!==h||x.numDirectionalShadows!==y||x.numPointShadows!==T||x.numSpotShadows!==E||x.numSpotMaps!==R||x.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=b,n.rectArea.length=f,n.point.length=g,n.hemi.length=h,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=E+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=P,x.directionalLength=m,x.pointLength=g,x.spotLength=b,x.rectAreaLength=f,x.hemiLength=h,x.numDirectionalShadows=y,x.numPointShadows=T,x.numSpotShadows=E,x.numSpotMaps=R,x.numLightProbes=P,n.version=hf++)}function c(l,d){let p=0,u=0,m=0,g=0,b=0;const f=d.matrixWorldInverse;for(let h=0,y=l.length;h<y;h++){const T=l[h];if(T.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),p++}else if(T.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),m++}else if(T.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(f),o.identity(),r.copy(T.matrixWorld),r.premultiply(f),o.extractRotation(r),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(f),u++}else if(T.isHemisphereLight){const E=n.hemi[b];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(f),b++}}}return{setup:a,setupView:c,state:n}}function ga(i){const t=new df(i),e=[],n=[];function s(d){l.camera=d,e.length=0,n.length=0}function r(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function c(d){t.setupView(e,d)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ff(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new ga(i),t.set(s,[a])):r>=o.length?(a=new ga(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const pf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mf=`uniform sampler2D shadow_pass;
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
}`,_f=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],gf=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],xa=new U0,Hn=new I,Ps=new I;function xf(i,t,e){let n=new $r;const s=new P0,r=new P0,o=new st,a=new wl,c=new Cl,l={},d=e.maxTextureSize,p={[Ne]:Lt,[Lt]:Ne,[Xt]:Xt},u=new le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new P0},radius:{value:4}},vertexShader:pf,fragmentShader:mf}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Vt(g,u),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ci;let h=this.type;this.render=function(w,P,x){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;this.type===_1&&(w0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ci);const S=i.getRenderTarget(),G=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),O=i.state;O.setBlending(ve),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const V=h!==this.type;V&&P.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(z=>z.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,z=w.length;W<z;W++){const H=w[W],F=H.shadow;if(F===void 0){w0("WebGLShadowMap:",H,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Q=F.getFrameExtents();s.multiply(Q),r.copy(F.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Q.x),s.x=r.x*Q.x,F.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Q.y),s.y=r.y*Q.y,F.mapSize.y=r.y));const Z=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||V===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===kn){if(H.isPointLight){w0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ie(s.x,s.y,{format:En,type:be,minFilter:Et,magFilter:Et,generateMipmaps:!1}),F.map.texture.name=H.name+".shadowMap",F.map.depthTexture=new qn(s.x,s.y,qt),F.map.depthTexture.name=H.name+".shadowMapDepth",F.map.depthTexture.format=Me,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vt,F.map.depthTexture.magFilter=vt}else H.isPointLight?(F.map=new Ka(s.x),F.map.depthTexture=new yl(s.x,oe)):(F.map=new ie(s.x,s.y),F.map.depthTexture=new qn(s.x,s.y,oe)),F.map.depthTexture.name=H.name+".shadowMap",F.map.depthTexture.format=Me,this.type===Ci?(F.map.depthTexture.compareFunction=Z?Xr:Wr,F.map.depthTexture.minFilter=Et,F.map.depthTexture.magFilter=Et):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=vt,F.map.depthTexture.magFilter=vt);F.camera.updateProjectionMatrix()}const c0=F.map.isWebGLCubeRenderTarget?6:1;for(let p0=0;p0<c0;p0++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,p0),i.clear();else{p0===0&&(i.setRenderTarget(F.map),i.clear());const u0=F.getViewport(p0);o.set(r.x*u0.x,r.y*u0.y,r.x*u0.z,r.y*u0.w),O.viewport(o)}if(H.isPointLight){const u0=F.camera,F0=F.matrix,rt=H.distance||u0.far;rt!==u0.far&&(u0.far=rt,u0.updateProjectionMatrix()),Hn.setFromMatrixPosition(H.matrixWorld),u0.position.copy(Hn),Ps.copy(u0.position),Ps.add(_f[p0]),u0.up.copy(gf[p0]),u0.lookAt(Ps),u0.updateMatrixWorld(),F0.makeTranslation(-Hn.x,-Hn.y,-Hn.z),xa.multiplyMatrices(u0.projectionMatrix,u0.matrixWorldInverse),F._frustum.setFromProjectionMatrix(xa,u0.coordinateSystem,u0.reversedDepth)}else F.updateMatrices(H);n=F.getFrustum(),E(P,x,F.camera,H,this.type)}F.isPointLightShadow!==!0&&this.type===kn&&y(F,x),F.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(S,G,A)};function y(w,P){const x=t.update(b);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ie(s.x,s.y,{format:En,type:be})),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,x,u,b,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,x,m,b,null)}function T(w,P,x,S){let G=null;const A=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)G=A;else if(G=x.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=G.uuid,V=P.uuid;let W=l[O];W===void 0&&(W={},l[O]=W);let z=W[V];z===void 0&&(z=G.clone(),W[V]=z,P.addEventListener("dispose",R)),G=z}if(G.visible=P.visible,G.wireframe=P.wireframe,S===kn?G.side=P.shadowSide!==null?P.shadowSide:P.side:G.side=P.shadowSide!==null?P.shadowSide:p[P.side],G.alphaMap=P.alphaMap,G.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,G.map=P.map,G.clipShadows=P.clipShadows,G.clippingPlanes=P.clippingPlanes,G.clipIntersection=P.clipIntersection,G.displacementMap=P.displacementMap,G.displacementScale=P.displacementScale,G.displacementBias=P.displacementBias,G.wireframeLinewidth=P.wireframeLinewidth,G.linewidth=P.linewidth,x.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const O=i.properties.get(G);O.light=x}return G}function E(w,P,x,S,G){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&G===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const V=t.update(w),W=w.material;if(Array.isArray(W)){const z=V.groups;for(let H=0,F=z.length;H<F;H++){const Q=z[H],Z=W[Q.materialIndex];if(Z&&Z.visible){const c0=T(w,Z,S,G);w.onBeforeShadow(i,w,P,x,V,c0,Q),i.renderBufferDirect(x,null,V,c0,w,Q),w.onAfterShadow(i,w,P,x,V,c0,Q)}}}else if(W.visible){const z=T(w,W,S,G);w.onBeforeShadow(i,w,P,x,V,z,null),i.renderBufferDirect(x,null,V,z,w,null),w.onAfterShadow(i,w,P,x,V,z,null)}}const O=w.children;for(let V=0,W=O.length;V<W;V++)E(O[V],P,x,S,G)}function R(w){w.target.removeEventListener("dispose",R);for(const x in l){const S=l[x],G=w.target.uuid;G in S&&(S[G].dispose(),delete S[G])}}}function vf(i,t){function e(){let D=!1;const s0=new st;let e0=null;const f0=new st(0,0,0,0);return{setMask:function(J){e0!==J&&!D&&(i.colorMask(J,J,J,J),e0=J)},setLocked:function(J){D=J},setClear:function(J,X,g0,R0,nt){nt===!0&&(J*=R0,X*=R0,g0*=R0),s0.set(J,X,g0,R0),f0.equals(s0)===!1&&(i.clearColor(J,X,g0,R0),f0.copy(s0))},reset:function(){D=!1,e0=null,f0.set(-1,0,0,0)}}}function n(){let D=!1,s0=!1,e0=null,f0=null,J=null;return{setReversed:function(X){if(s0!==X){const g0=t.get("EXT_clip_control");X?g0.clipControlEXT(g0.LOWER_LEFT_EXT,g0.ZERO_TO_ONE_EXT):g0.clipControlEXT(g0.LOWER_LEFT_EXT,g0.NEGATIVE_ONE_TO_ONE_EXT),s0=X;const R0=J;J=null,this.setClear(R0)}},getReversed:function(){return s0},setTest:function(X){X?n0(i.DEPTH_TEST):r0(i.DEPTH_TEST)},setMask:function(X){e0!==X&&!D&&(i.depthMask(X),e0=X)},setFunc:function(X){if(s0&&(X=j1[X]),f0!==X){switch(X){case Vs:i.depthFunc(i.NEVER);break;case Hs:i.depthFunc(i.ALWAYS);break;case ks:i.depthFunc(i.LESS);break;case Mn:i.depthFunc(i.LEQUAL);break;case Gs:i.depthFunc(i.EQUAL);break;case Ws:i.depthFunc(i.GEQUAL);break;case Xs:i.depthFunc(i.GREATER);break;case Ys:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}f0=X}},setLocked:function(X){D=X},setClear:function(X){J!==X&&(J=X,s0&&(X=1-X),i.clearDepth(X))},reset:function(){D=!1,e0=null,f0=null,J=null,s0=!1}}}function s(){let D=!1,s0=null,e0=null,f0=null,J=null,X=null,g0=null,R0=null,nt=null;return{setTest:function($0){D||($0?n0(i.STENCIL_TEST):r0(i.STENCIL_TEST))},setMask:function($0){s0!==$0&&!D&&(i.stencilMask($0),s0=$0)},setFunc:function($0,ce,he){(e0!==$0||f0!==ce||J!==he)&&(i.stencilFunc($0,ce,he),e0=$0,f0=ce,J=he)},setOp:function($0,ce,he){(X!==$0||g0!==ce||R0!==he)&&(i.stencilOp($0,ce,he),X=$0,g0=ce,R0=he)},setLocked:function($0){D=$0},setClear:function($0){nt!==$0&&(i.clearStencil($0),nt=$0)},reset:function(){D=!1,s0=null,e0=null,f0=null,J=null,X=null,g0=null,R0=null,nt=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let d={},p={},u=new WeakMap,m=[],g=null,b=!1,f=null,h=null,y=null,T=null,E=null,R=null,w=null,P=new H0(0,0,0),x=0,S=!1,G=null,A=null,O=null,V=null,W=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,F=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=F>=1):Q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=F>=2);let Z=null,c0={};const p0=i.getParameter(i.SCISSOR_BOX),u0=i.getParameter(i.VIEWPORT),F0=new st().fromArray(p0),rt=new st().fromArray(u0);function it(D,s0,e0,f0){const J=new Uint8Array(4),X=i.createTexture();i.bindTexture(D,X),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let g0=0;g0<e0;g0++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(s0,0,i.RGBA,1,1,f0,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(s0+g0,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return X}const $={};$[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),n0(i.DEPTH_TEST),o.setFunc(Mn),O0(!1),lt(po),n0(i.CULL_FACE),q0(ve);function n0(D){d[D]!==!0&&(i.enable(D),d[D]=!0)}function r0(D){d[D]!==!1&&(i.disable(D),d[D]=!1)}function L0(D,s0){return p[D]!==s0?(i.bindFramebuffer(D,s0),p[D]=s0,D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=s0),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=s0),!0):!1}function T0(D,s0){let e0=m,f0=!1;if(D){e0=u.get(s0),e0===void 0&&(e0=[],u.set(s0,e0));const J=D.textures;if(e0.length!==J.length||e0[0]!==i.COLOR_ATTACHMENT0){for(let X=0,g0=J.length;X<g0;X++)e0[X]=i.COLOR_ATTACHMENT0+X;e0.length=J.length,f0=!0}}else e0[0]!==i.BACK&&(e0[0]=i.BACK,f0=!0);f0&&i.drawBuffers(e0)}function C0(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const mt={[Ye]:i.FUNC_ADD,[x1]:i.FUNC_SUBTRACT,[v1]:i.FUNC_REVERSE_SUBTRACT};mt[y1]=i.MIN,mt[b1]=i.MAX;const k0={[M1]:i.ZERO,[S1]:i.ONE,[E1]:i.SRC_COLOR,[Bs]:i.SRC_ALPHA,[P1]:i.SRC_ALPHA_SATURATE,[C1]:i.DST_COLOR,[A1]:i.DST_ALPHA,[T1]:i.ONE_MINUS_SRC_COLOR,[zs]:i.ONE_MINUS_SRC_ALPHA,[R1]:i.ONE_MINUS_DST_COLOR,[w1]:i.ONE_MINUS_DST_ALPHA,[D1]:i.CONSTANT_COLOR,[L1]:i.ONE_MINUS_CONSTANT_COLOR,[I1]:i.CONSTANT_ALPHA,[U1]:i.ONE_MINUS_CONSTANT_ALPHA};function q0(D,s0,e0,f0,J,X,g0,R0,nt,$0){if(D===ve){b===!0&&(r0(i.BLEND),b=!1);return}if(b===!1&&(n0(i.BLEND),b=!0),D!==g1){if(D!==f||$0!==S){if((h!==Ye||E!==Ye)&&(i.blendEquation(i.FUNC_ADD),h=Ye,E=Ye),$0)switch(D){case vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFunc(i.ONE,i.ONE);break;case _o:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:G0("WebGLState: Invalid blending: ",D);break}else switch(D){case vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _o:G0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case go:G0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:G0("WebGLState: Invalid blending: ",D);break}y=null,T=null,R=null,w=null,P.set(0,0,0),x=0,f=D,S=$0}return}J=J||s0,X=X||e0,g0=g0||f0,(s0!==h||J!==E)&&(i.blendEquationSeparate(mt[s0],mt[J]),h=s0,E=J),(e0!==y||f0!==T||X!==R||g0!==w)&&(i.blendFuncSeparate(k0[e0],k0[f0],k0[X],k0[g0]),y=e0,T=f0,R=X,w=g0),(R0.equals(P)===!1||nt!==x)&&(i.blendColor(R0.r,R0.g,R0.b,nt),P.copy(R0),x=nt),f=D,S=!1}function Q0(D,s0){D.side===Xt?r0(i.CULL_FACE):n0(i.CULL_FACE);let e0=D.side===Lt;s0&&(e0=!e0),O0(e0),D.blending===vn&&D.transparent===!1?q0(ve):q0(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const f0=D.stencilWrite;a.setTest(f0),f0&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ht(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?n0(i.SAMPLE_ALPHA_TO_COVERAGE):r0(i.SAMPLE_ALPHA_TO_COVERAGE)}function O0(D){G!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),G=D)}function lt(D){D!==p1?(n0(i.CULL_FACE),D!==A&&(D===po?i.cullFace(i.BACK):D===m1?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):r0(i.CULL_FACE),A=D}function C(D){D!==O&&(H&&i.lineWidth(D),O=D)}function ht(D,s0,e0){D?(n0(i.POLYGON_OFFSET_FILL),(V!==s0||W!==e0)&&(V=s0,W=e0,o.getReversed()&&(s0=-s0),i.polygonOffset(s0,e0))):r0(i.POLYGON_OFFSET_FILL)}function Y0(D){D?n0(i.SCISSOR_TEST):r0(i.SCISSOR_TEST)}function et(D){D===void 0&&(D=i.TEXTURE0+z-1),Z!==D&&(i.activeTexture(D),Z=D)}function y0(D,s0,e0){e0===void 0&&(Z===null?e0=i.TEXTURE0+z-1:e0=Z);let f0=c0[e0];f0===void 0&&(f0={type:void 0,texture:void 0},c0[e0]=f0),(f0.type!==D||f0.texture!==s0)&&(Z!==e0&&(i.activeTexture(e0),Z=e0),i.bindTexture(D,s0||$[D]),f0.type=D,f0.texture=s0)}function M(){const D=c0[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(D){G0("WebGLState:",D)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(D){G0("WebGLState:",D)}}function q(){try{i.texSubImage2D(...arguments)}catch(D){G0("WebGLState:",D)}}function j(){try{i.texSubImage3D(...arguments)}catch(D){G0("WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){G0("WebGLState:",D)}}function m0(){try{i.compressedTexSubImage3D(...arguments)}catch(D){G0("WebGLState:",D)}}function i0(){try{i.texStorage2D(...arguments)}catch(D){G0("WebGLState:",D)}}function E0(){try{i.texStorage3D(...arguments)}catch(D){G0("WebGLState:",D)}}function A0(){try{i.texImage2D(...arguments)}catch(D){G0("WebGLState:",D)}}function K(){try{i.texImage3D(...arguments)}catch(D){G0("WebGLState:",D)}}function t0(D){F0.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),F0.copy(D))}function _0(D){rt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),rt.copy(D))}function x0(D,s0){let e0=l.get(s0);e0===void 0&&(e0=new WeakMap,l.set(s0,e0));let f0=e0.get(D);f0===void 0&&(f0=i.getUniformBlockIndex(s0,D.name),e0.set(D,f0))}function h0(D,s0){const f0=l.get(s0).get(D);c.get(s0)!==f0&&(i.uniformBlockBinding(s0,f0,D.__bindingPointIndex),c.set(s0,f0))}function B0(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Z=null,c0={},p={},u=new WeakMap,m=[],g=null,b=!1,f=null,h=null,y=null,T=null,E=null,R=null,w=null,P=new H0(0,0,0),x=0,S=!1,G=null,A=null,O=null,V=null,W=null,F0.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:n0,disable:r0,bindFramebuffer:L0,drawBuffers:T0,useProgram:C0,setBlending:q0,setMaterial:Q0,setFlipSided:O0,setCullFace:lt,setLineWidth:C,setPolygonOffset:ht,setScissorTest:Y0,activeTexture:et,bindTexture:y0,unbindTexture:M,compressedTexImage2D:_,compressedTexImage3D:L,texImage2D:A0,texImage3D:K,updateUBOMapping:x0,uniformBlockBinding:h0,texStorage2D:i0,texStorage3D:E0,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:m0,scissor:t0,viewport:_0,reset:B0}}function yf(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new P0,d=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,_){return m?new OffscreenCanvas(M,_):Ni("canvas")}function b(M,_,L){let q=1;const j=y0(M);if((j.width>L||j.height>L)&&(q=L/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Y=Math.floor(q*j.width),m0=Math.floor(q*j.height);p===void 0&&(p=g(Y,m0));const i0=_?g(Y,m0):p;return i0.width=Y,i0.height=m0,i0.getContext("2d").drawImage(M,0,0,Y,m0),w0("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+m0+")."),i0}else return"data"in M&&w0("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function f(M){return M.generateMipmaps}function h(M){i.generateMipmap(M)}function y(M){return M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?i.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(M,_,L,q,j=!1){if(M!==null){if(i[M]!==void 0)return i[M];w0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Y=_;if(_===i.RED&&(L===i.FLOAT&&(Y=i.R32F),L===i.HALF_FLOAT&&(Y=i.R16F),L===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.R8UI),L===i.UNSIGNED_SHORT&&(Y=i.R16UI),L===i.UNSIGNED_INT&&(Y=i.R32UI),L===i.BYTE&&(Y=i.R8I),L===i.SHORT&&(Y=i.R16I),L===i.INT&&(Y=i.R32I)),_===i.RG&&(L===i.FLOAT&&(Y=i.RG32F),L===i.HALF_FLOAT&&(Y=i.RG16F),L===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RG8UI),L===i.UNSIGNED_SHORT&&(Y=i.RG16UI),L===i.UNSIGNED_INT&&(Y=i.RG32UI),L===i.BYTE&&(Y=i.RG8I),L===i.SHORT&&(Y=i.RG16I),L===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),L===i.UNSIGNED_INT&&(Y=i.RGB32UI),L===i.BYTE&&(Y=i.RGB8I),L===i.SHORT&&(Y=i.RGB16I),L===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),L===i.UNSIGNED_INT&&(Y=i.RGBA32UI),L===i.BYTE&&(Y=i.RGBA8I),L===i.SHORT&&(Y=i.RGBA16I),L===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){const m0=j?Fi:W0.getTransfer(q);L===i.FLOAT&&(Y=i.RGBA32F),L===i.HALF_FLOAT&&(Y=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Y=m0===j0?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function E(M,_){let L;return M?_===null||_===oe||_===Xn?L=i.DEPTH24_STENCIL8:_===qt?L=i.DEPTH32F_STENCIL8:_===Wn&&(L=i.DEPTH24_STENCIL8,w0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===oe||_===Xn?L=i.DEPTH_COMPONENT24:_===qt?L=i.DEPTH_COMPONENT32F:_===Wn&&(L=i.DEPTH_COMPONENT16),L}function R(M,_){return f(M)===!0||M.isFramebufferTexture&&M.minFilter!==vt&&M.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?_.mipmaps.length:1}function w(M){const _=M.target;_.removeEventListener("dispose",w),x(_),_.isVideoTexture&&d.delete(_)}function P(M){const _=M.target;_.removeEventListener("dispose",P),G(_)}function x(M){const _=n.get(M);if(_.__webglInit===void 0)return;const L=M.source,q=u.get(L);if(q){const j=q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(M),Object.keys(q).length===0&&u.delete(L)}n.remove(M)}function S(M){const _=n.get(M);i.deleteTexture(_.__webglTexture);const L=M.source,q=u.get(L);delete q[_.__cacheKey],o.memory.textures--}function G(M){const _=n.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),n.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let j=0;j<_.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[q][j]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const L=M.textures;for(let q=0,j=L.length;q<j;q++){const Y=n.get(L[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(L[q])}n.remove(M)}let A=0;function O(){A=0}function V(){const M=A;return M>=s.maxTextures&&w0("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),A+=1,M}function W(M){const _=[];return _.push(M.wrapS),_.push(M.wrapT),_.push(M.wrapR||0),_.push(M.magFilter),_.push(M.minFilter),_.push(M.anisotropy),_.push(M.internalFormat),_.push(M.format),_.push(M.type),_.push(M.generateMipmaps),_.push(M.premultiplyAlpha),_.push(M.flipY),_.push(M.unpackAlignment),_.push(M.colorSpace),_.join()}function z(M,_){const L=n.get(M);if(M.isVideoTexture&&Y0(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&L.__version!==M.version){const q=M.image;if(q===null)w0("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)w0("WebGLRenderer: Texture marked for update but image is incomplete");else{$(L,M,_);return}}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+_)}function H(M,_){const L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){$(L,M,_);return}else M.isExternalTexture&&(L.__webglTexture=M.sourceTexture?M.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+_)}function F(M,_){const L=n.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&L.__version!==M.version){$(L,M,_);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+_)}function Q(M,_){const L=n.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&L.__version!==M.version){n0(L,M,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+_)}const Z={[qs]:i.REPEAT,[ge]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},c0={[vt]:i.NEAREST,[O1]:i.NEAREST_MIPMAP_NEAREST,[ei]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Ji]:i.LINEAR_MIPMAP_NEAREST,[$e]:i.LINEAR_MIPMAP_LINEAR},p0={[V1]:i.NEVER,[X1]:i.ALWAYS,[H1]:i.LESS,[Wr]:i.LEQUAL,[k1]:i.EQUAL,[Xr]:i.GEQUAL,[G1]:i.GREATER,[W1]:i.NOTEQUAL};function u0(M,_){if(_.type===qt&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Et||_.magFilter===Ji||_.magFilter===ei||_.magFilter===$e||_.minFilter===Et||_.minFilter===Ji||_.minFilter===ei||_.minFilter===$e)&&w0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,Z[_.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,Z[_.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,Z[_.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,c0[_.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,c0[_.minFilter]),_.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,p0[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vt||_.minFilter!==ei&&_.minFilter!==$e||_.type===qt&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function F0(M,_){let L=!1;M.__webglInit===void 0&&(M.__webglInit=!0,_.addEventListener("dispose",w));const q=_.source;let j=u.get(q);j===void 0&&(j={},u.set(q,j));const Y=W(_);if(Y!==M.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[Y].usedTimes++;const m0=j[M.__cacheKey];m0!==void 0&&(j[M.__cacheKey].usedTimes--,m0.usedTimes===0&&S(_)),M.__cacheKey=Y,M.__webglTexture=j[Y].texture}return L}function rt(M,_,L){return Math.floor(Math.floor(M/L)/_)}function it(M,_,L,q){const Y=M.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,L,q,_.data);else{Y.sort((K,t0)=>K.start-t0.start);let m0=0;for(let K=1;K<Y.length;K++){const t0=Y[m0],_0=Y[K],x0=t0.start+t0.count,h0=rt(_0.start,_.width,4),B0=rt(t0.start,_.width,4);_0.start<=x0+1&&h0===B0&&rt(_0.start+_0.count-1,_.width,4)===h0?t0.count=Math.max(t0.count,_0.start+_0.count-t0.start):(++m0,Y[m0]=_0)}Y.length=m0+1;const i0=i.getParameter(i.UNPACK_ROW_LENGTH),E0=i.getParameter(i.UNPACK_SKIP_PIXELS),A0=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let K=0,t0=Y.length;K<t0;K++){const _0=Y[K],x0=Math.floor(_0.start/4),h0=Math.ceil(_0.count/4),B0=x0%_.width,D=Math.floor(x0/_.width),s0=h0,e0=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,B0),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,B0,D,s0,e0,L,q,_.data)}M.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,i0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,E0),i.pixelStorei(i.UNPACK_SKIP_ROWS,A0)}}function $(M,_,L){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const j=F0(M,_),Y=_.source;e.bindTexture(q,M.__webglTexture,i.TEXTURE0+L);const m0=n.get(Y);if(Y.version!==m0.__version||j===!0){e.activeTexture(i.TEXTURE0+L);const i0=W0.getPrimaries(W0.workingColorSpace),E0=_.colorSpace===Le?null:W0.getPrimaries(_.colorSpace),A0=_.colorSpace===Le||i0===E0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,A0);let K=b(_.image,!1,s.maxTextureSize);K=et(_,K);const t0=r.convert(_.format,_.colorSpace),_0=r.convert(_.type);let x0=T(_.internalFormat,t0,_0,_.colorSpace,_.isVideoTexture);u0(q,_);let h0;const B0=_.mipmaps,D=_.isVideoTexture!==!0,s0=m0.__version===void 0||j===!0,e0=Y.dataReady,f0=R(_,K);if(_.isDepthTexture)x0=E(_.format===je,_.type),s0&&(D?e.texStorage2D(i.TEXTURE_2D,1,x0,K.width,K.height):e.texImage2D(i.TEXTURE_2D,0,x0,K.width,K.height,0,t0,_0,null));else if(_.isDataTexture)if(B0.length>0){D&&s0&&e.texStorage2D(i.TEXTURE_2D,f0,x0,B0[0].width,B0[0].height);for(let J=0,X=B0.length;J<X;J++)h0=B0[J],D?e0&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,h0.width,h0.height,t0,_0,h0.data):e.texImage2D(i.TEXTURE_2D,J,x0,h0.width,h0.height,0,t0,_0,h0.data);_.generateMipmaps=!1}else D?(s0&&e.texStorage2D(i.TEXTURE_2D,f0,x0,K.width,K.height),e0&&it(_,K,t0,_0)):e.texImage2D(i.TEXTURE_2D,0,x0,K.width,K.height,0,t0,_0,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&s0&&e.texStorage3D(i.TEXTURE_2D_ARRAY,f0,x0,B0[0].width,B0[0].height,K.depth);for(let J=0,X=B0.length;J<X;J++)if(h0=B0[J],_.format!==$t)if(t0!==null)if(D){if(e0)if(_.layerUpdates.size>0){const g0=jo(h0.width,h0.height,_.format,_.type);for(const R0 of _.layerUpdates){const nt=h0.data.subarray(R0*g0/h0.data.BYTES_PER_ELEMENT,(R0+1)*g0/h0.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,R0,h0.width,h0.height,1,t0,nt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,h0.width,h0.height,K.depth,t0,h0.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,x0,h0.width,h0.height,K.depth,0,h0.data,0,0);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?e0&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,h0.width,h0.height,K.depth,t0,_0,h0.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,x0,h0.width,h0.height,K.depth,0,t0,_0,h0.data)}else{D&&s0&&e.texStorage2D(i.TEXTURE_2D,f0,x0,B0[0].width,B0[0].height);for(let J=0,X=B0.length;J<X;J++)h0=B0[J],_.format!==$t?t0!==null?D?e0&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,h0.width,h0.height,t0,h0.data):e.compressedTexImage2D(i.TEXTURE_2D,J,x0,h0.width,h0.height,0,h0.data):w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?e0&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,h0.width,h0.height,t0,_0,h0.data):e.texImage2D(i.TEXTURE_2D,J,x0,h0.width,h0.height,0,t0,_0,h0.data)}else if(_.isDataArrayTexture)if(D){if(s0&&e.texStorage3D(i.TEXTURE_2D_ARRAY,f0,x0,K.width,K.height,K.depth),e0)if(_.layerUpdates.size>0){const J=jo(K.width,K.height,_.format,_.type);for(const X of _.layerUpdates){const g0=K.data.subarray(X*J/K.data.BYTES_PER_ELEMENT,(X+1)*J/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,K.width,K.height,1,t0,_0,g0)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,t0,_0,K.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,x0,K.width,K.height,K.depth,0,t0,_0,K.data);else if(_.isData3DTexture)D?(s0&&e.texStorage3D(i.TEXTURE_3D,f0,x0,K.width,K.height,K.depth),e0&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,t0,_0,K.data)):e.texImage3D(i.TEXTURE_3D,0,x0,K.width,K.height,K.depth,0,t0,_0,K.data);else if(_.isFramebufferTexture){if(s0)if(D)e.texStorage2D(i.TEXTURE_2D,f0,x0,K.width,K.height);else{let J=K.width,X=K.height;for(let g0=0;g0<f0;g0++)e.texImage2D(i.TEXTURE_2D,g0,x0,J,X,0,t0,_0,null),J>>=1,X>>=1}}else if(B0.length>0){if(D&&s0){const J=y0(B0[0]);e.texStorage2D(i.TEXTURE_2D,f0,x0,J.width,J.height)}for(let J=0,X=B0.length;J<X;J++)h0=B0[J],D?e0&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,t0,_0,h0):e.texImage2D(i.TEXTURE_2D,J,x0,t0,_0,h0);_.generateMipmaps=!1}else if(D){if(s0){const J=y0(K);e.texStorage2D(i.TEXTURE_2D,f0,x0,J.width,J.height)}e0&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,t0,_0,K)}else e.texImage2D(i.TEXTURE_2D,0,x0,t0,_0,K);f(_)&&h(q),m0.__version=Y.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function n0(M,_,L){if(_.image.length!==6)return;const q=F0(M,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+L);const Y=n.get(j);if(j.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+L);const m0=W0.getPrimaries(W0.workingColorSpace),i0=_.colorSpace===Le?null:W0.getPrimaries(_.colorSpace),E0=_.colorSpace===Le||m0===i0?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,E0);const A0=_.isCompressedTexture||_.image[0].isCompressedTexture,K=_.image[0]&&_.image[0].isDataTexture,t0=[];for(let X=0;X<6;X++)!A0&&!K?t0[X]=b(_.image[X],!0,s.maxCubemapSize):t0[X]=K?_.image[X].image:_.image[X],t0[X]=et(_,t0[X]);const _0=t0[0],x0=r.convert(_.format,_.colorSpace),h0=r.convert(_.type),B0=T(_.internalFormat,x0,h0,_.colorSpace),D=_.isVideoTexture!==!0,s0=Y.__version===void 0||q===!0,e0=j.dataReady;let f0=R(_,_0);u0(i.TEXTURE_CUBE_MAP,_);let J;if(A0){D&&s0&&e.texStorage2D(i.TEXTURE_CUBE_MAP,f0,B0,_0.width,_0.height);for(let X=0;X<6;X++){J=t0[X].mipmaps;for(let g0=0;g0<J.length;g0++){const R0=J[g0];_.format!==$t?x0!==null?D?e0&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0,0,0,R0.width,R0.height,x0,R0.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0,B0,R0.width,R0.height,0,R0.data):w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?e0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0,0,0,R0.width,R0.height,x0,h0,R0.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0,B0,R0.width,R0.height,0,x0,h0,R0.data)}}}else{if(J=_.mipmaps,D&&s0){J.length>0&&f0++;const X=y0(t0[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,f0,B0,X.width,X.height)}for(let X=0;X<6;X++)if(K){D?e0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,t0[X].width,t0[X].height,x0,h0,t0[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,B0,t0[X].width,t0[X].height,0,x0,h0,t0[X].data);for(let g0=0;g0<J.length;g0++){const nt=J[g0].image[X].image;D?e0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0+1,0,0,nt.width,nt.height,x0,h0,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0+1,B0,nt.width,nt.height,0,x0,h0,nt.data)}}else{D?e0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,x0,h0,t0[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,B0,x0,h0,t0[X]);for(let g0=0;g0<J.length;g0++){const R0=J[g0];D?e0&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0+1,0,0,x0,h0,R0.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,g0+1,B0,x0,h0,R0.image[X])}}}f(_)&&h(i.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}M.__version=_.version}function r0(M,_,L,q,j,Y){const m0=r.convert(L.format,L.colorSpace),i0=r.convert(L.type),E0=T(L.internalFormat,m0,i0,L.colorSpace),A0=n.get(_),K=n.get(L);if(K.__renderTarget=_,!A0.__hasExternalTextures){const t0=Math.max(1,_.width>>Y),_0=Math.max(1,_.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,E0,t0,_0,_.depth,0,m0,i0,null):e.texImage2D(j,Y,E0,t0,_0,0,m0,i0,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ht(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,K.__webglTexture,0,C(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,K.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function L0(M,_,L){if(i.bindRenderbuffer(i.RENDERBUFFER,M),_.depthBuffer){const q=_.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=E(_.stencilBuffer,j),m0=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),Y,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,m0,i.RENDERBUFFER,M)}else{const q=_.textures;for(let j=0;j<q.length;j++){const Y=q[j],m0=r.convert(Y.format,Y.colorSpace),i0=r.convert(Y.type),E0=T(Y.internalFormat,m0,i0,Y.colorSpace);ht(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,C(_),E0,_.width,_.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,C(_),E0,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,E0,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function T0(M,_,L){const q=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(_.depthTexture);if(j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if(j.__webglInit===void 0&&(j.__webglInit=!0,_.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),u0(i.TEXTURE_CUBE_MAP,_.depthTexture);const A0=r.convert(_.depthTexture.format),K=r.convert(_.depthTexture.type);let t0;_.depthTexture.format===Me?t0=i.DEPTH_COMPONENT24:_.depthTexture.format===je&&(t0=i.DEPTH24_STENCIL8);for(let _0=0;_0<6;_0++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_0,0,t0,_.width,_.height,0,A0,K,null)}}else z(_.depthTexture,0);const Y=j.__webglTexture,m0=C(_),i0=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,E0=_.depthTexture.format===je?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Me)ht(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,E0,i0,Y,0,m0):i.framebufferTexture2D(i.FRAMEBUFFER,E0,i0,Y,0);else if(_.depthTexture.format===je)ht(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,E0,i0,Y,0,m0):i.framebufferTexture2D(i.FRAMEBUFFER,E0,i0,Y,0);else throw new Error("Unknown depthTexture format")}function C0(M){const _=n.get(M),L=M.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==M.depthTexture){const q=M.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=q}if(M.depthTexture&&!_.__autoAllocateDepthBuffer)if(L)for(let q=0;q<6;q++)T0(_.__webglFramebuffer[q],M,q);else{const q=M.texture.mipmaps;q&&q.length>0?T0(_.__webglFramebuffer[0],M,0):T0(_.__webglFramebuffer,M,0)}else if(L){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),L0(_.__webglDepthbuffer[q],M,!1);else{const j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const q=M.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),L0(_.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(M,_,L){const q=n.get(M);_!==void 0&&r0(q.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&C0(M)}function k0(M){const _=M.texture,L=n.get(M),q=n.get(_);M.addEventListener("dispose",P);const j=M.textures,Y=M.isWebGLCubeRenderTarget===!0,m0=j.length>1;if(m0||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),Y){L.__webglFramebuffer=[];for(let i0=0;i0<6;i0++)if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer[i0]=[];for(let E0=0;E0<_.mipmaps.length;E0++)L.__webglFramebuffer[i0][E0]=i.createFramebuffer()}else L.__webglFramebuffer[i0]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){L.__webglFramebuffer=[];for(let i0=0;i0<_.mipmaps.length;i0++)L.__webglFramebuffer[i0]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(m0)for(let i0=0,E0=j.length;i0<E0;i0++){const A0=n.get(j[i0]);A0.__webglTexture===void 0&&(A0.__webglTexture=i.createTexture(),o.memory.textures++)}if(M.samples>0&&ht(M)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let i0=0;i0<j.length;i0++){const E0=j[i0];L.__webglColorRenderbuffer[i0]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[i0]);const A0=r.convert(E0.format,E0.colorSpace),K=r.convert(E0.type),t0=T(E0.internalFormat,A0,K,E0.colorSpace,M.isXRRenderTarget===!0),_0=C(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,_0,t0,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+i0,i.RENDERBUFFER,L.__webglColorRenderbuffer[i0])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),L0(L.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),u0(i.TEXTURE_CUBE_MAP,_);for(let i0=0;i0<6;i0++)if(_.mipmaps&&_.mipmaps.length>0)for(let E0=0;E0<_.mipmaps.length;E0++)r0(L.__webglFramebuffer[i0][E0],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+i0,E0);else r0(L.__webglFramebuffer[i0],M,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+i0,0);f(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(m0){for(let i0=0,E0=j.length;i0<E0;i0++){const A0=j[i0],K=n.get(A0);let t0=i.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(t0=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(t0,K.__webglTexture),u0(t0,A0),r0(L.__webglFramebuffer,M,A0,i.COLOR_ATTACHMENT0+i0,t0,0),f(A0)&&h(t0)}e.unbindTexture()}else{let i0=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(i0=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(i0,q.__webglTexture),u0(i0,_),_.mipmaps&&_.mipmaps.length>0)for(let E0=0;E0<_.mipmaps.length;E0++)r0(L.__webglFramebuffer[E0],M,_,i.COLOR_ATTACHMENT0,i0,E0);else r0(L.__webglFramebuffer,M,_,i.COLOR_ATTACHMENT0,i0,0);f(_)&&h(i0),e.unbindTexture()}M.depthBuffer&&C0(M)}function q0(M){const _=M.textures;for(let L=0,q=_.length;L<q;L++){const j=_[L];if(f(j)){const Y=y(M),m0=n.get(j).__webglTexture;e.bindTexture(Y,m0),h(Y),e.unbindTexture()}}}const Q0=[],O0=[];function lt(M){if(M.samples>0){if(ht(M)===!1){const _=M.textures,L=M.width,q=M.height;let j=i.COLOR_BUFFER_BIT;const Y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,m0=n.get(M),i0=_.length>1;if(i0)for(let A0=0;A0<_.length;A0++)e.bindFramebuffer(i.FRAMEBUFFER,m0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,m0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,m0.__webglMultisampledFramebuffer);const E0=M.texture.mipmaps;E0&&E0.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,m0.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,m0.__webglFramebuffer);for(let A0=0;A0<_.length;A0++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),i0){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,m0.__webglColorRenderbuffer[A0]);const K=n.get(_[A0]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,L,q,0,0,L,q,j,i.NEAREST),c===!0&&(Q0.length=0,O0.length=0,Q0.push(i.COLOR_ATTACHMENT0+A0),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Q0.push(Y),O0.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O0)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q0))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i0)for(let A0=0;A0<_.length;A0++){e.bindFramebuffer(i.FRAMEBUFFER,m0.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.RENDERBUFFER,m0.__webglColorRenderbuffer[A0]);const K=n.get(_[A0]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,m0.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+A0,i.TEXTURE_2D,K,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,m0.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const _=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function C(M){return Math.min(s.maxSamples,M.samples)}function ht(M){const _=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y0(M){const _=o.render.frame;d.get(M)!==_&&(d.set(M,_),M.update())}function et(M,_){const L=M.colorSpace,q=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||L!==Tn&&L!==Le&&(W0.getTransfer(L)===j0?(q!==$t||j!==Ot)&&w0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):G0("WebGLTextures: Unsupported texture color space:",L)),_}function y0(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=O,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=F,this.setTextureCube=Q,this.rebindTextures=mt,this.setupRenderTarget=k0,this.updateRenderTargetMipmap=q0,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=C0,this.setupFrameBufferTexture=r0,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bf(i,t){function e(n,s=Le){let r;const o=W0.getTransfer(s);if(n===Ot)return i.UNSIGNED_BYTE;if(n===Br)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ia)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ua)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Da)return i.BYTE;if(n===La)return i.SHORT;if(n===Wn)return i.UNSIGNED_SHORT;if(n===Or)return i.INT;if(n===oe)return i.UNSIGNED_INT;if(n===qt)return i.FLOAT;if(n===be)return i.HALF_FLOAT;if(n===Fa)return i.ALPHA;if(n===Na)return i.RGB;if(n===$t)return i.RGBA;if(n===Me)return i.DEPTH_COMPONENT;if(n===je)return i.DEPTH_STENCIL;if(n===Vr)return i.RED;if(n===Hr)return i.RED_INTEGER;if(n===En)return i.RG;if(n===kr)return i.RG_INTEGER;if(n===Gr)return i.RGBA_INTEGER;if(n===Ri||n===Pi||n===Di||n===Li)if(o===j0)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ri)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Di)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Li)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ri)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Di)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Li)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===js||n===Zs||n===Ks||n===Js)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===js)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zs)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ks)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Js)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qs||n===tr||n===er||n===nr||n===ir||n===sr||n===rr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qs||n===tr)return o===j0?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===er)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===nr)return r.COMPRESSED_R11_EAC;if(n===ir)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sr)return r.COMPRESSED_RG11_EAC;if(n===rr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===or||n===ar||n===lr||n===cr||n===hr||n===ur||n===dr||n===fr||n===pr||n===mr||n===_r||n===gr||n===xr||n===vr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===or)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ar)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ur)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_r)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vr)return o===j0?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===br||n===Mr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===yr)return o===j0?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===br)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sr||n===Er||n===Tr||n===Ar)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Er)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ar)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xn?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Mf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sf=`
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

}`;class Ef{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ya(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new le({vertexShader:Mf,fragmentShader:Sf,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Tf extends Ke{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,d=null,p=null,u=null,m=null,g=null;const b=typeof XRWebGLBinding<"u",f=new Ef,h={},y=e.getContextAttributes();let T=null,E=null;const R=[],w=[],P=new P0;let x=null;const S=new Pt;S.viewport=new st;const G=new Pt;G.viewport=new st;const A=[S,G],O=new Ul;let V=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let n0=R[$];return n0===void 0&&(n0=new rs,R[$]=n0),n0.getTargetRaySpace()},this.getControllerGrip=function($){let n0=R[$];return n0===void 0&&(n0=new rs,R[$]=n0),n0.getGripSpace()},this.getHand=function($){let n0=R[$];return n0===void 0&&(n0=new rs,R[$]=n0),n0.getHandSpace()};function z($){const n0=w.indexOf($.inputSource);if(n0===-1)return;const r0=R[n0];r0!==void 0&&(r0.update($.inputSource,$.frame,l||o),r0.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",F);for(let $=0;$<R.length;$++){const n0=w[$];n0!==null&&(w[$]=null,R[$].disconnect(n0))}V=null,W=null,f.reset();for(const $ in h)delete h[$];t.setRenderTarget(T),m=null,u=null,p=null,s=null,E=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&w0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&w0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p===null&&b&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",H),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let r0=null,L0=null,T0=null;y.depth&&(T0=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,r0=y.stencil?je:Me,L0=y.stencil?Xn:oe);const C0={colorFormat:e.RGBA8,depthFormat:T0,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(C0),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),E=new ie(u.textureWidth,u.textureHeight,{format:$t,type:Ot,depthTexture:new qn(u.textureWidth,u.textureHeight,L0,void 0,void 0,void 0,void 0,void 0,void 0,r0),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const r0={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,r0),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new ie(m.framebufferWidth,m.framebufferHeight,{format:$t,type:Ot,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function F($){for(let n0=0;n0<$.removed.length;n0++){const r0=$.removed[n0],L0=w.indexOf(r0);L0>=0&&(w[L0]=null,R[L0].disconnect(r0))}for(let n0=0;n0<$.added.length;n0++){const r0=$.added[n0];let L0=w.indexOf(r0);if(L0===-1){for(let C0=0;C0<R.length;C0++)if(C0>=w.length){w.push(r0),L0=C0;break}else if(w[C0]===null){w[C0]=r0,L0=C0;break}if(L0===-1)break}const T0=R[L0];T0&&T0.connect(r0)}}const Q=new I,Z=new I;function c0($,n0,r0){Q.setFromMatrixPosition(n0.matrixWorld),Z.setFromMatrixPosition(r0.matrixWorld);const L0=Q.distanceTo(Z),T0=n0.projectionMatrix.elements,C0=r0.projectionMatrix.elements,mt=T0[14]/(T0[10]-1),k0=T0[14]/(T0[10]+1),q0=(T0[9]+1)/T0[5],Q0=(T0[9]-1)/T0[5],O0=(T0[8]-1)/T0[0],lt=(C0[8]+1)/C0[0],C=mt*O0,ht=mt*lt,Y0=L0/(-O0+lt),et=Y0*-O0;if(n0.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(et),$.translateZ(Y0),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),T0[10]===-1)$.projectionMatrix.copy(n0.projectionMatrix),$.projectionMatrixInverse.copy(n0.projectionMatrixInverse);else{const y0=mt+Y0,M=k0+Y0,_=C-et,L=ht+(L0-et),q=q0*k0/M*y0,j=Q0*k0/M*y0;$.projectionMatrix.makePerspective(_,L,q,j,y0,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function p0($,n0){n0===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(n0.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let n0=$.near,r0=$.far;f.texture!==null&&(f.depthNear>0&&(n0=f.depthNear),f.depthFar>0&&(r0=f.depthFar)),O.near=G.near=S.near=n0,O.far=G.far=S.far=r0,(V!==O.near||W!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),V=O.near,W=O.far),O.layers.mask=$.layers.mask|6,S.layers.mask=O.layers.mask&-5,G.layers.mask=O.layers.mask&-3;const L0=$.parent,T0=O.cameras;p0(O,L0);for(let C0=0;C0<T0.length;C0++)p0(T0[C0],L0);T0.length===2?c0(O,S,G):O.projectionMatrix.copy(S.projectionMatrix),u0($,O,L0)};function u0($,n0,r0){r0===null?$.matrix.copy(n0.matrixWorld):($.matrix.copy(r0.matrixWorld),$.matrix.invert(),$.matrix.multiply(n0.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(n0.projectionMatrix),$.projectionMatrixInverse.copy(n0.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=wr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(O)},this.getCameraTexture=function($){return h[$]};let F0=null;function rt($,n0){if(d=n0.getViewerPose(l||o),g=n0,d!==null){const r0=d.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let L0=!1;r0.length!==O.cameras.length&&(O.cameras.length=0,L0=!0);for(let k0=0;k0<r0.length;k0++){const q0=r0[k0];let Q0=null;if(m!==null)Q0=m.getViewport(q0);else{const lt=p.getViewSubImage(u,q0);Q0=lt.viewport,k0===0&&(t.setRenderTargetTextures(E,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(E))}let O0=A[k0];O0===void 0&&(O0=new Pt,O0.layers.enable(k0),O0.viewport=new st,A[k0]=O0),O0.matrix.fromArray(q0.transform.matrix),O0.matrix.decompose(O0.position,O0.quaternion,O0.scale),O0.projectionMatrix.fromArray(q0.projectionMatrix),O0.projectionMatrixInverse.copy(O0.projectionMatrix).invert(),O0.viewport.set(Q0.x,Q0.y,Q0.width,Q0.height),k0===0&&(O.matrix.copy(O0.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),L0===!0&&O.cameras.push(O0)}const T0=s.enabledFeatures;if(T0&&T0.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){p=n.getBinding();const k0=p.getDepthInformation(r0[0]);k0&&k0.isValid&&k0.texture&&f.init(k0,s.renderState)}if(T0&&T0.includes("camera-access")&&b){t.state.unbindTexture(),p=n.getBinding();for(let k0=0;k0<r0.length;k0++){const q0=r0[k0].camera;if(q0){let Q0=h[q0];Q0||(Q0=new Ya,h[q0]=Q0);const O0=p.getCameraImage(q0);Q0.sourceTexture=O0}}}}for(let r0=0;r0<R.length;r0++){const L0=w[r0],T0=R[r0];L0!==null&&T0!==void 0&&T0.update(L0,n0,l||o)}F0&&F0($,n0),n0.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:n0}),g=null}const it=new Za;it.setAnimationLoop(rt),this.setAnimationLoop=function($){F0=$},this.dispose=function(){}}}const Xe=new ae,Af=new U0;function wf(i,t){function e(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,qa(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,y,T,E){h.isMeshBasicMaterial?r(f,h):h.isMeshLambertMaterial?(r(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(f,h),p(f,h)):h.isMeshPhongMaterial?(r(f,h),d(f,h),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(f,h),u(f,h),h.isMeshPhysicalMaterial&&m(f,h,E)):h.isMeshMatcapMaterial?(r(f,h),g(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),b(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(o(f,h),h.isLineDashedMaterial&&a(f,h)):h.isPointsMaterial?c(f,h,y,T):h.isSpriteMaterial?l(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,e(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Lt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,e(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Lt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,e(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,e(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const y=t.get(h),T=y.envMap,E=y.envMapRotation;T&&(f.envMap.value=T,Xe.copy(E),Xe.x*=-1,Xe.y*=-1,Xe.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xe.y*=-1,Xe.z*=-1),f.envMapRotation.value.setFromMatrix4(Af.makeRotationFromEuler(Xe)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap&&(f.lightMap.value=h.lightMap,f.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,f.lightMapTransform)),h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,f.aoMapTransform))}function o(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform))}function a(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function c(f,h,y,T){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*y,f.scale.value=T*.5,h.map&&(f.map.value=h.map,e(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function l(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,e(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,e(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function d(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function p(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function u(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,f.roughnessMapTransform)),h.envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,y){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Lt&&f.clearcoatNormalScale.value.negate())),h.dispersion>0&&(f.dispersion.value=h.dispersion),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=y.texture,f.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,h){h.matcap&&(f.matcap.value=h.matcap)}function b(f,h){const y=t.get(h).light;f.referencePosition.value.setFromMatrixPosition(y.matrixWorld),f.nearDistance.value=y.shadow.camera.near,f.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cf(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const E=T.program;n.uniformBlockBinding(y,E)}function l(y,T){let E=s[y.id];E===void 0&&(g(y),E=d(y),s[y.id]=E,y.addEventListener("dispose",f));const R=T.program;n.updateUBOMapping(y,R);const w=t.render.frame;r[y.id]!==w&&(u(y),r[y.id]=w)}function d(y){const T=p();y.__bindingPointIndex=T;const E=i.createBuffer(),R=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function p(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return G0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const T=s[y.id],E=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,P=E.length;w<P;w++){const x=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,G=x.length;S<G;S++){const A=x[S];if(m(A,w,S,R)===!0){const O=A.__offset,V=Array.isArray(A.value)?A.value:[A.value];let W=0;for(let z=0;z<V.length;z++){const H=V[z],F=b(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+W,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,W),W+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,T,E,R){const w=y.value,P=T+"_"+E;if(R[P]===void 0)return typeof w=="number"||typeof w=="boolean"?R[P]=w:R[P]=w.clone(),!0;{const x=R[P];if(typeof w=="number"||typeof w=="boolean"){if(x!==w)return R[P]=w,!0}else if(x.equals(w)===!1)return x.copy(w),!0}return!1}function g(y){const T=y.uniforms;let E=0;const R=16;for(let P=0,x=T.length;P<x;P++){const S=Array.isArray(T[P])?T[P]:[T[P]];for(let G=0,A=S.length;G<A;G++){const O=S[G],V=Array.isArray(O.value)?O.value:[O.value];for(let W=0,z=V.length;W<z;W++){const H=V[W],F=b(H),Q=E%R,Z=Q%F.boundary,c0=Q+Z;E+=Z,c0!==0&&R-c0<F.storage&&(E+=R-c0),O.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=E,E+=F.storage}}}const w=E%R;return w>0&&(E+=R-w),y.__size=E,y.__cache={},this}function b(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?w0("WebGLRenderer: Texture samplers can not be part of an uniforms group."):w0("WebGLRenderer: Unsupported uniform value type.",y),T}function f(y){const T=y.target;T.removeEventListener("dispose",f);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function h(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:h}}const Rf=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jt=null;function Pf(){return Jt===null&&(Jt=new Ga(Rf,16,16,En,be),Jt.name="DFG_LUT",Jt.minFilter=Et,Jt.magFilter=Et,Jt.wrapS=ge,Jt.wrapT=ge,Jt.generateMipmaps=!1,Jt.needsUpdate=!0),Jt}class Df{constructor(t={}){const{canvas:e=q1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Ot}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const b=m,f=new Set([Gr,kr,Hr]),h=new Set([Ot,oe,Wn,Xn,Br,zr]),y=new Uint32Array(4),T=new Int32Array(4);let E=null,R=null;const w=[],P=[];let x=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ne,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let G=!1;this._outputColorSpace=zt;let A=0,O=0,V=null,W=-1,z=null;const H=new st,F=new st;let Q=null;const Z=new H0(0);let c0=0,p0=e.width,u0=e.height,F0=1,rt=null,it=null;const $=new st(0,0,p0,u0),n0=new st(0,0,p0,u0);let r0=!1;const L0=new $r;let T0=!1,C0=!1;const mt=new U0,k0=new I,q0=new st,Q0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O0=!1;function lt(){return V===null?F0:1}let C=n;function ht(v,U){return e.getContext(v,U)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Fr}`),e.addEventListener("webglcontextlost",g0,!1),e.addEventListener("webglcontextrestored",R0,!1),e.addEventListener("webglcontextcreationerror",nt,!1),C===null){const U="webgl2";if(C=ht(U,v),C===null)throw ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw G0("WebGLRenderer: "+v.message),v}let Y0,et,y0,M,_,L,q,j,Y,m0,i0,E0,A0,K,t0,_0,x0,h0,B0,D,s0,e0,f0;function J(){Y0=new Pu(C),Y0.init(),s0=new bf(C,Y0),et=new Mu(C,Y0,t,s0),y0=new vf(C,Y0),et.reversedDepthBuffer&&u&&y0.buffers.depth.setReversed(!0),M=new Iu(C),_=new rf,L=new yf(C,Y0,y0,_,et,s0,M),q=new Ru(S),j=new Bl(C),e0=new yu(C,j),Y=new Du(C,j,M,e0),m0=new Fu(C,Y,j,e0,M),h0=new Uu(C,et,L),t0=new Su(_),i0=new sf(S,q,Y0,et,e0,t0),E0=new wf(S,_),A0=new af,K=new ff(Y0),x0=new vu(S,q,y0,m0,g,c),_0=new xf(S,m0,et),f0=new Cf(C,M,et,y0),B0=new bu(C,Y0,M),D=new Lu(C,Y0,M),M.programs=i0.programs,S.capabilities=et,S.extensions=Y0,S.properties=_,S.renderLists=A0,S.shadowMap=_0,S.state=y0,S.info=M}J(),b!==Ot&&(x=new Ou(b,e.width,e.height,s,r));const X=new Tf(S,C);this.xr=X,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=Y0.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Y0.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return F0},this.setPixelRatio=function(v){v!==void 0&&(F0=v,this.setSize(p0,u0,!1))},this.getSize=function(v){return v.set(p0,u0)},this.setSize=function(v,U,k=!0){if(X.isPresenting){w0("WebGLRenderer: Can't change size while VR device is presenting.");return}p0=v,u0=U,e.width=Math.floor(v*F0),e.height=Math.floor(U*F0),k===!0&&(e.style.width=v+"px",e.style.height=U+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(p0*F0,u0*F0).floor()},this.setDrawingBufferSize=function(v,U,k){p0=v,u0=U,F0=k,e.width=Math.floor(v*k),e.height=Math.floor(U*k),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(b===Ot){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(H)},this.getViewport=function(v){return v.copy($)},this.setViewport=function(v,U,k,B){v.isVector4?$.set(v.x,v.y,v.z,v.w):$.set(v,U,k,B),y0.viewport(H.copy($).multiplyScalar(F0).round())},this.getScissor=function(v){return v.copy(n0)},this.setScissor=function(v,U,k,B){v.isVector4?n0.set(v.x,v.y,v.z,v.w):n0.set(v,U,k,B),y0.scissor(F.copy(n0).multiplyScalar(F0).round())},this.getScissorTest=function(){return r0},this.setScissorTest=function(v){y0.setScissorTest(r0=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){it=v},this.getClearColor=function(v){return v.copy(x0.getClearColor())},this.setClearColor=function(){x0.setClearColor(...arguments)},this.getClearAlpha=function(){return x0.getClearAlpha()},this.setClearAlpha=function(){x0.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,k=!0){let B=0;if(v){let N=!1;if(V!==null){const a0=V.texture.format;N=f.has(a0)}if(N){const a0=V.texture.type,d0=h.has(a0),l0=x0.getClearColor(),v0=x0.getClearAlpha(),M0=l0.r,D0=l0.g,z0=l0.b;d0?(y[0]=M0,y[1]=D0,y[2]=z0,y[3]=v0,C.clearBufferuiv(C.COLOR,0,y)):(T[0]=M0,T[1]=D0,T[2]=z0,T[3]=v0,C.clearBufferiv(C.COLOR,0,T))}else B|=C.COLOR_BUFFER_BIT}U&&(B|=C.DEPTH_BUFFER_BIT),k&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",g0,!1),e.removeEventListener("webglcontextrestored",R0,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),x0.dispose(),A0.dispose(),K.dispose(),_.dispose(),q.dispose(),m0.dispose(),e0.dispose(),f0.dispose(),i0.dispose(),X.dispose(),X.removeEventListener("sessionstart",ro),X.removeEventListener("sessionend",oo),Be.stop()};function g0(v){v.preventDefault(),Mo("WebGLRenderer: Context Lost."),G=!0}function R0(){Mo("WebGLRenderer: Context Restored."),G=!1;const v=M.autoReset,U=_0.enabled,k=_0.autoUpdate,B=_0.needsUpdate,N=_0.type;J(),M.autoReset=v,_0.enabled=U,_0.autoUpdate=k,_0.needsUpdate=B,_0.type=N}function nt(v){G0("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $0(v){const U=v.target;U.removeEventListener("dispose",$0),ce(U)}function ce(v){he(v),_.remove(v)}function he(v){const U=_.get(v).programs;U!==void 0&&(U.forEach(function(k){i0.releaseProgram(k)}),v.isShaderMaterial&&i0.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,k,B,N,a0){U===null&&(U=Q0);const d0=N.isMesh&&N.matrixWorld.determinant()<0,l0=l1(v,U,k,B,N);y0.setMaterial(B,d0);let v0=k.index,M0=1;if(B.wireframe===!0){if(v0=Y.getWireframeAttribute(k),v0===void 0)return;M0=2}const D0=k.drawRange,z0=k.attributes.position;let S0=D0.start*M0,Z0=(D0.start+D0.count)*M0;a0!==null&&(S0=Math.max(S0,a0.start*M0),Z0=Math.min(Z0,(a0.start+a0.count)*M0)),v0!==null?(S0=Math.max(S0,0),Z0=Math.min(Z0,v0.count)):z0!=null&&(S0=Math.max(S0,0),Z0=Math.min(Z0,z0.count));const ct=Z0-S0;if(ct<0||ct===1/0)return;e0.setup(N,B,l0,k,v0);let at,K0=B0;if(v0!==null&&(at=j.get(v0),K0=D,K0.setIndex(at)),N.isMesh)B.wireframe===!0?(y0.setLineWidth(B.wireframeLinewidth*lt()),K0.setMode(C.LINES)):K0.setMode(C.TRIANGLES);else if(N.isLine){let bt=B.linewidth;bt===void 0&&(bt=1),y0.setLineWidth(bt*lt()),N.isLineSegments?K0.setMode(C.LINES):N.isLineLoop?K0.setMode(C.LINE_LOOP):K0.setMode(C.LINE_STRIP)}else N.isPoints?K0.setMode(C.POINTS):N.isSprite&&K0.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Oi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),K0.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Y0.get("WEBGL_multi_draw"))K0.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const bt=N._multiDrawStarts,b0=N._multiDrawCounts,Ut=N._multiDrawCount,X0=v0?j.get(v0).bytesPerElement:1,Ht=_.get(B).currentProgram.getUniforms();for(let Zt=0;Zt<Ut;Zt++)Ht.setValue(C,"_gl_DrawID",Zt),K0.render(bt[Zt]/X0,b0[Zt])}else if(N.isInstancedMesh)K0.renderInstances(S0,ct,N.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,b0=Math.min(k.instanceCount,bt);K0.renderInstances(S0,ct,b0)}else K0.render(S0,ct)};function so(v,U,k){v.transparent===!0&&v.side===Xt&&v.forceSinglePass===!1?(v.side=Lt,v.needsUpdate=!0,ti(v,U,k),v.side=Ne,v.needsUpdate=!0,ti(v,U,k),v.side=Xt):ti(v,U,k)}this.compile=function(v,U,k=null){k===null&&(k=v),R=K.get(k),R.init(U),P.push(R),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),R.setupLights();const B=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const a0=N.material;if(a0)if(Array.isArray(a0))for(let d0=0;d0<a0.length;d0++){const l0=a0[d0];so(l0,k,N),B.add(l0)}else so(a0,k,N),B.add(a0)}),R=P.pop(),B},this.compileAsync=function(v,U,k=null){const B=this.compile(v,U,k);return new Promise(N=>{function a0(){if(B.forEach(function(d0){_.get(d0).currentProgram.isReady()&&B.delete(d0)}),B.size===0){N(v);return}setTimeout(a0,10)}Y0.get("KHR_parallel_shader_compile")!==null?a0():setTimeout(a0,10)})};let $i=null;function a1(v){$i&&$i(v)}function ro(){Be.stop()}function oo(){Be.start()}const Be=new Za;Be.setAnimationLoop(a1),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(v){$i=v,X.setAnimationLoop(v),v===null?Be.stop():Be.start()},X.addEventListener("sessionstart",ro),X.addEventListener("sessionend",oo),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){G0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;const k=X.enabled===!0&&X.isPresenting===!0,B=x!==null&&(V===null||k)&&x.begin(S,V);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,U,V),R=K.get(v,P.length),R.init(U),P.push(R),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),L0.setFromProjectionMatrix(mt,ee,U.reversedDepth),C0=this.localClippingEnabled,T0=t0.init(this.clippingPlanes,C0),E=A0.get(v,w.length),E.init(),w.push(E),X.enabled===!0&&X.isPresenting===!0){const d0=S.xr.getDepthSensingMesh();d0!==null&&ji(d0,U,-1/0,S.sortObjects)}ji(v,U,0,S.sortObjects),E.finish(),S.sortObjects===!0&&E.sort(rt,it),O0=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,O0&&x0.addToRenderList(E,v),this.info.render.frame++,T0===!0&&t0.beginShadows();const N=R.state.shadowsArray;if(_0.render(N,v,U),T0===!0&&t0.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&x.hasRenderPass())===!1){const d0=E.opaque,l0=E.transmissive;if(R.setupLights(),U.isArrayCamera){const v0=U.cameras;if(l0.length>0)for(let M0=0,D0=v0.length;M0<D0;M0++){const z0=v0[M0];lo(d0,l0,v,z0)}O0&&x0.render(v);for(let M0=0,D0=v0.length;M0<D0;M0++){const z0=v0[M0];ao(E,v,z0,z0.viewport)}}else l0.length>0&&lo(d0,l0,v,U),O0&&x0.render(v),ao(E,v,U)}V!==null&&O===0&&(L.updateMultisampleRenderTarget(V),L.updateRenderTargetMipmap(V)),B&&x.end(S),v.isScene===!0&&v.onAfterRender(S,v,U),e0.resetDefaultState(),W=-1,z=null,P.pop(),P.length>0?(R=P[P.length-1],T0===!0&&t0.setGlobalState(S.clippingPlanes,R.state.camera)):R=null,w.pop(),w.length>0?E=w[w.length-1]:E=null};function ji(v,U,k,B){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)R.pushLight(v),v.castShadow&&R.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||L0.intersectsSprite(v)){B&&q0.setFromMatrixPosition(v.matrixWorld).applyMatrix4(mt);const d0=m0.update(v),l0=v.material;l0.visible&&E.push(v,d0,l0,k,q0.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||L0.intersectsObject(v))){const d0=m0.update(v),l0=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),q0.copy(v.boundingSphere.center)):(d0.boundingSphere===null&&d0.computeBoundingSphere(),q0.copy(d0.boundingSphere.center)),q0.applyMatrix4(v.matrixWorld).applyMatrix4(mt)),Array.isArray(l0)){const v0=d0.groups;for(let M0=0,D0=v0.length;M0<D0;M0++){const z0=v0[M0],S0=l0[z0.materialIndex];S0&&S0.visible&&E.push(v,d0,S0,k,q0.z,z0)}}else l0.visible&&E.push(v,d0,l0,k,q0.z,null)}}const a0=v.children;for(let d0=0,l0=a0.length;d0<l0;d0++)ji(a0[d0],U,k,B)}function ao(v,U,k,B){const{opaque:N,transmissive:a0,transparent:d0}=v;R.setupLightsView(k),T0===!0&&t0.setGlobalState(S.clippingPlanes,k),B&&y0.viewport(H.copy(B)),N.length>0&&Qn(N,U,k),a0.length>0&&Qn(a0,U,k),d0.length>0&&Qn(d0,U,k),y0.buffers.depth.setTest(!0),y0.buffers.depth.setMask(!0),y0.buffers.color.setMask(!0),y0.setPolygonOffset(!1)}function lo(v,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[B.id]===void 0){const S0=Y0.has("EXT_color_buffer_half_float")||Y0.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[B.id]=new ie(1,1,{generateMipmaps:!0,type:S0?be:Ot,minFilter:$e,samples:Math.max(4,et.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:W0.workingColorSpace})}const a0=R.state.transmissionRenderTarget[B.id],d0=B.viewport||H;a0.setSize(d0.z*S.transmissionResolutionScale,d0.w*S.transmissionResolutionScale);const l0=S.getRenderTarget(),v0=S.getActiveCubeFace(),M0=S.getActiveMipmapLevel();S.setRenderTarget(a0),S.getClearColor(Z),c0=S.getClearAlpha(),c0<1&&S.setClearColor(16777215,.5),S.clear(),O0&&x0.render(k);const D0=S.toneMapping;S.toneMapping=ne;const z0=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),R.setupLightsView(B),T0===!0&&t0.setGlobalState(S.clippingPlanes,B),Qn(v,k,B),L.updateMultisampleRenderTarget(a0),L.updateRenderTargetMipmap(a0),Y0.has("WEBGL_multisampled_render_to_texture")===!1){let S0=!1;for(let Z0=0,ct=U.length;Z0<ct;Z0++){const at=U[Z0],{object:K0,geometry:bt,material:b0,group:Ut}=at;if(b0.side===Xt&&K0.layers.test(B.layers)){const X0=b0.side;b0.side=Lt,b0.needsUpdate=!0,co(K0,k,B,bt,b0,Ut),b0.side=X0,b0.needsUpdate=!0,S0=!0}}S0===!0&&(L.updateMultisampleRenderTarget(a0),L.updateRenderTargetMipmap(a0))}S.setRenderTarget(l0,v0,M0),S.setClearColor(Z,c0),z0!==void 0&&(B.viewport=z0),S.toneMapping=D0}function Qn(v,U,k){const B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,a0=v.length;N<a0;N++){const d0=v[N],{object:l0,geometry:v0,group:M0}=d0;let D0=d0.material;D0.allowOverride===!0&&B!==null&&(D0=B),l0.layers.test(k.layers)&&co(l0,U,k,v0,D0,M0)}}function co(v,U,k,B,N,a0){v.onBeforeRender(S,U,k,B,N,a0),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(S,U,k,B,v,a0),N.transparent===!0&&N.side===Xt&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,S.renderBufferDirect(k,U,B,N,v,a0),N.side=Ne,N.needsUpdate=!0,S.renderBufferDirect(k,U,B,N,v,a0),N.side=Xt):S.renderBufferDirect(k,U,B,N,v,a0),v.onAfterRender(S,U,k,B,N,a0)}function ti(v,U,k){U.isScene!==!0&&(U=Q0);const B=_.get(v),N=R.state.lights,a0=R.state.shadowsArray,d0=N.state.version,l0=i0.getParameters(v,N.state,a0,U,k),v0=i0.getProgramCacheKey(l0);let M0=B.programs;B.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,B.fog=U.fog;const D0=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;B.envMap=q.get(v.envMap||B.environment,D0),B.envMapRotation=B.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,M0===void 0&&(v.addEventListener("dispose",$0),M0=new Map,B.programs=M0);let z0=M0.get(v0);if(z0!==void 0){if(B.currentProgram===z0&&B.lightsStateVersion===d0)return uo(v,l0),z0}else l0.uniforms=i0.getUniforms(v),v.onBeforeCompile(l0,S),z0=i0.acquireProgram(l0,v0),M0.set(v0,z0),B.uniforms=l0.uniforms;const S0=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(S0.clippingPlanes=t0.uniform),uo(v,l0),B.needsLights=h1(v),B.lightsStateVersion=d0,B.needsLights&&(S0.ambientLightColor.value=N.state.ambient,S0.lightProbe.value=N.state.probe,S0.directionalLights.value=N.state.directional,S0.directionalLightShadows.value=N.state.directionalShadow,S0.spotLights.value=N.state.spot,S0.spotLightShadows.value=N.state.spotShadow,S0.rectAreaLights.value=N.state.rectArea,S0.ltc_1.value=N.state.rectAreaLTC1,S0.ltc_2.value=N.state.rectAreaLTC2,S0.pointLights.value=N.state.point,S0.pointLightShadows.value=N.state.pointShadow,S0.hemisphereLights.value=N.state.hemi,S0.directionalShadowMatrix.value=N.state.directionalShadowMatrix,S0.spotLightMatrix.value=N.state.spotLightMatrix,S0.spotLightMap.value=N.state.spotLightMap,S0.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=z0,B.uniformsList=null,z0}function ho(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=Ui.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function uo(v,U){const k=_.get(v);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function l1(v,U,k,B,N){U.isScene!==!0&&(U=Q0),L.resetTextureUnits();const a0=U.fog,d0=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?U.environment:null,l0=V===null?S.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Tn,v0=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,M0=q.get(B.envMap||d0,v0),D0=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,z0=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),S0=!!k.morphAttributes.position,Z0=!!k.morphAttributes.normal,ct=!!k.morphAttributes.color;let at=ne;B.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(at=S.toneMapping);const K0=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,bt=K0!==void 0?K0.length:0,b0=_.get(B),Ut=R.state.lights;if(T0===!0&&(C0===!0||v!==z)){const _t=v===z&&B.id===W;t0.setState(B,v,_t)}let X0=!1;B.version===b0.__version?(b0.needsLights&&b0.lightsStateVersion!==Ut.state.version||b0.outputColorSpace!==l0||N.isBatchedMesh&&b0.batching===!1||!N.isBatchedMesh&&b0.batching===!0||N.isBatchedMesh&&b0.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&b0.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&b0.instancing===!1||!N.isInstancedMesh&&b0.instancing===!0||N.isSkinnedMesh&&b0.skinning===!1||!N.isSkinnedMesh&&b0.skinning===!0||N.isInstancedMesh&&b0.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&b0.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&b0.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&b0.instancingMorph===!1&&N.morphTexture!==null||b0.envMap!==M0||B.fog===!0&&b0.fog!==a0||b0.numClippingPlanes!==void 0&&(b0.numClippingPlanes!==t0.numPlanes||b0.numIntersection!==t0.numIntersection)||b0.vertexAlphas!==D0||b0.vertexTangents!==z0||b0.morphTargets!==S0||b0.morphNormals!==Z0||b0.morphColors!==ct||b0.toneMapping!==at||b0.morphTargetsCount!==bt)&&(X0=!0):(X0=!0,b0.__version=B.version);let Ht=b0.currentProgram;X0===!0&&(Ht=ti(B,U,N));let Zt=!1,ze=!1,Qe=!1;const tt=Ht.getUniforms(),xt=b0.uniforms;if(y0.useProgram(Ht.program)&&(Zt=!0,ze=!0,Qe=!0),B.id!==W&&(W=B.id,ze=!0),Zt||z!==v){y0.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),tt.setValue(C,"projectionMatrix",v.projectionMatrix),tt.setValue(C,"viewMatrix",v.matrixWorldInverse);const Ee=tt.map.cameraPosition;Ee!==void 0&&Ee.setValue(C,k0.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&tt.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tt.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),z!==v&&(z=v,ze=!0,Qe=!0)}if(b0.needsLights&&(Ut.state.directionalShadowMap.length>0&&tt.setValue(C,"directionalShadowMap",Ut.state.directionalShadowMap,L),Ut.state.spotShadowMap.length>0&&tt.setValue(C,"spotShadowMap",Ut.state.spotShadowMap,L),Ut.state.pointShadowMap.length>0&&tt.setValue(C,"pointShadowMap",Ut.state.pointShadowMap,L)),N.isSkinnedMesh){tt.setOptional(C,N,"bindMatrix"),tt.setOptional(C,N,"bindMatrixInverse");const _t=N.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),tt.setValue(C,"boneTexture",_t.boneTexture,L))}N.isBatchedMesh&&(tt.setOptional(C,N,"batchingTexture"),tt.setValue(C,"batchingTexture",N._matricesTexture,L),tt.setOptional(C,N,"batchingIdTexture"),tt.setValue(C,"batchingIdTexture",N._indirectTexture,L),tt.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&tt.setValue(C,"batchingColorTexture",N._colorsTexture,L));const Se=k.morphAttributes;if((Se.position!==void 0||Se.normal!==void 0||Se.color!==void 0)&&h0.update(N,k,Ht),(ze||b0.receiveShadow!==N.receiveShadow)&&(b0.receiveShadow=N.receiveShadow,tt.setValue(C,"receiveShadow",N.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&U.environment!==null&&(xt.envMapIntensity.value=U.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Pf()),ze&&(tt.setValue(C,"toneMappingExposure",S.toneMappingExposure),b0.needsLights&&c1(xt,Qe),a0&&B.fog===!0&&E0.refreshFogUniforms(xt,a0),E0.refreshMaterialUniforms(xt,B,F0,u0,R.state.transmissionRenderTarget[v.id]),Ui.upload(C,ho(b0),xt,L)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ui.upload(C,ho(b0),xt,L),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tt.setValue(C,"center",N.center),tt.setValue(C,"modelViewMatrix",N.modelViewMatrix),tt.setValue(C,"normalMatrix",N.normalMatrix),tt.setValue(C,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const _t=B.uniformsGroups;for(let Ee=0,tn=_t.length;Ee<tn;Ee++){const fo=_t[Ee];f0.update(fo,Ht),f0.bind(fo,Ht)}}return Ht}function c1(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function h1(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(v,U,k){const B=_.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_.get(v.texture).__webglTexture=U,_.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:k,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const k=_.get(v);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const u1=C.createFramebuffer();this.setRenderTarget=function(v,U=0,k=0){V=v,A=U,O=k;let B=null,N=!1,a0=!1;if(v){const l0=_.get(v);if(l0.__useDefaultFramebuffer!==void 0){y0.bindFramebuffer(C.FRAMEBUFFER,l0.__webglFramebuffer),H.copy(v.viewport),F.copy(v.scissor),Q=v.scissorTest,y0.viewport(H),y0.scissor(F),y0.setScissorTest(Q),W=-1;return}else if(l0.__webglFramebuffer===void 0)L.setupRenderTarget(v);else if(l0.__hasExternalTextures)L.rebindTextures(v,_.get(v.texture).__webglTexture,_.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const D0=v.depthTexture;if(l0.__boundDepthTexture!==D0){if(D0!==null&&_.has(D0)&&(v.width!==D0.image.width||v.height!==D0.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(v)}}const v0=v.texture;(v0.isData3DTexture||v0.isDataArrayTexture||v0.isCompressedArrayTexture)&&(a0=!0);const M0=_.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(M0[U])?B=M0[U][k]:B=M0[U],N=!0):v.samples>0&&L.useMultisampledRTT(v)===!1?B=_.get(v).__webglMultisampledFramebuffer:Array.isArray(M0)?B=M0[k]:B=M0,H.copy(v.viewport),F.copy(v.scissor),Q=v.scissorTest}else H.copy($).multiplyScalar(F0).floor(),F.copy(n0).multiplyScalar(F0).floor(),Q=r0;if(k!==0&&(B=u1),y0.bindFramebuffer(C.FRAMEBUFFER,B)&&y0.drawBuffers(v,B),y0.viewport(H),y0.scissor(F),y0.setScissorTest(Q),N){const l0=_.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,l0.__webglTexture,k)}else if(a0){const l0=U;for(let v0=0;v0<v.textures.length;v0++){const M0=_.get(v.textures[v0]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+v0,M0.__webglTexture,k,l0)}}else if(v!==null&&k!==0){const l0=_.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,l0.__webglTexture,k)}W=-1},this.readRenderTargetPixels=function(v,U,k,B,N,a0,d0,l0=0){if(!(v&&v.isWebGLRenderTarget)){G0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let v0=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&d0!==void 0&&(v0=v0[d0]),v0){y0.bindFramebuffer(C.FRAMEBUFFER,v0);try{const M0=v.textures[l0],D0=M0.format,z0=M0.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+l0),!et.textureFormatReadable(D0)){G0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(z0)){G0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-B&&k>=0&&k<=v.height-N&&C.readPixels(U,k,B,N,s0.convert(D0),s0.convert(z0),a0)}finally{const M0=V!==null?_.get(V).__webglFramebuffer:null;y0.bindFramebuffer(C.FRAMEBUFFER,M0)}}},this.readRenderTargetPixelsAsync=async function(v,U,k,B,N,a0,d0,l0=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let v0=_.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&d0!==void 0&&(v0=v0[d0]),v0)if(U>=0&&U<=v.width-B&&k>=0&&k<=v.height-N){y0.bindFramebuffer(C.FRAMEBUFFER,v0);const M0=v.textures[l0],D0=M0.format,z0=M0.type;if(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+l0),!et.textureFormatReadable(D0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(z0))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const S0=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,S0),C.bufferData(C.PIXEL_PACK_BUFFER,a0.byteLength,C.STREAM_READ),C.readPixels(U,k,B,N,s0.convert(D0),s0.convert(z0),0);const Z0=V!==null?_.get(V).__webglFramebuffer:null;y0.bindFramebuffer(C.FRAMEBUFFER,Z0);const ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await $1(C,ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,S0),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,a0),C.deleteBuffer(S0),C.deleteSync(ct),a0}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,k=0){const B=Math.pow(2,-k),N=Math.floor(v.image.width*B),a0=Math.floor(v.image.height*B),d0=U!==null?U.x:0,l0=U!==null?U.y:0;L.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,d0,l0,N,a0),y0.unbindTexture()};const d1=C.createFramebuffer(),f1=C.createFramebuffer();this.copyTextureToTexture=function(v,U,k=null,B=null,N=0,a0=0){let d0,l0,v0,M0,D0,z0,S0,Z0,ct;const at=v.isCompressedTexture?v.mipmaps[a0]:v.image;if(k!==null)d0=k.max.x-k.min.x,l0=k.max.y-k.min.y,v0=k.isBox3?k.max.z-k.min.z:1,M0=k.min.x,D0=k.min.y,z0=k.isBox3?k.min.z:0;else{const xt=Math.pow(2,-N);d0=Math.floor(at.width*xt),l0=Math.floor(at.height*xt),v.isDataArrayTexture?v0=at.depth:v.isData3DTexture?v0=Math.floor(at.depth*xt):v0=1,M0=0,D0=0,z0=0}B!==null?(S0=B.x,Z0=B.y,ct=B.z):(S0=0,Z0=0,ct=0);const K0=s0.convert(U.format),bt=s0.convert(U.type);let b0;U.isData3DTexture?(L.setTexture3D(U,0),b0=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),b0=C.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),b0=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=C.getParameter(C.UNPACK_ROW_LENGTH),X0=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Ht=C.getParameter(C.UNPACK_SKIP_PIXELS),Zt=C.getParameter(C.UNPACK_SKIP_ROWS),ze=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,at.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,at.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,M0),C.pixelStorei(C.UNPACK_SKIP_ROWS,D0),C.pixelStorei(C.UNPACK_SKIP_IMAGES,z0);const Qe=v.isDataArrayTexture||v.isData3DTexture,tt=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const xt=_.get(v),Se=_.get(U),_t=_.get(xt.__renderTarget),Ee=_.get(Se.__renderTarget);y0.bindFramebuffer(C.READ_FRAMEBUFFER,_t.__webglFramebuffer),y0.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let tn=0;tn<v0;tn++)Qe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(v).__webglTexture,N,z0+tn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,_.get(U).__webglTexture,a0,ct+tn)),C.blitFramebuffer(M0,D0,d0,l0,S0,Z0,d0,l0,C.DEPTH_BUFFER_BIT,C.NEAREST);y0.bindFramebuffer(C.READ_FRAMEBUFFER,null),y0.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||_.has(v)){const xt=_.get(v),Se=_.get(U);y0.bindFramebuffer(C.READ_FRAMEBUFFER,d1),y0.bindFramebuffer(C.DRAW_FRAMEBUFFER,f1);for(let _t=0;_t<v0;_t++)Qe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,xt.__webglTexture,N,z0+_t):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,xt.__webglTexture,N),tt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Se.__webglTexture,a0,ct+_t):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Se.__webglTexture,a0),N!==0?C.blitFramebuffer(M0,D0,d0,l0,S0,Z0,d0,l0,C.COLOR_BUFFER_BIT,C.NEAREST):tt?C.copyTexSubImage3D(b0,a0,S0,Z0,ct+_t,M0,D0,d0,l0):C.copyTexSubImage2D(b0,a0,S0,Z0,M0,D0,d0,l0);y0.bindFramebuffer(C.READ_FRAMEBUFFER,null),y0.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else tt?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(b0,a0,S0,Z0,ct,d0,l0,v0,K0,bt,at.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(b0,a0,S0,Z0,ct,d0,l0,v0,K0,at.data):C.texSubImage3D(b0,a0,S0,Z0,ct,d0,l0,v0,K0,bt,at):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,a0,S0,Z0,d0,l0,K0,bt,at.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,a0,S0,Z0,at.width,at.height,K0,at.data):C.texSubImage2D(C.TEXTURE_2D,a0,S0,Z0,d0,l0,K0,bt,at);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,X0),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ht),C.pixelStorei(C.UNPACK_SKIP_ROWS,Zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze),a0===0&&U.generateMipmaps&&C.generateMipmap(b0),y0.unbindTexture()},this.initRenderTarget=function(v){_.get(v).__webglFramebuffer===void 0&&L.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?L.setTextureCube(v,0):v.isData3DTexture?L.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?L.setTexture2DArray(v,0):L.setTexture2D(v,0),y0.unbindTexture()},this.resetState=function(){A=0,O=0,V=null,y0.reset(),e0.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ee}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=W0._getDrawingBufferColorSpace(t),e.unpackColorSpace=W0._getUnpackColorSpace()}}const va={type:"change"},Qr={type:"start"},n1={type:"end"},wi=new ki,ya=new De,Lf=Math.cos(70*K1.DEG2RAD),dt=new I,Rt=2*Math.PI,J0={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ds=1e-6;class Ls extends Nl{constructor(t,e=null){super(t,e),this.state=J0.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xe.ROTATE,MIDDLE:xe.DOLLY,RIGHT:xe.PAN},this.touches={ONE:gn.ROTATE,TWO:gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Oe,this._lastTargetPosition=new I,this._quat=new Oe().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $o,this._sphericalDelta=new $o,this._scale=1,this._panOffset=new I,this._rotateStart=new P0,this._rotateEnd=new P0,this._rotateDelta=new P0,this._panStart=new P0,this._panEnd=new P0,this._panDelta=new P0,this._dollyStart=new P0,this._dollyEnd=new P0,this._dollyDelta=new P0,this._dollyDirection=new I,this._mouse=new P0,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Uf.bind(this),this._onPointerDown=If.bind(this),this._onPointerUp=Ff.bind(this),this._onContextMenu=kf.bind(this),this._onMouseWheel=Bf.bind(this),this._onKeyDown=zf.bind(this),this._onTouchStart=Vf.bind(this),this._onTouchMove=Hf.bind(this),this._onMouseDown=Nf.bind(this),this._onMouseMove=Of.bind(this),this._interceptControlDown=Gf.bind(this),this._interceptControlUp=Wf.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(va),this.update(),this.state=J0.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;dt.copy(e).sub(this.target),dt.applyQuaternion(this._quat),this._spherical.setFromVector3(dt),this.autoRotate&&this.state===J0.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),s<-Math.PI?s+=Rt:s>Math.PI&&(s-=Rt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(dt.setFromSpherical(this._spherical),dt.applyQuaternion(this._quatInverse),e.copy(this.target).add(dt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=dt.length();o=this._clampDistance(a*this._scale);const c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=dt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wi.origin.copy(this.object.position),wi.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wi.direction))<Lf?this.object.lookAt(this.target):(ya.setFromNormalAndCoplanarPoint(this.object.up,this.target),wi.intersectPlane(ya,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ds||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ds||this._lastTargetPosition.distanceToSquared(this.target)>Ds?(this.dispatchEvent(va),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rt/60*this.autoRotateSpeed*t:Rt/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){dt.setFromMatrixColumn(e,0),dt.multiplyScalar(-t),this._panOffset.add(dt)}_panUp(t,e){this.screenSpacePanning===!0?dt.setFromMatrixColumn(e,1):(dt.setFromMatrixColumn(e,0),dt.crossVectors(this.object.up,dt)),dt.multiplyScalar(t),this._panOffset.add(dt)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dt.copy(s).sub(this.target);let r=dt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new P0,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function If(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Uf(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Ff(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(n1),this.state=J0.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Nf(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=J0.DOLLY;break;case xe.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=J0.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=J0.ROTATE}break;case xe.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=J0.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=J0.PAN}break;default:this.state=J0.NONE}this.state!==J0.NONE&&this.dispatchEvent(Qr)}function Of(i){switch(this.state){case J0.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case J0.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case J0.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Bf(i){this.enabled===!1||this.enableZoom===!1||this.state!==J0.NONE||(i.preventDefault(),this.dispatchEvent(Qr),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(n1))}function zf(i){this.enabled!==!1&&this._handleKeyDown(i)}function Vf(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=J0.TOUCH_ROTATE;break;case gn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=J0.TOUCH_PAN;break;default:this.state=J0.NONE}break;case 2:switch(this.touches.TWO){case gn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=J0.TOUCH_DOLLY_PAN;break;case gn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=J0.TOUCH_DOLLY_ROTATE;break;default:this.state=J0.NONE}break;default:this.state=J0.NONE}this.state!==J0.NONE&&this.dispatchEvent(Qr)}function Hf(i){switch(this._trackPointer(i),this.state){case J0.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case J0.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case J0.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case J0.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=J0.NONE}}function kf(i){this.enabled!==!1&&i.preventDefault()}function Gf(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Wf(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class se{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),se.nextNameID=se.nextNameID||0,this.$name.id=`lil-gui-name-${++se.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Xf extends se{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Dr(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Yf={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Dr,toHexString:Dr},$n={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},qf={isPrimitive:!1,match:i=>Array.isArray(i)||ArrayBuffer.isView(i),fromHexString(i,t,e=1){const n=$n.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return $n.toHexString(s)}},$f={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=$n.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const s=i*n<<16^t*n<<8^e*n<<0;return $n.toHexString(s)}},jf=[Yf,$n,qf,$f];function Zf(i){return jf.find(t=>t.match(i))}class Kf extends se{constructor(t,e,n,s){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Zf(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Dr(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Is extends se{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Jf extends se{constructor(t,e,n,s,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const T=parseFloat(this.$input.value);isNaN(T)||(this._snapClampSetValue(T+y),this.$input.value=this.getValue())},s=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},r=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let o=!1,a,c,l,d,p;const u=5,m=y=>{a=y.clientX,c=l=y.clientY,o=!0,d=this.getValue(),p=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",b)},g=y=>{if(o){const T=y.clientX-a,E=y.clientY-c;Math.abs(E)>u?(y.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(T)>u&&b()}if(!o){const T=y.clientY-l;p-=T*this._step*this._arrowKeyMultiplier(y),d+p>this._max?p=this._max-d:d+p<this._min&&(p=this._min-d),this._snapClampSetValue(d+p)}l=y.clientY},b=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",b)},f=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",f),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(h,y,T,E,R)=>(h-y)/(T-y)*(R-E)+E,e=h=>{const y=this.$slider.getBoundingClientRect();let T=t(h,y.left,y.right,this._min,this._max);this._snapClampSetValue(T)},n=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=h=>{e(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,c;const l=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),o=!1},d=h=>{h.touches.length>1||(this._hasScrollBar?(a=h.touches[0].clientX,c=h.touches[0].clientY,o=!0):l(h),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",u))},p=h=>{if(o){const y=h.touches[0].clientX-a,T=h.touches[0].clientY-c;Math.abs(y)>Math.abs(T)?l(h):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",u))}else h.preventDefault(),e(h.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",u)},m=this._callOnFinishChange.bind(this),g=400;let b;const f=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const T=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+T),this.$input.value=this.getValue(),clearTimeout(b),b=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",f,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Qf extends se{constructor(t,e,n,s){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class tp extends se{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var ep=`.lil-gui {
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
}`;function np(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let ba=!1;class to{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),c&&this.domElement.classList.add("lil-allow-touch-styles"),!ba&&a&&(np(ep),ba=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(t,e,n,s,r){if(Object(n)===n)return new Qf(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new Jf(this,t,e,n,s,r);case"boolean":return new Xf(this,t,e);case"string":return new tp(this,t,e);case"function":return new Is(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new Kf(this,t,e,n)}addFolder(t){const e=new to({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Is||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Is)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const Us={1:{number:1,symbol_hm:"P1",crystal_system:"Triclinic",point_group:"1",full_symbol:"P1",operations_count:1,operations:[[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},2:{number:2,symbol_hm:"P-1",crystal_system:"Triclinic",point_group:"-1",full_symbol:"P-1",operations_count:2,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},3:{number:3,symbol_hm:"P121",crystal_system:"Monoclinic",point_group:"2",full_symbol:"P121",operations_count:2,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},4:{number:4,symbol_hm:"P12_11",crystal_system:"Monoclinic",point_group:"2",full_symbol:"P12_11",operations_count:2,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},5:{number:5,symbol_hm:"C121",crystal_system:"Monoclinic",point_group:"2",full_symbol:"C121",operations_count:4,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},6:{number:6,symbol_hm:"P1m1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"P1m1",operations_count:2,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},7:{number:7,symbol_hm:"P1c1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"P1c1",operations_count:2,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},8:{number:8,symbol_hm:"C1m1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"C1m1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},9:{number:9,symbol_hm:"C1c1",crystal_system:"Monoclinic",point_group:"m",full_symbol:"C1c1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},10:{number:10,symbol_hm:"P12/m1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12/m1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},11:{number:11,symbol_hm:"P12_1/m1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12_1/m1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},12:{number:12,symbol_hm:"C12/m1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"C12/m1",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},13:{number:13,symbol_hm:"P12/c1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12/c1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},14:{number:14,symbol_hm:"P12_1/c1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"P12_1/c1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},15:{number:15,symbol_hm:"C12/c1",crystal_system:"Monoclinic",point_group:"2/m",full_symbol:"C12/c1",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},16:{number:16,symbol_hm:"P222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P222",operations_count:4,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},17:{number:17,symbol_hm:"P222_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P222_1",operations_count:4,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},18:{number:18,symbol_hm:"P2_12_12",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P2_12_12",operations_count:4,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},19:{number:19,symbol_hm:"P2_12_12_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"P2_12_12_1",operations_count:4,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},20:{number:20,symbol_hm:"C222_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"C222_1",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]]]},21:{number:21,symbol_hm:"C222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"C222",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]]]},22:{number:22,symbol_hm:"F222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"F222",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]]]},23:{number:23,symbol_hm:"I222",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"I222",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]]]},24:{number:24,symbol_hm:"I2_12_12_1",crystal_system:"Orthorhombic",point_group:"222",full_symbol:"I2_12_12_1",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]]]},25:{number:25,symbol_hm:"Pmm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pmm2",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},26:{number:26,symbol_hm:"Pmc2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pmc2_1",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},27:{number:27,symbol_hm:"Pcc2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pcc2",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},28:{number:28,symbol_hm:"Pma2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pma2",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},29:{number:29,symbol_hm:"Pca2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pca2_1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},30:{number:30,symbol_hm:"Pnc2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pnc2",operations_count:4,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},31:{number:31,symbol_hm:"Pmn2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pmn2_1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},32:{number:32,symbol_hm:"Pba2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pba2",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},33:{number:33,symbol_hm:"Pna2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pna2_1",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},34:{number:34,symbol_hm:"Pnn2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Pnn2",operations_count:4,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},35:{number:35,symbol_hm:"Cmm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Cmm2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},36:{number:36,symbol_hm:"Cmc2_1",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Cmc2_1",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},37:{number:37,symbol_hm:"Ccc2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Ccc2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},38:{number:38,symbol_hm:"Amm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Amm2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},39:{number:39,symbol_hm:"Aem2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Aem2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]]]},40:{number:40,symbol_hm:"Ama2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Ama2",operations_count:8,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},41:{number:41,symbol_hm:"Aea2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Aea2",operations_count:8,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]]]},42:{number:42,symbol_hm:"Fmm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Fmm2",operations_count:16,operations:[[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},43:{number:43,symbol_hm:"Fdd2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Fdd2",operations_count:16,operations:[[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,1.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,1.25],[0,0,1,.25],[0,0,0,1]]]},44:{number:44,symbol_hm:"Imm2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Imm2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},45:{number:45,symbol_hm:"Iba2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Iba2",operations_count:8,operations:[[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]]]},46:{number:46,symbol_hm:"Ima2",crystal_system:"Orthorhombic",point_group:"mm2",full_symbol:"Ima2",operations_count:8,operations:[[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},47:{number:47,symbol_hm:"Pmmm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/m2/m2/m",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},48:{number:48,symbol_hm:"Pnnn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/n2/n2/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},49:{number:49,symbol_hm:"Pccm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/c2/c2/m",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},50:{number:50,symbol_hm:"Pban",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/b2/a2/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},51:{number:51,symbol_hm:"Pmma",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/m2/m2/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},52:{number:52,symbol_hm:"Pnna",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/n2_1/n2/a",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},53:{number:53,symbol_hm:"Pmna",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/m2/n2_1/a",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},54:{number:54,symbol_hm:"Pcca",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/c2/c2/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},55:{number:55,symbol_hm:"Pbam",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/b2_1/a2/m",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]]]},56:{number:56,symbol_hm:"Pccn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/c2_1/c2/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},57:{number:57,symbol_hm:"Pbcm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2/b2_1/c2_1/m",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},58:{number:58,symbol_hm:"Pnnm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/n2_1/n2/m",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},59:{number:59,symbol_hm:"Pmmn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/m2_1/m2/n",operations_count:8,operations:[[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},60:{number:60,symbol_hm:"Pbcn",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/b2/c2_1/n",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},61:{number:61,symbol_hm:"Pbca",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/b2_1/c2_1/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},62:{number:62,symbol_hm:"Pnma",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"P2_1/n2_1/m2_1/a",operations_count:8,operations:[[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]]]},63:{number:63,symbol_hm:"Cmcm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/c2_1/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},64:{number:64,symbol_hm:"Cmce",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/c2_1/e",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},65:{number:65,symbol_hm:"Cmmm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/m2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},66:{number:66,symbol_hm:"Cccm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/c2/c2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]]]},67:{number:67,symbol_hm:"Cmme",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/m2/m2/e",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]]]},68:{number:68,symbol_hm:"Ccce",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"C2/c2/c2/e",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},69:{number:69,symbol_hm:"Fmmm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"F2/m2/m2/m",operations_count:32,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]]]},70:{number:70,symbol_hm:"Fddd",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"F2/d2/d2/d",operations_count:32,operations:[[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.75],[0,0,-1,.25],[0,0,0,1]]]},71:{number:71,symbol_hm:"Immm",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2/m2/m2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]]]},72:{number:72,symbol_hm:"Ibam",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2/b2/a2/m",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]]]},73:{number:73,symbol_hm:"Ibca",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2_1/b2_1/c2_1/a",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},74:{number:74,symbol_hm:"Imma",crystal_system:"Orthorhombic",point_group:"mmm",full_symbol:"I2_1/m2_1/m2_1/a",operations_count:16,operations:[[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]]]},75:{number:75,symbol_hm:"P4",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},76:{number:76,symbol_hm:"P4_1",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4_1",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},77:{number:77,symbol_hm:"P4_2",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4_2",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},78:{number:78,symbol_hm:"P4_3",crystal_system:"Tetragonal",point_group:"4",full_symbol:"P4_3",operations_count:4,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},79:{number:79,symbol_hm:"I4",crystal_system:"Tetragonal",point_group:"4",full_symbol:"I4",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},80:{number:80,symbol_hm:"I4_1",crystal_system:"Tetragonal",point_group:"4",full_symbol:"I4_1",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]]]},81:{number:81,symbol_hm:"P-4",crystal_system:"Tetragonal",point_group:"-4",full_symbol:"P-4",operations_count:4,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},82:{number:82,symbol_hm:"I-4",crystal_system:"Tetragonal",point_group:"-4",full_symbol:"I-4",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},83:{number:83,symbol_hm:"P4/m",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4/m",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},84:{number:84,symbol_hm:"P4_2/m",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4_2/m",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]]]},85:{number:85,symbol_hm:"P4/n",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4/n",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},86:{number:86,symbol_hm:"P4_2/n",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"P4_2/n",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},87:{number:87,symbol_hm:"I4/m",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"I4/m",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},88:{number:88,symbol_hm:"I4_1/a",crystal_system:"Tetragonal",point_group:"4/m",full_symbol:"I4_1/a",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,0],[0,0,0,1]]]},89:{number:89,symbol_hm:"P422",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P422",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},90:{number:90,symbol_hm:"P42_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P42_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},91:{number:91,symbol_hm:"P4_122",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_122",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.25],[0,0,0,1]]]},92:{number:92,symbol_hm:"P4_12_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_12_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},93:{number:93,symbol_hm:"P4_222",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_222",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},94:{number:94,symbol_hm:"P4_22_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_22_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},95:{number:95,symbol_hm:"P4_322",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_322",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.75],[0,0,0,1]]]},96:{number:96,symbol_hm:"P4_32_12",crystal_system:"Tetragonal",point_group:"422",full_symbol:"P4_32_12",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},97:{number:97,symbol_hm:"I422",crystal_system:"Tetragonal",point_group:"422",full_symbol:"I422",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},98:{number:98,symbol_hm:"I4_122",crystal_system:"Tetragonal",point_group:"422",full_symbol:"I4_122",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,1,0,1],[1,0,0,1],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,1.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},99:{number:99,symbol_hm:"P4mm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4mm",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},100:{number:100,symbol_hm:"P4bm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4bm",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},101:{number:101,symbol_hm:"P4_2cm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2cm",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},102:{number:102,symbol_hm:"P4_2nm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2nm",operations_count:8,operations:[[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},103:{number:103,symbol_hm:"P4cc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4cc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},104:{number:104,symbol_hm:"P4nc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4nc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},105:{number:105,symbol_hm:"P4_2mc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2mc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},106:{number:106,symbol_hm:"P4_2bc",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"P4_2bc",operations_count:8,operations:[[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},107:{number:107,symbol_hm:"I4mm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4mm",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},108:{number:108,symbol_hm:"I4cm",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4cm",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,1],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,1],[0,0,0,1]]]},109:{number:109,symbol_hm:"I4_1md",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4_1md",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,1,1.25],[0,0,0,1]]]},110:{number:110,symbol_hm:"I4_1cd",crystal_system:"Tetragonal",point_group:"4mm",full_symbol:"I4_1cd",operations_count:16,operations:[[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,1],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,1,.75],[0,0,0,1]]]},111:{number:111,symbol_hm:"P-42m",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42m",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},112:{number:112,symbol_hm:"P-42c",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42c",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},113:{number:113,symbol_hm:"P-42_1m",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42_1m",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},114:{number:114,symbol_hm:"P-42_1c",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-42_1c",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},115:{number:115,symbol_hm:"P-4m2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4m2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},116:{number:116,symbol_hm:"P-4c2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4c2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]]]},117:{number:117,symbol_hm:"P-4b2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4b2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]]]},118:{number:118,symbol_hm:"P-4n2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"P-4n2",operations_count:8,operations:[[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},119:{number:119,symbol_hm:"I-4m2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-4m2",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},120:{number:120,symbol_hm:"I-4c2",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-4c2",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,1],[0,0,0,1]]]},121:{number:121,symbol_hm:"I-42m",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-42m",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},122:{number:122,symbol_hm:"I-42d",crystal_system:"Tetragonal",point_group:"-42m",full_symbol:"I-42d",operations_count:16,operations:[[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,1,1.25],[0,0,0,1]]]},123:{number:123,symbol_hm:"P4/mmm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2/m2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},124:{number:124,symbol_hm:"P4/mcc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2/c2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},125:{number:125,symbol_hm:"P4/nbm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2/b2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},126:{number:126,symbol_hm:"P4/nnc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2/n2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},127:{number:127,symbol_hm:"P4/mbm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2_1/b2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,0],[0,0,0,1]]]},128:{number:128,symbol_hm:"P4/mnc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/m2_1/n2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},129:{number:129,symbol_hm:"P4/nmm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2_1/m2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},130:{number:130,symbol_hm:"P4/ncc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4/n2_1/c2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,-.5],[0,0,0,1]]]},131:{number:131,symbol_hm:"P4_2/mmc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2/m2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},132:{number:132,symbol_hm:"P4_2/mcm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2/c2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},133:{number:133,symbol_hm:"P4_2/nbc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2/b2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},134:{number:134,symbol_hm:"P4_2/nnm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2/n2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},135:{number:135,symbol_hm:"P4_2/mbc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2_1/b2/c",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},136:{number:136,symbol_hm:"P4_2/mnm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/m2_1/n2/m",operations_count:16,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},137:{number:137,symbol_hm:"P4_2/nmc",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2_1/m2/c",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},138:{number:138,symbol_hm:"P4_2/ncm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"P4_2/n2_1/c2/m",operations_count:16,operations:[[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},139:{number:139,symbol_hm:"I4/mmm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4/m2/m2/m",operations_count:32,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},140:{number:140,symbol_hm:"I4/mcm",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4/m2/c2/m",operations_count:32,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]]]},141:{number:141,symbol_hm:"I4_1/amd",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4_1/a2/m2/d",operations_count:32,operations:[[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,1],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,0],[0,0,1,-.25],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,.5],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,1],[1,0,0,1],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,1.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.25],[0,0,0,1]]]},142:{number:142,symbol_hm:"I4_1/acd",crystal_system:"Tetragonal",point_group:"4/mmm",full_symbol:"I4_1/a2/c2/d",operations_count:32,operations:[[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,-.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,0],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,1],[0,-1,0,.5],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1.25],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,1],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,1,.25],[0,0,0,1]]]},143:{number:143,symbol_hm:"P3",crystal_system:"Trigonal",point_group:"3",full_symbol:"P3",operations_count:3,operations:[[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},144:{number:144,symbol_hm:"P3_1",crystal_system:"Trigonal",point_group:"3",full_symbol:"P3_1",operations_count:3,operations:[[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},145:{number:145,symbol_hm:"P3_2",crystal_system:"Trigonal",point_group:"3",full_symbol:"P3_2",operations_count:3,operations:[[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},146:{number:146,symbol_hm:"R3",crystal_system:"Trigonal",point_group:"3",full_symbol:"R3",operations_count:9,operations:[[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]]]},147:{number:147,symbol_hm:"P-3",crystal_system:"Trigonal",point_group:"-3",full_symbol:"P-3",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},148:{number:148,symbol_hm:"R-3",crystal_system:"Trigonal",point_group:"-3",full_symbol:"R-3",operations_count:18,operations:[[[0,1,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,0,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,0,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]]]},149:{number:149,symbol_hm:"P312",crystal_system:"Trigonal",point_group:"32",full_symbol:"P312",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]]]},150:{number:150,symbol_hm:"P321",crystal_system:"Trigonal",point_group:"32",full_symbol:"P321",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]]]},151:{number:151,symbol_hm:"P3_112",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_112",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},152:{number:152,symbol_hm:"P3_121",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_121",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},153:{number:153,symbol_hm:"P3_212",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_212",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},154:{number:154,symbol_hm:"P3_221",crystal_system:"Trigonal",point_group:"32",full_symbol:"P3_221",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},155:{number:155,symbol_hm:"R32",crystal_system:"Trigonal",point_group:"32",full_symbol:"R32",operations_count:18,operations:[[[-1,0,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]]]},156:{number:156,symbol_hm:"P3m1",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P3m1",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]]},157:{number:157,symbol_hm:"P31m",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P31m",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]]]},158:{number:158,symbol_hm:"P3c1",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P3c1",operations_count:6,operations:[[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]]]},159:{number:159,symbol_hm:"P31c",crystal_system:"Trigonal",point_group:"3m",full_symbol:"P31c",operations_count:6,operations:[[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]]]},160:{number:160,symbol_hm:"R3m",crystal_system:"Trigonal",point_group:"3m",full_symbol:"R3m",operations_count:18,operations:[[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]]]},161:{number:161,symbol_hm:"R3c",crystal_system:"Trigonal",point_group:"3m",full_symbol:"R3c",operations_count:18,operations:[[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.8333333333333334],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.8333333333333334],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,1.1666666666666667],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,1.1666666666666667],[0,0,0,1]],[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,1.1666666666666667],[0,0,0,1]]]},162:{number:162,symbol_hm:"P-31m",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-312/m",operations_count:12,operations:[[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]]]},163:{number:163,symbol_hm:"P-31c",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-312/c",operations_count:12,operations:[[[-1,0,0,0],[-1,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},164:{number:164,symbol_hm:"P-3m1",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-32/m1",operations_count:12,operations:[[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},165:{number:165,symbol_hm:"P-3c1",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"P-32/c1",operations_count:12,operations:[[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]]]},166:{number:166,symbol_hm:"R-3m",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"R-32/m",operations_count:36,operations:[[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]]]},167:{number:167,symbol_hm:"R-3c",crystal_system:"Trigonal",point_group:"-3m",full_symbol:"R-32/c",operations_count:36,operations:[[[-1,1,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.16666666666666666],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[-1,1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.8333333333333334],[0,0,0,1]],[[-1,0,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.8333333333333334],[0,0,0,1]],[[1,-1,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.8333333333333334],[0,0,0,1]],[[-1,0,0,.6666666666666666],[0,-1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,1,0,.6666666666666666],[-1,1,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.16666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.16666666666666666],[0,0,0,1]],[[1,-1,0,.6666666666666666],[1,0,0,.3333333333333333],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,-1,0,.6666666666666666],[-1,0,0,.3333333333333333],[0,0,1,-.16666666666666666],[0,0,0,1]],[[1,0,0,.6666666666666666],[1,-1,0,.3333333333333333],[0,0,1,-.16666666666666666],[0,0,0,1]],[[-1,1,0,.6666666666666666],[0,1,0,.3333333333333333],[0,0,1,-.16666666666666666],[0,0,0,1]],[[1,0,0,.3333333333333333],[0,1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,.3333333333333333],[1,-1,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[-1,1,0,.3333333333333333],[-1,0,0,.6666666666666666],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,1,0,.3333333333333333],[1,0,0,.6666666666666666],[0,0,-1,1.1666666666666667],[0,0,0,1]],[[-1,0,0,.3333333333333333],[-1,1,0,.6666666666666666],[0,0,-1,1.1666666666666667],[0,0,0,1]],[[1,-1,0,.3333333333333333],[0,-1,0,.6666666666666666],[0,0,-1,1.1666666666666667],[0,0,0,1]]]},168:{number:168,symbol_hm:"P6",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]]]},169:{number:169,symbol_hm:"P6_1",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_1",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.16666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.8333333333333334],[0,0,0,1]]]},170:{number:170,symbol_hm:"P6_5",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_5",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.16666666666666666],[0,0,0,1]]]},171:{number:171,symbol_hm:"P6_2",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_2",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]]]},172:{number:172,symbol_hm:"P6_4",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_4",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]]]},173:{number:173,symbol_hm:"P6_3",crystal_system:"Hexagonal",point_group:"6",full_symbol:"P6_3",operations_count:6,operations:[[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]]]},174:{number:174,symbol_hm:"P-6",crystal_system:"Hexagonal",point_group:"-6",full_symbol:"P-6",operations_count:6,operations:[[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]]]},175:{number:175,symbol_hm:"P6/m",crystal_system:"Hexagonal",point_group:"6/m",full_symbol:"P6/m",operations_count:12,operations:[[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]]]},176:{number:176,symbol_hm:"P6_3/m",crystal_system:"Hexagonal",point_group:"6/m",full_symbol:"P6_3/m",operations_count:12,operations:[[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]]]},177:{number:177,symbol_hm:"P622",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P622",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},178:{number:178,symbol_hm:"P6_122",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_122",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.16666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.8333333333333334],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.16666666666666666],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},179:{number:179,symbol_hm:"P6_522",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_522",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.8333333333333334],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.16666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.16666666666666666],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.8333333333333334],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},180:{number:180,symbol_hm:"P6_222",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_222",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]]]},181:{number:181,symbol_hm:"P6_422",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_422",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.6666666666666666],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.3333333333333333],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.6666666666666666],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.3333333333333333],[0,0,0,1]]]},182:{number:182,symbol_hm:"P6_322",crystal_system:"Hexagonal",point_group:"622",full_symbol:"P6_322",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},183:{number:183,symbol_hm:"P6mm",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6mm",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},184:{number:184,symbol_hm:"P6cc",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6cc",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},185:{number:185,symbol_hm:"P6_3cm",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6_3cm",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},186:{number:186,symbol_hm:"P6_3mc",crystal_system:"Hexagonal",point_group:"6mm",full_symbol:"P6_3mc",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},187:{number:187,symbol_hm:"P-6m2",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-6m2",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},188:{number:188,symbol_hm:"P-6c2",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-6c2",operations_count:12,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]]]},189:{number:189,symbol_hm:"P-62m",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-62m",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},190:{number:190,symbol_hm:"P-62c",crystal_system:"Hexagonal",point_group:"-6m2",full_symbol:"P-62c",operations_count:12,operations:[[[1,-1,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]]]},191:{number:191,symbol_hm:"P6/mmm",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6/m2/m2/m",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]]]},192:{number:192,symbol_hm:"P6/mcc",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6/m2/c2/c",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},193:{number:193,symbol_hm:"P6_3/mcm",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6_3/m2/c2/m",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,-.5],[0,0,0,1]]]},194:{number:194,symbol_hm:"P6_3/mmc",crystal_system:"Hexagonal",point_group:"6/mmm",full_symbol:"P6_3/m2/m2/c",operations_count:24,operations:[[[-1,1,0,0],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,1,0,0],[-1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[-1,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[1,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,-1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[-1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[-1,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,-1,0,0],[0,-1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[1,-1,0,0],[0,0,1,0],[0,0,0,1]]]},195:{number:195,symbol_hm:"P23",crystal_system:"Cubic",point_group:"23",full_symbol:"P23",operations_count:12,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]]]},196:{number:196,symbol_hm:"F23",crystal_system:"Cubic",point_group:"23",full_symbol:"F23",operations_count:48,operations:[[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]]]},197:{number:197,symbol_hm:"I23",crystal_system:"Cubic",point_group:"23",full_symbol:"I23",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]]]},198:{number:198,symbol_hm:"P2_13",crystal_system:"Cubic",point_group:"23",full_symbol:"P2_13",operations_count:12,operations:[[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]]]},199:{number:199,symbol_hm:"I2_13",crystal_system:"Cubic",point_group:"23",full_symbol:"I2_13",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]]]},200:{number:200,symbol_hm:"Pm-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"P2/m-3",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]]]},201:{number:201,symbol_hm:"Pn-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"P2/n-3",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]]]},202:{number:202,symbol_hm:"Fm-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"F2/m-3",operations_count:96,operations:[[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]]]},203:{number:203,symbol_hm:"Fd-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"F2/d-3",operations_count:96,operations:[[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,1,.25],[1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.25],[-1,0,0,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.75],[-1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.75],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.25],[1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.75],[0,0,1,.25],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.25],[-1,0,0,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.75],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,.75],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.75],[-1,0,0,.25],[0,0,0,1]]]},204:{number:204,symbol_hm:"Im-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"I2/m-3",operations_count:48,operations:[[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]]]},205:{number:205,symbol_hm:"Pa-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"P2_1/a-3",operations_count:24,operations:[[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,-.5],[0,1,0,-.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,-.5],[1,0,0,-.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,-.5],[0,0,1,-.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.5],[0,0,1,0],[-1,0,0,-.5],[0,0,0,1]]]},206:{number:206,symbol_hm:"Ia-3",crystal_system:"Cubic",point_group:"m-3",full_symbol:"I2_1/a-3",operations_count:48,operations:[[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,-.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,-.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.5],[0,0,1,0],[-1,0,0,-.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]]]},207:{number:207,symbol_hm:"P432",crystal_system:"Cubic",point_group:"432",full_symbol:"P432",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]]]},208:{number:208,symbol_hm:"P4_232",crystal_system:"Cubic",point_group:"432",full_symbol:"P4_232",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]]]},209:{number:209,symbol_hm:"F432",crystal_system:"Cubic",point_group:"432",full_symbol:"F432",operations_count:96,operations:[[[1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]]]},210:{number:210,symbol_hm:"F4_132",crystal_system:"Cubic",point_group:"432",full_symbol:"F4_132",operations_count:96,operations:[[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.25],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.25],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.25],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,0,1,.25],[0,1,0,1.25],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,1],[0,1,0,1],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,1],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,1,0,1.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,1,1],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,1.25],[1,0,0,.25],[0,0,0,1]]]},211:{number:211,symbol_hm:"I432",crystal_system:"Cubic",point_group:"432",full_symbol:"I432",operations_count:48,operations:[[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]]]},212:{number:212,symbol_hm:"P4_332",crystal_system:"Cubic",point_group:"432",full_symbol:"P4_332",operations_count:24,operations:[[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.25],[1,0,0,.75],[0,0,0,1]]]},213:{number:213,symbol_hm:"P4_132",crystal_system:"Cubic",point_group:"432",full_symbol:"P4_132",operations_count:24,operations:[[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.25],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]]]},214:{number:214,symbol_hm:"I4_132",crystal_system:"Cubic",point_group:"432",full_symbol:"I4_132",operations_count:48,operations:[[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,1,1.25],[0,-1,0,1.25],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,1,1.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[0,0,1,1.25],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,1.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.25],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,1.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,1,0,.75],[1,0,0,1.25],[0,0,-1,1.25],[0,0,0,1]]]},215:{number:215,symbol_hm:"P-43m",crystal_system:"Cubic",point_group:"-43m",full_symbol:"P-43m",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]]]},216:{number:216,symbol_hm:"F-43m",crystal_system:"Cubic",point_group:"-43m",full_symbol:"F-43m",operations_count:96,operations:[[[-1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]]]},217:{number:217,symbol_hm:"I-43m",crystal_system:"Cubic",point_group:"-43m",full_symbol:"I-43m",operations_count:48,operations:[[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},218:{number:218,symbol_hm:"P-43n",crystal_system:"Cubic",point_group:"-43m",full_symbol:"P-43n",operations_count:24,operations:[[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]]]},219:{number:219,symbol_hm:"F-43c",crystal_system:"Cubic",point_group:"-43m",full_symbol:"F-43c",operations_count:96,operations:[[[-1,0,0,0],[0,0,1,1],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,1],[0,1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,1],[0,0,1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,1],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,1],[0,0,0,1]],[[0,-1,0,1],[0,0,1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,1],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,1],[0,-1,0,.5],[-1,0,0,1],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,1],[-1,0,0,1],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,1],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,1],[0,0,1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,1],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,1],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,1],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,1],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,1],[1,0,0,1],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,1],[0,1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,1],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,1],[0,-1,0,1],[-1,0,0,.5],[0,0,0,1]]]},220:{number:220,symbol_hm:"I-43d",crystal_system:"Cubic",point_group:"-43m",full_symbol:"I-43d",operations_count:48,operations:[[[-1,0,0,1.25],[0,0,1,1.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,1.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,1,1.25],[0,1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,1,0,1.25],[1,0,0,1.25],[0,0,1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,1.25],[0,-1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.75],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,1.25],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.25],[1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,1.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,1.25],[1,0,0,1.25],[0,0,-1,.75],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,1.25],[0,0,1,1.25],[0,0,0,1]]]},221:{number:221,symbol_hm:"Pm-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4/m-32/m",operations_count:48,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},222:{number:222,symbol_hm:"Pn-3n",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4/n-32/n",operations_count:48,operations:[[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]]]},223:{number:223,symbol_hm:"Pm-3n",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4_2/m-32/n",operations_count:48,operations:[[[-1,0,0,-.5],[0,0,1,-.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,-.5],[0,0,-1,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,-.5],[0,0,1,-.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,0,-1,-.5],[0,-1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,-.5],[0,1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,-.5],[0,0,-1,-.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,-.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,-.5],[0,0,1,-.5],[0,0,0,1]]]},224:{number:224,symbol_hm:"Pn-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"P4_2/n-32/m",operations_count:48,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]]]},225:{number:225,symbol_hm:"Fm-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4/m-32/m",operations_count:192,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]]]},226:{number:226,symbol_hm:"Fm-3c",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4/m-32/c",operations_count:192,operations:[[[-1,0,0,0],[0,0,1,-.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,-.5],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,-.5],[-1,0,0,-.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,-.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,-.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,-.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,-.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,-.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,-.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,-.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[1,0,0,-.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[1,0,0,-.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,-.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,1],[0,1,0,.5],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,1],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,-1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,.5],[1,0,0,1],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,1],[1,0,0,1],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,1],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.5],[0,0,-1,0],[1,0,0,-.5],[0,0,0,1]],[[0,0,1,-.5],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,1],[1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,1],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,1],[1,0,0,1],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,1],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,1],[0,1,0,1],[1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,1],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,1],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,1],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,-.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,-.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,-.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,-.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,-.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,-1,0,-.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,-.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,1],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1],[0,1,0,1],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,1],[0,0,-1,0],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,1],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,1],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,1],[0,1,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,1],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,-.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,-.5],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,-.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.5],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,-.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,-.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,1],[1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[-1,0,0,1],[0,0,0,1]],[[0,-1,0,1],[0,0,1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[1,0,0,1],[0,0,0,1]],[[0,0,-1,1],[0,1,0,.5],[1,0,0,1],[0,0,0,1]],[[1,0,0,1],[0,0,1,0],[0,-1,0,.5],[0,0,0,1]]]},227:{number:227,symbol_hm:"Fd-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4_1/d-32/m",operations_count:192,operations:[[[-1,0,0,-.5],[0,0,1,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,-.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,-.5],[0,0,1,0],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,-.25],[0,0,1,.25],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[1,0,0,-.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,-.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.25],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,-.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,-.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.25],[0,-1,0,-.25],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.75],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.25],[1,0,0,.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,1],[0,1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.25],[0,1,0,1.25],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,0],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.25],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,-.5],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.25],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,-.25],[0,0,-1,-.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.25],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.25],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,1],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,1,0,1.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,1,1],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,1.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,-.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.25],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,-.5],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.25],[-1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,0],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.25],[1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,-.5],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.25],[1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.75],[0,1,0,-.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,-.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[0,1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,1,.25],[-1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,-.5],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.25],[0,0,-1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.25],[1,0,0,-.25],[0,-1,0,-.25],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]],[[-1,0,0,.25],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.25],[0,1,0,-.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,-.25],[0,0,1,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,-.25],[0,0,-1,.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,0],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.25],[0,0,1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,-.5],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.25],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.75],[0,0,0,1]]]},228:{number:228,symbol_hm:"Fd-3c",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"F4_1/d-32/c",operations_count:192,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,-.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.25],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,0],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,1],[0,1,0,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,1.25],[0,0,1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,0,-1,1],[0,1,0,0],[-1,0,0,-.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,1.25],[1,0,0,-.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,1.25],[1,0,0,.25],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,0],[0,1,0,.5],[0,0,0,1]],[[0,0,1,1.25],[-1,0,0,-.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.5],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,1.25],[0,0,-1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.25],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,-.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,-.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,1.25],[1,0,0,.25],[0,-1,0,-.25],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,1.25],[1,0,0,.75],[0,1,0,.25],[0,0,0,1]],[[-1,0,0,1],[0,0,-1,.5],[0,1,0,0],[0,0,0,1]],[[0,0,1,1.25],[-1,0,0,.25],[0,1,0,-.25],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,-.5],[0,0,0,1]],[[0,-1,0,1.25],[0,0,-1,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.75],[0,0,1,.75],[1,0,0,-.25],[0,0,0,1]],[[0,0,-1,1],[0,-1,0,0],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,.75],[0,0,-1,.25],[1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,1],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,1],[0,1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,1],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.25],[0,1,0,1.25],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,1.25],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.75],[0,1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,0],[1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,.75],[0,1,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,1],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,-.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,.5],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.25],[-1,0,0,.25],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.25],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.25],[0,0,-1,1.25],[0,0,0,1]],[[0,0,1,.5],[1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.25],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,-1,0,.75],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,1],[-1,0,0,.5],[0,0,-1,0],[0,0,0,1]],[[1,0,0,1.25],[0,1,0,.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,-.5],[0,0,0,1]],[[-1,0,0,1.25],[0,1,0,.75],[0,0,1,.25],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,.25],[0,0,1,-.25],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,-.5],[0,0,0,1]],[[0,0,-1,1.25],[-1,0,0,.75],[0,-1,0,.25],[0,0,0,1]],[[1,0,0,1],[0,0,-1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,1],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,0],[0,0,0,1]],[[0,1,0,1],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,1,0,1.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,1,1],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,1.25],[1,0,0,.25],[0,0,0,1]],[[0,0,1,1],[0,1,0,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1.25],[0,0,1,.25],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,1],[0,1,0,-.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,-.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,1],[0,0,1,.5],[0,0,0,1]],[[0,1,0,1.25],[-1,0,0,.75],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.75],[0,-1,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,0],[1,0,0,.5],[0,0,1,0],[0,0,0,1]],[[0,0,-1,.75],[-1,0,0,.75],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.75],[1,0,0,.25],[0,-1,0,.25],[0,0,0,1]],[[-1,0,0,0],[0,0,1,.5],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,.75],[1,0,0,.75],[0,1,0,.75],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,1.25],[0,-1,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,1,0,1],[-1,0,0,0],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,1.25],[0,1,0,-.25],[0,0,-1,.25],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,1.25],[0,1,0,.25],[0,0,1,.75],[0,0,0,1]],[[0,-1,0,1],[-1,0,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,1.25],[0,-1,0,-.25],[0,0,1,.25],[0,0,0,1]],[[0,1,0,.5],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,1.25],[-1,0,0,.25],[0,-1,0,.75],[0,0,0,1]],[[1,0,0,1],[0,0,-1,0],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,1,0,.75],[1,0,0,.75],[0,0,-1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,1],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,1.25],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,1],[0,1,0,.5],[0,0,0,1]],[[1,0,0,1.25],[0,0,-1,.75],[0,1,0,.75],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.75],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,-.5],[-1,0,0,-.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.25],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,-1,0],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.25],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,1,.75],[-1,0,0,.25],[0,1,0,.25],[0,0,0,1]],[[1,0,0,0],[0,0,1,.5],[0,1,0,0],[0,0,0,1]],[[0,-1,0,.75],[0,0,-1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,.75],[1,0,0,-.25],[0,-1,0,-.25],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,-1,0,.75],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.75],[1,0,0,.25],[0,0,0,1]],[[-1,0,0,.75],[0,-1,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,.75],[0,1,0,-.25],[0,0,-1,-.25],[0,0,0,1]],[[0,-1,0,.25],[0,0,1,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.25],[0,0,-1,.25],[1,0,0,.75],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.75],[0,0,1,.75],[-1,0,0,.75],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,0],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[-1,0,0,1.25],[0,0,-1,.25],[0,-1,0,1.25],[0,0,0,1]],[[0,1,0,.5],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,0],[-1,0,0,1],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.75],[-1,0,0,1.25],[0,0,0,1]],[[0,-1,0,1],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.25],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,.75],[0,0,0,1]],[[1,0,0,.75],[0,0,1,.25],[0,-1,0,.75],[0,0,0,1]]]},229:{number:229,symbol_hm:"Im-3m",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"I4/m-32/m",operations_count:96,operations:[[[-1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,1,0,0],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,0],[1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,0],[1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,-1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.5],[-1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.5],[1,0,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,-1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,1,.5],[0,-1,0,.5],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.5],[0,0,-1,.5],[0,1,0,.5],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,1,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.5],[0,0,1,.5],[0,1,0,.5],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[-1,0,0,0],[0,0,0,1]],[[1,0,0,0],[0,0,-1,0],[0,-1,0,0],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,0,-1,0],[0,-1,0,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,0],[0,-1,0,0],[1,0,0,0],[0,0,0,1]],[[0,0,-1,0],[0,1,0,0],[1,0,0,0],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,0],[-1,0,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,-1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,1,0,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,-1,.5],[0,1,0,.5],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,.5],[0,-1,0,.5],[-1,0,0,.5],[0,0,0,1]]]},230:{number:230,symbol_hm:"Ia-3d",crystal_system:"Cubic",point_group:"m-3m",full_symbol:"I4_1/a-32/d",operations_count:96,operations:[[[-1,0,0,-.25],[0,0,1,-.25],[0,-1,0,-.75],[0,0,0,1]],[[0,0,-1,0],[1,0,0,0],[0,1,0,-.5],[0,0,0,1]],[[-1,0,0,-.25],[0,0,-1,-.75],[0,1,0,-.75],[0,0,0,1]],[[0,0,1,-.5],[-1,0,0,0],[0,1,0,0],[0,0,0,1]],[[1,0,0,-.25],[0,0,1,-.25],[0,1,0,-.25],[0,0,0,1]],[[0,-1,0,0],[0,0,-1,0],[-1,0,0,0],[0,0,0,1]],[[0,-1,0,-.5],[0,0,1,-.5],[1,0,0,0],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,0],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,.25],[0,1,0,.75],[0,0,0,1]],[[0,0,1,0],[-1,0,0,0],[0,-1,0,.5],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,.25],[0,0,1,.75],[0,0,0,1]],[[1,0,0,0],[0,-1,0,0],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.75],[0,0,1,.25],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,0],[0,0,1,.5],[0,0,0,1]],[[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,0],[0,0,-1,0],[0,0,0,1]],[[1,0,0,-.5],[0,-1,0,0],[0,0,1,0],[0,0,0,1]],[[0,1,0,-.25],[1,0,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[0,0,-1,0],[-1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[0,-1,0,-.25],[1,0,0,-.25],[0,0,-1,-.75],[0,0,0,1]],[[-1,0,0,0],[0,1,0,0],[0,0,1,-.5],[0,0,0,1]],[[0,-1,0,-.25],[-1,0,0,-.75],[0,0,1,-.75],[0,0,0,1]],[[0,1,0,.75],[1,0,0,1.25],[0,0,-1,1.25],[0,0,0,1]],[[-1,0,0,1],[0,1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.75],[-1,0,0,.75],[0,0,-1,.75],[0,0,0,1]],[[0,0,1,.5],[1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,1,1.25],[0,1,0,.75],[0,0,0,1]],[[0,0,-1,1],[-1,0,0,.5],[0,1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,-1,.75],[0,1,0,1.25],[0,0,0,1]],[[0,0,1,.5],[-1,0,0,.5],[0,-1,0,1],[0,0,0,1]],[[1,0,0,.75],[0,0,1,1.25],[0,-1,0,1.25],[0,0,0,1]],[[0,0,-1,1],[1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[-1,0,0,.75],[0,0,-1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,1,0,.5],[0,0,1,.5],[1,0,0,.5],[0,0,0,1]],[[0,1,0,1],[0,0,-1,1],[-1,0,0,.5],[0,0,0,1]],[[0,0,1,1.25],[0,1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,.5],[0,0,1,1],[-1,0,0,1],[0,0,0,1]],[[0,0,-1,.75],[0,-1,0,.75],[-1,0,0,.75],[0,0,0,1]],[[0,-1,0,1],[0,0,-1,.5],[1,0,0,1],[0,0,0,1]],[[0,0,1,1.25],[0,-1,0,1.25],[1,0,0,.75],[0,0,0,1]],[[0,0,-1,1.25],[0,1,0,.75],[1,0,0,1.25],[0,0,0,1]],[[0,1,0,.25],[-1,0,0,-.25],[0,0,-1,.25],[0,0,0,1]],[[1,0,0,0],[0,1,0,.5],[0,0,-1,0],[0,0,0,1]],[[0,-1,0,.25],[1,0,0,.25],[0,0,-1,-.25],[0,0,0,1]],[[-1,0,0,.5],[0,1,0,.5],[0,0,1,0],[0,0,0,1]],[[-1,0,0,1],[0,-1,0,.5],[0,0,1,1],[0,0,0,1]],[[0,1,0,.75],[-1,0,0,.75],[0,0,1,1.25],[0,0,0,1]],[[1,0,0,.5],[0,-1,0,.5],[0,0,-1,1],[0,0,0,1]],[[0,0,1,-.75],[0,-1,0,-.25],[-1,0,0,-.75],[0,0,0,1]],[[1,0,0,.5],[0,1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,-1,0,.75],[1,0,0,1.25],[0,0,1,.75],[0,0,0,1]],[[0,0,-1,-.75],[0,-1,0,-.25],[1,0,0,-.25],[0,0,0,1]],[[0,1,0,0],[0,0,-1,-.5],[1,0,0,-.5],[0,0,0,1]],[[0,0,1,-.25],[0,1,0,-.25],[1,0,0,-.25],[0,0,0,1]],[[0,1,0,-.5],[0,0,1,0],[-1,0,0,-.5],[0,0,0,1]],[[-1,0,0,.5],[0,-1,0,.5],[0,0,-1,.5],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,-.25],[0,0,1,-.25],[0,0,0,1]],[[1,0,0,0],[0,-1,0,.5],[0,0,1,.5],[0,0,0,1]],[[0,1,0,.25],[1,0,0,.25],[0,0,1,.25],[0,0,0,1]],[[0,0,-1,.5],[-1,0,0,.5],[0,-1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,-1,-.25],[0,-1,0,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,.5],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.25],[0,-1,0,-.25],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,.5],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,-.25],[0,1,0,-.25],[0,0,0,1]],[[0,0,-1,-.75],[0,1,0,-.75],[-1,0,0,-.25],[0,0,0,1]],[[0,-1,0,.25],[-1,0,0,.25],[0,0,-1,.25],[0,0,0,1]],[[0,0,1,0],[1,0,0,0],[0,1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,1,.75],[0,1,0,.25],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.75],[0,-1,0,.75],[0,0,0,1]],[[0,0,-1,.5],[1,0,0,0],[0,-1,0,0],[0,0,0,1]],[[-1,0,0,.25],[0,0,-1,.25],[0,-1,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,0],[1,0,0,0],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,1,.75],[0,1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,0,1,0],[-1,0,0,.5],[0,1,0,.5],[0,0,0,1]],[[1,0,0,.25],[0,0,1,.25],[0,1,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,.5],[-1,0,0,.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,.5],[-1,0,0,.5],[0,0,0,1]],[[1,0,0,-.25],[0,0,-1,-.75],[0,-1,0,-.25],[0,0,0,1]],[[0,0,1,-.5],[1,0,0,0],[0,-1,0,-.5],[0,0,0,1]],[[0,0,-1,.25],[0,-1,0,.25],[-1,0,0,.25],[0,0,0,1]],[[0,-1,0,.5],[0,0,-1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,1,.75],[0,-1,0,.75],[1,0,0,.25],[0,0,0,1]],[[0,0,-1,.75],[0,1,0,.25],[1,0,0,.75],[0,0,0,1]],[[-1,0,0,0],[0,-1,0,0],[0,0,-1,0],[0,0,0,1]],[[0,1,0,-.25],[-1,0,0,-.75],[0,0,-1,-.25],[0,0,0,1]],[[1,0,0,-.5],[0,1,0,0],[0,0,-1,-.5],[0,0,0,1]],[[0,-1,0,0],[0,0,1,0],[1,0,0,.5],[0,0,0,1]],[[0,0,-1,-.25],[0,-1,0,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,.5],[0,0,-1,0],[1,0,0,0],[0,0,0,1]],[[0,0,1,.25],[0,1,0,.25],[1,0,0,.25],[0,0,0,1]],[[0,1,0,0],[0,0,1,.5],[-1,0,0,0],[0,0,0,1]],[[0,0,-1,-.25],[0,1,0,-.25],[-1,0,0,.25],[0,0,0,1]],[[0,0,1,-.25],[0,-1,0,.25],[-1,0,0,-.25],[0,0,0,1]]]}},jn={};Array.isArray(Us)?Us.forEach(i=>{i&&i.number&&(jn[i.number]=i)}):Object.assign(jn,Us);const Lr=Object.keys(jn),ip=Lr.length>0?Number(Lr[0]):1,Dt=new Df({antialias:!0});Dt.setSize(window.innerWidth,window.innerHeight);Dt.autoClear=!1;Dt.domElement.style.position="absolute";Dt.domElement.style.top="0px";Dt.domElement.style.left="0px";Dt.domElement.style.zIndex="-1";Dt.domElement.style.pointerEvents="none";document.body.appendChild(Dt.domElement);const Ie=document.createElement("div");Ie.id="hkl-tooltip";Object.assign(Ie.style,{position:"absolute",display:"none",background:"rgba(0,0,0,0.85)",color:"#fff",padding:"8px 12px",borderRadius:"6px",pointerEvents:"none",zIndex:"100",fontSize:"13px",fontFamily:"sans-serif",border:"1px solid #555",boxShadow:"0px 4px 10px rgba(0,0,0,0.5)"});document.body.appendChild(Ie);const Pn=[new as,new as,new as];Pn[0].background=new H0(16777215);Pn[1].background=new H0(328965);Pn[2].background=new H0(0);const Fs=window.innerWidth/7*2/window.innerHeight,re=[new Pt(45,Fs,.1,1e4),new Pt(45,Fs,.1,1e4),new Pt(45,Fs,.1,1e4)];re[0].position.set(80,80,80);re[1].position.set(-300,200,500);const i1=[new Ls(re[0],document.getElementById("view1")),new Ls(re[1],document.getElementById("view2")),new Ls(re[2],document.getElementById("view3"))];i1.forEach(i=>{i.enableDamping=!0,i.mouseButtons={LEFT:xe.ROTATE,MIDDLE:xe.PAN,RIGHT:xe.PAN}});Pn.slice(0,2).forEach(i=>{const t=new Dl(16777215,1.2);t.position.set(100,200,100),i.add(t),i.add(new Ll(7368816))});const Qt=Pn.map(i=>{const t=new xn;return i.add(t),t});let bn=[],Ir=null,Ur=[],_e=null,Fe=null;const Vi=new xn;Qt[1].add(Vi);const sp=new It().setFromPoints([new I(-500,0,0),new I(500,0,0)]),rp=new Wa(sp,new jr({color:16711680,linewidth:2}));Qt[1].add(rp);const eo=new Vt(new Jn(600,600),new Gi({color:3355443,side:Xt,transparent:!0,opacity:.3}));eo.rotation.y=Math.PI/2;Qt[1].add(eo);const ot={sgNumber:ip,a:42.2,b:42.2,c:74,alpha:90,beta:104,gamma:90,omega:0,chi:0,phi:0,wavelength:.9,detectorDist:250,animateChi:!1,blockScale:3,threshold:.05},Ma=new Fl,Ns=new P0;function op(i){const t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],e=i.toLowerCase().replace(/\s/g,"").split(",");for(let n=0;n<3;n++){let s=e[n];if(!s)continue;const r=s.match(/([+-]?\d+)\/(\d+)/);if(r)t[n*4+3]=parseInt(r[1])/parseInt(r[2]),s=s.replace(r[0],"");else{const o=s.match(/([+-]?\d+\.\d+)/);o&&(t[n*4+3]=parseFloat(o[1]),s=s.replace(o[0],""))}s.includes("x")&&(t[n*4+0]=s.includes("-x")?-1:1),s.includes("y")&&(t[n*4+1]=s.includes("-y")?-1:1),s.includes("z")&&(t[n*4+2]=s.includes("-z")?-1:1)}return t}const Os=i=>{let t;if(typeof i=="string")t=op(i);else if(Array.isArray(i))t=i.flat(1/0);else throw new Error("Invalid format");return t.length!==16?new U0:new U0().fromArray(t).transpose()},ap=(i,t)=>{const e=Math.PI/180,n=new I(t.a,0,0),s=new I(t.b*Math.cos(t.gamma*e),t.b*Math.sin(t.gamma*e),0),r=Math.sin(t.gamma*e),o=t.c*Math.sqrt(Math.max(0,1-Math.cos(t.alpha*e)**2-Math.cos(t.beta*e)**2-Math.cos(t.gamma*e)**2+2*Math.cos(t.alpha*e)*Math.cos(t.beta*e)*Math.cos(t.gamma*e)))/r,a=new I(t.c*Math.cos(t.beta*e),t.c*(Math.cos(t.alpha*e)-Math.cos(t.beta*e)*Math.cos(t.gamma*e))/r,o);return[n,s,a].forEach(c=>c.applyMatrix4(i)),{v1:n,v2:s,v3:a,mat:new U0().makeBasis(n,s,a)}};function Yi(){try{Qt[0].clear(),Vi.clear(),bn=[];const i=jn[ot.sgNumber];if(!i)return;document.getElementById("sg-name").innerText=i.symbol_hm||`SG ${i.number}`,document.getElementById("sg-system").innerText=i.crystal_system||"System";const t=ap(new U0,ot),e=1.5,n=new Kr(e,16,16),s=new Al({color:4491519}),r=i.operations||i.symops||["x,y,z"],o=new vi(n,s,r.length);r.forEach((G,A)=>{const O=Os(G),V=new st(0,0,0,1).applyMatrix4(O),W=new I((V.x%1+1)%1,(V.y%1+1)%1,(V.z%1+1)%1).applyMatrix4(t.mat);o.setMatrixAt(A,new U0().makeTranslation(W.x,W.y,W.z))}),o.instanceMatrix.needsUpdate=!0,Qt[0].add(o);const a=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]].map(G=>new I(...G).applyMatrix4(t.mat)),c=new jr({color:8947848}),l=(G,A)=>Qt[0].add(new Wa(new It().setFromPoints([a[G],a[A]]),c));[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]].forEach(G=>l(G[0],G[1]));const d=ot.blockScale,p=new vi(n,s,r.length*d**3);let u=0;const m=new I((d-1)/2,(d-1)/2,(d-1)/2).applyMatrix4(t.mat);for(let G=0;G<d;G++)for(let A=0;A<d;A++)for(let O=0;O<d;O++){const V=new I(G,A,O).applyMatrix4(t.mat).sub(m);r.forEach(W=>{const z=Os(W),H=new st(0,0,0,1).applyMatrix4(z),F=new I(H.x,H.y,H.z).applyMatrix4(t.mat).add(V);p.setMatrixAt(u++,new U0().makeTranslation(F.x,F.y,F.z))})}p.instanceMatrix.needsUpdate=!0,Vi.add(p);const g=Math.abs(t.v1.dot(new I().crossVectors(t.v2,t.v3))),b=[new I().crossVectors(t.v2,t.v3).multiplyScalar(2*Math.PI/g),new I().crossVectors(t.v3,t.v1).multiplyScalar(2*Math.PI/g),new I().crossVectors(t.v1,t.v2).multiplyScalar(2*Math.PI/g)],h=2*Math.PI/.5;let y=Math.ceil(h/b[0].length()),T=Math.ceil(h/b[1].length()),E=Math.ceil(h/b[2].length());const R=35;y=Math.min(y,R),T=Math.min(T,R),E=Math.min(E,R);const w=new I(.12,.25,.38);for(let G=-y;G<=y;G++)for(let A=-T;A<=T;A++)for(let O=-E;O<=E;O++){if(G===0&&A===0&&O===0)continue;const V=new I().addScaledVector(b[0],G).addScaledVector(b[1],A).addScaledVector(b[2],O);if(V.length()>h)continue;let W=0,z=0;r.forEach(F=>{const Q=Os(F),Z=new st(w.x,w.y,w.z,1).applyMatrix4(Q),c0=2*Math.PI*(G*Z.x+A*Z.y+O*Z.z);W+=Math.cos(c0),z+=Math.sin(c0)});const H=(W**2+z**2)/r.length;if(H>.1){const F=Math.max(.3,Math.log10(H+1.5));bn.push({h:G,k:A,l:O,G_unrot:V,scale:F})}}_e&&Qt[2].remove(_e),Fe&&Qt[1].remove(Fe);const P=Math.max(1,bn.length),x=new Zr(1.5,16),S=new Gi({color:16776960,side:Xt});_e=new vi(x,S,P),Fe=new vi(x,S,P),Qt[2].add(_e),Qt[1].add(Fe),Ir=_e,Dn()}catch(i){console.error(i)}}function Dn(){if(!_e||!Fe)return;const i=Math.PI/180,t=new U0().multiplyMatrices(new U0().makeRotationY(ot.omega*i),new U0().makeRotationZ(ot.chi*i)).multiply(new U0().makeRotationX(ot.phi*i));Vi.setRotationFromMatrix(t);const e=2*Math.PI/ot.wavelength,n=new I(-e,0,0);eo.position.x=ot.detectorDist;let s=0;const r=new U0().makeScale(0,0,0);Ur=[];for(let o=0;o<bn.length;o++){const a=bn[o],c=a.G_unrot.clone().applyMatrix4(t);if(Math.abs(c.distanceTo(n)-e)<ot.threshold){const l=new I(e,0,0).add(c).normalize();if(l.x>0){const d=ot.detectorDist/l.x,p=l.multiplyScalar(d),u=new U0().makeTranslation(ot.detectorDist,p.y,p.z).multiply(new U0().makeRotationY(Math.PI/2)).multiply(new U0().makeScale(a.scale,a.scale,a.scale));_e.setMatrixAt(s,u),Fe.setMatrixAt(s,u);const m=Math.min(1,c.length()/(2*e)),g=2*Math.asin(m)*(180/Math.PI);Ur[s]={h:a.h,k:a.k,l:a.l,theta2:g},s++}}}for(let o=s;o<Math.max(1,bn.length);o++)_e.setMatrixAt(o,r),Fe.setMatrixAt(o,r);_e.instanceMatrix.needsUpdate=!0,Fe.instanceMatrix.needsUpdate=!0,re[2].position.set(ot.detectorDist+350,0,0),re[2].lookAt(ot.detectorDist,0,0)}window.addEventListener("mousemove",i=>{if(!Ir)return;const t=window.innerWidth,e=t*(4/7),n=t*(2/7);if(i.clientX>=e&&i.clientX<=e+n){Ns.x=(i.clientX-e)/n*2-1,Ns.y=-(i.clientY/window.innerHeight)*2+1,Ma.setFromCamera(Ns,re[2]);const s=Ma.intersectObject(Ir);if(s.length>0){const r=s[0].instanceId,o=Ur[r];if(o){Ie.style.display="block",Ie.style.left=i.clientX+15+"px",Ie.style.top=i.clientY+15+"px",Ie.innerHTML=`<span style="color:#ffcc00; font-weight:bold;">hkl:</span> (${o.h}, ${o.k}, ${o.l})<br/><span style="color:#00ffff; font-weight:bold;">2&theta;:</span> ${o.theta2.toFixed(2)}&deg;`;return}}}Ie.style.display="none"});function s1(){requestAnimationFrame(s1),i1.forEach(n=>n.update()),ot.animateChi&&(ot.chi=(ot.chi+.4)%360,Dn());const i=window.innerWidth,t=window.innerHeight,e=i/7;Dt.clear();for(let n=0;n<3;n++)Dt.setViewport(e*2*n,0,e*2,t),Dt.setScissor(e*2*n,0,e*2,t),Dt.setScissorTest(!0),Dt.render(Pn[n],re[n])}window.addEventListener("resize",()=>{Dt.setSize(window.innerWidth,window.innerHeight);const i=window.innerWidth/7*2/window.innerHeight;re.forEach(t=>{t.aspect=i,t.updateProjectionMatrix()}),qi.domElement.style.width=`${window.innerWidth/7}px`});const qi=new to({container:document.getElementById("gui-container"),width:window.innerWidth/7}),no=qi.addFolder("Lattice & SG"),r1={};Lr.forEach(i=>{const t=jn[i];r1[`${t.number}: ${t.symbol_hm||"Unknown"}`]=Number(i)});no.add(ot,"sgNumber",r1).name("Space Group").onChange(Yi);["a","b","c","alpha","beta","gamma"].forEach(i=>no.add(ot,i,10,300).onChange(Yi));no.add(ot,"blockScale",1,7,1).name("Crystal Size").onChange(Yi);const o1=qi.addFolder("Goniometer (Rotation)");["omega","chi","phi"].forEach(i=>o1.add(ot,i,-180,180).listen().onChange(Dn));o1.add(ot,"animateChi").name("Auto-rotate Chi");const io=qi.addFolder("Experiment");io.add(ot,"wavelength",.5,3).name("X-ray λ (Å)").onChange(Dn);io.add(ot,"detectorDist",50,400).name("Detector Dist").onChange(Dn);io.add(ot,"threshold",.05,.5).step(.001).name("Spot Tolerance").onChange(Dn);Yi();s1();
