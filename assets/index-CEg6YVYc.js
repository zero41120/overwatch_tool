(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function sy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var as={exports:{}},el={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function oy(){if(xb)return el;xb=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,d,p){var m=null;if(p!==void 0&&(m=""+p),d.key!==void 0&&(m=""+d.key),"key"in d){p={};for(var S in d)S!=="key"&&(p[S]=d[S])}else p=d;return d=p.ref,{$$typeof:r,type:c,key:m,ref:d!==void 0?d:null,props:p}}return el.Fragment=u,el.jsx=o,el.jsxs=o,el}var Nb;function fy(){return Nb||(Nb=1,as.exports=oy()),as.exports}var v=fy(),is={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function dy(){if(Db)return ce;Db=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),M=Symbol.iterator;function B(A){return A===null||typeof A!="object"?null:(A=M&&A[M]||A["@@iterator"],typeof A=="function"?A:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,q={};function z(A,j,X){this.props=A,this.context=j,this.refs=q,this.updater=X||G}z.prototype.isReactComponent={},z.prototype.setState=function(A,j){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,j,"setState")},z.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function W(){}W.prototype=z.prototype;function V(A,j,X){this.props=A,this.context=j,this.refs=q,this.updater=X||G}var ie=V.prototype=new W;ie.constructor=V,I(ie,z.prototype),ie.isPureReactComponent=!0;var F=Array.isArray,y={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function H(A,j,X,Y,J,ue){return X=ue.ref,{$$typeof:r,type:A,key:j,ref:X!==void 0?X:null,props:ue}}function K(A,j){return H(A.type,j,void 0,void 0,void 0,A.props)}function Z(A){return typeof A=="object"&&A!==null&&A.$$typeof===r}function ge(A){var j={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(X){return j[X]})}var Ne=/\/+/g;function De(A,j){return typeof A=="object"&&A!==null&&A.key!=null?ge(""+A.key):j.toString(36)}function fe(){}function te(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(fe,fe):(A.status="pending",A.then(function(j){A.status==="pending"&&(A.status="fulfilled",A.value=j)},function(j){A.status==="pending"&&(A.status="rejected",A.reason=j)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Ae(A,j,X,Y,J){var ue=typeof A;(ue==="undefined"||ue==="boolean")&&(A=null);var ee=!1;if(A===null)ee=!0;else switch(ue){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(A.$$typeof){case r:case u:ee=!0;break;case E:return ee=A._init,Ae(ee(A._payload),j,X,Y,J)}}if(ee)return J=J(A),ee=Y===""?"."+De(A,0):Y,F(J)?(X="",ee!=null&&(X=ee.replace(Ne,"$&/")+"/"),Ae(J,j,X,"",function($e){return $e})):J!=null&&(Z(J)&&(J=K(J,X+(J.key==null||A&&A.key===J.key?"":(""+J.key).replace(Ne,"$&/")+"/")+ee)),j.push(J)),1;ee=0;var Ue=Y===""?".":Y+":";if(F(A))for(var me=0;me<A.length;me++)Y=A[me],ue=Ue+De(Y,me),ee+=Ae(Y,j,X,ue,J);else if(me=B(A),typeof me=="function")for(A=me.call(A),me=0;!(Y=A.next()).done;)Y=Y.value,ue=Ue+De(Y,me++),ee+=Ae(Y,j,X,ue,J);else if(ue==="object"){if(typeof A.then=="function")return Ae(te(A),j,X,Y,J);throw j=String(A),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return ee}function D(A,j,X){if(A==null)return A;var Y=[],J=0;return Ae(A,Y,"","",function(ue){return j.call(X,ue,J++)}),Y}function k(A){if(A._status===-1){var j=A._result;j=j(),j.then(function(X){(A._status===0||A._status===-1)&&(A._status=1,A._result=X)},function(X){(A._status===0||A._status===-1)&&(A._status=2,A._result=X)}),A._status===-1&&(A._status=0,A._result=j)}if(A._status===1)return A._result.default;throw A._result}var P=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function be(){}return ce.Children={map:D,forEach:function(A,j,X){D(A,function(){j.apply(this,arguments)},X)},count:function(A){var j=0;return D(A,function(){j++}),j},toArray:function(A){return D(A,function(j){return j})||[]},only:function(A){if(!Z(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ce.Component=z,ce.Fragment=o,ce.Profiler=d,ce.PureComponent=V,ce.StrictMode=c,ce.Suspense=b,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return y.H.useMemoCache(A)}},ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cloneElement=function(A,j,X){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Y=I({},A.props),J=A.key,ue=void 0;if(j!=null)for(ee in j.ref!==void 0&&(ue=void 0),j.key!==void 0&&(J=""+j.key),j)!O.call(j,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&j.ref===void 0||(Y[ee]=j[ee]);var ee=arguments.length-2;if(ee===1)Y.children=X;else if(1<ee){for(var Ue=Array(ee),me=0;me<ee;me++)Ue[me]=arguments[me+2];Y.children=Ue}return H(A.type,J,void 0,void 0,ue,Y)},ce.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},ce.createElement=function(A,j,X){var Y,J={},ue=null;if(j!=null)for(Y in j.key!==void 0&&(ue=""+j.key),j)O.call(j,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(J[Y]=j[Y]);var ee=arguments.length-2;if(ee===1)J.children=X;else if(1<ee){for(var Ue=Array(ee),me=0;me<ee;me++)Ue[me]=arguments[me+2];J.children=Ue}if(A&&A.defaultProps)for(Y in ee=A.defaultProps,ee)J[Y]===void 0&&(J[Y]=ee[Y]);return H(A,ue,void 0,void 0,null,J)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:S,render:A}},ce.isValidElement=Z,ce.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:k}},ce.memo=function(A,j){return{$$typeof:h,type:A,compare:j===void 0?null:j}},ce.startTransition=function(A){var j=y.T,X={};y.T=X;try{var Y=A(),J=y.S;J!==null&&J(X,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(be,P)}catch(ue){P(ue)}finally{y.T=j}},ce.unstable_useCacheRefresh=function(){return y.H.useCacheRefresh()},ce.use=function(A){return y.H.use(A)},ce.useActionState=function(A,j,X){return y.H.useActionState(A,j,X)},ce.useCallback=function(A,j){return y.H.useCallback(A,j)},ce.useContext=function(A){return y.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,j){return y.H.useDeferredValue(A,j)},ce.useEffect=function(A,j,X){var Y=y.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(A,j)},ce.useId=function(){return y.H.useId()},ce.useImperativeHandle=function(A,j,X){return y.H.useImperativeHandle(A,j,X)},ce.useInsertionEffect=function(A,j){return y.H.useInsertionEffect(A,j)},ce.useLayoutEffect=function(A,j){return y.H.useLayoutEffect(A,j)},ce.useMemo=function(A,j){return y.H.useMemo(A,j)},ce.useOptimistic=function(A,j){return y.H.useOptimistic(A,j)},ce.useReducer=function(A,j,X){return y.H.useReducer(A,j,X)},ce.useRef=function(A){return y.H.useRef(A)},ce.useState=function(A){return y.H.useState(A)},ce.useSyncExternalStore=function(A,j,X){return y.H.useSyncExternalStore(A,j,X)},ce.useTransition=function(){return y.H.useTransition()},ce.version="19.1.0",ce}var Cb;function ai(){return Cb||(Cb=1,is.exports=dy()),is.exports}var ne=ai(),ls={exports:{}},nl={},rs={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function by(){return Mb||(Mb=1,function(r){function u(D,k){var P=D.length;D.push(k);e:for(;0<P;){var be=P-1>>>1,A=D[be];if(0<d(A,k))D[be]=k,D[P]=A,P=be;else break e}}function o(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var k=D[0],P=D.pop();if(P!==k){D[0]=P;e:for(var be=0,A=D.length,j=A>>>1;be<j;){var X=2*(be+1)-1,Y=D[X],J=X+1,ue=D[J];if(0>d(Y,P))J<A&&0>d(ue,Y)?(D[be]=ue,D[J]=P,be=J):(D[be]=Y,D[X]=P,be=X);else if(J<A&&0>d(ue,P))D[be]=ue,D[J]=P,be=J;else break e}}return k}function d(D,k){var P=D.sortIndex-k.sortIndex;return P!==0?P:D.id-k.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var m=Date,S=m.now();r.unstable_now=function(){return m.now()-S}}var b=[],h=[],E=1,M=null,B=3,G=!1,I=!1,q=!1,z=!1,W=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,ie=typeof setImmediate<"u"?setImmediate:null;function F(D){for(var k=o(h);k!==null;){if(k.callback===null)c(h);else if(k.startTime<=D)c(h),k.sortIndex=k.expirationTime,u(b,k);else break;k=o(h)}}function y(D){if(q=!1,F(D),!I)if(o(b)!==null)I=!0,O||(O=!0,De());else{var k=o(h);k!==null&&Ae(y,k.startTime-D)}}var O=!1,H=-1,K=5,Z=-1;function ge(){return z?!0:!(r.unstable_now()-Z<K)}function Ne(){if(z=!1,O){var D=r.unstable_now();Z=D;var k=!0;try{e:{I=!1,q&&(q=!1,V(H),H=-1),G=!0;var P=B;try{n:{for(F(D),M=o(b);M!==null&&!(M.expirationTime>D&&ge());){var be=M.callback;if(typeof be=="function"){M.callback=null,B=M.priorityLevel;var A=be(M.expirationTime<=D);if(D=r.unstable_now(),typeof A=="function"){M.callback=A,F(D),k=!0;break n}M===o(b)&&c(b),F(D)}else c(b);M=o(b)}if(M!==null)k=!0;else{var j=o(h);j!==null&&Ae(y,j.startTime-D),k=!1}}break e}finally{M=null,B=P,G=!1}k=void 0}}finally{k?De():O=!1}}}var De;if(typeof ie=="function")De=function(){ie(Ne)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,te=fe.port2;fe.port1.onmessage=Ne,De=function(){te.postMessage(null)}}else De=function(){W(Ne,0)};function Ae(D,k){H=W(function(){D(r.unstable_now())},k)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(D){D.callback=null},r.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<D?Math.floor(1e3/D):5},r.unstable_getCurrentPriorityLevel=function(){return B},r.unstable_next=function(D){switch(B){case 1:case 2:case 3:var k=3;break;default:k=B}var P=B;B=k;try{return D()}finally{B=P}},r.unstable_requestPaint=function(){z=!0},r.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=B;B=D;try{return k()}finally{B=P}},r.unstable_scheduleCallback=function(D,k,P){var be=r.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?be+P:be):P=be,D){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,D={id:E++,callback:k,priorityLevel:D,startTime:P,expirationTime:A,sortIndex:-1},P>be?(D.sortIndex=P,u(h,D),o(b)===null&&D===o(h)&&(q?(V(H),H=-1):q=!0,Ae(y,P-be))):(D.sortIndex=A,u(b,D),I||G||(I=!0,O||(O=!0,De()))),D},r.unstable_shouldYield=ge,r.unstable_wrapCallback=function(D){var k=B;return function(){var P=B;B=k;try{return D.apply(this,arguments)}finally{B=P}}}}(us)),us}var wb;function hy(){return wb||(wb=1,rs.exports=by()),rs.exports}var cs={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb;function py(){if(Hb)return tn;Hb=1;var r=ai();function u(b){var h="https://react.dev/errors/"+b;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)h+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(b,h,E){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:b,containerInfo:h,implementation:E}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(b,h){if(b==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tn.createPortal=function(b,h){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(u(299));return p(b,h,null,E)},tn.flushSync=function(b){var h=m.T,E=c.p;try{if(m.T=null,c.p=2,b)return b()}finally{m.T=h,c.p=E,c.d.f()}},tn.preconnect=function(b,h){typeof b=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(b,h))},tn.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},tn.preinit=function(b,h){if(typeof b=="string"&&h&&typeof h.as=="string"){var E=h.as,M=S(E,h.crossOrigin),B=typeof h.integrity=="string"?h.integrity:void 0,G=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;E==="style"?c.d.S(b,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:M,integrity:B,fetchPriority:G}):E==="script"&&c.d.X(b,{crossOrigin:M,integrity:B,fetchPriority:G,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},tn.preinitModule=function(b,h){if(typeof b=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var E=S(h.as,h.crossOrigin);c.d.M(b,{crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(b)},tn.preload=function(b,h){if(typeof b=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var E=h.as,M=S(E,h.crossOrigin);c.d.L(b,E,{crossOrigin:M,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},tn.preloadModule=function(b,h){if(typeof b=="string")if(h){var E=S(h.as,h.crossOrigin);c.d.m(b,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:E,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(b)},tn.requestFormReset=function(b){c.d.r(b)},tn.unstable_batchedUpdates=function(b,h){return b(h)},tn.useFormState=function(b,h,E){return m.H.useFormState(b,h,E)},tn.useFormStatus=function(){return m.H.useHostTransitionStatus()},tn.version="19.1.0",tn}var Lb;function yy(){if(Lb)return cs.exports;Lb=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),cs.exports=py(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function my(){if(Ub)return nl;Ub=1;var r=hy(),u=ai(),o=yy();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(p(e)!==e)throw Error(c(188))}function b(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return S(i),e;if(l===a)return S(i),n;l=l.sibling}throw Error(c(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,f=i.child;f;){if(f===t){s=!0,t=i,a=l;break}if(f===a){s=!0,a=i,t=l;break}f=f.sibling}if(!s){for(f=l.child;f;){if(f===t){s=!0,t=l,a=i;break}if(f===a){s=!0,a=l,t=i;break}f=f.sibling}if(!s)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function h(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=h(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,M=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),V=Symbol.for("react.consumer"),ie=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function te(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case z:return"Profiler";case q:return"StrictMode";case y:return"Suspense";case O:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case ie:return(e.displayName||"Context")+".Provider";case V:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:te(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return te(e(n))}catch{}}return null}var Ae=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},be=[],A=-1;function j(e){return{current:e}}function X(e){0>A||(e.current=be[A],be[A]=null,A--)}function Y(e,n){A++,be[A]=e.current,e.current=n}var J=j(null),ue=j(null),ee=j(null),Ue=j(null);function me(e,n){switch(Y(ee,n),Y(ue,e),Y(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nb(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nb(n),e=tb(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(J),Y(J,e)}function $e(){X(J),X(ue),X(ee)}function Qn(e){e.memoizedState!==null&&Y(Ue,e);var n=J.current,t=tb(n,e.type);n!==t&&(Y(ue,e),Y(J,t))}function Zn(e){ue.current===e&&(X(J),X(ue)),Ue.current===e&&(X(Ue),Qi._currentValue=P)}var da=Object.prototype.hasOwnProperty,ba=r.unstable_scheduleCallback,Jn=r.unstable_cancelCallback,Ir=r.unstable_shouldYield,Vr=r.unstable_requestPaint,bn=r.unstable_now,Xr=r.unstable_getCurrentPriorityLevel,oe=r.unstable_ImmediatePriority,we=r.unstable_UserBlockingPriority,ln=r.unstable_NormalPriority,Bn=r.unstable_LowPriority,dl=r.unstable_IdlePriority,Us=r.log,bl=r.unstable_setDisableYieldValue,Yn=null,Ve=null;function pt(e){if(typeof Us=="function"&&bl(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Yn,e)}catch{}}var hn=Math.clz32?Math.clz32:Q0,W0=Math.log,P0=Math.LN2;function Q0(e){return e>>>=0,e===0?32:31-(W0(e)/P0|0)|0}var hl=256,pl=4194304;function Gt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yl(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~l,a!==0?i=Gt(a):(s&=f,s!==0?i=Gt(s):t||(t=f&~e,t!==0&&(i=Gt(t))))):(f=a&~l,f!==0?i=Gt(f):s!==0?i=Gt(s):t||(t=a&~e,t!==0&&(i=Gt(t)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:i}function ii(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Z0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=hl;return hl<<=1,(hl&4194048)===0&&(hl=256),e}function js(){var e=pl;return pl<<=1,(pl&62914560)===0&&(pl=4194304),e}function Kr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function li(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function J0(e,n,t,a,i,l){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,x=e.hiddenUpdates;for(t=s&~t;0<t;){var w=31-hn(t),U=1<<w;f[w]=0,g[w]=-1;var N=x[w];if(N!==null)for(x[w]=null,w=0;w<N.length;w++){var C=N[w];C!==null&&(C.lane&=-536870913)}t&=~U}a!==0&&ks(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~n))}function ks(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-hn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194090}function zs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-hn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function Wr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Eb(e.type))}function F0(e,n){var t=k.p;try{return k.p=e,n()}finally{k.p=t}}var yt=Math.random().toString(36).slice(2),en="__reactFiber$"+yt,un="__reactProps$"+yt,ha="__reactContainer$"+yt,Qr="__reactEvents$"+yt,$0="__reactListeners$"+yt,eh="__reactHandles$"+yt,qs="__reactResources$"+yt,ri="__reactMarker$"+yt;function Zr(e){delete e[en],delete e[un],delete e[Qr],delete e[$0],delete e[eh]}function pa(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ha]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rb(e);e!==null;){if(t=e[en])return t;e=rb(e)}return n}e=t,t=e.parentNode}return null}function ya(e){if(e=e[en]||e[ha]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ui(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function ma(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xe(e){e[ri]=!0}var Ys=new Set,Is={};function qt(e,n){va(e,n),va(e+"Capture",n)}function va(e,n){for(Is[e]=n,e=0;e<n.length;e++)Ys.add(n[e])}var nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Xs={};function th(e){return da.call(Xs,e)?!0:da.call(Vs,e)?!1:nh.test(e)?Xs[e]=!0:(Vs[e]=!0,!1)}function ml(e,n,t){if(th(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function vl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Fn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}var Jr,Ks;function ga(e){if(Jr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Jr=n&&n[1]||"",Ks=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jr+e+Ks}var Fr=!1;function $r(e,n){if(!e||Fr)return"";Fr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(C){var N=C}Reflect.construct(e,[],U)}else{try{U.call()}catch(C){N=C}e.call(U.prototype)}}else{try{throw Error()}catch(C){N=C}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(C){if(C&&N&&typeof C.stack=="string")return[C.stack,N.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],f=l[1];if(s&&f){var g=s.split(`
`),x=f.split(`
`);for(i=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;i<x.length&&!x[i].includes("DetermineComponentFrameRoot");)i++;if(a===g.length||i===x.length)for(a=g.length-1,i=x.length-1;1<=a&&0<=i&&g[a]!==x[i];)i--;for(;1<=a&&0<=i;a--,i--)if(g[a]!==x[i]){if(a!==1||i!==1)do if(a--,i--,0>i||g[a]!==x[i]){var w=`
`+g[a].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=a&&0<=i);break}}}finally{Fr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ga(t):""}function ah(e){switch(e.tag){case 26:case 27:case 5:return ga(e.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return $r(e.type,!1);case 11:return $r(e.type.render,!1);case 1:return $r(e.type,!0);case 31:return ga("Activity");default:return""}}function Ws(e){try{var n="";do n+=ah(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ih(e){var n=Ps(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gl(e){e._valueTracker||(e._valueTracker=ih(e))}function Qs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ps(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function Sl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var lh=/[\n"\\]/g;function _n(e){return e.replace(lh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function eu(e,n,t,a,i,l,s,f){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Tn(n)):e.value!==""+Tn(n)&&(e.value=""+Tn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?nu(e,s,Tn(n)):t!=null?nu(e,s,Tn(t)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Tn(f):e.removeAttribute("name")}function Zs(e,n,t,a,i,l,s,f){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null))return;t=t!=null?""+Tn(t):"",n=n!=null?""+Tn(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function nu(e,n,t){n==="number"&&Sl(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Sa(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Js(e,n,t){if(n!=null&&(n=""+Tn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Tn(t):""}function Fs(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(Ae(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Tn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function Ea(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var rh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $s(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||rh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function eo(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&$s(e,i,a)}else for(var l in n)n.hasOwnProperty(l)&&$s(e,l,n[l])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ch=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function El(e){return ch.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Ra=null;function no(e){var n=ya(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(eu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[un]||null;if(!i)throw Error(c(90));eu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Qs(a)}break e;case"textarea":Js(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Sa(e,!!t.multiple,n,!1)}}}var lu=!1;function to(e,n,t){if(lu)return e(n,t);lu=!0;try{var a=e(n);return a}finally{if(lu=!1,(Aa!==null||Ra!==null)&&(rr(),Aa&&(n=Aa,e=Ra,Ra=Aa=null,no(n),e)))for(n=0;n<e.length;n++)no(e[n])}}function ci(e,n){var t=e.stateNode;if(t===null)return null;var a=t[un]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if($n)try{var si={};Object.defineProperty(si,"passive",{get:function(){ru=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{ru=!1}var mt=null,uu=null,Al=null;function ao(){if(Al)return Al;var e,n=uu,t=n.length,a,i="value"in mt?mt.value:mt.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[l-a];a++);return Al=i.slice(e,1<a?1-a:void 0)}function Rl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function io(){return!1}function cn(e){function n(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tl:io,this.isPropagationStopped=io,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_l=cn(Yt),oi=E({},Yt,{view:0,detail:0}),sh=cn(oi),cu,su,fi,Ol=E({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(cu=e.screenX-fi.screenX,su=e.screenY-fi.screenY):su=cu=0,fi=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),lo=cn(Ol),oh=E({},Ol,{dataTransfer:0}),fh=cn(oh),dh=E({},oi,{relatedTarget:0}),ou=cn(dh),bh=E({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),hh=cn(bh),ph=E({},Yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yh=cn(ph),mh=E({},Yt,{data:0}),ro=cn(mh),vh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Eh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Sh[e])?!!n[e]:!1}function fu(){return Eh}var Ah=E({},oi,{key:function(e){if(e.key){var n=vh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Rl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Rl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Rh=cn(Ah),Th=E({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=cn(Th),_h=E({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Oh=cn(_h),xh=E({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nh=cn(xh),Dh=E({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ch=cn(Dh),Mh=E({},Yt,{newState:0,oldState:0}),wh=cn(Mh),Hh=[9,13,27,32],du=$n&&"CompositionEvent"in window,di=null;$n&&"documentMode"in document&&(di=document.documentMode);var Lh=$n&&"TextEvent"in window&&!di,co=$n&&(!du||di&&8<di&&11>=di),so=" ",oo=!1;function fo(e,n){switch(e){case"keyup":return Hh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ta=!1;function Uh(e,n){switch(e){case"compositionend":return bo(n);case"keypress":return n.which!==32?null:(oo=!0,so);case"textInput":return e=n.data,e===so&&oo?null:e;default:return null}}function Bh(e,n){if(Ta)return e==="compositionend"||!du&&fo(e,n)?(e=ao(),Al=uu=mt=null,Ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return co&&n.locale!=="ko"?null:n.data;default:return null}}var jh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jh[e.type]:n==="textarea"}function po(e,n,t,a){Aa?Ra?Ra.push(a):Ra=[a]:Aa=a,n=dr(n,"onChange"),0<n.length&&(t=new _l("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var bi=null,hi=null;function kh(e){Zd(e,0)}function xl(e){var n=ui(e);if(Qs(n))return e}function yo(e,n){if(e==="change")return n}var mo=!1;if($n){var bu;if($n){var hu="oninput"in document;if(!hu){var vo=document.createElement("div");vo.setAttribute("oninput","return;"),hu=typeof vo.oninput=="function"}bu=hu}else bu=!1;mo=bu&&(!document.documentMode||9<document.documentMode)}function go(){bi&&(bi.detachEvent("onpropertychange",So),hi=bi=null)}function So(e){if(e.propertyName==="value"&&xl(hi)){var n=[];po(n,hi,e,iu(e)),to(kh,n)}}function zh(e,n,t){e==="focusin"?(go(),bi=n,hi=t,bi.attachEvent("onpropertychange",So)):e==="focusout"&&go()}function Gh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xl(hi)}function qh(e,n){if(e==="click")return xl(n)}function Yh(e,n){if(e==="input"||e==="change")return xl(n)}function Ih(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:Ih;function pi(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!da.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,n){var t=Eo(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Eo(t)}}function Ro(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ro(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function To(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Sl(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Sl(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Vh=$n&&"documentMode"in document&&11>=document.documentMode,_a=null,yu=null,yi=null,mu=!1;function _o(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mu||_a==null||_a!==Sl(a)||(a=_a,"selectionStart"in a&&pu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),yi&&pi(yi,a)||(yi=a,a=dr(yu,"onSelect"),0<a.length&&(n=new _l("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=_a)))}function It(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Oa={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionrun:It("Transition","TransitionRun"),transitionstart:It("Transition","TransitionStart"),transitioncancel:It("Transition","TransitionCancel"),transitionend:It("Transition","TransitionEnd")},vu={},Oo={};$n&&(Oo=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Vt(e){if(vu[e])return vu[e];if(!Oa[e])return e;var n=Oa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Oo)return vu[e]=n[t];return e}var xo=Vt("animationend"),No=Vt("animationiteration"),Do=Vt("animationstart"),Xh=Vt("transitionrun"),Kh=Vt("transitionstart"),Wh=Vt("transitioncancel"),Co=Vt("transitionend"),Mo=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function jn(e,n){Mo.set(e,n),qt(n,[e])}var wo=new WeakMap;function On(e,n){if(typeof e=="object"&&e!==null){var t=wo.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ws(n)},wo.set(e,n),n)}return{value:e,source:n,stack:Ws(n)}}var xn=[],xa=0,Su=0;function Nl(){for(var e=xa,n=Su=xa=0;n<e;){var t=xn[n];xn[n++]=null;var a=xn[n];xn[n++]=null;var i=xn[n];xn[n++]=null;var l=xn[n];if(xn[n++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Ho(t,i,l)}}function Dl(e,n,t,a){xn[xa++]=e,xn[xa++]=n,xn[xa++]=t,xn[xa++]=a,Su|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Eu(e,n,t,a){return Dl(e,n,t,a),Cl(e)}function Na(e,n){return Dl(e,null,null,n),Cl(e)}function Ho(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&n!==null&&(i=31-hn(t),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),l):null}function Cl(e){if(50<qi)throw qi=0,xc=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Da={};function Ph(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,n,t,a){return new Ph(e,n,t,a)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function et(e,n){var t=e.alternate;return t===null?(t=yn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Lo(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ml(e,n,t,a,i,l){var s=0;if(a=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=Zp(e,t,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=yn(31,t,n,i),e.elementType=Z,e.lanes=l,e;case I:return Xt(t.children,i,l,n);case q:s=8,i|=24;break;case z:return e=yn(12,t,n,i|2),e.elementType=z,e.lanes=l,e;case y:return e=yn(13,t,n,i),e.elementType=y,e.lanes=l,e;case O:return e=yn(19,t,n,i),e.elementType=O,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:case ie:s=10;break e;case V:s=9;break e;case F:s=11;break e;case H:s=14;break e;case K:s=16,a=null;break e}s=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=yn(s,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function Xt(e,n,t,a){return e=yn(7,e,a,n),e.lanes=t,e}function Ru(e,n,t){return e=yn(6,e,null,n),e.lanes=t,e}function Tu(e,n,t){return n=yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ca=[],Ma=0,wl=null,Hl=0,Nn=[],Dn=0,Kt=null,nt=1,tt="";function Wt(e,n){Ca[Ma++]=Hl,Ca[Ma++]=wl,wl=e,Hl=n}function Uo(e,n,t){Nn[Dn++]=nt,Nn[Dn++]=tt,Nn[Dn++]=Kt,Kt=e;var a=nt;e=tt;var i=32-hn(a)-1;a&=~(1<<i),t+=1;var l=32-hn(n)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,nt=1<<32-hn(n)+i|t<<i|a,tt=l+e}else nt=1<<l|t<<i|a,tt=e}function _u(e){e.return!==null&&(Wt(e,1),Uo(e,1,0))}function Ou(e){for(;e===wl;)wl=Ca[--Ma],Ca[Ma]=null,Hl=Ca[--Ma],Ca[Ma]=null;for(;e===Kt;)Kt=Nn[--Dn],Nn[Dn]=null,tt=Nn[--Dn],Nn[Dn]=null,nt=Nn[--Dn],Nn[Dn]=null}var rn=null,Be=null,Ee=!1,Pt=null,In=!1,xu=Error(c(519));function Qt(e){var n=Error(c(418,""));throw gi(On(n,e)),xu}function Bo(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[en]=e,n[un]=a,t){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(t=0;t<Ii.length;t++)ye(Ii[t],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Zs(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),gl(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Fs(n,a.value,a.defaultValue,a.children),gl(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||eb(n.textContent,t)?(a.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),a.onScroll!=null&&ye("scroll",n),a.onScrollEnd!=null&&ye("scrollend",n),a.onClick!=null&&(n.onclick=br),n=!0):n=!1,n||Qt(e)}function jo(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:In=!1;return;case 27:case 3:In=!0;return;default:rn=rn.return}}function mi(e){if(e!==rn)return!1;if(!Ee)return jo(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ic(e.type,e.memoizedProps)),t=!t),t&&Be&&Qt(e),jo(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){Be=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}Be=null}}else n===27?(n=Be,Ht(e.type)?(e=Wc,Wc=null,Be=e):Be=n):Be=rn?zn(e.stateNode.nextSibling):null;return!0}function vi(){Be=rn=null,Ee=!1}function ko(){var e=Pt;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),Pt=null),e}function gi(e){Pt===null?Pt=[e]:Pt.push(e)}var Nu=j(null),Zt=null,at=null;function vt(e,n,t){Y(Nu,n._currentValue),n._currentValue=t}function it(e){e._currentValue=Nu.current,X(Nu)}function Du(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Cu(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var f=l;l=i;for(var g=0;g<n.length;g++)if(f.context===n[g]){l.lanes|=t,f=l.alternate,f!==null&&(f.lanes|=t),Du(l.return,t,e),a||(s=null);break e}l=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Du(s,t,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Si(e,n,t,a){e=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=i.type;pn(i.pendingProps.value,s.value)||(e!==null?e.push(f):e=[f])}}else if(i===Ue.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Qi):e=[Qi])}i=i.return}e!==null&&Cu(n,e,t,a),n.flags|=262144}function Ll(e){for(e=e.firstContext;e!==null;){if(!pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jt(e){Zt=e,at=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return zo(Zt,e)}function Ul(e,n){return Zt===null&&Jt(e),zo(e,n)}function zo(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},at===null){if(e===null)throw Error(c(308));at=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else at=at.next=n;return t}var Qh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Zh=r.unstable_scheduleCallback,Jh=r.unstable_NormalPriority,Ye={$$typeof:ie,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Qh,data:new Map,refCount:0}}function Ei(e){e.refCount--,e.refCount===0&&Zh(Jh,function(){e.controller.abort()})}var Ai=null,wu=0,wa=0,Ha=null;function Fh(e,n){if(Ai===null){var t=Ai=[];wu=0,wa=Lc(),Ha={status:"pending",value:void 0,then:function(a){t.push(a)}}}return wu++,n.then(Go,Go),n}function Go(){if(--wu===0&&Ai!==null){Ha!==null&&(Ha.status="fulfilled");var e=Ai;Ai=null,wa=0,Ha=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function $h(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var qo=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fh(e,n),qo!==null&&qo(e,n)};var Ft=j(null);function Hu(){var e=Ft.current;return e!==null?e:Me.pooledCache}function Bl(e,n){n===null?Y(Ft,Ft.current):Y(Ft,n.pool)}function Yo(){var e=Hu();return e===null?null:{parent:Ye._currentValue,pool:e}}var Ri=Error(c(460)),Io=Error(c(474)),jl=Error(c(542)),Lu={then:function(){}};function Vo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function kl(){}function Xo(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(kl,kl),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wo(e),e;default:if(typeof n.status=="string")n.then(kl,kl);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wo(e),e}throw Ti=n,Ri}}var Ti=null;function Ko(){if(Ti===null)throw Error(c(459));var e=Ti;return Ti=null,e}function Wo(e){if(e===Ri||e===jl)throw Error(c(483))}var gt=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function St(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Et(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Re&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=Cl(e),Ho(e,null,t),n}return Dl(e,a,n,t),Cl(e)}function _i(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,zs(e,t)}}function ju(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var ku=!1;function Oi(){if(ku){var e=Ha;if(e!==null)throw e}}function xi(e,n,t,a){ku=!1;var i=e.updateQueue;gt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var g=f,x=g.next;g.next=null,s===null?l=x:s.next=x,s=g;var w=e.alternate;w!==null&&(w=w.updateQueue,f=w.lastBaseUpdate,f!==s&&(f===null?w.firstBaseUpdate=x:f.next=x,w.lastBaseUpdate=g))}if(l!==null){var U=i.baseState;s=0,w=x=g=null,f=l;do{var N=f.lane&-536870913,C=N!==f.lane;if(C?(ve&N)===N:(a&N)===N){N!==0&&N===wa&&(ku=!0),w!==null&&(w=w.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var re=e,ae=f;N=n;var xe=t;switch(ae.tag){case 1:if(re=ae.payload,typeof re=="function"){U=re.call(xe,U,N);break e}U=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,N=typeof re=="function"?re.call(xe,U,N):re,N==null)break e;U=E({},U,N);break e;case 2:gt=!0}}N=f.callback,N!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[N]:C.push(N))}else C={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},w===null?(x=w=C,g=U):w=w.next=C,s|=N;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;C=f,f=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);w===null&&(g=U),i.baseState=g,i.firstBaseUpdate=x,i.lastBaseUpdate=w,l===null&&(i.shared.lanes=0),Dt|=s,e.lanes=s,e.memoizedState=U}}function Po(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Qo(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Po(t[e],n)}var La=j(null),zl=j(0);function Zo(e,n){e=ft,Y(zl,e),Y(La,n),ft=e|n.baseLanes}function zu(){Y(zl,ft),Y(La,La.current)}function Gu(){ft=zl.current,X(La),X(zl)}var At=0,de=null,_e=null,Ge=null,Gl=!1,Ua=!1,$t=!1,ql=0,Ni=0,Ba=null,ep=0;function ke(){throw Error(c(321))}function qu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function Yu(e,n,t,a,i,l){return At=l,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?Lf:Uf,$t=!1,l=t(a,i),$t=!1,Ua&&(l=Fo(n,t,a,i)),Jo(e),l}function Jo(e){D.H=Wl;var n=_e!==null&&_e.next!==null;if(At=0,Ge=_e=de=null,Gl=!1,Ni=0,Ba=null,n)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Ll(e)&&(Ke=!0))}function Fo(e,n,t,a){de=e;var i=0;do{if(Ua&&(Ba=null),Ni=0,Ua=!1,25<=i)throw Error(c(301));if(i+=1,Ge=_e=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}D.H=up,l=n(t,a)}while(Ua);return l}function np(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Di(n):n,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(de.flags|=1024),n}function Iu(){var e=ql!==0;return ql=0,e}function Vu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Xu(e){if(Gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gl=!1}At=0,Ge=_e=de=null,Ua=!1,Ni=ql=0,Ba=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?de.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(_e===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=Ge===null?de.memoizedState:Ge.next;if(n!==null)Ge=n,_e=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ge===null?de.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Di(e){var n=Ni;return Ni+=1,Ba===null&&(Ba=[]),e=Xo(Ba,e,n),n=de,(Ge===null?n.memoizedState:Ge.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Lf:Uf),e}function Yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Di(e);if(e.$$typeof===ie)return nn(e)}throw Error(c(438,String(e)))}function Wu(e){var n=null,t=de.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=de.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ku(),de.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=ge;return n.index++,t}function lt(e,n){return typeof n=="function"?n(e):n}function Il(e){var n=qe();return Pu(n,_e,e)}function Pu(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}n.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{n=i.next;var f=s=null,g=null,x=n,w=!1;do{var U=x.lane&-536870913;if(U!==x.lane?(ve&U)===U:(At&U)===U){var N=x.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),U===wa&&(w=!0);else if((At&N)===N){x=x.next,N===wa&&(w=!0);continue}else U={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},g===null?(f=g=U,s=l):g=g.next=U,de.lanes|=N,Dt|=N;U=x.action,$t&&t(l,U),l=x.hasEagerState?x.eagerState:t(l,U)}else N={lane:U,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},g===null?(f=g=N,s=l):g=g.next=N,de.lanes|=U,Dt|=U;x=x.next}while(x!==null&&x!==n);if(g===null?s=l:g.next=f,!pn(l,e.memoizedState)&&(Ke=!0,w&&(t=Ha,t!==null)))throw t;e.memoizedState=l,e.baseState=s,e.baseQueue=g,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Qu(e){var n=qe(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);pn(l,n.memoizedState)||(Ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function $o(e,n,t){var a=de,i=qe(),l=Ee;if(l){if(t===void 0)throw Error(c(407));t=t()}else t=n();var s=!pn((_e||i).memoizedState,t);s&&(i.memoizedState=t,Ke=!0),i=i.queue;var f=tf.bind(null,a,i,e);if(Ci(2048,8,f,[e]),i.getSnapshot!==n||s||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,ja(9,Vl(),nf.bind(null,a,i,t,n),null),Me===null)throw Error(c(349));l||(At&124)!==0||ef(a,n,t)}return t}function ef(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n=Ku(),de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nf(e,n,t,a){n.value=t,n.getSnapshot=a,af(n)&&lf(e)}function tf(e,n,t){return t(function(){af(n)&&lf(e)})}function af(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function lf(e){var n=Na(e,2);n!==null&&En(n,e,2)}function Zu(e){var n=sn();if(typeof e=="function"){var t=e;if(e=t(),$t){pt(!0);try{t()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:e},n}function rf(e,n,t,a){return e.baseState=t,Pu(e,_e,typeof a=="function"?a:lt)}function tp(e,n,t,a,i){if(Kl(e))throw Error(c(485));if(e=n.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};D.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,uf(n,l)):(l.next=t.next,n.pending=t.next=l)}}function uf(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var l=D.T,s={};D.T=s;try{var f=t(i,a),g=D.S;g!==null&&g(s,f),cf(e,n,f)}catch(x){Ju(e,n,x)}finally{D.T=l}}else try{l=t(i,a),cf(e,n,l)}catch(x){Ju(e,n,x)}}function cf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){sf(e,n,a)},function(a){return Ju(e,n,a)}):sf(e,n,t)}function sf(e,n,t){n.status="fulfilled",n.value=t,of(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,uf(e,t)))}function Ju(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,of(n),n=n.next;while(n!==a)}e.action=null}function of(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ff(e,n){return n}function df(e,n){if(Ee){var t=Me.formState;if(t!==null){e:{var a=de;if(Ee){if(Be){n:{for(var i=Be,l=In;i.nodeType!==8;){if(!l){i=null;break n}if(i=zn(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Be=zn(i.nextSibling),a=i.data==="F!";break e}}Qt(a)}a=!1}a&&(n=t[0])}}return t=sn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ff,lastRenderedState:n},t.queue=a,t=Mf.bind(null,de,a),a.dispatch=t,a=Zu(!1),l=tc.bind(null,de,!1,a.queue),a=sn(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=tp.bind(null,de,i,l,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function bf(e){var n=qe();return hf(n,_e,e)}function hf(e,n,t){if(n=Pu(e,n,ff)[0],e=Il(lt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Di(n)}catch(s){throw s===Ri?jl:s}else a=n;n=qe();var i=n.queue,l=i.dispatch;return t!==n.memoizedState&&(de.flags|=2048,ja(9,Vl(),ap.bind(null,i,t),null)),[a,l,e]}function ap(e,n){e.action=n}function pf(e){var n=qe(),t=_e;if(t!==null)return hf(n,t,e);qe(),n=n.memoizedState,t=qe();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ja(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=de.updateQueue,n===null&&(n=Ku(),de.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Vl(){return{destroy:void 0,resource:void 0}}function yf(){return qe().memoizedState}function Xl(e,n,t,a){var i=sn();a=a===void 0?null:a,de.flags|=e,i.memoizedState=ja(1|n,Vl(),t,a)}function Ci(e,n,t,a){var i=qe();a=a===void 0?null:a;var l=i.memoizedState.inst;_e!==null&&a!==null&&qu(a,_e.memoizedState.deps)?i.memoizedState=ja(n,l,t,a):(de.flags|=e,i.memoizedState=ja(1|n,l,t,a))}function mf(e,n){Xl(8390656,8,e,n)}function vf(e,n){Ci(2048,8,e,n)}function gf(e,n){return Ci(4,2,e,n)}function Sf(e,n){return Ci(4,4,e,n)}function Ef(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Af(e,n,t){t=t!=null?t.concat([e]):null,Ci(4,4,Ef.bind(null,n,e),t)}function Fu(){}function Rf(e,n){var t=qe();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&qu(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Tf(e,n){var t=qe();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&qu(n,a[1]))return a[0];if(a=e(),$t){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[a,n],a}function $u(e,n,t){return t===void 0||(At&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=xd(),de.lanes|=e,Dt|=e,t)}function _f(e,n,t,a){return pn(t,n)?t:La.current!==null?(e=$u(e,t,a),pn(e,n)||(Ke=!0),e):(At&42)===0?(Ke=!0,e.memoizedState=t):(e=xd(),de.lanes|=e,Dt|=e,n)}function Of(e,n,t,a,i){var l=k.p;k.p=l!==0&&8>l?l:8;var s=D.T,f={};D.T=f,tc(e,!1,n,t);try{var g=i(),x=D.S;if(x!==null&&x(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var w=$h(g,a);Mi(e,n,w,Sn(e))}else Mi(e,n,a,Sn(e))}catch(U){Mi(e,n,{then:function(){},status:"rejected",reason:U},Sn())}finally{k.p=l,D.T=s}}function ip(){}function ec(e,n,t,a){if(e.tag!==5)throw Error(c(476));var i=xf(e).queue;Of(e,i,n,P,t===null?ip:function(){return Nf(e),t(a)})}function xf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:P},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:lt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Nf(e){var n=xf(e).next.queue;Mi(e,n,{},Sn())}function nc(){return nn(Qi)}function Df(){return qe().memoizedState}function Cf(){return qe().memoizedState}function lp(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Sn();e=St(t);var a=Et(n,e,t);a!==null&&(En(a,n,t),_i(a,n,t)),n={cache:Mu()},e.payload=n;return}n=n.return}}function rp(e,n,t){var a=Sn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Kl(e)?wf(n,t):(t=Eu(e,n,t,a),t!==null&&(En(t,e,a),Hf(t,n,a)))}function Mf(e,n,t){var a=Sn();Mi(e,n,t,a)}function Mi(e,n,t,a){var i={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Kl(e))wf(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,f=l(s,t);if(i.hasEagerState=!0,i.eagerState=f,pn(f,s))return Dl(e,n,i,0),Me===null&&Nl(),!1}catch{}finally{}if(t=Eu(e,n,i,a),t!==null)return En(t,e,a),Hf(t,n,a),!0}return!1}function tc(e,n,t,a){if(a={lane:2,revertLane:Lc(),action:a,hasEagerState:!1,eagerState:null,next:null},Kl(e)){if(n)throw Error(c(479))}else n=Eu(e,t,a,2),n!==null&&En(n,e,2)}function Kl(e){var n=e.alternate;return e===de||n!==null&&n===de}function wf(e,n){Ua=Gl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hf(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,zs(e,t)}}var Wl={readContext:nn,use:Yl,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},Lf={readContext:nn,use:Yl,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:mf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Xl(4194308,4,Ef.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Xl(4194308,4,e,n)},useInsertionEffect:function(e,n){Xl(4,2,e,n)},useMemo:function(e,n){var t=sn();n=n===void 0?null:n;var a=e();if($t){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=sn();if(t!==void 0){var i=t(n);if($t){pt(!0);try{t(n)}finally{pt(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=rp.bind(null,de,e),[a.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,t=Mf.bind(null,de,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Fu,useDeferredValue:function(e,n){var t=sn();return $u(t,e,n)},useTransition:function(){var e=Zu(!1);return e=Of.bind(null,de,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=de,i=sn();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Me===null)throw Error(c(349));(ve&124)!==0||ef(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,mf(tf.bind(null,a,l,e),[e]),a.flags|=2048,ja(9,Vl(),nf.bind(null,a,l,t,n),null),t},useId:function(){var e=sn(),n=Me.identifierPrefix;if(Ee){var t=tt,a=nt;t=(a&~(1<<32-hn(a)-1)).toString(32)+t,n="«"+n+"R"+t,t=ql++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=ep++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nc,useFormState:df,useActionState:df,useOptimistic:function(e){var n=sn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=tc.bind(null,de,!0,t),t.dispatch=n,[e,n]},useMemoCache:Wu,useCacheRefresh:function(){return sn().memoizedState=lp.bind(null,de)}},Uf={readContext:nn,use:Yl,useCallback:Rf,useContext:nn,useEffect:vf,useImperativeHandle:Af,useInsertionEffect:gf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Il,useRef:yf,useState:function(){return Il(lt)},useDebugValue:Fu,useDeferredValue:function(e,n){var t=qe();return _f(t,_e.memoizedState,e,n)},useTransition:function(){var e=Il(lt)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Di(e),n]},useSyncExternalStore:$o,useId:Df,useHostTransitionStatus:nc,useFormState:bf,useActionState:bf,useOptimistic:function(e,n){var t=qe();return rf(t,_e,e,n)},useMemoCache:Wu,useCacheRefresh:Cf},up={readContext:nn,use:Yl,useCallback:Rf,useContext:nn,useEffect:vf,useImperativeHandle:Af,useInsertionEffect:gf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Qu,useRef:yf,useState:function(){return Qu(lt)},useDebugValue:Fu,useDeferredValue:function(e,n){var t=qe();return _e===null?$u(t,e,n):_f(t,_e.memoizedState,e,n)},useTransition:function(){var e=Qu(lt)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Di(e),n]},useSyncExternalStore:$o,useId:Df,useHostTransitionStatus:nc,useFormState:pf,useActionState:pf,useOptimistic:function(e,n){var t=qe();return _e!==null?rf(t,_e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Cf},ka=null,wi=0;function Pl(e){var n=wi;return wi+=1,ka===null&&(ka=[]),Xo(ka,e,n)}function Hi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ql(e,n){throw n.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bf(e){var n=e._init;return n(e._payload)}function jf(e){function n(T,R){if(e){var _=T.deletions;_===null?(T.deletions=[R],T.flags|=16):_.push(R)}}function t(T,R){if(!e)return null;for(;R!==null;)n(T,R),R=R.sibling;return null}function a(T){for(var R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function i(T,R){return T=et(T,R),T.index=0,T.sibling=null,T}function l(T,R,_){return T.index=_,e?(_=T.alternate,_!==null?(_=_.index,_<R?(T.flags|=67108866,R):_):(T.flags|=67108866,R)):(T.flags|=1048576,R)}function s(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function f(T,R,_,L){return R===null||R.tag!==6?(R=Ru(_,T.mode,L),R.return=T,R):(R=i(R,_),R.return=T,R)}function g(T,R,_,L){var Q=_.type;return Q===I?w(T,R,_.props.children,L,_.key):R!==null&&(R.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===K&&Bf(Q)===R.type)?(R=i(R,_.props),Hi(R,_),R.return=T,R):(R=Ml(_.type,_.key,_.props,null,T.mode,L),Hi(R,_),R.return=T,R)}function x(T,R,_,L){return R===null||R.tag!==4||R.stateNode.containerInfo!==_.containerInfo||R.stateNode.implementation!==_.implementation?(R=Tu(_,T.mode,L),R.return=T,R):(R=i(R,_.children||[]),R.return=T,R)}function w(T,R,_,L,Q){return R===null||R.tag!==7?(R=Xt(_,T.mode,L,Q),R.return=T,R):(R=i(R,_),R.return=T,R)}function U(T,R,_){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Ru(""+R,T.mode,_),R.return=T,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case B:return _=Ml(R.type,R.key,R.props,null,T.mode,_),Hi(_,R),_.return=T,_;case G:return R=Tu(R,T.mode,_),R.return=T,R;case K:var L=R._init;return R=L(R._payload),U(T,R,_)}if(Ae(R)||De(R))return R=Xt(R,T.mode,_,null),R.return=T,R;if(typeof R.then=="function")return U(T,Pl(R),_);if(R.$$typeof===ie)return U(T,Ul(T,R),_);Ql(T,R)}return null}function N(T,R,_,L){var Q=R!==null?R.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return Q!==null?null:f(T,R,""+_,L);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case B:return _.key===Q?g(T,R,_,L):null;case G:return _.key===Q?x(T,R,_,L):null;case K:return Q=_._init,_=Q(_._payload),N(T,R,_,L)}if(Ae(_)||De(_))return Q!==null?null:w(T,R,_,L,null);if(typeof _.then=="function")return N(T,R,Pl(_),L);if(_.$$typeof===ie)return N(T,R,Ul(T,_),L);Ql(T,_)}return null}function C(T,R,_,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return T=T.get(_)||null,f(R,T,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case B:return T=T.get(L.key===null?_:L.key)||null,g(R,T,L,Q);case G:return T=T.get(L.key===null?_:L.key)||null,x(R,T,L,Q);case K:var he=L._init;return L=he(L._payload),C(T,R,_,L,Q)}if(Ae(L)||De(L))return T=T.get(_)||null,w(R,T,L,Q,null);if(typeof L.then=="function")return C(T,R,_,Pl(L),Q);if(L.$$typeof===ie)return C(T,R,_,Ul(R,L),Q);Ql(R,L)}return null}function re(T,R,_,L){for(var Q=null,he=null,$=R,le=R=0,Pe=null;$!==null&&le<_.length;le++){$.index>le?(Pe=$,$=null):Pe=$.sibling;var Se=N(T,$,_[le],L);if(Se===null){$===null&&($=Pe);break}e&&$&&Se.alternate===null&&n(T,$),R=l(Se,R,le),he===null?Q=Se:he.sibling=Se,he=Se,$=Pe}if(le===_.length)return t(T,$),Ee&&Wt(T,le),Q;if($===null){for(;le<_.length;le++)$=U(T,_[le],L),$!==null&&(R=l($,R,le),he===null?Q=$:he.sibling=$,he=$);return Ee&&Wt(T,le),Q}for($=a($);le<_.length;le++)Pe=C($,T,le,_[le],L),Pe!==null&&(e&&Pe.alternate!==null&&$.delete(Pe.key===null?le:Pe.key),R=l(Pe,R,le),he===null?Q=Pe:he.sibling=Pe,he=Pe);return e&&$.forEach(function(kt){return n(T,kt)}),Ee&&Wt(T,le),Q}function ae(T,R,_,L){if(_==null)throw Error(c(151));for(var Q=null,he=null,$=R,le=R=0,Pe=null,Se=_.next();$!==null&&!Se.done;le++,Se=_.next()){$.index>le?(Pe=$,$=null):Pe=$.sibling;var kt=N(T,$,Se.value,L);if(kt===null){$===null&&($=Pe);break}e&&$&&kt.alternate===null&&n(T,$),R=l(kt,R,le),he===null?Q=kt:he.sibling=kt,he=kt,$=Pe}if(Se.done)return t(T,$),Ee&&Wt(T,le),Q;if($===null){for(;!Se.done;le++,Se=_.next())Se=U(T,Se.value,L),Se!==null&&(R=l(Se,R,le),he===null?Q=Se:he.sibling=Se,he=Se);return Ee&&Wt(T,le),Q}for($=a($);!Se.done;le++,Se=_.next())Se=C($,T,le,Se.value,L),Se!==null&&(e&&Se.alternate!==null&&$.delete(Se.key===null?le:Se.key),R=l(Se,R,le),he===null?Q=Se:he.sibling=Se,he=Se);return e&&$.forEach(function(cy){return n(T,cy)}),Ee&&Wt(T,le),Q}function xe(T,R,_,L){if(typeof _=="object"&&_!==null&&_.type===I&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case B:e:{for(var Q=_.key;R!==null;){if(R.key===Q){if(Q=_.type,Q===I){if(R.tag===7){t(T,R.sibling),L=i(R,_.props.children),L.return=T,T=L;break e}}else if(R.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===K&&Bf(Q)===R.type){t(T,R.sibling),L=i(R,_.props),Hi(L,_),L.return=T,T=L;break e}t(T,R);break}else n(T,R);R=R.sibling}_.type===I?(L=Xt(_.props.children,T.mode,L,_.key),L.return=T,T=L):(L=Ml(_.type,_.key,_.props,null,T.mode,L),Hi(L,_),L.return=T,T=L)}return s(T);case G:e:{for(Q=_.key;R!==null;){if(R.key===Q)if(R.tag===4&&R.stateNode.containerInfo===_.containerInfo&&R.stateNode.implementation===_.implementation){t(T,R.sibling),L=i(R,_.children||[]),L.return=T,T=L;break e}else{t(T,R);break}else n(T,R);R=R.sibling}L=Tu(_,T.mode,L),L.return=T,T=L}return s(T);case K:return Q=_._init,_=Q(_._payload),xe(T,R,_,L)}if(Ae(_))return re(T,R,_,L);if(De(_)){if(Q=De(_),typeof Q!="function")throw Error(c(150));return _=Q.call(_),ae(T,R,_,L)}if(typeof _.then=="function")return xe(T,R,Pl(_),L);if(_.$$typeof===ie)return xe(T,R,Ul(T,_),L);Ql(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,R!==null&&R.tag===6?(t(T,R.sibling),L=i(R,_),L.return=T,T=L):(t(T,R),L=Ru(_,T.mode,L),L.return=T,T=L),s(T)):t(T,R)}return function(T,R,_,L){try{wi=0;var Q=xe(T,R,_,L);return ka=null,Q}catch($){if($===Ri||$===jl)throw $;var he=yn(29,$,null,T.mode);return he.lanes=L,he.return=T,he}finally{}}}var za=jf(!0),kf=jf(!1),Cn=j(null),Vn=null;function Rt(e){var n=e.alternate;Y(Ie,Ie.current&1),Y(Cn,e),Vn===null&&(n===null||La.current!==null||n.memoizedState!==null)&&(Vn=e)}function zf(e){if(e.tag===22){if(Y(Ie,Ie.current),Y(Cn,e),Vn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Vn=e)}}else Tt()}function Tt(){Y(Ie,Ie.current),Y(Cn,Cn.current)}function rt(e){X(Cn),Vn===e&&(Vn=null),X(Ie)}var Ie=j(0);function Zl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Kc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ac(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ic={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=Sn(),i=St(a);i.payload=n,t!=null&&(i.callback=t),n=Et(e,i,a),n!==null&&(En(n,e,a),_i(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=Sn(),i=St(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Et(e,i,a),n!==null&&(En(n,e,a),_i(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Sn(),a=St(t);a.tag=2,n!=null&&(a.callback=n),n=Et(e,a,t),n!==null&&(En(n,e,t),_i(n,e,t))}};function Gf(e,n,t,a,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,s):n.prototype&&n.prototype.isPureReactComponent?!pi(t,a)||!pi(i,l):!0}function qf(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ic.enqueueReplaceState(n,n.state,null)}function ea(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}var Jl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yf(e){Jl(e)}function If(e){console.error(e)}function Vf(e){Jl(e)}function Fl(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Xf(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lc(e,n,t){return t=St(t),t.tag=3,t.payload={element:null},t.callback=function(){Fl(e,n)},t}function Kf(e){return e=St(e),e.tag=3,e}function Wf(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){Xf(n,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Xf(n,t,a),typeof i!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function cp(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Si(n,t,i,!0),t=Cn.current,t!==null){switch(t.tag){case 13:return Vn===null?Dc():t.alternate===null&&je===0&&(je=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===Lu?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Mc(e,a,i)),!1;case 22:return t.flags|=65536,a===Lu?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Mc(e,a,i)),!1}throw Error(c(435,t.tag))}return Mc(e,a,i),Dc(),!1}if(Ee)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==xu&&(e=Error(c(422),{cause:a}),gi(On(e,t)))):(a!==xu&&(n=Error(c(423),{cause:a}),gi(On(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=On(a,t),i=lc(e.stateNode,a,i),ju(e,i),je!==4&&(je=2)),!1;var l=Error(c(520),{cause:a});if(l=On(l,t),Gi===null?Gi=[l]:Gi.push(l),je!==4&&(je=2),n===null)return!0;a=On(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=lc(t.stateNode,a,e),ju(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Ct===null||!Ct.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Kf(i),Wf(i,e,t,a),ju(t,i),!1}t=t.return}while(t!==null);return!1}var Pf=Error(c(461)),Ke=!1;function Qe(e,n,t,a){n.child=e===null?kf(n,null,t,a):za(n,e.child,t,a)}function Qf(e,n,t,a,i){t=t.render;var l=n.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return Jt(n),a=Yu(e,n,t,s,l,i),f=Iu(),e!==null&&!Ke?(Vu(e,n,i),ut(e,n,i)):(Ee&&f&&_u(n),n.flags|=1,Qe(e,n,a,i),n.child)}function Zf(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Au(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,Jf(e,n,l,a,i)):(e=Ml(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!bc(e,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:pi,t(s,a)&&e.ref===n.ref)return ut(e,n,i)}return n.flags|=1,e=et(l,a),e.ref=n.ref,e.return=n,n.child=e}function Jf(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(pi(l,a)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=a=l,bc(e,i))(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,ut(e,n,i)}return rc(e,n,t,a,i)}function Ff(e,n,t){var a=n.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((n.flags&128)!==0){if(a=l!==null?l.baseLanes|t:t,e!==null){for(i=n.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;n.childLanes=l&~a}else n.childLanes=0,n.child=null;return $f(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bl(n,l!==null?l.cachePool:null),l!==null?Zo(n,l):zu(),zf(n);else return n.lanes=n.childLanes=536870912,$f(e,n,l!==null?l.baseLanes|t:t,t)}else l!==null?(Bl(n,l.cachePool),Zo(n,l),Tt(),n.memoizedState=null):(e!==null&&Bl(n,null),zu(),Tt());return Qe(e,n,i,t),n.child}function $f(e,n,t,a){var i=Hu();return i=i===null?null:{parent:Ye._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&Bl(n,null),zu(),zf(n),e!==null&&Si(e,n,a,!0),null}function $l(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function rc(e,n,t,a,i){return Jt(n),t=Yu(e,n,t,a,void 0,i),a=Iu(),e!==null&&!Ke?(Vu(e,n,i),ut(e,n,i)):(Ee&&a&&_u(n),n.flags|=1,Qe(e,n,t,i),n.child)}function ed(e,n,t,a,i,l){return Jt(n),n.updateQueue=null,t=Fo(n,a,t,i),Jo(e),a=Iu(),e!==null&&!Ke?(Vu(e,n,l),ut(e,n,l)):(Ee&&a&&_u(n),n.flags|=1,Qe(e,n,t,l),n.child)}function nd(e,n,t,a,i){if(Jt(n),n.stateNode===null){var l=Da,s=t.contextType;typeof s=="object"&&s!==null&&(l=nn(s)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ic,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Uu(n),s=t.contextType,l.context=typeof s=="object"&&s!==null?nn(s):Da,l.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ac(n,t,s,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ic.enqueueReplaceState(l,l.state,null),xi(n,a,l,i),Oi(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var f=n.memoizedProps,g=ea(t,f);l.props=g;var x=l.context,w=t.contextType;s=Da,typeof w=="object"&&w!==null&&(s=nn(w));var U=t.getDerivedStateFromProps;w=typeof U=="function"||typeof l.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,w||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f||x!==s)&&qf(n,l,a,s),gt=!1;var N=n.memoizedState;l.state=N,xi(n,a,l,i),Oi(),x=n.memoizedState,f||N!==x||gt?(typeof U=="function"&&(ac(n,t,U,a),x=n.memoizedState),(g=gt||Gf(n,t,g,a,N,x,s))?(w||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=x),l.props=a,l.state=x,l.context=s,a=g):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Bu(e,n),s=n.memoizedProps,w=ea(t,s),l.props=w,U=n.pendingProps,N=l.context,x=t.contextType,g=Da,typeof x=="object"&&x!==null&&(g=nn(x)),f=t.getDerivedStateFromProps,(x=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==U||N!==g)&&qf(n,l,a,g),gt=!1,N=n.memoizedState,l.state=N,xi(n,a,l,i),Oi();var C=n.memoizedState;s!==U||N!==C||gt||e!==null&&e.dependencies!==null&&Ll(e.dependencies)?(typeof f=="function"&&(ac(n,t,f,a),C=n.memoizedState),(w=gt||Gf(n,t,w,a,N,C,g)||e!==null&&e.dependencies!==null&&Ll(e.dependencies))?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,C,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,C,g)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=C),l.props=a,l.state=C,l.context=g,a=w):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,$l(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=za(n,e.child,null,i),n.child=za(n,null,t,i)):Qe(e,n,t,i),n.memoizedState=l.state,e=n.child):e=ut(e,n,i),e}function td(e,n,t,a){return vi(),n.flags|=256,Qe(e,n,t,a),n.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:Yo()}}function sc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Mn),e}function ad(e,n,t){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(i=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(i?Rt(n):Tt(),Ee){var f=Be,g;if(g=f){e:{for(g=f,f=In;g.nodeType!==8;){if(!f){f=null;break e}if(g=zn(g.nextSibling),g===null){f=null;break e}}f=g}f!==null?(n.memoizedState={dehydrated:f,treeContext:Kt!==null?{id:nt,overflow:tt}:null,retryLane:536870912,hydrationErrors:null},g=yn(18,null,null,0),g.stateNode=f,g.return=n,n.child=g,rn=n,Be=null,g=!0):g=!1}g||Qt(n)}if(f=n.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Kc(f)?n.lanes=32:n.lanes=536870912,null;rt(n)}return f=a.children,a=a.fallback,i?(Tt(),i=n.mode,f=er({mode:"hidden",children:f},i),a=Xt(a,i,t,null),f.return=n,a.return=n,f.sibling=a,n.child=f,i=n.child,i.memoizedState=cc(t),i.childLanes=sc(e,s,t),n.memoizedState=uc,a):(Rt(n),oc(n,f))}if(g=e.memoizedState,g!==null&&(f=g.dehydrated,f!==null)){if(l)n.flags&256?(Rt(n),n.flags&=-257,n=fc(e,n,t)):n.memoizedState!==null?(Tt(),n.child=e.child,n.flags|=128,n=null):(Tt(),i=a.fallback,f=n.mode,a=er({mode:"visible",children:a.children},f),i=Xt(i,f,t,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,za(n,e.child,null,t),a=n.child,a.memoizedState=cc(t),a.childLanes=sc(e,s,t),n.memoizedState=uc,n=i);else if(Rt(n),Kc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var x=s.dgst;s=x,a=Error(c(419)),a.stack="",a.digest=s,gi({value:a,source:null,stack:null}),n=fc(e,n,t)}else if(Ke||Si(e,n,t,!1),s=(t&e.childLanes)!==0,Ke||s){if(s=Me,s!==null&&(a=t&-t,a=(a&42)!==0?1:Wr(a),a=(a&(s.suspendedLanes|t))!==0?0:a,a!==0&&a!==g.retryLane))throw g.retryLane=a,Na(e,a),En(s,e,a),Pf;f.data==="$?"||Dc(),n=fc(e,n,t)}else f.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Be=zn(f.nextSibling),rn=n,Ee=!0,Pt=null,In=!1,e!==null&&(Nn[Dn++]=nt,Nn[Dn++]=tt,Nn[Dn++]=Kt,nt=e.id,tt=e.overflow,Kt=n),n=oc(n,a.children),n.flags|=4096);return n}return i?(Tt(),i=a.fallback,f=n.mode,g=e.child,x=g.sibling,a=et(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,x!==null?i=et(x,i):(i=Xt(i,f,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,f=e.child.memoizedState,f===null?f=cc(t):(g=f.cachePool,g!==null?(x=Ye._currentValue,g=g.parent!==x?{parent:x,pool:x}:g):g=Yo(),f={baseLanes:f.baseLanes|t,cachePool:g}),i.memoizedState=f,i.childLanes=sc(e,s,t),n.memoizedState=uc,a):(Rt(n),t=e.child,e=t.sibling,t=et(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function oc(e,n){return n=er({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function er(e,n){return e=yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fc(e,n,t){return za(n,e.child,null,t),e=oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function id(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Du(e.return,n,t)}function dc(e,n,t,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=i)}function ld(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;if(Qe(e,n,a.children,t),a=Ie.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,t,n);else if(e.tag===19)id(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(Y(Ie,a),i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Zl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),dc(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Zl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}dc(n,!0,t,null,l);break;case"together":dc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ut(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Si(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function bc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ll(e)))}function sp(e,n,t){switch(n.tag){case 3:me(n,n.stateNode.containerInfo),vt(n,Ye,e.memoizedState.cache),vi();break;case 27:case 5:Qn(n);break;case 4:me(n,n.stateNode.containerInfo);break;case 10:vt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Rt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ad(e,n,t):(Rt(n),e=ut(e,n,t),e!==null?e.sibling:null);Rt(n);break;case 19:var i=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Si(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return ld(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(Ie,Ie.current),a)break;return null;case 22:case 23:return n.lanes=0,Ff(e,n,t);case 24:vt(n,Ye,e.memoizedState.cache)}return ut(e,n,t)}function rd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ke=!0;else{if(!bc(e,t)&&(n.flags&128)===0)return Ke=!1,sp(e,n,t);Ke=(e.flags&131072)!==0}else Ke=!1,Ee&&(n.flags&1048576)!==0&&Uo(n,Hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,i=a._init;if(a=i(a._payload),n.type=a,typeof a=="function")Au(a)?(e=ea(a,e),n.tag=1,n=nd(null,n,a,e,t)):(n.tag=0,n=rc(null,n,a,e,t));else{if(a!=null){if(i=a.$$typeof,i===F){n.tag=11,n=Qf(null,n,a,e,t);break e}else if(i===H){n.tag=14,n=Zf(null,n,a,e,t);break e}}throw n=te(a)||a,Error(c(306,n,""))}}return n;case 0:return rc(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=ea(a,n.pendingProps),nd(e,n,a,i,t);case 3:e:{if(me(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,Bu(e,n),xi(n,a,null,t);var s=n.memoizedState;if(a=s.cache,vt(n,Ye,a),a!==l.cache&&Cu(n,[Ye],t,!0),Oi(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=td(e,n,a,t);break e}else if(a!==i){i=On(Error(c(424)),n),gi(i),n=td(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=zn(e.firstChild),rn=n,Ee=!0,Pt=null,In=!0,t=kf(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(vi(),a===i){n=ut(e,n,t);break e}Qe(e,n,a,t)}n=n.child}return n;case 26:return $l(e,n),e===null?(t=ob(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,a=hr(ee.current).createElement(t),a[en]=n,a[un]=e,Je(a,t,e),Xe(a),n.stateNode=a):n.memoizedState=ob(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qn(n),e===null&&Ee&&(a=n.stateNode=ub(n.type,n.pendingProps,ee.current),rn=n,In=!0,i=Be,Ht(n.type)?(Wc=i,Be=zn(a.firstChild)):Be=i),Qe(e,n,n.pendingProps.children,t),$l(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((i=a=Be)&&(a=jp(a,n.type,n.pendingProps,In),a!==null?(n.stateNode=a,rn=n,Be=zn(a.firstChild),In=!1,i=!0):i=!1),i||Qt(n)),Qn(n),i=n.type,l=n.pendingProps,s=e!==null?e.memoizedProps:null,a=l.children,Ic(i,l)?a=null:s!==null&&Ic(i,s)&&(n.flags|=32),n.memoizedState!==null&&(i=Yu(e,n,np,null,null,t),Qi._currentValue=i),$l(e,n),Qe(e,n,a,t),n.child;case 6:return e===null&&Ee&&((e=t=Be)&&(t=kp(t,n.pendingProps,In),t!==null?(n.stateNode=t,rn=n,Be=null,e=!0):e=!1),e||Qt(n)),null;case 13:return ad(e,n,t);case 4:return me(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=za(n,null,a,t):Qe(e,n,a,t),n.child;case 11:return Qf(e,n,n.type,n.pendingProps,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,vt(n,n.type,a.value),Qe(e,n,a.children,t),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Jt(n),i=nn(i),a=a(i),n.flags|=1,Qe(e,n,a,t),n.child;case 14:return Zf(e,n,n.type,n.pendingProps,t);case 15:return Jf(e,n,n.type,n.pendingProps,t);case 19:return ld(e,n,t);case 31:return a=n.pendingProps,t=n.mode,a={mode:a.mode,children:a.children},e===null?(t=er(a,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=et(e.child,a),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return Ff(e,n,t);case 24:return Jt(n),a=nn(Ye),e===null?(i=Hu(),i===null&&(i=Me,l=Mu(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),n.memoizedState={parent:a,cache:i},Uu(n),vt(n,Ye,i)):((e.lanes&t)!==0&&(Bu(e,n),xi(n,null,null,t),Oi()),i=e.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),vt(n,Ye,a)):(a=l.cache,vt(n,Ye,a),a!==i.cache&&Cu(n,[Ye],t,!0))),Qe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function ct(e){e.flags|=4}function ud(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pb(n)){if(n=Cn.current,n!==null&&((ve&4194048)===ve?Vn!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Vn))throw Ti=Lu,Io;e.flags|=8192}}function nr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?js():536870912,e.lanes|=n,Ia|=n)}function Li(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function op(e,n,t){var a=n.pendingProps;switch(Ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Le(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),it(Ye),$e(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(mi(n)?ct(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ko())),Le(n),null;case 26:return t=n.memoizedState,e===null?(ct(n),t!==null?(Le(n),ud(n,t)):(Le(n),n.flags&=-16777217)):t?t!==e.memoizedState?(ct(n),Le(n),ud(n,t)):(Le(n),n.flags&=-16777217):(e.memoizedProps!==a&&ct(n),Le(n),n.flags&=-16777217),null;case 27:Zn(n),t=ee.current;var i=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&ct(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Le(n),null}e=J.current,mi(n)?Bo(n):(e=ub(i,a,t),n.stateNode=e,ct(n))}return Le(n),null;case 5:if(Zn(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&ct(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return Le(n),null}if(e=J.current,mi(n))Bo(n);else{switch(i=hr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(t,{is:a.is}):i.createElement(t)}}e[en]=n,e[un]=a;e:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=e;e:switch(Je(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ct(n)}}return Le(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&ct(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=ee.current,mi(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=rn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[en]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||eb(e.nodeValue,t)),e||Qt(n)}else e=hr(e).createTextNode(a),e[en]=n,n.stateNode=e}return Le(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=mi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[en]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),i=!1}else i=ko(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(rt(n),n):(rt(n),null)}if(rt(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),nr(n,n.updateQueue),Le(n),null;case 4:return $e(),e===null&&kc(n.stateNode.containerInfo),Le(n),null;case 10:return it(n.type),Le(n),null;case 19:if(X(Ie),i=n.memoizedState,i===null)return Le(n),null;if(a=(n.flags&128)!==0,l=i.rendering,l===null)if(a)Li(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=Zl(e),l!==null){for(n.flags|=128,Li(i,!1),e=l.updateQueue,n.updateQueue=e,nr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Lo(t,e),t=t.sibling;return Y(Ie,Ie.current&1|2),n.child}e=e.sibling}i.tail!==null&&bn()>ir&&(n.flags|=128,a=!0,Li(i,!1),n.lanes=4194304)}else{if(!a)if(e=Zl(l),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,nr(n,e),Li(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Ee)return Le(n),null}else 2*bn()-i.renderingStartTime>ir&&t!==536870912&&(n.flags|=128,a=!0,Li(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(e=i.last,e!==null?e.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=bn(),n.sibling=null,e=Ie.current,Y(Ie,a?e&1|2:e&1),n):(Le(n),null);case 22:case 23:return rt(n),Gu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),t=n.updateQueue,t!==null&&nr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&X(Ft),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),it(Ye),Le(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function fp(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return it(Ye),$e(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Zn(n),null;case 13:if(rt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(Ie),null;case 4:return $e(),null;case 10:return it(n.type),null;case 22:case 23:return rt(n),Gu(),e!==null&&X(Ft),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return it(Ye),null;case 25:return null;default:return null}}function cd(e,n){switch(Ou(n),n.tag){case 3:it(Ye),$e();break;case 26:case 27:case 5:Zn(n);break;case 4:$e();break;case 13:rt(n);break;case 19:X(Ie);break;case 10:it(n.type);break;case 22:case 23:rt(n),Gu(),e!==null&&X(Ft);break;case 24:it(Ye)}}function Ui(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(f){Ce(n,n.return,f)}}function _t(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=n;var g=t,x=f;try{x()}catch(w){Ce(i,g,w)}}}a=a.next}while(a!==l)}}catch(w){Ce(n,n.return,w)}}function sd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Qo(n,t)}catch(a){Ce(e,e.return,a)}}}function od(e,n,t){t.props=ea(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Ce(e,n,a)}}function Bi(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){Ce(e,n,i)}}function Xn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Ce(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Ce(e,n,i)}else t.current=null}function fd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Ce(e,e.return,i)}}function hc(e,n,t){try{var a=e.stateNode;wp(a,e.type,t,n),a[un]=n}catch(i){Ce(e,e.return,i)}}function dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ht(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=br));else if(a!==4&&(a===27&&Ht(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(yc(e,n,t),e=e.sibling;e!==null;)yc(e,n,t),e=e.sibling}function tr(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&Ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(tr(e,n,t),e=e.sibling;e!==null;)tr(e,n,t),e=e.sibling}function bd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Je(n,a,t),n[en]=e,n[un]=t}catch(l){Ce(e,e.return,l)}}var st=!1,ze=!1,mc=!1,hd=typeof WeakSet=="function"?WeakSet:Set,We=null;function dp(e,n){if(e=e.containerInfo,qc=Sr,e=To(e),pu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,f=-1,g=-1,x=0,w=0,U=e,N=null;n:for(;;){for(var C;U!==t||i!==0&&U.nodeType!==3||(f=s+i),U!==l||a!==0&&U.nodeType!==3||(g=s+a),U.nodeType===3&&(s+=U.nodeValue.length),(C=U.firstChild)!==null;)N=U,U=C;for(;;){if(U===e)break n;if(N===t&&++x===i&&(f=s),N===l&&++w===a&&(g=s),(C=U.nextSibling)!==null)break;U=N,N=U.parentNode}U=C}t=f===-1||g===-1?null:{start:f,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yc={focusedElem:e,selectionRange:t},Sr=!1,We=n;We!==null;)if(n=We,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,We=e;else for(;We!==null;){switch(n=We,l=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,i=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var re=ea(t.type,i,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(re,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Ce(t,t.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Xc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,We=e;break}We=n.return}}function pd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t),a&4&&Ui(5,t);break;case 1:if(Ot(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){Ce(t,t.return,s)}else{var i=ea(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ce(t,t.return,s)}}a&64&&sd(t),a&512&&Bi(t,t.return);break;case 3:if(Ot(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Qo(e,n)}catch(s){Ce(t,t.return,s)}}break;case 27:n===null&&a&4&&bd(t);case 26:case 5:Ot(e,t),n===null&&a&4&&fd(t),a&512&&Bi(t,t.return);break;case 12:Ot(e,t);break;case 13:Ot(e,t),a&4&&vd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Ep.bind(null,t),zp(e,t))));break;case 22:if(a=t.memoizedState!==null||st,!a){n=n!==null&&n.memoizedState!==null||ze,i=st;var l=ze;st=a,(ze=n)&&!l?xt(e,t,(t.subtreeFlags&8772)!==0):Ot(e,t),st=i,ze=l}break;case 30:break;default:Ot(e,t)}}function yd(e){var n=e.alternate;n!==null&&(e.alternate=null,yd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,on=!1;function ot(e,n,t){for(t=t.child;t!==null;)md(e,n,t),t=t.sibling}function md(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Yn,t)}catch{}switch(t.tag){case 26:ze||Xn(t,n),ot(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ze||Xn(t,n);var a=He,i=on;Ht(t.type)&&(He=t.stateNode,on=!1),ot(e,n,t),Xi(t.stateNode),He=a,on=i;break;case 5:ze||Xn(t,n);case 6:if(a=He,i=on,He=null,ot(e,n,t),He=a,on=i,He!==null)if(on)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(t.stateNode)}catch(l){Ce(t,n,l)}else try{He.removeChild(t.stateNode)}catch(l){Ce(t,n,l)}break;case 18:He!==null&&(on?(e=He,lb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),$i(e)):lb(He,t.stateNode));break;case 4:a=He,i=on,He=t.stateNode.containerInfo,on=!0,ot(e,n,t),He=a,on=i;break;case 0:case 11:case 14:case 15:ze||_t(2,t,n),ze||_t(4,t,n),ot(e,n,t);break;case 1:ze||(Xn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&od(t,n,a)),ot(e,n,t);break;case 21:ot(e,n,t);break;case 22:ze=(a=ze)||t.memoizedState!==null,ot(e,n,t),ze=a;break;default:ot(e,n,t)}}function vd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$i(e)}catch(t){Ce(n,n.return,t)}}function bp(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new hd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new hd),n;default:throw Error(c(435,e.tag))}}function vc(e,n){var t=bp(e);n.forEach(function(a){var i=Ap.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}function mn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],l=e,s=n,f=s;e:for(;f!==null;){switch(f.tag){case 27:if(Ht(f.type)){He=f.stateNode,on=!1;break e}break;case 5:He=f.stateNode,on=!1;break e;case 3:case 4:He=f.stateNode.containerInfo,on=!0;break e}f=f.return}if(He===null)throw Error(c(160));md(l,s,i),He=null,on=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)gd(n,e),n=n.sibling}var kn=null;function gd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(n,e),vn(e),a&4&&(_t(3,e,e.return),Ui(3,e),_t(5,e,e.return));break;case 1:mn(n,e),vn(e),a&512&&(ze||t===null||Xn(t,t.return)),a&64&&st&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=kn;if(mn(n,e),vn(e),a&512&&(ze||t===null||Xn(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ri]||l[en]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Je(l,a,t),l[en]=e,Xe(l),a=l;break e;case"link":var s=bb("link","href",i).get(a+(t.href||""));if(s){for(var f=0;f<s.length;f++)if(l=s[f],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(f,1);break n}}l=i.createElement(a),Je(l,a,t),i.head.appendChild(l);break;case"meta":if(s=bb("meta","content",i).get(a+(t.content||""))){for(f=0;f<s.length;f++)if(l=s[f],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(f,1);break n}}l=i.createElement(a),Je(l,a,t),i.head.appendChild(l);break;default:throw Error(c(468,a))}l[en]=e,Xe(l),a=l}e.stateNode=a}else hb(i,e.type,e.stateNode);else e.stateNode=db(i,a,e.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?hb(i,e.type,e.stateNode):db(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&hc(e,e.memoizedProps,t.memoizedProps)}break;case 27:mn(n,e),vn(e),a&512&&(ze||t===null||Xn(t,t.return)),t!==null&&a&4&&hc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(mn(n,e),vn(e),a&512&&(ze||t===null||Xn(t,t.return)),e.flags&32){i=e.stateNode;try{Ea(i,"")}catch(C){Ce(e,e.return,C)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,hc(e,i,t!==null?t.memoizedProps:i)),a&1024&&(mc=!0);break;case 6:if(mn(n,e),vn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(C){Ce(e,e.return,C)}}break;case 3:if(mr=null,i=kn,kn=pr(n.containerInfo),mn(n,e),kn=i,vn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{$i(n.containerInfo)}catch(C){Ce(e,e.return,C)}mc&&(mc=!1,Sd(e));break;case 4:a=kn,kn=pr(e.stateNode.containerInfo),mn(n,e),vn(e),kn=a;break;case 12:mn(n,e),vn(e);break;case 13:mn(n,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Tc=bn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vc(e,a)));break;case 22:i=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,x=st,w=ze;if(st=x||i,ze=w||g,mn(n,e),ze=w,st=x,vn(e),a&8192)e:for(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(t===null||g||st||ze||na(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(l=g.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=g.stateNode;var U=g.memoizedProps.style,N=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(C){Ce(g,g.return,C)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(C){Ce(g,g.return,C)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,vc(e,t))));break;case 19:mn(n,e),vn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vc(e,a)));break;case 30:break;case 21:break;default:mn(n,e),vn(e)}}function vn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(dd(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var i=t.stateNode,l=pc(e);tr(e,l,i);break;case 5:var s=t.stateNode;t.flags&32&&(Ea(s,""),t.flags&=-33);var f=pc(e);tr(e,f,s);break;case 3:case 4:var g=t.stateNode.containerInfo,x=pc(e);yc(e,x,g);break;default:throw Error(c(161))}}catch(w){Ce(e,e.return,w)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ot(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pd(e,n.alternate,n),n=n.sibling}function na(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_t(4,n,n.return),na(n);break;case 1:Xn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&od(n,n.return,t),na(n);break;case 27:Xi(n.stateNode);case 26:case 5:Xn(n,n.return),na(n);break;case 22:n.memoizedState===null&&na(n);break;case 30:na(n);break;default:na(n)}e=e.sibling}}function xt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=e,l=n,s=l.flags;switch(l.tag){case 0:case 11:case 15:xt(i,l,t),Ui(4,l);break;case 1:if(xt(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(x){Ce(a,a.return,x)}if(a=l,i=a.updateQueue,i!==null){var f=a.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Po(g[i],f)}catch(x){Ce(a,a.return,x)}}t&&s&64&&sd(l),Bi(l,l.return);break;case 27:bd(l);case 26:case 5:xt(i,l,t),t&&a===null&&s&4&&fd(l),Bi(l,l.return);break;case 12:xt(i,l,t);break;case 13:xt(i,l,t),t&&s&4&&vd(i,l);break;case 22:l.memoizedState===null&&xt(i,l,t),Bi(l,l.return);break;case 30:break;default:xt(i,l,t)}n=n.sibling}}function gc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ei(t))}function Sc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ei(e))}function Kn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ed(e,n,t,a),n=n.sibling}function Ed(e,n,t,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Kn(e,n,t,a),i&2048&&Ui(9,n);break;case 1:Kn(e,n,t,a);break;case 3:Kn(e,n,t,a),i&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ei(e)));break;case 12:if(i&2048){Kn(e,n,t,a),e=n.stateNode;try{var l=n.memoizedProps,s=l.id,f=l.onPostCommit;typeof f=="function"&&f(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Ce(n,n.return,g)}}else Kn(e,n,t,a);break;case 13:Kn(e,n,t,a);break;case 23:break;case 22:l=n.stateNode,s=n.alternate,n.memoizedState!==null?l._visibility&2?Kn(e,n,t,a):ji(e,n):l._visibility&2?Kn(e,n,t,a):(l._visibility|=2,Ga(e,n,t,a,(n.subtreeFlags&10256)!==0)),i&2048&&gc(s,n);break;case 24:Kn(e,n,t,a),i&2048&&Sc(n.alternate,n);break;default:Kn(e,n,t,a)}}function Ga(e,n,t,a,i){for(i=i&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var l=e,s=n,f=t,g=a,x=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(l,s,f,g,i),Ui(8,s);break;case 23:break;case 22:var w=s.stateNode;s.memoizedState!==null?w._visibility&2?Ga(l,s,f,g,i):ji(l,s):(w._visibility|=2,Ga(l,s,f,g,i)),i&&x&2048&&gc(s.alternate,s);break;case 24:Ga(l,s,f,g,i),i&&x&2048&&Sc(s.alternate,s);break;default:Ga(l,s,f,g,i)}n=n.sibling}}function ji(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:ji(t,a),i&2048&&gc(a.alternate,a);break;case 24:ji(t,a),i&2048&&Sc(a.alternate,a);break;default:ji(t,a)}n=n.sibling}}var ki=8192;function qa(e){if(e.subtreeFlags&ki)for(e=e.child;e!==null;)Ad(e),e=e.sibling}function Ad(e){switch(e.tag){case 26:qa(e),e.flags&ki&&e.memoizedState!==null&&Fp(kn,e.memoizedState,e.memoizedProps);break;case 5:qa(e);break;case 3:case 4:var n=kn;kn=pr(e.stateNode.containerInfo),qa(e),kn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ki,ki=16777216,qa(e),ki=n):qa(e));break;default:qa(e)}}function Rd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function zi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];We=a,_d(a,e)}Rd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Td(e),e=e.sibling}function Td(e){switch(e.tag){case 0:case 11:case 15:zi(e),e.flags&2048&&_t(9,e,e.return);break;case 3:zi(e);break;case 12:zi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ar(e)):zi(e);break;default:zi(e)}}function ar(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];We=a,_d(a,e)}Rd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_t(8,n,n.return),ar(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ar(n));break;default:ar(n)}e=e.sibling}}function _d(e,n){for(;We!==null;){var t=We;switch(t.tag){case 0:case 11:case 15:_t(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ei(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,We=a;else e:for(t=e;We!==null;){a=We;var i=a.sibling,l=a.return;if(yd(a),a===t){We=null;break e}if(i!==null){i.return=l,We=i;break e}We=l}}}var hp={getCacheForType:function(e){var n=nn(Ye),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},pp=typeof WeakMap=="function"?WeakMap:Map,Re=0,Me=null,pe=null,ve=0,Te=0,gn=null,Nt=!1,Ya=!1,Ec=!1,ft=0,je=0,Dt=0,ta=0,Ac=0,Mn=0,Ia=0,Gi=null,fn=null,Rc=!1,Tc=0,ir=1/0,lr=null,Ct=null,Ze=0,Mt=null,Va=null,Xa=0,_c=0,Oc=null,Od=null,qi=0,xc=null;function Sn(){if((Re&2)!==0&&ve!==0)return ve&-ve;if(D.T!==null){var e=wa;return e!==0?e:Lc()}return Gs()}function xd(){Mn===0&&(Mn=(ve&536870912)===0||Ee?Bs():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Mn}function En(e,n,t){(e===Me&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),wt(e,ve,Mn,!1)),li(e,t),((Re&2)===0||e!==Me)&&(e===Me&&((Re&2)===0&&(ta|=t),je===4&&wt(e,ve,Mn,!1)),Wn(e))}function Nd(e,n,t){if((Re&6)!==0)throw Error(c(327));var a=!t&&(n&124)===0&&(n&e.expiredLanes)===0||ii(e,n),i=a?vp(e,n):Cc(e,n,!0),l=a;do{if(i===0){Ya&&!a&&wt(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!yp(t)){i=Cc(e,n,!1),l=!1;continue}if(i===2){if(l=n,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var f=e;i=Gi;var g=f.current.memoizedState.isDehydrated;if(g&&(Ka(f,s).flags|=256),s=Cc(f,s,!1),s!==2){if(Ec&&!g){f.errorRecoveryDisabledLanes|=l,ta|=l,i=4;break e}l=fn,fn=i,l!==null&&(fn===null?fn=l:fn.push.apply(fn,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Ka(e,0),wt(e,n,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:wt(a,n,Mn,!Nt);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(i=Tc+300-bn(),10<i)){if(wt(a,n,Mn,!Nt),yl(a,0,!0)!==0)break e;a.timeoutHandle=ab(Dd.bind(null,a,t,fn,lr,Rc,n,Mn,ta,Ia,Nt,l,2,-0,0),i);break e}Dd(a,t,fn,lr,Rc,n,Mn,ta,Ia,Nt,l,0,-0,0)}}break}while(!0);Wn(e)}function Dd(e,n,t,a,i,l,s,f,g,x,w,U,N,C){if(e.timeoutHandle=-1,U=n.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(Pi={stylesheets:null,count:0,unsuspend:Jp},Ad(n),U=$p(),U!==null)){e.cancelPendingCommit=U(Bd.bind(null,e,n,l,t,a,i,s,f,g,w,1,N,C)),wt(e,l,s,!x);return}Bd(e,n,l,t,a,i,s,f,g)}function yp(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!pn(l(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wt(e,n,t,a){n&=~Ac,n&=~ta,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var l=31-hn(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&ks(e,t,n)}function rr(){return(Re&6)===0?(Yi(0),!1):!0}function Nc(){if(pe!==null){if(Te===0)var e=pe.return;else e=pe,at=Zt=null,Xu(e),ka=null,wi=0,e=pe;for(;e!==null;)cd(e.alternate,e),e=e.return;pe=null}}function Ka(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Lp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nc(),Me=e,pe=t=et(e.current,null),ve=n,Te=0,gn=null,Nt=!1,Ya=ii(e,n),Ec=!1,Ia=Mn=Ac=ta=Dt=je=0,fn=Gi=null,Rc=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var i=31-hn(a),l=1<<i;n|=e[i],a&=~l}return ft=n,Nl(),t}function Cd(e,n){de=null,D.H=Wl,n===Ri||n===jl?(n=Ko(),Te=3):n===Io?(n=Ko(),Te=4):Te=n===Pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gn=n,pe===null&&(je=1,Fl(e,On(n,e.current)))}function Md(){var e=D.H;return D.H=Wl,e===null?Wl:e}function wd(){var e=D.A;return D.A=hp,e}function Dc(){je=4,Nt||(ve&4194048)!==ve&&Cn.current!==null||(Ya=!0),(Dt&134217727)===0&&(ta&134217727)===0||Me===null||wt(Me,ve,Mn,!1)}function Cc(e,n,t){var a=Re;Re|=2;var i=Md(),l=wd();(Me!==e||ve!==n)&&(lr=null,Ka(e,n)),n=!1;var s=je;e:do try{if(Te!==0&&pe!==null){var f=pe,g=gn;switch(Te){case 8:Nc(),s=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var x=Te;if(Te=0,gn=null,Wa(e,f,g,x),t&&Ya){s=0;break e}break;default:x=Te,Te=0,gn=null,Wa(e,f,g,x)}}mp(),s=je;break}catch(w){Cd(e,w)}while(!0);return n&&e.shellSuspendCounter++,at=Zt=null,Re=a,D.H=i,D.A=l,pe===null&&(Me=null,ve=0,Nl()),s}function mp(){for(;pe!==null;)Hd(pe)}function vp(e,n){var t=Re;Re|=2;var a=Md(),i=wd();Me!==e||ve!==n?(lr=null,ir=bn()+500,Ka(e,n)):Ya=ii(e,n);e:do try{if(Te!==0&&pe!==null){n=pe;var l=gn;n:switch(Te){case 1:Te=0,gn=null,Wa(e,n,l,1);break;case 2:case 9:if(Vo(l)){Te=0,gn=null,Ld(n);break}n=function(){Te!==2&&Te!==9||Me!==e||(Te=7),Wn(e)},l.then(n,n);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Vo(l)?(Te=0,gn=null,Ld(n)):(Te=0,gn=null,Wa(e,n,l,7));break;case 5:var s=null;switch(pe.tag){case 26:s=pe.memoizedState;case 5:case 27:var f=pe;if(!s||pb(s)){Te=0,gn=null;var g=f.sibling;if(g!==null)pe=g;else{var x=f.return;x!==null?(pe=x,ur(x)):pe=null}break n}}Te=0,gn=null,Wa(e,n,l,5);break;case 6:Te=0,gn=null,Wa(e,n,l,6);break;case 8:Nc(),je=6;break e;default:throw Error(c(462))}}gp();break}catch(w){Cd(e,w)}while(!0);return at=Zt=null,D.H=a,D.A=i,Re=t,pe!==null?0:(Me=null,ve=0,Nl(),je)}function gp(){for(;pe!==null&&!Ir();)Hd(pe)}function Hd(e){var n=rd(e.alternate,e,ft);e.memoizedProps=e.pendingProps,n===null?ur(e):pe=n}function Ld(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=ed(t,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=ed(t,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Xu(n);default:cd(t,n),n=pe=Lo(n,ft),n=rd(t,n,ft)}e.memoizedProps=e.pendingProps,n===null?ur(e):pe=n}function Wa(e,n,t,a){at=Zt=null,Xu(n),ka=null,wi=0;var i=n.return;try{if(cp(e,i,n,t,ve)){je=1,Fl(e,On(t,e.current)),pe=null;return}}catch(l){if(i!==null)throw pe=i,l;je=1,Fl(e,On(t,e.current)),pe=null;return}n.flags&32768?(Ee||a===1?e=!0:Ya||(ve&536870912)!==0?e=!1:(Nt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Cn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ud(n,e)):ur(n)}function ur(e){var n=e;do{if((n.flags&32768)!==0){Ud(n,Nt);return}e=n.return;var t=op(n.alternate,n,ft);if(t!==null){pe=t;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);je===0&&(je=5)}function Ud(e,n){do{var t=fp(e.alternate,e);if(t!==null){t.flags&=32767,pe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=t}while(e!==null);je=6,pe=null}function Bd(e,n,t,a,i,l,s,f,g){e.cancelPendingCommit=null;do cr();while(Ze!==0);if((Re&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(l=n.lanes|n.childLanes,l|=Su,J0(e,t,l,s,f,g),e===Me&&(pe=Me=null,ve=0),Va=n,Mt=e,Xa=t,_c=l,Oc=i,Od=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Rp(ln,function(){return qd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=D.T,D.T=null,i=k.p,k.p=2,s=Re,Re|=4;try{dp(e,n,t)}finally{Re=s,k.p=i,D.T=a}}Ze=1,jd(),kd(),zd()}}function jd(){if(Ze===1){Ze=0;var e=Mt,n=Va,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=D.T,D.T=null;var a=k.p;k.p=2;var i=Re;Re|=4;try{gd(n,e);var l=Yc,s=To(e.containerInfo),f=l.focusedElem,g=l.selectionRange;if(s!==f&&f&&f.ownerDocument&&Ro(f.ownerDocument.documentElement,f)){if(g!==null&&pu(f)){var x=g.start,w=g.end;if(w===void 0&&(w=x),"selectionStart"in f)f.selectionStart=x,f.selectionEnd=Math.min(w,f.value.length);else{var U=f.ownerDocument||document,N=U&&U.defaultView||window;if(N.getSelection){var C=N.getSelection(),re=f.textContent.length,ae=Math.min(g.start,re),xe=g.end===void 0?ae:Math.min(g.end,re);!C.extend&&ae>xe&&(s=xe,xe=ae,ae=s);var T=Ao(f,ae),R=Ao(f,xe);if(T&&R&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==R.node||C.focusOffset!==R.offset)){var _=U.createRange();_.setStart(T.node,T.offset),C.removeAllRanges(),ae>xe?(C.addRange(_),C.extend(R.node,R.offset)):(_.setEnd(R.node,R.offset),C.addRange(_))}}}}for(U=[],C=f;C=C.parentNode;)C.nodeType===1&&U.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var L=U[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Sr=!!qc,Yc=qc=null}finally{Re=i,k.p=a,D.T=t}}e.current=n,Ze=2}}function kd(){if(Ze===2){Ze=0;var e=Mt,n=Va,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=D.T,D.T=null;var a=k.p;k.p=2;var i=Re;Re|=4;try{pd(e,n.alternate,n)}finally{Re=i,k.p=a,D.T=t}}Ze=3}}function zd(){if(Ze===4||Ze===3){Ze=0,Vr();var e=Mt,n=Va,t=Xa,a=Od;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ze=5:(Ze=0,Va=Mt=null,Gd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Ct=null),Pr(t),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Yn,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=D.T,i=k.p,k.p=2,D.T=null;try{for(var l=e.onRecoverableError,s=0;s<a.length;s++){var f=a[s];l(f.value,{componentStack:f.stack})}}finally{D.T=n,k.p=i}}(Xa&3)!==0&&cr(),Wn(e),i=e.pendingLanes,(t&4194090)!==0&&(i&42)!==0?e===xc?qi++:(qi=0,xc=e):qi=0,Yi(0)}}function Gd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ei(n)))}function cr(e){return jd(),kd(),zd(),qd()}function qd(){if(Ze!==5)return!1;var e=Mt,n=_c;_c=0;var t=Pr(Xa),a=D.T,i=k.p;try{k.p=32>t?32:t,D.T=null,t=Oc,Oc=null;var l=Mt,s=Xa;if(Ze=0,Va=Mt=null,Xa=0,(Re&6)!==0)throw Error(c(331));var f=Re;if(Re|=4,Td(l.current),Ed(l,l.current,s,t),Re=f,Yi(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Yn,l)}catch{}return!0}finally{k.p=i,D.T=a,Gd(e,n)}}function Yd(e,n,t){n=On(t,n),n=lc(e.stateNode,n,2),e=Et(e,n,2),e!==null&&(li(e,2),Wn(e))}function Ce(e,n,t){if(e.tag===3)Yd(e,e,t);else for(;n!==null;){if(n.tag===3){Yd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Ct===null||!Ct.has(a))){e=On(t,e),t=Kf(2),a=Et(n,t,2),a!==null&&(Wf(t,a,n,e),li(a,2),Wn(a));break}}n=n.return}}function Mc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new pp;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(Ec=!0,i.add(t),e=Sp.bind(null,e,n,t),n.then(e,e))}function Sp(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Me===e&&(ve&t)===t&&(je===4||je===3&&(ve&62914560)===ve&&300>bn()-Tc?(Re&2)===0&&Ka(e,0):Ac|=t,Ia===ve&&(Ia=0)),Wn(e)}function Id(e,n){n===0&&(n=js()),e=Na(e,n),e!==null&&(li(e,n),Wn(e))}function Ep(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Id(e,t)}function Ap(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),Id(e,t)}function Rp(e,n){return ba(e,n)}var sr=null,Pa=null,wc=!1,or=!1,Hc=!1,aa=0;function Wn(e){e!==Pa&&e.next===null&&(Pa===null?sr=Pa=e:Pa=Pa.next=e),or=!0,wc||(wc=!0,_p())}function Yi(e,n){if(!Hc&&or){Hc=!0;do for(var t=!1,a=sr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,f=a.pingedLanes;l=(1<<31-hn(42|e)+1)-1,l&=i&~(s&~f),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Wd(a,l))}else l=ve,l=yl(a,a===Me?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||ii(a,l)||(t=!0,Wd(a,l));a=a.next}while(t);Hc=!1}}function Tp(){Vd()}function Vd(){or=wc=!1;var e=0;aa!==0&&(Hp()&&(e=aa),aa=0);for(var n=bn(),t=null,a=sr;a!==null;){var i=a.next,l=Xd(a,n);l===0?(a.next=null,t===null?sr=i:t.next=i,i===null&&(Pa=t)):(t=a,(e!==0||(l&3)!==0)&&(or=!0)),a=i}Yi(e)}function Xd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-hn(l),f=1<<s,g=i[s];g===-1?((f&t)===0||(f&a)!==0)&&(i[s]=Z0(f,n)):g<=n&&(e.expiredLanes|=f),l&=~f}if(n=Me,t=ve,t=yl(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Jn(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ii(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Jn(a),Pr(t)){case 2:case 8:t=we;break;case 32:t=ln;break;case 268435456:t=dl;break;default:t=ln}return a=Kd.bind(null,e),t=ba(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Jn(a),e.callbackPriority=2,e.callbackNode=null,2}function Kd(e,n){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(cr()&&e.callbackNode!==t)return null;var a=ve;return a=yl(e,e===Me?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nd(e,a,n),Xd(e,bn()),e.callbackNode!=null&&e.callbackNode===t?Kd.bind(null,e):null)}function Wd(e,n){if(cr())return null;Nd(e,n,!0)}function _p(){Up(function(){(Re&6)!==0?ba(oe,Tp):Vd()})}function Lc(){return aa===0&&(aa=Bs()),aa}function Pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:El(""+e)}function Qd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Op(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var l=Pd((i[un]||null).action),s=a.submitter;s&&(n=(n=s[un]||null)?Pd(n.formAction):s.getAttribute("formAction"),n!==null&&(l=n,s=null));var f=new _l("action","action",null,a,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(aa!==0){var g=s?Qd(i,s):new FormData(i);ec(t,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(f.preventDefault(),g=s?Qd(i,s):new FormData(i),ec(t,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var Uc=0;Uc<gu.length;Uc++){var Bc=gu[Uc],xp=Bc.toLowerCase(),Np=Bc[0].toUpperCase()+Bc.slice(1);jn(xp,"on"+Np)}jn(xo,"onAnimationEnd"),jn(No,"onAnimationIteration"),jn(Do,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(Xh,"onTransitionRun"),jn(Kh,"onTransitionStart"),jn(Wh,"onTransitionCancel"),jn(Co,"onTransitionEnd"),va("onMouseEnter",["mouseout","mouseover"]),va("onMouseLeave",["mouseout","mouseover"]),va("onPointerEnter",["pointerout","pointerover"]),va("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii));function Zd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var s=a.length-1;0<=s;s--){var f=a[s],g=f.instance,x=f.currentTarget;if(f=f.listener,g!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=x;try{l(i)}catch(w){Jl(w)}i.currentTarget=null,l=g}else for(s=0;s<a.length;s++){if(f=a[s],g=f.instance,x=f.currentTarget,f=f.listener,g!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=x;try{l(i)}catch(w){Jl(w)}i.currentTarget=null,l=g}}}}function ye(e,n){var t=n[Qr];t===void 0&&(t=n[Qr]=new Set);var a=e+"__bubble";t.has(a)||(Jd(n,e,2,!1),t.add(a))}function jc(e,n,t){var a=0;n&&(a|=4),Jd(t,e,a,n)}var fr="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[fr]){e[fr]=!0,Ys.forEach(function(t){t!=="selectionchange"&&(Dp.has(t)||jc(t,!1,e),jc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fr]||(n[fr]=!0,jc("selectionchange",!1,n))}}function Jd(e,n,t,a){switch(Eb(n)){case 2:var i=ty;break;case 8:i=ay;break;default:i=Fc}t=i.bind(null,n,t,e),i=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function zc(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i)break;if(s===4)for(s=a.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;f!==null;){if(s=pa(f),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){a=l=s;continue e}f=f.parentNode}}a=a.return}to(function(){var x=l,w=iu(t),U=[];e:{var N=Mo.get(e);if(N!==void 0){var C=_l,re=e;switch(e){case"keypress":if(Rl(t)===0)break e;case"keydown":case"keyup":C=Rh;break;case"focusin":re="focus",C=ou;break;case"focusout":re="blur",C=ou;break;case"beforeblur":case"afterblur":C=ou;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Oh;break;case xo:case No:case Do:C=hh;break;case Co:C=Nh;break;case"scroll":case"scrollend":C=sh;break;case"wheel":C=Ch;break;case"copy":case"cut":case"paste":C=yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=uo;break;case"toggle":case"beforetoggle":C=wh}var ae=(n&4)!==0,xe=!ae&&(e==="scroll"||e==="scrollend"),T=ae?N!==null?N+"Capture":null:N;ae=[];for(var R=x,_;R!==null;){var L=R;if(_=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||_===null||T===null||(L=ci(R,T),L!=null&&ae.push(Vi(R,L,_))),xe)break;R=R.return}0<ae.length&&(N=new C(N,re,null,t,w),U.push({event:N,listeners:ae}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",N&&t!==au&&(re=t.relatedTarget||t.fromElement)&&(pa(re)||re[ha]))break e;if((C||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,C?(re=t.relatedTarget||t.toElement,C=x,re=re?pa(re):null,re!==null&&(xe=p(re),ae=re.tag,re!==xe||ae!==5&&ae!==27&&ae!==6)&&(re=null)):(C=null,re=x),C!==re)){if(ae=lo,L="onMouseLeave",T="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ae=uo,L="onPointerLeave",T="onPointerEnter",R="pointer"),xe=C==null?N:ui(C),_=re==null?N:ui(re),N=new ae(L,R+"leave",C,t,w),N.target=xe,N.relatedTarget=_,L=null,pa(w)===x&&(ae=new ae(T,R+"enter",re,t,w),ae.target=_,ae.relatedTarget=xe,L=ae),xe=L,C&&re)n:{for(ae=C,T=re,R=0,_=ae;_;_=Qa(_))R++;for(_=0,L=T;L;L=Qa(L))_++;for(;0<R-_;)ae=Qa(ae),R--;for(;0<_-R;)T=Qa(T),_--;for(;R--;){if(ae===T||T!==null&&ae===T.alternate)break n;ae=Qa(ae),T=Qa(T)}ae=null}else ae=null;C!==null&&Fd(U,N,C,ae,!1),re!==null&&xe!==null&&Fd(U,xe,re,ae,!0)}}e:{if(N=x?ui(x):window,C=N.nodeName&&N.nodeName.toLowerCase(),C==="select"||C==="input"&&N.type==="file")var Q=yo;else if(ho(N))if(mo)Q=Yh;else{Q=Gh;var he=zh}else C=N.nodeName,!C||C.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?x&&tu(x.elementType)&&(Q=yo):Q=qh;if(Q&&(Q=Q(e,x))){po(U,Q,t,w);break e}he&&he(e,N,x),e==="focusout"&&x&&N.type==="number"&&x.memoizedProps.value!=null&&nu(N,"number",N.value)}switch(he=x?ui(x):window,e){case"focusin":(ho(he)||he.contentEditable==="true")&&(_a=he,yu=x,yi=null);break;case"focusout":yi=yu=_a=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,_o(U,t,w);break;case"selectionchange":if(Vh)break;case"keydown":case"keyup":_o(U,t,w)}var $;if(du)e:{switch(e){case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e}le=void 0}else Ta?fo(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(co&&t.locale!=="ko"&&(Ta||le!=="onCompositionStart"?le==="onCompositionEnd"&&Ta&&($=ao()):(mt=w,uu="value"in mt?mt.value:mt.textContent,Ta=!0)),he=dr(x,le),0<he.length&&(le=new ro(le,e,null,t,w),U.push({event:le,listeners:he}),$?le.data=$:($=bo(t),$!==null&&(le.data=$)))),($=Lh?Uh(e,t):Bh(e,t))&&(le=dr(x,"onBeforeInput"),0<le.length&&(he=new ro("onBeforeInput","beforeinput",null,t,w),U.push({event:he,listeners:le}),he.data=$)),Op(U,e,x,t,w)}Zd(U,n)})}function Vi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function dr(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ci(e,t),i!=null&&a.unshift(Vi(e,i,l)),i=ci(e,n),i!=null&&a.push(Vi(e,i,l))),e.tag===3)return a;e=e.return}return[]}function Qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,n,t,a,i){for(var l=n._reactName,s=[];t!==null&&t!==a;){var f=t,g=f.alternate,x=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||x===null||(g=x,i?(x=ci(t,l),x!=null&&s.unshift(Vi(t,x,g))):i||(x=ci(t,l),x!=null&&s.push(Vi(t,x,g)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Cp=/\r\n?/g,Mp=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Cp,`
`).replace(Mp,"")}function eb(e,n){return n=$d(n),$d(e)===n}function br(){}function Oe(e,n,t,a,i,l){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ea(e,""+a);break;case"className":vl(e,"class",a);break;case"tabIndex":vl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":vl(e,t,a);break;case"style":eo(e,a,l);break;case"data":if(n!=="object"){vl(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=El(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&Oe(e,n,"name",i.name,i,null),Oe(e,n,"formEncType",i.formEncType,i,null),Oe(e,n,"formMethod",i.formMethod,i,null),Oe(e,n,"formTarget",i.formTarget,i,null)):(Oe(e,n,"encType",i.encType,i,null),Oe(e,n,"method",i.method,i,null),Oe(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=El(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=br);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=El(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),ml(e,"popover",a);break;case"xlinkActuate":Fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Fn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Fn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Fn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Fn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ml(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=uh.get(t)||t,ml(e,t,a))}}function Gc(e,n,t,a,i,l){switch(t){case"style":eo(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=br);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),n=t.slice(2,i?t.length-7:void 0),l=e[un]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):ml(e,t,a)}}}function Je(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Oe(e,n,l,s,t,null)}}i&&Oe(e,n,"srcSet",t.srcSet,t,null),a&&Oe(e,n,"src",t.src,t,null);return;case"input":ye("invalid",e);var f=l=s=i=null,g=null,x=null;for(a in t)if(t.hasOwnProperty(a)){var w=t[a];if(w!=null)switch(a){case"name":i=w;break;case"type":s=w;break;case"checked":g=w;break;case"defaultChecked":x=w;break;case"value":l=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,n));break;default:Oe(e,n,a,w,t,null)}}Zs(e,l,f,g,x,s,i,!1),gl(e);return;case"select":ye("invalid",e),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(f=t[i],f!=null))switch(i){case"value":l=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:Oe(e,n,i,f,t,null)}n=l,t=s,e.multiple=!!a,n!=null?Sa(e,!!a,n,!1):t!=null&&Sa(e,!!a,t,!0);return;case"textarea":ye("invalid",e),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(f=t[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":l=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:Oe(e,n,s,f,t,null)}Fs(e,a,i,l),gl(e);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(a=t[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Oe(e,n,g,a,t,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<Ii.length;a++)ye(Ii[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in t)if(t.hasOwnProperty(x)&&(a=t[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Oe(e,n,x,a,t,null)}return;default:if(tu(n)){for(w in t)t.hasOwnProperty(w)&&(a=t[w],a!==void 0&&Gc(e,n,w,a,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null&&Oe(e,n,f,a,t,null))}function wp(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,f=null,g=null,x=null,w=null;for(C in t){var U=t[C];if(t.hasOwnProperty(C)&&U!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":g=U;default:a.hasOwnProperty(C)||Oe(e,n,C,null,a,U)}}for(var N in a){var C=a[N];if(U=t[N],a.hasOwnProperty(N)&&(C!=null||U!=null))switch(N){case"type":l=C;break;case"name":i=C;break;case"checked":x=C;break;case"defaultChecked":w=C;break;case"value":s=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,n));break;default:C!==U&&Oe(e,n,N,C,a,U)}}eu(e,s,f,g,x,w,l,i);return;case"select":C=s=f=N=null;for(l in t)if(g=t[l],t.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":C=g;default:a.hasOwnProperty(l)||Oe(e,n,l,null,a,g)}for(i in a)if(l=a[i],g=t[i],a.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":N=l;break;case"defaultValue":f=l;break;case"multiple":s=l;default:l!==g&&Oe(e,n,i,l,a,g)}n=f,t=s,a=C,N!=null?Sa(e,!!t,N,!1):!!a!=!!t&&(n!=null?Sa(e,!!t,n,!0):Sa(e,!!t,t?[]:"",!1));return;case"textarea":C=N=null;for(f in t)if(i=t[f],t.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Oe(e,n,f,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":N=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==l&&Oe(e,n,s,i,a,l)}Js(e,N,C);return;case"option":for(var re in t)if(N=t[re],t.hasOwnProperty(re)&&N!=null&&!a.hasOwnProperty(re))switch(re){case"selected":e.selected=!1;break;default:Oe(e,n,re,null,a,N)}for(g in a)if(N=a[g],C=t[g],a.hasOwnProperty(g)&&N!==C&&(N!=null||C!=null))switch(g){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Oe(e,n,g,N,a,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in t)N=t[ae],t.hasOwnProperty(ae)&&N!=null&&!a.hasOwnProperty(ae)&&Oe(e,n,ae,null,a,N);for(x in a)if(N=a[x],C=t[x],a.hasOwnProperty(x)&&N!==C&&(N!=null||C!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,n));break;default:Oe(e,n,x,N,a,C)}return;default:if(tu(n)){for(var xe in t)N=t[xe],t.hasOwnProperty(xe)&&N!==void 0&&!a.hasOwnProperty(xe)&&Gc(e,n,xe,void 0,a,N);for(w in a)N=a[w],C=t[w],!a.hasOwnProperty(w)||N===C||N===void 0&&C===void 0||Gc(e,n,w,N,a,C);return}}for(var T in t)N=t[T],t.hasOwnProperty(T)&&N!=null&&!a.hasOwnProperty(T)&&Oe(e,n,T,null,a,N);for(U in a)N=a[U],C=t[U],!a.hasOwnProperty(U)||N===C||N==null&&C==null||Oe(e,n,U,N,a,C)}var qc=null,Yc=null;function hr(e){return e.nodeType===9?e:e.ownerDocument}function nb(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tb(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ic(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vc=null;function Hp(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var ab=typeof setTimeout=="function"?setTimeout:void 0,Lp=typeof clearTimeout=="function"?clearTimeout:void 0,ib=typeof Promise=="function"?Promise:void 0,Up=typeof queueMicrotask=="function"?queueMicrotask:typeof ib<"u"?function(e){return ib.resolve(null).then(e).catch(Bp)}:ab;function Bp(e){setTimeout(function(){throw e})}function Ht(e){return e==="head"}function lb(e,n){var t=n,a=0,i=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(0<a&&8>a){t=a;var s=e.ownerDocument;if(t&1&&Xi(s.documentElement),t&2&&Xi(s.body),t&4)for(t=s.head,Xi(t),s=t.firstChild;s;){var f=s.nextSibling,g=s.nodeName;s[ri]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=f}}if(i===0){e.removeChild(l),$i(n);return}i--}else t==="$"||t==="$?"||t==="$!"?i++:a=t.charCodeAt(0)-48;else a=0;t=l}while(t);$i(n)}function Xc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Xc(t),Zr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function jp(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ri])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function kp(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zn(e.nextSibling),e===null))return null;return e}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function zp(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Wc=null;function rb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function ub(e,n,t){switch(n=hr(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Xi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zr(e)}var wn=new Map,cb=new Set;function pr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dt=k.d;k.d={f:Gp,r:qp,D:Yp,C:Ip,L:Vp,m:Xp,X:Wp,S:Kp,M:Pp};function Gp(){var e=dt.f(),n=rr();return e||n}function qp(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?Nf(n):dt.r(e)}var Za=typeof document>"u"?null:document;function sb(e,n,t){var a=Za;if(a&&typeof n=="string"&&n){var i=_n(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),cb.has(i)||(cb.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Je(n,"link",e),Xe(n),a.head.appendChild(n)))}}function Yp(e){dt.D(e),sb("dns-prefetch",e,null)}function Ip(e,n){dt.C(e,n),sb("preconnect",e,n)}function Vp(e,n,t){dt.L(e,n,t);var a=Za;if(a&&e&&n){var i='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+_n(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+_n(t.imageSizes)+'"]')):i+='[href="'+_n(e)+'"]';var l=i;switch(n){case"style":l=Ja(e);break;case"script":l=Fa(e)}wn.has(l)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),wn.set(l,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(Ki(l))||n==="script"&&a.querySelector(Wi(l))||(n=a.createElement("link"),Je(n,"link",e),Xe(n),a.head.appendChild(n)))}}function Xp(e,n){dt.m(e,n);var t=Za;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+_n(a)+'"][href="'+_n(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Fa(e)}if(!wn.has(l)&&(e=E({rel:"modulepreload",href:e},n),wn.set(l,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Wi(l)))return}a=t.createElement("link"),Je(a,"link",e),Xe(a),t.head.appendChild(a)}}}function Kp(e,n,t){dt.S(e,n,t);var a=Za;if(a&&e){var i=ma(a).hoistableStyles,l=Ja(e);n=n||"default";var s=i.get(l);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(Ki(l)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=wn.get(l))&&Pc(e,t);var g=s=a.createElement("link");Xe(g),Je(g,"link",e),g._p=new Promise(function(x,w){g.onload=x,g.onerror=w}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,yr(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(l,s)}}}function Wp(e,n){dt.X(e,n);var t=Za;if(t&&e){var a=ma(t).hoistableScripts,i=Fa(e),l=a.get(i);l||(l=t.querySelector(Wi(i)),l||(e=E({src:e,async:!0},n),(n=wn.get(i))&&Qc(e,n),l=t.createElement("script"),Xe(l),Je(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Pp(e,n){dt.M(e,n);var t=Za;if(t&&e){var a=ma(t).hoistableScripts,i=Fa(e),l=a.get(i);l||(l=t.querySelector(Wi(i)),l||(e=E({src:e,async:!0,type:"module"},n),(n=wn.get(i))&&Qc(e,n),l=t.createElement("script"),Xe(l),Je(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function ob(e,n,t,a){var i=(i=ee.current)?pr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Ja(t.href),t=ma(i).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ja(t.href);var l=ma(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(Ki(e)))&&!l._p&&(s.instance=l,s.state.loading=5),wn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},wn.set(e,t),l||Qp(i,e,t,s.state))),n&&a===null)throw Error(c(528,""));return s}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fa(t),t=ma(i).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ja(e){return'href="'+_n(e)+'"'}function Ki(e){return'link[rel="stylesheet"]['+e+"]"}function fb(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Qp(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Je(n,"link",t),Xe(n),e.head.appendChild(n))}function Fa(e){return'[src="'+_n(e)+'"]'}function Wi(e){return"script[async]"+e}function db(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+_n(t.href)+'"]');if(a)return n.instance=a,Xe(a),a;var i=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Je(a,"style",i),yr(a,t.precedence,e),n.instance=a;case"stylesheet":i=Ja(t.href);var l=e.querySelector(Ki(i));if(l)return n.state.loading|=4,n.instance=l,Xe(l),l;a=fb(t),(i=wn.get(i))&&Pc(a,i),l=(e.ownerDocument||e).createElement("link"),Xe(l);var s=l;return s._p=new Promise(function(f,g){s.onload=f,s.onerror=g}),Je(l,"link",a),n.state.loading|=4,yr(l,t.precedence,e),n.instance=l;case"script":return l=Fa(t.src),(i=e.querySelector(Wi(l)))?(n.instance=i,Xe(i),i):(a=t,(i=wn.get(l))&&(a=E({},t),Qc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),Je(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,yr(a,t.precedence,e));return n.instance}function yr(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===n)l=f;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Pc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var mr=null;function bb(e,n,t){if(mr===null){var a=new Map,i=mr=new Map;i.set(t,a)}else i=mr,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[ri]||l[en]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(n)||"";s=e+s;var f=a.get(s);f?f.push(l):a.set(s,[l])}}return a}function hb(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Zp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function pb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Pi=null;function Jp(){}function Fp(e,n,t){if(Pi===null)throw Error(c(475));var a=Pi;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Ja(t.href),l=e.querySelector(Ki(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=vr.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=l,Xe(l);return}l=e.ownerDocument||e,t=fb(t),(i=wn.get(i))&&Pc(t,i),l=l.createElement("link"),Xe(l);var s=l;s._p=new Promise(function(f,g){s.onload=f,s.onerror=g}),Je(l,"link",t),n.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=vr.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function $p(){if(Pi===null)throw Error(c(475));var e=Pi;return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function vr(){if(this.count--,this.count===0){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gr=null;function Zc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gr=new Map,n.forEach(ey,e),gr=null,vr.call(e))}function ey(e,n){if(!(n.state.loading&4)){var t=gr.get(e);if(t)var a=t.get(null);else{t=new Map,gr.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=n.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=vr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var Qi={$$typeof:ie,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function ny(e,n,t,a,i,l,s,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kr(0),this.hiddenUpdates=Kr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function yb(e,n,t,a,i,l,s,f,g,x,w,U){return e=new ny(e,n,t,s,f,g,x,U),n=1,l===!0&&(n|=24),l=yn(3,null,null,n),e.current=l,l.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},Uu(l),e}function mb(e){return e?(e=Da,e):Da}function vb(e,n,t,a,i,l){i=mb(i),a.context===null?a.context=i:a.pendingContext=i,a=St(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Et(e,a,n),t!==null&&(En(t,e,n),_i(t,e,n))}function gb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Jc(e,n){gb(e,n),(e=e.alternate)&&gb(e,n)}function Sb(e){if(e.tag===13){var n=Na(e,67108864);n!==null&&En(n,e,67108864),Jc(e,67108864)}}var Sr=!0;function ty(e,n,t,a){var i=D.T;D.T=null;var l=k.p;try{k.p=2,Fc(e,n,t,a)}finally{k.p=l,D.T=i}}function ay(e,n,t,a){var i=D.T;D.T=null;var l=k.p;try{k.p=8,Fc(e,n,t,a)}finally{k.p=l,D.T=i}}function Fc(e,n,t,a){if(Sr){var i=$c(a);if(i===null)zc(e,n,a,Er,t),Ab(e,a);else if(ly(i,e,n,t,a))a.stopPropagation();else if(Ab(e,a),n&4&&-1<iy.indexOf(e)){for(;i!==null;){var l=ya(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Gt(l.pendingLanes);if(s!==0){var f=l;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var g=1<<31-hn(s);f.entanglements[1]|=g,s&=~g}Wn(l),(Re&6)===0&&(ir=bn()+500,Yi(0))}}break;case 13:f=Na(l,2),f!==null&&En(f,l,2),rr(),Jc(l,2)}if(l=$c(a),l===null&&zc(e,n,a,Er,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else zc(e,n,a,null,t)}}function $c(e){return e=iu(e),es(e)}var Er=null;function es(e){if(Er=null,e=pa(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Er=e,null}function Eb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xr()){case oe:return 2;case we:return 8;case ln:case Bn:return 32;case dl:return 268435456;default:return 32}default:return 32}}var ns=!1,Lt=null,Ut=null,Bt=null,Zi=new Map,Ji=new Map,jt=[],iy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ab(e,n){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Zi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(n.pointerId)}}function Fi(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ya(n),n!==null&&Sb(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function ly(e,n,t,a,i){switch(n){case"focusin":return Lt=Fi(Lt,e,n,t,a,i),!0;case"dragenter":return Ut=Fi(Ut,e,n,t,a,i),!0;case"mouseover":return Bt=Fi(Bt,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return Zi.set(l,Fi(Zi.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Ji.set(l,Fi(Ji.get(l)||null,e,n,t,a,i)),!0}return!1}function Rb(e){var n=pa(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,F0(e.priority,function(){if(t.tag===13){var a=Sn();a=Wr(a);var i=Na(t,a);i!==null&&En(i,t,a),Jc(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ar(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$c(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);au=a,t.target.dispatchEvent(a),au=null}else return n=ya(t),n!==null&&Sb(n),e.blockedOn=t,!1;n.shift()}return!0}function Tb(e,n,t){Ar(e)&&t.delete(n)}function ry(){ns=!1,Lt!==null&&Ar(Lt)&&(Lt=null),Ut!==null&&Ar(Ut)&&(Ut=null),Bt!==null&&Ar(Bt)&&(Bt=null),Zi.forEach(Tb),Ji.forEach(Tb)}function Rr(e,n){e.blockedOn===n&&(e.blockedOn=null,ns||(ns=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ry)))}var Tr=null;function _b(e){Tr!==e&&(Tr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Tr===e&&(Tr=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(es(a||t)===null)continue;break}var l=ya(t);l!==null&&(e.splice(n,3),n-=3,ec(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function $i(e){function n(g){return Rr(g,e)}Lt!==null&&Rr(Lt,e),Ut!==null&&Rr(Ut,e),Bt!==null&&Rr(Bt,e),Zi.forEach(n),Ji.forEach(n);for(var t=0;t<jt.length;t++){var a=jt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<jt.length&&(t=jt[0],t.blockedOn===null);)Rb(t),t.blockedOn===null&&jt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[un]||null;if(typeof l=="function")s||_b(t);else if(s){var f=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[un]||null)f=s.formAction;else if(es(i)!==null)continue}else f=s.action;typeof f=="function"?t[a+1]=f:(t.splice(a,3),a-=3),_b(t)}}}function ts(e){this._internalRoot=e}_r.prototype.render=ts.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=Sn();vb(t,a,e,n,null,null)},_r.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vb(e.current,2,null,e,null,null),rr(),n[ha]=null}};function _r(e){this._internalRoot=e}_r.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<jt.length&&n!==0&&n<jt[t].priority;t++);jt.splice(t,0,e),t===0&&Rb(e)}};var Ob=u.version;if(Ob!=="19.1.0")throw Error(c(527,Ob,"19.1.0"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(n),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var uy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Or=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Or.isDisabled&&Or.supportsFiber)try{Yn=Or.inject(uy),Ve=Or}catch{}}return nl.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,a="",i=Yf,l=If,s=Vf,f=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(f=n.unstable_transitionCallbacks)),n=yb(e,1,!1,null,null,t,a,i,l,s,f,null),e[ha]=n.current,kc(e),new ts(n)},nl.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var a=!1,i="",l=Yf,s=If,f=Vf,g=null,x=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks),t.formState!==void 0&&(x=t.formState)),n=yb(e,1,!0,n,t??null,a,i,l,s,f,g,x),n.context=mb(null),t=n.current,a=Sn(),a=Wr(a),i=St(a),i.callback=null,Et(t,i,a),t=a,n.current.lanes=t,li(n,t),Wn(n),e[ha]=n.current,kc(e),new _r(n)},nl.version="19.1.0",nl}var Bb;function vy(){if(Bb)return ls.exports;Bb=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),ls.exports=my(),ls.exports}var gy=vy();function Sy(r,u){const d=Math.min(u?3.5:7,r*(u?.25:.5));return r-d}function Ey(r,u,o,c,d){if(r<=0||u<=0)return{shots:1/0,totalDamage:0};let p=o,m=c,S=0,b=0;for(;p>0;){S++;for(let h=0;h<u;h++){let E=r;if(m>0){E=Sy(E,d);const M=Math.min(E,m);m-=M,E-=M}if(p-=E,b+=r,p<=0)break}}return{shots:S,totalDamage:b}}function Ay(r,u,o,c,d){const p=[];for(let m=100;m<=200;m+=5){const S=r*(m/100),{shots:b,totalDamage:h}=Ey(S,u,o,c,d);p.push({percent:m,shots:b,totalDamage:h})}return p}function Ry(){const[r,u]=ne.useState(75),[o,c]=ne.useState(1),[d,p]=ne.useState(300),[m,S]=ne.useState(0),[b,h]=ne.useState(!1),[E,M]=ne.useState([]),B=()=>{M(Ay(r,o,d,m,b))};return v.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Damage Breakpoints"}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Damage per Bullet"}),v.jsx("input",{type:"number",value:r,onChange:G=>u(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Bullets per Shot"}),v.jsx("input",{type:"number",value:o,onChange:G=>c(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy HP"}),v.jsx("input",{type:"number",value:d,onChange:G=>p(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy Armor"}),v.jsx("input",{type:"number",value:m,onChange:G=>S(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"flex items-center space-x-2 mt-6 text-gray-700 dark:text-gray-300",children:[v.jsx("input",{type:"checkbox",checked:b,onChange:G=>h(G.target.checked)}),v.jsx("span",{children:"Using armor penetration item"})]})]}),v.jsx("button",{onClick:B,className:"bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",children:"Calculate"}),E.length>0&&v.jsx("div",{className:"overflow-x-auto mt-4 max-h-96 overflow-y-auto",children:v.jsxs("table",{className:"min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Damage %"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Bullet"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Shot"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Shots"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Accumulated"})]})}),v.jsx("tbody",{children:E.map((G,I)=>{const q=I>0?E[I-1].shots:G.shots,z=G.shots<q,W=r*G.percent/100,V=W*o;return v.jsxs("tr",{className:z?"bg-yellow-100 dark:bg-yellow-900":"",children:[v.jsxs("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:[G.percent,"%"]}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:W.toFixed(1)}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:V.toFixed(1)}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:G.shots}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:G.totalDamage.toFixed(1)})]},G.percent)})})]})})]})]})}var ss={exports:{}},os={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb;function Ty(){if(jb)return os;jb=1;var r=ai();function u(b,h){return b===h&&(b!==0||1/b===1/h)||b!==b&&h!==h}var o=typeof Object.is=="function"?Object.is:u,c=r.useSyncExternalStore,d=r.useRef,p=r.useEffect,m=r.useMemo,S=r.useDebugValue;return os.useSyncExternalStoreWithSelector=function(b,h,E,M,B){var G=d(null);if(G.current===null){var I={hasValue:!1,value:null};G.current=I}else I=G.current;G=m(function(){function z(y){if(!W){if(W=!0,V=y,y=M(y),B!==void 0&&I.hasValue){var O=I.value;if(B(O,y))return ie=O}return ie=y}if(O=ie,o(V,y))return O;var H=M(y);return B!==void 0&&B(O,H)?(V=y,O):(V=y,ie=H)}var W=!1,V,ie,F=E===void 0?null:E;return[function(){return z(h())},F===null?void 0:function(){return z(F())}]},[h,E,M,B]);var q=c(b,G[0],G[1]);return p(function(){I.hasValue=!0,I.value=q},[q]),S(q),q},os}var kb;function _y(){return kb||(kb=1,ss.exports=Ty()),ss.exports}var Oy=_y();function xy(r){r()}function Ny(){let r=null,u=null;return{clear(){r=null,u=null},notify(){xy(()=>{let o=r;for(;o;)o.callback(),o=o.next})},get(){const o=[];let c=r;for(;c;)o.push(c),c=c.next;return o},subscribe(o){let c=!0;const d=u={callback:o,next:null,prev:u};return d.prev?d.prev.next=d:r=d,function(){!c||r===null||(c=!1,d.next?d.next.prev=d.prev:u=d.prev,d.prev?d.prev.next=d.next:r=d.next)}}}}var zb={notify(){},get:()=>[]};function Dy(r,u){let o,c=zb,d=0,p=!1;function m(q){E();const z=c.subscribe(q);let W=!1;return()=>{W||(W=!0,z(),M())}}function S(){c.notify()}function b(){I.onStateChange&&I.onStateChange()}function h(){return p}function E(){d++,o||(o=r.subscribe(b),c=Ny())}function M(){d--,o&&d===0&&(o(),o=void 0,c.clear(),c=zb)}function B(){p||(p=!0,E())}function G(){p&&(p=!1,M())}const I={addNestedSub:m,notifyNestedSubs:S,handleChangeWrapper:b,isSubscribed:h,trySubscribe:B,tryUnsubscribe:G,getListeners:()=>c};return I}var Cy=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",My=Cy(),wy=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Hy=wy(),Ly=()=>My||Hy?ne.useLayoutEffect:ne.useEffect,Uy=Ly(),fs=Symbol.for("react-redux-context"),ds=typeof globalThis<"u"?globalThis:{};function By(){if(!ne.createContext)return{};const r=ds[fs]??(ds[fs]=new Map);let u=r.get(ne.createContext);return u||(u=ne.createContext(null),r.set(ne.createContext,u)),u}var zt=By();function jy(r){const{children:u,context:o,serverState:c,store:d}=r,p=ne.useMemo(()=>{const b=Dy(d);return{store:d,subscription:b,getServerState:c?()=>c:void 0}},[d,c]),m=ne.useMemo(()=>d.getState(),[d]);Uy(()=>{const{subscription:b}=p;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),m!==d.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[p,m]);const S=o||zt;return ne.createElement(S.Provider,{value:p},u)}var ky=jy;function Cs(r=zt){return function(){return ne.useContext(r)}}var v0=Cs();function g0(r=zt){const u=r===zt?v0:Cs(r),o=()=>{const{store:c}=u();return c};return Object.assign(o,{withTypes:()=>o}),o}var zy=g0();function Gy(r=zt){const u=r===zt?zy:g0(r),o=()=>u().dispatch;return Object.assign(o,{withTypes:()=>o}),o}var qy=Gy(),Yy=(r,u)=>r===u;function Iy(r=zt){const u=r===zt?v0:Cs(r),o=(c,d={})=>{const{equalityFn:p=Yy}=typeof d=="function"?{equalityFn:d}:d,m=u(),{store:S,subscription:b,getServerState:h}=m;ne.useRef(!0);const E=ne.useCallback({[c.name](B){return c(B)}}[c.name],[c]),M=Oy.useSyncExternalStoreWithSelector(b.addNestedSub,S.getState,h||S.getState,E,p);return ne.useDebugValue(M),M};return Object.assign(o,{withTypes:()=>o}),o}var Vy=Iy();const Pn=qy,dn=Vy;function Fe(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var Xy=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gb=Xy,bs=()=>Math.random().toString(36).substring(7).split("").join("."),Ky={INIT:`@@redux/INIT${bs()}`,REPLACE:`@@redux/REPLACE${bs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bs()}`},wr=Ky;function Ms(r){if(typeof r!="object"||r===null)return!1;let u=r;for(;Object.getPrototypeOf(u)!==null;)u=Object.getPrototypeOf(u);return Object.getPrototypeOf(r)===u||Object.getPrototypeOf(r)===null}function S0(r,u,o){if(typeof r!="function")throw new Error(Fe(2));if(typeof u=="function"&&typeof o=="function"||typeof o=="function"&&typeof arguments[3]=="function")throw new Error(Fe(0));if(typeof u=="function"&&typeof o>"u"&&(o=u,u=void 0),typeof o<"u"){if(typeof o!="function")throw new Error(Fe(1));return o(S0)(r,u)}let c=r,d=u,p=new Map,m=p,S=0,b=!1;function h(){m===p&&(m=new Map,p.forEach((z,W)=>{m.set(W,z)}))}function E(){if(b)throw new Error(Fe(3));return d}function M(z){if(typeof z!="function")throw new Error(Fe(4));if(b)throw new Error(Fe(5));let W=!0;h();const V=S++;return m.set(V,z),function(){if(W){if(b)throw new Error(Fe(6));W=!1,h(),m.delete(V),p=null}}}function B(z){if(!Ms(z))throw new Error(Fe(7));if(typeof z.type>"u")throw new Error(Fe(8));if(typeof z.type!="string")throw new Error(Fe(17));if(b)throw new Error(Fe(9));try{b=!0,d=c(d,z)}finally{b=!1}return(p=m).forEach(V=>{V()}),z}function G(z){if(typeof z!="function")throw new Error(Fe(10));c=z,B({type:wr.REPLACE})}function I(){const z=M;return{subscribe(W){if(typeof W!="object"||W===null)throw new Error(Fe(11));function V(){const F=W;F.next&&F.next(E())}return V(),{unsubscribe:z(V)}},[Gb](){return this}}}return B({type:wr.INIT}),{dispatch:B,subscribe:M,getState:E,replaceReducer:G,[Gb]:I}}function Wy(r){Object.keys(r).forEach(u=>{const o=r[u];if(typeof o(void 0,{type:wr.INIT})>"u")throw new Error(Fe(12));if(typeof o(void 0,{type:wr.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Fe(13))})}function Py(r){const u=Object.keys(r),o={};for(let p=0;p<u.length;p++){const m=u[p];typeof r[m]=="function"&&(o[m]=r[m])}const c=Object.keys(o);let d;try{Wy(o)}catch(p){d=p}return function(m={},S){if(d)throw d;let b=!1;const h={};for(let E=0;E<c.length;E++){const M=c[E],B=o[M],G=m[M],I=B(G,S);if(typeof I>"u")throw S&&S.type,new Error(Fe(14));h[M]=I,b=b||I!==G}return b=b||c.length!==Object.keys(m).length,b?h:m}}function Hr(...r){return r.length===0?u=>u:r.length===1?r[0]:r.reduce((u,o)=>(...c)=>u(o(...c)))}function Qy(...r){return u=>(o,c)=>{const d=u(o,c);let p=()=>{throw new Error(Fe(15))};const m={getState:d.getState,dispatch:(b,...h)=>p(b,...h)},S=r.map(b=>b(m));return p=Hr(...S)(d.dispatch),{...d,dispatch:p}}}function Zy(r){return Ms(r)&&"type"in r&&typeof r.type=="string"}var E0=Symbol.for("immer-nothing"),qb=Symbol.for("immer-draftable"),An=Symbol.for("immer-state");function qn(r,...u){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var ti=Object.getPrototypeOf;function sa(r){return!!r&&!!r[An]}function ht(r){var u;return r?A0(r)||Array.isArray(r)||!!r[qb]||!!((u=r.constructor)!=null&&u[qb])||kr(r)||zr(r):!1}var Jy=Object.prototype.constructor.toString();function A0(r){if(!r||typeof r!="object")return!1;const u=ti(r);if(u===null)return!0;const o=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return o===Object?!0:typeof o=="function"&&Function.toString.call(o)===Jy}function Lr(r,u){jr(r)===0?Reflect.ownKeys(r).forEach(o=>{u(o,r[o],r)}):r.forEach((o,c)=>u(c,o,r))}function jr(r){const u=r[An];return u?u.type_:Array.isArray(r)?1:kr(r)?2:zr(r)?3:0}function Es(r,u){return jr(r)===2?r.has(u):Object.prototype.hasOwnProperty.call(r,u)}function R0(r,u,o){const c=jr(r);c===2?r.set(u,o):c===3?r.add(o):r[u]=o}function Fy(r,u){return r===u?r!==0||1/r===1/u:r!==r&&u!==u}function kr(r){return r instanceof Map}function zr(r){return r instanceof Set}function ua(r){return r.copy_||r.base_}function As(r,u){if(kr(r))return new Map(r);if(zr(r))return new Set(r);if(Array.isArray(r))return Array.prototype.slice.call(r);const o=A0(r);if(u===!0||u==="class_only"&&!o){const c=Object.getOwnPropertyDescriptors(r);delete c[An];let d=Reflect.ownKeys(c);for(let p=0;p<d.length;p++){const m=d[p],S=c[m];S.writable===!1&&(S.writable=!0,S.configurable=!0),(S.get||S.set)&&(c[m]={configurable:!0,writable:!0,enumerable:S.enumerable,value:r[m]})}return Object.create(ti(r),c)}else{const c=ti(r);if(c!==null&&o)return{...r};const d=Object.create(c);return Object.assign(d,r)}}function ws(r,u=!1){return Gr(r)||sa(r)||!ht(r)||(jr(r)>1&&(r.set=r.add=r.clear=r.delete=$y),Object.freeze(r),u&&Object.entries(r).forEach(([o,c])=>ws(c,!0))),r}function $y(){qn(2)}function Gr(r){return Object.isFrozen(r)}var em={};function oa(r){const u=em[r];return u||qn(0,r),u}var cl;function T0(){return cl}function nm(r,u){return{drafts_:[],parent_:r,immer_:u,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yb(r,u){u&&(oa("Patches"),r.patches_=[],r.inversePatches_=[],r.patchListener_=u)}function Rs(r){Ts(r),r.drafts_.forEach(tm),r.drafts_=null}function Ts(r){r===cl&&(cl=r.parent_)}function Ib(r){return cl=nm(cl,r)}function tm(r){const u=r[An];u.type_===0||u.type_===1?u.revoke_():u.revoked_=!0}function Vb(r,u){u.unfinalizedDrafts_=u.drafts_.length;const o=u.drafts_[0];return r!==void 0&&r!==o?(o[An].modified_&&(Rs(u),qn(4)),ht(r)&&(r=Ur(u,r),u.parent_||Br(u,r)),u.patches_&&oa("Patches").generateReplacementPatches_(o[An].base_,r,u.patches_,u.inversePatches_)):r=Ur(u,o,[]),Rs(u),u.patches_&&u.patchListener_(u.patches_,u.inversePatches_),r!==E0?r:void 0}function Ur(r,u,o){if(Gr(u))return u;const c=u[An];if(!c)return Lr(u,(d,p)=>Xb(r,c,u,d,p,o)),u;if(c.scope_!==r)return u;if(!c.modified_)return Br(r,c.base_,!0),c.base_;if(!c.finalized_){c.finalized_=!0,c.scope_.unfinalizedDrafts_--;const d=c.copy_;let p=d,m=!1;c.type_===3&&(p=new Set(d),d.clear(),m=!0),Lr(p,(S,b)=>Xb(r,c,d,S,b,o,m)),Br(r,d,!1),o&&r.patches_&&oa("Patches").generatePatches_(c,o,r.patches_,r.inversePatches_)}return c.copy_}function Xb(r,u,o,c,d,p,m){if(sa(d)){const S=p&&u&&u.type_!==3&&!Es(u.assigned_,c)?p.concat(c):void 0,b=Ur(r,d,S);if(R0(o,c,b),sa(b))r.canAutoFreeze_=!1;else return}else m&&o.add(d);if(ht(d)&&!Gr(d)){if(!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1)return;Ur(r,d),(!u||!u.scope_.parent_)&&typeof c!="symbol"&&Object.prototype.propertyIsEnumerable.call(o,c)&&Br(r,d)}}function Br(r,u,o=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&ws(u,o)}function am(r,u){const o=Array.isArray(r),c={type_:o?1:0,scope_:u?u.scope_:T0(),modified_:!1,finalized_:!1,assigned_:{},parent_:u,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=c,p=Hs;o&&(d=[c],p=sl);const{revoke:m,proxy:S}=Proxy.revocable(d,p);return c.draft_=S,c.revoke_=m,S}var Hs={get(r,u){if(u===An)return r;const o=ua(r);if(!Es(o,u))return im(r,o,u);const c=o[u];return r.finalized_||!ht(c)?c:c===hs(r.base_,u)?(ps(r),r.copy_[u]=Os(c,r)):c},has(r,u){return u in ua(r)},ownKeys(r){return Reflect.ownKeys(ua(r))},set(r,u,o){const c=_0(ua(r),u);if(c!=null&&c.set)return c.set.call(r.draft_,o),!0;if(!r.modified_){const d=hs(ua(r),u),p=d==null?void 0:d[An];if(p&&p.base_===o)return r.copy_[u]=o,r.assigned_[u]=!1,!0;if(Fy(o,d)&&(o!==void 0||Es(r.base_,u)))return!0;ps(r),_s(r)}return r.copy_[u]===o&&(o!==void 0||u in r.copy_)||Number.isNaN(o)&&Number.isNaN(r.copy_[u])||(r.copy_[u]=o,r.assigned_[u]=!0),!0},deleteProperty(r,u){return hs(r.base_,u)!==void 0||u in r.base_?(r.assigned_[u]=!1,ps(r),_s(r)):delete r.assigned_[u],r.copy_&&delete r.copy_[u],!0},getOwnPropertyDescriptor(r,u){const o=ua(r),c=Reflect.getOwnPropertyDescriptor(o,u);return c&&{writable:!0,configurable:r.type_!==1||u!=="length",enumerable:c.enumerable,value:o[u]}},defineProperty(){qn(11)},getPrototypeOf(r){return ti(r.base_)},setPrototypeOf(){qn(12)}},sl={};Lr(Hs,(r,u)=>{sl[r]=function(){return arguments[0]=arguments[0][0],u.apply(this,arguments)}});sl.deleteProperty=function(r,u){return sl.set.call(this,r,u,void 0)};sl.set=function(r,u,o){return Hs.set.call(this,r[0],u,o,r[0])};function hs(r,u){const o=r[An];return(o?ua(o):r)[u]}function im(r,u,o){var d;const c=_0(u,o);return c?"value"in c?c.value:(d=c.get)==null?void 0:d.call(r.draft_):void 0}function _0(r,u){if(!(u in r))return;let o=ti(r);for(;o;){const c=Object.getOwnPropertyDescriptor(o,u);if(c)return c;o=ti(o)}}function _s(r){r.modified_||(r.modified_=!0,r.parent_&&_s(r.parent_))}function ps(r){r.copy_||(r.copy_=As(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var lm=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(u,o,c)=>{if(typeof u=="function"&&typeof o!="function"){const p=o;o=u;const m=this;return function(b=p,...h){return m.produce(b,E=>o.call(this,E,...h))}}typeof o!="function"&&qn(6),c!==void 0&&typeof c!="function"&&qn(7);let d;if(ht(u)){const p=Ib(this),m=Os(u,void 0);let S=!0;try{d=o(m),S=!1}finally{S?Rs(p):Ts(p)}return Yb(p,c),Vb(d,p)}else if(!u||typeof u!="object"){if(d=o(u),d===void 0&&(d=u),d===E0&&(d=void 0),this.autoFreeze_&&ws(d,!0),c){const p=[],m=[];oa("Patches").generateReplacementPatches_(u,d,p,m),c(p,m)}return d}else qn(1,u)},this.produceWithPatches=(u,o)=>{if(typeof u=="function")return(m,...S)=>this.produceWithPatches(m,b=>u(b,...S));let c,d;return[this.produce(u,o,(m,S)=>{c=m,d=S}),c,d]},typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze),typeof(r==null?void 0:r.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(r.useStrictShallowCopy)}createDraft(r){ht(r)||qn(8),sa(r)&&(r=rm(r));const u=Ib(this),o=Os(r,void 0);return o[An].isManual_=!0,Ts(u),o}finishDraft(r,u){const o=r&&r[An];(!o||!o.isManual_)&&qn(9);const{scope_:c}=o;return Yb(c,u),Vb(void 0,c)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}applyPatches(r,u){let o;for(o=u.length-1;o>=0;o--){const d=u[o];if(d.path.length===0&&d.op==="replace"){r=d.value;break}}o>-1&&(u=u.slice(o+1));const c=oa("Patches").applyPatches_;return sa(r)?c(r,u):this.produce(r,d=>c(d,u))}};function Os(r,u){const o=kr(r)?oa("MapSet").proxyMap_(r,u):zr(r)?oa("MapSet").proxySet_(r,u):am(r,u);return(u?u.scope_:T0()).drafts_.push(o),o}function rm(r){return sa(r)||qn(10,r),O0(r)}function O0(r){if(!ht(r)||Gr(r))return r;const u=r[An];let o;if(u){if(!u.modified_)return u.base_;u.finalized_=!0,o=As(r,u.scope_.immer_.useStrictShallowCopy_)}else o=As(r,!0);return Lr(o,(c,d)=>{R0(o,c,O0(d))}),u&&(u.finalized_=!1),o}var Rn=new lm,x0=Rn.produce;Rn.produceWithPatches.bind(Rn);Rn.setAutoFreeze.bind(Rn);Rn.setUseStrictShallowCopy.bind(Rn);Rn.applyPatches.bind(Rn);Rn.createDraft.bind(Rn);Rn.finishDraft.bind(Rn);function N0(r){return({dispatch:o,getState:c})=>d=>p=>typeof p=="function"?p(o,c,r):d(p)}var um=N0(),cm=N0,sm=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Hr:Hr.apply(null,arguments)};function Kb(r,u){function o(...c){if(u){let d=u(...c);if(!d)throw new Error(bt(0));return{type:r,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:r,payload:c[0]}}return o.toString=()=>`${r}`,o.type=r,o.match=c=>Zy(c)&&c.type===r,o}var D0=class ul extends Array{constructor(...u){super(...u),Object.setPrototypeOf(this,ul.prototype)}static get[Symbol.species](){return ul}concat(...u){return super.concat.apply(this,u)}prepend(...u){return u.length===1&&Array.isArray(u[0])?new ul(...u[0].concat(this)):new ul(...u.concat(this))}};function Wb(r){return ht(r)?x0(r,()=>{}):r}function xr(r,u,o){return r.has(u)?r.get(u):r.set(u,o(u)).get(u)}function om(r){return typeof r=="boolean"}var fm=()=>function(u){const{thunk:o=!0,immutableCheck:c=!0,serializableCheck:d=!0,actionCreatorCheck:p=!0}=u??{};let m=new D0;return o&&(om(o)?m.push(um):m.push(cm(o.extraArgument))),m},dm="RTK_autoBatch",Pb=r=>u=>{setTimeout(u,r)},bm=(r={type:"raf"})=>u=>(...o)=>{const c=u(...o);let d=!0,p=!1,m=!1;const S=new Set,b=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Pb(10):r.type==="callback"?r.queueNotification:Pb(r.timeout),h=()=>{m=!1,p&&(p=!1,S.forEach(E=>E()))};return Object.assign({},c,{subscribe(E){const M=()=>d&&E(),B=c.subscribe(M);return S.add(E),()=>{B(),S.delete(E)}},dispatch(E){var M;try{return d=!((M=E==null?void 0:E.meta)!=null&&M[dm]),p=!d,p&&(m||(m=!0,b(h))),c.dispatch(E)}finally{d=!0}}})},hm=r=>function(o){const{autoBatch:c=!0}=o??{};let d=new D0(r);return c&&d.push(bm(typeof c=="object"?c:void 0)),d};function pm(r){const u=fm(),{reducer:o=void 0,middleware:c,devTools:d=!0,preloadedState:p=void 0,enhancers:m=void 0}=r||{};let S;if(typeof o=="function")S=o;else if(Ms(o))S=Py(o);else throw new Error(bt(1));let b;typeof c=="function"?b=c(u):b=u();let h=Hr;d&&(h=sm({trace:!1,...typeof d=="object"&&d}));const E=Qy(...b),M=hm(E);let B=typeof m=="function"?m(M):M();const G=h(...B);return S0(S,p,G)}function C0(r){const u={},o=[];let c;const d={addCase(p,m){const S=typeof p=="string"?p:p.type;if(!S)throw new Error(bt(28));if(S in u)throw new Error(bt(29));return u[S]=m,d},addMatcher(p,m){return o.push({matcher:p,reducer:m}),d},addDefaultCase(p){return c=p,d}};return r(d),[u,o,c]}function ym(r){return typeof r=="function"}function mm(r,u){let[o,c,d]=C0(u),p;if(ym(r))p=()=>Wb(r());else{const S=Wb(r);p=()=>S}function m(S=p(),b){let h=[o[b.type],...c.filter(({matcher:E})=>E(b)).map(({reducer:E})=>E)];return h.filter(E=>!!E).length===0&&(h=[d]),h.reduce((E,M)=>{if(M)if(sa(E)){const G=M(E,b);return G===void 0?E:G}else{if(ht(E))return x0(E,B=>M(B,b));{const B=M(E,b);if(B===void 0){if(E===null)return E;throw Error("A case reducer on a non-draftable value must not return undefined")}return B}}return E},S)}return m.getInitialState=p,m}var vm=Symbol.for("rtk-slice-createasyncthunk");function gm(r,u){return`${r}/${u}`}function Sm({creators:r}={}){var o;const u=(o=r==null?void 0:r.asyncThunk)==null?void 0:o[vm];return function(d){const{name:p,reducerPath:m=p}=d;if(!p)throw new Error(bt(11));const S=(typeof d.reducers=="function"?d.reducers(Rm()):d.reducers)||{},b=Object.keys(S),h={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},E={addCase(F,y){const O=typeof F=="string"?F:F.type;if(!O)throw new Error(bt(12));if(O in h.sliceCaseReducersByType)throw new Error(bt(13));return h.sliceCaseReducersByType[O]=y,E},addMatcher(F,y){return h.sliceMatchers.push({matcher:F,reducer:y}),E},exposeAction(F,y){return h.actionCreators[F]=y,E},exposeCaseReducer(F,y){return h.sliceCaseReducersByName[F]=y,E}};b.forEach(F=>{const y=S[F],O={reducerName:F,type:gm(p,F),createNotation:typeof d.reducers=="function"};_m(y)?xm(O,y,E,u):Tm(O,y,E)});function M(){const[F={},y=[],O=void 0]=typeof d.extraReducers=="function"?C0(d.extraReducers):[d.extraReducers],H={...F,...h.sliceCaseReducersByType};return mm(d.initialState,K=>{for(let Z in H)K.addCase(Z,H[Z]);for(let Z of h.sliceMatchers)K.addMatcher(Z.matcher,Z.reducer);for(let Z of y)K.addMatcher(Z.matcher,Z.reducer);O&&K.addDefaultCase(O)})}const B=F=>F,G=new Map,I=new WeakMap;let q;function z(F,y){return q||(q=M()),q(F,y)}function W(){return q||(q=M()),q.getInitialState()}function V(F,y=!1){function O(K){let Z=K[F];return typeof Z>"u"&&y&&(Z=xr(I,O,W)),Z}function H(K=B){const Z=xr(G,y,()=>new WeakMap);return xr(Z,K,()=>{const ge={};for(const[Ne,De]of Object.entries(d.selectors??{}))ge[Ne]=Em(De,K,()=>xr(I,K,W),y);return ge})}return{reducerPath:F,getSelectors:H,get selectors(){return H(O)},selectSlice:O}}const ie={name:p,reducer:z,actions:h.actionCreators,caseReducers:h.sliceCaseReducersByName,getInitialState:W,...V(m),injectInto(F,{reducerPath:y,...O}={}){const H=y??m;return F.inject({reducerPath:H,reducer:z},O),{...ie,...V(H,!0)}}};return ie}}function Em(r,u,o,c){function d(p,...m){let S=u(p);return typeof S>"u"&&c&&(S=o()),r(S,...m)}return d.unwrapped=r,d}var Am=Sm();function Rm(){function r(u,o){return{_reducerDefinitionType:"asyncThunk",payloadCreator:u,...o}}return r.withTypes=()=>r,{reducer(u){return Object.assign({[u.name](...o){return u(...o)}}[u.name],{_reducerDefinitionType:"reducer"})},preparedReducer(u,o){return{_reducerDefinitionType:"reducerWithPrepare",prepare:u,reducer:o}},asyncThunk:r}}function Tm({type:r,reducerName:u,createNotation:o},c,d){let p,m;if("reducer"in c){if(o&&!Om(c))throw new Error(bt(17));p=c.reducer,m=c.prepare}else p=c;d.addCase(r,p).exposeCaseReducer(u,p).exposeAction(u,m?Kb(r,m):Kb(r))}function _m(r){return r._reducerDefinitionType==="asyncThunk"}function Om(r){return r._reducerDefinitionType==="reducerWithPrepare"}function xm({type:r,reducerName:u},o,c,d){if(!d)throw new Error(bt(18));const{payloadCreator:p,fulfilled:m,pending:S,rejected:b,settled:h,options:E}=o,M=d(r,p,E);c.exposeAction(u,M),m&&c.addCase(M.fulfilled,m),S&&c.addCase(M.pending,S),b&&c.addCase(M.rejected,b),h&&c.addMatcher(M.settled,h),c.exposeCaseReducer(u,{fulfilled:m||Nr,pending:S||Nr,rejected:b||Nr,settled:h||Nr})}function Nr(){}function bt(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const Nm={hero:"Ashe",cash:11e3,equipped:Array(2).fill(""),toBuy:6,avoid:[],avoidEnabled:!1,weights:[{type:"",weight:1}],error:"",minValueEnabled:!1,minAttrGroups:[]},M0=Am({name:"input",initialState:Nm,reducers:{setHero(r,u){r.hero=u.payload},setCash(r,u){r.cash=u.payload},setEquipped(r,u){r.equipped[u.payload.index]=u.payload.id},addEquippedSlot(r){r.equipped.length<6&&r.equipped.push("")},removeEquippedSlot(r,u){r.equipped.length>2&&r.equipped.splice(u.payload,1)},setToBuy(r,u){r.toBuy=u.payload},addAvoid(r,u){r.avoid.includes(u.payload)||r.avoid.push(u.payload)},removeAvoid(r,u){r.avoid=r.avoid.filter(o=>o!==u.payload)},toggleAvoidEnabled(r){r.avoidEnabled=!r.avoidEnabled},setWeightType(r,u){r.weights[u.payload.index].type=u.payload.type},setWeightValue(r,u){r.weights[u.payload.index].weight=u.payload.value},addWeightRow(r,u){r.weights.push({type:u.payload,weight:1})},removeWeightRow(r,u){r.weights.splice(u.payload,1)},setError(r,u){r.error=u.payload},toggleMinValueEnabled(r){r.minValueEnabled=!r.minValueEnabled,r.minValueEnabled&&r.minAttrGroups.length===0&&r.minAttrGroups.push({attrs:["Health","Armor","Shield"],value:50})},addMinGroup(r){r.minAttrGroups.push({attrs:[],value:0})},removeMinGroup(r,u){r.minAttrGroups.splice(u.payload,1)},setMinGroupValue(r,u){r.minAttrGroups[u.payload.index].value=u.payload.value},addAttrToGroup(r,u){const o=r.minAttrGroups[u.payload.index];o.attrs.includes(u.payload.attr)||o.attrs.push(u.payload.attr)},removeAttrFromGroup(r,u){const o=r.minAttrGroups[u.payload.index];o.attrs=o.attrs.filter(c=>c!==u.payload.attr)}}}),{setHero:Dm,setCash:Cm,setEquipped:Qb,setToBuy:w0,addAvoid:H0,removeAvoid:Mm,toggleAvoidEnabled:L0,setWeightType:U0,setWeightValue:Zb,addWeightRow:wm,removeWeightRow:Hm,setError:ia,toggleMinValueEnabled:Lm,addMinGroup:Um,removeMinGroup:Bm,setMinGroupValue:jm,addAttrToGroup:km,removeAttrFromGroup:zm,addEquippedSlot:Gm,removeEquippedSlot:qm}=M0.actions,Ym=M0.reducer;function B0(r,u){const o={common:0,rare:1,epic:2},c=o[r.rarity]-o[u.rarity];return c!==0?c:r.name.localeCompare(u.name)}function j0(r,u){const o={epic:3,rare:2,common:1},c={weapon:1,ability:2,survival:3},d=o[r.rarity]||0,p=o[u.rarity]||0;if(d!==p)return p-d;const m=c[r.tab]||99,S=c[u.tab]||99;return m!==S?m-S:(r.cost||0)-(u.cost||0)}function Im(r){const u=r.match(/[-+]?\d+(?:\.\d+)?/);return u?parseFloat(u[0]):0}function xs(r){const u=new Map;return r.forEach(o=>{o.attributes.forEach(c=>{const d=Im(c.value);u.set(c.type,(u.get(c.type)??0)+d)})}),u}function Jb(r,u){let o=0;return u.forEach(c=>{o+=(r.get(c.type)??0)*c.weight}),o}function ol(r){switch(r){case"common":return"#17a631";case"rare":return"#217dbe";case"epic":return"#8727d6";default:return"black"}}function Vm(r,u){const o=xs(r);return u.every(c=>c.attrs.reduce((p,m)=>p+(o.get(m)??0),0)>=c.value)}function k0(r,u,o){const c=new Set(r.map(d=>d.type));return u&&o.forEach(d=>{d.attrs.forEach(p=>c.add(p))}),c.delete(""),c}function Xm(r,u,o,c){const d=k0(u,o,c),p=[];return u.forEach(m=>{const S=r.get(m.type)??0;p.push({type:m.type,sum:S,contrib:S*m.weight}),d.delete(m.type)}),d.forEach(m=>{const S=r.get(m)??0;p.push({type:m,sum:S,contrib:0})}),p}function z0({label:r,onRemove:u}){return v.jsxs("span",{className:"inline-flex items-center justify-center px-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 text-xs mr-2 align-middle",children:[r,u&&v.jsx("button",{type:"button",onClick:u,"aria-label":"Remove",className:"ml-2 pl-2 pr-2 pt-1 pb-1 text-red-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 text-xs align-middle flex items-center justify-center",children:"×"})]})}function fl({label:r,options:u,value:o,onChange:c,placeholder:d="Select an option",className:p}){const[m,S]=ne.useState(!1),[b,h]=ne.useState(!1),[E,M]=ne.useState(""),B=ne.useRef(null),G=ne.useRef(null),I=ne.useRef(null),q=u.find(y=>y.value===o),z=(q==null?void 0:q.label)||d,W=q==null?void 0:q.color,V=u.filter(y=>y.label.toLowerCase().includes(E.toLowerCase())),ie=y=>{c(y),S(!1),M("")};return ne.useEffect(()=>{const y=O=>{B.current&&!B.current.contains(O.target)&&S(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]),ne.useEffect(()=>{m&&I.current&&I.current.focus()},[m]),ne.useEffect(()=>{if(!m||!G.current)return;const y=G.current.getBoundingClientRect(),O=window.innerHeight||document.documentElement.clientHeight,H=O*.4,K=O-y.bottom,Z=y.top;K<H&&Z>K?h(!0):h(!1)},[m]),v.jsxs("div",{className:`relative block ${p||""}`,ref:B,children:[v.jsxs("span",{className:"flex w-full divide-x divide-gray-300 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm",children:[v.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative text-left",onClick:()=>{const y=!m;S(y),y&&M("")},ref:G,children:v.jsx("span",{style:{color:W||"inherit"},className:"truncate",children:z})}),v.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative","aria-label":"Menu",onClick:()=>{const y=!m;S(y),y&&M("")},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),m&&v.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg max-h-[40vh] overflow-y-auto ${b?"bottom-full mb-2":"top-full mt-2"}`,children:u.length>0?v.jsxs("div",{children:[v.jsx("p",{className:"sticky top-0 bg-white dark:bg-gray-900 px-3 py-2 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 z-20",children:r}),v.jsx("input",{type:"text",ref:I,className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 text-base placeholder-gray-400 dark:placeholder-gray-500",placeholder:"Search...",value:E,onChange:y=>M(y.target.value),onKeyDown:y=>{y.key==="Enter"&&V.length===1&&(y.preventDefault(),ie(V[0].value))}}),V.map(y=>v.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",role:"menuitem",onClick:O=>{O.preventDefault(),ie(y.value)},children:v.jsx("span",{style:{color:y.color||"inherit"},children:y.label})},y.value)),V.length===0&&v.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No matching options"})]}):v.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No options available"})})]})}const qr=({onClick:r,text:u})=>v.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",onClick:r,children:u});function Km({items:r}){const u=dn(m=>m.input.present.avoid),o=dn(m=>m.input.present.avoidEnabled),c=Pn(),[d,p]=ne.useState("");return v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Avoid Items"}),v.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[v.jsx("input",{id:"avoid-toggle",type:"checkbox",checked:o,onChange:()=>c(L0()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),v.jsx("label",{htmlFor:"avoid-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Avoid Items"})]}),o&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch gap-2",children:[v.jsx(fl,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...r.sort(B0).map(m=>({value:m.id||m.name,label:`${m.name} (${m.cost})`,color:ol(m.rarity)}))],value:d,onChange:p,className:"flex-grow w-full"}),v.jsx(qr,{text:"Add",onClick:()=>{d&&(c(H0(d)),p(""))}})]}),u.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:u.map(m=>{const S=r.find(b=>(b.id||b.name)===m);return v.jsx(z0,{label:S?S.name:m,onRemove:()=>c(Mm(m))},m)})})]})]})}function Ls({value:r,onChange:u,min:o,max:c,step:d,placeholder:p,className:m,label:S}){const[b,h]=ne.useState(r.toString());ne.useEffect(()=>{h(r.toString())},[r]);const E=M=>{const B=M.target.value;if(h(B),B===""||B==="-")return;const G=Number(B);isNaN(G)||u(G)};return v.jsx("div",{className:`relative ${m||""}`,children:v.jsx("input",{type:"number",className:"block w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 placeholder-gray-400 dark:placeholder-gray-500 no-spinner",value:b,onChange:E,inputMode:"decimal",pattern:".*",min:o,max:c,step:d,placeholder:p,"aria-label":S||p||"Number input"})})}function Wm(){const r=dn(o=>o.input.present.cash),u=Pn();return v.jsxs("div",{children:[v.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium dark:text-gray-300",children:"Total Cash"}),v.jsx(Ls,{value:r,onChange:o=>u(Cm(o)),min:0,label:"Total Cash",className:"mt-1"})]})}function fa(r){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[r]||r}function Pm(r,u){const o=["WP","AP","AS","Health","Armor","Shields"],c=o.indexOf(r),d=o.indexOf(u);return c!==-1&&d!==-1?c-d:c!==-1?-1:d!==-1?1:r.localeCompare(u)}function Qm({items:r}){const u=dn(m=>m.input.present.equipped),o=Pn(),[c,d]=ne.useState(!1),p=m=>{d(m),m||u.forEach((S,b)=>o(Qb({index:b,id:""})))};return v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Equipped Items"}),v.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[v.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:c,onChange:m=>p(m.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),v.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm dark:text-gray-300 select-none",children:"Use Equipped Items"})]}),c&&v.jsxs("div",{className:"space-y-4 mt-1",children:[u.map((m,S)=>v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(fl,{label:`Equipped Slot ${S+1}`,placeholder:"None",options:[{value:"",label:"None"},...r.sort(B0).map(b=>({value:b.id||b.name,label:`${b.name} (${b.cost}) ${b.attributes.filter(h=>h.type!=="description").map(h=>`${fa(h.type)}-${h.value}`).join(", ")}`,color:ol(b.rarity)}))],value:m,onChange:b=>o(Qb({index:S,id:b})),className:"flex-grow"}),u.length>2&&v.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>o(qm(S)),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},S)),u.length<6&&v.jsx(qr,{text:"Add Slot",onClick:()=>o(Gm())})]})]})}function Zm({heroes:r}){const u=dn(c=>c.input.present.hero),o=Pn();return v.jsxs("div",{children:[v.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium mb-1 dark:text-gray-300",children:"Hero"}),v.jsx(fl,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...r.map(c=>({value:c,label:c}))],value:u,onChange:c=>o(Dm(c))})]})}function Jm({attrTypes:r}){const u=Pn(),o=dn(p=>p.input.present.minValueEnabled),c=dn(p=>p.input.present.minAttrGroups),d=r.map(p=>({value:p,label:fa(p)}));return v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Minimum Attribute Totals"}),v.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[v.jsx("input",{id:"min-value-toggle",type:"checkbox",checked:o,onChange:()=>u(Lm()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),v.jsx("label",{htmlFor:"min-value-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Minimum Values"})]}),o&&v.jsxs("div",{className:"space-y-4",children:[c.map((p,m)=>v.jsxs("div",{className:"rounded border p-3 space-y-2",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[v.jsx("span",{className:"text-sm font-medium dark:text-gray-300",children:"Target Value:"}),v.jsx(Ls,{value:p.value,onChange:S=>u(jm({index:m,value:S})),min:0,label:"Minimum Value",className:"w-full sm:w-24"}),c.length>1&&v.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>u(Bm(m)),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),v.jsx(fl,{label:"Add Attribute",placeholder:"Add attribute",options:d.filter(S=>!p.attrs.includes(S.value)),value:"",onChange:S=>u(km({index:m,attr:S})),className:"w-full"}),p.attrs.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2",children:p.attrs.map(S=>v.jsx(z0,{label:fa(S),onRemove:()=>u(zm({index:m,attr:S}))},S))})]},m)),v.jsx(qr,{text:"Add Group",onClick:()=>u(Um())})]})]})}function Fm({onSubmit:r,validate:u}){const o=Pn(),c=dn(p=>p.input.present.toBuy),d=dn(p=>p.input.present.error);return v.jsxs("div",{className:"!mt-8 border-t pt-6",children:[v.jsx("button",{type:"button",onClick:()=>{u()&&r()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 dark:hover:bg-teal-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",disabled:!u(),children:"Calculate Optimal Build"}),v.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(p=>v.jsx("button",{type:"button",onClick:()=>o(w0(p)),className:`rounded-lg py-2 text-sm font-medium ${c===p?"bg-indigo-600 dark:bg-indigo-700 text-white":"bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:p},p))}),d&&v.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 dark:border-red-700 bg-red-50 dark:bg-gray-900 p-4 text-sm font-medium text-red-800 dark:text-red-300",children:d})]})}function $m({value:r,onChange:u,min:o=0,max:c=100,step:d=1,className:p,label:m,showValue:S=!0,disabled:b=!1}){const[h,E]=ne.useState(r);ne.useEffect(()=>{E(r)},[r]);const M=ne.useCallback(G=>{const I=Number(G.target.value);E(I),u(I)},[u]),B=(h-o)/(c-o)*100;return v.jsxs("div",{className:`relative ${p||""}`,children:[m&&v.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:[m,S&&v.jsx("span",{className:"ml-2 text-indigo-600 dark:text-indigo-400 font-semibold",children:h})]}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden",children:v.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-lg transition-all duration-150 ease-out",style:{width:`${B}%`}})}),v.jsx("input",{type:"range",min:o,max:c,step:d,value:h,onChange:M,disabled:b,className:`absolute top-1/2 left-0 w-full h-6 -translate-y-1/2 z-20 appearance-none bg-transparent focus:outline-none ${b?"cursor-not-allowed":"cursor-pointer"}`,"aria-label":m||`Slider from ${o} to ${c}`,style:{pointerEvents:b?"none":"auto"}})]}),v.jsxs("div",{className:"flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400",children:[v.jsx("span",{children:o}),v.jsx("span",{children:c})]})]})}function ev({attrTypes:r}){const u=dn(d=>d.input.present.weights),o=Pn(),c=r.map(d=>({value:d,label:fa(d)}));return v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Attribute Weights"}),v.jsx("div",{className:"space-y-4 mt-1 mb-4",children:u.map((d,p)=>{const m=u.map((b,h)=>h!==p?b.type:null).filter(Boolean),S=c.filter(b=>!m.includes(b.value)||b.value===d.type);return v.jsxs("div",{className:"grid",children:[v.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[v.jsx("div",{className:"w-full",children:v.jsx(fl,{label:"Attribute Type",placeholder:"Select type",options:S,value:d.type,onChange:b=>o(U0({index:p,type:b})),className:"flex-grow w-full"})}),v.jsx("div",{className:"flex flex-col gap-2 w-full sm:w-auto",children:v.jsxs("div",{className:"flex flex-row items-center gap-2",children:[v.jsx(Ls,{value:d.weight,onChange:b=>o(Zb({index:p,value:b})),min:0,max:100,step:.01,label:`Weight for ${fa(d.type)}`,className:"w-full sm:w-24"}),v.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 dark:text-gray-500 hover:bg-red-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-400",onClick:()=>o(Hm(p)),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})})]}),v.jsx("div",{className:"w-full",children:v.jsx($m,{value:d.weight,onChange:b=>o(Zb({index:p,value:b})),min:0,max:1,step:.05,showValue:!1,className:"w-full mt-2"})})]},p)})}),v.jsx(qr,{onClick:()=>{const d=u.map(m=>m.type),p=r.find(m=>!d.includes(m))||r[0];o(wm(p))},text:"Add Row"})]})}function nv({heroes:r,attrTypes:u,filteredItems:o,onSubmit:c,validate:d}){return v.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8  dark:border-gray-700",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Configuration"}),v.jsxs("form",{onSubmit:p=>{p.preventDefault(),d()&&c()},className:"grid",children:[v.jsxs("div",{className:"grid gap-4 grid-cols-1 sm:grid-cols-2",children:[v.jsx(Zm,{heroes:r}),v.jsx(Wm,{})]}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(Qm,{items:o}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(Km,{items:o}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(Jm,{attrTypes:u}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(ev,{attrTypes:u}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(Fm,{onSubmit:c,validate:d})]})]})}function tv({alternatives:r}){return r.length===0?null:v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Alternative Builds"}),v.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 max-h-48 overflow-y-auto",children:r.map((u,o)=>v.jsxs("li",{className:"text-sm text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",children:[v.jsxs("strong",{children:["Cost: ",u.cost]})," -"," ",u.items.map((c,d)=>v.jsxs("span",{style:{color:ol(c.rarity)},children:[c.name,d<u.items.length-1?", ":""]},c.id||c.name))]},o))})]})}function av({results:r}){return r.breakdown?v.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[v.jsx("strong",{children:"Breakdown:"}),v.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Type"}),v.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Sum"}),v.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Contribution"})]})}),v.jsx("tbody",{children:r.breakdown.map(u=>v.jsxs("tr",{className:"dark:bg-gray-900",children:[v.jsx("td",{className:"px-2 py-1",children:fa(u.type)}),v.jsx("td",{className:"px-2 py-1",children:u.sum}),v.jsx("td",{className:"px-2 py-1",children:u.contrib.toFixed(2)})]},u.type))})]})]}):null}var tl={},$a={},Dr={},la={},ra={},ys={},Fb;function G0(){return Fb||(Fb=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Doctype=r.CDATA=r.Tag=r.Style=r.Script=r.Comment=r.Directive=r.Text=r.Root=r.isTag=r.ElementType=void 0;var u;(function(c){c.Root="root",c.Text="text",c.Directive="directive",c.Comment="comment",c.Script="script",c.Style="style",c.Tag="tag",c.CDATA="cdata",c.Doctype="doctype"})(u=r.ElementType||(r.ElementType={}));function o(c){return c.type===u.Tag||c.type===u.Script||c.type===u.Style}r.isTag=o,r.Root=u.Root,r.Text=u.Text,r.Directive=u.Directive,r.Comment=u.Comment,r.Script=u.Script,r.Style=u.Style,r.Tag=u.Tag,r.CDATA=u.CDATA,r.Doctype=u.Doctype}(ys)),ys}var se={},$b;function e0(){if($b)return se;$b=1;var r=se&&se.__extends||function(){var y=function(O,H){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(K,Z){K.__proto__=Z}||function(K,Z){for(var ge in Z)Object.prototype.hasOwnProperty.call(Z,ge)&&(K[ge]=Z[ge])},y(O,H)};return function(O,H){if(typeof H!="function"&&H!==null)throw new TypeError("Class extends value "+String(H)+" is not a constructor or null");y(O,H);function K(){this.constructor=O}O.prototype=H===null?Object.create(H):(K.prototype=H.prototype,new K)}}(),u=se&&se.__assign||function(){return u=Object.assign||function(y){for(var O,H=1,K=arguments.length;H<K;H++){O=arguments[H];for(var Z in O)Object.prototype.hasOwnProperty.call(O,Z)&&(y[Z]=O[Z])}return y},u.apply(this,arguments)};Object.defineProperty(se,"__esModule",{value:!0}),se.cloneNode=se.hasChildren=se.isDocument=se.isDirective=se.isComment=se.isText=se.isCDATA=se.isTag=se.Element=se.Document=se.CDATA=se.NodeWithChildren=se.ProcessingInstruction=se.Comment=se.Text=se.DataNode=se.Node=void 0;var o=G0(),c=function(){function y(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(y.prototype,"parentNode",{get:function(){return this.parent},set:function(O){this.parent=O},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"previousSibling",{get:function(){return this.prev},set:function(O){this.prev=O},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"nextSibling",{get:function(){return this.next},set:function(O){this.next=O},enumerable:!1,configurable:!0}),y.prototype.cloneNode=function(O){return O===void 0&&(O=!1),ie(this,O)},y}();se.Node=c;var d=function(y){r(O,y);function O(H){var K=y.call(this)||this;return K.data=H,K}return Object.defineProperty(O.prototype,"nodeValue",{get:function(){return this.data},set:function(H){this.data=H},enumerable:!1,configurable:!0}),O}(c);se.DataNode=d;var p=function(y){r(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.Text,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),O}(d);se.Text=p;var m=function(y){r(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.Comment,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),O}(d);se.Comment=m;var S=function(y){r(O,y);function O(H,K){var Z=y.call(this,K)||this;return Z.name=H,Z.type=o.ElementType.Directive,Z}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),O}(d);se.ProcessingInstruction=S;var b=function(y){r(O,y);function O(H){var K=y.call(this)||this;return K.children=H,K}return Object.defineProperty(O.prototype,"firstChild",{get:function(){var H;return(H=this.children[0])!==null&&H!==void 0?H:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"childNodes",{get:function(){return this.children},set:function(H){this.children=H},enumerable:!1,configurable:!0}),O}(c);se.NodeWithChildren=b;var h=function(y){r(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.CDATA,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),O}(b);se.CDATA=h;var E=function(y){r(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.Root,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),O}(b);se.Document=E;var M=function(y){r(O,y);function O(H,K,Z,ge){Z===void 0&&(Z=[]),ge===void 0&&(ge=H==="script"?o.ElementType.Script:H==="style"?o.ElementType.Style:o.ElementType.Tag);var Ne=y.call(this,Z)||this;return Ne.name=H,Ne.attribs=K,Ne.type=ge,Ne}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"tagName",{get:function(){return this.name},set:function(H){this.name=H},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"attributes",{get:function(){var H=this;return Object.keys(this.attribs).map(function(K){var Z,ge;return{name:K,value:H.attribs[K],namespace:(Z=H["x-attribsNamespace"])===null||Z===void 0?void 0:Z[K],prefix:(ge=H["x-attribsPrefix"])===null||ge===void 0?void 0:ge[K]}})},enumerable:!1,configurable:!0}),O}(b);se.Element=M;function B(y){return(0,o.isTag)(y)}se.isTag=B;function G(y){return y.type===o.ElementType.CDATA}se.isCDATA=G;function I(y){return y.type===o.ElementType.Text}se.isText=I;function q(y){return y.type===o.ElementType.Comment}se.isComment=q;function z(y){return y.type===o.ElementType.Directive}se.isDirective=z;function W(y){return y.type===o.ElementType.Root}se.isDocument=W;function V(y){return Object.prototype.hasOwnProperty.call(y,"children")}se.hasChildren=V;function ie(y,O){O===void 0&&(O=!1);var H;if(I(y))H=new p(y.data);else if(q(y))H=new m(y.data);else if(B(y)){var K=O?F(y.children):[],Z=new M(y.name,u({},y.attribs),K);K.forEach(function(fe){return fe.parent=Z}),y.namespace!=null&&(Z.namespace=y.namespace),y["x-attribsNamespace"]&&(Z["x-attribsNamespace"]=u({},y["x-attribsNamespace"])),y["x-attribsPrefix"]&&(Z["x-attribsPrefix"]=u({},y["x-attribsPrefix"])),H=Z}else if(G(y)){var K=O?F(y.children):[],ge=new h(K);K.forEach(function(te){return te.parent=ge}),H=ge}else if(W(y)){var K=O?F(y.children):[],Ne=new E(K);K.forEach(function(te){return te.parent=Ne}),y["x-mode"]&&(Ne["x-mode"]=y["x-mode"]),H=Ne}else if(z(y)){var De=new S(y.name,y.data);y["x-name"]!=null&&(De["x-name"]=y["x-name"],De["x-publicId"]=y["x-publicId"],De["x-systemId"]=y["x-systemId"]),H=De}else throw new Error("Not implemented yet: ".concat(y.type));return H.startIndex=y.startIndex,H.endIndex=y.endIndex,y.sourceCodeLocation!=null&&(H.sourceCodeLocation=y.sourceCodeLocation),H}se.cloneNode=ie;function F(y){for(var O=y.map(function(K){return ie(K,!0)}),H=1;H<O.length;H++)O[H].prev=O[H-1],O[H-1].next=O[H];return O}return se}var n0;function q0(){return n0||(n0=1,function(r){var u=ra&&ra.__createBinding||(Object.create?function(S,b,h,E){E===void 0&&(E=h);var M=Object.getOwnPropertyDescriptor(b,h);(!M||("get"in M?!b.__esModule:M.writable||M.configurable))&&(M={enumerable:!0,get:function(){return b[h]}}),Object.defineProperty(S,E,M)}:function(S,b,h,E){E===void 0&&(E=h),S[E]=b[h]}),o=ra&&ra.__exportStar||function(S,b){for(var h in S)h!=="default"&&!Object.prototype.hasOwnProperty.call(b,h)&&u(b,S,h)};Object.defineProperty(r,"__esModule",{value:!0}),r.DomHandler=void 0;var c=G0(),d=e0();o(e0(),r);var p={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=function(){function S(b,h,E){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof h=="function"&&(E=h,h=p),typeof b=="object"&&(h=b,b=void 0),this.callback=b??null,this.options=h??p,this.elementCB=E??null}return S.prototype.onparserinit=function(b){this.parser=b},S.prototype.onreset=function(){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},S.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},S.prototype.onerror=function(b){this.handleCallback(b)},S.prototype.onclosetag=function(){this.lastNode=null;var b=this.tagStack.pop();this.options.withEndIndices&&(b.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(b)},S.prototype.onopentag=function(b,h){var E=this.options.xmlMode?c.ElementType.Tag:void 0,M=new d.Element(b,h,void 0,E);this.addNode(M),this.tagStack.push(M)},S.prototype.ontext=function(b){var h=this.lastNode;if(h&&h.type===c.ElementType.Text)h.data+=b,this.options.withEndIndices&&(h.endIndex=this.parser.endIndex);else{var E=new d.Text(b);this.addNode(E),this.lastNode=E}},S.prototype.oncomment=function(b){if(this.lastNode&&this.lastNode.type===c.ElementType.Comment){this.lastNode.data+=b;return}var h=new d.Comment(b);this.addNode(h),this.lastNode=h},S.prototype.oncommentend=function(){this.lastNode=null},S.prototype.oncdatastart=function(){var b=new d.Text(""),h=new d.CDATA([b]);this.addNode(h),b.parent=h,this.lastNode=b},S.prototype.oncdataend=function(){this.lastNode=null},S.prototype.onprocessinginstruction=function(b,h){var E=new d.ProcessingInstruction(b,h);this.addNode(E)},S.prototype.handleCallback=function(b){if(typeof this.callback=="function")this.callback(b,this.dom);else if(b)throw b},S.prototype.addNode=function(b){var h=this.tagStack[this.tagStack.length-1],E=h.children[h.children.length-1];this.options.withStartIndices&&(b.startIndex=this.parser.startIndex),this.options.withEndIndices&&(b.endIndex=this.parser.endIndex),h.children.push(b),E&&(b.prev=E,E.next=b),b.parent=h,this.lastNode=null},S}();r.DomHandler=m,r.default=m}(ra)),ra}var ms={},t0;function iv(){return t0||(t0=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.CARRIAGE_RETURN_PLACEHOLDER_REGEX=r.CARRIAGE_RETURN_PLACEHOLDER=r.CARRIAGE_RETURN_REGEX=r.CARRIAGE_RETURN=r.CASE_SENSITIVE_TAG_NAMES_MAP=r.CASE_SENSITIVE_TAG_NAMES=void 0,r.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],r.CASE_SENSITIVE_TAG_NAMES_MAP=r.CASE_SENSITIVE_TAG_NAMES.reduce(function(u,o){return u[o.toLowerCase()]=o,u},{}),r.CARRIAGE_RETURN="\r",r.CARRIAGE_RETURN_REGEX=new RegExp(r.CARRIAGE_RETURN,"g"),r.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(),"__"),r.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(r.CARRIAGE_RETURN_PLACEHOLDER,"g")}(ms)),ms}var a0;function Y0(){if(a0)return la;a0=1,Object.defineProperty(la,"__esModule",{value:!0}),la.formatAttributes=c,la.escapeSpecialCharacters=p,la.revertEscapedCharacters=m,la.formatDOM=S;var r=q0(),u=iv();function o(b){return u.CASE_SENSITIVE_TAG_NAMES_MAP[b]}function c(b){for(var h={},E=0,M=b.length;E<M;E++){var B=b[E];h[B.name]=B.value}return h}function d(b){b=b.toLowerCase();var h=o(b);return h||b}function p(b){return b.replace(u.CARRIAGE_RETURN_REGEX,u.CARRIAGE_RETURN_PLACEHOLDER)}function m(b){return b.replace(u.CARRIAGE_RETURN_PLACEHOLDER_REGEX,u.CARRIAGE_RETURN)}function S(b,h,E){h===void 0&&(h=null);for(var M=[],B,G=0,I=b.length;G<I;G++){var q=b[G];switch(q.nodeType){case 1:{var z=d(q.nodeName);B=new r.Element(z,c(q.attributes)),B.children=S(z==="template"?q.content.childNodes:q.childNodes,B);break}case 3:B=new r.Text(m(q.nodeValue));break;case 8:B=new r.Comment(q.nodeValue);break;default:continue}var W=M[G-1]||null;W&&(W.next=B),B.parent=h,B.prev=W,B.next=null,M.push(B)}return E&&(B=new r.ProcessingInstruction(E.substring(0,E.indexOf(" ")).toLowerCase(),E),B.next=M[0]||null,B.parent=h,M.unshift(B),M[1]&&(M[1].prev=M[0])),M}return la}var i0;function lv(){if(i0)return Dr;i0=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.default=q;var r=Y0(),u="html",o="head",c="body",d=/<([a-zA-Z]+[0-9]?)/,p=/<head[^]*>/i,m=/<body[^]*>/i,S=function(z,W){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},b=function(z,W){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},h=typeof window=="object"&&window.DOMParser;if(typeof h=="function"){var E=new h,M="text/html";b=function(z,W){return W&&(z="<".concat(W,">").concat(z,"</").concat(W,">")),E.parseFromString(z,M)},S=b}if(typeof document=="object"&&document.implementation){var B=document.implementation.createHTMLDocument();S=function(z,W){if(W){var V=B.documentElement.querySelector(W);return V&&(V.innerHTML=z),B}return B.documentElement.innerHTML=z,B}}var G=typeof document=="object"&&document.createElement("template"),I;G&&G.content&&(I=function(z){return G.innerHTML=z,G.content.childNodes});function q(z){var W,V;z=(0,r.escapeSpecialCharacters)(z);var ie=z.match(d),F=ie&&ie[1]?ie[1].toLowerCase():"";switch(F){case u:{var y=b(z);if(!p.test(z)){var O=y.querySelector(o);(W=O==null?void 0:O.parentNode)===null||W===void 0||W.removeChild(O)}if(!m.test(z)){var O=y.querySelector(c);(V=O==null?void 0:O.parentNode)===null||V===void 0||V.removeChild(O)}return y.querySelectorAll(u)}case o:case c:{var H=S(z).querySelectorAll(F);return m.test(z)&&p.test(z)?H[0].parentNode.childNodes:H}default:{if(I)return I(z);var O=S(z,c).querySelector(c);return O.childNodes}}}return Dr}var l0;function rv(){if(l0)return $a;l0=1;var r=$a&&$a.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty($a,"__esModule",{value:!0}),$a.default=d;var u=r(lv()),o=Y0(),c=/<(![a-zA-Z\s]+)>/;function d(p){if(typeof p!="string")throw new TypeError("First argument must be a string");if(!p)return[];var m=p.match(c),S=m?m[1]:void 0;return(0,o.formatDOM)((0,u.default)(p),null,S)}return $a}var Cr={},Hn={},al={},r0;function uv(){if(r0)return al;r0=1;var r=0;al.SAME=r;var u=1;return al.CAMELCASE=u,al.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},al}var u0;function cv(){if(u0)return Hn;u0=1;const r=0,u=1,o=2,c=3,d=4,p=5,m=6;function S(y){return h.hasOwnProperty(y)?h[y]:null}function b(y,O,H,K,Z,ge,Ne){this.acceptsBooleans=O===o||O===c||O===d,this.attributeName=K,this.attributeNamespace=Z,this.mustUseProperty=H,this.propertyName=y,this.type=O,this.sanitizeURL=ge,this.removeEmptyString=Ne}const h={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(y=>{h[y]=new b(y,r,!1,y,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([y,O])=>{h[y]=new b(y,u,!1,O,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(y=>{h[y]=new b(y,o,!1,y.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(y=>{h[y]=new b(y,o,!1,y,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(y=>{h[y]=new b(y,c,!1,y.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(y=>{h[y]=new b(y,c,!0,y,null,!1,!1)}),["capture","download"].forEach(y=>{h[y]=new b(y,d,!1,y,null,!1,!1)}),["cols","rows","size","span"].forEach(y=>{h[y]=new b(y,m,!1,y,null,!1,!1)}),["rowSpan","start"].forEach(y=>{h[y]=new b(y,p,!1,y.toLowerCase(),null,!1,!1)});const M=/[\-\:]([a-z])/g,B=y=>y[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(y=>{const O=y.replace(M,B);h[O]=new b(O,u,!1,y,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(y=>{const O=y.replace(M,B);h[O]=new b(O,u,!1,y,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(y=>{const O=y.replace(M,B);h[O]=new b(O,u,!1,y,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(y=>{h[y]=new b(y,u,!1,y.toLowerCase(),null,!1,!1)});const G="xlinkHref";h[G]=new b("xlinkHref",u,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(y=>{h[y]=new b(y,u,!1,y.toLowerCase(),null,!0,!0)});const{CAMELCASE:I,SAME:q,possibleStandardNames:z}=uv(),V=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",ie=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+V+"]*$")),F=Object.keys(z).reduce((y,O)=>{const H=z[O];return H===q?y[O]=O:H===I?y[O.toLowerCase()]=O:y[O]=H,y},{});return Hn.BOOLEAN=c,Hn.BOOLEANISH_STRING=o,Hn.NUMERIC=p,Hn.OVERLOADED_BOOLEAN=d,Hn.POSITIVE_NUMERIC=m,Hn.RESERVED=r,Hn.STRING=u,Hn.getPropertyInfo=S,Hn.isCustomAttribute=ie,Hn.possibleStandardNames=F,Hn}var il={},ei={},vs,c0;function sv(){if(c0)return vs;c0=1;var r=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,u=/\n/g,o=/^\s*/,c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,d=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,S=/^\s+|\s+$/g,b=`
`,h="/",E="*",M="",B="comment",G="declaration";vs=function(q,z){if(typeof q!="string")throw new TypeError("First argument must be a string");if(!q)return[];z=z||{};var W=1,V=1;function ie(fe){var te=fe.match(u);te&&(W+=te.length);var Ae=fe.lastIndexOf(b);V=~Ae?fe.length-Ae:V+fe.length}function F(){var fe={line:W,column:V};return function(te){return te.position=new y(fe),K(),te}}function y(fe){this.start=fe,this.end={line:W,column:V},this.source=z.source}y.prototype.content=q;function O(fe){var te=new Error(z.source+":"+W+":"+V+": "+fe);if(te.reason=fe,te.filename=z.source,te.line=W,te.column=V,te.source=q,!z.silent)throw te}function H(fe){var te=fe.exec(q);if(te){var Ae=te[0];return ie(Ae),q=q.slice(Ae.length),te}}function K(){H(o)}function Z(fe){var te;for(fe=fe||[];te=ge();)te!==!1&&fe.push(te);return fe}function ge(){var fe=F();if(!(h!=q.charAt(0)||E!=q.charAt(1))){for(var te=2;M!=q.charAt(te)&&(E!=q.charAt(te)||h!=q.charAt(te+1));)++te;if(te+=2,M===q.charAt(te-1))return O("End of comment missing");var Ae=q.slice(2,te-2);return V+=2,ie(Ae),q=q.slice(te),V+=2,fe({type:B,comment:Ae})}}function Ne(){var fe=F(),te=H(c);if(te){if(ge(),!H(d))return O("property missing ':'");var Ae=H(p),D=fe({type:G,property:I(te[0].replace(r,M)),value:Ae?I(Ae[0].replace(r,M)):M});return H(m),D}}function De(){var fe=[];Z(fe);for(var te;te=Ne();)te!==!1&&(fe.push(te),Z(fe));return fe}return K(),De()};function I(q){return q?q.replace(S,M):M}return vs}var s0;function ov(){if(s0)return ei;s0=1;var r=ei&&ei.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(ei,"__esModule",{value:!0}),ei.default=o;var u=r(sv());function o(c,d){var p=null;if(!c||typeof c!="string")return p;var m=(0,u.default)(c),S=typeof d=="function";return m.forEach(function(b){if(b.type==="declaration"){var h=b.property,E=b.value;S?d(h,E,b):E&&(p=p||{},p[h]=E)}}),p}return ei}var ll={},o0;function fv(){if(o0)return ll;o0=1,Object.defineProperty(ll,"__esModule",{value:!0}),ll.camelCase=void 0;var r=/^--[a-zA-Z0-9_-]+$/,u=/-([a-z])/g,o=/^[^-]+$/,c=/^-(webkit|moz|ms|o|khtml)-/,d=/^-(ms)-/,p=function(h){return!h||o.test(h)||r.test(h)},m=function(h,E){return E.toUpperCase()},S=function(h,E){return"".concat(E,"-")},b=function(h,E){return E===void 0&&(E={}),p(h)?h:(h=h.toLowerCase(),E.reactCompat?h=h.replace(d,S):h=h.replace(c,S),h.replace(u,m))};return ll.camelCase=b,ll}var rl,f0;function dv(){if(f0)return rl;f0=1;var r=rl&&rl.__importDefault||function(d){return d&&d.__esModule?d:{default:d}},u=r(ov()),o=fv();function c(d,p){var m={};return!d||typeof d!="string"||(0,u.default)(d,function(S,b){S&&b&&(m[(0,o.camelCase)(S,p)]=b)}),m}return c.default=c,rl=c,rl}var d0;function I0(){return d0||(d0=1,function(r){var u=il&&il.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(r,"__esModule",{value:!0}),r.returnFirstArg=r.canTextBeChildOfNode=r.ELEMENTS_WITH_NO_TEXT_CHILDREN=r.PRESERVE_CUSTOM_ATTRIBUTES=void 0,r.isCustomComponent=p,r.setStyleProp=S;var o=ai(),c=u(dv()),d=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function p(E,M){return E.includes("-")?!d.has(E):!!(M&&typeof M.is=="string")}var m={reactCompat:!0};function S(E,M){if(typeof E=="string"){if(!E.trim()){M.style={};return}try{M.style=(0,c.default)(E,m)}catch{M.style={}}}}r.PRESERVE_CUSTOM_ATTRIBUTES=Number(o.version.split(".")[0])>=16,r.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var b=function(E){return!r.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(E.name)};r.canTextBeChildOfNode=b;var h=function(E){return E};r.returnFirstArg=h}(il)),il}var b0;function V0(){if(b0)return Cr;b0=1,Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.default=p;var r=cv(),u=I0(),o=["checked","value"],c=["input","select","textarea"],d={reset:!0,submit:!0};function p(S,b){S===void 0&&(S={});var h={},E=!!(S.type&&d[S.type]);for(var M in S){var B=S[M];if((0,r.isCustomAttribute)(M)){h[M]=B;continue}var G=M.toLowerCase(),I=m(G);if(I){var q=(0,r.getPropertyInfo)(I);switch(o.includes(I)&&c.includes(b)&&!E&&(I=m("default"+G)),h[I]=B,q&&q.type){case r.BOOLEAN:h[I]=!0;break;case r.OVERLOADED_BOOLEAN:B===""&&(h[I]=!0);break}continue}u.PRESERVE_CUSTOM_ATTRIBUTES&&(h[M]=B)}return(0,u.setStyleProp)(S.style,h),h}function m(S){return r.possibleStandardNames[S]}return Cr}var ni={},h0;function bv(){if(h0)return ni;h0=1;var r=ni&&ni.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=p;var u=ai(),o=r(V0()),c=I0(),d={cloneElement:u.cloneElement,createElement:u.createElement,isValidElement:u.isValidElement};function p(S,b){b===void 0&&(b={});for(var h=[],E=typeof b.replace=="function",M=b.transform||c.returnFirstArg,B=b.library||d,G=B.cloneElement,I=B.createElement,q=B.isValidElement,z=S.length,W=0;W<z;W++){var V=S[W];if(E){var ie=b.replace(V,W);if(q(ie)){z>1&&(ie=G(ie,{key:ie.key||W})),h.push(M(ie,V,W));continue}}if(V.type==="text"){var F=!V.data.trim().length;if(F&&V.parent&&!(0,c.canTextBeChildOfNode)(V.parent)||b.trim&&F)continue;h.push(M(V.data,V,W));continue}var y=V,O={};m(y)?((0,c.setStyleProp)(y.attribs.style,y.attribs),O=y.attribs):y.attribs&&(O=(0,o.default)(y.attribs,y.name));var H=void 0;switch(V.type){case"script":case"style":V.children[0]&&(O.dangerouslySetInnerHTML={__html:V.children[0].data});break;case"tag":V.name==="textarea"&&V.children[0]?O.defaultValue=V.children[0].data:V.children&&V.children.length&&(H=p(V.children,b));break;default:continue}z>1&&(O.key=W),h.push(M(I(V.name,O,H),V,W))}return h.length===1?h[0]:h}function m(S){return c.PRESERVE_CUSTOM_ATTRIBUTES&&S.type==="tag"&&(0,c.isCustomComponent)(S.name,S.attribs)}return ni}var p0;function hv(){return p0||(p0=1,function(r){var u=tl&&tl.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(r,"__esModule",{value:!0}),r.htmlToDOM=r.domToReact=r.attributesToProps=r.Text=r.ProcessingInstruction=r.Element=r.Comment=void 0,r.default=S;var o=u(rv());r.htmlToDOM=o.default;var c=u(V0());r.attributesToProps=c.default;var d=u(bv());r.domToReact=d.default;var p=q0();Object.defineProperty(r,"Comment",{enumerable:!0,get:function(){return p.Comment}}),Object.defineProperty(r,"Element",{enumerable:!0,get:function(){return p.Element}}),Object.defineProperty(r,"ProcessingInstruction",{enumerable:!0,get:function(){return p.ProcessingInstruction}}),Object.defineProperty(r,"Text",{enumerable:!0,get:function(){return p.Text}});var m={lowerCaseAttributeNames:!1};function S(b,h){if(typeof b!="string")throw new TypeError("First argument must be a string");return b?(0,d.default)((0,o.default)(b,(h==null?void 0:h.htmlparser2)||m),h):[]}}(tl)),tl}var pv=hv();const y0=sy(pv),yv=y0.default||y0;function mv({title:r,subtitle:u,iconUrl:o,content:c,price:d,rarity:p,onAvoid:m,showAvoidButton:S}){return v.jsxs("div",{className:"glass-card flex flex-col font-noto rounded-[10px] overflow-hidden dark:bg-gray-800 dark:border-gray-700",children:[v.jsxs("div",{className:"flex items-center gap-4 px-5 py-4",children:[o&&v.jsx("img",{src:o,alt:"",width:60,height:60,className:"rounded-lg object-cover"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-lg font-bold",style:{color:ol(p)},children:r}),u&&v.jsx("div",{className:"text-sm font-semibold",style:{color:"#f67422"},children:u})]})]}),v.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),v.jsx("div",{className:"flex flex-col gap-2 px-5 py-4",children:c.map((b,h)=>v.jsxs("div",{className:"flex items-center gap-3",children:[b.iconUrl&&v.jsx("img",{src:b.iconUrl,alt:"",width:30,height:30,className:"rounded object-cover",style:{borderRadius:4}}),v.jsx("span",{className:"text-sm font-merriweather",style:{color:"#fdfdfd"},children:yv(b.text)})]},h))}),v.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),v.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[v.jsx("span",{className:"font-mono text-base font-bold",style:{color:"#fdfdfd"},children:d}),S&&v.jsx("button",{type:"button","aria-label":`Avoid ${r}`,className:"text-xs text-red-500 hover:underline",onClick:m,children:"Avoid"})]})]})}function vv({eqItems:r,resultItems:u}){const o=Pn(),c=dn(p=>p.input.present.avoidEnabled),d=[...r,...u].sort(j0);return v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Final Build"}),v.jsx("ul",{className:"mt-2 space-y-3 max-h-fit overflow-y-auto pr-2",children:d.map(p=>v.jsx("li",{children:v.jsx(mv,{title:p.name,subtitle:p.tab,rarity:p.rarity,content:p.attributes.map(m=>m.type==="description"?{text:`<span class='font-sm text-[#8fa6d7]'>${m.value}</span>`}:m.type==="Editor's Note"?{text:`<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${m.value}</span>`}:{text:`<strong>${m.value}</strong> <span class='font-sm text-[#8fa6d7]'>${fa(m.type)}</span>`}),price:`${p.cost} G`,showAvoidButton:!0,onAvoid:()=>{c||o(L0()),o(H0(p.id||p.name))}})},p.id))})]})}function gv({eqItems:r,resultItems:u}){const o=[...r,...u].sort(j0);return v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200 mb-2",children:"Items Overview"}),v.jsx("table",{className:"w-full text-left border-collapse mb-4",children:v.jsx("tbody",{children:Array.from({length:2}).map((c,d)=>v.jsx("tr",{children:o.slice(d*3,d*3+3).map((p,m)=>v.jsx("td",{className:"px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]",style:{color:p?ol(p.rarity):void 0},children:p?p.name:""},m))},d))})})]})}function Sv(){return v.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 bg-white dark:bg-gray-900",children:[v.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:v.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),v.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"No results yet"}),v.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Fill out the form and click calculate to see the magic."})]})}function Ev({results:r,eqCost:u,cash:o}){return v.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[v.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[v.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Weighted Score"}),v.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400",children:r.score.toFixed(2)})]}),v.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[v.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Total Cost"}),v.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400",children:u+r.cost})]}),v.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[v.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Cash Remaining"}),v.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600 dark:text-green-400",children:o-u-r.cost})]})]})}function Av({eqItems:r,eqCost:u,cash:o,results:c,alternatives:d}){return v.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Results"}),c?v.jsxs("div",{className:"space-y-6",children:[v.jsx(Ev,{results:c,eqCost:u,cash:o}),v.jsx(gv,{eqItems:r,resultItems:c.items}),v.jsx(av,{results:c}),v.jsx(vv,{eqItems:r,resultItems:c.items}),v.jsx(tv,{alternatives:d})]}):v.jsx(Sv,{})]})}const Ln={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},Mr={undo(){return{type:Ln.UNDO}},redo(){return{type:Ln.REDO}},jumpToFuture(r){return{type:Ln.JUMP_TO_FUTURE,index:r}},jumpToPast(r){return{type:Ln.JUMP_TO_PAST,index:r}},jump(r){return{type:Ln.JUMP,index:r}},clearHistory(){return{type:Ln.CLEAR_HISTORY}}};function m0(r,u=[]){return Array.isArray(r)?r:typeof r=="string"?[r]:u}function Rv(r){return typeof r.present<"u"&&typeof r.future<"u"&&typeof r.past<"u"&&Array.isArray(r.future)&&Array.isArray(r.past)}function ca(r,u,o,c=null){return{past:r,present:u,future:o,group:c,_latestUnfiltered:u,index:r.length,limit:r.length+o.length+1}}let Yr,Un;const Ns={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function Tv(){Un={header:[],prev:[],action:[],next:[],msgs:[]}}function _v(){const{header:r,prev:u,next:o,action:c,msgs:d}=Un;console.group?(console.groupCollapsed(...r),console.log(...u),console.log(...c),console.log(...o),console.log(...d),console.groupEnd()):(console.log(...r),console.log(...u),console.log(...c),console.log(...o),console.log(...d))}function Ds(r,u,o){return[`%c${r}`,`color: ${u}; font-weight: bold`,o]}function Ov(r,u){Tv(),Yr&&(console.group?(Un.header=["%credux-undo","font-style: italic","action",r.type],Un.action=Ds("action",Ns.action,r),Un.prev=Ds("prev history",Ns.prevState,u)):(Un.header=["redux-undo action",r.type],Un.action=["action",r],Un.prev=["prev history",u]))}function Gn(r){Yr&&(console.group?Un.next=Ds("next history",Ns.nextState,r):Un.next=["next history",r],_v())}function an(...r){Yr&&(Un.msgs=Un.msgs.concat([...r,`
`]))}function xv(r){Yr=r}function gs(r,u){const o=ca([],r,[]);return u&&(o._latestUnfiltered=null),o}function Nv(r,u,o,c){const d=r.past.length+1;an("inserting",u),an("new free: ",o-d);const{past:p,_latestUnfiltered:m}=r,S=o&&o<=d,b=p.slice(S?1:0),h=m!=null?[...b,m]:b;return ca(h,u,[],c)}function X0(r,u){if(u<0||u>=r.future.length)return r;const{past:o,future:c,_latestUnfiltered:d}=r,p=[...o,d,...c.slice(0,u)],m=c[u],S=c.slice(u+1);return ca(p,m,S)}function K0(r,u){if(u<0||u>=r.past.length)return r;const{past:o,future:c,_latestUnfiltered:d}=r,p=o.slice(0,u),m=[...o.slice(u+1),d,...c],S=o[u];return ca(p,S,m)}function Ss(r,u){return u>0?X0(r,u-1):u<0?K0(r,r.past.length+u):r}function Dv(r,u){return u.indexOf(r)>-1?r:!r}function Cv(r,u={}){xv(u.debug);const o={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:Ln.UNDO,redoType:Ln.REDO,jumpToPastType:Ln.JUMP_TO_PAST,jumpToFutureType:Ln.JUMP_TO_FUTURE,jumpType:Ln.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...u,initTypes:m0(u.initTypes,["@@redux-undo/INIT"]),clearHistoryType:m0(u.clearHistoryType,[Ln.CLEAR_HISTORY])},c=o.neverSkipReducer?(p,m,...S)=>({...p,present:r(p.present,m,...S)}):p=>p;let d;return(p=d,m={},...S)=>{Ov(m,p);let b=p;if(!d)if(an("history is uninitialized"),p===void 0){const E=r(p,{type:"@@redux-undo/CREATE_HISTORY"},...S);return b=gs(E,o.ignoreInitialState),an("do not set initialState on probe actions"),Gn(b),b}else Rv(p)?(b=d=o.ignoreInitialState?p:ca(p.past,p.present,p.future),an("initialHistory initialized: initialState is a history",d)):(b=d=gs(p,o.ignoreInitialState),an("initialHistory initialized: initialState is not a history",d));let h;switch(m.type){case void 0:return b;case o.undoType:return h=Ss(b,-1),an("perform undo"),Gn(h),c(h,m,...S);case o.redoType:return h=Ss(b,1),an("perform redo"),Gn(h),c(h,m,...S);case o.jumpToPastType:return h=K0(b,m.index),an(`perform jumpToPast to ${m.index}`),Gn(h),c(h,m,...S);case o.jumpToFutureType:return h=X0(b,m.index),an(`perform jumpToFuture to ${m.index}`),Gn(h),c(h,m,...S);case o.jumpType:return h=Ss(b,m.index),an(`perform jump to ${m.index}`),Gn(h),c(h,m,...S);case Dv(m.type,o.clearHistoryType):return h=gs(b.present,o.ignoreInitialState),an("perform clearHistory"),Gn(h),c(h,m,...S);default:if(h=r(b.present,m,...S),o.initTypes.some(M=>M===m.type))return an("reset history due to init action"),Gn(d),d;if(b._latestUnfiltered===h)return b;if(typeof o.filter=="function"&&!o.filter(m,h,b)){const M=ca(b.past,h,b.future,b.group);return o.syncFilter||(M._latestUnfiltered=b._latestUnfiltered),an("filter ignored action, not storing it in past"),Gn(M),M}const E=o.groupBy(m,h,b);if(E!=null&&E===b.group){const M=ca(b.past,h,b.future,b.group);return an("groupBy grouped the action with the previous action"),Gn(M),M}return b=Nv(b,h,o.limit,E),an("inserted new state into history"),Gn(b),b}}}function Mv(r){return`${r.hero} - $${r.cash}`}function wv({history:r}){const[u,o]=ne.useState(!1),c=ne.useRef(null);return ne.useEffect(()=>{const d=p=>{c.current&&!c.current.contains(p.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),v.jsxs("div",{className:"relative",ref:c,children:[v.jsxs("button",{type:"button",onClick:()=>o(d=>!d),className:"flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800",children:["History",v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),u&&v.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-lg",children:r.length>0?v.jsx("ul",{children:r.map((d,p)=>v.jsx("li",{className:"border-b border-gray-200 dark:border-gray-700 px-3 py-2 last:border-none dark:text-gray-100",children:Mv(d)},p))}):v.jsx("p",{className:"p-3 text-gray-500 dark:text-gray-400",children:"No history"})})]})}function Hv(){const r=Pn(),u=dn(c=>c.input.past),o=dn(c=>c.input.future);return ne.useEffect(()=>{const c=d=>{d.ctrlKey&&d.key.toLowerCase()==="z"&&(d.preventDefault(),d.shiftKey?r(Mr.redo()):r(Mr.undo()))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[r]),v.jsx("div",{className:"flex items-center justify-between gap-4",children:v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{type:"button",disabled:u.length===0,onClick:()=>r(Mr.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Undo"}),v.jsx("button",{type:"button",disabled:o.length===0,onClick:()=>r(Mr.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Redo"}),v.jsx(wv,{history:u})]})})}const Lv=`{
  "tabs": {
    "weapon": {
      "common": [
        {
          "name": "COMPENSATOR",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            }
          ],
          "cost": 1000,
          "id": "i_0"
        },
        {
          "name": "PLASMA CONVERTER",
          "attributes": [
            {
              "type": "WPLS",
              "value": "10%"
            }
          ],
          "cost": 1000,
          "id": "i_1"
        },
        {
          "name": "WEAPON GREASE",
          "attributes": [
            {
              "type": "AS",
              "value": "5%"
            }
          ],
          "cost": 1000,
          "id": "i_2"
        },
        {
          "name": "AMMO RESERVES",
          "attributes": [
            {
              "type": "MA",
              "value": "20%"
            }
          ],
          "cost": 1500,
          "id": "i_3"
        },
        {
          "name": "FRENZY AMPLIFIER",
          "attributes": [
            {
              "type": "description",
              "value": "Eliminations grant <b>10%</b> Attack Speed and <b>15%</b> Move Speed for <b>3s</b>."
            }
          ],
          "cost": 1500,
          "id": "i_4"
        }
      ],
      "rare": [
        {
          "name": "AFTERMARKET FIRING PIN",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "MS",
              "value": "5%"
            }
          ],
          "cost": 3750,
          "id": "i_5"
        },
        {
          "name": "ADVANCED NANOBIOTICS",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "After healing an ally, gain <b>10%</b> Attack Speed for <b>3s</b>."
            }
          ],
          "cost": 4000,
          "id": "i_6"
        },
        {
          "name": "SHIELDBUSTER",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "After dealing damage to Shields or Armor, gain <b>15%</b> Attack Speed for <b>1s</b>."
            }
          ],
          "cost": 4000,
          "id": "i_7"
        },
        {
          "name": "STOCKPILE",
          "attributes": [
            {
              "type": "AS",
              "value": "5%"
            },
            {
              "type": "MA",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "id": "i_8"
        },
        {
          "name": "TECHNOLEECH",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "WPLS",
              "value": "10%"
            }
          ],
          "cost": 4500,
          "id": "i_9"
        },
        {
          "name": "ICY COOLANT",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "CR",
              "value": "5%"
            }
          ],
          "cost": 5500,
          "id": "i_10"
        },
        {
          "name": "TALON MODIFICATION MODULE",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            }
          ],
          "cost": 6000,
          "id": "i_11"
        },
        {
          "name": "GUTPUNCH GAUNTLET",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "While not holding <b>[Jagged Blade]</b>, <b>[Quick Melee]</b> deals <b>75%</b> more damage and knocks back."
            }
          ],
          "cost": 4000,
          "character": "Junker Queen",
          "id": "i_12"
        },
        {
          "name": "MONARCH'S DECREE",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[Commanding Shout]</b> grants you <b>15%</b> Attack Speed."
            }
          ],
          "cost": 4000,
          "character": "Junker Queen",
          "id": "i_13"
        },
        {
          "name": "ELECTRO LIGHTS",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Recover from being <b>[Overheated] 50%</b> faster."
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_14"
        },
        {
          "name": "ENHANCED TARGET SENSORS",
          "attributes": [
            {
              "type": "description",
              "value": "Deal <b>25%</b> more damage to enemies farther than <b>12m</b> away."
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_15"
        },
        {
          "name": "OPTIMIZED ENERGY",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Critical hits reduce your <b>[Heat]</b> by <b>5%</b>."
            }
          ],
          "cost": 5000,
          "character": "Orisa",
          "id": "i_16"
        },
        {
          "name": "IRONCLAD CLEATS",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "Knockback Resist",
              "value": "40%"
            }
          ],
          "cost": 3750,
          "character": "Reinhardt",
          "id": "i_17"
        },
        {
          "name": "HYBRID BATTERY",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[Energy]</b> cannot be reduced below <b>20</b>."
            }
          ],
          "cost": 4000,
          "character": "Zarya",
          "id": "i_18"
        },
        {
          "name": "MAXED MAG",
          "attributes": [
            {
              "type": "AS",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Gain <b>3%</b> Attack Speed for each remaining Ammo above <b>50%</b> of your Max Ammo."
            }
          ],
          "cost": 4000,
          "character": "Ashe",
          "id": "i_19"
        },
        {
          "name": "TRIPOD",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[The Viper]</b>, <b>[Coach Gun]</b>, and <b>[Dynamite]</b> deal <b>10%</b> more damage to enemies that are below you."
            }
          ],
          "cost": 4000,
          "character": "Ashe",
          "id": "i_20"
        },
        {
          "name": "GREASED LOADER",
          "attributes": [
            {
              "type": "MA",
              "value": "25%"
            },
            {
              "type": "RS",
              "value": "15%"
            }
          ],
          "cost": 5000,
          "character": "Ashe",
          "id": "i_21"
        },
        {
          "name": "QUICKLOAD CHAMBER",
          "attributes": [
            {
              "type": "RS",
              "value": "20%"
            },
            {
              "type": "description",
              "value": "Reloading within <b>6m</b> of an enemy adds <b>20%</b> of Max Ammo as extra Ammo."
            }
          ],
          "cost": 4000,
          "character": "Cassidy",
          "id": "i_22"
        },
        {
          "name": "SPIKED GRIP",
          "attributes": [
            {
              "type": "MA",
              "value": "30%"
            },
            {
              "type": "description",
              "value": "While climbing, restore <b>20%</b> of your ammo every Is."
            }
          ],
          "cost": 3750,
          "character": "Genji",
          "id": "i_23"
        },
        {
          "name": "SPECTRAL SLUGS",
          "attributes": [
            {
              "type": "AS",
              "value": "5%"
            },
            {
              "type": "MA",
              "value": "25%"
            },
            {
              "type": "description",
              "value": "Using <b>[Shadow Step]</b> restores <b>100%</b> of your ammo."
            }
          ],
          "cost": 4000,
          "character": "Reaper",
          "id": "i_24"
        },
        {
          "name": "PULSE CONVERTER",
          "attributes": [
            {
              "type": "AS",
              "value": "5%"
            },
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "When you use <b>[Helix Rocket]</b>, restore <b>20%</b> of your ammo."
            }
          ],
          "cost": 4000,
          "character": "Soldier: 76",
          "id": "i_25"
        },
        {
          "name": "TARGET TRACKER",
          "attributes": [
            {
              "type": "Biotic Grenade Duration",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "For each enemy or ally affected by <b>[Biotic Grenade]</b>, gain <b>5%</b> Attack Speed, up to <b>25%</b>."
            }
          ],
          "cost": 4000,
          "character": "Ana",
          "id": "i_26"
        },
        {
          "name": "POTENT PROJECTILES",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Unscoped <b>[Biotic Rifle]</b> projectiles are <b>100%</b> larger."
            }
          ],
          "cost": 5000,
          "character": "Ana",
          "id": "i_27"
        },
        {
          "name": "QUICK SCOPE",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "Faster Scope Speed",
              "value": "200%"
            },
            {
              "type": "description",
              "value": "Deal <b>20%</b> more damage to airborne enemies."
            }
          ],
          "cost": 5000,
          "character": "Ana",
          "id": "i_28"
        },
        {
          "name": "VANTAGE SHOT",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "While airborne, <b>[Mediblaster]</b> deals <b>15%</b> more damage."
            }
          ],
          "cost": 4000,
          "character": "Juno",
          "id": "i_29"
        },
        {
          "name": "ASA'S ARMAMENTS",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Kunai]</b> bounce off surfaces <b>1 time</b>."
            }
          ],
          "cost": 4000,
          "character": "Kiriko",
          "id": "i_30"
        },
        {
          "name": "FARSIGHT FOCUS SASH",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you deal damage, gain <b>200%</b> <b>[Healing Ofuda]</b> Projectile Speed for <b>5s</b>."
            }
          ],
          "cost": 5000,
          "character": "Kiriko",
          "id": "i_31"
        },
        {
          "name": "TEAMWORK TOOLKIT",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you heal an ally, grant them <b>10%</b> Move Speed for <b>3s</b>."
            }
          ],
          "cost": 5000,
          "character": "Kiriko",
          "id": "i_32"
        },
        {
          "name": "MID-AIR MOBILIZER",
          "attributes": [
            {
              "type": "description",
              "value": "While airborne gain: <ul><li><b>5%</b> Weapon Power</li><li><b>10%</b> Attack Speed</li></ul>"
            }
          ],
          "cost": 4000,
          "character": "Mercy",
          "id": "i_33"
        },
        {
          "name": "BIO-NEEDLES",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Biotic Grasp]</b>'s secondary fire restores <b>50%</b> more <b>[Biotic Energy]</b>."
            }
          ],
          "cost": 4000,
          "character": "Moira",
          "id": "i_34"
        },
        {
          "name": "HIGH CAPACITY TUBING",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "Max [Biotic Energy]",
              "value": "50"
            }
          ],
          "cost": 4000,
          "character": "Moira",
          "id": "i_35"
        },
        {
          "name": "SLIPSTREAM SCARF",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "[Quick Dash] Distance",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "character": "Freja"
        },
        {
          "name": "TRACKER TAG",
          "attributes": [
            {
              "type": "MA",
              "value": "30%"
            },
            {
              "type": "description",
              "value": "When <b>[Take Aim]</b> bolt sticks an enemy, increase your Attack Speed by <b>20%</b> for <b>3s</b>."
            }
          ],
          "cost": 4000,
          "character": "Freja"
        }
      ],
      "epic": [
        {
          "name": "CODEBREAKER",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Ignore <b>50%</b> of Armor's damage reduction."
            }
          ],
          "cost": 9000,
          "id": "i_36"
        },
        {
          "name": "SALVAGED SLUGS",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "Increased Damage to Barriers",
              "value": "30%"
            },
            {
              "type": "description",
              "value": "Dealing Weapon Damage to Barriers has a <b>50%</b> chance to restore <b>1</b> ammo."
            }
          ],
          "cost": 9500,
          "id": "i_37"
        },
        {
          "name": "VOLSKAYA ORDNANCE",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Deal <b>5%</b> increased Weapon Damage for every <b>100</b> Max Life the target has more than you, up to <b>20%</b>."
            }
          ],
          "cost": 9500,
          "id": "i_38"
        },
        {
          "name": "COMMANDER'S CLIP",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "MA",
              "value": "40%"
            },
            {
              "type": "description",
              "value": "When you use an ability, restore <b>10%</b> of your Max Ammo."
            }
          ],
          "cost": 10000,
          "id": "i_39"
        },
        {
          "name": "WEAPON JAMMER",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Dealing Weapon Damage negates <b>10%</b> of the target's bonus Attack Speed and increase your Attack speed by <b>10%</b> for <b>2s</b>."
            }
          ],
          "cost": 10000,
          "id": "i_40"
        },
        {
          "name": "AMARI'S ANTIDOTE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "While healing an ally below <b>50%</b> Life with your weapon, deal <b>15%</b> increased Weapon Healing"
            }
          ],
          "cost": 11000,
          "id": "i_41"
        },
        {
          "name": "BOOSTER JETS",
          "attributes": [
            {
              "type": "AS",
              "value": "20%"
            },
            {
              "type": "description",
              "value": "When you use an ability, gain <b>10%</b> Move Speed for <b>2s</b>."
            }
          ],
          "cost": 11000,
          "id": "i_42"
        },
        {
          "name": "EL-SA'KA SUPPRESOR",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Critical Hits apply <b>30% Healing Reduction</b> to the target for <b>2s</b>."
            }
          ],
          "cost": 11000,
          "id": "i_43"
        },
        {
          "name": "HARDLIGHT ACCELERATOR",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you use an ability, gain <b>5%</b> Weapon Power for <b>3s</b>, stacking up to <b>3</b> times."
            }
          ],
          "cost": 11000,
          "id": "i_44"
        },
        {
          "name": "THE CLOSER",
          "attributes": [
            {
              "type": "WP",
              "value": "20%"
            },
            {
              "type": "CD",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Critical Hits reveal the target for <b>3s</b>."
            }
          ],
          "cost": 14500,
          "id": "i_45"
        },
        {
          "name": "EYE OF THE SPIDER",
          "attributes": [
            {
              "type": "WP",
              "value": "25%"
            },
            {
              "type": "description",
              "value": "Deal <b>10%</b> increased damage to enemies below <b>30%</b> Life."
            }
          ],
          "cost": 14000,
          "id": "i_46"
        },
        {
          "name": "MULTI-TASK MOD",
          "attributes": [
            {
              "type": "WP",
              "value": "20%"
            },
            {
              "type": "description",
              "value": "<b>[Fusion Cannons]</b> can now be fired while using <b>[Defense Matrix]</b>."
            }
          ],
          "cost": 10000,
          "character": "D.VA",
          "id": "i_47"
        },
        {
          "name": "SHRED AND LEAD",
          "attributes": [
            {
              "type": "MA",
              "value": "33%"
            },
            {
              "type": "WPLS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you <b>[Wound</b> an enemy, gain <b>10%</b> Attack Speed for <b>4s</b>, stacking up to <b>3 times</b>."
            }
          ],
          "cost": 10000,
          "character": "Junker Queen",
          "id": "i_48"
        },
        {
          "name": "BLOODHOUND MASK",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Gain <b>5%</b> Weapon Power for each enemy with a <b>[Wound]</b> within <b>12m</b>."
            }
          ],
          "cost": 12000,
          "character": "Junker Queen",
          "id": "i_49"
        },
        {
          "name": "DAMPENER GRIP",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you deal more damage with <b>[Rocket Hammer]</b>, reduce the cooldown of your abilities by <b>1s</b>."
            }
          ],
          "cost": 10000,
          "character": "Reinhardt",
          "id": "i_50"
        },
        {
          "name": "PLAN Z",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Gain <b>3%</b> Attack Speed every <b>100</b> missing Life, up to <b>30%</b>."
            }
          ],
          "cost": 11000,
          "character": "Reinhardt",
          "id": "i_51"
        },
        {
          "name": "LIGHT LAUNCHER",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Consecutive <b>[Particle Cannon]</b> secondary fire shots consume <b>20%</b> less Ammo, up to <b>60%</b>, for your current magazine."
            }
          ],
          "cost": 10000,
          "character": "Zarya",
          "id": "i_52"
        },
        {
          "name": "BIGGER BEAM",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Particle Cannon]</b>'s primary fire range is increased by <b>20%</b>"
            }
          ],
          "cost": 11000,
          "character": "Zarya",
          "id": "i_53"
        },
        {
          "name": "IRONSIGHTS",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When the target is further than <b>10m</b>, scoped shot gains <b>1%</b> damage for each meter."
            }
          ],
          "cost": 11000,
          "character": "Ashe",
          "id": "i_54"
        },
        {
          "name": "SIDEWINDER",
          "attributes": [
            {
              "type": "AS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "When the target is within <b>10m</b>, unscoped shot gains <b>25%</b> increased damage."
            }
          ],
          "cost": 11000,
          "character": "Ashe",
          "id": "i_55"
        },
        {
          "name": "COMPETITIVE ANALYSIS",
          "attributes": [
            {
              "type": "WPLS",
              "value": "20%"
            },
            {
              "type": "description",
              "value": "Deal <b>15%</b> increased primary fire damage to enemies in the <b>Damage role</b>."
            }
          ],
          "cost": 11000,
          "character": "Cassidy",
          "id": "i_56"
        },
        {
          "name": "AMBUSHER OPTICS",
          "attributes": [
            {
              "type": "MD",
              "value": "25%"
            },
            {
              "type": "description",
              "value": "<b>[Quick Melee]</b> can critically hit when striking enemies from behind, dealing <b>50%</b> increased damage."
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_57"
        },
        {
          "name": "ENDURING EDGE",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "[Dragonblade] Duration",
              "value": "+4s"
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_58"
        },
        {
          "name": "SWIFT-LOADER",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "MA",
              "value": "30%"
            },
            {
              "type": "description",
              "value": "Damaging an enemy with <b>[Swift Strike]</b> restores <b>20%</b> of your ammo."
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_59"
        },
        {
          "name": "FOCUSED FLURRIES",
          "attributes": [
            {
              "type": "AS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Max Ammo is increased by <b>75%</b> but reloading takes <b>50%</b> longer."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_60"
        },
        {
          "name": "SNOWBOOT",
          "attributes": [
            {
              "type": "AS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Frozen ground increases Mei's Movement Speed by <b>35%</b>."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_61"
        },
        {
          "name": "HIMALAYAN HAT",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "While within <b>[Blizzard]</b>, gain <b>10%</b> Attack Speed."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_62"
        },
        {
          "name": "ONSLAUGHT",
          "attributes": [
            {
              "type": "MA",
              "value": "25%"
            },
            {
              "type": "description",
              "value": "Every <b>3rd</b> shot fires both of your <b>[Hellfire Shotguns]</b>. The extra shot does not consume ammo but deals <b>80%</b> <b>reduced</b> damage."
            }
          ],
          "cost": 10000,
          "character": "Reaper",
          "id": "i_63"
        },
        {
          "name": "PULSE SPIKE",
          "attributes": [
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "[Pulsar Torpedoes] Projectile Speed",
              "value": "35%"
            },
            {
              "type": "description",
              "value": "After using <b>[Pulsar Torpedoes]</b>, gain <b>25%</b> Attack Speed for <b>4s</b>."
            }
          ],
          "cost": 11000,
          "character": "Juno",
          "id": "i_64"
        },
        {
          "name": "LONG RANGE BLASTER",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Mediblaster]</b> deals <b>15%</b> increased damage and healing to targets farther than <b>12m</b> away."
            }
          ],
          "cost": 12000,
          "character": "Juno",
          "id": "i_65"
        },
        {
          "name": "GRAVITATIONAL PUSH",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "During <b>[Glide Boost]</b>, gain <b>20%</b> Attack Speed and your <b>[Quick Melee]</b> knocks enemies back."
            }
          ],
          "cost": 10000,
          "character": "Juno",
          "id": "i_66"
        },
        {
          "name": "RYŌTA'S RELOADER",
          "attributes": [
            {
              "type": "RS",
              "value": "35%"
            },
            {
              "type": "description",
              "value": "After using an ability, restore <b>100%</b> of your ammo."
            }
          ],
          "cost": 10000,
          "character": "Kiriko",
          "id": "i_67"
        },
        {
          "name": "SPIRITS' GUIDANCE",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "[Healing Ofuda] Projectile Speed",
              "value": "100%"
            }
          ],
          "cost": 12000,
          "character": "Kiriko",
          "id": "i_68"
        },
        {
          "name": "B-SIDE BOP",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "MD",
              "value": "25%"
            },
            {
              "type": "description",
              "value": "After using <b>[Soundwave]</b>, your next <b>[Quick Melee]</b> grants decaying Overhealth equal to <b>200%</b> of damage dealt."
            }
          ],
          "cost": 10000,
          "character": "Lúcio",
          "id": "i_69"
        },
        {
          "name": "RIFF REPEATER",
          "attributes": [
            {
              "type": "WP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Sonic Amplifier]</b> projectiles ricochet off walls <b>3</b> times."
            }
          ],
          "cost": 10000,
          "character": "Lúcio",
          "id": "i_70"
        },
        {
          "name": "CADUCEUS EX",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "[Caduceus Staff] Range",
              "value": "33%"
            }
          ],
          "cost": 10000,
          "character": "Mercy",
          "id": "i_71"
        },
        {
          "name": "CELESTIAL CLIP",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "MA",
              "value": "33%"
            },
            {
              "type": "description",
              "value": "<b>[Caduceus Blaster]</b> has a <b>10%</b> chance to fire an extra shot that doesn't consume additional ammo."
            }
          ],
          "cost": 10000,
          "character": "Mercy",
          "id": "i_72"
        },
        {
          "name": "ALTERNATIVE ENERGY",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "AS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "When you use <b>[Fade]</b>, refill your <b>[Biotic Energy]</b>."
            }
          ],
          "cost": 10000,
          "character": "Moira",
          "id": "i_73"
        },
        {
          "name": "SUBATOMIC SPLITTER",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "[Biotic Grasp] Secondary Fire Range",
              "value": "15%"
            }
          ],
          "cost": 11000,
          "character": "Moira",
          "id": "i_74"
        },
        {
          "name": "PORTABLE ZIPLINE",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Eliminations reset both charges of <b>[Quick Dash]</b> Cooldown."
            }
          ],
          "cost": 10000,
          "character": "Freja"
        }
      ]
    },
    "ability": {
      "common": [
        {
          "name": "CHARGED PLATING",
          "attributes": [
            {
              "type": "description",
              "value": "After you spend your Ultimate Charge, gain <b>25</b> Armor and <b>10%</b> Ability Power for the rest of the round."
            }
          ],
          "cost": 1000,
          "id": "i_75"
        },
        {
          "name": "POWER PLAYBOOK",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            }
          ],
          "cost": 1000,
          "id": "i_76"
        },
        {
          "name": "SHADY SPECTACLES",
          "attributes": [
            {
              "type": "ALS",
              "value": "10%"
            }
          ],
          "cost": 1000,
          "id": "i_77"
        },
        {
          "name": "WINNING ATTITUDE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "When you die, gain <b>15%</b> Ultimate Charge."
            }
          ],
          "cost": 1500,
          "id": "i_78"
        }
      ],
      "rare": [
        {
          "name": "CUSTOM STOCK",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "AP",
              "value": "10%"
            }
          ],
          "cost": 3750,
          "id": "i_79"
        },
        {
          "name": "BIOLIGHT OVERFLOW",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "When you spend your Ultimate Charge, grant nearby allies <b>50 Overhealth</b> for <b>3s</b>."
            }
          ],
          "cost": 4000,
          "id": "i_80"
        },
        {
          "name": "ENERGIZED BRACERS",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "ALS",
              "value": "10%"
            }
          ],
          "cost": 4000,
          "id": "i_81"
        },
        {
          "name": "JUNKER WHATCHAMAJIG",
          "attributes": [
            {
              "type": "Starting Ultimate Charge",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "id": "i_82"
        },
        {
          "name": "WRIST WRAPS",
          "attributes": [
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "AS",
              "value": "10%"
            }
          ],
          "cost": 4000,
          "id": "i_83"
        },
        {
          "name": "MULTI-TOOL",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "CR",
              "value": "5%"
            }
          ],
          "cost": 4500,
          "id": "i_84"
        },
        {
          "name": "NANO COLA",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            }
          ],
          "cost": 6000,
          "id": "i_85"
        },
        {
          "name": "DAE-HYUN'S DETONATOR",
          "attributes": [
            {
              "type": "ALS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "If your <b>[Mech]</b> detonates while mid-air, increase <b>[Self-Destruct]</b> explosion damage and range by <b>200%</b>."
            }
          ],
          "cost": 4000,
          "character": "D.VA",
          "id": "i_86"
        },
        {
          "name": "MASTERMIND'S MITIGATOR",
          "attributes": [
            {
              "type": "description",
              "value": "Every <b>200</b> damage you mitigate with <b>[Defense Matrix]</b> reduces <b>[Micro Missiles]</b> cooldown by <b>1s</b>."
            }
          ],
          "cost": 4000,
          "character": "D.VA",
          "id": "i_87"
        },
        {
          "name": "VESUVIUS PROTOCOL",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Using <b>[Self-Destruct]</b> drops lava nearby that deals <b class=\\"stat-ap\\">80</b> damage every <b>1s</b>."
            }
          ],
          "cost": 4000,
          "character": "D.VA",
          "id": "i_88"
        },
        {
          "name": "BIGGER MAGNET",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Jagged Blade]</b>'s pull strength is increased by <b>35%</b>."
            }
          ],
          "cost": 4000,
          "character": "Junker Queen",
          "id": "i_89"
        },
        {
          "name": "ARCFINDER",
          "attributes": [
            {
              "type": "description",
              "value": "<b>[Energy Javelin]</b> deals <b>25%</b> increased damage to enemies farther than <b>12m</b> away."
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_90"
        },
        {
          "name": "ELITE ROTATOR CUFF",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "[Javelin Spin] Duration",
              "value": "35%"
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_91"
        },
        {
          "name": "BOOST RECYCLER",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "If <b>[Charge]</b> is interrupted by the enemy, refund <b>50%</b> of <b>[Charge]</b> cooldown."
            }
          ],
          "cost": 4000,
          "character": "Reinhardt",
          "id": "i_92"
        },
        {
          "name": "CHIMERA'S MAW",
          "attributes": [
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "[Fire Strike] Radius",
              "value": "50%"
            }
          ],
          "cost": 4000,
          "character": "Reinhardt",
          "id": "i_93"
        },
        {
          "name": "BEYOND BARRIER",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "[Projected Barrier] Range",
              "value": "20%"
            }
          ],
          "cost": 4000,
          "character": "Zarya",
          "id": "i_94"
        },
        {
          "name": "FURNACE FUEL",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Cleansed Burns grant <b>3%</b> Ultimate Charge."
            }
          ],
          "cost": 4000,
          "character": "Ashe",
          "id": "i_95"
        },
        {
          "name": "SILVER LIGHTER",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Damage dealt to <b>Burning</b> targets grants <b>20%</b> more Ultimate Charge."
            }
          ],
          "cost": 4000,
          "character": "Ashe",
          "id": "i_96"
        },
        {
          "name": "BLACKWATCH TECH",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Deadeye]</b> eliminations reduce <b>[Flashbang]</b> max cooldown by <b>10%</b>, up to <b>40%</b> for the round."
            }
          ],
          "cost": 4000,
          "character": "Cassidy",
          "id": "i_97"
        },
        {
          "name": "STREAMLINED PONCHO",
          "attributes": [
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Combat Roll]</b> reduces <b>[Flashbang]</b> cooldown by <b>2s</b>."
            }
          ],
          "cost": 5000,
          "character": "Cassidy",
          "id": "i_98"
        },
        {
          "name": "TRAVERSAL KINETICS",
          "attributes": [
            {
              "type": "description",
              "value": "<b>[Swift Strike]</b> cooldown is reduced by <b>50%</b> if it deals no damage."
            }
          ],
          "cost": 3750,
          "character": "Genji",
          "id": "i_99"
        },
        {
          "name": "NINJA SOLES",
          "attributes": [
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "Move Speed during [Deflect]",
              "value": "15%"
            }
          ],
          "cost": 4000,
          "character": "Genji",
          "id": "i_100"
        },
        {
          "name": "BATTERY PACK",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "Biotic Field Duration",
              "value": "40%"
            }
          ],
          "cost": 4000,
          "character": "Soldier: 76",
          "id": "i_101"
        },
        {
          "name": "BOMB DIFFUSAL BOOTS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "Reduced [Helix Rocket] Self-Damage",
              "value": "90%"
            },
            {
              "type": "description",
              "value": "When you damage yourself with <b>[Helix Rocket]</b>, it knocks you back <b>200%</b> further."
            }
          ],
          "cost": 4000,
          "character": "Soldier: 76",
          "id": "i_102"
        },
        {
          "name": "DOUBLE DOSAGE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Landing a <b>[Sleep Dart]</b> on target affected by <b>[Biotic Grenade]</b> reduces its cooldown by <b>35%</b>."
            }
          ],
          "cost": 4000,
          "character": "Ana",
          "id": "i_103"
        },
        {
          "name": "LOCK-ON SHIELD",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "While aiming <b>[Pulsar Torpedoes]</b>, gain Overhealth equal to <b>50%</b> of your max Shields."
            }
          ],
          "cost": 4000,
          "character": "Juno",
          "id": "i_104"
        },
        {
          "name": "LUX LOOP",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "[Hyper Ring] Duration",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "character": "Juno",
          "id": "i_105"
        },
        {
          "name": "EYE OF THE YOKAI",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "[Kitsune Rush] Duration",
              "value": "35%"
            }
          ],
          "cost": 4000,
          "character": "Kiriko",
          "id": "i_106"
        },
        {
          "name": "CYCLIST GLOVES",
          "attributes": [
            {
              "type": "description",
              "value": "When you use an ability, gain <b>20%</b> Attack Speed for <b>3s</b>."
            }
          ],
          "cost": 5000,
          "character": "Kiriko",
          "id": "i_107"
        },
        {
          "name": "#1 SINGLE",
          "attributes": [
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "When allies leave your <b>[Crossfade]</b> area, the effect lingers for <b>2s</b>."
            }
          ],
          "cost": 4000,
          "character": "Lúcio",
          "id": "i_108"
        },
        {
          "name": "LOFLY BEATS",
          "attributes": [
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "While in <b>[Speed Boost]</b>, <b>[Soundwave]</b> also knocks you back."
            }
          ],
          "cost": 4000,
          "character": "Lúcio",
          "id": "i_109"
        },
        {
          "name": "NANO BOOP",
          "attributes": [
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Environmental Kills grant <b>[Nano Boost]</b> for <b>5s</b>."
            }
          ],
          "cost": 4000,
          "character": "Lúcio",
          "id": "i_110"
        },
        {
          "name": "LONG DISTANCE WINGS",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "Guardian Angel Range",
              "value": "33%"
            }
          ],
          "cost": 4000,
          "character": "Mercy",
          "id": "i_111"
        },
        {
          "name": "SMART ORBS",
          "attributes": [
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[Biotic Orb]</b> moves <b>50%</b> slower while it is healing or dealing damage."
            }
          ],
          "cost": 4000,
          "character": "Moira",
          "id": "i_112"
        },
        {
          "name": "LEVITATION SHAWL",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "During <b>[Coalescence]</b>, gain free flight."
            }
          ],
          "cost": 4500,
          "character": "Moira",
          "id": "i_113"
        },
        {
          "name": "REFRACTION TILES",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While <b>[Javelin Spin]</b> is active, gain <b>50%</b> damage reduction from beams."
            }
          ],
          "cost": 4000,
          "character": "Orisa"
        },
        {
          "name": "WINDWALKER BOOTS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "[Updraft] Height",
              "value": "20%"
            }
          ],
          "cost": 4000,
          "character": "Freja"
        }
      ],
      "epic": [
        {
          "name": "THREE-TAP TOMMYGUN",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "AS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "After using an ability, your next <b>3</b> instances of Weapon Damage deal additional damage equal to <b>3%</b> of the target's Life."
            }
          ],
          "cost": 9500,
          "id": "i_114"
        },
        {
          "name": "BIOTECH MAXIMIZER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you use an ability that heals, reduce its cooldown by <b>5%</b> for each unique ally it heals."
            }
          ],
          "cost": 10000,
          "id": "i_115"
        },
        {
          "name": "CATALYTIC CRYSTAL",
          "attributes": [
            {
              "type": "AP",
              "value": "15"
            },
            {
              "type": "description",
              "value": "Ability Damage and Healing grants <b>20%</b> more Ultimate Charge."
            }
          ],
          "cost": 10000,
          "id": "i_116"
        },
        {
          "name": "LUMÉRICO FUSION DRIVE",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "When you use an ability, restore <b>50</b> Armor or Shields over <b>2s</b>."
            }
          ],
          "cost": 10000,
          "id": "i_117"
        },
        {
          "name": "SUPERFLEXOR",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you deal Weapon Damage or Healing, gain <b>5%</b> Ability Power for <b>3s</b>, stacking up to <b>5 times</b>."
            }
          ],
          "cost": 10000,
          "id": "i_118"
        },
        {
          "name": "CYBERVENOM",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Dealing Ability Damage applies <b>30%</b> <b>Healing Reduction</b> for <b>2s</b>."
            }
          ],
          "cost": 10500,
          "id": "i_119"
        },
        {
          "name": "IRIDESCENT IRIS",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            },
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "After spending your Ultimate Charge, gain <b>100 Overhealth</b> for <b>3s</b>."
            }
          ],
          "cost": 11000,
          "id": "i_120"
        },
        {
          "name": "LIQUID NITROGEN",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Dealing Ability Damage slows the target's Move Speed by <b>20%</b> for <b>3s</b>."
            }
          ],
          "cost": 11000,
          "id": "i_121"
        },
        {
          "name": "MARK OF THE KITSUNE",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "When you use an ability, your next instance of Weapon Damage or Healing deals <b class=\\"stat-ap\\">25</b> bonus damage or healing."
            }
          ],
          "cost": 11000,
          "id": "i_122"
        },
        {
          "name": "CHAMPION'S KIT",
          "attributes": [
            {
              "type": "AP",
              "value": "35%"
            }
          ],
          "cost": 14000,
          "id": "i_123"
        },
        {
          "name": "BUSAN BLASTER",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            },
            {
              "type": "description",
              "value": "<b>[Light Gun]</b> gains a secondary fire, which charges up to fire a explosive piercing shot that deals <b class=\\"stat-ap\\">80</b> damage."
            }
          ],
          "cost": 10000,
          "character": "D.VA",
          "id": "i_124"
        },
        {
          "name": "MACRO MISSILE",
          "attributes": [
            {
              "type": "description",
              "value": "<b>[Micro Missiles]</b> deal <b>25%</b> increased damage and have significantly increased knockback."
            }
          ],
          "cost": 12000,
          "character": "D.VA",
          "id": "i_125"
        },
        {
          "name": "ONSLAUGHT ORDINANCE",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "The quantity and duration of <b>[Micro Missiles]</b> is increased by <b>20%</b>."
            }
          ],
          "cost": 12000,
          "character": "D.VA",
          "id": "i_126"
        },
        {
          "name": "TINKER TRACKSUIT",
          "attributes": [
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "ALS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Rampage]</b> and <b>[Carnage]</b> hits grant <b>10%</b> Attack Speed for <b>4s</b>."
            }
          ],
          "cost": 9500,
          "character": "Junker Queen",
          "id": "i_127"
        },
        {
          "name": "BOOMING VOICE",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "[Commanding Shout] Radius",
              "value": "50%"
            },
            {
              "type": "description",
              "value": "<b>[Commanding Shout]</b> will affect allies that are out of line of sight."
            }
          ],
          "cost": 11000,
          "character": "Junker Queen",
          "id": "i_128"
        },
        {
          "name": "EFI'S THEOREM",
          "attributes": [
            {
              "type": "ALS",
              "value": "20%"
            },
            {
              "type": "[Fortify] Duration",
              "value": "50%"
            }
          ],
          "cost": 10000,
          "character": "Orisa",
          "id": "i_129"
        },
        {
          "name": "3D-PRINTED LANCE",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Energy Javelin]</b> cooldown is reduced by <b>15%</b>, but each use generates <b>25</b> <b>[Heat]</b>."
            }
          ],
          "cost": 11000,
          "character": "Orisa",
          "id": "i_130"
        },
        {
          "name": "OLADELE-COPTER BLADES",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "While using <b>[Javelin Spin]</b>, gain free flight and <b>20%</b> Move Speed."
            }
          ],
          "cost": 12000,
          "character": "Orisa",
          "id": "i_131"
        },
        {
          "name": "GRYPHON GLIDER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "ALS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "You can now fly during <b>[Charge]</b>."
            }
          ],
          "cost": 10000,
          "character": "Reinhardt",
          "id": "i_132"
        },
        {
          "name": "ROCKET STRIKE",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "Fire Strike Projectile Speed",
              "value": "25%"
            }
          ],
          "cost": 10000,
          "character": "Reinhardt",
          "id": "i_133"
        },
        {
          "name": "SUPERCONDUCTOR",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "[Barrier] Duration",
              "value": "40%"
            }
          ],
          "cost": 10000,
          "character": "Zarya",
          "id": "i_134"
        },
        {
          "name": "LYNX'S DATADRIVE",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Casting <b>[Projected Barrier]</b> on an ally refunds <b>20%</b> of <b>[Barrier]</b> Cooldown"
            }
          ],
          "cost": 10000,
          "character": "Zarya",
          "id": "i_135"
        },
        {
          "name": "INFRARED LENSES",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Deal <b>20%</b> increased damage to Burning enemies."
            }
          ],
          "cost": 10000,
          "character": "Ashe",
          "id": "i_136"
        },
        {
          "name": "STACKED STICKS",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "[Dynamite] Explosion Radius",
              "value": "40%"
            }
          ],
          "cost": 10000,
          "character": "Ashe",
          "id": "i_137"
        },
        {
          "name": "BUILD-A-BLAST BUCKSHOT",
          "attributes": [
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Coach Gun]</b> has <b>50%</b> increased self knockback."
            }
          ],
          "cost": 10000,
          "character": "Ashe",
          "id": "i_138"
        },
        {
          "name": "IMPROVISED DYNAMITE",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            },
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Flashbang]</b> explosion radius is increased by <b>50%</b>."
            }
          ],
          "cost": 11000,
          "character": "Cassidy",
          "id": "i_139"
        },
        {
          "name": "CLEAN SWEEP",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "ALS",
              "value": "15%"
            },
            {
              "type": "[Swift Strike] Width",
              "value": "50%"
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_140"
        },
        {
          "name": "DEFLECTING DASH",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "During <b>[Swift Strike]</b>, deflect incoming projectiles toward your reticle."
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_141"
        },
        {
          "name": "STURDY SNOWFORT",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Ability Power is increased by <b>5%</b> per each spawned Ice Pillars."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_142"
        },
        {
          "name": "ECOPOINT CRYOBED",
          "attributes": [
            {
              "type": "description",
              "value": "On near death, go into <b>[Cryo-Freeze]</b> and gain <b>15%</b> Ultimate Charge. Can happen once every round."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_143"
        },
        {
          "name": "ICY VEINS",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Blizzard]</b> deals <b>100%</b> increased base damage."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_144"
        },
        {
          "name": "NIGHTCREEPER",
          "attributes": [
            {
              "type": "MS",
              "value": "10%"
            },
            {
              "type": "[Shadow Step] Cast Speed",
              "value": "30%"
            },
            {
              "type": "description",
              "value": "Using <b>[Wraith Form]</b> reduces the cooldown of <b>[Shadow Step]</b> by <b>2s</b>."
            }
          ],
          "cost": 9500,
          "character": "Reaper",
          "id": "i_145"
        },
        {
          "name": "WREATH OF RUIN",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            },
            {
              "type": "[Death Blossom] Radius",
              "value": "25%"
            },
            {
              "type": "Move Speed during [Death Blossom]",
              "value": "20%"
            }
          ],
          "cost": 10000,
          "character": "Reaper",
          "id": "i_146"
        },
        {
          "name": "CROWD CONTROL",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Death Blossom]</b> gains <b>5%</b> Ability Power for each enemy within its range."
            }
          ],
          "cost": 11000,
          "character": "Reaper",
          "id": "i_147"
        },
        {
          "name": "ENDGAME EQUALIZER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "When you spend your Ultimate Charge, reset all cooldowns. While <b>[Tactical Visor]</b> is active, gain <b>20%</b> Cooldown Reduction."
            }
          ],
          "cost": 10000,
          "character": "Soldier: 76",
          "id": "i_148"
        },
        {
          "name": "RAPID RESPONSE RADIUS",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "Biotic Field Radius",
              "value": "40%"
            },
            {
              "type": "description",
              "value": "<b>[Biotic Field]</b> heals allies below <b>50%</b> Life <b>10%</b> more."
            }
          ],
          "cost": 10000,
          "character": "Soldier: 76",
          "id": "i_149"
        },
        {
          "name": "LETHAL DOSE",
          "attributes": [
            {
              "type": "ALS",
              "value": "50%"
            },
            {
              "type": "description",
              "value": "<b>[Sleep Dart]</b> direct hit deals <b class=\\"stat-ap\\">100</b> bonus damage."
            }
          ],
          "cost": 9000,
          "character": "Ana",
          "id": "i_150"
        },
        {
          "name": "CLUSTER CORE",
          "attributes": [
            {
              "type": "ALS",
              "value": "25%"
            },
            {
              "type": "description",
              "value": "<b>[Biotic Grenade]</b> cooldown is reduced by <b>2s</b> for each target it hits."
            }
          ],
          "cost": 10000,
          "character": "Ana",
          "id": "i_151"
        },
        {
          "name": "TRANQUILIZER",
          "attributes": [
            {
              "type": "description",
              "value": "<b>[Sleep Dart]</b> gains: <ul><li><b>500%</b> Collision Size</li><li><b>100%</b> Projectile Speed</li><li><b>20%</b> <b>Sleep</b> Duration</li></ul>"
            }
          ],
          "cost": 10000,
          "character": "Ana",
          "id": "i_152"
        },
        {
          "name": "GRENADIUS PIN",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            },
            {
              "type": "[Biotic Grenade] Radius",
              "value": "30%"
            }
          ],
          "cost": 12000,
          "character": "Ana",
          "id": "i_153"
        },
        {
          "name": "PULSTAR DESTROYERS",
          "attributes": [
            {
              "type": "ALS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Pulsar Torpedoes]</b> explode on hit, dealing <b class=\\"stat-ap\\">20</b> damage."
            }
          ],
          "cost": 10000,
          "character": "Juno",
          "id": "i_154"
        },
        {
          "name": "SOLAR SHIELDING",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Allies affected by <b>[Hyper Ring]</b> restore <b>25</b> Shields every Is."
            }
          ],
          "cost": 10000,
          "character": "Juno",
          "id": "i_155"
        },
        {
          "name": "RED PROMISE REGULATOR",
          "attributes": [
            {
              "type": "Shields",
              "value": "50"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "When you use <b>[Orbital Ray]</b>, reset your cooldowns."
            }
          ],
          "cost": 10000,
          "character": "Juno",
          "id": "i_156"
        },
        {
          "name": "DONUT DELIVERY",
          "attributes": [
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "<b>[Swift Step]</b> heals nearby allies by <b class=\\"stat-ap\\">80</b> Life over <b>2s</b>."
            }
          ],
          "cost": 10000,
          "character": "Kiriko",
          "id": "i_157"
        },
        {
          "name": "OUR BIKES",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Allies affected by <b>[Kitsune Rush]</b> are healed for <b class=\\"stat-ap\\">80</b> every Is."
            }
          ],
          "cost": 10000,
          "character": "Kiriko",
          "id": "i_158"
        },
        {
          "name": "TALISMAN OF VELOCITY",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Protection Suzu]</b> grants <b>25%</b> Attack Speed and <b>25%</b> Move Speed for <b>4s</b>."
            }
          ],
          "cost": 10000,
          "character": "Kiriko",
          "id": "i_159"
        },
        {
          "name": "AIRWAVES",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Sound Barrier]</b> effectiveness is increased by <b>25%</b> for every Is <b>[Sound Barrier]</b> is channeled, up to <b>50%</b>."
            }
          ],
          "cost": 10000,
          "character": "Lúcio",
          "id": "i_160"
        },
        {
          "name": "ALL-OUT AUDITIVA",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "[Ampt It Up] Duration",
              "value": "25%"
            }
          ],
          "cost": 11000,
          "character": "Lúcio",
          "id": "i_161"
        },
        {
          "name": "RESURRECTION RANGEFINDER",
          "attributes": [
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "[Resurrection] Range",
              "value": "75%"
            }
          ],
          "cost": 10000,
          "character": "Mercy",
          "id": "i_162"
        },
        {
          "name": "ANGELIC ACROBATICS",
          "attributes": [
            {
              "type": "Guardian Angel Move Speed",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "[Guardian Angell's cooldown starts as soon as you jump or crouch."
            }
          ],
          "cost": 10000,
          "character": "Mercy",
          "id": "i_163"
        },
        {
          "name": "COALEGION",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Allies healed by <b>[Coalescence]</b> deal <b>15%</b> increased damage."
            }
          ],
          "cost": 10000,
          "character": "Moira",
          "id": "i_164"
        },
        {
          "name": "EXTENDRILS",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "[Biotic Orb] Tendril Range",
              "value": "30%"
            }
          ],
          "cost": 11000,
          "character": "Moira",
          "id": "i_165"
        },
        {
          "name": "MAGNETIC MAELSTROM",
          "attributes": [
            {
              "type": "AP",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Bola Shot]</b> pulls in nearby enemies even when it misses with <b>50%</b> <b>reduced</b> pull strength."
            }
          ],
          "cost": 10000,
          "character": "Freja"
        }
      ]
    },
    "survival": {
      "common": [
        {
          "name": "ADRENALINE SHOT",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Health Packs grant <b>20%</b> Move Speed for <b>5s</b> and <b>50 Overhealth</b>."
            }
          ],
          "cost": 1500,
          "id": "i_166"
        },
        {
          "name": "ELECTROLYTES",
          "attributes": [
            {
              "type": "description",
              "value": "At the start of the round and every time you respawn, gain 100 unrecoverable <b>Overhealth</b>."
            }
          ],
          "cost": 1500,
          "id": "i_167"
        },
        {
          "name": "FIELD RATIONS",
          "attributes": [
            {
              "type": "description",
              "value": "While on the Objective, restore <b>8</b> Life every 1s."
            }
          ],
          "cost": 1000,
          "id": "i_168"
        },
        {
          "name": "RUNNING SHOES",
          "attributes": [
            {
              "type": "description",
              "value": "At the start of the round and when you first respawn, gain <b>20%</b> Move Speed for IOS while out of combat."
            }
          ],
          "cost": 1000,
          "id": "i_169"
        },
        {
          "name": "ARMORED VEST",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            }
          ],
          "cost": 1500,
          "id": "i_170"
        },
        {
          "name": "FIRST AID KIT",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Reduce the time before your Life begins regenerating by <b>33%</b>."
            }
          ],
          "cost": 1500,
          "id": "i_171"
        },
        {
          "name": "HEARTBEAT SENSOR",
          "attributes": [
            {
              "type": "MS",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Enemies below <b>30%</b> Life are <b>Revealed</b> to you."
            }
          ],
          "cost": 1500,
          "id": "i_172"
        },
        {
          "name": "SIPHON GLOVES",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "<b>[Quick Melee]</b> damage heals for <b>25</b> Life."
            }
          ],
          "cost": 1500,
          "id": "i_173"
        }
      ],
      "rare": [
        {
          "name": "REINFORCED TITANIUM",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While you have Shields, take <b>15%</b> reduced Ability Damage."
            }
          ],
          "cost": 3750,
          "id": "i_174"
        },
        {
          "name": "CUSHIONED PADDING",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "Incoming Negative Effect Duration",
              "value": "-40%"
            },
            {
              "type": "description",
              "value": "When affected by <b>Stun</b>, <b>Sleep</b> , or <b>Hinder</b>, restore <b>10%</b> of your max Life over <b>3s</b>."
            }
          ],
          "cost": 4000,
          "id": "i_175"
        },
        {
          "name": "IRONCLAD EXHAUST PORTS",
          "attributes": [
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "When you use an ability, gain <b>25 Overhealth</b> for <b>3s</b>."
            }
          ],
          "cost": 4000,
          "id": "i_176"
        },
        {
          "name": "VISHKAR CONDENSOR",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Convert <b>100</b> Health into Shields."
            }
          ],
          "cost": 4000,
          "id": "i_177"
        },
        {
          "name": "VITAL-E-TEE",
          "attributes": [
            {
              "type": "Armor",
              "value": "10"
            },
            {
              "type": "description",
              "value": "Convert 100 Health into Armor."
            }
          ],
          "cost": 4000,
          "id": "i_178"
        },
        {
          "name": "CRUSADER HYDRAULICS",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While you have Armor, take <b>10%</b> reduced Weapon Damage."
            }
          ],
          "cost": 4500,
          "id": "i_179"
        },
        {
          "name": "IRON EYES",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "description",
              "value": "You take <b>20%</b> reduced damage from Critical Hits."
            }
          ],
          "cost": 4500,
          "id": "i_180"
        },
        {
          "name": "MEKA Z-SERIES",
          "attributes": [
            {
              "type": "Health",
              "value": "8%"
            },
            {
              "type": "Armor",
              "value": "8%"
            },
            {
              "type": "Shields",
              "value": "8%"
            }
          ],
          "cost": 5000,
          "id": "i_181"
        },
        {
          "name": "GALVANIZED CORE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "[Boosters] Duration",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "character": "D.VA",
          "id": "i_182"
        },
        {
          "name": "PLOT ARMOR",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While <b>[Defense Matrix]</b> is active, gain <b>65%</b> damage reduction against beams."
            }
          ],
          "cost": 4000,
          "character": "D.VA",
          "id": "i_183"
        },
        {
          "name": "SOLO SPEC",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "When you mitigate damage with <b>[Defense Matrix]</b>, gain Shields equal to <b>10%</b> of the damage mitigated, up to <b>100</b>. Resets when your <b>[Mech]</b> is destroyed."
            }
          ],
          "cost": 4000,
          "character": "D.VA",
          "id": "i_184"
        },
        {
          "name": "DEZ'S DAMAGE DAMPENERS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "Knockback Resist",
              "value": "50%"
            },
            {
              "type": "description",
              "value": "When knocked back, gain <b>25%</b> increased Move Speed for <b>3s</b>."
            }
          ],
          "cost": 4000,
          "character": "Junker Queen",
          "id": "i_185"
        },
        {
          "name": "REBELLIOUS SPIRIT",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "When <b>[Wound]</b> gets removed instead of expiring, gain <b>10%</b> of Max Life as Overhealth, up to <b>150</b>."
            }
          ],
          "cost": 4000,
          "character": "Junker Queen",
          "id": "i_186"
        },
        {
          "name": "SLICING SPREE",
          "attributes": [
            {
              "type": "MS",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "While within 12m of an enemy with a <b>[Wound]</b>, gain <b>5%</b> Move Speed and <b>10%</b> Attack Speed."
            }
          ],
          "cost": 4000,
          "character": "Junker Queen",
          "id": "i_187"
        },
        {
          "name": "CHARGED CHASSIS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "<b>[Fortify]</b> grants additional <b>Overhealth</b> equal to <b>10%</b> of your max Life."
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_188"
        },
        {
          "name": "SIPHONIC SPEAR",
          "attributes": [
            {
              "type": "description",
              "value": "When you deal damage with <b>[Energy Javelin]</b>, heal <b>10%</b> of your max Life over <b>3s</b>."
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_189"
        },
        {
          "name": "SOLAR REGENERGY",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "After using an ability, restore Armor equal to <b>3%</b> of your max Life."
            }
          ],
          "cost": 4000,
          "character": "Orisa",
          "id": "i_190"
        },
        {
          "name": "CRUSADER'S CURE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Using <b>[Charge]</b> cleanses all negative effects."
            }
          ],
          "cost": 3750,
          "character": "Reinhardt",
          "id": "i_191"
        },
        {
          "name": "OVERCLOCKED BARRIER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "[Barrier Field] Health",
              "value": "20%"
            },
            {
              "type": "[Barrier Field] Size",
              "value": "20%"
            }
          ],
          "cost": 4000,
          "character": "Reinhardt",
          "id": "i_192"
        },
        {
          "name": "ROCKET BOOTS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Holding <b>crouch</b> increases the height of your next jump by up to <b>200%</b>."
            }
          ],
          "cost": 4000,
          "character": "Reinhardt",
          "id": "i_193"
        },
        {
          "name": "BLASTPROOF BOOTS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "MS",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[Particle Cannon]</b>'s secondary fire self knockback is increased by <b>100%</b> and no longer damages yourself."
            }
          ],
          "cost": 3750,
          "character": "Zarya",
          "id": "i_194"
        },
        {
          "name": "JUMPER CABLES",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "After using a <b>[Barrier]</b>, start regenerating Shields instantly."
            }
          ],
          "cost": 4000,
          "character": "Zarya",
          "id": "i_195"
        },
        {
          "name": "PROTEIN SHAKE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "MD",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "While <b>[Particle Barrier]</b> is active, become unstoppable and <b>[Quick Melee]</b> knocks back enemies."
            }
          ],
          "cost": 4000,
          "character": "Zarya",
          "id": "i_196"
        },
        {
          "name": "SILVER SPURS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "After using <b>[Coach Gun]</b>, gain <b>20%</b> Move Speed for <b>3s</b>."
            }
          ],
          "cost": 4000,
          "character": "Ashe",
          "id": "i_197"
        },
        {
          "name": "WANTED POSTER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "<b>[Deadeye]</b> eliminations reward extra <b>500 Stadium Cash</b> each."
            }
          ],
          "cost": 4000,
          "character": "Cassidy",
          "id": "i_198"
        },
        {
          "name": "ANTI-BEAM COATING",
          "attributes": [
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "AS",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[Deflect]</b> now blocks <b>Beam</b> attacks."
            }
          ],
          "cost": 4000,
          "character": "Genji",
          "id": "i_199"
        },
        {
          "name": "EQUILIBRIUM GEAR",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While climbing, heal <b>5%</b> of your Life every <b>1s</b>."
            }
          ],
          "cost": 4000,
          "character": "Genji",
          "id": "i_200"
        },
        {
          "name": "SPARROWHAWK FEATHER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Gain an additional jump."
            }
          ],
          "cost": 4000,
          "character": "Genji",
          "id": "i_201"
        },
        {
          "name": "COLDSPOT",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Primary fire and <b>[Blizzard]</b> can remove burn."
            }
          ],
          "cost": 4000,
          "character": "Mei",
          "id": "i_202"
        },
        {
          "name": "MEICICLE",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "<b>[Cryo-Freeze]</b> duration is increased by <b>25%</b>."
            }
          ],
          "cost": 4000,
          "character": "Mei",
          "id": "i_203"
        },
        {
          "name": "DEVASTATION",
          "attributes": [
            {
              "type": "ALS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Each <b>[Death Blossom]</b> elimination increases your Health by <b>25</b> until the end of the round, up to <b>100</b> Health."
            }
          ],
          "cost": 4000,
          "character": "Reaper",
          "id": "i_204"
        },
        {
          "name": "NEVERFROST",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Reduce effectiveness of enemy slows by <b>50%</b>."
            }
          ],
          "cost": 4000,
          "character": "Reaper",
          "id": "i_205"
        },
        {
          "name": "POCKET MIST",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While below <b>50%</b> Life, gain <b>20%</b> Move Speed."
            }
          ],
          "cost": 4000,
          "character": "Reaper",
          "id": "i_206"
        },
        {
          "name": "COMPRESSION FATIGUES",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "5%"
            },
            {
              "type": "[Sprint] Move Speed",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "character": "Soldier: 76",
          "id": "i_207"
        },
        {
          "name": "DASH BOOTS",
          "attributes": [
            {
              "type": "MS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Jumping in mid-air will dash you a short distance."
            }
          ],
          "cost": 4000,
          "character": "Ana",
          "id": "i_208"
        },
        {
          "name": "PERFECTED FORMULA",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "[Nano Boost] Duration",
              "value": "15%"
            }
          ],
          "cost": 4000,
          "character": "Ana",
          "id": "i_209"
        },
        {
          "name": "I.V. DRIP",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While affected by <b>[Biotic Grenade]</b>, Ana gains <b class=\\"stat-ap\\">150</b> <b>Overhealth</b>."
            }
          ],
          "cost": 4000,
          "character": "Ana",
          "id": "i_210"
        },
        {
          "name": "BOOSTED ROCKETS",
          "attributes": [
            {
              "type": "Shields",
              "value": "25"
            },
            {
              "type": "[Glide Boost] Duration",
              "value": "25%"
            }
          ],
          "cost": 4000,
          "character": "Juno",
          "id": "i_211"
        },
        {
          "name": "KITSUNE KICKS",
          "attributes": [
            {
              "type": "MS",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Gain the ability to <b>[Double Jump]</b>."
            }
          ],
          "cost": 4000,
          "character": "Kiriko",
          "id": "i_212"
        },
        {
          "name": "SPEED SKATES",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "After <b>[Wallriding]</b>, gain <b>30%</b> Move Speed for <b>2s</b>."
            }
          ],
          "cost": 3750,
          "character": "Lúcio",
          "id": "i_213"
        },
        {
          "name": "AERODYNAMIC FEATHERS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While affected by <b>[Angelic Descent]</b>, continuously gain <b>10%</b> Move Speed every Is up to <b>60%</b>."
            }
          ],
          "cost": 4000,
          "character": "Mercy",
          "id": "i_214"
        },
        {
          "name": "ANGELEISURE WEAR",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While affected by <b>[Angelic Descent]</b> or <b>[Guardian Angel]</b>, heal <b>3%</b> of your Life every IS."
            }
          ],
          "cost": 4000,
          "character": "Mercy",
          "id": "i_215"
        },
        {
          "name": "ABYSS BOOTS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While using <b>[Fade]</b>, you jump <b>30%</b> higher."
            }
          ],
          "cost": 4000,
          "character": "Moira",
          "id": "i_216"
        },
        {
          "name": "AEROWEAVE CLOAK",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "[Take Aim] Slowed Momentum Duration",
              "value": "100%"
            },
            {
              "type": "description",
              "value": "While momentum is slowed by <b>[Take Aim]</b>, restore <b>5%</b> Max Life every <b>1s</b>."
            }
          ],
          "cost": 4000,
          "character": "Freja"
        },
        {
          "name": "HUNTER'S MARK",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Enemies with a Bounty of <b>750</b> or more are revealed to you within 40m. Eliminating them grants <b>250</b> additional <b>Stadium Cash</b>."
            }
          ],
          "cost": 4000,
          "character": "Freja"
        },
        {
          "name": "TOURNIQUET",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "After using <b>[Updraft]</b>, reset <b>[Quick Dash]</b> and gain <b>50 Overhealth</b> for <b>5s</b>."
            }
          ],
          "cost": 4500,
          "character": "Freja"
        }
      ],
      "epic": [
        {
          "name": "GENETICIST'S VIAL",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "The first time you would die each round, revive instead with <b>250</b> Life after <b>3s</b>."
            }
          ],
          "cost": 9000,
          "id": "i_217"
        },
        {
          "name": "BLOODBOUND",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "The last enemy to deal a final blow to you is <b>Revealed</b> when nearby. Deal <b>10%</b> more damage to them and take <b>10%</b> reduced damage from them."
            }
          ],
          "cost": 9000,
          "id": "i_218"
        },
        {
          "name": "DIVINE INTERVENTION",
          "attributes": [
            {
              "type": "Shields",
              "value": "50"
            },
            {
              "type": "description",
              "value": "When you take more than <b>100</b> damage at once, restore <b>15%</b> of damage taken and start regenerating your Shields."
            }
          ],
          "cost": 9500,
          "id": "i_219"
        },
        {
          "name": "GLOOMGAUNTLET",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "MD",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "<b>[Melee]</b> Damage grants <b>10%</b> Move Speed and restores <b>5%</b> of Max Life over <b>2s</b>."
            }
          ],
          "cost": 10000,
          "id": "i_220"
        },
        {
          "name": "MARTIAN MENDER",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "CR",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Restore <b>3%</b> of your Life every <b>1s</b>."
            }
          ],
          "cost": 10000,
          "id": "i_221"
        },
        {
          "name": "PHANTASMIC FLUX",
          "attributes": [
            {
              "type": "WP",
              "value": "10%"
            },
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "WPLS",
              "value": "15%"
            },
            {
              "type": "ALS",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "While at full Life, Lifesteal grants up to <b>100 Overhealth</b>."
            }
          ],
          "cost": 10000,
          "id": "i_222"
        },
        {
          "name": "RÜSTUNG VON WILHELM",
          "attributes": [
            {
              "type": "Health",
              "value": "15%"
            },
            {
              "type": "Armor",
              "value": "15%"
            },
            {
              "type": "Shields",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "While below <b>30%</b> Life, gain <b>10%</b> <b>Damage Reduction</b>."
            }
          ],
          "cost": 10000,
          "id": "i_223"
        },
        {
          "name": "VANADIUM INJECTION",
          "attributes": [
            {
              "type": "Shields",
              "value": "50"
            },
            {
              "type": "description",
              "value": "While at <b>100%</b> <b>Ultimate Charge</b>, gain: <ul><li><b>50</b> Health</li><li><b>10%</b> Weapon Power</li><li><b>10%</b> Ability Power</li><li><b>10%</b> Attack Speed</li><li><b>10%</b> Cooldown Reduction</li><li><b>10%</b> Move Speed</li></ul>"
            }
          ],
          "cost": 10000,
          "id": "i_224"
        },
        {
          "name": "NEBULA CONDUIT",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "WP",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "Prevent <b>15%</b> of incoming damage and instead take that prevented damage over <b>3s</b>."
            }
          ],
          "cost": 11000,
          "id": "i_225"
        },
        {
          "name": "OGUNDIMU REDUCTION FIELD",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "description",
              "value": "When you take damage, gain 0.<b>5%</b> <b>Damage Reduction</b> for Is, stacking up to 20 times."
            }
          ],
          "cost": 11000,
          "id": "i_226"
        },
        {
          "name": "APM AMP",
          "attributes": [
            {
              "type": "Shields",
              "value": "50"
            },
            {
              "type": "description",
              "value": "When you use <b>[Boosters]</b>, other allies within <b>16m</b> gain <b>25%</b> Move Speed for <b>2s</b>."
            }
          ],
          "cost": 9000,
          "character": "D.VA",
          "id": "i_227"
        },
        {
          "name": "CHIP-DAMAGE DIVERTER",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "When you deal damage to Barriers while in your <b>[Mech]</b>, gain Shields equal to <b>10%</b> of the damage dealt, up to <b>200</b>. Resets when your <b>[Mech]</b> is destroyed."
            }
          ],
          "cost": 10000,
          "character": "D.VA",
          "id": "i_228"
        },
        {
          "name": "SINGIJEON'S PULSE PLATING",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "Gain <b>10%</b> of damage mitigated by <b>[Defense Matrix]</b> as Ultimate Charge."
            }
          ],
          "cost": 10000,
          "character": "D.VA",
          "id": "i_229"
        },
        {
          "name": "NANO COLA NITROUS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "When you eject from your <b>[Mech]</b>, gain <b>5%</b> increased max Health and gain <b>[Nano Boost]</b> for <b>4s</b>."
            }
          ],
          "cost": 11000,
          "character": "D.VA",
          "id": "i_230"
        },
        {
          "name": "SCAV SCRAPS",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "description",
              "value": "<b>[Carnage]</b> and <b>[Jagged Blade]</b> impact damage grants Overhealth equal to <b>40%</b> of damage dealt."
            }
          ],
          "cost": 10000,
          "character": "Junker Queen",
          "id": "i_231"
        },
        {
          "name": "THICK SKULL",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "description",
              "value": "While casting <b>[Rampage]</b> or <b>[Carnage]</b>, gain <b>75%</b> <b>Damage Reduction</b>."
            }
          ],
          "cost": 10000,
          "character": "Junker Queen",
          "id": "i_232"
        },
        {
          "name": "UNDYING LOYALTY",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "Commanding Shout Overhealth",
              "value": "30%"
            },
            {
              "type": "description",
              "value": "Allies affected by <b>[Commanding Shout]</b> are healed for <b>5%</b> of Junker Queen's life every second."
            }
          ],
          "cost": 10000,
          "character": "Junker Queen",
          "id": "i_233"
        },
        {
          "name": "HOLLAGRAM HELMET",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "description",
              "value": "When you use <b>[Fortify]</b>, allies within line of sight gain <b>Unstoppable</b> for <b>2s</b>."
            }
          ],
          "cost": 10000,
          "character": "Orisa",
          "id": "i_234"
        },
        {
          "name": "INFUSION GENERATOR",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "Increase <b>[Barrier Field]</b> Health by <b>100%</b> of your max Life."
            }
          ],
          "cost": 10000,
          "character": "Reinhardt",
          "id": "i_235"
        },
        {
          "name": "PHOENIX PROTOCOL",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "<b>[Barrier Field]</b> regenerates <b>50%</b> faster and begins regenerating <b>50%</b> sooner after being destroyed."
            }
          ],
          "cost": 10000,
          "character": "Reinhardt",
          "id": "i_236"
        },
        {
          "name": "FIRESTARTER",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "Your <b>Burning</b> effects gain <b>35%</b> Lifesteal."
            }
          ],
          "cost": 10000,
          "character": "Ashe",
          "id": "i_237"
        },
        {
          "name": "B.O.B WIRE DEFENSE",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "Armor",
              "value": "25"
            },
            {
              "type": "description",
              "value": "When <b>[B.O.B.]</b> finishes charging, <b>[B.O.B.]</b> gains 300 Armor."
            }
          ],
          "cost": 10000,
          "character": "Ashe",
          "id": "i_238"
        },
        {
          "name": "FRANKIE'S FIXER",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "Heal <b class=\\"stat-ap\\">10</b> Life for each Ammo loaded using <b>[Combat Roll]</b>."
            }
          ],
          "cost": 10000,
          "character": "Cassidy",
          "id": "i_239"
        },
        {
          "name": "EAGLE EYE",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "Take <b>25%</b> less damage from enemies farther than <b>12m</b>."
            }
          ],
          "cost": 12000,
          "character": "Cassidy",
          "id": "i_240"
        },
        {
          "name": "SLICY COOLANT",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "CR",
              "value": "5%"
            },
            {
              "type": "[Deflect] Duration",
              "value": "+1s"
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_241"
        },
        {
          "name": "TRANSFERENCE DELTA",
          "attributes": [
            {
              "type": "Ultimate Cost Reduction",
              "value": "15%"
            },
            {
              "type": "description",
              "value": "Convert <b>100</b> Health into Armor. Using <b>[Dragonblade]</b> heals your Armor fully."
            }
          ],
          "cost": 10000,
          "character": "Genji",
          "id": "i_242"
        },
        {
          "name": "ICE SHEET",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "<b>[Ice Wall]</b> Duration is increased by <b>1s</b> and health is increased by <b>100%</b>."
            }
          ],
          "cost": 10000,
          "character": "Mei",
          "id": "i_243"
        },
        {
          "name": "WRETCHED WINGS",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While using <b>[Wraith Form]</b>, gain the ability to fly and gain <b>20%</b> Move Speed."
            }
          ],
          "cost": 10000,
          "character": "Reaper",
          "id": "i_244"
        },
        {
          "name": "DAUNTLESS DRAUGHT",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "Move Speed during [Wraith Form]",
              "value": "15%"
            },
            {
              "type": "[Wraith Form] Duration",
              "value": "33%"
            }
          ],
          "cost": 10000,
          "character": "Reaper",
          "id": "i_245"
        },
        {
          "name": "CRIMSON CLOAK",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "AP",
              "value": "10%"
            },
            {
              "type": "description",
              "value": "Using <b>[Death Blossom]</b> grants you <b>Overhealth</b> equal to <b>15%</b> of your max Life."
            }
          ],
          "cost": 11000,
          "character": "Reaper",
          "id": "i_246"
        },
        {
          "name": "IRON LUNG",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "While using <b>[Sprint]</b>, gain <b>Overhealth</b> equal to <b>5%</b> of your max Life every <b><b>1s</b></b>, up to <b>25%</b>, for <b>5s</b>."
            }
          ],
          "cost": 10000,
          "character": "Soldier: 76",
          "id": "i_247"
        },
        {
          "name": "EYE OF HORUS",
          "attributes": [
            {
              "type": "Shields",
              "value": "50"
            },
            {
              "type": "description",
              "value": "<b>[Nano Boost]</b> can target allies through walls and its range is increased to <b>60m</b>."
            }
          ],
          "cost": 9000,
          "character": "Ana",
          "id": "i_248"
        },
        {
          "name": "FORTI-GLIDE",
          "attributes": [
            {
              "type": "Shields",
              "value": "75"
            },
            {
              "type": "description",
              "value": "During <b>[Glide Boost]</b>, gain <b>10%</b> Damage Reduction."
            }
          ],
          "cost": 10000,
          "character": "Juno",
          "id": "i_249"
        },
        {
          "name": "SUNBURST SERUM",
          "attributes": [
            {
              "type": "Shields",
              "value": "75"
            },
            {
              "type": "description",
              "value": "<b>[Orbital Ray]</b> gains <b>25%</b> increased healing."
            }
          ],
          "cost": 10000,
          "character": "Juno",
          "id": "i_250"
        },
        {
          "name": "GODDESS'S AURA",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "After using <b>[Swift Step]</b>, gain <b class=\\"stat-ap\\">100</b> <b>Overhealth</b> for <b>4s</b>."
            }
          ],
          "cost": 10000,
          "character": "Kiriko",
          "id": "i_251"
        },
        {
          "name": "TALISMAN OF LIFE",
          "attributes": [
            {
              "type": "AP",
              "value": "20%"
            },
            {
              "type": "description",
              "value": "<b>[Protection Suzu]</b> grants <b class=\\"stat-ap\\">100</b> <b>Overhealth</b> for <b>5s</b>."
            }
          ],
          "cost": 11000,
          "character": "Kiriko",
          "id": "i_252"
        },
        {
          "name": "HIP HOP",
          "attributes": [
            {
              "type": "Health",
              "value": "25"
            },
            {
              "type": "description",
              "value": "After <b>[Wallriding]</b>, gain an additional jump while airborne."
            }
          ],
          "cost": 9000,
          "character": "Lúcio",
          "id": "i_253"
        },
        {
          "name": "BLESSED BOOSTERS",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "Your launch velocity is increased by <b>25%</b> when canceling <b>[Guardian Angel]</b> with crouch or jump."
            }
          ],
          "cost": 9000,
          "character": "Mercy",
          "id": "i_254"
        },
        {
          "name": "CHAIN EVOKER",
          "attributes": [
            {
              "type": "Armor",
              "value": "50"
            },
            {
              "type": "[Caduceus Staff] Damage Boost",
              "value": "5%"
            },
            {
              "type": "Ultimate Charge from Damage Boost",
              "value": "15%"
            }
          ],
          "cost": 10000,
          "character": "Mercy",
          "id": "i_255"
        },
        {
          "name": "TOXIN TIPS",
          "attributes": [
            {
              "type": "Health",
              "value": "50"
            },
            {
              "type": "description",
              "value": "<b>[Take Aim]</b> bolt sticks and explosions slow enemies by <b>30%</b>, but takes Is longer to explode."
            }
          ],
          "cost": 9000,
          "character": "Freja"
        }
      ]
    },
    "powers": {
      "D.VA": [
        {
          "name": "FOCUSED FUSION",
          "description": "<b>[Fusion Cannon]</b>'s spread is reduced by <b>50%</b> and damage falloff range is <b>20m</b> farther.",
          "id": "p_0"
        },
        {
          "name": "LEGENDARY LOADOUT",
          "description": "<b>[Micro Missiles]</b> are replaced with <b>6 Heavy Rockets</b>, which deal <b>350%</b> more explosive damage and have <b>100%</b> increased radius.",
          "id": "p_1"
        },
        {
          "name": "OVERSTOCKED",
          "description": "Gain <b>1</b> extra charge of <b>[Micro Missiles]</b>.",
          "id": "p_2"
        },
        {
          "name": "COUNTERMEASURES",
          "description": "When you mitigate <b>100</b> damage with <b>[Defense Matrix]</b>, automatically fire <b>2</b> <b>[Micro Missiles]</b>.",
          "id": "p_3"
        },
        {
          "name": "FACETANKING",
          "description": "<b>[Defense Matrix]</b> heals you for <b>30%</b> of the damage it blocks.",
          "id": "p_4"
        },
        {
          "name": "ULTRAWIDE MATRIX",
          "description": "Increase the size of <b>[Defense Matrix]</b> by <b>50%</b> and its duration by <b>25%</b>.",
          "id": "p_5"
        },
        {
          "name": "IGNITION BURST",
          "description": "<b>[Boosters]</b> leave a trail of lava that deals <b class=\\"stat-ap\\">80</b> damage every <b>1s</b>.",
          "id": "p_6"
        },
        {
          "name": "MEKA PUNCH",
          "description": "While using <b>[Boosters]</b>, <b>[Quick Melee]</b> deals <b>75%</b> more damage. MEKA Punch eliminations reset the cooldown of <b>[Boosters]</b>.",
          "id": "p_7"
        },
        {
          "name": "STAT BOOST",
          "description": "During the first <b>2s</b> of <b>[Boosters]</b>, <b>[Defense Matrix]</b> recovers <b>125%</b> faster.",
          "id": "p_8"
        },
        {
          "name": "TOKKI SLAM",
          "description": "During <b>[Boosters]</b>, use crouch to slam the ground, dealing damage equal to <b>20%</b> of your max Armor and knocking up enemies hit.",
          "id": "p_9"
        },
        {
          "name": "EXPRESS DETONATION",
          "description": "<b>[Self-Destruct]</b> explodes <b>15%</b> faster.",
          "id": "p_10"
        },
        {
          "name": "PARTY PROTECTOR",
          "description": "When you use <b>[Self-Destruct]</b>, allies within <b>[Self-Destruct]</b> radius gain <b class=\\"stat-ap\\">250</b> <b>Overhealth</b> for <b>8s</b>.",
          "id": "p_11"
        }
      ],
      "Junker Queen": [
        {
          "name": "THRILL OF BATTLE",
          "description": "<b>[Adrenaline Rush]</b> also heals allies within <b>12m</b> for <b>50%</b> of the amount it heals you.",
          "id": "p_12"
        },
        {
          "name": "ROYAL BULLETS",
          "description": "<b>[Scattergun]</b> critical hits against targets within <b>15m</b> applies <b>[Wound]</b> for <b class=\\"stat-wp\\">50</b> damage over <b>3s</b>.",
          "id": "p_13"
        },
        {
          "name": "TWIST THE KNIFE",
          "description": "<b>[Scattergun]</b> critical hits extend the duration of all <b>[Wounds]</b> on the target by <b>1s</b>.",
          "id": "p_14"
        },
        {
          "name": "BLADE PARADE",
          "description": "Holding <b>[Jagged Blade]</b> charges it, increasing its damage by up to <b>100%</b> and causing it to knockback.",
          "id": "p_15"
        },
        {
          "name": "CUT 'EM, GRACIE!",
          "description": "Each enemy hit by <b>[Jagged Blade]</b> while it returns to you reduces its cooldown by 1s.",
          "id": "p_16"
        },
        {
          "name": "LET'S GO WIN",
          "description": "Eliminations reset the cooldown of <b>[Commanding Shout]</b>.",
          "id": "p_17"
        },
        {
          "name": "MERCILESS MAGNETISM",
          "description": "Using <b>[Commanding Shout]</b> causes your <b>[Jagged Blade]</b> to home to a target.",
          "id": "p_18"
        },
        {
          "name": "RECKONER'S ROAR",
          "description": "Using <b>[Commanding Shout]</b> <b>[Wounds]</b> enemies within <b>10m</b> for <b class=\\"stat-ap\\">30</b> damage over <b>3s</b>.",
          "id": "p_19"
        },
        {
          "name": "CHOP CHOP",
          "description": "<b>[Carnage]</b> gains an additional charge but its cooldown reduction per hit is reduced to 1s.",
          "id": "p_20"
        },
        {
          "name": "SOARING STONE",
          "description": "<b>[Carnage]</b> becomes a leaping strike if you jump during its cast time.",
          "id": "p_21"
        },
        {
          "name": "BLOODCRAZED",
          "description": "<b>[Rampage]</b> and <b>[Carnage]</b> gives <b>15%</b> of Max Life as Overhealth per hit.",
          "id": "p_22"
        },
        {
          "name": "BOW DOWN",
          "description": "<b>[Rampage]</b> now also knocks down enemies hit for <b>1.</b><b>5s</b>.",
          "id": "p_23"
        }
      ],
      "Orisa": [
        {
          "name": "SCORCHED EARTH",
          "description": "When you <b>[Overheat]</b>, apply <b>Burning</b> to enemies within <b>6m</b>, dealing damage equal to <b>20%</b> of your max Life over <b>5s</b>.",
          "id": "p_24"
        },
        {
          "name": "SHIELD DIVERGENCE",
          "description": "When you <b>[Overheat]</b>, deploy a <b>Barrier</b> with <b class=\\"stat-ap\\">600</b> Health in front.",
          "id": "p_25"
        },
        {
          "name": "ADVANCED THROWBOTICS",
          "description": "When you use <b>[Javelin Spin]</b>, launch an <b>[Energy Javelin]</b> with <b>50%</b> less damage.",
          "id": "p_26"
        },
        {
          "name": "HOT ROTATE-O",
          "description": "<b>[Javelin Spin]</b> gains <b>35%</b> Cooldown Reduction but now generates <b>[Heat]</b>.",
          "id": "p_27"
        },
        {
          "name": "SPYNSTEM UPDATE",
          "description": "<b>[Javelin Spin]</b> now deflects projectiles and grants <b>20%</b> of damage dealt from deflecting as Ultimate Charge.",
          "id": "p_28"
        },
        {
          "name": "FACTORY RESET",
          "description": "While <b>[Fortify]</b> is active, <b>[Javelin Spin]</b> and <b>[Energy Javelin]</b> gain <b>25%</b> Cooldown Reduction.",
          "id": "p_29"
        },
        {
          "name": "HOOVES OF STEEL",
          "description": "After <b>[Fortify]</b> ends, gain Shields equal to <b>50%</b> of the damage received during <b>[Fortify]</b>.\\n<br />\\nResets when you next use <b>[Fortify]</b>.",
          "id": "p_30"
        },
        {
          "name": "RESTORTIFY",
          "description": "While <b>[Fortify]</b> is active, heal for <b>5%</b> of your max Life every <b>1s</b>.",
          "id": "p_31"
        },
        {
          "name": "RIDE WITH ME",
          "description": "While <b>[Fortify]</b> is active, grant allies in line of sight <b>30%</b> Move Speed and <b>Overhealth</b> equal to <b>10%</b> of your max Life.",
          "id": "p_32"
        },
        {
          "name": "LASSOED",
          "description": "On impact, <b>[Energy Javelin]</b> will pull enemies within <b>4m</b> towards itself.",
          "id": "p_33"
        },
        {
          "name": "CENTRIPETAL CHARGE",
          "description": "<b>25%</b> Ultimate Cost Reduction.\\n<br/>\\nAfter using <b>[Terra Surge]</b>, reset your ability cooldowns.",
          "id": "p_34"
        },
        {
          "name": "SUPERCHARGER",
          "description": "When you use <b>[Terra Surge]</b>, drop a <b>[Supercharger]</b> that increases the damage of nearby allies by <b>25%</b> for <b>15s</b>.",
          "id": "p_35"
        }
      ],
      "Reinhardt": [
        {
          "name": "AMPLIFICATION BARRIER",
          "description": "Friendly projectiles that pass through your <b>[Barrier Field]</b> deal <b>15%</b> more damage.",
          "id": "p_36"
        },
        {
          "name": "BARRIER RECONSTRUCTION",
          "description": "When you deal damage with <b>[Rocket Hammer]</b> or <b>[Fire Strike]</b>, restore health to <b>[Barrier Field]</b> equal to <b>15%</b> of its max Health.",
          "id": "p_37"
        },
        {
          "name": "TO ME, MY FRIENDS!",
          "description": "While <b>[Barrier Field]</b> is active, allies within <b>5m</b> are healed equal to <b>4%</b> of your max Life every <b>1s</b>.",
          "id": "p_38"
        },
        {
          "name": "WILHELMWAGEN",
          "description": "While <b>[Barrier Field]</b> is deployed, you heal for <b>5%</b> of the damage it mitigates and gain <b>30%</b> Move Speed.",
          "id": "p_39"
        },
        {
          "name": "SHIELD STAMPEDE",
          "description": "<b>+</b><b>50%</b> <b>[Charge]</b> Knockback Power.\\nDuring <b>[Charge]</b>, automatically deploy <b>[Barrier Field]</b>.",
          "id": "p_40"
        },
        {
          "name": "VANGUARD",
          "description": "<b>[Charge]</b> grants nearby allies <b>Overhealth</b> equal to <b>10%</b> of your max Life and <b>20%</b> Move Speed for <b>3s</b>.",
          "id": "p_41"
        },
        {
          "name": "VROOM BOOM BOOM",
          "description": "During <b>[Charge]</b>, colliding with a wall triggers an explosion that deals <b>30%</b> of <b>[Charge]</b>'s pin damage.",
          "id": "p_42"
        },
        {
          "name": "BLAZING BLITZ",
          "description": "After using <b>[Earthshatter]</b>, every <b>[Rocket Hammer]</b> swing launches a <b>[Fire Strike]</b> for <b>4s</b>.",
          "id": "p_43"
        },
        {
          "name": "IMPACT BURST",
          "description": "<b>[Fire Strike]</b> triggers an explosion the first time it hits an enemy, dealing <b>15%</b> of its damage in a <b>3m</b> radius.",
          "id": "p_44"
        },
        {
          "name": "MAGMA STRIKE",
          "description": "If <b>[Fire Strike]</b> is cast twice within <b>2s</b>, the second strike leaves a trail of lava that Burns enemies for <b>50%</b> of <b>[Fire Strike]</b> damage.",
          "id": "p_45"
        },
        {
          "name": "FEELING THE BURN",
          "description": "Every 3rd <b>[Rocket Hammer]</b> swing applies Burn, dealing <b>30%</b> <b>[Rocket Hammer]</b> damage over <b>2s</b>.",
          "id": "p_46"
        },
        {
          "name": "SMASHING!",
          "description": "When you deal damage with <b>[Rocket Hammer]</b>, gain <b>1%</b> Move Speed and <b>3%</b> Weapon Lifesteal for <b>2s</b>, stacking up to <b>10 times</b>.",
          "id": "p_47"
        }
      ],
      "Zarya": [
        {
          "name": "NO LIMITS",
          "description": "Maximum <b>[Energy]</b> increased to <b>150</b>. <b>[Energy]</b> always decays above <b>100</b> <b>[Energy]</b> at a <b>150%</b> faster rate.",
          "id": "p_48"
        },
        {
          "name": "PARTICLE ACCELERATOR",
          "description": "Gain <b>15%</b> Attack Speed for <b>[Particle Cannon]</b>'s secondary fire. After using an ability, <b>quadruple</b> this bonus for <b>5s</b>.",
          "id": "p_49"
        },
        {
          "name": "PIERCING BEAM",
          "description": "Above <b>80</b> <b>[Energy]</b>, <b>[Particle Cannon]</b>'s Primary Fire will pierce enemies.",
          "id": "p_50"
        },
        {
          "name": "PRE-WORKOUT",
          "description": "Gain Weapon Lifesteal and Ability Lifesteal equal to <b>15%</b> of <b>[Energy]</b>.",
          "id": "p_51"
        },
        {
          "name": "BARRIER BENEFITS",
          "description": "When <b>[Barriers]</b> expire, grant <b>Overhealth</b> equal to <b>50%</b> of remaining Barrier Health to the target for <b>3s</b>",
          "id": "p_52"
        },
        {
          "name": "CONTAINMENT SHIELD",
          "description": "<b>[Barrier]</b> heals <b class=\\"stat-ap\\">25</b> Life, increased by <b>[Energy]</b>, and grants <b>20%</b> Move Speed while active.",
          "id": "p_53"
        },
        {
          "name": "FISSION FIELD",
          "description": "<b>[Projected Barrier]</b> also applies to <b>1</b> additional ally within <b>10m</b>, but has <b>20%</b> reduced duration.",
          "id": "p_54"
        },
        {
          "name": "HERE TO SPOT YOU",
          "description": "<b>[Projected Barrier]</b> pulls you to the targeted ally and heals you for <b>20%</b> of Max Life over <b>3s</b>.",
          "id": "p_55"
        },
        {
          "name": "LIFELIFT",
          "description": "<b>+</b><b>50%</b> <b>[Particle Barrier]</b> Size.\\n<br/>\\nIncrease <b>[Particle Barrier]</b> Health by <b>25%</b> of Bonus Max Life.",
          "id": "p_56"
        },
        {
          "name": "MAJOR FLEX",
          "description": "<b>[Barrier]</b> knocks back and deals <b class=\\"stat-ap\\">25</b> damage, increased by <b>[Energy]</b>, to enemies within <b>5m</b> every <b>1s</b>.",
          "id": "p_57"
        },
        {
          "name": "VOLSKAYA VORTEX",
          "description": "After a <b>[Barrier]</b> is cast, <b>[Particle Cannon]</b>'s next secondary fire spawns a slowing vortex that deals <b class=\\"stat-ap\\">100</b> damage over <b>2s</b>.",
          "id": "p_58"
        },
        {
          "name": "GRAVITON ANOMALY",
          "description": "<b>25%</b> Ultimate Cost Reduction.\\n<br/>\\n<b>[Graviton Surge]</b> base damage is increased to <b>30</b> and increased by <b>[Energy]</b>, but has <b>50%</b> reduced duration.",
          "id": "p_59"
        }
      ],
      "Ashe": [
        {
          "name": "HEAD HONCHO",
          "description": "Each <b>unscoped</b> shot you land increases the damage of the next <b>scoped</b> shot you land by <b>5%</b>, up to <b>30%</b>. Resets on reload.",
          "id": "p_60"
        },
        {
          "name": "INCENDIARY ROUNDS",
          "description": "While <b>scoped</b>, hitting the same target without missing deals <b class=\\"stat-wp\\">30</b> extra damage.",
          "id": "p_61"
        },
        {
          "name": "MY BUSINESS, MY RULES",
          "description": "When you deal damage to a <b>Burning</b> enemy with <b>[The Viper]</b>, reduce the cooldown of your abilities by <b>10%</b>.",
          "id": "p_62"
        },
        {
          "name": "RELOAD THERAPY",
          "description": "When you reload a shot, heal <b>10%</b> of your Life.",
          "id": "p_63"
        },
        {
          "name": "CALAMITY",
          "description": "Using <b>[Coach Gun]</b> reloads <b>2</b> Ammo. <b>[The Viper]</b>'s next <b>2</b> hits deal <b class=\\"stat-ap\\">40</b> additional damage over <b>3s</b>.",
          "id": "p_64"
        },
        {
          "name": "DOUBLE BARRELED",
          "description": "<b>[Coach Gun]</b> gains an additional charge.",
          "id": "p_65"
        },
        {
          "name": "INCENDIARY BLAST",
          "description": "<b>[Coach Gun]</b> applies Burning, dealing <b class=\\"stat-ap\\">100</b> damage over <b>5s</b>. If the target was Burning, deal <b class=\\"stat-ap\\">75</b> additional damage instantly.",
          "id": "p_66"
        },
        {
          "name": "EARLY DETONATION",
          "description": "Shooting <b>[Dynamite]</b> reloads <b>5</b> Ammo and reduces the cooldown of <b>[Dynamite]</b> by <b>3s</b>.",
          "id": "p_67"
        },
        {
          "name": "MOLTEN MUNITIONS",
          "description": "When <b>[Dynamite]</b> explodes on the ground, it leaves lava that <b>Burns</b> enemies for <b class=\\"stat-ap\\">80</b> every <b>1s</b>.",
          "id": "p_68"
        },
        {
          "name": "OUT WITH A BANG",
          "description": "When <b>[Dynamite]</b> explodes, it spawns <b>3</b> sticky explosives that deal <b>30%</b> reduced damage.",
          "id": "p_69"
        },
        {
          "name": "B.O.B JR.",
          "description": "<b>[B.O.B.]</b> costs <b>50%</b> less Ultimate Charge but has reduced Life, <b>20%</b> <b>reduced</b> Attack Speed, and is significantly smaller.",
          "id": "p_70"
        },
        {
          "name": "PARTNERS IN CRIME",
          "description": "You are healed for <b>100%</b> of <b>[B.O.B.]</b>'s damage dealt and <b>[B.O.B.]</b> is healed for <b>100%</b> of your damage dealt.",
          "id": "p_71"
        }
      ],
      "Cassidy": [
        {
          "name": "BULLSEYE",
          "description": "Critical hit reduces <b>[Combat Roll]</b>'s cooldown by <b>2s</b>.",
          "id": "p_72"
        },
        {
          "name": "DEAD MAN WALKING",
          "description": "Eliminating an enemy you've recently critically hit grants <b>1</b> Max Ammo for the round.",
          "id": "p_73"
        },
        {
          "name": "FULL HOUSE",
          "description": "For each Ammo available, <b>[Peacekeeper]</b> 's primary fire gains 1 % increased damage, up to <b>25%</b>.",
          "id": "p_74"
        },
        {
          "name": "QUICK DRAW",
          "description": "After using <b>[Combat Roll]</b>, <b>[Peacekeeper]</b>'s next primary fire can auto-aim within <b>9m</b> while under cooldown.",
          "id": "p_75"
        },
        {
          "name": "THINK FLASHT",
          "description": "When you start a <b>[Combat Roll]</b>, leave a <b>[Flashbang]</b> behind.",
          "id": "p_76"
        },
        {
          "name": "BARREL ROLL",
          "description": "<b>[Combat Roll]</b> takes you <b>50%</b> further and deals <b class=\\"stat-ap\\">65</b> damage to enemies.",
          "id": "p_77"
        },
        {
          "name": "JUST ROLL WITH IT",
          "description": "During <b>[Combat Roll]</b>, prevent all incoming damage.\\nAfter <b>[Combat Roll]</b> ends, heal <b>30%</b> of your Life over <b>3s</b>.",
          "id": "p_78"
        },
        {
          "name": "FLASH IN THE PAIN",
          "description": "Eliminating an enemy recently damaged by <b>[Flashbang]</b> grants <b>15%</b> Ultimate Charge.",
          "id": "p_79"
        },
        {
          "name": "HOT POTATO",
          "description": "<b>[Flashbang]</b> adds <b>3</b> extra Ammo on hit until <b>[Peacekeeper]</b> is reloaded.",
          "id": "p_80"
        },
        {
          "name": "EASY RIDER",
          "description": "While using <b>[Deadeye]</b>, gain <b class=\\"stat-ap\\">100</b> <b>Overhealth</b> and <b>25%</b> Move Speed.",
          "id": "p_81"
        },
        {
          "name": "SUNRISE",
          "description": "Using <b>[Deadeye]</b> slows all visible enemies by <b>35%</b> for 1.<b>5s</b>.",
          "id": "p_82"
        },
        {
          "name": "SUNSET",
          "description": "<b>[Deadeye]</b> eliminations grant <b>15%</b> Ultimate Charge each.",
          "id": "p_83"
        }
      ],
      "Genji": [
        {
          "name": "CYBERNETIC SPEED",
          "description": "Dealing damage with <b>[Shuriken]</b> grants <b>2%</b> <b>[Shuriken]</b> Attack Speed for <b>3s</b>, stacking up to <b>15 times</b>.",
          "id": "p_84"
        },
        {
          "name": "HASHIMOTO'S BANE",
          "description": "After using an ability, your next secondary fire throws <b>2</b> extra <b>[Shuriken]</b> that seek enemies but deal <b>50%</b> less damage.",
          "id": "p_85"
        },
        {
          "name": "SACRED SHURIKEN",
          "description": "<b>[Shuriken]</b>'s primary fire throws <b>2</b> additional <b>[Shuriken]</b> that don't consume any ammo.",
          "id": "p_86"
        },
        {
          "name": "HANAMURA HEALING",
          "description": "Critical hits and <b>[Swift Strike]</b> grant <b>Overhealth</b> equal to <b>25%</b> of their damage dealt for <b>5s</b>.",
          "id": "p_87"
        },
        {
          "name": "HIDDEN BLADE",
          "description": "Gain <b>50%</b> Melee Lifesteal and increase <b>[Quick Melee]</b> damage by 25.",
          "id": "p_88"
        },
        {
          "name": "LACERATION",
          "description": "<b>[Swift Strike]</b> deals <b>25%</b> additional damage over <b>3s</b> to enemies hit.",
          "id": "p_89"
        },
        {
          "name": "WYRM'S MAW",
          "description": "Targets hit by <b>[Shuriken]</b> take <b>10%</b> more damage from <b>[Swift Strike]</b> for <b>4s</b>, stacking up to <b>5 times</b>.",
          "id": "p_90"
        },
        {
          "name": "FORGED UNDER FIRE",
          "description": "While <b>[Deflect]</b> is active, heal for <b>60%</b> of the damage it prevents.",
          "id": "p_91"
        },
        {
          "name": "IAIDO STRIKE",
          "description": "After <b>[Deflect]</b> ends, quickly swing your <b>[Dragonblade]</b> once.",
          "id": "p_92"
        },
        {
          "name": "SPIRIT OF SOJIRO",
          "description": "When <b>[Deflect]</b> stops incoming damage, reduce the cooldown of <b>[Swift Strike]</b> by Is, up to <b>5s</b>.",
          "id": "p_93"
        },
        {
          "name": "DRAGON'S BREATH",
          "description": "<b>[Dragonblade]</b> swings launch a large piercing projectile that deals <b>50%</b> of <b>[Dragonblade]</b>'s damage.",
          "id": "p_94"
        },
        {
          "name": "DEFLECT-O-BOT",
          "description": "<b>+50%</b> Deflected Projectile Speed.\\nDuring the first <b>1.5s</b> of <b>[Deflect]</b>, automatically deflect projectiles towards enemies.",
          "id": "p_95"
        }
      ],
      "Mei": [
        {
          "name": "EXTENDOTHERMICS",
          "description": "<b>[Endothermic Blaster]</b>'s primary fire range is increased by <b>6m</b>.",
          "id": "p_95"
        },
        {
          "name": "FROST ARMOR",
          "description": "Gain Armor equal to <b>5%</b> of the primary fire damage you deal, up to <b>100</b>, until the end of the round.",
          "id": "p_96"
        },
        {
          "name": "PERMAFROST",
          "description": "Increase your max health by <b>50%</b> of your ability power.",
          "id": "p_97"
        },
        {
          "name": "SLOWBALL",
          "description": "<b>[Endothermic Blaster]</b>'s secondary fire now shoots a snowball that applies <b>30%</b> slow for Is on critical hit.",
          "id": "p_98"
        },
        {
          "name": "ICEBERG",
          "description": "<b>[Ice Wall]</b> spawns a mini <b>[Blizzard]</b> that slows enemies.",
          "id": "p_99"
        },
        {
          "name": "SNOWBALL FLIGHT",
          "description": "Jumping while mid-air creates a large <b>[Ice Wall]</b> pillar under you.\\n(<b>12s</b> Cooldown)",
          "id": "p_100"
        },
        {
          "name": "TWICE AS ICE",
          "description": "When you use <b>[Cryo-Freeze]</b>, reset the next cooldown of <b>[Ice Wall]</b>.",
          "id": "p_101"
        },
        {
          "name": "COULDER",
          "description": "<b>[Cryo-Freeze]</b> now encases you in a rolling iceball that can knock back enemies and deal <b class=\\"stat-ap\\">20</b> damage.",
          "id": "p_102"
        },
        {
          "name": "CRYCLONE",
          "description": "<b>[Cryo-Freeze]</b> spawns a mini <b>[Blizzard]</b> that slows enemies.",
          "id": "p_103"
        },
        {
          "name": "FROST NOVA",
          "description": "When <b>[Cryo-Freeze]</b> ends, knock back nearby enemies, dealing <b class=\\"stat-ap\\">60</b> damage.",
          "id": "p_104"
        },
        {
          "name": "AVALANCHE",
          "description": "Visible enemies within <b>20m</b> of <b>[Blizzard]</b> are slowed by <b>25%</b>.",
          "id": "p_105"
        },
        {
          "name": "BLIZZNADO",
          "description": "While within <b>[Blizzard]</b>, heal <b>15%</b> of your life every <b>1s</b>.",
          "id": "p_106"
        }
      ],
      "Reaper": [
        {
          "name": "BACKSTABBER",
          "description": "After using an ability, your next shot deals <b>50%</b> additional damage over <b>3s</b> to enemies struck from behind.",
          "id": "p_107"
        },
        {
          "name": "HARVEST FEST",
          "description": "<b>[Hellfire Shotgun]</b> hits have a <b>10%</b> chance to spawn a Soul Globe. When picked up, restore <b>25%</b> Life, <b>25%</b>\\nAmmo, and gain <b>25%</b> Move Speed for <b>3s</b>.",
          "id": "p_108"
        },
        {
          "name": "REVOLVING RUIN",
          "description": "Close-range (7m) <b>[Hellfire Shotgun]</b> hits grant <b>4%</b> Attack Speed for Is, stacking up to <b>10 times</b>.",
          "id": "p_109"
        },
        {
          "name": "SHARED SIPHON",
          "description": "<b>[The Reaping]</b> also heals the nearest ally within 10m for <b>30%</b> of Reaper's damage dealt.",
          "id": "p_110"
        },
        {
          "name": "SHROUDED SHRAPNEL",
          "description": "Using <b>[Wraith Form]</b> increases the number of pellets per shot in your next magazine by <b>25%</b> and its spread by <b>50%</b>.",
          "id": "p_111"
        },
        {
          "name": "SPIRITED TO SLAY",
          "description": "Eliminations reset your cooldowns.",
          "id": "p_112"
        },
        {
          "name": "VAMPIRIC TOUCH",
          "description": "Hits with <b>[Quick Melee]</b> mark enemies for <b>5s</b>. Allies gain <b>20%</b> Lifesteal against marked enemies.",
          "id": "p_113"
        },
        {
          "name": "DEATH STEP",
          "description": "After using <b>[Shadow Step]</b>, cast <b>[Death Blossom]</b> for 1.<b>5s</b> with <b>50%</b> reduced damage.",
          "id": "p_114"
        },
        {
          "name": "SILENT AS THE GRAVE",
          "description": "Your footsteps and <b>[Shadow Step]</b> are significantly quieter.",
          "id": "p_115"
        },
        {
          "name": "STRANGLE STEP",
          "description": "After using <b>[Shadow Step]</b>, <b>double</b> your Lifesteal for <b>3s</b>.",
          "id": "p_116"
        },
        {
          "name": "GHOSTED",
          "description": "While in <b>[Wraith Form]</b>, passing through enemies slows their Move Speed and Attack Speed by <b>30%</b> for <b>3s</b>.",
          "id": "p_117"
        },
        {
          "name": "WRAITH RENEWAL",
          "description": "While in <b>[Wraith Form]</b>, restore <b>10%</b> of your Life every Is. Double this while below <b>50%</b> Life.",
          "id": "p_118"
        }
      ],
      "Soldier: 76": [
        {
          "name": "PERIPHERAL PULSE",
          "description": "During <b>[Tactical Visor]</b>, <b>[Pulse Rifle]</b> shoots at <b>1</b> additional enemy, dealing <b>50%</b> damage.",
          "id": "p_119"
        },
        {
          "name": "SUPER VISOR",
          "description": "After using <b>[Helix Rocket]</b>, activate <b>[Tactical Visor]</b> for <b>0.5s</b>.",
          "id": "p_120"
        },
        {
          "name": "CHAINGUN",
          "description": "While continuously shooting <b>[Pulse Rifle]</b>, each shot grants <b>0.4%</b> Weapon Power, stacking up to <b>100</b> times.",
          "id": "p_121"
        },
        {
          "name": "MAN ON THE RUN",
          "description": "During <b>[Sprint]</b>, restore <b>10%</b> of your Ammo every Is and increase your Max Ammo by <b>10%</b> until you reload, stacking up to <b>10 times</b>.",
          "id": "p_122"
        },
        {
          "name": "CRATERED",
          "description": "Increase <b>[Helix Rocket]</b> explosion radius by <b>40%</b> and explosion damage by <b>15%</b>.",
          "id": "p_123"
        },
        {
          "name": "DOUBLE HELIX",
          "description": "<b>[Helix Rocket]</b> fires a second homing <b>[Helix Rocket]</b> that deals <b>70%</b> <b>reduced</b> damage.",
          "id": "p_124"
        },
        {
          "name": "HUNKER DOWN",
          "description": "When <b>[Helix Rocket]</b> deals damage, create a <b>[Biotic Field]</b> with a <b>50% reduced</b> duration at your position.",
          "id": "p_125"
        },
        {
          "name": "BACK OFF",
          "description": "Enemies within your <b>[Biotic Field]</b> take damage equal to <b>100%</b> of its healing output.",
          "id": "p_126"
        },
        {
          "name": "BIOTIC BULLSEYE",
          "description": "While in <b>[Biotic Field]</b>, critical hits restore <b>10%</b> Max Ammo and extend the duration of <b>[Biotic Field]</b> by <b>0.5s</b>, up to <b>5s</b>.",
          "id": "p_127"
        },
        {
          "name": "FRONTLINERS",
          "description": "Allies in range of your <b>[Biotic Field]</b> when it spawns gain <b>Overhealth</b> equal to <b>30%</b> of your max Life for <b>3s</b>.",
          "id": "p_128"
        },
        {
          "name": "ON ME!",
          "description": "<b>[Biotic Field]</b> moves with you and grants you <b>20%</b> increased Max Life while active.",
          "id": "p_129"
        },
        {
          "name": "TRACK AND FIELD",
          "description": "During <b>[Sprint]</b>, <b>[Biotic Field]</b> cooldown refreshes <b>150%</b> faster.",
          "id": "p_130"
        }
      ],
      "Ana": [
        {
          "name": "NO SCOPE NEEDED",
          "description": "Landing unscoped shots with <b>[Biotic Rifle]</b> grants <b>10%</b> Attack Speed for <b>2s</b>, stacking up to <b>3 times</b>.",
          "id": "p_131"
        },
        {
          "name": "PINPOINT PRESCRIPTION",
          "description": "<b>[Biotic Rifle]</b> can now critically hit both allies and enemies.",
          "id": "p_132"
        },
        {
          "name": "TACTICAL RIFLE",
          "description": "While scoped, <b>[Biotic Rifle]</b> will lock-on to allies for guaranteed hits.",
          "id": "p_133"
        },
        {
          "name": "COMFY CLOUD",
          "description": "<b>[Sleep Dart]</b> explodes on contact, hitting targets within <b>3m</b>, but <b>Sleep</b> has a <b>50%</b> reduced duration.",
          "id": "p_134"
        },
        {
          "name": "DREAMY",
          "description": "<b>[Sleep Dart]</b> can hit allies, healing <b>80%</b> of their max Life over <b>4s</b> instead of putting them to sleep.",
          "id": "p_135"
        },
        {
          "name": "SLEEP REGIMEN",
          "description": "Gain 50 Health.\\nWhen you apply Sleep to an enemy, gain 10 Health, up to 150.",
          "id": "p_136"
        },
        {
          "name": "HOME REMEDY",
          "description": "<b>[Biotic Grenade]</b> grants <b>Overhealth</b> equal to <b>200%</b> of its healing.",
          "id": "p_137"
        },
        {
          "name": "TIME OUT",
          "description": "<b>[Biotic Grenade]</b> now knocks enemies back and reduces their Move Speed by for 1.<b>5s</b>.",
          "id": "p_138"
        },
        {
          "name": "VENOMOUS",
          "description": "<b>[Biotic Grenade]</b> deals an additional <b class=\\"stat-ap\\">50</b> damage over its duration to enemies affected.",
          "id": "p_139"
        },
        {
          "name": "MY TURN",
          "description": "<b>[Nano Boost]</b> also applies to yourself for <b>50%</b> of its duration.",
          "id": "p_140"
        },
        {
          "name": "OUR TURN",
          "description": "<b>[Nano Boost]</b> also affects other allies in your line of sight, but it has a <b>50%</b> reduced duration on them.",
          "id": "p_141"
        },
        {
          "name": "YOUR FULL POTENTIAL",
          "description": "<b>[Nano Boost]</b> also grants the target <b>20%</b> Ultimate Charge and <b class=\\"stat-ap\\">200</b> <b>Overhealth</b>.",
          "id": "p_142"
        }
      ],
      "Juno": [
        {
          "name": "MEDIMASTER",
          "description": "<b>[Mediblaster]</b> can now critically hit both allies and enemies.",
          "id": "p_143"
        },
        {
          "name": "STINGER",
          "description": "<b>[Mediblaster]</b> deals an additional <b class=\\"stat-ap\\">10</b> damage to enemies over <b>1s</b>.\\n(Does not stack).",
          "id": "p_144"
        },
        {
          "name": "COSMIC COOLANT",
          "description": "<b>[Pulsar Torpedoes]</b> cooldown is reduced by <b>0.5s</b> for each target it hits.",
          "id": "p_145"
        },
        {
          "name": "MEDICINAL MISSILES",
          "description": "<b>[Pulsar Torpedoes]</b> heal for an extra <b class=\\"stat-ap\\">30</b> life and causes allies hit to receive <b>50%</b> more healing for <b>3s</b>.",
          "id": "p_146"
        },
        {
          "name": "PULSAR PLUS",
          "description": "<b>[Pulsar Torpedoes]</b> gains <b>1</b> additional charge.",
          "id": "p_147"
        },
        {
          "name": "BLINK BOOSTS",
          "description": "<b>[Glide Boost]</b> gains <b>2</b> additional charges and has a <b>65%</b> reduced cooldown, but has <b>75%</b> <b>reduced</b> duration.",
          "id": "p_148"
        },
        {
          "name": "TORPEDO GLIDE",
          "description": "During <b>[Glide Boost]</b>, every <b>50</b> damage you deal reduces the cooldown of <b>[Pulsar Torpedoes]</b> by <b>1s</b>.",
          "id": "p_149"
        },
        {
          "name": "BLACK HOLE",
          "description": "<b>[Hyper Ring]</b> slows the Move Speed of enemies who pass through it by <b>35%</b> for <b>2s</b>.",
          "id": "p_150"
        },
        {
          "name": "HYPER HEALER",
          "description": "Allies affected by <b>[Hyper Ring]</b> gain <b class=\\"stat-ap\\">100</b> <b>Overhealth</b>.",
          "id": "p_151"
        },
        {
          "name": "RALLY RING",
          "description": "Reduce <b>[Hyper Ring]</b>'s cooldown by <b>1s</b> when an ally passes through it.",
          "id": "p_152"
        },
        {
          "name": "ORBITAL ALIGNMENT",
          "description": "Enemies inside of <b>[Orbital Ray]</b> lose <b>35%</b> Move Speed. Allies inside of it gain <b>25%</b> Move Speed.",
          "id": "p_153"
        },
        {
          "name": "STELLAR FOCUS",
          "description": "<b>[Orbital Ray]</b> now follows you and its duration is increased by <b>35%</b>.",
          "id": "p_154"
        }
      ],
      "Kiriko": [
        {
          "name": "FOXY FIREWORKS",
          "description": "After reloading, your next <b>3</b> thrown <b>[Kunai]</b> explode on contact, dealing <b class=\\"stat-wp\\">20</b> damage to nearby enemies.",
          "id": "p_155"
        },
        {
          "name": "KEEN KUNAI",
          "description": "<b>[Kunai]</b> critical hits decrease active ability cooldowns by <b>15%</b> and refund <b>3</b> ammo.",
          "id": "p_156"
        },
        {
          "name": "TRIPLE THREAT",
          "description": "After using <b>[Swift Step]</b>, for <b>4s</b>, your secondary fire throws <b>2</b> additional <b>[Kunai]</b> in a spread that deal <b>50%</b> less damage.",
          "id": "p_157"
        },
        {
          "name": "LEAF ON THE WIND",
          "description": "<b>[Healing Ofuda]</b> bounces to another ally up to <b>2</b> times, healing for <b>30%</b> of the normal amount.",
          "id": "p_158"
        },
        {
          "name": "SELF-CARE",
          "description": "When you use <b>[Healing Ofuda]</b>, heal yourself for <b>15%</b> of your max Life.",
          "id": "p_159"
        },
        {
          "name": "SUPPORTED SHOOTING",
          "description": "When <b>[Healing Ofuda]</b> heals allies, grant them <b>20%</b> increased Attack Speed for <b>3s</b>.",
          "id": "p_160"
        },
        {
          "name": "CLONE CONJURATION",
          "description": "After using <b>[Swift Step]</b>, create a clone of yourself that lasts for <b>5s</b>.",
          "id": "p_161"
        },
        {
          "name": "FLEET FOOT",
          "description": "<b>[Swift Step]</b> can be used directionally without a target.",
          "id": "p_162"
        },
        {
          "name": "CLEANSING CHARGE",
          "description": "When you cleanse negative effects with <b>[Protection Suzu]</b>, gain <b>5%</b> Ultimate Charge for each hero cleansed.",
          "id": "p_163"
        },
        {
          "name": "TWO-ZU",
          "description": "<b>[Protection Suzu]</b> gains an additional charge.",
          "id": "p_164"
        },
        {
          "name": "CROSSING GUARD",
          "description": "<b>[Kitsune Rush]</b> now also reduces enemies Move Speed by <b>50%</b> for <b>2s</b>.",
          "id": "p_165"
        },
        {
          "name": "SPIRIT VEIL",
          "description": "Using <b>[Kitsune Rush]</b> cleanses Kiriko of negative effects, and makes her <b>Invulnerable</b> for <b>4s</b>.",
          "id": "p_166"
        }
      ],
      "Lúcio": [
        {
          "name": "FAST FORWARD",
          "description": "While above <b>50%</b> Move Speed, increase damage by <b>30%</b>.",
          "id": "p_167"
        },
        {
          "name": "SIGNATURE SHIFT",
          "description": "After using an ability, your next <b>[Sonic Amplifier]</b> shot shoots a volley of <b>6</b> ammo with <b>80%</b> increased projectile size.",
          "id": "p_168"
        },
        {
          "name": "SONIC BOOM",
          "description": "<b>[Sonic Amplifier]</b> Damage heals all allies affected by <b>[Crossfade]</b> equal to <b>30%</b> of damage dealt.",
          "id": "p_169"
        },
        {
          "name": "MIXTAPE",
          "description": "When switching to <b>[Healing Boost]</b>, <b>[Crossfade]</b> heals for <b>50%</b> of <b>[Crossfade]</b> healing for every <b>1s</b> <b>[Speed Boost]</b> was active.",
          "id": "p_170"
        },
        {
          "name": "MEGAPHONE",
          "description": "+<b>15%</b> <b>[Amp It Up]</b> Duration\\nWhile <b>[Amp It Up]</b> is active, <b>[Crossfade]</b> radius is increased by <b>150%</b>.",
          "id": "p_171"
        },
        {
          "name": "RADIO EDIT",
          "description": "After using <b>[Amp It Up]</b>, trigger a <b>[Sound Barrier]</b> with <b>85%</b> <b>reduced</b> <b>Overhealth</b>.",
          "id": "p_172"
        },
        {
          "name": "VIVACE",
          "description": "While <b>[Wallriding]</b> or airborne, <b>[Soundwave]</b> cooldown refreshes <b>25%</b> faster and adds <b>1</b> Max Ammo per <b>1s</b> until you reload.",
          "id": "p_173"
        },
        {
          "name": "WALLVIBING",
          "description": "While <b>[Wallriding]</b> or airborne, gain temporary <b>Overhealth</b> equal to <b>3%</b> of your life every <b>1s</b>, up to <b>30%</b>.",
          "id": "p_174"
        },
        {
          "name": "CROWD PLEASER",
          "description": "After using <b>[Soundwave]</b>, heal all allies affected by <b>[Crossfade]</b> for <b>100%</b> of <b>[Crossfade]</b> healing.",
          "id": "p_175"
        },
        {
          "name": "LET'S BOUNCE",
          "description": "<b>[Soundwave]</b> has <b>25%</b> increased knockback and deals <b class=\\"stat-ap\\">25</b> bonus damage if the target hits a wall.",
          "id": "p_176"
        },
        {
          "name": "REVERB",
          "description": "Gain <b>1</b> extra charge of <b>[Soundwave]</b>.",
          "id": "p_177"
        },
        {
          "name": "BEAT DROP",
          "description": "<b>20%</b> Ultimate Cost Reduction.\\nLanding on an enemy with <b>[Sound Barrier]</b> deals up to <b class=\\"stat-ap\\">200</b> damage.",
          "id": "p_178"
        }
      ],
      "Mercy": [
        {
          "name": "DISTORTION",
          "description": "Allies boosted by <b>[Caduceus Staff]</b> gain Lifesteal.",
          "id": "p_179"
        },
        {
          "name": "GLASS EXTRA FULL",
          "description": "Healing from <b>[Caduceus Staff]</b> targeting full health allies is converted to <b>Overhealth</b>, up to 50.",
          "id": "p_180"
        },
        {
          "name": "PROTECTIVE BEAM",
          "description": "<b>[Caduceus Staff]</b> targets above <b>80%</b> Life gain <b>10%</b> <b>Damage Reduction</b>.",
          "id": "p_181"
        },
        {
          "name": "SERENITY",
          "description": "<b>[Sympathetic Recovery]</b> heals for <b>20%</b> more and heals you even while you are healing a full health ally.",
          "id": "p_182"
        },
        {
          "name": "THREADS OF FATE",
          "description": "<b>[Caduceus Staff]</b> chains to your previous target for <b>3s</b>, at <b>50%</b> effectiveness.",
          "id": "p_183"
        },
        {
          "name": "BATTLE MEDIC",
          "description": "Every <b>1s</b> your Staff is attached, <b>[Caduceus Blaster]</b> gains <b>4%</b> Attack Speed (stacks <b>10 times</b>) until you reload or swap to your Staff.",
          "id": "p_184"
        },
        {
          "name": "EQUIVALENT EXCHANGE",
          "description": "You have <b>3 charges</b> of <b>[Resurrect]</b> with <b>33%</b> reduced cast time, but their cooldowns only reset at the start of a round.",
          "id": "p_185"
        },
        {
          "name": "FIRST RESPONDER",
          "description": "When you <b>[Resurrect]</b> an ally, you both gain <b class=\\"stat-ap\\">250</b> <b>Overhealth</b> for <b>6s</b>.",
          "id": "p_186"
        },
        {
          "name": "RENAISSANCE",
          "description": "After succesfully using <b>[Resurrect]</b>, activate <b>[Valkyrie]</b> for <b>5s</b>.",
          "id": "p_187"
        },
        {
          "name": "THE WHAMBULANCE",
          "description": "When <b>[Guardian Angel]</b> ends, heal your target for <b class=\\"stat-ap\\">4</b> Life for every <b>1m</b> you traveled.",
          "id": "p_188"
        },
        {
          "name": "TRIAGE UNIT",
          "description": "When using <b>[Guardian Angel]</b> on allies below <b>50%</b> Life, <b>[Caduceus Staff]</b> heals them <b>30%</b> more for <b>3s</b>.",
          "id": "p_189"
        },
        {
          "name": "CREPUSCULAR CIRCLE",
          "description": "While <b>[Valkyrie]</b> is active, the healing and damage boost of <b>[Caduceus Staff]</b> are automatically applied to nearby allies.",
          "id": "p_190"
        }
      ],
      "Moira": [
        {
          "name": "CHAIN GRASP",
          "description": "After using <b>[Biotic Orb]</b>, <b>[Biotic Grasp]</b>'s secondary fire chains to <b>2</b> additional targets within <b>10m</b> for <b>3s</b>.",
          "id": "p_191"
        },
        {
          "name": "DECONSTRUCTION",
          "description": "After you spend 50 <b>[Biotic Energy]</b>, deal <b>20%</b> increased damage for <b>6s</b>.",
          "id": "p_192"
        },
        {
          "name": "EMPOWERING YOU",
          "description": "<b>[Biotic Grasp]</b>'s secondary fire can target allies, increasing their damage by <b>15%</b>.",
          "id": "p_193"
        },
        {
          "name": "ETHEREAL EXCISION",
          "description": "While aiming at an enemy's head with <b>[Biotic Grasp]</b>'s secondary fire, gain <b>30%</b> Move Speed, <b>30%</b> Lifesteal, and restore <b>100%</b> more Biotic Energy.",
          "id": "p_194"
        },
        {
          "name": "OPTIMAL OVERFLOW",
          "description": "After you spend 50 <b>[Biotic Energy]</b>, launch the last selected <b>[Biotic Orb]</b> with <b>75%</b> reduced duration.",
          "id": "p_195"
        },
        {
          "name": "PRECARIOUS POTENCY",
          "description": "Allies healed by your <b>[Biotic Grasp]</b> are healed for an additional <b>25%</b> of <b>[Biotic Grasp]</b>'s healing over <b>5s</b>.",
          "id": "p_196"
        },
        {
          "name": "CROSS-ORBAL",
          "description": "<b>[Biotic Orb]</b> launches an additional <b>[Biotic Orb]</b> of the other type with <b>50%</b> reduced capacity.",
          "id": "p_197"
        },
        {
          "name": "MULTIBALL",
          "description": "<b>[Biotic Orb]</b> launches <b>2</b> additional orbs of the chosen type with <b>85%</b> <b>reduced</b> effectiveness.",
          "id": "p_198"
        },
        {
          "name": "PHANTASM",
          "description": "When you use <b>[Fade]</b>, spawn a stationary copy of the last selected <b>[Biotic Orb]</b> with <b>50%</b> <b>reduced</b> duration.",
          "id": "p_199"
        },
        {
          "name": "SCIENTIFIC DEATHOD",
          "description": "While using <b>[Fade]</b>, passing through enemies grants <b>5%</b> Ultimate Charge and <b>Overhealth</b> equal to <b>15%</b> of your max Life.",
          "id": "p_200"
        },
        {
          "name": "VOIDHOPPERS",
          "description": "<b>[Fade]</b> also phases other allies within <b>8m</b> for 0.<b>25s</b> and grants them <b>Overhealth</b> equal to <b>20%</b> of your max Life.",
          "id": "p_201"
        },
        {
          "name": "DESTRUCTION'S DIVIDE",
          "description": "<b>[Coalescence]</b> can be toggled between pure healing or pure damage, with <b>30%</b> greater effect.",
          "id": "p_202"
        }
      ],
      "Freja": [
        {
          "name": "CYCLONE",
          "description": "When you use <b>[Updraft]</b>, fire a <b>[Take Aim]</b> bolt at your crosshair."
        },
        {
          "name": "SEEKERPOINT",
          "description": "When <b>[Take Aim]</b> bolt sticks an enemy, automatically fire <b>3</b> additional crossbow shots at them that deal <b><b>66%</b> reduced </b>damage."
        },
        {
          "name": "SEISMIC SHOT",
          "description": "<b>[Take Aim]</b> explosion radius is increased by <b>33%</b>. Double this if the bolt is stuck to a target."
        },
        {
          "name": "THREAD THE NEEDLE",
          "description": "<b>[Take Aim]</b> bolts pierce enemies. Additional explosions deal <b>66% reduced</b> damage."
        },
        {
          "name": "DEEP POCKETS",
          "description": "When you use an ability, restore <b>25%</b> of your Max Ammo."
        },
        {
          "name": "FORAGER",
          "description": "For <b>2s</b> after using <b>[Quick Dash]</b>, <b>[Revdraw Crossbow]</b> hits heal you for <b>4%</b> of your Max Life."
        },
        {
          "name": "PEAK PERFORMANCE",
          "description": "While firing <b>[Revdraw Crossbow]</b>, your fall speed is decreased by <b>80%</b>."
        },
        {
          "name": "REDUX",
          "description": "<b>[Revdraw Crossbow]</b> hits against targets stuck by a <b>[Take Aim]</b> bolt or <b>[Bola Shot]</b> reduce the cooldown of your abilities by <b>5%</b> and refunds <b>1</b> ammo."
        },
        {
          "name": "VOLLEY À DEUX",
          "description": "Every fifth <b>[Revdraw Crossbow]</b> shot fires an additional <b>2</b> bolts in a spread that deal <b>33%</b> reduced damage."
        },
        {
          "name": "LILLE FÆLDE",
          "description": "After using <b>[Updraft]</b>, your next <b>[Take Aim]</b> while airborne fires a <b>[Bola Shot]</b> that deals <b>60%</b> <b>reduced</b> damage instead of an explosive bolt."
        },
        {
          "name": "SO COOKED",
          "description": "<b>[Bola Shot]</b>'s damaging zone deals <b>30%</b> more damage and lingers for <b>2s</b>.\\n<b>[Bola Shot]</b> eliminations count towards <b>[Bounty Hunting]</b>."
        },
        {
          "name": "MIGHTY GUST",
          "description": "<b>[Updraft]</b> launches a wind blast towards your crosshair, knocking back enemies and dealing <b class=\\"stat-ap\\">40</b> damage."
        }
      ]
    }
  }
}
`,Uv=`{
  "IRONSIGHTS": {
    "attributes": [
      {
        "type": "AS",
        "value": "10%"
      },
      {
        "type": "WP",
        "value": "17%"
      },
      {
        "type": "Editor's Note",
        "value": "On average, you are about 30m away from your taget, giving you somewhere between a 10-20% weapon power bonus. 17% is a fair estimate."
      }
    ]
  },
  "TRIPOD": {
    "attributes": [
      {
        "type": "WP",
        "value": "13%"
      },
      {
        "type": "Editor's Note",
        "value": "You gain 10% weapon power when above. With the base 5%, estimate 8% gain, a total of 13% WP."
      }
    ]
  },
  "INFRARED LENSES": {
    "attributes": [
      {
        "type": "AP",
        "value": "18%"
      },
      {
        "type": "WP",
        "value": "5%"
      },
      {
        "type": "Editor's Note",
        "value": "Item itself provides 15AP. Since dynamite and power-based effect also triggers burning, while themself don't trigger burning damage bonus, we estimate +10AP and +5WP that benefits from burning damage bonus."
      }
    ]
  },
  "FIRESTARTER": {
    "attributes": [
      {
        "type": "Health",
        "value": "50"
      },
      {
        "type": "ALS",
        "value": "30%"
      },
      {
        "type": "Editor's Note",
        "value": "Only life steal from burning damage, so estimate 5% ALS is missing from Bob and coach gun"
      }
    ]
  },
  "SUPERFLEXOR": {
    "attributes": [
      {
        "type": "Health",
        "value": "25"
      },
      {
        "type": "WP",
        "value": "10%"
      },
      {
        "type": "AP",
        "value": "15%"
      },
      {
        "type": "Editor's Note",
        "value": "AP can stack up to 25%, estimate having 15% AP up time."
      }
    ]
  }
}
`;function Bv(){const[r,u]=ne.useState([]),[o,c]=ne.useState([]),[d,p]=ne.useState([]),m=Pn(),S=dn(D=>D.input.present),{hero:b,cash:h,equipped:E,toBuy:M,avoid:B,avoidEnabled:G,weights:I,minValueEnabled:q,minAttrGroups:z}=S,[W,V]=ne.useState(null),[ie,F]=ne.useState([]),y=ne.useState(new Map)[0],O=ne.useState(new Map)[0],H=ne.useState(new Map)[0];ne.useEffect(()=>{const D=JSON.parse(Lv),k=JSON.parse(Uv),P=[],be=(J,ue,ee)=>{ee.forEach(Ue=>{const me=k[Ue.name],$e={...Ue,tab:J,rarity:ue};me!=null&&me.attributes&&($e.attributes=me.attributes),P.push($e)})};["weapon","ability","survival"].forEach(J=>{const ue=D.tabs[J];be(J,"common",ue.common),be(J,"rare",ue.rare),be(J,"epic",ue.epic)}),u(P);const A=new Set,j=new Map,X=new Set;P.forEach(J=>{J.character&&A.add(J.character),J.attributes.forEach(ue=>{const ee=(j.get(ue.type)??0)+1;j.set(ue.type,ee),ee===2&&X.add(ue.type)})}),X.delete("description"),X.delete("Editor's Note");const Y=Array.from(X).sort(Pm);c(Array.from(A).sort()),p(Y),m(U0({index:0,type:Y[0]}))},[]),ne.useEffect(()=>{const D=E.filter(k=>k).length;M+D>6&&m(w0(Math.max(0,6-D)))},[m,E,M]),ne.useEffect(()=>{y.clear(),O.clear()},[I,y,O]),ne.useEffect(()=>{H.clear()},[E,H]);function K(){const D=E.filter(P=>P).sort().join(",");if(H.has(D))return H.get(D);const k=E.map(P=>r.find(be=>be.id===P)).filter(P=>!!P);return H.set(D,k),k}function Z(){if(!b||h<0||K().reduce((k,P)=>k+P.cost,0)>h||M+K().length>6||I.length===0)return!1;if(q){for(const k of z)if(k.attrs.length===0||k.value<0)return!1}return!0}function ge(D){const k=D.map(A=>A.id||A.name).sort().join(",");if(y.has(k))return y.get(k);let P=O.get(k);P||(P=xs(D),O.set(k,P));const be=Jb(P,I);return y.set(k,be),be}function Ne(D){return!q||Vm([...D,...K()],z)}function De(){if(m(ia("")),!Z()){m(ia("Please check your inputs - ensure all required fields are filled"));return}const D=K(),k=D.reduce((oe,we)=>oe+we.cost,0),P=h-k;if(P<0){m(ia("Equipped items cost exceeds total cash"));return}const be=k0(I,q,z),A=r.filter(oe=>(!oe.character||oe.character===b)&&!E.includes(oe.id??"")&&(!G||!B.includes(oe.id??""))&&oe.attributes.some(we=>be.has(we.type))),j=M;if(j===0){if(!Ne([])){m(ia("Minimum attribute values not met"));return}const oe=ge(D);V({items:[],cost:0,score:oe}),F([]);return}if(A.length===0){m(ia("No items available that match your criteria"));return}const X=A.map(oe=>({item:oe,score:ge([oe])}));X.sort((oe,we)=>we.score-oe.score);const Y=X.filter(oe=>oe.item.cost<=P);if(Y.length===0){m(ia("No affordable items available"));return}const ue=Y.slice(0,50),ee=[0];for(const oe of ue)ee.push(ee[ee.length-1]+oe.score);let Ue=-1/0,me=0,$e=[];const Qn=D.length+j===6,Zn=ue.length,da=new Map;function ba(oe,we,ln,Bn){if(Zn>100&&we.length===0&&oe>50||(Ne(we)&&(Bn>Ue||Bn===Ue&&(Qn?ln>me:ln<me)?(Ue=Bn,me=ln,$e=[{items:[...we],cost:ln,score:Bn}]):Bn===Ue&&(Qn?ln<=me:ln>=me)&&$e.push({items:[...we],cost:ln,score:Bn})),we.length===j||oe>=Zn))return;const dl=j-we.length;if(Bn+(ee[Math.min(Zn,oe+dl)]-ee[oe])<Ue)return;const bl=`${oe}-${we.length}-${ln}-${Math.floor(Bn)}`;if(!da.has(bl)){da.set(bl,!0);for(let Yn=oe;Yn<Zn;Yn++){const Ve=ue[Yn];ln+Ve.item.cost>P||(we.push(Ve.item),ba(Yn+1,we,ln+Ve.item.cost,Bn+Ve.score),we.pop())}}}if(ba(0,[],0,0),$e.length===0){m(ia("Insufficient cash for any purchase"));return}const[Jn,...Ir]=$e.sort((oe,we)=>Qn?we.cost-oe.cost:oe.cost-we.cost),Vr=Ir.filter(oe=>Qn?oe.cost<Jn.cost:oe.cost>Jn.cost).sort((oe,we)=>Qn?we.cost-oe.cost:oe.cost-we.cost),bn=xs([...Jn.items,...D]),Xr=Xm(bn,I,q,z);V({items:Jn.items,cost:Jn.cost,score:Jb(bn,I),breakdown:Xr}),F(Vr.map(oe=>({...oe,score:ge([...oe.items,...D])})))}if(r.length===0)return v.jsx("div",{className:"p-4",children:"Loading..."});const fe=r.filter(D=>!b||!D.character||D.character===b),te=K(),Ae=te.reduce((D,k)=>D+k.cost,0);return v.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 space-y-2",children:[v.jsx(Hv,{}),v.jsxs("div",{className:"mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8",children:[v.jsx(nv,{heroes:o,attrTypes:d,filteredItems:fe,onSubmit:De,validate:Z}),v.jsx(Av,{eqItems:te,eqCost:Ae,cash:h,results:W,alternatives:ie}),v.jsx(Ry,{})]})]})}function jv(){return v.jsx("div",{className:"dark h-screen overflow-hidden dark:text-gray-100 p-2 box-border",children:v.jsx("div",{className:"border border-[#346291] rounded-md h-full w-full",children:v.jsx("div",{className:"mx-auto grid gap-6 h-full overflow-y-auto",children:v.jsx(Bv,{})})})})}const kv=pm({reducer:{input:Cv(Ym)}});gy.createRoot(document.getElementById("root")).render(v.jsx(ne.StrictMode,{children:v.jsx(ky,{store:kv,children:v.jsx(jv,{})})}));
