(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const p of d)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function o(d){const p={};return d.integrity&&(p.integrity=d.integrity),d.referrerPolicy&&(p.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?p.credentials="include":d.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(d){if(d.ep)return;d.ep=!0;const p=o(d);fetch(d.href,p)}})();function uy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var rs={exports:{}},ei={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function cy(){if(xb)return ei;xb=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,d,p){var m=null;if(p!==void 0&&(m=""+p),d.key!==void 0&&(m=""+d.key),"key"in d){p={};for(var S in d)S!=="key"&&(p[S]=d[S])}else p=d;return d=p.ref,{$$typeof:l,type:c,key:m,ref:d!==void 0?d:null,props:p}}return ei.Fragment=u,ei.jsx=o,ei.jsxs=o,ei}var Nb;function sy(){return Nb||(Nb=1,rs.exports=cy()),rs.exports}var g=sy(),as={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function oy(){if(Db)return ce;Db=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),M=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=M&&A[M]||A["@@iterator"],typeof A=="function"?A:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,q={};function z(A,B,V){this.props=A,this.context=B,this.refs=q,this.updater=V||G}z.prototype.isReactComponent={},z.prototype.setState=function(A,B){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,B,"setState")},z.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function W(){}W.prototype=z.prototype;function I(A,B,V){this.props=A,this.context=B,this.refs=q,this.updater=V||G}var re=I.prototype=new W;re.constructor=I,X(re,z.prototype),re.isPureReactComponent=!0;var F=Array.isArray,y={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function H(A,B,V,Y,J,ue){return V=ue.ref,{$$typeof:l,type:A,key:B,ref:V!==void 0?V:null,props:ue}}function K(A,B){return H(A.type,B,void 0,void 0,void 0,A.props)}function Z(A){return typeof A=="object"&&A!==null&&A.$$typeof===l}function ge(A){var B={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(V){return B[V]})}var Ne=/\/+/g;function De(A,B){return typeof A=="object"&&A!==null&&A.key!=null?ge(""+A.key):B.toString(36)}function fe(){}function ne(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(fe,fe):(A.status="pending",A.then(function(B){A.status==="pending"&&(A.status="fulfilled",A.value=B)},function(B){A.status==="pending"&&(A.status="rejected",A.reason=B)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function Ae(A,B,V,Y,J){var ue=typeof A;(ue==="undefined"||ue==="boolean")&&(A=null);var ee=!1;if(A===null)ee=!0;else switch(ue){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(A.$$typeof){case l:case u:ee=!0;break;case E:return ee=A._init,Ae(ee(A._payload),B,V,Y,J)}}if(ee)return J=J(A),ee=Y===""?"."+De(A,0):Y,F(J)?(V="",ee!=null&&(V=ee.replace(Ne,"$&/")+"/"),Ae(J,B,V,"",function($e){return $e})):J!=null&&(Z(J)&&(J=K(J,V+(J.key==null||A&&A.key===J.key?"":(""+J.key).replace(Ne,"$&/")+"/")+ee)),B.push(J)),1;ee=0;var Ue=Y===""?".":Y+":";if(F(A))for(var me=0;me<A.length;me++)Y=A[me],ue=Ue+De(Y,me),ee+=Ae(Y,B,V,ue,J);else if(me=j(A),typeof me=="function")for(A=me.call(A),me=0;!(Y=A.next()).done;)Y=Y.value,ue=Ue+De(Y,me++),ee+=Ae(Y,B,V,ue,J);else if(ue==="object"){if(typeof A.then=="function")return Ae(ne(A),B,V,Y,J);throw B=String(A),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ee}function D(A,B,V){if(A==null)return A;var Y=[],J=0;return Ae(A,Y,"","",function(ue){return B.call(V,ue,J++)}),Y}function k(A){if(A._status===-1){var B=A._result;B=B(),B.then(function(V){(A._status===0||A._status===-1)&&(A._status=1,A._result=V)},function(V){(A._status===0||A._status===-1)&&(A._status=2,A._result=V)}),A._status===-1&&(A._status=0,A._result=B)}if(A._status===1)return A._result.default;throw A._result}var P=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function be(){}return ce.Children={map:D,forEach:function(A,B,V){D(A,function(){B.apply(this,arguments)},V)},count:function(A){var B=0;return D(A,function(){B++}),B},toArray:function(A){return D(A,function(B){return B})||[]},only:function(A){if(!Z(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},ce.Component=z,ce.Fragment=o,ce.Profiler=d,ce.PureComponent=I,ce.StrictMode=c,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,ce.__COMPILER_RUNTIME={__proto__:null,c:function(A){return y.H.useMemoCache(A)}},ce.cache=function(A){return function(){return A.apply(null,arguments)}},ce.cloneElement=function(A,B,V){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var Y=X({},A.props),J=A.key,ue=void 0;if(B!=null)for(ee in B.ref!==void 0&&(ue=void 0),B.key!==void 0&&(J=""+B.key),B)!O.call(B,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&B.ref===void 0||(Y[ee]=B[ee]);var ee=arguments.length-2;if(ee===1)Y.children=V;else if(1<ee){for(var Ue=Array(ee),me=0;me<ee;me++)Ue[me]=arguments[me+2];Y.children=Ue}return H(A.type,J,void 0,void 0,ue,Y)},ce.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},ce.createElement=function(A,B,V){var Y,J={},ue=null;if(B!=null)for(Y in B.key!==void 0&&(ue=""+B.key),B)O.call(B,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(J[Y]=B[Y]);var ee=arguments.length-2;if(ee===1)J.children=V;else if(1<ee){for(var Ue=Array(ee),me=0;me<ee;me++)Ue[me]=arguments[me+2];J.children=Ue}if(A&&A.defaultProps)for(Y in ee=A.defaultProps,ee)J[Y]===void 0&&(J[Y]=ee[Y]);return H(A,ue,void 0,void 0,null,J)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(A){return{$$typeof:S,render:A}},ce.isValidElement=Z,ce.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:k}},ce.memo=function(A,B){return{$$typeof:b,type:A,compare:B===void 0?null:B}},ce.startTransition=function(A){var B=y.T,V={};y.T=V;try{var Y=A(),J=y.S;J!==null&&J(V,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(be,P)}catch(ue){P(ue)}finally{y.T=B}},ce.unstable_useCacheRefresh=function(){return y.H.useCacheRefresh()},ce.use=function(A){return y.H.use(A)},ce.useActionState=function(A,B,V){return y.H.useActionState(A,B,V)},ce.useCallback=function(A,B){return y.H.useCallback(A,B)},ce.useContext=function(A){return y.H.useContext(A)},ce.useDebugValue=function(){},ce.useDeferredValue=function(A,B){return y.H.useDeferredValue(A,B)},ce.useEffect=function(A,B,V){var Y=y.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Y.useEffect(A,B)},ce.useId=function(){return y.H.useId()},ce.useImperativeHandle=function(A,B,V){return y.H.useImperativeHandle(A,B,V)},ce.useInsertionEffect=function(A,B){return y.H.useInsertionEffect(A,B)},ce.useLayoutEffect=function(A,B){return y.H.useLayoutEffect(A,B)},ce.useMemo=function(A,B){return y.H.useMemo(A,B)},ce.useOptimistic=function(A,B){return y.H.useOptimistic(A,B)},ce.useReducer=function(A,B,V){return y.H.useReducer(A,B,V)},ce.useRef=function(A){return y.H.useRef(A)},ce.useState=function(A){return y.H.useState(A)},ce.useSyncExternalStore=function(A,B,V){return y.H.useSyncExternalStore(A,B,V)},ce.useTransition=function(){return y.H.useTransition()},ce.version="19.1.0",ce}var Cb;function ra(){return Cb||(Cb=1,as.exports=oy()),as.exports}var ie=ra(),is={exports:{}},ni={},ls={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function fy(){return Mb||(Mb=1,function(l){function u(D,k){var P=D.length;D.push(k);e:for(;0<P;){var be=P-1>>>1,A=D[be];if(0<d(A,k))D[be]=k,D[P]=A,P=be;else break e}}function o(D){return D.length===0?null:D[0]}function c(D){if(D.length===0)return null;var k=D[0],P=D.pop();if(P!==k){D[0]=P;e:for(var be=0,A=D.length,B=A>>>1;be<B;){var V=2*(be+1)-1,Y=D[V],J=V+1,ue=D[J];if(0>d(Y,P))J<A&&0>d(ue,Y)?(D[be]=ue,D[J]=P,be=J):(D[be]=Y,D[V]=P,be=V);else if(J<A&&0>d(ue,P))D[be]=ue,D[J]=P,be=J;else break e}}return k}function d(D,k){var P=D.sortIndex-k.sortIndex;return P!==0?P:D.id-k.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var m=Date,S=m.now();l.unstable_now=function(){return m.now()-S}}var h=[],b=[],E=1,M=null,j=3,G=!1,X=!1,q=!1,z=!1,W=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function F(D){for(var k=o(b);k!==null;){if(k.callback===null)c(b);else if(k.startTime<=D)c(b),k.sortIndex=k.expirationTime,u(h,k);else break;k=o(b)}}function y(D){if(q=!1,F(D),!X)if(o(h)!==null)X=!0,O||(O=!0,De());else{var k=o(b);k!==null&&Ae(y,k.startTime-D)}}var O=!1,H=-1,K=5,Z=-1;function ge(){return z?!0:!(l.unstable_now()-Z<K)}function Ne(){if(z=!1,O){var D=l.unstable_now();Z=D;var k=!0;try{e:{X=!1,q&&(q=!1,I(H),H=-1),G=!0;var P=j;try{n:{for(F(D),M=o(h);M!==null&&!(M.expirationTime>D&&ge());){var be=M.callback;if(typeof be=="function"){M.callback=null,j=M.priorityLevel;var A=be(M.expirationTime<=D);if(D=l.unstable_now(),typeof A=="function"){M.callback=A,F(D),k=!0;break n}M===o(h)&&c(h),F(D)}else c(h);M=o(h)}if(M!==null)k=!0;else{var B=o(b);B!==null&&Ae(y,B.startTime-D),k=!1}}break e}finally{M=null,j=P,G=!1}k=void 0}}finally{k?De():O=!1}}}var De;if(typeof re=="function")De=function(){re(Ne)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ne=fe.port2;fe.port1.onmessage=Ne,De=function(){ne.postMessage(null)}}else De=function(){W(Ne,0)};function Ae(D,k){H=W(function(){D(l.unstable_now())},k)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(D){D.callback=null},l.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<D?Math.floor(1e3/D):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_next=function(D){switch(j){case 1:case 2:case 3:var k=3;break;default:k=j}var P=j;j=k;try{return D()}finally{j=P}},l.unstable_requestPaint=function(){z=!0},l.unstable_runWithPriority=function(D,k){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var P=j;j=D;try{return k()}finally{j=P}},l.unstable_scheduleCallback=function(D,k,P){var be=l.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?be+P:be):P=be,D){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=P+A,D={id:E++,callback:k,priorityLevel:D,startTime:P,expirationTime:A,sortIndex:-1},P>be?(D.sortIndex=P,u(b,D),o(h)===null&&D===o(b)&&(q?(I(H),H=-1):q=!0,Ae(y,P-be))):(D.sortIndex=A,u(h,D),X||G||(X=!0,O||(O=!0,De()))),D},l.unstable_shouldYield=ge,l.unstable_wrapCallback=function(D){var k=j;return function(){var P=j;j=k;try{return D.apply(this,arguments)}finally{j=P}}}}(us)),us}var wb;function dy(){return wb||(wb=1,ls.exports=fy()),ls.exports}var cs={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb;function by(){if(Hb)return tn;Hb=1;var l=ra();function u(h){var b="https://react.dev/errors/"+h;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)b+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+h+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function p(h,b,E){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:M==null?null:""+M,children:h,containerInfo:b,implementation:E}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(h,b){if(h==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tn.createPortal=function(h,b){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(u(299));return p(h,b,null,E)},tn.flushSync=function(h){var b=m.T,E=c.p;try{if(m.T=null,c.p=2,h)return h()}finally{m.T=b,c.p=E,c.d.f()}},tn.preconnect=function(h,b){typeof h=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(h,b))},tn.prefetchDNS=function(h){typeof h=="string"&&c.d.D(h)},tn.preinit=function(h,b){if(typeof h=="string"&&b&&typeof b.as=="string"){var E=b.as,M=S(E,b.crossOrigin),j=typeof b.integrity=="string"?b.integrity:void 0,G=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;E==="style"?c.d.S(h,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:M,integrity:j,fetchPriority:G}):E==="script"&&c.d.X(h,{crossOrigin:M,integrity:j,fetchPriority:G,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},tn.preinitModule=function(h,b){if(typeof h=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var E=S(b.as,b.crossOrigin);c.d.M(h,{crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(h)},tn.preload=function(h,b){if(typeof h=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var E=b.as,M=S(E,b.crossOrigin);c.d.L(h,E,{crossOrigin:M,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},tn.preloadModule=function(h,b){if(typeof h=="string")if(b){var E=S(b.as,b.crossOrigin);c.d.m(h,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:E,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(h)},tn.requestFormReset=function(h){c.d.r(h)},tn.unstable_batchedUpdates=function(h,b){return h(b)},tn.useFormState=function(h,b,E){return m.H.useFormState(h,b,E)},tn.useFormStatus=function(){return m.H.useHostTransitionStatus()},tn.version="19.1.0",tn}var Lb;function hy(){if(Lb)return cs.exports;Lb=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),cs.exports=by(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function py(){if(Ub)return ni;Ub=1;var l=dy(),u=ra(),o=hy();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(p(e)!==e)throw Error(c(188))}function h(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return S(a),e;if(i===r)return S(a),n;i=i.sibling}throw Error(c(188))}if(t.return!==r.return)t=a,r=i;else{for(var s=!1,f=a.child;f;){if(f===t){s=!0,t=a,r=i;break}if(f===r){s=!0,r=a,t=i;break}f=f.sibling}if(!s){for(f=i.child;f;){if(f===t){s=!0,t=i,r=a;break}if(f===r){s=!0,r=i,t=a;break}f=f.sibling}if(!s)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,M=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),W=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),re=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),ge=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function ne(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case z:return"Profiler";case q:return"StrictMode";case y:return"Suspense";case O:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case G:return"Portal";case re:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:ne(e.type)||"Memo";case K:n=e._payload,e=e._init;try{return ne(e(n))}catch{}}return null}var Ae=Array.isArray,D=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},be=[],A=-1;function B(e){return{current:e}}function V(e){0>A||(e.current=be[A],be[A]=null,A--)}function Y(e,n){A++,be[A]=e.current,e.current=n}var J=B(null),ue=B(null),ee=B(null),Ue=B(null);function me(e,n){switch(Y(ee,n),Y(ue,e),Y(J,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nb(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nb(n),e=tb(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(J),Y(J,e)}function $e(){V(J),V(ue),V(ee)}function Qn(e){e.memoizedState!==null&&Y(Ue,e);var n=J.current,t=tb(n,e.type);n!==t&&(Y(ue,e),Y(J,t))}function Zn(e){ue.current===e&&(V(J),V(ue)),Ue.current===e&&(V(Ue),Qa._currentValue=P)}var dr=Object.prototype.hasOwnProperty,br=l.unstable_scheduleCallback,Jn=l.unstable_cancelCallback,Il=l.unstable_shouldYield,Vl=l.unstable_requestPaint,bn=l.unstable_now,Xl=l.unstable_getCurrentPriorityLevel,oe=l.unstable_ImmediatePriority,we=l.unstable_UserBlockingPriority,an=l.unstable_NormalPriority,Bn=l.unstable_LowPriority,di=l.unstable_IdlePriority,Us=l.log,bi=l.unstable_setDisableYieldValue,Yn=null,Ve=null;function pt(e){if(typeof Us=="function"&&bi(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(Yn,e)}catch{}}var hn=Math.clz32?Math.clz32:W0,X0=Math.log,K0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(X0(e)/K0|0)|0}var hi=256,pi=4194304;function Gt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yi(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var f=r&134217727;return f!==0?(r=f&~i,r!==0?a=Gt(r):(s&=f,s!==0?a=Gt(s):t||(t=f&~e,t!==0&&(a=Gt(t))))):(f=r&~i,f!==0?a=Gt(f):s!==0?a=Gt(s):t||(t=r&~e,t!==0&&(a=Gt(t)))),a===0?0:n!==0&&n!==a&&(n&i)===0&&(i=a&-a,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:a}function aa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function P0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=hi;return hi<<=1,(hi&4194048)===0&&(hi=256),e}function js(){var e=pi;return pi<<=1,(pi&62914560)===0&&(pi=4194304),e}function Kl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ia(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Q0(e,n,t,r,a,i){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,x=e.hiddenUpdates;for(t=s&~t;0<t;){var w=31-hn(t),U=1<<w;f[w]=0,v[w]=-1;var N=x[w];if(N!==null)for(x[w]=null,w=0;w<N.length;w++){var C=N[w];C!==null&&(C.lane&=-536870913)}t&=~U}r!==0&&ks(e,r,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~n))}function ks(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-hn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&4194090}function zs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-hn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}function Wl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=k.p;return e!==0?e:(e=window.event,e===void 0?32:Eb(e.type))}function Z0(e,n){var t=k.p;try{return k.p=e,n()}finally{k.p=t}}var yt=Math.random().toString(36).slice(2),en="__reactFiber$"+yt,un="__reactProps$"+yt,hr="__reactContainer$"+yt,Ql="__reactEvents$"+yt,J0="__reactListeners$"+yt,F0="__reactHandles$"+yt,qs="__reactResources$"+yt,la="__reactMarker$"+yt;function Zl(e){delete e[en],delete e[un],delete e[Ql],delete e[J0],delete e[F0]}function pr(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[hr]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=lb(e);e!==null;){if(t=e[en])return t;e=lb(e)}return n}e=t,t=e.parentNode}return null}function yr(e){if(e=e[en]||e[hr]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ua(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function mr(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xe(e){e[la]=!0}var Ys=new Set,Is={};function qt(e,n){vr(e,n),vr(e+"Capture",n)}function vr(e,n){for(Is[e]=n,e=0;e<n.length;e++)Ys.add(n[e])}var $0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Xs={};function eh(e){return dr.call(Xs,e)?!0:dr.call(Vs,e)?!1:$0.test(e)?Xs[e]=!0:(Vs[e]=!0,!1)}function mi(e,n,t){if(eh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function vi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Fn(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}var Jl,Ks;function gr(e){if(Jl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Jl=n&&n[1]||"",Ks=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jl+e+Ks}var Fl=!1;function $l(e,n){if(!e||Fl)return"";Fl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(C){var N=C}Reflect.construct(e,[],U)}else{try{U.call()}catch(C){N=C}e.call(U.prototype)}}else{try{throw Error()}catch(C){N=C}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(C){if(C&&N&&typeof C.stack=="string")return[C.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),s=i[0],f=i[1];if(s&&f){var v=s.split(`
`),x=f.split(`
`);for(a=r=0;r<v.length&&!v[r].includes("DetermineComponentFrameRoot");)r++;for(;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;if(r===v.length||a===x.length)for(r=v.length-1,a=x.length-1;1<=r&&0<=a&&v[r]!==x[a];)a--;for(;1<=r&&0<=a;r--,a--)if(v[r]!==x[a]){if(r!==1||a!==1)do if(r--,a--,0>a||v[r]!==x[a]){var w=`
`+v[r].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=r&&0<=a);break}}}finally{Fl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?gr(t):""}function nh(e){switch(e.tag){case 26:case 27:case 5:return gr(e.type);case 16:return gr("Lazy");case 13:return gr("Suspense");case 19:return gr("SuspenseList");case 0:case 15:return $l(e.type,!1);case 11:return $l(e.type.render,!1);case 1:return $l(e.type,!0);case 31:return gr("Activity");default:return""}}function Ws(e){try{var n="";do n+=nh(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ps(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function th(e){var n=Ps(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gi(e){e._valueTracker||(e._valueTracker=th(e))}function Qs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ps(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Si(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rh=/[\n"\\]/g;function _n(e){return e.replace(rh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function eu(e,n,t,r,a,i,s,f){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Tn(n)):e.value!==""+Tn(n)&&(e.value=""+Tn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?nu(e,s,Tn(n)):t!=null?nu(e,s,Tn(t)):r!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Tn(f):e.removeAttribute("name")}function Zs(e,n,t,r,a,i,s,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;t=t!=null?""+Tn(t):"",n=n!=null?""+Tn(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=f?e.checked:!!r,e.defaultChecked=!!r,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function nu(e,n,t){n==="number"&&Si(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Sr(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Js(e,n,t){if(n!=null&&(n=""+Tn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Tn(t):""}function Fs(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(c(92));if(Ae(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=Tn(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r)}function Er(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ah=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $s(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||ah.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function eo(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in n)r=n[a],n.hasOwnProperty(a)&&t[a]!==r&&$s(e,a,r)}else for(var i in n)n.hasOwnProperty(i)&&$s(e,i,n[i])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ei(e){return lh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ru=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ar=null,Rr=null;function no(e){var n=yr(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(eu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=r[un]||null;if(!a)throw Error(c(90));eu(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Qs(r)}break e;case"textarea":Js(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Sr(e,!!t.multiple,n,!1)}}}var iu=!1;function to(e,n,t){if(iu)return e(n,t);iu=!0;try{var r=e(n);return r}finally{if(iu=!1,(Ar!==null||Rr!==null)&&(ll(),Ar&&(n=Ar,e=Rr,Rr=Ar=null,no(n),e)))for(n=0;n<e.length;n++)no(e[n])}}function ca(e,n){var t=e.stateNode;if(t===null)return null;var r=t[un]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=!1;if($n)try{var sa={};Object.defineProperty(sa,"passive",{get:function(){lu=!0}}),window.addEventListener("test",sa,sa),window.removeEventListener("test",sa,sa)}catch{lu=!1}var mt=null,uu=null,Ai=null;function ro(){if(Ai)return Ai;var e,n=uu,t=n.length,r,a="value"in mt?mt.value:mt.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===a[i-r];r++);return Ai=a.slice(e,1<r?1-r:void 0)}function Ri(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ti(){return!0}function ao(){return!1}function cn(e){function n(t,r,a,i,s){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ti:ao,this.isPropagationStopped=ao,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),n}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=cn(Yt),oa=E({},Yt,{view:0,detail:0}),uh=cn(oa),cu,su,fa,Oi=E({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fa&&(fa&&e.type==="mousemove"?(cu=e.screenX-fa.screenX,su=e.screenY-fa.screenY):su=cu=0,fa=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),io=cn(Oi),ch=E({},Oi,{dataTransfer:0}),sh=cn(ch),oh=E({},oa,{relatedTarget:0}),ou=cn(oh),fh=E({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),dh=cn(fh),bh=E({},Yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hh=cn(bh),ph=E({},Yt,{data:0}),lo=cn(ph),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vh[e])?!!n[e]:!1}function fu(){return gh}var Sh=E({},oa,{key:function(e){if(e.key){var n=yh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ri(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Ri(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ri(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=cn(Sh),Ah=E({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=cn(Ah),Rh=E({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),Th=cn(Rh),_h=E({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oh=cn(_h),xh=E({},Oi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=cn(xh),Dh=E({},Yt,{newState:0,oldState:0}),Ch=cn(Dh),Mh=[9,13,27,32],du=$n&&"CompositionEvent"in window,da=null;$n&&"documentMode"in document&&(da=document.documentMode);var wh=$n&&"TextEvent"in window&&!da,co=$n&&(!du||da&&8<da&&11>=da),so=" ",oo=!1;function fo(e,n){switch(e){case"keyup":return Mh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Hh(e,n){switch(e){case"compositionend":return bo(n);case"keypress":return n.which!==32?null:(oo=!0,so);case"textInput":return e=n.data,e===so&&oo?null:e;default:return null}}function Lh(e,n){if(Tr)return e==="compositionend"||!du&&fo(e,n)?(e=ro(),Ai=uu=mt=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return co&&n.locale!=="ko"?null:n.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ho(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Uh[e.type]:n==="textarea"}function po(e,n,t,r){Ar?Rr?Rr.push(r):Rr=[r]:Ar=r,n=dl(n,"onChange"),0<n.length&&(t=new _i("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var ba=null,ha=null;function Bh(e){Zd(e,0)}function xi(e){var n=ua(e);if(Qs(n))return e}function yo(e,n){if(e==="change")return n}var mo=!1;if($n){var bu;if($n){var hu="oninput"in document;if(!hu){var vo=document.createElement("div");vo.setAttribute("oninput","return;"),hu=typeof vo.oninput=="function"}bu=hu}else bu=!1;mo=bu&&(!document.documentMode||9<document.documentMode)}function go(){ba&&(ba.detachEvent("onpropertychange",So),ha=ba=null)}function So(e){if(e.propertyName==="value"&&xi(ha)){var n=[];po(n,ha,e,au(e)),to(Bh,n)}}function jh(e,n,t){e==="focusin"?(go(),ba=n,ha=t,ba.attachEvent("onpropertychange",So)):e==="focusout"&&go()}function kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xi(ha)}function zh(e,n){if(e==="click")return xi(n)}function Gh(e,n){if(e==="input"||e==="change")return xi(n)}function qh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:qh;function pa(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!dr.call(n,a)||!pn(e[a],n[a]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,n){var t=Eo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Eo(t)}}function Ro(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ro(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function To(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Si(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Si(e.document)}return n}function pu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Yh=$n&&"documentMode"in document&&11>=document.documentMode,_r=null,yu=null,ya=null,mu=!1;function _o(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mu||_r==null||_r!==Si(r)||(r=_r,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ya&&pa(ya,r)||(ya=r,r=dl(yu,"onSelect"),0<r.length&&(n=new _i("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=_r)))}function It(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Or={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionrun:It("Transition","TransitionRun"),transitionstart:It("Transition","TransitionStart"),transitioncancel:It("Transition","TransitionCancel"),transitionend:It("Transition","TransitionEnd")},vu={},Oo={};$n&&(Oo=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function Vt(e){if(vu[e])return vu[e];if(!Or[e])return e;var n=Or[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Oo)return vu[e]=n[t];return e}var xo=Vt("animationend"),No=Vt("animationiteration"),Do=Vt("animationstart"),Ih=Vt("transitionrun"),Vh=Vt("transitionstart"),Xh=Vt("transitioncancel"),Co=Vt("transitionend"),Mo=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function jn(e,n){Mo.set(e,n),qt(n,[e])}var wo=new WeakMap;function On(e,n){if(typeof e=="object"&&e!==null){var t=wo.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ws(n)},wo.set(e,n),n)}return{value:e,source:n,stack:Ws(n)}}var xn=[],xr=0,Su=0;function Ni(){for(var e=xr,n=Su=xr=0;n<e;){var t=xn[n];xn[n++]=null;var r=xn[n];xn[n++]=null;var a=xn[n];xn[n++]=null;var i=xn[n];if(xn[n++]=null,r!==null&&a!==null){var s=r.pending;s===null?a.next=a:(a.next=s.next,s.next=a),r.pending=a}i!==0&&Ho(t,a,i)}}function Di(e,n,t,r){xn[xr++]=e,xn[xr++]=n,xn[xr++]=t,xn[xr++]=r,Su|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Eu(e,n,t,r){return Di(e,n,t,r),Ci(e)}function Nr(e,n){return Di(e,null,null,n),Ci(e)}function Ho(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var a=!1,i=e.return;i!==null;)i.childLanes|=t,r=i.alternate,r!==null&&(r.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&n!==null&&(a=31-hn(t),e=i.hiddenUpdates,r=e[a],r===null?e[a]=[n]:r.push(n),n.lane=t|536870912),i):null}function Ci(e){if(50<qa)throw qa=0,xc=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Dr={};function Kh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,n,t,r){return new Kh(e,n,t,r)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function et(e,n){var t=e.alternate;return t===null?(t=yn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Lo(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Mi(e,n,t,r,a,i){var s=0;if(r=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=Pp(e,t,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=yn(31,t,n,a),e.elementType=Z,e.lanes=i,e;case X:return Xt(t.children,a,i,n);case q:s=8,a|=24;break;case z:return e=yn(12,t,n,a|2),e.elementType=z,e.lanes=i,e;case y:return e=yn(13,t,n,a),e.elementType=y,e.lanes=i,e;case O:return e=yn(19,t,n,a),e.elementType=O,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case W:case re:s=10;break e;case I:s=9;break e;case F:s=11;break e;case H:s=14;break e;case K:s=16,r=null;break e}s=29,t=Error(c(130,e===null?"null":typeof e,"")),r=null}return n=yn(s,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function Xt(e,n,t,r){return e=yn(7,e,r,n),e.lanes=t,e}function Ru(e,n,t){return e=yn(6,e,null,n),e.lanes=t,e}function Tu(e,n,t){return n=yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Cr=[],Mr=0,wi=null,Hi=0,Nn=[],Dn=0,Kt=null,nt=1,tt="";function Wt(e,n){Cr[Mr++]=Hi,Cr[Mr++]=wi,wi=e,Hi=n}function Uo(e,n,t){Nn[Dn++]=nt,Nn[Dn++]=tt,Nn[Dn++]=Kt,Kt=e;var r=nt;e=tt;var a=32-hn(r)-1;r&=~(1<<a),t+=1;var i=32-hn(n)+a;if(30<i){var s=a-a%5;i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,nt=1<<32-hn(n)+a|t<<a|r,tt=i+e}else nt=1<<i|t<<a|r,tt=e}function _u(e){e.return!==null&&(Wt(e,1),Uo(e,1,0))}function Ou(e){for(;e===wi;)wi=Cr[--Mr],Cr[Mr]=null,Hi=Cr[--Mr],Cr[Mr]=null;for(;e===Kt;)Kt=Nn[--Dn],Nn[Dn]=null,tt=Nn[--Dn],Nn[Dn]=null,nt=Nn[--Dn],Nn[Dn]=null}var ln=null,Be=null,Ee=!1,Pt=null,In=!1,xu=Error(c(519));function Qt(e){var n=Error(c(418,""));throw ga(On(n,e)),xu}function Bo(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[en]=e,n[un]=r,t){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(t=0;t<Ia.length;t++)ye(Ia[t],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Zs(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),gi(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Fs(n,r.value,r.defaultValue,r.children),gi(n)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||eb(n.textContent,t)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=bl),n=!0):n=!1,n||Qt(e)}function jo(e){for(ln=e.return;ln;)switch(ln.tag){case 5:case 13:In=!1;return;case 27:case 3:In=!0;return;default:ln=ln.return}}function ma(e){if(e!==ln)return!1;if(!Ee)return jo(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ic(e.type,e.memoizedProps)),t=!t),t&&Be&&Qt(e),jo(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){Be=zn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}Be=null}}else n===27?(n=Be,Ht(e.type)?(e=Wc,Wc=null,Be=e):Be=n):Be=ln?zn(e.stateNode.nextSibling):null;return!0}function va(){Be=ln=null,Ee=!1}function ko(){var e=Pt;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),Pt=null),e}function ga(e){Pt===null?Pt=[e]:Pt.push(e)}var Nu=B(null),Zt=null,rt=null;function vt(e,n,t){Y(Nu,n._currentValue),n._currentValue=t}function at(e){e._currentValue=Nu.current,V(Nu)}function Du(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Cu(e,n,t,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var s=a.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=a;for(var v=0;v<n.length;v++)if(f.context===n[v]){i.lanes|=t,f=i.alternate,f!==null&&(f.lanes|=t),Du(i.return,t,e),r||(s=null);break e}i=f.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(c(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),Du(s,t,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Sa(e,n,t,r){e=null;for(var a=n,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=a.type;pn(a.pendingProps.value,s.value)||(e!==null?e.push(f):e=[f])}}else if(a===Ue.current){if(s=a.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Qa):e=[Qa])}a=a.return}e!==null&&Cu(n,e,t,r),n.flags|=262144}function Li(e){for(e=e.firstContext;e!==null;){if(!pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jt(e){Zt=e,rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return zo(Zt,e)}function Ui(e,n){return Zt===null&&Jt(e),zo(e,n)}function zo(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},rt===null){if(e===null)throw Error(c(308));rt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else rt=rt.next=n;return t}var Wh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Ph=l.unstable_scheduleCallback,Qh=l.unstable_NormalPriority,Ye={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Wh,data:new Map,refCount:0}}function Ea(e){e.refCount--,e.refCount===0&&Ph(Qh,function(){e.controller.abort()})}var Aa=null,wu=0,wr=0,Hr=null;function Zh(e,n){if(Aa===null){var t=Aa=[];wu=0,wr=Lc(),Hr={status:"pending",value:void 0,then:function(r){t.push(r)}}}return wu++,n.then(Go,Go),n}function Go(){if(--wu===0&&Aa!==null){Hr!==null&&(Hr.status="fulfilled");var e=Aa;Aa=null,wr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jh(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var a=0;a<t.length;a++)(0,t[a])(n)},function(a){for(r.status="rejected",r.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),r}var qo=D.S;D.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zh(e,n),qo!==null&&qo(e,n)};var Ft=B(null);function Hu(){var e=Ft.current;return e!==null?e:Me.pooledCache}function Bi(e,n){n===null?Y(Ft,Ft.current):Y(Ft,n.pool)}function Yo(){var e=Hu();return e===null?null:{parent:Ye._currentValue,pool:e}}var Ra=Error(c(460)),Io=Error(c(474)),ji=Error(c(542)),Lu={then:function(){}};function Vo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ki(){}function Xo(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(ki,ki),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wo(e),e;default:if(typeof n.status=="string")n.then(ki,ki);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=r}},function(r){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Wo(e),e}throw Ta=n,Ra}}var Ta=null;function Ko(){if(Ta===null)throw Error(c(459));var e=Ta;return Ta=null,e}function Wo(e){if(e===Ra||e===ji)throw Error(c(483))}var gt=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function St(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Et(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,n=Ci(e),Ho(e,null,t),n}return Di(e,r,n,t),Ci(e)}function _a(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zs(e,t)}}function ju(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?a=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var ku=!1;function Oa(){if(ku){var e=Hr;if(e!==null)throw e}}function xa(e,n,t,r){ku=!1;var a=e.updateQueue;gt=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var v=f,x=v.next;v.next=null,s===null?i=x:s.next=x,s=v;var w=e.alternate;w!==null&&(w=w.updateQueue,f=w.lastBaseUpdate,f!==s&&(f===null?w.firstBaseUpdate=x:f.next=x,w.lastBaseUpdate=v))}if(i!==null){var U=a.baseState;s=0,w=x=v=null,f=i;do{var N=f.lane&-536870913,C=N!==f.lane;if(C?(ve&N)===N:(r&N)===N){N!==0&&N===wr&&(ku=!0),w!==null&&(w=w.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var le=e,te=f;N=n;var xe=t;switch(te.tag){case 1:if(le=te.payload,typeof le=="function"){U=le.call(xe,U,N);break e}U=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=te.payload,N=typeof le=="function"?le.call(xe,U,N):le,N==null)break e;U=E({},U,N);break e;case 2:gt=!0}}N=f.callback,N!==null&&(e.flags|=64,C&&(e.flags|=8192),C=a.callbacks,C===null?a.callbacks=[N]:C.push(N))}else C={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},w===null?(x=w=C,v=U):w=w.next=C,s|=N;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;C=f,f=C.next,C.next=null,a.lastBaseUpdate=C,a.shared.pending=null}}while(!0);w===null&&(v=U),a.baseState=v,a.firstBaseUpdate=x,a.lastBaseUpdate=w,i===null&&(a.shared.lanes=0),Dt|=s,e.lanes=s,e.memoizedState=U}}function Po(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Qo(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Po(t[e],n)}var Lr=B(null),zi=B(0);function Zo(e,n){e=ft,Y(zi,e),Y(Lr,n),ft=e|n.baseLanes}function zu(){Y(zi,ft),Y(Lr,Lr.current)}function Gu(){ft=zi.current,V(Lr),V(zi)}var At=0,de=null,_e=null,Ge=null,Gi=!1,Ur=!1,$t=!1,qi=0,Na=0,Br=null,Fh=0;function ke(){throw Error(c(321))}function qu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function Yu(e,n,t,r,a,i){return At=i,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,D.H=e===null||e.memoizedState===null?Lf:Uf,$t=!1,i=t(r,a),$t=!1,Ur&&(i=Fo(n,t,r,a)),Jo(e),i}function Jo(e){D.H=Wi;var n=_e!==null&&_e.next!==null;if(At=0,Ge=_e=de=null,Gi=!1,Na=0,Br=null,n)throw Error(c(300));e===null||Ke||(e=e.dependencies,e!==null&&Li(e)&&(Ke=!0))}function Fo(e,n,t,r){de=e;var a=0;do{if(Ur&&(Br=null),Na=0,Ur=!1,25<=a)throw Error(c(301));if(a+=1,Ge=_e=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=ip,i=n(t,r)}while(Ur);return i}function $h(){var e=D.H,n=e.useState()[0];return n=typeof n.then=="function"?Da(n):n,e=e.useState()[0],(_e!==null?_e.memoizedState:null)!==e&&(de.flags|=1024),n}function Iu(){var e=qi!==0;return qi=0,e}function Vu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Xu(e){if(Gi){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gi=!1}At=0,Ge=_e=de=null,Ur=!1,Na=qi=0,Br=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?de.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(_e===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var n=Ge===null?de.memoizedState:Ge.next;if(n!==null)Ge=n,_e=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Ge===null?de.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Da(e){var n=Na;return Na+=1,Br===null&&(Br=[]),e=Xo(Br,e,n),n=de,(Ge===null?n.memoizedState:Ge.next)===null&&(n=n.alternate,D.H=n===null||n.memoizedState===null?Lf:Uf),e}function Yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Da(e);if(e.$$typeof===re)return nn(e)}throw Error(c(438,String(e)))}function Wu(e){var n=null,t=de.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=de.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ku(),de.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=ge;return n.index++,t}function it(e,n){return typeof n=="function"?n(e):n}function Ii(e){var n=qe();return Pu(n,_e,e)}function Pu(e,n,t){var r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=t;var a=e.baseQueue,i=r.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{n=a.next;var f=s=null,v=null,x=n,w=!1;do{var U=x.lane&-536870913;if(U!==x.lane?(ve&U)===U:(At&U)===U){var N=x.revertLane;if(N===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),U===wr&&(w=!0);else if((At&N)===N){x=x.next,N===wr&&(w=!0);continue}else U={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},v===null?(f=v=U,s=i):v=v.next=U,de.lanes|=N,Dt|=N;U=x.action,$t&&t(i,U),i=x.hasEagerState?x.eagerState:t(i,U)}else N={lane:U,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},v===null?(f=v=N,s=i):v=v.next=N,de.lanes|=U,Dt|=U;x=x.next}while(x!==null&&x!==n);if(v===null?s=i:v.next=f,!pn(i,e.memoizedState)&&(Ke=!0,w&&(t=Hr,t!==null)))throw t;e.memoizedState=i,e.baseState=s,e.baseQueue=v,r.lastRenderedState=i}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Qu(e){var n=qe(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);pn(i,n.memoizedState)||(Ke=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function $o(e,n,t){var r=de,a=qe(),i=Ee;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=n();var s=!pn((_e||a).memoizedState,t);s&&(a.memoizedState=t,Ke=!0),a=a.queue;var f=tf.bind(null,r,a,e);if(Ca(2048,8,f,[e]),a.getSnapshot!==n||s||Ge!==null&&Ge.memoizedState.tag&1){if(r.flags|=2048,jr(9,Vi(),nf.bind(null,r,a,t,n),null),Me===null)throw Error(c(349));i||(At&124)!==0||ef(r,n,t)}return t}function ef(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n=Ku(),de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nf(e,n,t,r){n.value=t,n.getSnapshot=r,rf(n)&&af(e)}function tf(e,n,t){return t(function(){rf(n)&&af(e)})}function rf(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function af(e){var n=Nr(e,2);n!==null&&En(n,e,2)}function Zu(e){var n=sn();if(typeof e=="function"){var t=e;if(e=t(),$t){pt(!0);try{t()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:e},n}function lf(e,n,t,r){return e.baseState=t,Pu(e,_e,typeof r=="function"?r:it)}function ep(e,n,t,r,a){if(Ki(e))throw Error(c(485));if(e=n.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};D.T!==null?t(!0):i.isTransition=!1,r(i),t=n.pending,t===null?(i.next=n.pending=i,uf(n,i)):(i.next=t.next,n.pending=t.next=i)}}function uf(e,n){var t=n.action,r=n.payload,a=e.state;if(n.isTransition){var i=D.T,s={};D.T=s;try{var f=t(a,r),v=D.S;v!==null&&v(s,f),cf(e,n,f)}catch(x){Ju(e,n,x)}finally{D.T=i}}else try{i=t(a,r),cf(e,n,i)}catch(x){Ju(e,n,x)}}function cf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){sf(e,n,r)},function(r){return Ju(e,n,r)}):sf(e,n,t)}function sf(e,n,t){n.status="fulfilled",n.value=t,of(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,uf(e,t)))}function Ju(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,of(n),n=n.next;while(n!==r)}e.action=null}function of(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ff(e,n){return n}function df(e,n){if(Ee){var t=Me.formState;if(t!==null){e:{var r=de;if(Ee){if(Be){n:{for(var a=Be,i=In;a.nodeType!==8;){if(!i){a=null;break n}if(a=zn(a.nextSibling),a===null){a=null;break n}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Be=zn(a.nextSibling),r=a.data==="F!";break e}}Qt(r)}r=!1}r&&(n=t[0])}}return t=sn(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ff,lastRenderedState:n},t.queue=r,t=Mf.bind(null,de,r),r.dispatch=t,r=Zu(!1),i=tc.bind(null,de,!1,r.queue),r=sn(),a={state:n,dispatch:null,action:e,pending:null},r.queue=a,t=ep.bind(null,de,a,i,t),a.dispatch=t,r.memoizedState=e,[n,t,!1]}function bf(e){var n=qe();return hf(n,_e,e)}function hf(e,n,t){if(n=Pu(e,n,ff)[0],e=Ii(it)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Da(n)}catch(s){throw s===Ra?ji:s}else r=n;n=qe();var a=n.queue,i=a.dispatch;return t!==n.memoizedState&&(de.flags|=2048,jr(9,Vi(),np.bind(null,a,t),null)),[r,i,e]}function np(e,n){e.action=n}function pf(e){var n=qe(),t=_e;if(t!==null)return hf(n,t,e);qe(),n=n.memoizedState,t=qe();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function jr(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=de.updateQueue,n===null&&(n=Ku(),de.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function Vi(){return{destroy:void 0,resource:void 0}}function yf(){return qe().memoizedState}function Xi(e,n,t,r){var a=sn();r=r===void 0?null:r,de.flags|=e,a.memoizedState=jr(1|n,Vi(),t,r)}function Ca(e,n,t,r){var a=qe();r=r===void 0?null:r;var i=a.memoizedState.inst;_e!==null&&r!==null&&qu(r,_e.memoizedState.deps)?a.memoizedState=jr(n,i,t,r):(de.flags|=e,a.memoizedState=jr(1|n,i,t,r))}function mf(e,n){Xi(8390656,8,e,n)}function vf(e,n){Ca(2048,8,e,n)}function gf(e,n){return Ca(4,2,e,n)}function Sf(e,n){return Ca(4,4,e,n)}function Ef(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Af(e,n,t){t=t!=null?t.concat([e]):null,Ca(4,4,Ef.bind(null,n,e),t)}function Fu(){}function Rf(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&qu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Tf(e,n){var t=qe();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&qu(n,r[1]))return r[0];if(r=e(),$t){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[r,n],r}function $u(e,n,t){return t===void 0||(At&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=xd(),de.lanes|=e,Dt|=e,t)}function _f(e,n,t,r){return pn(t,n)?t:Lr.current!==null?(e=$u(e,t,r),pn(e,n)||(Ke=!0),e):(At&42)===0?(Ke=!0,e.memoizedState=t):(e=xd(),de.lanes|=e,Dt|=e,n)}function Of(e,n,t,r,a){var i=k.p;k.p=i!==0&&8>i?i:8;var s=D.T,f={};D.T=f,tc(e,!1,n,t);try{var v=a(),x=D.S;if(x!==null&&x(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var w=Jh(v,r);Ma(e,n,w,Sn(e))}else Ma(e,n,r,Sn(e))}catch(U){Ma(e,n,{then:function(){},status:"rejected",reason:U},Sn())}finally{k.p=i,D.T=s}}function tp(){}function ec(e,n,t,r){if(e.tag!==5)throw Error(c(476));var a=xf(e).queue;Of(e,a,n,P,t===null?tp:function(){return Nf(e),t(r)})}function xf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:P},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Nf(e){var n=xf(e).next.queue;Ma(e,n,{},Sn())}function nc(){return nn(Qa)}function Df(){return qe().memoizedState}function Cf(){return qe().memoizedState}function rp(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=Sn();e=St(t);var r=Et(n,e,t);r!==null&&(En(r,n,t),_a(r,n,t)),n={cache:Mu()},e.payload=n;return}n=n.return}}function ap(e,n,t){var r=Sn();t={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Ki(e)?wf(n,t):(t=Eu(e,n,t,r),t!==null&&(En(t,e,r),Hf(t,n,r)))}function Mf(e,n,t){var r=Sn();Ma(e,n,t,r)}function Ma(e,n,t,r){var a={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ki(e))wf(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,f=i(s,t);if(a.hasEagerState=!0,a.eagerState=f,pn(f,s))return Di(e,n,a,0),Me===null&&Ni(),!1}catch{}finally{}if(t=Eu(e,n,a,r),t!==null)return En(t,e,r),Hf(t,n,r),!0}return!1}function tc(e,n,t,r){if(r={lane:2,revertLane:Lc(),action:r,hasEagerState:!1,eagerState:null,next:null},Ki(e)){if(n)throw Error(c(479))}else n=Eu(e,t,r,2),n!==null&&En(n,e,2)}function Ki(e){var n=e.alternate;return e===de||n!==null&&n===de}function wf(e,n){Ur=Gi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Hf(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,zs(e,t)}}var Wi={readContext:nn,use:Yi,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},Lf={readContext:nn,use:Yi,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:mf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Xi(4194308,4,Ef.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Xi(4194308,4,e,n)},useInsertionEffect:function(e,n){Xi(4,2,e,n)},useMemo:function(e,n){var t=sn();n=n===void 0?null:n;var r=e();if($t){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=sn();if(t!==void 0){var a=t(n);if($t){pt(!0);try{t(n)}finally{pt(!1)}}}else a=n;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=ap.bind(null,de,e),[r.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,t=Mf.bind(null,de,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Fu,useDeferredValue:function(e,n){var t=sn();return $u(t,e,n)},useTransition:function(){var e=Zu(!1);return e=Of.bind(null,de,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=de,a=sn();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Me===null)throw Error(c(349));(ve&124)!==0||ef(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,mf(tf.bind(null,r,i,e),[e]),r.flags|=2048,jr(9,Vi(),nf.bind(null,r,i,t,n),null),t},useId:function(){var e=sn(),n=Me.identifierPrefix;if(Ee){var t=tt,r=nt;t=(r&~(1<<32-hn(r)-1)).toString(32)+t,n="«"+n+"R"+t,t=qi++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=Fh++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nc,useFormState:df,useActionState:df,useOptimistic:function(e){var n=sn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=tc.bind(null,de,!0,t),t.dispatch=n,[e,n]},useMemoCache:Wu,useCacheRefresh:function(){return sn().memoizedState=rp.bind(null,de)}},Uf={readContext:nn,use:Yi,useCallback:Rf,useContext:nn,useEffect:vf,useImperativeHandle:Af,useInsertionEffect:gf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Ii,useRef:yf,useState:function(){return Ii(it)},useDebugValue:Fu,useDeferredValue:function(e,n){var t=qe();return _f(t,_e.memoizedState,e,n)},useTransition:function(){var e=Ii(it)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Da(e),n]},useSyncExternalStore:$o,useId:Df,useHostTransitionStatus:nc,useFormState:bf,useActionState:bf,useOptimistic:function(e,n){var t=qe();return lf(t,_e,e,n)},useMemoCache:Wu,useCacheRefresh:Cf},ip={readContext:nn,use:Yi,useCallback:Rf,useContext:nn,useEffect:vf,useImperativeHandle:Af,useInsertionEffect:gf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Qu,useRef:yf,useState:function(){return Qu(it)},useDebugValue:Fu,useDeferredValue:function(e,n){var t=qe();return _e===null?$u(t,e,n):_f(t,_e.memoizedState,e,n)},useTransition:function(){var e=Qu(it)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Da(e),n]},useSyncExternalStore:$o,useId:Df,useHostTransitionStatus:nc,useFormState:pf,useActionState:pf,useOptimistic:function(e,n){var t=qe();return _e!==null?lf(t,_e,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Wu,useCacheRefresh:Cf},kr=null,wa=0;function Pi(e){var n=wa;return wa+=1,kr===null&&(kr=[]),Xo(kr,e,n)}function Ha(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Qi(e,n){throw n.$$typeof===M?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bf(e){var n=e._init;return n(e._payload)}function jf(e){function n(T,R){if(e){var _=T.deletions;_===null?(T.deletions=[R],T.flags|=16):_.push(R)}}function t(T,R){if(!e)return null;for(;R!==null;)n(T,R),R=R.sibling;return null}function r(T){for(var R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function a(T,R){return T=et(T,R),T.index=0,T.sibling=null,T}function i(T,R,_){return T.index=_,e?(_=T.alternate,_!==null?(_=_.index,_<R?(T.flags|=67108866,R):_):(T.flags|=67108866,R)):(T.flags|=1048576,R)}function s(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function f(T,R,_,L){return R===null||R.tag!==6?(R=Ru(_,T.mode,L),R.return=T,R):(R=a(R,_),R.return=T,R)}function v(T,R,_,L){var Q=_.type;return Q===X?w(T,R,_.props.children,L,_.key):R!==null&&(R.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===K&&Bf(Q)===R.type)?(R=a(R,_.props),Ha(R,_),R.return=T,R):(R=Mi(_.type,_.key,_.props,null,T.mode,L),Ha(R,_),R.return=T,R)}function x(T,R,_,L){return R===null||R.tag!==4||R.stateNode.containerInfo!==_.containerInfo||R.stateNode.implementation!==_.implementation?(R=Tu(_,T.mode,L),R.return=T,R):(R=a(R,_.children||[]),R.return=T,R)}function w(T,R,_,L,Q){return R===null||R.tag!==7?(R=Xt(_,T.mode,L,Q),R.return=T,R):(R=a(R,_),R.return=T,R)}function U(T,R,_){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Ru(""+R,T.mode,_),R.return=T,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return _=Mi(R.type,R.key,R.props,null,T.mode,_),Ha(_,R),_.return=T,_;case G:return R=Tu(R,T.mode,_),R.return=T,R;case K:var L=R._init;return R=L(R._payload),U(T,R,_)}if(Ae(R)||De(R))return R=Xt(R,T.mode,_,null),R.return=T,R;if(typeof R.then=="function")return U(T,Pi(R),_);if(R.$$typeof===re)return U(T,Ui(T,R),_);Qi(T,R)}return null}function N(T,R,_,L){var Q=R!==null?R.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return Q!==null?null:f(T,R,""+_,L);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case j:return _.key===Q?v(T,R,_,L):null;case G:return _.key===Q?x(T,R,_,L):null;case K:return Q=_._init,_=Q(_._payload),N(T,R,_,L)}if(Ae(_)||De(_))return Q!==null?null:w(T,R,_,L,null);if(typeof _.then=="function")return N(T,R,Pi(_),L);if(_.$$typeof===re)return N(T,R,Ui(T,_),L);Qi(T,_)}return null}function C(T,R,_,L,Q){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return T=T.get(_)||null,f(R,T,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return T=T.get(L.key===null?_:L.key)||null,v(R,T,L,Q);case G:return T=T.get(L.key===null?_:L.key)||null,x(R,T,L,Q);case K:var he=L._init;return L=he(L._payload),C(T,R,_,L,Q)}if(Ae(L)||De(L))return T=T.get(_)||null,w(R,T,L,Q,null);if(typeof L.then=="function")return C(T,R,_,Pi(L),Q);if(L.$$typeof===re)return C(T,R,_,Ui(R,L),Q);Qi(R,L)}return null}function le(T,R,_,L){for(var Q=null,he=null,$=R,ae=R=0,Pe=null;$!==null&&ae<_.length;ae++){$.index>ae?(Pe=$,$=null):Pe=$.sibling;var Se=N(T,$,_[ae],L);if(Se===null){$===null&&($=Pe);break}e&&$&&Se.alternate===null&&n(T,$),R=i(Se,R,ae),he===null?Q=Se:he.sibling=Se,he=Se,$=Pe}if(ae===_.length)return t(T,$),Ee&&Wt(T,ae),Q;if($===null){for(;ae<_.length;ae++)$=U(T,_[ae],L),$!==null&&(R=i($,R,ae),he===null?Q=$:he.sibling=$,he=$);return Ee&&Wt(T,ae),Q}for($=r($);ae<_.length;ae++)Pe=C($,T,ae,_[ae],L),Pe!==null&&(e&&Pe.alternate!==null&&$.delete(Pe.key===null?ae:Pe.key),R=i(Pe,R,ae),he===null?Q=Pe:he.sibling=Pe,he=Pe);return e&&$.forEach(function(kt){return n(T,kt)}),Ee&&Wt(T,ae),Q}function te(T,R,_,L){if(_==null)throw Error(c(151));for(var Q=null,he=null,$=R,ae=R=0,Pe=null,Se=_.next();$!==null&&!Se.done;ae++,Se=_.next()){$.index>ae?(Pe=$,$=null):Pe=$.sibling;var kt=N(T,$,Se.value,L);if(kt===null){$===null&&($=Pe);break}e&&$&&kt.alternate===null&&n(T,$),R=i(kt,R,ae),he===null?Q=kt:he.sibling=kt,he=kt,$=Pe}if(Se.done)return t(T,$),Ee&&Wt(T,ae),Q;if($===null){for(;!Se.done;ae++,Se=_.next())Se=U(T,Se.value,L),Se!==null&&(R=i(Se,R,ae),he===null?Q=Se:he.sibling=Se,he=Se);return Ee&&Wt(T,ae),Q}for($=r($);!Se.done;ae++,Se=_.next())Se=C($,T,ae,Se.value,L),Se!==null&&(e&&Se.alternate!==null&&$.delete(Se.key===null?ae:Se.key),R=i(Se,R,ae),he===null?Q=Se:he.sibling=Se,he=Se);return e&&$.forEach(function(ly){return n(T,ly)}),Ee&&Wt(T,ae),Q}function xe(T,R,_,L){if(typeof _=="object"&&_!==null&&_.type===X&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case j:e:{for(var Q=_.key;R!==null;){if(R.key===Q){if(Q=_.type,Q===X){if(R.tag===7){t(T,R.sibling),L=a(R,_.props.children),L.return=T,T=L;break e}}else if(R.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===K&&Bf(Q)===R.type){t(T,R.sibling),L=a(R,_.props),Ha(L,_),L.return=T,T=L;break e}t(T,R);break}else n(T,R);R=R.sibling}_.type===X?(L=Xt(_.props.children,T.mode,L,_.key),L.return=T,T=L):(L=Mi(_.type,_.key,_.props,null,T.mode,L),Ha(L,_),L.return=T,T=L)}return s(T);case G:e:{for(Q=_.key;R!==null;){if(R.key===Q)if(R.tag===4&&R.stateNode.containerInfo===_.containerInfo&&R.stateNode.implementation===_.implementation){t(T,R.sibling),L=a(R,_.children||[]),L.return=T,T=L;break e}else{t(T,R);break}else n(T,R);R=R.sibling}L=Tu(_,T.mode,L),L.return=T,T=L}return s(T);case K:return Q=_._init,_=Q(_._payload),xe(T,R,_,L)}if(Ae(_))return le(T,R,_,L);if(De(_)){if(Q=De(_),typeof Q!="function")throw Error(c(150));return _=Q.call(_),te(T,R,_,L)}if(typeof _.then=="function")return xe(T,R,Pi(_),L);if(_.$$typeof===re)return xe(T,R,Ui(T,_),L);Qi(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,R!==null&&R.tag===6?(t(T,R.sibling),L=a(R,_),L.return=T,T=L):(t(T,R),L=Ru(_,T.mode,L),L.return=T,T=L),s(T)):t(T,R)}return function(T,R,_,L){try{wa=0;var Q=xe(T,R,_,L);return kr=null,Q}catch($){if($===Ra||$===ji)throw $;var he=yn(29,$,null,T.mode);return he.lanes=L,he.return=T,he}finally{}}}var zr=jf(!0),kf=jf(!1),Cn=B(null),Vn=null;function Rt(e){var n=e.alternate;Y(Ie,Ie.current&1),Y(Cn,e),Vn===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Vn=e)}function zf(e){if(e.tag===22){if(Y(Ie,Ie.current),Y(Cn,e),Vn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Vn=e)}}else Tt()}function Tt(){Y(Ie,Ie.current),Y(Cn,Cn.current)}function lt(e){V(Cn),Vn===e&&(Vn=null),V(Ie)}var Ie=B(0);function Zi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Kc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function rc(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ac={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Sn(),a=St(r);a.payload=n,t!=null&&(a.callback=t),n=Et(e,a,r),n!==null&&(En(n,e,r),_a(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Sn(),a=St(r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=Et(e,a,r),n!==null&&(En(n,e,r),_a(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Sn(),r=St(t);r.tag=2,n!=null&&(r.callback=n),n=Et(e,r,t),n!==null&&(En(n,e,t),_a(n,e,t))}};function Gf(e,n,t,r,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!pa(t,r)||!pa(a,i):!0}function qf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ac.enqueueReplaceState(n,n.state,null)}function er(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var a in e)t[a]===void 0&&(t[a]=e[a])}return t}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yf(e){Ji(e)}function If(e){console.error(e)}function Vf(e){Ji(e)}function Fi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Xf(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ic(e,n,t){return t=St(t),t.tag=3,t.payload={element:null},t.callback=function(){Fi(e,n)},t}function Kf(e){return e=St(e),e.tag=3,e}function Wf(e,n,t,r){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Xf(n,t,r)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Xf(n,t,r),typeof a!="function"&&(Ct===null?Ct=new Set([this]):Ct.add(this));var f=r.stack;this.componentDidCatch(r.value,{componentStack:f!==null?f:""})})}function lp(e,n,t,r,a){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&Sa(n,t,a,!0),t=Cn.current,t!==null){switch(t.tag){case 13:return Vn===null?Dc():t.alternate===null&&je===0&&(je=3),t.flags&=-257,t.flags|=65536,t.lanes=a,r===Lu?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Mc(e,r,a)),!1;case 22:return t.flags|=65536,r===Lu?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Mc(e,r,a)),!1}throw Error(c(435,t.tag))}return Mc(e,r,a),Dc(),!1}if(Ee)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,r!==xu&&(e=Error(c(422),{cause:r}),ga(On(e,t)))):(r!==xu&&(n=Error(c(423),{cause:r}),ga(On(n,t))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=On(r,t),a=ic(e.stateNode,r,a),ju(e,a),je!==4&&(je=2)),!1;var i=Error(c(520),{cause:r});if(i=On(i,t),Ga===null?Ga=[i]:Ga.push(i),je!==4&&(je=2),n===null)return!0;r=On(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=a&-a,t.lanes|=e,e=ic(t.stateNode,r,e),ju(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ct===null||!Ct.has(i))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Kf(a),Wf(a,e,t,r),ju(t,a),!1}t=t.return}while(t!==null);return!1}var Pf=Error(c(461)),Ke=!1;function Qe(e,n,t,r){n.child=e===null?kf(n,null,t,r):zr(n,e.child,t,r)}function Qf(e,n,t,r,a){t=t.render;var i=n.ref;if("ref"in r){var s={};for(var f in r)f!=="ref"&&(s[f]=r[f])}else s=r;return Jt(n),r=Yu(e,n,t,s,i,a),f=Iu(),e!==null&&!Ke?(Vu(e,n,a),ut(e,n,a)):(Ee&&f&&_u(n),n.flags|=1,Qe(e,n,r,a),n.child)}function Zf(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!Au(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Jf(e,n,i,r,a)):(e=Mi(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!bc(e,a)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:pa,t(s,r)&&e.ref===n.ref)return ut(e,n,a)}return n.flags|=1,e=et(i,r),e.ref=n.ref,e.return=n,n.child=e}function Jf(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(pa(i,r)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=r=i,bc(e,a))(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,ut(e,n,a)}return lc(e,n,t,r,a)}function Ff(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;n.childLanes=i&~r}else n.childLanes=0,n.child=null;return $f(e,n,r,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bi(n,i!==null?i.cachePool:null),i!==null?Zo(n,i):zu(),zf(n);else return n.lanes=n.childLanes=536870912,$f(e,n,i!==null?i.baseLanes|t:t,t)}else i!==null?(Bi(n,i.cachePool),Zo(n,i),Tt(),n.memoizedState=null):(e!==null&&Bi(n,null),zu(),Tt());return Qe(e,n,a,t),n.child}function $f(e,n,t,r){var a=Hu();return a=a===null?null:{parent:Ye._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&Bi(n,null),zu(),zf(n),e!==null&&Sa(e,n,r,!0),null}function $i(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function lc(e,n,t,r,a){return Jt(n),t=Yu(e,n,t,r,void 0,a),r=Iu(),e!==null&&!Ke?(Vu(e,n,a),ut(e,n,a)):(Ee&&r&&_u(n),n.flags|=1,Qe(e,n,t,a),n.child)}function ed(e,n,t,r,a,i){return Jt(n),n.updateQueue=null,t=Fo(n,r,t,a),Jo(e),r=Iu(),e!==null&&!Ke?(Vu(e,n,i),ut(e,n,i)):(Ee&&r&&_u(n),n.flags|=1,Qe(e,n,t,i),n.child)}function nd(e,n,t,r,a){if(Jt(n),n.stateNode===null){var i=Dr,s=t.contextType;typeof s=="object"&&s!==null&&(i=nn(s)),i=new t(r,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ac,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=r,i.state=n.memoizedState,i.refs={},Uu(n),s=t.contextType,i.context=typeof s=="object"&&s!==null?nn(s):Dr,i.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(rc(n,t,s,r),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ac.enqueueReplaceState(i,i.state,null),xa(n,r,i,a),Oa(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){i=n.stateNode;var f=n.memoizedProps,v=er(t,f);i.props=v;var x=i.context,w=t.contextType;s=Dr,typeof w=="object"&&w!==null&&(s=nn(w));var U=t.getDerivedStateFromProps;w=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,w||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||x!==s)&&qf(n,i,r,s),gt=!1;var N=n.memoizedState;i.state=N,xa(n,r,i,a),Oa(),x=n.memoizedState,f||N!==x||gt?(typeof U=="function"&&(rc(n,t,U,r),x=n.memoizedState),(v=gt||Gf(n,t,v,r,N,x,s))?(w||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=x),i.props=r,i.state=x,i.context=s,r=v):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Bu(e,n),s=n.memoizedProps,w=er(t,s),i.props=w,U=n.pendingProps,N=i.context,x=t.contextType,v=Dr,typeof x=="object"&&x!==null&&(v=nn(x)),f=t.getDerivedStateFromProps,(x=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==U||N!==v)&&qf(n,i,r,v),gt=!1,N=n.memoizedState,i.state=N,xa(n,r,i,a),Oa();var C=n.memoizedState;s!==U||N!==C||gt||e!==null&&e.dependencies!==null&&Li(e.dependencies)?(typeof f=="function"&&(rc(n,t,f,r),C=n.memoizedState),(w=gt||Gf(n,t,w,r,N,C,v)||e!==null&&e.dependencies!==null&&Li(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,C,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,C,v)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=C),i.props=r,i.state=C,i.context=v,r=w):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),r=!1)}return i=r,$i(e,n),r=(n.flags&128)!==0,i||r?(i=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&r?(n.child=zr(n,e.child,null,a),n.child=zr(n,null,t,a)):Qe(e,n,t,a),n.memoizedState=i.state,e=n.child):e=ut(e,n,a),e}function td(e,n,t,r){return va(),n.flags|=256,Qe(e,n,t,r),n.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:Yo()}}function sc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Mn),e}function rd(e,n,t){var r=n.pendingProps,a=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(a=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(a?Rt(n):Tt(),Ee){var f=Be,v;if(v=f){e:{for(v=f,f=In;v.nodeType!==8;){if(!f){f=null;break e}if(v=zn(v.nextSibling),v===null){f=null;break e}}f=v}f!==null?(n.memoizedState={dehydrated:f,treeContext:Kt!==null?{id:nt,overflow:tt}:null,retryLane:536870912,hydrationErrors:null},v=yn(18,null,null,0),v.stateNode=f,v.return=n,n.child=v,ln=n,Be=null,v=!0):v=!1}v||Qt(n)}if(f=n.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Kc(f)?n.lanes=32:n.lanes=536870912,null;lt(n)}return f=r.children,r=r.fallback,a?(Tt(),a=n.mode,f=el({mode:"hidden",children:f},a),r=Xt(r,a,t,null),f.return=n,r.return=n,f.sibling=r,n.child=f,a=n.child,a.memoizedState=cc(t),a.childLanes=sc(e,s,t),n.memoizedState=uc,r):(Rt(n),oc(n,f))}if(v=e.memoizedState,v!==null&&(f=v.dehydrated,f!==null)){if(i)n.flags&256?(Rt(n),n.flags&=-257,n=fc(e,n,t)):n.memoizedState!==null?(Tt(),n.child=e.child,n.flags|=128,n=null):(Tt(),a=r.fallback,f=n.mode,r=el({mode:"visible",children:r.children},f),a=Xt(a,f,t,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,zr(n,e.child,null,t),r=n.child,r.memoizedState=cc(t),r.childLanes=sc(e,s,t),n.memoizedState=uc,n=a);else if(Rt(n),Kc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var x=s.dgst;s=x,r=Error(c(419)),r.stack="",r.digest=s,ga({value:r,source:null,stack:null}),n=fc(e,n,t)}else if(Ke||Sa(e,n,t,!1),s=(t&e.childLanes)!==0,Ke||s){if(s=Me,s!==null&&(r=t&-t,r=(r&42)!==0?1:Wl(r),r=(r&(s.suspendedLanes|t))!==0?0:r,r!==0&&r!==v.retryLane))throw v.retryLane=r,Nr(e,r),En(s,e,r),Pf;f.data==="$?"||Dc(),n=fc(e,n,t)}else f.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,Be=zn(f.nextSibling),ln=n,Ee=!0,Pt=null,In=!1,e!==null&&(Nn[Dn++]=nt,Nn[Dn++]=tt,Nn[Dn++]=Kt,nt=e.id,tt=e.overflow,Kt=n),n=oc(n,r.children),n.flags|=4096);return n}return a?(Tt(),a=r.fallback,f=n.mode,v=e.child,x=v.sibling,r=et(v,{mode:"hidden",children:r.children}),r.subtreeFlags=v.subtreeFlags&65011712,x!==null?a=et(x,a):(a=Xt(a,f,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,f=e.child.memoizedState,f===null?f=cc(t):(v=f.cachePool,v!==null?(x=Ye._currentValue,v=v.parent!==x?{parent:x,pool:x}:v):v=Yo(),f={baseLanes:f.baseLanes|t,cachePool:v}),a.memoizedState=f,a.childLanes=sc(e,s,t),n.memoizedState=uc,r):(Rt(n),t=e.child,e=t.sibling,t=et(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function oc(e,n){return n=el({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function el(e,n){return e=yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fc(e,n,t){return zr(n,e.child,null,t),e=oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ad(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Du(e.return,n,t)}function dc(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function id(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Qe(e,n,r.children,t),r=Ie.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ad(e,t,n);else if(e.tag===19)ad(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(Y(Ie,r),a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Zi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),dc(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Zi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}dc(n,!0,t,null,i);break;case"together":dc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ut(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Dt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Sa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=et(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=et(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function bc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Li(e)))}function up(e,n,t){switch(n.tag){case 3:me(n,n.stateNode.containerInfo),vt(n,Ye,e.memoizedState.cache),va();break;case 27:case 5:Qn(n);break;case 4:me(n,n.stateNode.containerInfo);break;case 10:vt(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Rt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?rd(e,n,t):(Rt(n),e=ut(e,n,t),e!==null?e.sibling:null);Rt(n);break;case 19:var a=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(Sa(e,n,t,!1),r=(t&n.childLanes)!==0),a){if(r)return id(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(Ie,Ie.current),r)break;return null;case 22:case 23:return n.lanes=0,Ff(e,n,t);case 24:vt(n,Ye,e.memoizedState.cache)}return ut(e,n,t)}function ld(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ke=!0;else{if(!bc(e,t)&&(n.flags&128)===0)return Ke=!1,up(e,n,t);Ke=(e.flags&131072)!==0}else Ke=!1,Ee&&(n.flags&1048576)!==0&&Uo(n,Hi,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var r=n.elementType,a=r._init;if(r=a(r._payload),n.type=r,typeof r=="function")Au(r)?(e=er(r,e),n.tag=1,n=nd(null,n,r,e,t)):(n.tag=0,n=lc(null,n,r,e,t));else{if(r!=null){if(a=r.$$typeof,a===F){n.tag=11,n=Qf(null,n,r,e,t);break e}else if(a===H){n.tag=14,n=Zf(null,n,r,e,t);break e}}throw n=ne(r)||r,Error(c(306,n,""))}}return n;case 0:return lc(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,a=er(r,n.pendingProps),nd(e,n,r,a,t);case 3:e:{if(me(n,n.stateNode.containerInfo),e===null)throw Error(c(387));r=n.pendingProps;var i=n.memoizedState;a=i.element,Bu(e,n),xa(n,r,null,t);var s=n.memoizedState;if(r=s.cache,vt(n,Ye,r),r!==i.cache&&Cu(n,[Ye],t,!0),Oa(),r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=td(e,n,r,t);break e}else if(r!==a){a=On(Error(c(424)),n),ga(a),n=td(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=zn(e.firstChild),ln=n,Ee=!0,Pt=null,In=!0,t=kf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(va(),r===a){n=ut(e,n,t);break e}Qe(e,n,r,t)}n=n.child}return n;case 26:return $i(e,n),e===null?(t=ob(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,r=hl(ee.current).createElement(t),r[en]=n,r[un]=e,Je(r,t,e),Xe(r),n.stateNode=r):n.memoizedState=ob(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Qn(n),e===null&&Ee&&(r=n.stateNode=ub(n.type,n.pendingProps,ee.current),ln=n,In=!0,a=Be,Ht(n.type)?(Wc=a,Be=zn(r.firstChild)):Be=a),Qe(e,n,n.pendingProps.children,t),$i(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((a=r=Be)&&(r=Up(r,n.type,n.pendingProps,In),r!==null?(n.stateNode=r,ln=n,Be=zn(r.firstChild),In=!1,a=!0):a=!1),a||Qt(n)),Qn(n),a=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,r=i.children,Ic(a,i)?r=null:s!==null&&Ic(a,s)&&(n.flags|=32),n.memoizedState!==null&&(a=Yu(e,n,$h,null,null,t),Qa._currentValue=a),$i(e,n),Qe(e,n,r,t),n.child;case 6:return e===null&&Ee&&((e=t=Be)&&(t=Bp(t,n.pendingProps,In),t!==null?(n.stateNode=t,ln=n,Be=null,e=!0):e=!1),e||Qt(n)),null;case 13:return rd(e,n,t);case 4:return me(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=zr(n,null,r,t):Qe(e,n,r,t),n.child;case 11:return Qf(e,n,n.type,n.pendingProps,t);case 7:return Qe(e,n,n.pendingProps,t),n.child;case 8:return Qe(e,n,n.pendingProps.children,t),n.child;case 12:return Qe(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,vt(n,n.type,r.value),Qe(e,n,r.children,t),n.child;case 9:return a=n.type._context,r=n.pendingProps.children,Jt(n),a=nn(a),r=r(a),n.flags|=1,Qe(e,n,r,t),n.child;case 14:return Zf(e,n,n.type,n.pendingProps,t);case 15:return Jf(e,n,n.type,n.pendingProps,t);case 19:return id(e,n,t);case 31:return r=n.pendingProps,t=n.mode,r={mode:r.mode,children:r.children},e===null?(t=el(r,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=et(e.child,r),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return Ff(e,n,t);case 24:return Jt(n),r=nn(Ye),e===null?(a=Hu(),a===null&&(a=Me,i=Mu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=t),a=i),n.memoizedState={parent:r,cache:a},Uu(n),vt(n,Ye,a)):((e.lanes&t)!==0&&(Bu(e,n),xa(n,null,null,t),Oa()),a=e.memoizedState,i=n.memoizedState,a.parent!==r?(a={parent:r,cache:r},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),vt(n,Ye,r)):(r=i.cache,vt(n,Ye,r),r!==a.cache&&Cu(n,[Ye],t,!0))),Qe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function ct(e){e.flags|=4}function ud(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pb(n)){if(n=Cn.current,n!==null&&((ve&4194048)===ve?Vn!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Vn))throw Ta=Lu,Io;e.flags|=8192}}function nl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?js():536870912,e.lanes|=n,Ir|=n)}function La(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cp(e,n,t){var r=n.pendingProps;switch(Ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Le(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),at(Ye),$e(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ma(n)?ct(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ko())),Le(n),null;case 26:return t=n.memoizedState,e===null?(ct(n),t!==null?(Le(n),ud(n,t)):(Le(n),n.flags&=-16777217)):t?t!==e.memoizedState?(ct(n),Le(n),ud(n,t)):(Le(n),n.flags&=-16777217):(e.memoizedProps!==r&&ct(n),Le(n),n.flags&=-16777217),null;case 27:Zn(n),t=ee.current;var a=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ct(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Le(n),null}e=J.current,ma(n)?Bo(n):(e=ub(a,r,t),n.stateNode=e,ct(n))}return Le(n),null;case 5:if(Zn(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&ct(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Le(n),null}if(e=J.current,ma(n))Bo(n);else{switch(a=hl(ee.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?a.createElement(t,{is:r.is}):a.createElement(t)}}e[en]=n,e[un]=r;e:for(a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}n.stateNode=e;e:switch(Je(e,t,r),t){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&ct(n)}}return Le(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&ct(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(e=ee.current,ma(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,a=ln,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[en]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||eb(e.nodeValue,t)),e||Qt(n)}else e=hl(e).createTextNode(r),e[en]=n,n.stateNode=e}return Le(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ma(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[en]=n}else va(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),a=!1}else a=ko(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(lt(n),n):(lt(n),null)}if(lt(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=r!==null,e=e!==null&&e.memoizedState!==null,t){r=n.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),nl(n,n.updateQueue),Le(n),null;case 4:return $e(),e===null&&kc(n.stateNode.containerInfo),Le(n),null;case 10:return at(n.type),Le(n),null;case 19:if(V(Ie),a=n.memoizedState,a===null)return Le(n),null;if(r=(n.flags&128)!==0,i=a.rendering,i===null)if(r)La(a,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Zi(e),i!==null){for(n.flags|=128,La(a,!1),e=i.updateQueue,n.updateQueue=e,nl(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Lo(t,e),t=t.sibling;return Y(Ie,Ie.current&1|2),n.child}e=e.sibling}a.tail!==null&&bn()>al&&(n.flags|=128,r=!0,La(a,!1),n.lanes=4194304)}else{if(!r)if(e=Zi(i),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,nl(n,e),La(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ee)return Le(n),null}else 2*bn()-a.renderingStartTime>al&&t!==536870912&&(n.flags|=128,r=!0,La(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=bn(),n.sibling=null,e=Ie.current,Y(Ie,r?e&1|2:e&1),n):(Le(n),null);case 22:case 23:return lt(n),Gu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),t=n.updateQueue,t!==null&&nl(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&V(Ft),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),at(Ye),Le(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function sp(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return at(Ye),$e(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Zn(n),null;case 13:if(lt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));va()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Ie),null;case 4:return $e(),null;case 10:return at(n.type),null;case 22:case 23:return lt(n),Gu(),e!==null&&V(Ft),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return at(Ye),null;case 25:return null;default:return null}}function cd(e,n){switch(Ou(n),n.tag){case 3:at(Ye),$e();break;case 26:case 27:case 5:Zn(n);break;case 4:$e();break;case 13:lt(n);break;case 19:V(Ie);break;case 10:at(n.type);break;case 22:case 23:lt(n),Gu(),e!==null&&V(Ft);break;case 24:at(Ye)}}function Ua(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var a=r.next;t=a;do{if((t.tag&e)===e){r=void 0;var i=t.create,s=t.inst;r=i(),s.destroy=r}t=t.next}while(t!==a)}}catch(f){Ce(n,n.return,f)}}function _t(e,n,t){try{var r=n.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var i=a.next;r=i;do{if((r.tag&e)===e){var s=r.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,a=n;var v=t,x=f;try{x()}catch(w){Ce(a,v,w)}}}r=r.next}while(r!==i)}}catch(w){Ce(n,n.return,w)}}function sd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Qo(n,t)}catch(r){Ce(e,e.return,r)}}}function od(e,n,t){t.props=er(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){Ce(e,n,r)}}function Ba(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(a){Ce(e,n,a)}}function Xn(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(a){Ce(e,n,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){Ce(e,n,a)}else t.current=null}function fd(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(a){Ce(e,e.return,a)}}function hc(e,n,t){try{var r=e.stateNode;Cp(r,e.type,t,n),r[un]=n}catch(a){Ce(e,e.return,a)}}function dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ht(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ht(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=bl));else if(r!==4&&(r===27&&Ht(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(yc(e,n,t),e=e.sibling;e!==null;)yc(e,n,t),e=e.sibling}function tl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&Ht(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(tl(e,n,t),e=e.sibling;e!==null;)tl(e,n,t),e=e.sibling}function bd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Je(n,r,t),n[en]=e,n[un]=t}catch(i){Ce(e,e.return,i)}}var st=!1,ze=!1,mc=!1,hd=typeof WeakSet=="function"?WeakSet:Set,We=null;function op(e,n){if(e=e.containerInfo,qc=Sl,e=To(e),pu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,f=-1,v=-1,x=0,w=0,U=e,N=null;n:for(;;){for(var C;U!==t||a!==0&&U.nodeType!==3||(f=s+a),U!==i||r!==0&&U.nodeType!==3||(v=s+r),U.nodeType===3&&(s+=U.nodeValue.length),(C=U.firstChild)!==null;)N=U,U=C;for(;;){if(U===e)break n;if(N===t&&++x===a&&(f=s),N===i&&++w===r&&(v=s),(C=U.nextSibling)!==null)break;U=N,N=U.parentNode}U=C}t=f===-1||v===-1?null:{start:f,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yc={focusedElem:e,selectionRange:t},Sl=!1,We=n;We!==null;)if(n=We,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,We=e;else for(;We!==null;){switch(n=We,i=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,a=i.memoizedProps,i=i.memoizedState,r=t.stateNode;try{var le=er(t.type,a,t.elementType===t.type);e=r.getSnapshotBeforeUpdate(le,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ce(t,t.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Xc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,We=e;break}We=n.return}}function pd(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t),r&4&&Ua(5,t);break;case 1:if(Ot(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){Ce(t,t.return,s)}else{var a=er(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(a,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Ce(t,t.return,s)}}r&64&&sd(t),r&512&&Ba(t,t.return);break;case 3:if(Ot(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Qo(e,n)}catch(s){Ce(t,t.return,s)}}break;case 27:n===null&&r&4&&bd(t);case 26:case 5:Ot(e,t),n===null&&r&4&&fd(t),r&512&&Ba(t,t.return);break;case 12:Ot(e,t);break;case 13:Ot(e,t),r&4&&vd(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=gp.bind(null,t),jp(e,t))));break;case 22:if(r=t.memoizedState!==null||st,!r){n=n!==null&&n.memoizedState!==null||ze,a=st;var i=ze;st=r,(ze=n)&&!i?xt(e,t,(t.subtreeFlags&8772)!==0):Ot(e,t),st=a,ze=i}break;case 30:break;default:Ot(e,t)}}function yd(e){var n=e.alternate;n!==null&&(e.alternate=null,yd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,on=!1;function ot(e,n,t){for(t=t.child;t!==null;)md(e,n,t),t=t.sibling}function md(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(Yn,t)}catch{}switch(t.tag){case 26:ze||Xn(t,n),ot(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ze||Xn(t,n);var r=He,a=on;Ht(t.type)&&(He=t.stateNode,on=!1),ot(e,n,t),Xa(t.stateNode),He=r,on=a;break;case 5:ze||Xn(t,n);case 6:if(r=He,a=on,He=null,ot(e,n,t),He=r,on=a,He!==null)if(on)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(t.stateNode)}catch(i){Ce(t,n,i)}else try{He.removeChild(t.stateNode)}catch(i){Ce(t,n,i)}break;case 18:He!==null&&(on?(e=He,ib(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),$a(e)):ib(He,t.stateNode));break;case 4:r=He,a=on,He=t.stateNode.containerInfo,on=!0,ot(e,n,t),He=r,on=a;break;case 0:case 11:case 14:case 15:ze||_t(2,t,n),ze||_t(4,t,n),ot(e,n,t);break;case 1:ze||(Xn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&od(t,n,r)),ot(e,n,t);break;case 21:ot(e,n,t);break;case 22:ze=(r=ze)||t.memoizedState!==null,ot(e,n,t),ze=r;break;default:ot(e,n,t)}}function vd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{$a(e)}catch(t){Ce(n,n.return,t)}}function fp(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new hd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new hd),n;default:throw Error(c(435,e.tag))}}function vc(e,n){var t=fp(e);n.forEach(function(r){var a=Sp.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}function mn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r],i=e,s=n,f=s;e:for(;f!==null;){switch(f.tag){case 27:if(Ht(f.type)){He=f.stateNode,on=!1;break e}break;case 5:He=f.stateNode,on=!1;break e;case 3:case 4:He=f.stateNode.containerInfo,on=!0;break e}f=f.return}if(He===null)throw Error(c(160));md(i,s,a),He=null,on=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)gd(n,e),n=n.sibling}var kn=null;function gd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mn(n,e),vn(e),r&4&&(_t(3,e,e.return),Ua(3,e),_t(5,e,e.return));break;case 1:mn(n,e),vn(e),r&512&&(ze||t===null||Xn(t,t.return)),r&64&&st&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var a=kn;if(mn(n,e),vn(e),r&512&&(ze||t===null||Xn(t,t.return)),r&4){var i=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,a=a.ownerDocument||a;n:switch(r){case"title":i=a.getElementsByTagName("title")[0],(!i||i[la]||i[en]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),Je(i,r,t),i[en]=e,Xe(i),r=i;break e;case"link":var s=bb("link","href",a).get(r+(t.href||""));if(s){for(var f=0;f<s.length;f++)if(i=s[f],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(f,1);break n}}i=a.createElement(r),Je(i,r,t),a.head.appendChild(i);break;case"meta":if(s=bb("meta","content",a).get(r+(t.content||""))){for(f=0;f<s.length;f++)if(i=s[f],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(f,1);break n}}i=a.createElement(r),Je(i,r,t),a.head.appendChild(i);break;default:throw Error(c(468,r))}i[en]=e,Xe(i),r=i}e.stateNode=r}else hb(a,e.type,e.stateNode);else e.stateNode=db(a,r,e.memoizedProps);else i!==r?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,r===null?hb(a,e.type,e.stateNode):db(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&hc(e,e.memoizedProps,t.memoizedProps)}break;case 27:mn(n,e),vn(e),r&512&&(ze||t===null||Xn(t,t.return)),t!==null&&r&4&&hc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(mn(n,e),vn(e),r&512&&(ze||t===null||Xn(t,t.return)),e.flags&32){a=e.stateNode;try{Er(a,"")}catch(C){Ce(e,e.return,C)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,hc(e,a,t!==null?t.memoizedProps:a)),r&1024&&(mc=!0);break;case 6:if(mn(n,e),vn(e),r&4){if(e.stateNode===null)throw Error(c(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(C){Ce(e,e.return,C)}}break;case 3:if(ml=null,a=kn,kn=pl(n.containerInfo),mn(n,e),kn=a,vn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{$a(n.containerInfo)}catch(C){Ce(e,e.return,C)}mc&&(mc=!1,Sd(e));break;case 4:r=kn,kn=pl(e.stateNode.containerInfo),mn(n,e),vn(e),kn=r;break;case 12:mn(n,e),vn(e);break;case 13:mn(n,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Tc=bn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vc(e,r)));break;case 22:a=e.memoizedState!==null;var v=t!==null&&t.memoizedState!==null,x=st,w=ze;if(st=x||a,ze=w||v,mn(n,e),ze=w,st=x,vn(e),r&8192)e:for(n=e.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(t===null||v||st||ze||nr(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){v=t=n;try{if(i=v.stateNode,a)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=v.stateNode;var U=v.memoizedProps.style,N=U!=null&&U.hasOwnProperty("display")?U.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(C){Ce(v,v.return,C)}}}else if(n.tag===6){if(t===null){v=n;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(C){Ce(v,v.return,C)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,vc(e,t))));break;case 19:mn(n,e),vn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,vc(e,r)));break;case 30:break;case 21:break;default:mn(n,e),vn(e)}}function vn(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(dd(r)){t=r;break}r=r.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var a=t.stateNode,i=pc(e);tl(e,i,a);break;case 5:var s=t.stateNode;t.flags&32&&(Er(s,""),t.flags&=-33);var f=pc(e);tl(e,f,s);break;case 3:case 4:var v=t.stateNode.containerInfo,x=pc(e);yc(e,x,v);break;default:throw Error(c(161))}}catch(w){Ce(e,e.return,w)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ot(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)pd(e,n.alternate,n),n=n.sibling}function nr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:_t(4,n,n.return),nr(n);break;case 1:Xn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&od(n,n.return,t),nr(n);break;case 27:Xa(n.stateNode);case 26:case 5:Xn(n,n.return),nr(n);break;case 22:n.memoizedState===null&&nr(n);break;case 30:nr(n);break;default:nr(n)}e=e.sibling}}function xt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,a=e,i=n,s=i.flags;switch(i.tag){case 0:case 11:case 15:xt(a,i,t),Ua(4,i);break;case 1:if(xt(a,i,t),r=i,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(x){Ce(r,r.return,x)}if(r=i,a=r.updateQueue,a!==null){var f=r.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Po(v[a],f)}catch(x){Ce(r,r.return,x)}}t&&s&64&&sd(i),Ba(i,i.return);break;case 27:bd(i);case 26:case 5:xt(a,i,t),t&&r===null&&s&4&&fd(i),Ba(i,i.return);break;case 12:xt(a,i,t);break;case 13:xt(a,i,t),t&&s&4&&vd(a,i);break;case 22:i.memoizedState===null&&xt(a,i,t),Ba(i,i.return);break;case 30:break;default:xt(a,i,t)}n=n.sibling}}function gc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ea(t))}function Sc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ea(e))}function Kn(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ed(e,n,t,r),n=n.sibling}function Ed(e,n,t,r){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Kn(e,n,t,r),a&2048&&Ua(9,n);break;case 1:Kn(e,n,t,r);break;case 3:Kn(e,n,t,r),a&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ea(e)));break;case 12:if(a&2048){Kn(e,n,t,r),e=n.stateNode;try{var i=n.memoizedProps,s=i.id,f=i.onPostCommit;typeof f=="function"&&f(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){Ce(n,n.return,v)}}else Kn(e,n,t,r);break;case 13:Kn(e,n,t,r);break;case 23:break;case 22:i=n.stateNode,s=n.alternate,n.memoizedState!==null?i._visibility&2?Kn(e,n,t,r):ja(e,n):i._visibility&2?Kn(e,n,t,r):(i._visibility|=2,Gr(e,n,t,r,(n.subtreeFlags&10256)!==0)),a&2048&&gc(s,n);break;case 24:Kn(e,n,t,r),a&2048&&Sc(n.alternate,n);break;default:Kn(e,n,t,r)}}function Gr(e,n,t,r,a){for(a=a&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=e,s=n,f=t,v=r,x=s.flags;switch(s.tag){case 0:case 11:case 15:Gr(i,s,f,v,a),Ua(8,s);break;case 23:break;case 22:var w=s.stateNode;s.memoizedState!==null?w._visibility&2?Gr(i,s,f,v,a):ja(i,s):(w._visibility|=2,Gr(i,s,f,v,a)),a&&x&2048&&gc(s.alternate,s);break;case 24:Gr(i,s,f,v,a),a&&x&2048&&Sc(s.alternate,s);break;default:Gr(i,s,f,v,a)}n=n.sibling}}function ja(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,a=r.flags;switch(r.tag){case 22:ja(t,r),a&2048&&gc(r.alternate,r);break;case 24:ja(t,r),a&2048&&Sc(r.alternate,r);break;default:ja(t,r)}n=n.sibling}}var ka=8192;function qr(e){if(e.subtreeFlags&ka)for(e=e.child;e!==null;)Ad(e),e=e.sibling}function Ad(e){switch(e.tag){case 26:qr(e),e.flags&ka&&e.memoizedState!==null&&Zp(kn,e.memoizedState,e.memoizedProps);break;case 5:qr(e);break;case 3:case 4:var n=kn;kn=pl(e.stateNode.containerInfo),qr(e),kn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=ka,ka=16777216,qr(e),ka=n):qr(e));break;default:qr(e)}}function Rd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function za(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];We=r,_d(r,e)}Rd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Td(e),e=e.sibling}function Td(e){switch(e.tag){case 0:case 11:case 15:za(e),e.flags&2048&&_t(9,e,e.return);break;case 3:za(e);break;case 12:za(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,rl(e)):za(e);break;default:za(e)}}function rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];We=r,_d(r,e)}Rd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:_t(8,n,n.return),rl(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,rl(n));break;default:rl(n)}e=e.sibling}}function _d(e,n){for(;We!==null;){var t=We;switch(t.tag){case 0:case 11:case 15:_t(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ea(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,We=r;else e:for(t=e;We!==null;){r=We;var a=r.sibling,i=r.return;if(yd(r),r===t){We=null;break e}if(a!==null){a.return=i,We=a;break e}We=i}}}var dp={getCacheForType:function(e){var n=nn(Ye),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},bp=typeof WeakMap=="function"?WeakMap:Map,Re=0,Me=null,pe=null,ve=0,Te=0,gn=null,Nt=!1,Yr=!1,Ec=!1,ft=0,je=0,Dt=0,tr=0,Ac=0,Mn=0,Ir=0,Ga=null,fn=null,Rc=!1,Tc=0,al=1/0,il=null,Ct=null,Ze=0,Mt=null,Vr=null,Xr=0,_c=0,Oc=null,Od=null,qa=0,xc=null;function Sn(){if((Re&2)!==0&&ve!==0)return ve&-ve;if(D.T!==null){var e=wr;return e!==0?e:Lc()}return Gs()}function xd(){Mn===0&&(Mn=(ve&536870912)===0||Ee?Bs():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Mn}function En(e,n,t){(e===Me&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Kr(e,0),wt(e,ve,Mn,!1)),ia(e,t),((Re&2)===0||e!==Me)&&(e===Me&&((Re&2)===0&&(tr|=t),je===4&&wt(e,ve,Mn,!1)),Wn(e))}function Nd(e,n,t){if((Re&6)!==0)throw Error(c(327));var r=!t&&(n&124)===0&&(n&e.expiredLanes)===0||aa(e,n),a=r?yp(e,n):Cc(e,n,!0),i=r;do{if(a===0){Yr&&!r&&wt(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!hp(t)){a=Cc(e,n,!1),i=!1;continue}if(a===2){if(i=n,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var f=e;a=Ga;var v=f.current.memoizedState.isDehydrated;if(v&&(Kr(f,s).flags|=256),s=Cc(f,s,!1),s!==2){if(Ec&&!v){f.errorRecoveryDisabledLanes|=i,tr|=i,a=4;break e}i=fn,fn=a,i!==null&&(fn===null?fn=i:fn.push.apply(fn,i))}a=s}if(i=!1,a!==2)continue}}if(a===1){Kr(e,0),wt(e,n,0,!0);break}e:{switch(r=e,i=a,i){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:wt(r,n,Mn,!Nt);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(a=Tc+300-bn(),10<a)){if(wt(r,n,Mn,!Nt),yi(r,0,!0)!==0)break e;r.timeoutHandle=rb(Dd.bind(null,r,t,fn,il,Rc,n,Mn,tr,Ir,Nt,i,2,-0,0),a);break e}Dd(r,t,fn,il,Rc,n,Mn,tr,Ir,Nt,i,0,-0,0)}}break}while(!0);Wn(e)}function Dd(e,n,t,r,a,i,s,f,v,x,w,U,N,C){if(e.timeoutHandle=-1,U=n.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(Pa={stylesheets:null,count:0,unsuspend:Qp},Ad(n),U=Jp(),U!==null)){e.cancelPendingCommit=U(Bd.bind(null,e,n,i,t,r,a,s,f,v,w,1,N,C)),wt(e,i,s,!x);return}Bd(e,n,i,t,r,a,s,f,v)}function hp(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!pn(i(),a))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function wt(e,n,t,r){n&=~Ac,n&=~tr,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var a=n;0<a;){var i=31-hn(a),s=1<<i;r[i]=-1,a&=~s}t!==0&&ks(e,t,n)}function ll(){return(Re&6)===0?(Ya(0),!1):!0}function Nc(){if(pe!==null){if(Te===0)var e=pe.return;else e=pe,rt=Zt=null,Xu(e),kr=null,wa=0,e=pe;for(;e!==null;)cd(e.alternate,e),e=e.return;pe=null}}function Kr(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,wp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nc(),Me=e,pe=t=et(e.current,null),ve=n,Te=0,gn=null,Nt=!1,Yr=aa(e,n),Ec=!1,Ir=Mn=Ac=tr=Dt=je=0,fn=Ga=null,Rc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var a=31-hn(r),i=1<<a;n|=e[a],r&=~i}return ft=n,Ni(),t}function Cd(e,n){de=null,D.H=Wi,n===Ra||n===ji?(n=Ko(),Te=3):n===Io?(n=Ko(),Te=4):Te=n===Pf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,gn=n,pe===null&&(je=1,Fi(e,On(n,e.current)))}function Md(){var e=D.H;return D.H=Wi,e===null?Wi:e}function wd(){var e=D.A;return D.A=dp,e}function Dc(){je=4,Nt||(ve&4194048)!==ve&&Cn.current!==null||(Yr=!0),(Dt&134217727)===0&&(tr&134217727)===0||Me===null||wt(Me,ve,Mn,!1)}function Cc(e,n,t){var r=Re;Re|=2;var a=Md(),i=wd();(Me!==e||ve!==n)&&(il=null,Kr(e,n)),n=!1;var s=je;e:do try{if(Te!==0&&pe!==null){var f=pe,v=gn;switch(Te){case 8:Nc(),s=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var x=Te;if(Te=0,gn=null,Wr(e,f,v,x),t&&Yr){s=0;break e}break;default:x=Te,Te=0,gn=null,Wr(e,f,v,x)}}pp(),s=je;break}catch(w){Cd(e,w)}while(!0);return n&&e.shellSuspendCounter++,rt=Zt=null,Re=r,D.H=a,D.A=i,pe===null&&(Me=null,ve=0,Ni()),s}function pp(){for(;pe!==null;)Hd(pe)}function yp(e,n){var t=Re;Re|=2;var r=Md(),a=wd();Me!==e||ve!==n?(il=null,al=bn()+500,Kr(e,n)):Yr=aa(e,n);e:do try{if(Te!==0&&pe!==null){n=pe;var i=gn;n:switch(Te){case 1:Te=0,gn=null,Wr(e,n,i,1);break;case 2:case 9:if(Vo(i)){Te=0,gn=null,Ld(n);break}n=function(){Te!==2&&Te!==9||Me!==e||(Te=7),Wn(e)},i.then(n,n);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:Vo(i)?(Te=0,gn=null,Ld(n)):(Te=0,gn=null,Wr(e,n,i,7));break;case 5:var s=null;switch(pe.tag){case 26:s=pe.memoizedState;case 5:case 27:var f=pe;if(!s||pb(s)){Te=0,gn=null;var v=f.sibling;if(v!==null)pe=v;else{var x=f.return;x!==null?(pe=x,ul(x)):pe=null}break n}}Te=0,gn=null,Wr(e,n,i,5);break;case 6:Te=0,gn=null,Wr(e,n,i,6);break;case 8:Nc(),je=6;break e;default:throw Error(c(462))}}mp();break}catch(w){Cd(e,w)}while(!0);return rt=Zt=null,D.H=r,D.A=a,Re=t,pe!==null?0:(Me=null,ve=0,Ni(),je)}function mp(){for(;pe!==null&&!Il();)Hd(pe)}function Hd(e){var n=ld(e.alternate,e,ft);e.memoizedProps=e.pendingProps,n===null?ul(e):pe=n}function Ld(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=ed(t,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=ed(t,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Xu(n);default:cd(t,n),n=pe=Lo(n,ft),n=ld(t,n,ft)}e.memoizedProps=e.pendingProps,n===null?ul(e):pe=n}function Wr(e,n,t,r){rt=Zt=null,Xu(n),kr=null,wa=0;var a=n.return;try{if(lp(e,a,n,t,ve)){je=1,Fi(e,On(t,e.current)),pe=null;return}}catch(i){if(a!==null)throw pe=a,i;je=1,Fi(e,On(t,e.current)),pe=null;return}n.flags&32768?(Ee||r===1?e=!0:Yr||(ve&536870912)!==0?e=!1:(Nt=e=!0,(r===2||r===9||r===3||r===6)&&(r=Cn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ud(n,e)):ul(n)}function ul(e){var n=e;do{if((n.flags&32768)!==0){Ud(n,Nt);return}e=n.return;var t=cp(n.alternate,n,ft);if(t!==null){pe=t;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);je===0&&(je=5)}function Ud(e,n){do{var t=sp(e.alternate,e);if(t!==null){t.flags&=32767,pe=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=t}while(e!==null);je=6,pe=null}function Bd(e,n,t,r,a,i,s,f,v){e.cancelPendingCommit=null;do cl();while(Ze!==0);if((Re&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(i=n.lanes|n.childLanes,i|=Su,Q0(e,t,i,s,f,v),e===Me&&(pe=Me=null,ve=0),Vr=n,Mt=e,Xr=t,_c=i,Oc=a,Od=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ep(an,function(){return qd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=D.T,D.T=null,a=k.p,k.p=2,s=Re,Re|=4;try{op(e,n,t)}finally{Re=s,k.p=a,D.T=r}}Ze=1,jd(),kd(),zd()}}function jd(){if(Ze===1){Ze=0;var e=Mt,n=Vr,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=D.T,D.T=null;var r=k.p;k.p=2;var a=Re;Re|=4;try{gd(n,e);var i=Yc,s=To(e.containerInfo),f=i.focusedElem,v=i.selectionRange;if(s!==f&&f&&f.ownerDocument&&Ro(f.ownerDocument.documentElement,f)){if(v!==null&&pu(f)){var x=v.start,w=v.end;if(w===void 0&&(w=x),"selectionStart"in f)f.selectionStart=x,f.selectionEnd=Math.min(w,f.value.length);else{var U=f.ownerDocument||document,N=U&&U.defaultView||window;if(N.getSelection){var C=N.getSelection(),le=f.textContent.length,te=Math.min(v.start,le),xe=v.end===void 0?te:Math.min(v.end,le);!C.extend&&te>xe&&(s=xe,xe=te,te=s);var T=Ao(f,te),R=Ao(f,xe);if(T&&R&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==R.node||C.focusOffset!==R.offset)){var _=U.createRange();_.setStart(T.node,T.offset),C.removeAllRanges(),te>xe?(C.addRange(_),C.extend(R.node,R.offset)):(_.setEnd(R.node,R.offset),C.addRange(_))}}}}for(U=[],C=f;C=C.parentNode;)C.nodeType===1&&U.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<U.length;f++){var L=U[f];L.element.scrollLeft=L.left,L.element.scrollTop=L.top}}Sl=!!qc,Yc=qc=null}finally{Re=a,k.p=r,D.T=t}}e.current=n,Ze=2}}function kd(){if(Ze===2){Ze=0;var e=Mt,n=Vr,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=D.T,D.T=null;var r=k.p;k.p=2;var a=Re;Re|=4;try{pd(e,n.alternate,n)}finally{Re=a,k.p=r,D.T=t}}Ze=3}}function zd(){if(Ze===4||Ze===3){Ze=0,Vl();var e=Mt,n=Vr,t=Xr,r=Od;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ze=5:(Ze=0,Vr=Mt=null,Gd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ct=null),Pl(t),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(Yn,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=D.T,a=k.p,k.p=2,D.T=null;try{for(var i=e.onRecoverableError,s=0;s<r.length;s++){var f=r[s];i(f.value,{componentStack:f.stack})}}finally{D.T=n,k.p=a}}(Xr&3)!==0&&cl(),Wn(e),a=e.pendingLanes,(t&4194090)!==0&&(a&42)!==0?e===xc?qa++:(qa=0,xc=e):qa=0,Ya(0)}}function Gd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ea(n)))}function cl(e){return jd(),kd(),zd(),qd()}function qd(){if(Ze!==5)return!1;var e=Mt,n=_c;_c=0;var t=Pl(Xr),r=D.T,a=k.p;try{k.p=32>t?32:t,D.T=null,t=Oc,Oc=null;var i=Mt,s=Xr;if(Ze=0,Vr=Mt=null,Xr=0,(Re&6)!==0)throw Error(c(331));var f=Re;if(Re|=4,Td(i.current),Ed(i,i.current,s,t),Re=f,Ya(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(Yn,i)}catch{}return!0}finally{k.p=a,D.T=r,Gd(e,n)}}function Yd(e,n,t){n=On(t,n),n=ic(e.stateNode,n,2),e=Et(e,n,2),e!==null&&(ia(e,2),Wn(e))}function Ce(e,n,t){if(e.tag===3)Yd(e,e,t);else for(;n!==null;){if(n.tag===3){Yd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ct===null||!Ct.has(r))){e=On(t,e),t=Kf(2),r=Et(n,t,2),r!==null&&(Wf(t,r,n,e),ia(r,2),Wn(r));break}}n=n.return}}function Mc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new bp;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(Ec=!0,a.add(t),e=vp.bind(null,e,n,t),n.then(e,e))}function vp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Me===e&&(ve&t)===t&&(je===4||je===3&&(ve&62914560)===ve&&300>bn()-Tc?(Re&2)===0&&Kr(e,0):Ac|=t,Ir===ve&&(Ir=0)),Wn(e)}function Id(e,n){n===0&&(n=js()),e=Nr(e,n),e!==null&&(ia(e,n),Wn(e))}function gp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Id(e,t)}function Sp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(n),Id(e,t)}function Ep(e,n){return br(e,n)}var sl=null,Pr=null,wc=!1,ol=!1,Hc=!1,rr=0;function Wn(e){e!==Pr&&e.next===null&&(Pr===null?sl=Pr=e:Pr=Pr.next=e),ol=!0,wc||(wc=!0,Rp())}function Ya(e,n){if(!Hc&&ol){Hc=!0;do for(var t=!1,r=sl;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var i=0;else{var s=r.suspendedLanes,f=r.pingedLanes;i=(1<<31-hn(42|e)+1)-1,i&=a&~(s&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Wd(r,i))}else i=ve,i=yi(r,r===Me?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||aa(r,i)||(t=!0,Wd(r,i));r=r.next}while(t);Hc=!1}}function Ap(){Vd()}function Vd(){ol=wc=!1;var e=0;rr!==0&&(Mp()&&(e=rr),rr=0);for(var n=bn(),t=null,r=sl;r!==null;){var a=r.next,i=Xd(r,n);i===0?(r.next=null,t===null?sl=a:t.next=a,a===null&&(Pr=t)):(t=r,(e!==0||(i&3)!==0)&&(ol=!0)),r=a}Ya(e)}function Xd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-hn(i),f=1<<s,v=a[s];v===-1?((f&t)===0||(f&r)!==0)&&(a[s]=P0(f,n)):v<=n&&(e.expiredLanes|=f),i&=~f}if(n=Me,t=ve,t=yi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Jn(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||aa(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&Jn(r),Pl(t)){case 2:case 8:t=we;break;case 32:t=an;break;case 268435456:t=di;break;default:t=an}return r=Kd.bind(null,e),t=br(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&Jn(r),e.callbackPriority=2,e.callbackNode=null,2}function Kd(e,n){if(Ze!==0&&Ze!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(cl()&&e.callbackNode!==t)return null;var r=ve;return r=yi(e,e===Me?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Nd(e,r,n),Xd(e,bn()),e.callbackNode!=null&&e.callbackNode===t?Kd.bind(null,e):null)}function Wd(e,n){if(cl())return null;Nd(e,n,!0)}function Rp(){Hp(function(){(Re&6)!==0?br(oe,Ap):Vd()})}function Lc(){return rr===0&&(rr=Bs()),rr}function Pd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ei(""+e)}function Qd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Tp(e,n,t,r,a){if(n==="submit"&&t&&t.stateNode===a){var i=Pd((a[un]||null).action),s=r.submitter;s&&(n=(n=s[un]||null)?Pd(n.formAction):s.getAttribute("formAction"),n!==null&&(i=n,s=null));var f=new _i("action","action",null,r,a);e.push({event:f,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rr!==0){var v=s?Qd(a,s):new FormData(a);ec(t,{pending:!0,data:v,method:a.method,action:i},null,v)}}else typeof i=="function"&&(f.preventDefault(),v=s?Qd(a,s):new FormData(a),ec(t,{pending:!0,data:v,method:a.method,action:i},i,v))},currentTarget:a}]})}}for(var Uc=0;Uc<gu.length;Uc++){var Bc=gu[Uc],_p=Bc.toLowerCase(),Op=Bc[0].toUpperCase()+Bc.slice(1);jn(_p,"on"+Op)}jn(xo,"onAnimationEnd"),jn(No,"onAnimationIteration"),jn(Do,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(Ih,"onTransitionRun"),jn(Vh,"onTransitionStart"),jn(Xh,"onTransitionCancel"),jn(Co,"onTransitionEnd"),vr("onMouseEnter",["mouseout","mouseover"]),vr("onMouseLeave",["mouseout","mouseover"]),vr("onPointerEnter",["pointerout","pointerover"]),vr("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ia));function Zd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var f=r[s],v=f.instance,x=f.currentTarget;if(f=f.listener,v!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=x;try{i(a)}catch(w){Ji(w)}a.currentTarget=null,i=v}else for(s=0;s<r.length;s++){if(f=r[s],v=f.instance,x=f.currentTarget,f=f.listener,v!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=x;try{i(a)}catch(w){Ji(w)}a.currentTarget=null,i=v}}}}function ye(e,n){var t=n[Ql];t===void 0&&(t=n[Ql]=new Set);var r=e+"__bubble";t.has(r)||(Jd(n,e,2,!1),t.add(r))}function jc(e,n,t){var r=0;n&&(r|=4),Jd(t,e,r,n)}var fl="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[fl]){e[fl]=!0,Ys.forEach(function(t){t!=="selectionchange"&&(xp.has(t)||jc(t,!1,e),jc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[fl]||(n[fl]=!0,jc("selectionchange",!1,n))}}function Jd(e,n,t,r){switch(Eb(n)){case 2:var a=ey;break;case 8:a=ny;break;default:a=Fc}t=a.bind(null,n,t,e),a=void 0,!lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function zc(e,n,t,r,a){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var f=r.stateNode.containerInfo;if(f===a)break;if(s===4)for(s=r.return;s!==null;){var v=s.tag;if((v===3||v===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;f!==null;){if(s=pr(f),s===null)return;if(v=s.tag,v===5||v===6||v===26||v===27){r=i=s;continue e}f=f.parentNode}}r=r.return}to(function(){var x=i,w=au(t),U=[];e:{var N=Mo.get(e);if(N!==void 0){var C=_i,le=e;switch(e){case"keypress":if(Ri(t)===0)break e;case"keydown":case"keyup":C=Eh;break;case"focusin":le="focus",C=ou;break;case"focusout":le="blur",C=ou;break;case"beforeblur":case"afterblur":C=ou;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=io;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=Th;break;case xo:case No:case Do:C=dh;break;case Co:C=Oh;break;case"scroll":case"scrollend":C=uh;break;case"wheel":C=Nh;break;case"copy":case"cut":case"paste":C=hh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=uo;break;case"toggle":case"beforetoggle":C=Ch}var te=(n&4)!==0,xe=!te&&(e==="scroll"||e==="scrollend"),T=te?N!==null?N+"Capture":null:N;te=[];for(var R=x,_;R!==null;){var L=R;if(_=L.stateNode,L=L.tag,L!==5&&L!==26&&L!==27||_===null||T===null||(L=ca(R,T),L!=null&&te.push(Va(R,L,_))),xe)break;R=R.return}0<te.length&&(N=new C(N,le,null,t,w),U.push({event:N,listeners:te}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",N&&t!==ru&&(le=t.relatedTarget||t.fromElement)&&(pr(le)||le[hr]))break e;if((C||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,C?(le=t.relatedTarget||t.toElement,C=x,le=le?pr(le):null,le!==null&&(xe=p(le),te=le.tag,le!==xe||te!==5&&te!==27&&te!==6)&&(le=null)):(C=null,le=x),C!==le)){if(te=io,L="onMouseLeave",T="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(te=uo,L="onPointerLeave",T="onPointerEnter",R="pointer"),xe=C==null?N:ua(C),_=le==null?N:ua(le),N=new te(L,R+"leave",C,t,w),N.target=xe,N.relatedTarget=_,L=null,pr(w)===x&&(te=new te(T,R+"enter",le,t,w),te.target=_,te.relatedTarget=xe,L=te),xe=L,C&&le)n:{for(te=C,T=le,R=0,_=te;_;_=Qr(_))R++;for(_=0,L=T;L;L=Qr(L))_++;for(;0<R-_;)te=Qr(te),R--;for(;0<_-R;)T=Qr(T),_--;for(;R--;){if(te===T||T!==null&&te===T.alternate)break n;te=Qr(te),T=Qr(T)}te=null}else te=null;C!==null&&Fd(U,N,C,te,!1),le!==null&&xe!==null&&Fd(U,xe,le,te,!0)}}e:{if(N=x?ua(x):window,C=N.nodeName&&N.nodeName.toLowerCase(),C==="select"||C==="input"&&N.type==="file")var Q=yo;else if(ho(N))if(mo)Q=Gh;else{Q=kh;var he=jh}else C=N.nodeName,!C||C.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?x&&tu(x.elementType)&&(Q=yo):Q=zh;if(Q&&(Q=Q(e,x))){po(U,Q,t,w);break e}he&&he(e,N,x),e==="focusout"&&x&&N.type==="number"&&x.memoizedProps.value!=null&&nu(N,"number",N.value)}switch(he=x?ua(x):window,e){case"focusin":(ho(he)||he.contentEditable==="true")&&(_r=he,yu=x,ya=null);break;case"focusout":ya=yu=_r=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,_o(U,t,w);break;case"selectionchange":if(Yh)break;case"keydown":case"keyup":_o(U,t,w)}var $;if(du)e:{switch(e){case"compositionstart":var ae="onCompositionStart";break e;case"compositionend":ae="onCompositionEnd";break e;case"compositionupdate":ae="onCompositionUpdate";break e}ae=void 0}else Tr?fo(e,t)&&(ae="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ae="onCompositionStart");ae&&(co&&t.locale!=="ko"&&(Tr||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&Tr&&($=ro()):(mt=w,uu="value"in mt?mt.value:mt.textContent,Tr=!0)),he=dl(x,ae),0<he.length&&(ae=new lo(ae,e,null,t,w),U.push({event:ae,listeners:he}),$?ae.data=$:($=bo(t),$!==null&&(ae.data=$)))),($=wh?Hh(e,t):Lh(e,t))&&(ae=dl(x,"onBeforeInput"),0<ae.length&&(he=new lo("onBeforeInput","beforeinput",null,t,w),U.push({event:he,listeners:ae}),he.data=$)),Tp(U,e,x,t,w)}Zd(U,n)})}function Va(e,n,t){return{instance:e,listener:n,currentTarget:t}}function dl(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ca(e,t),a!=null&&r.unshift(Va(e,a,i)),a=ca(e,n),a!=null&&r.push(Va(e,a,i))),e.tag===3)return r;e=e.return}return[]}function Qr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,n,t,r,a){for(var i=n._reactName,s=[];t!==null&&t!==r;){var f=t,v=f.alternate,x=f.stateNode;if(f=f.tag,v!==null&&v===r)break;f!==5&&f!==26&&f!==27||x===null||(v=x,a?(x=ca(t,i),x!=null&&s.unshift(Va(t,x,v))):a||(x=ca(t,i),x!=null&&s.push(Va(t,x,v)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Np=/\r\n?/g,Dp=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Np,`
`).replace(Dp,"")}function eb(e,n){return n=$d(n),$d(e)===n}function bl(){}function Oe(e,n,t,r,a,i){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Er(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Er(e,""+r);break;case"className":vi(e,"class",r);break;case"tabIndex":vi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":vi(e,t,r);break;case"style":eo(e,r,i);break;case"data":if(n!=="object"){vi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Ei(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&Oe(e,n,"name",a.name,a,null),Oe(e,n,"formEncType",a.formEncType,a,null),Oe(e,n,"formMethod",a.formMethod,a,null),Oe(e,n,"formTarget",a.formTarget,a,null)):(Oe(e,n,"encType",a.encType,a,null),Oe(e,n,"method",a.method,a,null),Oe(e,n,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=Ei(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=bl);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=Ei(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":ye("beforetoggle",e),ye("toggle",e),mi(e,"popover",r);break;case"xlinkActuate":Fn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Fn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Fn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Fn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Fn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Fn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Fn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":mi(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ih.get(t)||t,mi(e,t,r))}}function Gc(e,n,t,r,a,i){switch(t){case"style":eo(e,r,i);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof r=="string"?Er(e,r):(typeof r=="number"||typeof r=="bigint")&&Er(e,""+r);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"onClick":r!=null&&(e.onclick=bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),n=t.slice(2,a?t.length-7:void 0),i=e[un]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,a),typeof r=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,a);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):mi(e,t,r)}}}function Je(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var r=!1,a=!1,i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];if(s!=null)switch(i){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Oe(e,n,i,s,t,null)}}a&&Oe(e,n,"srcSet",t.srcSet,t,null),r&&Oe(e,n,"src",t.src,t,null);return;case"input":ye("invalid",e);var f=i=s=a=null,v=null,x=null;for(r in t)if(t.hasOwnProperty(r)){var w=t[r];if(w!=null)switch(r){case"name":a=w;break;case"type":s=w;break;case"checked":v=w;break;case"defaultChecked":x=w;break;case"value":i=w;break;case"defaultValue":f=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(c(137,n));break;default:Oe(e,n,r,w,t,null)}}Zs(e,i,f,v,x,s,a,!1),gi(e);return;case"select":ye("invalid",e),r=s=i=null;for(a in t)if(t.hasOwnProperty(a)&&(f=t[a],f!=null))switch(a){case"value":i=f;break;case"defaultValue":s=f;break;case"multiple":r=f;default:Oe(e,n,a,f,t,null)}n=i,t=s,e.multiple=!!r,n!=null?Sr(e,!!r,n,!1):t!=null&&Sr(e,!!r,t,!0);return;case"textarea":ye("invalid",e),i=a=r=null;for(s in t)if(t.hasOwnProperty(s)&&(f=t[s],f!=null))switch(s){case"value":r=f;break;case"defaultValue":a=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:Oe(e,n,s,f,t,null)}Fs(e,r,a,i),gi(e);return;case"option":for(v in t)if(t.hasOwnProperty(v)&&(r=t[v],r!=null))switch(v){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Oe(e,n,v,r,t,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(r=0;r<Ia.length;r++)ye(Ia[r],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in t)if(t.hasOwnProperty(x)&&(r=t[x],r!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:Oe(e,n,x,r,t,null)}return;default:if(tu(n)){for(w in t)t.hasOwnProperty(w)&&(r=t[w],r!==void 0&&Gc(e,n,w,r,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(r=t[f],r!=null&&Oe(e,n,f,r,t,null))}function Cp(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,s=null,f=null,v=null,x=null,w=null;for(C in t){var U=t[C];if(t.hasOwnProperty(C)&&U!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":v=U;default:r.hasOwnProperty(C)||Oe(e,n,C,null,r,U)}}for(var N in r){var C=r[N];if(U=t[N],r.hasOwnProperty(N)&&(C!=null||U!=null))switch(N){case"type":i=C;break;case"name":a=C;break;case"checked":x=C;break;case"defaultChecked":w=C;break;case"value":s=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,n));break;default:C!==U&&Oe(e,n,N,C,r,U)}}eu(e,s,f,v,x,w,i,a);return;case"select":C=s=f=N=null;for(i in t)if(v=t[i],t.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":C=v;default:r.hasOwnProperty(i)||Oe(e,n,i,null,r,v)}for(a in r)if(i=r[a],v=t[a],r.hasOwnProperty(a)&&(i!=null||v!=null))switch(a){case"value":N=i;break;case"defaultValue":f=i;break;case"multiple":s=i;default:i!==v&&Oe(e,n,a,i,r,v)}n=f,t=s,r=C,N!=null?Sr(e,!!t,N,!1):!!r!=!!t&&(n!=null?Sr(e,!!t,n,!0):Sr(e,!!t,t?[]:"",!1));return;case"textarea":C=N=null;for(f in t)if(a=t[f],t.hasOwnProperty(f)&&a!=null&&!r.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:Oe(e,n,f,null,r,a)}for(s in r)if(a=r[s],i=t[s],r.hasOwnProperty(s)&&(a!=null||i!=null))switch(s){case"value":N=a;break;case"defaultValue":C=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==i&&Oe(e,n,s,a,r,i)}Js(e,N,C);return;case"option":for(var le in t)if(N=t[le],t.hasOwnProperty(le)&&N!=null&&!r.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:Oe(e,n,le,null,r,N)}for(v in r)if(N=r[v],C=t[v],r.hasOwnProperty(v)&&N!==C&&(N!=null||C!=null))switch(v){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:Oe(e,n,v,N,r,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in t)N=t[te],t.hasOwnProperty(te)&&N!=null&&!r.hasOwnProperty(te)&&Oe(e,n,te,null,r,N);for(x in r)if(N=r[x],C=t[x],r.hasOwnProperty(x)&&N!==C&&(N!=null||C!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,n));break;default:Oe(e,n,x,N,r,C)}return;default:if(tu(n)){for(var xe in t)N=t[xe],t.hasOwnProperty(xe)&&N!==void 0&&!r.hasOwnProperty(xe)&&Gc(e,n,xe,void 0,r,N);for(w in r)N=r[w],C=t[w],!r.hasOwnProperty(w)||N===C||N===void 0&&C===void 0||Gc(e,n,w,N,r,C);return}}for(var T in t)N=t[T],t.hasOwnProperty(T)&&N!=null&&!r.hasOwnProperty(T)&&Oe(e,n,T,null,r,N);for(U in r)N=r[U],C=t[U],!r.hasOwnProperty(U)||N===C||N==null&&C==null||Oe(e,n,U,N,r,C)}var qc=null,Yc=null;function hl(e){return e.nodeType===9?e:e.ownerDocument}function nb(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tb(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ic(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vc=null;function Mp(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var rb=typeof setTimeout=="function"?setTimeout:void 0,wp=typeof clearTimeout=="function"?clearTimeout:void 0,ab=typeof Promise=="function"?Promise:void 0,Hp=typeof queueMicrotask=="function"?queueMicrotask:typeof ab<"u"?function(e){return ab.resolve(null).then(e).catch(Lp)}:rb;function Lp(e){setTimeout(function(){throw e})}function Ht(e){return e==="head"}function ib(e,n){var t=n,r=0,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(0<r&&8>r){t=r;var s=e.ownerDocument;if(t&1&&Xa(s.documentElement),t&2&&Xa(s.body),t&4)for(t=s.head,Xa(t),s=t.firstChild;s;){var f=s.nextSibling,v=s.nodeName;s[la]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=f}}if(a===0){e.removeChild(i),$a(n);return}a--}else t==="$"||t==="$?"||t==="$!"?a++:r=t.charCodeAt(0)-48;else r=0;t=i}while(t);$a(n)}function Xc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Xc(t),Zl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Up(e,n,t,r){for(;e.nodeType===1;){var a=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[la])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function Bp(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=zn(e.nextSibling),e===null))return null;return e}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jp(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function zn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Wc=null;function lb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function ub(e,n,t){switch(n=hl(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Xa(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zl(e)}var wn=new Map,cb=new Set;function pl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var dt=k.d;k.d={f:kp,r:zp,D:Gp,C:qp,L:Yp,m:Ip,X:Xp,S:Vp,M:Kp};function kp(){var e=dt.f(),n=ll();return e||n}function zp(e){var n=yr(e);n!==null&&n.tag===5&&n.type==="form"?Nf(n):dt.r(e)}var Zr=typeof document>"u"?null:document;function sb(e,n,t){var r=Zr;if(r&&typeof n=="string"&&n){var a=_n(n);a='link[rel="'+e+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),cb.has(a)||(cb.add(a),e={rel:e,crossOrigin:t,href:n},r.querySelector(a)===null&&(n=r.createElement("link"),Je(n,"link",e),Xe(n),r.head.appendChild(n)))}}function Gp(e){dt.D(e),sb("dns-prefetch",e,null)}function qp(e,n){dt.C(e,n),sb("preconnect",e,n)}function Yp(e,n,t){dt.L(e,n,t);var r=Zr;if(r&&e&&n){var a='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+_n(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+_n(t.imageSizes)+'"]')):a+='[href="'+_n(e)+'"]';var i=a;switch(n){case"style":i=Jr(e);break;case"script":i=Fr(e)}wn.has(i)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),wn.set(i,e),r.querySelector(a)!==null||n==="style"&&r.querySelector(Ka(i))||n==="script"&&r.querySelector(Wa(i))||(n=r.createElement("link"),Je(n,"link",e),Xe(n),r.head.appendChild(n)))}}function Ip(e,n){dt.m(e,n);var t=Zr;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+_n(r)+'"][href="'+_n(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Fr(e)}if(!wn.has(i)&&(e=E({rel:"modulepreload",href:e},n),wn.set(i,e),t.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Wa(i)))return}r=t.createElement("link"),Je(r,"link",e),Xe(r),t.head.appendChild(r)}}}function Vp(e,n,t){dt.S(e,n,t);var r=Zr;if(r&&e){var a=mr(r).hoistableStyles,i=Jr(e);n=n||"default";var s=a.get(i);if(!s){var f={loading:0,preload:null};if(s=r.querySelector(Ka(i)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=wn.get(i))&&Pc(e,t);var v=s=r.createElement("link");Xe(v),Je(v,"link",e),v._p=new Promise(function(x,w){v.onload=x,v.onerror=w}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,yl(s,n,r)}s={type:"stylesheet",instance:s,count:1,state:f},a.set(i,s)}}}function Xp(e,n){dt.X(e,n);var t=Zr;if(t&&e){var r=mr(t).hoistableScripts,a=Fr(e),i=r.get(a);i||(i=t.querySelector(Wa(a)),i||(e=E({src:e,async:!0},n),(n=wn.get(a))&&Qc(e,n),i=t.createElement("script"),Xe(i),Je(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function Kp(e,n){dt.M(e,n);var t=Zr;if(t&&e){var r=mr(t).hoistableScripts,a=Fr(e),i=r.get(a);i||(i=t.querySelector(Wa(a)),i||(e=E({src:e,async:!0,type:"module"},n),(n=wn.get(a))&&Qc(e,n),i=t.createElement("script"),Xe(i),Je(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function ob(e,n,t,r){var a=(a=ee.current)?pl(a):null;if(!a)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Jr(t.href),t=mr(a).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Jr(t.href);var i=mr(a).hoistableStyles,s=i.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=a.querySelector(Ka(e)))&&!i._p&&(s.instance=i,s.state.loading=5),wn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},wn.set(e,t),i||Wp(a,e,t,s.state))),n&&r===null)throw Error(c(528,""));return s}if(n&&r!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fr(t),t=mr(a).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Jr(e){return'href="'+_n(e)+'"'}function Ka(e){return'link[rel="stylesheet"]['+e+"]"}function fb(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Wp(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Je(n,"link",t),Xe(n),e.head.appendChild(n))}function Fr(e){return'[src="'+_n(e)+'"]'}function Wa(e){return"script[async]"+e}function db(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+_n(t.href)+'"]');if(r)return n.instance=r,Xe(r),r;var a=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Xe(r),Je(r,"style",a),yl(r,t.precedence,e),n.instance=r;case"stylesheet":a=Jr(t.href);var i=e.querySelector(Ka(a));if(i)return n.state.loading|=4,n.instance=i,Xe(i),i;r=fb(t),(a=wn.get(a))&&Pc(r,a),i=(e.ownerDocument||e).createElement("link"),Xe(i);var s=i;return s._p=new Promise(function(f,v){s.onload=f,s.onerror=v}),Je(i,"link",r),n.state.loading|=4,yl(i,t.precedence,e),n.instance=i;case"script":return i=Fr(t.src),(a=e.querySelector(Wa(i)))?(n.instance=a,Xe(a),a):(r=t,(a=wn.get(i))&&(r=E({},t),Qc(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),Xe(a),Je(a,"link",r),e.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,yl(r,t.precedence,e));return n.instance}function yl(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,s=0;s<r.length;s++){var f=r[s];if(f.dataset.precedence===n)i=f;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Pc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ml=null;function bb(e,n,t){if(ml===null){var r=new Map,a=ml=new Map;a.set(t,r)}else a=ml,r=a.get(t),r||(r=new Map,a.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),a=0;a<t.length;a++){var i=t[a];if(!(i[la]||i[en]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(n)||"";s=e+s;var f=r.get(s);f?f.push(i):r.set(s,[i])}}return r}function hb(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Pp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function pb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Pa=null;function Qp(){}function Zp(e,n,t){if(Pa===null)throw Error(c(475));var r=Pa;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Jr(t.href),i=e.querySelector(Ka(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=vl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=i,Xe(i);return}i=e.ownerDocument||e,t=fb(t),(a=wn.get(a))&&Pc(t,a),i=i.createElement("link"),Xe(i);var s=i;s._p=new Promise(function(f,v){s.onload=f,s.onerror=v}),Je(i,"link",t),n.instance=i}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=vl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Jp(){if(Pa===null)throw Error(c(475));var e=Pa;return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function vl(){if(this.count--,this.count===0){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var gl=null;function Zc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,gl=new Map,n.forEach(Fp,e),gl=null,vl.call(e))}function Fp(e,n){if(!(n.state.loading&4)){var t=gl.get(e);if(t)var r=t.get(null);else{t=new Map,gl.set(e,t);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var s=a[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),r=s)}r&&t.set(null,r)}a=n.instance,s=a.getAttribute("data-precedence"),i=t.get(s)||r,i===r&&t.set(null,a),t.set(s,a),this.count++,r=vl.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),n.state.loading|=4}}var Qa={$$typeof:re,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function $p(e,n,t,r,a,i,s,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.hiddenUpdates=Kl(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function yb(e,n,t,r,a,i,s,f,v,x,w,U){return e=new $p(e,n,t,s,f,v,x,U),n=1,i===!0&&(n|=24),i=yn(3,null,null,n),e.current=i,i.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:r,isDehydrated:t,cache:n},Uu(i),e}function mb(e){return e?(e=Dr,e):Dr}function vb(e,n,t,r,a,i){a=mb(a),r.context===null?r.context=a:r.pendingContext=a,r=St(n),r.payload={element:t},i=i===void 0?null:i,i!==null&&(r.callback=i),t=Et(e,r,n),t!==null&&(En(t,e,n),_a(t,e,n))}function gb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Jc(e,n){gb(e,n),(e=e.alternate)&&gb(e,n)}function Sb(e){if(e.tag===13){var n=Nr(e,67108864);n!==null&&En(n,e,67108864),Jc(e,67108864)}}var Sl=!0;function ey(e,n,t,r){var a=D.T;D.T=null;var i=k.p;try{k.p=2,Fc(e,n,t,r)}finally{k.p=i,D.T=a}}function ny(e,n,t,r){var a=D.T;D.T=null;var i=k.p;try{k.p=8,Fc(e,n,t,r)}finally{k.p=i,D.T=a}}function Fc(e,n,t,r){if(Sl){var a=$c(r);if(a===null)zc(e,n,r,El,t),Ab(e,r);else if(ry(a,e,n,t,r))r.stopPropagation();else if(Ab(e,r),n&4&&-1<ty.indexOf(e)){for(;a!==null;){var i=yr(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Gt(i.pendingLanes);if(s!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var v=1<<31-hn(s);f.entanglements[1]|=v,s&=~v}Wn(i),(Re&6)===0&&(al=bn()+500,Ya(0))}}break;case 13:f=Nr(i,2),f!==null&&En(f,i,2),ll(),Jc(i,2)}if(i=$c(r),i===null&&zc(e,n,r,El,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else zc(e,n,r,null,t)}}function $c(e){return e=au(e),es(e)}var El=null;function es(e){if(El=null,e=pr(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return El=e,null}function Eb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xl()){case oe:return 2;case we:return 8;case an:case Bn:return 32;case di:return 268435456;default:return 32}default:return 32}}var ns=!1,Lt=null,Ut=null,Bt=null,Za=new Map,Ja=new Map,jt=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ab(e,n){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Bt=null;break;case"pointerover":case"pointerout":Za.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ja.delete(n.pointerId)}}function Fa(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=yr(n),n!==null&&Sb(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function ry(e,n,t,r,a){switch(n){case"focusin":return Lt=Fa(Lt,e,n,t,r,a),!0;case"dragenter":return Ut=Fa(Ut,e,n,t,r,a),!0;case"mouseover":return Bt=Fa(Bt,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Za.set(i,Fa(Za.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Ja.set(i,Fa(Ja.get(i)||null,e,n,t,r,a)),!0}return!1}function Rb(e){var n=pr(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Z0(e.priority,function(){if(t.tag===13){var r=Sn();r=Wl(r);var a=Nr(t,r);a!==null&&En(a,t,r),Jc(t,r)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Al(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$c(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);ru=r,t.target.dispatchEvent(r),ru=null}else return n=yr(t),n!==null&&Sb(n),e.blockedOn=t,!1;n.shift()}return!0}function Tb(e,n,t){Al(e)&&t.delete(n)}function ay(){ns=!1,Lt!==null&&Al(Lt)&&(Lt=null),Ut!==null&&Al(Ut)&&(Ut=null),Bt!==null&&Al(Bt)&&(Bt=null),Za.forEach(Tb),Ja.forEach(Tb)}function Rl(e,n){e.blockedOn===n&&(e.blockedOn=null,ns||(ns=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ay)))}var Tl=null;function _b(e){Tl!==e&&(Tl=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Tl===e&&(Tl=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],a=e[n+2];if(typeof r!="function"){if(es(r||t)===null)continue;break}var i=yr(t);i!==null&&(e.splice(n,3),n-=3,ec(i,{pending:!0,data:a,method:t.method,action:r},r,a))}}))}function $a(e){function n(v){return Rl(v,e)}Lt!==null&&Rl(Lt,e),Ut!==null&&Rl(Ut,e),Bt!==null&&Rl(Bt,e),Za.forEach(n),Ja.forEach(n);for(var t=0;t<jt.length;t++){var r=jt[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<jt.length&&(t=jt[0],t.blockedOn===null);)Rb(t),t.blockedOn===null&&jt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var a=t[r],i=t[r+1],s=a[un]||null;if(typeof i=="function")s||_b(t);else if(s){var f=null;if(i&&i.hasAttribute("formAction")){if(a=i,s=i[un]||null)f=s.formAction;else if(es(a)!==null)continue}else f=s.action;typeof f=="function"?t[r+1]=f:(t.splice(r,3),r-=3),_b(t)}}}function ts(e){this._internalRoot=e}_l.prototype.render=ts.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,r=Sn();vb(t,r,e,n,null,null)},_l.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vb(e.current,2,null,e,null,null),ll(),n[hr]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<jt.length&&n!==0&&n<jt[t].priority;t++);jt.splice(t,0,e),t===0&&Rb(e)}};var Ob=u.version;if(Ob!=="19.1.0")throw Error(c(527,Ob,"19.1.0"));k.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=h(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var iy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Yn=Ol.inject(iy),Ve=Ol}catch{}}return ni.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,r="",a=Yf,i=If,s=Vf,f=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(f=n.unstable_transitionCallbacks)),n=yb(e,1,!1,null,null,t,r,a,i,s,f,null),e[hr]=n.current,kc(e),new ts(n)},ni.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var r=!1,a="",i=Yf,s=If,f=Vf,v=null,x=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks),t.formState!==void 0&&(x=t.formState)),n=yb(e,1,!0,n,t??null,r,a,i,s,f,v,x),n.context=mb(null),t=n.current,r=Sn(),r=Wl(r),a=St(r),a.callback=null,Et(t,a,r),t=r,n.current.lanes=t,ia(n,t),Wn(n),e[hr]=n.current,kc(e),new _l(n)},ni.version="19.1.0",ni}var Bb;function yy(){if(Bb)return is.exports;Bb=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),is.exports=py(),is.exports}var my=yy();function vy(l,u){const d=Math.min(u?3.5:7,l*(u?.25:.5));return l-d}function gy(l,u,o,c,d){if(l<=0||u<=0)return{shots:1/0,totalDamage:0};let p=o,m=c,S=0,h=0;for(;p>0;){S++;for(let b=0;b<u;b++){let E=l;if(m>0){E=vy(E,d);const M=Math.min(E,m);m-=M,E-=M}if(p-=E,h+=l,p<=0)break}}return{shots:S,totalDamage:h}}function Sy(l,u,o,c,d){const p=[];for(let m=100;m<=200;m+=5){const S=l*(m/100),{shots:h,totalDamage:b}=gy(S,u,o,c,d);p.push({percent:m,shots:h,totalDamage:b})}return p}function Ey(){const[l,u]=ie.useState(75),[o,c]=ie.useState(1),[d,p]=ie.useState(300),[m,S]=ie.useState(0),[h,b]=ie.useState(!1),[E,M]=ie.useState([]),j=()=>{M(Sy(l,o,d,m,h))};return g.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Damage Breakpoints"}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Damage per Bullet"}),g.jsx("input",{type:"number",value:l,onChange:G=>u(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Bullets per Shot"}),g.jsx("input",{type:"number",value:o,onChange:G=>c(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy HP"}),g.jsx("input",{type:"number",value:d,onChange:G=>p(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),g.jsxs("label",{className:"space-y-1",children:[g.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy Armor"}),g.jsx("input",{type:"number",value:m,onChange:G=>S(Number(G.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),g.jsxs("label",{className:"flex items-center space-x-2 mt-6 text-gray-700 dark:text-gray-300",children:[g.jsx("input",{type:"checkbox",checked:h,onChange:G=>b(G.target.checked)}),g.jsx("span",{children:"Using armor penetration item"})]})]}),g.jsx("button",{onClick:j,className:"bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",children:"Calculate"}),E.length>0&&g.jsx("div",{className:"overflow-x-auto mt-4 max-h-96 overflow-y-auto",children:g.jsxs("table",{className:"min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Damage %"}),g.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Bullet"}),g.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Shot"}),g.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Shots"}),g.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Accumulated"})]})}),g.jsx("tbody",{children:E.map((G,X)=>{const q=X>0?E[X-1].shots:G.shots,z=G.shots<q,W=l*G.percent/100,I=W*o;return g.jsxs("tr",{className:z?"bg-yellow-100 dark:bg-yellow-900":"",children:[g.jsxs("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:[G.percent,"%"]}),g.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:W.toFixed(1)}),g.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:I.toFixed(1)}),g.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:G.shots}),g.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:G.totalDamage.toFixed(1)})]},G.percent)})})]})})]})]})}var ss={exports:{}},os={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb;function Ay(){if(jb)return os;jb=1;var l=ra();function u(h,b){return h===b&&(h!==0||1/h===1/b)||h!==h&&b!==b}var o=typeof Object.is=="function"?Object.is:u,c=l.useSyncExternalStore,d=l.useRef,p=l.useEffect,m=l.useMemo,S=l.useDebugValue;return os.useSyncExternalStoreWithSelector=function(h,b,E,M,j){var G=d(null);if(G.current===null){var X={hasValue:!1,value:null};G.current=X}else X=G.current;G=m(function(){function z(y){if(!W){if(W=!0,I=y,y=M(y),j!==void 0&&X.hasValue){var O=X.value;if(j(O,y))return re=O}return re=y}if(O=re,o(I,y))return O;var H=M(y);return j!==void 0&&j(O,H)?(I=y,O):(I=y,re=H)}var W=!1,I,re,F=E===void 0?null:E;return[function(){return z(b())},F===null?void 0:function(){return z(F())}]},[b,E,M,j]);var q=c(h,G[0],G[1]);return p(function(){X.hasValue=!0,X.value=q},[q]),S(q),q},os}var kb;function Ry(){return kb||(kb=1,ss.exports=Ay()),ss.exports}var Ty=Ry();function _y(l){l()}function Oy(){let l=null,u=null;return{clear(){l=null,u=null},notify(){_y(()=>{let o=l;for(;o;)o.callback(),o=o.next})},get(){const o=[];let c=l;for(;c;)o.push(c),c=c.next;return o},subscribe(o){let c=!0;const d=u={callback:o,next:null,prev:u};return d.prev?d.prev.next=d:l=d,function(){!c||l===null||(c=!1,d.next?d.next.prev=d.prev:u=d.prev,d.prev?d.prev.next=d.next:l=d.next)}}}}var zb={notify(){},get:()=>[]};function xy(l,u){let o,c=zb,d=0,p=!1;function m(q){E();const z=c.subscribe(q);let W=!1;return()=>{W||(W=!0,z(),M())}}function S(){c.notify()}function h(){X.onStateChange&&X.onStateChange()}function b(){return p}function E(){d++,o||(o=l.subscribe(h),c=Oy())}function M(){d--,o&&d===0&&(o(),o=void 0,c.clear(),c=zb)}function j(){p||(p=!0,E())}function G(){p&&(p=!1,M())}const X={addNestedSub:m,notifyNestedSubs:S,handleChangeWrapper:h,isSubscribed:b,trySubscribe:j,tryUnsubscribe:G,getListeners:()=>c};return X}var Ny=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dy=Ny(),Cy=()=>typeof navigator<"u"&&navigator.product==="ReactNative",My=Cy(),wy=()=>Dy||My?ie.useLayoutEffect:ie.useEffect,Hy=wy(),fs=Symbol.for("react-redux-context"),ds=typeof globalThis<"u"?globalThis:{};function Ly(){if(!ie.createContext)return{};const l=ds[fs]??(ds[fs]=new Map);let u=l.get(ie.createContext);return u||(u=ie.createContext(null),l.set(ie.createContext,u)),u}var zt=Ly();function Uy(l){const{children:u,context:o,serverState:c,store:d}=l,p=ie.useMemo(()=>{const h=xy(d);return{store:d,subscription:h,getServerState:c?()=>c:void 0}},[d,c]),m=ie.useMemo(()=>d.getState(),[d]);Hy(()=>{const{subscription:h}=p;return h.onStateChange=h.notifyNestedSubs,h.trySubscribe(),m!==d.getState()&&h.notifyNestedSubs(),()=>{h.tryUnsubscribe(),h.onStateChange=void 0}},[p,m]);const S=o||zt;return ie.createElement(S.Provider,{value:p},u)}var By=Uy;function Cs(l=zt){return function(){return ie.useContext(l)}}var m0=Cs();function v0(l=zt){const u=l===zt?m0:Cs(l),o=()=>{const{store:c}=u();return c};return Object.assign(o,{withTypes:()=>o}),o}var jy=v0();function ky(l=zt){const u=l===zt?jy:v0(l),o=()=>u().dispatch;return Object.assign(o,{withTypes:()=>o}),o}var zy=ky(),Gy=(l,u)=>l===u;function qy(l=zt){const u=l===zt?m0:Cs(l),o=(c,d={})=>{const{equalityFn:p=Gy}=typeof d=="function"?{equalityFn:d}:d,m=u(),{store:S,subscription:h,getServerState:b}=m;ie.useRef(!0);const E=ie.useCallback({[c.name](j){return c(j)}}[c.name],[c]),M=Ty.useSyncExternalStoreWithSelector(h.addNestedSub,S.getState,b||S.getState,E,p);return ie.useDebugValue(M),M};return Object.assign(o,{withTypes:()=>o}),o}var Yy=qy();const Pn=zy,dn=Yy;function Fe(l){return`Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}var Iy=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gb=Iy,bs=()=>Math.random().toString(36).substring(7).split("").join("."),Vy={INIT:`@@redux/INIT${bs()}`,REPLACE:`@@redux/REPLACE${bs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bs()}`},wl=Vy;function Ms(l){if(typeof l!="object"||l===null)return!1;let u=l;for(;Object.getPrototypeOf(u)!==null;)u=Object.getPrototypeOf(u);return Object.getPrototypeOf(l)===u||Object.getPrototypeOf(l)===null}function g0(l,u,o){if(typeof l!="function")throw new Error(Fe(2));if(typeof u=="function"&&typeof o=="function"||typeof o=="function"&&typeof arguments[3]=="function")throw new Error(Fe(0));if(typeof u=="function"&&typeof o>"u"&&(o=u,u=void 0),typeof o<"u"){if(typeof o!="function")throw new Error(Fe(1));return o(g0)(l,u)}let c=l,d=u,p=new Map,m=p,S=0,h=!1;function b(){m===p&&(m=new Map,p.forEach((z,W)=>{m.set(W,z)}))}function E(){if(h)throw new Error(Fe(3));return d}function M(z){if(typeof z!="function")throw new Error(Fe(4));if(h)throw new Error(Fe(5));let W=!0;b();const I=S++;return m.set(I,z),function(){if(W){if(h)throw new Error(Fe(6));W=!1,b(),m.delete(I),p=null}}}function j(z){if(!Ms(z))throw new Error(Fe(7));if(typeof z.type>"u")throw new Error(Fe(8));if(typeof z.type!="string")throw new Error(Fe(17));if(h)throw new Error(Fe(9));try{h=!0,d=c(d,z)}finally{h=!1}return(p=m).forEach(I=>{I()}),z}function G(z){if(typeof z!="function")throw new Error(Fe(10));c=z,j({type:wl.REPLACE})}function X(){const z=M;return{subscribe(W){if(typeof W!="object"||W===null)throw new Error(Fe(11));function I(){const F=W;F.next&&F.next(E())}return I(),{unsubscribe:z(I)}},[Gb](){return this}}}return j({type:wl.INIT}),{dispatch:j,subscribe:M,getState:E,replaceReducer:G,[Gb]:X}}function Xy(l){Object.keys(l).forEach(u=>{const o=l[u];if(typeof o(void 0,{type:wl.INIT})>"u")throw new Error(Fe(12));if(typeof o(void 0,{type:wl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Fe(13))})}function Ky(l){const u=Object.keys(l),o={};for(let p=0;p<u.length;p++){const m=u[p];typeof l[m]=="function"&&(o[m]=l[m])}const c=Object.keys(o);let d;try{Xy(o)}catch(p){d=p}return function(m={},S){if(d)throw d;let h=!1;const b={};for(let E=0;E<c.length;E++){const M=c[E],j=o[M],G=m[M],X=j(G,S);if(typeof X>"u")throw S&&S.type,new Error(Fe(14));b[M]=X,h=h||X!==G}return h=h||c.length!==Object.keys(m).length,h?b:m}}function Hl(...l){return l.length===0?u=>u:l.length===1?l[0]:l.reduce((u,o)=>(...c)=>u(o(...c)))}function Wy(...l){return u=>(o,c)=>{const d=u(o,c);let p=()=>{throw new Error(Fe(15))};const m={getState:d.getState,dispatch:(h,...b)=>p(h,...b)},S=l.map(h=>h(m));return p=Hl(...S)(d.dispatch),{...d,dispatch:p}}}function Py(l){return Ms(l)&&"type"in l&&typeof l.type=="string"}var S0=Symbol.for("immer-nothing"),qb=Symbol.for("immer-draftable"),An=Symbol.for("immer-state");function qn(l,...u){throw new Error(`[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`)}var ta=Object.getPrototypeOf;function sr(l){return!!l&&!!l[An]}function ht(l){var u;return l?E0(l)||Array.isArray(l)||!!l[qb]||!!((u=l.constructor)!=null&&u[qb])||kl(l)||zl(l):!1}var Qy=Object.prototype.constructor.toString();function E0(l){if(!l||typeof l!="object")return!1;const u=ta(l);if(u===null)return!0;const o=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return o===Object?!0:typeof o=="function"&&Function.toString.call(o)===Qy}function Ll(l,u){jl(l)===0?Reflect.ownKeys(l).forEach(o=>{u(o,l[o],l)}):l.forEach((o,c)=>u(c,o,l))}function jl(l){const u=l[An];return u?u.type_:Array.isArray(l)?1:kl(l)?2:zl(l)?3:0}function Es(l,u){return jl(l)===2?l.has(u):Object.prototype.hasOwnProperty.call(l,u)}function A0(l,u,o){const c=jl(l);c===2?l.set(u,o):c===3?l.add(o):l[u]=o}function Zy(l,u){return l===u?l!==0||1/l===1/u:l!==l&&u!==u}function kl(l){return l instanceof Map}function zl(l){return l instanceof Set}function ur(l){return l.copy_||l.base_}function As(l,u){if(kl(l))return new Map(l);if(zl(l))return new Set(l);if(Array.isArray(l))return Array.prototype.slice.call(l);const o=E0(l);if(u===!0||u==="class_only"&&!o){const c=Object.getOwnPropertyDescriptors(l);delete c[An];let d=Reflect.ownKeys(c);for(let p=0;p<d.length;p++){const m=d[p],S=c[m];S.writable===!1&&(S.writable=!0,S.configurable=!0),(S.get||S.set)&&(c[m]={configurable:!0,writable:!0,enumerable:S.enumerable,value:l[m]})}return Object.create(ta(l),c)}else{const c=ta(l);if(c!==null&&o)return{...l};const d=Object.create(c);return Object.assign(d,l)}}function ws(l,u=!1){return Gl(l)||sr(l)||!ht(l)||(jl(l)>1&&(l.set=l.add=l.clear=l.delete=Jy),Object.freeze(l),u&&Object.entries(l).forEach(([o,c])=>ws(c,!0))),l}function Jy(){qn(2)}function Gl(l){return Object.isFrozen(l)}var Fy={};function or(l){const u=Fy[l];return u||qn(0,l),u}var ci;function R0(){return ci}function $y(l,u){return{drafts_:[],parent_:l,immer_:u,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yb(l,u){u&&(or("Patches"),l.patches_=[],l.inversePatches_=[],l.patchListener_=u)}function Rs(l){Ts(l),l.drafts_.forEach(em),l.drafts_=null}function Ts(l){l===ci&&(ci=l.parent_)}function Ib(l){return ci=$y(ci,l)}function em(l){const u=l[An];u.type_===0||u.type_===1?u.revoke_():u.revoked_=!0}function Vb(l,u){u.unfinalizedDrafts_=u.drafts_.length;const o=u.drafts_[0];return l!==void 0&&l!==o?(o[An].modified_&&(Rs(u),qn(4)),ht(l)&&(l=Ul(u,l),u.parent_||Bl(u,l)),u.patches_&&or("Patches").generateReplacementPatches_(o[An].base_,l,u.patches_,u.inversePatches_)):l=Ul(u,o,[]),Rs(u),u.patches_&&u.patchListener_(u.patches_,u.inversePatches_),l!==S0?l:void 0}function Ul(l,u,o){if(Gl(u))return u;const c=u[An];if(!c)return Ll(u,(d,p)=>Xb(l,c,u,d,p,o)),u;if(c.scope_!==l)return u;if(!c.modified_)return Bl(l,c.base_,!0),c.base_;if(!c.finalized_){c.finalized_=!0,c.scope_.unfinalizedDrafts_--;const d=c.copy_;let p=d,m=!1;c.type_===3&&(p=new Set(d),d.clear(),m=!0),Ll(p,(S,h)=>Xb(l,c,d,S,h,o,m)),Bl(l,d,!1),o&&l.patches_&&or("Patches").generatePatches_(c,o,l.patches_,l.inversePatches_)}return c.copy_}function Xb(l,u,o,c,d,p,m){if(sr(d)){const S=p&&u&&u.type_!==3&&!Es(u.assigned_,c)?p.concat(c):void 0,h=Ul(l,d,S);if(A0(o,c,h),sr(h))l.canAutoFreeze_=!1;else return}else m&&o.add(d);if(ht(d)&&!Gl(d)){if(!l.immer_.autoFreeze_&&l.unfinalizedDrafts_<1)return;Ul(l,d),(!u||!u.scope_.parent_)&&typeof c!="symbol"&&Object.prototype.propertyIsEnumerable.call(o,c)&&Bl(l,d)}}function Bl(l,u,o=!1){!l.parent_&&l.immer_.autoFreeze_&&l.canAutoFreeze_&&ws(u,o)}function nm(l,u){const o=Array.isArray(l),c={type_:o?1:0,scope_:u?u.scope_:R0(),modified_:!1,finalized_:!1,assigned_:{},parent_:u,base_:l,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=c,p=Hs;o&&(d=[c],p=si);const{revoke:m,proxy:S}=Proxy.revocable(d,p);return c.draft_=S,c.revoke_=m,S}var Hs={get(l,u){if(u===An)return l;const o=ur(l);if(!Es(o,u))return tm(l,o,u);const c=o[u];return l.finalized_||!ht(c)?c:c===hs(l.base_,u)?(ps(l),l.copy_[u]=Os(c,l)):c},has(l,u){return u in ur(l)},ownKeys(l){return Reflect.ownKeys(ur(l))},set(l,u,o){const c=T0(ur(l),u);if(c!=null&&c.set)return c.set.call(l.draft_,o),!0;if(!l.modified_){const d=hs(ur(l),u),p=d==null?void 0:d[An];if(p&&p.base_===o)return l.copy_[u]=o,l.assigned_[u]=!1,!0;if(Zy(o,d)&&(o!==void 0||Es(l.base_,u)))return!0;ps(l),_s(l)}return l.copy_[u]===o&&(o!==void 0||u in l.copy_)||Number.isNaN(o)&&Number.isNaN(l.copy_[u])||(l.copy_[u]=o,l.assigned_[u]=!0),!0},deleteProperty(l,u){return hs(l.base_,u)!==void 0||u in l.base_?(l.assigned_[u]=!1,ps(l),_s(l)):delete l.assigned_[u],l.copy_&&delete l.copy_[u],!0},getOwnPropertyDescriptor(l,u){const o=ur(l),c=Reflect.getOwnPropertyDescriptor(o,u);return c&&{writable:!0,configurable:l.type_!==1||u!=="length",enumerable:c.enumerable,value:o[u]}},defineProperty(){qn(11)},getPrototypeOf(l){return ta(l.base_)},setPrototypeOf(){qn(12)}},si={};Ll(Hs,(l,u)=>{si[l]=function(){return arguments[0]=arguments[0][0],u.apply(this,arguments)}});si.deleteProperty=function(l,u){return si.set.call(this,l,u,void 0)};si.set=function(l,u,o){return Hs.set.call(this,l[0],u,o,l[0])};function hs(l,u){const o=l[An];return(o?ur(o):l)[u]}function tm(l,u,o){var d;const c=T0(u,o);return c?"value"in c?c.value:(d=c.get)==null?void 0:d.call(l.draft_):void 0}function T0(l,u){if(!(u in l))return;let o=ta(l);for(;o;){const c=Object.getOwnPropertyDescriptor(o,u);if(c)return c;o=ta(o)}}function _s(l){l.modified_||(l.modified_=!0,l.parent_&&_s(l.parent_))}function ps(l){l.copy_||(l.copy_=As(l.base_,l.scope_.immer_.useStrictShallowCopy_))}var rm=class{constructor(l){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(u,o,c)=>{if(typeof u=="function"&&typeof o!="function"){const p=o;o=u;const m=this;return function(h=p,...b){return m.produce(h,E=>o.call(this,E,...b))}}typeof o!="function"&&qn(6),c!==void 0&&typeof c!="function"&&qn(7);let d;if(ht(u)){const p=Ib(this),m=Os(u,void 0);let S=!0;try{d=o(m),S=!1}finally{S?Rs(p):Ts(p)}return Yb(p,c),Vb(d,p)}else if(!u||typeof u!="object"){if(d=o(u),d===void 0&&(d=u),d===S0&&(d=void 0),this.autoFreeze_&&ws(d,!0),c){const p=[],m=[];or("Patches").generateReplacementPatches_(u,d,p,m),c(p,m)}return d}else qn(1,u)},this.produceWithPatches=(u,o)=>{if(typeof u=="function")return(m,...S)=>this.produceWithPatches(m,h=>u(h,...S));let c,d;return[this.produce(u,o,(m,S)=>{c=m,d=S}),c,d]},typeof(l==null?void 0:l.autoFreeze)=="boolean"&&this.setAutoFreeze(l.autoFreeze),typeof(l==null?void 0:l.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(l.useStrictShallowCopy)}createDraft(l){ht(l)||qn(8),sr(l)&&(l=am(l));const u=Ib(this),o=Os(l,void 0);return o[An].isManual_=!0,Ts(u),o}finishDraft(l,u){const o=l&&l[An];(!o||!o.isManual_)&&qn(9);const{scope_:c}=o;return Yb(c,u),Vb(void 0,c)}setAutoFreeze(l){this.autoFreeze_=l}setUseStrictShallowCopy(l){this.useStrictShallowCopy_=l}applyPatches(l,u){let o;for(o=u.length-1;o>=0;o--){const d=u[o];if(d.path.length===0&&d.op==="replace"){l=d.value;break}}o>-1&&(u=u.slice(o+1));const c=or("Patches").applyPatches_;return sr(l)?c(l,u):this.produce(l,d=>c(d,u))}};function Os(l,u){const o=kl(l)?or("MapSet").proxyMap_(l,u):zl(l)?or("MapSet").proxySet_(l,u):nm(l,u);return(u?u.scope_:R0()).drafts_.push(o),o}function am(l){return sr(l)||qn(10,l),_0(l)}function _0(l){if(!ht(l)||Gl(l))return l;const u=l[An];let o;if(u){if(!u.modified_)return u.base_;u.finalized_=!0,o=As(l,u.scope_.immer_.useStrictShallowCopy_)}else o=As(l,!0);return Ll(o,(c,d)=>{A0(o,c,_0(d))}),u&&(u.finalized_=!1),o}var Rn=new rm,O0=Rn.produce;Rn.produceWithPatches.bind(Rn);Rn.setAutoFreeze.bind(Rn);Rn.setUseStrictShallowCopy.bind(Rn);Rn.applyPatches.bind(Rn);Rn.createDraft.bind(Rn);Rn.finishDraft.bind(Rn);function x0(l){return({dispatch:o,getState:c})=>d=>p=>typeof p=="function"?p(o,c,l):d(p)}var im=x0(),lm=x0,um=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Hl:Hl.apply(null,arguments)};function Kb(l,u){function o(...c){if(u){let d=u(...c);if(!d)throw new Error(bt(0));return{type:l,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:l,payload:c[0]}}return o.toString=()=>`${l}`,o.type=l,o.match=c=>Py(c)&&c.type===l,o}var N0=class ui extends Array{constructor(...u){super(...u),Object.setPrototypeOf(this,ui.prototype)}static get[Symbol.species](){return ui}concat(...u){return super.concat.apply(this,u)}prepend(...u){return u.length===1&&Array.isArray(u[0])?new ui(...u[0].concat(this)):new ui(...u.concat(this))}};function Wb(l){return ht(l)?O0(l,()=>{}):l}function xl(l,u,o){return l.has(u)?l.get(u):l.set(u,o(u)).get(u)}function cm(l){return typeof l=="boolean"}var sm=()=>function(u){const{thunk:o=!0,immutableCheck:c=!0,serializableCheck:d=!0,actionCreatorCheck:p=!0}=u??{};let m=new N0;return o&&(cm(o)?m.push(im):m.push(lm(o.extraArgument))),m},om="RTK_autoBatch",Pb=l=>u=>{setTimeout(u,l)},fm=(l={type:"raf"})=>u=>(...o)=>{const c=u(...o);let d=!0,p=!1,m=!1;const S=new Set,h=l.type==="tick"?queueMicrotask:l.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Pb(10):l.type==="callback"?l.queueNotification:Pb(l.timeout),b=()=>{m=!1,p&&(p=!1,S.forEach(E=>E()))};return Object.assign({},c,{subscribe(E){const M=()=>d&&E(),j=c.subscribe(M);return S.add(E),()=>{j(),S.delete(E)}},dispatch(E){var M;try{return d=!((M=E==null?void 0:E.meta)!=null&&M[om]),p=!d,p&&(m||(m=!0,h(b))),c.dispatch(E)}finally{d=!0}}})},dm=l=>function(o){const{autoBatch:c=!0}=o??{};let d=new N0(l);return c&&d.push(fm(typeof c=="object"?c:void 0)),d};function bm(l){const u=sm(),{reducer:o=void 0,middleware:c,devTools:d=!0,preloadedState:p=void 0,enhancers:m=void 0}=l||{};let S;if(typeof o=="function")S=o;else if(Ms(o))S=Ky(o);else throw new Error(bt(1));let h;typeof c=="function"?h=c(u):h=u();let b=Hl;d&&(b=um({trace:!1,...typeof d=="object"&&d}));const E=Wy(...h),M=dm(E);let j=typeof m=="function"?m(M):M();const G=b(...j);return g0(S,p,G)}function D0(l){const u={},o=[];let c;const d={addCase(p,m){const S=typeof p=="string"?p:p.type;if(!S)throw new Error(bt(28));if(S in u)throw new Error(bt(29));return u[S]=m,d},addMatcher(p,m){return o.push({matcher:p,reducer:m}),d},addDefaultCase(p){return c=p,d}};return l(d),[u,o,c]}function hm(l){return typeof l=="function"}function pm(l,u){let[o,c,d]=D0(u),p;if(hm(l))p=()=>Wb(l());else{const S=Wb(l);p=()=>S}function m(S=p(),h){let b=[o[h.type],...c.filter(({matcher:E})=>E(h)).map(({reducer:E})=>E)];return b.filter(E=>!!E).length===0&&(b=[d]),b.reduce((E,M)=>{if(M)if(sr(E)){const G=M(E,h);return G===void 0?E:G}else{if(ht(E))return O0(E,j=>M(j,h));{const j=M(E,h);if(j===void 0){if(E===null)return E;throw Error("A case reducer on a non-draftable value must not return undefined")}return j}}return E},S)}return m.getInitialState=p,m}var ym=Symbol.for("rtk-slice-createasyncthunk");function mm(l,u){return`${l}/${u}`}function vm({creators:l}={}){var o;const u=(o=l==null?void 0:l.asyncThunk)==null?void 0:o[ym];return function(d){const{name:p,reducerPath:m=p}=d;if(!p)throw new Error(bt(11));const S=(typeof d.reducers=="function"?d.reducers(Em()):d.reducers)||{},h=Object.keys(S),b={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},E={addCase(F,y){const O=typeof F=="string"?F:F.type;if(!O)throw new Error(bt(12));if(O in b.sliceCaseReducersByType)throw new Error(bt(13));return b.sliceCaseReducersByType[O]=y,E},addMatcher(F,y){return b.sliceMatchers.push({matcher:F,reducer:y}),E},exposeAction(F,y){return b.actionCreators[F]=y,E},exposeCaseReducer(F,y){return b.sliceCaseReducersByName[F]=y,E}};h.forEach(F=>{const y=S[F],O={reducerName:F,type:mm(p,F),createNotation:typeof d.reducers=="function"};Rm(y)?_m(O,y,E,u):Am(O,y,E)});function M(){const[F={},y=[],O=void 0]=typeof d.extraReducers=="function"?D0(d.extraReducers):[d.extraReducers],H={...F,...b.sliceCaseReducersByType};return pm(d.initialState,K=>{for(let Z in H)K.addCase(Z,H[Z]);for(let Z of b.sliceMatchers)K.addMatcher(Z.matcher,Z.reducer);for(let Z of y)K.addMatcher(Z.matcher,Z.reducer);O&&K.addDefaultCase(O)})}const j=F=>F,G=new Map,X=new WeakMap;let q;function z(F,y){return q||(q=M()),q(F,y)}function W(){return q||(q=M()),q.getInitialState()}function I(F,y=!1){function O(K){let Z=K[F];return typeof Z>"u"&&y&&(Z=xl(X,O,W)),Z}function H(K=j){const Z=xl(G,y,()=>new WeakMap);return xl(Z,K,()=>{const ge={};for(const[Ne,De]of Object.entries(d.selectors??{}))ge[Ne]=gm(De,K,()=>xl(X,K,W),y);return ge})}return{reducerPath:F,getSelectors:H,get selectors(){return H(O)},selectSlice:O}}const re={name:p,reducer:z,actions:b.actionCreators,caseReducers:b.sliceCaseReducersByName,getInitialState:W,...I(m),injectInto(F,{reducerPath:y,...O}={}){const H=y??m;return F.inject({reducerPath:H,reducer:z},O),{...re,...I(H,!0)}}};return re}}function gm(l,u,o,c){function d(p,...m){let S=u(p);return typeof S>"u"&&c&&(S=o()),l(S,...m)}return d.unwrapped=l,d}var Sm=vm();function Em(){function l(u,o){return{_reducerDefinitionType:"asyncThunk",payloadCreator:u,...o}}return l.withTypes=()=>l,{reducer(u){return Object.assign({[u.name](...o){return u(...o)}}[u.name],{_reducerDefinitionType:"reducer"})},preparedReducer(u,o){return{_reducerDefinitionType:"reducerWithPrepare",prepare:u,reducer:o}},asyncThunk:l}}function Am({type:l,reducerName:u,createNotation:o},c,d){let p,m;if("reducer"in c){if(o&&!Tm(c))throw new Error(bt(17));p=c.reducer,m=c.prepare}else p=c;d.addCase(l,p).exposeCaseReducer(u,p).exposeAction(u,m?Kb(l,m):Kb(l))}function Rm(l){return l._reducerDefinitionType==="asyncThunk"}function Tm(l){return l._reducerDefinitionType==="reducerWithPrepare"}function _m({type:l,reducerName:u},o,c,d){if(!d)throw new Error(bt(18));const{payloadCreator:p,fulfilled:m,pending:S,rejected:h,settled:b,options:E}=o,M=d(l,p,E);c.exposeAction(u,M),m&&c.addCase(M.fulfilled,m),S&&c.addCase(M.pending,S),h&&c.addCase(M.rejected,h),b&&c.addMatcher(M.settled,b),c.exposeCaseReducer(u,{fulfilled:m||Nl,pending:S||Nl,rejected:h||Nl,settled:b||Nl})}function Nl(){}function bt(l){return`Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}const Om={hero:"Ashe",cash:11e3,equipped:Array(2).fill(""),toBuy:6,avoid:[],avoidEnabled:!1,weights:[{type:"",weight:1}],error:"",minValueEnabled:!1,minAttrGroups:[]},C0=Sm({name:"input",initialState:Om,reducers:{setHero(l,u){l.hero=u.payload},setCash(l,u){l.cash=u.payload},setEquipped(l,u){l.equipped[u.payload.index]=u.payload.id},addEquippedSlot(l){l.equipped.length<6&&l.equipped.push("")},removeEquippedSlot(l,u){l.equipped.length>2&&l.equipped.splice(u.payload,1)},setToBuy(l,u){l.toBuy=u.payload},addAvoid(l,u){l.avoid.includes(u.payload)||l.avoid.push(u.payload)},removeAvoid(l,u){l.avoid=l.avoid.filter(o=>o!==u.payload)},toggleAvoidEnabled(l){l.avoidEnabled=!l.avoidEnabled},setWeightType(l,u){l.weights[u.payload.index].type=u.payload.type},setWeightValue(l,u){l.weights[u.payload.index].weight=u.payload.value},addWeightRow(l,u){l.weights.push({type:u.payload,weight:1})},removeWeightRow(l,u){l.weights.splice(u.payload,1)},setError(l,u){l.error=u.payload},toggleMinValueEnabled(l){l.minValueEnabled=!l.minValueEnabled,l.minValueEnabled&&l.minAttrGroups.length===0&&l.minAttrGroups.push({attrs:["Health","Armor","Shield"],value:50})},addMinGroup(l){l.minAttrGroups.push({attrs:[],value:0})},removeMinGroup(l,u){l.minAttrGroups.splice(u.payload,1)},setMinGroupValue(l,u){l.minAttrGroups[u.payload.index].value=u.payload.value},addAttrToGroup(l,u){const o=l.minAttrGroups[u.payload.index];o.attrs.includes(u.payload.attr)||o.attrs.push(u.payload.attr)},removeAttrFromGroup(l,u){const o=l.minAttrGroups[u.payload.index];o.attrs=o.attrs.filter(c=>c!==u.payload.attr)}}}),{setHero:xm,setCash:Nm,setEquipped:Qb,setToBuy:M0,addAvoid:w0,removeAvoid:Dm,toggleAvoidEnabled:H0,setWeightType:L0,setWeightValue:Cm,addWeightRow:Mm,removeWeightRow:wm,setError:ar,toggleMinValueEnabled:Hm,addMinGroup:Lm,removeMinGroup:Um,setMinGroupValue:Bm,addAttrToGroup:jm,removeAttrFromGroup:km,addEquippedSlot:zm,removeEquippedSlot:Gm}=C0.actions,qm=C0.reducer;function U0(l,u){const o={common:0,rare:1,epic:2},c=o[l.rarity]-o[u.rarity];return c!==0?c:l.name.localeCompare(u.name)}function Ym(l){const u=l.match(/[-+]?\d+(?:\.\d+)?/);return u?parseFloat(u[0]):0}function xs(l){const u=new Map;return l.forEach(o=>{o.attributes.forEach(c=>{const d=Ym(c.value);u.set(c.type,(u.get(c.type)??0)+d)})}),u}function Zb(l,u){let o=0;return u.forEach(c=>{o+=(l.get(c.type)??0)*c.weight}),o}function oi(l){switch(l){case"common":return"#17a631";case"rare":return"#217dbe";case"epic":return"#8727d6";default:return"black"}}function Im(l,u){const o=xs(l);return u.every(c=>c.attrs.reduce((p,m)=>p+(o.get(m)??0),0)>=c.value)}function B0(l,u,o){const c=new Set(l.map(d=>d.type));return u&&o.forEach(d=>{d.attrs.forEach(p=>c.add(p))}),c.delete(""),c}function Vm(l,u,o,c){const d=B0(u,o,c),p=[];return u.forEach(m=>{const S=l.get(m.type)??0;p.push({type:m.type,sum:S,contrib:S*m.weight}),d.delete(m.type)}),d.forEach(m=>{const S=l.get(m)??0;p.push({type:m,sum:S,contrib:0})}),p}function j0({label:l,onRemove:u}){return g.jsxs("span",{className:"inline-flex items-center justify-center px-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 text-xs mr-2 align-middle",children:[l,u&&g.jsx("button",{type:"button",onClick:u,"aria-label":"Remove",className:"ml-2 pl-2 pr-2 pt-1 pb-1 text-red-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 text-xs align-middle flex items-center justify-center",children:"×"})]})}function fi({label:l,options:u,value:o,onChange:c,placeholder:d="Select an option",className:p}){const[m,S]=ie.useState(!1),[h,b]=ie.useState(!1),[E,M]=ie.useState(""),j=ie.useRef(null),G=ie.useRef(null),X=ie.useRef(null),q=u.find(y=>y.value===o),z=(q==null?void 0:q.label)||d,W=q==null?void 0:q.color,I=u.filter(y=>y.label.toLowerCase().includes(E.toLowerCase())),re=y=>{c(y),S(!1),M("")};return ie.useEffect(()=>{const y=O=>{j.current&&!j.current.contains(O.target)&&S(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]),ie.useEffect(()=>{m&&X.current&&X.current.focus()},[m]),ie.useEffect(()=>{if(!m||!G.current)return;const y=G.current.getBoundingClientRect(),O=window.innerHeight||document.documentElement.clientHeight,H=O*.4,K=O-y.bottom,Z=y.top;K<H&&Z>K?b(!0):b(!1)},[m]),g.jsxs("div",{className:`relative block ${p||""}`,ref:j,children:[g.jsxs("span",{className:"flex w-full divide-x divide-gray-300 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm",children:[g.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative text-left",onClick:()=>{const y=!m;S(y),y&&M("")},ref:G,children:g.jsx("span",{style:{color:W||"inherit",minWidth:"135px",display:"inline-block"},children:z})}),g.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative","aria-label":"Menu",onClick:()=>{const y=!m;S(y),y&&M("")},children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),m&&g.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg max-h-[40vh] overflow-y-auto ${h?"bottom-full mb-2":"top-full mt-2"}`,children:u.length>0?g.jsxs("div",{children:[g.jsx("p",{className:"sticky top-0 bg-white dark:bg-gray-900 px-3 py-2 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 z-20",children:l}),g.jsx("input",{type:"text",ref:X,className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 text-sm placeholder-gray-400 dark:placeholder-gray-500",placeholder:"Search...",value:E,onChange:y=>M(y.target.value),onKeyDown:y=>{y.key==="Enter"&&I.length===1&&(y.preventDefault(),re(I[0].value))}}),I.map(y=>g.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",role:"menuitem",onClick:O=>{O.preventDefault(),re(y.value)},children:g.jsx("span",{style:{color:y.color||"inherit"},children:y.label})},y.value)),I.length===0&&g.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No matching options"})]}):g.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No options available"})})]})}const ql=({onClick:l,text:u})=>g.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",onClick:l,children:u});function Xm({items:l}){const u=dn(m=>m.input.present.avoid),o=dn(m=>m.input.present.avoidEnabled),c=Pn(),[d,p]=ie.useState("");return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Avoid Items"}),g.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[g.jsx("input",{id:"avoid-toggle",type:"checkbox",checked:o,onChange:()=>c(H0()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),g.jsx("label",{htmlFor:"avoid-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Avoid Items"})]}),o&&g.jsxs(g.Fragment,{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(fi,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...l.sort(U0).map(m=>({value:m.id||m.name,label:`${m.name} (${m.cost})`,color:oi(m.rarity)}))],value:d,onChange:p,className:"flex-grow"}),g.jsx(ql,{text:"Add",onClick:()=>{d&&(c(w0(d)),p(""))}})]}),u.length>0&&g.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:u.map(m=>{const S=l.find(h=>(h.id||h.name)===m);return g.jsx(j0,{label:S?S.name:m,onRemove:()=>c(Dm(m))},m)})})]})]})}function Ls({value:l,onChange:u,min:o,max:c,step:d,placeholder:p,className:m,label:S}){const[h,b]=ie.useState(l.toString());ie.useEffect(()=>{b(l.toString())},[l]);const E=M=>{const j=M.target.value;if(b(j),j===""||j==="-")return;const G=Number(j);isNaN(G)||u(G)};return g.jsx("div",{className:`relative inline-block ${m||""}`,children:g.jsx("input",{type:"number",className:"block w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 placeholder-gray-400 dark:placeholder-gray-500",value:h,onChange:E,inputMode:"decimal",pattern:".*",min:o,max:c,step:d,placeholder:p,"aria-label":S||p||"Number input"})})}function Km(){const l=dn(o=>o.input.present.cash),u=Pn();return g.jsxs("div",{children:[g.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium dark:text-gray-300",children:"Total Cash"}),g.jsx(Ls,{value:l,onChange:o=>u(Nm(o)),min:0,label:"Total Cash",className:"mt-1"})]})}function fr(l){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[l]||l}function Wm(l,u){const o=["WP","AP","AS","Health","Armor","Shields"],c=o.indexOf(l),d=o.indexOf(u);return c!==-1&&d!==-1?c-d:c!==-1?-1:d!==-1?1:l.localeCompare(u)}function Pm({items:l}){const u=dn(m=>m.input.present.equipped),o=Pn(),[c,d]=ie.useState(!1),p=m=>{d(m),m||u.forEach((S,h)=>o(Qb({index:h,id:""})))};return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Equipped Items"}),g.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[g.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:c,onChange:m=>p(m.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),g.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm dark:text-gray-300 select-none",children:"Use Equipped Items"})]}),c&&g.jsxs("div",{className:"space-y-4 mt-1",children:[u.map((m,S)=>g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(fi,{label:`Equipped Slot ${S+1}`,placeholder:"None",options:[{value:"",label:"None"},...l.sort(U0).map(h=>({value:h.id||h.name,label:`${h.name} (${h.cost}) ${h.attributes.filter(b=>b.type!=="description").map(b=>`${fr(b.type)}-${b.value}`).join(", ")}`,color:oi(h.rarity)}))],value:m,onChange:h=>o(Qb({index:S,id:h})),className:"flex-grow"}),u.length>2&&g.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>o(Gm(S)),children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},S)),u.length<6&&g.jsx(ql,{text:"Add Slot",onClick:()=>o(zm())})]})]})}function Qm({heroes:l}){const u=dn(c=>c.input.present.hero),o=Pn();return g.jsxs("div",{children:[g.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium mb-1 dark:text-gray-300",children:"Hero"}),g.jsx(fi,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...l.map(c=>({value:c,label:c}))],value:u,onChange:c=>o(xm(c))})]})}function Zm({attrTypes:l}){const u=Pn(),o=dn(p=>p.input.present.minValueEnabled),c=dn(p=>p.input.present.minAttrGroups),d=l.map(p=>({value:p,label:fr(p)}));return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Minimum Attribute Totals"}),g.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[g.jsx("input",{id:"min-value-toggle",type:"checkbox",checked:o,onChange:()=>u(Hm()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),g.jsx("label",{htmlFor:"min-value-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Minimum Values"})]}),o&&g.jsxs("div",{className:"space-y-4",children:[c.map((p,m)=>g.jsxs("div",{className:"rounded border p-3 space-y-2",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-sm font-medium dark:text-gray-300",children:"Target Value:"}),g.jsx(Ls,{value:p.value,onChange:S=>u(Bm({index:m,value:S})),min:0,label:"Minimum Value",className:"w-24"}),c.length>1&&g.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>u(Um(m)),children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),g.jsx(fi,{label:"Add Attribute",placeholder:"Add attribute",options:d.filter(S=>!p.attrs.includes(S.value)),value:"",onChange:S=>u(jm({index:m,attr:S})),className:"w-full"}),p.attrs.length>0&&g.jsx("div",{className:"flex flex-wrap gap-2",children:p.attrs.map(S=>g.jsx(j0,{label:fr(S),onRemove:()=>u(km({index:m,attr:S}))},S))})]},m)),g.jsx(ql,{text:"Add Group",onClick:()=>u(Lm())})]})]})}function Jm({onSubmit:l,validate:u}){const o=Pn(),c=dn(p=>p.input.present.toBuy),d=dn(p=>p.input.present.error);return g.jsxs("div",{className:"!mt-8 border-t pt-6",children:[g.jsx("button",{type:"button",onClick:()=>{u()&&l()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 dark:hover:bg-teal-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",disabled:!u(),children:"Calculate Optimal Build"}),g.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(p=>g.jsx("button",{type:"button",onClick:()=>o(M0(p)),className:`rounded-lg py-2 text-sm font-medium ${c===p?"bg-indigo-600 dark:bg-indigo-700 text-white":"bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:p},p))}),d&&g.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 dark:border-red-700 bg-red-50 dark:bg-gray-900 p-4 text-sm font-medium text-red-800 dark:text-red-300",children:d})]})}function Fm({attrTypes:l}){const u=dn(d=>d.input.present.weights),o=Pn(),c=l.map(d=>({value:d,label:fr(d)}));return g.jsxs("div",{children:[g.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Attribute Weights"}),g.jsx("div",{className:"space-y-4 mt-1 mb-4",children:u.map((d,p)=>g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(fi,{label:"Attribute Type",placeholder:"Select type",options:c,value:d.type,onChange:m=>o(L0({index:p,type:m})),className:"flex-grow"}),g.jsx(Ls,{value:d.weight,onChange:m=>o(Cm({index:p,value:m})),min:0,max:100,step:.01,label:`Weight for ${fr(d.type)}`,className:"w-24"}),u.length>1&&g.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 dark:text-gray-500 hover:bg-red-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-400",onClick:()=>o(wm(p)),children:g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},p))}),g.jsx(ql,{onClick:()=>o(Mm(l[0])),text:"Add Row"})]})}function $m({heroes:l,attrTypes:u,filteredItems:o,onSubmit:c,validate:d}){return g.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8  dark:border-gray-700",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Configuration"}),g.jsxs("form",{onSubmit:p=>{p.preventDefault(),d()&&c()},className:"grid",children:[g.jsxs("div",{className:"flex flex-row gap-4",children:[g.jsx(Qm,{heroes:l}),g.jsx(Km,{})]}),g.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),g.jsx(Pm,{items:o}),g.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),g.jsx(Xm,{items:o}),g.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),g.jsx(Zm,{attrTypes:u}),g.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),g.jsx(Fm,{attrTypes:u}),g.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),g.jsx(Jm,{onSubmit:c,validate:d})]})]})}function ev({alternatives:l}){return l.length===0?null:g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Alternative Builds"}),g.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 max-h-48 overflow-y-auto",children:l.map((u,o)=>g.jsxs("li",{className:"text-sm text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",children:[g.jsxs("strong",{children:["Cost: ",u.cost]})," - ",u.items.map((c,d)=>g.jsxs("span",{style:{color:oi(c.rarity)},children:[c.name,d<u.items.length-1?", ":""]},c.id||c.name))]},o))})]})}function nv({results:l}){return l.breakdown?g.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[g.jsx("strong",{children:"Breakdown:"}),g.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[g.jsx("thead",{children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Type"}),g.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Sum"}),g.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Contribution"})]})}),g.jsx("tbody",{children:l.breakdown.map(u=>g.jsxs("tr",{className:"dark:bg-gray-900",children:[g.jsx("td",{className:"px-2 py-1",children:fr(u.type)}),g.jsx("td",{className:"px-2 py-1",children:u.sum}),g.jsx("td",{className:"px-2 py-1",children:u.contrib.toFixed(2)})]},u.type))})]})]}):null}var ti={},$r={},Dl={},ir={},lr={},ys={},Jb;function k0(){return Jb||(Jb=1,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.Doctype=l.CDATA=l.Tag=l.Style=l.Script=l.Comment=l.Directive=l.Text=l.Root=l.isTag=l.ElementType=void 0;var u;(function(c){c.Root="root",c.Text="text",c.Directive="directive",c.Comment="comment",c.Script="script",c.Style="style",c.Tag="tag",c.CDATA="cdata",c.Doctype="doctype"})(u=l.ElementType||(l.ElementType={}));function o(c){return c.type===u.Tag||c.type===u.Script||c.type===u.Style}l.isTag=o,l.Root=u.Root,l.Text=u.Text,l.Directive=u.Directive,l.Comment=u.Comment,l.Script=u.Script,l.Style=u.Style,l.Tag=u.Tag,l.CDATA=u.CDATA,l.Doctype=u.Doctype}(ys)),ys}var se={},Fb;function $b(){if(Fb)return se;Fb=1;var l=se&&se.__extends||function(){var y=function(O,H){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(K,Z){K.__proto__=Z}||function(K,Z){for(var ge in Z)Object.prototype.hasOwnProperty.call(Z,ge)&&(K[ge]=Z[ge])},y(O,H)};return function(O,H){if(typeof H!="function"&&H!==null)throw new TypeError("Class extends value "+String(H)+" is not a constructor or null");y(O,H);function K(){this.constructor=O}O.prototype=H===null?Object.create(H):(K.prototype=H.prototype,new K)}}(),u=se&&se.__assign||function(){return u=Object.assign||function(y){for(var O,H=1,K=arguments.length;H<K;H++){O=arguments[H];for(var Z in O)Object.prototype.hasOwnProperty.call(O,Z)&&(y[Z]=O[Z])}return y},u.apply(this,arguments)};Object.defineProperty(se,"__esModule",{value:!0}),se.cloneNode=se.hasChildren=se.isDocument=se.isDirective=se.isComment=se.isText=se.isCDATA=se.isTag=se.Element=se.Document=se.CDATA=se.NodeWithChildren=se.ProcessingInstruction=se.Comment=se.Text=se.DataNode=se.Node=void 0;var o=k0(),c=function(){function y(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(y.prototype,"parentNode",{get:function(){return this.parent},set:function(O){this.parent=O},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"previousSibling",{get:function(){return this.prev},set:function(O){this.prev=O},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"nextSibling",{get:function(){return this.next},set:function(O){this.next=O},enumerable:!1,configurable:!0}),y.prototype.cloneNode=function(O){return O===void 0&&(O=!1),re(this,O)},y}();se.Node=c;var d=function(y){l(O,y);function O(H){var K=y.call(this)||this;return K.data=H,K}return Object.defineProperty(O.prototype,"nodeValue",{get:function(){return this.data},set:function(H){this.data=H},enumerable:!1,configurable:!0}),O}(c);se.DataNode=d;var p=function(y){l(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.Text,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),O}(d);se.Text=p;var m=function(y){l(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.Comment,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),O}(d);se.Comment=m;var S=function(y){l(O,y);function O(H,K){var Z=y.call(this,K)||this;return Z.name=H,Z.type=o.ElementType.Directive,Z}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),O}(d);se.ProcessingInstruction=S;var h=function(y){l(O,y);function O(H){var K=y.call(this)||this;return K.children=H,K}return Object.defineProperty(O.prototype,"firstChild",{get:function(){var H;return(H=this.children[0])!==null&&H!==void 0?H:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"childNodes",{get:function(){return this.children},set:function(H){this.children=H},enumerable:!1,configurable:!0}),O}(c);se.NodeWithChildren=h;var b=function(y){l(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.CDATA,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),O}(h);se.CDATA=b;var E=function(y){l(O,y);function O(){var H=y!==null&&y.apply(this,arguments)||this;return H.type=o.ElementType.Root,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),O}(h);se.Document=E;var M=function(y){l(O,y);function O(H,K,Z,ge){Z===void 0&&(Z=[]),ge===void 0&&(ge=H==="script"?o.ElementType.Script:H==="style"?o.ElementType.Style:o.ElementType.Tag);var Ne=y.call(this,Z)||this;return Ne.name=H,Ne.attribs=K,Ne.type=ge,Ne}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"tagName",{get:function(){return this.name},set:function(H){this.name=H},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"attributes",{get:function(){var H=this;return Object.keys(this.attribs).map(function(K){var Z,ge;return{name:K,value:H.attribs[K],namespace:(Z=H["x-attribsNamespace"])===null||Z===void 0?void 0:Z[K],prefix:(ge=H["x-attribsPrefix"])===null||ge===void 0?void 0:ge[K]}})},enumerable:!1,configurable:!0}),O}(h);se.Element=M;function j(y){return(0,o.isTag)(y)}se.isTag=j;function G(y){return y.type===o.ElementType.CDATA}se.isCDATA=G;function X(y){return y.type===o.ElementType.Text}se.isText=X;function q(y){return y.type===o.ElementType.Comment}se.isComment=q;function z(y){return y.type===o.ElementType.Directive}se.isDirective=z;function W(y){return y.type===o.ElementType.Root}se.isDocument=W;function I(y){return Object.prototype.hasOwnProperty.call(y,"children")}se.hasChildren=I;function re(y,O){O===void 0&&(O=!1);var H;if(X(y))H=new p(y.data);else if(q(y))H=new m(y.data);else if(j(y)){var K=O?F(y.children):[],Z=new M(y.name,u({},y.attribs),K);K.forEach(function(fe){return fe.parent=Z}),y.namespace!=null&&(Z.namespace=y.namespace),y["x-attribsNamespace"]&&(Z["x-attribsNamespace"]=u({},y["x-attribsNamespace"])),y["x-attribsPrefix"]&&(Z["x-attribsPrefix"]=u({},y["x-attribsPrefix"])),H=Z}else if(G(y)){var K=O?F(y.children):[],ge=new b(K);K.forEach(function(ne){return ne.parent=ge}),H=ge}else if(W(y)){var K=O?F(y.children):[],Ne=new E(K);K.forEach(function(ne){return ne.parent=Ne}),y["x-mode"]&&(Ne["x-mode"]=y["x-mode"]),H=Ne}else if(z(y)){var De=new S(y.name,y.data);y["x-name"]!=null&&(De["x-name"]=y["x-name"],De["x-publicId"]=y["x-publicId"],De["x-systemId"]=y["x-systemId"]),H=De}else throw new Error("Not implemented yet: ".concat(y.type));return H.startIndex=y.startIndex,H.endIndex=y.endIndex,y.sourceCodeLocation!=null&&(H.sourceCodeLocation=y.sourceCodeLocation),H}se.cloneNode=re;function F(y){for(var O=y.map(function(K){return re(K,!0)}),H=1;H<O.length;H++)O[H].prev=O[H-1],O[H-1].next=O[H];return O}return se}var e0;function z0(){return e0||(e0=1,function(l){var u=lr&&lr.__createBinding||(Object.create?function(S,h,b,E){E===void 0&&(E=b);var M=Object.getOwnPropertyDescriptor(h,b);(!M||("get"in M?!h.__esModule:M.writable||M.configurable))&&(M={enumerable:!0,get:function(){return h[b]}}),Object.defineProperty(S,E,M)}:function(S,h,b,E){E===void 0&&(E=b),S[E]=h[b]}),o=lr&&lr.__exportStar||function(S,h){for(var b in S)b!=="default"&&!Object.prototype.hasOwnProperty.call(h,b)&&u(h,S,b)};Object.defineProperty(l,"__esModule",{value:!0}),l.DomHandler=void 0;var c=k0(),d=$b();o($b(),l);var p={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=function(){function S(h,b,E){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof b=="function"&&(E=b,b=p),typeof h=="object"&&(b=h,h=void 0),this.callback=h??null,this.options=b??p,this.elementCB=E??null}return S.prototype.onparserinit=function(h){this.parser=h},S.prototype.onreset=function(){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},S.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},S.prototype.onerror=function(h){this.handleCallback(h)},S.prototype.onclosetag=function(){this.lastNode=null;var h=this.tagStack.pop();this.options.withEndIndices&&(h.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(h)},S.prototype.onopentag=function(h,b){var E=this.options.xmlMode?c.ElementType.Tag:void 0,M=new d.Element(h,b,void 0,E);this.addNode(M),this.tagStack.push(M)},S.prototype.ontext=function(h){var b=this.lastNode;if(b&&b.type===c.ElementType.Text)b.data+=h,this.options.withEndIndices&&(b.endIndex=this.parser.endIndex);else{var E=new d.Text(h);this.addNode(E),this.lastNode=E}},S.prototype.oncomment=function(h){if(this.lastNode&&this.lastNode.type===c.ElementType.Comment){this.lastNode.data+=h;return}var b=new d.Comment(h);this.addNode(b),this.lastNode=b},S.prototype.oncommentend=function(){this.lastNode=null},S.prototype.oncdatastart=function(){var h=new d.Text(""),b=new d.CDATA([h]);this.addNode(b),h.parent=b,this.lastNode=h},S.prototype.oncdataend=function(){this.lastNode=null},S.prototype.onprocessinginstruction=function(h,b){var E=new d.ProcessingInstruction(h,b);this.addNode(E)},S.prototype.handleCallback=function(h){if(typeof this.callback=="function")this.callback(h,this.dom);else if(h)throw h},S.prototype.addNode=function(h){var b=this.tagStack[this.tagStack.length-1],E=b.children[b.children.length-1];this.options.withStartIndices&&(h.startIndex=this.parser.startIndex),this.options.withEndIndices&&(h.endIndex=this.parser.endIndex),b.children.push(h),E&&(h.prev=E,E.next=h),h.parent=b,this.lastNode=null},S}();l.DomHandler=m,l.default=m}(lr)),lr}var ms={},n0;function tv(){return n0||(n0=1,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.CARRIAGE_RETURN_PLACEHOLDER_REGEX=l.CARRIAGE_RETURN_PLACEHOLDER=l.CARRIAGE_RETURN_REGEX=l.CARRIAGE_RETURN=l.CASE_SENSITIVE_TAG_NAMES_MAP=l.CASE_SENSITIVE_TAG_NAMES=void 0,l.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],l.CASE_SENSITIVE_TAG_NAMES_MAP=l.CASE_SENSITIVE_TAG_NAMES.reduce(function(u,o){return u[o.toLowerCase()]=o,u},{}),l.CARRIAGE_RETURN="\r",l.CARRIAGE_RETURN_REGEX=new RegExp(l.CARRIAGE_RETURN,"g"),l.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(),"__"),l.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(l.CARRIAGE_RETURN_PLACEHOLDER,"g")}(ms)),ms}var t0;function G0(){if(t0)return ir;t0=1,Object.defineProperty(ir,"__esModule",{value:!0}),ir.formatAttributes=c,ir.escapeSpecialCharacters=p,ir.revertEscapedCharacters=m,ir.formatDOM=S;var l=z0(),u=tv();function o(h){return u.CASE_SENSITIVE_TAG_NAMES_MAP[h]}function c(h){for(var b={},E=0,M=h.length;E<M;E++){var j=h[E];b[j.name]=j.value}return b}function d(h){h=h.toLowerCase();var b=o(h);return b||h}function p(h){return h.replace(u.CARRIAGE_RETURN_REGEX,u.CARRIAGE_RETURN_PLACEHOLDER)}function m(h){return h.replace(u.CARRIAGE_RETURN_PLACEHOLDER_REGEX,u.CARRIAGE_RETURN)}function S(h,b,E){b===void 0&&(b=null);for(var M=[],j,G=0,X=h.length;G<X;G++){var q=h[G];switch(q.nodeType){case 1:{var z=d(q.nodeName);j=new l.Element(z,c(q.attributes)),j.children=S(z==="template"?q.content.childNodes:q.childNodes,j);break}case 3:j=new l.Text(m(q.nodeValue));break;case 8:j=new l.Comment(q.nodeValue);break;default:continue}var W=M[G-1]||null;W&&(W.next=j),j.parent=b,j.prev=W,j.next=null,M.push(j)}return E&&(j=new l.ProcessingInstruction(E.substring(0,E.indexOf(" ")).toLowerCase(),E),j.next=M[0]||null,j.parent=b,M.unshift(j),M[1]&&(M[1].prev=M[0])),M}return ir}var r0;function rv(){if(r0)return Dl;r0=1,Object.defineProperty(Dl,"__esModule",{value:!0}),Dl.default=q;var l=G0(),u="html",o="head",c="body",d=/<([a-zA-Z]+[0-9]?)/,p=/<head[^]*>/i,m=/<body[^]*>/i,S=function(z,W){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},h=function(z,W){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},b=typeof window=="object"&&window.DOMParser;if(typeof b=="function"){var E=new b,M="text/html";h=function(z,W){return W&&(z="<".concat(W,">").concat(z,"</").concat(W,">")),E.parseFromString(z,M)},S=h}if(typeof document=="object"&&document.implementation){var j=document.implementation.createHTMLDocument();S=function(z,W){if(W){var I=j.documentElement.querySelector(W);return I&&(I.innerHTML=z),j}return j.documentElement.innerHTML=z,j}}var G=typeof document=="object"&&document.createElement("template"),X;G&&G.content&&(X=function(z){return G.innerHTML=z,G.content.childNodes});function q(z){var W,I;z=(0,l.escapeSpecialCharacters)(z);var re=z.match(d),F=re&&re[1]?re[1].toLowerCase():"";switch(F){case u:{var y=h(z);if(!p.test(z)){var O=y.querySelector(o);(W=O==null?void 0:O.parentNode)===null||W===void 0||W.removeChild(O)}if(!m.test(z)){var O=y.querySelector(c);(I=O==null?void 0:O.parentNode)===null||I===void 0||I.removeChild(O)}return y.querySelectorAll(u)}case o:case c:{var H=S(z).querySelectorAll(F);return m.test(z)&&p.test(z)?H[0].parentNode.childNodes:H}default:{if(X)return X(z);var O=S(z,c).querySelector(c);return O.childNodes}}}return Dl}var a0;function av(){if(a0)return $r;a0=1;var l=$r&&$r.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty($r,"__esModule",{value:!0}),$r.default=d;var u=l(rv()),o=G0(),c=/<(![a-zA-Z\s]+)>/;function d(p){if(typeof p!="string")throw new TypeError("First argument must be a string");if(!p)return[];var m=p.match(c),S=m?m[1]:void 0;return(0,o.formatDOM)((0,u.default)(p),null,S)}return $r}var Cl={},Hn={},ri={},i0;function iv(){if(i0)return ri;i0=1;var l=0;ri.SAME=l;var u=1;return ri.CAMELCASE=u,ri.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},ri}var l0;function lv(){if(l0)return Hn;l0=1;const l=0,u=1,o=2,c=3,d=4,p=5,m=6;function S(y){return b.hasOwnProperty(y)?b[y]:null}function h(y,O,H,K,Z,ge,Ne){this.acceptsBooleans=O===o||O===c||O===d,this.attributeName=K,this.attributeNamespace=Z,this.mustUseProperty=H,this.propertyName=y,this.type=O,this.sanitizeURL=ge,this.removeEmptyString=Ne}const b={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(y=>{b[y]=new h(y,l,!1,y,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([y,O])=>{b[y]=new h(y,u,!1,O,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(y=>{b[y]=new h(y,o,!1,y.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(y=>{b[y]=new h(y,o,!1,y,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(y=>{b[y]=new h(y,c,!1,y.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(y=>{b[y]=new h(y,c,!0,y,null,!1,!1)}),["capture","download"].forEach(y=>{b[y]=new h(y,d,!1,y,null,!1,!1)}),["cols","rows","size","span"].forEach(y=>{b[y]=new h(y,m,!1,y,null,!1,!1)}),["rowSpan","start"].forEach(y=>{b[y]=new h(y,p,!1,y.toLowerCase(),null,!1,!1)});const M=/[\-\:]([a-z])/g,j=y=>y[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(y=>{const O=y.replace(M,j);b[O]=new h(O,u,!1,y,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(y=>{const O=y.replace(M,j);b[O]=new h(O,u,!1,y,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(y=>{const O=y.replace(M,j);b[O]=new h(O,u,!1,y,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(y=>{b[y]=new h(y,u,!1,y.toLowerCase(),null,!1,!1)});const G="xlinkHref";b[G]=new h("xlinkHref",u,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(y=>{b[y]=new h(y,u,!1,y.toLowerCase(),null,!0,!0)});const{CAMELCASE:X,SAME:q,possibleStandardNames:z}=iv(),I=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",re=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+I+"]*$")),F=Object.keys(z).reduce((y,O)=>{const H=z[O];return H===q?y[O]=O:H===X?y[O.toLowerCase()]=O:y[O]=H,y},{});return Hn.BOOLEAN=c,Hn.BOOLEANISH_STRING=o,Hn.NUMERIC=p,Hn.OVERLOADED_BOOLEAN=d,Hn.POSITIVE_NUMERIC=m,Hn.RESERVED=l,Hn.STRING=u,Hn.getPropertyInfo=S,Hn.isCustomAttribute=re,Hn.possibleStandardNames=F,Hn}var ai={},ea={},vs,u0;function uv(){if(u0)return vs;u0=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,u=/\n/g,o=/^\s*/,c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,d=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,S=/^\s+|\s+$/g,h=`
`,b="/",E="*",M="",j="comment",G="declaration";vs=function(q,z){if(typeof q!="string")throw new TypeError("First argument must be a string");if(!q)return[];z=z||{};var W=1,I=1;function re(fe){var ne=fe.match(u);ne&&(W+=ne.length);var Ae=fe.lastIndexOf(h);I=~Ae?fe.length-Ae:I+fe.length}function F(){var fe={line:W,column:I};return function(ne){return ne.position=new y(fe),K(),ne}}function y(fe){this.start=fe,this.end={line:W,column:I},this.source=z.source}y.prototype.content=q;function O(fe){var ne=new Error(z.source+":"+W+":"+I+": "+fe);if(ne.reason=fe,ne.filename=z.source,ne.line=W,ne.column=I,ne.source=q,!z.silent)throw ne}function H(fe){var ne=fe.exec(q);if(ne){var Ae=ne[0];return re(Ae),q=q.slice(Ae.length),ne}}function K(){H(o)}function Z(fe){var ne;for(fe=fe||[];ne=ge();)ne!==!1&&fe.push(ne);return fe}function ge(){var fe=F();if(!(b!=q.charAt(0)||E!=q.charAt(1))){for(var ne=2;M!=q.charAt(ne)&&(E!=q.charAt(ne)||b!=q.charAt(ne+1));)++ne;if(ne+=2,M===q.charAt(ne-1))return O("End of comment missing");var Ae=q.slice(2,ne-2);return I+=2,re(Ae),q=q.slice(ne),I+=2,fe({type:j,comment:Ae})}}function Ne(){var fe=F(),ne=H(c);if(ne){if(ge(),!H(d))return O("property missing ':'");var Ae=H(p),D=fe({type:G,property:X(ne[0].replace(l,M)),value:Ae?X(Ae[0].replace(l,M)):M});return H(m),D}}function De(){var fe=[];Z(fe);for(var ne;ne=Ne();)ne!==!1&&(fe.push(ne),Z(fe));return fe}return K(),De()};function X(q){return q?q.replace(S,M):M}return vs}var c0;function cv(){if(c0)return ea;c0=1;var l=ea&&ea.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(ea,"__esModule",{value:!0}),ea.default=o;var u=l(uv());function o(c,d){var p=null;if(!c||typeof c!="string")return p;var m=(0,u.default)(c),S=typeof d=="function";return m.forEach(function(h){if(h.type==="declaration"){var b=h.property,E=h.value;S?d(b,E,h):E&&(p=p||{},p[b]=E)}}),p}return ea}var ii={},s0;function sv(){if(s0)return ii;s0=1,Object.defineProperty(ii,"__esModule",{value:!0}),ii.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,u=/-([a-z])/g,o=/^[^-]+$/,c=/^-(webkit|moz|ms|o|khtml)-/,d=/^-(ms)-/,p=function(b){return!b||o.test(b)||l.test(b)},m=function(b,E){return E.toUpperCase()},S=function(b,E){return"".concat(E,"-")},h=function(b,E){return E===void 0&&(E={}),p(b)?b:(b=b.toLowerCase(),E.reactCompat?b=b.replace(d,S):b=b.replace(c,S),b.replace(u,m))};return ii.camelCase=h,ii}var li,o0;function ov(){if(o0)return li;o0=1;var l=li&&li.__importDefault||function(d){return d&&d.__esModule?d:{default:d}},u=l(cv()),o=sv();function c(d,p){var m={};return!d||typeof d!="string"||(0,u.default)(d,function(S,h){S&&h&&(m[(0,o.camelCase)(S,p)]=h)}),m}return c.default=c,li=c,li}var f0;function q0(){return f0||(f0=1,function(l){var u=ai&&ai.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(l,"__esModule",{value:!0}),l.returnFirstArg=l.canTextBeChildOfNode=l.ELEMENTS_WITH_NO_TEXT_CHILDREN=l.PRESERVE_CUSTOM_ATTRIBUTES=void 0,l.isCustomComponent=p,l.setStyleProp=S;var o=ra(),c=u(ov()),d=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function p(E,M){return E.includes("-")?!d.has(E):!!(M&&typeof M.is=="string")}var m={reactCompat:!0};function S(E,M){if(typeof E=="string"){if(!E.trim()){M.style={};return}try{M.style=(0,c.default)(E,m)}catch{M.style={}}}}l.PRESERVE_CUSTOM_ATTRIBUTES=Number(o.version.split(".")[0])>=16,l.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var h=function(E){return!l.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(E.name)};l.canTextBeChildOfNode=h;var b=function(E){return E};l.returnFirstArg=b}(ai)),ai}var d0;function Y0(){if(d0)return Cl;d0=1,Object.defineProperty(Cl,"__esModule",{value:!0}),Cl.default=p;var l=lv(),u=q0(),o=["checked","value"],c=["input","select","textarea"],d={reset:!0,submit:!0};function p(S,h){S===void 0&&(S={});var b={},E=!!(S.type&&d[S.type]);for(var M in S){var j=S[M];if((0,l.isCustomAttribute)(M)){b[M]=j;continue}var G=M.toLowerCase(),X=m(G);if(X){var q=(0,l.getPropertyInfo)(X);switch(o.includes(X)&&c.includes(h)&&!E&&(X=m("default"+G)),b[X]=j,q&&q.type){case l.BOOLEAN:b[X]=!0;break;case l.OVERLOADED_BOOLEAN:j===""&&(b[X]=!0);break}continue}u.PRESERVE_CUSTOM_ATTRIBUTES&&(b[M]=j)}return(0,u.setStyleProp)(S.style,b),b}function m(S){return l.possibleStandardNames[S]}return Cl}var na={},b0;function fv(){if(b0)return na;b0=1;var l=na&&na.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(na,"__esModule",{value:!0}),na.default=p;var u=ra(),o=l(Y0()),c=q0(),d={cloneElement:u.cloneElement,createElement:u.createElement,isValidElement:u.isValidElement};function p(S,h){h===void 0&&(h={});for(var b=[],E=typeof h.replace=="function",M=h.transform||c.returnFirstArg,j=h.library||d,G=j.cloneElement,X=j.createElement,q=j.isValidElement,z=S.length,W=0;W<z;W++){var I=S[W];if(E){var re=h.replace(I,W);if(q(re)){z>1&&(re=G(re,{key:re.key||W})),b.push(M(re,I,W));continue}}if(I.type==="text"){var F=!I.data.trim().length;if(F&&I.parent&&!(0,c.canTextBeChildOfNode)(I.parent)||h.trim&&F)continue;b.push(M(I.data,I,W));continue}var y=I,O={};m(y)?((0,c.setStyleProp)(y.attribs.style,y.attribs),O=y.attribs):y.attribs&&(O=(0,o.default)(y.attribs,y.name));var H=void 0;switch(I.type){case"script":case"style":I.children[0]&&(O.dangerouslySetInnerHTML={__html:I.children[0].data});break;case"tag":I.name==="textarea"&&I.children[0]?O.defaultValue=I.children[0].data:I.children&&I.children.length&&(H=p(I.children,h));break;default:continue}z>1&&(O.key=W),b.push(M(X(I.name,O,H),I,W))}return b.length===1?b[0]:b}function m(S){return c.PRESERVE_CUSTOM_ATTRIBUTES&&S.type==="tag"&&(0,c.isCustomComponent)(S.name,S.attribs)}return na}var h0;function dv(){return h0||(h0=1,function(l){var u=ti&&ti.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(l,"__esModule",{value:!0}),l.htmlToDOM=l.domToReact=l.attributesToProps=l.Text=l.ProcessingInstruction=l.Element=l.Comment=void 0,l.default=S;var o=u(av());l.htmlToDOM=o.default;var c=u(Y0());l.attributesToProps=c.default;var d=u(fv());l.domToReact=d.default;var p=z0();Object.defineProperty(l,"Comment",{enumerable:!0,get:function(){return p.Comment}}),Object.defineProperty(l,"Element",{enumerable:!0,get:function(){return p.Element}}),Object.defineProperty(l,"ProcessingInstruction",{enumerable:!0,get:function(){return p.ProcessingInstruction}}),Object.defineProperty(l,"Text",{enumerable:!0,get:function(){return p.Text}});var m={lowerCaseAttributeNames:!1};function S(h,b){if(typeof h!="string")throw new TypeError("First argument must be a string");return h?(0,d.default)((0,o.default)(h,(b==null?void 0:b.htmlparser2)||m),b):[]}}(ti)),ti}var bv=dv();const p0=uy(bv),hv=p0.default||p0;function pv({title:l,subtitle:u,iconUrl:o,content:c,price:d,rarity:p,onAvoid:m,showAvoidButton:S}){return g.jsxs("div",{className:"glass-card flex flex-col font-noto rounded-[10px] overflow-hidden dark:bg-gray-800 dark:border-gray-700",children:[g.jsxs("div",{className:"flex items-center gap-4 px-5 py-4",children:[o&&g.jsx("img",{src:o,alt:"",width:60,height:60,className:"rounded-lg object-cover"}),g.jsxs("div",{children:[g.jsx("div",{className:"text-lg font-bold",style:{color:oi(p)},children:l}),u&&g.jsx("div",{className:"text-sm font-semibold",style:{color:"#f67422"},children:u})]})]}),g.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),g.jsx("div",{className:"flex flex-col gap-2 px-5 py-4",children:c.map((h,b)=>g.jsxs("div",{className:"flex items-center gap-3",children:[h.iconUrl&&g.jsx("img",{src:h.iconUrl,alt:"",width:30,height:30,className:"rounded object-cover",style:{borderRadius:4}}),g.jsx("span",{className:"text-sm font-merriweather",style:{color:"#fdfdfd"},children:hv(h.text)})]},b))}),g.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),g.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[g.jsx("span",{className:"font-mono text-base font-bold",style:{color:"#fdfdfd"},children:d}),S&&g.jsx("button",{type:"button","aria-label":`Avoid ${l}`,className:"text-xs text-red-500 hover:underline",onClick:m,children:"Avoid"})]})]})}function yv({eqItems:l,resultItems:u}){const o=Pn(),c=dn(p=>p.input.present.avoidEnabled),d=[...l,...u].sort((p,m)=>(p.tab||"")<(m.tab||"")?-1:(p.tab||"")>(m.tab||"")?1:(p.rarity||0)>(m.rarity||0)?-1:(p.rarity||0)<(m.rarity||0)?1:(p.cost||0)-(m.cost||0));return g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Final Build"}),g.jsx("ul",{className:"mt-2 space-y-3 max-h-fit overflow-y-auto pr-2",children:d.map(p=>g.jsx("li",{children:g.jsx(pv,{title:p.name,subtitle:p.tab,rarity:p.rarity,content:p.attributes.map(m=>m.type==="description"?{text:`<span class='font-sm text-[#8fa6d7]'>${m.value}</span>`}:m.type==="Editor's Note"?{text:`<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${m.value}</span>`}:{text:`<strong>${m.value}</strong> <span class='font-sm text-[#8fa6d7]'>${fr(m.type)}</span>`}),price:`${p.cost} G`,showAvoidButton:!0,onAvoid:()=>{c||o(H0()),o(w0(p.id||p.name))}})},p.id))})]})}function mv({eqItems:l,resultItems:u}){const o=[...l,...u].sort((c,d)=>{const p={epic:3,rare:2,common:1},m={weapon:1,ability:2,survival:3},S=p[d.rarity]||0,h=p[c.rarity]||0;if(S!==h)return h-S;const b=m[d.tab]||99,E=m[c.tab]||99;return b!==E?b-E:(d.cost||0)-(c.cost||0)});return g.jsxs("div",{children:[g.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200 mb-2",children:"Items Overview"}),g.jsx("table",{className:"w-full text-left border-collapse mb-4",children:g.jsx("tbody",{children:Array.from({length:2}).map((c,d)=>g.jsx("tr",{children:o.slice(d*3,d*3+3).map((p,m)=>g.jsx("td",{className:"px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]",style:{color:p?oi(p.rarity):void 0},children:p?p.name:""},m))},d))})})]})}function vv(){return g.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 bg-white dark:bg-gray-900",children:[g.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:g.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),g.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"No results yet"}),g.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Fill out the form and click calculate to see the magic."})]})}function gv({results:l,eqCost:u,cash:o}){return g.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[g.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[g.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Weighted Score"}),g.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400",children:l.score.toFixed(2)})]}),g.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[g.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Total Cost"}),g.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400",children:u+l.cost})]}),g.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[g.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Cash Remaining"}),g.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600 dark:text-green-400",children:o-u-l.cost})]})]})}function Sv({eqItems:l,eqCost:u,cash:o,results:c,alternatives:d}){return g.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[g.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Results"}),c?g.jsxs("div",{className:"space-y-6",children:[g.jsx(gv,{results:c,eqCost:u,cash:o}),g.jsx(mv,{eqItems:l,resultItems:c.items}),g.jsx(nv,{results:c}),g.jsx(yv,{eqItems:l,resultItems:c.items}),g.jsx(ev,{alternatives:d})]}):g.jsx(vv,{})]})}const Ln={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},Ml={undo(){return{type:Ln.UNDO}},redo(){return{type:Ln.REDO}},jumpToFuture(l){return{type:Ln.JUMP_TO_FUTURE,index:l}},jumpToPast(l){return{type:Ln.JUMP_TO_PAST,index:l}},jump(l){return{type:Ln.JUMP,index:l}},clearHistory(){return{type:Ln.CLEAR_HISTORY}}};function y0(l,u=[]){return Array.isArray(l)?l:typeof l=="string"?[l]:u}function Ev(l){return typeof l.present<"u"&&typeof l.future<"u"&&typeof l.past<"u"&&Array.isArray(l.future)&&Array.isArray(l.past)}function cr(l,u,o,c=null){return{past:l,present:u,future:o,group:c,_latestUnfiltered:u,index:l.length,limit:l.length+o.length+1}}let Yl,Un;const Ns={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function Av(){Un={header:[],prev:[],action:[],next:[],msgs:[]}}function Rv(){const{header:l,prev:u,next:o,action:c,msgs:d}=Un;console.group?(console.groupCollapsed(...l),console.log(...u),console.log(...c),console.log(...o),console.log(...d),console.groupEnd()):(console.log(...l),console.log(...u),console.log(...c),console.log(...o),console.log(...d))}function Ds(l,u,o){return[`%c${l}`,`color: ${u}; font-weight: bold`,o]}function Tv(l,u){Av(),Yl&&(console.group?(Un.header=["%credux-undo","font-style: italic","action",l.type],Un.action=Ds("action",Ns.action,l),Un.prev=Ds("prev history",Ns.prevState,u)):(Un.header=["redux-undo action",l.type],Un.action=["action",l],Un.prev=["prev history",u]))}function Gn(l){Yl&&(console.group?Un.next=Ds("next history",Ns.nextState,l):Un.next=["next history",l],Rv())}function rn(...l){Yl&&(Un.msgs=Un.msgs.concat([...l,`
`]))}function _v(l){Yl=l}function gs(l,u){const o=cr([],l,[]);return u&&(o._latestUnfiltered=null),o}function Ov(l,u,o,c){const d=l.past.length+1;rn("inserting",u),rn("new free: ",o-d);const{past:p,_latestUnfiltered:m}=l,S=o&&o<=d,h=p.slice(S?1:0),b=m!=null?[...h,m]:h;return cr(b,u,[],c)}function I0(l,u){if(u<0||u>=l.future.length)return l;const{past:o,future:c,_latestUnfiltered:d}=l,p=[...o,d,...c.slice(0,u)],m=c[u],S=c.slice(u+1);return cr(p,m,S)}function V0(l,u){if(u<0||u>=l.past.length)return l;const{past:o,future:c,_latestUnfiltered:d}=l,p=o.slice(0,u),m=[...o.slice(u+1),d,...c],S=o[u];return cr(p,S,m)}function Ss(l,u){return u>0?I0(l,u-1):u<0?V0(l,l.past.length+u):l}function xv(l,u){return u.indexOf(l)>-1?l:!l}function Nv(l,u={}){_v(u.debug);const o={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:Ln.UNDO,redoType:Ln.REDO,jumpToPastType:Ln.JUMP_TO_PAST,jumpToFutureType:Ln.JUMP_TO_FUTURE,jumpType:Ln.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...u,initTypes:y0(u.initTypes,["@@redux-undo/INIT"]),clearHistoryType:y0(u.clearHistoryType,[Ln.CLEAR_HISTORY])},c=o.neverSkipReducer?(p,m,...S)=>({...p,present:l(p.present,m,...S)}):p=>p;let d;return(p=d,m={},...S)=>{Tv(m,p);let h=p;if(!d)if(rn("history is uninitialized"),p===void 0){const E=l(p,{type:"@@redux-undo/CREATE_HISTORY"},...S);return h=gs(E,o.ignoreInitialState),rn("do not set initialState on probe actions"),Gn(h),h}else Ev(p)?(h=d=o.ignoreInitialState?p:cr(p.past,p.present,p.future),rn("initialHistory initialized: initialState is a history",d)):(h=d=gs(p,o.ignoreInitialState),rn("initialHistory initialized: initialState is not a history",d));let b;switch(m.type){case void 0:return h;case o.undoType:return b=Ss(h,-1),rn("perform undo"),Gn(b),c(b,m,...S);case o.redoType:return b=Ss(h,1),rn("perform redo"),Gn(b),c(b,m,...S);case o.jumpToPastType:return b=V0(h,m.index),rn(`perform jumpToPast to ${m.index}`),Gn(b),c(b,m,...S);case o.jumpToFutureType:return b=I0(h,m.index),rn(`perform jumpToFuture to ${m.index}`),Gn(b),c(b,m,...S);case o.jumpType:return b=Ss(h,m.index),rn(`perform jump to ${m.index}`),Gn(b),c(b,m,...S);case xv(m.type,o.clearHistoryType):return b=gs(h.present,o.ignoreInitialState),rn("perform clearHistory"),Gn(b),c(b,m,...S);default:if(b=l(h.present,m,...S),o.initTypes.some(M=>M===m.type))return rn("reset history due to init action"),Gn(d),d;if(h._latestUnfiltered===b)return h;if(typeof o.filter=="function"&&!o.filter(m,b,h)){const M=cr(h.past,b,h.future,h.group);return o.syncFilter||(M._latestUnfiltered=h._latestUnfiltered),rn("filter ignored action, not storing it in past"),Gn(M),M}const E=o.groupBy(m,b,h);if(E!=null&&E===h.group){const M=cr(h.past,b,h.future,h.group);return rn("groupBy grouped the action with the previous action"),Gn(M),M}return h=Ov(h,b,o.limit,E),rn("inserted new state into history"),Gn(h),h}}}function Dv(l){return`${l.hero} - $${l.cash}`}function Cv({history:l}){const[u,o]=ie.useState(!1),c=ie.useRef(null);return ie.useEffect(()=>{const d=p=>{c.current&&!c.current.contains(p.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),g.jsxs("div",{className:"relative",ref:c,children:[g.jsxs("button",{type:"button",onClick:()=>o(d=>!d),className:"flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800",children:["History",g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),u&&g.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-lg",children:l.length>0?g.jsx("ul",{children:l.map((d,p)=>g.jsx("li",{className:"border-b border-gray-200 dark:border-gray-700 px-3 py-2 last:border-none dark:text-gray-100",children:Dv(d)},p))}):g.jsx("p",{className:"p-3 text-gray-500 dark:text-gray-400",children:"No history"})})]})}function Mv(){const l=Pn(),u=dn(c=>c.input.past),o=dn(c=>c.input.future);return ie.useEffect(()=>{const c=d=>{d.ctrlKey&&d.key.toLowerCase()==="z"&&(d.preventDefault(),d.shiftKey?l(Ml.redo()):l(Ml.undo()))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[l]),g.jsx("div",{className:"flex items-center justify-between gap-4",children:g.jsxs("div",{className:"flex gap-2",children:[g.jsx("button",{type:"button",disabled:u.length===0,onClick:()=>l(Ml.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Undo"}),g.jsx("button",{type:"button",disabled:o.length===0,onClick:()=>l(Ml.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Redo"}),g.jsx(Cv,{history:u})]})})}const wv=`{\r
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
}`,Hv=`{\r
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
  },\r
  "SUPERFLEXOR": {\r
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
        "type": "AP",\r
        "value": "15%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "AP can stack up to 25%, estimate having 15% AP up time."\r
      }\r
    ]\r
  }\r
}`;function Lv(){const[l,u]=ie.useState([]),[o,c]=ie.useState([]),[d,p]=ie.useState([]),m=Pn(),S=dn(D=>D.input.present),{hero:h,cash:b,equipped:E,toBuy:M,avoid:j,avoidEnabled:G,weights:X,minValueEnabled:q,minAttrGroups:z}=S,[W,I]=ie.useState(null),[re,F]=ie.useState([]),y=ie.useState(new Map)[0],O=ie.useState(new Map)[0],H=ie.useState(new Map)[0];ie.useEffect(()=>{const D=JSON.parse(wv),k=JSON.parse(Hv),P=[],be=(J,ue,ee)=>{ee.forEach(Ue=>{const me=k[Ue.name],$e={...Ue,tab:J,rarity:ue};me!=null&&me.attributes&&($e.attributes=me.attributes),P.push($e)})};["weapon","ability","survival"].forEach(J=>{const ue=D.tabs[J];be(J,"common",ue.common),be(J,"rare",ue.rare),be(J,"epic",ue.epic)}),u(P);const A=new Set,B=new Map,V=new Set;P.forEach(J=>{J.character&&A.add(J.character),J.attributes.forEach(ue=>{const ee=(B.get(ue.type)??0)+1;B.set(ue.type,ee),ee===2&&V.add(ue.type)})}),V.delete("description"),V.delete("Editor's Note");const Y=Array.from(V).sort(Wm);c(Array.from(A).sort()),p(Y),m(L0({index:0,type:Y[0]}))},[]),ie.useEffect(()=>{const D=E.filter(k=>k).length;M+D>6&&m(M0(Math.max(0,6-D)))},[m,E,M]),ie.useEffect(()=>{y.clear(),O.clear()},[X,y,O]),ie.useEffect(()=>{H.clear()},[E,H]);function K(){const D=E.filter(P=>P).sort().join(",");if(H.has(D))return H.get(D);const k=E.map(P=>l.find(be=>be.id===P)).filter(P=>!!P);return H.set(D,k),k}function Z(){if(!h||b<0||K().reduce((k,P)=>k+P.cost,0)>b||M+K().length>6||X.length===0)return!1;if(q){for(const k of z)if(k.attrs.length===0||k.value<0)return!1}return!0}function ge(D){const k=D.map(A=>A.id||A.name).sort().join(",");if(y.has(k))return y.get(k);let P=O.get(k);P||(P=xs(D),O.set(k,P));const be=Zb(P,X);return y.set(k,be),be}function Ne(D){return!q||Im([...D,...K()],z)}function De(){if(m(ar("")),!Z()){m(ar("Please check your inputs - ensure all required fields are filled"));return}const D=K(),k=D.reduce((oe,we)=>oe+we.cost,0),P=b-k;if(P<0){m(ar("Equipped items cost exceeds total cash"));return}const be=B0(X,q,z),A=l.filter(oe=>(!oe.character||oe.character===h)&&!E.includes(oe.id??"")&&(!G||!j.includes(oe.id??""))&&oe.attributes.some(we=>be.has(we.type))),B=M;if(B===0){if(!Ne([])){m(ar("Minimum attribute values not met"));return}const oe=ge(D);I({items:[],cost:0,score:oe}),F([]);return}if(A.length===0){m(ar("No items available that match your criteria"));return}const V=A.map(oe=>({item:oe,score:ge([oe])}));V.sort((oe,we)=>we.score-oe.score);const Y=V.filter(oe=>oe.item.cost<=P);if(Y.length===0){m(ar("No affordable items available"));return}const ue=Y.slice(0,50),ee=[0];for(const oe of ue)ee.push(ee[ee.length-1]+oe.score);let Ue=-1/0,me=0,$e=[];const Qn=D.length+B===6,Zn=ue.length,dr=new Map;function br(oe,we,an,Bn){if(Zn>100&&we.length===0&&oe>50||(Ne(we)&&(Bn>Ue||Bn===Ue&&(Qn?an>me:an<me)?(Ue=Bn,me=an,$e=[{items:[...we],cost:an,score:Bn}]):Bn===Ue&&(Qn?an<=me:an>=me)&&$e.push({items:[...we],cost:an,score:Bn})),we.length===B||oe>=Zn))return;const di=B-we.length;if(Bn+(ee[Math.min(Zn,oe+di)]-ee[oe])<Ue)return;const bi=`${oe}-${we.length}-${an}-${Math.floor(Bn)}`;if(!dr.has(bi)){dr.set(bi,!0);for(let Yn=oe;Yn<Zn;Yn++){const Ve=ue[Yn];an+Ve.item.cost>P||(we.push(Ve.item),br(Yn+1,we,an+Ve.item.cost,Bn+Ve.score),we.pop())}}}if(br(0,[],0,0),$e.length===0){m(ar("Insufficient cash for any purchase"));return}const[Jn,...Il]=$e.sort((oe,we)=>Qn?we.cost-oe.cost:oe.cost-we.cost),Vl=Il.filter(oe=>Qn?oe.cost<Jn.cost:oe.cost>Jn.cost).sort((oe,we)=>Qn?we.cost-oe.cost:oe.cost-we.cost),bn=xs([...Jn.items,...D]),Xl=Vm(bn,X,q,z);I({items:Jn.items,cost:Jn.cost,score:Zb(bn,X),breakdown:Xl}),F(Vl.map(oe=>({...oe,score:ge([...oe.items,...D])})))}if(l.length===0)return g.jsx("div",{className:"p-4",children:"Loading..."});const fe=l.filter(D=>!h||!D.character||D.character===h),ne=K(),Ae=ne.reduce((D,k)=>D+k.cost,0);return g.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 space-y-2",children:[g.jsx(Mv,{}),g.jsxs("div",{className:"mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8",children:[g.jsx($m,{heroes:o,attrTypes:d,filteredItems:fe,onSubmit:De,validate:Z}),g.jsx(Sv,{eqItems:ne,eqCost:Ae,cash:b,results:W,alternatives:re}),g.jsx(Ey,{})]})]})}function Uv(){return g.jsx("div",{className:"dark h-screen overflow-hidden dark:text-gray-100 p-2 box-border",children:g.jsx("div",{className:"border border-[#346291] rounded-md h-full w-full",children:g.jsx("div",{className:"mx-auto grid gap-6 h-full overflow-y-auto",children:g.jsx(Lv,{})})})})}const Bv=bm({reducer:{input:Nv(qm)}});my.createRoot(document.getElementById("root")).render(g.jsx(ie.StrictMode,{children:g.jsx(By,{store:Bv,children:g.jsx(Uv,{})})}));
