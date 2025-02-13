var nc=Object.defineProperty;var ic=(a,e,t)=>e in a?nc(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var go=(a,e,t)=>(ic(a,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xr="149",Xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sc=0,vo=1,rc=2,ol=1,oc=2,ki=3,ln=0,It=1,Pe=2,xn=0,hi=1,xo=2,_o=3,yo=4,ac=5,li=100,lc=101,cc=102,Mo=103,bo=104,hc=200,uc=201,dc=202,fc=203,al=204,ll=205,pc=206,mc=207,gc=208,vc=209,xc=210,_c=0,yc=1,Mc=2,Dr=3,bc=4,wc=5,Sc=6,Tc=7,cl=0,Ac=1,Ec=2,an=0,Cc=1,Lc=2,Pc=3,Rc=4,Dc=5,hl=300,pi=301,mi=302,Ir=303,Nr=304,Rs=306,gi=1e3,Ut=1001,Cs=1002,ht=1003,Fr=1004,Ss=1005,Et=1006,ul=1007,zn=1008,Un=1009,Ic=1010,Nc=1011,dl=1012,Fc=1013,Dn=1014,vn=1015,ji=1016,Oc=1017,zc=1018,ui=1020,Uc=1021,Bt=1023,Bc=1024,kc=1025,Fn=1026,vi=1027,Vc=1028,Gc=1029,Hc=1030,Wc=1031,jc=1033,js=33776,Xs=33777,qs=33778,Ys=33779,wo=35840,So=35841,To=35842,Ao=35843,Xc=36196,Eo=37492,Co=37496,Lo=37808,Po=37809,Ro=37810,Do=37811,Io=37812,No=37813,Fo=37814,Oo=37815,zo=37816,Uo=37817,Bo=37818,ko=37819,Vo=37820,Go=37821,Ks=36492,qc=36283,Ho=36284,Wo=36285,jo=36286,Xi=2300,xi=2301,Zs=2302,Xo=2400,qo=2401,Yo=2402,Yc=2500,Kc=0,fl=1,Or=2,Bn=3e3,Ve=3001,Zc=3200,$c=3201,qr=0,Jc=1,Xt="srgb",qi="srgb-linear",$s=7680,Qc=519,zr=35044,Ko="300 es",Ur=1035;class Gn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Zo=1234567;const Gi=Math.PI/180,Yi=180/Math.PI;function Wt(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[a&255]+vt[a>>8&255]+vt[a>>16&255]+vt[a>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function ut(a,e,t){return Math.max(e,Math.min(t,a))}function Yr(a,e){return(a%e+e)%e}function eh(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function th(a,e,t){return a!==e?(t-a)/(e-a):0}function Hi(a,e,t){return(1-t)*a+t*e}function nh(a,e,t,n){return Hi(a,e,1-Math.exp(-t*n))}function ih(a,e=1){return e-Math.abs(Yr(a,e*2)-e)}function sh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function rh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function oh(a,e){return a+Math.floor(Math.random()*(e-a+1))}function ah(a,e){return a+Math.random()*(e-a)}function lh(a){return a*(.5-Math.random())}function ch(a){a!==void 0&&(Zo=a);let e=Zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hh(a){return a*Gi}function uh(a){return a*Yi}function Br(a){return(a&a-1)===0&&a!==0}function pl(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ls(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function dh(a,e,t,n,i){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),u=r((e-n)/2),f=s((n-e)/2),g=r((n-e)/2);switch(i){case"XYX":a.set(o*h,l*d,l*u,o*c);break;case"YZY":a.set(l*u,o*h,l*d,o*c);break;case"ZXZ":a.set(l*d,l*u,o*h,o*c);break;case"XZX":a.set(o*h,l*g,l*f,o*c);break;case"YXY":a.set(l*f,o*h,l*g,o*c);break;case"ZYZ":a.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function on(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function qe(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}var Kr=Object.freeze({__proto__:null,DEG2RAD:Gi,RAD2DEG:Yi,ceilPowerOfTwo:pl,clamp:ut,damp:nh,degToRad:hh,denormalize:on,euclideanModulo:Yr,floorPowerOfTwo:Ls,generateUUID:Wt,inverseLerp:th,isPowerOfTwo:Br,lerp:Hi,mapLinear:eh,normalize:qe,pingpong:ih,radToDeg:uh,randFloat:ah,randFloatSpread:lh,randInt:oh,seededRandom:ch,setQuaternionFromProperEuler:dh,smootherstep:rh,smoothstep:sh});class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*i+e.x,this.y=s*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],m=i[0],p=i[3],v=i[6],b=i[1],_=i[4],S=i[7],y=i[2],L=i[5],R=i[8];return s[0]=r*m+o*b+l*y,s[3]=r*p+o*_+l*L,s[6]=r*v+o*S+l*R,s[1]=c*m+h*b+d*y,s[4]=c*p+h*_+d*L,s[7]=c*v+h*S+d*R,s[2]=u*m+f*b+g*y,s[5]=u*p+f*_+g*L,s[8]=u*v+f*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+i*s*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,u=o*l-h*s,f=c*s-r*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=d*m,e[1]=(i*c-h*n)*m,e[2]=(o*n-i*r)*m,e[3]=u*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-o*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(r*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-i*c,i*l,-i*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Js.makeScale(e,t)),this}rotate(e){return this.premultiply(Js.makeRotation(-e)),this}translate(e,t){return this.premultiply(Js.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Dt;function ml(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ki(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function On(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ts(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qs={[Xt]:{[qi]:On},[qi]:{[Xt]:Ts}},Mt={legacyMode:!0,get workingColorSpace(){return qi},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Qs[e]&&Qs[e][t]!==void 0){const n=Qs[e][t];return a.r=n(a.r),a.g=n(a.g),a.b=n(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},it={r:0,g:0,b:0},Vt={h:0,s:0,l:0},es={h:0,s:0,l:0};function er(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function ts(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Yr(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=er(r,s,e+1/3),this.g=er(r,s,e),this.b=er(r,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Xt){const n=gl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Mt.fromWorkingColorSpace(ts(this,it),e),ut(it.r*255,0,255)<<16^ut(it.g*255,0,255)<<8^ut(it.b*255,0,255)<<0}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(ts(this,it),t);const n=it.r,i=it.g,s=it.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(ts(this,it),t),e.r=it.r,e.g=it.g,e.b=it.b,e}getStyle(e=Xt){return Mt.fromWorkingColorSpace(ts(this,it),e),e!==Xt?`color(${e} ${it.r} ${it.g} ${it.b})`:`rgb(${it.r*255|0},${it.g*255|0},${it.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Vt),Vt.h+=e,Vt.s+=t,Vt.l+=n,this.setHSL(Vt.h,Vt.s,Vt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Vt),e.getHSL(es);const n=Hi(Vt.h,es.h,t),i=Hi(Vt.s,es.s,t),s=Hi(Vt.l,es.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=gl;let Yn;class vl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yn===void 0&&(Yn=Ki("canvas")),Yn.width=e.width,Yn.height=e.height;const n=Yn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Yn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=On(s[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(On(t[n]/255)*255):t[n]=On(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class xl{constructor(e=null){this.isSource=!0,this.uuid=Wt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(tr(i[r].image)):s.push(tr(i[r]))}else s=tr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function tr(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?vl.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class dt extends Gn{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=Ut,i=Ut,s=Et,r=zn,o=Bt,l=Un,c=dt.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Wt(),this.name="",this.source=new xl(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gi:e.x=e.x-Math.floor(e.x);break;case Ut:e.x=e.x<0?0:1;break;case Cs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gi:e.y=e.y-Math.floor(e.y);break;case Ut:e.y=e.y<0?0:1;break;case Cs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=hl;dt.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],m=l[2],p=l[6],v=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(f+1)/2,y=(v+1)/2,L=(h+u)/4,R=(d+m)/4,x=(g+p)/4;return _>S&&_>y?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=L/n,s=R/n):S>y?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=L/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=R/s,i=x/s),this.set(n,i,s,t),this}let b=Math.sqrt((p-g)*(p-g)+(d-m)*(d-m)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-m)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kn extends Gn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _l extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ph extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Ut,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,r,o){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[r+0],f=s[r+1],g=s[r+2],m=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=m;return}if(d!==m||l!==u||c!==f||h!==g){let p=1-o;const v=l*u+c*f+h*g+d*m,b=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const y=Math.sqrt(_),L=Math.atan2(y,v*b);p=Math.sin(p*L)/y,o=Math.sin(o*L)/y}const S=o*b;if(l=l*p+u*S,c=c*p+f*S,h=h*p+g*S,d=d*p+m*S,p===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[r],u=s[r+1],f=s[r+2],g=s[r+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),d=o(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(r-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+i*c-s*l,this._y=i*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-i*o,this._w=r*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,n=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=l*t+r*i-o*n,h=l*n+o*t-s*i,d=l*i+s*n-r*t,u=-s*t-r*n-o*i;return this.x=c*l+u*-s+h*-o-d*-r,this.y=h*l+u*-r+d*-s-c*-o,this.z=d*l+u*-o+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nr.copy(this).projectOnVector(e),this.sub(nr)}reflect(e){return this.sub(nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new T,$o=new Yt;class Mi{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],d=e[l+1],u=e[l+2];h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),d=e.getY(l),u=e.getZ(l);h<t&&(t=h),d<n&&(n=d),u<i&&(i=u),h>s&&(s=h),d>r&&(r=d),u>o&&(o=u)}return this.min.set(t,n,i),this.max.set(s,r,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)An.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else n.boundingBox===null&&n.computeBoundingBox(),ir.copy(n.boundingBox),ir.applyMatrix4(e.matrixWorld),this.union(ir);const i=e.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),ns.subVectors(this.max,Li),Kn.subVectors(e.a,Li),Zn.subVectors(e.b,Li),$n.subVectors(e.c,Li),hn.subVectors(Zn,Kn),un.subVectors($n,Zn),En.subVectors(Kn,$n);let t=[0,-hn.z,hn.y,0,-un.z,un.y,0,-En.z,En.y,hn.z,0,-hn.x,un.z,0,-un.x,En.z,0,-En.x,-hn.y,hn.x,0,-un.y,un.x,0,-En.y,En.x,0];return!sr(t,Kn,Zn,$n,ns)||(t=[1,0,0,0,1,0,0,0,1],!sr(t,Kn,Zn,$n,ns))?!1:(is.crossVectors(hn,un),t=[is.x,is.y,is.z],sr(t,Kn,Zn,$n,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return An.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(An).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new T,new T,new T,new T,new T,new T,new T,new T],An=new T,ir=new Mi,Kn=new T,Zn=new T,$n=new T,hn=new T,un=new T,En=new T,Li=new T,ns=new T,is=new T,Cn=new T;function sr(a,e,t,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Cn.fromArray(a,s);const o=i.x*Math.abs(Cn.x)+i.y*Math.abs(Cn.y)+i.z*Math.abs(Cn.z),l=e.dot(Cn),c=t.dot(Cn),h=n.dot(Cn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mh=new Mi,Pi=new T,rr=new T;class bi{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mh.setFromPoints(e).getCenter(n);let i=0;for(let s=0,r=e.length;s<r;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(rr)),this.expandByPoint(Pi.copy(e.center).sub(rr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qt=new T,or=new T,ss=new T,dn=new T,ar=new T,rs=new T,lr=new T;class Ds{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qt.copy(this.direction).multiplyScalar(t).add(this.origin),Qt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){or.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(or);const s=e.distanceTo(t)*.5,r=-this.direction.dot(ss),o=dn.dot(this.direction),l=-dn.dot(ss),c=dn.lengthSq(),h=Math.abs(1-r*r);let d,u,f,g;if(h>0)if(d=r*l-o,u=r*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const m=1/h;d*=m,u*=m,f=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(r*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=r>0?-s:s,d=Math.max(0,-(r*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ss).multiplyScalar(u).add(or),f}intersectSphere(e,t){Qt.subVectors(e.center,this.origin);const n=Qt.dot(this.direction),i=Qt.dot(Qt)-n*n,s=e.radius*e.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,r=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,r=(e.min.y-u.y)*h),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Qt)!==null}intersectTriangle(e,t,n,i,s){ar.subVectors(t,e),rs.subVectors(n,e),lr.crossVectors(ar,rs);let r=this.direction.dot(lr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;dn.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(dn,rs));if(l<0)return null;const c=o*this.direction.dot(ar.cross(dn));if(c<0||l+c>r)return null;const h=-o*dn.dot(lr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,r,o,l,c,h,d,u,f,g,m,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=l,v[2]=c,v[6]=h,v[10]=d,v[14]=u,v[3]=f,v[7]=g,v[11]=m,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Jn.setFromMatrixColumn(e,0).length(),s=1/Jn.setFromMatrixColumn(e,1).length(),r=1/Jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=r*h,f=r*d,g=o*h,m=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-m*c,t[9]=-o*l,t[2]=m-u*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,m=c*d;t[0]=u+m*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=f*o-g,t[6]=m+u*o,t[10]=r*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,m=c*d;t[0]=u-m*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*h,t[9]=m-u*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const u=r*h,f=r*d,g=o*h,m=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+m,t[1]=l*d,t[5]=m*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const u=r*l,f=r*c,g=o*l,m=o*c;t[0]=l*h,t[4]=m-u*d,t[8]=g*d+f,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-m*d}else if(e.order==="XZY"){const u=r*l,f=r*c,g=o*l,m=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+m,t[5]=r*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=m*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gh,e,vh)}lookAt(e,t,n){const i=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),fn.crossVectors(n,Pt),fn.lengthSq()===0&&(Math.abs(n.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),fn.crossVectors(n,Pt)),fn.normalize(),os.crossVectors(Pt,fn),i[0]=fn.x,i[4]=os.x,i[8]=Pt.x,i[1]=fn.y,i[5]=os.y,i[9]=Pt.y,i[2]=fn.z,i[6]=os.z,i[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],m=n[6],p=n[10],v=n[14],b=n[3],_=n[7],S=n[11],y=n[15],L=i[0],R=i[4],x=i[8],E=i[12],N=i[1],X=i[5],j=i[9],I=i[13],D=i[2],k=i[6],Y=i[10],Z=i[14],q=i[3],ee=i[7],Q=i[11],ue=i[15];return s[0]=r*L+o*N+l*D+c*q,s[4]=r*R+o*X+l*k+c*ee,s[8]=r*x+o*j+l*Y+c*Q,s[12]=r*E+o*I+l*Z+c*ue,s[1]=h*L+d*N+u*D+f*q,s[5]=h*R+d*X+u*k+f*ee,s[9]=h*x+d*j+u*Y+f*Q,s[13]=h*E+d*I+u*Z+f*ue,s[2]=g*L+m*N+p*D+v*q,s[6]=g*R+m*X+p*k+v*ee,s[10]=g*x+m*j+p*Y+v*Q,s[14]=g*E+m*I+p*Z+v*ue,s[3]=b*L+_*N+S*D+y*q,s[7]=b*R+_*X+S*k+y*ee,s[11]=b*x+_*j+S*Y+y*Q,s[15]=b*E+_*I+S*Z+y*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],m=e[7],p=e[11],v=e[15];return g*(+s*l*d-i*c*d-s*o*u+n*c*u+i*o*f-n*l*f)+m*(+t*l*f-t*c*u+s*r*u-i*r*f+i*c*h-s*l*h)+p*(+t*c*d-t*o*f-s*r*d+n*r*f+s*o*h-n*c*h)+v*(-i*o*h-t*l*d+t*o*u+i*r*d-n*r*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],m=e[13],p=e[14],v=e[15],b=d*p*c-m*u*c+m*l*f-o*p*f-d*l*v+o*u*v,_=g*u*c-h*p*c-g*l*f+r*p*f+h*l*v-r*u*v,S=h*m*c-g*d*c+g*o*f-r*m*f-h*o*v+r*d*v,y=g*d*l-h*m*l-g*o*u+r*m*u+h*o*p-r*d*p,L=t*b+n*_+i*S+s*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=b*R,e[1]=(m*u*s-d*p*s-m*i*f+n*p*f+d*i*v-n*u*v)*R,e[2]=(o*p*s-m*l*s+m*i*c-n*p*c-o*i*v+n*l*v)*R,e[3]=(d*l*s-o*u*s-d*i*c+n*u*c+o*i*f-n*l*f)*R,e[4]=_*R,e[5]=(h*p*s-g*u*s+g*i*f-t*p*f-h*i*v+t*u*v)*R,e[6]=(g*l*s-r*p*s-g*i*c+t*p*c+r*i*v-t*l*v)*R,e[7]=(r*u*s-h*l*s+h*i*c-t*u*c-r*i*f+t*l*f)*R,e[8]=S*R,e[9]=(g*d*s-h*m*s-g*n*f+t*m*f+h*n*v-t*d*v)*R,e[10]=(r*m*s-g*o*s+g*n*c-t*m*c-r*n*v+t*o*v)*R,e[11]=(h*o*s-r*d*s-h*n*c+t*d*c+r*n*f-t*o*f)*R,e[12]=y*R,e[13]=(h*m*i-g*d*i+g*n*u-t*m*u-h*n*p+t*d*p)*R,e[14]=(g*o*i-r*m*i-g*n*l+t*m*l+r*n*p-t*o*p)*R,e[15]=(r*d*i-h*o*i+h*n*l-t*d*l-r*n*u+t*o*u)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*r,0,c*l-i*o,h*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,r){return this.set(1,n,s,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,d=o+o,u=s*c,f=s*h,g=s*d,m=r*h,p=r*d,v=o*d,b=l*c,_=l*h,S=l*d,y=n.x,L=n.y,R=n.z;return i[0]=(1-(m+v))*y,i[1]=(f+S)*y,i[2]=(g-_)*y,i[3]=0,i[4]=(f-S)*L,i[5]=(1-(u+v))*L,i[6]=(p+b)*L,i[7]=0,i[8]=(g+_)*R,i[9]=(p-b)*R,i[10]=(1-(u+m))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Jn.set(i[0],i[1],i[2]).length();const r=Jn.set(i[4],i[5],i[6]).length(),o=Jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const c=1/s,h=1/r,d=1/o;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,i,s,r){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),u=-(r+s)/(r-s),f=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=u,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,r){const o=this.elements,l=1/(t-e),c=1/(n-i),h=1/(r-s),d=(t+e)*l,u=(n+i)*c,f=(r+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-u,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Jn=new T,Gt=new Re,gh=new T(0,0,0),vh=new T(1,1,1),fn=new T,os=new T,Pt=new T,Jo=new Re,Qo=new Yt;class Is{constructor(e=0,t=0,n=0,i=Is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qo.setFromEuler(this),this.setFromQuaternion(Qo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Is.DEFAULT_ORDER="XYZ";class Zr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const ea=new T,Qn=new Yt,en=new Re,as=new T,Ri=new T,_h=new T,yh=new Yt,ta=new T(1,0,0),na=new T(0,1,0),ia=new T(0,0,1),Mh={type:"added"},sa={type:"removed"};class Ze extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Wt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new T,t=new Is,n=new Yt,i=new T(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new Dt}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(ta,e)}rotateY(e){return this.rotateOnAxis(na,e)}rotateZ(e){return this.rotateOnAxis(ia,e)}translateOnAxis(e,t){return ea.copy(e).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ta,e)}translateY(e){return this.translateOnAxis(na,e)}translateZ(e){return this.translateOnAxis(ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Ri,as,this.up):en.lookAt(as,Ri,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(en),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Mh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(sa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(e,t);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),u=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ze.DEFAULT_UP=new T(0,1,0);Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new T,tn=new T,cr=new T,nn=new T,ei=new T,ti=new T,ra=new T,hr=new T,ur=new T,dr=new T;class rn{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ht.subVectors(e,t),i.cross(Ht);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ht.subVectors(i,t),tn.subVectors(n,t),cr.subVectors(e,t);const r=Ht.dot(Ht),o=Ht.dot(tn),l=Ht.dot(cr),c=tn.dot(tn),h=tn.dot(cr),d=r*c-o*o;if(d===0)return s.set(-2,-1,-1);const u=1/d,f=(c*l-o*h)*u,g=(r*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nn),nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getUV(e,t,n,i,s,r,o,l){return this.getBarycoord(e,t,n,i,nn),l.set(0,0),l.addScaledVector(s,nn.x),l.addScaledVector(r,nn.y),l.addScaledVector(o,nn.z),l}static isFrontFacing(e,t,n,i){return Ht.subVectors(n,t),tn.subVectors(e,t),Ht.cross(tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ht.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return rn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let r,o;ei.subVectors(i,n),ti.subVectors(s,n),hr.subVectors(e,n);const l=ei.dot(hr),c=ti.dot(hr);if(l<=0&&c<=0)return t.copy(n);ur.subVectors(e,i);const h=ei.dot(ur),d=ti.dot(ur);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(ei,r);dr.subVectors(e,s);const f=ei.dot(dr),g=ti.dot(dr);if(g>=0&&f<=g)return t.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ti,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return ra.subVectors(s,i),o=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(ra,o);const v=1/(p+m+u);return r=m*v,o=u*v,t.copy(n).addScaledVector(ei,r).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let bh=0;class jt extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=Wt(),this.name="",this.type="Material",this.blending=hi,this.side=ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=al,this.blendDst=ll,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hi&&(n.blending=this.blending),this.side!==ln&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=i(e.textures),r=i(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class In extends jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const nt=new T,ls=new fe;class ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix3(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyMatrix4(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.applyNormalMatrix(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nt.fromBufferAttribute(this,t),nt.transformDirection(e),this.setXYZ(t,nt.x,nt.y,nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=on(t,this.array)),t}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=on(t,this.array)),t}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=on(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=on(t,this.array)),t}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yl extends ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ml extends ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class pt extends ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wh=0;const Ot=new Re,fr=new Ze,ni=new T,Rt=new Mi,Di=new Mi,ct=new T;class Tt extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Wt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ml(e)?Ml:yl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Dt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Rt.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const n=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Rt.min,Di.min),Rt.expandByPoint(ct),ct.addVectors(Rt.max,Di.max),Rt.expandByPoint(ct)):(Rt.expandByPoint(Di.min),Rt.expandByPoint(Di.max))}Rt.getCenter(n);let i=0;for(let s=0,r=e.count;s<r;s++)ct.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ct));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ct.fromBufferAttribute(o,c),l&&(ni.fromBufferAttribute(e,c),ct.add(ni)),i=Math.max(i,n.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,r=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ft(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let N=0;N<o;N++)c[N]=new T,h[N]=new T;const d=new T,u=new T,f=new T,g=new fe,m=new fe,p=new fe,v=new T,b=new T;function _(N,X,j){d.fromArray(i,N*3),u.fromArray(i,X*3),f.fromArray(i,j*3),g.fromArray(r,N*2),m.fromArray(r,X*2),p.fromArray(r,j*2),u.sub(d),f.sub(d),m.sub(g),p.sub(g);const I=1/(m.x*p.y-p.x*m.y);isFinite(I)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(I),b.copy(f).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(I),c[N].add(v),c[X].add(v),c[j].add(v),h[N].add(b),h[X].add(b),h[j].add(b))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let N=0,X=S.length;N<X;++N){const j=S[N],I=j.start,D=j.count;for(let k=I,Y=I+D;k<Y;k+=3)_(n[k+0],n[k+1],n[k+2])}const y=new T,L=new T,R=new T,x=new T;function E(N){R.fromArray(s,N*3),x.copy(R);const X=c[N];y.copy(X),y.sub(R.multiplyScalar(R.dot(X))).normalize(),L.crossVectors(x,X);const I=L.dot(h[N])<0?-1:1;l[N*4]=y.x,l[N*4+1]=y.y,l[N*4+2]=y.z,l[N*4+3]=I}for(let N=0,X=S.length;N<X;++N){const j=S[N],I=j.start,D=j.count;for(let k=I,Y=I+D;k<Y;k+=3)E(n[k+0]),E(n[k+1]),E(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new T,s=new T,r=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),m=e.getX(u+1),p=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,p),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),h.subVectors(r,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let m=0,p=l.length;m<p;m++){o.isInterleavedBufferAttribute?f=l[m]*o.data.stride+o.offset:f=l[m]*h;for(let v=0;v<h;v++)u[g++]=c[f++]}return new ft(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const oa=new Re,ii=new Ds,pr=new bi,Ii=new T,Ni=new T,Fi=new T,mr=new T,cs=new T,hs=new fe,us=new fe,ds=new fe,gr=new T,fs=new T;class Ce extends Ze{constructor(e=new Tt,t=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(mr.fromBufferAttribute(d,e),r?cs.addScaledVector(mr,h):cs.addScaledVector(mr.sub(t),h))}t.add(cs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),e.ray.intersectsSphere(pr)===!1)||(oa.copy(s).invert(),ii.copy(e.ray).applyMatrix4(oa),n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,u=n.drawRange;if(o!==null)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const m=d[f],p=i[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,S=b;_<S;_+=3){const y=o.getX(_),L=o.getX(_+1),R=o.getX(_+2);r=ps(this,p,e,ii,c,h,y,L,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const f=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let m=f,p=g;m<p;m+=3){const v=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);r=ps(this,i,e,ii,c,h,v,b,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let f=0,g=d.length;f<g;f++){const m=d[f],p=i[m.materialIndex],v=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let _=v,S=b;_<S;_+=3){const y=_,L=_+1,R=_+2;r=ps(this,p,e,ii,c,h,y,L,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const f=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let m=f,p=g;m<p;m+=3){const v=m,b=m+1,_=m+2;r=ps(this,i,e,ii,c,h,v,b,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Sh(a,e,t,n,i,s,r,o){let l;if(e.side===It?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,e.side===ln,o),l===null)return null;fs.copy(o),fs.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(fs);return c<t.near||c>t.far?null:{distance:c,point:fs.clone(),object:a}}function ps(a,e,t,n,i,s,r,o,l){a.getVertexPosition(r,Ii),a.getVertexPosition(o,Ni),a.getVertexPosition(l,Fi);const c=Sh(a,e,t,n,Ii,Ni,Fi,gr);if(c){i&&(hs.fromBufferAttribute(i,r),us.fromBufferAttribute(i,o),ds.fromBufferAttribute(i,l),c.uv=rn.getUV(gr,Ii,Ni,Fi,hs,us,ds,new fe)),s&&(hs.fromBufferAttribute(s,r),us.fromBufferAttribute(s,o),ds.fromBufferAttribute(s,l),c.uv2=rn.getUV(gr,Ii,Ni,Fi,hs,us,ds,new fe));const h={a:r,b:o,c:l,normal:new T,materialIndex:0};rn.getNormal(Ii,Ni,Fi,h.normal),c.face=h}return c}class Ji extends Tt{constructor(e=1,t=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(d,2));function g(m,p,v,b,_,S,y,L,R,x,E){const N=S/R,X=y/x,j=S/2,I=y/2,D=L/2,k=R+1,Y=x+1;let Z=0,q=0;const ee=new T;for(let Q=0;Q<Y;Q++){const ue=Q*X-I;for(let B=0;B<k;B++){const K=B*N-j;ee[m]=K*b,ee[p]=ue*_,ee[v]=D,c.push(ee.x,ee.y,ee.z),ee[m]=0,ee[p]=0,ee[v]=L>0?1:-1,h.push(ee.x,ee.y,ee.z),d.push(B/R),d.push(1-Q/x),Z+=1}}for(let Q=0;Q<x;Q++)for(let ue=0;ue<R;ue++){const B=u+ue+k*Q,K=u+ue+k*(Q+1),ne=u+(ue+1)+k*(Q+1),se=u+(ue+1)+k*Q;l.push(B,K,se),l.push(K,ne,se),q+=6}o.addGroup(f,q,E),f+=q,u+=Z}}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _i(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(a){const e={};for(let t=0;t<a.length;t++){const n=_i(a[t]);for(const i in n)e[i]=n[i]}return e}function Th(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function bl(a){return a.getRenderTarget()===null&&a.outputEncoding===Ve?Xt:qi}const Ah={clone:_i,merge:wt};var Eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eh,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_i(e.uniforms),this.uniformsGroups=Th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let wl=class extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class St extends wl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class Lh extends Ze{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new St(si,ri,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new St(si,ri,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new St(si,ri,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new St(si,ri,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new St(si,ri,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new St(si,ri,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,u=e.xr.enabled;e.toneMapping=an,e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,r),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=u,n.texture.needsPMREMUpdate=!0}}class Sl extends dt{constructor(e,t,n,i,s,r,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:pi,super(e,t,n,i,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ph extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ji(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:xn});s.uniforms.tEquirect.value=t;const r=new Ce(i,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Et),new Lh(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(s)}}const vr=new T,Rh=new T,Dh=new Dt;class Ln{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=vr.subVectors(n,t).cross(Rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(vr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Dh.getNormalMatrix(e),i=this.coplanarPoint(vr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new bi,ms=new T;class $r{constructor(e=new Ln,t=new Ln,n=new Ln,i=new Ln,s=new Ln,r=new Ln){this.planes=[e,t,n,i,s,r]}set(e,t,n,i,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],h=n[6],d=n[7],u=n[8],f=n[9],g=n[10],m=n[11],p=n[12],v=n[13],b=n[14],_=n[15];return t[0].setComponents(o-i,d-l,m-u,_-p).normalize(),t[1].setComponents(o+i,d+l,m+u,_+p).normalize(),t[2].setComponents(o+s,d+c,m+f,_+v).normalize(),t[3].setComponents(o-s,d-c,m-f,_-v).normalize(),t[4].setComponents(o-r,d-h,m-g,_-b).normalize(),t[5].setComponents(o+r,d+h,m+g,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSprite(e){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ms.x=i.normal.x>0?e.max.x:e.min.x,ms.y=i.normal.y>0?e.max.y:e.min.y,ms.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tl(){let a=null,e=!1,t=null,n=null;function i(s,r){t(s,r),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Ih(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,u=c.usage,f=a.createBuffer();a.bindBuffer(h,f),a.bufferData(h,d,u),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:f,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const u=h.array,f=h.updateRange;a.bindBuffer(d,c),f.count===-1?a.bufferSubData(d,0,u):(t?a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count):a.bufferSubData(d,f.offset*u.BYTES_PER_ELEMENT,u.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const u=n.get(c);(!u||u.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:r,remove:o,update:l}}class cn extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],m=[],p=[];for(let v=0;v<h;v++){const b=v*u-r;for(let _=0;_<c;_++){const S=_*d-s;g.push(S,-b,0),m.push(0,0,1),p.push(_/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let b=0;b<o;b++){const _=b+c*v,S=b+c*(v+1),y=b+1+c*(v+1),L=b+1+c*v;f.push(_,S,L),f.push(S,y,L)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(p,2))}static fromJSON(e){return new cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Fh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kh="vec3 transformed = vec3( position );",Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Hh=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,eu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,tu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",au=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_u=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,wu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Su=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Lu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pu=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ou=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Yu=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ju=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,_d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Md=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Sd=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Td=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Ad=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Ed=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Cd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ld=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Pd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ud=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Bd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,kd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xd=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,qd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,$d=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ef=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,tf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,of=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,af=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:Nh,alphamap_pars_fragment:Fh,alphatest_fragment:Oh,alphatest_pars_fragment:zh,aomap_fragment:Uh,aomap_pars_fragment:Bh,begin_vertex:kh,beginnormal_vertex:Vh,bsdfs:Gh,iridescence_fragment:Hh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:jh,clipping_planes_pars_fragment:Xh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:Yh,color_fragment:Kh,color_pars_fragment:Zh,color_pars_vertex:$h,color_vertex:Jh,common:Qh,cube_uv_reflection_fragment:eu,defaultnormal_vertex:tu,displacementmap_pars_vertex:nu,displacementmap_vertex:iu,emissivemap_fragment:su,emissivemap_pars_fragment:ru,encodings_fragment:ou,encodings_pars_fragment:au,envmap_fragment:lu,envmap_common_pars_fragment:cu,envmap_pars_fragment:hu,envmap_pars_vertex:uu,envmap_physical_pars_fragment:wu,envmap_vertex:du,fog_vertex:fu,fog_pars_vertex:pu,fog_fragment:mu,fog_pars_fragment:gu,gradientmap_pars_fragment:vu,lightmap_fragment:xu,lightmap_pars_fragment:_u,lights_lambert_fragment:yu,lights_lambert_pars_fragment:Mu,lights_pars_begin:bu,lights_toon_fragment:Su,lights_toon_pars_fragment:Tu,lights_phong_fragment:Au,lights_phong_pars_fragment:Eu,lights_physical_fragment:Cu,lights_physical_pars_fragment:Lu,lights_fragment_begin:Pu,lights_fragment_maps:Ru,lights_fragment_end:Du,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Nu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Ou,map_fragment:zu,map_pars_fragment:Uu,map_particle_fragment:Bu,map_particle_pars_fragment:ku,metalnessmap_fragment:Vu,metalnessmap_pars_fragment:Gu,morphcolor_vertex:Hu,morphnormal_vertex:Wu,morphtarget_pars_vertex:ju,morphtarget_vertex:Xu,normal_fragment_begin:qu,normal_fragment_maps:Yu,normal_pars_fragment:Ku,normal_pars_vertex:Zu,normal_vertex:$u,normalmap_pars_fragment:Ju,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:ed,clearcoat_pars_fragment:td,iridescence_pars_fragment:nd,output_fragment:id,packing:sd,premultiplied_alpha_fragment:rd,project_vertex:od,dithering_fragment:ad,dithering_pars_fragment:ld,roughnessmap_fragment:cd,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:dd,shadowmap_vertex:fd,shadowmask_pars_fragment:pd,skinbase_vertex:md,skinning_pars_vertex:gd,skinning_vertex:vd,skinnormal_vertex:xd,specularmap_fragment:_d,specularmap_pars_fragment:yd,tonemapping_fragment:Md,tonemapping_pars_fragment:bd,transmission_fragment:wd,transmission_pars_fragment:Sd,uv_pars_fragment:Td,uv_pars_vertex:Ad,uv_vertex:Ed,uv2_pars_fragment:Cd,uv2_pars_vertex:Ld,uv2_vertex:Pd,worldpos_vertex:Rd,background_vert:Dd,background_frag:Id,backgroundCube_vert:Nd,backgroundCube_frag:Fd,cube_vert:Od,cube_frag:zd,depth_vert:Ud,depth_frag:Bd,distanceRGBA_vert:kd,distanceRGBA_frag:Vd,equirect_vert:Gd,equirect_frag:Hd,linedashed_vert:Wd,linedashed_frag:jd,meshbasic_vert:Xd,meshbasic_frag:qd,meshlambert_vert:Yd,meshlambert_frag:Kd,meshmatcap_vert:Zd,meshmatcap_frag:$d,meshnormal_vert:Jd,meshnormal_frag:Qd,meshphong_vert:ef,meshphong_frag:tf,meshphysical_vert:nf,meshphysical_frag:sf,meshtoon_vert:rf,meshtoon_frag:of,points_vert:af,points_frag:lf,shadow_vert:cf,shadow_frag:hf,sprite_vert:uf,sprite_frag:df},ie={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},qt={basic:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:wt([ie.points,ie.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:wt([ie.common,ie.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:wt([ie.sprite,ie.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:wt([ie.common,ie.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:wt([ie.lights,ie.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};qt.physical={uniforms:wt([qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const gs={r:0,b:0,g:0};function ff(a,e,t,n,i,s,r){const o=new Se(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(p,v){let b=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const S=a.xr,y=S.getSession&&S.getSession();y&&y.environmentBlendMode==="additive"&&(_=null),_===null?m(o,l):_&&_.isColor&&(m(_,1),b=!0),(a.autoClear||b)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Rs)?(h===void 0&&(h=new Ce(new Ji(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:_i(qt.backgroundCube.uniforms),vertexShader:qt.backgroundCube.vertexShader,fragmentShader:qt.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=_.encoding!==Ve,(d!==_||u!==_.version||f!==a.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ce(new cn(2,2),new _n({name:"BackgroundMaterial",uniforms:_i(qt.background.uniforms),vertexShader:qt.background.vertexShader,fragmentShader:qt.background.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==Ve,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==a.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,v){p.getRGB(gs,bl(a)),n.buffers.color.setClear(gs.r,gs.g,gs.b,v,r)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(o,l)},render:g}}function pf(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=p(null);let c=l,h=!1;function d(D,k,Y,Z,q){let ee=!1;if(r){const Q=m(Z,Y,k);c!==Q&&(c=Q,f(c.object)),ee=v(D,Z,Y,q),ee&&b(D,Z,Y,q)}else{const Q=k.wireframe===!0;(c.geometry!==Z.id||c.program!==Y.id||c.wireframe!==Q)&&(c.geometry=Z.id,c.program=Y.id,c.wireframe=Q,ee=!0)}q!==null&&t.update(q,34963),(ee||h)&&(h=!1,x(D,k,Y,Z),q!==null&&a.bindBuffer(34963,t.get(q).buffer))}function u(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function f(D){return n.isWebGL2?a.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?a.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function m(D,k,Y){const Z=Y.wireframe===!0;let q=o[D.id];q===void 0&&(q={},o[D.id]=q);let ee=q[k.id];ee===void 0&&(ee={},q[k.id]=ee);let Q=ee[Z];return Q===void 0&&(Q=p(u()),ee[Z]=Q),Q}function p(D){const k=[],Y=[],Z=[];for(let q=0;q<i;q++)k[q]=0,Y[q]=0,Z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:Z,object:D,attributes:{},index:null}}function v(D,k,Y,Z){const q=c.attributes,ee=k.attributes;let Q=0;const ue=Y.getAttributes();for(const B in ue)if(ue[B].location>=0){const ne=q[B];let se=ee[B];if(se===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),ne===void 0||ne.attribute!==se||se&&ne.data!==se.data)return!0;Q++}return c.attributesNum!==Q||c.index!==Z}function b(D,k,Y,Z){const q={},ee=k.attributes;let Q=0;const ue=Y.getAttributes();for(const B in ue)if(ue[B].location>=0){let ne=ee[B];ne===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor));const se={};se.attribute=ne,ne&&ne.data&&(se.data=ne.data),q[B]=se,Q++}c.attributes=q,c.attributesNum=Q,c.index=Z}function _(){const D=c.newAttributes;for(let k=0,Y=D.length;k<Y;k++)D[k]=0}function S(D){y(D,0)}function y(D,k){const Y=c.newAttributes,Z=c.enabledAttributes,q=c.attributeDivisors;Y[D]=1,Z[D]===0&&(a.enableVertexAttribArray(D),Z[D]=1),q[D]!==k&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),q[D]=k)}function L(){const D=c.newAttributes,k=c.enabledAttributes;for(let Y=0,Z=k.length;Y<Z;Y++)k[Y]!==D[Y]&&(a.disableVertexAttribArray(Y),k[Y]=0)}function R(D,k,Y,Z,q,ee){n.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(D,k,Y,q,ee):a.vertexAttribPointer(D,k,Y,Z,q,ee)}function x(D,k,Y,Z){if(n.isWebGL2===!1&&(D.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const q=Z.attributes,ee=Y.getAttributes(),Q=k.defaultAttributeValues;for(const ue in ee){const B=ee[ue];if(B.location>=0){let K=q[ue];if(K===void 0&&(ue==="instanceMatrix"&&D.instanceMatrix&&(K=D.instanceMatrix),ue==="instanceColor"&&D.instanceColor&&(K=D.instanceColor)),K!==void 0){const ne=K.normalized,se=K.itemSize,U=t.get(K);if(U===void 0)continue;const be=U.buffer,ge=U.type,pe=U.bytesPerElement;if(K.isInterleavedBufferAttribute){const le=K.data,He=le.stride,Ae=K.offset;if(le.isInstancedInterleavedBuffer){for(let _e=0;_e<B.locationSize;_e++)y(B.location+_e,le.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<B.locationSize;_e++)S(B.location+_e);a.bindBuffer(34962,be);for(let _e=0;_e<B.locationSize;_e++)R(B.location+_e,se/B.locationSize,ge,ne,He*pe,(Ae+se/B.locationSize*_e)*pe)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<B.locationSize;le++)y(B.location+le,K.meshPerAttribute);D.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<B.locationSize;le++)S(B.location+le);a.bindBuffer(34962,be);for(let le=0;le<B.locationSize;le++)R(B.location+le,se/B.locationSize,ge,ne,se*pe,se/B.locationSize*le*pe)}}else if(Q!==void 0){const ne=Q[ue];if(ne!==void 0)switch(ne.length){case 2:a.vertexAttrib2fv(B.location,ne);break;case 3:a.vertexAttrib3fv(B.location,ne);break;case 4:a.vertexAttrib4fv(B.location,ne);break;default:a.vertexAttrib1fv(B.location,ne)}}}}L()}function E(){j();for(const D in o){const k=o[D];for(const Y in k){const Z=k[Y];for(const q in Z)g(Z[q].object),delete Z[q];delete k[Y]}delete o[D]}}function N(D){if(o[D.id]===void 0)return;const k=o[D.id];for(const Y in k){const Z=k[Y];for(const q in Z)g(Z[q].object),delete Z[q];delete k[Y]}delete o[D.id]}function X(D){for(const k in o){const Y=o[k];if(Y[D.id]===void 0)continue;const Z=Y[D.id];for(const q in Z)g(Z[q].object),delete Z[q];delete Y[D.id]}}function j(){I(),h=!0,c!==l&&(c=l,f(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:N,releaseStatesOfProgram:X,initAttributes:_,enableAttribute:S,disableUnusedAttributes:L}}function mf(a,e,t,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,d){if(d===0)return;let u,f;if(i)u=a,f="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[f](s,c,h,d),t.update(h,s,d)}this.setMode=r,this.render=o,this.renderInstances=l}function gf(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),u=a.getParameter(35660),f=a.getParameter(3379),g=a.getParameter(34076),m=a.getParameter(34921),p=a.getParameter(36347),v=a.getParameter(36348),b=a.getParameter(36349),_=u>0,S=r||e.has("OES_texture_float"),y=_&&S,L=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:y,maxSamples:L}}function vf(a){const e=this;let t=null,n=0,i=!1,s=!1;const r=new Ln,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,m=d.clipIntersection,p=d.clipShadows,v=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const b=s?0:n,_=b*4;let S=v.clippingState||null;l.value=S,S=h(g,u,_,f);for(let y=0;y!==_;++y)S[y]=t[y];v.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const m=d!==null?d.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const v=f+m*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<v)&&(p=new Float32Array(v));for(let _=0,S=f;_!==m;++_,S+=4)r.copy(d[_]).applyMatrix4(b,o),r.normal.toArray(p,S),p[S+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function xf(a){let e=new WeakMap;function t(r,o){return o===Ir?r.mapping=pi:o===Nr&&(r.mapping=mi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===Ir||o===Nr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ph(l.height/2);return c.fromEquirectangularTexture(a,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Jr extends wl{constructor(e=-1,t=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ci=4,aa=[.125,.215,.35,.446,.526,.582],Rn=20,xr=new Jr,la=new Se;let _r=null;const Pn=(1+Math.sqrt(5))/2,ai=1/Pn,ca=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Pn,ai),new T(0,Pn,-ai),new T(ai,0,Pn),new T(-ai,0,Pn),new T(Pn,ai,0),new T(-Pn,ai,0)];class ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_r=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_r),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_r=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:ji,format:Bt,encoding:Bn,depthBuffer:!1},i=ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ua(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_f(s)),this._blurMaterial=yf(s,e,t)}return i}_compileMaterial(e){const t=new Ce(this._lodPlanes[0],e);this._renderer.compile(t,xr)}_sceneToCubeUV(e,t,n,i){const o=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(la),h.toneMapping=an,h.autoClear=!1;const f=new In({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new Ce(new Ji,f);let m=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,m=!0):(f.color.copy(la),m=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):b===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const _=this._cubeSize;vs(i,b*_,v>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===pi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=da());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ce(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ca[(i-1)%ca.length];this._blur(e,i-1,i,s,r)}t.autoClear=n}_blur(e,t,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",s),this._halfBlur(r,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ce(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Rn-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):Rn;p>Rn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rn}`);const v=[];let b=0;for(let R=0;R<Rn;++R){const x=R/m,E=Math.exp(-x*x/2);v.push(E),R===0?b+=E:R<p&&(b+=2*E)}for(let R=0;R<v.length;R++)v[R]=v[R]/b;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=v,u.latitudinal.value=r==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const S=this._sizeLods[i],y=3*S*(i>_-ci?i-_+ci:0),L=4*(this._cubeSize-S);vs(t,y,L,3*S,2*S),l.setRenderTarget(t),l.render(d,xr)}}function _f(a){const e=[],t=[],n=[];let i=a;const s=a-ci+1+aa.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);t.push(o);let l=1/o;r>a-ci?l=aa[r-a+ci-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,m=3,p=2,v=1,b=new Float32Array(m*g*f),_=new Float32Array(p*g*f),S=new Float32Array(v*g*f);for(let L=0;L<f;L++){const R=L%3*2/3-1,x=L>2?0:-1,E=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];b.set(E,m*g*L),_.set(u,p*g*L);const N=[L,L,L,L,L,L];S.set(N,v*g*L)}const y=new Tt;y.setAttribute("position",new ft(b,m)),y.setAttribute("uv",new ft(_,p)),y.setAttribute("faceIndex",new ft(S,v)),e.push(y),i>ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ua(a,e,t){const n=new kn(a,e,t);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function yf(a,e,t){const n=new Float32Array(Rn),i=new T(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function da(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function fa(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Qr(){return`

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
	`}function Mf(a){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ir||l===Nr,h=l===pi||l===mi;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new ha(a)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new ha(a));const u=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,u),o.addEventListener("dispose",s),u.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function bf(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wf(a,e,t,n){const i={},s=new WeakMap;function r(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],34962);const f=d.morphAttributes;for(const g in f){const m=f[g];for(let p=0,v=m.length;p<v;p++)e.update(m[p],34962)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let m=0;if(f!==null){const b=f.array;m=f.version;for(let _=0,S=b.length;_<S;_+=3){const y=b[_+0],L=b[_+1],R=b[_+2];u.push(y,L,L,R,R,y)}}else{const b=g.array;m=g.version;for(let _=0,S=b.length/3-1;_<S;_+=3){const y=_+0,L=_+1,R=_+2;u.push(y,L,L,R,R,y)}}const p=new(ml(u)?Ml:yl)(u,1);p.version=m;const v=s.get(d);v&&e.remove(v),s.set(d,p)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Sf(a,e,t,n){const i=n.isWebGL2;let s;function r(u){s=u}let o,l;function c(u){o=u.type,l=u.bytesPerElement}function h(u,f){a.drawElements(s,f,o,u*l),t.update(f,s,1)}function d(u,f,g){if(g===0)return;let m,p;if(i)m=a,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,o,u*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=d}function Tf(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Af(a,e){return a[0]-e[0]}function Ef(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Cf(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,r=new Ye,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d,u){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let v=s.get(h);if(v===void 0||v.count!==p){let Y=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",Y)};var g=Y;v!==void 0&&v.texture.dispose();const S=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],E=h.morphAttributes.color||[];let N=0;S===!0&&(N=1),y===!0&&(N=2),L===!0&&(N=3);let X=h.attributes.position.count*N,j=1;X>e.maxTextureSize&&(j=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const I=new Float32Array(X*j*4*p),D=new _l(I,X,j,p);D.type=vn,D.needsUpdate=!0;const k=N*4;for(let Z=0;Z<p;Z++){const q=R[Z],ee=x[Z],Q=E[Z],ue=X*j*4*Z;for(let B=0;B<q.count;B++){const K=B*k;S===!0&&(r.fromBufferAttribute(q,B),I[ue+K+0]=r.x,I[ue+K+1]=r.y,I[ue+K+2]=r.z,I[ue+K+3]=0),y===!0&&(r.fromBufferAttribute(ee,B),I[ue+K+4]=r.x,I[ue+K+5]=r.y,I[ue+K+6]=r.z,I[ue+K+7]=0),L===!0&&(r.fromBufferAttribute(Q,B),I[ue+K+8]=r.x,I[ue+K+9]=r.y,I[ue+K+10]=r.z,I[ue+K+11]=Q.itemSize===4?r.w:1)}}v={count:p,texture:D,size:new fe(X,j)},s.set(h,v),h.addEventListener("dispose",Y)}let b=0;for(let S=0;S<f.length;S++)b+=f[S];const _=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(a,"morphTargetBaseInfluence",_),u.getUniforms().setValue(a,"morphTargetInfluences",f),u.getUniforms().setValue(a,"morphTargetsTexture",v.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",v.size)}else{const m=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let y=0;y<m;y++)p[y]=[y,0];n[h.id]=p}for(let y=0;y<m;y++){const L=p[y];L[0]=y,L[1]=f[y]}p.sort(Ef);for(let y=0;y<8;y++)y<m&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Af);const v=h.morphAttributes.position,b=h.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const L=o[y],R=L[0],x=L[1];R!==Number.MAX_SAFE_INTEGER&&x?(v&&h.getAttribute("morphTarget"+y)!==v[R]&&h.setAttribute("morphTarget"+y,v[R]),b&&h.getAttribute("morphNormal"+y)!==b[R]&&h.setAttribute("morphNormal"+y,b[R]),i[y]=x,_+=x):(v&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),b&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const S=h.morphTargetsRelative?1:1-_;u.getUniforms().setValue(a,"morphTargetBaseInfluence",S),u.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function Lf(a,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Al=new dt,El=new _l,Cl=new ph,Ll=new Sl,pa=[],ma=[],ga=new Float32Array(16),va=new Float32Array(9),xa=new Float32Array(4);function wi(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=pa[i];if(s===void 0&&(s=new Float32Array(i),pa[i]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,a[r].toArray(s,o)}return s}function st(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function rt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Ns(a,e){let t=ma[e];t===void 0&&(t=new Int32Array(e),ma[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Pf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Rf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2fv(this.addr,e),rt(t,e)}}function Df(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;a.uniform3fv(this.addr,e),rt(t,e)}}function If(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4fv(this.addr,e),rt(t,e)}}function Nf(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;xa.set(n),a.uniformMatrix2fv(this.addr,!1,xa),rt(t,n)}}function Ff(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;va.set(n),a.uniformMatrix3fv(this.addr,!1,va),rt(t,n)}}function Of(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(st(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),rt(t,e)}else{if(st(t,n))return;ga.set(n),a.uniformMatrix4fv(this.addr,!1,ga),rt(t,n)}}function zf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Uf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2iv(this.addr,e),rt(t,e)}}function Bf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;a.uniform3iv(this.addr,e),rt(t,e)}}function kf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4iv(this.addr,e),rt(t,e)}}function Vf(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Gf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;a.uniform2uiv(this.addr,e),rt(t,e)}}function Hf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;a.uniform3uiv(this.addr,e),rt(t,e)}}function Wf(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;a.uniform4uiv(this.addr,e),rt(t,e)}}function jf(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Al,i)}function Xf(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cl,i)}function qf(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ll,i)}function Yf(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||El,i)}function Kf(a){switch(a){case 5126:return Pf;case 35664:return Rf;case 35665:return Df;case 35666:return If;case 35674:return Nf;case 35675:return Ff;case 35676:return Of;case 5124:case 35670:return zf;case 35667:case 35671:return Uf;case 35668:case 35672:return Bf;case 35669:case 35673:return kf;case 5125:return Vf;case 36294:return Gf;case 36295:return Hf;case 36296:return Wf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Yf}}function Zf(a,e){a.uniform1fv(this.addr,e)}function $f(a,e){const t=wi(e,this.size,2);a.uniform2fv(this.addr,t)}function Jf(a,e){const t=wi(e,this.size,3);a.uniform3fv(this.addr,t)}function Qf(a,e){const t=wi(e,this.size,4);a.uniform4fv(this.addr,t)}function ep(a,e){const t=wi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function tp(a,e){const t=wi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function np(a,e){const t=wi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function ip(a,e){a.uniform1iv(this.addr,e)}function sp(a,e){a.uniform2iv(this.addr,e)}function rp(a,e){a.uniform3iv(this.addr,e)}function op(a,e){a.uniform4iv(this.addr,e)}function ap(a,e){a.uniform1uiv(this.addr,e)}function lp(a,e){a.uniform2uiv(this.addr,e)}function cp(a,e){a.uniform3uiv(this.addr,e)}function hp(a,e){a.uniform4uiv(this.addr,e)}function up(a,e,t){const n=this.cache,i=e.length,s=Ns(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Al,s[r])}function dp(a,e,t){const n=this.cache,i=e.length,s=Ns(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Cl,s[r])}function fp(a,e,t){const n=this.cache,i=e.length,s=Ns(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Ll,s[r])}function pp(a,e,t){const n=this.cache,i=e.length,s=Ns(t,i);st(n,s)||(a.uniform1iv(this.addr,s),rt(n,s));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||El,s[r])}function mp(a){switch(a){case 5126:return Zf;case 35664:return $f;case 35665:return Jf;case 35666:return Qf;case 35674:return ep;case 35675:return tp;case 35676:return np;case 5124:case 35670:return ip;case 35667:case 35671:return sp;case 35668:case 35672:return rp;case 35669:case 35673:return op;case 5125:return ap;case 36294:return lp;case 36295:return cp;case 36296:return hp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return dp;case 35680:case 36300:case 36308:case 36293:return fp;case 36289:case 36303:case 36311:case 36292:return pp}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Kf(t.type)}}class vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=mp(t.type)}}class xp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const yr=/(\w+)(\])?(\[|\.)?/g;function _a(a,e){a.seq.push(e),a.map[e.id]=e}function _p(a,e,t){const n=a.name,i=n.length;for(yr.lastIndex=0;;){const s=yr.exec(n),r=yr.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){_a(t,c===void 0?new gp(o,a,e):new vp(o,a,e));break}else{let d=t.map[o];d===void 0&&(d=new xp(o),_a(t,d)),t=d}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),r=e.getUniformLocation(t,s.name);_p(s,r,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ya(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let yp=0;function Mp(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}function bp(a){switch(a){case Bn:return["Linear","( value )"];case Ve:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Ma(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Mp(a.getShaderSource(e),r)}else return i}function wp(a,e){const t=bp(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Sp(a,e){let t;switch(e){case Cc:t="Linear";break;case Lc:t="Reinhard";break;case Pc:t="OptimizedCineon";break;case Rc:t="ACESFilmic";break;case Dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tp(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vi).join(`
`)}function Ap(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ep(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[r]={type:s.type,location:a.getAttribLocation(e,r),locationSize:o}}return t}function Vi(a){return a!==""}function ba(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wa(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function kr(a){return a.replace(Cp,Lp)}function Lp(a,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return kr(t)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sa(a){return a.replace(Pp,Rp)}function Rp(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ta(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dp(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===ol?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Ip(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case pi:case mi:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Np(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function Fp(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case cl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ac:e="ENVMAP_BLENDING_MIX";break;case Ec:e="ENVMAP_BLENDING_ADD";break}return e}function Op(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zp(a,e,t,n){const i=a.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=Dp(t),c=Ip(t),h=Np(t),d=Fp(t),u=Op(t),f=t.isWebGL2?"":Tp(t),g=Ap(s),m=i.createProgram();let p,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(Vi).join(`
`),p.length>0&&(p+=`
`),v=[f,g].filter(Vi).join(`
`),v.length>0&&(v+=`
`)):(p=[Ta(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vi).join(`
`),v=[f,Ta(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==an?"#define TONE_MAPPING":"",t.toneMapping!==an?Ee.tonemapping_pars_fragment:"",t.toneMapping!==an?Sp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,wp("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vi).join(`
`)),r=kr(r),r=ba(r,t),r=wa(r,t),o=kr(o),o=ba(o,t),o=wa(o,t),r=Sa(r),o=Sa(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===Ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=b+p+r,S=b+v+o,y=ya(i,35633,_),L=ya(i,35632,S);if(i.attachShader(m,y),i.attachShader(m,L),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),a.debug.checkShaderErrors){const E=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(y).trim(),X=i.getShaderInfoLog(L).trim();let j=!0,I=!0;if(i.getProgramParameter(m,35714)===!1){j=!1;const D=Ma(i,y,"vertex"),k=Ma(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+D+`
`+k)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(N===""||X==="")&&(I=!1);I&&(this.diagnostics={runnable:j,programLog:E,vertexShader:{log:N,prefix:p},fragmentShader:{log:X,prefix:v}})}i.deleteShader(y),i.deleteShader(L);let R;this.getUniforms=function(){return R===void 0&&(R=new As(i,m)),R};let x;return this.getAttributes=function(){return x===void 0&&(x=Ep(i,m)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=yp++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=L,this}let Up=0;class Bp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kp(e),t.set(e,n)),n}}class kp{constructor(e){this.id=Up++,this.code=e,this.usedTimes=0}}function Vp(a,e,t,n,i,s,r){const o=new Zr,l=new Bp,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x,E,N,X,j){const I=X.fog,D=j.geometry,k=x.isMeshStandardMaterial?X.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||k),Z=Y&&Y.mapping===Rs?Y.image.height:null,q=g[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ee=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Q=ee!==void 0?ee.length:0;let ue=0;D.morphAttributes.position!==void 0&&(ue=1),D.morphAttributes.normal!==void 0&&(ue=2),D.morphAttributes.color!==void 0&&(ue=3);let B,K,ne,se;if(q){const He=qt[q];B=He.vertexShader,K=He.fragmentShader}else B=x.vertexShader,K=x.fragmentShader,l.update(x),ne=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const U=a.getRenderTarget(),be=x.alphaTest>0,ge=x.clearcoat>0,pe=x.iridescence>0;return{isWebGL2:h,shaderID:q,shaderName:x.type,vertexShader:B,fragmentShader:K,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:u,outputEncoding:U===null?a.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Bn,map:!!x.map,matcap:!!x.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:Z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Jc,tangentSpaceNormalMap:x.normalMapType===qr,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Ve,clearcoat:ge,clearcoatMap:ge&&!!x.clearcoatMap,clearcoatRoughnessMap:ge&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!x.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!x.iridescenceMap,iridescenceThicknessMap:pe&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===hi,alphaMap:!!x.alphaMap,alphaTest:be,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:a.shadowMap.enabled&&N.length>0,shadowMapType:a.shadowMap.type,toneMapping:x.toneMapped?a.toneMapping:an,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pe,flipSided:x.side===It,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(v(E,x),b(E,x),E.push(a.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function v(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.combine),x.push(E.vertexUvs),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.map&&o.enable(4),E.matcap&&o.enable(5),E.envMap&&o.enable(6),E.lightMap&&o.enable(7),E.aoMap&&o.enable(8),E.emissiveMap&&o.enable(9),E.bumpMap&&o.enable(10),E.normalMap&&o.enable(11),E.objectSpaceNormalMap&&o.enable(12),E.tangentSpaceNormalMap&&o.enable(13),E.clearcoat&&o.enable(14),E.clearcoatMap&&o.enable(15),E.clearcoatRoughnessMap&&o.enable(16),E.clearcoatNormalMap&&o.enable(17),E.iridescence&&o.enable(18),E.iridescenceMap&&o.enable(19),E.iridescenceThicknessMap&&o.enable(20),E.displacementMap&&o.enable(21),E.specularMap&&o.enable(22),E.roughnessMap&&o.enable(23),E.metalnessMap&&o.enable(24),E.gradientMap&&o.enable(25),E.alphaMap&&o.enable(26),E.alphaTest&&o.enable(27),E.vertexColors&&o.enable(28),E.vertexAlphas&&o.enable(29),E.vertexUvs&&o.enable(30),E.vertexTangents&&o.enable(31),E.uvsVertexOnly&&o.enable(32),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.physicallyCorrectLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.specularIntensityMap&&o.enable(15),E.specularColorMap&&o.enable(16),E.transmission&&o.enable(17),E.transmissionMap&&o.enable(18),E.thicknessMap&&o.enable(19),E.sheen&&o.enable(20),E.sheenColorMap&&o.enable(21),E.sheenRoughnessMap&&o.enable(22),E.decodeVideoTexture&&o.enable(23),E.opaque&&o.enable(24),x.push(o.mask)}function _(x){const E=g[x.type];let N;if(E){const X=qt[E];N=Ah.clone(X.uniforms)}else N=x.uniforms;return N}function S(x,E){let N;for(let X=0,j=c.length;X<j;X++){const I=c[X];if(I.cacheKey===E){N=I,++N.usedTimes;break}}return N===void 0&&(N=new zp(a,E,x,s),c.push(N)),N}function y(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function L(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:S,releaseProgram:y,releaseShaderCache:L,programs:c,dispose:R}}function Gp(){let a=new WeakMap;function e(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function t(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Hp(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Aa(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ea(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function r(d,u,f,g,m,p){let v=a[e];return v===void 0?(v={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:m,group:p},a[e]=v):(v.id=d.id,v.object=d,v.geometry=u,v.material=f,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function o(d,u,f,g,m,p){const v=r(d,u,f,g,m,p);f.transmission>0?n.push(v):f.transparent===!0?i.push(v):t.push(v)}function l(d,u,f,g,m,p){const v=r(d,u,f,g,m,p);f.transmission>0?n.unshift(v):f.transparent===!0?i.unshift(v):t.unshift(v)}function c(d,u){t.length>1&&t.sort(d||Hp),n.length>1&&n.sort(u||Aa),i.length>1&&i.sort(u||Aa)}function h(){for(let d=e,u=a.length;d<u;d++){const f=a[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function Wp(){let a=new WeakMap;function e(n,i){const s=a.get(n);let r;return s===void 0?(r=new Ea,a.set(n,[r])):i>=s.length?(r=new Ea,s.push(r)):r=s[i],r}function t(){a=new WeakMap}return{get:e,dispose:t}}function jp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Se};break;case"SpotLight":t={position:new T,direction:new T,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new T,halfWidth:new T,halfHeight:new T};break}return a[e.id]=t,t}}}function Xp(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let qp=0;function Yp(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Kp(a,e){const t=new jp,n=Xp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new T);const s=new T,r=new Re,o=new Re;function l(h,d){let u=0,f=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let m=0,p=0,v=0,b=0,_=0,S=0,y=0,L=0,R=0,x=0;h.sort(Yp);const E=d!==!0?Math.PI:1;for(let X=0,j=h.length;X<j;X++){const I=h[X],D=I.color,k=I.intensity,Y=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=D.r*k*E,f+=D.g*k*E,g+=D.b*k*E;else if(I.isLightProbe)for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],k);else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const ee=I.shadow,Q=n.get(I);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=q,m++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(D).multiplyScalar(k*E),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;const ee=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,ee.updateMatrices(I),I.castShadow&&x++),i.spotLightMatrix[v]=ee.matrix,I.castShadow){const Q=n.get(I);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=Z,L++}v++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(D).multiplyScalar(k),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=q,b++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity*E),q.distance=I.distance,q.decay=I.decay,I.castShadow){const ee=I.shadow,Q=n.get(I);Q.shadowBias=ee.bias,Q.shadowNormalBias=ee.normalBias,Q.shadowRadius=ee.radius,Q.shadowMapSize=ee.mapSize,Q.shadowCameraNear=ee.camera.near,Q.shadowCameraFar=ee.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=I.shadow.matrix,y++}i.point[p]=q,p++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(k*E),q.groundColor.copy(I.groundColor).multiplyScalar(k*E),i.hemi[_]=q,_++}}b>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==m||N.pointLength!==p||N.spotLength!==v||N.rectAreaLength!==b||N.hemiLength!==_||N.numDirectionalShadows!==S||N.numPointShadows!==y||N.numSpotShadows!==L||N.numSpotMaps!==R)&&(i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=L+R-x,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=x,N.directionalLength=m,N.pointLength=p,N.spotLength=v,N.rectAreaLength=b,N.hemiLength=_,N.numDirectionalShadows=S,N.numPointShadows=y,N.numSpotShadows=L,N.numSpotMaps=R,i.version=qp++)}function c(h,d){let u=0,f=0,g=0,m=0,p=0;const v=d.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){const S=h[b];if(S.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),u++}else if(S.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),y.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(v),g++}else if(S.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),o.identity(),r.copy(S.matrixWorld),r.premultiply(v),o.extractRotation(r),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(v),f++}else if(S.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:i}}function Ca(a,e){const t=new Kp(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function Zp(a,e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new Ca(a,e),t.set(s,[l])):r>=o.length?(l=new Ca(a,e),o.push(l)):l=o[r],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $p extends jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jp extends jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tm(a,e,t){let n=new $r;const i=new fe,s=new fe,r=new Ye,o=new $p({depthPacking:$c}),l=new Jp,c={},h=t.maxTextureSize,d={[ln]:It,[It]:ln,[Pe]:Pe},u=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Qp,fragmentShader:em}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Tt;g.setAttribute("position",new ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ce(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol,this.render=function(S,y,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const R=a.getRenderTarget(),x=a.getActiveCubeFace(),E=a.getActiveMipmapLevel(),N=a.state;N.setBlending(xn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let X=0,j=S.length;X<j;X++){const I=S[X],D=I.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",I,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;i.copy(D.mapSize);const k=D.getFrameExtents();if(i.multiply(k),s.copy(D.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/k.x),i.x=s.x*k.x,D.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/k.y),i.y=s.y*k.y,D.mapSize.y=s.y)),D.map===null){const Z=this.type!==ki?{minFilter:ht,magFilter:ht}:{};D.map=new kn(i.x,i.y,Z),D.map.texture.name=I.name+".shadowMap",D.camera.updateProjectionMatrix()}a.setRenderTarget(D.map),a.clear();const Y=D.getViewportCount();for(let Z=0;Z<Y;Z++){const q=D.getViewport(Z);r.set(s.x*q.x,s.y*q.y,s.x*q.z,s.y*q.w),N.viewport(r),D.updateMatrices(I,Z),n=D.getFrustum(),_(y,L,D.camera,I,this.type)}D.isPointLightShadow!==!0&&this.type===ki&&v(D,L),D.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(R,x,E)};function v(S,y){const L=e.update(m);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new kn(i.x,i.y)),u.uniforms.shadow_pass.value=S.map.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(y,null,L,u,m,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(y,null,L,f,m,null)}function b(S,y,L,R,x,E){let N=null;const X=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(X!==void 0)N=X;else if(N=L.isPointLight===!0?l:o,a.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const j=N.uuid,I=y.uuid;let D=c[j];D===void 0&&(D={},c[j]=D);let k=D[I];k===void 0&&(k=N.clone(),D[I]=k),N=k}return N.visible=y.visible,N.wireframe=y.wireframe,E===ki?N.side=y.shadowSide!==null?y.shadowSide:y.side:N.side=y.shadowSide!==null?y.shadowSide:d[y.side],N.alphaMap=y.alphaMap,N.alphaTest=y.alphaTest,N.map=y.map,N.clipShadows=y.clipShadows,N.clippingPlanes=y.clippingPlanes,N.clipIntersection=y.clipIntersection,N.displacementMap=y.displacementMap,N.displacementScale=y.displacementScale,N.displacementBias=y.displacementBias,N.wireframeLinewidth=y.wireframeLinewidth,N.linewidth=y.linewidth,L.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(L.matrixWorld),N.nearDistance=R,N.farDistance=x),N}function _(S,y,L,R,x){if(S.visible===!1)return;if(S.layers.test(y.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===ki)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const X=e.update(S),j=S.material;if(Array.isArray(j)){const I=X.groups;for(let D=0,k=I.length;D<k;D++){const Y=I[D],Z=j[Y.materialIndex];if(Z&&Z.visible){const q=b(S,Z,R,L.near,L.far,x);a.renderBufferDirect(L,null,X,q,S,Y)}}}else if(j.visible){const I=b(S,j,R,L.near,L.far,x);a.renderBufferDirect(L,null,X,I,S,null)}}const N=S.children;for(let X=0,j=N.length;X<j;X++)_(N[X],y,L,R,x)}}function nm(a,e,t){const n=t.isWebGL2;function i(){let P=!1;const G=new Ye;let $=null;const ce=new Ye(0,0,0,0);return{setMask:function(ve){$!==ve&&!P&&(a.colorMask(ve,ve,ve,ve),$=ve)},setLocked:function(ve){P=ve},setClear:function(ve,Ge,at,gt,bn){bn===!0&&(ve*=gt,Ge*=gt,at*=gt),G.set(ve,Ge,at,gt),ce.equals(G)===!1&&(a.clearColor(ve,Ge,at,gt),ce.copy(G))},reset:function(){P=!1,$=null,ce.set(-1,0,0,0)}}}function s(){let P=!1,G=null,$=null,ce=null;return{setTest:function(ve){ve?be(2929):ge(2929)},setMask:function(ve){G!==ve&&!P&&(a.depthMask(ve),G=ve)},setFunc:function(ve){if($!==ve){switch(ve){case _c:a.depthFunc(512);break;case yc:a.depthFunc(519);break;case Mc:a.depthFunc(513);break;case Dr:a.depthFunc(515);break;case bc:a.depthFunc(514);break;case wc:a.depthFunc(518);break;case Sc:a.depthFunc(516);break;case Tc:a.depthFunc(517);break;default:a.depthFunc(515)}$=ve}},setLocked:function(ve){P=ve},setClear:function(ve){ce!==ve&&(a.clearDepth(ve),ce=ve)},reset:function(){P=!1,G=null,$=null,ce=null}}}function r(){let P=!1,G=null,$=null,ce=null,ve=null,Ge=null,at=null,gt=null,bn=null;return{setTest:function(Ke){P||(Ke?be(2960):ge(2960))},setMask:function(Ke){G!==Ke&&!P&&(a.stencilMask(Ke),G=Ke)},setFunc:function(Ke,Zt,Ft){($!==Ke||ce!==Zt||ve!==Ft)&&(a.stencilFunc(Ke,Zt,Ft),$=Ke,ce=Zt,ve=Ft)},setOp:function(Ke,Zt,Ft){(Ge!==Ke||at!==Zt||gt!==Ft)&&(a.stencilOp(Ke,Zt,Ft),Ge=Ke,at=Zt,gt=Ft)},setLocked:function(Ke){P=Ke},setClear:function(Ke){bn!==Ke&&(a.clearStencil(Ke),bn=Ke)},reset:function(){P=!1,G=null,$=null,ce=null,ve=null,Ge=null,at=null,gt=null,bn=null}}}const o=new i,l=new s,c=new r,h=new WeakMap,d=new WeakMap;let u={},f={},g=new WeakMap,m=[],p=null,v=!1,b=null,_=null,S=null,y=null,L=null,R=null,x=null,E=!1,N=null,X=null,j=null,I=null,D=null;const k=a.getParameter(35661);let Y=!1,Z=0;const q=a.getParameter(7938);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=Z>=2);let ee=null,Q={};const ue=a.getParameter(3088),B=a.getParameter(2978),K=new Ye().fromArray(ue),ne=new Ye().fromArray(B);function se(P,G,$){const ce=new Uint8Array(4),ve=a.createTexture();a.bindTexture(P,ve),a.texParameteri(P,10241,9728),a.texParameteri(P,10240,9728);for(let Ge=0;Ge<$;Ge++)a.texImage2D(G+Ge,0,6408,1,1,0,6408,5121,ce);return ve}const U={};U[3553]=se(3553,3553,1),U[34067]=se(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(Dr),Qe(!1),_t(vo),be(2884),ot(xn);function be(P){u[P]!==!0&&(a.enable(P),u[P]=!0)}function ge(P){u[P]!==!1&&(a.disable(P),u[P]=!1)}function pe(P,G){return f[P]!==G?(a.bindFramebuffer(P,G),f[P]=G,n&&(P===36009&&(f[36160]=G),P===36160&&(f[36009]=G)),!0):!1}function le(P,G){let $=m,ce=!1;if(P)if($=g.get(G),$===void 0&&($=[],g.set(G,$)),P.isWebGLMultipleRenderTargets){const ve=P.texture;if($.length!==ve.length||$[0]!==36064){for(let Ge=0,at=ve.length;Ge<at;Ge++)$[Ge]=36064+Ge;$.length=ve.length,ce=!0}}else $[0]!==36064&&($[0]=36064,ce=!0);else $[0]!==1029&&($[0]=1029,ce=!0);ce&&(t.isWebGL2?a.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function He(P){return p!==P?(a.useProgram(P),p=P,!0):!1}const Ae={[li]:32774,[lc]:32778,[cc]:32779};if(n)Ae[Mo]=32775,Ae[bo]=32776;else{const P=e.get("EXT_blend_minmax");P!==null&&(Ae[Mo]=P.MIN_EXT,Ae[bo]=P.MAX_EXT)}const _e={[hc]:0,[uc]:1,[dc]:768,[al]:770,[xc]:776,[gc]:774,[pc]:772,[fc]:769,[ll]:771,[vc]:775,[mc]:773};function ot(P,G,$,ce,ve,Ge,at,gt){if(P===xn){v===!0&&(ge(3042),v=!1);return}if(v===!1&&(be(3042),v=!0),P!==ac){if(P!==b||gt!==E){if((_!==li||L!==li)&&(a.blendEquation(32774),_=li,L=li),gt)switch(P){case hi:a.blendFuncSeparate(1,771,1,771);break;case xo:a.blendFunc(1,1);break;case _o:a.blendFuncSeparate(0,769,0,1);break;case yo:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case hi:a.blendFuncSeparate(770,771,1,771);break;case xo:a.blendFunc(770,1);break;case _o:a.blendFuncSeparate(0,769,0,1);break;case yo:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,y=null,R=null,x=null,b=P,E=gt}return}ve=ve||G,Ge=Ge||$,at=at||ce,(G!==_||ve!==L)&&(a.blendEquationSeparate(Ae[G],Ae[ve]),_=G,L=ve),($!==S||ce!==y||Ge!==R||at!==x)&&(a.blendFuncSeparate(_e[$],_e[ce],_e[Ge],_e[at]),S=$,y=ce,R=Ge,x=at),b=P,E=!1}function mt(P,G){P.side===Pe?ge(2884):be(2884);let $=P.side===It;G&&($=!$),Qe($),P.blending===hi&&P.transparent===!1?ot(xn):ot(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ce=P.stencilWrite;c.setTest(ce),ce&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ke(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?be(32926):ge(32926)}function Qe(P){N!==P&&(P?a.frontFace(2304):a.frontFace(2305),N=P)}function _t(P){P!==sc?(be(2884),P!==X&&(P===vo?a.cullFace(1029):P===rc?a.cullFace(1028):a.cullFace(1032))):ge(2884),X=P}function $e(P){P!==j&&(Y&&a.lineWidth(P),j=P)}function ke(P,G,$){P?(be(32823),(I!==G||D!==$)&&(a.polygonOffset(G,$),I=G,D=$)):ge(32823)}function Nt(P){P?be(3089):ge(3089)}function At(P){P===void 0&&(P=33984+k-1),ee!==P&&(a.activeTexture(P),ee=P)}function A(P,G,$){$===void 0&&(ee===null?$=33984+k-1:$=ee);let ce=Q[$];ce===void 0&&(ce={type:void 0,texture:void 0},Q[$]=ce),(ce.type!==P||ce.texture!==G)&&(ee!==$&&(a.activeTexture($),ee=$),a.bindTexture(P,G||U[P]),ce.type=P,ce.texture=G)}function M(){const P=Q[ee];P!==void 0&&P.type!==void 0&&(a.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function V(){try{a.compressedTexImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{a.compressedTexImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{a.texSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{a.texSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ye(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function F(){try{a.texStorage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{a.texStorage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{a.texImage2D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{a.texImage3D.apply(a,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(P){K.equals(P)===!1&&(a.scissor(P.x,P.y,P.z,P.w),K.copy(P))}function de(P){ne.equals(P)===!1&&(a.viewport(P.x,P.y,P.z,P.w),ne.copy(P))}function Ie(P,G){let $=d.get(G);$===void 0&&($=new WeakMap,d.set(G,$));let ce=$.get(P);ce===void 0&&(ce=a.getUniformBlockIndex(G,P.name),$.set(P,ce))}function Ne(P,G){const ce=d.get(G).get(P);h.get(G)!==ce&&(a.uniformBlockBinding(G,ce,P.__bindingPointIndex),h.set(G,ce))}function je(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},ee=null,Q={},f={},g=new WeakMap,m=[],p=null,v=!1,b=null,_=null,S=null,y=null,L=null,R=null,x=null,E=!1,N=null,X=null,j=null,I=null,D=null,K.set(0,0,a.canvas.width,a.canvas.height),ne.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:be,disable:ge,bindFramebuffer:pe,drawBuffers:le,useProgram:He,setBlending:ot,setMaterial:mt,setFlipSided:Qe,setCullFace:_t,setLineWidth:$e,setPolygonOffset:ke,setScissorTest:Nt,activeTexture:At,bindTexture:A,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:J,texImage2D:he,texImage3D:oe,updateUBOMapping:Ie,uniformBlockBinding:Ne,texStorage2D:F,texStorage3D:ae,texSubImage2D:te,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:C,scissor:me,viewport:de,reset:je}}function im(a,e,t,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,M){return v?new OffscreenCanvas(A,M):Ki("canvas")}function _(A,M,V,J){let te=1;if((A.width>J||A.height>J)&&(te=J/Math.max(A.width,A.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const re=M?Ls:Math.floor,ye=re(te*A.width),C=re(te*A.height);m===void 0&&(m=b(ye,C));const F=V?b(ye,C):m;return F.width=ye,F.height=C,F.getContext("2d").drawImage(A,0,0,ye,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+C+")."),F}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Br(A.width)&&Br(A.height)}function y(A){return o?!1:A.wrapS!==Ut||A.wrapT!==Ut||A.minFilter!==ht&&A.minFilter!==Et}function L(A,M){return A.generateMipmaps&&M&&A.minFilter!==ht&&A.minFilter!==Et}function R(A){a.generateMipmap(A)}function x(A,M,V,J,te=!1){if(o===!1)return M;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let re=M;return M===6403&&(V===5126&&(re=33326),V===5131&&(re=33325),V===5121&&(re=33321)),M===33319&&(V===5126&&(re=33328),V===5131&&(re=33327),V===5121&&(re=33323)),M===6408&&(V===5126&&(re=34836),V===5131&&(re=34842),V===5121&&(re=J===Ve&&te===!1?35907:32856),V===32819&&(re=32854),V===32820&&(re=32855)),(re===33325||re===33326||re===33327||re===33328||re===34842||re===34836)&&e.get("EXT_color_buffer_float"),re}function E(A,M,V){return L(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==ht&&A.minFilter!==Et?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function N(A){return A===ht||A===Fr||A===Ss?9728:9729}function X(A){const M=A.target;M.removeEventListener("dispose",X),I(M),M.isVideoTexture&&g.delete(M)}function j(A){const M=A.target;M.removeEventListener("dispose",j),k(M)}function I(A){const M=n.get(A);if(M.__webglInit===void 0)return;const V=A.source,J=p.get(V);if(J){const te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(A),Object.keys(J).length===0&&p.delete(V)}n.remove(A)}function D(A){const M=n.get(A);a.deleteTexture(M.__webglTexture);const V=A.source,J=p.get(V);delete J[M.__cacheKey],r.memory.textures--}function k(A){const M=A.texture,V=n.get(A),J=n.get(M);if(J.__webglTexture!==void 0&&(a.deleteTexture(J.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)a.deleteFramebuffer(V.__webglFramebuffer[te]),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer[te]);else{if(a.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&a.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&a.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let te=0;te<V.__webglColorRenderbuffer.length;te++)V.__webglColorRenderbuffer[te]&&a.deleteRenderbuffer(V.__webglColorRenderbuffer[te]);V.__webglDepthRenderbuffer&&a.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,re=M.length;te<re;te++){const ye=n.get(M[te]);ye.__webglTexture&&(a.deleteTexture(ye.__webglTexture),r.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(A)}let Y=0;function Z(){Y=0}function q(){const A=Y;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),Y+=1,A}function ee(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.encoding),M.join()}function Q(A,M){const V=n.get(A);if(A.isVideoTexture&&Nt(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(V,A,M);return}}t.bindTexture(3553,V.__webglTexture,33984+M)}function ue(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ge(V,A,M);return}t.bindTexture(35866,V.__webglTexture,33984+M)}function B(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){ge(V,A,M);return}t.bindTexture(32879,V.__webglTexture,33984+M)}function K(A,M){const V=n.get(A);if(A.version>0&&V.__version!==A.version){pe(V,A,M);return}t.bindTexture(34067,V.__webglTexture,33984+M)}const ne={[gi]:10497,[Ut]:33071,[Cs]:33648},se={[ht]:9728,[Fr]:9984,[Ss]:9986,[Et]:9729,[ul]:9985,[zn]:9987};function U(A,M,V){if(V?(a.texParameteri(A,10242,ne[M.wrapS]),a.texParameteri(A,10243,ne[M.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,ne[M.wrapR]),a.texParameteri(A,10240,se[M.magFilter]),a.texParameteri(A,10241,se[M.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(M.wrapS!==Ut||M.wrapT!==Ut)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,N(M.magFilter)),a.texParameteri(A,10241,N(M.minFilter)),M.minFilter!==ht&&M.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ht||M.minFilter!==Ss&&M.minFilter!==zn||M.type===vn&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===ji&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(a.texParameterf(A,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function be(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",X));const J=M.source;let te=p.get(J);te===void 0&&(te={},p.set(J,te));const re=ee(M);if(re!==A.__cacheKey){te[re]===void 0&&(te[re]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,V=!0),te[re].usedTimes++;const ye=te[A.__cacheKey];ye!==void 0&&(te[A.__cacheKey].usedTimes--,ye.usedTimes===0&&D(M)),A.__cacheKey=re,A.__webglTexture=te[re].texture}return V}function ge(A,M,V){let J=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=35866),M.isData3DTexture&&(J=32879);const te=be(A,M),re=M.source;t.bindTexture(J,A.__webglTexture,33984+V);const ye=n.get(re);if(re.version!==ye.__version||te===!0){t.activeTexture(33984+V),a.pixelStorei(37440,M.flipY),a.pixelStorei(37441,M.premultiplyAlpha),a.pixelStorei(3317,M.unpackAlignment),a.pixelStorei(37443,0);const C=y(M)&&S(M.image)===!1;let F=_(M.image,C,!1,h);F=At(M,F);const ae=S(F)||o,he=s.convert(M.format,M.encoding);let oe=s.convert(M.type),me=x(M.internalFormat,he,oe,M.encoding,M.isVideoTexture);U(J,M,ae);let de;const Ie=M.mipmaps,Ne=o&&M.isVideoTexture!==!0,je=ye.__version===void 0||te===!0,P=E(M,F,ae);if(M.isDepthTexture)me=6402,o?M.type===vn?me=36012:M.type===Dn?me=33190:M.type===ui?me=35056:me=33189:M.type===vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fn&&me===6402&&M.type!==dl&&M.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Dn,oe=s.convert(M.type)),M.format===vi&&me===6402&&(me=34041,M.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=ui,oe=s.convert(M.type))),je&&(Ne?t.texStorage2D(3553,1,me,F.width,F.height):t.texImage2D(3553,0,me,F.width,F.height,0,he,oe,null));else if(M.isDataTexture)if(Ie.length>0&&ae){Ne&&je&&t.texStorage2D(3553,P,me,Ie[0].width,Ie[0].height);for(let G=0,$=Ie.length;G<$;G++)de=Ie[G],Ne?t.texSubImage2D(3553,G,0,0,de.width,de.height,he,oe,de.data):t.texImage2D(3553,G,me,de.width,de.height,0,he,oe,de.data);M.generateMipmaps=!1}else Ne?(je&&t.texStorage2D(3553,P,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,he,oe,F.data)):t.texImage2D(3553,0,me,F.width,F.height,0,he,oe,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&je&&t.texStorage3D(35866,P,me,Ie[0].width,Ie[0].height,F.depth);for(let G=0,$=Ie.length;G<$;G++)de=Ie[G],M.format!==Bt?he!==null?Ne?t.compressedTexSubImage3D(35866,G,0,0,0,de.width,de.height,F.depth,he,de.data,0,0):t.compressedTexImage3D(35866,G,me,de.width,de.height,F.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(35866,G,0,0,0,de.width,de.height,F.depth,he,oe,de.data):t.texImage3D(35866,G,me,de.width,de.height,F.depth,0,he,oe,de.data)}else{Ne&&je&&t.texStorage2D(3553,P,me,Ie[0].width,Ie[0].height);for(let G=0,$=Ie.length;G<$;G++)de=Ie[G],M.format!==Bt?he!==null?Ne?t.compressedTexSubImage2D(3553,G,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(3553,G,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(3553,G,0,0,de.width,de.height,he,oe,de.data):t.texImage2D(3553,G,me,de.width,de.height,0,he,oe,de.data)}else if(M.isDataArrayTexture)Ne?(je&&t.texStorage3D(35866,P,me,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,he,oe,F.data)):t.texImage3D(35866,0,me,F.width,F.height,F.depth,0,he,oe,F.data);else if(M.isData3DTexture)Ne?(je&&t.texStorage3D(32879,P,me,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,he,oe,F.data)):t.texImage3D(32879,0,me,F.width,F.height,F.depth,0,he,oe,F.data);else if(M.isFramebufferTexture){if(je)if(Ne)t.texStorage2D(3553,P,me,F.width,F.height);else{let G=F.width,$=F.height;for(let ce=0;ce<P;ce++)t.texImage2D(3553,ce,me,G,$,0,he,oe,null),G>>=1,$>>=1}}else if(Ie.length>0&&ae){Ne&&je&&t.texStorage2D(3553,P,me,Ie[0].width,Ie[0].height);for(let G=0,$=Ie.length;G<$;G++)de=Ie[G],Ne?t.texSubImage2D(3553,G,0,0,he,oe,de):t.texImage2D(3553,G,me,he,oe,de);M.generateMipmaps=!1}else Ne?(je&&t.texStorage2D(3553,P,me,F.width,F.height),t.texSubImage2D(3553,0,0,0,he,oe,F)):t.texImage2D(3553,0,me,he,oe,F);L(M,ae)&&R(J),ye.__version=re.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,V){if(M.image.length!==6)return;const J=be(A,M),te=M.source;t.bindTexture(34067,A.__webglTexture,33984+V);const re=n.get(te);if(te.version!==re.__version||J===!0){t.activeTexture(33984+V),a.pixelStorei(37440,M.flipY),a.pixelStorei(37441,M.premultiplyAlpha),a.pixelStorei(3317,M.unpackAlignment),a.pixelStorei(37443,0);const ye=M.isCompressedTexture||M.image[0].isCompressedTexture,C=M.image[0]&&M.image[0].isDataTexture,F=[];for(let G=0;G<6;G++)!ye&&!C?F[G]=_(M.image[G],!1,!0,c):F[G]=C?M.image[G].image:M.image[G],F[G]=At(M,F[G]);const ae=F[0],he=S(ae)||o,oe=s.convert(M.format,M.encoding),me=s.convert(M.type),de=x(M.internalFormat,oe,me,M.encoding),Ie=o&&M.isVideoTexture!==!0,Ne=re.__version===void 0||J===!0;let je=E(M,ae,he);U(34067,M,he);let P;if(ye){Ie&&Ne&&t.texStorage2D(34067,je,de,ae.width,ae.height);for(let G=0;G<6;G++){P=F[G].mipmaps;for(let $=0;$<P.length;$++){const ce=P[$];M.format!==Bt?oe!==null?Ie?t.compressedTexSubImage2D(34069+G,$,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+G,$,de,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+G,$,0,0,ce.width,ce.height,oe,me,ce.data):t.texImage2D(34069+G,$,de,ce.width,ce.height,0,oe,me,ce.data)}}}else{P=M.mipmaps,Ie&&Ne&&(P.length>0&&je++,t.texStorage2D(34067,je,de,F[0].width,F[0].height));for(let G=0;G<6;G++)if(C){Ie?t.texSubImage2D(34069+G,0,0,0,F[G].width,F[G].height,oe,me,F[G].data):t.texImage2D(34069+G,0,de,F[G].width,F[G].height,0,oe,me,F[G].data);for(let $=0;$<P.length;$++){const ve=P[$].image[G].image;Ie?t.texSubImage2D(34069+G,$+1,0,0,ve.width,ve.height,oe,me,ve.data):t.texImage2D(34069+G,$+1,de,ve.width,ve.height,0,oe,me,ve.data)}}else{Ie?t.texSubImage2D(34069+G,0,0,0,oe,me,F[G]):t.texImage2D(34069+G,0,de,oe,me,F[G]);for(let $=0;$<P.length;$++){const ce=P[$];Ie?t.texSubImage2D(34069+G,$+1,0,0,oe,me,ce.image[G]):t.texImage2D(34069+G,$+1,de,oe,me,ce.image[G])}}}L(M,he)&&R(34067),re.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function le(A,M,V,J,te){const re=s.convert(V.format,V.encoding),ye=s.convert(V.type),C=x(V.internalFormat,re,ye,V.encoding);n.get(M).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,C,M.width,M.height,M.depth,0,re,ye,null):t.texImage2D(te,0,C,M.width,M.height,0,re,ye,null)),t.bindFramebuffer(36160,A),ke(M)?u.framebufferTexture2DMultisampleEXT(36160,J,te,n.get(V).__webglTexture,0,$e(M)):(te===3553||te>=34069&&te<=34074)&&a.framebufferTexture2D(36160,J,te,n.get(V).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(A,M,V){if(a.bindRenderbuffer(36161,A),M.depthBuffer&&!M.stencilBuffer){let J=33189;if(V||ke(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===vn?J=36012:te.type===Dn&&(J=33190));const re=$e(M);ke(M)?u.renderbufferStorageMultisampleEXT(36161,re,J,M.width,M.height):a.renderbufferStorageMultisample(36161,re,J,M.width,M.height)}else a.renderbufferStorage(36161,J,M.width,M.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(M.depthBuffer&&M.stencilBuffer){const J=$e(M);V&&ke(M)===!1?a.renderbufferStorageMultisample(36161,J,35056,M.width,M.height):ke(M)?u.renderbufferStorageMultisampleEXT(36161,J,35056,M.width,M.height):a.renderbufferStorage(36161,34041,M.width,M.height),a.framebufferRenderbuffer(36160,33306,36161,A)}else{const J=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<J.length;te++){const re=J[te],ye=s.convert(re.format,re.encoding),C=s.convert(re.type),F=x(re.internalFormat,ye,C,re.encoding),ae=$e(M);V&&ke(M)===!1?a.renderbufferStorageMultisample(36161,ae,F,M.width,M.height):ke(M)?u.renderbufferStorageMultisampleEXT(36161,ae,F,M.width,M.height):a.renderbufferStorage(36161,F,M.width,M.height)}}a.bindRenderbuffer(36161,null)}function Ae(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q(M.depthTexture,0);const J=n.get(M.depthTexture).__webglTexture,te=$e(M);if(M.depthTexture.format===Fn)ke(M)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,J,0,te):a.framebufferTexture2D(36160,36096,3553,J,0);else if(M.depthTexture.format===vi)ke(M)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,J,0,te):a.framebufferTexture2D(36160,33306,3553,J,0);else throw new Error("Unknown depthTexture format")}function _e(A){const M=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(36160,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=a.createRenderbuffer(),He(M.__webglDepthbuffer[J],A,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=a.createRenderbuffer(),He(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function ot(A,M,V){const J=n.get(A);M!==void 0&&le(J.__webglFramebuffer,A,A.texture,36064,3553),V!==void 0&&_e(A)}function mt(A){const M=A.texture,V=n.get(A),J=n.get(M);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=a.createTexture()),J.__version=M.version,r.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,re=A.isWebGLMultipleRenderTargets===!0,ye=S(A)||o;if(te){V.__webglFramebuffer=[];for(let C=0;C<6;C++)V.__webglFramebuffer[C]=a.createFramebuffer()}else{if(V.__webglFramebuffer=a.createFramebuffer(),re)if(i.drawBuffers){const C=A.texture;for(let F=0,ae=C.length;F<ae;F++){const he=n.get(C[F]);he.__webglTexture===void 0&&(he.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ke(A)===!1){const C=re?M:[M];V.__webglMultisampledFramebuffer=a.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,V.__webglMultisampledFramebuffer);for(let F=0;F<C.length;F++){const ae=C[F];V.__webglColorRenderbuffer[F]=a.createRenderbuffer(),a.bindRenderbuffer(36161,V.__webglColorRenderbuffer[F]);const he=s.convert(ae.format,ae.encoding),oe=s.convert(ae.type),me=x(ae.internalFormat,he,oe,ae.encoding,A.isXRRenderTarget===!0),de=$e(A);a.renderbufferStorageMultisample(36161,de,me,A.width,A.height),a.framebufferRenderbuffer(36160,36064+F,36161,V.__webglColorRenderbuffer[F])}a.bindRenderbuffer(36161,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=a.createRenderbuffer(),He(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,J.__webglTexture),U(34067,M,ye);for(let C=0;C<6;C++)le(V.__webglFramebuffer[C],A,M,36064,34069+C);L(M,ye)&&R(34067),t.unbindTexture()}else if(re){const C=A.texture;for(let F=0,ae=C.length;F<ae;F++){const he=C[F],oe=n.get(he);t.bindTexture(3553,oe.__webglTexture),U(3553,he,ye),le(V.__webglFramebuffer,A,he,36064+F,3553),L(he,ye)&&R(3553)}t.unbindTexture()}else{let C=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?C=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,J.__webglTexture),U(C,M,ye),le(V.__webglFramebuffer,A,M,36064,C),L(M,ye)&&R(C),t.unbindTexture()}A.depthBuffer&&_e(A)}function Qe(A){const M=S(A)||o,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let J=0,te=V.length;J<te;J++){const re=V[J];if(L(re,M)){const ye=A.isWebGLCubeRenderTarget?34067:3553,C=n.get(re).__webglTexture;t.bindTexture(ye,C),R(ye),t.unbindTexture()}}}function _t(A){if(o&&A.samples>0&&ke(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,J=A.height;let te=16384;const re=[],ye=A.stencilBuffer?33306:36096,C=n.get(A),F=A.isWebGLMultipleRenderTargets===!0;if(F)for(let ae=0;ae<M.length;ae++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ae,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ae,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let ae=0;ae<M.length;ae++){re.push(36064+ae),A.depthBuffer&&re.push(ye);const he=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(he===!1&&(A.depthBuffer&&(te|=256),A.stencilBuffer&&(te|=1024)),F&&a.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[ae]),he===!0&&(a.invalidateFramebuffer(36008,[ye]),a.invalidateFramebuffer(36009,[ye])),F){const oe=n.get(M[ae]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,oe,0)}a.blitFramebuffer(0,0,V,J,0,0,V,J,te,9728),f&&a.invalidateFramebuffer(36008,re)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ae=0;ae<M.length;ae++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+ae,36161,C.__webglColorRenderbuffer[ae]);const he=n.get(M[ae]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),a.framebufferTexture2D(36009,36064+ae,3553,he,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function $e(A){return Math.min(d,A.samples)}function ke(A){const M=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Nt(A){const M=r.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function At(A,M){const V=A.encoding,J=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ur||V!==Bn&&(V===Ve?o===!1?e.has("EXT_sRGB")===!0&&J===Bt?(A.format=Ur,A.minFilter=Et,A.generateMipmaps=!1):M=vl.sRGBToLinear(M):(J!==Bt||te!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",V)),M}this.allocateTextureUnit=q,this.resetTextureUnits=Z,this.setTexture2D=Q,this.setTexture2DArray=ue,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=ot,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ke}function sm(a,e,t){const n=t.isWebGL2;function i(s,r=null){let o;if(s===Un)return 5121;if(s===Oc)return 32819;if(s===zc)return 32820;if(s===Ic)return 5120;if(s===Nc)return 5122;if(s===dl)return 5123;if(s===Fc)return 5124;if(s===Dn)return 5125;if(s===vn)return 5126;if(s===ji)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Uc)return 6406;if(s===Bt)return 6408;if(s===Bc)return 6409;if(s===kc)return 6410;if(s===Fn)return 6402;if(s===vi)return 34041;if(s===Ur)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Vc)return 6403;if(s===Gc)return 36244;if(s===Hc)return 33319;if(s===Wc)return 33320;if(s===jc)return 36249;if(s===js||s===Xs||s===qs||s===Ys)if(r===Ve)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wo||s===So||s===To||s===Ao)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===wo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===So)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===To)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ao)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Eo||s===Co)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Eo)return r===Ve?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Co)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Lo||s===Po||s===Ro||s===Do||s===Io||s===No||s===Fo||s===Oo||s===zo||s===Uo||s===Bo||s===ko||s===Vo||s===Go)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Lo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Po)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ro)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Do)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Io)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===No)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Oo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Uo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ko)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vo)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Go)return r===Ve?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ks)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ks)return r===Ve?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===qc||s===Ho||s===Wo||s===jo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ks)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Ho)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ui?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class rm extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Nn extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const om={type:"move"};class Mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),v=this._getHandJoint(c,m);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(om)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class am extends dt{constructor(e,t,n,i,s,r,o,l,c,h){if(h=h!==void 0?h:Fn,h!==Fn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Fn&&(n=Dn),n===void 0&&h===vi&&(n=ui),super(null,i,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=l!==void 0?l:ht,this.flipY=!1,this.generateMipmaps=!1}}class lm extends Gn{constructor(e,t){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const m=t.getContextAttributes();let p=null,v=null;const b=[],_=[],S=new Set,y=new Map,L=new St;L.layers.enable(1),L.viewport=new Ye;const R=new St;R.layers.enable(2),R.viewport=new Ye;const x=[L,R],E=new rm;E.layers.enable(1),E.layers.enable(2);let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let K=b[B];return K===void 0&&(K=new Mr,b[B]=K),K.getTargetRaySpace()},this.getControllerGrip=function(B){let K=b[B];return K===void 0&&(K=new Mr,b[B]=K),K.getGripSpace()},this.getHand=function(B){let K=b[B];return K===void 0&&(K=new Mr,b[B]=K),K.getHandSpace()};function j(B){const K=_.indexOf(B.inputSource);if(K===-1)return;const ne=b[K];ne!==void 0&&ne.dispatchEvent({type:B.type,data:B.inputSource})}function I(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",I),i.removeEventListener("inputsourceschange",D);for(let B=0;B<b.length;B++){const K=_[B];K!==null&&(_[B]=null,b[B].disconnect(K))}N=null,X=null,e.setRenderTarget(p),f=null,u=null,d=null,i=null,v=null,ue.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",I),i.addEventListener("inputsourceschange",D),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:f}),v=new kn(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:Un,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let K=null,ne=null,se=null;m.depth&&(se=m.stencil?35056:33190,K=m.stencil?vi:Fn,ne=m.stencil?ui:Dn);const U={colorFormat:32856,depthFormat:se,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(U),i.updateRenderState({layers:[u]}),v=new kn(u.textureWidth,u.textureHeight,{format:Bt,type:Un,depthTexture:new am(u.textureWidth,u.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const be=e.properties.get(v);be.__ignoreDepthValues=u.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function D(B){for(let K=0;K<B.removed.length;K++){const ne=B.removed[K],se=_.indexOf(ne);se>=0&&(_[se]=null,b[se].disconnect(ne))}for(let K=0;K<B.added.length;K++){const ne=B.added[K];let se=_.indexOf(ne);if(se===-1){for(let be=0;be<b.length;be++)if(be>=_.length){_.push(ne),se=be;break}else if(_[be]===null){_[be]=ne,se=be;break}if(se===-1)break}const U=b[se];U&&U.connect(ne)}}const k=new T,Y=new T;function Z(B,K,ne){k.setFromMatrixPosition(K.matrixWorld),Y.setFromMatrixPosition(ne.matrixWorld);const se=k.distanceTo(Y),U=K.projectionMatrix.elements,be=ne.projectionMatrix.elements,ge=U[14]/(U[10]-1),pe=U[14]/(U[10]+1),le=(U[9]+1)/U[5],He=(U[9]-1)/U[5],Ae=(U[8]-1)/U[0],_e=(be[8]+1)/be[0],ot=ge*Ae,mt=ge*_e,Qe=se/(-Ae+_e),_t=Qe*-Ae;K.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(_t),B.translateZ(Qe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const $e=ge+Qe,ke=pe+Qe,Nt=ot-_t,At=mt+(se-_t),A=le*pe/ke*$e,M=He*pe/ke*$e;B.projectionMatrix.makePerspective(Nt,At,A,M,$e,ke)}function q(B,K){K===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(K.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;E.near=R.near=L.near=B.near,E.far=R.far=L.far=B.far,(N!==E.near||X!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),N=E.near,X=E.far);const K=B.parent,ne=E.cameras;q(E,K);for(let U=0;U<ne.length;U++)q(ne[U],K);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),B.matrix.copy(E.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const se=B.children;for(let U=0,be=se.length;U<be;U++)se[U].updateMatrixWorld(!0);ne.length===2?Z(E,L,R):E.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.getPlanes=function(){return S};let ee=null;function Q(B,K){if(h=K.getViewerPose(c||r),g=K,h!==null){const ne=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let se=!1;ne.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let U=0;U<ne.length;U++){const be=ne[U];let ge=null;if(f!==null)ge=f.getViewport(be);else{const le=d.getViewSubImage(u,be);ge=le.viewport,U===0&&(e.setRenderTargetTextures(v,le.colorTexture,u.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(v))}let pe=x[U];pe===void 0&&(pe=new St,pe.layers.enable(U),pe.viewport=new Ye,x[U]=pe),pe.matrix.fromArray(be.transform.matrix),pe.projectionMatrix.fromArray(be.projectionMatrix),pe.viewport.set(ge.x,ge.y,ge.width,ge.height),U===0&&E.matrix.copy(pe.matrix),se===!0&&E.cameras.push(pe)}}for(let ne=0;ne<b.length;ne++){const se=_[ne],U=b[ne];se!==null&&U!==void 0&&U.update(se,K,c||r)}if(ee&&ee(B,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let ne=null;for(const se of S)K.detectedPlanes.has(se)||(ne===null&&(ne=[]),ne.push(se));if(ne!==null)for(const se of ne)S.delete(se),y.delete(se),n.dispatchEvent({type:"planeremoved",data:se});for(const se of K.detectedPlanes)if(!S.has(se))S.add(se),y.set(se,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:se});else{const U=y.get(se);se.lastChangedTime>U&&(y.set(se,se.lastChangedTime),n.dispatchEvent({type:"planechanged",data:se}))}}g=null}const ue=new Tl;ue.setAnimationLoop(Q),this.setAnimationLoop=function(B){ee=B},this.dispose=function(){}}}function cm(a,e){function t(m,p){p.color.getRGB(m.fogColor.value,bl(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,b,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,_)):p.isMeshMatcapMaterial?(i(m,p),f(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?o(m,p,v,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const S=a.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),m.uvTransform.value.copy(b.matrix));let _;p.aoMap?_=p.aoMap:p.lightMap&&(_=p.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uv2Transform.value.copy(_.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,v,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=b*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),m.uvTransform.value.copy(v.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===It&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function hm(a,e,t,n){let i={},s={},r=[];const o=t.isWebGL2?a.getParameter(35375):0;function l(b,_){const S=_.program;n.uniformBlockBinding(b,S)}function c(b,_){let S=i[b.id];S===void 0&&(g(b),S=h(b),i[b.id]=S,b.addEventListener("dispose",p));const y=_.program;n.updateUBOMapping(b,y);const L=e.render.frame;s[b.id]!==L&&(u(b),s[b.id]=L)}function h(b){const _=d();b.__bindingPointIndex=_;const S=a.createBuffer(),y=b.__size,L=b.usage;return a.bindBuffer(35345,S),a.bufferData(35345,y,L),a.bindBuffer(35345,null),a.bindBufferBase(35345,_,S),S}function d(){for(let b=0;b<o;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const _=i[b.id],S=b.uniforms,y=b.__cache;a.bindBuffer(35345,_);for(let L=0,R=S.length;L<R;L++){const x=S[L];if(f(x,L,y)===!0){const E=x.__offset,N=Array.isArray(x.value)?x.value:[x.value];let X=0;for(let j=0;j<N.length;j++){const I=N[j],D=m(I);typeof I=="number"?(x.__data[0]=I,a.bufferSubData(35345,E+X,x.__data)):I.isMatrix3?(x.__data[0]=I.elements[0],x.__data[1]=I.elements[1],x.__data[2]=I.elements[2],x.__data[3]=I.elements[0],x.__data[4]=I.elements[3],x.__data[5]=I.elements[4],x.__data[6]=I.elements[5],x.__data[7]=I.elements[0],x.__data[8]=I.elements[6],x.__data[9]=I.elements[7],x.__data[10]=I.elements[8],x.__data[11]=I.elements[0]):(I.toArray(x.__data,X),X+=D.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,E,x.__data)}}a.bindBuffer(35345,null)}function f(b,_,S){const y=b.value;if(S[_]===void 0){if(typeof y=="number")S[_]=y;else{const L=Array.isArray(y)?y:[y],R=[];for(let x=0;x<L.length;x++)R.push(L[x].clone());S[_]=R}return!0}else if(typeof y=="number"){if(S[_]!==y)return S[_]=y,!0}else{const L=Array.isArray(S[_])?S[_]:[S[_]],R=Array.isArray(y)?y:[y];for(let x=0;x<L.length;x++){const E=L[x];if(E.equals(R[x])===!1)return E.copy(R[x]),!0}}return!1}function g(b){const _=b.uniforms;let S=0;const y=16;let L=0;for(let R=0,x=_.length;R<x;R++){const E=_[R],N={boundary:0,storage:0},X=Array.isArray(E.value)?E.value:[E.value];for(let j=0,I=X.length;j<I;j++){const D=X[j],k=m(D);N.boundary+=k.boundary,N.storage+=k.storage}if(E.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=S,R>0){L=S%y;const j=y-L;L!==0&&j-N.boundary<0&&(S+=y-L,E.__offset=S)}S+=N.storage}return L=S%y,L>0&&(S+=y-L),b.__size=S,b.__cache={},this}function m(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function p(b){const _=b.target;_.removeEventListener("dispose",p);const S=r.indexOf(_.__bindingPointIndex);r.splice(S,1),a.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const b in i)a.deleteBuffer(i[b]);r=[],i={},s={}}return{bind:l,update:c,dispose:v}}function um(){const a=Ki("canvas");return a.style.display="block",a}function Pl(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:um(),t=a.context!==void 0?a.context:null,n=a.depth!==void 0?a.depth:!0,i=a.stencil!==void 0?a.stencil:!0,s=a.antialias!==void 0?a.antialias:!1,r=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,o=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,l=a.powerPreference!==void 0?a.powerPreference:"default",c=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=a.alpha!==void 0?a.alpha:!1;let d=null,u=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bn,this.physicallyCorrectLights=!1,this.toneMapping=an,this.toneMappingExposure=1;const m=this;let p=!1,v=0,b=0,_=null,S=-1,y=null;const L=new Ye,R=new Ye;let x=null,E=e.width,N=e.height,X=1,j=null,I=null;const D=new Ye(0,0,E,N),k=new Ye(0,0,E,N);let Y=!1;const Z=new $r;let q=!1,ee=!1,Q=null;const ue=new Re,B=new fe,K=new T,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return _===null?X:1}let U=t;function be(w,z){for(let H=0;H<w.length;H++){const O=w[H],W=e.getContext(O,z);if(W!==null)return W}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Xr}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),U===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),U=be(z,w),U===null)throw be(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ge,pe,le,He,Ae,_e,ot,mt,Qe,_t,$e,ke,Nt,At,A,M,V,J,te,re,ye,C,F,ae;function he(){ge=new bf(U),pe=new gf(U,ge,a),ge.init(pe),C=new sm(U,ge,pe),le=new nm(U,ge,pe),He=new Tf,Ae=new Gp,_e=new im(U,ge,le,Ae,pe,C,He),ot=new xf(m),mt=new Mf(m),Qe=new Ih(U,pe),F=new pf(U,ge,Qe,pe),_t=new wf(U,Qe,He,F),$e=new Lf(U,_t,Qe,He),te=new Cf(U,pe,_e),M=new vf(Ae),ke=new Vp(m,ot,mt,ge,pe,F,M),Nt=new cm(m,Ae),At=new Wp,A=new Zp(ge,pe),J=new ff(m,ot,mt,le,$e,h,r),V=new tm(m,$e,pe),ae=new hm(U,He,pe,le),re=new mf(U,ge,He,pe),ye=new Sf(U,ge,He,pe),He.programs=ke.programs,m.capabilities=pe,m.extensions=ge,m.properties=Ae,m.renderLists=At,m.shadowMap=V,m.state=le,m.info=He}he();const oe=new lm(m,U);this.xr=oe,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(E,N,!1))},this.getSize=function(w){return w.set(E,N)},this.setSize=function(w,z,H){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=w,N=z,e.width=Math.floor(w*X),e.height=Math.floor(z*X),H!==!1&&(e.style.width=w+"px",e.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(E*X,N*X).floor()},this.setDrawingBufferSize=function(w,z,H){E=w,N=z,X=H,e.width=Math.floor(w*H),e.height=Math.floor(z*H),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,z,H,O){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,z,H,O),le.viewport(L.copy(D).multiplyScalar(X).floor())},this.getScissor=function(w){return w.copy(k)},this.setScissor=function(w,z,H,O){w.isVector4?k.set(w.x,w.y,w.z,w.w):k.set(w,z,H,O),le.scissor(R.copy(k).multiplyScalar(X).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(w){le.setScissorTest(Y=w)},this.setOpaqueSort=function(w){j=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(w=!0,z=!0,H=!0){let O=0;w&&(O|=16384),z&&(O|=256),H&&(O|=1024),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),At.dispose(),A.dispose(),Ae.dispose(),ot.dispose(),mt.dispose(),$e.dispose(),F.dispose(),ae.dispose(),ke.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",ve),Q&&(Q.dispose(),Q=null),Ge.stop()};function me(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=He.autoReset,z=V.enabled,H=V.autoUpdate,O=V.needsUpdate,W=V.type;he(),He.autoReset=w,V.enabled=z,V.autoUpdate=H,V.needsUpdate=O,V.type=W}function Ie(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const z=w.target;z.removeEventListener("dispose",Ne),je(z)}function je(w){P(w),Ae.remove(w)}function P(w){const z=Ae.get(w).programs;z!==void 0&&(z.forEach(function(H){ke.releaseProgram(H)}),w.isShaderMaterial&&ke.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,H,O,W,xe){z===null&&(z=ne);const we=W.isMesh&&W.matrixWorld.determinant()<0,Le=Jl(w,z,H,O,W);le.setMaterial(O,we);let De=H.index,Be=1;O.wireframe===!0&&(De=_t.getWireframeAttribute(H),Be=2);const Fe=H.drawRange,Oe=H.attributes.position;let et=Fe.start*Be,Ct=(Fe.start+Fe.count)*Be;xe!==null&&(et=Math.max(et,xe.start*Be),Ct=Math.min(Ct,(xe.start+xe.count)*Be)),De!==null?(et=Math.max(et,0),Ct=Math.min(Ct,De.count)):Oe!=null&&(et=Math.max(et,0),Ct=Math.min(Ct,Oe.count));const $t=Ct-et;if($t<0||$t===1/0)return;F.setup(W,O,Le,H,De);let wn,tt=re;if(De!==null&&(wn=Qe.get(De),tt=ye,tt.setIndex(wn)),W.isMesh)O.wireframe===!0?(le.setLineWidth(O.wireframeLinewidth*se()),tt.setMode(1)):tt.setMode(4);else if(W.isLine){let ze=O.linewidth;ze===void 0&&(ze=1),le.setLineWidth(ze*se()),W.isLineSegments?tt.setMode(1):W.isLineLoop?tt.setMode(2):tt.setMode(3)}else W.isPoints?tt.setMode(0):W.isSprite&&tt.setMode(4);if(W.isInstancedMesh)tt.renderInstances(et,$t,W.count);else if(H.isInstancedBufferGeometry){const ze=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Vs=Math.min(H.instanceCount,ze);tt.renderInstances(et,$t,Vs)}else tt.render(et,$t)},this.compile=function(w,z){function H(O,W,xe){O.transparent===!0&&O.side===Pe&&O.forceSinglePass===!1?(O.side=It,O.needsUpdate=!0,Ft(O,W,xe),O.side=ln,O.needsUpdate=!0,Ft(O,W,xe),O.side=Pe):Ft(O,W,xe)}u=A.get(w),u.init(),g.push(u),w.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights(m.physicallyCorrectLights),w.traverse(function(O){const W=O.material;if(W)if(Array.isArray(W))for(let xe=0;xe<W.length;xe++){const we=W[xe];H(we,w,O)}else H(W,w,O)}),g.pop(),u=null};let G=null;function $(w){G&&G(w)}function ce(){Ge.stop()}function ve(){Ge.start()}const Ge=new Tl;Ge.setAnimationLoop($),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(w){G=w,oe.setAnimationLoop(w),w===null?Ge.stop():Ge.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",ve),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(z),z=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,z,_),u=A.get(w,g.length),u.init(),g.push(u),ue.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Z.setFromProjectionMatrix(ue),ee=this.localClippingEnabled,q=M.init(this.clippingPlanes,ee),d=At.get(w,f.length),d.init(),f.push(d),at(w,z,0,m.sortObjects),d.finish(),m.sortObjects===!0&&d.sort(j,I),q===!0&&M.beginShadows();const H=u.state.shadowsArray;if(V.render(H,w,z),q===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(d,w),u.setupLights(m.physicallyCorrectLights),z.isArrayCamera){const O=z.cameras;for(let W=0,xe=O.length;W<xe;W++){const we=O[W];gt(d,w,we,we.viewport)}}else gt(d,w,z);_!==null&&(_e.updateMultisampleRenderTarget(_),_e.updateRenderTargetMipmap(_)),w.isScene===!0&&w.onAfterRender(m,w,z),F.resetDefaultState(),S=-1,y=null,g.pop(),g.length>0?u=g[g.length-1]:u=null,f.pop(),f.length>0?d=f[f.length-1]:d=null};function at(w,z,H,O){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Z.intersectsSprite(w)){O&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const we=$e.update(w),Le=w.material;Le.visible&&d.push(w,we,Le,H,K.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==He.render.frame&&(w.skeleton.update(),w.skeleton.frame=He.render.frame),!w.frustumCulled||Z.intersectsObject(w))){O&&K.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ue);const we=$e.update(w),Le=w.material;if(Array.isArray(Le)){const De=we.groups;for(let Be=0,Fe=De.length;Be<Fe;Be++){const Oe=De[Be],et=Le[Oe.materialIndex];et&&et.visible&&d.push(w,we,et,H,K.z,Oe)}}else Le.visible&&d.push(w,we,Le,H,K.z,null)}}const xe=w.children;for(let we=0,Le=xe.length;we<Le;we++)at(xe[we],z,H,O)}function gt(w,z,H,O){const W=w.opaque,xe=w.transmissive,we=w.transparent;u.setupLightsView(H),q===!0&&M.setGlobalState(m.clippingPlanes,H),xe.length>0&&bn(W,z,H),O&&le.viewport(L.copy(O)),W.length>0&&Ke(W,z,H),xe.length>0&&Ke(xe,z,H),we.length>0&&Ke(we,z,H),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function bn(w,z,H){const O=pe.isWebGL2;Q===null&&(Q=new kn(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?ji:Un,minFilter:zn,samples:O&&s===!0?4:0})),m.getDrawingBufferSize(B),O?Q.setSize(B.x,B.y):Q.setSize(Ls(B.x),Ls(B.y));const W=m.getRenderTarget();m.setRenderTarget(Q),m.clear();const xe=m.toneMapping;m.toneMapping=an,Ke(w,z,H),m.toneMapping=xe,_e.updateMultisampleRenderTarget(Q),_e.updateRenderTargetMipmap(Q),m.setRenderTarget(W)}function Ke(w,z,H){const O=z.isScene===!0?z.overrideMaterial:null;for(let W=0,xe=w.length;W<xe;W++){const we=w[W],Le=we.object,De=we.geometry,Be=O===null?we.material:O,Fe=we.group;Le.layers.test(H.layers)&&Zt(Le,z,H,De,Be,Fe)}}function Zt(w,z,H,O,W,xe){w.onBeforeRender(m,z,H,O,W,xe),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(m,z,H,O,w,xe),W.transparent===!0&&W.side===Pe&&W.forceSinglePass===!1?(W.side=It,W.needsUpdate=!0,m.renderBufferDirect(H,z,O,W,w,xe),W.side=ln,W.needsUpdate=!0,m.renderBufferDirect(H,z,O,W,w,xe),W.side=Pe):m.renderBufferDirect(H,z,O,W,w,xe),w.onAfterRender(m,z,H,O,W,xe)}function Ft(w,z,H){z.isScene!==!0&&(z=ne);const O=Ae.get(w),W=u.state.lights,xe=u.state.shadowsArray,we=W.state.version,Le=ke.getParameters(w,W.state,xe,z,H),De=ke.getProgramCacheKey(Le);let Be=O.programs;O.environment=w.isMeshStandardMaterial?z.environment:null,O.fog=z.fog,O.envMap=(w.isMeshStandardMaterial?mt:ot).get(w.envMap||O.environment),Be===void 0&&(w.addEventListener("dispose",Ne),Be=new Map,O.programs=Be);let Fe=Be.get(De);if(Fe!==void 0){if(O.currentProgram===Fe&&O.lightsStateVersion===we)return fo(w,Le),Fe}else Le.uniforms=ke.getUniforms(w),w.onBuild(H,Le,m),w.onBeforeCompile(Le,m),Fe=ke.acquireProgram(Le,De),Be.set(De,Fe),O.uniforms=Le.uniforms;const Oe=O.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=M.uniform),fo(w,Le),O.needsLights=ec(w),O.lightsStateVersion=we,O.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.directionalShadowMap.value=W.state.directionalShadowMap,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotShadowMap.value=W.state.spotShadowMap,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMap.value=W.state.pointShadowMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix);const et=Fe.getUniforms(),Ct=As.seqWithValue(et.seq,Oe);return O.currentProgram=Fe,O.uniformsList=Ct,Fe}function fo(w,z){const H=Ae.get(w);H.outputEncoding=z.outputEncoding,H.instancing=z.instancing,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function Jl(w,z,H,O,W){z.isScene!==!0&&(z=ne),_e.resetTextureUnits();const xe=z.fog,we=O.isMeshStandardMaterial?z.environment:null,Le=_===null?m.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Bn,De=(O.isMeshStandardMaterial?mt:ot).get(O.envMap||we),Be=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Fe=!!O.normalMap&&!!H.attributes.tangent,Oe=!!H.morphAttributes.position,et=!!H.morphAttributes.normal,Ct=!!H.morphAttributes.color,$t=O.toneMapped?m.toneMapping:an,wn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=wn!==void 0?wn.length:0,ze=Ae.get(O),Vs=u.state.lights;if(q===!0&&(ee===!0||w!==y)){const Lt=w===y&&O.id===S;M.setState(O,w,Lt)}let lt=!1;O.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Vs.state.version||ze.outputEncoding!==Le||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||ze.envMap!==De||O.fog===!0&&ze.fog!==xe||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==M.numPlanes||ze.numIntersection!==M.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==Fe||ze.morphTargets!==Oe||ze.morphNormals!==et||ze.morphColors!==Ct||ze.toneMapping!==$t||pe.isWebGL2===!0&&ze.morphTargetsCount!==tt)&&(lt=!0):(lt=!0,ze.__version=O.version);let Sn=ze.currentProgram;lt===!0&&(Sn=Ft(O,z,W));let po=!1,Ci=!1,Gs=!1;const yt=Sn.getUniforms(),Tn=ze.uniforms;if(le.useProgram(Sn.program)&&(po=!0,Ci=!0,Gs=!0),O.id!==S&&(S=O.id,Ci=!0),po||y!==w){if(yt.setValue(U,"projectionMatrix",w.projectionMatrix),pe.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),y!==w&&(y=w,Ci=!0,Gs=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Lt=yt.map.cameraPosition;Lt!==void 0&&Lt.setValue(U,K.setFromMatrixPosition(w.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&yt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||W.isSkinnedMesh)&&yt.setValue(U,"viewMatrix",w.matrixWorldInverse)}if(W.isSkinnedMesh){yt.setOptional(U,W,"bindMatrix"),yt.setOptional(U,W,"bindMatrixInverse");const Lt=W.skeleton;Lt&&(pe.floatVertexTextures?(Lt.boneTexture===null&&Lt.computeBoneTexture(),yt.setValue(U,"boneTexture",Lt.boneTexture,_e),yt.setValue(U,"boneTextureSize",Lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hs=H.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&pe.isWebGL2===!0)&&te.update(W,H,O,Sn),(Ci||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,yt.setValue(U,"receiveShadow",W.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Tn.envMap.value=De,Tn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ci&&(yt.setValue(U,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&Ql(Tn,Gs),xe&&O.fog===!0&&Nt.refreshFogUniforms(Tn,xe),Nt.refreshMaterialUniforms(Tn,O,X,N,Q),As.upload(U,ze.uniformsList,Tn,_e)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(As.upload(U,ze.uniformsList,Tn,_e),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&yt.setValue(U,"center",W.center),yt.setValue(U,"modelViewMatrix",W.modelViewMatrix),yt.setValue(U,"normalMatrix",W.normalMatrix),yt.setValue(U,"modelMatrix",W.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Lt=O.uniformsGroups;for(let Ws=0,tc=Lt.length;Ws<tc;Ws++)if(pe.isWebGL2){const mo=Lt[Ws];ae.update(mo,Sn),ae.bind(mo,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Ql(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function ec(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(w,z,H){Ae.get(w.texture).__webglTexture=z,Ae.get(w.depthTexture).__webglTexture=H;const O=Ae.get(w);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,z){const H=Ae.get(w);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,H=0){_=w,v=z,b=H;let O=!0,W=null,xe=!1,we=!1;if(w){const De=Ae.get(w);De.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),O=!1):De.__webglFramebuffer===void 0?_e.setupRenderTarget(w):De.__hasExternalTextures&&_e.rebindTextures(w,Ae.get(w.texture).__webglTexture,Ae.get(w.depthTexture).__webglTexture);const Be=w.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const Fe=Ae.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(W=Fe[z],xe=!0):pe.isWebGL2&&w.samples>0&&_e.useMultisampledRTT(w)===!1?W=Ae.get(w).__webglMultisampledFramebuffer:W=Fe,L.copy(w.viewport),R.copy(w.scissor),x=w.scissorTest}else L.copy(D).multiplyScalar(X).floor(),R.copy(k).multiplyScalar(X).floor(),x=Y;if(le.bindFramebuffer(36160,W)&&pe.drawBuffers&&O&&le.drawBuffers(w,W),le.viewport(L),le.scissor(R),le.setScissorTest(x),xe){const De=Ae.get(w.texture);U.framebufferTexture2D(36160,36064,34069+z,De.__webglTexture,H)}else if(we){const De=Ae.get(w.texture),Be=z||0;U.framebufferTextureLayer(36160,36064,De.__webglTexture,H||0,Be)}S=-1},this.readRenderTargetPixels=function(w,z,H,O,W,xe,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ae.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){le.bindFramebuffer(36160,Le);try{const De=w.texture,Be=De.format,Fe=De.type;if(Be!==Bt&&C.convert(Be)!==U.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Fe===ji&&(ge.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Fe!==Un&&C.convert(Fe)!==U.getParameter(35738)&&!(Fe===vn&&(pe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-O&&H>=0&&H<=w.height-W&&U.readPixels(z,H,O,W,C.convert(Be),C.convert(Fe),xe)}finally{const De=_!==null?Ae.get(_).__webglFramebuffer:null;le.bindFramebuffer(36160,De)}}},this.copyFramebufferToTexture=function(w,z,H=0){const O=Math.pow(2,-H),W=Math.floor(z.image.width*O),xe=Math.floor(z.image.height*O);_e.setTexture2D(z,0),U.copyTexSubImage2D(3553,H,0,0,w.x,w.y,W,xe),le.unbindTexture()},this.copyTextureToTexture=function(w,z,H,O=0){const W=z.image.width,xe=z.image.height,we=C.convert(H.format),Le=C.convert(H.type);_e.setTexture2D(H,0),U.pixelStorei(37440,H.flipY),U.pixelStorei(37441,H.premultiplyAlpha),U.pixelStorei(3317,H.unpackAlignment),z.isDataTexture?U.texSubImage2D(3553,O,w.x,w.y,W,xe,we,Le,z.image.data):z.isCompressedTexture?U.compressedTexSubImage2D(3553,O,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,we,z.mipmaps[0].data):U.texSubImage2D(3553,O,w.x,w.y,we,Le,z.image),O===0&&H.generateMipmaps&&U.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(w,z,H,O,W=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=w.max.x-w.min.x+1,we=w.max.y-w.min.y+1,Le=w.max.z-w.min.z+1,De=C.convert(O.format),Be=C.convert(O.type);let Fe;if(O.isData3DTexture)_e.setTexture3D(O,0),Fe=32879;else if(O.isDataArrayTexture)_e.setTexture2DArray(O,0),Fe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(37440,O.flipY),U.pixelStorei(37441,O.premultiplyAlpha),U.pixelStorei(3317,O.unpackAlignment);const Oe=U.getParameter(3314),et=U.getParameter(32878),Ct=U.getParameter(3316),$t=U.getParameter(3315),wn=U.getParameter(32877),tt=H.isCompressedTexture?H.mipmaps[0]:H.image;U.pixelStorei(3314,tt.width),U.pixelStorei(32878,tt.height),U.pixelStorei(3316,w.min.x),U.pixelStorei(3315,w.min.y),U.pixelStorei(32877,w.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Fe,W,z.x,z.y,z.z,xe,we,Le,De,Be,tt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Fe,W,z.x,z.y,z.z,xe,we,Le,De,tt.data)):U.texSubImage3D(Fe,W,z.x,z.y,z.z,xe,we,Le,De,Be,tt),U.pixelStorei(3314,Oe),U.pixelStorei(32878,et),U.pixelStorei(3316,Ct),U.pixelStorei(3315,$t),U.pixelStorei(32877,wn),W===0&&O.generateMipmaps&&U.generateMipmap(Fe),le.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?_e.setTextureCube(w,0):w.isData3DTexture?_e.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?_e.setTexture2DArray(w,0):_e.setTexture2D(w,0),le.unbindTexture()},this.resetState=function(){v=0,b=0,_=null,le.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class dm extends Pl{}dm.prototype.isWebGL1Renderer=!0;class fm extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class pm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=zr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Wt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bt=new T;class eo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}setX(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=on(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=on(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=on(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=on(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=qe(t,this.array),n=qe(n,this.array),i=qe(i,this.array),s=qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new eo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const La=new T,Pa=new Ye,Ra=new Ye,mm=new T,Da=new Re;class gm extends Ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Re,this.bindMatrixInverse=new Re}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Pa.fromBufferAttribute(i.attributes.skinIndex,e),Ra.fromBufferAttribute(i.attributes.skinWeight,e),La.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=Ra.getComponent(s);if(r!==0){const o=Pa.getComponent(s);Da.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mm.copy(La).applyMatrix4(Da),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rl extends Ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vm extends dt{constructor(e=null,t=1,n=1,i,s,r,o,l,c=ht,h=ht,d,u){super(null,r,o,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ia=new Re,xm=new Re;class to{constructor(e=[],t=[]){this.uuid=Wt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const o=e[s]?e[s].matrixWorld:xm;Ia.multiplyMatrices(o,t[s]),Ia.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new to(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=pl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new vm(t,e,e,Bt,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new Rl),this.bones.push(r),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const r=t[i];e.bones.push(r.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Me extends ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Na=new Re,Fa=new Re,xs=[],_m=new Re,Oi=new Ce;class ym extends Ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Me(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,_m)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Na),Fa.multiplyMatrices(n,Na),Oi.matrixWorld=Fa,Oi.raycast(e,xs);for(let r=0,o=xs.length;r<o;r++){const l=xs[r];l.instanceId=s,l.object=this,t.push(l)}xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Me(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class no extends jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Oa=new T,za=new T,Ua=new Re,br=new Ds,_s=new bi;class io extends Ze{constructor(e=new Tt,t=new no){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Oa.fromBufferAttribute(t,i-1),za.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Oa.distanceTo(za);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=s,e.ray.intersectsSphere(_s)===!1)return;Ua.copy(i).invert(),br.copy(e.ray).applyMatrix4(Ua);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new T,h=new T,d=new T,u=new T,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const v=Math.max(0,r.start),b=Math.min(g.count,r.start+r.count);for(let _=v,S=b-1;_<S;_+=f){const y=g.getX(_),L=g.getX(_+1);if(c.fromBufferAttribute(p,y),h.fromBufferAttribute(p,L),br.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(u);x<e.near||x>e.far||t.push({distance:x,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,r.start),b=Math.min(p.count,r.start+r.count);for(let _=v,S=b-1;_<S;_+=f){if(c.fromBufferAttribute(p,_),h.fromBufferAttribute(p,_+1),br.distanceSqToSegment(c,h,u,d)>l)continue;u.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(u);L<e.near||L>e.far||t.push({distance:L,point:d.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ba=new T,ka=new T;class Dl extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Ba.fromBufferAttribute(t,i),ka.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ba.distanceTo(ka);e.setAttribute("lineDistance",new pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mm extends io{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Il extends jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Va=new Re,Vr=new Ds,ys=new bi,Ms=new T;class bm extends Ze{constructor(e=new Tt,t=new Il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(i),ys.radius+=s,e.ray.intersectsSphere(ys)===!1)return;Va.copy(i).invert(),Vr.copy(e.ray).applyMatrix4(Va);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=u,m=f;g<m;g++){const p=c.getX(g);Ms.fromBufferAttribute(d,p),Ga(Ms,p,l,i,e,t,this)}}else{const u=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=u,m=f;g<m;g++)Ms.fromBufferAttribute(d,g),Ga(Ms,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ga(a,e,t,n,i,s,r){const o=Vr.distanceSqToPoint(a);if(o<t){const l=new T;Vr.closestPointToPoint(a,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:r})}}class wm{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let r=1;r<=e;r++)n=this.getPoint(r/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let r;t?r=t:r=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const h=n[i],u=n[i+1]-h,f=(r-h)/u;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=t||(r.isVector2?new fe:new T);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new T,i=[],s=[],r=[],o=new T,l=new Re;for(let f=0;f<=e;f++){const g=f/e;i[f]=this.getTangentAt(g,new T)}s[0]=new T,r[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ut(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ut(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function so(){let a=0,e=0,t=0,n=0;function i(s,r,o,l){a=s,e=o,t=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,h,d){let u=(r-s)/c-(o-s)/(c+h)+(o-r)/h,f=(o-r)/h-(l-r)/(h+d)+(l-o)/d;u*=h,f*=h,i(r,o,u,f)},calc:function(s){const r=s*s,o=r*s;return a+e*s+t*r+n*o}}}const bs=new T,wr=new so,Sr=new so,Tr=new so;class Sm extends wm{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new T){const n=t,i=this.points,s=i.length,r=(s-(this.closed?0:1))*e;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%s]:(bs.subVectors(i[0],i[1]).add(i[0]),c=bs);const d=i[o%s],u=i[(o+1)%s];if(this.closed||o+2<s?h=i[(o+2)%s]:(bs.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=bs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),wr.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,m,p),Sr.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,m,p),Tr.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(wr.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Sr.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Tr.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(wr.calc(l),Sr.calc(l),Tr.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new T().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class ro extends Tt{constructor(e=1,t=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const m=[],p=n/2;let v=0;b(),r===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new pt(d,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function b(){const S=new T,y=new T;let L=0;const R=(t-e)/n;for(let x=0;x<=s;x++){const E=[],N=x/s,X=N*(t-e)+e;for(let j=0;j<=i;j++){const I=j/i,D=I*l+o,k=Math.sin(D),Y=Math.cos(D);y.x=X*k,y.y=-N*n+p,y.z=X*Y,d.push(y.x,y.y,y.z),S.set(k,R,Y).normalize(),u.push(S.x,S.y,S.z),f.push(I,1-N),E.push(g++)}m.push(E)}for(let x=0;x<i;x++)for(let E=0;E<s;E++){const N=m[E][x],X=m[E+1][x],j=m[E+1][x+1],I=m[E][x+1];h.push(N,X,I),h.push(X,j,I),L+=6}c.addGroup(v,L,0),v+=L}function _(S){const y=g,L=new fe,R=new T;let x=0;const E=S===!0?e:t,N=S===!0?1:-1;for(let j=1;j<=i;j++)d.push(0,p*N,0),u.push(0,N,0),f.push(.5,.5),g++;const X=g;for(let j=0;j<=i;j++){const D=j/i*l+o,k=Math.cos(D),Y=Math.sin(D);R.x=E*Y,R.y=p*N,R.z=E*k,d.push(R.x,R.y,R.z),u.push(0,N,0),L.x=k*.5+.5,L.y=Y*.5*N+.5,f.push(L.x,L.y),g++}for(let j=0;j<i;j++){const I=y+j,D=X+j;S===!0?h.push(D,D+1,I):h.push(D+1,D,I),x+=3}c.addGroup(v,x,S===!0?1:2),v+=x}}static fromJSON(e){return new ro(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fs extends Tt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new T,u=new T,f=[],g=[],m=[],p=[];for(let v=0;v<=n;v++){const b=[],_=v/n;let S=0;v==0&&r==0?S=.5/t:v==n&&l==Math.PI&&(S=-.5/t);for(let y=0;y<=t;y++){const L=y/t;d.x=-e*Math.cos(i+L*s)*Math.sin(r+_*o),d.y=e*Math.cos(r+_*o),d.z=e*Math.sin(i+L*s)*Math.sin(r+_*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),m.push(u.x,u.y,u.z),p.push(L+S,1-_),b.push(c++)}h.push(b)}for(let v=0;v<n;v++)for(let b=0;b<t;b++){const _=h[v][b+1],S=h[v][b],y=h[v+1][b],L=h[v+1][b+1];(v!==0||r>0)&&f.push(_,S,L),(v!==n-1||l<Math.PI)&&f.push(S,y,L)}this.setIndex(f),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(m,3)),this.setAttribute("uv",new pt(p,2))}static fromJSON(e){return new Fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Je extends _n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oo extends jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hn extends oo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mn extends jt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qr,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function pn(a,e,t){return Nl(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function ws(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Nl(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Tm(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ha(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,r=0;r!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[r++]=a[o+l]}return i}function Fl(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=a[i++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=a[i++];while(s!==void 0)}class Qi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let r;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}r=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}r=n,n=0;break t}break n}for(;n<r;){const o=n+r>>>1;e<t[o]?r=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let r=0;r!==i;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Am extends Qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xo,endingEnd:Xo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,r=e+1,o=i[s],l=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case qo:s=e,o=2*t-n;break;case Yo:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qo:r=e,l=2*n-t;break;case Yo:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,v=-u*p+2*u*m-u*g,b=(1+u)*p+(-1.5-2*u)*m+(-.5+u)*g+1,_=(-1-f)*p+(1.5+f)*m+.5*g,S=f*p-f*m;for(let y=0;y!==o;++y)s[y]=v*r[h+y]+b*r[c+y]+_*r[l+y]+S*r[d+y];return s}}class Em extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==o;++u)s[u]=r[c+u]*d+r[l+u]*h;return s}}class Cm extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Em(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Am(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xi:t=this.InterpolantFactoryMethodDiscrete;break;case xi:t=this.InterpolantFactoryMethodLinear;break;case Zs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return xi;case this.InterpolantFactoryMethodSmooth:return Zs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,r=i-1;for(;s!==i&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);const o=this.getValueSize();this.times=pn(n,s,r),this.values=pn(this.values,s*o,r*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(i!==void 0&&Nl(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=pn(this.times),t=pn(this.values),n=this.getValueSize(),i=this.getInterpolation()===Zs,s=e.length-1;let r=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const m=t[d+g];if(m!==t[u+g]||m!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];const d=o*n,u=r*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=pn(e,0,r),this.values=pn(t,0,r*n)):(this.times=e,this.values=t),this}clone(){const e=pn(this.times,0),t=pn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kt.prototype.TimeBufferType=Float32Array;Kt.prototype.ValueBufferType=Float32Array;Kt.prototype.DefaultInterpolation=xi;class Si extends Kt{}Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=Xi;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;class Ol extends Kt{}Ol.prototype.ValueTypeName="color";class Zi extends Kt{}Zi.prototype.ValueTypeName="number";class Lm extends Qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Yt.slerpFlat(s,0,r,c-o,r,c,l);return s}}class Vn extends Kt{InterpolantFactoryMethodLinear(e){return new Lm(this.times,this.values,this.getValueSize(),e)}}Vn.prototype.ValueTypeName="quaternion";Vn.prototype.DefaultInterpolation=xi;Vn.prototype.InterpolantFactoryMethodSmooth=void 0;class Ti extends Kt{}Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=Xi;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;class $i extends Kt{}$i.prototype.ValueTypeName="vector";class Pm{constructor(e,t=-1,n,i=Yc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Dm(n[r]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=n.length;s!==r;++s)t.push(Kt.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Tm(l);l=Ha(l,1,h),c=Ha(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Zi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const r=[];for(const o in i)r.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,m){if(f.length!==0){const p=[],v=[];Fl(f,p,v,g),p.length!==0&&m.push(new d(u,p,v))}},i=[],s=e.name||"default",r=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let m=0;m<u[g].morphTargets.length;m++)f[u[g].morphTargets[m]]=-1;for(const m in f){const p=[],v=[];for(let b=0;b!==u[g].morphTargets.length;++b){const _=u[g];p.push(_.time),v.push(_.morphTarget===m?1:0)}i.push(new Zi(".morphTargetInfluence["+m+"]",p,v))}l=f.length*r}else{const f=".bones["+t[d].name+"]";n($i,f+".position",u,"pos",i),n(Vn,f+".quaternion",u,"rot",i),n($i,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rm(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Zi;case"vector":case"vector2":case"vector3":case"vector4":return $i;case"color":return Ol;case"quaternion":return Vn;case"bool":case"boolean":return Si;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Dm(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Rm(a.type);if(a.times===void 0){const t=[],n=[];Fl(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const yi={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Im{constructor(e,t,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,i.onProgress!==void 0&&i.onProgress(h,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Nm=new Im;class Ai{constructor(e){this.manager=e!==void 0?e:Nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const sn={};class Fm extends Error{constructor(e,t){super(e),this.response=t}}class Ps extends Ai{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=yi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(sn[e]!==void 0){sn[e].push({onLoad:t,onProgress:n,onError:i});return}sn[e]=[],sn[e].push({onLoad:t,onProgress:n,onError:i});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=sn[e],d=c.body.getReader(),u=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=u?parseInt(u):0,g=f!==0;let m=0;const p=new ReadableStream({start(v){b();function b(){d.read().then(({done:_,value:S})=>{if(_)v.close();else{m+=S.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let L=0,R=h.length;L<R;L++){const x=h[L];x.onProgress&&x.onProgress(y)}v.enqueue(S),b()}})}}});return new Response(p)}else throw new Fm(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{yi.add(e,c);const h=sn[e];delete sn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=sn[e];if(h===void 0)throw this.manager.itemError(e),c;delete sn[e];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Om extends Ai{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=yi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o=Ki("img");function l(){h(),yi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class xt extends Ai{constructor(e){super(e)}load(e,t,n,i){const s=new dt,r=new Om(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Os extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ar=new Re,Wa=new T,ja=new T;class ao{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $r,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wa.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wa),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),Ar.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ar),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ar)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zm extends ao{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Yi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Um extends Os{constructor(e,t,n=0,i=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=n,this.angle=i,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new zm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Xa=new Re,zi=new T,Er=new T;class Bm extends ao{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(zi),Er.copy(n.position),Er.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Er),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),Xa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa)}}class km extends Os{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vm extends ao{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new Vm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zs extends Os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gr{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class kt extends Tt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Gm extends Ai{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=yi.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){yi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const lo="\\[\\]\\.:\\/",Hm=new RegExp("["+lo+"]","g"),co="[^"+lo+"]",Wm="[^"+lo.replace("\\.","")+"]",jm=/((?:WC+[\/:])*)/.source.replace("WC",co),Xm=/(WCOD+)?/.source.replace("WCOD",Wm),qm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",co),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",co),Km=new RegExp("^"+jm+Xm+qm+Ym+"$"),Zm=["material","materials","bones","map"];class $m{constructor(e,t,n){const i=n||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class We{constructor(e,t,n){this.path=t,this.parsedPath=n||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,n):new We(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Hm,"")}static parseTrackName(e){const t=Km.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Zm.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let r=0;r<s.length;r++){const o=s[r];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=$m;We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray];We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Jm{constructor(e,t,n=0,i=1/0){this.ray=new Ds(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Zr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Hr(e,this,n,t),n.sort(qa),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Hr(e[i],this,n,t);return n.sort(qa),n}}function qa(a,e){return a.distance-e.distance}function Hr(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,r=i.length;s<r;s++)Hr(i[s],e,t,!0)}}class Ya{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Qm extends Dl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Tt;i.setAttribute("position",new pt(t,3)),i.setAttribute("color",new pt(n,3));const s=new no({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Se,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xr);var yn={},eg={get exports(){return yn},set exports(a){yn=a}},di=typeof Reflect=="object"?Reflect:null,Ka=di&&typeof di.apply=="function"?di.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)},Es;di&&typeof di.ownKeys=="function"?Es=di.ownKeys:Object.getOwnPropertySymbols?Es=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Es=function(e){return Object.getOwnPropertyNames(e)};function tg(a){console&&console.warn&&console.warn(a)}var Ul=Number.isNaN||function(e){return e!==e};function Xe(){Xe.init.call(this)}eg.exports=Xe;yn.once=rg;Xe.EventEmitter=Xe;Xe.prototype._events=void 0;Xe.prototype._eventsCount=0;Xe.prototype._maxListeners=void 0;var Za=10;function Us(a){if(typeof a!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof a)}Object.defineProperty(Xe,"defaultMaxListeners",{enumerable:!0,get:function(){return Za},set:function(a){if(typeof a!="number"||a<0||Ul(a))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+a+".");Za=a}});Xe.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Xe.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||Ul(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function Bl(a){return a._maxListeners===void 0?Xe.defaultMaxListeners:a._maxListeners}Xe.prototype.getMaxListeners=function(){return Bl(this)};Xe.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===void 0;else if(!i)return!1;if(i){var r;if(t.length>0&&(r=t[0]),r instanceof Error)throw r;var o=new Error("Unhandled error."+(r?" ("+r.message+")":""));throw o.context=r,o}var l=s[e];if(l===void 0)return!1;if(typeof l=="function")Ka(l,this,t);else for(var c=l.length,h=Wl(l,c),n=0;n<c;++n)Ka(h[n],this,t);return!0};function kl(a,e,t,n){var i,s,r;if(Us(t),s=a._events,s===void 0?(s=a._events=Object.create(null),a._eventsCount=0):(s.newListener!==void 0&&(a.emit("newListener",e,t.listener?t.listener:t),s=a._events),r=s[e]),r===void 0)r=s[e]=t,++a._eventsCount;else if(typeof r=="function"?r=s[e]=n?[t,r]:[r,t]:n?r.unshift(t):r.push(t),i=Bl(a),i>0&&r.length>i&&!r.warned){r.warned=!0;var o=new Error("Possible EventEmitter memory leak detected. "+r.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");o.name="MaxListenersExceededWarning",o.emitter=a,o.type=e,o.count=r.length,tg(o)}return a}Xe.prototype.addListener=function(e,t){return kl(this,e,t,!1)};Xe.prototype.on=Xe.prototype.addListener;Xe.prototype.prependListener=function(e,t){return kl(this,e,t,!0)};function ng(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Vl(a,e,t){var n={fired:!1,wrapFn:void 0,target:a,type:e,listener:t},i=ng.bind(n);return i.listener=t,n.wrapFn=i,i}Xe.prototype.once=function(e,t){return Us(t),this.on(e,Vl(this,e,t)),this};Xe.prototype.prependOnceListener=function(e,t){return Us(t),this.prependListener(e,Vl(this,e,t)),this};Xe.prototype.removeListener=function(e,t){var n,i,s,r,o;if(Us(t),i=this._events,i===void 0)return this;if(n=i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,r=n.length-1;r>=0;r--)if(n[r]===t||n[r].listener===t){o=n[r].listener,s=r;break}if(s<0)return this;s===0?n.shift():ig(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit("removeListener",e,o||t)}return this};Xe.prototype.off=Xe.prototype.removeListener;Xe.prototype.removeAllListeners=function(e){var t,n,i;if(n=this._events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.length===0){var s=Object.keys(n),r;for(i=0;i<s.length;++i)r=s[i],r!=="removeListener"&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this};function Gl(a,e,t){var n=a._events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="function"?t?[i.listener||i]:[i]:t?sg(i):Wl(i,i.length)}Xe.prototype.listeners=function(e){return Gl(this,e,!0)};Xe.prototype.rawListeners=function(e){return Gl(this,e,!1)};Xe.listenerCount=function(a,e){return typeof a.listenerCount=="function"?a.listenerCount(e):Hl.call(a,e)};Xe.prototype.listenerCount=Hl;function Hl(a){var e=this._events;if(e!==void 0){var t=e[a];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}Xe.prototype.eventNames=function(){return this._eventsCount>0?Es(this._events):[]};function Wl(a,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=a[n];return t}function ig(a,e){for(;e+1<a.length;e++)a[e]=a[e+1];a.pop()}function sg(a){for(var e=new Array(a.length),t=0;t<e.length;++t)e[t]=a[t].listener||a[t];return e}function rg(a,e){return new Promise(function(t,n){function i(r){a.removeListener(e,s),n(r)}function s(){typeof a.removeListener=="function"&&a.removeListener("error",i),t([].slice.call(arguments))}jl(a,e,s,{once:!0}),e!=="error"&&og(a,i,{once:!0})})}function og(a,e,t){typeof a.on=="function"&&jl(a,"error",e,t)}function jl(a,e,t,n){if(typeof a.on=="function")n.once?a.once(e,t):a.on(e,t);else if(typeof a.addEventListener=="function")a.addEventListener(e,function i(s){n.once&&a.removeEventListener(e,i),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof a)}class ag extends yn.EventEmitter{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.emit("resize")})}}class lg extends yn.EventEmitter{constructor(){super(),this.start=Date.now(),this.current=this.start,this.elapsed=0,this.delta=16,this.update()}update(){const e=Date.now();this.delta=e-this.current,this.current=e,this.elapsed=this.current-this.start,this.emit("update"),window.requestAnimationFrame(()=>this.update())}}function $a(a,e){if(e===Kc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===Or||e===fl){let t=a.getIndex();if(t===null){const r=[],o=a.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)r.push(l);a.setIndex(r),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===Or)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class cg extends Ai{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pg(t)}),this.register(function(t){return new Mg(t)}),this.register(function(t){return new bg(t)}),this.register(function(t){return new gg(t)}),this.register(function(t){return new vg(t)}),this.register(function(t){return new xg(t)}),this.register(function(t){return new _g(t)}),this.register(function(t){return new fg(t)}),this.register(function(t){return new yg(t)}),this.register(function(t){return new mg(t)}),this.register(function(t){return new ug(t)}),this.register(function(t){return new wg(t)}),this.register(function(t){return new Sg(t)})}load(e,t,n,i){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=Gr.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ps(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Xl){try{r[Ue.KHR_BINARY_GLTF]=new Tg(e)}catch(d){i&&i(d);return}s=JSON.parse(r[Ue.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ug(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],u=s.extensionsRequired||[];switch(d){case Ue.KHR_MATERIALS_UNLIT:r[d]=new dg;break;case Ue.KHR_DRACO_MESH_COMPRESSION:r[d]=new Ag(s,this.dracoLoader);break;case Ue.KHR_TEXTURE_TRANSFORM:r[d]=new Eg;break;case Ue.KHR_MESH_QUANTIZATION:r[d]=new Cg;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function hg(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ue={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ug{constructor(e){this.parser=e,this.name=Ue.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);l.color!==void 0&&h.fromArray(l.color);const d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new zl(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new km(h),c.distance=d;break;case"spot":c=new Um(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,gn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class dg{constructor(){this.name=Ue.KHR_MATERIALS_UNLIT}getMaterialType(){return In}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ve))}return Promise.all(i)}}class fg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class pg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const o=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(o,o)}return Promise.all(s)}}class mg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class gg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=i.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Ve)),r.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class vg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class xg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const o=r.attenuationColor||[1,1,1];return t.attenuationColor=new Se(o[0],o[1],o[2]),Promise.all(s)}}class _g{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class yg{constructor(e){this.parser=e,this.name=Ue.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Hn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],r=i.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",r.specularTexture));const o=r.specularColorFactor||[1,1,1];return t.specularColor=new Se(o[0],o[1],o[2]),r.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",r.specularColorTexture,Ve)),Promise.all(s)}}class Mg{constructor(e){this.parser=e,this.name=Ue.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class bg{constructor(e){this.parser=e,this.name=Ue.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],o=i.images[r.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,r.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class wg{constructor(e){this.name=Ue.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,u=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,u,i.mode,i.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(f),h,d,u,i.mode,i.filter),f})})}else return null}}class Sg{constructor(e){this.name=Ue.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==zt.TRIANGLES&&c.mode!==zt.TRIANGLE_STRIP&&c.mode!==zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=n.extensions[this.name].attributes,o=[],l={};for(const c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,f=[];for(const g of d){const m=new Re,p=new T,v=new Yt,b=new T(1,1,1),_=new ym(g.geometry,g.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,S),l.SCALE&&b.fromBufferAttribute(l.SCALE,S),_.setMatrixAt(S,m.compose(p,v,b));for(const S in l)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);Ze.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Xl="glTF",Ui=12,Ja={JSON:1313821514,BIN:5130562};class Tg{constructor(e){this.name=Ue.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ui),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Xl)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ui,s=new DataView(e,Ui);let r=0;for(;r<i;){const o=s.getUint32(r,!0);r+=4;const l=s.getUint32(r,!0);if(r+=4,l===Ja.JSON){const c=new Uint8Array(e,Ui+r,o);this.content=n.decode(c)}else if(l===Ja.BIN){const c=Ui+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Ag{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ue.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(const h in r){const d=Wr[h]||h.toLowerCase();o[d]=r[h]}for(const h in e.attributes){const d=Wr[h]||h.toLowerCase();if(r[h]!==void 0){const u=n.accessors[e.attributes[h]],f=fi[u.componentType];c[d]=f.name,l[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(u){for(const f in u.attributes){const g=u.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}d(u)},o,c)})})}}class Eg{constructor(){this.name=Ue.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Cg{constructor(){this.name=Ue.KHR_MESH_QUANTIZATION}}class ql extends Qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let r=0;r!==i;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,d=(n-t)/h,u=d*d,f=u*d,g=e*c,m=g-c,p=-2*f+3*u,v=f-u,b=1-p,_=v-u+d;for(let S=0;S!==o;S++){const y=r[m+S+o],L=r[m+S+l]*h,R=r[g+S+o],x=r[g+S]*h;s[S]=b*y+_*L+p*R+v*x}return s}}const Lg=new Yt;class Pg extends ql{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Lg.fromArray(s).normalize().toArray(s),s}}const zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qa={9728:ht,9729:Et,9984:Fr,9985:ul,9986:Ss,9987:zn},el={33071:Ut,33648:Cs,10497:gi},Cr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wr={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Rg={CUBICSPLINE:void 0,LINEAR:xi,STEP:Xi},Lr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dg(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new oo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ln})),a.DefaultMaterial}function Bi(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function gn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ig(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;r.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;l.push(u)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=u),a.morphTargetsRelative=!0,a})}function Ng(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Fg(a){const e=a.extensions&&a.extensions[Ue.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+tl(e.attributes):t=a.indices+":"+tl(a.attributes)+":"+a.mode,t}function tl(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function jr(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Og(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zg=new Re;class Ug{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hg,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new xt(this.options.manager):this.textureLoader=new Gm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ps(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){const o={scene:r[0][i.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:i.asset,parser:n,userData:{}};Bi(s,o,i),gn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const r=e[i];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(r,o)=>{const l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(const[c,h]of r.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ue.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,r){n.load(Gr.resolveURL(t.uri,i.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const r=Cr[i.type],o=fi[i.componentType],l=i.normalized===!0,c=new o(i.count*r);return Promise.resolve(new ft(c,r,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(r){const o=r[0],l=Cr[i.type],c=fi[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,p;if(f&&f!==d){const v=Math.floor(u/f),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(b);_||(m=new c(o,v*f,i.count*f/h),_=new pm(m,f/h),t.cache.add(b,_)),p=new eo(_,l,u%f/h,g)}else o===null?m=new c(i.count*l):m=new c(o,u,i.count*l),p=new ft(m,l,g);if(i.sparse!==void 0){const v=Cr.SCALAR,b=fi[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,y=new b(r[1],_,i.sparse.count*v),L=new c(r[2],S,i.sparse.count*l);o!==null&&(p=new ft(p.array.slice(),p.itemSize,p.normalized));for(let R=0,x=y.length;R<x;R++){const E=y[R];if(p.setX(E,L[R*l]),l>=2&&p.setY(E,L[R*l+1]),l>=3&&p.setZ(E,L[R*l+2]),l>=4&&p.setW(E,L[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s];let o=this.textureLoader;if(r.uri){const l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"";const u=(s.samplers||{})[r.sampler]||{};return h.magFilter=Qa[u.magFilter]||Et,h.minFilter=Qa[u.minFilter]||zn,h.wrapS=el[u.wrapS]||gi,h.wrapT=el[u.wrapT]||gi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const r=i.images[e],o=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;const u=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(u),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(d){return new Promise(function(u,f){let g=u;t.isImageBitmapLoader===!0&&(g=function(m){const p=new dt(m);p.needsUpdate=!0,u(p)}),t.load(Gr.resolveURL(d,s.path),g,void 0,f)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),d.userData.mimeType=r.mimeType||Og(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ue.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ue.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(r);r=s.extensions[Ue.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return i!==void 0&&(r.encoding=i),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Il,jt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new no,jt.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(o,l)),n=l}if(i||s||r){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return oo}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let r;const o={},l=s.extensions||{},c=[];if(l[Ue.KHR_MATERIALS_UNLIT]){const d=i[Ue.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.fromArray(u),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,Ve)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Pe);const h=s.alphaMode||Lr.OPAQUE;if(h===Lr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Lr.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==In&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new fe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&r!==In&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==In&&(o.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==In&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ve)),Promise.all(c).then(function(){const d=new r(o);return s.name&&(d.name=s.name),gn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Bi(i,d,s),d})}createUniqueName(e){const t=We.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Ue.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nl(l,o,t)})}const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=Fg(c),d=i[h];if(d)r.push(d.promise);else{let u;c.extensions&&c.extensions[Ue.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=nl(new Tt,c,t),i[h]={primitive:c,promise:u},r.push(u)}}return Promise.all(r)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?Dg(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let f=0,g=h.length;f<g;f++){const m=h[f],p=r[f];let v;const b=c[f];if(p.mode===zt.TRIANGLES||p.mode===zt.TRIANGLE_STRIP||p.mode===zt.TRIANGLE_FAN||p.mode===void 0)v=s.isSkinnedMesh===!0?new gm(m,b):new Ce(m,b),v.isSkinnedMesh===!0&&!v.geometry.attributes.skinWeight.normalized&&v.normalizeSkinWeights(),p.mode===zt.TRIANGLE_STRIP?v.geometry=$a(v.geometry,fl):p.mode===zt.TRIANGLE_FAN&&(v.geometry=$a(v.geometry,Or));else if(p.mode===zt.LINES)v=new Dl(m,b);else if(p.mode===zt.LINE_STRIP)v=new io(m,b);else if(p.mode===zt.LINE_LOOP)v=new Mm(m,b);else if(p.mode===zt.POINTS)v=new bm(m,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(v.geometry.morphAttributes).length>0&&Ng(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),gn(v,s),p.extensions&&Bi(i,v,p),t.assignFinalMaterial(v),d.push(v)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return d[0];const u=new Nn;t.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(Kr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),gn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),r=i,o=[],l=[];for(let c=0,h=r.length;c<h;c++){const d=r[c];if(d){o.push(d);const u=new Re;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new to(o,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],r=[],o=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const d=n.channels[c],u=n.samplers[d.sampler],f=d.target,g=f.node,m=n.parameters!==void 0?n.parameters[u.input]:u.input,p=n.parameters!==void 0?n.parameters[u.output]:u.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),r.push(this.getDependency("accessor",p)),o.push(u),l.push(f)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],d=c[1],u=c[2],f=c[3],g=c[4],m=[];for(let v=0,b=h.length;v<b;v++){const _=h[v],S=d[v],y=u[v],L=f[v],R=g[v];if(_===void 0)continue;_.updateMatrix();let x;switch(mn[R.path]){case mn.weights:x=Zi;break;case mn.rotation:x=Vn;break;case mn.position:case mn.scale:default:x=$i;break}const E=_.name?_.name:_.uuid,N=L.interpolation!==void 0?Rg[L.interpolation]:xi,X=[];mn[R.path]===mn.weights?_.traverse(function(I){I.morphTargetInfluences&&X.push(I.name?I.name:I.uuid)}):X.push(E);let j=y.array;if(y.normalized){const I=jr(j.constructor),D=new Float32Array(j.length);for(let k=0,Y=j.length;k<Y;k++)D[k]=j[k]*I;j=D}for(let I=0,D=X.length;I<D;I++){const k=new x(X[I]+"."+mn[R.path],S.array,j,N);L.interpolation==="CUBICSPLINE"&&(k.createInterpolant=function(Z){const q=this instanceof Vn?Pg:ql;return new q(this.times,this.values,this.getValueSize()/3,Z)},k.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(k)}}const p=n.name?n.name:"animation_"+e;return new Pm(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const r=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),r})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],r=s.name?i.createUniqueName(s.name):"";return function(){const o=[],l=i._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(u){return i._getNodeRef(i.cameraCache,s.camera,u)})),i._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){o.push(u)});const c=[],h=s.children||[];for(let u=0,f=h.length;u<f;u++)c.push(i.getDependency("node",h[u]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(o),Promise.all(c),d])}().then(function(o){const l=o[0],c=o[1],h=o[2];let d;if(s.isBone===!0?d=new Rl:l.length>1?d=new Nn:l.length===1?d=l[0]:d=new Ze,d!==l[0])for(let u=0,f=l.length;u<f;u++)d.add(l[u]);if(s.name&&(d.userData.name=s.name,d.name=r),gn(d,s),s.extensions&&Bi(n,d,s),s.matrix!==void 0){const u=new Re;u.fromArray(s.matrix),d.applyMatrix4(u)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,h!==null&&d.traverse(function(u){u.isSkinnedMesh&&u.bind(h,zg)});for(let u=0,f=c.length;u<f;u++)d.add(c[u]);return d})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Nn;n.name&&(s.name=i.createUniqueName(n.name)),gn(s,n),n.extensions&&Bi(t,s,n);const r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(i.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++)s.add(l[h]);const c=h=>{const d=new Map;for(const[u,f]of i.associations)(u instanceof jt||u instanceof dt)&&d.set(u,f);return h.traverse(u=>{const f=i.associations.get(u);f!=null&&d.set(u,f)}),d};return i.associations=c(s),s})}}function Bg(a,e,t){const n=e.attributes,i=new Mi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),o.normalized){const h=jr(fi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new T,l=new T;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){const m=jr(fi[u.componentType]);l.multiplyScalar(m)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}a.boundingBox=i;const r=new bi;i.getCenter(r.center),r.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=r}function nl(a,e,t){const n=e.attributes,i=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){a.setAttribute(o,l)})}for(const r in n){const o=Wr[r]||r.toLowerCase();o in a.attributes||i.push(s(n[r],o))}if(e.indices!==void 0&&!a.index){const r=t.getDependency("accessor",e.indices).then(function(o){a.setIndex(o)});i.push(r)}return gn(a,e),Bg(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ig(a,e.targets,t):a})}const Pr=new WeakMap;class kg extends Ai{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Ps(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(i)},n,i)}decodeDracoFile(e,t,n,i){const s={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Pr.has(e)){const l=Pr.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,r=e.byteLength,o=this._getWorker(s,r).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Pr.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Tt;e.index&&t.setIndex(new ft(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,r=i.array,o=i.itemSize;t.setAttribute(s,new ft(r,o))}return t}_loadLibrary(e,t){const n=new Ps(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=Vg.toString(),r=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const r=s.data;switch(r.type){case"decode":i._callbacks[r.id].resolve(r);break;case"error":i._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Vg(){let a,e;onmessage=function(r){const o=r.data;switch(o.type){case"init":a=o.decoderConfig,e=new Promise(function(h){a.onModuleLoaded=function(d){h({draco:d})},DracoDecoderModule(a)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const d=h.draco,u=new d.Decoder,f=new d.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(d,u,f,c),m=g.attributes.map(p=>p.array.buffer);g.index&&m.push(g.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:g},m)}catch(g){console.error(g),self.postMessage({type:"error",id:o.id,error:g.message})}finally{d.destroy(f),d.destroy(u)}});break}};function t(r,o,l,c){const h=c.attributeIDs,d=c.attributeTypes;let u,f;const g=o.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)u=new r.Mesh,f=o.DecodeBufferToMesh(l,u);else if(g===r.POINT_CLOUD)u=new r.PointCloud,f=o.DecodeBufferToPointCloud(l,u);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||u.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const m={index:null,attributes:[]};for(const p in h){const v=self[d[p]];let b,_;if(c.useUniqueIDs)_=h[p],b=o.GetAttributeByUniqueId(u,_);else{if(_=o.GetAttributeId(u,r[h[p]]),_===-1)continue;b=o.GetAttribute(u,_)}m.attributes.push(i(r,o,u,p,v,b))}return g===r.TRIANGULAR_MESH&&(m.index=n(r,o,u)),r.destroy(u),m}function n(r,o,l){const h=l.num_faces()*3,d=h*4,u=r._malloc(d);o.GetTrianglesUInt32Array(l,d,u);const f=new Uint32Array(r.HEAPF32.buffer,u,h).slice();return r._free(u),{array:f,itemSize:1}}function i(r,o,l,c,h,d){const u=d.num_components(),g=l.num_points()*u,m=g*h.BYTES_PER_ELEMENT,p=s(r,h),v=r._malloc(m);o.GetAttributeDataArrayForAllPoints(l,d,p,m,v);const b=new h(r.HEAPF32.buffer,v,g).slice();return r._free(v),{name:c,array:b,itemSize:u}}function s(r,o){switch(o){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}class Gg extends yn.EventEmitter{constructor(e){super(),this.experience=new Te,this.renderer=this.experience.renderer,this.assets=e,this.items={},this.itemsToLaunch=["Accueil","GrassBlade","GrassBladeBig","GrassBlade2","AlgueCylindre","Corail","Corail2","Fish1"],this.queue,this.loaded=0,this.setLoaders(),this.startLoading(this.itemsToLaunch)}setLoaders(){this.loaders={},this.loaders.gltfLoader=new cg,this.loaders.dracoLoader=new kg,this.loaders.dracoLoader.setDecoderPath("/draco/"),this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader)}Remove(){console.log("Prout");var e=document.querySelectorAll(".Curseur");e.forEach(t=>{t.remove()}),this.experience.scene.clear()}startLoading(e){this.queue=e.length;for(let t=0;t<this.assets.length;t++)this.assets[t].type==="glbModel"&&e.includes(this.assets[t].name)&&this.loaders.gltfLoader.load(this.assets[t].path,n=>{console.log(this.assets[t].path),this.singleAssetLoaded(this.assets[t],n)})}singleAssetLoaded(e,t){this.items[e.name]=t,this.loaded++,console.log(this.loaded),this.loaded===this.queue&&(this.emit("ready"),console.log("caca"),this.loaded=0)}}const Hg=[{name:"Accueil",type:"glbModel",path:"./models/Accueil.glb"},{name:"GrassBlade",type:"glbModel",path:"./models/algue3.glb"},{name:"GrassBlade2",type:"glbModel",path:"./models/herbe.glb"},{name:"GrassBladeBig",type:"glbModel",path:"./models/algue4.glb"},{name:"AlgueCylindre",type:"glbModel",path:"./models/algueCylindre3.glb"},{name:"Corail",type:"glbModel",path:"./models/Corail.glb"},{name:"Corail2",type:"glbModel",path:"./models/Corail2.glb"},{name:"Fish1",type:"glbModel",path:"./models/Fish1.glb"},{name:"ble",type:"glbModel",path:"./models/ble.glb"},{name:"Arbre1",type:"glbModel",path:"./models/Arbre1.glb"},{name:"Ruines",type:"glbModel",path:"./models/RuinesMonde4.glb"},{name:"livreETtableM4",type:"glbModel",path:"./models/livreETtableM4.glb"},{name:"LaveVaisselleOuvert",type:"glbModel",path:"./models/LaveVaisselleOuvert.glb"},{name:"Salade",type:"glbModel",path:"./models/Salade.glb"},{name:"Monde1",type:"glbModel",path:"./models/Monde1.glb"},{name:"Monde2",type:"glbModel",path:"./models/monde_2.glb"},{name:"Monde5",type:"glbModel",path:"./models/monde_5.glb"},{name:"Feuille",type:"glbModel",path:"./models/Feuille.glb"}];class Wg{constructor(){this.experience=new Te,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.setRenderer()}setRenderer(){this.renderer=new Pl({canvas:this.canvas,antialias:!0}),this.renderer.physicallyCorrectLights=!0,this.renderer.outputEncoding=Ve,this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio),this.renderer.gammaFactor=2.2}resize(){this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.setPixelRatio(this.sizes.pixelRatio)}update(){this.renderer.render(this.scene,this.camera.perspectiveCamera)}}const il={type:"change"},Rr={type:"start"},sl={type:"end"};class jg extends Gn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xn.ROTATE,MIDDLE:Xn.DOLLY,RIGHT:Xn.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",At),this._domElementKeyEvents=C},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(il),n.update(),s=i.NONE},this.update=function(){const C=new T,F=new Yt().setFromUnitVectors(e.up,new T(0,1,0)),ae=F.clone().invert(),he=new T,oe=new Yt,me=2*Math.PI;return function(){const Ie=n.object.position;C.copy(Ie).sub(n.target),C.applyQuaternion(F),o.setFromVector3(C),n.autoRotate&&s===i.NONE&&E(R()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ne=n.minAzimuthAngle,je=n.maxAzimuthAngle;return isFinite(Ne)&&isFinite(je)&&(Ne<-Math.PI?Ne+=me:Ne>Math.PI&&(Ne-=me),je<-Math.PI?je+=me:je>Math.PI&&(je-=me),Ne<=je?o.theta=Math.max(Ne,Math.min(je,o.theta)):o.theta=o.theta>(Ne+je)/2?Math.max(Ne,o.theta):Math.min(je,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),C.setFromSpherical(o),C.applyQuaternion(ae),Ie.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,d||he.distanceToSquared(n.object.position)>r||8*(1-oe.dot(n.object.quaternion))>r?(n.dispatchEvent(il),he.copy(n.object.position),oe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",ot),n.domElement.removeEventListener("pointercancel",_t),n.domElement.removeEventListener("wheel",Nt),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",Qe),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",At)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Ya,l=new Ya;let c=1;const h=new T;let d=!1;const u=new fe,f=new fe,g=new fe,m=new fe,p=new fe,v=new fe,b=new fe,_=new fe,S=new fe,y=[],L={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function x(){return Math.pow(.95,n.zoomSpeed)}function E(C){l.theta-=C}function N(C){l.phi-=C}const X=function(){const C=new T;return function(ae,he){C.setFromMatrixColumn(he,0),C.multiplyScalar(-ae),h.add(C)}}(),j=function(){const C=new T;return function(ae,he){n.screenSpacePanning===!0?C.setFromMatrixColumn(he,1):(C.setFromMatrixColumn(he,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(ae),h.add(C)}}(),I=function(){const C=new T;return function(ae,he){const oe=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;C.copy(me).sub(n.target);let de=C.length();de*=Math.tan(n.object.fov/2*Math.PI/180),X(2*ae*de/oe.clientHeight,n.object.matrix),j(2*he*de/oe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(X(ae*(n.object.right-n.object.left)/n.object.zoom/oe.clientWidth,n.object.matrix),j(he*(n.object.top-n.object.bottom)/n.object.zoom/oe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function D(C){n.object.isPerspectiveCamera?c/=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function k(C){n.object.isPerspectiveCamera?c*=C:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/C)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(C){u.set(C.clientX,C.clientY)}function Z(C){b.set(C.clientX,C.clientY)}function q(C){m.set(C.clientX,C.clientY)}function ee(C){f.set(C.clientX,C.clientY),g.subVectors(f,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*g.x/F.clientHeight),N(2*Math.PI*g.y/F.clientHeight),u.copy(f),n.update()}function Q(C){_.set(C.clientX,C.clientY),S.subVectors(_,b),S.y>0?D(x()):S.y<0&&k(x()),b.copy(_),n.update()}function ue(C){p.set(C.clientX,C.clientY),v.subVectors(p,m).multiplyScalar(n.panSpeed),I(v.x,v.y),m.copy(p),n.update()}function B(C){C.deltaY<0?k(x()):C.deltaY>0&&D(x()),n.update()}function K(C){let F=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?N(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,n.keyPanSpeed),F=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?N(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(0,-n.keyPanSpeed),F=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(n.keyPanSpeed,0),F=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):I(-n.keyPanSpeed,0),F=!0;break}F&&(C.preventDefault(),n.update())}function ne(){if(y.length===1)u.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);u.set(C,F)}}function se(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),F=.5*(y[0].pageY+y[1].pageY);m.set(C,F)}}function U(){const C=y[0].pageX-y[1].pageX,F=y[0].pageY-y[1].pageY,ae=Math.sqrt(C*C+F*F);b.set(0,ae)}function be(){n.enableZoom&&U(),n.enablePan&&se()}function ge(){n.enableZoom&&U(),n.enableRotate&&ne()}function pe(C){if(y.length==1)f.set(C.pageX,C.pageY);else{const ae=ye(C),he=.5*(C.pageX+ae.x),oe=.5*(C.pageY+ae.y);f.set(he,oe)}g.subVectors(f,u).multiplyScalar(n.rotateSpeed);const F=n.domElement;E(2*Math.PI*g.x/F.clientHeight),N(2*Math.PI*g.y/F.clientHeight),u.copy(f)}function le(C){if(y.length===1)p.set(C.pageX,C.pageY);else{const F=ye(C),ae=.5*(C.pageX+F.x),he=.5*(C.pageY+F.y);p.set(ae,he)}v.subVectors(p,m).multiplyScalar(n.panSpeed),I(v.x,v.y),m.copy(p)}function He(C){const F=ye(C),ae=C.pageX-F.x,he=C.pageY-F.y,oe=Math.sqrt(ae*ae+he*he);_.set(0,oe),S.set(0,Math.pow(_.y/b.y,n.zoomSpeed)),D(S.y),b.copy(_)}function Ae(C){n.enableZoom&&He(C),n.enablePan&&le(C)}function _e(C){n.enableZoom&&He(C),n.enableRotate&&pe(C)}function ot(C){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",mt),n.domElement.addEventListener("pointerup",Qe)),J(C),C.pointerType==="touch"?A(C):$e(C))}function mt(C){n.enabled!==!1&&(C.pointerType==="touch"?M(C):ke(C))}function Qe(C){te(C),y.length===0&&(n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",mt),n.domElement.removeEventListener("pointerup",Qe)),n.dispatchEvent(sl),s=i.NONE}function _t(C){te(C)}function $e(C){let F;switch(C.button){case 0:F=n.mouseButtons.LEFT;break;case 1:F=n.mouseButtons.MIDDLE;break;case 2:F=n.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Xn.DOLLY:if(n.enableZoom===!1)return;Z(C),s=i.DOLLY;break;case Xn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;q(C),s=i.PAN}else{if(n.enableRotate===!1)return;Y(C),s=i.ROTATE}break;case Xn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;Y(C),s=i.ROTATE}else{if(n.enablePan===!1)return;q(C),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Rr)}function ke(C){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;ee(C);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(C);break;case i.PAN:if(n.enablePan===!1)return;ue(C);break}}function Nt(C){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(C.preventDefault(),n.dispatchEvent(Rr),B(C),n.dispatchEvent(sl))}function At(C){n.enabled===!1||n.enablePan===!1||K(C)}function A(C){switch(re(C),y.length){case 1:switch(n.touches.ONE){case qn.ROTATE:if(n.enableRotate===!1)return;ne(),s=i.TOUCH_ROTATE;break;case qn.PAN:if(n.enablePan===!1)return;se(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),s=i.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Rr)}function M(C){switch(re(C),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;le(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_e(C),n.update();break;default:s=i.NONE}}function V(C){n.enabled!==!1&&C.preventDefault()}function J(C){y.push(C)}function te(C){delete L[C.pointerId];for(let F=0;F<y.length;F++)if(y[F].pointerId==C.pointerId){y.splice(F,1);return}}function re(C){let F=L[C.pointerId];F===void 0&&(F=new fe,L[C.pointerId]=F),F.set(C.pageX,C.pageY)}function ye(C){const F=C.pointerId===y[0].pointerId?y[1]:y[0];return L[F.pointerId]}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",ot),n.domElement.addEventListener("pointercancel",_t),n.domElement.addEventListener("wheel",Nt,{passive:!1}),this.update()}}class Xg{constructor(){this.experience=new Te,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.createPerspectiveCamera()}createPerspectiveCamera(){this.perspectiveCamera=new St(35,this.sizes.aspect,.1,1e3),this.scene.add(this.perspectiveCamera),this.perspectiveCamera.position.z=-3.5,this.perspectiveCamera.position.y=4,this.perspectiveCamera.position.x=11,this.perspectiveCamera.rotation.z=2.8,this.perspectiveCamera.rotation.y=1.08,this.perspectiveCamera.rotation.x=-2.76,this.perspectiveCamera.rotation.isEuler=!0;const e=new Qm(10);this.scene.add(e)}setOrbitControls(){this.conrtols=new jg(this.perspectiveCamera,this.canvas),this.conrtols.enableDamping=!0,this.conrtols.enableZoom=!0}resize(){this.perspectiveCamera.aspect=this.sizes.aspect,this.perspectiveCamera.updateProjectionMatrix()}update(){}}class Yl extends yn.EventEmitter{constructor(){super(),this.Experience=new Te,this.bouton}SetRetour(){this.Experience.ActualWorld!=this.Experience.Worlds.Accueil&&(this.bouton=document.querySelector(".retour-accueil"),console.log(this.bouton),this.bouton?this.bouton.addEventListener("click",()=>{location.reload()}):this.bouton===null&&window.requestAnimationFrame(()=>this.SetRetour()))}}var qg=`varying vec2 vUv;\r
attribute vec2 uv;\r
attribute vec3 position;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;

void main(){\r
      vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,Yg=`precision highp float;\r
uniform float distance;\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}\r
precision mediump float;\r
varying vec2 vUv;\r
uniform vec3 colorB; \r
uniform float time;

void main(){\r
    float value1 = 0.05;\r
    vec2 st = vUv.xy;\r
    vec3 color1 = texture(1000.0,50.0,0.2,st);\r
    vec3 oceanBlue = vec3(0.659,0.902,0.827);\r
    vec2 toCenter = vec2(1, 0.5)-st;\r
    vec3 pct = vec3(st.x);\r
    pct.r = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    pct.g = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    pct.b = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r

    vec3 mix1 = mix(color1,oceanBlue,0.8);

    vec3 color2 = texture(500.0,50.0,0.5,st);

    vec3 mix2 = mix(color2,mix1,0.9);

    vec3 color3 = texture(8000.0,500.0,0.1,st);

    vec3 mix3 = mix(color3,mix2,0.8);

    vec3 mix4 = mix(mix3,colorB,pct*0.25);\r
    gl_FragColor = vec4(mix4,1.0);\r
}`,Bs=`uniform sampler2D noiseTexture;\r
float getYPosition(vec2 p, float a){\r
	return a*(2.0*texture2D(noiseTexture, (p/250.0+0.5)).r - 0.5);\r
}

varying vec2 vUv;\r
uniform float time;\r
uniform float amplitude;\r
uniform vec3 WorldOffset;\r
    precision mediump float;\r
    attribute vec3 position;\r
    attribute vec3 normal;\r
    attribute vec3 offset;\r
    attribute vec2 uv;\r
    attribute vec2 halfRootAngle;\r
    attribute float scale;\r
    attribute float index;\r
    

    uniform float delta;\r
    uniform float posX;\r
    uniform float posZ;\r
    uniform float radius;\r
    uniform float width;\r
    uniform float move;

    uniform mat4 modelViewMatrix;\r
    uniform mat4 projectionMatrix;\r

    varying vec3 vNormal;\r
    varying vec3 vPosition;\r
    varying float frc;\r
    varying float idx;\r
    varying vec3 pos;\r

    const float PI = 3.1415;\r
    const float TWO_PI = 2.0 * PI;\r
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){\r
  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\r
}

    float placeOnSphere(vec3 v){\r
    float theta = acos(v.z/radius);\r
    float phi = acos(v.x/(radius * sin(theta)));\r
    float sV = radius * sin(theta) * sin(phi);\r
    
    if(sV != sV){\r
        sV = v.y;\r
    }\r
    return sV;\r
    }\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
void main() {\r

	
  vec3 vPosition = position;\r
	\r
 

	
	vNormal = normal;\r
	vNormal.y /= scale;

	
  vec4 direction = vec4(0.0, halfRootAngle.x, 0.0, halfRootAngle.y);\r
	vPosition = rotateVectorByQuaternion(vPosition, direction);\r
	vNormal = rotateVectorByQuaternion(vNormal, direction);

  
  vUv = uv;

	\r
	vec3 globalPos;\r
	vec3 tile;

	globalPos.x = offset.x-posX*delta;\r
	globalPos.z = offset.z-posZ*delta;

	tile.x = floor((globalPos.x + 0.5 * width) / width);\r
	tile.z = floor((globalPos.z + 0.5 * width) / width);

	pos.x = globalPos.x - tile.x * width;\r
	pos.z = globalPos.z - tile.z * width;

	pos.y += getYPosition(vec2(pos.x+delta*posX, pos.z+delta*posZ), amplitude);\r
	\r
 \r
	
  vec2 fractionalPos = 0.5 + offset.xz / width;\r
  
  fractionalPos *= TWO_PI;

  
  float noise = 0.5 + 0.5 * sin(fractionalPos.x + time);\r
  float halfAngle = -noise * 0.1;\r
  noise = 0.5 + 0.5 * cos(fractionalPos.y + time);\r
  halfAngle -= noise * move;

	direction = normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle)));

	
  vPosition = rotateVectorByQuaternion(vPosition, direction);\r
	vNormal = rotateVectorByQuaternion(vNormal, direction);

	
	vPosition += pos;\r
  vPosition += WorldOffset;\r
	
	idx = index;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,Ei=`#define PI 3.14159265359\r
precision highp float;\r
uniform float distance;\r
uniform sampler2D noiseTexture;\r
float getYPosition(vec2 p){\r
	return 5.0*(2.0*texture2D(noiseTexture, (p/250.0+0.5)).r - 0.5);\r
}\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}

uniform vec3 colorA;\r
uniform vec3 colorB; \r
uniform float time;\r
    \r
  precision mediump float;\r
  varying vec2 vUv;\r
  varying vec3 vPosition;

  void main() {\r
    float value1 = 30.0/distance;

    vec2 st = gl_FragCoord.xy/vec2(1300.0,1000.0);\r
    vec2 toCenter = vec2(1, 0.5)-st;\r
    float angle = atan(toCenter.y,toCenter.x);\r
    float radius = length(toCenter)*2.0;\r
    vec3 pct = vec3(st.x);\r
    pct.r = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    pct.g = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    pct.b = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
  	vec3 baseColor =mix(colorA, colorB, pct*0.25);;\r
    float clarity = ( vUv.y *0.5) + 0.5;\r
  \r
    gl_FragColor = vec4( baseColor * clarity, 1 );\r
  }`;let Kg=class{constructor(){this.worldpos=new T(0,-2,0),this.experience=new Te,this.ressources=this.experience.ressources,this.camera=this.experience.camera,this.scene=this.experience.scene,this.grassblade=this.ressources.items.GrassBlade,this.grassMaterial,this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=200,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/HeightMapAccueilPlaceholder.png"),this.instanceNumber=5e5,this.distance,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{distance:{value:this.distance},WorldOffset:{value:this.worldpos},amplitude:{value:12},colorA:{value:new T(.961,.706,.663)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width},move:{value:.4}},vertexShader:Bs,fragmentShader:Ei,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}distanceVector(e,t){var n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;return Math.sqrt(n*n+i*i+s*s)}update(){this.distance=this.distanceVector(this.camera.perspectiveCamera.position,new T(0,0,0)),this.grassMaterial.uniforms.distance.value=this.distance,this.grassMaterial.uniforms.time.value+=.03}};class Zg{constructor(){this.experience=new Te,this.ressources=this.experience.ressources,this.scene=this.experience.scene,this.grassblade=this.ressources.items.GrassBlade2,this.grassMaterial,this.worldpos=new T(0,-3,0),this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=100,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/HeightMapAccueilPlaceholder.png"),this.instanceNumber=4e4,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{WorldOffset:{value:this.worldpos},amplitude:{value:4},colorA:{value:new T(1,.788,.451)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width},move:{value:.4}},vertexShader:Bs,fragmentShader:Ei,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}update(){this.grassMaterial.uniforms.time.value+=.03}}class $g{constructor(){this.worldpos=new T(0,-2,0),this.experience=new Te,this.ressources=this.experience.ressources,this.scene=this.experience.scene,this.grassblade=this.ressources.items.GrassBladeBig,this.grassMaterial,this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=200,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/HeightMapAccueilPlaceholder.png"),this.instanceNumber=5e4,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{WorldOffset:{value:this.worldpos},amplitude:{value:12},colorA:{value:new T(.961,.74,.663)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width},move:{value:.4}},vertexShader:Bs,fragmentShader:Ei,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}update(){this.grassMaterial.uniforms.time.value+=.03}}var ks=`uniform sampler2D noiseTexture;\r
float getYPosition(vec2 p, float a){\r
	return a*(2.0*texture2D(noiseTexture, (p/250.0+0.5)).r - 0.5);\r
}

varying vec2 vUv;\r
uniform float time;\r
uniform float amplitude;\r
uniform vec3 WorldOffset;\r
uniform float scaling;\r
    precision mediump float;\r
    attribute vec3 position;\r
    attribute vec3 normal;\r
    attribute vec3 offset;\r
    attribute vec2 uv;\r
    attribute vec2 halfRootAngle;\r
    attribute float scale;\r
    attribute float index;\r
    \r
varying vec3 pos;\r
    uniform float delta;\r
    uniform float posX;\r
    uniform float posZ;\r
    uniform float radius;\r
    uniform float width;

    uniform mat4 modelViewMatrix;\r
    uniform mat4 projectionMatrix;\r

    varying vec3 vNormal;\r
    varying vec3 vPosition;\r
    varying float frc;\r
    varying float idx;

    const float PI = 3.1415;\r
    const float TWO_PI = 2.0 * PI;\r
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){\r
  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\r
}

    float placeOnSphere(vec3 v){\r
    float theta = acos(v.z/radius);\r
    float phi = acos(v.x/(radius * sin(theta)));\r
    float sV = radius * sin(theta) * sin(phi);\r
    
    if(sV != sV){\r
        sV = v.y;\r
    }\r
    return sV;\r
    }\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
void main() {\r

	
  vec3 vPosition = position;\r
		vPosition.y *= scale*scaling;\r
 

	
	vNormal = normal;\r
	vNormal.y /= scale;

	
  vec4 direction = vec4(0.0, halfRootAngle.x, 0.0, halfRootAngle.y);\r
	vPosition = rotateVectorByQuaternion(vPosition, direction);\r
	vNormal = rotateVectorByQuaternion(vNormal, direction);

  
  vUv = uv;\r

	vec3 globalPos;\r
	vec3 tile;

	globalPos.x = offset.x-posX*delta;\r
	globalPos.z = offset.z-posZ*delta;

	tile.x = floor((globalPos.x + 0.5 * width) / width);\r
	tile.z = floor((globalPos.z + 0.5 * width) / width);

	pos.x = globalPos.x - tile.x * width;\r
	pos.z = globalPos.z - tile.z * width;

	pos.y += getYPosition(vec2(pos.x+delta*posX, pos.z+delta*posZ), amplitude);\r
	\r
 \r
	
  vec2 fractionalPos = 0.5 + offset.xz / width;\r
  
  fractionalPos *= TWO_PI;

  
  float noise = 0.5 + 0.5 * sin(fractionalPos.x + time);\r
  float halfAngle = -noise * 0.1;\r
  noise = 0.5 + 0.5 * cos(fractionalPos.y + time);\r
  halfAngle -= noise * 0.05;

	direction = normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle)));\r

	
	vPosition += pos;\r
  vPosition += WorldOffset;\r
	
	idx = index;\r
  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`;class Jg{constructor(){this.experience=new Te,this.ressources=this.experience.ressources,this.scene=this.experience.scene,this.grassblade=this.ressources.items.AlgueCylindre,this.grassMaterial,this.worldpos=new T(0,-3,0),this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=100,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/HeightMapAccueilPlaceholder.png"),this.instanceNumber=150,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{scaling:{value:2},WorldOffset:{value:this.worldpos},amplitude:{value:4},colorA:{value:new T(.659,.902,.827)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width}},vertexShader:ks,fragmentShader:Ei,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}update(){this.grassMaterial.uniforms.time.value+=.03}}class Qg{constructor(){this.worldpos=new T(0,-2,0),this.experience=new Te,this.ressources=this.experience.ressources,this.scene=this.experience.scene,this.grassblade=this.ressources.items.Corail,this.grassMaterial,this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=100,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/HeightMapAccueilPlaceholder.png"),this.instanceNumber=50,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{scaling:{value:.6},WorldOffset:{value:this.worldpos},amplitude:{value:12},colorA:{value:new T(.992,.875,.855)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width}},vertexShader:ks,fragmentShader:Ei,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}update(){this.grassMaterial.uniforms.time.value+=.03}}class e0{constructor(){this.worldpos=new T(0,-2,0),this.experience=new Te,this.ressources=this.experience.ressources,this.scene=this.experience.scene,this.grassblade=this.ressources.items.Corail2,this.grassMaterial,this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=100,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/HeightMapAccueilPlaceholder.png"),this.instanceNumber=50,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{scaling:{value:.6},WorldOffset:{value:this.worldpos},amplitude:{value:12},colorA:{value:new T(.918,.808,.973)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width}},vertexShader:ks,fragmentShader:Ei,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}update(){this.grassMaterial.uniforms.time.value+=.03}}var t0=`varying vec2 Texcoord;\r
varying vec2 vUv;\r
precision mediump float;\r
attribute vec3 position;\r
attribute vec3 offset;\r
attribute vec2 uv;\r
attribute vec2 texcoord;\r
attribute float index;\r
attribute float velocity;\r
uniform float posX;\r
uniform float posZ;\r
uniform float posY;

    uniform float delta;\r
uniform float width;\r
uniform float height;\r
uniform float depth;\r

varying float idx;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform float time;\r
 vec3 rotateVectorByQuaternion(vec3 v, vec4 q){\r
  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\r
}

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
void main(){\r
  
    vec3 vPosition = position;\r

    
     vUv = uv;

    vec3 pos;\r
    vec3 globalPos;\r
    vec3 tile;\r
    vec4 rotation =normalize( vec4(0.0,sin(noise(pos.xz)- time/4.0)+sin(10.0*(noise(pos.xz)- time/2.0))/8.0,0.0,cos(noise(pos.xz)- time/4.0)));

    globalPos.x = offset.x-posX*delta;\r
    globalPos.z = offset.z-posZ*delta;\r
    globalPos.y = offset.y-posY*delta;

	tile.x = floor((globalPos.x + 0.5 * width) / width);\r
	tile.z = floor((globalPos.z + 0.5 * depth) / depth);\r
    tile.y = floor((globalPos.y + 0.5 * height) / height);

	pos.x = globalPos.x - tile.x * width;\r
	pos.z = globalPos.z - tile.z * depth;\r
    pos.y = globalPos.y - tile.y * height;

    idx = index;

    vPosition = rotateVectorByQuaternion(vPosition,rotation);\r
    
	vPosition += pos;

    vPosition.x += sin(noise(pos.xz)- time/2.0)*velocity*65.0+sin(10.0*(noise(pos.xz)- time/2.0))/16.0*velocity*65.0;

    vPosition.z += cos(noise(pos.xz)- time/2.0)*velocity*65.0;

    vPosition.y += 20.0+sin(noise(pos.xz)- time/2.0)*velocity*5.0;\r

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,n0=`uniform sampler2D Texture;

precision mediump float;\r
uniform float time;\r
uniform vec3 colorB; \r
uniform float distance;\r
varying vec2 vUv;\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
void main(){\r
    float value1 = 20.0/distance;\r
    vec2 st = vUv.xy;\r
     vec2 st2 = gl_FragCoord.xy/vec2(1300.0,1000.0);\r
    vec4 color = texture2D(Texture,st);\r
    vec2 toCenter = vec2(1, 0.5)-st2;\r
    vec3 pct = vec3(st2.x);\r
    pct.r = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    pct.g = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    pct.b = sin((noise(toCenter/value1)*10.0)+200.0-time/2.0);\r
    vec3 baseColor = mix(vec3(color), colorB, pct*0.15);\r
        float clarity = ( vUv.x *0.55) + 0.7;\r
    gl_FragColor = vec4(baseColor*clarity,1.0);\r
}`;class i0{constructor(){this.experience=new Te,this.ressources=this.experience.ressources,this.scene=this.experience.scene,this.Fish=this.ressources.items.Fish1,this.instanceNumber=400,this.width=60,this.height=50,this.depth=80,this.fishmat,this.pos=new T(.01,.01,.01),this.texture=new xt().load("assets/images/poisson1_colo1_texture_dust.png"),this.setModel()}setModel(){const e=this.Fish.scene.children[0].geometry;e.computeVertexNormals(),console.log(this.Fish);var t=new kt;t.index=e.index,t.attributes.position=e.attributes.position,t.attributes.uv=e.attributes.uv,t.attributes.normal=e.attributes.normal;var n=[],i=[],s=[];for(let h=0;h<this.instanceNumber;h++)n.push(h/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.depth-this.depth/2,this.y=Math.random()*this.height-this.height/2,i.push(this.x,this.y,this.z),this.velocity=Kr.clamp(Math.random()*2,1,3),s.push(this.velocity);var r=new Me(new Float32Array(i),3),o=new Me(new Float32Array(n),1),l=new Me(new Float32Array(s),1);t.setAttribute("offset",r),t.setAttribute("index",o),t.setAttribute("velocity",l),this.fishmat=new Je({uniforms:{distance:{value:20},Texture:{value:this.texture},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.z},posY:{type:"float",value:this.pos.y},width:{type:"float",value:this.width},height:{type:"float",value:this.height},depth:{type:"float",value:this.depth}},vertexShader:t0,fragmentShader:n0,side:Pe});var c=new Ce(t,this.fishmat);this.scene.add(c)}update(){this.fishmat.uniforms.time.value+=.03}}class Wn extends yn.EventEmitter{constructor(){super(),this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.sizes=this.experience.sizes,this.ressources=this.experience.ressources,this.time=this.experience.time,this.LockMove=!1,this.currentfocus="",this.currentobject,this.hoverfocus="",this.Mouse=new fe(0,0),window.addEventListener("click",e=>this.raycast(e,!1,!1)),window.addEventListener("touchend",e=>this.raycast(e,!0,!1)),this.camera.perspectiveCamera.lookAt(new T(0,2,-3.5)),this.camera.perspectiveCamera.position.copy(new T(86.07,12.38,-1.31)),this.onMouseMove()}onMouseMove(){window.addEventListener("mousemove",e=>{this.Mouse.x=e.clientX/window.innerWidth*2-1,this.Mouse.y=-(e.clientY/window.innerHeight)*2+1,this.experience.ActualWorld===this.experience.Worlds.Accueil&&this.raycast(e,!1,!0)})}raycast(e,t=!1,n=!1){const i=new Jm;var s={};t?(s.x=2*(e.changedTouches[0].clientX/window.innerWidth)-1,s.y=1-2*(e.changedTouches[0].clientY/window.innerHeight)):(s.x=2*(e.clientX/window.innerWidth)-1,s.y=1-2*(e.clientY/window.innerHeight)),i.setFromCamera(s,this.camera.perspectiveCamera);var r=i.intersectObjects(this.scene.children,!0);if(r[0]){var o=r[0].object;n?n&&(this.hoverfocus=o.name):(this.currentfocus=o.name,this.currentobject=o,this.emit(o.name))}}update(){this.camera.perspectiveCamera.rotation.y=Kr.lerp(this.camera.perspectiveCamera.rotation.y,1.5+this.Mouse.y*Math.PI/5,.006)}getCoordinates(e,t){var n=new T;e.localToWorld(n),n.project(t);var i=Math.round((n.x+1)*this.sizes.width/2),s=Math.round((1-n.y)*this.sizes.height/2);return new fe(i,s)}}class jn{constructor(){this.body=document.querySelector("body"),this.canvas=document.querySelector("canvas"),this.head=document.querySelector("head"),this.experience=new Te,this.sizes=this.experience.sizes,this.Retour_accueil=new Yl}includeHtml(){var e,t,n,i;e=document.getElementsByTagName("*");for(let s=0;s<e.length;s++)if(t=e[s],n=t.getAttribute("w3-include-html"),n){i=new XMLHttpRequest,i.onreadystatechange=function(){this.readyState==4&&(this.status==200&&(t.innerHTML=this.responseText),this.status==404&&(t.innerHTML="Page not found."),t.removeAttribute("w3-include-html"))},i.open("GET",n,!0),i.send();return}}addcss(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("href",e),t.appendChild(n)}addscript(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.setAttribute("src",e),t.appendChild(n)}getInfos(e){var t=[];for(let n=1;n<e+1;n++)t.push(this.baseroot+"Info"+n+".html");return t}setHtml(e){var t=document.createElement("div");return t.setAttribute("w3-include-html",e),t.classList.add("Monde"),this.body.appendChild(t),this.includeHtml(),t}getCoordinates(e,t){var n=new T;e.localToWorld(n),n.project(t);var i=Math.round((n.x+1)*this.sizes.width/2),s=Math.round((1-n.y)*this.sizes.height/2);return new fe(i,s)}}class s0 extends Wn{constructor(){super(),this.body=document.querySelector("body"),this.text,this.SetElement(),this.curseur,this.Monde1=this.scene.children[2].children[0],this.Monde2=this.scene.children[2].children[1],this.Monde3=this.scene.children[2].children[2],this.Monde4=this.scene.children[2].children[3],this.Monde5=this.scene.children[2].children[4],this.currenttext="Le cycle éternel",this.foc=this.Monde1}SetElement(){this.curseur=document.createElement("div"),this.text=document.createElement("p"),this.curseur.appendChild(this.text),this.curseur.classList.add("cross","absolute","bg-red-600","p-2","rounded-3xl","Curseur","bg-[#2D2C28]","border-solid","border-4","border-[#F4F1DB]"),this.body.appendChild(this.curseur)}update(){var e=this.getCoordinates(this.foc,this.camera.perspectiveCamera);this.text.textContent=this.currenttext,this.curseur.style.top=e.y-140+"px",this.curseur.style.left=e.x-100+"px",this.hoverfocus==="Monde1"?(this.currenttext="Le cycle éternel",this.foc=this.Monde1):this.hoverfocus==="Monde2"?(this.currenttext="Mise en garde",this.foc=this.Monde2):this.hoverfocus==="Monde3"?(this.currenttext="Le déclin",this.foc=this.Monde3):this.hoverfocus==="Monde4"?(this.currenttext="Retombée",this.foc=this.Monde4):this.hoverfocus==="Monde5"&&(this.currenttext="Rédemption",this.foc=this.Monde5)}}class r0 extends jn{constructor(){super(),this.setHtml()}setHtml(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde0/html/hudmonde0.html"),t.classList.add("Monde","D"),this.body.appendChild(t),this.includeHtml()}update(){}}let o0=class{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.ressources=this.experience.ressources,this.camera=this.experience.camera,this.room=this.ressources.items.Accueil,this.actualRoom=this.room.scene,this.light=new zl(65535,1),console.log(this.actualRoom),this.setModel(),this.GrassBig=new $g,this.Grass=new Kg,this.Grass2=new Zg,this.AlgueCylindre=new Jg,this.Corail=new Qg,this.Corail2=new e0,this.Fish=new i0,this.rochersmat,this.viseur=new s0,this.hudmonde0=new r0}setModel(){this.rochersmat=new Je({uniforms:{distance:{value:this.distance},time:{value:1}},vertexShader:qg,fragmentShader:Yg,side:Pe}),this.actualRoom.children[5].material=this.rochersmat,this.scene.add(this.actualRoom),console.log(this.actualRoom.children[0]),this.scene.add(this.light),this.light.position.y=2e3,this.light.rotateZ(20)}distanceVector(e,t){var n=e.x-t.x,i=e.y-t.y,s=e.z-t.z;return Math.sqrt(n*n+i*i+s*s)}resize(){}update(){this.distance=this.distanceVector(this.camera.perspectiveCamera.position,new T(0,0,0)),this.rochersmat.uniforms.distance.value=this.distance,this.rochersmat.uniforms.time.value+=.03,this.Grass.update(),this.GrassBig.update(),this.Grass2.update(),this.AlgueCylindre.update(),this.Corail.update(),this.Corail2.update(),this.Fish.update(),this.Fish.fishmat.uniforms.distance.value=this.distance,this.viseur.update()}};var ho=`precision mediump float;\r
attribute vec3 position;\r
attribute vec3 Uv;\r
varying vec3 vposition;\r
varying vec3 vUv;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform float scale;\r
uniform float time;\r
uniform vec3 Worldpos;

varying float vHeight; 

struct gln_tGerstnerWaveOpts {\r
    vec2 direction;   
    float steepness;  
    float wavelength; 
};\r
const float PI = 3.1415;

vec3 gln_GerstnerWave(vec3 p, gln_tGerstnerWaveOpts opts, float time) {\r
    float steepness = opts.steepness;\r
    float wavelength = opts.wavelength;

    float k = 2.0 * PI / wavelength;\r
    float c = sqrt(9.8 / k);\r
    vec2 d = normalize(opts.direction);\r
    float f = k * (dot(d, p.xy) - c + time);\r
    float a = steepness / k;

    return vec3(\r
        d.x * (a * cos(f)),\r
        a * sin(f),\r
        d.y * (a * cos(f))\r
    );\r
}

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    u = smoothstep(0.,1.,f);

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
uniform float wavelengthA;\r
uniform float wavelengthB;\r
uniform float wavelengthC;\r
uniform float wavelengthD;\r
gln_tGerstnerWaveOpts A = gln_tGerstnerWaveOpts(vec2(0.0, -1.0), 0.2*scale, wavelengthA*scale);\r
gln_tGerstnerWaveOpts B = gln_tGerstnerWaveOpts(vec2(0.0, 1.0), 0.15*scale, wavelengthB*scale);\r
gln_tGerstnerWaveOpts C = gln_tGerstnerWaveOpts(vec2(1.0, 1.0),0.35*scale, wavelengthC*scale);\r
gln_tGerstnerWaveOpts D = gln_tGerstnerWaveOpts(vec2(-1.0, -1.0),0.2*scale, wavelengthD*scale);\r

vec3 displace(vec3 point){\r
    vec3 p = point;\r
    vec3 n = vec3(0.0);

    n.z += noise(p.xy*2.0+(time*0.5));

    n += gln_GerstnerWave(p, A, time).xzy;\r
    n += gln_GerstnerWave(p, B, time).xzy * 0.5*scale;\r
    n += gln_GerstnerWave(p, C, time).xzy * 0.45*scale;\r
    n += gln_GerstnerWave(p, D, time).xzy * 0.2*scale;

    vHeight = n.z;

    return point+n;\r
}\r
void main(){\r
    vUv = Uv;\r
    vposition = position;\r
    vposition = vposition+displace(vposition);\r
    vposition += Worldpos;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vposition, 1.0);\r
}`,uo=`precision mediump float;\r
varying vec3 vUv;

uniform float offset;\r
uniform float contrast;\r
uniform float brightness;\r
varying vec3 vposition;\r
uniform float time;\r
uniform vec3 campos;\r
uniform vec3 oceanBlue;\r
uniform vec3 oceanBlue2;\r
uniform vec3 waterHighlight;\r
uniform vec3 White;\r
uniform vec3 FogColor;\r
varying float vHeight; \r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    u = smoothstep(0.,1.,f);

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}

void main(){\r
     float value1 = 200.0;\r
    vec2 st = vUv.xy;\r
    float mask = (vHeight - offset) * contrast;\r
    float H = vHeight;\r
    
    
    
    
    

 \r
    vec3 diffuseColor = mix(oceanBlue, oceanBlue2, mask);\r
    \r
    vec3 diffuseColor2 = mix(diffuseColor, waterHighlight,H/0.5);\r
    vec3 diffuseColor3 = mix(diffuseColor2, White,H/0.4);\r
    diffuseColor2 *= brightness;\r
    float fogAmount;\r
    fogAmount += exp(-distance(campos,vposition)*0.03);\r
    vec3 Mix1 = mix(FogColor,diffuseColor3,fogAmount);\r
    gl_FragColor = vec4(Mix1,1.0);\r
}`;let a0=class{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.material,this.geometry,this.setModel()}setModel(){this.material=new Je({uniforms:{campos:{value:new T(0,0,0)},time:{value:1},offset:{value:.01},contrast:{value:.02},brightness:{value:.001},scale:{value:2},oceanBlue:{value:new T(.65,.65,.65)},oceanBlue2:{value:new T(.9,.9,.9)},waterHighlight:{value:new T(.65,.65,.65)},White:{value:new T(.5,.5,.5)},wavelengthA:{value:9},wavelengthB:{value:7.5},wavelengthC:{value:2},wavelengthD:{value:8},Worldpos:{value:new T(0,0,0)},FogColor:{value:new T(.592,.843,.941)}},vertexShader:ho,fragmentShader:uo,side:Pe}),this.geometry=new cn(100,100,512,512);const e=new Ce(this.geometry,this.material);e.rotateX(-Math.PI/2),this.scene.add(e)}update(){this.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position),this.material.uniforms.time.value+=.005}};class Kl{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.material,this.geometry,this.setModel()}setModel(){this.material=new Je({uniforms:{campos:{value:new T(0,0,0)},time:{value:1},offset:{value:.7},contrast:{value:2.5},brightness:{value:1.1},scale:{value:1},oceanBlue:{value:new T(.494,.643,.851)},oceanBlue2:{value:new T(1,.718,0)},waterHighlight:{value:new T(0,.6,.5)},White:{value:new T(0,1,1)},wavelengthA:{value:1.2},wavelengthB:{value:1.5},wavelengthC:{value:1.3},wavelengthD:{value:1},Worldpos:{value:new T(0,0,0)},FogColor:{value:new T(.592,.843,.941)}},vertexShader:ho,fragmentShader:uo,side:Pe}),this.geometry=new cn(100,100,512,512);const e=new Ce(this.geometry,this.material);e.rotateX(-Math.PI/2),this.scene.add(e)}update(){this.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position),this.material.uniforms.time.value+=.005}}var l0=`precision mediump float;\r
uniform sampler2D noiseTexture;\r
float getYPosition(vec2 p, float a){\r
	return a*(2.0*texture2D(noiseTexture, (p/50.0+0.5)).r - 0.5);\r
}\r
varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vposition;

attribute vec2 uv;\r
attribute vec3 position;

uniform vec3 WorldOffset;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 normalMatrix;

void main(){\r
      vUv = uv;\r
      vposition = position;

      	

	vposition.z += getYPosition(vposition.xy,3.0);\r
    vposition += WorldOffset;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vposition, 1.0);

}`,c0=`precision mediump float;\r
varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vposition;\r
uniform vec3 campos;\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    u = smoothstep(0.,1.,f);

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}

void main(){\r
    vec2 st = vUv;\r
    vec3 gris = vec3(1.0,1.0,1.0);\r
    vec3 grisfonc = vec3(0.0,0.5,0.0);\r
     vec3 noir = vec3(0.0,0.0,0.0);\r
    vec3 color1 = texture(20.0,100.0,0.01,st);\r
     vec3 mix1 = mix(color1,gris,0.45);\r
     vec3 color2 = texture(70.0,300.0,0.6,st);\r
     vec3 mix2 = mix(mix1,color2,0.1);\r
     vec3 color3 = texture(700.0,300.0,0.3,st);\r
      vec3 mix3 = mix(mix2,color3,0.1);\r
    vec3 verdure = vec3(0.157,0.235,0.055);\r
     vec3 mix4 = mix(mix3,verdure,vposition.z/0.7);\r
    vec3 blanc = vec3(1.0,1.0,1.0);\r
     vec3 mix5 = mix(mix4,grisfonc,vposition.z/0.5);\r
    vec3 mix6 = mix(mix5,blanc,vposition.z/6.5);\r
    vec3 mix7 = mix(mix6,noir,0.8);\r
    float fogAmount;\r
    fogAmount += exp(-distance(campos,vposition)*0.015);\r
        vec3 mix8 = mix(vec3(0.592,0.843,0.941),mix7,fogAmount);\r
    gl_FragColor = vec4(mix8,1.0);\r
}`;class h0{constructor(){this.worldpos=new T(0,0,.5),this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.heightMap=new xt().load("./assets/images/MontagnesHeightmap.jpg"),this.setModel()}setModel(){this.material=new Je({uniforms:{campos:{value:new T(0,0,0)},WorldOffset:{value:this.worldpos},noiseTexture:{value:this.heightMap}},vertexShader:l0,fragmentShader:c0,side:Pe}),this.geometry=new cn(50,50,512,512);const e=new Ce(this.geometry,this.material);e.rotateX(-Math.PI/2),this.scene.add(e)}resize(){}update(){this.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position)}}var u0=`precision mediump float;\r
varying vec2 vUv;\r
attribute vec2 uv;\r
attribute vec3 position;\r
attribute vec3 offset;\r
attribute vec3 normal;\r
attribute float scale;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform float time;\r
uniform vec3 Campos;

  varying vec3 vNormal;\r
varying vec3 vPosition;

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}

void main(){\r
    	
vPosition = position;\r
		vPosition.y *= scale*4.0;\r
      vUv = uv;\r
      	vNormal = normal;\r
	vNormal.y /= scale;\r
      vPosition += offset;\r
      vPosition.y += 1.0-fract(time*0.05 + noise(vPosition.xy)*1.0)*20.0;\r
      vPosition += Campos;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,d0=`precision mediump float;\r
void main(){\r
    gl_FragColor = vec4(vec3(1.0),1.0);    \r
}`;class f0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.radius=240,this.width=80,this.resolution=100,this.delta=this.width/this.resolution,this.instanceNumber=2e3,this.rainMat,this.setModel()}setModel(){const e=new Fs(.01,10,10);e.computeVertexNormals();var t=new kt;t.index=e.index,t.attributes.position=e.attributes.position,t.attributes.uv=e.attributes.uv,t.attributes.normal=e.attributes.normal;var n=[],i=[],s=[];for(let h=0;h<this.instanceNumber;h++)n.push(h/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,i.push(this.x,this.y,this.z),h%3!=0?s.push(2+Math.random()*1.25):s.push(2+Math.random());var r=new Me(new Float32Array(i),3),o=new Me(new Float32Array(n),1),l=new Me(new Float32Array(s),1);t.setAttribute("offset",r),t.setAttribute("index",o),t.setAttribute("scale",l),console.log(t),this.rainMat=new Je({uniforms:{time:{value:0},Campos:{value:new T(0,0,0)}},vertexShader:u0,fragmentShader:d0,side:Pe});var c=new Ce(t,this.rainMat);this.scene.add(c)}resize(){}update(){this.rainMat.uniforms.Campos.value.copy(new T(this.camera.perspectiveCamera.position.x,this.camera.perspectiveCamera.position.y+5,this.camera.perspectiveCamera.position.z)),this.rainMat.uniforms.time.value+=.5}}class p0 extends jn{constructor(){super(),this.setOrnement(),this.Experience=new Te,this.baseroot="./interfaces/monde1/html/",this.infos=this.getInfos(6),console.log(this.infos[1]),this.timeline=0,this.state,this.Etapes={1:175,2:220,3:4e4,4:2e4},this.controls=this.Experience.world.ControlsMonde1,this.currentInfo,this.set=!1}setOrnement(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde1/html/hudmonde1.html"),t.classList.add("Monde","D"),this.body.appendChild(t),this.includeHtml()}update(){console.log(this.timeline),this.state===this.Etapes[1]&&(3<=this.timeline&&this.timeline<=30&&!this.set&&(this.currentInfo=this.setHtml(this.infos[0]),this.set=!0),40<=this.timeline&&this.timeline<=50&&(this.currentInfo.remove(),this.set=!1),60<=this.timeline&&this.timeline<=90&&!this.set&&(this.currentInfo=this.setHtml(this.infos[1]),this.set=!0),110<=this.timeline&&this.timeline<=150&&(this.currentInfo.remove(),this.set=!1)),this.state===this.Etapes[2]&&(8<=this.timeline&&this.timeline<40&&!this.set&&(this.currentInfo=this.setHtml(this.infos[2]),this.set=!0),40<=this.timeline&&this.timeline<=50&&(this.currentInfo.remove(),this.set=!1),60<=this.timeline&&this.timeline<=90&&!this.set&&(this.currentInfo=this.setHtml(this.infos[3]),this.set=!0),150<=this.timeline&&this.timeline<=160&&(this.currentInfo.remove(),this.set=!1)),this.state===this.Etapes[3]&&(8<=this.timeline&&this.timeline<20&&!this.set&&(this.currentInfo=this.setHtml(this.infos[4]),this.set=!0),21<=this.timeline&&this.timeline<=30&&(this.currentInfo.remove(),this.set=!1),40<=this.timeline&&this.timeline<=90&&!this.set&&(this.currentInfo=this.setHtml(this.infos[5]),this.set=!0),150<=this.timeline&&this.timeline<=160&&(this.currentInfo.remove(),this.set=!1))}}class m0 extends Wn{constructor(){super(),this.Onscroll(),this.timeline=0,this.speed=0,this.MaxSpeed=10,this.timebeforeDec,this.baseHeight=12.38,this.baseposx,this.Etapes={1:175,2:220,3:40,4:2e4},this.state=this.Etapes[1],this.up}Onscroll(){window.addEventListener("wheel",e=>{e.deltaY<0?this.timeline>0&&(this.up=!1):this.up=!0,this.timebeforeDec=10,this.speed+=.002})}MoveCam(){if(this.timeline<0){this.camera.perspectiveCamera.position.y=this.baseHeight,this.speed=0;return}}Etape1Behaviour(e){if(this.timeline>this.Etapes[1]&&this.state==this.Etapes[1]){this.experience.ressources.Remove(),this.baseposx=this.camera.perspectiveCamera.position.x,this.camera.perspectiveCamera.position.y=e,this.baseHeight=e,this.state=this.Etapes[2],this.nuage=new a0,this.timeline=this.camera.perspectiveCamera.position.y-this.baseHeight,this.speed=0;return}else if(this.timeline<this.Etapes[1]&&this.state==this.Etapes[1])this.timeline=this.camera.perspectiveCamera.position.y-this.baseHeight,this.up?this.camera.perspectiveCamera.position.y+=this.speed:this.up||(this.camera.perspectiveCamera.position.y-=this.speed);else return}Etape2Behaviour(e){if(this.timeline>this.Etapes[2]&&this.state==this.Etapes[2]){this.experience.ressources.Remove(),this.timeline=0,this.camera.perspectiveCamera.position.y=e,this.camera.perspectiveCamera.position.x=40,this.camera.perspectiveCamera.position.z=10,this.baseposx=this.camera.perspectiveCamera.position.x,this.baseHeight=e,this.state=this.Etapes[3],this.Montagne=new h0,this.Pluie=new f0,this.Ocean=new Kl,this.speed=0;return}else if(this.timeline<this.Etapes[2]&&this.state==this.Etapes[2])this.timeline<=12.3?(this.timeline=this.camera.perspectiveCamera.position.y-this.baseHeight,this.up?this.camera.perspectiveCamera.position.y+=this.speed:this.up||(this.camera.perspectiveCamera.position.y-=this.speed)):this.timeline>=12.3&&140>=this.timeline?(this.timeline=Math.abs(-this.camera.perspectiveCamera.position.x+12.3+this.baseposx),console.log(this.timeline),this.up?this.camera.perspectiveCamera.position.x-=this.speed:this.up||(this.camera.perspectiveCamera.position.x+=this.speed)):this.timeline>=140&&(this.timeline=Math.abs(-this.camera.perspectiveCamera.position.y+140.3),console.log(this.timeline),this.up?this.camera.perspectiveCamera.position.y-=this.speed:this.up||(this.camera.perspectiveCamera.position.y+=this.speed));else return}Etape3Behaviour(e){if(this.timeline<this.Etapes[3]&&this.state==this.Etapes[3])this.timeline=Math.abs(-this.camera.perspectiveCamera.position.y+this.baseHeight),console.log(this.timeline),this.up?this.camera.perspectiveCamera.position.y-=this.speed/2:this.up||(this.camera.perspectiveCamera.position.y+=this.speed/2);else return}update(){this.timebeforeDec--,this.timebeforeDec<=0&&(this.timebeforeDec=0,this.speed-=2e-4),this.speed<=0&&(this.speed=0),this.speed>=this.MaxSpeed&&(this.speed=this.MaxSpeed),this.Etape1Behaviour(-5),this.Etape2Behaviour(50),this.Etape3Behaviour(50),this.nuage&&this.nuage.update(),this.Ocean&&this.Ocean.update(),this.Pluie&&this.Pluie.update(),this.MoveCam()}}class g0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.room=this.ressources.items.Monde1,this.actualRoom=this.room.scene,this.light=new zs(65535,1),this.Ocean=new Kl,console.log(this.actualRoom),this.hudmonde1=new p0,this.ControlsMonde1=new m0}setModel(){this.scene.add(this.actualRoom),console.log(this.actualRoom.children),this.scene.add(this.light),this.light.position.y=2e3,this.light.rotateZ(20),console.log(this.scene),this.scene.remove(this.scene.children[2])}resize(){}update(){this.ControlsMonde1.update(),this.hudmonde1.update(),this.hudmonde1.timeline=this.ControlsMonde1.timeline,this.hudmonde1.state=this.ControlsMonde1.state,this.Ocean.update()}}class v0 extends jn{constructor(){super(),this.setOrnement(),this.Experience=new Te,this.baseroot="./interfaces/monde2/html/",this.infos=this.getInfos(1),console.log(this.infos),this.timeline=0,this.state,this.currentInfo,this.set=!1,this.link1="https://cdn.jsdelivr.net/npm/chartjs-plugin-autocolors",this.link2="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js",this.link3="./interfaces/monde2/js/data_pred.js",this.link4="./interfaces/monde2/js/main.js"}setOrnement(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde2/html/hudmonde2.html"),t.classList.add("Monde","D"),this.body.appendChild(t),this.includeHtml()}update(){console.log(this.timeline),.1<=this.timeline&&this.timeline<=30&&!this.set&&(this.currentInfo=this.setHtml(this.infos[0]),this.set=!0,this.addscript(this.link1),this.addscript(this.link2),this.addscript(this.link3),this.addscript(this.link4))}}class x0 extends Wn{constructor(){super(),this.experience=new Te,this.dummyVector=new T(0,0,0),this.Onscroll(),this.timeline=0,this.up,this.speed=0,this.camera.perspectiveCamera.position.copy(new T(0,0,0)),this.MaxSpeed=5,this.setPath()}Onscroll(){window.addEventListener("wheel",e=>{e.deltaY<0?this.timeline>0&&(this.up=!1):this.up=!0,this.timebeforeDec=10,this.speed+=.002})}update(){this.timebeforeDec--,this.timebeforeDec<=0&&(this.timebeforeDec=0,this.speed-=.02),this.speed<=0&&(this.speed=0),this.speed>=this.MaxSpeed&&(this.speed=this.MaxSpeed),this.up?this.timeline+=this.speed:this.up||(this.timeline-=this.speed),this.timeline<0&&(this.timeline=0),this.timeline>.8&&(this.timeline=.8,window.location.href="#graph-charjs"),this.curve.getPointAt(this.timeline%1,this.dummyVector),this.camera.perspectiveCamera.position.copy(this.dummyVector),this.camera.perspectiveCamera.rotation.z=50.17,this.camera.perspectiveCamera.rotation.x=50.1,this.camera.perspectiveCamera.rotation.y=181-this.timeline*2}setPath(){this.curve=new Sm([new T(0,15,0),new T(20,15,10),new T(30,15,50)])}}class _0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.room=this.ressources.items.Monde2.scene,this.hudmonde2=new v0,this.ControlsMonde2=new x0,this.setModel()}setModel(){this.scene.add(this.room)}resize(){}update(){this.hudmonde2.update(),this.ControlsMonde2.update(),this.hudmonde2.timeline=this.ControlsMonde2.timeline}}var Zl=`precision mediump float;\r
uniform sampler2D noiseTexture;\r
uniform float scale;\r
float getYPosition(vec2 p, float a, float scale){\r
	return a*(2.0*texture2D(noiseTexture, (p/scale+0.5)).r - 0.5);\r
}\r
varying vec2 vUv;\r
varying vec3 vNormal;\r
varying vec3 vposition;

attribute vec2 uv;\r
attribute vec3 position;

uniform vec3 WorldOffset;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform mat4 normalMatrix;

void main(){\r
      vUv = uv;\r
      vposition = position;

      	

	vposition.z += getYPosition(vposition.xy,2.0,scale);\r
    vposition += WorldOffset;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(vposition, 1.0);\r
}`,y0=`precision mediump float;\r
varying vec3 vposition;\r
uniform float deterioration;\r
uniform vec3 campos;\r
uniform vec3 color;\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}\r
varying vec2 vUv;\r
void main(){\r
    vec2 st = vUv;\r
    vec3 color = vec3(0.22+deterioration/10.0,0.91,0.42);\r
     vec3 color2 = texture(700.0,500.0,0.2,st);\r
      vec3 color3 = texture(20.0,20.0,0.5,st);\r
     vec3 mix2 = mix(color2,color3,0.5);\r
     vec3 mix3 = mix(mix2,color,0.9);\r
    vec3 mix1 = mix(vec3(0.1,0.1,0.1),mix3,vposition.z/1.35);\r
    vec3 mix4 = mix(mix1,vec3(0,0,0),0.6);\r
        float fogAmount;\r
    fogAmount += exp(-distance(campos,vposition)*0.08);\r
      vec3 fogmix = mix(vec3(0.592+deterioration/20.0,0.843,0.941),mix4,fogAmount*2.5);\r
    gl_FragColor = vec4(fogmix,3.5);    \r
}`;let M0=class{constructor(){this.worldpos=new T(0,0,.5),this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.heightMap=new xt().load("./assets/images/Heightmap_M3.png"),this.scene.background=new Se("rgb(162,217,238)"),this.deterioration,this.setModel()}setModel(){this.material=new Je({uniforms:{campos:{value:new T(0,0,0)},WorldOffset:{value:this.worldpos},noiseTexture:{value:this.heightMap},scale:{value:50},deterioration:{value:this.deterioration},color:{value:new T(.592,.843,.941)}},vertexShader:Zl,fragmentShader:y0,side:Pe}),this.geometry=new cn(50,50,512,512);const e=new Ce(this.geometry,this.material);e.rotateX(-Math.PI/2),this.scene.add(e)}resize(){}update(){this.material.uniforms.deterioration.value=this.deterioration,this.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position)}};var $l=`uniform sampler2D Texture;\r
#define PI 3.14159265359\r
    precision mediump float;\r
varying vec3 pos;\r
precision highp float;

uniform vec3 campos;\r
uniform sampler2D noiseTexture;\r
float randomvalue;\r
uniform float deterioration;

float getYPosition(vec2 p){\r
	return 5.0*(2.0*texture2D(noiseTexture, (p/250.0+0.5)).r - 0.5);\r
}\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}

uniform vec3 colorA;\r
uniform vec3 colorB; \r
uniform float time;\r
    \r
  precision mediump float;\r
  varying vec2 vUv;\r
  varying vec3 vPosition;

  void main() {\r
    float value1 = 10.0;\r
    vec2 Uv = vUv;\r
    vec2 st = gl_FragCoord.xy/vec2(1300.0,1000.0);\r
     vec4 color = texture2D(Texture,Uv);\r
    vec2 toCenter = vec2(1, 0.5)-st;\r
    float angle = atan(toCenter.y,toCenter.x);\r
    float radius = length(toCenter)*2.0;\r
    vec3 pct = vec3(st.x);\r
    pct.r = sin((noise(toCenter/value1)*200.0)+200.0-time/2.0);\r
    pct.g = sin((noise(toCenter/value1)*200.0)+200.0-time/2.0);\r
    pct.b = sin((noise(toCenter/value1)*200.0)+200.0-time/2.0);\r
  	vec3 baseColor =mix(vec3(color), colorB, pct*0.25);\r
    float clarity = ( -vUv.x *1.7) + 1.0;\r
    float fogAmount;\r
    fogAmount += exp(-distance(campos,pos)*0.08);\r
  \r
    vec3 finalcolor =  baseColor* clarity;\r
  vec3 Mix1 = mix(vec3(0.592,0.843,0.941),finalcolor,fogAmount*3.5);\r
        randomvalue = noise(pos.xz);\r

        if(randomvalue>1.0-deterioration/7.0){\r
          discard;\r
        }\r
    

    gl_FragColor = vec4( Mix1, 1 );\r
  }`;class b0{constructor(){this.worldpos=new T(0,1.5,0),this.experience=new Te,this.ressources=this.experience.ressources,this.camera=this.experience.camera,this.scene=this.experience.scene,this.grassblade=this.ressources.items.ble,this.grassMaterial,this.pos=new fe(.01,.01),this.x,this.y,this.z,this.radius=240,this.width=50,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/Heightmap_M3.png"),this.texture=new xt().load("assets/images/ble_texture_dust.png"),this.instanceNumber=1e5,this.distance,this.deterioration,this.setModel()}setModel(){const e=this.grassblade.scene.children[0].geometry;e.computeVertexNormals();var t=new Mn({side:Pe});new Ce(e,t);var n=new kt;n.index=e.index,n.attributes.position=e.attributes.position,n.attributes.uv=e.attributes.uv,n.attributes.normal=e.attributes.normal;var i=[],s=[],r=[],o=[];for(let f=0;f<this.instanceNumber;f++){i.push(f/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,s.push(this.x,this.y,this.z);let g=Math.PI-Math.random()*(2*Math.PI);o.push(Math.sin(.5*g),Math.cos(.5*g)),f%3!=0?r.push(2+Math.random()*1.25):r.push(2+Math.random())}var l=new Me(new Float32Array(s),3),c=new Me(new Float32Array(o),2),h=new Me(new Float32Array(i),1),d=new Me(new Float32Array(r),1);n.setAttribute("offset",l),n.setAttribute("index",h),n.setAttribute("halfRootAngle",c),n.setAttribute("scale",d),console.log(n),this.grassMaterial=new Je({uniforms:{Texture:{value:this.texture},distance:{value:this.distance},WorldOffset:{value:this.worldpos},amplitude:{value:.5},colorA:{value:new T(.961,.706,.663)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width},move:{value:.2},campos:{value:new T(0,0,0)},deterioration:{value:this.deterioration}},vertexShader:Bs,fragmentShader:$l,side:Pe});var u=new Ce(n,this.grassMaterial);this.scene.add(u),console.log(u)}update(){this.grassMaterial.uniforms.campos.value.copy(this.camera.perspectiveCamera.position),this.grassMaterial.uniforms.distance.value=this.distance,this.grassMaterial.uniforms.time.value+=.03,this.grassMaterial.uniforms.deterioration.value=this.deterioration}}var w0=`varying vec2 vUv;\r
varying vec3 vPosition;\r
    precision mediump float;\r
attribute vec2 uv;\r
attribute vec3 position;\r
attribute vec3 offset;\r
varying vec3 pos;\r
attribute vec3 halfRootAngle;\r
uniform vec3 Arbrepos;\r
uniform float deterioration;\r
varying vec3 offs;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform float time;

    const float PI = 3.1415;\r
    const float TWO_PI = 2.0 * PI;

    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){\r
  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\r
}\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float Noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
void main(){\r
    vUv = uv;\r
    pos = position;\r
    vPosition = position;\r
    float random = Noise(vPosition.xy);\r
     vec4 direction = vec4(0.0, halfRootAngle.x, halfRootAngle.y, 0.0);

    	
  vec2 fractionalPos = 0.5 + offset.xz;\r
  
  fractionalPos *= TWO_PI;

    
    
    
    

	
	
    vPosition.y *= 1.5;\r
    vPosition.y /= deterioration;\r
    vPosition.x /= deterioration;\r
    vPosition.z /= deterioration;\r
    vPosition.z += Noise(vPosition.xz*200.0+(time*0.5));\r
    vPosition += offset;\r
    vPosition += Arbrepos;\r
 \r
        \r
    offs = offset;

    	
 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,S0=`varying vec2 vUv;\r
varying vec3 vPosition;\r
    precision mediump float;\r
attribute vec2 uv;\r
attribute vec3 position;\r
attribute vec3 offset;\r
varying vec3 pos;\r
attribute vec3 halfRootAngle;\r
uniform vec3 Arbrepos;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
uniform float time;\r
varying vec3 offs;\r
uniform float deterioration;

    const float PI = 3.1415;\r
    const float TWO_PI = 2.0 * PI;

    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){\r
  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;\r
}\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float Noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
void main(){\r
    offs = offset;\r
    vUv = uv;\r
    pos = position;\r
    vPosition = position;\r
    float random = Noise(vPosition.xy);\r
     vec4 direction = vec4(0.0, halfRootAngle.x, halfRootAngle.y, 0.0);

    	
  vec2 fractionalPos = 0.5 + offset.xz;\r
  
  fractionalPos *= TWO_PI;

     float noise = 0.5 + 0.5 * sin(fractionalPos.x + time);\r
    float halfAngle = -noise * 0.1;\r
    noise = 0.5 + 0.5 * cos(fractionalPos.y + time);\r
     halfAngle -= noise;

	direction = normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle)));\r
	vPosition = rotateVectorByQuaternion(vPosition, direction);

    vPosition += offset;\r
    vPosition += Arbrepos;\r
 \r
        vPosition.xy -= 1.0-fract(time*0.07+Noise(offset.xz)*4.0)*7.5;\r

    \r
    	
 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);\r
}`,rl=`precision mediump float;\r
uniform sampler2D Texture;\r
uniform float time;\r
varying vec3 pos;\r
uniform vec3 campos;\r
  varying vec2 vUv;\r
float randomvalue;\r
varying vec3 offs;\r
uniform float deterioration;\r

  float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
uniform vec3 colorB; \r
void main(){\r
    float value1 = 50.0;\r
    vec2 st = vUv.xy;\r
    vec4 color = texture2D(Texture,vUv);

    vec2 toCenter = vec2(1, 0.5)-st;

    vec3 pct = vec3(st.x);\r
    pct.r = sin((noise(toCenter/value1)*200.0)+200.0-time/2.0);\r
    pct.g = sin((noise(toCenter/value1)*200.0)+200.0-time/2.0);\r
    pct.b = sin((noise(toCenter/value1)*200.0)+200.0-time/2.0);\r
      	vec3 baseColor = mix(vec3(color), colorB, pct*0.25);

            float fogAmount;\r
    fogAmount += exp(-distance(campos,pos)*0.01);\r
    \r
        randomvalue = noise(offs.xz);

    if(randomvalue>1.0-deterioration/7.0){\r
        discard;\r
    }\r
  \r
    

  vec3 Mix1 = mix(vec3(0.592,0.843,0.941),baseColor,fogAmount);\r
    gl_FragColor = vec4(vec3(Mix1),1.0);    \r
}`;class T0{constructor(){this.worldpos=new T(0,.5,0),this.experience=new Te,this.ressources=this.experience.ressources,this.camera=this.experience.camera,this.scene=this.experience.scene,this.grassblade=this.ressources.items.Arbre1,this.Feuille=this.ressources.items.Feuille,this.grassMaterial,this.pos=new fe(.01,.01),this.x,this.y,this.z,this.Fy,this.Fx,this.Fz,this.radius=240,this.width=20,this.Feuillewidth=3.5,this.FeuilleHeight=3.5,this.tasWith=3.5,this.resolution=100,this.delta=this.width/this.resolution,this.heightMap=new xt().load("./assets/images/Heightmap_M3.png"),this.texture=new xt().load("assets/images/Arbre1_texture_dust.png"),this.Feuilletexture=new xt().load("assets/images/leaf2_texture_dsut.png"),this.instanceNumber=5,this.tasinstanceNumber=15,this.feuilleinstanceNumber=170,this.FeuilleMat,this.setModel(),this.FeuilleInstance,this.TasInstances,this.deterioration=1}setModel(){const e=new Fs(.9,10,10),t=this.grassblade.scene.children[0].geometry,n=this.Feuille.scene.children[0].geometry;e.computeVertexNormals(),t.computeVertexNormals(),n.computeVertexNormals();var i=new Mn({side:Pe});new Ce(t,i);var s=new kt,r=new kt,o=new kt;o.index=e.index,o.attributes.position=e.attributes.position,o.attributes.uv=e.attributes.uv,o.attributes.normal=e.attributes.normal,s.index=t.index,s.attributes.position=t.attributes.position,s.attributes.uv=t.attributes.uv,s.attributes.normal=t.attributes.normal,r.index=n.index,r.attributes.position=n.attributes.position,r.attributes.uv=n.attributes.uv,r.attributes.normal=n.attributes.normal;var l=[],c=[],h=[],d=[],u=[],f=[],g=[],m=[],p=[],v=[],b=[];for(let x=0;x<this.instanceNumber;x++){l.push(x/this.instanceNumber),this.x=Math.random()*this.width-this.width/2,this.z=Math.random()*this.width-this.width/2,this.y=0,c.push(this.x,this.y,this.z),h.push(new T(this.x,6,this.z));let E=Math.PI-Math.random()*(2*Math.PI);p.push(Math.sin(.5*E),Math.cos(.5*E)),x%3!=0?m.push(2+Math.random()*1.25):m.push(2+Math.random())}var _=new Me(new Float32Array(c),3);h.forEach(x=>{d=[],g=[],u=[],f=[];for(let k=0;k<this.feuilleinstanceNumber;k++){this.Fy=Math.random()*this.FeuilleHeight-this.Feuillewidth/2,this.Fx=Math.random()*this.Feuillewidth-this.Feuillewidth/2,this.Fz=Math.random()*this.Feuillewidth-this.Feuillewidth/2;let Y=Math.PI-Math.random()*(2*Math.PI);g.push(Math.sin(.5*Y),Math.cos(.5*Y),Math.tan(.5*Y)),d.push(this.Fx,this.Fy,this.Fz)}for(let k=0;k<this.tasinstanceNumber;k++){this.Fy=Math.random()*this.tasWith-this.tasWith/2,this.Fx=Math.random()*this.tasWith-this.tasWith/2,this.Fz=Math.random()*this.tasWith-this.tasWith/2;let Y=Math.PI-Math.random()*(2*Math.PI);f.push(Math.sin(.5*Y),Math.cos(.5*Y),Math.tan(.5*Y)),u.push(this.Fx,this.Fy,this.Fz)}var E=new Me(new Float32Array(d),3),N=new Me(new Float32Array(g),3);r.setAttribute("offset",E),r.setAttribute("halfRootAngle",N),this.FeuilleMat=new Je({uniforms:{Texture:{value:this.Feuilletexture},Arbrepos:{value:x},time:{value:0},campos:{value:new T(0,0,0)},deterioration:{value:1}},vertexShader:S0,fragmentShader:rl,side:Pe});var X=new Me(new Float32Array(u),3),j=new Me(new Float32Array(f),3);o.setAttribute("offset",X),o.setAttribute("halfRootAngle",j),this.TasMat=new Je({uniforms:{Texture:{value:this.Feuilletexture},Arbrepos:{value:x},time:{value:0},campos:{value:new T(0,0,0)},deterioration:{value:1}},vertexShader:w0,fragmentShader:rl,side:Pe});var I=new Ce(r,this.FeuilleMat),D=new Ce(o,this.TasMat);this.scene.add(D),this.scene.add(I),v.push(I),b.push(D)}),this.FeuilleInstance=v,this.TasInstances=b;var _=new Me(new Float32Array(c),3),S=new Me(new Float32Array(p),2),y=new Me(new Float32Array(l),1),L=new Me(new Float32Array(m),1);s.setAttribute("offset",_),s.setAttribute("index",y),s.setAttribute("halfRootAngle",S),s.setAttribute("scale",L),console.log(s),this.grassMaterial=new Je({uniforms:{Texture:{value:this.texture},scaling:{value:.6},WorldOffset:{value:this.worldpos},amplitude:{value:.5},colorA:{value:new T(.992,.875,.855)},noiseTexture:{value:this.heightMap},time:{type:"float",value:1},delta:{type:"float",value:this.delta},posX:{type:"float",value:this.pos.x},posZ:{type:"float",value:this.pos.y},radius:{type:"float",value:this.radius},width:{type:"float",value:this.width}},vertexShader:ks,fragmentShader:$l,side:Pe});var R=new Ce(s,this.grassMaterial);this.scene.add(R),console.log(R)}update(){this.FeuilleInstance.forEach(e=>{e.material.uniforms.deterioration.value=this.deterioration,e.material.uniforms.time.value+=.03,e.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position)}),this.TasInstances.forEach(e=>{e.material.uniforms.deterioration.value=this.deterioration,e.material.uniforms.time.value+=.03,e.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position)})}}class A0 extends Wn{constructor(){super(),this.experience=new Te,this.Onscroll(),this.timeline=0,this.up,this.speed=0,this.MaxSpeed=5}Onscroll(){window.addEventListener("wheel",e=>{e.deltaY<0?this.timeline>0&&(this.up=!1):this.up=!0,this.timebeforeDec=10,this.speed+=.002})}update(){this.timebeforeDec--,this.timebeforeDec<=0&&(this.timebeforeDec=0,this.speed-=.02),this.speed<=0&&(this.speed=0),this.speed>=this.MaxSpeed&&(this.speed=this.MaxSpeed),this.camera.perspectiveCamera.position.x=20,this.camera.perspectiveCamera.position.y=5,this.camera.perspectiveCamera.position.z=1,this.up?this.timeline+=this.speed:this.up||(this.timeline-=this.speed),this.timeline<0&&(this.timeline=0),console.log(this.timeline)}}class E0 extends jn{constructor(){super(),this.setOrnement(),this.ornement,this.ornementAlt,this.timeline=0,this.baseroot="./interfaces/monde3/html/",this.infos=this.getInfos(4),console.log(this.infos),this.currentInfo}setOrnement(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde3/html/hudmonde3.html"),t.classList.add("Monde","D"),this.ornement=t,this.body.appendChild(t),this.includeHtml()}setOrnementAlt(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde3/html/hudmon3alt.html"),t.classList.add("Monde","D"),this.ornementAlt=t,this.ornementAlt.style.opacity=0,this.body.appendChild(t),this.includeHtml()}update(){console.log(this.timeline),.3<=this.timeline&&this.timeline<=1.2&&!this.set&&(this.currentInfo=this.setHtml(this.infos[0]),this.set=!0),1.2<=this.timeline&&this.timeline<=1.5&&(this.currentInfo.remove(),this.set=!1),1.5<=this.timeline&&this.timeline<=3&&!this.set&&(this.currentInfo=this.setHtml(this.infos[1]),this.set=!0),3<=this.timeline&&this.timeline<=3.5&&(this.currentInfo.remove(),this.set=!1),3.5<=this.timeline&&this.timeline<=5&&!this.set&&(this.currentInfo=this.setHtml(this.infos[2]),this.set=!0),5<=this.timeline&&this.timeline<=5.5&&(this.currentInfo.remove(),this.set=!1),5.5<=this.timeline&&this.timeline<=7.2&&!this.set&&(this.currentInfo=this.setHtml(this.infos[3]),this.set=!0),this.timeline>=2&&(this.ornementAlt||(this.setOrnementAlt(),this.Retour_accueil.SetRetour()),this.ornement.style.opacity=1-this.timeline/5,this.ornementAlt.style.opacity=this.timeline-2)}}let C0=class{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.light=new zs(65535,1),this.Terrain=new M0,this.Ble=new b0,this.Arbre=new T0,this.deterioration=this.Arbre.deterioration,this.ControlsMonde3=new A0,this.hudmonde3=new E0,this.setModel()}setModel(){this.light.position.y=2e3,this.light.rotateZ(20)}resize(){}update(){this.Ble.update(),this.Arbre.update(),this.ControlsMonde3.update(),this.Terrain.update(),this.hudmonde3.update(),this.hudmonde3.timeline=this.ControlsMonde3.timeline,this.Arbre.deterioration>7?(this.Arbre.deterioration=7,this.Ble.deterioration=7):(this.Arbre.deterioration=1+this.ControlsMonde3.timeline,this.Ble.deterioration=1+this.ControlsMonde3.timeline,this.Terrain.deterioration=1+this.ControlsMonde3.timeline)}};var L0=`varying vec2 vUv;\r
attribute vec2 uv;\r
attribute vec3 position;

uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;

void main(){\r
      vUv = uv;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`,P0=`precision mediump float;\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}\r
varying vec2 vUv;\r
void main(){\r
    vec2 st = vUv.xy;\r
    vec3 color1 = texture(600.0,400.0,0.85,st);\r
    vec3 color2 = texture(10.0,600.0,0.90,st);\r
    vec3 Sable = vec3(0.973,0.831,0.612);\r
    vec3 mix1 = mix(color1,color2,0.55);\r
    vec3 mix2 = mix(mix1,Sable,0.65);\r
    float clarity = ( vUv.y *0.8) + 0.5;

    gl_FragColor = vec4(mix2*clarity,1.0);    \r
}`;let R0=class{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.light=new zs(65535,1),this.ruines=this.ressources.items.Ruines.scene,this.ruinesMat,this.setModel()}setModel(){this.ruinesMat=new Je({uniforms:{},vertexShader:L0,fragmentShader:P0,side:Pe}),this.ruines.children.forEach(e=>{e.material=this.ruinesMat}),this.scene.add(this.ruines)}resize(){}update(){}};var D0=`precision mediump float;\r
varying vec3 vposition;\r
uniform vec3 campos;\r
float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}\r
varying vec2 vUv;\r
void main(){\r
    vec2 st = vUv;\r
    vec3 color = vec3(0.898,0.843,0.753);\r
     vec3 color2 = texture(1000.0,1000.0,0.1,st);\r
      vec3 color3 = texture(20.0,20.0,0.5,st);\r
     vec3 mix2 = mix(color2,color3,0.2);\r
     vec3 mix3 = mix(mix2,color,0.9);\r
    vec3 mix1 = mix(vec3(1.,0.953,0.878),mix3,vposition.z/1.35);\r
      float fogAmount;\r
    fogAmount += exp(-distance(campos,vposition)*0.02);\r
    vec3 Mix1 = mix(vec3(1.,0.98,0.953),mix1,fogAmount);\r
    gl_FragColor = vec4(Mix1,3.5);    \r
}`;class I0{constructor(){this.worldpos=new T(0,0,.5),this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.heightMap=new xt().load("./assets/images/sand_dunes_heightmap.jpg"),this.setModel()}setModel(){this.material=new Je({uniforms:{campos:{value:new T(0,0,0)},WorldOffset:{value:this.worldpos},noiseTexture:{value:this.heightMap},scale:{value:300}},vertexShader:Zl,fragmentShader:D0,side:Pe}),this.geometry=new cn(300,300,512,512);const e=new Ce(this.geometry,this.material);e.rotateX(-Math.PI/2),this.scene.add(e)}resize(){}update(){this.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position)}}class N0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.material,this.geometry,this.setModel()}setModel(){this.material=new Je({uniforms:{campos:{value:new T(0,0,0)},time:{value:1},offset:{value:.01},contrast:{value:.002},brightness:{value:1e-4},scale:{value:3},oceanBlue:{value:new T(.65,.65,.65)},oceanBlue2:{value:new T(.9,.9,.9)},waterHighlight:{value:new T(.65,.65,.65)},White:{value:new T(.5,.5,.5)},wavelengthA:{value:15},wavelengthB:{value:9.5},wavelengthC:{value:4},wavelengthD:{value:10},Worldpos:{value:new T(-150,0,2)},FogColor:{value:new T(1,.98,.953)}},vertexShader:ho,fragmentShader:uo,side:Pe}),this.geometry=new cn(100,100,512,512);const e=new Ce(this.geometry,this.material);e.rotateX(-Math.PI/2),this.scene.add(e)}update(){this.material.uniforms.campos.value.copy(this.camera.perspectiveCamera.position),this.material.uniforms.time.value+=.005}}class F0 extends Wn{constructor(){super()}update(){this.camera.perspectiveCamera.position.x=10,this.camera.perspectiveCamera.position.y=3,this.camera.perspectiveCamera.position.z=.4}}class O0 extends jn{constructor(){super(),this.css="./interfaces/monde4/css/Style.css",this.ornement=document.querySelector(".Monde"),console.log(this.ornement),this.object,this.setHtml()}setHtml(){this.object=document.createElement("div"),this.object.setAttribute("w3-include-html","./interfaces/monde4/html/Monde4.html"),this.object.classList.add("Monde","D"),this.body.appendChild(this.object),this.includeHtml(),this.addcss(this.css)}remove(){this.object.remove()}update(){}}class z0 extends jn{constructor(){super(),this.css="./interfaces/monde4/css/Style.css",this.setOrnement(),this.timeline=0,this.baseroot="./interfaces/monde3/html/",this.infos=this.getInfos(4),console.log(this.infos),this.currentInfo}setOrnement(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde4/html/hudmonde4.html"),t.classList.add("Monde","D"),this.body.appendChild(t),this.includeHtml(),this.addcss(this.css)}update(){}}class U0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.light=new zs(65535,1),this.Ruines=new R0,this.Terrain=new I0,this.Tempête=new N0,this.livreOffset=new T(-1,-.3,0),this.livre=this.ressources.items.livreETtableM4.scene,this.scene.background=new Se("#FFFAF3"),this.ControlsMonde4=new F0,this.hudmonde4=new z0,this.instanceLivre=!1,this.setModel(),this.basePosition}setModel(){this.light.position.y=2e3,this.light.rotateZ(20),this.scene.add(this.livre)}resize(){}update(){this.Terrain.update(),this.Tempête.update(),this.ControlsMonde4.update(),this.ControlsMonde4.currentfocus==="Livre"?(this.instanceLivre||(this.video=new O0,this.instanceLivre=!0),this.basePosition=this.livre.children[1].position,this.livre.children[1].position.copy(new T(this.camera.perspectiveCamera.position.x+this.livreOffset.x,this.camera.perspectiveCamera.position.y+this.livreOffset.y,this.camera.perspectiveCamera.position.z+this.livreOffset.z)),this.livre.children[1].rotation.z=-1,this.camera.perspectiveCamera.rotation.y=1.32):this.video&&this.ControlsMonde4.currentfocus!="Livre"&&(this.instanceLivre=!1,this.video.remove(),this.livre.children[1].position.copy(this.livre.position),this.livre.children[1].rotation.z=0)}}var B0=`varying vec2 vUv;\r
attribute vec2 uv;\r
attribute vec3 position;\r
varying vec3 vPosition;

uniform vec3 offset;

uniform float time;\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r

void main(){\r
    vUv = uv;\r
    vPosition = position;

    vPosition += offset;\r
    \r
    vPosition.x -= sin(time*10.0 * noise(vPosition.xy*100.7))/10.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( vPosition, 1.0);\r
}`,k0=`precision mediump float;

float random (in vec2 st) {\r
    return fract(sin(dot(st.xy,\r
                         vec2(12.9898,78.233)))\r
                 * 43758.5453123);\r
}\r
float noise (in vec2 st) {\r
    vec2 i = floor(st);\r
    vec2 f = fract(st);

    
    float a = random(i);\r
    float b = random(i + vec2(1.0, 0.0));\r
    float c = random(i + vec2(0.0, 1.0));\r
    float d = random(i + vec2(1.0, 1.0));

    

    
    vec2 u = f*f*(3.0-2.0*f);\r
    

    
    return mix(a, b, u.x) +\r
            (c - a)* u.y * (1.0 - u.x) +\r
            (d - b) * u.x * u.y;\r
}\r
vec3 texture(in float scalex, in float scaley, in float amp, in vec2 st){\r
    vec2 pos = vec2(st.x*scalex,st.y*scaley);\r
    vec3 color = vec3(float(int(noise(pos)+amp)));

    return color;\r
}

varying vec2 vUv;

void main(){

    vec2 st = vUv.xy;

    vec3 Color = vec3(0.533,0.757,0.98);

    vec3 noiseColor = texture(5.0,5.0,0.5,st);

    vec3 Mix1 = mix(noiseColor,Color,0.5);

    gl_FragColor = vec4(Mix1,1.0);    \r
}`;let V0=class{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.pos=new T(1,3.15,2.41),this.EauMat,this.setModel()}setModel(){const e=new ro(.05,.05,5,20);this.EauMat=new Je({uniforms:{offset:{value:this.pos},time:{value:0}},vertexShader:B0,fragmentShader:k0,side:Pe}),this.mesh=new Ce(e,this.EauMat),this.scene.add(this.mesh)}resize(){}update(){this.EauMat.uniforms.time.value+=.03}};class G0 extends jn{constructor(){super(),this.setOrnement(),this.currentobject,this.Experience=new Te,this.camera=this.Experience.camera,this.timeline=0,this.baseroot="./interfaces/monde5/html/",this.infos=this.getInfos(6),console.log(this.infos),this.currentInfo,this.setup=!1,this.cases={1:"Baignoire",2:"Lavabo",3:"Steak",4:"LaveVaisselle_2",5:"pistolet_à_eau"},this.baignoire=!1,this.lavabo=!1,this.steak=!1,this.pistolet=!1,this.lave=!1,this.currentcase,this.final=!1}setOrnement(){var e=document.querySelectorAll(".Monde");e.forEach(n=>{n.remove()});var t=document.createElement("div");t.setAttribute("w3-include-html","./interfaces/monde5/html/hudmonde5.html"),t.classList.add("Monde","D"),this.body.appendChild(t),this.includeHtml()}update(){if(this.final&&(this.value-=10,this.currentInfo.style.top+=-10+"px"),this.pistolet&&this.lavabo&&this.steak&&this.lave&&this.baignoire&&!this.final&&(this.currentInfo.remove(),this.currentInfo=this.setHtml(this.infos[5]),this.final=!0),this.final===!1){if(this.currentobject)var e=this.getCoordinates(this.currentobject,this.camera.perspectiveCamera);if(!this.currentobject)return;if(this.currentInfo){var t=this.currentInfo.querySelector(".box-monde5");console.log(this.currentInfo.firstChild),t&&(t.style.top=e.y+"px",t.style.left=e.x+"px")}switch(this.currentobject.name){case"pistolet_à_eau":this.set(5),this.pistolet=!0;break;case"Lavabo":this.set(2),this.lavabo=!0;break;case"Steak":this.set(3),this.steak=!0;break;case"LaveVaisselle_2":this.set(4),this.lave=!0;break;case"Baignoire":this.set(1),this.baignoire=!0;break}}}set(e){this.currentInfo&&this.currentcase!=this.currentobject.name&&(this.currentInfo.remove(),this.currentcase=this.cases[e],this.setup=!1),!this.setup&&(this.currentInfo&&!this.setup&&this.currentInfo.remove(),this.setup||(this.currentInfo=this.setHtml(this.infos[e-1]),this.setup=!0))}}class H0 extends Wn{constructor(){super(),this.experience=new Te,this.dummyVector=new T(0,0,0),this.ressources=this.experience.ressources,this.Onscroll(),this.timeline=0,this.up,this.speed=0,this.itemstoswap=["LaveVaisselle_2","Steak"],this.LaveVOuvert=this.ressources.items.LaveVaisselleOuvert,this.Salade=this.ressources.items.Salade,this.LSwaped=!1,this.SSwaped=!1,this.ESwaped=!1,this.object,this.MaxSpeed=5}Onscroll(){window.addEventListener("wheel",e=>{e.deltaY<0?this.timeline>0&&(this.up=!1):this.up=!0,this.timebeforeDec=10,this.speed+=.002})}removeObject(e){this.scene.children[0].children.forEach(t=>{if(t.userData.name===e){this.scene.children[0].remove(t);return}})}update(){if(this.timebeforeDec--,this.timebeforeDec<=0&&(this.timebeforeDec=0,this.speed-=.02),this.speed<=0&&(this.speed=0),this.speed>=this.MaxSpeed&&(this.speed=this.MaxSpeed),this.up?this.timeline+=this.speed:this.up||(this.timeline-=this.speed),this.timeline<0&&(this.timeline=0),this.camera.perspectiveCamera.position.x=18.41,this.camera.perspectiveCamera.position.y=3.7,this.camera.perspectiveCamera.position.z=-1,this.itemstoswap.includes(this.currentfocus)&&(this.currentfocus==="LaveVaisselle_2"&&!this.LSwaped&&(this.object=this.currentobject,this.removeObject("LaveVaisselle"),this.scene.add(this.LaveVOuvert.scene),this.LSwaped=!0),this.currentfocus==="Steak"&&!this.SSwaped&&(console.log(this.scene.children),this.removeObject("steak"),this.scene.add(this.Salade.scene),this.object=this.currentobject,this.SSwaped=!0)),this.currentfocus==="Lavabo"&&!this.ESwaped&&(this.scene.remove(this.scene.children[1]),this.object=this.currentobject,this.ESwaped=!0),this.currentfocus==="Baignoire"&&(this.object=this.currentobject),this.currentfocus==="poubelle"||this.currentfocus==="pistolet_à_eau"){this.object=this.currentobject;var e=this.getObject("Pilier2"),t=this.getObject("pistolet_à_eau"),n=this.getObject("poubelle"),i=this.getObject("Pilier1");n.position.z>-.8&&(e.position.y-=.012,i.position.z-=.012,n.position.z-=.012,t.position.z+=.01,console.log(n.position.z))}}getObject(e){var t;return this.scene.children[0].children.forEach(n=>{n.name===e&&(t=n)}),t}}class W0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.room=this.ressources.items.Monde5.scene,this.hudmonde5=new G0,this.ControlsMonde5=new H0,this.setModel(),this.eau=new V0}setModel(){this.scene.add(this.room)}resize(){}update(){this.hudmonde5.currentobject=this.ControlsMonde5.object,this.hudmonde5.update(),this.ControlsMonde5.update(),this.eau.update()}}class j0{constructor(){this.experience=new Te,this.scene=this.experience.scene,this.ressources=this.experience.ressources}resize(){}update(){}}class X0{constructor(){this.experience=new Te,this.retour_accueil=new Yl,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.camera=this.experience.camera,this.ressources=this.experience.ressources,this.instantiatedClass=[],this.ressources.on("ready",()=>{console.log(this.experience.ActualWorld),this.experience.ActualWorld===this.experience.Worlds.Accueil&&(this.environment=new j0,this.room=new o0),this.experience.ActualWorld===this.experience.Worlds.Monde1&&(this.Monde1=new g0,console.log("Monde1")),this.experience.ActualWorld===this.experience.Worlds.Monde2&&(this.Monde2=new _0,console.log("Monde2")),this.experience.ActualWorld===this.experience.Worlds.Monde3&&(this.Monde3=new C0,console.log("Monde3")),this.experience.ActualWorld===this.experience.Worlds.Monde4&&(this.Monde4=new U0),this.experience.ActualWorld===this.experience.Worlds.Monde5&&(this.Monde5=new W0),this.controls=new Wn,this.retour_accueil.SetRetour(),this.controls.on("Monde1",()=>{this.remove();var e=["Monde1"];this.experience.ressources.startLoading(e),this.experience.ActualWorld=this.experience.Worlds.Monde1}),this.controls.on("Monde2",()=>{this.remove();var e=["Monde2"];this.experience.ressources.startLoading(e),this.experience.ActualWorld=this.experience.Worlds.Monde2}),this.controls.on("Monde3",()=>{this.remove();var e=["ble","Arbre1","Feuille"];this.experience.ressources.startLoading(e),this.experience.ActualWorld=this.experience.Worlds.Monde3}),this.controls.on("Monde4",()=>{this.remove();var e=["Ruines","livreETtableM4"];this.experience.ressources.startLoading(e),this.experience.ActualWorld=this.experience.Worlds.Monde4}),this.controls.on("Monde5",()=>{this.remove();var e=["Monde5","Salade","LaveVaisselleOuvert"];this.experience.ressources.startLoading(e),this.experience.ActualWorld=this.experience.Worlds.Monde5})})}remove(){this.experience.ressources.Remove(),this.room=null,this.Monde1=null,this.Monde2=null,this.Monde3=null,this.Monde4=null,this.Monde5=null,this.ControlsMonde1=null,this.ControlsMonde2=null,this.ControlsMonde5=null}resize(){}update(){this.controls&&this.controls.update(),this.room&&this.room.update(),this.Monde1&&this.Monde1.update(),this.Monde2&&this.Monde2.update(),this.Monde3&&this.Monde3.update(),this.Monde4&&this.Monde4.update(),this.Monde5&&this.Monde5.update()}}const Wi=class{constructor(e){if(Wi.instance)return Wi.instance;Wi.instance=this,this.canvas=e,this.scene=new fm,this.scene.background=new Se("#97D7F0"),this.time=new lg,this.sizes=new ag,this.camera=new Xg,this.renderer=new Wg,this.ressources=new Gg(Hg),this.world=new X0,this.Worlds={Accueil:"Accueil",Monde1:"Monde1",Monde2:"Monde2",Monde3:"Monde3",Monde4:"Monde4",Monde5:"Monde5"},this.ActualWorld=this.Worlds.Accueil,this.sizes.on("resize",()=>{this.resize()}),this.time.on("update",()=>{this.update()})}resize(){this.camera.resize(),this.renderer.resize()}update(){this.camera.update(),this.renderer.update(),this.world.update()}};let Te=Wi;go(Te,"instance");new Te(document.querySelector("#bg"));document.cookie="cookie1=value1; SameSite=Lax";document.cookie="cookie2=value2; SameSite=None; Secure";
