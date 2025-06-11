(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&s(y)}).observe(document,{childList:!0,subtree:!0});function f(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function s(d){if(d.ep)return;d.ep=!0;const p=f(d);fetch(d.href,p)}})();var jc={exports:{}},Qa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib;function yh(){if(ib)return Qa;ib=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(s,d,p){var y=null;if(p!==void 0&&(y=""+p),d.key!==void 0&&(y=""+d.key),"key"in d){p={};for(var O in d)O!=="key"&&(p[O]=d[O])}else p=d;return d=p.ref,{$$typeof:i,type:s,key:y,ref:d!==void 0?d:null,props:p}}return Qa.Fragment=c,Qa.jsx=f,Qa.jsxs=f,Qa}var ub;function mh(){return ub||(ub=1,jc.exports=yh()),jc.exports}var g=mh(),Gc={exports:{}},tn={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb;function vh(){if(cb)return tn;cb=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),y=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),L=Symbol.iterator;function j(h){return h===null||typeof h!="object"?null:(h=L&&h[L]||h["@@iterator"],typeof h=="function"?h:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,K={};function P(h,M,B){this.props=h,this.context=M,this.refs=K,this.updater=B||W}P.prototype.isReactComponent={},P.prototype.setState=function(h,M){if(typeof h!="object"&&typeof h!="function"&&h!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,h,M,"setState")},P.prototype.forceUpdate=function(h){this.updater.enqueueForceUpdate(this,h,"forceUpdate")};function bn(){}bn.prototype=P.prototype;function sn(h,M,B){this.props=h,this.context=M,this.refs=K,this.updater=B||W}var on=sn.prototype=new bn;on.constructor=sn,J(on,P.prototype),on.isPureReactComponent=!0;var Z=Array.isArray,H={H:null,A:null,T:null,S:null,V:null},F=Object.prototype.hasOwnProperty;function hn(h,M,B,w,Y,en){return B=en.ref,{$$typeof:i,type:h,key:M,ref:B!==void 0?B:null,props:en}}function mn(h,M){return hn(h.type,M,void 0,void 0,void 0,h.props)}function vn(h){return typeof h=="object"&&h!==null&&h.$$typeof===i}function Ce(h){var M={"=":"=0",":":"=2"};return"$"+h.replace(/[=:]/g,function(B){return M[B]})}var ee=/\/+/g;function wn(h,M){return typeof h=="object"&&h!==null&&h.key!=null?Ce(""+h.key):M.toString(36)}function fn(){}function xn(h){switch(h.status){case"fulfilled":return h.value;case"rejected":throw h.reason;default:switch(typeof h.status=="string"?h.then(fn,fn):(h.status="pending",h.then(function(M){h.status==="pending"&&(h.status="fulfilled",h.value=M)},function(M){h.status==="pending"&&(h.status="rejected",h.reason=M)})),h.status){case"fulfilled":return h.value;case"rejected":throw h.reason}}throw h}function Dn(h,M,B,w,Y){var en=typeof h;(en==="undefined"||en==="boolean")&&(h=null);var X=!1;if(h===null)X=!0;else switch(en){case"bigint":case"string":case"number":X=!0;break;case"object":switch(h.$$typeof){case i:case c:X=!0;break;case N:return X=h._init,Dn(X(h._payload),M,B,w,Y)}}if(X)return Y=Y(h),X=w===""?"."+wn(h,0):w,Z(Y)?(B="",X!=null&&(B=X.replace(ee,"$&/")+"/"),Dn(Y,M,B,"",function(je){return je})):Y!=null&&(vn(Y)&&(Y=mn(Y,B+(Y.key==null||h&&h.key===Y.key?"":(""+Y.key).replace(ee,"$&/")+"/")+X)),M.push(Y)),1;X=0;var Gn=w===""?".":w+":";if(Z(h))for(var On=0;On<h.length;On++)w=h[On],en=Gn+wn(w,On),X+=Dn(w,M,B,en,Y);else if(On=j(h),typeof On=="function")for(h=On.call(h),On=0;!(w=h.next()).done;)w=w.value,en=Gn+wn(w,On++),X+=Dn(w,M,B,en,Y);else if(en==="object"){if(typeof h.then=="function")return Dn(xn(h),M,B,w,Y);throw M=String(h),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(h).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return X}function D(h,M,B){if(h==null)return h;var w=[],Y=0;return Dn(h,w,"","",function(en){return M.call(B,en,Y++)}),w}function z(h){if(h._status===-1){var M=h._result;M=M(),M.then(function(B){(h._status===0||h._status===-1)&&(h._status=1,h._result=B)},function(B){(h._status===0||h._status===-1)&&(h._status=2,h._result=B)}),h._status===-1&&(h._status=0,h._result=M)}if(h._status===1)return h._result.default;throw h._result}var q=typeof reportError=="function"?reportError:function(h){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof h=="object"&&h!==null&&typeof h.message=="string"?String(h.message):String(h),error:h});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",h);return}console.error(h)};function ln(){}return tn.Children={map:D,forEach:function(h,M,B){D(h,function(){M.apply(this,arguments)},B)},count:function(h){var M=0;return D(h,function(){M++}),M},toArray:function(h){return D(h,function(M){return M})||[]},only:function(h){if(!vn(h))throw Error("React.Children.only expected to receive a single React element child.");return h}},tn.Component=P,tn.Fragment=f,tn.Profiler=d,tn.PureComponent=sn,tn.StrictMode=s,tn.Suspense=S,tn.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,tn.__COMPILER_RUNTIME={__proto__:null,c:function(h){return H.H.useMemoCache(h)}},tn.cache=function(h){return function(){return h.apply(null,arguments)}},tn.cloneElement=function(h,M,B){if(h==null)throw Error("The argument must be a React element, but you passed "+h+".");var w=J({},h.props),Y=h.key,en=void 0;if(M!=null)for(X in M.ref!==void 0&&(en=void 0),M.key!==void 0&&(Y=""+M.key),M)!F.call(M,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&M.ref===void 0||(w[X]=M[X]);var X=arguments.length-2;if(X===1)w.children=B;else if(1<X){for(var Gn=Array(X),On=0;On<X;On++)Gn[On]=arguments[On+2];w.children=Gn}return hn(h.type,Y,void 0,void 0,en,w)},tn.createContext=function(h){return h={$$typeof:y,_currentValue:h,_currentValue2:h,_threadCount:0,Provider:null,Consumer:null},h.Provider=h,h.Consumer={$$typeof:p,_context:h},h},tn.createElement=function(h,M,B){var w,Y={},en=null;if(M!=null)for(w in M.key!==void 0&&(en=""+M.key),M)F.call(M,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(Y[w]=M[w]);var X=arguments.length-2;if(X===1)Y.children=B;else if(1<X){for(var Gn=Array(X),On=0;On<X;On++)Gn[On]=arguments[On+2];Y.children=Gn}if(h&&h.defaultProps)for(w in X=h.defaultProps,X)Y[w]===void 0&&(Y[w]=X[w]);return hn(h,en,void 0,void 0,null,Y)},tn.createRef=function(){return{current:null}},tn.forwardRef=function(h){return{$$typeof:O,render:h}},tn.isValidElement=vn,tn.lazy=function(h){return{$$typeof:N,_payload:{_status:-1,_result:h},_init:z}},tn.memo=function(h,M){return{$$typeof:v,type:h,compare:M===void 0?null:M}},tn.startTransition=function(h){var M=H.T,B={};H.T=B;try{var w=h(),Y=H.S;Y!==null&&Y(B,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(ln,q)}catch(en){q(en)}finally{H.T=M}},tn.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},tn.use=function(h){return H.H.use(h)},tn.useActionState=function(h,M,B){return H.H.useActionState(h,M,B)},tn.useCallback=function(h,M){return H.H.useCallback(h,M)},tn.useContext=function(h){return H.H.useContext(h)},tn.useDebugValue=function(){},tn.useDeferredValue=function(h,M){return H.H.useDeferredValue(h,M)},tn.useEffect=function(h,M,B){var w=H.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return w.useEffect(h,M)},tn.useId=function(){return H.H.useId()},tn.useImperativeHandle=function(h,M,B){return H.H.useImperativeHandle(h,M,B)},tn.useInsertionEffect=function(h,M){return H.H.useInsertionEffect(h,M)},tn.useLayoutEffect=function(h,M){return H.H.useLayoutEffect(h,M)},tn.useMemo=function(h,M){return H.H.useMemo(h,M)},tn.useOptimistic=function(h,M){return H.H.useOptimistic(h,M)},tn.useReducer=function(h,M,B){return H.H.useReducer(h,M,B)},tn.useRef=function(h){return H.H.useRef(h)},tn.useState=function(h){return H.H.useState(h)},tn.useSyncExternalStore=function(h,M,B){return H.H.useSyncExternalStore(h,M,B)},tn.useTransition=function(){return H.H.useTransition()},tn.version="19.1.0",tn}var sb;function Si(){return sb||(sb=1,Gc.exports=vh()),Gc.exports}var $=Si(),Yc={exports:{}},Xa={},qc={exports:{}},Vc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob;function gh(){return ob||(ob=1,function(i){function c(D,z){var q=D.length;D.push(z);n:for(;0<q;){var ln=q-1>>>1,h=D[ln];if(0<d(h,z))D[ln]=z,D[q]=h,q=ln;else break n}}function f(D){return D.length===0?null:D[0]}function s(D){if(D.length===0)return null;var z=D[0],q=D.pop();if(q!==z){D[0]=q;n:for(var ln=0,h=D.length,M=h>>>1;ln<M;){var B=2*(ln+1)-1,w=D[B],Y=B+1,en=D[Y];if(0>d(w,q))Y<h&&0>d(en,w)?(D[ln]=en,D[Y]=q,ln=Y):(D[ln]=w,D[B]=q,ln=B);else if(Y<h&&0>d(en,q))D[ln]=en,D[Y]=q,ln=Y;else break n}}return z}function d(D,z){var q=D.sortIndex-z.sortIndex;return q!==0?q:D.id-z.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var y=Date,O=y.now();i.unstable_now=function(){return y.now()-O}}var S=[],v=[],N=1,L=null,j=3,W=!1,J=!1,K=!1,P=!1,bn=typeof setTimeout=="function"?setTimeout:null,sn=typeof clearTimeout=="function"?clearTimeout:null,on=typeof setImmediate<"u"?setImmediate:null;function Z(D){for(var z=f(v);z!==null;){if(z.callback===null)s(v);else if(z.startTime<=D)s(v),z.sortIndex=z.expirationTime,c(S,z);else break;z=f(v)}}function H(D){if(K=!1,Z(D),!J)if(f(S)!==null)J=!0,F||(F=!0,wn());else{var z=f(v);z!==null&&Dn(H,z.startTime-D)}}var F=!1,hn=-1,mn=5,vn=-1;function Ce(){return P?!0:!(i.unstable_now()-vn<mn)}function ee(){if(P=!1,F){var D=i.unstable_now();vn=D;var z=!0;try{n:{J=!1,K&&(K=!1,sn(hn),hn=-1),W=!0;var q=j;try{e:{for(Z(D),L=f(S);L!==null&&!(L.expirationTime>D&&Ce());){var ln=L.callback;if(typeof ln=="function"){L.callback=null,j=L.priorityLevel;var h=ln(L.expirationTime<=D);if(D=i.unstable_now(),typeof h=="function"){L.callback=h,Z(D),z=!0;break e}L===f(S)&&s(S),Z(D)}else s(S);L=f(S)}if(L!==null)z=!0;else{var M=f(v);M!==null&&Dn(H,M.startTime-D),z=!1}}break n}finally{L=null,j=q,W=!1}z=void 0}}finally{z?wn():F=!1}}}var wn;if(typeof on=="function")wn=function(){on(ee)};else if(typeof MessageChannel<"u"){var fn=new MessageChannel,xn=fn.port2;fn.port1.onmessage=ee,wn=function(){xn.postMessage(null)}}else wn=function(){bn(ee,0)};function Dn(D,z){hn=bn(function(){D(i.unstable_now())},z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(D){D.callback=null},i.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):mn=0<D?Math.floor(1e3/D):5},i.unstable_getCurrentPriorityLevel=function(){return j},i.unstable_next=function(D){switch(j){case 1:case 2:case 3:var z=3;break;default:z=j}var q=j;j=z;try{return D()}finally{j=q}},i.unstable_requestPaint=function(){P=!0},i.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=j;j=D;try{return z()}finally{j=q}},i.unstable_scheduleCallback=function(D,z,q){var ln=i.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?ln+q:ln):q=ln,D){case 1:var h=-1;break;case 2:h=250;break;case 5:h=1073741823;break;case 4:h=1e4;break;default:h=5e3}return h=q+h,D={id:N++,callback:z,priorityLevel:D,startTime:q,expirationTime:h,sortIndex:-1},q>ln?(D.sortIndex=q,c(v,D),f(S)===null&&D===f(v)&&(K?(sn(hn),hn=-1):K=!0,Dn(H,q-ln))):(D.sortIndex=h,c(S,D),J||W||(J=!0,F||(F=!0,wn()))),D},i.unstable_shouldYield=Ce,i.unstable_wrapCallback=function(D){var z=j;return function(){var q=j;j=z;try{return D.apply(this,arguments)}finally{j=q}}}}(Vc)),Vc}var fb;function Sh(){return fb||(fb=1,qc.exports=gh()),qc.exports}var Kc={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var db;function Ah(){if(db)return Fn;db=1;var i=Si();function c(S){var v="https://react.dev/errors/"+S;if(1<arguments.length){v+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)v+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+S+"; visit "+v+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(S,v,N){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:L==null?null:""+L,children:S,containerInfo:v,implementation:N}}var y=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(S,v){if(S==="font")return"";if(typeof v=="string")return v==="use-credentials"?v:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(S,v){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!v||v.nodeType!==1&&v.nodeType!==9&&v.nodeType!==11)throw Error(c(299));return p(S,v,null,N)},Fn.flushSync=function(S){var v=y.T,N=s.p;try{if(y.T=null,s.p=2,S)return S()}finally{y.T=v,s.p=N,s.d.f()}},Fn.preconnect=function(S,v){typeof S=="string"&&(v?(v=v.crossOrigin,v=typeof v=="string"?v==="use-credentials"?v:"":void 0):v=null,s.d.C(S,v))},Fn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Fn.preinit=function(S,v){if(typeof S=="string"&&v&&typeof v.as=="string"){var N=v.as,L=O(N,v.crossOrigin),j=typeof v.integrity=="string"?v.integrity:void 0,W=typeof v.fetchPriority=="string"?v.fetchPriority:void 0;N==="style"?s.d.S(S,typeof v.precedence=="string"?v.precedence:void 0,{crossOrigin:L,integrity:j,fetchPriority:W}):N==="script"&&s.d.X(S,{crossOrigin:L,integrity:j,fetchPriority:W,nonce:typeof v.nonce=="string"?v.nonce:void 0})}},Fn.preinitModule=function(S,v){if(typeof S=="string")if(typeof v=="object"&&v!==null){if(v.as==null||v.as==="script"){var N=O(v.as,v.crossOrigin);s.d.M(S,{crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0})}}else v==null&&s.d.M(S)},Fn.preload=function(S,v){if(typeof S=="string"&&typeof v=="object"&&v!==null&&typeof v.as=="string"){var N=v.as,L=O(N,v.crossOrigin);s.d.L(S,N,{crossOrigin:L,integrity:typeof v.integrity=="string"?v.integrity:void 0,nonce:typeof v.nonce=="string"?v.nonce:void 0,type:typeof v.type=="string"?v.type:void 0,fetchPriority:typeof v.fetchPriority=="string"?v.fetchPriority:void 0,referrerPolicy:typeof v.referrerPolicy=="string"?v.referrerPolicy:void 0,imageSrcSet:typeof v.imageSrcSet=="string"?v.imageSrcSet:void 0,imageSizes:typeof v.imageSizes=="string"?v.imageSizes:void 0,media:typeof v.media=="string"?v.media:void 0})}},Fn.preloadModule=function(S,v){if(typeof S=="string")if(v){var N=O(v.as,v.crossOrigin);s.d.m(S,{as:typeof v.as=="string"&&v.as!=="script"?v.as:void 0,crossOrigin:N,integrity:typeof v.integrity=="string"?v.integrity:void 0})}else s.d.m(S)},Fn.requestFormReset=function(S){s.d.r(S)},Fn.unstable_batchedUpdates=function(S,v){return S(v)},Fn.useFormState=function(S,v,N){return y.H.useFormState(S,v,N)},Fn.useFormStatus=function(){return y.H.useHostTransitionStatus()},Fn.version="19.1.0",Fn}var bb;function Eh(){if(bb)return Kc.exports;bb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Kc.exports=Ah(),Kc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pb;function Rh(){if(pb)return Xa;pb=1;var i=Sh(),c=Si(),f=Eh();function s(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function p(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function y(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function O(n){if(p(n)!==n)throw Error(s(188))}function S(n){var e=n.alternate;if(!e){if(e=p(n),e===null)throw Error(s(188));return e!==n?null:n}for(var t=n,r=e;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return O(a),n;if(l===r)return O(a),e;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=a,r=l;else{for(var u=!1,o=a.child;o;){if(o===t){u=!0,t=a,r=l;break}if(o===r){u=!0,r=a,t=l;break}o=o.sibling}if(!u){for(o=l.child;o;){if(o===t){u=!0,t=l,r=a;break}if(o===r){u=!0,r=l,t=a;break}o=o.sibling}if(!u)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?n:e}function v(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=v(n),e!==null)return e;n=n.sibling}return null}var N=Object.assign,L=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),bn=Symbol.for("react.provider"),sn=Symbol.for("react.consumer"),on=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),hn=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),vn=Symbol.for("react.activity"),Ce=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function wn(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var fn=Symbol.for("react.client.reference");function xn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===fn?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case J:return"Fragment";case P:return"Profiler";case K:return"StrictMode";case H:return"Suspense";case F:return"SuspenseList";case vn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case W:return"Portal";case on:return(n.displayName||"Context")+".Provider";case sn:return(n._context.displayName||"Context")+".Consumer";case Z:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case hn:return e=n.displayName||null,e!==null?e:xn(n.type)||"Memo";case mn:e=n._payload,n=n._init;try{return xn(n(e))}catch{}}return null}var Dn=Array.isArray,D=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},ln=[],h=-1;function M(n){return{current:n}}function B(n){0>h||(n.current=ln[h],ln[h]=null,h--)}function w(n,e){h++,ln[h]=n.current,n.current=e}var Y=M(null),en=M(null),X=M(null),Gn=M(null);function On(n,e){switch(w(X,e),w(en,n),w(Y,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Ld(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Ld(e),n=Bd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}B(Y),w(Y,n)}function je(){B(Y),B(en),B(X)}function ar(n){n.memoizedState!==null&&w(Gn,n);var e=Y.current,t=Bd(e,n.type);e!==t&&(w(en,n),w(Y,t))}function lr(n){en.current===n&&(B(Y),B(en)),Gn.current===n&&(B(Gn),Ga._currentValue=q)}var nn=Object.prototype.hasOwnProperty,Tn=i.unstable_scheduleCallback,ue=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,Oi=i.unstable_requestPaint,Ue=i.unstable_now,ir=i.unstable_getCurrentPriorityLevel,Lt=i.unstable_ImmediatePriority,bs=i.unstable_UserBlockingPriority,Ja=i.unstable_NormalPriority,Pb=i.unstable_LowPriority,ps=i.unstable_IdlePriority,Fb=i.log,$b=i.unstable_setDisableYieldValue,Wr=null,ce=null;function st(n){if(typeof Fb=="function"&&$b(n),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(Wr,n)}catch{}}var se=Math.clz32?Math.clz32:t0,n0=Math.log,e0=Math.LN2;function t0(n){return n>>>=0,n===0?32:31-(n0(n)/e0|0)|0}var Pa=256,Fa=4194304;function Bt(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function $a(n,e,t){var r=n.pendingLanes;if(r===0)return 0;var a=0,l=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var o=r&134217727;return o!==0?(r=o&~l,r!==0?a=Bt(r):(u&=o,u!==0?a=Bt(u):t||(t=o&~n,t!==0&&(a=Bt(t))))):(o=r&~l,o!==0?a=Bt(o):u!==0?a=Bt(u):t||(t=r&~n,t!==0&&(a=Bt(t)))),a===0?0:e!==0&&e!==a&&(e&l)===0&&(l=a&-a,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:a}function Zr(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function r0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hs(){var n=Pa;return Pa<<=1,(Pa&4194048)===0&&(Pa=256),n}function ys(){var n=Fa;return Fa<<=1,(Fa&62914560)===0&&(Fa=4194304),n}function Ni(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ir(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function a0(n,e,t,r,a,l){var u=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var o=n.entanglements,b=n.expirationTimes,R=n.hiddenUpdates;for(t=u&~t;0<t;){var x=31-se(t),U=1<<x;o[x]=0,b[x]=-1;var T=R[x];if(T!==null)for(R[x]=null,x=0;x<T.length;x++){var _=T[x];_!==null&&(_.lane&=-536870913)}t&=~U}r!==0&&ms(n,r,0),l!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=l&~(u&~e))}function ms(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var r=31-se(e);n.entangledLanes|=e,n.entanglements[r]=n.entanglements[r]|1073741824|t&4194090}function vs(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-se(t),a=1<<r;a&e|n[r]&e&&(n[r]|=e),t&=~a}}function Di(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function xi(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function gs(){var n=z.p;return n!==0?n:(n=window.event,n===void 0?32:nb(n.type))}function l0(n,e){var t=z.p;try{return z.p=n,e()}finally{z.p=t}}var ot=Math.random().toString(36).slice(2),Jn="__reactFiber$"+ot,te="__reactProps$"+ot,ur="__reactContainer$"+ot,Mi="__reactEvents$"+ot,i0="__reactListeners$"+ot,u0="__reactHandles$"+ot,Ss="__reactResources$"+ot,Jr="__reactMarker$"+ot;function Ci(n){delete n[Jn],delete n[te],delete n[Mi],delete n[i0],delete n[u0]}function cr(n){var e=n[Jn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ur]||t[Jn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Gd(n);n!==null;){if(t=n[Jn])return t;n=Gd(n)}return e}n=t,t=n.parentNode}return null}function sr(n){if(n=n[Jn]||n[ur]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Pr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(s(33))}function or(n){var e=n[Ss];return e||(e=n[Ss]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Vn(n){n[Jr]=!0}var As=new Set,Es={};function wt(n,e){fr(n,e),fr(n+"Capture",e)}function fr(n,e){for(Es[n]=e,n=0;n<e.length;n++)As.add(e[n])}var c0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},Ts={};function s0(n){return nn.call(Ts,n)?!0:nn.call(Rs,n)?!1:c0.test(n)?Ts[n]=!0:(Rs[n]=!0,!1)}function nl(n,e,t){if(s0(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function el(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Xe(n,e,t,r){if(r===null)n.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+r)}}var Ui,_s;function dr(n){if(Ui===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ui=e&&e[1]||"",_s=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ui+n+_s}var Hi=!1;function Li(n,e){if(!n||Hi)return"";Hi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(_){var T=_}Reflect.construct(n,[],U)}else{try{U.call()}catch(_){T=_}n.call(U.prototype)}}else{try{throw Error()}catch(_){T=_}(U=n())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(_){if(_&&T&&typeof _.stack=="string")return[_.stack,T.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=r.DetermineComponentFrameRoot(),u=l[0],o=l[1];if(u&&o){var b=u.split(`
`),R=o.split(`
`);for(a=r=0;r<b.length&&!b[r].includes("DetermineComponentFrameRoot");)r++;for(;a<R.length&&!R[a].includes("DetermineComponentFrameRoot");)a++;if(r===b.length||a===R.length)for(r=b.length-1,a=R.length-1;1<=r&&0<=a&&b[r]!==R[a];)a--;for(;1<=r&&0<=a;r--,a--)if(b[r]!==R[a]){if(r!==1||a!==1)do if(r--,a--,0>a||b[r]!==R[a]){var x=`
`+b[r].replace(" at new "," at ");return n.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",n.displayName)),x}while(1<=r&&0<=a);break}}}finally{Hi=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?dr(t):""}function o0(n){switch(n.tag){case 26:case 27:case 5:return dr(n.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 15:return Li(n.type,!1);case 11:return Li(n.type.render,!1);case 1:return Li(n.type,!0);case 31:return dr("Activity");default:return""}}function Os(n){try{var e="";do e+=o0(n),n=n.return;while(n);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ns(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f0(n){var e=Ns(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function tl(n){n._valueTracker||(n._valueTracker=f0(n))}function Ds(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Ns(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function rl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var d0=/[\n"\\]/g;function Ae(n){return n.replace(d0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Bi(n,e,t,r,a,l,u,o){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),e!=null?u==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Se(e)):n.value!==""+Se(e)&&(n.value=""+Se(e)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),e!=null?wi(n,u,Se(e)):t!=null?wi(n,u,Se(t)):r!=null&&n.removeAttribute("value"),a==null&&l!=null&&(n.defaultChecked=!!l),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+Se(o):n.removeAttribute("name")}function xs(n,e,t,r,a,l,u,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;t=t!=null?""+Se(t):"",e=e!=null?""+Se(e):t,o||e===n.value||(n.value=e),n.defaultValue=e}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,n.checked=o?n.checked:!!r,n.defaultChecked=!!r,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function wi(n,e,t){e==="number"&&rl(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function br(n,e,t,r){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Se(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,r&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Ms(n,e,t){if(e!=null&&(e=""+Se(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Se(t):""}function Cs(n,e,t,r){if(e==null){if(r!=null){if(t!=null)throw Error(s(92));if(Dn(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),e=t}t=Se(e),n.defaultValue=t,r=n.textContent,r===t&&r!==""&&r!==null&&(n.value=r)}function pr(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var b0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Us(n,e,t){var r=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":r?n.setProperty(e,t):typeof t!="number"||t===0||b0.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Hs(n,e,t){if(e!=null&&typeof e!="object")throw Error(s(62));if(n=n.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="");for(var a in e)r=e[a],e.hasOwnProperty(a)&&t[a]!==r&&Us(n,a,r)}else for(var l in e)e.hasOwnProperty(l)&&Us(n,l,e[l])}function zi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var p0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),h0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function al(n){return h0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var ji=null;function Gi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hr=null,yr=null;function Ls(n){var e=sr(n);if(e&&(n=e.stateNode)){var t=n[te]||null;n:switch(n=e.stateNode,e.type){case"input":if(Bi(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ae(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var a=r[te]||null;if(!a)throw Error(s(90));Bi(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<t.length;e++)r=t[e],r.form===n.form&&Ds(r)}break n;case"textarea":Ms(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&br(n,!!t.multiple,e,!1)}}}var Yi=!1;function Bs(n,e,t){if(Yi)return n(e,t);Yi=!0;try{var r=n(e);return r}finally{if(Yi=!1,(hr!==null||yr!==null)&&(Kl(),hr&&(e=hr,n=yr,yr=hr=null,Ls(e),n)))for(e=0;e<n.length;e++)Ls(n[e])}}function Fr(n,e){var t=n.stateNode;if(t===null)return null;var r=t[te]||null;if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(s(231,e,typeof t));return t}var ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qi=!1;if(ke)try{var $r={};Object.defineProperty($r,"passive",{get:function(){qi=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{qi=!1}var ft=null,Vi=null,ll=null;function ws(){if(ll)return ll;var n,e=Vi,t=e.length,r,a="value"in ft?ft.value:ft.textContent,l=a.length;for(n=0;n<t&&e[n]===a[n];n++);var u=t-n;for(r=1;r<=u&&e[t-r]===a[l-r];r++);return ll=a.slice(n,1<r?1-r:void 0)}function il(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ul(){return!0}function zs(){return!1}function re(n){function e(t,r,a,l,u){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ul:zs,this.isPropagationStopped=zs,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),e}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=re(zt),na=N({},zt,{view:0,detail:0}),y0=re(na),Ki,Qi,ea,sl=N({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ki,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ea&&(ea&&n.type==="mousemove"?(Ki=n.screenX-ea.screenX,Qi=n.screenY-ea.screenY):Qi=Ki=0,ea=n),Ki)},movementY:function(n){return"movementY"in n?n.movementY:Qi}}),js=re(sl),m0=N({},sl,{dataTransfer:0}),v0=re(m0),g0=N({},na,{relatedTarget:0}),Xi=re(g0),S0=N({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),A0=re(S0),E0=N({},zt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),R0=re(E0),T0=N({},zt,{data:0}),Gs=re(T0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=N0[n])?!!e[n]:!1}function ki(){return D0}var x0=N({},na,{key:function(n){if(n.key){var e=_0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ki,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),M0=re(x0),C0=N({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ys=re(C0),U0=N({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ki}),H0=re(U0),L0=N({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),B0=re(L0),w0=N({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),z0=re(w0),j0=N({},zt,{newState:0,oldState:0}),G0=re(j0),Y0=[9,13,27,32],Wi=ke&&"CompositionEvent"in window,ta=null;ke&&"documentMode"in document&&(ta=document.documentMode);var q0=ke&&"TextEvent"in window&&!ta,qs=ke&&(!Wi||ta&&8<ta&&11>=ta),Vs=" ",Ks=!1;function Qs(n,e){switch(n){case"keyup":return Y0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var mr=!1;function V0(n,e){switch(n){case"compositionend":return Xs(e);case"keypress":return e.which!==32?null:(Ks=!0,Vs);case"textInput":return n=e.data,n===Vs&&Ks?null:n;default:return null}}function K0(n,e){if(mr)return n==="compositionend"||!Wi&&Qs(n,e)?(n=ws(),ll=Vi=ft=null,mr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qs&&e.locale!=="ko"?null:e.data;default:return null}}var Q0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ks(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!Q0[n.type]:e==="textarea"}function Ws(n,e,t,r){hr?yr?yr.push(r):yr=[r]:hr=r,e=Il(e,"onChange"),0<e.length&&(t=new cl("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var ra=null,aa=null;function X0(n){xd(n,0)}function ol(n){var e=Pr(n);if(Ds(e))return n}function Zs(n,e){if(n==="change")return e}var Is=!1;if(ke){var Zi;if(ke){var Ii="oninput"in document;if(!Ii){var Js=document.createElement("div");Js.setAttribute("oninput","return;"),Ii=typeof Js.oninput=="function"}Zi=Ii}else Zi=!1;Is=Zi&&(!document.documentMode||9<document.documentMode)}function Ps(){ra&&(ra.detachEvent("onpropertychange",Fs),aa=ra=null)}function Fs(n){if(n.propertyName==="value"&&ol(aa)){var e=[];Ws(e,aa,n,Gi(n)),Bs(X0,e)}}function k0(n,e,t){n==="focusin"?(Ps(),ra=e,aa=t,ra.attachEvent("onpropertychange",Fs)):n==="focusout"&&Ps()}function W0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(aa)}function Z0(n,e){if(n==="click")return ol(e)}function I0(n,e){if(n==="input"||n==="change")return ol(e)}function J0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var oe=typeof Object.is=="function"?Object.is:J0;function la(n,e){if(oe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!nn.call(e,a)||!oe(n[a],e[a]))return!1}return!0}function $s(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function no(n,e){var t=$s(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=$s(t)}}function eo(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?eo(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function to(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=rl(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=rl(n.document)}return e}function Ji(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var P0=ke&&"documentMode"in document&&11>=document.documentMode,vr=null,Pi=null,ia=null,Fi=!1;function ro(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fi||vr==null||vr!==rl(r)||(r=vr,"selectionStart"in r&&Ji(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ia&&la(ia,r)||(ia=r,r=Il(Pi,"onSelect"),0<r.length&&(e=new cl("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=vr)))}function jt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var gr={animationend:jt("Animation","AnimationEnd"),animationiteration:jt("Animation","AnimationIteration"),animationstart:jt("Animation","AnimationStart"),transitionrun:jt("Transition","TransitionRun"),transitionstart:jt("Transition","TransitionStart"),transitioncancel:jt("Transition","TransitionCancel"),transitionend:jt("Transition","TransitionEnd")},$i={},ao={};ke&&(ao=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Gt(n){if($i[n])return $i[n];if(!gr[n])return n;var e=gr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ao)return $i[n]=e[t];return n}var lo=Gt("animationend"),io=Gt("animationiteration"),uo=Gt("animationstart"),F0=Gt("transitionrun"),$0=Gt("transitionstart"),np=Gt("transitioncancel"),co=Gt("transitionend"),so=new Map,nu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");nu.push("scrollEnd");function He(n,e){so.set(n,e),wt(e,[n])}var oo=new WeakMap;function Ee(n,e){if(typeof n=="object"&&n!==null){var t=oo.get(n);return t!==void 0?t:(e={value:n,source:e,stack:Os(e)},oo.set(n,e),e)}return{value:n,source:e,stack:Os(e)}}var Re=[],Sr=0,eu=0;function fl(){for(var n=Sr,e=eu=Sr=0;e<n;){var t=Re[e];Re[e++]=null;var r=Re[e];Re[e++]=null;var a=Re[e];Re[e++]=null;var l=Re[e];if(Re[e++]=null,r!==null&&a!==null){var u=r.pending;u===null?a.next=a:(a.next=u.next,u.next=a),r.pending=a}l!==0&&fo(t,a,l)}}function dl(n,e,t,r){Re[Sr++]=n,Re[Sr++]=e,Re[Sr++]=t,Re[Sr++]=r,eu|=r,n.lanes|=r,n=n.alternate,n!==null&&(n.lanes|=r)}function tu(n,e,t,r){return dl(n,e,t,r),bl(n)}function Ar(n,e){return dl(n,null,null,e),bl(n)}function fo(n,e,t){n.lanes|=t;var r=n.alternate;r!==null&&(r.lanes|=t);for(var a=!1,l=n.return;l!==null;)l.childLanes|=t,r=l.alternate,r!==null&&(r.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(a=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,a&&e!==null&&(a=31-se(t),n=l.hiddenUpdates,r=n[a],r===null?n[a]=[e]:r.push(e),e.lane=t|536870912),l):null}function bl(n){if(50<Ca)throw Ca=0,cc=null,Error(s(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var Er={};function ep(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(n,e,t,r){return new ep(n,e,t,r)}function ru(n){return n=n.prototype,!(!n||!n.isReactComponent)}function We(n,e){var t=n.alternate;return t===null?(t=fe(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function bo(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function pl(n,e,t,r,a,l){var u=0;if(r=n,typeof n=="function")ru(n)&&(u=1);else if(typeof n=="string")u=rh(n,t,Y.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case vn:return n=fe(31,t,e,a),n.elementType=vn,n.lanes=l,n;case J:return Yt(t.children,a,l,e);case K:u=8,a|=24;break;case P:return n=fe(12,t,e,a|2),n.elementType=P,n.lanes=l,n;case H:return n=fe(13,t,e,a),n.elementType=H,n.lanes=l,n;case F:return n=fe(19,t,e,a),n.elementType=F,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case bn:case on:u=10;break n;case sn:u=9;break n;case Z:u=11;break n;case hn:u=14;break n;case mn:u=16,r=null;break n}u=29,t=Error(s(130,n===null?"null":typeof n,"")),r=null}return e=fe(u,t,e,a),e.elementType=n,e.type=r,e.lanes=l,e}function Yt(n,e,t,r){return n=fe(7,n,r,e),n.lanes=t,n}function au(n,e,t){return n=fe(6,n,null,e),n.lanes=t,n}function lu(n,e,t){return e=fe(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var Rr=[],Tr=0,hl=null,yl=0,Te=[],_e=0,qt=null,Ze=1,Ie="";function Vt(n,e){Rr[Tr++]=yl,Rr[Tr++]=hl,hl=n,yl=e}function po(n,e,t){Te[_e++]=Ze,Te[_e++]=Ie,Te[_e++]=qt,qt=n;var r=Ze;n=Ie;var a=32-se(r)-1;r&=~(1<<a),t+=1;var l=32-se(e)+a;if(30<l){var u=a-a%5;l=(r&(1<<u)-1).toString(32),r>>=u,a-=u,Ze=1<<32-se(e)+a|t<<a|r,Ie=l+n}else Ze=1<<l|t<<a|r,Ie=n}function iu(n){n.return!==null&&(Vt(n,1),po(n,1,0))}function uu(n){for(;n===hl;)hl=Rr[--Tr],Rr[Tr]=null,yl=Rr[--Tr],Rr[Tr]=null;for(;n===qt;)qt=Te[--_e],Te[_e]=null,Ie=Te[--_e],Te[_e]=null,Ze=Te[--_e],Te[_e]=null}var ne=null,Un=null,yn=!1,Kt=null,Ye=!1,cu=Error(s(519));function Qt(n){var e=Error(s(418,""));throw sa(Ee(e,n)),cu}function ho(n){var e=n.stateNode,t=n.type,r=n.memoizedProps;switch(e[Jn]=n,e[te]=r,t){case"dialog":cn("cancel",e),cn("close",e);break;case"iframe":case"object":case"embed":cn("load",e);break;case"video":case"audio":for(t=0;t<Ha.length;t++)cn(Ha[t],e);break;case"source":cn("error",e);break;case"img":case"image":case"link":cn("error",e),cn("load",e);break;case"details":cn("toggle",e);break;case"input":cn("invalid",e),xs(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),tl(e);break;case"select":cn("invalid",e);break;case"textarea":cn("invalid",e),Cs(e,r.value,r.defaultValue,r.children),tl(e)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||r.suppressHydrationWarning===!0||Hd(e.textContent,t)?(r.popover!=null&&(cn("beforetoggle",e),cn("toggle",e)),r.onScroll!=null&&cn("scroll",e),r.onScrollEnd!=null&&cn("scrollend",e),r.onClick!=null&&(e.onclick=Jl),e=!0):e=!1,e||Qt(n)}function yo(n){for(ne=n.return;ne;)switch(ne.tag){case 5:case 13:Ye=!1;return;case 27:case 3:Ye=!0;return;default:ne=ne.return}}function ua(n){if(n!==ne)return!1;if(!yn)return yo(n),yn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Tc(n.type,n.memoizedProps)),t=!t),t&&Un&&Qt(n),yo(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(t=n.data,t==="/$"){if(e===0){Un=Be(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;n=n.nextSibling}Un=null}}else e===27?(e=Un,Nt(n.type)?(n=Dc,Dc=null,Un=n):Un=e):Un=ne?Be(n.stateNode.nextSibling):null;return!0}function ca(){Un=ne=null,yn=!1}function mo(){var n=Kt;return n!==null&&(ie===null?ie=n:ie.push.apply(ie,n),Kt=null),n}function sa(n){Kt===null?Kt=[n]:Kt.push(n)}var su=M(null),Xt=null,Je=null;function dt(n,e,t){w(su,e._currentValue),e._currentValue=t}function Pe(n){n._currentValue=su.current,B(su)}function ou(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function fu(n,e,t,r){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){var u=a.child;l=l.firstContext;n:for(;l!==null;){var o=l;l=a;for(var b=0;b<e.length;b++)if(o.context===e[b]){l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),ou(l.return,t,n),r||(u=null);break n}l=o.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(s(341));u.lanes|=t,l=u.alternate,l!==null&&(l.lanes|=t),ou(u,t,n),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===n){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function oa(n,e,t,r){n=null;for(var a=e,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var o=a.type;oe(a.pendingProps.value,u.value)||(n!==null?n.push(o):n=[o])}}else if(a===Gn.current){if(u=a.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(Ga):n=[Ga])}a=a.return}n!==null&&fu(e,n,t,r),e.flags|=262144}function ml(n){for(n=n.firstContext;n!==null;){if(!oe(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function kt(n){Xt=n,Je=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Pn(n){return vo(Xt,n)}function vl(n,e){return Xt===null&&kt(n),vo(n,e)}function vo(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},Je===null){if(n===null)throw Error(s(308));Je=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else Je=Je.next=e;return t}var tp=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,r){n.push(r)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},rp=i.unstable_scheduleCallback,ap=i.unstable_NormalPriority,Yn={$$typeof:on,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function du(){return{controller:new tp,data:new Map,refCount:0}}function fa(n){n.refCount--,n.refCount===0&&rp(ap,function(){n.controller.abort()})}var da=null,bu=0,_r=0,Or=null;function lp(n,e){if(da===null){var t=da=[];bu=0,_r=hc(),Or={status:"pending",value:void 0,then:function(r){t.push(r)}}}return bu++,e.then(go,go),e}function go(){if(--bu===0&&da!==null){Or!==null&&(Or.status="fulfilled");var n=da;da=null,_r=0,Or=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function ip(n,e){var t=[],r={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return n.then(function(){r.status="fulfilled",r.value=e;for(var a=0;a<t.length;a++)(0,t[a])(e)},function(a){for(r.status="rejected",r.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),r}var So=D.S;D.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&lp(n,e),So!==null&&So(n,e)};var Wt=M(null);function pu(){var n=Wt.current;return n!==null?n:Nn.pooledCache}function gl(n,e){e===null?w(Wt,Wt.current):w(Wt,e.pool)}function Ao(){var n=pu();return n===null?null:{parent:Yn._currentValue,pool:n}}var ba=Error(s(460)),Eo=Error(s(474)),Sl=Error(s(542)),hu={then:function(){}};function Ro(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Al(){}function To(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(Al,Al),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Oo(n),n;default:if(typeof e.status=="string")e.then(Al,Al);else{if(n=Nn,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=e,n.status="pending",n.then(function(r){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=r}},function(r){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Oo(n),n}throw pa=e,ba}}var pa=null;function _o(){if(pa===null)throw Error(s(459));var n=pa;return pa=null,n}function Oo(n){if(n===ba||n===Sl)throw Error(s(483))}var bt=!1;function yu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function pt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ht(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,(gn&2)!==0){var a=r.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),r.pending=e,e=bl(n),fo(n,null,t),e}return dl(n,r,e,t),bl(n)}function ha(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,vs(n,t)}}function vu(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?a=l=u:l=l.next=u,t=t.next}while(t!==null);l===null?a=l=e:l=l.next=e}else a=l=e;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var gu=!1;function ya(){if(gu){var n=Or;if(n!==null)throw n}}function ma(n,e,t,r){gu=!1;var a=n.updateQueue;bt=!1;var l=a.firstBaseUpdate,u=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var b=o,R=b.next;b.next=null,u===null?l=R:u.next=R,u=b;var x=n.alternate;x!==null&&(x=x.updateQueue,o=x.lastBaseUpdate,o!==u&&(o===null?x.firstBaseUpdate=R:o.next=R,x.lastBaseUpdate=b))}if(l!==null){var U=a.baseState;u=0,x=R=b=null,o=l;do{var T=o.lane&-536870913,_=T!==o.lane;if(_?(dn&T)===T:(r&T)===T){T!==0&&T===_r&&(gu=!0),x!==null&&(x=x.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var I=n,Q=o;T=e;var Rn=t;switch(Q.tag){case 1:if(I=Q.payload,typeof I=="function"){U=I.call(Rn,U,T);break n}U=I;break n;case 3:I.flags=I.flags&-65537|128;case 0:if(I=Q.payload,T=typeof I=="function"?I.call(Rn,U,T):I,T==null)break n;U=N({},U,T);break n;case 2:bt=!0}}T=o.callback,T!==null&&(n.flags|=64,_&&(n.flags|=8192),_=a.callbacks,_===null?a.callbacks=[T]:_.push(T))}else _={lane:T,tag:o.tag,payload:o.payload,callback:o.callback,next:null},x===null?(R=x=_,b=U):x=x.next=_,u|=T;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;_=o,o=_.next,_.next=null,a.lastBaseUpdate=_,a.shared.pending=null}}while(!0);x===null&&(b=U),a.baseState=b,a.firstBaseUpdate=R,a.lastBaseUpdate=x,l===null&&(a.shared.lanes=0),Rt|=u,n.lanes=u,n.memoizedState=U}}function No(n,e){if(typeof n!="function")throw Error(s(191,n));n.call(e)}function Do(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)No(t[n],e)}var Nr=M(null),El=M(0);function xo(n,e){n=at,w(El,n),w(Nr,e),at=n|e.baseLanes}function Su(){w(El,at),w(Nr,Nr.current)}function Au(){at=El.current,B(Nr),B(El)}var yt=0,rn=null,An=null,zn=null,Rl=!1,Dr=!1,Zt=!1,Tl=0,va=0,xr=null,up=0;function Ln(){throw Error(s(321))}function Eu(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!oe(n[t],e[t]))return!1;return!0}function Ru(n,e,t,r,a,l){return yt=l,rn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,D.H=n===null||n.memoizedState===null?bf:pf,Zt=!1,l=t(r,a),Zt=!1,Dr&&(l=Co(e,t,r,a)),Mo(n),l}function Mo(n){D.H=Ml;var e=An!==null&&An.next!==null;if(yt=0,zn=An=rn=null,Rl=!1,va=0,xr=null,e)throw Error(s(300));n===null||Kn||(n=n.dependencies,n!==null&&ml(n)&&(Kn=!0))}function Co(n,e,t,r){rn=n;var a=0;do{if(Dr&&(xr=null),va=0,Dr=!1,25<=a)throw Error(s(301));if(a+=1,zn=An=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}D.H=pp,l=e(t,r)}while(Dr);return l}function cp(){var n=D.H,e=n.useState()[0];return e=typeof e.then=="function"?ga(e):e,n=n.useState()[0],(An!==null?An.memoizedState:null)!==n&&(rn.flags|=1024),e}function Tu(){var n=Tl!==0;return Tl=0,n}function _u(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Ou(n){if(Rl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Rl=!1}yt=0,zn=An=rn=null,Dr=!1,va=Tl=0,xr=null}function ae(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zn===null?rn.memoizedState=zn=n:zn=zn.next=n,zn}function jn(){if(An===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var e=zn===null?rn.memoizedState:zn.next;if(e!==null)zn=e,An=n;else{if(n===null)throw rn.alternate===null?Error(s(467)):Error(s(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},zn===null?rn.memoizedState=zn=n:zn=zn.next=n}return zn}function Nu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ga(n){var e=va;return va+=1,xr===null&&(xr=[]),n=To(xr,n,e),e=rn,(zn===null?e.memoizedState:zn.next)===null&&(e=e.alternate,D.H=e===null||e.memoizedState===null?bf:pf),n}function _l(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ga(n);if(n.$$typeof===on)return Pn(n)}throw Error(s(438,String(n)))}function Du(n){var e=null,t=rn.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var r=rn.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Nu(),rn.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),r=0;r<n;r++)t[r]=Ce;return e.index++,t}function Fe(n,e){return typeof e=="function"?e(n):e}function Ol(n){var e=jn();return xu(e,An,n)}function xu(n,e,t){var r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var u=a.next;a.next=l.next,l.next=u}e.baseQueue=a=l,r.pending=null}if(l=n.baseState,a===null)n.memoizedState=l;else{e=a.next;var o=u=null,b=null,R=e,x=!1;do{var U=R.lane&-536870913;if(U!==R.lane?(dn&U)===U:(yt&U)===U){var T=R.revertLane;if(T===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),U===_r&&(x=!0);else if((yt&T)===T){R=R.next,T===_r&&(x=!0);continue}else U={lane:0,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(o=b=U,u=l):b=b.next=U,rn.lanes|=T,Rt|=T;U=R.action,Zt&&t(l,U),l=R.hasEagerState?R.eagerState:t(l,U)}else T={lane:U,revertLane:R.revertLane,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},b===null?(o=b=T,u=l):b=b.next=T,rn.lanes|=U,Rt|=U;R=R.next}while(R!==null&&R!==e);if(b===null?u=l:b.next=o,!oe(l,n.memoizedState)&&(Kn=!0,x&&(t=Or,t!==null)))throw t;n.memoizedState=l,n.baseState=u,n.baseQueue=b,r.lastRenderedState=l}return a===null&&(r.lanes=0),[n.memoizedState,r.dispatch]}function Mu(n){var e=jn(),t=e.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=n;var r=t.dispatch,a=t.pending,l=e.memoizedState;if(a!==null){t.pending=null;var u=a=a.next;do l=n(l,u.action),u=u.next;while(u!==a);oe(l,e.memoizedState)||(Kn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,r]}function Uo(n,e,t){var r=rn,a=jn(),l=yn;if(l){if(t===void 0)throw Error(s(407));t=t()}else t=e();var u=!oe((An||a).memoizedState,t);u&&(a.memoizedState=t,Kn=!0),a=a.queue;var o=Bo.bind(null,r,a,n);if(Sa(2048,8,o,[n]),a.getSnapshot!==e||u||zn!==null&&zn.memoizedState.tag&1){if(r.flags|=2048,Mr(9,Nl(),Lo.bind(null,r,a,t,e),null),Nn===null)throw Error(s(349));l||(yt&124)!==0||Ho(r,e,t)}return t}function Ho(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=rn.updateQueue,e===null?(e=Nu(),rn.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Lo(n,e,t,r){e.value=t,e.getSnapshot=r,wo(e)&&zo(n)}function Bo(n,e,t){return t(function(){wo(e)&&zo(n)})}function wo(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!oe(n,t)}catch{return!0}}function zo(n){var e=Ar(n,2);e!==null&&ye(e,n,2)}function Cu(n){var e=ae();if(typeof n=="function"){var t=n;if(n=t(),Zt){st(!0);try{t()}finally{st(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:n},e}function jo(n,e,t,r){return n.baseState=t,xu(n,An,typeof r=="function"?r:Fe)}function sp(n,e,t,r,a){if(xl(n))throw Error(s(485));if(n=e.action,n!==null){var l={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){l.listeners.push(u)}};D.T!==null?t(!0):l.isTransition=!1,r(l),t=e.pending,t===null?(l.next=e.pending=l,Go(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Go(n,e){var t=e.action,r=e.payload,a=n.state;if(e.isTransition){var l=D.T,u={};D.T=u;try{var o=t(a,r),b=D.S;b!==null&&b(u,o),Yo(n,e,o)}catch(R){Uu(n,e,R)}finally{D.T=l}}else try{l=t(a,r),Yo(n,e,l)}catch(R){Uu(n,e,R)}}function Yo(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){qo(n,e,r)},function(r){return Uu(n,e,r)}):qo(n,e,t)}function qo(n,e,t){e.status="fulfilled",e.value=t,Vo(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Go(n,t)))}function Uu(n,e,t){var r=n.pending;if(n.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=t,Vo(e),e=e.next;while(e!==r)}n.action=null}function Vo(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Ko(n,e){return e}function Qo(n,e){if(yn){var t=Nn.formState;if(t!==null){n:{var r=rn;if(yn){if(Un){e:{for(var a=Un,l=Ye;a.nodeType!==8;){if(!l){a=null;break e}if(a=Be(a.nextSibling),a===null){a=null;break e}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Un=Be(a.nextSibling),r=a.data==="F!";break n}}Qt(r)}r=!1}r&&(e=t[0])}}return t=ae(),t.memoizedState=t.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:e},t.queue=r,t=of.bind(null,rn,r),r.dispatch=t,r=Cu(!1),l=zu.bind(null,rn,!1,r.queue),r=ae(),a={state:e,dispatch:null,action:n,pending:null},r.queue=a,t=sp.bind(null,rn,a,l,t),a.dispatch=t,r.memoizedState=n,[e,t,!1]}function Xo(n){var e=jn();return ko(e,An,n)}function ko(n,e,t){if(e=xu(n,e,Ko)[0],n=Ol(Fe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=ga(e)}catch(u){throw u===ba?Sl:u}else r=e;e=jn();var a=e.queue,l=a.dispatch;return t!==e.memoizedState&&(rn.flags|=2048,Mr(9,Nl(),op.bind(null,a,t),null)),[r,l,n]}function op(n,e){n.action=e}function Wo(n){var e=jn(),t=An;if(t!==null)return ko(e,t,n);jn(),e=e.memoizedState,t=jn();var r=t.queue.dispatch;return t.memoizedState=n,[e,r,!1]}function Mr(n,e,t,r){return n={tag:n,create:t,deps:r,inst:e,next:null},e=rn.updateQueue,e===null&&(e=Nu(),rn.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n),n}function Nl(){return{destroy:void 0,resource:void 0}}function Zo(){return jn().memoizedState}function Dl(n,e,t,r){var a=ae();r=r===void 0?null:r,rn.flags|=n,a.memoizedState=Mr(1|e,Nl(),t,r)}function Sa(n,e,t,r){var a=jn();r=r===void 0?null:r;var l=a.memoizedState.inst;An!==null&&r!==null&&Eu(r,An.memoizedState.deps)?a.memoizedState=Mr(e,l,t,r):(rn.flags|=n,a.memoizedState=Mr(1|e,l,t,r))}function Io(n,e){Dl(8390656,8,n,e)}function Jo(n,e){Sa(2048,8,n,e)}function Po(n,e){return Sa(4,2,n,e)}function Fo(n,e){return Sa(4,4,n,e)}function $o(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function nf(n,e,t){t=t!=null?t.concat([n]):null,Sa(4,4,$o.bind(null,e,n),t)}function Hu(){}function ef(n,e){var t=jn();e=e===void 0?null:e;var r=t.memoizedState;return e!==null&&Eu(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function tf(n,e){var t=jn();e=e===void 0?null:e;var r=t.memoizedState;if(e!==null&&Eu(e,r[1]))return r[0];if(r=n(),Zt){st(!0);try{n()}finally{st(!1)}}return t.memoizedState=[r,e],r}function Lu(n,e,t){return t===void 0||(yt&1073741824)!==0?n.memoizedState=e:(n.memoizedState=t,n=id(),rn.lanes|=n,Rt|=n,t)}function rf(n,e,t,r){return oe(t,e)?t:Nr.current!==null?(n=Lu(n,t,r),oe(n,e)||(Kn=!0),n):(yt&42)===0?(Kn=!0,n.memoizedState=t):(n=id(),rn.lanes|=n,Rt|=n,e)}function af(n,e,t,r,a){var l=z.p;z.p=l!==0&&8>l?l:8;var u=D.T,o={};D.T=o,zu(n,!1,e,t);try{var b=a(),R=D.S;if(R!==null&&R(o,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var x=ip(b,r);Aa(n,e,x,he(n))}else Aa(n,e,r,he(n))}catch(U){Aa(n,e,{then:function(){},status:"rejected",reason:U},he())}finally{z.p=l,D.T=u}}function fp(){}function Bu(n,e,t,r){if(n.tag!==5)throw Error(s(476));var a=lf(n).queue;af(n,a,e,q,t===null?fp:function(){return uf(n),t(r)})}function lf(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:q},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fe,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function uf(n){var e=lf(n).next.queue;Aa(n,e,{},he())}function wu(){return Pn(Ga)}function cf(){return jn().memoizedState}function sf(){return jn().memoizedState}function dp(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=he();n=pt(t);var r=ht(e,n,t);r!==null&&(ye(r,e,t),ha(r,e,t)),e={cache:du()},n.payload=e;return}e=e.return}}function bp(n,e,t){var r=he();t={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},xl(n)?ff(e,t):(t=tu(n,e,t,r),t!==null&&(ye(t,n,r),df(t,e,r)))}function of(n,e,t){var r=he();Aa(n,e,t,r)}function Aa(n,e,t,r){var a={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(xl(n))ff(e,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var u=e.lastRenderedState,o=l(u,t);if(a.hasEagerState=!0,a.eagerState=o,oe(o,u))return dl(n,e,a,0),Nn===null&&fl(),!1}catch{}finally{}if(t=tu(n,e,a,r),t!==null)return ye(t,n,r),df(t,e,r),!0}return!1}function zu(n,e,t,r){if(r={lane:2,revertLane:hc(),action:r,hasEagerState:!1,eagerState:null,next:null},xl(n)){if(e)throw Error(s(479))}else e=tu(n,t,r,2),e!==null&&ye(e,n,2)}function xl(n){var e=n.alternate;return n===rn||e!==null&&e===rn}function ff(n,e){Dr=Rl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function df(n,e,t){if((t&4194048)!==0){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,vs(n,t)}}var Ml={readContext:Pn,use:_l,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useLayoutEffect:Ln,useInsertionEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useSyncExternalStore:Ln,useId:Ln,useHostTransitionStatus:Ln,useFormState:Ln,useActionState:Ln,useOptimistic:Ln,useMemoCache:Ln,useCacheRefresh:Ln},bf={readContext:Pn,use:_l,useCallback:function(n,e){return ae().memoizedState=[n,e===void 0?null:e],n},useContext:Pn,useEffect:Io,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,Dl(4194308,4,$o.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Dl(4194308,4,n,e)},useInsertionEffect:function(n,e){Dl(4,2,n,e)},useMemo:function(n,e){var t=ae();e=e===void 0?null:e;var r=n();if(Zt){st(!0);try{n()}finally{st(!1)}}return t.memoizedState=[r,e],r},useReducer:function(n,e,t){var r=ae();if(t!==void 0){var a=t(e);if(Zt){st(!0);try{t(e)}finally{st(!1)}}}else a=e;return r.memoizedState=r.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},r.queue=n,n=n.dispatch=bp.bind(null,rn,n),[r.memoizedState,n]},useRef:function(n){var e=ae();return n={current:n},e.memoizedState=n},useState:function(n){n=Cu(n);var e=n.queue,t=of.bind(null,rn,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:Hu,useDeferredValue:function(n,e){var t=ae();return Lu(t,n,e)},useTransition:function(){var n=Cu(!1);return n=af.bind(null,rn,n.queue,!0,!1),ae().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var r=rn,a=ae();if(yn){if(t===void 0)throw Error(s(407));t=t()}else{if(t=e(),Nn===null)throw Error(s(349));(dn&124)!==0||Ho(r,e,t)}a.memoizedState=t;var l={value:t,getSnapshot:e};return a.queue=l,Io(Bo.bind(null,r,l,n),[n]),r.flags|=2048,Mr(9,Nl(),Lo.bind(null,r,l,t,e),null),t},useId:function(){var n=ae(),e=Nn.identifierPrefix;if(yn){var t=Ie,r=Ze;t=(r&~(1<<32-se(r)-1)).toString(32)+t,e="«"+e+"R"+t,t=Tl++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=up++,e="«"+e+"r"+t.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:wu,useFormState:Qo,useActionState:Qo,useOptimistic:function(n){var e=ae();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=zu.bind(null,rn,!0,t),t.dispatch=e,[n,e]},useMemoCache:Du,useCacheRefresh:function(){return ae().memoizedState=dp.bind(null,rn)}},pf={readContext:Pn,use:_l,useCallback:ef,useContext:Pn,useEffect:Jo,useImperativeHandle:nf,useInsertionEffect:Po,useLayoutEffect:Fo,useMemo:tf,useReducer:Ol,useRef:Zo,useState:function(){return Ol(Fe)},useDebugValue:Hu,useDeferredValue:function(n,e){var t=jn();return rf(t,An.memoizedState,n,e)},useTransition:function(){var n=Ol(Fe)[0],e=jn().memoizedState;return[typeof n=="boolean"?n:ga(n),e]},useSyncExternalStore:Uo,useId:cf,useHostTransitionStatus:wu,useFormState:Xo,useActionState:Xo,useOptimistic:function(n,e){var t=jn();return jo(t,An,n,e)},useMemoCache:Du,useCacheRefresh:sf},pp={readContext:Pn,use:_l,useCallback:ef,useContext:Pn,useEffect:Jo,useImperativeHandle:nf,useInsertionEffect:Po,useLayoutEffect:Fo,useMemo:tf,useReducer:Mu,useRef:Zo,useState:function(){return Mu(Fe)},useDebugValue:Hu,useDeferredValue:function(n,e){var t=jn();return An===null?Lu(t,n,e):rf(t,An.memoizedState,n,e)},useTransition:function(){var n=Mu(Fe)[0],e=jn().memoizedState;return[typeof n=="boolean"?n:ga(n),e]},useSyncExternalStore:Uo,useId:cf,useHostTransitionStatus:wu,useFormState:Wo,useActionState:Wo,useOptimistic:function(n,e){var t=jn();return An!==null?jo(t,An,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Du,useCacheRefresh:sf},Cr=null,Ea=0;function Cl(n){var e=Ea;return Ea+=1,Cr===null&&(Cr=[]),To(Cr,n,e)}function Ra(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Ul(n,e){throw e.$$typeof===L?Error(s(525)):(n=Object.prototype.toString.call(e),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function hf(n){var e=n._init;return e(n._payload)}function yf(n){function e(A,m){if(n){var E=A.deletions;E===null?(A.deletions=[m],A.flags|=16):E.push(m)}}function t(A,m){if(!n)return null;for(;m!==null;)e(A,m),m=m.sibling;return null}function r(A){for(var m=new Map;A!==null;)A.key!==null?m.set(A.key,A):m.set(A.index,A),A=A.sibling;return m}function a(A,m){return A=We(A,m),A.index=0,A.sibling=null,A}function l(A,m,E){return A.index=E,n?(E=A.alternate,E!==null?(E=E.index,E<m?(A.flags|=67108866,m):E):(A.flags|=67108866,m)):(A.flags|=1048576,m)}function u(A){return n&&A.alternate===null&&(A.flags|=67108866),A}function o(A,m,E,C){return m===null||m.tag!==6?(m=au(E,A.mode,C),m.return=A,m):(m=a(m,E),m.return=A,m)}function b(A,m,E,C){var G=E.type;return G===J?x(A,m,E.props.children,C,E.key):m!==null&&(m.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===mn&&hf(G)===m.type)?(m=a(m,E.props),Ra(m,E),m.return=A,m):(m=pl(E.type,E.key,E.props,null,A.mode,C),Ra(m,E),m.return=A,m)}function R(A,m,E,C){return m===null||m.tag!==4||m.stateNode.containerInfo!==E.containerInfo||m.stateNode.implementation!==E.implementation?(m=lu(E,A.mode,C),m.return=A,m):(m=a(m,E.children||[]),m.return=A,m)}function x(A,m,E,C,G){return m===null||m.tag!==7?(m=Yt(E,A.mode,C,G),m.return=A,m):(m=a(m,E),m.return=A,m)}function U(A,m,E){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=au(""+m,A.mode,E),m.return=A,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case j:return E=pl(m.type,m.key,m.props,null,A.mode,E),Ra(E,m),E.return=A,E;case W:return m=lu(m,A.mode,E),m.return=A,m;case mn:var C=m._init;return m=C(m._payload),U(A,m,E)}if(Dn(m)||wn(m))return m=Yt(m,A.mode,E,null),m.return=A,m;if(typeof m.then=="function")return U(A,Cl(m),E);if(m.$$typeof===on)return U(A,vl(A,m),E);Ul(A,m)}return null}function T(A,m,E,C){var G=m!==null?m.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return G!==null?null:o(A,m,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case j:return E.key===G?b(A,m,E,C):null;case W:return E.key===G?R(A,m,E,C):null;case mn:return G=E._init,E=G(E._payload),T(A,m,E,C)}if(Dn(E)||wn(E))return G!==null?null:x(A,m,E,C,null);if(typeof E.then=="function")return T(A,m,Cl(E),C);if(E.$$typeof===on)return T(A,m,vl(A,E),C);Ul(A,E)}return null}function _(A,m,E,C,G){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return A=A.get(E)||null,o(m,A,""+C,G);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case j:return A=A.get(C.key===null?E:C.key)||null,b(m,A,C,G);case W:return A=A.get(C.key===null?E:C.key)||null,R(m,A,C,G);case mn:var an=C._init;return C=an(C._payload),_(A,m,E,C,G)}if(Dn(C)||wn(C))return A=A.get(E)||null,x(m,A,C,G,null);if(typeof C.then=="function")return _(A,m,E,Cl(C),G);if(C.$$typeof===on)return _(A,m,E,vl(m,C),G);Ul(m,C)}return null}function I(A,m,E,C){for(var G=null,an=null,V=m,k=m=0,Xn=null;V!==null&&k<E.length;k++){V.index>k?(Xn=V,V=null):Xn=V.sibling;var pn=T(A,V,E[k],C);if(pn===null){V===null&&(V=Xn);break}n&&V&&pn.alternate===null&&e(A,V),m=l(pn,m,k),an===null?G=pn:an.sibling=pn,an=pn,V=Xn}if(k===E.length)return t(A,V),yn&&Vt(A,k),G;if(V===null){for(;k<E.length;k++)V=U(A,E[k],C),V!==null&&(m=l(V,m,k),an===null?G=V:an.sibling=V,an=V);return yn&&Vt(A,k),G}for(V=r(V);k<E.length;k++)Xn=_(V,A,k,E[k],C),Xn!==null&&(n&&Xn.alternate!==null&&V.delete(Xn.key===null?k:Xn.key),m=l(Xn,m,k),an===null?G=Xn:an.sibling=Xn,an=Xn);return n&&V.forEach(function(Ut){return e(A,Ut)}),yn&&Vt(A,k),G}function Q(A,m,E,C){if(E==null)throw Error(s(151));for(var G=null,an=null,V=m,k=m=0,Xn=null,pn=E.next();V!==null&&!pn.done;k++,pn=E.next()){V.index>k?(Xn=V,V=null):Xn=V.sibling;var Ut=T(A,V,pn.value,C);if(Ut===null){V===null&&(V=Xn);break}n&&V&&Ut.alternate===null&&e(A,V),m=l(Ut,m,k),an===null?G=Ut:an.sibling=Ut,an=Ut,V=Xn}if(pn.done)return t(A,V),yn&&Vt(A,k),G;if(V===null){for(;!pn.done;k++,pn=E.next())pn=U(A,pn.value,C),pn!==null&&(m=l(pn,m,k),an===null?G=pn:an.sibling=pn,an=pn);return yn&&Vt(A,k),G}for(V=r(V);!pn.done;k++,pn=E.next())pn=_(V,A,k,pn.value,C),pn!==null&&(n&&pn.alternate!==null&&V.delete(pn.key===null?k:pn.key),m=l(pn,m,k),an===null?G=pn:an.sibling=pn,an=pn);return n&&V.forEach(function(hh){return e(A,hh)}),yn&&Vt(A,k),G}function Rn(A,m,E,C){if(typeof E=="object"&&E!==null&&E.type===J&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case j:n:{for(var G=E.key;m!==null;){if(m.key===G){if(G=E.type,G===J){if(m.tag===7){t(A,m.sibling),C=a(m,E.props.children),C.return=A,A=C;break n}}else if(m.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===mn&&hf(G)===m.type){t(A,m.sibling),C=a(m,E.props),Ra(C,E),C.return=A,A=C;break n}t(A,m);break}else e(A,m);m=m.sibling}E.type===J?(C=Yt(E.props.children,A.mode,C,E.key),C.return=A,A=C):(C=pl(E.type,E.key,E.props,null,A.mode,C),Ra(C,E),C.return=A,A=C)}return u(A);case W:n:{for(G=E.key;m!==null;){if(m.key===G)if(m.tag===4&&m.stateNode.containerInfo===E.containerInfo&&m.stateNode.implementation===E.implementation){t(A,m.sibling),C=a(m,E.children||[]),C.return=A,A=C;break n}else{t(A,m);break}else e(A,m);m=m.sibling}C=lu(E,A.mode,C),C.return=A,A=C}return u(A);case mn:return G=E._init,E=G(E._payload),Rn(A,m,E,C)}if(Dn(E))return I(A,m,E,C);if(wn(E)){if(G=wn(E),typeof G!="function")throw Error(s(150));return E=G.call(E),Q(A,m,E,C)}if(typeof E.then=="function")return Rn(A,m,Cl(E),C);if(E.$$typeof===on)return Rn(A,m,vl(A,E),C);Ul(A,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,m!==null&&m.tag===6?(t(A,m.sibling),C=a(m,E),C.return=A,A=C):(t(A,m),C=au(E,A.mode,C),C.return=A,A=C),u(A)):t(A,m)}return function(A,m,E,C){try{Ea=0;var G=Rn(A,m,E,C);return Cr=null,G}catch(V){if(V===ba||V===Sl)throw V;var an=fe(29,V,null,A.mode);return an.lanes=C,an.return=A,an}finally{}}}var Ur=yf(!0),mf=yf(!1),Oe=M(null),qe=null;function mt(n){var e=n.alternate;w(qn,qn.current&1),w(Oe,n),qe===null&&(e===null||Nr.current!==null||e.memoizedState!==null)&&(qe=n)}function vf(n){if(n.tag===22){if(w(qn,qn.current),w(Oe,n),qe===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(qe=n)}}else vt()}function vt(){w(qn,qn.current),w(Oe,Oe.current)}function $e(n){B(Oe),qe===n&&(qe=null),B(qn)}var qn=M(0);function Hl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Nc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ju(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:N({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Gu={enqueueSetState:function(n,e,t){n=n._reactInternals;var r=he(),a=pt(r);a.payload=e,t!=null&&(a.callback=t),e=ht(n,a,r),e!==null&&(ye(e,n,r),ha(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=he(),a=pt(r);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=ht(n,a,r),e!==null&&(ye(e,n,r),ha(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=he(),r=pt(t);r.tag=2,e!=null&&(r.callback=e),e=ht(n,r,t),e!==null&&(ye(e,n,t),ha(e,n,t))}};function gf(n,e,t,r,a,l,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,u):e.prototype&&e.prototype.isPureReactComponent?!la(t,r)||!la(a,l):!0}function Sf(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Gu.enqueueReplaceState(e,e.state,null)}function It(n,e){var t=e;if("ref"in e){t={};for(var r in e)r!=="ref"&&(t[r]=e[r])}if(n=n.defaultProps){t===e&&(t=N({},t));for(var a in n)t[a]===void 0&&(t[a]=n[a])}return t}var Ll=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function Af(n){Ll(n)}function Ef(n){console.error(n)}function Rf(n){Ll(n)}function Bl(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Tf(n,e,t){try{var r=n.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function Yu(n,e,t){return t=pt(t),t.tag=3,t.payload={element:null},t.callback=function(){Bl(n,e)},t}function _f(n){return n=pt(n),n.tag=3,n}function Of(n,e,t,r){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var l=r.value;n.payload=function(){return a(l)},n.callback=function(){Tf(e,t,r)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Tf(e,t,r),typeof a!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})})}function hp(n,e,t,r,a){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=t.alternate,e!==null&&oa(e,t,a,!0),t=Oe.current,t!==null){switch(t.tag){case 13:return qe===null?oc():t.alternate===null&&Hn===0&&(Hn=3),t.flags&=-257,t.flags|=65536,t.lanes=a,r===hu?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([r]):e.add(r),dc(n,r,a)),!1;case 22:return t.flags|=65536,r===hu?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([r]):t.add(r)),dc(n,r,a)),!1}throw Error(s(435,t.tag))}return dc(n,r,a),oc(),!1}if(yn)return e=Oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,r!==cu&&(n=Error(s(422),{cause:r}),sa(Ee(n,t)))):(r!==cu&&(e=Error(s(423),{cause:r}),sa(Ee(e,t))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,r=Ee(r,t),a=Yu(n.stateNode,r,a),vu(n,a),Hn!==4&&(Hn=2)),!1;var l=Error(s(520),{cause:r});if(l=Ee(l,t),Ma===null?Ma=[l]:Ma.push(l),Hn!==4&&(Hn=2),e===null)return!0;r=Ee(r,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=a&-a,t.lanes|=n,n=Yu(t.stateNode,r,n),vu(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Tt===null||!Tt.has(l))))return t.flags|=65536,a&=-a,t.lanes|=a,a=_f(a),Of(a,n,t,r),vu(t,a),!1}t=t.return}while(t!==null);return!1}var Nf=Error(s(461)),Kn=!1;function kn(n,e,t,r){e.child=n===null?mf(e,null,t,r):Ur(e,n.child,t,r)}function Df(n,e,t,r,a){t=t.render;var l=e.ref;if("ref"in r){var u={};for(var o in r)o!=="ref"&&(u[o]=r[o])}else u=r;return kt(e),r=Ru(n,e,t,u,l,a),o=Tu(),n!==null&&!Kn?(_u(n,e,a),nt(n,e,a)):(yn&&o&&iu(e),e.flags|=1,kn(n,e,r,a),e.child)}function xf(n,e,t,r,a){if(n===null){var l=t.type;return typeof l=="function"&&!ru(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,Mf(n,e,l,r,a)):(n=pl(t.type,null,r,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Zu(n,a)){var u=l.memoizedProps;if(t=t.compare,t=t!==null?t:la,t(u,r)&&n.ref===e.ref)return nt(n,e,a)}return e.flags|=1,n=We(l,r),n.ref=e.ref,n.return=e,e.child=n}function Mf(n,e,t,r,a){if(n!==null){var l=n.memoizedProps;if(la(l,r)&&n.ref===e.ref)if(Kn=!1,e.pendingProps=r=l,Zu(n,a))(n.flags&131072)!==0&&(Kn=!0);else return e.lanes=n.lanes,nt(n,e,a)}return qu(n,e,t,r,a)}function Cf(n,e,t){var r=e.pendingProps,a=r.children,l=n!==null?n.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;e.childLanes=l&~r}else e.childLanes=0,e.child=null;return Uf(n,e,r,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&gl(e,l!==null?l.cachePool:null),l!==null?xo(e,l):Su(),vf(e);else return e.lanes=e.childLanes=536870912,Uf(n,e,l!==null?l.baseLanes|t:t,t)}else l!==null?(gl(e,l.cachePool),xo(e,l),vt(),e.memoizedState=null):(n!==null&&gl(e,null),Su(),vt());return kn(n,e,a,t),e.child}function Uf(n,e,t,r){var a=pu();return a=a===null?null:{parent:Yn._currentValue,pool:a},e.memoizedState={baseLanes:t,cachePool:a},n!==null&&gl(e,null),Su(),vf(e),n!==null&&oa(n,e,r,!0),null}function wl(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function qu(n,e,t,r,a){return kt(e),t=Ru(n,e,t,r,void 0,a),r=Tu(),n!==null&&!Kn?(_u(n,e,a),nt(n,e,a)):(yn&&r&&iu(e),e.flags|=1,kn(n,e,t,a),e.child)}function Hf(n,e,t,r,a,l){return kt(e),e.updateQueue=null,t=Co(e,r,t,a),Mo(n),r=Tu(),n!==null&&!Kn?(_u(n,e,l),nt(n,e,l)):(yn&&r&&iu(e),e.flags|=1,kn(n,e,t,l),e.child)}function Lf(n,e,t,r,a){if(kt(e),e.stateNode===null){var l=Er,u=t.contextType;typeof u=="object"&&u!==null&&(l=Pn(u)),l=new t(r,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Gu,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=r,l.state=e.memoizedState,l.refs={},yu(e),u=t.contextType,l.context=typeof u=="object"&&u!==null?Pn(u):Er,l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(ju(e,t,u,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(u=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),u!==l.state&&Gu.enqueueReplaceState(l,l.state,null),ma(e,r,l,a),ya(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(n===null){l=e.stateNode;var o=e.memoizedProps,b=It(t,o);l.props=b;var R=l.context,x=t.contextType;u=Er,typeof x=="object"&&x!==null&&(u=Pn(x));var U=t.getDerivedStateFromProps;x=typeof U=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||R!==u)&&Sf(e,l,r,u),bt=!1;var T=e.memoizedState;l.state=T,ma(e,r,l,a),ya(),R=e.memoizedState,o||T!==R||bt?(typeof U=="function"&&(ju(e,t,U,r),R=e.memoizedState),(b=bt||gf(e,t,b,r,T,R,u))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=R),l.props=r,l.state=R,l.context=u,r=b):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,mu(n,e),u=e.memoizedProps,x=It(t,u),l.props=x,U=e.pendingProps,T=l.context,R=t.contextType,b=Er,typeof R=="object"&&R!==null&&(b=Pn(R)),o=t.getDerivedStateFromProps,(R=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==U||T!==b)&&Sf(e,l,r,b),bt=!1,T=e.memoizedState,l.state=T,ma(e,r,l,a),ya();var _=e.memoizedState;u!==U||T!==_||bt||n!==null&&n.dependencies!==null&&ml(n.dependencies)?(typeof o=="function"&&(ju(e,t,o,r),_=e.memoizedState),(x=bt||gf(e,t,x,r,T,_,b)||n!==null&&n.dependencies!==null&&ml(n.dependencies))?(R||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,_,b),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,_,b)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&T===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&T===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),l.props=r,l.state=_,l.context=b,r=x):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&T===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&T===n.memoizedState||(e.flags|=1024),r=!1)}return l=r,wl(n,e),r=(e.flags&128)!==0,l||r?(l=e.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&r?(e.child=Ur(e,n.child,null,a),e.child=Ur(e,null,t,a)):kn(n,e,t,a),e.memoizedState=l.state,n=e.child):n=nt(n,e,a),n}function Bf(n,e,t,r){return ca(),e.flags|=256,kn(n,e,t,r),e.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ku(n){return{baseLanes:n,cachePool:Ao()}}function Qu(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=Ne),n}function wf(n,e,t){var r=e.pendingProps,a=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=n!==null&&n.memoizedState===null?!1:(qn.current&2)!==0),u&&(a=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,n===null){if(yn){if(a?mt(e):vt(),yn){var o=Un,b;if(b=o){n:{for(b=o,o=Ye;b.nodeType!==8;){if(!o){o=null;break n}if(b=Be(b.nextSibling),b===null){o=null;break n}}o=b}o!==null?(e.memoizedState={dehydrated:o,treeContext:qt!==null?{id:Ze,overflow:Ie}:null,retryLane:536870912,hydrationErrors:null},b=fe(18,null,null,0),b.stateNode=o,b.return=e,e.child=b,ne=e,Un=null,b=!0):b=!1}b||Qt(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Nc(o)?e.lanes=32:e.lanes=536870912,null;$e(e)}return o=r.children,r=r.fallback,a?(vt(),a=e.mode,o=zl({mode:"hidden",children:o},a),r=Yt(r,a,t,null),o.return=e,r.return=e,o.sibling=r,e.child=o,a=e.child,a.memoizedState=Ku(t),a.childLanes=Qu(n,u,t),e.memoizedState=Vu,r):(mt(e),Xu(e,o))}if(b=n.memoizedState,b!==null&&(o=b.dehydrated,o!==null)){if(l)e.flags&256?(mt(e),e.flags&=-257,e=ku(n,e,t)):e.memoizedState!==null?(vt(),e.child=n.child,e.flags|=128,e=null):(vt(),a=r.fallback,o=e.mode,r=zl({mode:"visible",children:r.children},o),a=Yt(a,o,t,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,Ur(e,n.child,null,t),r=e.child,r.memoizedState=Ku(t),r.childLanes=Qu(n,u,t),e.memoizedState=Vu,e=a);else if(mt(e),Nc(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var R=u.dgst;u=R,r=Error(s(419)),r.stack="",r.digest=u,sa({value:r,source:null,stack:null}),e=ku(n,e,t)}else if(Kn||oa(n,e,t,!1),u=(t&n.childLanes)!==0,Kn||u){if(u=Nn,u!==null&&(r=t&-t,r=(r&42)!==0?1:Di(r),r=(r&(u.suspendedLanes|t))!==0?0:r,r!==0&&r!==b.retryLane))throw b.retryLane=r,Ar(n,r),ye(u,n,r),Nf;o.data==="$?"||oc(),e=ku(n,e,t)}else o.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=b.treeContext,Un=Be(o.nextSibling),ne=e,yn=!0,Kt=null,Ye=!1,n!==null&&(Te[_e++]=Ze,Te[_e++]=Ie,Te[_e++]=qt,Ze=n.id,Ie=n.overflow,qt=e),e=Xu(e,r.children),e.flags|=4096);return e}return a?(vt(),a=r.fallback,o=e.mode,b=n.child,R=b.sibling,r=We(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&65011712,R!==null?a=We(R,a):(a=Yt(a,o,t,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=n.child.memoizedState,o===null?o=Ku(t):(b=o.cachePool,b!==null?(R=Yn._currentValue,b=b.parent!==R?{parent:R,pool:R}:b):b=Ao(),o={baseLanes:o.baseLanes|t,cachePool:b}),a.memoizedState=o,a.childLanes=Qu(n,u,t),e.memoizedState=Vu,r):(mt(e),t=n.child,n=t.sibling,t=We(t,{mode:"visible",children:r.children}),t.return=e,t.sibling=null,n!==null&&(u=e.deletions,u===null?(e.deletions=[n],e.flags|=16):u.push(n)),e.child=t,e.memoizedState=null,t)}function Xu(n,e){return e=zl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function zl(n,e){return n=fe(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function ku(n,e,t){return Ur(e,n.child,null,t),n=Xu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function zf(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),ou(n.return,e,t)}function Wu(n,e,t,r,a){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function jf(n,e,t){var r=e.pendingProps,a=r.revealOrder,l=r.tail;if(kn(n,e,r.children,t),r=qn.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zf(n,t,e);else if(n.tag===19)zf(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}switch(w(qn,r),a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&Hl(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Wu(e,!1,a,t,l);break;case"backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Hl(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Wu(e,!0,t,null,l);break;case"together":Wu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function nt(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Rt|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(oa(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(s(153));if(e.child!==null){for(n=e.child,t=We(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=We(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Zu(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&ml(n)))}function yp(n,e,t){switch(e.tag){case 3:On(e,e.stateNode.containerInfo),dt(e,Yn,n.memoizedState.cache),ca();break;case 27:case 5:ar(e);break;case 4:On(e,e.stateNode.containerInfo);break;case 10:dt(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(mt(e),e.flags|=128,null):(t&e.child.childLanes)!==0?wf(n,e,t):(mt(e),n=nt(n,e,t),n!==null?n.sibling:null);mt(e);break;case 19:var a=(n.flags&128)!==0;if(r=(t&e.childLanes)!==0,r||(oa(n,e,t,!1),r=(t&e.childLanes)!==0),a){if(r)return jf(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),w(qn,qn.current),r)break;return null;case 22:case 23:return e.lanes=0,Cf(n,e,t);case 24:dt(e,Yn,n.memoizedState.cache)}return nt(n,e,t)}function Gf(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)Kn=!0;else{if(!Zu(n,t)&&(e.flags&128)===0)return Kn=!1,yp(n,e,t);Kn=(n.flags&131072)!==0}else Kn=!1,yn&&(e.flags&1048576)!==0&&po(e,yl,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var r=e.elementType,a=r._init;if(r=a(r._payload),e.type=r,typeof r=="function")ru(r)?(n=It(r,n),e.tag=1,e=Lf(null,e,r,n,t)):(e.tag=0,e=qu(null,e,r,n,t));else{if(r!=null){if(a=r.$$typeof,a===Z){e.tag=11,e=Df(null,e,r,n,t);break n}else if(a===hn){e.tag=14,e=xf(null,e,r,n,t);break n}}throw e=xn(r)||r,Error(s(306,e,""))}}return e;case 0:return qu(n,e,e.type,e.pendingProps,t);case 1:return r=e.type,a=It(r,e.pendingProps),Lf(n,e,r,a,t);case 3:n:{if(On(e,e.stateNode.containerInfo),n===null)throw Error(s(387));r=e.pendingProps;var l=e.memoizedState;a=l.element,mu(n,e),ma(e,r,null,t);var u=e.memoizedState;if(r=u.cache,dt(e,Yn,r),r!==l.cache&&fu(e,[Yn],t,!0),ya(),r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Bf(n,e,r,t);break n}else if(r!==a){a=Ee(Error(s(424)),e),sa(a),e=Bf(n,e,r,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Un=Be(n.firstChild),ne=e,yn=!0,Kt=null,Ye=!0,t=mf(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(ca(),r===a){e=nt(n,e,t);break n}kn(n,e,r,t)}e=e.child}return e;case 26:return wl(n,e),n===null?(t=Kd(e.type,null,e.pendingProps,null))?e.memoizedState=t:yn||(t=e.type,n=e.pendingProps,r=Pl(X.current).createElement(t),r[Jn]=e,r[te]=n,Zn(r,t,n),Vn(r),e.stateNode=r):e.memoizedState=Kd(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return ar(e),n===null&&yn&&(r=e.stateNode=Yd(e.type,e.pendingProps,X.current),ne=e,Ye=!0,a=Un,Nt(e.type)?(Dc=a,Un=Be(r.firstChild)):Un=a),kn(n,e,e.pendingProps.children,t),wl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&yn&&((a=r=Un)&&(r=Qp(r,e.type,e.pendingProps,Ye),r!==null?(e.stateNode=r,ne=e,Un=Be(r.firstChild),Ye=!1,a=!0):a=!1),a||Qt(e)),ar(e),a=e.type,l=e.pendingProps,u=n!==null?n.memoizedProps:null,r=l.children,Tc(a,l)?r=null:u!==null&&Tc(a,u)&&(e.flags|=32),e.memoizedState!==null&&(a=Ru(n,e,cp,null,null,t),Ga._currentValue=a),wl(n,e),kn(n,e,r,t),e.child;case 6:return n===null&&yn&&((n=t=Un)&&(t=Xp(t,e.pendingProps,Ye),t!==null?(e.stateNode=t,ne=e,Un=null,n=!0):n=!1),n||Qt(e)),null;case 13:return wf(n,e,t);case 4:return On(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Ur(e,null,r,t):kn(n,e,r,t),e.child;case 11:return Df(n,e,e.type,e.pendingProps,t);case 7:return kn(n,e,e.pendingProps,t),e.child;case 8:return kn(n,e,e.pendingProps.children,t),e.child;case 12:return kn(n,e,e.pendingProps.children,t),e.child;case 10:return r=e.pendingProps,dt(e,e.type,r.value),kn(n,e,r.children,t),e.child;case 9:return a=e.type._context,r=e.pendingProps.children,kt(e),a=Pn(a),r=r(a),e.flags|=1,kn(n,e,r,t),e.child;case 14:return xf(n,e,e.type,e.pendingProps,t);case 15:return Mf(n,e,e.type,e.pendingProps,t);case 19:return jf(n,e,t);case 31:return r=e.pendingProps,t=e.mode,r={mode:r.mode,children:r.children},n===null?(t=zl(r,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=We(n.child,r),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return Cf(n,e,t);case 24:return kt(e),r=Pn(Yn),n===null?(a=pu(),a===null&&(a=Nn,l=du(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=t),a=l),e.memoizedState={parent:r,cache:a},yu(e),dt(e,Yn,a)):((n.lanes&t)!==0&&(mu(n,e),ma(e,null,null,t),ya()),a=n.memoizedState,l=e.memoizedState,a.parent!==r?(a={parent:r,cache:r},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),dt(e,Yn,r)):(r=l.cache,dt(e,Yn,r),r!==a.cache&&fu(e,[Yn],t,!0))),kn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function et(n){n.flags|=4}function Yf(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Zd(e)){if(e=Oe.current,e!==null&&((dn&4194048)===dn?qe!==null:(dn&62914560)!==dn&&(dn&536870912)===0||e!==qe))throw pa=hu,Eo;n.flags|=8192}}function jl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?ys():536870912,n.lanes|=e,wr|=e)}function Ta(n,e){if(!yn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function mp(n,e,t){var r=e.pendingProps;switch(uu(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(e),null;case 1:return Cn(e),null;case 3:return t=e.stateNode,r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Pe(Yn),je(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(ua(e)?et(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mo())),Cn(e),null;case 26:return t=e.memoizedState,n===null?(et(e),t!==null?(Cn(e),Yf(e,t)):(Cn(e),e.flags&=-16777217)):t?t!==n.memoizedState?(et(e),Cn(e),Yf(e,t)):(Cn(e),e.flags&=-16777217):(n.memoizedProps!==r&&et(e),Cn(e),e.flags&=-16777217),null;case 27:lr(e),t=X.current;var a=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==r&&et(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Cn(e),null}n=Y.current,ua(e)?ho(e):(n=Yd(a,r,t),e.stateNode=n,et(e))}return Cn(e),null;case 5:if(lr(e),t=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&et(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Cn(e),null}if(n=Y.current,ua(e))ho(e);else{switch(a=Pl(X.current),n){case 1:n=a.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:n=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":n=a.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":n=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?n.multiple=!0:r.size&&(n.size=r.size);break;default:n=typeof r.is=="string"?a.createElement(t,{is:r.is}):a.createElement(t)}}n[Jn]=e,n[te]=r;n:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break n;for(;a.sibling===null;){if(a.return===null||a.return===e)break n;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=n;n:switch(Zn(n,t,r),t){case"button":case"input":case"select":case"textarea":n=!!r.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&et(e)}}return Cn(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==r&&et(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(n=X.current,ua(e)){if(n=e.stateNode,t=e.memoizedProps,r=null,a=ne,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}n[Jn]=e,n=!!(n.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Hd(n.nodeValue,t)),n||Qt(e)}else n=Pl(n).createTextNode(r),n[Jn]=e,e.stateNode=n}return Cn(e),null;case 13:if(r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=ua(e),r!==null&&r.dehydrated!==null){if(n===null){if(!a)throw Error(s(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[Jn]=e}else ca(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Cn(e),a=!1}else a=mo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?($e(e),e):($e(e),null)}if($e(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=r!==null,n=n!==null&&n.memoizedState!==null,t){r=e.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var l=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048)}return t!==n&&t&&(e.child.flags|=8192),jl(e,e.updateQueue),Cn(e),null;case 4:return je(),n===null&&gc(e.stateNode.containerInfo),Cn(e),null;case 10:return Pe(e.type),Cn(e),null;case 19:if(B(qn),a=e.memoizedState,a===null)return Cn(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)Ta(a,!1);else{if(Hn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=Hl(n),l!==null){for(e.flags|=128,Ta(a,!1),n=l.updateQueue,e.updateQueue=n,jl(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)bo(t,n),t=t.sibling;return w(qn,qn.current&1|2),e.child}n=n.sibling}a.tail!==null&&Ue()>ql&&(e.flags|=128,r=!0,Ta(a,!1),e.lanes=4194304)}else{if(!r)if(n=Hl(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,jl(e,n),Ta(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!yn)return Cn(e),null}else 2*Ue()-a.renderingStartTime>ql&&t!==536870912&&(e.flags|=128,r=!0,Ta(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Ue(),e.sibling=null,n=qn.current,w(qn,r?n&1|2:n&1),e):(Cn(e),null);case 22:case 23:return $e(e),Au(),r=e.memoizedState!==null,n!==null?n.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(t&536870912)!==0&&(e.flags&128)===0&&(Cn(e),e.subtreeFlags&6&&(e.flags|=8192)):Cn(e),t=e.updateQueue,t!==null&&jl(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==t&&(e.flags|=2048),n!==null&&B(Wt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Pe(Yn),Cn(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function vp(n,e){switch(uu(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Pe(Yn),je(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return lr(e),null;case 13:if($e(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(s(340));ca()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return B(qn),null;case 4:return je(),null;case 10:return Pe(e.type),null;case 22:case 23:return $e(e),Au(),n!==null&&B(Wt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Pe(Yn),null;case 25:return null;default:return null}}function qf(n,e){switch(uu(e),e.tag){case 3:Pe(Yn),je();break;case 26:case 27:case 5:lr(e);break;case 4:je();break;case 13:$e(e);break;case 19:B(qn);break;case 10:Pe(e.type);break;case 22:case 23:$e(e),Au(),n!==null&&B(Wt);break;case 24:Pe(Yn)}}function _a(n,e){try{var t=e.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var a=r.next;t=a;do{if((t.tag&n)===n){r=void 0;var l=t.create,u=t.inst;r=l(),u.destroy=r}t=t.next}while(t!==a)}}catch(o){_n(e,e.return,o)}}function gt(n,e,t){try{var r=e.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var l=a.next;r=l;do{if((r.tag&n)===n){var u=r.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,a=e;var b=t,R=o;try{R()}catch(x){_n(a,b,x)}}}r=r.next}while(r!==l)}}catch(x){_n(e,e.return,x)}}function Vf(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{Do(e,t)}catch(r){_n(n,n.return,r)}}}function Kf(n,e,t){t.props=It(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(r){_n(n,e,r)}}function Oa(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var r=n.stateNode;break;case 30:r=n.stateNode;break;default:r=n.stateNode}typeof t=="function"?n.refCleanup=t(r):t.current=r}}catch(a){_n(n,e,a)}}function Ve(n,e){var t=n.ref,r=n.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(a){_n(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){_n(n,e,a)}else t.current=null}function Qf(n){var e=n.type,t=n.memoizedProps,r=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break n;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(a){_n(n,n.return,a)}}function Iu(n,e,t){try{var r=n.stateNode;Gp(r,n.type,t,e),r[te]=e}catch(a){_n(n,n.return,a)}}function Xf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Nt(n.type)||n.tag===4}function Ju(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||Xf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Nt(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pu(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Jl));else if(r!==4&&(r===27&&Nt(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Pu(n,e,t),n=n.sibling;n!==null;)Pu(n,e,t),n=n.sibling}function Gl(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(r===27&&Nt(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(Gl(n,e,t),n=n.sibling;n!==null;)Gl(n,e,t),n=n.sibling}function kf(n){var e=n.stateNode,t=n.memoizedProps;try{for(var r=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Zn(e,r,t),e[Jn]=n,e[te]=t}catch(l){_n(n,n.return,l)}}var tt=!1,Bn=!1,Fu=!1,Wf=typeof WeakSet=="function"?WeakSet:Set,Qn=null;function gp(n,e){if(n=n.containerInfo,Ec=ri,n=to(n),Ji(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var u=0,o=-1,b=-1,R=0,x=0,U=n,T=null;e:for(;;){for(var _;U!==t||a!==0&&U.nodeType!==3||(o=u+a),U!==l||r!==0&&U.nodeType!==3||(b=u+r),U.nodeType===3&&(u+=U.nodeValue.length),(_=U.firstChild)!==null;)T=U,U=_;for(;;){if(U===n)break e;if(T===t&&++R===a&&(o=u),T===l&&++x===r&&(b=u),(_=U.nextSibling)!==null)break;U=T,T=U.parentNode}U=_}t=o===-1||b===-1?null:{start:o,end:b}}else t=null}t=t||{start:0,end:0}}else t=null;for(Rc={focusedElem:n,selectionRange:t},ri=!1,Qn=e;Qn!==null;)if(e=Qn,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,Qn=n;else for(;Qn!==null;){switch(e=Qn,l=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,t=e,a=l.memoizedProps,l=l.memoizedState,r=t.stateNode;try{var I=It(t.type,a,t.elementType===t.type);n=r.getSnapshotBeforeUpdate(I,l),r.__reactInternalSnapshotBeforeUpdate=n}catch(Q){_n(t,t.return,Q)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Oc(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Oc(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=e.sibling,n!==null){n.return=e.return,Qn=n;break}Qn=e.return}}function Zf(n,e,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:St(n,t),r&4&&_a(5,t);break;case 1:if(St(n,t),r&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(u){_n(t,t.return,u)}else{var a=It(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(u){_n(t,t.return,u)}}r&64&&Vf(t),r&512&&Oa(t,t.return);break;case 3:if(St(n,t),r&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{Do(n,e)}catch(u){_n(t,t.return,u)}}break;case 27:e===null&&r&4&&kf(t);case 26:case 5:St(n,t),e===null&&r&4&&Qf(t),r&512&&Oa(t,t.return);break;case 12:St(n,t);break;case 13:St(n,t),r&4&&Pf(n,t),r&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Dp.bind(null,t),kp(n,t))));break;case 22:if(r=t.memoizedState!==null||tt,!r){e=e!==null&&e.memoizedState!==null||Bn,a=tt;var l=Bn;tt=r,(Bn=e)&&!l?At(n,t,(t.subtreeFlags&8772)!==0):St(n,t),tt=a,Bn=l}break;case 30:break;default:St(n,t)}}function If(n){var e=n.alternate;e!==null&&(n.alternate=null,If(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Ci(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Mn=null,le=!1;function rt(n,e,t){for(t=t.child;t!==null;)Jf(n,e,t),t=t.sibling}function Jf(n,e,t){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Wr,t)}catch{}switch(t.tag){case 26:Bn||Ve(t,e),rt(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Bn||Ve(t,e);var r=Mn,a=le;Nt(t.type)&&(Mn=t.stateNode,le=!1),rt(n,e,t),Ba(t.stateNode),Mn=r,le=a;break;case 5:Bn||Ve(t,e);case 6:if(r=Mn,a=le,Mn=null,rt(n,e,t),Mn=r,le=a,Mn!==null)if(le)try{(Mn.nodeType===9?Mn.body:Mn.nodeName==="HTML"?Mn.ownerDocument.body:Mn).removeChild(t.stateNode)}catch(l){_n(t,e,l)}else try{Mn.removeChild(t.stateNode)}catch(l){_n(t,e,l)}break;case 18:Mn!==null&&(le?(n=Mn,jd(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),Ka(n)):jd(Mn,t.stateNode));break;case 4:r=Mn,a=le,Mn=t.stateNode.containerInfo,le=!0,rt(n,e,t),Mn=r,le=a;break;case 0:case 11:case 14:case 15:Bn||gt(2,t,e),Bn||gt(4,t,e),rt(n,e,t);break;case 1:Bn||(Ve(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"&&Kf(t,e,r)),rt(n,e,t);break;case 21:rt(n,e,t);break;case 22:Bn=(r=Bn)||t.memoizedState!==null,rt(n,e,t),Bn=r;break;default:rt(n,e,t)}}function Pf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ka(n)}catch(t){_n(e,e.return,t)}}function Sp(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Wf),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Wf),e;default:throw Error(s(435,n.tag))}}function $u(n,e){var t=Sp(n);e.forEach(function(r){var a=xp.bind(null,n,r);t.has(r)||(t.add(r),r.then(a,a))})}function de(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r],l=n,u=e,o=u;n:for(;o!==null;){switch(o.tag){case 27:if(Nt(o.type)){Mn=o.stateNode,le=!1;break n}break;case 5:Mn=o.stateNode,le=!1;break n;case 3:case 4:Mn=o.stateNode.containerInfo,le=!0;break n}o=o.return}if(Mn===null)throw Error(s(160));Jf(l,u,a),Mn=null,le=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Ff(e,n),e=e.sibling}var Le=null;function Ff(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:de(e,n),be(n),r&4&&(gt(3,n,n.return),_a(3,n),gt(5,n,n.return));break;case 1:de(e,n),be(n),r&512&&(Bn||t===null||Ve(t,t.return)),r&64&&tt&&(n=n.updateQueue,n!==null&&(r=n.callbacks,r!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var a=Le;if(de(e,n),be(n),r&512&&(Bn||t===null||Ve(t,t.return)),r&4){var l=t!==null?t.memoizedState:null;if(r=n.memoizedState,t===null)if(r===null)if(n.stateNode===null){n:{r=n.type,t=n.memoizedProps,a=a.ownerDocument||a;e:switch(r){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Jr]||l[Jn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(r),a.head.insertBefore(l,a.querySelector("head > title"))),Zn(l,r,t),l[Jn]=n,Vn(l),r=l;break n;case"link":var u=kd("link","href",a).get(r+(t.href||""));if(u){for(var o=0;o<u.length;o++)if(l=u[o],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(o,1);break e}}l=a.createElement(r),Zn(l,r,t),a.head.appendChild(l);break;case"meta":if(u=kd("meta","content",a).get(r+(t.content||""))){for(o=0;o<u.length;o++)if(l=u[o],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(o,1);break e}}l=a.createElement(r),Zn(l,r,t),a.head.appendChild(l);break;default:throw Error(s(468,r))}l[Jn]=n,Vn(l),r=l}n.stateNode=r}else Wd(a,n.type,n.stateNode);else n.stateNode=Xd(a,r,n.memoizedProps);else l!==r?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,r===null?Wd(a,n.type,n.stateNode):Xd(a,r,n.memoizedProps)):r===null&&n.stateNode!==null&&Iu(n,n.memoizedProps,t.memoizedProps)}break;case 27:de(e,n),be(n),r&512&&(Bn||t===null||Ve(t,t.return)),t!==null&&r&4&&Iu(n,n.memoizedProps,t.memoizedProps);break;case 5:if(de(e,n),be(n),r&512&&(Bn||t===null||Ve(t,t.return)),n.flags&32){a=n.stateNode;try{pr(a,"")}catch(_){_n(n,n.return,_)}}r&4&&n.stateNode!=null&&(a=n.memoizedProps,Iu(n,a,t!==null?t.memoizedProps:a)),r&1024&&(Fu=!0);break;case 6:if(de(e,n),be(n),r&4){if(n.stateNode===null)throw Error(s(162));r=n.memoizedProps,t=n.stateNode;try{t.nodeValue=r}catch(_){_n(n,n.return,_)}}break;case 3:if(ni=null,a=Le,Le=Fl(e.containerInfo),de(e,n),Le=a,be(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ka(e.containerInfo)}catch(_){_n(n,n.return,_)}Fu&&(Fu=!1,$f(n));break;case 4:r=Le,Le=Fl(n.stateNode.containerInfo),de(e,n),be(n),Le=r;break;case 12:de(e,n),be(n);break;case 13:de(e,n),be(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(lc=Ue()),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,$u(n,r)));break;case 22:a=n.memoizedState!==null;var b=t!==null&&t.memoizedState!==null,R=tt,x=Bn;if(tt=R||a,Bn=x||b,de(e,n),Bn=x,tt=R,be(n),r&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(t===null||b||tt||Bn||Jt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){b=t=e;try{if(l=b.stateNode,a)u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=b.stateNode;var U=b.memoizedProps.style,T=U!=null&&U.hasOwnProperty("display")?U.display:null;o.style.display=T==null||typeof T=="boolean"?"":(""+T).trim()}}catch(_){_n(b,b.return,_)}}}else if(e.tag===6){if(t===null){b=e;try{b.stateNode.nodeValue=a?"":b.memoizedProps}catch(_){_n(b,b.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=n.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,$u(n,t))));break;case 19:de(e,n),be(n),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,$u(n,r)));break;case 30:break;case 21:break;default:de(e,n),be(n)}}function be(n){var e=n.flags;if(e&2){try{for(var t,r=n.return;r!==null;){if(Xf(r)){t=r;break}r=r.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var a=t.stateNode,l=Ju(n);Gl(n,l,a);break;case 5:var u=t.stateNode;t.flags&32&&(pr(u,""),t.flags&=-33);var o=Ju(n);Gl(n,o,u);break;case 3:case 4:var b=t.stateNode.containerInfo,R=Ju(n);Pu(n,R,b);break;default:throw Error(s(161))}}catch(x){_n(n,n.return,x)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function $f(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;$f(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function St(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Zf(n,e.alternate,e),e=e.sibling}function Jt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:gt(4,e,e.return),Jt(e);break;case 1:Ve(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Kf(e,e.return,t),Jt(e);break;case 27:Ba(e.stateNode);case 26:case 5:Ve(e,e.return),Jt(e);break;case 22:e.memoizedState===null&&Jt(e);break;case 30:Jt(e);break;default:Jt(e)}n=n.sibling}}function At(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,a=n,l=e,u=l.flags;switch(l.tag){case 0:case 11:case 15:At(a,l,t),_a(4,l);break;case 1:if(At(a,l,t),r=l,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(R){_n(r,r.return,R)}if(r=l,a=r.updateQueue,a!==null){var o=r.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)No(b[a],o)}catch(R){_n(r,r.return,R)}}t&&u&64&&Vf(l),Oa(l,l.return);break;case 27:kf(l);case 26:case 5:At(a,l,t),t&&r===null&&u&4&&Qf(l),Oa(l,l.return);break;case 12:At(a,l,t);break;case 13:At(a,l,t),t&&u&4&&Pf(a,l);break;case 22:l.memoizedState===null&&At(a,l,t),Oa(l,l.return);break;case 30:break;default:At(a,l,t)}e=e.sibling}}function nc(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&fa(t))}function ec(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&fa(n))}function Ke(n,e,t,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nd(n,e,t,r),e=e.sibling}function nd(n,e,t,r){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ke(n,e,t,r),a&2048&&_a(9,e);break;case 1:Ke(n,e,t,r);break;case 3:Ke(n,e,t,r),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&fa(n)));break;case 12:if(a&2048){Ke(n,e,t,r),n=e.stateNode;try{var l=e.memoizedProps,u=l.id,o=l.onPostCommit;typeof o=="function"&&o(u,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(b){_n(e,e.return,b)}}else Ke(n,e,t,r);break;case 13:Ke(n,e,t,r);break;case 23:break;case 22:l=e.stateNode,u=e.alternate,e.memoizedState!==null?l._visibility&2?Ke(n,e,t,r):Na(n,e):l._visibility&2?Ke(n,e,t,r):(l._visibility|=2,Hr(n,e,t,r,(e.subtreeFlags&10256)!==0)),a&2048&&nc(u,e);break;case 24:Ke(n,e,t,r),a&2048&&ec(e.alternate,e);break;default:Ke(n,e,t,r)}}function Hr(n,e,t,r,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=n,u=e,o=t,b=r,R=u.flags;switch(u.tag){case 0:case 11:case 15:Hr(l,u,o,b,a),_a(8,u);break;case 23:break;case 22:var x=u.stateNode;u.memoizedState!==null?x._visibility&2?Hr(l,u,o,b,a):Na(l,u):(x._visibility|=2,Hr(l,u,o,b,a)),a&&R&2048&&nc(u.alternate,u);break;case 24:Hr(l,u,o,b,a),a&&R&2048&&ec(u.alternate,u);break;default:Hr(l,u,o,b,a)}e=e.sibling}}function Na(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,r=e,a=r.flags;switch(r.tag){case 22:Na(t,r),a&2048&&nc(r.alternate,r);break;case 24:Na(t,r),a&2048&&ec(r.alternate,r);break;default:Na(t,r)}e=e.sibling}}var Da=8192;function Lr(n){if(n.subtreeFlags&Da)for(n=n.child;n!==null;)ed(n),n=n.sibling}function ed(n){switch(n.tag){case 26:Lr(n),n.flags&Da&&n.memoizedState!==null&&lh(Le,n.memoizedState,n.memoizedProps);break;case 5:Lr(n);break;case 3:case 4:var e=Le;Le=Fl(n.stateNode.containerInfo),Lr(n),Le=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=Da,Da=16777216,Lr(n),Da=e):Lr(n));break;default:Lr(n)}}function td(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function xa(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var r=e[t];Qn=r,ad(r,n)}td(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)rd(n),n=n.sibling}function rd(n){switch(n.tag){case 0:case 11:case 15:xa(n),n.flags&2048&&gt(9,n,n.return);break;case 3:xa(n);break;case 12:xa(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,Yl(n)):xa(n);break;default:xa(n)}}function Yl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var r=e[t];Qn=r,ad(r,n)}td(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:gt(8,e,e.return),Yl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,Yl(e));break;default:Yl(e)}n=n.sibling}}function ad(n,e){for(;Qn!==null;){var t=Qn;switch(t.tag){case 0:case 11:case 15:gt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:fa(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Qn=r;else n:for(t=n;Qn!==null;){r=Qn;var a=r.sibling,l=r.return;if(If(r),r===t){Qn=null;break n}if(a!==null){a.return=l,Qn=a;break n}Qn=l}}}var Ap={getCacheForType:function(n){var e=Pn(Yn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t}},Ep=typeof WeakMap=="function"?WeakMap:Map,gn=0,Nn=null,un=null,dn=0,Sn=0,pe=null,Et=!1,Br=!1,tc=!1,at=0,Hn=0,Rt=0,Pt=0,rc=0,Ne=0,wr=0,Ma=null,ie=null,ac=!1,lc=0,ql=1/0,Vl=null,Tt=null,Wn=0,_t=null,zr=null,jr=0,ic=0,uc=null,ld=null,Ca=0,cc=null;function he(){if((gn&2)!==0&&dn!==0)return dn&-dn;if(D.T!==null){var n=_r;return n!==0?n:hc()}return gs()}function id(){Ne===0&&(Ne=(dn&536870912)===0||yn?hs():536870912);var n=Oe.current;return n!==null&&(n.flags|=32),Ne}function ye(n,e,t){(n===Nn&&(Sn===2||Sn===9)||n.cancelPendingCommit!==null)&&(Gr(n,0),Ot(n,dn,Ne,!1)),Ir(n,t),((gn&2)===0||n!==Nn)&&(n===Nn&&((gn&2)===0&&(Pt|=t),Hn===4&&Ot(n,dn,Ne,!1)),Qe(n))}function ud(n,e,t){if((gn&6)!==0)throw Error(s(327));var r=!t&&(e&124)===0&&(e&n.expiredLanes)===0||Zr(n,e),a=r?_p(n,e):fc(n,e,!0),l=r;do{if(a===0){Br&&!r&&Ot(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!Rp(t)){a=fc(n,e,!1),l=!1;continue}if(a===2){if(l=e,n.errorRecoveryDisabledLanes&l)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;n:{var o=n;a=Ma;var b=o.current.memoizedState.isDehydrated;if(b&&(Gr(o,u).flags|=256),u=fc(o,u,!1),u!==2){if(tc&&!b){o.errorRecoveryDisabledLanes|=l,Pt|=l,a=4;break n}l=ie,ie=a,l!==null&&(ie===null?ie=l:ie.push.apply(ie,l))}a=u}if(l=!1,a!==2)continue}}if(a===1){Gr(n,0),Ot(n,e,0,!0);break}n:{switch(r=n,l=a,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Ot(r,e,Ne,!Et);break n;case 2:ie=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(a=lc+300-Ue(),10<a)){if(Ot(r,e,Ne,!Et),$a(r,0,!0)!==0)break n;r.timeoutHandle=wd(cd.bind(null,r,t,ie,Vl,ac,e,Ne,Pt,wr,Et,l,2,-0,0),a);break n}cd(r,t,ie,Vl,ac,e,Ne,Pt,wr,Et,l,0,-0,0)}}break}while(!0);Qe(n)}function cd(n,e,t,r,a,l,u,o,b,R,x,U,T,_){if(n.timeoutHandle=-1,U=e.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(ja={stylesheets:null,count:0,unsuspend:ah},ed(e),U=ih(),U!==null)){n.cancelPendingCommit=U(hd.bind(null,n,e,l,t,r,a,u,o,b,x,1,T,_)),Ot(n,l,u,!R);return}hd(n,e,l,t,r,a,u,o,b)}function Rp(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!oe(l(),a))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ot(n,e,t,r){e&=~rc,e&=~Pt,n.suspendedLanes|=e,n.pingedLanes&=~e,r&&(n.warmLanes|=e),r=n.expirationTimes;for(var a=e;0<a;){var l=31-se(a),u=1<<l;r[l]=-1,a&=~u}t!==0&&ms(n,t,e)}function Kl(){return(gn&6)===0?(Ua(0),!1):!0}function sc(){if(un!==null){if(Sn===0)var n=un.return;else n=un,Je=Xt=null,Ou(n),Cr=null,Ea=0,n=un;for(;n!==null;)qf(n.alternate,n),n=n.return;un=null}}function Gr(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,qp(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),sc(),Nn=n,un=t=We(n.current,null),dn=e,Sn=0,pe=null,Et=!1,Br=Zr(n,e),tc=!1,wr=Ne=rc=Pt=Rt=Hn=0,ie=Ma=null,ac=!1,(e&8)!==0&&(e|=e&32);var r=n.entangledLanes;if(r!==0)for(n=n.entanglements,r&=e;0<r;){var a=31-se(r),l=1<<a;e|=n[a],r&=~l}return at=e,fl(),t}function sd(n,e){rn=null,D.H=Ml,e===ba||e===Sl?(e=_o(),Sn=3):e===Eo?(e=_o(),Sn=4):Sn=e===Nf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,pe=e,un===null&&(Hn=1,Bl(n,Ee(e,n.current)))}function od(){var n=D.H;return D.H=Ml,n===null?Ml:n}function fd(){var n=D.A;return D.A=Ap,n}function oc(){Hn=4,Et||(dn&4194048)!==dn&&Oe.current!==null||(Br=!0),(Rt&134217727)===0&&(Pt&134217727)===0||Nn===null||Ot(Nn,dn,Ne,!1)}function fc(n,e,t){var r=gn;gn|=2;var a=od(),l=fd();(Nn!==n||dn!==e)&&(Vl=null,Gr(n,e)),e=!1;var u=Hn;n:do try{if(Sn!==0&&un!==null){var o=un,b=pe;switch(Sn){case 8:sc(),u=6;break n;case 3:case 2:case 9:case 6:Oe.current===null&&(e=!0);var R=Sn;if(Sn=0,pe=null,Yr(n,o,b,R),t&&Br){u=0;break n}break;default:R=Sn,Sn=0,pe=null,Yr(n,o,b,R)}}Tp(),u=Hn;break}catch(x){sd(n,x)}while(!0);return e&&n.shellSuspendCounter++,Je=Xt=null,gn=r,D.H=a,D.A=l,un===null&&(Nn=null,dn=0,fl()),u}function Tp(){for(;un!==null;)dd(un)}function _p(n,e){var t=gn;gn|=2;var r=od(),a=fd();Nn!==n||dn!==e?(Vl=null,ql=Ue()+500,Gr(n,e)):Br=Zr(n,e);n:do try{if(Sn!==0&&un!==null){e=un;var l=pe;e:switch(Sn){case 1:Sn=0,pe=null,Yr(n,e,l,1);break;case 2:case 9:if(Ro(l)){Sn=0,pe=null,bd(e);break}e=function(){Sn!==2&&Sn!==9||Nn!==n||(Sn=7),Qe(n)},l.then(e,e);break n;case 3:Sn=7;break n;case 4:Sn=5;break n;case 7:Ro(l)?(Sn=0,pe=null,bd(e)):(Sn=0,pe=null,Yr(n,e,l,7));break;case 5:var u=null;switch(un.tag){case 26:u=un.memoizedState;case 5:case 27:var o=un;if(!u||Zd(u)){Sn=0,pe=null;var b=o.sibling;if(b!==null)un=b;else{var R=o.return;R!==null?(un=R,Ql(R)):un=null}break e}}Sn=0,pe=null,Yr(n,e,l,5);break;case 6:Sn=0,pe=null,Yr(n,e,l,6);break;case 8:sc(),Hn=6;break n;default:throw Error(s(462))}}Op();break}catch(x){sd(n,x)}while(!0);return Je=Xt=null,D.H=r,D.A=a,gn=t,un!==null?0:(Nn=null,dn=0,fl(),Hn)}function Op(){for(;un!==null&&!Ge();)dd(un)}function dd(n){var e=Gf(n.alternate,n,at);n.memoizedProps=n.pendingProps,e===null?Ql(n):un=e}function bd(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Hf(t,e,e.pendingProps,e.type,void 0,dn);break;case 11:e=Hf(t,e,e.pendingProps,e.type.render,e.ref,dn);break;case 5:Ou(e);default:qf(t,e),e=un=bo(e,at),e=Gf(t,e,at)}n.memoizedProps=n.pendingProps,e===null?Ql(n):un=e}function Yr(n,e,t,r){Je=Xt=null,Ou(e),Cr=null,Ea=0;var a=e.return;try{if(hp(n,a,e,t,dn)){Hn=1,Bl(n,Ee(t,n.current)),un=null;return}}catch(l){if(a!==null)throw un=a,l;Hn=1,Bl(n,Ee(t,n.current)),un=null;return}e.flags&32768?(yn||r===1?n=!0:Br||(dn&536870912)!==0?n=!1:(Et=n=!0,(r===2||r===9||r===3||r===6)&&(r=Oe.current,r!==null&&r.tag===13&&(r.flags|=16384))),pd(e,n)):Ql(e)}function Ql(n){var e=n;do{if((e.flags&32768)!==0){pd(e,Et);return}n=e.return;var t=mp(e.alternate,e,at);if(t!==null){un=t;return}if(e=e.sibling,e!==null){un=e;return}un=e=n}while(e!==null);Hn===0&&(Hn=5)}function pd(n,e){do{var t=vp(n.alternate,n);if(t!==null){t.flags&=32767,un=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){un=n;return}un=n=t}while(n!==null);Hn=6,un=null}function hd(n,e,t,r,a,l,u,o,b){n.cancelPendingCommit=null;do Xl();while(Wn!==0);if((gn&6)!==0)throw Error(s(327));if(e!==null){if(e===n.current)throw Error(s(177));if(l=e.lanes|e.childLanes,l|=eu,a0(n,t,l,u,o,b),n===Nn&&(un=Nn=null,dn=0),zr=e,_t=n,jr=t,ic=l,uc=a,ld=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Mp(Ja,function(){return Sd(),null})):(n.callbackNode=null,n.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=D.T,D.T=null,a=z.p,z.p=2,u=gn,gn|=4;try{gp(n,e,t)}finally{gn=u,z.p=a,D.T=r}}Wn=1,yd(),md(),vd()}}function yd(){if(Wn===1){Wn=0;var n=_t,e=zr,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=D.T,D.T=null;var r=z.p;z.p=2;var a=gn;gn|=4;try{Ff(e,n);var l=Rc,u=to(n.containerInfo),o=l.focusedElem,b=l.selectionRange;if(u!==o&&o&&o.ownerDocument&&eo(o.ownerDocument.documentElement,o)){if(b!==null&&Ji(o)){var R=b.start,x=b.end;if(x===void 0&&(x=R),"selectionStart"in o)o.selectionStart=R,o.selectionEnd=Math.min(x,o.value.length);else{var U=o.ownerDocument||document,T=U&&U.defaultView||window;if(T.getSelection){var _=T.getSelection(),I=o.textContent.length,Q=Math.min(b.start,I),Rn=b.end===void 0?Q:Math.min(b.end,I);!_.extend&&Q>Rn&&(u=Rn,Rn=Q,Q=u);var A=no(o,Q),m=no(o,Rn);if(A&&m&&(_.rangeCount!==1||_.anchorNode!==A.node||_.anchorOffset!==A.offset||_.focusNode!==m.node||_.focusOffset!==m.offset)){var E=U.createRange();E.setStart(A.node,A.offset),_.removeAllRanges(),Q>Rn?(_.addRange(E),_.extend(m.node,m.offset)):(E.setEnd(m.node,m.offset),_.addRange(E))}}}}for(U=[],_=o;_=_.parentNode;)_.nodeType===1&&U.push({element:_,left:_.scrollLeft,top:_.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<U.length;o++){var C=U[o];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}ri=!!Ec,Rc=Ec=null}finally{gn=a,z.p=r,D.T=t}}n.current=e,Wn=2}}function md(){if(Wn===2){Wn=0;var n=_t,e=zr,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=D.T,D.T=null;var r=z.p;z.p=2;var a=gn;gn|=4;try{Zf(n,e.alternate,e)}finally{gn=a,z.p=r,D.T=t}}Wn=3}}function vd(){if(Wn===4||Wn===3){Wn=0,Oi();var n=_t,e=zr,t=jr,r=ld;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Wn=5:(Wn=0,zr=_t=null,gd(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(Tt=null),xi(t),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Wr,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=D.T,a=z.p,z.p=2,D.T=null;try{for(var l=n.onRecoverableError,u=0;u<r.length;u++){var o=r[u];l(o.value,{componentStack:o.stack})}}finally{D.T=e,z.p=a}}(jr&3)!==0&&Xl(),Qe(n),a=n.pendingLanes,(t&4194090)!==0&&(a&42)!==0?n===cc?Ca++:(Ca=0,cc=n):Ca=0,Ua(0)}}function gd(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,fa(e)))}function Xl(n){return yd(),md(),vd(),Sd()}function Sd(){if(Wn!==5)return!1;var n=_t,e=ic;ic=0;var t=xi(jr),r=D.T,a=z.p;try{z.p=32>t?32:t,D.T=null,t=uc,uc=null;var l=_t,u=jr;if(Wn=0,zr=_t=null,jr=0,(gn&6)!==0)throw Error(s(331));var o=gn;if(gn|=4,rd(l.current),nd(l,l.current,u,t),gn=o,Ua(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Wr,l)}catch{}return!0}finally{z.p=a,D.T=r,gd(n,e)}}function Ad(n,e,t){e=Ee(t,e),e=Yu(n.stateNode,e,2),n=ht(n,e,2),n!==null&&(Ir(n,2),Qe(n))}function _n(n,e,t){if(n.tag===3)Ad(n,n,t);else for(;e!==null;){if(e.tag===3){Ad(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){n=Ee(t,n),t=_f(2),r=ht(e,t,2),r!==null&&(Of(t,r,e,n),Ir(r,2),Qe(r));break}}e=e.return}}function dc(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Ep;var a=new Set;r.set(e,a)}else a=r.get(e),a===void 0&&(a=new Set,r.set(e,a));a.has(t)||(tc=!0,a.add(t),n=Np.bind(null,n,e,t),e.then(n,n))}function Np(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,Nn===n&&(dn&t)===t&&(Hn===4||Hn===3&&(dn&62914560)===dn&&300>Ue()-lc?(gn&2)===0&&Gr(n,0):rc|=t,wr===dn&&(wr=0)),Qe(n)}function Ed(n,e){e===0&&(e=ys()),n=Ar(n,e),n!==null&&(Ir(n,e),Qe(n))}function Dp(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Ed(n,t)}function xp(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=n.stateNode;break;case 22:r=n.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),Ed(n,t)}function Mp(n,e){return Tn(n,e)}var kl=null,qr=null,bc=!1,Wl=!1,pc=!1,Ft=0;function Qe(n){n!==qr&&n.next===null&&(qr===null?kl=qr=n:qr=qr.next=n),Wl=!0,bc||(bc=!0,Up())}function Ua(n,e){if(!pc&&Wl){pc=!0;do for(var t=!1,r=kl;r!==null;){if(n!==0){var a=r.pendingLanes;if(a===0)var l=0;else{var u=r.suspendedLanes,o=r.pingedLanes;l=(1<<31-se(42|n)+1)-1,l&=a&~(u&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Od(r,l))}else l=dn,l=$a(r,r===Nn?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(l&3)===0||Zr(r,l)||(t=!0,Od(r,l));r=r.next}while(t);pc=!1}}function Cp(){Rd()}function Rd(){Wl=bc=!1;var n=0;Ft!==0&&(Yp()&&(n=Ft),Ft=0);for(var e=Ue(),t=null,r=kl;r!==null;){var a=r.next,l=Td(r,e);l===0?(r.next=null,t===null?kl=a:t.next=a,a===null&&(qr=t)):(t=r,(n!==0||(l&3)!==0)&&(Wl=!0)),r=a}Ua(n)}function Td(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var u=31-se(l),o=1<<u,b=a[u];b===-1?((o&t)===0||(o&r)!==0)&&(a[u]=r0(o,e)):b<=e&&(n.expiredLanes|=o),l&=~o}if(e=Nn,t=dn,t=$a(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),r=n.callbackNode,t===0||n===e&&(Sn===2||Sn===9)||n.cancelPendingCommit!==null)return r!==null&&r!==null&&ue(r),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Zr(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(r!==null&&ue(r),xi(t)){case 2:case 8:t=bs;break;case 32:t=Ja;break;case 268435456:t=ps;break;default:t=Ja}return r=_d.bind(null,n),t=Tn(t,r),n.callbackPriority=e,n.callbackNode=t,e}return r!==null&&r!==null&&ue(r),n.callbackPriority=2,n.callbackNode=null,2}function _d(n,e){if(Wn!==0&&Wn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Xl()&&n.callbackNode!==t)return null;var r=dn;return r=$a(n,n===Nn?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),r===0?null:(ud(n,r,e),Td(n,Ue()),n.callbackNode!=null&&n.callbackNode===t?_d.bind(null,n):null)}function Od(n,e){if(Xl())return null;ud(n,e,!0)}function Up(){Vp(function(){(gn&6)!==0?Tn(Lt,Cp):Rd()})}function hc(){return Ft===0&&(Ft=hs()),Ft}function Nd(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:al(""+n)}function Dd(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function Hp(n,e,t,r,a){if(e==="submit"&&t&&t.stateNode===a){var l=Nd((a[te]||null).action),u=r.submitter;u&&(e=(e=u[te]||null)?Nd(e.formAction):u.getAttribute("formAction"),e!==null&&(l=e,u=null));var o=new cl("action","action",null,r,a);n.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ft!==0){var b=u?Dd(a,u):new FormData(a);Bu(t,{pending:!0,data:b,method:a.method,action:l},null,b)}}else typeof l=="function"&&(o.preventDefault(),b=u?Dd(a,u):new FormData(a),Bu(t,{pending:!0,data:b,method:a.method,action:l},l,b))},currentTarget:a}]})}}for(var yc=0;yc<nu.length;yc++){var mc=nu[yc],Lp=mc.toLowerCase(),Bp=mc[0].toUpperCase()+mc.slice(1);He(Lp,"on"+Bp)}He(lo,"onAnimationEnd"),He(io,"onAnimationIteration"),He(uo,"onAnimationStart"),He("dblclick","onDoubleClick"),He("focusin","onFocus"),He("focusout","onBlur"),He(F0,"onTransitionRun"),He($0,"onTransitionStart"),He(np,"onTransitionCancel"),He(co,"onTransitionEnd"),fr("onMouseEnter",["mouseout","mouseover"]),fr("onMouseLeave",["mouseout","mouseover"]),fr("onPointerEnter",["pointerout","pointerover"]),fr("onPointerLeave",["pointerout","pointerover"]),wt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wt("onBeforeInput",["compositionend","keypress","textInput","paste"]),wt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ha));function xd(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],a=r.event;r=r.listeners;n:{var l=void 0;if(e)for(var u=r.length-1;0<=u;u--){var o=r[u],b=o.instance,R=o.currentTarget;if(o=o.listener,b!==l&&a.isPropagationStopped())break n;l=o,a.currentTarget=R;try{l(a)}catch(x){Ll(x)}a.currentTarget=null,l=b}else for(u=0;u<r.length;u++){if(o=r[u],b=o.instance,R=o.currentTarget,o=o.listener,b!==l&&a.isPropagationStopped())break n;l=o,a.currentTarget=R;try{l(a)}catch(x){Ll(x)}a.currentTarget=null,l=b}}}}function cn(n,e){var t=e[Mi];t===void 0&&(t=e[Mi]=new Set);var r=n+"__bubble";t.has(r)||(Md(e,n,2,!1),t.add(r))}function vc(n,e,t){var r=0;e&&(r|=4),Md(t,n,r,e)}var Zl="_reactListening"+Math.random().toString(36).slice(2);function gc(n){if(!n[Zl]){n[Zl]=!0,As.forEach(function(t){t!=="selectionchange"&&(wp.has(t)||vc(t,!1,n),vc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Zl]||(e[Zl]=!0,vc("selectionchange",!1,e))}}function Md(n,e,t,r){switch(nb(e)){case 2:var a=sh;break;case 8:a=oh;break;default:a=Hc}t=a.bind(null,e,t,n),a=void 0,!qi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),r?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function Sc(n,e,t,r,a){var l=r;if((e&1)===0&&(e&2)===0&&r!==null)n:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var o=r.stateNode.containerInfo;if(o===a)break;if(u===4)for(u=r.return;u!==null;){var b=u.tag;if((b===3||b===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;o!==null;){if(u=cr(o),u===null)return;if(b=u.tag,b===5||b===6||b===26||b===27){r=l=u;continue n}o=o.parentNode}}r=r.return}Bs(function(){var R=l,x=Gi(t),U=[];n:{var T=so.get(n);if(T!==void 0){var _=cl,I=n;switch(n){case"keypress":if(il(t)===0)break n;case"keydown":case"keyup":_=M0;break;case"focusin":I="focus",_=Xi;break;case"focusout":I="blur",_=Xi;break;case"beforeblur":case"afterblur":_=Xi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=v0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=H0;break;case lo:case io:case uo:_=A0;break;case co:_=B0;break;case"scroll":case"scrollend":_=y0;break;case"wheel":_=z0;break;case"copy":case"cut":case"paste":_=R0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ys;break;case"toggle":case"beforetoggle":_=G0}var Q=(e&4)!==0,Rn=!Q&&(n==="scroll"||n==="scrollend"),A=Q?T!==null?T+"Capture":null:T;Q=[];for(var m=R,E;m!==null;){var C=m;if(E=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||E===null||A===null||(C=Fr(m,A),C!=null&&Q.push(La(m,C,E))),Rn)break;m=m.return}0<Q.length&&(T=new _(T,I,null,t,x),U.push({event:T,listeners:Q}))}}if((e&7)===0){n:{if(T=n==="mouseover"||n==="pointerover",_=n==="mouseout"||n==="pointerout",T&&t!==ji&&(I=t.relatedTarget||t.fromElement)&&(cr(I)||I[ur]))break n;if((_||T)&&(T=x.window===x?x:(T=x.ownerDocument)?T.defaultView||T.parentWindow:window,_?(I=t.relatedTarget||t.toElement,_=R,I=I?cr(I):null,I!==null&&(Rn=p(I),Q=I.tag,I!==Rn||Q!==5&&Q!==27&&Q!==6)&&(I=null)):(_=null,I=R),_!==I)){if(Q=js,C="onMouseLeave",A="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(Q=Ys,C="onPointerLeave",A="onPointerEnter",m="pointer"),Rn=_==null?T:Pr(_),E=I==null?T:Pr(I),T=new Q(C,m+"leave",_,t,x),T.target=Rn,T.relatedTarget=E,C=null,cr(x)===R&&(Q=new Q(A,m+"enter",I,t,x),Q.target=E,Q.relatedTarget=Rn,C=Q),Rn=C,_&&I)e:{for(Q=_,A=I,m=0,E=Q;E;E=Vr(E))m++;for(E=0,C=A;C;C=Vr(C))E++;for(;0<m-E;)Q=Vr(Q),m--;for(;0<E-m;)A=Vr(A),E--;for(;m--;){if(Q===A||A!==null&&Q===A.alternate)break e;Q=Vr(Q),A=Vr(A)}Q=null}else Q=null;_!==null&&Cd(U,T,_,Q,!1),I!==null&&Rn!==null&&Cd(U,Rn,I,Q,!0)}}n:{if(T=R?Pr(R):window,_=T.nodeName&&T.nodeName.toLowerCase(),_==="select"||_==="input"&&T.type==="file")var G=Zs;else if(ks(T))if(Is)G=I0;else{G=W0;var an=k0}else _=T.nodeName,!_||_.toLowerCase()!=="input"||T.type!=="checkbox"&&T.type!=="radio"?R&&zi(R.elementType)&&(G=Zs):G=Z0;if(G&&(G=G(n,R))){Ws(U,G,t,x);break n}an&&an(n,T,R),n==="focusout"&&R&&T.type==="number"&&R.memoizedProps.value!=null&&wi(T,"number",T.value)}switch(an=R?Pr(R):window,n){case"focusin":(ks(an)||an.contentEditable==="true")&&(vr=an,Pi=R,ia=null);break;case"focusout":ia=Pi=vr=null;break;case"mousedown":Fi=!0;break;case"contextmenu":case"mouseup":case"dragend":Fi=!1,ro(U,t,x);break;case"selectionchange":if(P0)break;case"keydown":case"keyup":ro(U,t,x)}var V;if(Wi)n:{switch(n){case"compositionstart":var k="onCompositionStart";break n;case"compositionend":k="onCompositionEnd";break n;case"compositionupdate":k="onCompositionUpdate";break n}k=void 0}else mr?Qs(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(qs&&t.locale!=="ko"&&(mr||k!=="onCompositionStart"?k==="onCompositionEnd"&&mr&&(V=ws()):(ft=x,Vi="value"in ft?ft.value:ft.textContent,mr=!0)),an=Il(R,k),0<an.length&&(k=new Gs(k,n,null,t,x),U.push({event:k,listeners:an}),V?k.data=V:(V=Xs(t),V!==null&&(k.data=V)))),(V=q0?V0(n,t):K0(n,t))&&(k=Il(R,"onBeforeInput"),0<k.length&&(an=new Gs("onBeforeInput","beforeinput",null,t,x),U.push({event:an,listeners:k}),an.data=V)),Hp(U,n,R,t,x)}xd(U,e)})}function La(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Il(n,e){for(var t=e+"Capture",r=[];n!==null;){var a=n,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Fr(n,t),a!=null&&r.unshift(La(n,a,l)),a=Fr(n,e),a!=null&&r.push(La(n,a,l))),n.tag===3)return r;n=n.return}return[]}function Vr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Cd(n,e,t,r,a){for(var l=e._reactName,u=[];t!==null&&t!==r;){var o=t,b=o.alternate,R=o.stateNode;if(o=o.tag,b!==null&&b===r)break;o!==5&&o!==26&&o!==27||R===null||(b=R,a?(R=Fr(t,l),R!=null&&u.unshift(La(t,R,b))):a||(R=Fr(t,l),R!=null&&u.push(La(t,R,b)))),t=t.return}u.length!==0&&n.push({event:e,listeners:u})}var zp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function Ud(n){return(typeof n=="string"?n:""+n).replace(zp,`
`).replace(jp,"")}function Hd(n,e){return e=Ud(e),Ud(n)===e}function Jl(){}function En(n,e,t,r,a,l){switch(t){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||pr(n,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&pr(n,""+r);break;case"className":el(n,"class",r);break;case"tabIndex":el(n,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":el(n,t,r);break;case"style":Hs(n,r,l);break;case"data":if(e!=="object"){el(n,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(t);break}r=al(""+r),n.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&En(n,e,"name",a.name,a,null),En(n,e,"formEncType",a.formEncType,a,null),En(n,e,"formMethod",a.formMethod,a,null),En(n,e,"formTarget",a.formTarget,a,null)):(En(n,e,"encType",a.encType,a,null),En(n,e,"method",a.method,a,null),En(n,e,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(t);break}r=al(""+r),n.setAttribute(t,r);break;case"onClick":r!=null&&(n.onclick=Jl);break;case"onScroll":r!=null&&cn("scroll",n);break;case"onScrollEnd":r!=null&&cn("scrollend",n);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(s(60));n.innerHTML=t}}break;case"multiple":n.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":n.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){n.removeAttribute("xlink:href");break}t=al(""+r),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,""+r):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":r===!0?n.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,r):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?n.setAttribute(t,r):n.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?n.removeAttribute(t):n.setAttribute(t,r);break;case"popover":cn("beforetoggle",n),cn("toggle",n),nl(n,"popover",r);break;case"xlinkActuate":Xe(n,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Xe(n,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Xe(n,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Xe(n,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Xe(n,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Xe(n,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Xe(n,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":nl(n,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=p0.get(t)||t,nl(n,t,r))}}function Ac(n,e,t,r,a,l){switch(t){case"style":Hs(n,r,l);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(s(60));n.innerHTML=t}}break;case"children":typeof r=="string"?pr(n,r):(typeof r=="number"||typeof r=="bigint")&&pr(n,""+r);break;case"onScroll":r!=null&&cn("scroll",n);break;case"onScrollEnd":r!=null&&cn("scrollend",n);break;case"onClick":r!=null&&(n.onclick=Jl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Es.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),e=t.slice(2,a?t.length-7:void 0),l=n[te]||null,l=l!=null?l[t]:null,typeof l=="function"&&n.removeEventListener(e,l,a),typeof r=="function")){typeof l!="function"&&l!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,r,a);break n}t in n?n[t]=r:r===!0?n.setAttribute(t,""):nl(n,t,r)}}}function Zn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":cn("error",n),cn("load",n);var r=!1,a=!1,l;for(l in t)if(t.hasOwnProperty(l)){var u=t[l];if(u!=null)switch(l){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:En(n,e,l,u,t,null)}}a&&En(n,e,"srcSet",t.srcSet,t,null),r&&En(n,e,"src",t.src,t,null);return;case"input":cn("invalid",n);var o=l=u=a=null,b=null,R=null;for(r in t)if(t.hasOwnProperty(r)){var x=t[r];if(x!=null)switch(r){case"name":a=x;break;case"type":u=x;break;case"checked":b=x;break;case"defaultChecked":R=x;break;case"value":l=x;break;case"defaultValue":o=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(s(137,e));break;default:En(n,e,r,x,t,null)}}xs(n,l,o,b,R,u,a,!1),tl(n);return;case"select":cn("invalid",n),r=u=l=null;for(a in t)if(t.hasOwnProperty(a)&&(o=t[a],o!=null))switch(a){case"value":l=o;break;case"defaultValue":u=o;break;case"multiple":r=o;default:En(n,e,a,o,t,null)}e=l,t=u,n.multiple=!!r,e!=null?br(n,!!r,e,!1):t!=null&&br(n,!!r,t,!0);return;case"textarea":cn("invalid",n),l=a=r=null;for(u in t)if(t.hasOwnProperty(u)&&(o=t[u],o!=null))switch(u){case"value":r=o;break;case"defaultValue":a=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:En(n,e,u,o,t,null)}Cs(n,r,a,l),tl(n);return;case"option":for(b in t)if(t.hasOwnProperty(b)&&(r=t[b],r!=null))switch(b){case"selected":n.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:En(n,e,b,r,t,null)}return;case"dialog":cn("beforetoggle",n),cn("toggle",n),cn("cancel",n),cn("close",n);break;case"iframe":case"object":cn("load",n);break;case"video":case"audio":for(r=0;r<Ha.length;r++)cn(Ha[r],n);break;case"image":cn("error",n),cn("load",n);break;case"details":cn("toggle",n);break;case"embed":case"source":case"link":cn("error",n),cn("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in t)if(t.hasOwnProperty(R)&&(r=t[R],r!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:En(n,e,R,r,t,null)}return;default:if(zi(e)){for(x in t)t.hasOwnProperty(x)&&(r=t[x],r!==void 0&&Ac(n,e,x,r,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(r=t[o],r!=null&&En(n,e,o,r,t,null))}function Gp(n,e,t,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,u=null,o=null,b=null,R=null,x=null;for(_ in t){var U=t[_];if(t.hasOwnProperty(_)&&U!=null)switch(_){case"checked":break;case"value":break;case"defaultValue":b=U;default:r.hasOwnProperty(_)||En(n,e,_,null,r,U)}}for(var T in r){var _=r[T];if(U=t[T],r.hasOwnProperty(T)&&(_!=null||U!=null))switch(T){case"type":l=_;break;case"name":a=_;break;case"checked":R=_;break;case"defaultChecked":x=_;break;case"value":u=_;break;case"defaultValue":o=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(s(137,e));break;default:_!==U&&En(n,e,T,_,r,U)}}Bi(n,u,o,b,R,x,l,a);return;case"select":_=u=o=T=null;for(l in t)if(b=t[l],t.hasOwnProperty(l)&&b!=null)switch(l){case"value":break;case"multiple":_=b;default:r.hasOwnProperty(l)||En(n,e,l,null,r,b)}for(a in r)if(l=r[a],b=t[a],r.hasOwnProperty(a)&&(l!=null||b!=null))switch(a){case"value":T=l;break;case"defaultValue":o=l;break;case"multiple":u=l;default:l!==b&&En(n,e,a,l,r,b)}e=o,t=u,r=_,T!=null?br(n,!!t,T,!1):!!r!=!!t&&(e!=null?br(n,!!t,e,!0):br(n,!!t,t?[]:"",!1));return;case"textarea":_=T=null;for(o in t)if(a=t[o],t.hasOwnProperty(o)&&a!=null&&!r.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:En(n,e,o,null,r,a)}for(u in r)if(a=r[u],l=t[u],r.hasOwnProperty(u)&&(a!=null||l!=null))switch(u){case"value":T=a;break;case"defaultValue":_=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==l&&En(n,e,u,a,r,l)}Ms(n,T,_);return;case"option":for(var I in t)if(T=t[I],t.hasOwnProperty(I)&&T!=null&&!r.hasOwnProperty(I))switch(I){case"selected":n.selected=!1;break;default:En(n,e,I,null,r,T)}for(b in r)if(T=r[b],_=t[b],r.hasOwnProperty(b)&&T!==_&&(T!=null||_!=null))switch(b){case"selected":n.selected=T&&typeof T!="function"&&typeof T!="symbol";break;default:En(n,e,b,T,r,_)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Q in t)T=t[Q],t.hasOwnProperty(Q)&&T!=null&&!r.hasOwnProperty(Q)&&En(n,e,Q,null,r,T);for(R in r)if(T=r[R],_=t[R],r.hasOwnProperty(R)&&T!==_&&(T!=null||_!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,e));break;default:En(n,e,R,T,r,_)}return;default:if(zi(e)){for(var Rn in t)T=t[Rn],t.hasOwnProperty(Rn)&&T!==void 0&&!r.hasOwnProperty(Rn)&&Ac(n,e,Rn,void 0,r,T);for(x in r)T=r[x],_=t[x],!r.hasOwnProperty(x)||T===_||T===void 0&&_===void 0||Ac(n,e,x,T,r,_);return}}for(var A in t)T=t[A],t.hasOwnProperty(A)&&T!=null&&!r.hasOwnProperty(A)&&En(n,e,A,null,r,T);for(U in r)T=r[U],_=t[U],!r.hasOwnProperty(U)||T===_||T==null&&_==null||En(n,e,U,T,r,_)}var Ec=null,Rc=null;function Pl(n){return n.nodeType===9?n:n.ownerDocument}function Ld(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bd(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Tc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _c=null;function Yp(){var n=window.event;return n&&n.type==="popstate"?n===_c?!1:(_c=n,!0):(_c=null,!1)}var wd=typeof setTimeout=="function"?setTimeout:void 0,qp=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,Vp=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(n){return zd.resolve(null).then(n).catch(Kp)}:wd;function Kp(n){setTimeout(function(){throw n})}function Nt(n){return n==="head"}function jd(n,e){var t=e,r=0,a=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(0<r&&8>r){t=r;var u=n.ownerDocument;if(t&1&&Ba(u.documentElement),t&2&&Ba(u.body),t&4)for(t=u.head,Ba(t),u=t.firstChild;u;){var o=u.nextSibling,b=u.nodeName;u[Jr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=o}}if(a===0){n.removeChild(l),Ka(e);return}a--}else t==="$"||t==="$?"||t==="$!"?a++:r=t.charCodeAt(0)-48;else r=0;t=l}while(t);Ka(e)}function Oc(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Oc(t),Ci(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Qp(n,e,t,r){for(;n.nodeType===1;){var a=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(r){if(!n[Jr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=Be(n.nextSibling),n===null)break}return null}function Xp(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Be(n.nextSibling),n===null))return null;return n}function Nc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function kp(n,e){var t=n.ownerDocument;if(n.data!=="$?"||t.readyState==="complete")e();else{var r=function(){e(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),n._reactRetry=r}}function Be(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var Dc=null;function Gd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}function Yd(n,e,t){switch(e=Pl(t),n){case"html":if(n=e.documentElement,!n)throw Error(s(452));return n;case"head":if(n=e.head,!n)throw Error(s(453));return n;case"body":if(n=e.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function Ba(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Ci(n)}var De=new Map,qd=new Set;function Fl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var lt=z.d;z.d={f:Wp,r:Zp,D:Ip,C:Jp,L:Pp,m:Fp,X:nh,S:$p,M:eh};function Wp(){var n=lt.f(),e=Kl();return n||e}function Zp(n){var e=sr(n);e!==null&&e.tag===5&&e.type==="form"?uf(e):lt.r(n)}var Kr=typeof document>"u"?null:document;function Vd(n,e,t){var r=Kr;if(r&&typeof e=="string"&&e){var a=Ae(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),qd.has(a)||(qd.add(a),n={rel:n,crossOrigin:t,href:e},r.querySelector(a)===null&&(e=r.createElement("link"),Zn(e,"link",n),Vn(e),r.head.appendChild(e)))}}function Ip(n){lt.D(n),Vd("dns-prefetch",n,null)}function Jp(n,e){lt.C(n,e),Vd("preconnect",n,e)}function Pp(n,e,t){lt.L(n,e,t);var r=Kr;if(r&&n&&e){var a='link[rel="preload"][as="'+Ae(e)+'"]';e==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+Ae(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+Ae(t.imageSizes)+'"]')):a+='[href="'+Ae(n)+'"]';var l=a;switch(e){case"style":l=Qr(n);break;case"script":l=Xr(n)}De.has(l)||(n=N({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),De.set(l,n),r.querySelector(a)!==null||e==="style"&&r.querySelector(wa(l))||e==="script"&&r.querySelector(za(l))||(e=r.createElement("link"),Zn(e,"link",n),Vn(e),r.head.appendChild(e)))}}function Fp(n,e){lt.m(n,e);var t=Kr;if(t&&n){var r=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ae(r)+'"][href="'+Ae(n)+'"]',l=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Xr(n)}if(!De.has(l)&&(n=N({rel:"modulepreload",href:n},e),De.set(l,n),t.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(za(l)))return}r=t.createElement("link"),Zn(r,"link",n),Vn(r),t.head.appendChild(r)}}}function $p(n,e,t){lt.S(n,e,t);var r=Kr;if(r&&n){var a=or(r).hoistableStyles,l=Qr(n);e=e||"default";var u=a.get(l);if(!u){var o={loading:0,preload:null};if(u=r.querySelector(wa(l)))o.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":e},t),(t=De.get(l))&&xc(n,t);var b=u=r.createElement("link");Vn(b),Zn(b,"link",n),b._p=new Promise(function(R,x){b.onload=R,b.onerror=x}),b.addEventListener("load",function(){o.loading|=1}),b.addEventListener("error",function(){o.loading|=2}),o.loading|=4,$l(u,e,r)}u={type:"stylesheet",instance:u,count:1,state:o},a.set(l,u)}}}function nh(n,e){lt.X(n,e);var t=Kr;if(t&&n){var r=or(t).hoistableScripts,a=Xr(n),l=r.get(a);l||(l=t.querySelector(za(a)),l||(n=N({src:n,async:!0},e),(e=De.get(a))&&Mc(n,e),l=t.createElement("script"),Vn(l),Zn(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function eh(n,e){lt.M(n,e);var t=Kr;if(t&&n){var r=or(t).hoistableScripts,a=Xr(n),l=r.get(a);l||(l=t.querySelector(za(a)),l||(n=N({src:n,async:!0,type:"module"},e),(e=De.get(a))&&Mc(n,e),l=t.createElement("script"),Vn(l),Zn(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function Kd(n,e,t,r){var a=(a=X.current)?Fl(a):null;if(!a)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=Qr(t.href),t=or(a).hoistableStyles,r=t.get(e),r||(r={type:"style",instance:null,count:0,state:null},t.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=Qr(t.href);var l=or(a).hoistableStyles,u=l.get(n);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,u),(l=a.querySelector(wa(n)))&&!l._p&&(u.instance=l,u.state.loading=5),De.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},De.set(n,t),l||th(a,n,t,u.state))),e&&r===null)throw Error(s(528,""));return u}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Xr(t),t=or(a).hoistableScripts,r=t.get(e),r||(r={type:"script",instance:null,count:0,state:null},t.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Qr(n){return'href="'+Ae(n)+'"'}function wa(n){return'link[rel="stylesheet"]['+n+"]"}function Qd(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function th(n,e,t,r){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=n.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Zn(e,"link",t),Vn(e),n.head.appendChild(e))}function Xr(n){return'[src="'+Ae(n)+'"]'}function za(n){return"script[async]"+n}function Xd(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var r=n.querySelector('style[data-href~="'+Ae(t.href)+'"]');if(r)return e.instance=r,Vn(r),r;var a=N({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(n.ownerDocument||n).createElement("style"),Vn(r),Zn(r,"style",a),$l(r,t.precedence,n),e.instance=r;case"stylesheet":a=Qr(t.href);var l=n.querySelector(wa(a));if(l)return e.state.loading|=4,e.instance=l,Vn(l),l;r=Qd(t),(a=De.get(a))&&xc(r,a),l=(n.ownerDocument||n).createElement("link"),Vn(l);var u=l;return u._p=new Promise(function(o,b){u.onload=o,u.onerror=b}),Zn(l,"link",r),e.state.loading|=4,$l(l,t.precedence,n),e.instance=l;case"script":return l=Xr(t.src),(a=n.querySelector(za(l)))?(e.instance=a,Vn(a),a):(r=t,(a=De.get(l))&&(r=N({},t),Mc(r,a)),n=n.ownerDocument||n,a=n.createElement("script"),Vn(a),Zn(a,"link",r),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,$l(r,t.precedence,n));return e.instance}function $l(n,e,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,u=0;u<r.length;u++){var o=r[u];if(o.dataset.precedence===e)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function xc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Mc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var ni=null;function kd(n,e,t){if(ni===null){var r=new Map,a=ni=new Map;a.set(t,r)}else a=ni,r=a.get(t),r||(r=new Map,a.set(t,r));if(r.has(n))return r;for(r.set(n,null),t=t.getElementsByTagName(n),a=0;a<t.length;a++){var l=t[a];if(!(l[Jr]||l[Jn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var u=l.getAttribute(e)||"";u=n+u;var o=r.get(u);o?o.push(l):r.set(u,[l])}}return r}function Wd(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function rh(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Zd(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ja=null;function ah(){}function lh(n,e,t){if(ja===null)throw Error(s(475));var r=ja;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Qr(t.href),l=n.querySelector(wa(a));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(r.count++,r=ei.bind(r),n.then(r,r)),e.state.loading|=4,e.instance=l,Vn(l);return}l=n.ownerDocument||n,t=Qd(t),(a=De.get(a))&&xc(t,a),l=l.createElement("link"),Vn(l);var u=l;u._p=new Promise(function(o,b){u.onload=o,u.onerror=b}),Zn(l,"link",t),e.instance=l}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=ei.bind(r),n.addEventListener("load",e),n.addEventListener("error",e))}}function ih(){if(ja===null)throw Error(s(475));var n=ja;return n.stylesheets&&n.count===0&&Cc(n,n.stylesheets),0<n.count?function(e){var t=setTimeout(function(){if(n.stylesheets&&Cc(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t)}}:null}function ei(){if(this.count--,this.count===0){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ti=null;function Cc(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ti=new Map,e.forEach(uh,n),ti=null,ei.call(n))}function uh(n,e){if(!(e.state.loading&4)){var t=ti.get(n);if(t)var r=t.get(null);else{t=new Map,ti.set(n,t);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var u=a[l];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),r=u)}r&&t.set(null,r)}a=e.instance,u=a.getAttribute("data-precedence"),l=t.get(u)||r,l===r&&t.set(null,a),t.set(u,a),this.count++,r=ei.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var Ga={$$typeof:on,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function ch(n,e,t,r,a,l,u,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ni(0),this.hiddenUpdates=Ni(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Id(n,e,t,r,a,l,u,o,b,R,x,U){return n=new ch(n,e,t,u,o,b,R,U),e=1,l===!0&&(e|=24),l=fe(3,null,null,e),n.current=l,l.stateNode=n,e=du(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:r,isDehydrated:t,cache:e},yu(l),n}function Jd(n){return n?(n=Er,n):Er}function Pd(n,e,t,r,a,l){a=Jd(a),r.context===null?r.context=a:r.pendingContext=a,r=pt(e),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=ht(n,r,e),t!==null&&(ye(t,n,e),ha(t,n,e))}function Fd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Uc(n,e){Fd(n,e),(n=n.alternate)&&Fd(n,e)}function $d(n){if(n.tag===13){var e=Ar(n,67108864);e!==null&&ye(e,n,67108864),Uc(n,67108864)}}var ri=!0;function sh(n,e,t,r){var a=D.T;D.T=null;var l=z.p;try{z.p=2,Hc(n,e,t,r)}finally{z.p=l,D.T=a}}function oh(n,e,t,r){var a=D.T;D.T=null;var l=z.p;try{z.p=8,Hc(n,e,t,r)}finally{z.p=l,D.T=a}}function Hc(n,e,t,r){if(ri){var a=Lc(r);if(a===null)Sc(n,e,r,ai,t),eb(n,r);else if(dh(a,n,e,t,r))r.stopPropagation();else if(eb(n,r),e&4&&-1<fh.indexOf(n)){for(;a!==null;){var l=sr(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var u=Bt(l.pendingLanes);if(u!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var b=1<<31-se(u);o.entanglements[1]|=b,u&=~b}Qe(l),(gn&6)===0&&(ql=Ue()+500,Ua(0))}}break;case 13:o=Ar(l,2),o!==null&&ye(o,l,2),Kl(),Uc(l,2)}if(l=Lc(r),l===null&&Sc(n,e,r,ai,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else Sc(n,e,r,null,t)}}function Lc(n){return n=Gi(n),Bc(n)}var ai=null;function Bc(n){if(ai=null,n=cr(n),n!==null){var e=p(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=y(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ai=n,null}function nb(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ir()){case Lt:return 2;case bs:return 8;case Ja:case Pb:return 32;case ps:return 268435456;default:return 32}default:return 32}}var wc=!1,Dt=null,xt=null,Mt=null,Ya=new Map,qa=new Map,Ct=[],fh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eb(n,e){switch(n){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":Mt=null;break;case"pointerover":case"pointerout":Ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qa.delete(e.pointerId)}}function Va(n,e,t,r,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},e!==null&&(e=sr(e),e!==null&&$d(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function dh(n,e,t,r,a){switch(e){case"focusin":return Dt=Va(Dt,n,e,t,r,a),!0;case"dragenter":return xt=Va(xt,n,e,t,r,a),!0;case"mouseover":return Mt=Va(Mt,n,e,t,r,a),!0;case"pointerover":var l=a.pointerId;return Ya.set(l,Va(Ya.get(l)||null,n,e,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,qa.set(l,Va(qa.get(l)||null,n,e,t,r,a)),!0}return!1}function tb(n){var e=cr(n.target);if(e!==null){var t=p(e);if(t!==null){if(e=t.tag,e===13){if(e=y(t),e!==null){n.blockedOn=e,l0(n.priority,function(){if(t.tag===13){var r=he();r=Di(r);var a=Ar(t,r);a!==null&&ye(a,t,r),Uc(t,r)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function li(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Lc(n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);ji=r,t.target.dispatchEvent(r),ji=null}else return e=sr(t),e!==null&&$d(e),n.blockedOn=t,!1;e.shift()}return!0}function rb(n,e,t){li(n)&&t.delete(e)}function bh(){wc=!1,Dt!==null&&li(Dt)&&(Dt=null),xt!==null&&li(xt)&&(xt=null),Mt!==null&&li(Mt)&&(Mt=null),Ya.forEach(rb),qa.forEach(rb)}function ii(n,e){n.blockedOn===e&&(n.blockedOn=null,wc||(wc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,bh)))}var ui=null;function ab(n){ui!==n&&(ui=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ui===n&&(ui=null);for(var e=0;e<n.length;e+=3){var t=n[e],r=n[e+1],a=n[e+2];if(typeof r!="function"){if(Bc(r||t)===null)continue;break}var l=sr(t);l!==null&&(n.splice(e,3),e-=3,Bu(l,{pending:!0,data:a,method:t.method,action:r},r,a))}}))}function Ka(n){function e(b){return ii(b,n)}Dt!==null&&ii(Dt,n),xt!==null&&ii(xt,n),Mt!==null&&ii(Mt,n),Ya.forEach(e),qa.forEach(e);for(var t=0;t<Ct.length;t++){var r=Ct[t];r.blockedOn===n&&(r.blockedOn=null)}for(;0<Ct.length&&(t=Ct[0],t.blockedOn===null);)tb(t),t.blockedOn===null&&Ct.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],u=a[te]||null;if(typeof l=="function")u||ab(t);else if(u){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,u=l[te]||null)o=u.formAction;else if(Bc(a)!==null)continue}else o=u.action;typeof o=="function"?t[r+1]=o:(t.splice(r,3),r-=3),ab(t)}}}function zc(n){this._internalRoot=n}ci.prototype.render=zc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(s(409));var t=e.current,r=he();Pd(t,r,n,e,null,null)},ci.prototype.unmount=zc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Pd(n.current,2,null,n,null,null),Kl(),e[ur]=null}};function ci(n){this._internalRoot=n}ci.prototype.unstable_scheduleHydration=function(n){if(n){var e=gs();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ct.length&&e!==0&&e<Ct[t].priority;t++);Ct.splice(t,0,n),t===0&&tb(n)}};var lb=c.version;if(lb!=="19.1.0")throw Error(s(527,lb,"19.1.0"));z.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=S(e),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var ph={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{Wr=si.inject(ph),ce=si}catch{}}return Xa.createRoot=function(n,e){if(!d(n))throw Error(s(299));var t=!1,r="",a=Af,l=Ef,u=Rf,o=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=Id(n,1,!1,null,null,t,r,a,l,u,o,null),n[ur]=e.current,gc(n),new zc(e)},Xa.hydrateRoot=function(n,e,t){if(!d(n))throw Error(s(299));var r=!1,a="",l=Af,u=Ef,o=Rf,b=null,R=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks),t.formState!==void 0&&(R=t.formState)),e=Id(n,1,!0,e,t??null,r,a,l,u,o,b,R),e.context=Jd(null),t=e.current,r=he(),r=Di(r),a=pt(r),a.callback=null,ht(t,a,r),t=r,e.current.lanes=t,Ir(e,t),Qe(e),n[ur]=e.current,gc(n),new ci(e)},Xa.version="19.1.0",Xa}var hb;function Th(){if(hb)return Yc.exports;hb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Yc.exports=Rh(),Yc.exports}var _h=Th();function Ia({label:i,options:c,value:f,onChange:s,placeholder:d="Select an option",className:p}){const[y,O]=$.useState(!1),[S,v]=$.useState(!1),[N,L]=$.useState(""),j=$.useRef(null),W=$.useRef(null),J=$.useRef(null),K=c.find(H=>H.value===f),P=(K==null?void 0:K.label)||d,bn=K==null?void 0:K.color,sn=c.filter(H=>H.label.toLowerCase().includes(N.toLowerCase())),on=H=>{s(H),O(!1),L("")};return $.useEffect(()=>{const H=F=>{j.current&&!j.current.contains(F.target)&&O(!1)};return document.addEventListener("mousedown",H),()=>document.removeEventListener("mousedown",H)},[]),$.useEffect(()=>{y&&J.current&&J.current.focus()},[y]),$.useEffect(()=>{if(!y||!W.current)return;const H=W.current.getBoundingClientRect(),F=window.innerHeight||document.documentElement.clientHeight,hn=F*.4,mn=F-H.bottom,vn=H.top;mn<hn&&vn>mn?v(!0):v(!1)},[y]),g.jsxs("div",{className:`relative block ${p||""}`,ref:j,children:[g.jsxs("span",{className:"flex w-full divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm",children:[g.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative text-left",onClick:()=>{const H=!y;O(H),H&&L("")},ref:W,children:g.jsx("span",{style:{color:bn||"inherit"},children:P})}),g.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative","aria-label":"Menu",onClick:()=>{const H=!y;O(H),H&&L("")},children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),y&&g.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-lg max-h-[40vh] overflow-y-auto ${S?"bottom-full mb-2":"top-full mt-2"}`,children:c.length>0?g.jsxs("div",{children:[g.jsx("p",{className:"sticky top-0 bg-white px-3 py-2 text-xs uppercase text-gray-500 border-b border-gray-200 z-20",children:i}),g.jsx("input",{type:"text",ref:J,className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 px-2 py-1 text-sm",placeholder:"Search...",value:N,onChange:H=>L(H.target.value),onKeyDown:H=>{H.key==="Enter"&&sn.length===1&&(H.preventDefault(),on(sn[0].value))}}),sn.map(H=>g.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900",role:"menuitem",onClick:F=>{F.preventDefault(),on(H.value)},children:g.jsx("span",{style:{color:H.color||"inherit"},children:H.label})},H.value)),sn.length===0&&g.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No matching options"})]}):g.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No options available"})})]})}var Qc={exports:{}},Xc={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yb;function Oh(){if(yb)return Xc;yb=1;var i=Si();function c(S,v){return S===v&&(S!==0||1/S===1/v)||S!==S&&v!==v}var f=typeof Object.is=="function"?Object.is:c,s=i.useSyncExternalStore,d=i.useRef,p=i.useEffect,y=i.useMemo,O=i.useDebugValue;return Xc.useSyncExternalStoreWithSelector=function(S,v,N,L,j){var W=d(null);if(W.current===null){var J={hasValue:!1,value:null};W.current=J}else J=W.current;W=y(function(){function P(H){if(!bn){if(bn=!0,sn=H,H=L(H),j!==void 0&&J.hasValue){var F=J.value;if(j(F,H))return on=F}return on=H}if(F=on,f(sn,H))return F;var hn=L(H);return j!==void 0&&j(F,hn)?(sn=H,F):(sn=H,on=hn)}var bn=!1,sn,on,Z=N===void 0?null:N;return[function(){return P(v())},Z===null?void 0:function(){return P(Z())}]},[v,N,L,j]);var K=s(S,W[0],W[1]);return p(function(){J.hasValue=!0,J.value=K},[K]),O(K),K},Xc}var mb;function Nh(){return mb||(mb=1,Qc.exports=Oh()),Qc.exports}var Dh=Nh();function xh(i){i()}function Mh(){let i=null,c=null;return{clear(){i=null,c=null},notify(){xh(()=>{let f=i;for(;f;)f.callback(),f=f.next})},get(){const f=[];let s=i;for(;s;)f.push(s),s=s.next;return f},subscribe(f){let s=!0;const d=c={callback:f,next:null,prev:c};return d.prev?d.prev.next=d:i=d,function(){!s||i===null||(s=!1,d.next?d.next.prev=d.prev:c=d.prev,d.prev?d.prev.next=d.next:i=d.next)}}}}var vb={notify(){},get:()=>[]};function Ch(i,c){let f,s=vb,d=0,p=!1;function y(K){N();const P=s.subscribe(K);let bn=!1;return()=>{bn||(bn=!0,P(),L())}}function O(){s.notify()}function S(){J.onStateChange&&J.onStateChange()}function v(){return p}function N(){d++,f||(f=i.subscribe(S),s=Mh())}function L(){d--,f&&d===0&&(f(),f=void 0,s.clear(),s=vb)}function j(){p||(p=!0,N())}function W(){p&&(p=!1,L())}const J={addNestedSub:y,notifyNestedSubs:O,handleChangeWrapper:S,isSubscribed:v,trySubscribe:j,tryUnsubscribe:W,getListeners:()=>s};return J}var Uh=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hh=Uh(),Lh=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Bh=Lh(),wh=()=>Hh||Bh?$.useLayoutEffect:$.useEffect,zh=wh(),kc=Symbol.for("react-redux-context"),Wc=typeof globalThis<"u"?globalThis:{};function jh(){if(!$.createContext)return{};const i=Wc[kc]??(Wc[kc]=new Map);let c=i.get($.createContext);return c||(c=$.createContext(null),i.set($.createContext,c)),c}var Ht=jh();function Gh(i){const{children:c,context:f,serverState:s,store:d}=i,p=$.useMemo(()=>{const S=Ch(d);return{store:d,subscription:S,getServerState:s?()=>s:void 0}},[d,s]),y=$.useMemo(()=>d.getState(),[d]);zh(()=>{const{subscription:S}=p;return S.onStateChange=S.notifyNestedSubs,S.trySubscribe(),y!==d.getState()&&S.notifyNestedSubs(),()=>{S.tryUnsubscribe(),S.onStateChange=void 0}},[p,y]);const O=f||Ht;return $.createElement(O.Provider,{value:p},c)}var Yh=Gh;function cs(i=Ht){return function(){return $.useContext(i)}}var Cb=cs();function Ub(i=Ht){const c=i===Ht?Cb:cs(i),f=()=>{const{store:s}=c();return s};return Object.assign(f,{withTypes:()=>f}),f}var qh=Ub();function Vh(i=Ht){const c=i===Ht?qh:Ub(i),f=()=>c().dispatch;return Object.assign(f,{withTypes:()=>f}),f}var Kh=Vh(),Qh=(i,c)=>i===c;function Xh(i=Ht){const c=i===Ht?Cb:cs(i),f=(s,d={})=>{const{equalityFn:p=Qh}=typeof d=="function"?{equalityFn:d}:d,y=c(),{store:O,subscription:S,getServerState:v}=y;$.useRef(!0);const N=$.useCallback({[s.name](j){return s(j)}}[s.name],[s]),L=Dh.useSyncExternalStoreWithSelector(S.addNestedSub,O.getState,v||O.getState,N,p);return $.useDebugValue(L),L};return Object.assign(f,{withTypes:()=>f}),f}var kh=Xh();const ct=Kh,me=kh;function In(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var Wh=typeof Symbol=="function"&&Symbol.observable||"@@observable",gb=Wh,Zc=()=>Math.random().toString(36).substring(7).split("").join("."),Zh={INIT:`@@redux/INIT${Zc()}`,REPLACE:`@@redux/REPLACE${Zc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Zc()}`},pi=Zh;function ss(i){if(typeof i!="object"||i===null)return!1;let c=i;for(;Object.getPrototypeOf(c)!==null;)c=Object.getPrototypeOf(c);return Object.getPrototypeOf(i)===c||Object.getPrototypeOf(i)===null}function Hb(i,c,f){if(typeof i!="function")throw new Error(In(2));if(typeof c=="function"&&typeof f=="function"||typeof f=="function"&&typeof arguments[3]=="function")throw new Error(In(0));if(typeof c=="function"&&typeof f>"u"&&(f=c,c=void 0),typeof f<"u"){if(typeof f!="function")throw new Error(In(1));return f(Hb)(i,c)}let s=i,d=c,p=new Map,y=p,O=0,S=!1;function v(){y===p&&(y=new Map,p.forEach((P,bn)=>{y.set(bn,P)}))}function N(){if(S)throw new Error(In(3));return d}function L(P){if(typeof P!="function")throw new Error(In(4));if(S)throw new Error(In(5));let bn=!0;v();const sn=O++;return y.set(sn,P),function(){if(bn){if(S)throw new Error(In(6));bn=!1,v(),y.delete(sn),p=null}}}function j(P){if(!ss(P))throw new Error(In(7));if(typeof P.type>"u")throw new Error(In(8));if(typeof P.type!="string")throw new Error(In(17));if(S)throw new Error(In(9));try{S=!0,d=s(d,P)}finally{S=!1}return(p=y).forEach(sn=>{sn()}),P}function W(P){if(typeof P!="function")throw new Error(In(10));s=P,j({type:pi.REPLACE})}function J(){const P=L;return{subscribe(bn){if(typeof bn!="object"||bn===null)throw new Error(In(11));function sn(){const Z=bn;Z.next&&Z.next(N())}return sn(),{unsubscribe:P(sn)}},[gb](){return this}}}return j({type:pi.INIT}),{dispatch:j,subscribe:L,getState:N,replaceReducer:W,[gb]:J}}function Ih(i){Object.keys(i).forEach(c=>{const f=i[c];if(typeof f(void 0,{type:pi.INIT})>"u")throw new Error(In(12));if(typeof f(void 0,{type:pi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(In(13))})}function Jh(i){const c=Object.keys(i),f={};for(let p=0;p<c.length;p++){const y=c[p];typeof i[y]=="function"&&(f[y]=i[y])}const s=Object.keys(f);let d;try{Ih(f)}catch(p){d=p}return function(y={},O){if(d)throw d;let S=!1;const v={};for(let N=0;N<s.length;N++){const L=s[N],j=f[L],W=y[L],J=j(W,O);if(typeof J>"u")throw O&&O.type,new Error(In(14));v[L]=J,S=S||J!==W}return S=S||s.length!==Object.keys(y).length,S?v:y}}function hi(...i){return i.length===0?c=>c:i.length===1?i[0]:i.reduce((c,f)=>(...s)=>c(f(...s)))}function Ph(...i){return c=>(f,s)=>{const d=c(f,s);let p=()=>{throw new Error(In(15))};const y={getState:d.getState,dispatch:(S,...v)=>p(S,...v)},O=i.map(S=>S(y));return p=hi(...O)(d.dispatch),{...d,dispatch:p}}}function Fh(i){return ss(i)&&"type"in i&&typeof i.type=="string"}var Lb=Symbol.for("immer-nothing"),Sb=Symbol.for("immer-draftable"),ve=Symbol.for("immer-state");function ze(i,...c){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var kr=Object.getPrototypeOf;function er(i){return!!i&&!!i[ve]}function ut(i){var c;return i?Bb(i)||Array.isArray(i)||!!i[Sb]||!!((c=i.constructor)!=null&&c[Sb])||Ei(i)||Ri(i):!1}var $h=Object.prototype.constructor.toString();function Bb(i){if(!i||typeof i!="object")return!1;const c=kr(i);if(c===null)return!0;const f=Object.hasOwnProperty.call(c,"constructor")&&c.constructor;return f===Object?!0:typeof f=="function"&&Function.toString.call(f)===$h}function yi(i,c){Ai(i)===0?Reflect.ownKeys(i).forEach(f=>{c(f,i[f],i)}):i.forEach((f,s)=>c(s,f,i))}function Ai(i){const c=i[ve];return c?c.type_:Array.isArray(i)?1:Ei(i)?2:Ri(i)?3:0}function $c(i,c){return Ai(i)===2?i.has(c):Object.prototype.hasOwnProperty.call(i,c)}function wb(i,c,f){const s=Ai(i);s===2?i.set(c,f):s===3?i.add(f):i[c]=f}function ny(i,c){return i===c?i!==0||1/i===1/c:i!==i&&c!==c}function Ei(i){return i instanceof Map}function Ri(i){return i instanceof Set}function $t(i){return i.copy_||i.base_}function ns(i,c){if(Ei(i))return new Map(i);if(Ri(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const f=Bb(i);if(c===!0||c==="class_only"&&!f){const s=Object.getOwnPropertyDescriptors(i);delete s[ve];let d=Reflect.ownKeys(s);for(let p=0;p<d.length;p++){const y=d[p],O=s[y];O.writable===!1&&(O.writable=!0,O.configurable=!0),(O.get||O.set)&&(s[y]={configurable:!0,writable:!0,enumerable:O.enumerable,value:i[y]})}return Object.create(kr(i),s)}else{const s=kr(i);if(s!==null&&f)return{...i};const d=Object.create(s);return Object.assign(d,i)}}function os(i,c=!1){return Ti(i)||er(i)||!ut(i)||(Ai(i)>1&&(i.set=i.add=i.clear=i.delete=ey),Object.freeze(i),c&&Object.entries(i).forEach(([f,s])=>os(s,!0))),i}function ey(){ze(2)}function Ti(i){return Object.isFrozen(i)}var ty={};function tr(i){const c=ty[i];return c||ze(0,i),c}var Wa;function zb(){return Wa}function ry(i,c){return{drafts_:[],parent_:i,immer_:c,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ab(i,c){c&&(tr("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=c)}function es(i){ts(i),i.drafts_.forEach(ay),i.drafts_=null}function ts(i){i===Wa&&(Wa=i.parent_)}function Eb(i){return Wa=ry(Wa,i)}function ay(i){const c=i[ve];c.type_===0||c.type_===1?c.revoke_():c.revoked_=!0}function Rb(i,c){c.unfinalizedDrafts_=c.drafts_.length;const f=c.drafts_[0];return i!==void 0&&i!==f?(f[ve].modified_&&(es(c),ze(4)),ut(i)&&(i=mi(c,i),c.parent_||vi(c,i)),c.patches_&&tr("Patches").generateReplacementPatches_(f[ve].base_,i,c.patches_,c.inversePatches_)):i=mi(c,f,[]),es(c),c.patches_&&c.patchListener_(c.patches_,c.inversePatches_),i!==Lb?i:void 0}function mi(i,c,f){if(Ti(c))return c;const s=c[ve];if(!s)return yi(c,(d,p)=>Tb(i,s,c,d,p,f)),c;if(s.scope_!==i)return c;if(!s.modified_)return vi(i,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const d=s.copy_;let p=d,y=!1;s.type_===3&&(p=new Set(d),d.clear(),y=!0),yi(p,(O,S)=>Tb(i,s,d,O,S,f,y)),vi(i,d,!1),f&&i.patches_&&tr("Patches").generatePatches_(s,f,i.patches_,i.inversePatches_)}return s.copy_}function Tb(i,c,f,s,d,p,y){if(er(d)){const O=p&&c&&c.type_!==3&&!$c(c.assigned_,s)?p.concat(s):void 0,S=mi(i,d,O);if(wb(f,s,S),er(S))i.canAutoFreeze_=!1;else return}else y&&f.add(d);if(ut(d)&&!Ti(d)){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1)return;mi(i,d),(!c||!c.scope_.parent_)&&typeof s!="symbol"&&Object.prototype.propertyIsEnumerable.call(f,s)&&vi(i,d)}}function vi(i,c,f=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&os(c,f)}function ly(i,c){const f=Array.isArray(i),s={type_:f?1:0,scope_:c?c.scope_:zb(),modified_:!1,finalized_:!1,assigned_:{},parent_:c,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=s,p=fs;f&&(d=[s],p=Za);const{revoke:y,proxy:O}=Proxy.revocable(d,p);return s.draft_=O,s.revoke_=y,O}var fs={get(i,c){if(c===ve)return i;const f=$t(i);if(!$c(f,c))return iy(i,f,c);const s=f[c];return i.finalized_||!ut(s)?s:s===Ic(i.base_,c)?(Jc(i),i.copy_[c]=as(s,i)):s},has(i,c){return c in $t(i)},ownKeys(i){return Reflect.ownKeys($t(i))},set(i,c,f){const s=jb($t(i),c);if(s!=null&&s.set)return s.set.call(i.draft_,f),!0;if(!i.modified_){const d=Ic($t(i),c),p=d==null?void 0:d[ve];if(p&&p.base_===f)return i.copy_[c]=f,i.assigned_[c]=!1,!0;if(ny(f,d)&&(f!==void 0||$c(i.base_,c)))return!0;Jc(i),rs(i)}return i.copy_[c]===f&&(f!==void 0||c in i.copy_)||Number.isNaN(f)&&Number.isNaN(i.copy_[c])||(i.copy_[c]=f,i.assigned_[c]=!0),!0},deleteProperty(i,c){return Ic(i.base_,c)!==void 0||c in i.base_?(i.assigned_[c]=!1,Jc(i),rs(i)):delete i.assigned_[c],i.copy_&&delete i.copy_[c],!0},getOwnPropertyDescriptor(i,c){const f=$t(i),s=Reflect.getOwnPropertyDescriptor(f,c);return s&&{writable:!0,configurable:i.type_!==1||c!=="length",enumerable:s.enumerable,value:f[c]}},defineProperty(){ze(11)},getPrototypeOf(i){return kr(i.base_)},setPrototypeOf(){ze(12)}},Za={};yi(fs,(i,c)=>{Za[i]=function(){return arguments[0]=arguments[0][0],c.apply(this,arguments)}});Za.deleteProperty=function(i,c){return Za.set.call(this,i,c,void 0)};Za.set=function(i,c,f){return fs.set.call(this,i[0],c,f,i[0])};function Ic(i,c){const f=i[ve];return(f?$t(f):i)[c]}function iy(i,c,f){var d;const s=jb(c,f);return s?"value"in s?s.value:(d=s.get)==null?void 0:d.call(i.draft_):void 0}function jb(i,c){if(!(c in i))return;let f=kr(i);for(;f;){const s=Object.getOwnPropertyDescriptor(f,c);if(s)return s;f=kr(f)}}function rs(i){i.modified_||(i.modified_=!0,i.parent_&&rs(i.parent_))}function Jc(i){i.copy_||(i.copy_=ns(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var uy=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(c,f,s)=>{if(typeof c=="function"&&typeof f!="function"){const p=f;f=c;const y=this;return function(S=p,...v){return y.produce(S,N=>f.call(this,N,...v))}}typeof f!="function"&&ze(6),s!==void 0&&typeof s!="function"&&ze(7);let d;if(ut(c)){const p=Eb(this),y=as(c,void 0);let O=!0;try{d=f(y),O=!1}finally{O?es(p):ts(p)}return Ab(p,s),Rb(d,p)}else if(!c||typeof c!="object"){if(d=f(c),d===void 0&&(d=c),d===Lb&&(d=void 0),this.autoFreeze_&&os(d,!0),s){const p=[],y=[];tr("Patches").generateReplacementPatches_(c,d,p,y),s(p,y)}return d}else ze(1,c)},this.produceWithPatches=(c,f)=>{if(typeof c=="function")return(y,...O)=>this.produceWithPatches(y,S=>c(S,...O));let s,d;return[this.produce(c,f,(y,O)=>{s=y,d=O}),s,d]},typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof(i==null?void 0:i.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy)}createDraft(i){ut(i)||ze(8),er(i)&&(i=cy(i));const c=Eb(this),f=as(i,void 0);return f[ve].isManual_=!0,ts(c),f}finishDraft(i,c){const f=i&&i[ve];(!f||!f.isManual_)&&ze(9);const{scope_:s}=f;return Ab(s,c),Rb(void 0,s)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}applyPatches(i,c){let f;for(f=c.length-1;f>=0;f--){const d=c[f];if(d.path.length===0&&d.op==="replace"){i=d.value;break}}f>-1&&(c=c.slice(f+1));const s=tr("Patches").applyPatches_;return er(i)?s(i,c):this.produce(i,d=>s(d,c))}};function as(i,c){const f=Ei(i)?tr("MapSet").proxyMap_(i,c):Ri(i)?tr("MapSet").proxySet_(i,c):ly(i,c);return(c?c.scope_:zb()).drafts_.push(f),f}function cy(i){return er(i)||ze(10,i),Gb(i)}function Gb(i){if(!ut(i)||Ti(i))return i;const c=i[ve];let f;if(c){if(!c.modified_)return c.base_;c.finalized_=!0,f=ns(i,c.scope_.immer_.useStrictShallowCopy_)}else f=ns(i,!0);return yi(f,(s,d)=>{wb(f,s,Gb(d))}),c&&(c.finalized_=!1),f}var ge=new uy,Yb=ge.produce;ge.produceWithPatches.bind(ge);ge.setAutoFreeze.bind(ge);ge.setUseStrictShallowCopy.bind(ge);ge.applyPatches.bind(ge);ge.createDraft.bind(ge);ge.finishDraft.bind(ge);function qb(i){return({dispatch:f,getState:s})=>d=>p=>typeof p=="function"?p(f,s,i):d(p)}var sy=qb(),oy=qb,fy=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?hi:hi.apply(null,arguments)};function _b(i,c){function f(...s){if(c){let d=c(...s);if(!d)throw new Error(it(0));return{type:i,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:i,payload:s[0]}}return f.toString=()=>`${i}`,f.type=i,f.match=s=>Fh(s)&&s.type===i,f}var Vb=class ka extends Array{constructor(...c){super(...c),Object.setPrototypeOf(this,ka.prototype)}static get[Symbol.species](){return ka}concat(...c){return super.concat.apply(this,c)}prepend(...c){return c.length===1&&Array.isArray(c[0])?new ka(...c[0].concat(this)):new ka(...c.concat(this))}};function Ob(i){return ut(i)?Yb(i,()=>{}):i}function oi(i,c,f){return i.has(c)?i.get(c):i.set(c,f(c)).get(c)}function dy(i){return typeof i=="boolean"}var by=()=>function(c){const{thunk:f=!0,immutableCheck:s=!0,serializableCheck:d=!0,actionCreatorCheck:p=!0}=c??{};let y=new Vb;return f&&(dy(f)?y.push(sy):y.push(oy(f.extraArgument))),y},py="RTK_autoBatch",Nb=i=>c=>{setTimeout(c,i)},hy=(i={type:"raf"})=>c=>(...f)=>{const s=c(...f);let d=!0,p=!1,y=!1;const O=new Set,S=i.type==="tick"?queueMicrotask:i.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Nb(10):i.type==="callback"?i.queueNotification:Nb(i.timeout),v=()=>{y=!1,p&&(p=!1,O.forEach(N=>N()))};return Object.assign({},s,{subscribe(N){const L=()=>d&&N(),j=s.subscribe(L);return O.add(N),()=>{j(),O.delete(N)}},dispatch(N){var L;try{return d=!((L=N==null?void 0:N.meta)!=null&&L[py]),p=!d,p&&(y||(y=!0,S(v))),s.dispatch(N)}finally{d=!0}}})},yy=i=>function(f){const{autoBatch:s=!0}=f??{};let d=new Vb(i);return s&&d.push(hy(typeof s=="object"?s:void 0)),d};function my(i){const c=by(),{reducer:f=void 0,middleware:s,devTools:d=!0,preloadedState:p=void 0,enhancers:y=void 0}=i||{};let O;if(typeof f=="function")O=f;else if(ss(f))O=Jh(f);else throw new Error(it(1));let S;typeof s=="function"?S=s(c):S=c();let v=hi;d&&(v=fy({trace:!1,...typeof d=="object"&&d}));const N=Ph(...S),L=yy(N);let j=typeof y=="function"?y(L):L();const W=v(...j);return Hb(O,p,W)}function Kb(i){const c={},f=[];let s;const d={addCase(p,y){const O=typeof p=="string"?p:p.type;if(!O)throw new Error(it(28));if(O in c)throw new Error(it(29));return c[O]=y,d},addMatcher(p,y){return f.push({matcher:p,reducer:y}),d},addDefaultCase(p){return s=p,d}};return i(d),[c,f,s]}function vy(i){return typeof i=="function"}function gy(i,c){let[f,s,d]=Kb(c),p;if(vy(i))p=()=>Ob(i());else{const O=Ob(i);p=()=>O}function y(O=p(),S){let v=[f[S.type],...s.filter(({matcher:N})=>N(S)).map(({reducer:N})=>N)];return v.filter(N=>!!N).length===0&&(v=[d]),v.reduce((N,L)=>{if(L)if(er(N)){const W=L(N,S);return W===void 0?N:W}else{if(ut(N))return Yb(N,j=>L(j,S));{const j=L(N,S);if(j===void 0){if(N===null)return N;throw Error("A case reducer on a non-draftable value must not return undefined")}return j}}return N},O)}return y.getInitialState=p,y}var Sy=Symbol.for("rtk-slice-createasyncthunk");function Ay(i,c){return`${i}/${c}`}function Ey({creators:i}={}){var f;const c=(f=i==null?void 0:i.asyncThunk)==null?void 0:f[Sy];return function(d){const{name:p,reducerPath:y=p}=d;if(!p)throw new Error(it(11));const O=(typeof d.reducers=="function"?d.reducers(_y()):d.reducers)||{},S=Object.keys(O),v={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},N={addCase(Z,H){const F=typeof Z=="string"?Z:Z.type;if(!F)throw new Error(it(12));if(F in v.sliceCaseReducersByType)throw new Error(it(13));return v.sliceCaseReducersByType[F]=H,N},addMatcher(Z,H){return v.sliceMatchers.push({matcher:Z,reducer:H}),N},exposeAction(Z,H){return v.actionCreators[Z]=H,N},exposeCaseReducer(Z,H){return v.sliceCaseReducersByName[Z]=H,N}};S.forEach(Z=>{const H=O[Z],F={reducerName:Z,type:Ay(p,Z),createNotation:typeof d.reducers=="function"};Ny(H)?xy(F,H,N,c):Oy(F,H,N)});function L(){const[Z={},H=[],F=void 0]=typeof d.extraReducers=="function"?Kb(d.extraReducers):[d.extraReducers],hn={...Z,...v.sliceCaseReducersByType};return gy(d.initialState,mn=>{for(let vn in hn)mn.addCase(vn,hn[vn]);for(let vn of v.sliceMatchers)mn.addMatcher(vn.matcher,vn.reducer);for(let vn of H)mn.addMatcher(vn.matcher,vn.reducer);F&&mn.addDefaultCase(F)})}const j=Z=>Z,W=new Map,J=new WeakMap;let K;function P(Z,H){return K||(K=L()),K(Z,H)}function bn(){return K||(K=L()),K.getInitialState()}function sn(Z,H=!1){function F(mn){let vn=mn[Z];return typeof vn>"u"&&H&&(vn=oi(J,F,bn)),vn}function hn(mn=j){const vn=oi(W,H,()=>new WeakMap);return oi(vn,mn,()=>{const Ce={};for(const[ee,wn]of Object.entries(d.selectors??{}))Ce[ee]=Ry(wn,mn,()=>oi(J,mn,bn),H);return Ce})}return{reducerPath:Z,getSelectors:hn,get selectors(){return hn(F)},selectSlice:F}}const on={name:p,reducer:P,actions:v.actionCreators,caseReducers:v.sliceCaseReducersByName,getInitialState:bn,...sn(y),injectInto(Z,{reducerPath:H,...F}={}){const hn=H??y;return Z.inject({reducerPath:hn,reducer:P},F),{...on,...sn(hn,!0)}}};return on}}function Ry(i,c,f,s){function d(p,...y){let O=c(p);return typeof O>"u"&&s&&(O=f()),i(O,...y)}return d.unwrapped=i,d}var Ty=Ey();function _y(){function i(c,f){return{_reducerDefinitionType:"asyncThunk",payloadCreator:c,...f}}return i.withTypes=()=>i,{reducer(c){return Object.assign({[c.name](...f){return c(...f)}}[c.name],{_reducerDefinitionType:"reducer"})},preparedReducer(c,f){return{_reducerDefinitionType:"reducerWithPrepare",prepare:c,reducer:f}},asyncThunk:i}}function Oy({type:i,reducerName:c,createNotation:f},s,d){let p,y;if("reducer"in s){if(f&&!Dy(s))throw new Error(it(17));p=s.reducer,y=s.prepare}else p=s;d.addCase(i,p).exposeCaseReducer(c,p).exposeAction(c,y?_b(i,y):_b(i))}function Ny(i){return i._reducerDefinitionType==="asyncThunk"}function Dy(i){return i._reducerDefinitionType==="reducerWithPrepare"}function xy({type:i,reducerName:c},f,s,d){if(!d)throw new Error(it(18));const{payloadCreator:p,fulfilled:y,pending:O,rejected:S,settled:v,options:N}=f,L=d(i,p,N);s.exposeAction(c,L),y&&s.addCase(L.fulfilled,y),O&&s.addCase(L.pending,O),S&&s.addCase(L.rejected,S),v&&s.addMatcher(L.settled,v),s.exposeCaseReducer(c,{fulfilled:y||fi,pending:O||fi,rejected:S||fi,settled:v||fi})}function fi(){}function it(i){return`Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}const My={hero:"Ashe",cash:11e3,equipped:Array(2).fill(""),toBuy:6,avoid:[],avoidEnabled:!1,weights:[{type:"",weight:1}],error:"",minValueEnabled:!1,minAttrGroups:[]},Qb=Ty({name:"input",initialState:My,reducers:{setHero(i,c){i.hero=c.payload},setCash(i,c){i.cash=c.payload},setEquipped(i,c){i.equipped[c.payload.index]=c.payload.id},addEquippedSlot(i){i.equipped.length<6&&i.equipped.push("")},setToBuy(i,c){i.toBuy=c.payload},addAvoid(i,c){i.avoid.includes(c.payload)||i.avoid.push(c.payload)},removeAvoid(i,c){i.avoid=i.avoid.filter(f=>f!==c.payload)},toggleAvoidEnabled(i){i.avoidEnabled=!i.avoidEnabled},setWeightType(i,c){i.weights[c.payload.index].type=c.payload.type},setWeightValue(i,c){i.weights[c.payload.index].weight=c.payload.value},addWeightRow(i,c){i.weights.push({type:c.payload,weight:1})},removeWeightRow(i,c){i.weights.splice(c.payload,1)},setError(i,c){i.error=c.payload},toggleMinValueEnabled(i){i.minValueEnabled=!i.minValueEnabled},addMinGroup(i){i.minAttrGroups.push({attrs:[],value:0})},removeMinGroup(i,c){i.minAttrGroups.splice(c.payload,1)},setMinGroupValue(i,c){i.minAttrGroups[c.payload.index].value=c.payload.value},addAttrToGroup(i,c){const f=i.minAttrGroups[c.payload.index];f.attrs.includes(c.payload.attr)||f.attrs.push(c.payload.attr)},removeAttrFromGroup(i,c){const f=i.minAttrGroups[c.payload.index];f.attrs=f.attrs.filter(s=>s!==c.payload.attr)}}}),{setHero:Cy,setCash:Uy,setEquipped:Db,setToBuy:Xb,addAvoid:Hy,removeAvoid:Ly,toggleAvoidEnabled:By,setWeightType:kb,setWeightValue:wy,addWeightRow:zy,removeWeightRow:jy,setError:di,toggleMinValueEnabled:Gy,addMinGroup:Yy,removeMinGroup:qy,setMinGroupValue:Vy,addAttrToGroup:Ky,removeAttrFromGroup:Qy,addEquippedSlot:Xy}=Qb.actions,ky=Qb.reducer;function Wy({heroes:i}){const c=me(s=>s.input.present.hero),f=ct();return g.jsxs("div",{children:[g.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium text-gray-700 mb-1",children:"Hero"}),g.jsx(Ia,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...i.map(s=>({value:s,label:s}))],value:c,onChange:s=>f(Cy(s))})]})}function ds({value:i,onChange:c,min:f,max:s,step:d,placeholder:p,className:y,label:O}){const[S,v]=$.useState(i.toString());$.useEffect(()=>{v(i.toString())},[i]);const N=L=>{const j=L.target.value;if(v(j),j===""||j==="-")return;const W=Number(j);isNaN(W)||c(W)};return g.jsx("div",{className:`relative inline-block ${y||""}`,children:g.jsx("input",{type:"number",className:`block w-full px-3 py-2 text-sm font-medium text-gray-700 rounded border border-gray-300 bg-white shadow-sm
                    transition-colors focus:border-indigo-500 focus:ring-indigo-500`,value:S,onChange:N,inputMode:"decimal",pattern:".*",min:f,max:s,step:d,placeholder:p,"aria-label":O||p||"Number input"})})}function Zy(){const i=me(f=>f.input.present.cash),c=ct();return g.jsxs("div",{children:[g.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium text-gray-700",children:"Total Cash"}),g.jsx(ds,{value:i,onChange:f=>c(Uy(f)),min:0,label:"Total Cash",className:"mt-1"})]})}function Iy(i){const c=i.match(/[-+]?\d+(?:\.\d+)?/);return c?parseFloat(c[0]):0}function ls(i){const c=new Map;return i.forEach(f=>{f.attributes.forEach(s=>{const d=Iy(s.value);c.set(s.type,(c.get(s.type)??0)+d)})}),c}function xb(i,c){let f=0;return c.forEach(s=>{f+=(i.get(s.type)??0)*s.weight}),f}function gi(i){switch(i){case"common":return"green";case"rare":return"blue";case"epic":return"purple";default:return"black"}}function Jy(i,c){const f=ls(i);return c.every(s=>s.attrs.reduce((p,y)=>p+(f.get(y)??0),0)>=s.value)}function rr(i){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[i]||i}function Py(i,c){const f=["WP","AP","AS"],s=f.indexOf(i),d=f.indexOf(c);return s!==-1&&d!==-1?s-d:s!==-1?-1:d!==-1?1:i.localeCompare(c)}function Wb(i,c){const f={common:0,rare:1,epic:2},s=f[i.rarity]-f[c.rarity];return s!==0?s:i.name.localeCompare(c.name)}function Fy({items:i}){const c=me(y=>y.input.present.equipped),f=ct(),[s,d]=$.useState(!1),p=y=>{d(y),y||c.forEach((O,S)=>f(Db({index:S,id:""})))};return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Equipped Items"}),g.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[g.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:s,onChange:y=>p(y.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),g.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm text-gray-700 select-none",children:"Use Equipped Item"})]}),s&&g.jsxs("div",{className:"space-y-4 mt-1",children:[c.map((y,O)=>g.jsx(Ia,{label:`Equipped Slot ${O+1}`,placeholder:"None",options:[{value:"",label:"None"},...i.sort(Wb).map(S=>({value:S.id||S.name,label:`${S.name} (${S.cost}) ${S.attributes.filter(v=>v.type!=="description").map(v=>`${rr(v.type)}-${v.value}`).join(", ")}`,color:gi(S.rarity)}))],value:y,onChange:S=>f(Db({index:O,id:S})),className:"w-full"},O)),c.length<6&&g.jsx("button",{type:"button",onClick:()=>f(Xy()),className:"inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50",children:"Add Slot"})]})]})}function Zb({label:i,onRemove:c}){return g.jsxs("span",{className:"flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800",children:[i,c&&g.jsx("button",{type:"button",className:"text-red-500 hover:text-red-700 text-lg leading-none",onClick:c,children:"×"})]})}function $y({items:i}){const c=me(y=>y.input.present.avoid),f=me(y=>y.input.present.avoidEnabled),s=ct(),[d,p]=$.useState("");return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Avoid Items"}),g.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[g.jsx("input",{id:"avoid-toggle",type:"checkbox",checked:f,onChange:()=>s(By()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),g.jsx("label",{htmlFor:"avoid-toggle",className:"text-sm text-gray-700 select-none",children:"Enable Avoid Items"})]}),f&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Ia,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...i.sort(Wb).map(y=>({value:y.id||y.name,label:`${y.name} (${y.cost})`,color:gi(y.rarity)}))],value:d,onChange:p,className:"flex-grow"}),g.jsx("button",{type:"button",className:"rounded bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300",onClick:()=>{d&&(s(Hy(d)),p(""))},children:"Add"})]}),c.length>0&&g.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:c.map(y=>{const O=i.find(S=>(S.id||S.name)===y);return g.jsx(Zb,{label:O?O.name:y,onRemove:()=>s(Ly(y))},y)})})]})]})}function nm({attrTypes:i}){const c=me(d=>d.input.present.weights),f=ct(),s=i.map(d=>({value:d,label:rr(d)}));return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Attribute Weights"}),g.jsx("div",{className:"space-y-4 mt-1",children:c.map((d,p)=>g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Ia,{label:"Attribute Type",placeholder:"Select type",options:s,value:d.type,onChange:y=>f(kb({index:p,type:y})),className:"flex-grow"}),g.jsx(ds,{value:d.weight,onChange:y=>f(wy({index:p,value:y})),min:0,max:100,step:.01,label:`Weight for ${rr(d.type)}`,className:"w-24"}),c.length>1&&g.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>f(jy(p)),children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},p))}),g.jsx("button",{type:"button",className:"mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>f(zy(i[0])),children:"Add Row"})]})}function em({attrTypes:i}){const c=ct(),f=me(p=>p.input.present.minValueEnabled),s=me(p=>p.input.present.minAttrGroups),d=i.map(p=>({value:p,label:rr(p)}));return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Minimum Attribute Totals"}),g.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[g.jsx("input",{id:"min-value-toggle",type:"checkbox",checked:f,onChange:()=>c(Gy()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),g.jsx("label",{htmlFor:"min-value-toggle",className:"text-sm text-gray-700 select-none",children:"Enable Minimum Values"})]}),f&&g.jsxs("div",{className:"space-y-4",children:[s.map((p,y)=>g.jsxs("div",{className:"rounded border p-3 space-y-2",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Target Value:"}),g.jsx(ds,{value:p.value,onChange:O=>c(Vy({index:y,value:O})),min:0,label:"Minimum Value",className:"w-24"}),s.length>1&&g.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>c(qy(y)),children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),g.jsx(Ia,{label:"Add Attribute",placeholder:"Add attribute",options:d.filter(O=>!p.attrs.includes(O.value)),value:"",onChange:O=>c(Ky({index:y,attr:O})),className:"w-full"}),p.attrs.length>0&&g.jsx("div",{className:"flex flex-wrap gap-2",children:p.attrs.map(O=>g.jsx(Zb,{label:rr(O),onRemove:()=>c(Qy({index:y,attr:O}))},O))})]},y)),g.jsx("button",{type:"button",className:"mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>c(Yy()),children:"Add Group"})]})]})}function tm({onSubmit:i,validate:c}){const f=ct(),s=me(p=>p.input.present.toBuy),d=me(p=>p.input.present.error);return g.jsxs("div",{className:"!mt-8 border-t pt-6",children:[g.jsx("button",{type:"button",onClick:()=>{c()&&i()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",disabled:!c(),children:"Calculate Optimal Build"}),g.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(p=>g.jsx("button",{type:"button",onClick:()=>f(Xb(p)),className:`rounded-lg py-2 text-sm font-medium ${s===p?"bg-indigo-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:p},p))}),d&&g.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800",children:d})]})}function rm({heroes:i,attrTypes:c,filteredItems:f,onSubmit:s,validate:d}){return g.jsxs("form",{onSubmit:p=>{p.preventDefault(),d()&&s()},className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[g.jsx(Wy,{heroes:i}),g.jsx(Zy,{}),g.jsx(Fy,{items:f}),g.jsx($y,{items:f}),g.jsx(em,{attrTypes:c}),g.jsx(nm,{attrTypes:c}),g.jsx(tm,{onSubmit:s,validate:d})]})}function am(i){return i.replace(/<[^>]*>/g,"")}function lm({eqItems:i,eqCost:c,cash:f,results:s,alternatives:d}){return g.jsxs("div",{className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"Results"}),s?g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[g.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[g.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Weighted Score"}),g.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600",children:s.score.toFixed(2)})]}),g.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[g.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Total Cost"}),g.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600",children:c+s.cost})]}),g.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[g.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Cash Remaining"}),g.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600",children:f-c-s.cost})]})]}),s.breakdown&&g.jsxs("div",{className:"text-sm text-gray-600",children:[g.jsx("strong",{children:"Breakdown:"}),g.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Type"}),g.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Sum"}),g.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Contribution"})]})}),g.jsx("tbody",{children:s.breakdown.map(p=>g.jsxs("tr",{children:[g.jsx("td",{className:"px-2 py-1",children:rr(p.type)}),g.jsx("td",{className:"px-2 py-1",children:p.sum}),g.jsx("td",{className:"px-2 py-1",children:p.contrib.toFixed(2)})]},p.type))})]})]}),g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Final Build"}),g.jsx("ul",{className:"mt-2 space-y-3",children:[...i,...s.items].map(p=>g.jsxs("li",{className:"block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm",style:{borderLeftColor:gi(p.rarity),borderLeftWidth:"4px"},children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("strong",{className:"font-semibold",style:{color:gi(p.rarity)},children:p.name}),g.jsxs("span",{className:"text-sm font-mono rounded-full bg-indigo-50 text-indigo-600 px-2 py-0.5",children:[p.cost," G"]})]}),g.jsx("ul",{className:"mt-2 text-xs text-gray-600 space-y-1",children:p.attributes.map((y,O)=>g.jsx("li",{className:"flex items-start",children:g.jsxs("span",{children:[g.jsxs("span",{className:"font-medium",children:[rr(y.type),":"]}),g.jsx("span",{className:"ml-1 text-gray-800 break-words",children:g.jsx("strong",{children:am(y.value)})})]})},O))})]},p.id))})]}),d.length>0&&g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Alternative Builds"}),g.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto",children:d.map((p,y)=>g.jsxs("li",{className:"text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100",children:[g.jsxs("strong",{children:["Cost: ",p.cost]})," - ",p.items.map(O=>O.name).join(", ")]},y))})]})]}):g.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 p-12",children:[g.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:g.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),g.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No results yet"}),g.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Fill out the form and click calculate to see the magic."})]})]})}function im(i,c){const d=Math.min(c?3.5:7,i*(c?.25:.5));return i-d}function um(i,c,f,s,d){if(i<=0||c<=0)return{shots:1/0,totalDamage:0};let p=f,y=s,O=0,S=0;for(;p>0;){O++;for(let v=0;v<c;v++){let N=i;if(y>0){N=im(N,d);const L=Math.min(N,y);y-=L,N-=L}if(p-=N,S+=i,p<=0)break}}return{shots:O,totalDamage:S}}function cm(i,c,f,s,d){const p=[];for(let y=100;y<=200;y+=5){const O=i*(y/100),{shots:S,totalDamage:v}=um(O,c,f,s,d);p.push({percent:y,shots:S,totalDamage:v})}return p}function sm(){const[i,c]=$.useState(!0),[f,s]=$.useState(75),[d,p]=$.useState(1),[y,O]=$.useState(300),[S,v]=$.useState(0),[N,L]=$.useState(!1),[j,W]=$.useState([]),J=()=>{W(cm(f,d,y,S,N))};return g.jsxs("div",{className:"bg-white rounded-xl shadow-lg",children:[g.jsx("button",{className:"w-full text-left p-4 font-bold text-xl border-b",onClick:()=>c(!i),children:"Break Point Damage Calculator"}),!i&&g.jsxs("div",{className:"p-4 space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm",children:"Damage per Bullet"}),g.jsx("input",{type:"number",value:f,onChange:K=>s(Number(K.target.value)),className:"w-full border rounded p-1"})]}),g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm",children:"Bullets per Shot"}),g.jsx("input",{type:"number",value:d,onChange:K=>p(Number(K.target.value)),className:"w-full border rounded p-1"})]}),g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm",children:"Enemy HP"}),g.jsx("input",{type:"number",value:y,onChange:K=>O(Number(K.target.value)),className:"w-full border rounded p-1"})]}),g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm",children:"Enemy Armor"}),g.jsx("input",{type:"number",value:S,onChange:K=>v(Number(K.target.value)),className:"w-full border rounded p-1"})]}),g.jsxs("label",{className:"flex items-center space-x-2 mt-6",children:[g.jsx("input",{type:"checkbox",checked:N,onChange:K=>L(K.target.checked)}),g.jsx("span",{children:"Using armor penetration item"})]})]}),g.jsx("button",{onClick:J,className:"bg-indigo-600 text-white px-4 py-1 rounded",children:"Calculate"}),j.length>0&&g.jsxs("table",{className:"w-full text-sm mt-4 border",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"border px-2 py-1",children:"Damage %"}),g.jsx("th",{className:"border px-2 py-1",children:"Per Bullet"}),g.jsx("th",{className:"border px-2 py-1",children:"Per Shot"}),g.jsx("th",{className:"border px-2 py-1",children:"Shots"}),g.jsx("th",{className:"border px-2 py-1",children:"Accumulated"})]})}),g.jsx("tbody",{children:j.map((K,P)=>{const bn=P>0?j[P-1].shots:K.shots,sn=K.shots<bn,on=f*K.percent/100,Z=on*d;return g.jsxs("tr",{className:sn?"bg-yellow-100":"",children:[g.jsxs("td",{className:"border px-2 py-1",children:[K.percent,"%"]}),g.jsx("td",{className:"border px-2 py-1",children:on.toFixed(1)}),g.jsx("td",{className:"border px-2 py-1",children:Z.toFixed(1)}),g.jsx("td",{className:"border px-2 py-1",children:K.shots}),g.jsx("td",{className:"border px-2 py-1",children:K.totalDamage.toFixed(1)})]},K.percent)})})]})]})]})}const om=`{\r
  "tabs": {\r
    "weapon": {\r
      "common": [\r
        {\r
          "name": "COMPENSATOR",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_0"\r
        },\r
        {\r
          "name": "PLASMA CONVERTER",\r
          "attributes": [\r
            {\r
              "type": "WPLS",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_1"\r
        },\r
        {\r
          "name": "WEAPON GREASE",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "5%"\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_2"\r
        },\r
        {\r
          "name": "AMMO RESERVES",\r
          "attributes": [\r
            {\r
              "type": "MA",\r
              "value": "20%"\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_3"\r
        },\r
        {\r
          "name": "FRENZY AMPLIFIER",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "Eliminations grant <b>10%</b> Attack Speed and <b>15%</b> Move Speed for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_4"\r
        }\r
      ],\r
      "rare": [\r
        {\r
          "name": "AFTERMARKET FIRING PIN",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "MS",\r
              "value": "5%"\r
            }\r
          ],\r
          "cost": 3750,\r
          "id": "i_5"\r
        },\r
        {\r
          "name": "ADVANCED NANOBIOTICS",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After healing an ally, gain <b>10%</b> Attack Speed for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_6"\r
        },\r
        {\r
          "name": "SHIELDBUSTER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After dealing damage to Shields or Armor, gain <b>15%</b> Attack Speed for <b>1s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_7"\r
        },\r
        {\r
          "name": "STOCKPILE",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "MA",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_8"\r
        },\r
        {\r
          "name": "TECHNOLEECH",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "WPLS",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 4500,\r
          "id": "i_9"\r
        },\r
        {\r
          "name": "ICY COOLANT",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            }\r
          ],\r
          "cost": 5500,\r
          "id": "i_10"\r
        },\r
        {\r
          "name": "TALON MODIFICATION MODULE",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            }\r
          ],\r
          "cost": 6000,\r
          "id": "i_11"\r
        },\r
        {\r
          "name": "GUTPUNCH GAUNTLET",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While not holding <b>[Jagged Blade]</b>, <b>[Quick Melee]</b> deals <b>75%</b> more damage and knocks back."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Junker Queen",\r
          "id": "i_12"\r
        },\r
        {\r
          "name": "MONARCH'S DECREE",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Commanding Shout]</b> grants you <b>15%</b> Attack Speed."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Junker Queen",\r
          "id": "i_13"\r
        },\r
        {\r
          "name": "ELECTRO LIGHTS",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Recover from being <b>[Overheated] 50%</b> faster."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_14"\r
        },\r
        {\r
          "name": "ENHANCED TARGET SENSORS",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "Deal <b>25%</b> more damage to enemies farther than <b>12m</b> away."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_15"\r
        },\r
        {\r
          "name": "OPTIMIZED ENERGY",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Critical hits reduce your <b>[Heat]</b> by <b>5%</b>."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Orisa",\r
          "id": "i_16"\r
        },\r
        {\r
          "name": "IRONCLAD CLEATS",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "Knockback Resist",\r
              "value": "40%"\r
            }\r
          ],\r
          "cost": 3750,\r
          "character": "Reinhardt",\r
          "id": "i_17"\r
        },\r
        {\r
          "name": "HYBRID BATTERY",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Energy]</b> cannot be reduced below <b>20</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Zarya",\r
          "id": "i_18"\r
        },\r
        {\r
          "name": "MAXED MAG",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Gain <b>3%</b> Attack Speed for each remaining Ammo above <b>50%</b> of your Max Ammo."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ashe",\r
          "id": "i_19"\r
        },\r
        {\r
          "name": "TRIPOD",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[The Viper]</b>, <b>[Coach Gun]</b>, and <b>[Dynamite]</b> deal <b>10%</b> more damage to enemies that are below you."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ashe",\r
          "id": "i_20"\r
        },\r
        {\r
          "name": "GREASED LOADER",\r
          "attributes": [\r
            {\r
              "type": "MA",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "RS",\r
              "value": "15%"\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Ashe",\r
          "id": "i_21"\r
        },\r
        {\r
          "name": "QUICKLOAD CHAMBER",\r
          "attributes": [\r
            {\r
              "type": "RS",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Reloading within <b>6m</b> of an enemy adds <b>20%</b> of Max Ammo as extra Ammo."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Cassidy",\r
          "id": "i_22"\r
        },\r
        {\r
          "name": "SPIKED GRIP",\r
          "attributes": [\r
            {\r
              "type": "MA",\r
              "value": "30%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While climbing, restore <b>20%</b> of your ammo every Is."\r
            }\r
          ],\r
          "cost": 3750,\r
          "character": "Genji",\r
          "id": "i_23"\r
        },\r
        {\r
          "name": "SPECTRAL SLUGS",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "MA",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Using <b>[Shadow Step]</b> restores <b>100%</b> of your ammo."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reaper",\r
          "id": "i_24"\r
        },\r
        {\r
          "name": "PULSE CONVERTER",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use <b>[Helix Rocket]</b>, restore <b>20%</b> of your ammo."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Soldier: 76",\r
          "id": "i_25"\r
        },\r
        {\r
          "name": "TARGET TRACKER",\r
          "attributes": [\r
            {\r
              "type": "Biotic Grenade Duration",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "For each enemy or ally affected by <b>[Biotic Grenade]</b>, gain <b>5%</b> Attack Speed, up to <b>25%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ana",\r
          "id": "i_26"\r
        },\r
        {\r
          "name": "POTENT PROJECTILES",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Unscoped <b>[Biotic Rifle]</b> projectiles are <b>100%</b> larger."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Ana",\r
          "id": "i_27"\r
        },\r
        {\r
          "name": "QUICK SCOPE",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Faster Scope Speed",\r
              "value": "200%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Deal <b>20%</b> more damage to airborne enemies."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Ana",\r
          "id": "i_28"\r
        },\r
        {\r
          "name": "VANTAGE SHOT",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While airborne, <b>[Mediblaster]</b> deals <b>15%</b> more damage."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Juno",\r
          "id": "i_29"\r
        },\r
        {\r
          "name": "ASA'S ARMAMENTS",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Kunai]</b> bounce off surfaces <b>1 time</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Kiriko",\r
          "id": "i_30"\r
        },\r
        {\r
          "name": "FARSIGHT FOCUS SASH",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you deal damage, gain <b>200%</b> <b>[Healing Ofuda]</b> Projectile Speed for <b>5s</b>."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Kiriko",\r
          "id": "i_31"\r
        },\r
        {\r
          "name": "TEAMWORK TOOLKIT",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you heal an ally, grant them <b>10%</b> Move Speed for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Kiriko",\r
          "id": "i_32"\r
        },\r
        {\r
          "name": "MID-AIR MOBILIZER",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "While airborne gain: <ul><li><b>5%</b> Weapon Power</li><li><b>10%</b> Attack Speed</li></ul>"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Mercy",\r
          "id": "i_33"\r
        },\r
        {\r
          "name": "BIO-NEEDLES",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Biotic Grasp]</b>'s secondary fire restores <b>50%</b> more <b>[Biotic Energy]</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Moira",\r
          "id": "i_34"\r
        },\r
        {\r
          "name": "HIGH CAPACITY TUBING",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Max [Biotic Energy]",\r
              "value": "50"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Moira",\r
          "id": "i_35"\r
        },\r
        {\r
          "name": "SLIPSTREAM SCARF",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "[Quick Dash] Distance",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Freja"\r
        },\r
        {\r
          "name": "TRACKER TAG",\r
          "attributes": [\r
            {\r
              "type": "MA",\r
              "value": "30%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When <b>[Take Aim]</b> bolt sticks an enemy, increase your Attack Speed by <b>20%</b> for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Freja"\r
        }\r
      ],\r
      "epic": [\r
        {\r
          "name": "CODEBREAKER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Ignore <b>50%</b> of Armor's damage reduction."\r
            }\r
          ],\r
          "cost": 9000,\r
          "id": "i_36"\r
        },\r
        {\r
          "name": "SALVAGED SLUGS",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Increased Damage to Barriers",\r
              "value": "30%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Dealing Weapon Damage to Barriers has a <b>50%</b> chance to restore <b>1</b> ammo."\r
            }\r
          ],\r
          "cost": 9500,\r
          "id": "i_37"\r
        },\r
        {\r
          "name": "VOLSKAYA ORDNANCE",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Deal <b>5%</b> increased Weapon Damage for every <b>100</b> Max Life the target has more than you, up to <b>20%</b>."\r
            }\r
          ],\r
          "cost": 9500,\r
          "id": "i_38"\r
        },\r
        {\r
          "name": "COMMANDER'S CLIP",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "MA",\r
              "value": "40%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, restore <b>10%</b> of your Max Ammo."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_39"\r
        },\r
        {\r
          "name": "WEAPON JAMMER",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Dealing Weapon Damage negates <b>10%</b> of the target's bonus Attack Speed and increase your Attack speed by <b>10%</b> for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_40"\r
        },\r
        {\r
          "name": "AMARI'S ANTIDOTE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While healing an ally below <b>50%</b> Life with your weapon, deal <b>15%</b> increased Weapon Healing"\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_41"\r
        },\r
        {\r
          "name": "BOOSTER JETS",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, gain <b>10%</b> Move Speed for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_42"\r
        },\r
        {\r
          "name": "EL-SA'KA SUPPRESOR",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Critical Hits apply <b>30% Healing Reduction</b> to the target for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_43"\r
        },\r
        {\r
          "name": "HARDLIGHT ACCELERATOR",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, gain <b>5%</b> Weapon Power for <b>3s</b>, stacking up to <b>3</b> times."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_44"\r
        },\r
        {\r
          "name": "THE CLOSER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "CD",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Critical Hits reveal the target for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 14500,\r
          "id": "i_45"\r
        },\r
        {\r
          "name": "EYE OF THE SPIDER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Deal <b>10%</b> increased damage to enemies below <b>30%</b> Life."\r
            }\r
          ],\r
          "cost": 14000,\r
          "id": "i_46"\r
        },\r
        {\r
          "name": "MULTI-TASK MOD",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Fusion Cannons]</b> can now be fired while using <b>[Defense Matrix]</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "D.VA",\r
          "id": "i_47"\r
        },\r
        {\r
          "name": "SHRED AND LEAD",\r
          "attributes": [\r
            {\r
              "type": "MA",\r
              "value": "33%"\r
            },\r
            {\r
              "type": "WPLS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you <b>[Wound</b> an enemy, gain <b>10%</b> Attack Speed for <b>4s</b>, stacking up to <b>3 times</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Junker Queen",\r
          "id": "i_48"\r
        },\r
        {\r
          "name": "BLOODHOUND MASK",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Gain <b>5%</b> Weapon Power for each enemy with a <b>[Wound]</b> within <b>12m</b>."\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "Junker Queen",\r
          "id": "i_49"\r
        },\r
        {\r
          "name": "DAMPENER GRIP",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you deal more damage with <b>[Rocket Hammer]</b>, reduce the cooldown of your abilities by <b>1s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reinhardt",\r
          "id": "i_50"\r
        },\r
        {\r
          "name": "PLAN Z",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Gain <b>3%</b> Attack Speed every <b>100</b> missing Life, up to <b>30%</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Reinhardt",\r
          "id": "i_51"\r
        },\r
        {\r
          "name": "LIGHT LAUNCHER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Consecutive <b>[Particle Cannon]</b> secondary fire shots consume <b>20%</b> less Ammo, up to <b>60%</b>, for your current magazine."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Zarya",\r
          "id": "i_52"\r
        },\r
        {\r
          "name": "BIGGER BEAM",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Particle Cannon]</b>'s primary fire range is increased by <b>20%</b>"\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Zarya",\r
          "id": "i_53"\r
        },\r
        {\r
          "name": "IRONSIGHTS",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When the target is further than <b>10m</b>, scoped shot gains <b>1%</b> damage for each meter."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Ashe",\r
          "id": "i_54"\r
        },\r
        {\r
          "name": "SIDEWINDER",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When the target is within <b>10m</b>, unscoped shot gains <b>25%</b> increased damage."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Ashe",\r
          "id": "i_55"\r
        },\r
        {\r
          "name": "COMPETITIVE ANALYSIS",\r
          "attributes": [\r
            {\r
              "type": "WPLS",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Deal <b>15%</b> increased primary fire damage to enemies in the <b>Damage role</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Cassidy",\r
          "id": "i_56"\r
        },\r
        {\r
          "name": "AMBUSHER OPTICS",\r
          "attributes": [\r
            {\r
              "type": "MD",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Quick Melee]</b> can critically hit when striking enemies from behind, dealing <b>50%</b> increased damage."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_57"\r
        },\r
        {\r
          "name": "ENDURING EDGE",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Dragonblade] Duration",\r
              "value": "+4s"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_58"\r
        },\r
        {\r
          "name": "SWIFT-LOADER",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "MA",\r
              "value": "30%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Damaging an enemy with <b>[Swift Strike]</b> restores <b>20%</b> of your ammo."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_59"\r
        },\r
        {\r
          "name": "FOCUSED FLURRIES",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Max Ammo is increased by <b>75%</b> but reloading takes <b>50%</b> longer."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_60"\r
        },\r
        {\r
          "name": "SNOWBOOT",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Frozen ground increases Mei's Movement Speed by <b>35%</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_61"\r
        },\r
        {\r
          "name": "HIMALAYAN HAT",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While within <b>[Blizzard]</b>, gain <b>10%</b> Attack Speed."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_62"\r
        },\r
        {\r
          "name": "ONSLAUGHT",\r
          "attributes": [\r
            {\r
              "type": "MA",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Every <b>3rd</b> shot fires both of your <b>[Hellfire Shotguns]</b>. The extra shot does not consume ammo but deals <b>80%</b> <b>reduced</b> damage."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reaper",\r
          "id": "i_63"\r
        },\r
        {\r
          "name": "PULSE SPIKE",\r
          "attributes": [\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Pulsar Torpedoes] Projectile Speed",\r
              "value": "35%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using <b>[Pulsar Torpedoes]</b>, gain <b>25%</b> Attack Speed for <b>4s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Juno",\r
          "id": "i_64"\r
        },\r
        {\r
          "name": "LONG RANGE BLASTER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Mediblaster]</b> deals <b>15%</b> increased damage and healing to targets farther than <b>12m</b> away."\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "Juno",\r
          "id": "i_65"\r
        },\r
        {\r
          "name": "GRAVITATIONAL PUSH",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "During <b>[Glide Boost]</b>, gain <b>20%</b> Attack Speed and your <b>[Quick Melee]</b> knocks enemies back."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Juno",\r
          "id": "i_66"\r
        },\r
        {\r
          "name": "RYŌTA'S RELOADER",\r
          "attributes": [\r
            {\r
              "type": "RS",\r
              "value": "35%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using an ability, restore <b>100%</b> of your ammo."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Kiriko",\r
          "id": "i_67"\r
        },\r
        {\r
          "name": "SPIRITS' GUIDANCE",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Healing Ofuda] Projectile Speed",\r
              "value": "100%"\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "Kiriko",\r
          "id": "i_68"\r
        },\r
        {\r
          "name": "B-SIDE BOP",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "MD",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using <b>[Soundwave]</b>, your next <b>[Quick Melee]</b> grants decaying Overhealth equal to <b>200%</b> of damage dealt."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Lúcio",\r
          "id": "i_69"\r
        },\r
        {\r
          "name": "RIFF REPEATER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Sonic Amplifier]</b> projectiles ricochet off walls <b>3</b> times."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Lúcio",\r
          "id": "i_70"\r
        },\r
        {\r
          "name": "CADUCEUS EX",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Caduceus Staff] Range",\r
              "value": "33%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mercy",\r
          "id": "i_71"\r
        },\r
        {\r
          "name": "CELESTIAL CLIP",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "MA",\r
              "value": "33%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Caduceus Blaster]</b> has a <b>10%</b> chance to fire an extra shot that doesn't consume additional ammo."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mercy",\r
          "id": "i_72"\r
        },\r
        {\r
          "name": "ALTERNATIVE ENERGY",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "AS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use <b>[Fade]</b>, refill your <b>[Biotic Energy]</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Moira",\r
          "id": "i_73"\r
        },\r
        {\r
          "name": "SUBATOMIC SPLITTER",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Biotic Grasp] Secondary Fire Range",\r
              "value": "15%"\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Moira",\r
          "id": "i_74"\r
        },\r
        {\r
          "name": "PORTABLE ZIPLINE",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Eliminations reset both charges of <b>[Quick Dash]</b> Cooldown."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Freja"\r
        }\r
      ]\r
    },\r
    "ability": {\r
      "common": [\r
        {\r
          "name": "CHARGED PLATING",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "After you spend your Ultimate Charge, gain <b>25</b> Armor and <b>10%</b> Ability Power for the rest of the round."\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_75"\r
        },\r
        {\r
          "name": "POWER PLAYBOOK",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_76"\r
        },\r
        {\r
          "name": "SHADY SPECTACLES",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_77"\r
        },\r
        {\r
          "name": "WINNING ATTITUDE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you die, gain <b>15%</b> Ultimate Charge."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_78"\r
        }\r
      ],\r
      "rare": [\r
        {\r
          "name": "CUSTOM STOCK",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 3750,\r
          "id": "i_79"\r
        },\r
        {\r
          "name": "BIOLIGHT OVERFLOW",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you spend your Ultimate Charge, grant nearby allies <b>50 Overhealth</b> for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_80"\r
        },\r
        {\r
          "name": "ENERGIZED BRACERS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "ALS",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_81"\r
        },\r
        {\r
          "name": "JUNKER WHATCHAMAJIG",\r
          "attributes": [\r
            {\r
              "type": "Starting Ultimate Charge",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_82"\r
        },\r
        {\r
          "name": "WRIST WRAPS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_83"\r
        },\r
        {\r
          "name": "MULTI-TOOL",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            }\r
          ],\r
          "cost": 4500,\r
          "id": "i_84"\r
        },\r
        {\r
          "name": "NANO COLA",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            }\r
          ],\r
          "cost": 6000,\r
          "id": "i_85"\r
        },\r
        {\r
          "name": "DAE-HYUN'S DETONATOR",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "If your <b>[Mech]</b> detonates while mid-air, increase <b>[Self-Destruct]</b> explosion damage and range by <b>200%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "D.VA",\r
          "id": "i_86"\r
        },\r
        {\r
          "name": "MASTERMIND'S MITIGATOR",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "Every <b>200</b> damage you mitigate with <b>[Defense Matrix]</b> reduces <b>[Micro Missiles]</b> cooldown by <b>1s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "D.VA",\r
          "id": "i_87"\r
        },\r
        {\r
          "name": "VESUVIUS PROTOCOL",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Using <b>[Self-Destruct]</b> drops lava nearby that deals <b class=\\"stat-ap\\">80</b> damage every <b>1s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "D.VA",\r
          "id": "i_88"\r
        },\r
        {\r
          "name": "BIGGER MAGNET",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Jagged Blade]</b>'s pull strength is increased by <b>35%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Junker Queen",\r
          "id": "i_89"\r
        },\r
        {\r
          "name": "ARCFINDER",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "<b>[Energy Javelin]</b> deals <b>25%</b> increased damage to enemies farther than <b>12m</b> away."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_90"\r
        },\r
        {\r
          "name": "ELITE ROTATOR CUFF",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Javelin Spin] Duration",\r
              "value": "35%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_91"\r
        },\r
        {\r
          "name": "BOOST RECYCLER",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "If <b>[Charge]</b> is interrupted by the enemy, refund <b>50%</b> of <b>[Charge]</b> cooldown."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reinhardt",\r
          "id": "i_92"\r
        },\r
        {\r
          "name": "CHIMERA'S MAW",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "[Fire Strike] Radius",\r
              "value": "50%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reinhardt",\r
          "id": "i_93"\r
        },\r
        {\r
          "name": "BEYOND BARRIER",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Projected Barrier] Range",\r
              "value": "20%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Zarya",\r
          "id": "i_94"\r
        },\r
        {\r
          "name": "FURNACE FUEL",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Cleansed Burns grant <b>3%</b> Ultimate Charge."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ashe",\r
          "id": "i_95"\r
        },\r
        {\r
          "name": "SILVER LIGHTER",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Damage dealt to <b>Burning</b> targets grants <b>20%</b> more Ultimate Charge."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ashe",\r
          "id": "i_96"\r
        },\r
        {\r
          "name": "BLACKWATCH TECH",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Deadeye]</b> eliminations reduce <b>[Flashbang]</b> max cooldown by <b>10%</b>, up to <b>40%</b> for the round."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Cassidy",\r
          "id": "i_97"\r
        },\r
        {\r
          "name": "STREAMLINED PONCHO",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Combat Roll]</b> reduces <b>[Flashbang]</b> cooldown by <b>2s</b>."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Cassidy",\r
          "id": "i_98"\r
        },\r
        {\r
          "name": "TRAVERSAL KINETICS",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "<b>[Swift Strike]</b> cooldown is reduced by <b>50%</b> if it deals no damage."\r
            }\r
          ],\r
          "cost": 3750,\r
          "character": "Genji",\r
          "id": "i_99"\r
        },\r
        {\r
          "name": "NINJA SOLES",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "Move Speed during [Deflect]",\r
              "value": "15%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Genji",\r
          "id": "i_100"\r
        },\r
        {\r
          "name": "BATTERY PACK",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Biotic Field Duration",\r
              "value": "40%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Soldier: 76",\r
          "id": "i_101"\r
        },\r
        {\r
          "name": "BOMB DIFFUSAL BOOTS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "Reduced [Helix Rocket] Self-Damage",\r
              "value": "90%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you damage yourself with <b>[Helix Rocket]</b>, it knocks you back <b>200%</b> further."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Soldier: 76",\r
          "id": "i_102"\r
        },\r
        {\r
          "name": "DOUBLE DOSAGE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Landing a <b>[Sleep Dart]</b> on target affected by <b>[Biotic Grenade]</b> reduces its cooldown by <b>35%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ana",\r
          "id": "i_103"\r
        },\r
        {\r
          "name": "LOCK-ON SHIELD",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While aiming <b>[Pulsar Torpedoes]</b>, gain Overhealth equal to <b>50%</b> of your max Shields."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Juno",\r
          "id": "i_104"\r
        },\r
        {\r
          "name": "LUX LOOP",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Hyper Ring] Duration",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Juno",\r
          "id": "i_105"\r
        },\r
        {\r
          "name": "EYE OF THE YOKAI",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Kitsune Rush] Duration",\r
              "value": "35%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Kiriko",\r
          "id": "i_106"\r
        },\r
        {\r
          "name": "CYCLIST GLOVES",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, gain <b>20%</b> Attack Speed for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 5000,\r
          "character": "Kiriko",\r
          "id": "i_107"\r
        },\r
        {\r
          "name": "#1 SINGLE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When allies leave your <b>[Crossfade]</b> area, the effect lingers for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Lúcio",\r
          "id": "i_108"\r
        },\r
        {\r
          "name": "LOFLY BEATS",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While in <b>[Speed Boost]</b>, <b>[Soundwave]</b> also knocks you back."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Lúcio",\r
          "id": "i_109"\r
        },\r
        {\r
          "name": "NANO BOOP",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Environmental Kills grant <b>[Nano Boost]</b> for <b>5s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Lúcio",\r
          "id": "i_110"\r
        },\r
        {\r
          "name": "LONG DISTANCE WINGS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Guardian Angel Range",\r
              "value": "33%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Mercy",\r
          "id": "i_111"\r
        },\r
        {\r
          "name": "SMART ORBS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Biotic Orb]</b> moves <b>50%</b> slower while it is healing or dealing damage."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Moira",\r
          "id": "i_112"\r
        },\r
        {\r
          "name": "LEVITATION SHAWL",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "During <b>[Coalescence]</b>, gain free flight."\r
            }\r
          ],\r
          "cost": 4500,\r
          "character": "Moira",\r
          "id": "i_113"\r
        },\r
        {\r
          "name": "REFRACTION TILES",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While <b>[Javelin Spin]</b> is active, gain <b>50%</b> damage reduction from beams."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa"\r
        },\r
        {\r
          "name": "WINDWALKER BOOTS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "[Updraft] Height",\r
              "value": "20%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Freja"\r
        }\r
      ],\r
      "epic": [\r
        {\r
          "name": "THREE-TAP TOMMYGUN",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "AS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using an ability, your next <b>3</b> instances of Weapon Damage deal additional damage equal to <b>3%</b> of the target's Life."\r
            }\r
          ],\r
          "cost": 9500,\r
          "id": "i_114"\r
        },\r
        {\r
          "name": "BIOTECH MAXIMIZER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability that heals, reduce its cooldown by <b>5%</b> for each unique ally it heals."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_115"\r
        },\r
        {\r
          "name": "CATALYTIC CRYSTAL",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Ability Damage and Healing grants <b>20%</b> more Ultimate Charge."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_116"\r
        },\r
        {\r
          "name": "LUMÉRICO FUSION DRIVE",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, restore <b>50</b> Armor or Shields over <b>2s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_117"\r
        },\r
        {\r
          "name": "SUPERFLEXOR",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you deal Weapon Damage or Healing, gain <b>5%</b> Ability Power for <b>3s</b>, stacking up to <b>5 times</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_118"\r
        },\r
        {\r
          "name": "CYBERVENOM",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Dealing Ability Damage applies <b>30%</b> <b>Healing Reduction</b> for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 10500,\r
          "id": "i_119"\r
        },\r
        {\r
          "name": "IRIDESCENT IRIS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After spending your Ultimate Charge, gain <b>100 Overhealth</b> for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_120"\r
        },\r
        {\r
          "name": "LIQUID NITROGEN",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Dealing Ability Damage slows the target's Move Speed by <b>20%</b> for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_121"\r
        },\r
        {\r
          "name": "MARK OF THE KITSUNE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, your next instance of Weapon Damage or Healing deals <b class=\\"stat-ap\\">25</b> bonus damage or healing."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_122"\r
        },\r
        {\r
          "name": "CHAMPION'S KIT",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "35%"\r
            }\r
          ],\r
          "cost": 14000,\r
          "id": "i_123"\r
        },\r
        {\r
          "name": "BUSAN BLASTER",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Light Gun]</b> gains a secondary fire, which charges up to fire a explosive piercing shot that deals <b class=\\"stat-ap\\">80</b> damage."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "D.VA",\r
          "id": "i_124"\r
        },\r
        {\r
          "name": "MACRO MISSILE",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "<b>[Micro Missiles]</b> deal <b>25%</b> increased damage and have significantly increased knockback."\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "D.VA",\r
          "id": "i_125"\r
        },\r
        {\r
          "name": "ONSLAUGHT ORDINANCE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "The quantity and duration of <b>[Micro Missiles]</b> is increased by <b>20%</b>."\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "D.VA",\r
          "id": "i_126"\r
        },\r
        {\r
          "name": "TINKER TRACKSUIT",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "ALS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Rampage]</b> and <b>[Carnage]</b> hits grant <b>10%</b> Attack Speed for <b>4s</b>."\r
            }\r
          ],\r
          "cost": 9500,\r
          "character": "Junker Queen",\r
          "id": "i_127"\r
        },\r
        {\r
          "name": "BOOMING VOICE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Commanding Shout] Radius",\r
              "value": "50%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Commanding Shout]</b> will affect allies that are out of line of sight."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Junker Queen",\r
          "id": "i_128"\r
        },\r
        {\r
          "name": "EFI'S THEOREM",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "[Fortify] Duration",\r
              "value": "50%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Orisa",\r
          "id": "i_129"\r
        },\r
        {\r
          "name": "3D-PRINTED LANCE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Energy Javelin]</b> cooldown is reduced by <b>15%</b>, but each use generates <b>25</b> <b>[Heat]</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Orisa",\r
          "id": "i_130"\r
        },\r
        {\r
          "name": "OLADELE-COPTER BLADES",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While using <b>[Javelin Spin]</b>, gain free flight and <b>20%</b> Move Speed."\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "Orisa",\r
          "id": "i_131"\r
        },\r
        {\r
          "name": "GRYPHON GLIDER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "ALS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "You can now fly during <b>[Charge]</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reinhardt",\r
          "id": "i_132"\r
        },\r
        {\r
          "name": "ROCKET STRIKE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Fire Strike Projectile Speed",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reinhardt",\r
          "id": "i_133"\r
        },\r
        {\r
          "name": "SUPERCONDUCTOR",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Barrier] Duration",\r
              "value": "40%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Zarya",\r
          "id": "i_134"\r
        },\r
        {\r
          "name": "LYNX'S DATADRIVE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Casting <b>[Projected Barrier]</b> on an ally refunds <b>20%</b> of <b>[Barrier]</b> Cooldown"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Zarya",\r
          "id": "i_135"\r
        },\r
        {\r
          "name": "INFRARED LENSES",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Deal <b>20%</b> increased damage to Burning enemies."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ashe",\r
          "id": "i_136"\r
        },\r
        {\r
          "name": "STACKED STICKS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Dynamite] Explosion Radius",\r
              "value": "40%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ashe",\r
          "id": "i_137"\r
        },\r
        {\r
          "name": "BUILD-A-BLAST BUCKSHOT",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Coach Gun]</b> has <b>50%</b> increased self knockback."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ashe",\r
          "id": "i_138"\r
        },\r
        {\r
          "name": "IMPROVISED DYNAMITE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Flashbang]</b> explosion radius is increased by <b>50%</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Cassidy",\r
          "id": "i_139"\r
        },\r
        {\r
          "name": "CLEAN SWEEP",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "ALS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Swift Strike] Width",\r
              "value": "50%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_140"\r
        },\r
        {\r
          "name": "DEFLECTING DASH",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "During <b>[Swift Strike]</b>, deflect incoming projectiles toward your reticle."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_141"\r
        },\r
        {\r
          "name": "STURDY SNOWFORT",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Ability Power is increased by <b>5%</b> per each spawned Ice Pillars."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_142"\r
        },\r
        {\r
          "name": "ECOPOINT CRYOBED",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "On near death, go into <b>[Cryo-Freeze]</b> and gain <b>15%</b> Ultimate Charge. Can happen once every round."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_143"\r
        },\r
        {\r
          "name": "ICY VEINS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Blizzard]</b> deals <b>100%</b> increased base damage."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_144"\r
        },\r
        {\r
          "name": "NIGHTCREEPER",\r
          "attributes": [\r
            {\r
              "type": "MS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Shadow Step] Cast Speed",\r
              "value": "30%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Using <b>[Wraith Form]</b> reduces the cooldown of <b>[Shadow Step]</b> by <b>2s</b>."\r
            }\r
          ],\r
          "cost": 9500,\r
          "character": "Reaper",\r
          "id": "i_145"\r
        },\r
        {\r
          "name": "WREATH OF RUIN",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "[Death Blossom] Radius",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "Move Speed during [Death Blossom]",\r
              "value": "20%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reaper",\r
          "id": "i_146"\r
        },\r
        {\r
          "name": "CROWD CONTROL",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Death Blossom]</b> gains <b>5%</b> Ability Power for each enemy within its range."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Reaper",\r
          "id": "i_147"\r
        },\r
        {\r
          "name": "ENDGAME EQUALIZER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you spend your Ultimate Charge, reset all cooldowns. While <b>[Tactical Visor]</b> is active, gain <b>20%</b> Cooldown Reduction."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Soldier: 76",\r
          "id": "i_148"\r
        },\r
        {\r
          "name": "RAPID RESPONSE RADIUS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "Biotic Field Radius",\r
              "value": "40%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Biotic Field]</b> heals allies below <b>50%</b> Life <b>10%</b> more."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Soldier: 76",\r
          "id": "i_149"\r
        },\r
        {\r
          "name": "LETHAL DOSE",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "50%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Sleep Dart]</b> direct hit deals <b class=\\"stat-ap\\">100</b> bonus damage."\r
            }\r
          ],\r
          "cost": 9000,\r
          "character": "Ana",\r
          "id": "i_150"\r
        },\r
        {\r
          "name": "CLUSTER CORE",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "25%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Biotic Grenade]</b> cooldown is reduced by <b>2s</b> for each target it hits."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ana",\r
          "id": "i_151"\r
        },\r
        {\r
          "name": "TRANQUILIZER",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "<b>[Sleep Dart]</b> gains: <ul><li><b>500%</b> Collision Size</li><li><b>100%</b> Projectile Speed</li><li><b>20%</b> <b>Sleep</b> Duration</li></ul>"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ana",\r
          "id": "i_152"\r
        },\r
        {\r
          "name": "GRENADIUS PIN",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "[Biotic Grenade] Radius",\r
              "value": "30%"\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "Ana",\r
          "id": "i_153"\r
        },\r
        {\r
          "name": "PULSTAR DESTROYERS",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Pulsar Torpedoes]</b> explode on hit, dealing <b class=\\"stat-ap\\">20</b> damage."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Juno",\r
          "id": "i_154"\r
        },\r
        {\r
          "name": "SOLAR SHIELDING",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Allies affected by <b>[Hyper Ring]</b> restore <b>25</b> Shields every Is."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Juno",\r
          "id": "i_155"\r
        },\r
        {\r
          "name": "RED PROMISE REGULATOR",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "50"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use <b>[Orbital Ray]</b>, reset your cooldowns."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Juno",\r
          "id": "i_156"\r
        },\r
        {\r
          "name": "DONUT DELIVERY",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Swift Step]</b> heals nearby allies by <b class=\\"stat-ap\\">80</b> Life over <b>2s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Kiriko",\r
          "id": "i_157"\r
        },\r
        {\r
          "name": "OUR BIKES",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Allies affected by <b>[Kitsune Rush]</b> are healed for <b class=\\"stat-ap\\">80</b> every Is."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Kiriko",\r
          "id": "i_158"\r
        },\r
        {\r
          "name": "TALISMAN OF VELOCITY",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Protection Suzu]</b> grants <b>25%</b> Attack Speed and <b>25%</b> Move Speed for <b>4s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Kiriko",\r
          "id": "i_159"\r
        },\r
        {\r
          "name": "AIRWAVES",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Sound Barrier]</b> effectiveness is increased by <b>25%</b> for every Is <b>[Sound Barrier]</b> is channeled, up to <b>50%</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Lúcio",\r
          "id": "i_160"\r
        },\r
        {\r
          "name": "ALL-OUT AUDITIVA",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Ampt It Up] Duration",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Lúcio",\r
          "id": "i_161"\r
        },\r
        {\r
          "name": "RESURRECTION RANGEFINDER",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "[Resurrection] Range",\r
              "value": "75%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mercy",\r
          "id": "i_162"\r
        },\r
        {\r
          "name": "ANGELIC ACROBATICS",\r
          "attributes": [\r
            {\r
              "type": "Guardian Angel Move Speed",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "[Guardian Angell's cooldown starts as soon as you jump or crouch."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mercy",\r
          "id": "i_163"\r
        },\r
        {\r
          "name": "COALEGION",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Allies healed by <b>[Coalescence]</b> deal <b>15%</b> increased damage."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Moira",\r
          "id": "i_164"\r
        },\r
        {\r
          "name": "EXTENDRILS",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Biotic Orb] Tendril Range",\r
              "value": "30%"\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Moira",\r
          "id": "i_165"\r
        },\r
        {\r
          "name": "MAGNETIC MAELSTROM",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Bola Shot]</b> pulls in nearby enemies even when it misses with <b>50%</b> <b>reduced</b> pull strength."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Freja"\r
        }\r
      ]\r
    },\r
    "survival": {\r
      "common": [\r
        {\r
          "name": "ADRENALINE SHOT",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Health Packs grant <b>20%</b> Move Speed for <b>5s</b> and <b>50 Overhealth</b>."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_166"\r
        },\r
        {\r
          "name": "ELECTROLYTES",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "At the start of the round and every time you respawn, gain 100 unrecoverable <b>Overhealth</b>."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_167"\r
        },\r
        {\r
          "name": "FIELD RATIONS",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "While on the Objective, restore <b>8</b> Life every 1s."\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_168"\r
        },\r
        {\r
          "name": "RUNNING SHOES",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "At the start of the round and when you first respawn, gain <b>20%</b> Move Speed for IOS while out of combat."\r
            }\r
          ],\r
          "cost": 1000,\r
          "id": "i_169"\r
        },\r
        {\r
          "name": "ARMORED VEST",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_170"\r
        },\r
        {\r
          "name": "FIRST AID KIT",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Reduce the time before your Life begins regenerating by <b>33%</b>."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_171"\r
        },\r
        {\r
          "name": "HEARTBEAT SENSOR",\r
          "attributes": [\r
            {\r
              "type": "MS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Enemies below <b>30%</b> Life are <b>Revealed</b> to you."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_172"\r
        },\r
        {\r
          "name": "SIPHON GLOVES",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Quick Melee]</b> damage heals for <b>25</b> Life."\r
            }\r
          ],\r
          "cost": 1500,\r
          "id": "i_173"\r
        }\r
      ],\r
      "rare": [\r
        {\r
          "name": "REINFORCED TITANIUM",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While you have Shields, take <b>15%</b> reduced Ability Damage."\r
            }\r
          ],\r
          "cost": 3750,\r
          "id": "i_174"\r
        },\r
        {\r
          "name": "CUSHIONED PADDING",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "Incoming Negative Effect Duration",\r
              "value": "-40%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When affected by <b>Stun</b>, <b>Sleep</b> , or <b>Hinder</b>, restore <b>10%</b> of your max Life over <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_175"\r
        },\r
        {\r
          "name": "IRONCLAD EXHAUST PORTS",\r
          "attributes": [\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use an ability, gain <b>25 Overhealth</b> for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_176"\r
        },\r
        {\r
          "name": "VISHKAR CONDENSOR",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Convert <b>100</b> Health into Shields."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_177"\r
        },\r
        {\r
          "name": "VITAL-E-TEE",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "10"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Convert 100 Health into Armor."\r
            }\r
          ],\r
          "cost": 4000,\r
          "id": "i_178"\r
        },\r
        {\r
          "name": "CRUSADER HYDRAULICS",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While you have Armor, take <b>10%</b> reduced Weapon Damage."\r
            }\r
          ],\r
          "cost": 4500,\r
          "id": "i_179"\r
        },\r
        {\r
          "name": "IRON EYES",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "You take <b>20%</b> reduced damage from Critical Hits."\r
            }\r
          ],\r
          "cost": 4500,\r
          "id": "i_180"\r
        },\r
        {\r
          "name": "MEKA Z-SERIES",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "8%"\r
            },\r
            {\r
              "type": "Armor",\r
              "value": "8%"\r
            },\r
            {\r
              "type": "Shields",\r
              "value": "8%"\r
            }\r
          ],\r
          "cost": 5000,\r
          "id": "i_181"\r
        },\r
        {\r
          "name": "GALVANIZED CORE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "[Boosters] Duration",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "D.VA",\r
          "id": "i_182"\r
        },\r
        {\r
          "name": "PLOT ARMOR",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While <b>[Defense Matrix]</b> is active, gain <b>65%</b> damage reduction against beams."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "D.VA",\r
          "id": "i_183"\r
        },\r
        {\r
          "name": "SOLO SPEC",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you mitigate damage with <b>[Defense Matrix]</b>, gain Shields equal to <b>10%</b> of the damage mitigated, up to <b>100</b>. Resets when your <b>[Mech]</b> is destroyed."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "D.VA",\r
          "id": "i_184"\r
        },\r
        {\r
          "name": "DEZ'S DAMAGE DAMPENERS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "Knockback Resist",\r
              "value": "50%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When knocked back, gain <b>25%</b> increased Move Speed for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Junker Queen",\r
          "id": "i_185"\r
        },\r
        {\r
          "name": "REBELLIOUS SPIRIT",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When <b>[Wound]</b> gets removed instead of expiring, gain <b>10%</b> of Max Life as Overhealth, up to <b>150</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Junker Queen",\r
          "id": "i_186"\r
        },\r
        {\r
          "name": "SLICING SPREE",\r
          "attributes": [\r
            {\r
              "type": "MS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While within 12m of an enemy with a <b>[Wound]</b>, gain <b>5%</b> Move Speed and <b>10%</b> Attack Speed."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Junker Queen",\r
          "id": "i_187"\r
        },\r
        {\r
          "name": "CHARGED CHASSIS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Fortify]</b> grants additional <b>Overhealth</b> equal to <b>10%</b> of your max Life."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_188"\r
        },\r
        {\r
          "name": "SIPHONIC SPEAR",\r
          "attributes": [\r
            {\r
              "type": "description",\r
              "value": "When you deal damage with <b>[Energy Javelin]</b>, heal <b>10%</b> of your max Life over <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_189"\r
        },\r
        {\r
          "name": "SOLAR REGENERGY",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using an ability, restore Armor equal to <b>3%</b> of your max Life."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Orisa",\r
          "id": "i_190"\r
        },\r
        {\r
          "name": "CRUSADER'S CURE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Using <b>[Charge]</b> cleanses all negative effects."\r
            }\r
          ],\r
          "cost": 3750,\r
          "character": "Reinhardt",\r
          "id": "i_191"\r
        },\r
        {\r
          "name": "OVERCLOCKED BARRIER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "[Barrier Field] Health",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "[Barrier Field] Size",\r
              "value": "20%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reinhardt",\r
          "id": "i_192"\r
        },\r
        {\r
          "name": "ROCKET BOOTS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Holding <b>crouch</b> increases the height of your next jump by up to <b>200%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reinhardt",\r
          "id": "i_193"\r
        },\r
        {\r
          "name": "BLASTPROOF BOOTS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "MS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Particle Cannon]</b>'s secondary fire self knockback is increased by <b>100%</b> and no longer damages yourself."\r
            }\r
          ],\r
          "cost": 3750,\r
          "character": "Zarya",\r
          "id": "i_194"\r
        },\r
        {\r
          "name": "JUMPER CABLES",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using a <b>[Barrier]</b>, start regenerating Shields instantly."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Zarya",\r
          "id": "i_195"\r
        },\r
        {\r
          "name": "PROTEIN SHAKE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "MD",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While <b>[Particle Barrier]</b> is active, become unstoppable and <b>[Quick Melee]</b> knocks back enemies."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Zarya",\r
          "id": "i_196"\r
        },\r
        {\r
          "name": "SILVER SPURS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using <b>[Coach Gun]</b>, gain <b>20%</b> Move Speed for <b>3s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ashe",\r
          "id": "i_197"\r
        },\r
        {\r
          "name": "WANTED POSTER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Deadeye]</b> eliminations reward extra <b>500 Stadium Cash</b> each."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Cassidy",\r
          "id": "i_198"\r
        },\r
        {\r
          "name": "ANTI-BEAM COATING",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AS",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Deflect]</b> now blocks <b>Beam</b> attacks."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Genji",\r
          "id": "i_199"\r
        },\r
        {\r
          "name": "EQUILIBRIUM GEAR",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While climbing, heal <b>5%</b> of your Life every <b>1s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Genji",\r
          "id": "i_200"\r
        },\r
        {\r
          "name": "SPARROWHAWK FEATHER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Gain an additional jump."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Genji",\r
          "id": "i_201"\r
        },\r
        {\r
          "name": "COLDSPOT",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Primary fire and <b>[Blizzard]</b> can remove burn."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Mei",\r
          "id": "i_202"\r
        },\r
        {\r
          "name": "MEICICLE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Cryo-Freeze]</b> duration is increased by <b>25%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Mei",\r
          "id": "i_203"\r
        },\r
        {\r
          "name": "DEVASTATION",\r
          "attributes": [\r
            {\r
              "type": "ALS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Each <b>[Death Blossom]</b> elimination increases your Health by <b>25</b> until the end of the round, up to <b>100</b> Health."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reaper",\r
          "id": "i_204"\r
        },\r
        {\r
          "name": "NEVERFROST",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Reduce effectiveness of enemy slows by <b>50%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reaper",\r
          "id": "i_205"\r
        },\r
        {\r
          "name": "POCKET MIST",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While below <b>50%</b> Life, gain <b>20%</b> Move Speed."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Reaper",\r
          "id": "i_206"\r
        },\r
        {\r
          "name": "COMPRESSION FATIGUES",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "[Sprint] Move Speed",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Soldier: 76",\r
          "id": "i_207"\r
        },\r
        {\r
          "name": "DASH BOOTS",\r
          "attributes": [\r
            {\r
              "type": "MS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Jumping in mid-air will dash you a short distance."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ana",\r
          "id": "i_208"\r
        },\r
        {\r
          "name": "PERFECTED FORMULA",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "[Nano Boost] Duration",\r
              "value": "15%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ana",\r
          "id": "i_209"\r
        },\r
        {\r
          "name": "I.V. DRIP",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While affected by <b>[Biotic Grenade]</b>, Ana gains <b class=\\"stat-ap\\">150</b> <b>Overhealth</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Ana",\r
          "id": "i_210"\r
        },\r
        {\r
          "name": "BOOSTED ROCKETS",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "25"\r
            },\r
            {\r
              "type": "[Glide Boost] Duration",\r
              "value": "25%"\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Juno",\r
          "id": "i_211"\r
        },\r
        {\r
          "name": "KITSUNE KICKS",\r
          "attributes": [\r
            {\r
              "type": "MS",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Gain the ability to <b>[Double Jump]</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Kiriko",\r
          "id": "i_212"\r
        },\r
        {\r
          "name": "SPEED SKATES",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After <b>[Wallriding]</b>, gain <b>30%</b> Move Speed for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 3750,\r
          "character": "Lúcio",\r
          "id": "i_213"\r
        },\r
        {\r
          "name": "AERODYNAMIC FEATHERS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While affected by <b>[Angelic Descent]</b>, continuously gain <b>10%</b> Move Speed every Is up to <b>60%</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Mercy",\r
          "id": "i_214"\r
        },\r
        {\r
          "name": "ANGELEISURE WEAR",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While affected by <b>[Angelic Descent]</b> or <b>[Guardian Angel]</b>, heal <b>3%</b> of your Life every IS."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Mercy",\r
          "id": "i_215"\r
        },\r
        {\r
          "name": "ABYSS BOOTS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While using <b>[Fade]</b>, you jump <b>30%</b> higher."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Moira",\r
          "id": "i_216"\r
        },\r
        {\r
          "name": "AEROWEAVE CLOAK",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "[Take Aim] Slowed Momentum Duration",\r
              "value": "100%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While momentum is slowed by <b>[Take Aim]</b>, restore <b>5%</b> Max Life every <b>1s</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Freja"\r
        },\r
        {\r
          "name": "HUNTER'S MARK",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Enemies with a Bounty of <b>750</b> or more are revealed to you within 40m. Eliminating them grants <b>250</b> additional <b>Stadium Cash</b>."\r
            }\r
          ],\r
          "cost": 4000,\r
          "character": "Freja"\r
        },\r
        {\r
          "name": "TOURNIQUET",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using <b>[Updraft]</b>, reset <b>[Quick Dash]</b> and gain <b>50 Overhealth</b> for <b>5s</b>."\r
            }\r
          ],\r
          "cost": 4500,\r
          "character": "Freja"\r
        }\r
      ],\r
      "epic": [\r
        {\r
          "name": "GENETICIST'S VIAL",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "The first time you would die each round, revive instead with <b>250</b> Life after <b>3s</b>."\r
            }\r
          ],\r
          "cost": 9000,\r
          "id": "i_217"\r
        },\r
        {\r
          "name": "BLOODBOUND",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "The last enemy to deal a final blow to you is <b>Revealed</b> when nearby. Deal <b>10%</b> more damage to them and take <b>10%</b> reduced damage from them."\r
            }\r
          ],\r
          "cost": 9000,\r
          "id": "i_218"\r
        },\r
        {\r
          "name": "DIVINE INTERVENTION",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you take more than <b>100</b> damage at once, restore <b>15%</b> of damage taken and start regenerating your Shields."\r
            }\r
          ],\r
          "cost": 9500,\r
          "id": "i_219"\r
        },\r
        {\r
          "name": "GLOOMGAUNTLET",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "MD",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Melee]</b> Damage grants <b>10%</b> Move Speed and restores <b>5%</b> of Max Life over <b>2s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_220"\r
        },\r
        {\r
          "name": "MARTIAN MENDER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Restore <b>3%</b> of your Life every <b>1s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_221"\r
        },\r
        {\r
          "name": "PHANTASMIC FLUX",\r
          "attributes": [\r
            {\r
              "type": "WP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "WPLS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "ALS",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While at full Life, Lifesteal grants up to <b>100 Overhealth</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_222"\r
        },\r
        {\r
          "name": "RÜSTUNG VON WILHELM",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "Armor",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "Shields",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While below <b>30%</b> Life, gain <b>10%</b> <b>Damage Reduction</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_223"\r
        },\r
        {\r
          "name": "VANADIUM INJECTION",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While at <b>100%</b> <b>Ultimate Charge</b>, gain: <ul><li><b>50</b> Health</li><li><b>10%</b> Weapon Power</li><li><b>10%</b> Ability Power</li><li><b>10%</b> Attack Speed</li><li><b>10%</b> Cooldown Reduction</li><li><b>10%</b> Move Speed</li></ul>"\r
            }\r
          ],\r
          "cost": 10000,\r
          "id": "i_224"\r
        },\r
        {\r
          "name": "NEBULA CONDUIT",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "WP",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Prevent <b>15%</b> of incoming damage and instead take that prevented damage over <b>3s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_225"\r
        },\r
        {\r
          "name": "OGUNDIMU REDUCTION FIELD",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you take damage, gain 0.<b>5%</b> <b>Damage Reduction</b> for Is, stacking up to 20 times."\r
            }\r
          ],\r
          "cost": 11000,\r
          "id": "i_226"\r
        },\r
        {\r
          "name": "APM AMP",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use <b>[Boosters]</b>, other allies within <b>16m</b> gain <b>25%</b> Move Speed for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 9000,\r
          "character": "D.VA",\r
          "id": "i_227"\r
        },\r
        {\r
          "name": "CHIP-DAMAGE DIVERTER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you deal damage to Barriers while in your <b>[Mech]</b>, gain Shields equal to <b>10%</b> of the damage dealt, up to <b>200</b>. Resets when your <b>[Mech]</b> is destroyed."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "D.VA",\r
          "id": "i_228"\r
        },\r
        {\r
          "name": "SINGIJEON'S PULSE PLATING",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Gain <b>10%</b> of damage mitigated by <b>[Defense Matrix]</b> as Ultimate Charge."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "D.VA",\r
          "id": "i_229"\r
        },\r
        {\r
          "name": "NANO COLA NITROUS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you eject from your <b>[Mech]</b>, gain <b>5%</b> increased max Health and gain <b>[Nano Boost]</b> for <b>4s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "D.VA",\r
          "id": "i_230"\r
        },\r
        {\r
          "name": "SCAV SCRAPS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Carnage]</b> and <b>[Jagged Blade]</b> impact damage grants Overhealth equal to <b>40%</b> of damage dealt."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Junker Queen",\r
          "id": "i_231"\r
        },\r
        {\r
          "name": "THICK SKULL",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While casting <b>[Rampage]</b> or <b>[Carnage]</b>, gain <b>75%</b> <b>Damage Reduction</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Junker Queen",\r
          "id": "i_232"\r
        },\r
        {\r
          "name": "UNDYING LOYALTY",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "Commanding Shout Overhealth",\r
              "value": "30%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Allies affected by <b>[Commanding Shout]</b> are healed for <b>5%</b> of Junker Queen's life every second."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Junker Queen",\r
          "id": "i_233"\r
        },\r
        {\r
          "name": "HOLLAGRAM HELMET",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When you use <b>[Fortify]</b>, allies within line of sight gain <b>Unstoppable</b> for <b>2s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Orisa",\r
          "id": "i_234"\r
        },\r
        {\r
          "name": "INFUSION GENERATOR",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Increase <b>[Barrier Field]</b> Health by <b>100%</b> of your max Life."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reinhardt",\r
          "id": "i_235"\r
        },\r
        {\r
          "name": "PHOENIX PROTOCOL",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Barrier Field]</b> regenerates <b>50%</b> faster and begins regenerating <b>50%</b> sooner after being destroyed."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reinhardt",\r
          "id": "i_236"\r
        },\r
        {\r
          "name": "FIRESTARTER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Your <b>Burning</b> effects gain <b>35%</b> Lifesteal."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ashe",\r
          "id": "i_237"\r
        },\r
        {\r
          "name": "B.O.B WIRE DEFENSE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "Armor",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "When <b>[B.O.B.]</b> finishes charging, <b>[B.O.B.]</b> gains 300 Armor."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Ashe",\r
          "id": "i_238"\r
        },\r
        {\r
          "name": "FRANKIE'S FIXER",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Heal <b class=\\"stat-ap\\">10</b> Life for each Ammo loaded using <b>[Combat Roll]</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Cassidy",\r
          "id": "i_239"\r
        },\r
        {\r
          "name": "EAGLE EYE",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Take <b>25%</b> less damage from enemies farther than <b>12m</b>."\r
            }\r
          ],\r
          "cost": 12000,\r
          "character": "Cassidy",\r
          "id": "i_240"\r
        },\r
        {\r
          "name": "SLICY COOLANT",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "CR",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "[Deflect] Duration",\r
              "value": "+1s"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_241"\r
        },\r
        {\r
          "name": "TRANSFERENCE DELTA",\r
          "attributes": [\r
            {\r
              "type": "Ultimate Cost Reduction",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Convert <b>100</b> Health into Armor. Using <b>[Dragonblade]</b> heals your Armor fully."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Genji",\r
          "id": "i_242"\r
        },\r
        {\r
          "name": "ICE SHEET",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Ice Wall]</b> Duration is increased by <b>1s</b> and health is increased by <b>100%</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mei",\r
          "id": "i_243"\r
        },\r
        {\r
          "name": "WRETCHED WINGS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While using <b>[Wraith Form]</b>, gain the ability to fly and gain <b>20%</b> Move Speed."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reaper",\r
          "id": "i_244"\r
        },\r
        {\r
          "name": "DAUNTLESS DRAUGHT",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "Move Speed during [Wraith Form]",\r
              "value": "15%"\r
            },\r
            {\r
              "type": "[Wraith Form] Duration",\r
              "value": "33%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Reaper",\r
          "id": "i_245"\r
        },\r
        {\r
          "name": "CRIMSON CLOAK",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "AP",\r
              "value": "10%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Using <b>[Death Blossom]</b> grants you <b>Overhealth</b> equal to <b>15%</b> of your max Life."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Reaper",\r
          "id": "i_246"\r
        },\r
        {\r
          "name": "IRON LUNG",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "While using <b>[Sprint]</b>, gain <b>Overhealth</b> equal to <b>5%</b> of your max Life every <b><b>1s</b></b>, up to <b>25%</b>, for <b>5s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Soldier: 76",\r
          "id": "i_247"\r
        },\r
        {\r
          "name": "EYE OF HORUS",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Nano Boost]</b> can target allies through walls and its range is increased to <b>60m</b>."\r
            }\r
          ],\r
          "cost": 9000,\r
          "character": "Ana",\r
          "id": "i_248"\r
        },\r
        {\r
          "name": "FORTI-GLIDE",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "75"\r
            },\r
            {\r
              "type": "description",\r
              "value": "During <b>[Glide Boost]</b>, gain <b>10%</b> Damage Reduction."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Juno",\r
          "id": "i_249"\r
        },\r
        {\r
          "name": "SUNBURST SERUM",\r
          "attributes": [\r
            {\r
              "type": "Shields",\r
              "value": "75"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Orbital Ray]</b> gains <b>25%</b> increased healing."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Juno",\r
          "id": "i_250"\r
        },\r
        {\r
          "name": "GODDESS'S AURA",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After using <b>[Swift Step]</b>, gain <b class=\\"stat-ap\\">100</b> <b>Overhealth</b> for <b>4s</b>."\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Kiriko",\r
          "id": "i_251"\r
        },\r
        {\r
          "name": "TALISMAN OF LIFE",\r
          "attributes": [\r
            {\r
              "type": "AP",\r
              "value": "20%"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Protection Suzu]</b> grants <b class=\\"stat-ap\\">100</b> <b>Overhealth</b> for <b>5s</b>."\r
            }\r
          ],\r
          "cost": 11000,\r
          "character": "Kiriko",\r
          "id": "i_252"\r
        },\r
        {\r
          "name": "HIP HOP",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "25"\r
            },\r
            {\r
              "type": "description",\r
              "value": "After <b>[Wallriding]</b>, gain an additional jump while airborne."\r
            }\r
          ],\r
          "cost": 9000,\r
          "character": "Lúcio",\r
          "id": "i_253"\r
        },\r
        {\r
          "name": "BLESSED BOOSTERS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "Your launch velocity is increased by <b>25%</b> when canceling <b>[Guardian Angel]</b> with crouch or jump."\r
            }\r
          ],\r
          "cost": 9000,\r
          "character": "Mercy",\r
          "id": "i_254"\r
        },\r
        {\r
          "name": "CHAIN EVOKER",\r
          "attributes": [\r
            {\r
              "type": "Armor",\r
              "value": "50"\r
            },\r
            {\r
              "type": "[Caduceus Staff] Damage Boost",\r
              "value": "5%"\r
            },\r
            {\r
              "type": "Ultimate Charge from Damage Boost",\r
              "value": "15%"\r
            }\r
          ],\r
          "cost": 10000,\r
          "character": "Mercy",\r
          "id": "i_255"\r
        },\r
        {\r
          "name": "TOXIN TIPS",\r
          "attributes": [\r
            {\r
              "type": "Health",\r
              "value": "50"\r
            },\r
            {\r
              "type": "description",\r
              "value": "<b>[Take Aim]</b> bolt sticks and explosions slow enemies by <b>30%</b>, but takes Is longer to explode."\r
            }\r
          ],\r
          "cost": 9000,\r
          "character": "Freja"\r
        }\r
      ]\r
    },\r
    "powers": {\r
      "D.VA": [\r
        {\r
          "name": "FOCUSED FUSION",\r
          "description": "<b>[Fusion Cannon]</b>'s spread is reduced by <b>50%</b> and damage falloff range is <b>20m</b> farther.",\r
          "id": "p_0"\r
        },\r
        {\r
          "name": "LEGENDARY LOADOUT",\r
          "description": "<b>[Micro Missiles]</b> are replaced with <b>6 Heavy Rockets</b>, which deal <b>350%</b> more explosive damage and have <b>100%</b> increased radius.",\r
          "id": "p_1"\r
        },\r
        {\r
          "name": "OVERSTOCKED",\r
          "description": "Gain <b>1</b> extra charge of <b>[Micro Missiles]</b>.",\r
          "id": "p_2"\r
        },\r
        {\r
          "name": "COUNTERMEASURES",\r
          "description": "When you mitigate <b>100</b> damage with <b>[Defense Matrix]</b>, automatically fire <b>2</b> <b>[Micro Missiles]</b>.",\r
          "id": "p_3"\r
        },\r
        {\r
          "name": "FACETANKING",\r
          "description": "<b>[Defense Matrix]</b> heals you for <b>30%</b> of the damage it blocks.",\r
          "id": "p_4"\r
        },\r
        {\r
          "name": "ULTRAWIDE MATRIX",\r
          "description": "Increase the size of <b>[Defense Matrix]</b> by <b>50%</b> and its duration by <b>25%</b>.",\r
          "id": "p_5"\r
        },\r
        {\r
          "name": "IGNITION BURST",\r
          "description": "<b>[Boosters]</b> leave a trail of lava that deals <b class=\\"stat-ap\\">80</b> damage every <b>1s</b>.",\r
          "id": "p_6"\r
        },\r
        {\r
          "name": "MEKA PUNCH",\r
          "description": "While using <b>[Boosters]</b>, <b>[Quick Melee]</b> deals <b>75%</b> more damage. MEKA Punch eliminations reset the cooldown of <b>[Boosters]</b>.",\r
          "id": "p_7"\r
        },\r
        {\r
          "name": "STAT BOOST",\r
          "description": "During the first <b>2s</b> of <b>[Boosters]</b>, <b>[Defense Matrix]</b> recovers <b>125%</b> faster.",\r
          "id": "p_8"\r
        },\r
        {\r
          "name": "TOKKI SLAM",\r
          "description": "During <b>[Boosters]</b>, use crouch to slam the ground, dealing damage equal to <b>20%</b> of your max Armor and knocking up enemies hit.",\r
          "id": "p_9"\r
        },\r
        {\r
          "name": "EXPRESS DETONATION",\r
          "description": "<b>[Self-Destruct]</b> explodes <b>15%</b> faster.",\r
          "id": "p_10"\r
        },\r
        {\r
          "name": "PARTY PROTECTOR",\r
          "description": "When you use <b>[Self-Destruct]</b>, allies within <b>[Self-Destruct]</b> radius gain <b class=\\"stat-ap\\">250</b> <b>Overhealth</b> for <b>8s</b>.",\r
          "id": "p_11"\r
        }\r
      ],\r
      "Junker Queen": [\r
        {\r
          "name": "THRILL OF BATTLE",\r
          "description": "<b>[Adrenaline Rush]</b> also heals allies within <b>12m</b> for <b>50%</b> of the amount it heals you.",\r
          "id": "p_12"\r
        },\r
        {\r
          "name": "ROYAL BULLETS",\r
          "description": "<b>[Scattergun]</b> critical hits against targets within <b>15m</b> applies <b>[Wound]</b> for <b class=\\"stat-wp\\">50</b> damage over <b>3s</b>.",\r
          "id": "p_13"\r
        },\r
        {\r
          "name": "TWIST THE KNIFE",\r
          "description": "<b>[Scattergun]</b> critical hits extend the duration of all <b>[Wounds]</b> on the target by <b>1s</b>.",\r
          "id": "p_14"\r
        },\r
        {\r
          "name": "BLADE PARADE",\r
          "description": "Holding <b>[Jagged Blade]</b> charges it, increasing its damage by up to <b>100%</b> and causing it to knockback.",\r
          "id": "p_15"\r
        },\r
        {\r
          "name": "CUT 'EM, GRACIE!",\r
          "description": "Each enemy hit by <b>[Jagged Blade]</b> while it returns to you reduces its cooldown by 1s.",\r
          "id": "p_16"\r
        },\r
        {\r
          "name": "LET'S GO WIN",\r
          "description": "Eliminations reset the cooldown of <b>[Commanding Shout]</b>.",\r
          "id": "p_17"\r
        },\r
        {\r
          "name": "MERCILESS MAGNETISM",\r
          "description": "Using <b>[Commanding Shout]</b> causes your <b>[Jagged Blade]</b> to home to a target.",\r
          "id": "p_18"\r
        },\r
        {\r
          "name": "RECKONER'S ROAR",\r
          "description": "Using <b>[Commanding Shout]</b> <b>[Wounds]</b> enemies within <b>10m</b> for <b class=\\"stat-ap\\">30</b> damage over <b>3s</b>.",\r
          "id": "p_19"\r
        },\r
        {\r
          "name": "CHOP CHOP",\r
          "description": "<b>[Carnage]</b> gains an additional charge but its cooldown reduction per hit is reduced to 1s.",\r
          "id": "p_20"\r
        },\r
        {\r
          "name": "SOARING STONE",\r
          "description": "<b>[Carnage]</b> becomes a leaping strike if you jump during its cast time.",\r
          "id": "p_21"\r
        },\r
        {\r
          "name": "BLOODCRAZED",\r
          "description": "<b>[Rampage]</b> and <b>[Carnage]</b> gives <b>15%</b> of Max Life as Overhealth per hit.",\r
          "id": "p_22"\r
        },\r
        {\r
          "name": "BOW DOWN",\r
          "description": "<b>[Rampage]</b> now also knocks down enemies hit for <b>1.</b><b>5s</b>.",\r
          "id": "p_23"\r
        }\r
      ],\r
      "Orisa": [\r
        {\r
          "name": "SCORCHED EARTH",\r
          "description": "When you <b>[Overheat]</b>, apply <b>Burning</b> to enemies within <b>6m</b>, dealing damage equal to <b>20%</b> of your max Life over <b>5s</b>.",\r
          "id": "p_24"\r
        },\r
        {\r
          "name": "SHIELD DIVERGENCE",\r
          "description": "When you <b>[Overheat]</b>, deploy a <b>Barrier</b> with <b class=\\"stat-ap\\">600</b> Health in front.",\r
          "id": "p_25"\r
        },\r
        {\r
          "name": "ADVANCED THROWBOTICS",\r
          "description": "When you use <b>[Javelin Spin]</b>, launch an <b>[Energy Javelin]</b> with <b>50%</b> less damage.",\r
          "id": "p_26"\r
        },\r
        {\r
          "name": "HOT ROTATE-O",\r
          "description": "<b>[Javelin Spin]</b> gains <b>35%</b> Cooldown Reduction but now generates <b>[Heat]</b>.",\r
          "id": "p_27"\r
        },\r
        {\r
          "name": "SPYNSTEM UPDATE",\r
          "description": "<b>[Javelin Spin]</b> now deflects projectiles and grants <b>20%</b> of damage dealt from deflecting as Ultimate Charge.",\r
          "id": "p_28"\r
        },\r
        {\r
          "name": "FACTORY RESET",\r
          "description": "While <b>[Fortify]</b> is active, <b>[Javelin Spin]</b> and <b>[Energy Javelin]</b> gain <b>25%</b> Cooldown Reduction.",\r
          "id": "p_29"\r
        },\r
        {\r
          "name": "HOOVES OF STEEL",\r
          "description": "After <b>[Fortify]</b> ends, gain Shields equal to <b>50%</b> of the damage received during <b>[Fortify]</b>.\\n<br />\\nResets when you next use <b>[Fortify]</b>.",\r
          "id": "p_30"\r
        },\r
        {\r
          "name": "RESTORTIFY",\r
          "description": "While <b>[Fortify]</b> is active, heal for <b>5%</b> of your max Life every <b>1s</b>.",\r
          "id": "p_31"\r
        },\r
        {\r
          "name": "RIDE WITH ME",\r
          "description": "While <b>[Fortify]</b> is active, grant allies in line of sight <b>30%</b> Move Speed and <b>Overhealth</b> equal to <b>10%</b> of your max Life.",\r
          "id": "p_32"\r
        },\r
        {\r
          "name": "LASSOED",\r
          "description": "On impact, <b>[Energy Javelin]</b> will pull enemies within <b>4m</b> towards itself.",\r
          "id": "p_33"\r
        },\r
        {\r
          "name": "CENTRIPETAL CHARGE",\r
          "description": "<b>25%</b> Ultimate Cost Reduction.\\n<br/>\\nAfter using <b>[Terra Surge]</b>, reset your ability cooldowns.",\r
          "id": "p_34"\r
        },\r
        {\r
          "name": "SUPERCHARGER",\r
          "description": "When you use <b>[Terra Surge]</b>, drop a <b>[Supercharger]</b> that increases the damage of nearby allies by <b>25%</b> for <b>15s</b>.",\r
          "id": "p_35"\r
        }\r
      ],\r
      "Reinhardt": [\r
        {\r
          "name": "AMPLIFICATION BARRIER",\r
          "description": "Friendly projectiles that pass through your <b>[Barrier Field]</b> deal <b>15%</b> more damage.",\r
          "id": "p_36"\r
        },\r
        {\r
          "name": "BARRIER RECONSTRUCTION",\r
          "description": "When you deal damage with <b>[Rocket Hammer]</b> or <b>[Fire Strike]</b>, restore health to <b>[Barrier Field]</b> equal to <b>15%</b> of its max Health.",\r
          "id": "p_37"\r
        },\r
        {\r
          "name": "TO ME, MY FRIENDS!",\r
          "description": "While <b>[Barrier Field]</b> is active, allies within <b>5m</b> are healed equal to <b>4%</b> of your max Life every <b>1s</b>.",\r
          "id": "p_38"\r
        },\r
        {\r
          "name": "WILHELMWAGEN",\r
          "description": "While <b>[Barrier Field]</b> is deployed, you heal for <b>5%</b> of the damage it mitigates and gain <b>30%</b> Move Speed.",\r
          "id": "p_39"\r
        },\r
        {\r
          "name": "SHIELD STAMPEDE",\r
          "description": "<b>+</b><b>50%</b> <b>[Charge]</b> Knockback Power.\\nDuring <b>[Charge]</b>, automatically deploy <b>[Barrier Field]</b>.",\r
          "id": "p_40"\r
        },\r
        {\r
          "name": "VANGUARD",\r
          "description": "<b>[Charge]</b> grants nearby allies <b>Overhealth</b> equal to <b>10%</b> of your max Life and <b>20%</b> Move Speed for <b>3s</b>.",\r
          "id": "p_41"\r
        },\r
        {\r
          "name": "VROOM BOOM BOOM",\r
          "description": "During <b>[Charge]</b>, colliding with a wall triggers an explosion that deals <b>30%</b> of <b>[Charge]</b>'s pin damage.",\r
          "id": "p_42"\r
        },\r
        {\r
          "name": "BLAZING BLITZ",\r
          "description": "After using <b>[Earthshatter]</b>, every <b>[Rocket Hammer]</b> swing launches a <b>[Fire Strike]</b> for <b>4s</b>.",\r
          "id": "p_43"\r
        },\r
        {\r
          "name": "IMPACT BURST",\r
          "description": "<b>[Fire Strike]</b> triggers an explosion the first time it hits an enemy, dealing <b>15%</b> of its damage in a <b>3m</b> radius.",\r
          "id": "p_44"\r
        },\r
        {\r
          "name": "MAGMA STRIKE",\r
          "description": "If <b>[Fire Strike]</b> is cast twice within <b>2s</b>, the second strike leaves a trail of lava that Burns enemies for <b>50%</b> of <b>[Fire Strike]</b> damage.",\r
          "id": "p_45"\r
        },\r
        {\r
          "name": "FEELING THE BURN",\r
          "description": "Every 3rd <b>[Rocket Hammer]</b> swing applies Burn, dealing <b>30%</b> <b>[Rocket Hammer]</b> damage over <b>2s</b>.",\r
          "id": "p_46"\r
        },\r
        {\r
          "name": "SMASHING!",\r
          "description": "When you deal damage with <b>[Rocket Hammer]</b>, gain <b>1%</b> Move Speed and <b>3%</b> Weapon Lifesteal for <b>2s</b>, stacking up to <b>10 times</b>.",\r
          "id": "p_47"\r
        }\r
      ],\r
      "Zarya": [\r
        {\r
          "name": "NO LIMITS",\r
          "description": "Maximum <b>[Energy]</b> increased to <b>150</b>. <b>[Energy]</b> always decays above <b>100</b> <b>[Energy]</b> at a <b>150%</b> faster rate.",\r
          "id": "p_48"\r
        },\r
        {\r
          "name": "PARTICLE ACCELERATOR",\r
          "description": "Gain <b>15%</b> Attack Speed for <b>[Particle Cannon]</b>'s secondary fire. After using an ability, <b>quadruple</b> this bonus for <b>5s</b>.",\r
          "id": "p_49"\r
        },\r
        {\r
          "name": "PIERCING BEAM",\r
          "description": "Above <b>80</b> <b>[Energy]</b>, <b>[Particle Cannon]</b>'s Primary Fire will pierce enemies.",\r
          "id": "p_50"\r
        },\r
        {\r
          "name": "PRE-WORKOUT",\r
          "description": "Gain Weapon Lifesteal and Ability Lifesteal equal to <b>15%</b> of <b>[Energy]</b>.",\r
          "id": "p_51"\r
        },\r
        {\r
          "name": "BARRIER BENEFITS",\r
          "description": "When <b>[Barriers]</b> expire, grant <b>Overhealth</b> equal to <b>50%</b> of remaining Barrier Health to the target for <b>3s</b>",\r
          "id": "p_52"\r
        },\r
        {\r
          "name": "CONTAINMENT SHIELD",\r
          "description": "<b>[Barrier]</b> heals <b class=\\"stat-ap\\">25</b> Life, increased by <b>[Energy]</b>, and grants <b>20%</b> Move Speed while active.",\r
          "id": "p_53"\r
        },\r
        {\r
          "name": "FISSION FIELD",\r
          "description": "<b>[Projected Barrier]</b> also applies to <b>1</b> additional ally within <b>10m</b>, but has <b>20%</b> reduced duration.",\r
          "id": "p_54"\r
        },\r
        {\r
          "name": "HERE TO SPOT YOU",\r
          "description": "<b>[Projected Barrier]</b> pulls you to the targeted ally and heals you for <b>20%</b> of Max Life over <b>3s</b>.",\r
          "id": "p_55"\r
        },\r
        {\r
          "name": "LIFELIFT",\r
          "description": "<b>+</b><b>50%</b> <b>[Particle Barrier]</b> Size.\\n<br/>\\nIncrease <b>[Particle Barrier]</b> Health by <b>25%</b> of Bonus Max Life.",\r
          "id": "p_56"\r
        },\r
        {\r
          "name": "MAJOR FLEX",\r
          "description": "<b>[Barrier]</b> knocks back and deals <b class=\\"stat-ap\\">25</b> damage, increased by <b>[Energy]</b>, to enemies within <b>5m</b> every <b>1s</b>.",\r
          "id": "p_57"\r
        },\r
        {\r
          "name": "VOLSKAYA VORTEX",\r
          "description": "After a <b>[Barrier]</b> is cast, <b>[Particle Cannon]</b>'s next secondary fire spawns a slowing vortex that deals <b class=\\"stat-ap\\">100</b> damage over <b>2s</b>.",\r
          "id": "p_58"\r
        },\r
        {\r
          "name": "GRAVITON ANOMALY",\r
          "description": "<b>25%</b> Ultimate Cost Reduction.\\n<br/>\\n<b>[Graviton Surge]</b> base damage is increased to <b>30</b> and increased by <b>[Energy]</b>, but has <b>50%</b> reduced duration.",\r
          "id": "p_59"\r
        }\r
      ],\r
      "Ashe": [\r
        {\r
          "name": "HEAD HONCHO",\r
          "description": "Each <b>unscoped</b> shot you land increases the damage of the next <b>scoped</b> shot you land by <b>5%</b>, up to <b>30%</b>. Resets on reload.",\r
          "id": "p_60"\r
        },\r
        {\r
          "name": "INCENDIARY ROUNDS",\r
          "description": "While <b>scoped</b>, hitting the same target without missing deals <b class=\\"stat-wp\\">30</b> extra damage.",\r
          "id": "p_61"\r
        },\r
        {\r
          "name": "MY BUSINESS, MY RULES",\r
          "description": "When you deal damage to a <b>Burning</b> enemy with <b>[The Viper]</b>, reduce the cooldown of your abilities by <b>10%</b>.",\r
          "id": "p_62"\r
        },\r
        {\r
          "name": "RELOAD THERAPY",\r
          "description": "When you reload a shot, heal <b>10%</b> of your Life.",\r
          "id": "p_63"\r
        },\r
        {\r
          "name": "CALAMITY",\r
          "description": "Using <b>[Coach Gun]</b> reloads <b>2</b> Ammo. <b>[The Viper]</b>'s next <b>2</b> hits deal <b class=\\"stat-ap\\">40</b> additional damage over <b>3s</b>.",\r
          "id": "p_64"\r
        },\r
        {\r
          "name": "DOUBLE BARRELED",\r
          "description": "<b>[Coach Gun]</b> gains an additional charge.",\r
          "id": "p_65"\r
        },\r
        {\r
          "name": "INCENDIARY BLAST",\r
          "description": "<b>[Coach Gun]</b> applies Burning, dealing <b class=\\"stat-ap\\">100</b> damage over <b>5s</b>. If the target was Burning, deal <b class=\\"stat-ap\\">75</b> additional damage instantly.",\r
          "id": "p_66"\r
        },\r
        {\r
          "name": "EARLY DETONATION",\r
          "description": "Shooting <b>[Dynamite]</b> reloads <b>5</b> Ammo and reduces the cooldown of <b>[Dynamite]</b> by <b>3s</b>.",\r
          "id": "p_67"\r
        },\r
        {\r
          "name": "MOLTEN MUNITIONS",\r
          "description": "When <b>[Dynamite]</b> explodes on the ground, it leaves lava that <b>Burns</b> enemies for <b class=\\"stat-ap\\">80</b> every <b>1s</b>.",\r
          "id": "p_68"\r
        },\r
        {\r
          "name": "OUT WITH A BANG",\r
          "description": "When <b>[Dynamite]</b> explodes, it spawns <b>3</b> sticky explosives that deal <b>30%</b> reduced damage.",\r
          "id": "p_69"\r
        },\r
        {\r
          "name": "B.O.B JR.",\r
          "description": "<b>[B.O.B.]</b> costs <b>50%</b> less Ultimate Charge but has reduced Life, <b>20%</b> <b>reduced</b> Attack Speed, and is significantly smaller.",\r
          "id": "p_70"\r
        },\r
        {\r
          "name": "PARTNERS IN CRIME",\r
          "description": "You are healed for <b>100%</b> of <b>[B.O.B.]</b>'s damage dealt and <b>[B.O.B.]</b> is healed for <b>100%</b> of your damage dealt.",\r
          "id": "p_71"\r
        }\r
      ],\r
      "Cassidy": [\r
        {\r
          "name": "BULLSEYE",\r
          "description": "Critical hit reduces <b>[Combat Roll]</b>'s cooldown by <b>2s</b>.",\r
          "id": "p_72"\r
        },\r
        {\r
          "name": "DEAD MAN WALKING",\r
          "description": "Eliminating an enemy you've recently critically hit grants <b>1</b> Max Ammo for the round.",\r
          "id": "p_73"\r
        },\r
        {\r
          "name": "FULL HOUSE",\r
          "description": "For each Ammo available, <b>[Peacekeeper]</b> 's primary fire gains 1 % increased damage, up to <b>25%</b>.",\r
          "id": "p_74"\r
        },\r
        {\r
          "name": "QUICK DRAW",\r
          "description": "After using <b>[Combat Roll]</b>, <b>[Peacekeeper]</b>'s next primary fire can auto-aim within <b>9m</b> while under cooldown.",\r
          "id": "p_75"\r
        },\r
        {\r
          "name": "THINK FLASHT",\r
          "description": "When you start a <b>[Combat Roll]</b>, leave a <b>[Flashbang]</b> behind.",\r
          "id": "p_76"\r
        },\r
        {\r
          "name": "BARREL ROLL",\r
          "description": "<b>[Combat Roll]</b> takes you <b>50%</b> further and deals <b class=\\"stat-ap\\">65</b> damage to enemies.",\r
          "id": "p_77"\r
        },\r
        {\r
          "name": "JUST ROLL WITH IT",\r
          "description": "During <b>[Combat Roll]</b>, prevent all incoming damage.\\nAfter <b>[Combat Roll]</b> ends, heal <b>30%</b> of your Life over <b>3s</b>.",\r
          "id": "p_78"\r
        },\r
        {\r
          "name": "FLASH IN THE PAIN",\r
          "description": "Eliminating an enemy recently damaged by <b>[Flashbang]</b> grants <b>15%</b> Ultimate Charge.",\r
          "id": "p_79"\r
        },\r
        {\r
          "name": "HOT POTATO",\r
          "description": "<b>[Flashbang]</b> adds <b>3</b> extra Ammo on hit until <b>[Peacekeeper]</b> is reloaded.",\r
          "id": "p_80"\r
        },\r
        {\r
          "name": "EASY RIDER",\r
          "description": "While using <b>[Deadeye]</b>, gain <b class=\\"stat-ap\\">100</b> <b>Overhealth</b> and <b>25%</b> Move Speed.",\r
          "id": "p_81"\r
        },\r
        {\r
          "name": "SUNRISE",\r
          "description": "Using <b>[Deadeye]</b> slows all visible enemies by <b>35%</b> for 1.<b>5s</b>.",\r
          "id": "p_82"\r
        },\r
        {\r
          "name": "SUNSET",\r
          "description": "<b>[Deadeye]</b> eliminations grant <b>15%</b> Ultimate Charge each.",\r
          "id": "p_83"\r
        }\r
      ],\r
      "Genji": [\r
        {\r
          "name": "CYBERNETIC SPEED",\r
          "description": "Dealing damage with <b>[Shuriken]</b> grants <b>2%</b> <b>[Shuriken]</b> Attack Speed for <b>3s</b>, stacking up to <b>15 times</b>.",\r
          "id": "p_84"\r
        },\r
        {\r
          "name": "HASHIMOTO'S BANE",\r
          "description": "After using an ability, your next secondary fire throws <b>2</b> extra <b>[Shuriken]</b> that seek enemies but deal <b>50%</b> less damage.",\r
          "id": "p_85"\r
        },\r
        {\r
          "name": "SACRED SHURIKEN",\r
          "description": "<b>[Shuriken]</b>'s primary fire throws <b>2</b> additional <b>[Shuriken]</b> that don't consume any ammo.",\r
          "id": "p_86"\r
        },\r
        {\r
          "name": "HANAMURA HEALING",\r
          "description": "Critical hits and <b>[Swift Strike]</b> grant <b>Overhealth</b> equal to <b>25%</b> of their damage dealt for <b>5s</b>.",\r
          "id": "p_87"\r
        },\r
        {\r
          "name": "HIDDEN BLADE",\r
          "description": "Gain <b>50%</b> Melee Lifesteal and increase <b>[Quick Melee]</b> damage by 25.",\r
          "id": "p_88"\r
        },\r
        {\r
          "name": "LACERATION",\r
          "description": "<b>[Swift Strike]</b> deals <b>25%</b> additional damage over <b>3s</b> to enemies hit.",\r
          "id": "p_89"\r
        },\r
        {\r
          "name": "WYRM'S MAW",\r
          "description": "Targets hit by <b>[Shuriken]</b> take <b>10%</b> more damage from <b>[Swift Strike]</b> for <b>4s</b>, stacking up to <b>5 times</b>.",\r
          "id": "p_90"\r
        },\r
        {\r
          "name": "FORGED UNDER FIRE",\r
          "description": "While <b>[Deflect]</b> is active, heal for <b>60%</b> of the damage it prevents.",\r
          "id": "p_91"\r
        },\r
        {\r
          "name": "IAIDO STRIKE",\r
          "description": "After <b>[Deflect]</b> ends, quickly swing your <b>[Dragonblade]</b> once.",\r
          "id": "p_92"\r
        },\r
        {\r
          "name": "SPIRIT OF SOJIRO",\r
          "description": "When <b>[Deflect]</b> stops incoming damage, reduce the cooldown of <b>[Swift Strike]</b> by Is, up to <b>5s</b>.",\r
          "id": "p_93"\r
        },\r
        {\r
          "name": "DRAGON'S BREATH",\r
          "description": "<b>[Dragonblade]</b> swings launch a large piercing projectile that deals <b>50%</b> of <b>[Dragonblade]</b>'s damage.",\r
          "id": "p_94"\r
        },\r
        {\r
          "name": "DEFLECT-O-BOT",\r
          "description": "<b>+50%</b> Deflected Projectile Speed.\\nDuring the first <b>1.5s</b> of <b>[Deflect]</b>, automatically deflect projectiles towards enemies.",\r
          "id": "p_95"\r
        }\r
      ],\r
      "Mei": [\r
        {\r
          "name": "EXTENDOTHERMICS",\r
          "description": "<b>[Endothermic Blaster]</b>'s primary fire range is increased by <b>6m</b>.",\r
          "id": "p_95"\r
        },\r
        {\r
          "name": "FROST ARMOR",\r
          "description": "Gain Armor equal to <b>5%</b> of the primary fire damage you deal, up to <b>100</b>, until the end of the round.",\r
          "id": "p_96"\r
        },\r
        {\r
          "name": "PERMAFROST",\r
          "description": "Increase your max health by <b>50%</b> of your ability power.",\r
          "id": "p_97"\r
        },\r
        {\r
          "name": "SLOWBALL",\r
          "description": "<b>[Endothermic Blaster]</b>'s secondary fire now shoots a snowball that applies <b>30%</b> slow for Is on critical hit.",\r
          "id": "p_98"\r
        },\r
        {\r
          "name": "ICEBERG",\r
          "description": "<b>[Ice Wall]</b> spawns a mini <b>[Blizzard]</b> that slows enemies.",\r
          "id": "p_99"\r
        },\r
        {\r
          "name": "SNOWBALL FLIGHT",\r
          "description": "Jumping while mid-air creates a large <b>[Ice Wall]</b> pillar under you.\\n(<b>12s</b> Cooldown)",\r
          "id": "p_100"\r
        },\r
        {\r
          "name": "TWICE AS ICE",\r
          "description": "When you use <b>[Cryo-Freeze]</b>, reset the next cooldown of <b>[Ice Wall]</b>.",\r
          "id": "p_101"\r
        },\r
        {\r
          "name": "COULDER",\r
          "description": "<b>[Cryo-Freeze]</b> now encases you in a rolling iceball that can knock back enemies and deal <b class=\\"stat-ap\\">20</b> damage.",\r
          "id": "p_102"\r
        },\r
        {\r
          "name": "CRYCLONE",\r
          "description": "<b>[Cryo-Freeze]</b> spawns a mini <b>[Blizzard]</b> that slows enemies.",\r
          "id": "p_103"\r
        },\r
        {\r
          "name": "FROST NOVA",\r
          "description": "When <b>[Cryo-Freeze]</b> ends, knock back nearby enemies, dealing <b class=\\"stat-ap\\">60</b> damage.",\r
          "id": "p_104"\r
        },\r
        {\r
          "name": "AVALANCHE",\r
          "description": "Visible enemies within <b>20m</b> of <b>[Blizzard]</b> are slowed by <b>25%</b>.",\r
          "id": "p_105"\r
        },\r
        {\r
          "name": "BLIZZNADO",\r
          "description": "While within <b>[Blizzard]</b>, heal <b>15%</b> of your life every <b>1s</b>.",\r
          "id": "p_106"\r
        }\r
      ],\r
      "Reaper": [\r
        {\r
          "name": "BACKSTABBER",\r
          "description": "After using an ability, your next shot deals <b>50%</b> additional damage over <b>3s</b> to enemies struck from behind.",\r
          "id": "p_107"\r
        },\r
        {\r
          "name": "HARVEST FEST",\r
          "description": "<b>[Hellfire Shotgun]</b> hits have a <b>10%</b> chance to spawn a Soul Globe. When picked up, restore <b>25%</b> Life, <b>25%</b>\\nAmmo, and gain <b>25%</b> Move Speed for <b>3s</b>.",\r
          "id": "p_108"\r
        },\r
        {\r
          "name": "REVOLVING RUIN",\r
          "description": "Close-range (7m) <b>[Hellfire Shotgun]</b> hits grant <b>4%</b> Attack Speed for Is, stacking up to <b>10 times</b>.",\r
          "id": "p_109"\r
        },\r
        {\r
          "name": "SHARED SIPHON",\r
          "description": "<b>[The Reaping]</b> also heals the nearest ally within 10m for <b>30%</b> of Reaper's damage dealt.",\r
          "id": "p_110"\r
        },\r
        {\r
          "name": "SHROUDED SHRAPNEL",\r
          "description": "Using <b>[Wraith Form]</b> increases the number of pellets per shot in your next magazine by <b>25%</b> and its spread by <b>50%</b>.",\r
          "id": "p_111"\r
        },\r
        {\r
          "name": "SPIRITED TO SLAY",\r
          "description": "Eliminations reset your cooldowns.",\r
          "id": "p_112"\r
        },\r
        {\r
          "name": "VAMPIRIC TOUCH",\r
          "description": "Hits with <b>[Quick Melee]</b> mark enemies for <b>5s</b>. Allies gain <b>20%</b> Lifesteal against marked enemies.",\r
          "id": "p_113"\r
        },\r
        {\r
          "name": "DEATH STEP",\r
          "description": "After using <b>[Shadow Step]</b>, cast <b>[Death Blossom]</b> for 1.<b>5s</b> with <b>50%</b> reduced damage.",\r
          "id": "p_114"\r
        },\r
        {\r
          "name": "SILENT AS THE GRAVE",\r
          "description": "Your footsteps and <b>[Shadow Step]</b> are significantly quieter.",\r
          "id": "p_115"\r
        },\r
        {\r
          "name": "STRANGLE STEP",\r
          "description": "After using <b>[Shadow Step]</b>, <b>double</b> your Lifesteal for <b>3s</b>.",\r
          "id": "p_116"\r
        },\r
        {\r
          "name": "GHOSTED",\r
          "description": "While in <b>[Wraith Form]</b>, passing through enemies slows their Move Speed and Attack Speed by <b>30%</b> for <b>3s</b>.",\r
          "id": "p_117"\r
        },\r
        {\r
          "name": "WRAITH RENEWAL",\r
          "description": "While in <b>[Wraith Form]</b>, restore <b>10%</b> of your Life every Is. Double this while below <b>50%</b> Life.",\r
          "id": "p_118"\r
        }\r
      ],\r
      "Soldier: 76": [\r
        {\r
          "name": "PERIPHERAL PULSE",\r
          "description": "During <b>[Tactical Visor]</b>, <b>[Pulse Rifle]</b> shoots at <b>1</b> additional enemy, dealing <b>50%</b> damage.",\r
          "id": "p_119"\r
        },\r
        {\r
          "name": "SUPER VISOR",\r
          "description": "After using <b>[Helix Rocket]</b>, activate <b>[Tactical Visor]</b> for <b>0.5s</b>.",\r
          "id": "p_120"\r
        },\r
        {\r
          "name": "CHAINGUN",\r
          "description": "While continuously shooting <b>[Pulse Rifle]</b>, each shot grants <b>0.4%</b> Weapon Power, stacking up to <b>100</b> times.",\r
          "id": "p_121"\r
        },\r
        {\r
          "name": "MAN ON THE RUN",\r
          "description": "During <b>[Sprint]</b>, restore <b>10%</b> of your Ammo every Is and increase your Max Ammo by <b>10%</b> until you reload, stacking up to <b>10 times</b>.",\r
          "id": "p_122"\r
        },\r
        {\r
          "name": "CRATERED",\r
          "description": "Increase <b>[Helix Rocket]</b> explosion radius by <b>40%</b> and explosion damage by <b>15%</b>.",\r
          "id": "p_123"\r
        },\r
        {\r
          "name": "DOUBLE HELIX",\r
          "description": "<b>[Helix Rocket]</b> fires a second homing <b>[Helix Rocket]</b> that deals <b>70%</b> <b>reduced</b> damage.",\r
          "id": "p_124"\r
        },\r
        {\r
          "name": "HUNKER DOWN",\r
          "description": "When <b>[Helix Rocket]</b> deals damage, create a <b>[Biotic Field]</b> with a <b>50% reduced</b> duration at your position.",\r
          "id": "p_125"\r
        },\r
        {\r
          "name": "BACK OFF",\r
          "description": "Enemies within your <b>[Biotic Field]</b> take damage equal to <b>100%</b> of its healing output.",\r
          "id": "p_126"\r
        },\r
        {\r
          "name": "BIOTIC BULLSEYE",\r
          "description": "While in <b>[Biotic Field]</b>, critical hits restore <b>10%</b> Max Ammo and extend the duration of <b>[Biotic Field]</b> by <b>0.5s</b>, up to <b>5s</b>.",\r
          "id": "p_127"\r
        },\r
        {\r
          "name": "FRONTLINERS",\r
          "description": "Allies in range of your <b>[Biotic Field]</b> when it spawns gain <b>Overhealth</b> equal to <b>30%</b> of your max Life for <b>3s</b>.",\r
          "id": "p_128"\r
        },\r
        {\r
          "name": "ON ME!",\r
          "description": "<b>[Biotic Field]</b> moves with you and grants you <b>20%</b> increased Max Life while active.",\r
          "id": "p_129"\r
        },\r
        {\r
          "name": "TRACK AND FIELD",\r
          "description": "During <b>[Sprint]</b>, <b>[Biotic Field]</b> cooldown refreshes <b>150%</b> faster.",\r
          "id": "p_130"\r
        }\r
      ],\r
      "Ana": [\r
        {\r
          "name": "NO SCOPE NEEDED",\r
          "description": "Landing unscoped shots with <b>[Biotic Rifle]</b> grants <b>10%</b> Attack Speed for <b>2s</b>, stacking up to <b>3 times</b>.",\r
          "id": "p_131"\r
        },\r
        {\r
          "name": "PINPOINT PRESCRIPTION",\r
          "description": "<b>[Biotic Rifle]</b> can now critically hit both allies and enemies.",\r
          "id": "p_132"\r
        },\r
        {\r
          "name": "TACTICAL RIFLE",\r
          "description": "While scoped, <b>[Biotic Rifle]</b> will lock-on to allies for guaranteed hits.",\r
          "id": "p_133"\r
        },\r
        {\r
          "name": "COMFY CLOUD",\r
          "description": "<b>[Sleep Dart]</b> explodes on contact, hitting targets within <b>3m</b>, but <b>Sleep</b> has a <b>50%</b> reduced duration.",\r
          "id": "p_134"\r
        },\r
        {\r
          "name": "DREAMY",\r
          "description": "<b>[Sleep Dart]</b> can hit allies, healing <b>80%</b> of their max Life over <b>4s</b> instead of putting them to sleep.",\r
          "id": "p_135"\r
        },\r
        {\r
          "name": "SLEEP REGIMEN",\r
          "description": "Gain 50 Health.\\nWhen you apply Sleep to an enemy, gain 10 Health, up to 150.",\r
          "id": "p_136"\r
        },\r
        {\r
          "name": "HOME REMEDY",\r
          "description": "<b>[Biotic Grenade]</b> grants <b>Overhealth</b> equal to <b>200%</b> of its healing.",\r
          "id": "p_137"\r
        },\r
        {\r
          "name": "TIME OUT",\r
          "description": "<b>[Biotic Grenade]</b> now knocks enemies back and reduces their Move Speed by for 1.<b>5s</b>.",\r
          "id": "p_138"\r
        },\r
        {\r
          "name": "VENOMOUS",\r
          "description": "<b>[Biotic Grenade]</b> deals an additional <b class=\\"stat-ap\\">50</b> damage over its duration to enemies affected.",\r
          "id": "p_139"\r
        },\r
        {\r
          "name": "MY TURN",\r
          "description": "<b>[Nano Boost]</b> also applies to yourself for <b>50%</b> of its duration.",\r
          "id": "p_140"\r
        },\r
        {\r
          "name": "OUR TURN",\r
          "description": "<b>[Nano Boost]</b> also affects other allies in your line of sight, but it has a <b>50%</b> reduced duration on them.",\r
          "id": "p_141"\r
        },\r
        {\r
          "name": "YOUR FULL POTENTIAL",\r
          "description": "<b>[Nano Boost]</b> also grants the target <b>20%</b> Ultimate Charge and <b class=\\"stat-ap\\">200</b> <b>Overhealth</b>.",\r
          "id": "p_142"\r
        }\r
      ],\r
      "Juno": [\r
        {\r
          "name": "MEDIMASTER",\r
          "description": "<b>[Mediblaster]</b> can now critically hit both allies and enemies.",\r
          "id": "p_143"\r
        },\r
        {\r
          "name": "STINGER",\r
          "description": "<b>[Mediblaster]</b> deals an additional <b class=\\"stat-ap\\">10</b> damage to enemies over <b>1s</b>.\\n(Does not stack).",\r
          "id": "p_144"\r
        },\r
        {\r
          "name": "COSMIC COOLANT",\r
          "description": "<b>[Pulsar Torpedoes]</b> cooldown is reduced by <b>0.5s</b> for each target it hits.",\r
          "id": "p_145"\r
        },\r
        {\r
          "name": "MEDICINAL MISSILES",\r
          "description": "<b>[Pulsar Torpedoes]</b> heal for an extra <b class=\\"stat-ap\\">30</b> life and causes allies hit to receive <b>50%</b> more healing for <b>3s</b>.",\r
          "id": "p_146"\r
        },\r
        {\r
          "name": "PULSAR PLUS",\r
          "description": "<b>[Pulsar Torpedoes]</b> gains <b>1</b> additional charge.",\r
          "id": "p_147"\r
        },\r
        {\r
          "name": "BLINK BOOSTS",\r
          "description": "<b>[Glide Boost]</b> gains <b>2</b> additional charges and has a <b>65%</b> reduced cooldown, but has <b>75%</b> <b>reduced</b> duration.",\r
          "id": "p_148"\r
        },\r
        {\r
          "name": "TORPEDO GLIDE",\r
          "description": "During <b>[Glide Boost]</b>, every <b>50</b> damage you deal reduces the cooldown of <b>[Pulsar Torpedoes]</b> by <b>1s</b>.",\r
          "id": "p_149"\r
        },\r
        {\r
          "name": "BLACK HOLE",\r
          "description": "<b>[Hyper Ring]</b> slows the Move Speed of enemies who pass through it by <b>35%</b> for <b>2s</b>.",\r
          "id": "p_150"\r
        },\r
        {\r
          "name": "HYPER HEALER",\r
          "description": "Allies affected by <b>[Hyper Ring]</b> gain <b class=\\"stat-ap\\">100</b> <b>Overhealth</b>.",\r
          "id": "p_151"\r
        },\r
        {\r
          "name": "RALLY RING",\r
          "description": "Reduce <b>[Hyper Ring]</b>'s cooldown by <b>1s</b> when an ally passes through it.",\r
          "id": "p_152"\r
        },\r
        {\r
          "name": "ORBITAL ALIGNMENT",\r
          "description": "Enemies inside of <b>[Orbital Ray]</b> lose <b>35%</b> Move Speed. Allies inside of it gain <b>25%</b> Move Speed.",\r
          "id": "p_153"\r
        },\r
        {\r
          "name": "STELLAR FOCUS",\r
          "description": "<b>[Orbital Ray]</b> now follows you and its duration is increased by <b>35%</b>.",\r
          "id": "p_154"\r
        }\r
      ],\r
      "Kiriko": [\r
        {\r
          "name": "FOXY FIREWORKS",\r
          "description": "After reloading, your next <b>3</b> thrown <b>[Kunai]</b> explode on contact, dealing <b class=\\"stat-wp\\">20</b> damage to nearby enemies.",\r
          "id": "p_155"\r
        },\r
        {\r
          "name": "KEEN KUNAI",\r
          "description": "<b>[Kunai]</b> critical hits decrease active ability cooldowns by <b>15%</b> and refund <b>3</b> ammo.",\r
          "id": "p_156"\r
        },\r
        {\r
          "name": "TRIPLE THREAT",\r
          "description": "After using <b>[Swift Step]</b>, for <b>4s</b>, your secondary fire throws <b>2</b> additional <b>[Kunai]</b> in a spread that deal <b>50%</b> less damage.",\r
          "id": "p_157"\r
        },\r
        {\r
          "name": "LEAF ON THE WIND",\r
          "description": "<b>[Healing Ofuda]</b> bounces to another ally up to <b>2</b> times, healing for <b>30%</b> of the normal amount.",\r
          "id": "p_158"\r
        },\r
        {\r
          "name": "SELF-CARE",\r
          "description": "When you use <b>[Healing Ofuda]</b>, heal yourself for <b>15%</b> of your max Life.",\r
          "id": "p_159"\r
        },\r
        {\r
          "name": "SUPPORTED SHOOTING",\r
          "description": "When <b>[Healing Ofuda]</b> heals allies, grant them <b>20%</b> increased Attack Speed for <b>3s</b>.",\r
          "id": "p_160"\r
        },\r
        {\r
          "name": "CLONE CONJURATION",\r
          "description": "After using <b>[Swift Step]</b>, create a clone of yourself that lasts for <b>5s</b>.",\r
          "id": "p_161"\r
        },\r
        {\r
          "name": "FLEET FOOT",\r
          "description": "<b>[Swift Step]</b> can be used directionally without a target.",\r
          "id": "p_162"\r
        },\r
        {\r
          "name": "CLEANSING CHARGE",\r
          "description": "When you cleanse negative effects with <b>[Protection Suzu]</b>, gain <b>5%</b> Ultimate Charge for each hero cleansed.",\r
          "id": "p_163"\r
        },\r
        {\r
          "name": "TWO-ZU",\r
          "description": "<b>[Protection Suzu]</b> gains an additional charge.",\r
          "id": "p_164"\r
        },\r
        {\r
          "name": "CROSSING GUARD",\r
          "description": "<b>[Kitsune Rush]</b> now also reduces enemies Move Speed by <b>50%</b> for <b>2s</b>.",\r
          "id": "p_165"\r
        },\r
        {\r
          "name": "SPIRIT VEIL",\r
          "description": "Using <b>[Kitsune Rush]</b> cleanses Kiriko of negative effects, and makes her <b>Invulnerable</b> for <b>4s</b>.",\r
          "id": "p_166"\r
        }\r
      ],\r
      "Lúcio": [\r
        {\r
          "name": "FAST FORWARD",\r
          "description": "While above <b>50%</b> Move Speed, increase damage by <b>30%</b>.",\r
          "id": "p_167"\r
        },\r
        {\r
          "name": "SIGNATURE SHIFT",\r
          "description": "After using an ability, your next <b>[Sonic Amplifier]</b> shot shoots a volley of <b>6</b> ammo with <b>80%</b> increased projectile size.",\r
          "id": "p_168"\r
        },\r
        {\r
          "name": "SONIC BOOM",\r
          "description": "<b>[Sonic Amplifier]</b> Damage heals all allies affected by <b>[Crossfade]</b> equal to <b>30%</b> of damage dealt.",\r
          "id": "p_169"\r
        },\r
        {\r
          "name": "MIXTAPE",\r
          "description": "When switching to <b>[Healing Boost]</b>, <b>[Crossfade]</b> heals for <b>50%</b> of <b>[Crossfade]</b> healing for every <b>1s</b> <b>[Speed Boost]</b> was active.",\r
          "id": "p_170"\r
        },\r
        {\r
          "name": "MEGAPHONE",\r
          "description": "+<b>15%</b> <b>[Amp It Up]</b> Duration\\nWhile <b>[Amp It Up]</b> is active, <b>[Crossfade]</b> radius is increased by <b>150%</b>.",\r
          "id": "p_171"\r
        },\r
        {\r
          "name": "RADIO EDIT",\r
          "description": "After using <b>[Amp It Up]</b>, trigger a <b>[Sound Barrier]</b> with <b>85%</b> <b>reduced</b> <b>Overhealth</b>.",\r
          "id": "p_172"\r
        },\r
        {\r
          "name": "VIVACE",\r
          "description": "While <b>[Wallriding]</b> or airborne, <b>[Soundwave]</b> cooldown refreshes <b>25%</b> faster and adds <b>1</b> Max Ammo per <b>1s</b> until you reload.",\r
          "id": "p_173"\r
        },\r
        {\r
          "name": "WALLVIBING",\r
          "description": "While <b>[Wallriding]</b> or airborne, gain temporary <b>Overhealth</b> equal to <b>3%</b> of your life every <b>1s</b>, up to <b>30%</b>.",\r
          "id": "p_174"\r
        },\r
        {\r
          "name": "CROWD PLEASER",\r
          "description": "After using <b>[Soundwave]</b>, heal all allies affected by <b>[Crossfade]</b> for <b>100%</b> of <b>[Crossfade]</b> healing.",\r
          "id": "p_175"\r
        },\r
        {\r
          "name": "LET'S BOUNCE",\r
          "description": "<b>[Soundwave]</b> has <b>25%</b> increased knockback and deals <b class=\\"stat-ap\\">25</b> bonus damage if the target hits a wall.",\r
          "id": "p_176"\r
        },\r
        {\r
          "name": "REVERB",\r
          "description": "Gain <b>1</b> extra charge of <b>[Soundwave]</b>.",\r
          "id": "p_177"\r
        },\r
        {\r
          "name": "BEAT DROP",\r
          "description": "<b>20%</b> Ultimate Cost Reduction.\\nLanding on an enemy with <b>[Sound Barrier]</b> deals up to <b class=\\"stat-ap\\">200</b> damage.",\r
          "id": "p_178"\r
        }\r
      ],\r
      "Mercy": [\r
        {\r
          "name": "DISTORTION",\r
          "description": "Allies boosted by <b>[Caduceus Staff]</b> gain Lifesteal.",\r
          "id": "p_179"\r
        },\r
        {\r
          "name": "GLASS EXTRA FULL",\r
          "description": "Healing from <b>[Caduceus Staff]</b> targeting full health allies is converted to <b>Overhealth</b>, up to 50.",\r
          "id": "p_180"\r
        },\r
        {\r
          "name": "PROTECTIVE BEAM",\r
          "description": "<b>[Caduceus Staff]</b> targets above <b>80%</b> Life gain <b>10%</b> <b>Damage Reduction</b>.",\r
          "id": "p_181"\r
        },\r
        {\r
          "name": "SERENITY",\r
          "description": "<b>[Sympathetic Recovery]</b> heals for <b>20%</b> more and heals you even while you are healing a full health ally.",\r
          "id": "p_182"\r
        },\r
        {\r
          "name": "THREADS OF FATE",\r
          "description": "<b>[Caduceus Staff]</b> chains to your previous target for <b>3s</b>, at <b>50%</b> effectiveness.",\r
          "id": "p_183"\r
        },\r
        {\r
          "name": "BATTLE MEDIC",\r
          "description": "Every <b>1s</b> your Staff is attached, <b>[Caduceus Blaster]</b> gains <b>4%</b> Attack Speed (stacks <b>10 times</b>) until you reload or swap to your Staff.",\r
          "id": "p_184"\r
        },\r
        {\r
          "name": "EQUIVALENT EXCHANGE",\r
          "description": "You have <b>3 charges</b> of <b>[Resurrect]</b> with <b>33%</b> reduced cast time, but their cooldowns only reset at the start of a round.",\r
          "id": "p_185"\r
        },\r
        {\r
          "name": "FIRST RESPONDER",\r
          "description": "When you <b>[Resurrect]</b> an ally, you both gain <b class=\\"stat-ap\\">250</b> <b>Overhealth</b> for <b>6s</b>.",\r
          "id": "p_186"\r
        },\r
        {\r
          "name": "RENAISSANCE",\r
          "description": "After succesfully using <b>[Resurrect]</b>, activate <b>[Valkyrie]</b> for <b>5s</b>.",\r
          "id": "p_187"\r
        },\r
        {\r
          "name": "THE WHAMBULANCE",\r
          "description": "When <b>[Guardian Angel]</b> ends, heal your target for <b class=\\"stat-ap\\">4</b> Life for every <b>1m</b> you traveled.",\r
          "id": "p_188"\r
        },\r
        {\r
          "name": "TRIAGE UNIT",\r
          "description": "When using <b>[Guardian Angel]</b> on allies below <b>50%</b> Life, <b>[Caduceus Staff]</b> heals them <b>30%</b> more for <b>3s</b>.",\r
          "id": "p_189"\r
        },\r
        {\r
          "name": "CREPUSCULAR CIRCLE",\r
          "description": "While <b>[Valkyrie]</b> is active, the healing and damage boost of <b>[Caduceus Staff]</b> are automatically applied to nearby allies.",\r
          "id": "p_190"\r
        }\r
      ],\r
      "Moira": [\r
        {\r
          "name": "CHAIN GRASP",\r
          "description": "After using <b>[Biotic Orb]</b>, <b>[Biotic Grasp]</b>'s secondary fire chains to <b>2</b> additional targets within <b>10m</b> for <b>3s</b>.",\r
          "id": "p_191"\r
        },\r
        {\r
          "name": "DECONSTRUCTION",\r
          "description": "After you spend 50 <b>[Biotic Energy]</b>, deal <b>20%</b> increased damage for <b>6s</b>.",\r
          "id": "p_192"\r
        },\r
        {\r
          "name": "EMPOWERING YOU",\r
          "description": "<b>[Biotic Grasp]</b>'s secondary fire can target allies, increasing their damage by <b>15%</b>.",\r
          "id": "p_193"\r
        },\r
        {\r
          "name": "ETHEREAL EXCISION",\r
          "description": "While aiming at an enemy's head with <b>[Biotic Grasp]</b>'s secondary fire, gain <b>30%</b> Move Speed, <b>30%</b> Lifesteal, and restore <b>100%</b> more Biotic Energy.",\r
          "id": "p_194"\r
        },\r
        {\r
          "name": "OPTIMAL OVERFLOW",\r
          "description": "After you spend 50 <b>[Biotic Energy]</b>, launch the last selected <b>[Biotic Orb]</b> with <b>75%</b> reduced duration.",\r
          "id": "p_195"\r
        },\r
        {\r
          "name": "PRECARIOUS POTENCY",\r
          "description": "Allies healed by your <b>[Biotic Grasp]</b> are healed for an additional <b>25%</b> of <b>[Biotic Grasp]</b>'s healing over <b>5s</b>.",\r
          "id": "p_196"\r
        },\r
        {\r
          "name": "CROSS-ORBAL",\r
          "description": "<b>[Biotic Orb]</b> launches an additional <b>[Biotic Orb]</b> of the other type with <b>50%</b> reduced capacity.",\r
          "id": "p_197"\r
        },\r
        {\r
          "name": "MULTIBALL",\r
          "description": "<b>[Biotic Orb]</b> launches <b>2</b> additional orbs of the chosen type with <b>85%</b> <b>reduced</b> effectiveness.",\r
          "id": "p_198"\r
        },\r
        {\r
          "name": "PHANTASM",\r
          "description": "When you use <b>[Fade]</b>, spawn a stationary copy of the last selected <b>[Biotic Orb]</b> with <b>50%</b> <b>reduced</b> duration.",\r
          "id": "p_199"\r
        },\r
        {\r
          "name": "SCIENTIFIC DEATHOD",\r
          "description": "While using <b>[Fade]</b>, passing through enemies grants <b>5%</b> Ultimate Charge and <b>Overhealth</b> equal to <b>15%</b> of your max Life.",\r
          "id": "p_200"\r
        },\r
        {\r
          "name": "VOIDHOPPERS",\r
          "description": "<b>[Fade]</b> also phases other allies within <b>8m</b> for 0.<b>25s</b> and grants them <b>Overhealth</b> equal to <b>20%</b> of your max Life.",\r
          "id": "p_201"\r
        },\r
        {\r
          "name": "DESTRUCTION'S DIVIDE",\r
          "description": "<b>[Coalescence]</b> can be toggled between pure healing or pure damage, with <b>30%</b> greater effect.",\r
          "id": "p_202"\r
        }\r
      ],\r
      "Freja": [\r
        {\r
          "name": "CYCLONE",\r
          "description": "When you use <b>[Updraft]</b>, fire a <b>[Take Aim]</b> bolt at your crosshair."\r
        },\r
        {\r
          "name": "SEEKERPOINT",\r
          "description": "When <b>[Take Aim]</b> bolt sticks an enemy, automatically fire <b>3</b> additional crossbow shots at them that deal <b><b>66%</b> reduced </b>damage."\r
        },\r
        {\r
          "name": "SEISMIC SHOT",\r
          "description": "<b>[Take Aim]</b> explosion radius is increased by <b>33%</b>. Double this if the bolt is stuck to a target."\r
        },\r
        {\r
          "name": "THREAD THE NEEDLE",\r
          "description": "<b>[Take Aim]</b> bolts pierce enemies. Additional explosions deal <b>66% reduced</b> damage."\r
        },\r
        {\r
          "name": "DEEP POCKETS",\r
          "description": "When you use an ability, restore <b>25%</b> of your Max Ammo."\r
        },\r
        {\r
          "name": "FORAGER",\r
          "description": "For <b>2s</b> after using <b>[Quick Dash]</b>, <b>[Revdraw Crossbow]</b> hits heal you for <b>4%</b> of your Max Life."\r
        },\r
        {\r
          "name": "PEAK PERFORMANCE",\r
          "description": "While firing <b>[Revdraw Crossbow]</b>, your fall speed is decreased by <b>80%</b>."\r
        },\r
        {\r
          "name": "REDUX",\r
          "description": "<b>[Revdraw Crossbow]</b> hits against targets stuck by a <b>[Take Aim]</b> bolt or <b>[Bola Shot]</b> reduce the cooldown of your abilities by <b>5%</b> and refunds <b>1</b> ammo."\r
        },\r
        {\r
          "name": "VOLLEY À DEUX",\r
          "description": "Every fifth <b>[Revdraw Crossbow]</b> shot fires an additional <b>2</b> bolts in a spread that deal <b>33%</b> reduced damage."\r
        },\r
        {\r
          "name": "LILLE FÆLDE",\r
          "description": "After using <b>[Updraft]</b>, your next <b>[Take Aim]</b> while airborne fires a <b>[Bola Shot]</b> that deals <b>60%</b> <b>reduced</b> damage instead of an explosive bolt."\r
        },\r
        {\r
          "name": "SO COOKED",\r
          "description": "<b>[Bola Shot]</b>'s damaging zone deals <b>30%</b> more damage and lingers for <b>2s</b>.\\n<b>[Bola Shot]</b> eliminations count towards <b>[Bounty Hunting]</b>."\r
        },\r
        {\r
          "name": "MIGHTY GUST",\r
          "description": "<b>[Updraft]</b> launches a wind blast towards your crosshair, knocking back enemies and dealing <b class=\\"stat-ap\\">40</b> damage."\r
        }\r
      ]\r
    }\r
  }\r
}`,fm=`{\r
  "IRONSIGHTS": {\r
    "attributes": [\r
      {\r
        "type": "AS",\r
        "value": "10%"\r
      },\r
      {\r
        "type": "WP",\r
        "value": "17%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "On average, you are about 30m away from your taget, giving you somewhere between a 10-20% weapon power bonus. 17% is a fair estimate."\r
      }\r
    ]\r
  },\r
  "TRIPOD": {\r
    "attributes": [\r
      {\r
        "type": "WP",\r
        "value": "13%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "You gain 10% weapon power when above. With the base 5%, estimate 8% gain, a total of 13% WP."\r
      }\r
    ]\r
  },\r
  "INFRARED LENSES": {\r
    "attributes": [\r
      {\r
        "type": "AP",\r
        "value": "18%"\r
      },\r
      {\r
        "type": "WP",\r
        "value": "5%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "Item itself provides 15AP. Since dynamite and power-based effect also triggers burning, while themself don't trigger burning damage bonus, we estimate +10AP and +5WP that benefits from burning damage bonus."\r
      }\r
    ]\r
  },\r
  "FIRESTARTER": {\r
    "attributes": [\r
      {\r
        "type": "Health",\r
        "value": "50"\r
      },\r
      {\r
        "type": "ALS",\r
        "value": "30%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "Only life steal from burning damage, so estimate 5% ALS is missing from Bob and coach gun"\r
      }\r
    ]\r
  }\r
}`;function dm(){const[i,c]=$.useState([]),[f,s]=$.useState([]),[d,p]=$.useState([]),y=ct(),O=me(fn=>fn.input.present),{hero:S,cash:v,equipped:N,toBuy:L,avoid:j,avoidEnabled:W,weights:J,minValueEnabled:K,minAttrGroups:P}=O,[bn,sn]=$.useState(null),[on,Z]=$.useState([]);$.useEffect(()=>{const fn=JSON.parse(om),xn=JSON.parse(fm),Dn=[],D=(M,B,w)=>{w.forEach(Y=>{const en=xn[Y.name],X={...Y,tab:M,rarity:B};en!=null&&en.attributes&&(X.attributes=en.attributes),Dn.push(X)})};["weapon","ability","survival"].forEach(M=>{const B=fn.tabs[M];D(M,"common",B.common),D(M,"rare",B.rare),D(M,"epic",B.epic)}),c(Dn);const z=new Set,q=new Map,ln=new Set;Dn.forEach(M=>{M.character&&z.add(M.character),M.attributes.forEach(B=>{const w=(q.get(B.type)??0)+1;q.set(B.type,w),w===2&&ln.add(B.type)})}),ln.delete("description"),ln.delete("Editor's Note");const h=Array.from(ln).sort(Py);s(Array.from(z).sort()),p(h),y(kb({index:0,type:h[0]}))},[]),$.useEffect(()=>{const fn=N.filter(xn=>xn).length;L+fn>6&&y(Xb(Math.max(0,6-fn)))},[y,N,L]);function H(){return N.map(fn=>i.find(xn=>xn.id===fn)).filter(fn=>!!fn)}function F(){if(!S||v<0||H().reduce((xn,Dn)=>xn+Dn.cost,0)>v||L+H().length>6||J.length===0)return!1;if(K){for(const xn of P)if(xn.attrs.length===0||xn.value<0)return!1}return!0}function hn(fn){const xn=ls(fn);return xb(xn,J)}function mn(fn){return!K||Jy([...fn,...H()],P)}function vn(){y(di(""));const fn=H(),xn=fn.reduce((nn,Tn)=>nn+Tn.cost,0),Dn=v-xn;if(Dn<0){y(di("Equipped items cost exceeds total cash"));return}const D=new Set(J.map(nn=>nn.type)),z=i.filter(nn=>(!nn.character||nn.character===S)&&!N.includes(nn.id??"")&&(!W||!j.includes(nn.id??""))&&nn.attributes.some(Tn=>D.has(Tn.type))),q=L;if(q===0){if(!mn([])){y(di("Minimum attribute values not met"));return}const nn=hn(fn);sn({items:[],cost:0,score:nn}),Z([]);return}const ln=z.map(nn=>({item:nn,score:hn([nn])}));ln.sort((nn,Tn)=>Tn.score-nn.score);const h=[0];for(const nn of ln)h.push(h[h.length-1]+nn.score);let M=-1/0,B=0,w=[];const Y=fn.length+q===6,en=ln.length;function X(nn,Tn,ue,Ge){if(mn(Tn)&&(Ge>M||Ge===M&&(Y?ue>B:ue<B)?(M=Ge,B=ue,w=[{items:[...Tn],cost:ue,score:Ge}]):Ge===M&&(Y?ue<=B:ue>=B)&&w.push({items:[...Tn],cost:ue,score:Ge})),Tn.length===q||nn>=en)return;const Oi=q-Tn.length;if(!(Ge+(h[Math.min(en,nn+Oi)]-h[nn])<M))for(let ir=nn;ir<en;ir++){const Lt=ln[ir];ue+Lt.item.cost>Dn||(Tn.push(Lt.item),X(ir+1,Tn,ue+Lt.item.cost,Ge+Lt.score),Tn.pop())}}if(X(0,[],0,0),w.length===0){y(di("Insufficient cash for any purchase"));return}const[Gn,...On]=w.sort((nn,Tn)=>Y?Tn.cost-nn.cost:nn.cost-Tn.cost),je=On.filter(nn=>Y?nn.cost<Gn.cost:nn.cost>Gn.cost).sort((nn,Tn)=>Y?Tn.cost-nn.cost:nn.cost-Tn.cost),ar=ls([...Gn.items,...fn]),lr=J.map(nn=>{const Tn=ar.get(nn.type)??0;return{type:nn.type,sum:Tn,contrib:Tn*nn.weight}});sn({items:Gn.items,cost:Gn.cost,score:xb(ar,J),breakdown:lr}),Z(je.map(nn=>({...nn,score:hn([...nn.items,...fn])})))}if(i.length===0)return g.jsx("div",{className:"p-4",children:"Loading..."});const Ce=i.filter(fn=>!S||!fn.character||fn.character===S),ee=H(),wn=ee.reduce((fn,xn)=>fn+xn.cost,0);return g.jsxs("div",{className:"bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 space-y-8",children:[g.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",children:[g.jsx(rm,{heroes:f,attrTypes:d,filteredItems:Ce,onSubmit:vn,validate:F}),g.jsx(lm,{eqItems:ee,eqCost:wn,cash:v,results:bn,alternatives:on})]}),g.jsx("div",{className:"max-w-7xl mx-auto",children:g.jsx(sm,{})})]})}const xe={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},bi={undo(){return{type:xe.UNDO}},redo(){return{type:xe.REDO}},jumpToFuture(i){return{type:xe.JUMP_TO_FUTURE,index:i}},jumpToPast(i){return{type:xe.JUMP_TO_PAST,index:i}},jump(i){return{type:xe.JUMP,index:i}},clearHistory(){return{type:xe.CLEAR_HISTORY}}};function Mb(i,c=[]){return Array.isArray(i)?i:typeof i=="string"?[i]:c}function bm(i){return typeof i.present<"u"&&typeof i.future<"u"&&typeof i.past<"u"&&Array.isArray(i.future)&&Array.isArray(i.past)}function nr(i,c,f,s=null){return{past:i,present:c,future:f,group:s,_latestUnfiltered:c,index:i.length,limit:i.length+f.length+1}}let _i,Me;const is={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function pm(){Me={header:[],prev:[],action:[],next:[],msgs:[]}}function hm(){const{header:i,prev:c,next:f,action:s,msgs:d}=Me;console.group?(console.groupCollapsed(...i),console.log(...c),console.log(...s),console.log(...f),console.log(...d),console.groupEnd()):(console.log(...i),console.log(...c),console.log(...s),console.log(...f),console.log(...d))}function us(i,c,f){return[`%c${i}`,`color: ${c}; font-weight: bold`,f]}function ym(i,c){pm(),_i&&(console.group?(Me.header=["%credux-undo","font-style: italic","action",i.type],Me.action=us("action",is.action,i),Me.prev=us("prev history",is.prevState,c)):(Me.header=["redux-undo action",i.type],Me.action=["action",i],Me.prev=["prev history",c]))}function we(i){_i&&(console.group?Me.next=us("next history",is.nextState,i):Me.next=["next history",i],hm())}function $n(...i){_i&&(Me.msgs=Me.msgs.concat([...i,`
`]))}function mm(i){_i=i}function Pc(i,c){const f=nr([],i,[]);return c&&(f._latestUnfiltered=null),f}function vm(i,c,f,s){const d=i.past.length+1;$n("inserting",c),$n("new free: ",f-d);const{past:p,_latestUnfiltered:y}=i,O=f&&f<=d,S=p.slice(O?1:0),v=y!=null?[...S,y]:S;return nr(v,c,[],s)}function Ib(i,c){if(c<0||c>=i.future.length)return i;const{past:f,future:s,_latestUnfiltered:d}=i,p=[...f,d,...s.slice(0,c)],y=s[c],O=s.slice(c+1);return nr(p,y,O)}function Jb(i,c){if(c<0||c>=i.past.length)return i;const{past:f,future:s,_latestUnfiltered:d}=i,p=f.slice(0,c),y=[...f.slice(c+1),d,...s],O=f[c];return nr(p,O,y)}function Fc(i,c){return c>0?Ib(i,c-1):c<0?Jb(i,i.past.length+c):i}function gm(i,c){return c.indexOf(i)>-1?i:!i}function Sm(i,c={}){mm(c.debug);const f={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:xe.UNDO,redoType:xe.REDO,jumpToPastType:xe.JUMP_TO_PAST,jumpToFutureType:xe.JUMP_TO_FUTURE,jumpType:xe.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...c,initTypes:Mb(c.initTypes,["@@redux-undo/INIT"]),clearHistoryType:Mb(c.clearHistoryType,[xe.CLEAR_HISTORY])},s=f.neverSkipReducer?(p,y,...O)=>({...p,present:i(p.present,y,...O)}):p=>p;let d;return(p=d,y={},...O)=>{ym(y,p);let S=p;if(!d)if($n("history is uninitialized"),p===void 0){const N=i(p,{type:"@@redux-undo/CREATE_HISTORY"},...O);return S=Pc(N,f.ignoreInitialState),$n("do not set initialState on probe actions"),we(S),S}else bm(p)?(S=d=f.ignoreInitialState?p:nr(p.past,p.present,p.future),$n("initialHistory initialized: initialState is a history",d)):(S=d=Pc(p,f.ignoreInitialState),$n("initialHistory initialized: initialState is not a history",d));let v;switch(y.type){case void 0:return S;case f.undoType:return v=Fc(S,-1),$n("perform undo"),we(v),s(v,y,...O);case f.redoType:return v=Fc(S,1),$n("perform redo"),we(v),s(v,y,...O);case f.jumpToPastType:return v=Jb(S,y.index),$n(`perform jumpToPast to ${y.index}`),we(v),s(v,y,...O);case f.jumpToFutureType:return v=Ib(S,y.index),$n(`perform jumpToFuture to ${y.index}`),we(v),s(v,y,...O);case f.jumpType:return v=Fc(S,y.index),$n(`perform jump to ${y.index}`),we(v),s(v,y,...O);case gm(y.type,f.clearHistoryType):return v=Pc(S.present,f.ignoreInitialState),$n("perform clearHistory"),we(v),s(v,y,...O);default:if(v=i(S.present,y,...O),f.initTypes.some(L=>L===y.type))return $n("reset history due to init action"),we(d),d;if(S._latestUnfiltered===v)return S;if(typeof f.filter=="function"&&!f.filter(y,v,S)){const L=nr(S.past,v,S.future,S.group);return f.syncFilter||(L._latestUnfiltered=S._latestUnfiltered),$n("filter ignored action, not storing it in past"),we(L),L}const N=f.groupBy(y,v,S);if(N!=null&&N===S.group){const L=nr(S.past,v,S.future,S.group);return $n("groupBy grouped the action with the previous action"),we(L),L}return S=vm(S,v,f.limit,N),$n("inserted new state into history"),we(S),S}}}function Am(i){return`${i.hero} - $${i.cash}`}function Em({history:i}){const[c,f]=$.useState(!1),s=$.useRef(null);return $.useEffect(()=>{const d=p=>{s.current&&!s.current.contains(p.target)&&f(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),g.jsxs("div",{className:"relative",ref:s,children:[g.jsxs("button",{type:"button",onClick:()=>f(d=>!d),className:"flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:["History",g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),c&&g.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 bg-white text-sm shadow-lg",children:i.length>0?g.jsx("ul",{children:i.map((d,p)=>g.jsx("li",{className:"border-b px-3 py-2 last:border-none",children:Am(d)},p))}):g.jsx("p",{className:"p-3 text-gray-500",children:"No history"})})]})}function Rm(){const i=ct(),c=me(s=>s.input.past),f=me(s=>s.input.future);return $.useEffect(()=>{const s=d=>{d.ctrlKey&&d.key.toLowerCase()==="z"&&(d.preventDefault(),d.shiftKey?i(bi.redo()):i(bi.undo()))};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[i]),g.jsxs("div",{className:"mb-6 flex items-center justify-between gap-4",children:[g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{type:"button",disabled:c.length===0,onClick:()=>i(bi.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400",children:"Undo"}),g.jsx("button",{type:"button",disabled:f.length===0,onClick:()=>i(bi.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400",children:"Redo"})]}),g.jsx(Em,{history:c})]})}function Tm(){return g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-6 text-gray-800",children:g.jsxs("div",{className:"max-w-5xl mx-auto",children:[g.jsx(Rm,{}),g.jsx(dm,{})]})})}const _m=my({reducer:{input:Sm(ky)}});_h.createRoot(document.getElementById("root")).render(g.jsx($.StrictMode,{children:g.jsx(Yh,{store:_m,children:g.jsx(Tm,{})})}));
