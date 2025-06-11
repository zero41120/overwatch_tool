(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const b of document.querySelectorAll('link[rel="modulepreload"]'))c(b);new MutationObserver(b=>{for(const h of b)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function o(b){const h={};return b.integrity&&(h.integrity=b.integrity),b.referrerPolicy&&(h.referrerPolicy=b.referrerPolicy),b.crossOrigin==="use-credentials"?h.credentials="include":b.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(b){if(b.ep)return;b.ep=!0;const h=o(b);fetch(b.href,h)}})();function lm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Fc={exports:{}},Fa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb;function um(){if(Tb)return Fa;Tb=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,b,h){var y=null;if(h!==void 0&&(y=""+h),b.key!==void 0&&(y=""+b.key),"key"in b){h={};for(var g in b)g!=="key"&&(h[g]=b[g])}else h=b;return b=h.ref,{$$typeof:l,type:c,key:y,ref:b!==void 0?b:null,props:h}}return Fa.Fragment=u,Fa.jsx=o,Fa.jsxs=o,Fa}var Rb;function cm(){return Rb||(Rb=1,Fc.exports=um()),Fc.exports}var A=cm(),$c={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _b;function sm(){if(_b)return se;_b=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.iterator;function j(S){return S===null||typeof S!="object"?null:(S=C&&S[C]||S["@@iterator"],typeof S=="function"?S:null)}var X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,z={};function G(S,L,k){this.props=S,this.context=L,this.refs=z,this.updater=k||X}G.prototype.isReactComponent={},G.prototype.setState=function(S,L){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,L,"setState")},G.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function K(){}K.prototype=G.prototype;function Y(S,L,k){this.props=S,this.context=L,this.refs=z,this.updater=k||X}var te=Y.prototype=new K;te.constructor=Y,V(te,G.prototype),te.isPureReactComponent=!0;var J=Array.isArray,m={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function U(S,L,k,q,$,ce){return k=ce.ref,{$$typeof:l,type:S,key:L,ref:k!==void 0?k:null,props:ce}}function W(S,L){return U(S.type,L,void 0,void 0,void 0,S.props)}function F(S){return typeof S=="object"&&S!==null&&S.$$typeof===l}function Se(S){var L={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(k){return L[k]})}var Ne=/\/+/g;function xe(S,L){return typeof S=="object"&&S!==null&&S.key!=null?Se(""+S.key):L.toString(36)}function Q(){}function P(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Q,Q):(S.status="pending",S.then(function(L){S.status==="pending"&&(S.status="fulfilled",S.value=L)},function(L){S.status==="pending"&&(S.status="rejected",S.reason=L)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function be(S,L,k,q,$){var ce=typeof S;(ce==="undefined"||ce==="boolean")&&(S=null);var ae=!1;if(S===null)ae=!0;else switch(ce){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(S.$$typeof){case l:case u:ae=!0;break;case E:return ae=S._init,be(ae(S._payload),L,k,q,$)}}if(ae)return $=$(S),ae=q===""?"."+xe(S,0):q,J($)?(k="",ae!=null&&(k=ae.replace(Ne,"$&/")+"/"),be($,L,k,"",function(kn){return kn})):$!=null&&(F($)&&($=W($,k+($.key==null||S&&S.key===$.key?"":(""+$.key).replace(Ne,"$&/")+"/")+ae)),L.push($)),1;ae=0;var qe=q===""?".":q+":";if(J(S))for(var Ce=0;Ce<S.length;Ce++)q=S[Ce],ce=qe+xe(q,Ce),ae+=be(q,L,k,ce,$);else if(Ce=j(S),typeof Ce=="function")for(S=Ce.call(S),Ce=0;!(q=S.next()).done;)q=q.value,ce=qe+xe(q,Ce++),ae+=be(q,L,k,ce,$);else if(ce==="object"){if(typeof S.then=="function")return be(P(S),L,k,q,$);throw L=String(S),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ae}function M(S,L,k){if(S==null)return S;var q=[],$=0;return be(S,q,"","",function(ce){return L.call(k,ce,$++)}),q}function I(S){if(S._status===-1){var L=S._result;L=L(),L.then(function(k){(S._status===0||S._status===-1)&&(S._status=1,S._result=k)},function(k){(S._status===0||S._status===-1)&&(S._status=2,S._result=k)}),S._status===-1&&(S._status=0,S._result=L)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function pe(){}return se.Children={map:M,forEach:function(S,L,k){M(S,function(){L.apply(this,arguments)},k)},count:function(S){var L=0;return M(S,function(){L++}),L},toArray:function(S){return M(S,function(L){return L})||[]},only:function(S){if(!F(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},se.Component=G,se.Fragment=o,se.Profiler=b,se.PureComponent=Y,se.StrictMode=c,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,se.__COMPILER_RUNTIME={__proto__:null,c:function(S){return m.H.useMemoCache(S)}},se.cache=function(S){return function(){return S.apply(null,arguments)}},se.cloneElement=function(S,L,k){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var q=V({},S.props),$=S.key,ce=void 0;if(L!=null)for(ae in L.ref!==void 0&&(ce=void 0),L.key!==void 0&&($=""+L.key),L)!O.call(L,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&L.ref===void 0||(q[ae]=L[ae]);var ae=arguments.length-2;if(ae===1)q.children=k;else if(1<ae){for(var qe=Array(ae),Ce=0;Ce<ae;Ce++)qe[Ce]=arguments[Ce+2];q.children=qe}return U(S.type,$,void 0,void 0,ce,q)},se.createContext=function(S){return S={$$typeof:y,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},se.createElement=function(S,L,k){var q,$={},ce=null;if(L!=null)for(q in L.key!==void 0&&(ce=""+L.key),L)O.call(L,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&($[q]=L[q]);var ae=arguments.length-2;if(ae===1)$.children=k;else if(1<ae){for(var qe=Array(ae),Ce=0;Ce<ae;Ce++)qe[Ce]=arguments[Ce+2];$.children=qe}if(S&&S.defaultProps)for(q in ae=S.defaultProps,ae)$[q]===void 0&&($[q]=ae[q]);return U(S,ce,void 0,void 0,null,$)},se.createRef=function(){return{current:null}},se.forwardRef=function(S){return{$$typeof:g,render:S}},se.isValidElement=F,se.lazy=function(S){return{$$typeof:E,_payload:{_status:-1,_result:S},_init:I}},se.memo=function(S,L){return{$$typeof:d,type:S,compare:L===void 0?null:L}},se.startTransition=function(S){var L=m.T,k={};m.T=k;try{var q=S(),$=m.S;$!==null&&$(k,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(pe,ee)}catch(ce){ee(ce)}finally{m.T=L}},se.unstable_useCacheRefresh=function(){return m.H.useCacheRefresh()},se.use=function(S){return m.H.use(S)},se.useActionState=function(S,L,k){return m.H.useActionState(S,L,k)},se.useCallback=function(S,L){return m.H.useCallback(S,L)},se.useContext=function(S){return m.H.useContext(S)},se.useDebugValue=function(){},se.useDeferredValue=function(S,L){return m.H.useDeferredValue(S,L)},se.useEffect=function(S,L,k){var q=m.H;if(typeof k=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(S,L)},se.useId=function(){return m.H.useId()},se.useImperativeHandle=function(S,L,k){return m.H.useImperativeHandle(S,L,k)},se.useInsertionEffect=function(S,L){return m.H.useInsertionEffect(S,L)},se.useLayoutEffect=function(S,L){return m.H.useLayoutEffect(S,L)},se.useMemo=function(S,L){return m.H.useMemo(S,L)},se.useOptimistic=function(S,L){return m.H.useOptimistic(S,L)},se.useReducer=function(S,L,k){return m.H.useReducer(S,L,k)},se.useRef=function(S){return m.H.useRef(S)},se.useState=function(S){return m.H.useState(S)},se.useSyncExternalStore=function(S,L,k){return m.H.useSyncExternalStore(S,L,k)},se.useTransition=function(){return m.H.useTransition()},se.version="19.1.0",se}var Ob;function ea(){return Ob||(Ob=1,$c.exports=sm()),$c.exports}var ue=ea(),es={exports:{}},$a={},ns={exports:{}},ts={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function om(){return Nb||(Nb=1,function(l){function u(M,I){var ee=M.length;M.push(I);e:for(;0<ee;){var pe=ee-1>>>1,S=M[pe];if(0<b(S,I))M[pe]=I,M[ee]=S,ee=pe;else break e}}function o(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var I=M[0],ee=M.pop();if(ee!==I){M[0]=ee;e:for(var pe=0,S=M.length,L=S>>>1;pe<L;){var k=2*(pe+1)-1,q=M[k],$=k+1,ce=M[$];if(0>b(q,ee))$<S&&0>b(ce,q)?(M[pe]=ce,M[$]=ee,pe=$):(M[pe]=q,M[k]=ee,pe=k);else if($<S&&0>b(ce,ee))M[pe]=ce,M[$]=ee,pe=$;else break e}}return I}function b(M,I){var ee=M.sortIndex-I.sortIndex;return ee!==0?ee:M.id-I.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;l.unstable_now=function(){return h.now()}}else{var y=Date,g=y.now();l.unstable_now=function(){return y.now()-g}}var p=[],d=[],E=1,C=null,j=3,X=!1,V=!1,z=!1,G=!1,K=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function J(M){for(var I=o(d);I!==null;){if(I.callback===null)c(d);else if(I.startTime<=M)c(d),I.sortIndex=I.expirationTime,u(p,I);else break;I=o(d)}}function m(M){if(z=!1,J(M),!V)if(o(p)!==null)V=!0,O||(O=!0,xe());else{var I=o(d);I!==null&&be(m,I.startTime-M)}}var O=!1,U=-1,W=5,F=-1;function Se(){return G?!0:!(l.unstable_now()-F<W)}function Ne(){if(G=!1,O){var M=l.unstable_now();F=M;var I=!0;try{e:{V=!1,z&&(z=!1,Y(U),U=-1),X=!0;var ee=j;try{n:{for(J(M),C=o(p);C!==null&&!(C.expirationTime>M&&Se());){var pe=C.callback;if(typeof pe=="function"){C.callback=null,j=C.priorityLevel;var S=pe(C.expirationTime<=M);if(M=l.unstable_now(),typeof S=="function"){C.callback=S,J(M),I=!0;break n}C===o(p)&&c(p),J(M)}else c(p);C=o(p)}if(C!==null)I=!0;else{var L=o(d);L!==null&&be(m,L.startTime-M),I=!1}}break e}finally{C=null,j=ee,X=!1}I=void 0}}finally{I?xe():O=!1}}}var xe;if(typeof te=="function")xe=function(){te(Ne)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,P=Q.port2;Q.port1.onmessage=Ne,xe=function(){P.postMessage(null)}}else xe=function(){K(Ne,0)};function be(M,I){U=K(function(){M(l.unstable_now())},I)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(M){M.callback=null},l.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<M?Math.floor(1e3/M):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_next=function(M){switch(j){case 1:case 2:case 3:var I=3;break;default:I=j}var ee=j;j=I;try{return M()}finally{j=ee}},l.unstable_requestPaint=function(){G=!0},l.unstable_runWithPriority=function(M,I){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ee=j;j=M;try{return I()}finally{j=ee}},l.unstable_scheduleCallback=function(M,I,ee){var pe=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,M){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ee+S,M={id:E++,callback:I,priorityLevel:M,startTime:ee,expirationTime:S,sortIndex:-1},ee>pe?(M.sortIndex=ee,u(d,M),o(p)===null&&M===o(d)&&(z?(Y(U),U=-1):z=!0,be(m,ee-pe))):(M.sortIndex=S,u(p,M),V||X||(V=!0,O||(O=!0,xe()))),M},l.unstable_shouldYield=Se,l.unstable_wrapCallback=function(M){var I=j;return function(){var ee=j;j=I;try{return M.apply(this,arguments)}finally{j=ee}}}}(ts)),ts}var xb;function fm(){return xb||(xb=1,ns.exports=om()),ns.exports}var rs={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function dm(){if(Db)return en;Db=1;var l=ea();function u(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)d+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},b=Symbol.for("react.portal");function h(p,d,E){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:b,key:C==null?null:""+C,children:p,containerInfo:d,implementation:E}}var y=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,en.createPortal=function(p,d){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(u(299));return h(p,d,null,E)},en.flushSync=function(p){var d=y.T,E=c.p;try{if(y.T=null,c.p=2,p)return p()}finally{y.T=d,c.p=E,c.d.f()}},en.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,c.d.C(p,d))},en.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},en.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var E=d.as,C=g(E,d.crossOrigin),j=typeof d.integrity=="string"?d.integrity:void 0,X=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;E==="style"?c.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:C,integrity:j,fetchPriority:X}):E==="script"&&c.d.X(p,{crossOrigin:C,integrity:j,fetchPriority:X,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},en.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var E=g(d.as,d.crossOrigin);c.d.M(p,{crossOrigin:E,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&c.d.M(p)},en.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var E=d.as,C=g(E,d.crossOrigin);c.d.L(p,E,{crossOrigin:C,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},en.preloadModule=function(p,d){if(typeof p=="string")if(d){var E=g(d.as,d.crossOrigin);c.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:E,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else c.d.m(p)},en.requestFormReset=function(p){c.d.r(p)},en.unstable_batchedUpdates=function(p,d){return p(d)},en.useFormState=function(p,d,E){return y.H.useFormState(p,d,E)},en.useFormStatus=function(){return y.H.useHostTransitionStatus()},en.version="19.1.0",en}var Cb;function bm(){if(Cb)return rs.exports;Cb=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),rs.exports=dm(),rs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function pm(){if(Mb)return $a;Mb=1;var l=fm(),u=ea(),o=bm();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function b(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function y(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(h(e)!==e)throw Error(c(188))}function p(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return g(a),e;if(i===r)return g(a),n;i=i.sibling}throw Error(c(188))}if(t.return!==r.return)t=a,r=i;else{for(var s=!1,f=a.child;f;){if(f===t){s=!0,t=a,r=i;break}if(f===r){s=!0,r=a,t=i;break}f=f.sibling}if(!s){for(f=i.child;f;){if(f===t){s=!0,t=i,r=a;break}if(f===r){s=!0,r=i,t=a;break}f=f.sibling}if(!s)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,C=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),Y=Symbol.for("react.consumer"),te=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Se=Symbol.for("react.memo_cache_sentinel"),Ne=Symbol.iterator;function xe(e){return e===null||typeof e!="object"?null:(e=Ne&&e[Ne]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function P(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case G:return"Profiler";case z:return"StrictMode";case m:return"Suspense";case O:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case X:return"Portal";case te:return(e.displayName||"Context")+".Provider";case Y:return(e._context.displayName||"Context")+".Consumer";case J:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return n=e.displayName||null,n!==null?n:P(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return P(e(n))}catch{}}return null}var be=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],S=-1;function L(e){return{current:e}}function k(e){0>S||(e.current=pe[S],pe[S]=null,S--)}function q(e,n){S++,pe[S]=e.current,e.current=n}var $=L(null),ce=L(null),ae=L(null),qe=L(null);function Ce(e,n){switch(q(ae,n),q(ce,e),q($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Jd(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Jd(n),e=Fd(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}k($),q($,e)}function kn(){k($),k(ce),k(ae)}function cr(e){e.memoizedState!==null&&q(qe,e);var n=$.current,t=Fd(n,e.type);n!==t&&(q(ce,e),q($,t))}function sr(e){ce.current===e&&(k($),k(ce)),qe.current===e&&(k(qe),Wa._currentValue=ee)}var he=Object.prototype.hasOwnProperty,He=l.unstable_scheduleCallback,on=l.unstable_cancelCallback,qn=l.unstable_shouldYield,kl=l.unstable_requestPaint,Un=l.unstable_now,or=l.unstable_getCurrentPriorityLevel,Bt=l.unstable_ImmediatePriority,Cs=l.unstable_UserBlockingPriority,si=l.unstable_NormalPriority,q0=l.unstable_LowPriority,Ms=l.unstable_IdlePriority,Y0=l.log,I0=l.unstable_setDisableYieldValue,na=null,fn=null;function ft(e){if(typeof Y0=="function"&&I0(e),fn&&typeof fn.setStrictMode=="function")try{fn.setStrictMode(na,e)}catch{}}var dn=Math.clz32?Math.clz32:K0,V0=Math.log,X0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(V0(e)/X0|0)|0}var oi=256,fi=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function di(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var f=r&134217727;return f!==0?(r=f&~i,r!==0?a=jt(r):(s&=f,s!==0?a=jt(s):t||(t=f&~e,t!==0&&(a=jt(t))))):(f=r&~i,f!==0?a=jt(f):s!==0?a=jt(s):t||(t=r&~e,t!==0&&(a=jt(t)))),a===0?0:n!==0&&n!==a&&(n&i)===0&&(i=a&-a,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:a}function ta(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function W0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hs(){var e=oi;return oi<<=1,(oi&4194048)===0&&(oi=256),e}function Ls(){var e=fi;return fi<<=1,(fi&62914560)===0&&(fi=4194304),e}function ql(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ra(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function P0(e,n,t,r,a,i){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,v=e.expirationTimes,N=e.hiddenUpdates;for(t=s&~t;0<t;){var H=31-dn(t),B=1<<H;f[H]=0,v[H]=-1;var x=N[H];if(x!==null)for(N[H]=null,H=0;H<x.length;H++){var D=x[H];D!==null&&(D.lane&=-536870913)}t&=~B}r!==0&&Us(e,r,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~n))}function Us(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-dn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&4194090}function ws(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}function Yl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Il(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bs(){var e=I.p;return e!==0?e:(e=window.event,e===void 0?32:yb(e.type))}function Q0(e,n){var t=I.p;try{return I.p=e,n()}finally{I.p=t}}var dt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+dt,rn="__reactProps$"+dt,fr="__reactContainer$"+dt,Vl="__reactEvents$"+dt,Z0="__reactListeners$"+dt,J0="__reactHandles$"+dt,js="__reactResources$"+dt,aa="__reactMarker$"+dt;function Xl(e){delete e[Fe],delete e[rn],delete e[Vl],delete e[Z0],delete e[J0]}function dr(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fr]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=tb(e);e!==null;){if(t=e[Fe])return t;e=tb(e)}return n}e=t,t=e.parentNode}return null}function br(e){if(e=e[Fe]||e[fr]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ia(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function pr(e){var n=e[js];return n||(n=e[js]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(e){e[aa]=!0}var zs=new Set,Gs={};function zt(e,n){hr(e,n),hr(e+"Capture",n)}function hr(e,n){for(Gs[e]=n,e=0;e<n.length;e++)zs.add(n[e])}var F0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ks={},qs={};function $0(e){return he.call(qs,e)?!0:he.call(ks,e)?!1:F0.test(e)?qs[e]=!0:(ks[e]=!0,!1)}function bi(e,n,t){if($0(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function pi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Pn(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}var Kl,Ys;function mr(e){if(Kl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Kl=n&&n[1]||"",Ys=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Kl+e+Ys}var Wl=!1;function Pl(e,n){if(!e||Wl)return"";Wl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(D){var x=D}Reflect.construct(e,[],B)}else{try{B.call()}catch(D){x=D}e.call(B.prototype)}}else{try{throw Error()}catch(D){x=D}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(D){if(D&&x&&typeof D.stack=="string")return[D.stack,x.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),s=i[0],f=i[1];if(s&&f){var v=s.split(`
`),N=f.split(`
`);for(a=r=0;r<v.length&&!v[r].includes("DetermineComponentFrameRoot");)r++;for(;a<N.length&&!N[a].includes("DetermineComponentFrameRoot");)a++;if(r===v.length||a===N.length)for(r=v.length-1,a=N.length-1;1<=r&&0<=a&&v[r]!==N[a];)a--;for(;1<=r&&0<=a;r--,a--)if(v[r]!==N[a]){if(r!==1||a!==1)do if(r--,a--,0>a||v[r]!==N[a]){var H=`
`+v[r].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=r&&0<=a);break}}}finally{Wl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?mr(t):""}function ep(e){switch(e.tag){case 26:case 27:case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 15:return Pl(e.type,!1);case 11:return Pl(e.type.render,!1);case 1:return Pl(e.type,!0);case 31:return mr("Activity");default:return""}}function Is(e){try{var n="";do n+=ep(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function An(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vs(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function np(e){var n=Vs(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function hi(e){e._valueTracker||(e._valueTracker=np(e))}function Xs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Vs(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tp=/[\n"\\]/g;function Tn(e){return e.replace(tp,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ql(e,n,t,r,a,i,s,f){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+An(n)):e.value!==""+An(n)&&(e.value=""+An(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?Zl(e,s,An(n)):t!=null?Zl(e,s,An(t)):r!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+An(f):e.removeAttribute("name")}function Ks(e,n,t,r,a,i,s,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;t=t!=null?""+An(t):"",n=n!=null?""+An(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=f?e.checked:!!r,e.defaultChecked=!!r,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function Zl(e,n,t){n==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function yr(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+An(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Ws(e,n,t){if(n!=null&&(n=""+An(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+An(t):""}function Ps(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(c(92));if(be(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=An(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r)}function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var rp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qs(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||rp.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Zs(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in n)r=n[a],n.hasOwnProperty(a)&&t[a]!==r&&Qs(e,a,r)}else for(var i in n)n.hasOwnProperty(i)&&Qs(e,i,n[i])}function Jl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ip=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(e){return ip.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Fl=null;function $l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gr=null,Sr=null;function Js(e){var n=br(e);if(n&&(e=n.stateNode)){var t=e[rn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ql(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Tn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=r[rn]||null;if(!a)throw Error(c(90));Ql(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Xs(r)}break e;case"textarea":Ws(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&yr(e,!!t.multiple,n,!1)}}}var eu=!1;function Fs(e,n,t){if(eu)return e(n,t);eu=!0;try{var r=e(n);return r}finally{if(eu=!1,(gr!==null||Sr!==null)&&(tl(),gr&&(n=gr,e=Sr,Sr=gr=null,Js(n),e)))for(n=0;n<e.length;n++)Js(e[n])}}function la(e,n){var t=e.stateNode;if(t===null)return null;var r=t[rn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Qn)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){nu=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{nu=!1}var bt=null,tu=null,vi=null;function $s(){if(vi)return vi;var e,n=tu,t=n.length,r,a="value"in bt?bt.value:bt.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var s=t-e;for(r=1;r<=s&&n[t-r]===a[i-r];r++);return vi=a.slice(e,1<r?1-r:void 0)}function gi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Si(){return!0}function eo(){return!1}function an(e){function n(t,r,a,i,s){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Si:eo,this.isPropagationStopped=eo,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),n}var Gt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=an(Gt),ca=E({},Gt,{view:0,detail:0}),lp=an(ca),ru,au,sa,Ai=E({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sa&&(sa&&e.type==="mousemove"?(ru=e.screenX-sa.screenX,au=e.screenY-sa.screenY):au=ru=0,sa=e),ru)},movementY:function(e){return"movementY"in e?e.movementY:au}}),no=an(Ai),up=E({},Ai,{dataTransfer:0}),cp=an(up),sp=E({},ca,{relatedTarget:0}),iu=an(sp),op=E({},Gt,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=an(op),dp=E({},Gt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bp=an(dp),pp=E({},Gt,{data:0}),to=an(pp),hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=yp[e])?!!n[e]:!1}function lu(){return vp}var gp=E({},ca,{key:function(e){if(e.key){var n=hp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sp=an(gp),Ep=E({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ro=an(Ep),Ap=E({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),Tp=an(Ap),Rp=E({},Gt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_p=an(Rp),Op=E({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Np=an(Op),xp=E({},Gt,{newState:0,oldState:0}),Dp=an(xp),Cp=[9,13,27,32],uu=Qn&&"CompositionEvent"in window,oa=null;Qn&&"documentMode"in document&&(oa=document.documentMode);var Mp=Qn&&"TextEvent"in window&&!oa,ao=Qn&&(!uu||oa&&8<oa&&11>=oa),io=" ",lo=!1;function uo(e,n){switch(e){case"keyup":return Cp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function co(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function Hp(e,n){switch(e){case"compositionend":return co(n);case"keypress":return n.which!==32?null:(lo=!0,io);case"textInput":return e=n.data,e===io&&lo?null:e;default:return null}}function Lp(e,n){if(Er)return e==="compositionend"||!uu&&uo(e,n)?(e=$s(),vi=tu=bt=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ao&&n.locale!=="ko"?null:n.data;default:return null}}var Up={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function so(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Up[e.type]:n==="textarea"}function oo(e,n,t,r){gr?Sr?Sr.push(r):Sr=[r]:gr=r,n=cl(n,"onChange"),0<n.length&&(t=new Ei("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var fa=null,da=null;function wp(e){Kd(e,0)}function Ti(e){var n=ia(e);if(Xs(n))return e}function fo(e,n){if(e==="change")return n}var bo=!1;if(Qn){var cu;if(Qn){var su="oninput"in document;if(!su){var po=document.createElement("div");po.setAttribute("oninput","return;"),su=typeof po.oninput=="function"}cu=su}else cu=!1;bo=cu&&(!document.documentMode||9<document.documentMode)}function ho(){fa&&(fa.detachEvent("onpropertychange",mo),da=fa=null)}function mo(e){if(e.propertyName==="value"&&Ti(da)){var n=[];oo(n,da,e,$l(e)),Fs(wp,n)}}function Bp(e,n,t){e==="focusin"?(ho(),fa=n,da=t,fa.attachEvent("onpropertychange",mo)):e==="focusout"&&ho()}function jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(da)}function zp(e,n){if(e==="click")return Ti(n)}function Gp(e,n){if(e==="input"||e==="change")return Ti(n)}function kp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bn=typeof Object.is=="function"?Object.is:kp;function ba(e,n){if(bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!he.call(n,a)||!bn(e[a],n[a]))return!1}return!0}function yo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vo(e,n){var t=yo(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=yo(t)}}function go(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?go(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function So(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=mi(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var qp=Qn&&"documentMode"in document&&11>=document.documentMode,Ar=null,fu=null,pa=null,du=!1;function Eo(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;du||Ar==null||Ar!==mi(r)||(r=Ar,"selectionStart"in r&&ou(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pa&&ba(pa,r)||(pa=r,r=cl(fu,"onSelect"),0<r.length&&(n=new Ei("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ar)))}function kt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Tr={animationend:kt("Animation","AnimationEnd"),animationiteration:kt("Animation","AnimationIteration"),animationstart:kt("Animation","AnimationStart"),transitionrun:kt("Transition","TransitionRun"),transitionstart:kt("Transition","TransitionStart"),transitioncancel:kt("Transition","TransitionCancel"),transitionend:kt("Transition","TransitionEnd")},bu={},Ao={};Qn&&(Ao=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function qt(e){if(bu[e])return bu[e];if(!Tr[e])return e;var n=Tr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ao)return bu[e]=n[t];return e}var To=qt("animationend"),Ro=qt("animationiteration"),_o=qt("animationstart"),Yp=qt("transitionrun"),Ip=qt("transitionstart"),Vp=qt("transitioncancel"),Oo=qt("transitionend"),No=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function wn(e,n){No.set(e,n),zt(n,[e])}var xo=new WeakMap;function Rn(e,n){if(typeof e=="object"&&e!==null){var t=xo.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Is(n)},xo.set(e,n),n)}return{value:e,source:n,stack:Is(n)}}var _n=[],Rr=0,hu=0;function Ri(){for(var e=Rr,n=hu=Rr=0;n<e;){var t=_n[n];_n[n++]=null;var r=_n[n];_n[n++]=null;var a=_n[n];_n[n++]=null;var i=_n[n];if(_n[n++]=null,r!==null&&a!==null){var s=r.pending;s===null?a.next=a:(a.next=s.next,s.next=a),r.pending=a}i!==0&&Do(t,a,i)}}function _i(e,n,t,r){_n[Rr++]=e,_n[Rr++]=n,_n[Rr++]=t,_n[Rr++]=r,hu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,t,r){return _i(e,n,t,r),Oi(e)}function _r(e,n){return _i(e,null,null,n),Oi(e)}function Do(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var a=!1,i=e.return;i!==null;)i.childLanes|=t,r=i.alternate,r!==null&&(r.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&n!==null&&(a=31-dn(t),e=i.hiddenUpdates,r=e[a],r===null?e[a]=[n]:r.push(n),n.lane=t|536870912),i):null}function Oi(e){if(50<Ga)throw Ga=0,Ac=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function Xp(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,n,t,r){return new Xp(e,n,t,r)}function yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zn(e,n){var t=e.alternate;return t===null?(t=pn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Co(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ni(e,n,t,r,a,i){var s=0;if(r=e,typeof e=="function")yu(e)&&(s=1);else if(typeof e=="string")s=Wh(e,t,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=pn(31,t,n,a),e.elementType=F,e.lanes=i,e;case V:return Yt(t.children,a,i,n);case z:s=8,a|=24;break;case G:return e=pn(12,t,n,a|2),e.elementType=G,e.lanes=i,e;case m:return e=pn(13,t,n,a),e.elementType=m,e.lanes=i,e;case O:return e=pn(19,t,n,a),e.elementType=O,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:case te:s=10;break e;case Y:s=9;break e;case J:s=11;break e;case U:s=14;break e;case W:s=16,r=null;break e}s=29,t=Error(c(130,e===null?"null":typeof e,"")),r=null}return n=pn(s,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function Yt(e,n,t,r){return e=pn(7,e,r,n),e.lanes=t,e}function vu(e,n,t){return e=pn(6,e,null,n),e.lanes=t,e}function gu(e,n,t){return n=pn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Nr=[],xr=0,xi=null,Di=0,On=[],Nn=0,It=null,Jn=1,Fn="";function Vt(e,n){Nr[xr++]=Di,Nr[xr++]=xi,xi=e,Di=n}function Mo(e,n,t){On[Nn++]=Jn,On[Nn++]=Fn,On[Nn++]=It,It=e;var r=Jn;e=Fn;var a=32-dn(r)-1;r&=~(1<<a),t+=1;var i=32-dn(n)+a;if(30<i){var s=a-a%5;i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Jn=1<<32-dn(n)+a|t<<a|r,Fn=i+e}else Jn=1<<i|t<<a|r,Fn=e}function Su(e){e.return!==null&&(Vt(e,1),Mo(e,1,0))}function Eu(e){for(;e===xi;)xi=Nr[--xr],Nr[xr]=null,Di=Nr[--xr],Nr[xr]=null;for(;e===It;)It=On[--Nn],On[Nn]=null,Fn=On[--Nn],On[Nn]=null,Jn=On[--Nn],On[Nn]=null}var tn=null,we=null,Ee=!1,Xt=null,Yn=!1,Au=Error(c(519));function Kt(e){var n=Error(c(418,""));throw ya(Rn(n,e)),Au}function Ho(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[Fe]=e,n[rn]=r,t){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(t=0;t<qa.length;t++)ye(qa[t],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Ks(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),hi(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Ps(n,r.value,r.defaultValue,r.children),hi(n)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||Zd(n.textContent,t)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=sl),n=!0):n=!1,n||Kt(e)}function Lo(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 13:Yn=!1;return;case 27:case 3:Yn=!0;return;default:tn=tn.return}}function ha(e){if(e!==tn)return!1;if(!Ee)return Lo(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||zc(e.type,e.memoizedProps)),t=!t),t&&we&&Kt(e),Lo(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){we=jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}we=null}}else n===27?(n=we,Dt(e.type)?(e=Yc,Yc=null,we=e):we=n):we=tn?jn(e.stateNode.nextSibling):null;return!0}function ma(){we=tn=null,Ee=!1}function Uo(){var e=Xt;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),Xt=null),e}function ya(e){Xt===null?Xt=[e]:Xt.push(e)}var Tu=L(null),Wt=null,$n=null;function pt(e,n,t){q(Tu,n._currentValue),n._currentValue=t}function et(e){e._currentValue=Tu.current,k(Tu)}function Ru(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function _u(e,n,t,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var s=a.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=a;for(var v=0;v<n.length;v++)if(f.context===n[v]){i.lanes|=t,f=i.alternate,f!==null&&(f.lanes|=t),Ru(i.return,t,e),r||(s=null);break e}i=f.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(c(341));s.lanes|=t,i=s.alternate,i!==null&&(i.lanes|=t),Ru(s,t,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function va(e,n,t,r){e=null;for(var a=n,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=a.type;bn(a.pendingProps.value,s.value)||(e!==null?e.push(f):e=[f])}}else if(a===qe.current){if(s=a.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Wa):e=[Wa])}a=a.return}e!==null&&_u(n,e,t,r),n.flags|=262144}function Ci(e){for(e=e.firstContext;e!==null;){if(!bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pt(e){Wt=e,$n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return wo(Wt,e)}function Mi(e,n){return Wt===null&&Pt(e),wo(e,n)}function wo(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},$n===null){if(e===null)throw Error(c(308));$n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $n=$n.next=n;return t}var Kp=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Wp=l.unstable_scheduleCallback,Pp=l.unstable_NormalPriority,Ye={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Kp,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&Wp(Pp,function(){e.controller.abort()})}var Sa=null,Nu=0,Dr=0,Cr=null;function Qp(e,n){if(Sa===null){var t=Sa=[];Nu=0,Dr=Dc(),Cr={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Nu++,n.then(Bo,Bo),n}function Bo(){if(--Nu===0&&Sa!==null){Cr!==null&&(Cr.status="fulfilled");var e=Sa;Sa=null,Dr=0,Cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Zp(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var a=0;a<t.length;a++)(0,t[a])(n)},function(a){for(r.status="rejected",r.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),r}var jo=M.S;M.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Qp(e,n),jo!==null&&jo(e,n)};var Qt=L(null);function xu(){var e=Qt.current;return e!==null?e:Me.pooledCache}function Hi(e,n){n===null?q(Qt,Qt.current):q(Qt,n.pool)}function zo(){var e=xu();return e===null?null:{parent:Ye._currentValue,pool:e}}var Ea=Error(c(460)),Go=Error(c(474)),Li=Error(c(542)),Du={then:function(){}};function ko(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ui(){}function qo(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Ui,Ui),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Io(e),e;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=r}},function(r){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Io(e),e}throw Aa=n,Ea}}var Aa=null;function Yo(){if(Aa===null)throw Error(c(459));var e=Aa;return Aa=null,e}function Io(e){if(e===Ea||e===Li)throw Error(c(483))}var ht=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,n=Oi(e),Do(e,null,t),n}return _i(e,r,n,t),Oi(e)}function Ta(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ws(e,t)}}function Hu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?a=i=s:i=i.next=s,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Lu=!1;function Ra(){if(Lu){var e=Cr;if(e!==null)throw e}}function _a(e,n,t,r){Lu=!1;var a=e.updateQueue;ht=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var v=f,N=v.next;v.next=null,s===null?i=N:s.next=N,s=v;var H=e.alternate;H!==null&&(H=H.updateQueue,f=H.lastBaseUpdate,f!==s&&(f===null?H.firstBaseUpdate=N:f.next=N,H.lastBaseUpdate=v))}if(i!==null){var B=a.baseState;s=0,H=N=v=null,f=i;do{var x=f.lane&-536870913,D=x!==f.lane;if(D?(ve&x)===x:(r&x)===x){x!==0&&x===Dr&&(Lu=!0),H!==null&&(H=H.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var le=e,re=f;x=n;var Oe=t;switch(re.tag){case 1:if(le=re.payload,typeof le=="function"){B=le.call(Oe,B,x);break e}B=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=re.payload,x=typeof le=="function"?le.call(Oe,B,x):le,x==null)break e;B=E({},B,x);break e;case 2:ht=!0}}x=f.callback,x!==null&&(e.flags|=64,D&&(e.flags|=8192),D=a.callbacks,D===null?a.callbacks=[x]:D.push(x))}else D={lane:x,tag:f.tag,payload:f.payload,callback:f.callback,next:null},H===null?(N=H=D,v=B):H=H.next=D,s|=x;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;D=f,f=D.next,D.next=null,a.lastBaseUpdate=D,a.shared.pending=null}}while(!0);H===null&&(v=B),a.baseState=v,a.firstBaseUpdate=N,a.lastBaseUpdate=H,i===null&&(a.shared.lanes=0),_t|=s,e.lanes=s,e.memoizedState=B}}function Vo(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Xo(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Vo(t[e],n)}var Mr=L(null),wi=L(0);function Ko(e,n){e=ut,q(wi,e),q(Mr,n),ut=e|n.baseLanes}function Uu(){q(wi,ut),q(Mr,Mr.current)}function wu(){ut=wi.current,k(Mr),k(wi)}var vt=0,fe=null,Re=null,Ge=null,Bi=!1,Hr=!1,Zt=!1,ji=0,Oa=0,Lr=null,Jp=0;function je(){throw Error(c(321))}function Bu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!bn(e[t],n[t]))return!1;return!0}function ju(e,n,t,r,a,i){return vt=i,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,M.H=e===null||e.memoizedState===null?Cf:Mf,Zt=!1,i=t(r,a),Zt=!1,Hr&&(i=Po(n,t,r,a)),Wo(e),i}function Wo(e){M.H=Ii;var n=Re!==null&&Re.next!==null;if(vt=0,Ge=Re=fe=null,Bi=!1,Oa=0,Lr=null,n)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Ci(e)&&(Xe=!0))}function Po(e,n,t,r){fe=e;var a=0;do{if(Hr&&(Lr=null),Oa=0,Hr=!1,25<=a)throw Error(c(301));if(a+=1,Ge=Re=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=ah,i=n(t,r)}while(Hr);return i}function Fp(){var e=M.H,n=e.useState()[0];return n=typeof n.then=="function"?Na(n):n,e=e.useState()[0],(Re!==null?Re.memoizedState:null)!==e&&(fe.flags|=1024),n}function zu(){var e=ji!==0;return ji=0,e}function Gu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function ku(e){if(Bi){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bi=!1}vt=0,Ge=Re=fe=null,Hr=!1,Oa=ji=0,Lr=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?fe.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function ke(){if(Re===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Re.next;var n=Ge===null?fe.memoizedState:Ge.next;if(n!==null)Ge=n,Re=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));Re=e,e={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Ge===null?fe.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function qu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Na(e){var n=Oa;return Oa+=1,Lr===null&&(Lr=[]),e=qo(Lr,e,n),n=fe,(Ge===null?n.memoizedState:Ge.next)===null&&(n=n.alternate,M.H=n===null||n.memoizedState===null?Cf:Mf),e}function zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Na(e);if(e.$$typeof===te)return $e(e)}throw Error(c(438,String(e)))}function Yu(e){var n=null,t=fe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=qu(),fe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=Se;return n.index++,t}function nt(e,n){return typeof n=="function"?n(e):n}function Gi(e){var n=ke();return Iu(n,Re,e)}function Iu(e,n,t){var r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=t;var a=e.baseQueue,i=r.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}n.baseQueue=a=i,r.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{n=a.next;var f=s=null,v=null,N=n,H=!1;do{var B=N.lane&-536870913;if(B!==N.lane?(ve&B)===B:(vt&B)===B){var x=N.revertLane;if(x===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),B===Dr&&(H=!0);else if((vt&x)===x){N=N.next,x===Dr&&(H=!0);continue}else B={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},v===null?(f=v=B,s=i):v=v.next=B,fe.lanes|=x,_t|=x;B=N.action,Zt&&t(i,B),i=N.hasEagerState?N.eagerState:t(i,B)}else x={lane:B,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},v===null?(f=v=x,s=i):v=v.next=x,fe.lanes|=B,_t|=B;N=N.next}while(N!==null&&N!==n);if(v===null?s=i:v.next=f,!bn(i,e.memoizedState)&&(Xe=!0,H&&(t=Cr,t!==null)))throw t;e.memoizedState=i,e.baseState=s,e.baseQueue=v,r.lastRenderedState=i}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vu(e){var n=ke(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);bn(i,n.memoizedState)||(Xe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Qo(e,n,t){var r=fe,a=ke(),i=Ee;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=n();var s=!bn((Re||a).memoizedState,t);s&&(a.memoizedState=t,Xe=!0),a=a.queue;var f=Fo.bind(null,r,a,e);if(xa(2048,8,f,[e]),a.getSnapshot!==n||s||Ge!==null&&Ge.memoizedState.tag&1){if(r.flags|=2048,Ur(9,ki(),Jo.bind(null,r,a,t,n),null),Me===null)throw Error(c(349));i||(vt&124)!==0||Zo(r,n,t)}return t}function Zo(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n=qu(),fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Jo(e,n,t,r){n.value=t,n.getSnapshot=r,$o(n)&&ef(e)}function Fo(e,n,t){return t(function(){$o(n)&&ef(e)})}function $o(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!bn(e,t)}catch{return!0}}function ef(e){var n=_r(e,2);n!==null&&gn(n,e,2)}function Xu(e){var n=ln();if(typeof e=="function"){var t=e;if(e=t(),Zt){ft(!0);try{t()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:e},n}function nf(e,n,t,r){return e.baseState=t,Iu(e,Re,typeof r=="function"?r:nt)}function $p(e,n,t,r,a){if(Yi(e))throw Error(c(485));if(e=n.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};M.T!==null?t(!0):i.isTransition=!1,r(i),t=n.pending,t===null?(i.next=n.pending=i,tf(n,i)):(i.next=t.next,n.pending=t.next=i)}}function tf(e,n){var t=n.action,r=n.payload,a=e.state;if(n.isTransition){var i=M.T,s={};M.T=s;try{var f=t(a,r),v=M.S;v!==null&&v(s,f),rf(e,n,f)}catch(N){Ku(e,n,N)}finally{M.T=i}}else try{i=t(a,r),rf(e,n,i)}catch(N){Ku(e,n,N)}}function rf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){af(e,n,r)},function(r){return Ku(e,n,r)}):af(e,n,t)}function af(e,n,t){n.status="fulfilled",n.value=t,lf(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,tf(e,t)))}function Ku(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,lf(n),n=n.next;while(n!==r)}e.action=null}function lf(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function uf(e,n){return n}function cf(e,n){if(Ee){var t=Me.formState;if(t!==null){e:{var r=fe;if(Ee){if(we){n:{for(var a=we,i=Yn;a.nodeType!==8;){if(!i){a=null;break n}if(a=jn(a.nextSibling),a===null){a=null;break n}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){we=jn(a.nextSibling),r=a.data==="F!";break e}}Kt(r)}r=!1}r&&(n=t[0])}}return t=ln(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uf,lastRenderedState:n},t.queue=r,t=Nf.bind(null,fe,r),r.dispatch=t,r=Xu(!1),i=Ju.bind(null,fe,!1,r.queue),r=ln(),a={state:n,dispatch:null,action:e,pending:null},r.queue=a,t=$p.bind(null,fe,a,i,t),a.dispatch=t,r.memoizedState=e,[n,t,!1]}function sf(e){var n=ke();return of(n,Re,e)}function of(e,n,t){if(n=Iu(e,n,uf)[0],e=Gi(nt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Na(n)}catch(s){throw s===Ea?Li:s}else r=n;n=ke();var a=n.queue,i=a.dispatch;return t!==n.memoizedState&&(fe.flags|=2048,Ur(9,ki(),eh.bind(null,a,t),null)),[r,i,e]}function eh(e,n){e.action=n}function ff(e){var n=ke(),t=Re;if(t!==null)return of(n,t,e);ke(),n=n.memoizedState,t=ke();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function Ur(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=qu(),fe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function ki(){return{destroy:void 0,resource:void 0}}function df(){return ke().memoizedState}function qi(e,n,t,r){var a=ln();r=r===void 0?null:r,fe.flags|=e,a.memoizedState=Ur(1|n,ki(),t,r)}function xa(e,n,t,r){var a=ke();r=r===void 0?null:r;var i=a.memoizedState.inst;Re!==null&&r!==null&&Bu(r,Re.memoizedState.deps)?a.memoizedState=Ur(n,i,t,r):(fe.flags|=e,a.memoizedState=Ur(1|n,i,t,r))}function bf(e,n){qi(8390656,8,e,n)}function pf(e,n){xa(2048,8,e,n)}function hf(e,n){return xa(4,2,e,n)}function mf(e,n){return xa(4,4,e,n)}function yf(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function vf(e,n,t){t=t!=null?t.concat([e]):null,xa(4,4,yf.bind(null,n,e),t)}function Wu(){}function gf(e,n){var t=ke();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&Bu(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Sf(e,n){var t=ke();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&Bu(n,r[1]))return r[0];if(r=e(),Zt){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[r,n],r}function Pu(e,n,t){return t===void 0||(vt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Td(),fe.lanes|=e,_t|=e,t)}function Ef(e,n,t,r){return bn(t,n)?t:Mr.current!==null?(e=Pu(e,t,r),bn(e,n)||(Xe=!0),e):(vt&42)===0?(Xe=!0,e.memoizedState=t):(e=Td(),fe.lanes|=e,_t|=e,n)}function Af(e,n,t,r,a){var i=I.p;I.p=i!==0&&8>i?i:8;var s=M.T,f={};M.T=f,Ju(e,!1,n,t);try{var v=a(),N=M.S;if(N!==null&&N(f,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var H=Zp(v,r);Da(e,n,H,vn(e))}else Da(e,n,r,vn(e))}catch(B){Da(e,n,{then:function(){},status:"rejected",reason:B},vn())}finally{I.p=i,M.T=s}}function nh(){}function Qu(e,n,t,r){if(e.tag!==5)throw Error(c(476));var a=Tf(e).queue;Af(e,a,n,ee,t===null?nh:function(){return Rf(e),t(r)})}function Tf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:ee},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Rf(e){var n=Tf(e).next.queue;Da(e,n,{},vn())}function Zu(){return $e(Wa)}function _f(){return ke().memoizedState}function Of(){return ke().memoizedState}function th(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=vn();e=mt(t);var r=yt(n,e,t);r!==null&&(gn(r,n,t),Ta(r,n,t)),n={cache:Ou()},e.payload=n;return}n=n.return}}function rh(e,n,t){var r=vn();t={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Yi(e)?xf(n,t):(t=mu(e,n,t,r),t!==null&&(gn(t,e,r),Df(t,n,r)))}function Nf(e,n,t){var r=vn();Da(e,n,t,r)}function Da(e,n,t,r){var a={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))xf(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var s=n.lastRenderedState,f=i(s,t);if(a.hasEagerState=!0,a.eagerState=f,bn(f,s))return _i(e,n,a,0),Me===null&&Ri(),!1}catch{}finally{}if(t=mu(e,n,a,r),t!==null)return gn(t,e,r),Df(t,n,r),!0}return!1}function Ju(e,n,t,r){if(r={lane:2,revertLane:Dc(),action:r,hasEagerState:!1,eagerState:null,next:null},Yi(e)){if(n)throw Error(c(479))}else n=mu(e,t,r,2),n!==null&&gn(n,e,2)}function Yi(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function xf(e,n){Hr=Bi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Df(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,ws(e,t)}}var Ii={readContext:$e,use:zi,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je},Cf={readContext:$e,use:zi,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:$e,useEffect:bf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,qi(4194308,4,yf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return qi(4194308,4,e,n)},useInsertionEffect:function(e,n){qi(4,2,e,n)},useMemo:function(e,n){var t=ln();n=n===void 0?null:n;var r=e();if(Zt){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=ln();if(t!==void 0){var a=t(n);if(Zt){ft(!0);try{t(n)}finally{ft(!1)}}}else a=n;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=rh.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Xu(e);var n=e.queue,t=Nf.bind(null,fe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Wu,useDeferredValue:function(e,n){var t=ln();return Pu(t,e,n)},useTransition:function(){var e=Xu(!1);return e=Af.bind(null,fe,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=fe,a=ln();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Me===null)throw Error(c(349));(ve&124)!==0||Zo(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,bf(Fo.bind(null,r,i,e),[e]),r.flags|=2048,Ur(9,ki(),Jo.bind(null,r,i,t,n),null),t},useId:function(){var e=ln(),n=Me.identifierPrefix;if(Ee){var t=Fn,r=Jn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n="«"+n+"R"+t,t=ji++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=Jp++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:cf,useActionState:cf,useOptimistic:function(e){var n=ln();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Ju.bind(null,fe,!0,t),t.dispatch=n,[e,n]},useMemoCache:Yu,useCacheRefresh:function(){return ln().memoizedState=th.bind(null,fe)}},Mf={readContext:$e,use:zi,useCallback:gf,useContext:$e,useEffect:pf,useImperativeHandle:vf,useInsertionEffect:hf,useLayoutEffect:mf,useMemo:Sf,useReducer:Gi,useRef:df,useState:function(){return Gi(nt)},useDebugValue:Wu,useDeferredValue:function(e,n){var t=ke();return Ef(t,Re.memoizedState,e,n)},useTransition:function(){var e=Gi(nt)[0],n=ke().memoizedState;return[typeof e=="boolean"?e:Na(e),n]},useSyncExternalStore:Qo,useId:_f,useHostTransitionStatus:Zu,useFormState:sf,useActionState:sf,useOptimistic:function(e,n){var t=ke();return nf(t,Re,e,n)},useMemoCache:Yu,useCacheRefresh:Of},ah={readContext:$e,use:zi,useCallback:gf,useContext:$e,useEffect:pf,useImperativeHandle:vf,useInsertionEffect:hf,useLayoutEffect:mf,useMemo:Sf,useReducer:Vu,useRef:df,useState:function(){return Vu(nt)},useDebugValue:Wu,useDeferredValue:function(e,n){var t=ke();return Re===null?Pu(t,e,n):Ef(t,Re.memoizedState,e,n)},useTransition:function(){var e=Vu(nt)[0],n=ke().memoizedState;return[typeof e=="boolean"?e:Na(e),n]},useSyncExternalStore:Qo,useId:_f,useHostTransitionStatus:Zu,useFormState:ff,useActionState:ff,useOptimistic:function(e,n){var t=ke();return Re!==null?nf(t,Re,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Yu,useCacheRefresh:Of},wr=null,Ca=0;function Vi(e){var n=Ca;return Ca+=1,wr===null&&(wr=[]),qo(wr,e,n)}function Ma(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Xi(e,n){throw n.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Hf(e){var n=e._init;return n(e._payload)}function Lf(e){function n(R,T){if(e){var _=R.deletions;_===null?(R.deletions=[T],R.flags|=16):_.push(T)}}function t(R,T){if(!e)return null;for(;T!==null;)n(R,T),T=T.sibling;return null}function r(R){for(var T=new Map;R!==null;)R.key!==null?T.set(R.key,R):T.set(R.index,R),R=R.sibling;return T}function a(R,T){return R=Zn(R,T),R.index=0,R.sibling=null,R}function i(R,T,_){return R.index=_,e?(_=R.alternate,_!==null?(_=_.index,_<T?(R.flags|=67108866,T):_):(R.flags|=67108866,T)):(R.flags|=1048576,T)}function s(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function f(R,T,_,w){return T===null||T.tag!==6?(T=vu(_,R.mode,w),T.return=R,T):(T=a(T,_),T.return=R,T)}function v(R,T,_,w){var Z=_.type;return Z===V?H(R,T,_.props.children,w,_.key):T!==null&&(T.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&Hf(Z)===T.type)?(T=a(T,_.props),Ma(T,_),T.return=R,T):(T=Ni(_.type,_.key,_.props,null,R.mode,w),Ma(T,_),T.return=R,T)}function N(R,T,_,w){return T===null||T.tag!==4||T.stateNode.containerInfo!==_.containerInfo||T.stateNode.implementation!==_.implementation?(T=gu(_,R.mode,w),T.return=R,T):(T=a(T,_.children||[]),T.return=R,T)}function H(R,T,_,w,Z){return T===null||T.tag!==7?(T=Yt(_,R.mode,w,Z),T.return=R,T):(T=a(T,_),T.return=R,T)}function B(R,T,_){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=vu(""+T,R.mode,_),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case j:return _=Ni(T.type,T.key,T.props,null,R.mode,_),Ma(_,T),_.return=R,_;case X:return T=gu(T,R.mode,_),T.return=R,T;case W:var w=T._init;return T=w(T._payload),B(R,T,_)}if(be(T)||xe(T))return T=Yt(T,R.mode,_,null),T.return=R,T;if(typeof T.then=="function")return B(R,Vi(T),_);if(T.$$typeof===te)return B(R,Mi(R,T),_);Xi(R,T)}return null}function x(R,T,_,w){var Z=T!==null?T.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return Z!==null?null:f(R,T,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case j:return _.key===Z?v(R,T,_,w):null;case X:return _.key===Z?N(R,T,_,w):null;case W:return Z=_._init,_=Z(_._payload),x(R,T,_,w)}if(be(_)||xe(_))return Z!==null?null:H(R,T,_,w,null);if(typeof _.then=="function")return x(R,T,Vi(_),w);if(_.$$typeof===te)return x(R,T,Mi(R,_),w);Xi(R,_)}return null}function D(R,T,_,w,Z){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return R=R.get(_)||null,f(T,R,""+w,Z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case j:return R=R.get(w.key===null?_:w.key)||null,v(T,R,w,Z);case X:return R=R.get(w.key===null?_:w.key)||null,N(T,R,w,Z);case W:var de=w._init;return w=de(w._payload),D(R,T,_,w,Z)}if(be(w)||xe(w))return R=R.get(_)||null,H(T,R,w,Z,null);if(typeof w.then=="function")return D(R,T,_,Vi(w),Z);if(w.$$typeof===te)return D(R,T,_,Mi(T,w),Z);Xi(T,w)}return null}function le(R,T,_,w){for(var Z=null,de=null,ne=T,ie=T=0,We=null;ne!==null&&ie<_.length;ie++){ne.index>ie?(We=ne,ne=null):We=ne.sibling;var ge=x(R,ne,_[ie],w);if(ge===null){ne===null&&(ne=We);break}e&&ne&&ge.alternate===null&&n(R,ne),T=i(ge,T,ie),de===null?Z=ge:de.sibling=ge,de=ge,ne=We}if(ie===_.length)return t(R,ne),Ee&&Vt(R,ie),Z;if(ne===null){for(;ie<_.length;ie++)ne=B(R,_[ie],w),ne!==null&&(T=i(ne,T,ie),de===null?Z=ne:de.sibling=ne,de=ne);return Ee&&Vt(R,ie),Z}for(ne=r(ne);ie<_.length;ie++)We=D(ne,R,ie,_[ie],w),We!==null&&(e&&We.alternate!==null&&ne.delete(We.key===null?ie:We.key),T=i(We,T,ie),de===null?Z=We:de.sibling=We,de=We);return e&&ne.forEach(function(Ut){return n(R,Ut)}),Ee&&Vt(R,ie),Z}function re(R,T,_,w){if(_==null)throw Error(c(151));for(var Z=null,de=null,ne=T,ie=T=0,We=null,ge=_.next();ne!==null&&!ge.done;ie++,ge=_.next()){ne.index>ie?(We=ne,ne=null):We=ne.sibling;var Ut=x(R,ne,ge.value,w);if(Ut===null){ne===null&&(ne=We);break}e&&ne&&Ut.alternate===null&&n(R,ne),T=i(Ut,T,ie),de===null?Z=Ut:de.sibling=Ut,de=Ut,ne=We}if(ge.done)return t(R,ne),Ee&&Vt(R,ie),Z;if(ne===null){for(;!ge.done;ie++,ge=_.next())ge=B(R,ge.value,w),ge!==null&&(T=i(ge,T,ie),de===null?Z=ge:de.sibling=ge,de=ge);return Ee&&Vt(R,ie),Z}for(ne=r(ne);!ge.done;ie++,ge=_.next())ge=D(ne,R,ie,ge.value,w),ge!==null&&(e&&ge.alternate!==null&&ne.delete(ge.key===null?ie:ge.key),T=i(ge,T,ie),de===null?Z=ge:de.sibling=ge,de=ge);return e&&ne.forEach(function(im){return n(R,im)}),Ee&&Vt(R,ie),Z}function Oe(R,T,_,w){if(typeof _=="object"&&_!==null&&_.type===V&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case j:e:{for(var Z=_.key;T!==null;){if(T.key===Z){if(Z=_.type,Z===V){if(T.tag===7){t(R,T.sibling),w=a(T,_.props.children),w.return=R,R=w;break e}}else if(T.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&Hf(Z)===T.type){t(R,T.sibling),w=a(T,_.props),Ma(w,_),w.return=R,R=w;break e}t(R,T);break}else n(R,T);T=T.sibling}_.type===V?(w=Yt(_.props.children,R.mode,w,_.key),w.return=R,R=w):(w=Ni(_.type,_.key,_.props,null,R.mode,w),Ma(w,_),w.return=R,R=w)}return s(R);case X:e:{for(Z=_.key;T!==null;){if(T.key===Z)if(T.tag===4&&T.stateNode.containerInfo===_.containerInfo&&T.stateNode.implementation===_.implementation){t(R,T.sibling),w=a(T,_.children||[]),w.return=R,R=w;break e}else{t(R,T);break}else n(R,T);T=T.sibling}w=gu(_,R.mode,w),w.return=R,R=w}return s(R);case W:return Z=_._init,_=Z(_._payload),Oe(R,T,_,w)}if(be(_))return le(R,T,_,w);if(xe(_)){if(Z=xe(_),typeof Z!="function")throw Error(c(150));return _=Z.call(_),re(R,T,_,w)}if(typeof _.then=="function")return Oe(R,T,Vi(_),w);if(_.$$typeof===te)return Oe(R,T,Mi(R,_),w);Xi(R,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,T!==null&&T.tag===6?(t(R,T.sibling),w=a(T,_),w.return=R,R=w):(t(R,T),w=vu(_,R.mode,w),w.return=R,R=w),s(R)):t(R,T)}return function(R,T,_,w){try{Ca=0;var Z=Oe(R,T,_,w);return wr=null,Z}catch(ne){if(ne===Ea||ne===Li)throw ne;var de=pn(29,ne,null,R.mode);return de.lanes=w,de.return=R,de}finally{}}}var Br=Lf(!0),Uf=Lf(!1),xn=L(null),In=null;function gt(e){var n=e.alternate;q(Ie,Ie.current&1),q(xn,e),In===null&&(n===null||Mr.current!==null||n.memoizedState!==null)&&(In=e)}function wf(e){if(e.tag===22){if(q(Ie,Ie.current),q(xn,e),In===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(In=e)}}else St()}function St(){q(Ie,Ie.current),q(xn,xn.current)}function tt(e){k(xn),In===e&&(In=null),k(Ie)}var Ie=L(0);function Ki(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||qc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Fu(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var $u={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=vn(),a=mt(r);a.payload=n,t!=null&&(a.callback=t),n=yt(e,a,r),n!==null&&(gn(n,e,r),Ta(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=vn(),a=mt(r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=yt(e,a,r),n!==null&&(gn(n,e,r),Ta(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=vn(),r=mt(t);r.tag=2,n!=null&&(r.callback=n),n=yt(e,r,t),n!==null&&(gn(n,e,t),Ta(n,e,t))}};function Bf(e,n,t,r,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):n.prototype&&n.prototype.isPureReactComponent?!ba(t,r)||!ba(a,i):!0}function jf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function Jt(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var a in e)t[a]===void 0&&(t[a]=e[a])}return t}var Wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zf(e){Wi(e)}function Gf(e){console.error(e)}function kf(e){Wi(e)}function Pi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function qf(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ec(e,n,t){return t=mt(t),t.tag=3,t.payload={element:null},t.callback=function(){Pi(e,n)},t}function Yf(e){return e=mt(e),e.tag=3,e}function If(e,n,t,r){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){qf(n,t,r)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){qf(n,t,r),typeof a!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var f=r.stack;this.componentDidCatch(r.value,{componentStack:f!==null?f:""})})}function ih(e,n,t,r,a){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&va(n,t,a,!0),t=xn.current,t!==null){switch(t.tag){case 13:return In===null?Rc():t.alternate===null&&Be===0&&(Be=3),t.flags&=-257,t.flags|=65536,t.lanes=a,r===Du?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),Oc(e,r,a)),!1;case 22:return t.flags|=65536,r===Du?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),Oc(e,r,a)),!1}throw Error(c(435,t.tag))}return Oc(e,r,a),Rc(),!1}if(Ee)return n=xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,r!==Au&&(e=Error(c(422),{cause:r}),ya(Rn(e,t)))):(r!==Au&&(n=Error(c(423),{cause:r}),ya(Rn(n,t))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Rn(r,t),a=ec(e.stateNode,r,a),Hu(e,a),Be!==4&&(Be=2)),!1;var i=Error(c(520),{cause:r});if(i=Rn(i,t),za===null?za=[i]:za.push(i),Be!==4&&(Be=2),n===null)return!0;r=Rn(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=a&-a,t.lanes|=e,e=ec(t.stateNode,r,e),Hu(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ot===null||!Ot.has(i))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Yf(a),If(a,e,t,r),Hu(t,a),!1}t=t.return}while(t!==null);return!1}var Vf=Error(c(461)),Xe=!1;function Pe(e,n,t,r){n.child=e===null?Uf(n,null,t,r):Br(n,e.child,t,r)}function Xf(e,n,t,r,a){t=t.render;var i=n.ref;if("ref"in r){var s={};for(var f in r)f!=="ref"&&(s[f]=r[f])}else s=r;return Pt(n),r=ju(e,n,t,s,i,a),f=zu(),e!==null&&!Xe?(Gu(e,n,a),rt(e,n,a)):(Ee&&f&&Su(n),n.flags|=1,Pe(e,n,r,a),n.child)}function Kf(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!yu(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Wf(e,n,i,r,a)):(e=Ni(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!cc(e,a)){var s=i.memoizedProps;if(t=t.compare,t=t!==null?t:ba,t(s,r)&&e.ref===n.ref)return rt(e,n,a)}return n.flags|=1,e=Zn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Wf(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(ba(i,r)&&e.ref===n.ref)if(Xe=!1,n.pendingProps=r=i,cc(e,a))(e.flags&131072)!==0&&(Xe=!0);else return n.lanes=e.lanes,rt(e,n,a)}return nc(e,n,t,r,a)}function Pf(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;n.childLanes=i&~r}else n.childLanes=0,n.child=null;return Qf(e,n,r,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hi(n,i!==null?i.cachePool:null),i!==null?Ko(n,i):Uu(),wf(n);else return n.lanes=n.childLanes=536870912,Qf(e,n,i!==null?i.baseLanes|t:t,t)}else i!==null?(Hi(n,i.cachePool),Ko(n,i),St(),n.memoizedState=null):(e!==null&&Hi(n,null),Uu(),St());return Pe(e,n,a,t),n.child}function Qf(e,n,t,r){var a=xu();return a=a===null?null:{parent:Ye._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&Hi(n,null),Uu(),wf(n),e!==null&&va(e,n,r,!0),null}function Qi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function nc(e,n,t,r,a){return Pt(n),t=ju(e,n,t,r,void 0,a),r=zu(),e!==null&&!Xe?(Gu(e,n,a),rt(e,n,a)):(Ee&&r&&Su(n),n.flags|=1,Pe(e,n,t,a),n.child)}function Zf(e,n,t,r,a,i){return Pt(n),n.updateQueue=null,t=Po(n,r,t,a),Wo(e),r=zu(),e!==null&&!Xe?(Gu(e,n,i),rt(e,n,i)):(Ee&&r&&Su(n),n.flags|=1,Pe(e,n,t,i),n.child)}function Jf(e,n,t,r,a){if(Pt(n),n.stateNode===null){var i=Or,s=t.contextType;typeof s=="object"&&s!==null&&(i=$e(s)),i=new t(r,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$u,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=r,i.state=n.memoizedState,i.refs={},Cu(n),s=t.contextType,i.context=typeof s=="object"&&s!==null?$e(s):Or,i.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Fu(n,t,s,r),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&$u.enqueueReplaceState(i,i.state,null),_a(n,r,i,a),Ra(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){i=n.stateNode;var f=n.memoizedProps,v=Jt(t,f);i.props=v;var N=i.context,H=t.contextType;s=Or,typeof H=="object"&&H!==null&&(s=$e(H));var B=t.getDerivedStateFromProps;H=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||N!==s)&&jf(n,i,r,s),ht=!1;var x=n.memoizedState;i.state=x,_a(n,r,i,a),Ra(),N=n.memoizedState,f||x!==N||ht?(typeof B=="function"&&(Fu(n,t,B,r),N=n.memoizedState),(v=ht||Bf(n,t,v,r,x,N,s))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=N),i.props=r,i.state=N,i.context=s,r=v):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Mu(e,n),s=n.memoizedProps,H=Jt(t,s),i.props=H,B=n.pendingProps,x=i.context,N=t.contextType,v=Or,typeof N=="object"&&N!==null&&(v=$e(N)),f=t.getDerivedStateFromProps,(N=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==B||x!==v)&&jf(n,i,r,v),ht=!1,x=n.memoizedState,i.state=x,_a(n,r,i,a),Ra();var D=n.memoizedState;s!==B||x!==D||ht||e!==null&&e.dependencies!==null&&Ci(e.dependencies)?(typeof f=="function"&&(Fu(n,t,f,r),D=n.memoizedState),(H=ht||Bf(n,t,H,r,x,D,v)||e!==null&&e.dependencies!==null&&Ci(e.dependencies))?(N||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,D,v),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,D,v)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=D),i.props=r,i.state=D,i.context=v,r=H):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),r=!1)}return i=r,Qi(e,n),r=(n.flags&128)!==0,i||r?(i=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&r?(n.child=Br(n,e.child,null,a),n.child=Br(n,null,t,a)):Pe(e,n,t,a),n.memoizedState=i.state,e=n.child):e=rt(e,n,a),e}function Ff(e,n,t,r){return ma(),n.flags|=256,Pe(e,n,t,r),n.child}var tc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:zo()}}function ac(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Dn),e}function $f(e,n,t){var r=n.pendingProps,a=!1,i=(n.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(a=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(a?gt(n):St(),Ee){var f=we,v;if(v=f){e:{for(v=f,f=Yn;v.nodeType!==8;){if(!f){f=null;break e}if(v=jn(v.nextSibling),v===null){f=null;break e}}f=v}f!==null?(n.memoizedState={dehydrated:f,treeContext:It!==null?{id:Jn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},v=pn(18,null,null,0),v.stateNode=f,v.return=n,n.child=v,tn=n,we=null,v=!0):v=!1}v||Kt(n)}if(f=n.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return qc(f)?n.lanes=32:n.lanes=536870912,null;tt(n)}return f=r.children,r=r.fallback,a?(St(),a=n.mode,f=Zi({mode:"hidden",children:f},a),r=Yt(r,a,t,null),f.return=n,r.return=n,f.sibling=r,n.child=f,a=n.child,a.memoizedState=rc(t),a.childLanes=ac(e,s,t),n.memoizedState=tc,r):(gt(n),ic(n,f))}if(v=e.memoizedState,v!==null&&(f=v.dehydrated,f!==null)){if(i)n.flags&256?(gt(n),n.flags&=-257,n=lc(e,n,t)):n.memoizedState!==null?(St(),n.child=e.child,n.flags|=128,n=null):(St(),a=r.fallback,f=n.mode,r=Zi({mode:"visible",children:r.children},f),a=Yt(a,f,t,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,Br(n,e.child,null,t),r=n.child,r.memoizedState=rc(t),r.childLanes=ac(e,s,t),n.memoizedState=tc,n=a);else if(gt(n),qc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var N=s.dgst;s=N,r=Error(c(419)),r.stack="",r.digest=s,ya({value:r,source:null,stack:null}),n=lc(e,n,t)}else if(Xe||va(e,n,t,!1),s=(t&e.childLanes)!==0,Xe||s){if(s=Me,s!==null&&(r=t&-t,r=(r&42)!==0?1:Yl(r),r=(r&(s.suspendedLanes|t))!==0?0:r,r!==0&&r!==v.retryLane))throw v.retryLane=r,_r(e,r),gn(s,e,r),Vf;f.data==="$?"||Rc(),n=lc(e,n,t)}else f.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=v.treeContext,we=jn(f.nextSibling),tn=n,Ee=!0,Xt=null,Yn=!1,e!==null&&(On[Nn++]=Jn,On[Nn++]=Fn,On[Nn++]=It,Jn=e.id,Fn=e.overflow,It=n),n=ic(n,r.children),n.flags|=4096);return n}return a?(St(),a=r.fallback,f=n.mode,v=e.child,N=v.sibling,r=Zn(v,{mode:"hidden",children:r.children}),r.subtreeFlags=v.subtreeFlags&65011712,N!==null?a=Zn(N,a):(a=Yt(a,f,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,f=e.child.memoizedState,f===null?f=rc(t):(v=f.cachePool,v!==null?(N=Ye._currentValue,v=v.parent!==N?{parent:N,pool:N}:v):v=zo(),f={baseLanes:f.baseLanes|t,cachePool:v}),a.memoizedState=f,a.childLanes=ac(e,s,t),n.memoizedState=tc,r):(gt(n),t=e.child,e=t.sibling,t=Zn(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function ic(e,n){return n=Zi({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Zi(e,n){return e=pn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function lc(e,n,t){return Br(n,e.child,null,t),e=ic(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ed(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ru(e.return,n,t)}function uc(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function nd(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Pe(e,n,r.children,t),r=Ie.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ed(e,t,n);else if(e.tag===19)ed(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(q(Ie,r),a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Ki(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),uc(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Ki(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}uc(n,!0,t,null,i);break;case"together":uc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(va(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function cc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ci(e)))}function lh(e,n,t){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),pt(n,Ye,e.memoizedState.cache),ma();break;case 27:case 5:cr(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:pt(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(gt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?$f(e,n,t):(gt(n),e=rt(e,n,t),e!==null?e.sibling:null);gt(n);break;case 19:var a=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(va(e,n,t,!1),r=(t&n.childLanes)!==0),a){if(r)return nd(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(Ie,Ie.current),r)break;return null;case 22:case 23:return n.lanes=0,Pf(e,n,t);case 24:pt(n,Ye,e.memoizedState.cache)}return rt(e,n,t)}function td(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Xe=!0;else{if(!cc(e,t)&&(n.flags&128)===0)return Xe=!1,lh(e,n,t);Xe=(e.flags&131072)!==0}else Xe=!1,Ee&&(n.flags&1048576)!==0&&Mo(n,Di,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var r=n.elementType,a=r._init;if(r=a(r._payload),n.type=r,typeof r=="function")yu(r)?(e=Jt(r,e),n.tag=1,n=Jf(null,n,r,e,t)):(n.tag=0,n=nc(null,n,r,e,t));else{if(r!=null){if(a=r.$$typeof,a===J){n.tag=11,n=Xf(null,n,r,e,t);break e}else if(a===U){n.tag=14,n=Kf(null,n,r,e,t);break e}}throw n=P(r)||r,Error(c(306,n,""))}}return n;case 0:return nc(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,a=Jt(r,n.pendingProps),Jf(e,n,r,a,t);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(c(387));r=n.pendingProps;var i=n.memoizedState;a=i.element,Mu(e,n),_a(n,r,null,t);var s=n.memoizedState;if(r=s.cache,pt(n,Ye,r),r!==i.cache&&_u(n,[Ye],t,!0),Ra(),r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=Ff(e,n,r,t);break e}else if(r!==a){a=Rn(Error(c(424)),n),ya(a),n=Ff(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(we=jn(e.firstChild),tn=n,Ee=!0,Xt=null,Yn=!0,t=Uf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(ma(),r===a){n=rt(e,n,t);break e}Pe(e,n,r,t)}n=n.child}return n;case 26:return Qi(e,n),e===null?(t=lb(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,r=ol(ae.current).createElement(t),r[Fe]=n,r[rn]=e,Ze(r,t,e),Ve(r),n.stateNode=r):n.memoizedState=lb(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return cr(n),e===null&&Ee&&(r=n.stateNode=rb(n.type,n.pendingProps,ae.current),tn=n,Yn=!0,a=we,Dt(n.type)?(Yc=a,we=jn(r.firstChild)):we=a),Pe(e,n,n.pendingProps.children,t),Qi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((a=r=we)&&(r=Uh(r,n.type,n.pendingProps,Yn),r!==null?(n.stateNode=r,tn=n,we=jn(r.firstChild),Yn=!1,a=!0):a=!1),a||Kt(n)),cr(n),a=n.type,i=n.pendingProps,s=e!==null?e.memoizedProps:null,r=i.children,zc(a,i)?r=null:s!==null&&zc(a,s)&&(n.flags|=32),n.memoizedState!==null&&(a=ju(e,n,Fp,null,null,t),Wa._currentValue=a),Qi(e,n),Pe(e,n,r,t),n.child;case 6:return e===null&&Ee&&((e=t=we)&&(t=wh(t,n.pendingProps,Yn),t!==null?(n.stateNode=t,tn=n,we=null,e=!0):e=!1),e||Kt(n)),null;case 13:return $f(e,n,t);case 4:return Ce(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Br(n,null,r,t):Pe(e,n,r,t),n.child;case 11:return Xf(e,n,n.type,n.pendingProps,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,pt(n,n.type,r.value),Pe(e,n,r.children,t),n.child;case 9:return a=n.type._context,r=n.pendingProps.children,Pt(n),a=$e(a),r=r(a),n.flags|=1,Pe(e,n,r,t),n.child;case 14:return Kf(e,n,n.type,n.pendingProps,t);case 15:return Wf(e,n,n.type,n.pendingProps,t);case 19:return nd(e,n,t);case 31:return r=n.pendingProps,t=n.mode,r={mode:r.mode,children:r.children},e===null?(t=Zi(r,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=Zn(e.child,r),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return Pf(e,n,t);case 24:return Pt(n),r=$e(Ye),e===null?(a=xu(),a===null&&(a=Me,i=Ou(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=t),a=i),n.memoizedState={parent:r,cache:a},Cu(n),pt(n,Ye,a)):((e.lanes&t)!==0&&(Mu(e,n),_a(n,null,null,t),Ra()),a=e.memoizedState,i=n.memoizedState,a.parent!==r?(a={parent:r,cache:r},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),pt(n,Ye,r)):(r=i.cache,pt(n,Ye,r),r!==a.cache&&_u(n,[Ye],t,!0))),Pe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function at(e){e.flags|=4}function rd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fb(n)){if(n=xn.current,n!==null&&((ve&4194048)===ve?In!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==In))throw Aa=Du,Go;e.flags|=8192}}function Ji(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ls():536870912,e.lanes|=n,kr|=n)}function Ha(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function uh(e,n,t){var r=n.pendingProps;switch(Eu(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(n),null;case 1:return Ue(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),et(Ye),kn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(ha(n)?at(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uo())),Ue(n),null;case 26:return t=n.memoizedState,e===null?(at(n),t!==null?(Ue(n),rd(n,t)):(Ue(n),n.flags&=-16777217)):t?t!==e.memoizedState?(at(n),Ue(n),rd(n,t)):(Ue(n),n.flags&=-16777217):(e.memoizedProps!==r&&at(n),Ue(n),n.flags&=-16777217),null;case 27:sr(n),t=ae.current;var a=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&at(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Ue(n),null}e=$.current,ha(n)?Ho(n):(e=rb(a,r,t),n.stateNode=e,at(n))}return Ue(n),null;case 5:if(sr(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&at(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return Ue(n),null}if(e=$.current,ha(n))Ho(n);else{switch(a=ol(ae.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?a.createElement(t,{is:r.is}):a.createElement(t)}}e[Fe]=n,e[rn]=r;e:for(a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}n.stateNode=e;e:switch(Ze(e,t,r),t){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&at(n)}}return Ue(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&at(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(e=ae.current,ha(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,a=tn,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Fe]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Zd(e.nodeValue,t)),e||Kt(n)}else e=ol(e).createTextNode(r),e[Fe]=n,n.stateNode=e}return Ue(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=ha(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Fe]=n}else ma(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ue(n),a=!1}else a=Uo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(tt(n),n):(tt(n),null)}if(tt(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=r!==null,e=e!==null&&e.memoizedState!==null,t){r=n.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Ji(n,n.updateQueue),Ue(n),null;case 4:return kn(),e===null&&Lc(n.stateNode.containerInfo),Ue(n),null;case 10:return et(n.type),Ue(n),null;case 19:if(k(Ie),a=n.memoizedState,a===null)return Ue(n),null;if(r=(n.flags&128)!==0,i=a.rendering,i===null)if(r)Ha(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Ki(e),i!==null){for(n.flags|=128,Ha(a,!1),e=i.updateQueue,n.updateQueue=e,Ji(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Co(t,e),t=t.sibling;return q(Ie,Ie.current&1|2),n.child}e=e.sibling}a.tail!==null&&Un()>el&&(n.flags|=128,r=!0,Ha(a,!1),n.lanes=4194304)}else{if(!r)if(e=Ki(i),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ji(n,e),Ha(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ee)return Ue(n),null}else 2*Un()-a.renderingStartTime>el&&t!==536870912&&(n.flags|=128,r=!0,Ha(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=Un(),n.sibling=null,e=Ie.current,q(Ie,r?e&1|2:e&1),n):(Ue(n),null);case 22:case 23:return tt(n),wu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(Ue(n),n.subtreeFlags&6&&(n.flags|=8192)):Ue(n),t=n.updateQueue,t!==null&&Ji(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&k(Qt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),et(Ye),Ue(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function ch(e,n){switch(Eu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(Ye),kn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return sr(n),null;case 13:if(tt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));ma()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return k(Ie),null;case 4:return kn(),null;case 10:return et(n.type),null;case 22:case 23:return tt(n),wu(),e!==null&&k(Qt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return et(Ye),null;case 25:return null;default:return null}}function ad(e,n){switch(Eu(n),n.tag){case 3:et(Ye),kn();break;case 26:case 27:case 5:sr(n);break;case 4:kn();break;case 13:tt(n);break;case 19:k(Ie);break;case 10:et(n.type);break;case 22:case 23:tt(n),wu(),e!==null&&k(Qt);break;case 24:et(Ye)}}function La(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var a=r.next;t=a;do{if((t.tag&e)===e){r=void 0;var i=t.create,s=t.inst;r=i(),s.destroy=r}t=t.next}while(t!==a)}}catch(f){De(n,n.return,f)}}function Et(e,n,t){try{var r=n.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var i=a.next;r=i;do{if((r.tag&e)===e){var s=r.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,a=n;var v=t,N=f;try{N()}catch(H){De(a,v,H)}}}r=r.next}while(r!==i)}}catch(H){De(n,n.return,H)}}function id(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Xo(n,t)}catch(r){De(e,e.return,r)}}}function ld(e,n,t){t.props=Jt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){De(e,n,r)}}function Ua(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(a){De(e,n,a)}}function Vn(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(a){De(e,n,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){De(e,n,a)}else t.current=null}function ud(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(a){De(e,e.return,a)}}function sc(e,n,t){try{var r=e.stateNode;Dh(r,e.type,t,n),r[rn]=n}catch(a){De(e,e.return,a)}}function cd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dt(e.type)||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=sl));else if(r!==4&&(r===27&&Dt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(fc(e,n,t),e=e.sibling;e!==null;)fc(e,n,t),e=e.sibling}function Fi(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&Dt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Fi(e,n,t),e=e.sibling;e!==null;)Fi(e,n,t),e=e.sibling}function sd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Ze(n,r,t),n[Fe]=e,n[rn]=t}catch(i){De(e,e.return,i)}}var it=!1,ze=!1,dc=!1,od=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function sh(e,n){if(e=e.containerInfo,Bc=ml,e=So(e),ou(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var s=0,f=-1,v=-1,N=0,H=0,B=e,x=null;n:for(;;){for(var D;B!==t||a!==0&&B.nodeType!==3||(f=s+a),B!==i||r!==0&&B.nodeType!==3||(v=s+r),B.nodeType===3&&(s+=B.nodeValue.length),(D=B.firstChild)!==null;)x=B,B=D;for(;;){if(B===e)break n;if(x===t&&++N===a&&(f=s),x===i&&++H===r&&(v=s),(D=B.nextSibling)!==null)break;B=x,x=B.parentNode}B=D}t=f===-1||v===-1?null:{start:f,end:v}}else t=null}t=t||{start:0,end:0}}else t=null;for(jc={focusedElem:e,selectionRange:t},ml=!1,Ke=n;Ke!==null;)if(n=Ke,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ke=e;else for(;Ke!==null;){switch(n=Ke,i=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,a=i.memoizedProps,i=i.memoizedState,r=t.stateNode;try{var le=Jt(t.type,a,t.elementType===t.type);e=r.getSnapshotBeforeUpdate(le,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(re){De(t,t.return,re)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)kc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,Ke=e;break}Ke=n.return}}function fd(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t),r&4&&La(5,t);break;case 1:if(At(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){De(t,t.return,s)}else{var a=Jt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(a,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){De(t,t.return,s)}}r&64&&id(t),r&512&&Ua(t,t.return);break;case 3:if(At(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Xo(e,n)}catch(s){De(t,t.return,s)}}break;case 27:n===null&&r&4&&sd(t);case 26:case 5:At(e,t),n===null&&r&4&&ud(t),r&512&&Ua(t,t.return);break;case 12:At(e,t);break;case 13:At(e,t),r&4&&pd(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=vh.bind(null,t),Bh(e,t))));break;case 22:if(r=t.memoizedState!==null||it,!r){n=n!==null&&n.memoizedState!==null||ze,a=it;var i=ze;it=r,(ze=n)&&!i?Tt(e,t,(t.subtreeFlags&8772)!==0):At(e,t),it=a,ze=i}break;case 30:break;default:At(e,t)}}function dd(e){var n=e.alternate;n!==null&&(e.alternate=null,dd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,un=!1;function lt(e,n,t){for(t=t.child;t!==null;)bd(e,n,t),t=t.sibling}function bd(e,n,t){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(na,t)}catch{}switch(t.tag){case 26:ze||Vn(t,n),lt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ze||Vn(t,n);var r=Le,a=un;Dt(t.type)&&(Le=t.stateNode,un=!1),lt(e,n,t),Ia(t.stateNode),Le=r,un=a;break;case 5:ze||Vn(t,n);case 6:if(r=Le,a=un,Le=null,lt(e,n,t),Le=r,un=a,Le!==null)if(un)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(t.stateNode)}catch(i){De(t,n,i)}else try{Le.removeChild(t.stateNode)}catch(i){De(t,n,i)}break;case 18:Le!==null&&(un?(e=Le,nb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ja(e)):nb(Le,t.stateNode));break;case 4:r=Le,a=un,Le=t.stateNode.containerInfo,un=!0,lt(e,n,t),Le=r,un=a;break;case 0:case 11:case 14:case 15:ze||Et(2,t,n),ze||Et(4,t,n),lt(e,n,t);break;case 1:ze||(Vn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&ld(t,n,r)),lt(e,n,t);break;case 21:lt(e,n,t);break;case 22:ze=(r=ze)||t.memoizedState!==null,lt(e,n,t),ze=r;break;default:lt(e,n,t)}}function pd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ja(e)}catch(t){De(n,n.return,t)}}function oh(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new od),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new od),n;default:throw Error(c(435,e.tag))}}function bc(e,n){var t=oh(e);n.forEach(function(r){var a=gh.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}function hn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r],i=e,s=n,f=s;e:for(;f!==null;){switch(f.tag){case 27:if(Dt(f.type)){Le=f.stateNode,un=!1;break e}break;case 5:Le=f.stateNode,un=!1;break e;case 3:case 4:Le=f.stateNode.containerInfo,un=!0;break e}f=f.return}if(Le===null)throw Error(c(160));bd(i,s,a),Le=null,un=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)hd(n,e),n=n.sibling}var Bn=null;function hd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(n,e),mn(e),r&4&&(Et(3,e,e.return),La(3,e),Et(5,e,e.return));break;case 1:hn(n,e),mn(e),r&512&&(ze||t===null||Vn(t,t.return)),r&64&&it&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var a=Bn;if(hn(n,e),mn(e),r&512&&(ze||t===null||Vn(t,t.return)),r&4){var i=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,a=a.ownerDocument||a;n:switch(r){case"title":i=a.getElementsByTagName("title")[0],(!i||i[aa]||i[Fe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),Ze(i,r,t),i[Fe]=e,Ve(i),r=i;break e;case"link":var s=sb("link","href",a).get(r+(t.href||""));if(s){for(var f=0;f<s.length;f++)if(i=s[f],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(f,1);break n}}i=a.createElement(r),Ze(i,r,t),a.head.appendChild(i);break;case"meta":if(s=sb("meta","content",a).get(r+(t.content||""))){for(f=0;f<s.length;f++)if(i=s[f],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(f,1);break n}}i=a.createElement(r),Ze(i,r,t),a.head.appendChild(i);break;default:throw Error(c(468,r))}i[Fe]=e,Ve(i),r=i}e.stateNode=r}else ob(a,e.type,e.stateNode);else e.stateNode=cb(a,r,e.memoizedProps);else i!==r?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,r===null?ob(a,e.type,e.stateNode):cb(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&sc(e,e.memoizedProps,t.memoizedProps)}break;case 27:hn(n,e),mn(e),r&512&&(ze||t===null||Vn(t,t.return)),t!==null&&r&4&&sc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(hn(n,e),mn(e),r&512&&(ze||t===null||Vn(t,t.return)),e.flags&32){a=e.stateNode;try{vr(a,"")}catch(D){De(e,e.return,D)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,sc(e,a,t!==null?t.memoizedProps:a)),r&1024&&(dc=!0);break;case 6:if(hn(n,e),mn(e),r&4){if(e.stateNode===null)throw Error(c(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(D){De(e,e.return,D)}}break;case 3:if(bl=null,a=Bn,Bn=fl(n.containerInfo),hn(n,e),Bn=a,mn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ja(n.containerInfo)}catch(D){De(e,e.return,D)}dc&&(dc=!1,md(e));break;case 4:r=Bn,Bn=fl(e.stateNode.containerInfo),hn(n,e),mn(e),Bn=r;break;case 12:hn(n,e),mn(e);break;case 13:hn(n,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(gc=Un()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,bc(e,r)));break;case 22:a=e.memoizedState!==null;var v=t!==null&&t.memoizedState!==null,N=it,H=ze;if(it=N||a,ze=H||v,hn(n,e),ze=H,it=N,mn(e),r&8192)e:for(n=e.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(t===null||v||it||ze||Ft(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){v=t=n;try{if(i=v.stateNode,a)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=v.stateNode;var B=v.memoizedProps.style,x=B!=null&&B.hasOwnProperty("display")?B.display:null;f.style.display=x==null||typeof x=="boolean"?"":(""+x).trim()}}catch(D){De(v,v.return,D)}}}else if(n.tag===6){if(t===null){v=n;try{v.stateNode.nodeValue=a?"":v.memoizedProps}catch(D){De(v,v.return,D)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,bc(e,t))));break;case 19:hn(n,e),mn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,bc(e,r)));break;case 30:break;case 21:break;default:hn(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(cd(r)){t=r;break}r=r.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var a=t.stateNode,i=oc(e);Fi(e,i,a);break;case 5:var s=t.stateNode;t.flags&32&&(vr(s,""),t.flags&=-33);var f=oc(e);Fi(e,f,s);break;case 3:case 4:var v=t.stateNode.containerInfo,N=oc(e);fc(e,N,v);break;default:throw Error(c(161))}}catch(H){De(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;md(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function At(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fd(e,n.alternate,n),n=n.sibling}function Ft(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Et(4,n,n.return),Ft(n);break;case 1:Vn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&ld(n,n.return,t),Ft(n);break;case 27:Ia(n.stateNode);case 26:case 5:Vn(n,n.return),Ft(n);break;case 22:n.memoizedState===null&&Ft(n);break;case 30:Ft(n);break;default:Ft(n)}e=e.sibling}}function Tt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,a=e,i=n,s=i.flags;switch(i.tag){case 0:case 11:case 15:Tt(a,i,t),La(4,i);break;case 1:if(Tt(a,i,t),r=i,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(N){De(r,r.return,N)}if(r=i,a=r.updateQueue,a!==null){var f=r.stateNode;try{var v=a.shared.hiddenCallbacks;if(v!==null)for(a.shared.hiddenCallbacks=null,a=0;a<v.length;a++)Vo(v[a],f)}catch(N){De(r,r.return,N)}}t&&s&64&&id(i),Ua(i,i.return);break;case 27:sd(i);case 26:case 5:Tt(a,i,t),t&&r===null&&s&4&&ud(i),Ua(i,i.return);break;case 12:Tt(a,i,t);break;case 13:Tt(a,i,t),t&&s&4&&pd(a,i);break;case 22:i.memoizedState===null&&Tt(a,i,t),Ua(i,i.return);break;case 30:break;default:Tt(a,i,t)}n=n.sibling}}function pc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ga(t))}function hc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ga(e))}function Xn(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)yd(e,n,t,r),n=n.sibling}function yd(e,n,t,r){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Xn(e,n,t,r),a&2048&&La(9,n);break;case 1:Xn(e,n,t,r);break;case 3:Xn(e,n,t,r),a&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ga(e)));break;case 12:if(a&2048){Xn(e,n,t,r),e=n.stateNode;try{var i=n.memoizedProps,s=i.id,f=i.onPostCommit;typeof f=="function"&&f(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(v){De(n,n.return,v)}}else Xn(e,n,t,r);break;case 13:Xn(e,n,t,r);break;case 23:break;case 22:i=n.stateNode,s=n.alternate,n.memoizedState!==null?i._visibility&2?Xn(e,n,t,r):wa(e,n):i._visibility&2?Xn(e,n,t,r):(i._visibility|=2,jr(e,n,t,r,(n.subtreeFlags&10256)!==0)),a&2048&&pc(s,n);break;case 24:Xn(e,n,t,r),a&2048&&hc(n.alternate,n);break;default:Xn(e,n,t,r)}}function jr(e,n,t,r,a){for(a=a&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=e,s=n,f=t,v=r,N=s.flags;switch(s.tag){case 0:case 11:case 15:jr(i,s,f,v,a),La(8,s);break;case 23:break;case 22:var H=s.stateNode;s.memoizedState!==null?H._visibility&2?jr(i,s,f,v,a):wa(i,s):(H._visibility|=2,jr(i,s,f,v,a)),a&&N&2048&&pc(s.alternate,s);break;case 24:jr(i,s,f,v,a),a&&N&2048&&hc(s.alternate,s);break;default:jr(i,s,f,v,a)}n=n.sibling}}function wa(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,a=r.flags;switch(r.tag){case 22:wa(t,r),a&2048&&pc(r.alternate,r);break;case 24:wa(t,r),a&2048&&hc(r.alternate,r);break;default:wa(t,r)}n=n.sibling}}var Ba=8192;function zr(e){if(e.subtreeFlags&Ba)for(e=e.child;e!==null;)vd(e),e=e.sibling}function vd(e){switch(e.tag){case 26:zr(e),e.flags&Ba&&e.memoizedState!==null&&Qh(Bn,e.memoizedState,e.memoizedProps);break;case 5:zr(e);break;case 3:case 4:var n=Bn;Bn=fl(e.stateNode.containerInfo),zr(e),Bn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ba,Ba=16777216,zr(e),Ba=n):zr(e));break;default:zr(e)}}function gd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ja(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Ke=r,Ed(r,e)}gd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sd(e),e=e.sibling}function Sd(e){switch(e.tag){case 0:case 11:case 15:ja(e),e.flags&2048&&Et(9,e,e.return);break;case 3:ja(e);break;case 12:ja(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,$i(e)):ja(e);break;default:ja(e)}}function $i(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Ke=r,Ed(r,e)}gd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Et(8,n,n.return),$i(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,$i(n));break;default:$i(n)}e=e.sibling}}function Ed(e,n){for(;Ke!==null;){var t=Ke;switch(t.tag){case 0:case 11:case 15:Et(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Ke=r;else e:for(t=e;Ke!==null;){r=Ke;var a=r.sibling,i=r.return;if(dd(r),r===t){Ke=null;break e}if(a!==null){a.return=i,Ke=a;break e}Ke=i}}}var fh={getCacheForType:function(e){var n=$e(Ye),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},dh=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Me=null,me=null,ve=0,Te=0,yn=null,Rt=!1,Gr=!1,mc=!1,ut=0,Be=0,_t=0,$t=0,yc=0,Dn=0,kr=0,za=null,cn=null,vc=!1,gc=0,el=1/0,nl=null,Ot=null,Qe=0,Nt=null,qr=null,Yr=0,Sc=0,Ec=null,Ad=null,Ga=0,Ac=null;function vn(){if((Ae&2)!==0&&ve!==0)return ve&-ve;if(M.T!==null){var e=Dr;return e!==0?e:Dc()}return Bs()}function Td(){Dn===0&&(Dn=(ve&536870912)===0||Ee?Hs():536870912);var e=xn.current;return e!==null&&(e.flags|=32),Dn}function gn(e,n,t){(e===Me&&(Te===2||Te===9)||e.cancelPendingCommit!==null)&&(Ir(e,0),xt(e,ve,Dn,!1)),ra(e,t),((Ae&2)===0||e!==Me)&&(e===Me&&((Ae&2)===0&&($t|=t),Be===4&&xt(e,ve,Dn,!1)),Kn(e))}function Rd(e,n,t){if((Ae&6)!==0)throw Error(c(327));var r=!t&&(n&124)===0&&(n&e.expiredLanes)===0||ta(e,n),a=r?hh(e,n):_c(e,n,!0),i=r;do{if(a===0){Gr&&!r&&xt(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!bh(t)){a=_c(e,n,!1),i=!1;continue}if(a===2){if(i=n,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var f=e;a=za;var v=f.current.memoizedState.isDehydrated;if(v&&(Ir(f,s).flags|=256),s=_c(f,s,!1),s!==2){if(mc&&!v){f.errorRecoveryDisabledLanes|=i,$t|=i,a=4;break e}i=cn,cn=a,i!==null&&(cn===null?cn=i:cn.push.apply(cn,i))}a=s}if(i=!1,a!==2)continue}}if(a===1){Ir(e,0),xt(e,n,0,!0);break}e:{switch(r=e,i=a,i){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:xt(r,n,Dn,!Rt);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(a=gc+300-Un(),10<a)){if(xt(r,n,Dn,!Rt),di(r,0,!0)!==0)break e;r.timeoutHandle=$d(_d.bind(null,r,t,cn,nl,vc,n,Dn,$t,kr,Rt,i,2,-0,0),a);break e}_d(r,t,cn,nl,vc,n,Dn,$t,kr,Rt,i,0,-0,0)}}break}while(!0);Kn(e)}function _d(e,n,t,r,a,i,s,f,v,N,H,B,x,D){if(e.timeoutHandle=-1,B=n.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(Ka={stylesheets:null,count:0,unsuspend:Ph},vd(n),B=Zh(),B!==null)){e.cancelPendingCommit=B(Hd.bind(null,e,n,i,t,r,a,s,f,v,H,1,x,D)),xt(e,i,s,!N);return}Hd(e,n,i,t,r,a,s,f,v)}function bh(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!bn(i(),a))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function xt(e,n,t,r){n&=~yc,n&=~$t,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var a=n;0<a;){var i=31-dn(a),s=1<<i;r[i]=-1,a&=~s}t!==0&&Us(e,t,n)}function tl(){return(Ae&6)===0?(ka(0),!1):!0}function Tc(){if(me!==null){if(Te===0)var e=me.return;else e=me,$n=Wt=null,ku(e),wr=null,Ca=0,e=me;for(;e!==null;)ad(e.alternate,e),e=e.return;me=null}}function Ir(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Mh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Tc(),Me=e,me=t=Zn(e.current,null),ve=n,Te=0,yn=null,Rt=!1,Gr=ta(e,n),mc=!1,kr=Dn=yc=$t=_t=Be=0,cn=za=null,vc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var a=31-dn(r),i=1<<a;n|=e[a],r&=~i}return ut=n,Ri(),t}function Od(e,n){fe=null,M.H=Ii,n===Ea||n===Li?(n=Yo(),Te=3):n===Go?(n=Yo(),Te=4):Te=n===Vf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yn=n,me===null&&(Be=1,Pi(e,Rn(n,e.current)))}function Nd(){var e=M.H;return M.H=Ii,e===null?Ii:e}function xd(){var e=M.A;return M.A=fh,e}function Rc(){Be=4,Rt||(ve&4194048)!==ve&&xn.current!==null||(Gr=!0),(_t&134217727)===0&&($t&134217727)===0||Me===null||xt(Me,ve,Dn,!1)}function _c(e,n,t){var r=Ae;Ae|=2;var a=Nd(),i=xd();(Me!==e||ve!==n)&&(nl=null,Ir(e,n)),n=!1;var s=Be;e:do try{if(Te!==0&&me!==null){var f=me,v=yn;switch(Te){case 8:Tc(),s=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(n=!0);var N=Te;if(Te=0,yn=null,Vr(e,f,v,N),t&&Gr){s=0;break e}break;default:N=Te,Te=0,yn=null,Vr(e,f,v,N)}}ph(),s=Be;break}catch(H){Od(e,H)}while(!0);return n&&e.shellSuspendCounter++,$n=Wt=null,Ae=r,M.H=a,M.A=i,me===null&&(Me=null,ve=0,Ri()),s}function ph(){for(;me!==null;)Dd(me)}function hh(e,n){var t=Ae;Ae|=2;var r=Nd(),a=xd();Me!==e||ve!==n?(nl=null,el=Un()+500,Ir(e,n)):Gr=ta(e,n);e:do try{if(Te!==0&&me!==null){n=me;var i=yn;n:switch(Te){case 1:Te=0,yn=null,Vr(e,n,i,1);break;case 2:case 9:if(ko(i)){Te=0,yn=null,Cd(n);break}n=function(){Te!==2&&Te!==9||Me!==e||(Te=7),Kn(e)},i.then(n,n);break e;case 3:Te=7;break e;case 4:Te=5;break e;case 7:ko(i)?(Te=0,yn=null,Cd(n)):(Te=0,yn=null,Vr(e,n,i,7));break;case 5:var s=null;switch(me.tag){case 26:s=me.memoizedState;case 5:case 27:var f=me;if(!s||fb(s)){Te=0,yn=null;var v=f.sibling;if(v!==null)me=v;else{var N=f.return;N!==null?(me=N,rl(N)):me=null}break n}}Te=0,yn=null,Vr(e,n,i,5);break;case 6:Te=0,yn=null,Vr(e,n,i,6);break;case 8:Tc(),Be=6;break e;default:throw Error(c(462))}}mh();break}catch(H){Od(e,H)}while(!0);return $n=Wt=null,M.H=r,M.A=a,Ae=t,me!==null?0:(Me=null,ve=0,Ri(),Be)}function mh(){for(;me!==null&&!qn();)Dd(me)}function Dd(e){var n=td(e.alternate,e,ut);e.memoizedProps=e.pendingProps,n===null?rl(e):me=n}function Cd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Zf(t,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Zf(t,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:ku(n);default:ad(t,n),n=me=Co(n,ut),n=td(t,n,ut)}e.memoizedProps=e.pendingProps,n===null?rl(e):me=n}function Vr(e,n,t,r){$n=Wt=null,ku(n),wr=null,Ca=0;var a=n.return;try{if(ih(e,a,n,t,ve)){Be=1,Pi(e,Rn(t,e.current)),me=null;return}}catch(i){if(a!==null)throw me=a,i;Be=1,Pi(e,Rn(t,e.current)),me=null;return}n.flags&32768?(Ee||r===1?e=!0:Gr||(ve&536870912)!==0?e=!1:(Rt=e=!0,(r===2||r===9||r===3||r===6)&&(r=xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Md(n,e)):rl(n)}function rl(e){var n=e;do{if((n.flags&32768)!==0){Md(n,Rt);return}e=n.return;var t=uh(n.alternate,n,ut);if(t!==null){me=t;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);Be===0&&(Be=5)}function Md(e,n){do{var t=ch(e.alternate,e);if(t!==null){t.flags&=32767,me=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=t}while(e!==null);Be=6,me=null}function Hd(e,n,t,r,a,i,s,f,v){e.cancelPendingCommit=null;do al();while(Qe!==0);if((Ae&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(i=n.lanes|n.childLanes,i|=hu,P0(e,t,i,s,f,v),e===Me&&(me=Me=null,ve=0),qr=n,Nt=e,Yr=t,Sc=i,Ec=a,Ad=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sh(si,function(){return jd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=M.T,M.T=null,a=I.p,I.p=2,s=Ae,Ae|=4;try{sh(e,n,t)}finally{Ae=s,I.p=a,M.T=r}}Qe=1,Ld(),Ud(),wd()}}function Ld(){if(Qe===1){Qe=0;var e=Nt,n=qr,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var r=I.p;I.p=2;var a=Ae;Ae|=4;try{hd(n,e);var i=jc,s=So(e.containerInfo),f=i.focusedElem,v=i.selectionRange;if(s!==f&&f&&f.ownerDocument&&go(f.ownerDocument.documentElement,f)){if(v!==null&&ou(f)){var N=v.start,H=v.end;if(H===void 0&&(H=N),"selectionStart"in f)f.selectionStart=N,f.selectionEnd=Math.min(H,f.value.length);else{var B=f.ownerDocument||document,x=B&&B.defaultView||window;if(x.getSelection){var D=x.getSelection(),le=f.textContent.length,re=Math.min(v.start,le),Oe=v.end===void 0?re:Math.min(v.end,le);!D.extend&&re>Oe&&(s=Oe,Oe=re,re=s);var R=vo(f,re),T=vo(f,Oe);if(R&&T&&(D.rangeCount!==1||D.anchorNode!==R.node||D.anchorOffset!==R.offset||D.focusNode!==T.node||D.focusOffset!==T.offset)){var _=B.createRange();_.setStart(R.node,R.offset),D.removeAllRanges(),re>Oe?(D.addRange(_),D.extend(T.node,T.offset)):(_.setEnd(T.node,T.offset),D.addRange(_))}}}}for(B=[],D=f;D=D.parentNode;)D.nodeType===1&&B.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<B.length;f++){var w=B[f];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}ml=!!Bc,jc=Bc=null}finally{Ae=a,I.p=r,M.T=t}}e.current=n,Qe=2}}function Ud(){if(Qe===2){Qe=0;var e=Nt,n=qr,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var r=I.p;I.p=2;var a=Ae;Ae|=4;try{fd(e,n.alternate,n)}finally{Ae=a,I.p=r,M.T=t}}Qe=3}}function wd(){if(Qe===4||Qe===3){Qe=0,kl();var e=Nt,n=qr,t=Yr,r=Ad;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Qe=5:(Qe=0,qr=Nt=null,Bd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ot=null),Il(t),n=n.stateNode,fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(na,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=M.T,a=I.p,I.p=2,M.T=null;try{for(var i=e.onRecoverableError,s=0;s<r.length;s++){var f=r[s];i(f.value,{componentStack:f.stack})}}finally{M.T=n,I.p=a}}(Yr&3)!==0&&al(),Kn(e),a=e.pendingLanes,(t&4194090)!==0&&(a&42)!==0?e===Ac?Ga++:(Ga=0,Ac=e):Ga=0,ka(0)}}function Bd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ga(n)))}function al(e){return Ld(),Ud(),wd(),jd()}function jd(){if(Qe!==5)return!1;var e=Nt,n=Sc;Sc=0;var t=Il(Yr),r=M.T,a=I.p;try{I.p=32>t?32:t,M.T=null,t=Ec,Ec=null;var i=Nt,s=Yr;if(Qe=0,qr=Nt=null,Yr=0,(Ae&6)!==0)throw Error(c(331));var f=Ae;if(Ae|=4,Sd(i.current),yd(i,i.current,s,t),Ae=f,ka(0,!1),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(na,i)}catch{}return!0}finally{I.p=a,M.T=r,Bd(e,n)}}function zd(e,n,t){n=Rn(t,n),n=ec(e.stateNode,n,2),e=yt(e,n,2),e!==null&&(ra(e,2),Kn(e))}function De(e,n,t){if(e.tag===3)zd(e,e,t);else for(;n!==null;){if(n.tag===3){zd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Rn(t,e),t=Yf(2),r=yt(n,t,2),r!==null&&(If(t,r,n,e),ra(r,2),Kn(r));break}}n=n.return}}function Oc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new dh;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(mc=!0,a.add(t),e=yh.bind(null,e,n,t),n.then(e,e))}function yh(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Me===e&&(ve&t)===t&&(Be===4||Be===3&&(ve&62914560)===ve&&300>Un()-gc?(Ae&2)===0&&Ir(e,0):yc|=t,kr===ve&&(kr=0)),Kn(e)}function Gd(e,n){n===0&&(n=Ls()),e=_r(e,n),e!==null&&(ra(e,n),Kn(e))}function vh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gd(e,t)}function gh(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(n),Gd(e,t)}function Sh(e,n){return He(e,n)}var il=null,Xr=null,Nc=!1,ll=!1,xc=!1,er=0;function Kn(e){e!==Xr&&e.next===null&&(Xr===null?il=Xr=e:Xr=Xr.next=e),ll=!0,Nc||(Nc=!0,Ah())}function ka(e,n){if(!xc&&ll){xc=!0;do for(var t=!1,r=il;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var i=0;else{var s=r.suspendedLanes,f=r.pingedLanes;i=(1<<31-dn(42|e)+1)-1,i&=a&~(s&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Id(r,i))}else i=ve,i=di(r,r===Me?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||ta(r,i)||(t=!0,Id(r,i));r=r.next}while(t);xc=!1}}function Eh(){kd()}function kd(){ll=Nc=!1;var e=0;er!==0&&(Ch()&&(e=er),er=0);for(var n=Un(),t=null,r=il;r!==null;){var a=r.next,i=qd(r,n);i===0?(r.next=null,t===null?il=a:t.next=a,a===null&&(Xr=t)):(t=r,(e!==0||(i&3)!==0)&&(ll=!0)),r=a}ka(e)}function qd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-dn(i),f=1<<s,v=a[s];v===-1?((f&t)===0||(f&r)!==0)&&(a[s]=W0(f,n)):v<=n&&(e.expiredLanes|=f),i&=~f}if(n=Me,t=ve,t=di(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(Te===2||Te===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&on(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ta(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&on(r),Il(t)){case 2:case 8:t=Cs;break;case 32:t=si;break;case 268435456:t=Ms;break;default:t=si}return r=Yd.bind(null,e),t=He(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&on(r),e.callbackPriority=2,e.callbackNode=null,2}function Yd(e,n){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(al()&&e.callbackNode!==t)return null;var r=ve;return r=di(e,e===Me?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Rd(e,r,n),qd(e,Un()),e.callbackNode!=null&&e.callbackNode===t?Yd.bind(null,e):null)}function Id(e,n){if(al())return null;Rd(e,n,!0)}function Ah(){Hh(function(){(Ae&6)!==0?He(Bt,Eh):kd()})}function Dc(){return er===0&&(er=Hs()),er}function Vd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:yi(""+e)}function Xd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Th(e,n,t,r,a){if(n==="submit"&&t&&t.stateNode===a){var i=Vd((a[rn]||null).action),s=r.submitter;s&&(n=(n=s[rn]||null)?Vd(n.formAction):s.getAttribute("formAction"),n!==null&&(i=n,s=null));var f=new Ei("action","action",null,r,a);e.push({event:f,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(er!==0){var v=s?Xd(a,s):new FormData(a);Qu(t,{pending:!0,data:v,method:a.method,action:i},null,v)}}else typeof i=="function"&&(f.preventDefault(),v=s?Xd(a,s):new FormData(a),Qu(t,{pending:!0,data:v,method:a.method,action:i},i,v))},currentTarget:a}]})}}for(var Cc=0;Cc<pu.length;Cc++){var Mc=pu[Cc],Rh=Mc.toLowerCase(),_h=Mc[0].toUpperCase()+Mc.slice(1);wn(Rh,"on"+_h)}wn(To,"onAnimationEnd"),wn(Ro,"onAnimationIteration"),wn(_o,"onAnimationStart"),wn("dblclick","onDoubleClick"),wn("focusin","onFocus"),wn("focusout","onBlur"),wn(Yp,"onTransitionRun"),wn(Ip,"onTransitionStart"),wn(Vp,"onTransitionCancel"),wn(Oo,"onTransitionEnd"),hr("onMouseEnter",["mouseout","mouseover"]),hr("onMouseLeave",["mouseout","mouseover"]),hr("onPointerEnter",["pointerout","pointerover"]),hr("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa));function Kd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var s=r.length-1;0<=s;s--){var f=r[s],v=f.instance,N=f.currentTarget;if(f=f.listener,v!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=N;try{i(a)}catch(H){Wi(H)}a.currentTarget=null,i=v}else for(s=0;s<r.length;s++){if(f=r[s],v=f.instance,N=f.currentTarget,f=f.listener,v!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=N;try{i(a)}catch(H){Wi(H)}a.currentTarget=null,i=v}}}}function ye(e,n){var t=n[Vl];t===void 0&&(t=n[Vl]=new Set);var r=e+"__bubble";t.has(r)||(Wd(n,e,2,!1),t.add(r))}function Hc(e,n,t){var r=0;n&&(r|=4),Wd(t,e,r,n)}var ul="_reactListening"+Math.random().toString(36).slice(2);function Lc(e){if(!e[ul]){e[ul]=!0,zs.forEach(function(t){t!=="selectionchange"&&(Oh.has(t)||Hc(t,!1,e),Hc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ul]||(n[ul]=!0,Hc("selectionchange",!1,n))}}function Wd(e,n,t,r){switch(yb(n)){case 2:var a=$h;break;case 8:a=em;break;default:a=Wc}t=a.bind(null,n,t,e),a=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Uc(e,n,t,r,a){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var f=r.stateNode.containerInfo;if(f===a)break;if(s===4)for(s=r.return;s!==null;){var v=s.tag;if((v===3||v===4)&&s.stateNode.containerInfo===a)return;s=s.return}for(;f!==null;){if(s=dr(f),s===null)return;if(v=s.tag,v===5||v===6||v===26||v===27){r=i=s;continue e}f=f.parentNode}}r=r.return}Fs(function(){var N=i,H=$l(t),B=[];e:{var x=No.get(e);if(x!==void 0){var D=Ei,le=e;switch(e){case"keypress":if(gi(t)===0)break e;case"keydown":case"keyup":D=Sp;break;case"focusin":le="focus",D=iu;break;case"focusout":le="blur",D=iu;break;case"beforeblur":case"afterblur":D=iu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=cp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Tp;break;case To:case Ro:case _o:D=fp;break;case Oo:D=_p;break;case"scroll":case"scrollend":D=lp;break;case"wheel":D=Np;break;case"copy":case"cut":case"paste":D=bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=ro;break;case"toggle":case"beforetoggle":D=Dp}var re=(n&4)!==0,Oe=!re&&(e==="scroll"||e==="scrollend"),R=re?x!==null?x+"Capture":null:x;re=[];for(var T=N,_;T!==null;){var w=T;if(_=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||_===null||R===null||(w=la(T,R),w!=null&&re.push(Ya(T,w,_))),Oe)break;T=T.return}0<re.length&&(x=new D(x,le,null,t,H),B.push({event:x,listeners:re}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",x&&t!==Fl&&(le=t.relatedTarget||t.fromElement)&&(dr(le)||le[fr]))break e;if((D||x)&&(x=H.window===H?H:(x=H.ownerDocument)?x.defaultView||x.parentWindow:window,D?(le=t.relatedTarget||t.toElement,D=N,le=le?dr(le):null,le!==null&&(Oe=h(le),re=le.tag,le!==Oe||re!==5&&re!==27&&re!==6)&&(le=null)):(D=null,le=N),D!==le)){if(re=no,w="onMouseLeave",R="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(re=ro,w="onPointerLeave",R="onPointerEnter",T="pointer"),Oe=D==null?x:ia(D),_=le==null?x:ia(le),x=new re(w,T+"leave",D,t,H),x.target=Oe,x.relatedTarget=_,w=null,dr(H)===N&&(re=new re(R,T+"enter",le,t,H),re.target=_,re.relatedTarget=Oe,w=re),Oe=w,D&&le)n:{for(re=D,R=le,T=0,_=re;_;_=Kr(_))T++;for(_=0,w=R;w;w=Kr(w))_++;for(;0<T-_;)re=Kr(re),T--;for(;0<_-T;)R=Kr(R),_--;for(;T--;){if(re===R||R!==null&&re===R.alternate)break n;re=Kr(re),R=Kr(R)}re=null}else re=null;D!==null&&Pd(B,x,D,re,!1),le!==null&&Oe!==null&&Pd(B,Oe,le,re,!0)}}e:{if(x=N?ia(N):window,D=x.nodeName&&x.nodeName.toLowerCase(),D==="select"||D==="input"&&x.type==="file")var Z=fo;else if(so(x))if(bo)Z=Gp;else{Z=jp;var de=Bp}else D=x.nodeName,!D||D.toLowerCase()!=="input"||x.type!=="checkbox"&&x.type!=="radio"?N&&Jl(N.elementType)&&(Z=fo):Z=zp;if(Z&&(Z=Z(e,N))){oo(B,Z,t,H);break e}de&&de(e,x,N),e==="focusout"&&N&&x.type==="number"&&N.memoizedProps.value!=null&&Zl(x,"number",x.value)}switch(de=N?ia(N):window,e){case"focusin":(so(de)||de.contentEditable==="true")&&(Ar=de,fu=N,pa=null);break;case"focusout":pa=fu=Ar=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Eo(B,t,H);break;case"selectionchange":if(qp)break;case"keydown":case"keyup":Eo(B,t,H)}var ne;if(uu)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Er?uo(e,t)&&(ie="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ie="onCompositionStart");ie&&(ao&&t.locale!=="ko"&&(Er||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Er&&(ne=$s()):(bt=H,tu="value"in bt?bt.value:bt.textContent,Er=!0)),de=cl(N,ie),0<de.length&&(ie=new to(ie,e,null,t,H),B.push({event:ie,listeners:de}),ne?ie.data=ne:(ne=co(t),ne!==null&&(ie.data=ne)))),(ne=Mp?Hp(e,t):Lp(e,t))&&(ie=cl(N,"onBeforeInput"),0<ie.length&&(de=new to("onBeforeInput","beforeinput",null,t,H),B.push({event:de,listeners:ie}),de.data=ne)),Th(B,e,N,t,H)}Kd(B,n)})}function Ya(e,n,t){return{instance:e,listener:n,currentTarget:t}}function cl(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=la(e,t),a!=null&&r.unshift(Ya(e,a,i)),a=la(e,n),a!=null&&r.push(Ya(e,a,i))),e.tag===3)return r;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pd(e,n,t,r,a){for(var i=n._reactName,s=[];t!==null&&t!==r;){var f=t,v=f.alternate,N=f.stateNode;if(f=f.tag,v!==null&&v===r)break;f!==5&&f!==26&&f!==27||N===null||(v=N,a?(N=la(t,i),N!=null&&s.unshift(Ya(t,N,v))):a||(N=la(t,i),N!=null&&s.push(Ya(t,N,v)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Nh=/\r\n?/g,xh=/\u0000|\uFFFD/g;function Qd(e){return(typeof e=="string"?e:""+e).replace(Nh,`
`).replace(xh,"")}function Zd(e,n){return n=Qd(n),Qd(e)===n}function sl(){}function _e(e,n,t,r,a,i){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||vr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&vr(e,""+r);break;case"className":pi(e,"class",r);break;case"tabIndex":pi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,t,r);break;case"style":Zs(e,r,i);break;case"data":if(n!=="object"){pi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=yi(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&_e(e,n,"name",a.name,a,null),_e(e,n,"formEncType",a.formEncType,a,null),_e(e,n,"formMethod",a.formMethod,a,null),_e(e,n,"formTarget",a.formTarget,a,null)):(_e(e,n,"encType",a.encType,a,null),_e(e,n,"method",a.method,a,null),_e(e,n,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=yi(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=sl);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=yi(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":ye("beforetoggle",e),ye("toggle",e),bi(e,"popover",r);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":bi(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ap.get(t)||t,bi(e,t,r))}}function wc(e,n,t,r,a,i){switch(t){case"style":Zs(e,r,i);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof r=="string"?vr(e,r):(typeof r=="number"||typeof r=="bigint")&&vr(e,""+r);break;case"onScroll":r!=null&&ye("scroll",e);break;case"onScrollEnd":r!=null&&ye("scrollend",e);break;case"onClick":r!=null&&(e.onclick=sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Gs.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),n=t.slice(2,a?t.length-7:void 0),i=e[rn]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,a),typeof r=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,a);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):bi(e,t,r)}}}function Ze(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var r=!1,a=!1,i;for(i in t)if(t.hasOwnProperty(i)){var s=t[i];if(s!=null)switch(i){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:_e(e,n,i,s,t,null)}}a&&_e(e,n,"srcSet",t.srcSet,t,null),r&&_e(e,n,"src",t.src,t,null);return;case"input":ye("invalid",e);var f=i=s=a=null,v=null,N=null;for(r in t)if(t.hasOwnProperty(r)){var H=t[r];if(H!=null)switch(r){case"name":a=H;break;case"type":s=H;break;case"checked":v=H;break;case"defaultChecked":N=H;break;case"value":i=H;break;case"defaultValue":f=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,n));break;default:_e(e,n,r,H,t,null)}}Ks(e,i,f,v,N,s,a,!1),hi(e);return;case"select":ye("invalid",e),r=s=i=null;for(a in t)if(t.hasOwnProperty(a)&&(f=t[a],f!=null))switch(a){case"value":i=f;break;case"defaultValue":s=f;break;case"multiple":r=f;default:_e(e,n,a,f,t,null)}n=i,t=s,e.multiple=!!r,n!=null?yr(e,!!r,n,!1):t!=null&&yr(e,!!r,t,!0);return;case"textarea":ye("invalid",e),i=a=r=null;for(s in t)if(t.hasOwnProperty(s)&&(f=t[s],f!=null))switch(s){case"value":r=f;break;case"defaultValue":a=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:_e(e,n,s,f,t,null)}Ps(e,r,a,i),hi(e);return;case"option":for(v in t)if(t.hasOwnProperty(v)&&(r=t[v],r!=null))switch(v){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:_e(e,n,v,r,t,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(r=0;r<qa.length;r++)ye(qa[r],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in t)if(t.hasOwnProperty(N)&&(r=t[N],r!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:_e(e,n,N,r,t,null)}return;default:if(Jl(n)){for(H in t)t.hasOwnProperty(H)&&(r=t[H],r!==void 0&&wc(e,n,H,r,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(r=t[f],r!=null&&_e(e,n,f,r,t,null))}function Dh(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,s=null,f=null,v=null,N=null,H=null;for(D in t){var B=t[D];if(t.hasOwnProperty(D)&&B!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":v=B;default:r.hasOwnProperty(D)||_e(e,n,D,null,r,B)}}for(var x in r){var D=r[x];if(B=t[x],r.hasOwnProperty(x)&&(D!=null||B!=null))switch(x){case"type":i=D;break;case"name":a=D;break;case"checked":N=D;break;case"defaultChecked":H=D;break;case"value":s=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,n));break;default:D!==B&&_e(e,n,x,D,r,B)}}Ql(e,s,f,v,N,H,i,a);return;case"select":D=s=f=x=null;for(i in t)if(v=t[i],t.hasOwnProperty(i)&&v!=null)switch(i){case"value":break;case"multiple":D=v;default:r.hasOwnProperty(i)||_e(e,n,i,null,r,v)}for(a in r)if(i=r[a],v=t[a],r.hasOwnProperty(a)&&(i!=null||v!=null))switch(a){case"value":x=i;break;case"defaultValue":f=i;break;case"multiple":s=i;default:i!==v&&_e(e,n,a,i,r,v)}n=f,t=s,r=D,x!=null?yr(e,!!t,x,!1):!!r!=!!t&&(n!=null?yr(e,!!t,n,!0):yr(e,!!t,t?[]:"",!1));return;case"textarea":D=x=null;for(f in t)if(a=t[f],t.hasOwnProperty(f)&&a!=null&&!r.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:_e(e,n,f,null,r,a)}for(s in r)if(a=r[s],i=t[s],r.hasOwnProperty(s)&&(a!=null||i!=null))switch(s){case"value":x=a;break;case"defaultValue":D=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==i&&_e(e,n,s,a,r,i)}Ws(e,x,D);return;case"option":for(var le in t)if(x=t[le],t.hasOwnProperty(le)&&x!=null&&!r.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:_e(e,n,le,null,r,x)}for(v in r)if(x=r[v],D=t[v],r.hasOwnProperty(v)&&x!==D&&(x!=null||D!=null))switch(v){case"selected":e.selected=x&&typeof x!="function"&&typeof x!="symbol";break;default:_e(e,n,v,x,r,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var re in t)x=t[re],t.hasOwnProperty(re)&&x!=null&&!r.hasOwnProperty(re)&&_e(e,n,re,null,r,x);for(N in r)if(x=r[N],D=t[N],r.hasOwnProperty(N)&&x!==D&&(x!=null||D!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(c(137,n));break;default:_e(e,n,N,x,r,D)}return;default:if(Jl(n)){for(var Oe in t)x=t[Oe],t.hasOwnProperty(Oe)&&x!==void 0&&!r.hasOwnProperty(Oe)&&wc(e,n,Oe,void 0,r,x);for(H in r)x=r[H],D=t[H],!r.hasOwnProperty(H)||x===D||x===void 0&&D===void 0||wc(e,n,H,x,r,D);return}}for(var R in t)x=t[R],t.hasOwnProperty(R)&&x!=null&&!r.hasOwnProperty(R)&&_e(e,n,R,null,r,x);for(B in r)x=r[B],D=t[B],!r.hasOwnProperty(B)||x===D||x==null&&D==null||_e(e,n,B,x,r,D)}var Bc=null,jc=null;function ol(e){return e.nodeType===9?e:e.ownerDocument}function Jd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Fd(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gc=null;function Ch(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var $d=typeof setTimeout=="function"?setTimeout:void 0,Mh=typeof clearTimeout=="function"?clearTimeout:void 0,eb=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof eb<"u"?function(e){return eb.resolve(null).then(e).catch(Lh)}:$d;function Lh(e){setTimeout(function(){throw e})}function Dt(e){return e==="head"}function nb(e,n){var t=n,r=0,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(0<r&&8>r){t=r;var s=e.ownerDocument;if(t&1&&Ia(s.documentElement),t&2&&Ia(s.body),t&4)for(t=s.head,Ia(t),s=t.firstChild;s;){var f=s.nextSibling,v=s.nodeName;s[aa]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=f}}if(a===0){e.removeChild(i),Ja(n);return}a--}else t==="$"||t==="$?"||t==="$!"?a++:r=t.charCodeAt(0)-48;else r=0;t=i}while(t);Ja(n)}function kc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":kc(t),Xl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Uh(e,n,t,r){for(;e.nodeType===1;){var a=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function wh(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jn(e.nextSibling),e===null))return null;return e}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Bh(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Yc=null;function tb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function rb(e,n,t){switch(n=ol(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ia(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xl(e)}var Cn=new Map,ab=new Set;function fl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ct=I.d;I.d={f:jh,r:zh,D:Gh,C:kh,L:qh,m:Yh,X:Vh,S:Ih,M:Xh};function jh(){var e=ct.f(),n=tl();return e||n}function zh(e){var n=br(e);n!==null&&n.tag===5&&n.type==="form"?Rf(n):ct.r(e)}var Wr=typeof document>"u"?null:document;function ib(e,n,t){var r=Wr;if(r&&typeof n=="string"&&n){var a=Tn(n);a='link[rel="'+e+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),ab.has(a)||(ab.add(a),e={rel:e,crossOrigin:t,href:n},r.querySelector(a)===null&&(n=r.createElement("link"),Ze(n,"link",e),Ve(n),r.head.appendChild(n)))}}function Gh(e){ct.D(e),ib("dns-prefetch",e,null)}function kh(e,n){ct.C(e,n),ib("preconnect",e,n)}function qh(e,n,t){ct.L(e,n,t);var r=Wr;if(r&&e&&n){var a='link[rel="preload"][as="'+Tn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+Tn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+Tn(t.imageSizes)+'"]')):a+='[href="'+Tn(e)+'"]';var i=a;switch(n){case"style":i=Pr(e);break;case"script":i=Qr(e)}Cn.has(i)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Cn.set(i,e),r.querySelector(a)!==null||n==="style"&&r.querySelector(Va(i))||n==="script"&&r.querySelector(Xa(i))||(n=r.createElement("link"),Ze(n,"link",e),Ve(n),r.head.appendChild(n)))}}function Yh(e,n){ct.m(e,n);var t=Wr;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+Tn(r)+'"][href="'+Tn(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Qr(e)}if(!Cn.has(i)&&(e=E({rel:"modulepreload",href:e},n),Cn.set(i,e),t.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Xa(i)))return}r=t.createElement("link"),Ze(r,"link",e),Ve(r),t.head.appendChild(r)}}}function Ih(e,n,t){ct.S(e,n,t);var r=Wr;if(r&&e){var a=pr(r).hoistableStyles,i=Pr(e);n=n||"default";var s=a.get(i);if(!s){var f={loading:0,preload:null};if(s=r.querySelector(Va(i)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Cn.get(i))&&Ic(e,t);var v=s=r.createElement("link");Ve(v),Ze(v,"link",e),v._p=new Promise(function(N,H){v.onload=N,v.onerror=H}),v.addEventListener("load",function(){f.loading|=1}),v.addEventListener("error",function(){f.loading|=2}),f.loading|=4,dl(s,n,r)}s={type:"stylesheet",instance:s,count:1,state:f},a.set(i,s)}}}function Vh(e,n){ct.X(e,n);var t=Wr;if(t&&e){var r=pr(t).hoistableScripts,a=Qr(e),i=r.get(a);i||(i=t.querySelector(Xa(a)),i||(e=E({src:e,async:!0},n),(n=Cn.get(a))&&Vc(e,n),i=t.createElement("script"),Ve(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function Xh(e,n){ct.M(e,n);var t=Wr;if(t&&e){var r=pr(t).hoistableScripts,a=Qr(e),i=r.get(a);i||(i=t.querySelector(Xa(a)),i||(e=E({src:e,async:!0,type:"module"},n),(n=Cn.get(a))&&Vc(e,n),i=t.createElement("script"),Ve(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function lb(e,n,t,r){var a=(a=ae.current)?fl(a):null;if(!a)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Pr(t.href),t=pr(a).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Pr(t.href);var i=pr(a).hoistableStyles,s=i.get(e);if(s||(a=a.ownerDocument||a,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=a.querySelector(Va(e)))&&!i._p&&(s.instance=i,s.state.loading=5),Cn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Cn.set(e,t),i||Kh(a,e,t,s.state))),n&&r===null)throw Error(c(528,""));return s}if(n&&r!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(t),t=pr(a).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Pr(e){return'href="'+Tn(e)+'"'}function Va(e){return'link[rel="stylesheet"]['+e+"]"}function ub(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Kh(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Ze(n,"link",t),Ve(n),e.head.appendChild(n))}function Qr(e){return'[src="'+Tn(e)+'"]'}function Xa(e){return"script[async]"+e}function cb(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Tn(t.href)+'"]');if(r)return n.instance=r,Ve(r),r;var a=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ve(r),Ze(r,"style",a),dl(r,t.precedence,e),n.instance=r;case"stylesheet":a=Pr(t.href);var i=e.querySelector(Va(a));if(i)return n.state.loading|=4,n.instance=i,Ve(i),i;r=ub(t),(a=Cn.get(a))&&Ic(r,a),i=(e.ownerDocument||e).createElement("link"),Ve(i);var s=i;return s._p=new Promise(function(f,v){s.onload=f,s.onerror=v}),Ze(i,"link",r),n.state.loading|=4,dl(i,t.precedence,e),n.instance=i;case"script":return i=Qr(t.src),(a=e.querySelector(Xa(i)))?(n.instance=a,Ve(a),a):(r=t,(a=Cn.get(i))&&(r=E({},t),Vc(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ve(a),Ze(a,"link",r),e.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,dl(r,t.precedence,e));return n.instance}function dl(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,s=0;s<r.length;s++){var f=r[s];if(f.dataset.precedence===n)i=f;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Ic(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var bl=null;function sb(e,n,t){if(bl===null){var r=new Map,a=bl=new Map;a.set(t,r)}else a=bl,r=a.get(t),r||(r=new Map,a.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),a=0;a<t.length;a++){var i=t[a];if(!(i[aa]||i[Fe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(n)||"";s=e+s;var f=r.get(s);f?f.push(i):r.set(s,[i])}}return r}function ob(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Wh(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function fb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ka=null;function Ph(){}function Qh(e,n,t){if(Ka===null)throw Error(c(475));var r=Ka;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Pr(t.href),i=e.querySelector(Va(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=pl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=i,Ve(i);return}i=e.ownerDocument||e,t=ub(t),(a=Cn.get(a))&&Ic(t,a),i=i.createElement("link"),Ve(i);var s=i;s._p=new Promise(function(f,v){s.onload=f,s.onerror=v}),Ze(i,"link",t),n.instance=i}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=pl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Zh(){if(Ka===null)throw Error(c(475));var e=Ka;return e.stylesheets&&e.count===0&&Xc(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Xc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function pl(){if(this.count--,this.count===0){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var hl=null;function Xc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,hl=new Map,n.forEach(Jh,e),hl=null,pl.call(e))}function Jh(e,n){if(!(n.state.loading&4)){var t=hl.get(e);if(t)var r=t.get(null);else{t=new Map,hl.set(e,t);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var s=a[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),r=s)}r&&t.set(null,r)}a=n.instance,s=a.getAttribute("data-precedence"),i=t.get(s)||r,i===r&&t.set(null,a),t.set(s,a),this.count++,r=pl.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),n.state.loading|=4}}var Wa={$$typeof:te,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function Fh(e,n,t,r,a,i,s,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ql(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ql(0),this.hiddenUpdates=ql(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function db(e,n,t,r,a,i,s,f,v,N,H,B){return e=new Fh(e,n,t,s,f,v,N,B),n=1,i===!0&&(n|=24),i=pn(3,null,null,n),e.current=i,i.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:r,isDehydrated:t,cache:n},Cu(i),e}function bb(e){return e?(e=Or,e):Or}function pb(e,n,t,r,a,i){a=bb(a),r.context===null?r.context=a:r.pendingContext=a,r=mt(n),r.payload={element:t},i=i===void 0?null:i,i!==null&&(r.callback=i),t=yt(e,r,n),t!==null&&(gn(t,e,n),Ta(t,e,n))}function hb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Kc(e,n){hb(e,n),(e=e.alternate)&&hb(e,n)}function mb(e){if(e.tag===13){var n=_r(e,67108864);n!==null&&gn(n,e,67108864),Kc(e,67108864)}}var ml=!0;function $h(e,n,t,r){var a=M.T;M.T=null;var i=I.p;try{I.p=2,Wc(e,n,t,r)}finally{I.p=i,M.T=a}}function em(e,n,t,r){var a=M.T;M.T=null;var i=I.p;try{I.p=8,Wc(e,n,t,r)}finally{I.p=i,M.T=a}}function Wc(e,n,t,r){if(ml){var a=Pc(r);if(a===null)Uc(e,n,r,yl,t),vb(e,r);else if(tm(a,e,n,t,r))r.stopPropagation();else if(vb(e,r),n&4&&-1<nm.indexOf(e)){for(;a!==null;){var i=br(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=jt(i.pendingLanes);if(s!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var v=1<<31-dn(s);f.entanglements[1]|=v,s&=~v}Kn(i),(Ae&6)===0&&(el=Un()+500,ka(0))}}break;case 13:f=_r(i,2),f!==null&&gn(f,i,2),tl(),Kc(i,2)}if(i=Pc(r),i===null&&Uc(e,n,r,yl,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Uc(e,n,r,null,t)}}function Pc(e){return e=$l(e),Qc(e)}var yl=null;function Qc(e){if(yl=null,e=dr(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=y(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return yl=e,null}function yb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(or()){case Bt:return 2;case Cs:return 8;case si:case q0:return 32;case Ms:return 268435456;default:return 32}default:return 32}}var Zc=!1,Ct=null,Mt=null,Ht=null,Pa=new Map,Qa=new Map,Lt=[],nm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vb(e,n){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Pa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(n.pointerId)}}function Za(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=br(n),n!==null&&mb(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function tm(e,n,t,r,a){switch(n){case"focusin":return Ct=Za(Ct,e,n,t,r,a),!0;case"dragenter":return Mt=Za(Mt,e,n,t,r,a),!0;case"mouseover":return Ht=Za(Ht,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Pa.set(i,Za(Pa.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Qa.set(i,Za(Qa.get(i)||null,e,n,t,r,a)),!0}return!1}function gb(e){var n=dr(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=y(t),n!==null){e.blockedOn=n,Q0(e.priority,function(){if(t.tag===13){var r=vn();r=Yl(r);var a=_r(t,r);a!==null&&gn(a,t,r),Kc(t,r)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Pc(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);Fl=r,t.target.dispatchEvent(r),Fl=null}else return n=br(t),n!==null&&mb(n),e.blockedOn=t,!1;n.shift()}return!0}function Sb(e,n,t){vl(e)&&t.delete(n)}function rm(){Zc=!1,Ct!==null&&vl(Ct)&&(Ct=null),Mt!==null&&vl(Mt)&&(Mt=null),Ht!==null&&vl(Ht)&&(Ht=null),Pa.forEach(Sb),Qa.forEach(Sb)}function gl(e,n){e.blockedOn===n&&(e.blockedOn=null,Zc||(Zc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,rm)))}var Sl=null;function Eb(e){Sl!==e&&(Sl=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Sl===e&&(Sl=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],a=e[n+2];if(typeof r!="function"){if(Qc(r||t)===null)continue;break}var i=br(t);i!==null&&(e.splice(n,3),n-=3,Qu(i,{pending:!0,data:a,method:t.method,action:r},r,a))}}))}function Ja(e){function n(v){return gl(v,e)}Ct!==null&&gl(Ct,e),Mt!==null&&gl(Mt,e),Ht!==null&&gl(Ht,e),Pa.forEach(n),Qa.forEach(n);for(var t=0;t<Lt.length;t++){var r=Lt[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lt.length&&(t=Lt[0],t.blockedOn===null);)gb(t),t.blockedOn===null&&Lt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var a=t[r],i=t[r+1],s=a[rn]||null;if(typeof i=="function")s||Eb(t);else if(s){var f=null;if(i&&i.hasAttribute("formAction")){if(a=i,s=i[rn]||null)f=s.formAction;else if(Qc(a)!==null)continue}else f=s.action;typeof f=="function"?t[r+1]=f:(t.splice(r,3),r-=3),Eb(t)}}}function Jc(e){this._internalRoot=e}El.prototype.render=Jc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,r=vn();pb(t,r,e,n,null,null)},El.prototype.unmount=Jc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pb(e.current,2,null,e,null,null),tl(),n[fr]=null}};function El(e){this._internalRoot=e}El.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Lt.length&&n!==0&&n<Lt[t].priority;t++);Lt.splice(t,0,e),t===0&&gb(e)}};var Ab=u.version;if(Ab!=="19.1.0")throw Error(c(527,Ab,"19.1.0"));I.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var am={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{na=Al.inject(am),fn=Al}catch{}}return $a.createRoot=function(e,n){if(!b(e))throw Error(c(299));var t=!1,r="",a=zf,i=Gf,s=kf,f=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(f=n.unstable_transitionCallbacks)),n=db(e,1,!1,null,null,t,r,a,i,s,f,null),e[fr]=n.current,Lc(e),new Jc(n)},$a.hydrateRoot=function(e,n,t){if(!b(e))throw Error(c(299));var r=!1,a="",i=zf,s=Gf,f=kf,v=null,N=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(v=t.unstable_transitionCallbacks),t.formState!==void 0&&(N=t.formState)),n=db(e,1,!0,n,t??null,r,a,i,s,f,v,N),n.context=bb(null),t=n.current,r=vn(),r=Yl(r),a=mt(r),a.callback=null,yt(t,a,r),t=r,n.current.lanes=t,ra(n,t),Kn(n),e[fr]=n.current,Lc(e),new El(n)},$a.version="19.1.0",$a}var Hb;function hm(){if(Hb)return es.exports;Hb=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),es.exports=pm(),es.exports}var mm=hm();function ci({label:l,options:u,value:o,onChange:c,placeholder:b="Select an option",className:h}){const[y,g]=ue.useState(!1),[p,d]=ue.useState(!1),[E,C]=ue.useState(""),j=ue.useRef(null),X=ue.useRef(null),V=ue.useRef(null),z=u.find(m=>m.value===o),G=(z==null?void 0:z.label)||b,K=z==null?void 0:z.color,Y=u.filter(m=>m.label.toLowerCase().includes(E.toLowerCase())),te=m=>{c(m),g(!1),C("")};return ue.useEffect(()=>{const m=O=>{j.current&&!j.current.contains(O.target)&&g(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),ue.useEffect(()=>{y&&V.current&&V.current.focus()},[y]),ue.useEffect(()=>{if(!y||!X.current)return;const m=X.current.getBoundingClientRect(),O=window.innerHeight||document.documentElement.clientHeight,U=O*.4,W=O-m.bottom,F=m.top;W<U&&F>W?d(!0):d(!1)},[y]),A.jsxs("div",{className:`relative block ${h||""}`,ref:j,children:[A.jsxs("span",{className:"flex w-full divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm",children:[A.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative text-left",onClick:()=>{const m=!y;g(m),m&&C("")},ref:X,children:A.jsx("span",{style:{color:K||"inherit"},children:G})}),A.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative","aria-label":"Menu",onClick:()=>{const m=!y;g(m),m&&C("")},children:A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),y&&A.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-lg max-h-[40vh] overflow-y-auto ${p?"bottom-full mb-2":"top-full mt-2"}`,children:u.length>0?A.jsxs("div",{children:[A.jsx("p",{className:"sticky top-0 bg-white px-3 py-2 text-xs uppercase text-gray-500 border-b border-gray-200 z-20",children:l}),A.jsx("input",{type:"text",ref:V,className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 px-2 py-1 text-sm",placeholder:"Search...",value:E,onChange:m=>C(m.target.value),onKeyDown:m=>{m.key==="Enter"&&Y.length===1&&(m.preventDefault(),te(Y[0].value))}}),Y.map(m=>A.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900",role:"menuitem",onClick:O=>{O.preventDefault(),te(m.value)},children:A.jsx("span",{style:{color:m.color||"inherit"},children:m.label})},m.value)),Y.length===0&&A.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No matching options"})]}):A.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No options available"})})]})}var as={exports:{}},is={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lb;function ym(){if(Lb)return is;Lb=1;var l=ea();function u(p,d){return p===d&&(p!==0||1/p===1/d)||p!==p&&d!==d}var o=typeof Object.is=="function"?Object.is:u,c=l.useSyncExternalStore,b=l.useRef,h=l.useEffect,y=l.useMemo,g=l.useDebugValue;return is.useSyncExternalStoreWithSelector=function(p,d,E,C,j){var X=b(null);if(X.current===null){var V={hasValue:!1,value:null};X.current=V}else V=X.current;X=y(function(){function G(m){if(!K){if(K=!0,Y=m,m=C(m),j!==void 0&&V.hasValue){var O=V.value;if(j(O,m))return te=O}return te=m}if(O=te,o(Y,m))return O;var U=C(m);return j!==void 0&&j(O,U)?(Y=m,O):(Y=m,te=U)}var K=!1,Y,te,J=E===void 0?null:E;return[function(){return G(d())},J===null?void 0:function(){return G(J())}]},[d,E,C,j]);var z=c(p,X[0],X[1]);return h(function(){V.hasValue=!0,V.value=z},[z]),g(z),z},is}var Ub;function vm(){return Ub||(Ub=1,as.exports=ym()),as.exports}var gm=vm();function Sm(l){l()}function Em(){let l=null,u=null;return{clear(){l=null,u=null},notify(){Sm(()=>{let o=l;for(;o;)o.callback(),o=o.next})},get(){const o=[];let c=l;for(;c;)o.push(c),c=c.next;return o},subscribe(o){let c=!0;const b=u={callback:o,next:null,prev:u};return b.prev?b.prev.next=b:l=b,function(){!c||l===null||(c=!1,b.next?b.next.prev=b.prev:u=b.prev,b.prev?b.prev.next=b.next:l=b.next)}}}}var wb={notify(){},get:()=>[]};function Am(l,u){let o,c=wb,b=0,h=!1;function y(z){E();const G=c.subscribe(z);let K=!1;return()=>{K||(K=!0,G(),C())}}function g(){c.notify()}function p(){V.onStateChange&&V.onStateChange()}function d(){return h}function E(){b++,o||(o=l.subscribe(p),c=Em())}function C(){b--,o&&b===0&&(o(),o=void 0,c.clear(),c=wb)}function j(){h||(h=!0,E())}function X(){h&&(h=!1,C())}const V={addNestedSub:y,notifyNestedSubs:g,handleChangeWrapper:p,isSubscribed:d,trySubscribe:j,tryUnsubscribe:X,getListeners:()=>c};return V}var Tm=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Rm=Tm(),_m=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Om=_m(),Nm=()=>Rm||Om?ue.useLayoutEffect:ue.useEffect,xm=Nm(),ls=Symbol.for("react-redux-context"),us=typeof globalThis<"u"?globalThis:{};function Dm(){if(!ue.createContext)return{};const l=us[ls]??(us[ls]=new Map);let u=l.get(ue.createContext);return u||(u=ue.createContext(null),l.set(ue.createContext,u)),u}var wt=Dm();function Cm(l){const{children:u,context:o,serverState:c,store:b}=l,h=ue.useMemo(()=>{const p=Am(b);return{store:b,subscription:p,getServerState:c?()=>c:void 0}},[b,c]),y=ue.useMemo(()=>b.getState(),[b]);xm(()=>{const{subscription:p}=h;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),y!==b.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[h,y]);const g=o||wt;return ue.createElement(g.Provider,{value:h},u)}var Mm=Cm;function _s(l=wt){return function(){return ue.useContext(l)}}var b0=_s();function p0(l=wt){const u=l===wt?b0:_s(l),o=()=>{const{store:c}=u();return c};return Object.assign(o,{withTypes:()=>o}),o}var Hm=p0();function Lm(l=wt){const u=l===wt?Hm:p0(l),o=()=>u().dispatch;return Object.assign(o,{withTypes:()=>o}),o}var Um=Lm(),wm=(l,u)=>l===u;function Bm(l=wt){const u=l===wt?b0:_s(l),o=(c,b={})=>{const{equalityFn:h=wm}=typeof b=="function"?{equalityFn:b}:b,y=u(),{store:g,subscription:p,getServerState:d}=y;ue.useRef(!0);const E=ue.useCallback({[c.name](j){return c(j)}}[c.name],[c]),C=gm.useSyncExternalStoreWithSelector(p.addNestedSub,g.getState,d||g.getState,E,h);return ue.useDebugValue(C),C};return Object.assign(o,{withTypes:()=>o}),o}var jm=Bm();const Wn=Um,sn=jm;function Je(l){return`Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}var zm=typeof Symbol=="function"&&Symbol.observable||"@@observable",Bb=zm,cs=()=>Math.random().toString(36).substring(7).split("").join("."),Gm={INIT:`@@redux/INIT${cs()}`,REPLACE:`@@redux/REPLACE${cs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${cs()}`},Dl=Gm;function Os(l){if(typeof l!="object"||l===null)return!1;let u=l;for(;Object.getPrototypeOf(u)!==null;)u=Object.getPrototypeOf(u);return Object.getPrototypeOf(l)===u||Object.getPrototypeOf(l)===null}function h0(l,u,o){if(typeof l!="function")throw new Error(Je(2));if(typeof u=="function"&&typeof o=="function"||typeof o=="function"&&typeof arguments[3]=="function")throw new Error(Je(0));if(typeof u=="function"&&typeof o>"u"&&(o=u,u=void 0),typeof o<"u"){if(typeof o!="function")throw new Error(Je(1));return o(h0)(l,u)}let c=l,b=u,h=new Map,y=h,g=0,p=!1;function d(){y===h&&(y=new Map,h.forEach((G,K)=>{y.set(K,G)}))}function E(){if(p)throw new Error(Je(3));return b}function C(G){if(typeof G!="function")throw new Error(Je(4));if(p)throw new Error(Je(5));let K=!0;d();const Y=g++;return y.set(Y,G),function(){if(K){if(p)throw new Error(Je(6));K=!1,d(),y.delete(Y),h=null}}}function j(G){if(!Os(G))throw new Error(Je(7));if(typeof G.type>"u")throw new Error(Je(8));if(typeof G.type!="string")throw new Error(Je(17));if(p)throw new Error(Je(9));try{p=!0,b=c(b,G)}finally{p=!1}return(h=y).forEach(Y=>{Y()}),G}function X(G){if(typeof G!="function")throw new Error(Je(10));c=G,j({type:Dl.REPLACE})}function V(){const G=C;return{subscribe(K){if(typeof K!="object"||K===null)throw new Error(Je(11));function Y(){const J=K;J.next&&J.next(E())}return Y(),{unsubscribe:G(Y)}},[Bb](){return this}}}return j({type:Dl.INIT}),{dispatch:j,subscribe:C,getState:E,replaceReducer:X,[Bb]:V}}function km(l){Object.keys(l).forEach(u=>{const o=l[u];if(typeof o(void 0,{type:Dl.INIT})>"u")throw new Error(Je(12));if(typeof o(void 0,{type:Dl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Je(13))})}function qm(l){const u=Object.keys(l),o={};for(let h=0;h<u.length;h++){const y=u[h];typeof l[y]=="function"&&(o[y]=l[y])}const c=Object.keys(o);let b;try{km(o)}catch(h){b=h}return function(y={},g){if(b)throw b;let p=!1;const d={};for(let E=0;E<c.length;E++){const C=c[E],j=o[C],X=y[C],V=j(X,g);if(typeof V>"u")throw g&&g.type,new Error(Je(14));d[C]=V,p=p||V!==X}return p=p||c.length!==Object.keys(y).length,p?d:y}}function Cl(...l){return l.length===0?u=>u:l.length===1?l[0]:l.reduce((u,o)=>(...c)=>u(o(...c)))}function Ym(...l){return u=>(o,c)=>{const b=u(o,c);let h=()=>{throw new Error(Je(15))};const y={getState:b.getState,dispatch:(p,...d)=>h(p,...d)},g=l.map(p=>p(y));return h=Cl(...g)(b.dispatch),{...b,dispatch:h}}}function Im(l){return Os(l)&&"type"in l&&typeof l.type=="string"}var m0=Symbol.for("immer-nothing"),jb=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function Gn(l,...u){throw new Error(`[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`)}var $r=Object.getPrototypeOf;function ir(l){return!!l&&!!l[Sn]}function ot(l){var u;return l?y0(l)||Array.isArray(l)||!!l[jb]||!!((u=l.constructor)!=null&&u[jb])||Bl(l)||jl(l):!1}var Vm=Object.prototype.constructor.toString();function y0(l){if(!l||typeof l!="object")return!1;const u=$r(l);if(u===null)return!0;const o=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return o===Object?!0:typeof o=="function"&&Function.toString.call(o)===Vm}function Ml(l,u){wl(l)===0?Reflect.ownKeys(l).forEach(o=>{u(o,l[o],l)}):l.forEach((o,c)=>u(c,o,l))}function wl(l){const u=l[Sn];return u?u.type_:Array.isArray(l)?1:Bl(l)?2:jl(l)?3:0}function ms(l,u){return wl(l)===2?l.has(u):Object.prototype.hasOwnProperty.call(l,u)}function v0(l,u,o){const c=wl(l);c===2?l.set(u,o):c===3?l.add(o):l[u]=o}function Xm(l,u){return l===u?l!==0||1/l===1/u:l!==l&&u!==u}function Bl(l){return l instanceof Map}function jl(l){return l instanceof Set}function rr(l){return l.copy_||l.base_}function ys(l,u){if(Bl(l))return new Map(l);if(jl(l))return new Set(l);if(Array.isArray(l))return Array.prototype.slice.call(l);const o=y0(l);if(u===!0||u==="class_only"&&!o){const c=Object.getOwnPropertyDescriptors(l);delete c[Sn];let b=Reflect.ownKeys(c);for(let h=0;h<b.length;h++){const y=b[h],g=c[y];g.writable===!1&&(g.writable=!0,g.configurable=!0),(g.get||g.set)&&(c[y]={configurable:!0,writable:!0,enumerable:g.enumerable,value:l[y]})}return Object.create($r(l),c)}else{const c=$r(l);if(c!==null&&o)return{...l};const b=Object.create(c);return Object.assign(b,l)}}function Ns(l,u=!1){return zl(l)||ir(l)||!ot(l)||(wl(l)>1&&(l.set=l.add=l.clear=l.delete=Km),Object.freeze(l),u&&Object.entries(l).forEach(([o,c])=>Ns(c,!0))),l}function Km(){Gn(2)}function zl(l){return Object.isFrozen(l)}var Wm={};function lr(l){const u=Wm[l];return u||Gn(0,l),u}var li;function g0(){return li}function Pm(l,u){return{drafts_:[],parent_:l,immer_:u,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zb(l,u){u&&(lr("Patches"),l.patches_=[],l.inversePatches_=[],l.patchListener_=u)}function vs(l){gs(l),l.drafts_.forEach(Qm),l.drafts_=null}function gs(l){l===li&&(li=l.parent_)}function Gb(l){return li=Pm(li,l)}function Qm(l){const u=l[Sn];u.type_===0||u.type_===1?u.revoke_():u.revoked_=!0}function kb(l,u){u.unfinalizedDrafts_=u.drafts_.length;const o=u.drafts_[0];return l!==void 0&&l!==o?(o[Sn].modified_&&(vs(u),Gn(4)),ot(l)&&(l=Hl(u,l),u.parent_||Ll(u,l)),u.patches_&&lr("Patches").generateReplacementPatches_(o[Sn].base_,l,u.patches_,u.inversePatches_)):l=Hl(u,o,[]),vs(u),u.patches_&&u.patchListener_(u.patches_,u.inversePatches_),l!==m0?l:void 0}function Hl(l,u,o){if(zl(u))return u;const c=u[Sn];if(!c)return Ml(u,(b,h)=>qb(l,c,u,b,h,o)),u;if(c.scope_!==l)return u;if(!c.modified_)return Ll(l,c.base_,!0),c.base_;if(!c.finalized_){c.finalized_=!0,c.scope_.unfinalizedDrafts_--;const b=c.copy_;let h=b,y=!1;c.type_===3&&(h=new Set(b),b.clear(),y=!0),Ml(h,(g,p)=>qb(l,c,b,g,p,o,y)),Ll(l,b,!1),o&&l.patches_&&lr("Patches").generatePatches_(c,o,l.patches_,l.inversePatches_)}return c.copy_}function qb(l,u,o,c,b,h,y){if(ir(b)){const g=h&&u&&u.type_!==3&&!ms(u.assigned_,c)?h.concat(c):void 0,p=Hl(l,b,g);if(v0(o,c,p),ir(p))l.canAutoFreeze_=!1;else return}else y&&o.add(b);if(ot(b)&&!zl(b)){if(!l.immer_.autoFreeze_&&l.unfinalizedDrafts_<1)return;Hl(l,b),(!u||!u.scope_.parent_)&&typeof c!="symbol"&&Object.prototype.propertyIsEnumerable.call(o,c)&&Ll(l,b)}}function Ll(l,u,o=!1){!l.parent_&&l.immer_.autoFreeze_&&l.canAutoFreeze_&&Ns(u,o)}function Zm(l,u){const o=Array.isArray(l),c={type_:o?1:0,scope_:u?u.scope_:g0(),modified_:!1,finalized_:!1,assigned_:{},parent_:u,base_:l,draft_:null,copy_:null,revoke_:null,isManual_:!1};let b=c,h=xs;o&&(b=[c],h=ui);const{revoke:y,proxy:g}=Proxy.revocable(b,h);return c.draft_=g,c.revoke_=y,g}var xs={get(l,u){if(u===Sn)return l;const o=rr(l);if(!ms(o,u))return Jm(l,o,u);const c=o[u];return l.finalized_||!ot(c)?c:c===ss(l.base_,u)?(os(l),l.copy_[u]=Es(c,l)):c},has(l,u){return u in rr(l)},ownKeys(l){return Reflect.ownKeys(rr(l))},set(l,u,o){const c=S0(rr(l),u);if(c!=null&&c.set)return c.set.call(l.draft_,o),!0;if(!l.modified_){const b=ss(rr(l),u),h=b==null?void 0:b[Sn];if(h&&h.base_===o)return l.copy_[u]=o,l.assigned_[u]=!1,!0;if(Xm(o,b)&&(o!==void 0||ms(l.base_,u)))return!0;os(l),Ss(l)}return l.copy_[u]===o&&(o!==void 0||u in l.copy_)||Number.isNaN(o)&&Number.isNaN(l.copy_[u])||(l.copy_[u]=o,l.assigned_[u]=!0),!0},deleteProperty(l,u){return ss(l.base_,u)!==void 0||u in l.base_?(l.assigned_[u]=!1,os(l),Ss(l)):delete l.assigned_[u],l.copy_&&delete l.copy_[u],!0},getOwnPropertyDescriptor(l,u){const o=rr(l),c=Reflect.getOwnPropertyDescriptor(o,u);return c&&{writable:!0,configurable:l.type_!==1||u!=="length",enumerable:c.enumerable,value:o[u]}},defineProperty(){Gn(11)},getPrototypeOf(l){return $r(l.base_)},setPrototypeOf(){Gn(12)}},ui={};Ml(xs,(l,u)=>{ui[l]=function(){return arguments[0]=arguments[0][0],u.apply(this,arguments)}});ui.deleteProperty=function(l,u){return ui.set.call(this,l,u,void 0)};ui.set=function(l,u,o){return xs.set.call(this,l[0],u,o,l[0])};function ss(l,u){const o=l[Sn];return(o?rr(o):l)[u]}function Jm(l,u,o){var b;const c=S0(u,o);return c?"value"in c?c.value:(b=c.get)==null?void 0:b.call(l.draft_):void 0}function S0(l,u){if(!(u in l))return;let o=$r(l);for(;o;){const c=Object.getOwnPropertyDescriptor(o,u);if(c)return c;o=$r(o)}}function Ss(l){l.modified_||(l.modified_=!0,l.parent_&&Ss(l.parent_))}function os(l){l.copy_||(l.copy_=ys(l.base_,l.scope_.immer_.useStrictShallowCopy_))}var Fm=class{constructor(l){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(u,o,c)=>{if(typeof u=="function"&&typeof o!="function"){const h=o;o=u;const y=this;return function(p=h,...d){return y.produce(p,E=>o.call(this,E,...d))}}typeof o!="function"&&Gn(6),c!==void 0&&typeof c!="function"&&Gn(7);let b;if(ot(u)){const h=Gb(this),y=Es(u,void 0);let g=!0;try{b=o(y),g=!1}finally{g?vs(h):gs(h)}return zb(h,c),kb(b,h)}else if(!u||typeof u!="object"){if(b=o(u),b===void 0&&(b=u),b===m0&&(b=void 0),this.autoFreeze_&&Ns(b,!0),c){const h=[],y=[];lr("Patches").generateReplacementPatches_(u,b,h,y),c(h,y)}return b}else Gn(1,u)},this.produceWithPatches=(u,o)=>{if(typeof u=="function")return(y,...g)=>this.produceWithPatches(y,p=>u(p,...g));let c,b;return[this.produce(u,o,(y,g)=>{c=y,b=g}),c,b]},typeof(l==null?void 0:l.autoFreeze)=="boolean"&&this.setAutoFreeze(l.autoFreeze),typeof(l==null?void 0:l.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(l.useStrictShallowCopy)}createDraft(l){ot(l)||Gn(8),ir(l)&&(l=$m(l));const u=Gb(this),o=Es(l,void 0);return o[Sn].isManual_=!0,gs(u),o}finishDraft(l,u){const o=l&&l[Sn];(!o||!o.isManual_)&&Gn(9);const{scope_:c}=o;return zb(c,u),kb(void 0,c)}setAutoFreeze(l){this.autoFreeze_=l}setUseStrictShallowCopy(l){this.useStrictShallowCopy_=l}applyPatches(l,u){let o;for(o=u.length-1;o>=0;o--){const b=u[o];if(b.path.length===0&&b.op==="replace"){l=b.value;break}}o>-1&&(u=u.slice(o+1));const c=lr("Patches").applyPatches_;return ir(l)?c(l,u):this.produce(l,b=>c(b,u))}};function Es(l,u){const o=Bl(l)?lr("MapSet").proxyMap_(l,u):jl(l)?lr("MapSet").proxySet_(l,u):Zm(l,u);return(u?u.scope_:g0()).drafts_.push(o),o}function $m(l){return ir(l)||Gn(10,l),E0(l)}function E0(l){if(!ot(l)||zl(l))return l;const u=l[Sn];let o;if(u){if(!u.modified_)return u.base_;u.finalized_=!0,o=ys(l,u.scope_.immer_.useStrictShallowCopy_)}else o=ys(l,!0);return Ml(o,(c,b)=>{v0(o,c,E0(b))}),u&&(u.finalized_=!1),o}var En=new Fm,A0=En.produce;En.produceWithPatches.bind(En);En.setAutoFreeze.bind(En);En.setUseStrictShallowCopy.bind(En);En.applyPatches.bind(En);En.createDraft.bind(En);En.finishDraft.bind(En);function T0(l){return({dispatch:o,getState:c})=>b=>h=>typeof h=="function"?h(o,c,l):b(h)}var ey=T0(),ny=T0,ty=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Cl:Cl.apply(null,arguments)};function Yb(l,u){function o(...c){if(u){let b=u(...c);if(!b)throw new Error(st(0));return{type:l,payload:b.payload,..."meta"in b&&{meta:b.meta},..."error"in b&&{error:b.error}}}return{type:l,payload:c[0]}}return o.toString=()=>`${l}`,o.type=l,o.match=c=>Im(c)&&c.type===l,o}var R0=class ii extends Array{constructor(...u){super(...u),Object.setPrototypeOf(this,ii.prototype)}static get[Symbol.species](){return ii}concat(...u){return super.concat.apply(this,u)}prepend(...u){return u.length===1&&Array.isArray(u[0])?new ii(...u[0].concat(this)):new ii(...u.concat(this))}};function Ib(l){return ot(l)?A0(l,()=>{}):l}function Tl(l,u,o){return l.has(u)?l.get(u):l.set(u,o(u)).get(u)}function ry(l){return typeof l=="boolean"}var ay=()=>function(u){const{thunk:o=!0,immutableCheck:c=!0,serializableCheck:b=!0,actionCreatorCheck:h=!0}=u??{};let y=new R0;return o&&(ry(o)?y.push(ey):y.push(ny(o.extraArgument))),y},iy="RTK_autoBatch",Vb=l=>u=>{setTimeout(u,l)},ly=(l={type:"raf"})=>u=>(...o)=>{const c=u(...o);let b=!0,h=!1,y=!1;const g=new Set,p=l.type==="tick"?queueMicrotask:l.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Vb(10):l.type==="callback"?l.queueNotification:Vb(l.timeout),d=()=>{y=!1,h&&(h=!1,g.forEach(E=>E()))};return Object.assign({},c,{subscribe(E){const C=()=>b&&E(),j=c.subscribe(C);return g.add(E),()=>{j(),g.delete(E)}},dispatch(E){var C;try{return b=!((C=E==null?void 0:E.meta)!=null&&C[iy]),h=!b,h&&(y||(y=!0,p(d))),c.dispatch(E)}finally{b=!0}}})},uy=l=>function(o){const{autoBatch:c=!0}=o??{};let b=new R0(l);return c&&b.push(ly(typeof c=="object"?c:void 0)),b};function cy(l){const u=ay(),{reducer:o=void 0,middleware:c,devTools:b=!0,preloadedState:h=void 0,enhancers:y=void 0}=l||{};let g;if(typeof o=="function")g=o;else if(Os(o))g=qm(o);else throw new Error(st(1));let p;typeof c=="function"?p=c(u):p=u();let d=Cl;b&&(d=ty({trace:!1,...typeof b=="object"&&b}));const E=Ym(...p),C=uy(E);let j=typeof y=="function"?y(C):C();const X=d(...j);return h0(g,h,X)}function _0(l){const u={},o=[];let c;const b={addCase(h,y){const g=typeof h=="string"?h:h.type;if(!g)throw new Error(st(28));if(g in u)throw new Error(st(29));return u[g]=y,b},addMatcher(h,y){return o.push({matcher:h,reducer:y}),b},addDefaultCase(h){return c=h,b}};return l(b),[u,o,c]}function sy(l){return typeof l=="function"}function oy(l,u){let[o,c,b]=_0(u),h;if(sy(l))h=()=>Ib(l());else{const g=Ib(l);h=()=>g}function y(g=h(),p){let d=[o[p.type],...c.filter(({matcher:E})=>E(p)).map(({reducer:E})=>E)];return d.filter(E=>!!E).length===0&&(d=[b]),d.reduce((E,C)=>{if(C)if(ir(E)){const X=C(E,p);return X===void 0?E:X}else{if(ot(E))return A0(E,j=>C(j,p));{const j=C(E,p);if(j===void 0){if(E===null)return E;throw Error("A case reducer on a non-draftable value must not return undefined")}return j}}return E},g)}return y.getInitialState=h,y}var fy=Symbol.for("rtk-slice-createasyncthunk");function dy(l,u){return`${l}/${u}`}function by({creators:l}={}){var o;const u=(o=l==null?void 0:l.asyncThunk)==null?void 0:o[fy];return function(b){const{name:h,reducerPath:y=h}=b;if(!h)throw new Error(st(11));const g=(typeof b.reducers=="function"?b.reducers(my()):b.reducers)||{},p=Object.keys(g),d={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},E={addCase(J,m){const O=typeof J=="string"?J:J.type;if(!O)throw new Error(st(12));if(O in d.sliceCaseReducersByType)throw new Error(st(13));return d.sliceCaseReducersByType[O]=m,E},addMatcher(J,m){return d.sliceMatchers.push({matcher:J,reducer:m}),E},exposeAction(J,m){return d.actionCreators[J]=m,E},exposeCaseReducer(J,m){return d.sliceCaseReducersByName[J]=m,E}};p.forEach(J=>{const m=g[J],O={reducerName:J,type:dy(h,J),createNotation:typeof b.reducers=="function"};vy(m)?Sy(O,m,E,u):yy(O,m,E)});function C(){const[J={},m=[],O=void 0]=typeof b.extraReducers=="function"?_0(b.extraReducers):[b.extraReducers],U={...J,...d.sliceCaseReducersByType};return oy(b.initialState,W=>{for(let F in U)W.addCase(F,U[F]);for(let F of d.sliceMatchers)W.addMatcher(F.matcher,F.reducer);for(let F of m)W.addMatcher(F.matcher,F.reducer);O&&W.addDefaultCase(O)})}const j=J=>J,X=new Map,V=new WeakMap;let z;function G(J,m){return z||(z=C()),z(J,m)}function K(){return z||(z=C()),z.getInitialState()}function Y(J,m=!1){function O(W){let F=W[J];return typeof F>"u"&&m&&(F=Tl(V,O,K)),F}function U(W=j){const F=Tl(X,m,()=>new WeakMap);return Tl(F,W,()=>{const Se={};for(const[Ne,xe]of Object.entries(b.selectors??{}))Se[Ne]=py(xe,W,()=>Tl(V,W,K),m);return Se})}return{reducerPath:J,getSelectors:U,get selectors(){return U(O)},selectSlice:O}}const te={name:h,reducer:G,actions:d.actionCreators,caseReducers:d.sliceCaseReducersByName,getInitialState:K,...Y(y),injectInto(J,{reducerPath:m,...O}={}){const U=m??y;return J.inject({reducerPath:U,reducer:G},O),{...te,...Y(U,!0)}}};return te}}function py(l,u,o,c){function b(h,...y){let g=u(h);return typeof g>"u"&&c&&(g=o()),l(g,...y)}return b.unwrapped=l,b}var hy=by();function my(){function l(u,o){return{_reducerDefinitionType:"asyncThunk",payloadCreator:u,...o}}return l.withTypes=()=>l,{reducer(u){return Object.assign({[u.name](...o){return u(...o)}}[u.name],{_reducerDefinitionType:"reducer"})},preparedReducer(u,o){return{_reducerDefinitionType:"reducerWithPrepare",prepare:u,reducer:o}},asyncThunk:l}}function yy({type:l,reducerName:u,createNotation:o},c,b){let h,y;if("reducer"in c){if(o&&!gy(c))throw new Error(st(17));h=c.reducer,y=c.prepare}else h=c;b.addCase(l,h).exposeCaseReducer(u,h).exposeAction(u,y?Yb(l,y):Yb(l))}function vy(l){return l._reducerDefinitionType==="asyncThunk"}function gy(l){return l._reducerDefinitionType==="reducerWithPrepare"}function Sy({type:l,reducerName:u},o,c,b){if(!b)throw new Error(st(18));const{payloadCreator:h,fulfilled:y,pending:g,rejected:p,settled:d,options:E}=o,C=b(l,h,E);c.exposeAction(u,C),y&&c.addCase(C.fulfilled,y),g&&c.addCase(C.pending,g),p&&c.addCase(C.rejected,p),d&&c.addMatcher(C.settled,d),c.exposeCaseReducer(u,{fulfilled:y||Rl,pending:g||Rl,rejected:p||Rl,settled:d||Rl})}function Rl(){}function st(l){return`Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}const Ey={hero:"Ashe",cash:11e3,equipped:Array(2).fill(""),toBuy:6,avoid:[],avoidEnabled:!1,weights:[{type:"",weight:1}],error:"",minValueEnabled:!1,minAttrGroups:[]},O0=hy({name:"input",initialState:Ey,reducers:{setHero(l,u){l.hero=u.payload},setCash(l,u){l.cash=u.payload},setEquipped(l,u){l.equipped[u.payload.index]=u.payload.id},addEquippedSlot(l){l.equipped.length<6&&l.equipped.push("")},removeEquippedSlot(l,u){l.equipped.length>2&&l.equipped.splice(u.payload,1)},setToBuy(l,u){l.toBuy=u.payload},addAvoid(l,u){l.avoid.includes(u.payload)||l.avoid.push(u.payload)},removeAvoid(l,u){l.avoid=l.avoid.filter(o=>o!==u.payload)},toggleAvoidEnabled(l){l.avoidEnabled=!l.avoidEnabled},setWeightType(l,u){l.weights[u.payload.index].type=u.payload.type},setWeightValue(l,u){l.weights[u.payload.index].weight=u.payload.value},addWeightRow(l,u){l.weights.push({type:u.payload,weight:1})},removeWeightRow(l,u){l.weights.splice(u.payload,1)},setError(l,u){l.error=u.payload},toggleMinValueEnabled(l){l.minValueEnabled=!l.minValueEnabled},addMinGroup(l){l.minAttrGroups.push({attrs:[],value:0})},removeMinGroup(l,u){l.minAttrGroups.splice(u.payload,1)},setMinGroupValue(l,u){l.minAttrGroups[u.payload.index].value=u.payload.value},addAttrToGroup(l,u){const o=l.minAttrGroups[u.payload.index];o.attrs.includes(u.payload.attr)||o.attrs.push(u.payload.attr)},removeAttrFromGroup(l,u){const o=l.minAttrGroups[u.payload.index];o.attrs=o.attrs.filter(c=>c!==u.payload.attr)}}}),{setHero:Ay,setCash:Ty,setEquipped:Xb,setToBuy:N0,addAvoid:x0,removeAvoid:Ry,toggleAvoidEnabled:D0,setWeightType:C0,setWeightValue:_y,addWeightRow:Oy,removeWeightRow:Ny,setError:_l,toggleMinValueEnabled:xy,addMinGroup:Dy,removeMinGroup:Cy,setMinGroupValue:My,addAttrToGroup:Hy,removeAttrFromGroup:Ly,addEquippedSlot:Uy,removeEquippedSlot:wy}=O0.actions,By=O0.reducer;function jy({heroes:l}){const u=sn(c=>c.input.present.hero),o=Wn();return A.jsxs("div",{children:[A.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium text-gray-700 mb-1",children:"Hero"}),A.jsx(ci,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...l.map(c=>({value:c,label:c}))],value:u,onChange:c=>o(Ay(c))})]})}function Ds({value:l,onChange:u,min:o,max:c,step:b,placeholder:h,className:y,label:g}){const[p,d]=ue.useState(l.toString());ue.useEffect(()=>{d(l.toString())},[l]);const E=C=>{const j=C.target.value;if(d(j),j===""||j==="-")return;const X=Number(j);isNaN(X)||u(X)};return A.jsx("div",{className:`relative inline-block ${y||""}`,children:A.jsx("input",{type:"number",className:`block w-full px-3 py-2 text-sm font-medium text-gray-700 rounded border border-gray-300 bg-white shadow-sm
                    transition-colors focus:border-indigo-500 focus:ring-indigo-500`,value:p,onChange:E,inputMode:"decimal",pattern:".*",min:o,max:c,step:b,placeholder:h,"aria-label":g||h||"Number input"})})}function zy(){const l=sn(o=>o.input.present.cash),u=Wn();return A.jsxs("div",{children:[A.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium text-gray-700",children:"Total Cash"}),A.jsx(Ds,{value:l,onChange:o=>u(Ty(o)),min:0,label:"Total Cash",className:"mt-1"})]})}function Gy(l){const u=l.match(/[-+]?\d+(?:\.\d+)?/);return u?parseFloat(u[0]):0}function As(l){const u=new Map;return l.forEach(o=>{o.attributes.forEach(c=>{const b=Gy(c.value);u.set(c.type,(u.get(c.type)??0)+b)})}),u}function Kb(l,u){let o=0;return u.forEach(c=>{o+=(l.get(c.type)??0)*c.weight}),o}function Ul(l){switch(l){case"common":return"#17a631";case"rare":return"#217dbe";case"epic":return"#8727d6";default:return"black"}}function ky(l,u){const o=As(l);return u.every(c=>c.attrs.reduce((h,y)=>h+(o.get(y)??0),0)>=c.value)}function M0(l,u,o){const c=new Set(l.map(b=>b.type));return u&&o.forEach(b=>{b.attrs.forEach(h=>c.add(h))}),c.delete(""),c}function qy(l,u,o,c){const b=M0(u,o,c),h=[];return u.forEach(y=>{const g=l.get(y.type)??0;h.push({type:y.type,sum:g,contrib:g*y.weight}),b.delete(y.type)}),b.forEach(y=>{const g=l.get(y)??0;h.push({type:y,sum:g,contrib:0})}),h}function ur(l){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[l]||l}function Yy(l,u){const o=["WP","AP","AS","Health","Armor","Shields"],c=o.indexOf(l),b=o.indexOf(u);return c!==-1&&b!==-1?c-b:c!==-1?-1:b!==-1?1:l.localeCompare(u)}function H0(l,u){const o={common:0,rare:1,epic:2},c=o[l.rarity]-o[u.rarity];return c!==0?c:l.name.localeCompare(u.name)}function Iy({items:l}){const u=sn(y=>y.input.present.equipped),o=Wn(),[c,b]=ue.useState(!1),h=y=>{b(y),y||u.forEach((g,p)=>o(Xb({index:p,id:""})))};return A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Equipped Items"}),A.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[A.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:c,onChange:y=>h(y.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),A.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm text-gray-700 select-none",children:"Use Equipped Items"})]}),c&&A.jsxs("div",{className:"space-y-4 mt-1",children:[u.map((y,g)=>A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx(ci,{label:`Equipped Slot ${g+1}`,placeholder:"None",options:[{value:"",label:"None"},...l.sort(H0).map(p=>({value:p.id||p.name,label:`${p.name} (${p.cost}) ${p.attributes.filter(d=>d.type!=="description").map(d=>`${ur(d.type)}-${d.value}`).join(", ")}`,color:Ul(p.rarity)}))],value:y,onChange:p=>o(Xb({index:g,id:p})),className:"flex-grow"}),u.length>2&&A.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>o(wy(g)),children:A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},g)),u.length<6&&A.jsx("button",{type:"button",onClick:()=>o(Uy()),className:"inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50",children:"Add Slot"})]})]})}function L0({label:l,onRemove:u}){return A.jsxs("span",{className:"flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800",children:[l,u&&A.jsx("button",{type:"button",className:"text-red-500 hover:text-red-700 text-lg leading-none",onClick:u,children:"×"})]})}function Vy({items:l}){const u=sn(y=>y.input.present.avoid),o=sn(y=>y.input.present.avoidEnabled),c=Wn(),[b,h]=ue.useState("");return A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Avoid Items"}),A.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[A.jsx("input",{id:"avoid-toggle",type:"checkbox",checked:o,onChange:()=>c(D0()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),A.jsx("label",{htmlFor:"avoid-toggle",className:"text-sm text-gray-700 select-none",children:"Enable Avoid Items"})]}),o&&A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx(ci,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...l.sort(H0).map(y=>({value:y.id||y.name,label:`${y.name} (${y.cost})`,color:Ul(y.rarity)}))],value:b,onChange:h,className:"flex-grow"}),A.jsx("button",{type:"button",className:"rounded bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300",onClick:()=>{b&&(c(x0(b)),h(""))},children:"Add"})]}),u.length>0&&A.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:u.map(y=>{const g=l.find(p=>(p.id||p.name)===y);return A.jsx(L0,{label:g?g.name:y,onRemove:()=>c(Ry(y))},y)})})]})]})}function Xy({attrTypes:l}){const u=sn(b=>b.input.present.weights),o=Wn(),c=l.map(b=>({value:b,label:ur(b)}));return A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Attribute Weights"}),A.jsx("div",{className:"space-y-4 mt-1",children:u.map((b,h)=>A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx(ci,{label:"Attribute Type",placeholder:"Select type",options:c,value:b.type,onChange:y=>o(C0({index:h,type:y})),className:"flex-grow"}),A.jsx(Ds,{value:b.weight,onChange:y=>o(_y({index:h,value:y})),min:0,max:100,step:.01,label:`Weight for ${ur(b.type)}`,className:"w-24"}),u.length>1&&A.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>o(Ny(h)),children:A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},h))}),A.jsx("button",{type:"button",className:"mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>o(Oy(l[0])),children:"Add Row"})]})}function Ky({attrTypes:l}){const u=Wn(),o=sn(h=>h.input.present.minValueEnabled),c=sn(h=>h.input.present.minAttrGroups),b=l.map(h=>({value:h,label:ur(h)}));return A.jsxs("div",{children:[A.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Minimum Attribute Totals"}),A.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[A.jsx("input",{id:"min-value-toggle",type:"checkbox",checked:o,onChange:()=>u(xy()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),A.jsx("label",{htmlFor:"min-value-toggle",className:"text-sm text-gray-700 select-none",children:"Enable Minimum Values"})]}),o&&A.jsxs("div",{className:"space-y-4",children:[c.map((h,y)=>A.jsxs("div",{className:"rounded border p-3 space-y-2",children:[A.jsxs("div",{className:"flex items-center gap-2",children:[A.jsx("span",{className:"text-sm font-medium text-gray-700",children:"Target Value:"}),A.jsx(Ds,{value:h.value,onChange:g=>u(My({index:y,value:g})),min:0,label:"Minimum Value",className:"w-24"}),c.length>1&&A.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>u(Cy(y)),children:A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),A.jsx(ci,{label:"Add Attribute",placeholder:"Add attribute",options:b.filter(g=>!h.attrs.includes(g.value)),value:"",onChange:g=>u(Hy({index:y,attr:g})),className:"w-full"}),h.attrs.length>0&&A.jsx("div",{className:"flex flex-wrap gap-2",children:h.attrs.map(g=>A.jsx(L0,{label:ur(g),onRemove:()=>u(Ly({index:y,attr:g}))},g))})]},y)),A.jsx("button",{type:"button",className:"mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>u(Dy()),children:"Add Group"})]})]})}function Wy({onSubmit:l,validate:u}){const o=Wn(),c=sn(h=>h.input.present.toBuy),b=sn(h=>h.input.present.error);return A.jsxs("div",{className:"!mt-8 border-t pt-6",children:[A.jsx("button",{type:"button",onClick:()=>{u()&&l()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",disabled:!u(),children:"Calculate Optimal Build"}),A.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(h=>A.jsx("button",{type:"button",onClick:()=>o(N0(h)),className:`rounded-lg py-2 text-sm font-medium ${c===h?"bg-indigo-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:h},h))}),b&&A.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800",children:b})]})}function Py({heroes:l,attrTypes:u,filteredItems:o,onSubmit:c,validate:b}){return A.jsxs("form",{onSubmit:h=>{h.preventDefault(),b()&&c()},className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[A.jsx(jy,{heroes:l}),A.jsx(zy,{}),A.jsx(Iy,{items:o}),A.jsx(Vy,{items:o}),A.jsx(Ky,{attrTypes:u}),A.jsx(Xy,{attrTypes:u}),A.jsx(Wy,{onSubmit:c,validate:b})]})}function Qy(l){return l.replace(/<[^>]*>/g,"")}var ei={},Zr={},Ol={},nr={},tr={},fs={},Wb;function U0(){return Wb||(Wb=1,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.Doctype=l.CDATA=l.Tag=l.Style=l.Script=l.Comment=l.Directive=l.Text=l.Root=l.isTag=l.ElementType=void 0;var u;(function(c){c.Root="root",c.Text="text",c.Directive="directive",c.Comment="comment",c.Script="script",c.Style="style",c.Tag="tag",c.CDATA="cdata",c.Doctype="doctype"})(u=l.ElementType||(l.ElementType={}));function o(c){return c.type===u.Tag||c.type===u.Script||c.type===u.Style}l.isTag=o,l.Root=u.Root,l.Text=u.Text,l.Directive=u.Directive,l.Comment=u.Comment,l.Script=u.Script,l.Style=u.Style,l.Tag=u.Tag,l.CDATA=u.CDATA,l.Doctype=u.Doctype}(fs)),fs}var oe={},Pb;function Qb(){if(Pb)return oe;Pb=1;var l=oe&&oe.__extends||function(){var m=function(O,U){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(W,F){W.__proto__=F}||function(W,F){for(var Se in F)Object.prototype.hasOwnProperty.call(F,Se)&&(W[Se]=F[Se])},m(O,U)};return function(O,U){if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");m(O,U);function W(){this.constructor=O}O.prototype=U===null?Object.create(U):(W.prototype=U.prototype,new W)}}(),u=oe&&oe.__assign||function(){return u=Object.assign||function(m){for(var O,U=1,W=arguments.length;U<W;U++){O=arguments[U];for(var F in O)Object.prototype.hasOwnProperty.call(O,F)&&(m[F]=O[F])}return m},u.apply(this,arguments)};Object.defineProperty(oe,"__esModule",{value:!0}),oe.cloneNode=oe.hasChildren=oe.isDocument=oe.isDirective=oe.isComment=oe.isText=oe.isCDATA=oe.isTag=oe.Element=oe.Document=oe.CDATA=oe.NodeWithChildren=oe.ProcessingInstruction=oe.Comment=oe.Text=oe.DataNode=oe.Node=void 0;var o=U0(),c=function(){function m(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(m.prototype,"parentNode",{get:function(){return this.parent},set:function(O){this.parent=O},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"previousSibling",{get:function(){return this.prev},set:function(O){this.prev=O},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"nextSibling",{get:function(){return this.next},set:function(O){this.next=O},enumerable:!1,configurable:!0}),m.prototype.cloneNode=function(O){return O===void 0&&(O=!1),te(this,O)},m}();oe.Node=c;var b=function(m){l(O,m);function O(U){var W=m.call(this)||this;return W.data=U,W}return Object.defineProperty(O.prototype,"nodeValue",{get:function(){return this.data},set:function(U){this.data=U},enumerable:!1,configurable:!0}),O}(c);oe.DataNode=b;var h=function(m){l(O,m);function O(){var U=m!==null&&m.apply(this,arguments)||this;return U.type=o.ElementType.Text,U}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),O}(b);oe.Text=h;var y=function(m){l(O,m);function O(){var U=m!==null&&m.apply(this,arguments)||this;return U.type=o.ElementType.Comment,U}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),O}(b);oe.Comment=y;var g=function(m){l(O,m);function O(U,W){var F=m.call(this,W)||this;return F.name=U,F.type=o.ElementType.Directive,F}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),O}(b);oe.ProcessingInstruction=g;var p=function(m){l(O,m);function O(U){var W=m.call(this)||this;return W.children=U,W}return Object.defineProperty(O.prototype,"firstChild",{get:function(){var U;return(U=this.children[0])!==null&&U!==void 0?U:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"childNodes",{get:function(){return this.children},set:function(U){this.children=U},enumerable:!1,configurable:!0}),O}(c);oe.NodeWithChildren=p;var d=function(m){l(O,m);function O(){var U=m!==null&&m.apply(this,arguments)||this;return U.type=o.ElementType.CDATA,U}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),O}(p);oe.CDATA=d;var E=function(m){l(O,m);function O(){var U=m!==null&&m.apply(this,arguments)||this;return U.type=o.ElementType.Root,U}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),O}(p);oe.Document=E;var C=function(m){l(O,m);function O(U,W,F,Se){F===void 0&&(F=[]),Se===void 0&&(Se=U==="script"?o.ElementType.Script:U==="style"?o.ElementType.Style:o.ElementType.Tag);var Ne=m.call(this,F)||this;return Ne.name=U,Ne.attribs=W,Ne.type=Se,Ne}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"tagName",{get:function(){return this.name},set:function(U){this.name=U},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"attributes",{get:function(){var U=this;return Object.keys(this.attribs).map(function(W){var F,Se;return{name:W,value:U.attribs[W],namespace:(F=U["x-attribsNamespace"])===null||F===void 0?void 0:F[W],prefix:(Se=U["x-attribsPrefix"])===null||Se===void 0?void 0:Se[W]}})},enumerable:!1,configurable:!0}),O}(p);oe.Element=C;function j(m){return(0,o.isTag)(m)}oe.isTag=j;function X(m){return m.type===o.ElementType.CDATA}oe.isCDATA=X;function V(m){return m.type===o.ElementType.Text}oe.isText=V;function z(m){return m.type===o.ElementType.Comment}oe.isComment=z;function G(m){return m.type===o.ElementType.Directive}oe.isDirective=G;function K(m){return m.type===o.ElementType.Root}oe.isDocument=K;function Y(m){return Object.prototype.hasOwnProperty.call(m,"children")}oe.hasChildren=Y;function te(m,O){O===void 0&&(O=!1);var U;if(V(m))U=new h(m.data);else if(z(m))U=new y(m.data);else if(j(m)){var W=O?J(m.children):[],F=new C(m.name,u({},m.attribs),W);W.forEach(function(Q){return Q.parent=F}),m.namespace!=null&&(F.namespace=m.namespace),m["x-attribsNamespace"]&&(F["x-attribsNamespace"]=u({},m["x-attribsNamespace"])),m["x-attribsPrefix"]&&(F["x-attribsPrefix"]=u({},m["x-attribsPrefix"])),U=F}else if(X(m)){var W=O?J(m.children):[],Se=new d(W);W.forEach(function(P){return P.parent=Se}),U=Se}else if(K(m)){var W=O?J(m.children):[],Ne=new E(W);W.forEach(function(P){return P.parent=Ne}),m["x-mode"]&&(Ne["x-mode"]=m["x-mode"]),U=Ne}else if(G(m)){var xe=new g(m.name,m.data);m["x-name"]!=null&&(xe["x-name"]=m["x-name"],xe["x-publicId"]=m["x-publicId"],xe["x-systemId"]=m["x-systemId"]),U=xe}else throw new Error("Not implemented yet: ".concat(m.type));return U.startIndex=m.startIndex,U.endIndex=m.endIndex,m.sourceCodeLocation!=null&&(U.sourceCodeLocation=m.sourceCodeLocation),U}oe.cloneNode=te;function J(m){for(var O=m.map(function(W){return te(W,!0)}),U=1;U<O.length;U++)O[U].prev=O[U-1],O[U-1].next=O[U];return O}return oe}var Zb;function w0(){return Zb||(Zb=1,function(l){var u=tr&&tr.__createBinding||(Object.create?function(g,p,d,E){E===void 0&&(E=d);var C=Object.getOwnPropertyDescriptor(p,d);(!C||("get"in C?!p.__esModule:C.writable||C.configurable))&&(C={enumerable:!0,get:function(){return p[d]}}),Object.defineProperty(g,E,C)}:function(g,p,d,E){E===void 0&&(E=d),g[E]=p[d]}),o=tr&&tr.__exportStar||function(g,p){for(var d in g)d!=="default"&&!Object.prototype.hasOwnProperty.call(p,d)&&u(p,g,d)};Object.defineProperty(l,"__esModule",{value:!0}),l.DomHandler=void 0;var c=U0(),b=Qb();o(Qb(),l);var h={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},y=function(){function g(p,d,E){this.dom=[],this.root=new b.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof d=="function"&&(E=d,d=h),typeof p=="object"&&(d=p,p=void 0),this.callback=p??null,this.options=d??h,this.elementCB=E??null}return g.prototype.onparserinit=function(p){this.parser=p},g.prototype.onreset=function(){this.dom=[],this.root=new b.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},g.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},g.prototype.onerror=function(p){this.handleCallback(p)},g.prototype.onclosetag=function(){this.lastNode=null;var p=this.tagStack.pop();this.options.withEndIndices&&(p.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(p)},g.prototype.onopentag=function(p,d){var E=this.options.xmlMode?c.ElementType.Tag:void 0,C=new b.Element(p,d,void 0,E);this.addNode(C),this.tagStack.push(C)},g.prototype.ontext=function(p){var d=this.lastNode;if(d&&d.type===c.ElementType.Text)d.data+=p,this.options.withEndIndices&&(d.endIndex=this.parser.endIndex);else{var E=new b.Text(p);this.addNode(E),this.lastNode=E}},g.prototype.oncomment=function(p){if(this.lastNode&&this.lastNode.type===c.ElementType.Comment){this.lastNode.data+=p;return}var d=new b.Comment(p);this.addNode(d),this.lastNode=d},g.prototype.oncommentend=function(){this.lastNode=null},g.prototype.oncdatastart=function(){var p=new b.Text(""),d=new b.CDATA([p]);this.addNode(d),p.parent=d,this.lastNode=p},g.prototype.oncdataend=function(){this.lastNode=null},g.prototype.onprocessinginstruction=function(p,d){var E=new b.ProcessingInstruction(p,d);this.addNode(E)},g.prototype.handleCallback=function(p){if(typeof this.callback=="function")this.callback(p,this.dom);else if(p)throw p},g.prototype.addNode=function(p){var d=this.tagStack[this.tagStack.length-1],E=d.children[d.children.length-1];this.options.withStartIndices&&(p.startIndex=this.parser.startIndex),this.options.withEndIndices&&(p.endIndex=this.parser.endIndex),d.children.push(p),E&&(p.prev=E,E.next=p),p.parent=d,this.lastNode=null},g}();l.DomHandler=y,l.default=y}(tr)),tr}var ds={},Jb;function Zy(){return Jb||(Jb=1,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.CARRIAGE_RETURN_PLACEHOLDER_REGEX=l.CARRIAGE_RETURN_PLACEHOLDER=l.CARRIAGE_RETURN_REGEX=l.CARRIAGE_RETURN=l.CASE_SENSITIVE_TAG_NAMES_MAP=l.CASE_SENSITIVE_TAG_NAMES=void 0,l.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],l.CASE_SENSITIVE_TAG_NAMES_MAP=l.CASE_SENSITIVE_TAG_NAMES.reduce(function(u,o){return u[o.toLowerCase()]=o,u},{}),l.CARRIAGE_RETURN="\r",l.CARRIAGE_RETURN_REGEX=new RegExp(l.CARRIAGE_RETURN,"g"),l.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(),"__"),l.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(l.CARRIAGE_RETURN_PLACEHOLDER,"g")}(ds)),ds}var Fb;function B0(){if(Fb)return nr;Fb=1,Object.defineProperty(nr,"__esModule",{value:!0}),nr.formatAttributes=c,nr.escapeSpecialCharacters=h,nr.revertEscapedCharacters=y,nr.formatDOM=g;var l=w0(),u=Zy();function o(p){return u.CASE_SENSITIVE_TAG_NAMES_MAP[p]}function c(p){for(var d={},E=0,C=p.length;E<C;E++){var j=p[E];d[j.name]=j.value}return d}function b(p){p=p.toLowerCase();var d=o(p);return d||p}function h(p){return p.replace(u.CARRIAGE_RETURN_REGEX,u.CARRIAGE_RETURN_PLACEHOLDER)}function y(p){return p.replace(u.CARRIAGE_RETURN_PLACEHOLDER_REGEX,u.CARRIAGE_RETURN)}function g(p,d,E){d===void 0&&(d=null);for(var C=[],j,X=0,V=p.length;X<V;X++){var z=p[X];switch(z.nodeType){case 1:{var G=b(z.nodeName);j=new l.Element(G,c(z.attributes)),j.children=g(G==="template"?z.content.childNodes:z.childNodes,j);break}case 3:j=new l.Text(y(z.nodeValue));break;case 8:j=new l.Comment(z.nodeValue);break;default:continue}var K=C[X-1]||null;K&&(K.next=j),j.parent=d,j.prev=K,j.next=null,C.push(j)}return E&&(j=new l.ProcessingInstruction(E.substring(0,E.indexOf(" ")).toLowerCase(),E),j.next=C[0]||null,j.parent=d,C.unshift(j),C[1]&&(C[1].prev=C[0])),C}return nr}var $b;function Jy(){if($b)return Ol;$b=1,Object.defineProperty(Ol,"__esModule",{value:!0}),Ol.default=z;var l=B0(),u="html",o="head",c="body",b=/<([a-zA-Z]+[0-9]?)/,h=/<head[^]*>/i,y=/<body[^]*>/i,g=function(G,K){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},p=function(G,K){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},d=typeof window=="object"&&window.DOMParser;if(typeof d=="function"){var E=new d,C="text/html";p=function(G,K){return K&&(G="<".concat(K,">").concat(G,"</").concat(K,">")),E.parseFromString(G,C)},g=p}if(typeof document=="object"&&document.implementation){var j=document.implementation.createHTMLDocument();g=function(G,K){if(K){var Y=j.documentElement.querySelector(K);return Y&&(Y.innerHTML=G),j}return j.documentElement.innerHTML=G,j}}var X=typeof document=="object"&&document.createElement("template"),V;X&&X.content&&(V=function(G){return X.innerHTML=G,X.content.childNodes});function z(G){var K,Y;G=(0,l.escapeSpecialCharacters)(G);var te=G.match(b),J=te&&te[1]?te[1].toLowerCase():"";switch(J){case u:{var m=p(G);if(!h.test(G)){var O=m.querySelector(o);(K=O==null?void 0:O.parentNode)===null||K===void 0||K.removeChild(O)}if(!y.test(G)){var O=m.querySelector(c);(Y=O==null?void 0:O.parentNode)===null||Y===void 0||Y.removeChild(O)}return m.querySelectorAll(u)}case o:case c:{var U=g(G).querySelectorAll(J);return y.test(G)&&h.test(G)?U[0].parentNode.childNodes:U}default:{if(V)return V(G);var O=g(G,c).querySelector(c);return O.childNodes}}}return Ol}var e0;function Fy(){if(e0)return Zr;e0=1;var l=Zr&&Zr.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=b;var u=l(Jy()),o=B0(),c=/<(![a-zA-Z\s]+)>/;function b(h){if(typeof h!="string")throw new TypeError("First argument must be a string");if(!h)return[];var y=h.match(c),g=y?y[1]:void 0;return(0,o.formatDOM)((0,u.default)(h),null,g)}return Zr}var Nl={},Mn={},ni={},n0;function $y(){if(n0)return ni;n0=1;var l=0;ni.SAME=l;var u=1;return ni.CAMELCASE=u,ni.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},ni}var t0;function ev(){if(t0)return Mn;t0=1;const l=0,u=1,o=2,c=3,b=4,h=5,y=6;function g(m){return d.hasOwnProperty(m)?d[m]:null}function p(m,O,U,W,F,Se,Ne){this.acceptsBooleans=O===o||O===c||O===b,this.attributeName=W,this.attributeNamespace=F,this.mustUseProperty=U,this.propertyName=m,this.type=O,this.sanitizeURL=Se,this.removeEmptyString=Ne}const d={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(m=>{d[m]=new p(m,l,!1,m,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([m,O])=>{d[m]=new p(m,u,!1,O,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(m=>{d[m]=new p(m,o,!1,m.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(m=>{d[m]=new p(m,o,!1,m,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(m=>{d[m]=new p(m,c,!1,m.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(m=>{d[m]=new p(m,c,!0,m,null,!1,!1)}),["capture","download"].forEach(m=>{d[m]=new p(m,b,!1,m,null,!1,!1)}),["cols","rows","size","span"].forEach(m=>{d[m]=new p(m,y,!1,m,null,!1,!1)}),["rowSpan","start"].forEach(m=>{d[m]=new p(m,h,!1,m.toLowerCase(),null,!1,!1)});const C=/[\-\:]([a-z])/g,j=m=>m[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(m=>{const O=m.replace(C,j);d[O]=new p(O,u,!1,m,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(m=>{const O=m.replace(C,j);d[O]=new p(O,u,!1,m,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(m=>{const O=m.replace(C,j);d[O]=new p(O,u,!1,m,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(m=>{d[m]=new p(m,u,!1,m.toLowerCase(),null,!1,!1)});const X="xlinkHref";d[X]=new p("xlinkHref",u,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(m=>{d[m]=new p(m,u,!1,m.toLowerCase(),null,!0,!0)});const{CAMELCASE:V,SAME:z,possibleStandardNames:G}=$y(),Y=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",te=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Y+"]*$")),J=Object.keys(G).reduce((m,O)=>{const U=G[O];return U===z?m[O]=O:U===V?m[O.toLowerCase()]=O:m[O]=U,m},{});return Mn.BOOLEAN=c,Mn.BOOLEANISH_STRING=o,Mn.NUMERIC=h,Mn.OVERLOADED_BOOLEAN=b,Mn.POSITIVE_NUMERIC=y,Mn.RESERVED=l,Mn.STRING=u,Mn.getPropertyInfo=g,Mn.isCustomAttribute=te,Mn.possibleStandardNames=J,Mn}var ti={},Jr={},bs,r0;function nv(){if(r0)return bs;r0=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,u=/\n/g,o=/^\s*/,c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,b=/^:\s*/,h=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,y=/^[;\s]*/,g=/^\s+|\s+$/g,p=`
`,d="/",E="*",C="",j="comment",X="declaration";bs=function(z,G){if(typeof z!="string")throw new TypeError("First argument must be a string");if(!z)return[];G=G||{};var K=1,Y=1;function te(Q){var P=Q.match(u);P&&(K+=P.length);var be=Q.lastIndexOf(p);Y=~be?Q.length-be:Y+Q.length}function J(){var Q={line:K,column:Y};return function(P){return P.position=new m(Q),W(),P}}function m(Q){this.start=Q,this.end={line:K,column:Y},this.source=G.source}m.prototype.content=z;function O(Q){var P=new Error(G.source+":"+K+":"+Y+": "+Q);if(P.reason=Q,P.filename=G.source,P.line=K,P.column=Y,P.source=z,!G.silent)throw P}function U(Q){var P=Q.exec(z);if(P){var be=P[0];return te(be),z=z.slice(be.length),P}}function W(){U(o)}function F(Q){var P;for(Q=Q||[];P=Se();)P!==!1&&Q.push(P);return Q}function Se(){var Q=J();if(!(d!=z.charAt(0)||E!=z.charAt(1))){for(var P=2;C!=z.charAt(P)&&(E!=z.charAt(P)||d!=z.charAt(P+1));)++P;if(P+=2,C===z.charAt(P-1))return O("End of comment missing");var be=z.slice(2,P-2);return Y+=2,te(be),z=z.slice(P),Y+=2,Q({type:j,comment:be})}}function Ne(){var Q=J(),P=U(c);if(P){if(Se(),!U(b))return O("property missing ':'");var be=U(h),M=Q({type:X,property:V(P[0].replace(l,C)),value:be?V(be[0].replace(l,C)):C});return U(y),M}}function xe(){var Q=[];F(Q);for(var P;P=Ne();)P!==!1&&(Q.push(P),F(Q));return Q}return W(),xe()};function V(z){return z?z.replace(g,C):C}return bs}var a0;function tv(){if(a0)return Jr;a0=1;var l=Jr&&Jr.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=o;var u=l(nv());function o(c,b){var h=null;if(!c||typeof c!="string")return h;var y=(0,u.default)(c),g=typeof b=="function";return y.forEach(function(p){if(p.type==="declaration"){var d=p.property,E=p.value;g?b(d,E,p):E&&(h=h||{},h[d]=E)}}),h}return Jr}var ri={},i0;function rv(){if(i0)return ri;i0=1,Object.defineProperty(ri,"__esModule",{value:!0}),ri.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,u=/-([a-z])/g,o=/^[^-]+$/,c=/^-(webkit|moz|ms|o|khtml)-/,b=/^-(ms)-/,h=function(d){return!d||o.test(d)||l.test(d)},y=function(d,E){return E.toUpperCase()},g=function(d,E){return"".concat(E,"-")},p=function(d,E){return E===void 0&&(E={}),h(d)?d:(d=d.toLowerCase(),E.reactCompat?d=d.replace(b,g):d=d.replace(c,g),d.replace(u,y))};return ri.camelCase=p,ri}var ai,l0;function av(){if(l0)return ai;l0=1;var l=ai&&ai.__importDefault||function(b){return b&&b.__esModule?b:{default:b}},u=l(tv()),o=rv();function c(b,h){var y={};return!b||typeof b!="string"||(0,u.default)(b,function(g,p){g&&p&&(y[(0,o.camelCase)(g,h)]=p)}),y}return c.default=c,ai=c,ai}var u0;function j0(){return u0||(u0=1,function(l){var u=ti&&ti.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(l,"__esModule",{value:!0}),l.returnFirstArg=l.canTextBeChildOfNode=l.ELEMENTS_WITH_NO_TEXT_CHILDREN=l.PRESERVE_CUSTOM_ATTRIBUTES=void 0,l.isCustomComponent=h,l.setStyleProp=g;var o=ea(),c=u(av()),b=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function h(E,C){return E.includes("-")?!b.has(E):!!(C&&typeof C.is=="string")}var y={reactCompat:!0};function g(E,C){if(typeof E=="string"){if(!E.trim()){C.style={};return}try{C.style=(0,c.default)(E,y)}catch{C.style={}}}}l.PRESERVE_CUSTOM_ATTRIBUTES=Number(o.version.split(".")[0])>=16,l.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var p=function(E){return!l.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(E.name)};l.canTextBeChildOfNode=p;var d=function(E){return E};l.returnFirstArg=d}(ti)),ti}var c0;function z0(){if(c0)return Nl;c0=1,Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.default=h;var l=ev(),u=j0(),o=["checked","value"],c=["input","select","textarea"],b={reset:!0,submit:!0};function h(g,p){g===void 0&&(g={});var d={},E=!!(g.type&&b[g.type]);for(var C in g){var j=g[C];if((0,l.isCustomAttribute)(C)){d[C]=j;continue}var X=C.toLowerCase(),V=y(X);if(V){var z=(0,l.getPropertyInfo)(V);switch(o.includes(V)&&c.includes(p)&&!E&&(V=y("default"+X)),d[V]=j,z&&z.type){case l.BOOLEAN:d[V]=!0;break;case l.OVERLOADED_BOOLEAN:j===""&&(d[V]=!0);break}continue}u.PRESERVE_CUSTOM_ATTRIBUTES&&(d[C]=j)}return(0,u.setStyleProp)(g.style,d),d}function y(g){return l.possibleStandardNames[g]}return Nl}var Fr={},s0;function iv(){if(s0)return Fr;s0=1;var l=Fr&&Fr.__importDefault||function(g){return g&&g.__esModule?g:{default:g}};Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.default=h;var u=ea(),o=l(z0()),c=j0(),b={cloneElement:u.cloneElement,createElement:u.createElement,isValidElement:u.isValidElement};function h(g,p){p===void 0&&(p={});for(var d=[],E=typeof p.replace=="function",C=p.transform||c.returnFirstArg,j=p.library||b,X=j.cloneElement,V=j.createElement,z=j.isValidElement,G=g.length,K=0;K<G;K++){var Y=g[K];if(E){var te=p.replace(Y,K);if(z(te)){G>1&&(te=X(te,{key:te.key||K})),d.push(C(te,Y,K));continue}}if(Y.type==="text"){var J=!Y.data.trim().length;if(J&&Y.parent&&!(0,c.canTextBeChildOfNode)(Y.parent)||p.trim&&J)continue;d.push(C(Y.data,Y,K));continue}var m=Y,O={};y(m)?((0,c.setStyleProp)(m.attribs.style,m.attribs),O=m.attribs):m.attribs&&(O=(0,o.default)(m.attribs,m.name));var U=void 0;switch(Y.type){case"script":case"style":Y.children[0]&&(O.dangerouslySetInnerHTML={__html:Y.children[0].data});break;case"tag":Y.name==="textarea"&&Y.children[0]?O.defaultValue=Y.children[0].data:Y.children&&Y.children.length&&(U=h(Y.children,p));break;default:continue}G>1&&(O.key=K),d.push(C(V(Y.name,O,U),Y,K))}return d.length===1?d[0]:d}function y(g){return c.PRESERVE_CUSTOM_ATTRIBUTES&&g.type==="tag"&&(0,c.isCustomComponent)(g.name,g.attribs)}return Fr}var o0;function lv(){return o0||(o0=1,function(l){var u=ei&&ei.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(l,"__esModule",{value:!0}),l.htmlToDOM=l.domToReact=l.attributesToProps=l.Text=l.ProcessingInstruction=l.Element=l.Comment=void 0,l.default=g;var o=u(Fy());l.htmlToDOM=o.default;var c=u(z0());l.attributesToProps=c.default;var b=u(iv());l.domToReact=b.default;var h=w0();Object.defineProperty(l,"Comment",{enumerable:!0,get:function(){return h.Comment}}),Object.defineProperty(l,"Element",{enumerable:!0,get:function(){return h.Element}}),Object.defineProperty(l,"ProcessingInstruction",{enumerable:!0,get:function(){return h.ProcessingInstruction}}),Object.defineProperty(l,"Text",{enumerable:!0,get:function(){return h.Text}});var y={lowerCaseAttributeNames:!1};function g(p,d){if(typeof p!="string")throw new TypeError("First argument must be a string");return p?(0,b.default)((0,o.default)(p,(d==null?void 0:d.htmlparser2)||y),d):[]}}(ei)),ei}var uv=lv();const f0=lm(uv),cv=f0.default||f0;function sv({title:l,subtitle:u,iconUrl:o,content:c,price:b,rarity:h,onAvoid:y,showAvoidButton:g}){return A.jsxs("div",{className:"flex flex-col font-noto font-bold opacity-90 rounded-[10px] overflow-hidden",style:{borderTop:`7px solid ${Ul(h)}`,borderBottom:`3px solid ${Ul(h)}`,background:"#0e1325"},children:[A.jsxs("div",{className:"flex items-center gap-4 px-5 py-4",children:[o&&A.jsx("img",{src:o,alt:"",width:60,height:60,className:"rounded-lg object-cover"}),A.jsxs("div",{children:[A.jsx("div",{className:"text-lg font-bold",style:{color:"#fdfdfd"},children:l}),u&&A.jsx("div",{className:"text-sm font-semibold",style:{color:"#f67422"},children:u})]})]}),A.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),A.jsx("div",{className:"flex flex-col gap-2 px-5 py-4",children:c.map((p,d)=>A.jsxs("div",{className:"flex items-center gap-3",children:[p.iconUrl&&A.jsx("img",{src:p.iconUrl,alt:"",width:30,height:30,className:"rounded object-cover",style:{borderRadius:4}}),A.jsx("span",{className:"font-normal font-merriweather",style:{color:"#fdfdfd"},children:cv(p.text)})]},d))}),A.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),A.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[A.jsx("span",{className:"font-mono text-base font-bold",style:{color:"#fdfdfd"},children:b}),g&&A.jsx("button",{type:"button","aria-label":`Avoid ${l}`,className:"text-xs text-red-500 hover:underline",onClick:y,children:"Avoid"})]})]})}function ov({eqItems:l,eqCost:u,cash:o,results:c,alternatives:b}){const h=Wn(),y=sn(g=>g.input.present.avoidEnabled);return A.jsxs("div",{className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[A.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"Results"}),c?A.jsxs("div",{className:"space-y-6",children:[A.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[A.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[A.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Weighted Score"}),A.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600",children:c.score.toFixed(2)})]}),A.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[A.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Total Cost"}),A.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600",children:u+c.cost})]}),A.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[A.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Cash Remaining"}),A.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600",children:o-u-c.cost})]})]}),c.breakdown&&A.jsxs("div",{className:"text-sm text-gray-600",children:[A.jsx("strong",{children:"Breakdown:"}),A.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Type"}),A.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Sum"}),A.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Contribution"})]})}),A.jsx("tbody",{children:c.breakdown.map(g=>A.jsxs("tr",{children:[A.jsx("td",{className:"px-2 py-1",children:ur(g.type)}),A.jsx("td",{className:"px-2 py-1",children:g.sum}),A.jsx("td",{className:"px-2 py-1",children:g.contrib.toFixed(2)})]},g.type))})]})]}),A.jsxs("div",{children:[A.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Final Build"}),A.jsx("ul",{className:"mt-2 space-y-3",children:[...l,...c.items].map(g=>A.jsx("li",{children:A.jsx(sv,{title:g.name,rarity:g.rarity,content:g.attributes.map(p=>({text:`<span class='font-medium'>${ur(p.type)}</span> <strong>${Qy(p.value)}</strong>`})),price:`${g.cost} G`,showAvoidButton:!0,onAvoid:()=>{y||h(D0()),h(x0(g.id||g.name))}})},g.id))})]}),b.length>0&&A.jsxs("div",{children:[A.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Alternative Builds"}),A.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto",children:b.map((g,p)=>A.jsxs("li",{className:"text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100",children:[A.jsxs("strong",{children:["Cost: ",g.cost]})," - ",g.items.map(d=>d.name).join(", ")]},p))})]})]}):A.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 p-12",children:[A.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:A.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),A.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No results yet"}),A.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Fill out the form and click calculate to see the magic."})]})]})}function fv(l,u){const b=Math.min(u?3.5:7,l*(u?.25:.5));return l-b}function dv(l,u,o,c,b){if(l<=0||u<=0)return{shots:1/0,totalDamage:0};let h=o,y=c,g=0,p=0;for(;h>0;){g++;for(let d=0;d<u;d++){let E=l;if(y>0){E=fv(E,b);const C=Math.min(E,y);y-=C,E-=C}if(h-=E,p+=l,h<=0)break}}return{shots:g,totalDamage:p}}function bv(l,u,o,c,b){const h=[];for(let y=100;y<=200;y+=5){const g=l*(y/100),{shots:p,totalDamage:d}=dv(g,u,o,c,b);h.push({percent:y,shots:p,totalDamage:d})}return h}function pv(){const[l,u]=ue.useState(!0),[o,c]=ue.useState(75),[b,h]=ue.useState(1),[y,g]=ue.useState(300),[p,d]=ue.useState(0),[E,C]=ue.useState(!1),[j,X]=ue.useState([]),V=()=>{X(bv(o,b,y,p,E))};return A.jsxs("div",{className:"bg-white rounded-xl shadow-lg",children:[A.jsx("button",{className:"w-full text-left p-4 font-bold text-xl border-b",onClick:()=>u(!l),children:"Break Point Damage Calculator"}),!l&&A.jsxs("div",{className:"p-4 space-y-4",children:[A.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[A.jsxs("label",{className:"space-y-1",children:[A.jsx("span",{className:"block text-sm",children:"Damage per Bullet"}),A.jsx("input",{type:"number",value:o,onChange:z=>c(Number(z.target.value)),className:"w-full border rounded p-1"})]}),A.jsxs("label",{className:"space-y-1",children:[A.jsx("span",{className:"block text-sm",children:"Bullets per Shot"}),A.jsx("input",{type:"number",value:b,onChange:z=>h(Number(z.target.value)),className:"w-full border rounded p-1"})]}),A.jsxs("label",{className:"space-y-1",children:[A.jsx("span",{className:"block text-sm",children:"Enemy HP"}),A.jsx("input",{type:"number",value:y,onChange:z=>g(Number(z.target.value)),className:"w-full border rounded p-1"})]}),A.jsxs("label",{className:"space-y-1",children:[A.jsx("span",{className:"block text-sm",children:"Enemy Armor"}),A.jsx("input",{type:"number",value:p,onChange:z=>d(Number(z.target.value)),className:"w-full border rounded p-1"})]}),A.jsxs("label",{className:"flex items-center space-x-2 mt-6",children:[A.jsx("input",{type:"checkbox",checked:E,onChange:z=>C(z.target.checked)}),A.jsx("span",{children:"Using armor penetration item"})]})]}),A.jsx("button",{onClick:V,className:"bg-indigo-600 text-white px-4 py-1 rounded",children:"Calculate"}),j.length>0&&A.jsxs("table",{className:"w-full text-sm mt-4 border",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{className:"border px-2 py-1",children:"Damage %"}),A.jsx("th",{className:"border px-2 py-1",children:"Per Bullet"}),A.jsx("th",{className:"border px-2 py-1",children:"Per Shot"}),A.jsx("th",{className:"border px-2 py-1",children:"Shots"}),A.jsx("th",{className:"border px-2 py-1",children:"Accumulated"})]})}),A.jsx("tbody",{children:j.map((z,G)=>{const K=G>0?j[G-1].shots:z.shots,Y=z.shots<K,te=o*z.percent/100,J=te*b;return A.jsxs("tr",{className:Y?"bg-yellow-100":"",children:[A.jsxs("td",{className:"border px-2 py-1",children:[z.percent,"%"]}),A.jsx("td",{className:"border px-2 py-1",children:te.toFixed(1)}),A.jsx("td",{className:"border px-2 py-1",children:J.toFixed(1)}),A.jsx("td",{className:"border px-2 py-1",children:z.shots}),A.jsx("td",{className:"border px-2 py-1",children:z.totalDamage.toFixed(1)})]},z.percent)})})]})]})]})}const hv=`{\r
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
}`,mv=`{\r
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
}`;function yv(){const[l,u]=ue.useState([]),[o,c]=ue.useState([]),[b,h]=ue.useState([]),y=Wn(),g=sn(Q=>Q.input.present),{hero:p,cash:d,equipped:E,toBuy:C,avoid:j,avoidEnabled:X,weights:V,minValueEnabled:z,minAttrGroups:G}=g,[K,Y]=ue.useState(null),[te,J]=ue.useState([]);ue.useEffect(()=>{const Q=JSON.parse(hv),P=JSON.parse(mv),be=[],M=(L,k,q)=>{q.forEach($=>{const ce=P[$.name],ae={...$,tab:L,rarity:k};ce!=null&&ce.attributes&&(ae.attributes=ce.attributes),be.push(ae)})};["weapon","ability","survival"].forEach(L=>{const k=Q.tabs[L];M(L,"common",k.common),M(L,"rare",k.rare),M(L,"epic",k.epic)}),u(be);const I=new Set,ee=new Map,pe=new Set;be.forEach(L=>{L.character&&I.add(L.character),L.attributes.forEach(k=>{const q=(ee.get(k.type)??0)+1;ee.set(k.type,q),q===2&&pe.add(k.type)})}),pe.delete("description"),pe.delete("Editor's Note");const S=Array.from(pe).sort(Yy);c(Array.from(I).sort()),h(S),y(C0({index:0,type:S[0]}))},[]),ue.useEffect(()=>{const Q=E.filter(P=>P).length;C+Q>6&&y(N0(Math.max(0,6-Q)))},[y,E,C]);function m(){return E.map(Q=>l.find(P=>P.id===Q)).filter(Q=>!!Q)}function O(){if(!p||d<0||m().reduce((P,be)=>P+be.cost,0)>d||C+m().length>6||V.length===0)return!1;if(z){for(const P of G)if(P.attrs.length===0||P.value<0)return!1}return!0}function U(Q){const P=As(Q);return Kb(P,V)}function W(Q){return!z||ky([...Q,...m()],G)}function F(){y(_l(""));const Q=m(),P=Q.reduce((he,He)=>he+He.cost,0),be=d-P;if(be<0){y(_l("Equipped items cost exceeds total cash"));return}const M=M0(V,z,G),I=l.filter(he=>(!he.character||he.character===p)&&!E.includes(he.id??"")&&(!X||!j.includes(he.id??""))&&he.attributes.some(He=>M.has(He.type))),ee=C;if(ee===0){if(!W([])){y(_l("Minimum attribute values not met"));return}const he=U(Q);Y({items:[],cost:0,score:he}),J([]);return}const pe=I.map(he=>({item:he,score:U([he])}));pe.sort((he,He)=>He.score-he.score);const S=[0];for(const he of pe)S.push(S[S.length-1]+he.score);let L=-1/0,k=0,q=[];const $=Q.length+ee===6,ce=pe.length;function ae(he,He,on,qn){if(W(He)&&(qn>L||qn===L&&($?on>k:on<k)?(L=qn,k=on,q=[{items:[...He],cost:on,score:qn}]):qn===L&&($?on<=k:on>=k)&&q.push({items:[...He],cost:on,score:qn})),He.length===ee||he>=ce)return;const kl=ee-He.length;if(!(qn+(S[Math.min(ce,he+kl)]-S[he])<L))for(let or=he;or<ce;or++){const Bt=pe[or];on+Bt.item.cost>be||(He.push(Bt.item),ae(or+1,He,on+Bt.item.cost,qn+Bt.score),He.pop())}}if(ae(0,[],0,0),q.length===0){y(_l("Insufficient cash for any purchase"));return}const[qe,...Ce]=q.sort((he,He)=>$?He.cost-he.cost:he.cost-He.cost),kn=Ce.filter(he=>$?he.cost<qe.cost:he.cost>qe.cost).sort((he,He)=>$?He.cost-he.cost:he.cost-He.cost),cr=As([...qe.items,...Q]),sr=qy(cr,V,z,G);Y({items:qe.items,cost:qe.cost,score:Kb(cr,V),breakdown:sr}),J(kn.map(he=>({...he,score:U([...he.items,...Q])})))}if(l.length===0)return A.jsx("div",{className:"p-4",children:"Loading..."});const Se=l.filter(Q=>!p||!Q.character||Q.character===p),Ne=m(),xe=Ne.reduce((Q,P)=>Q+P.cost,0);return A.jsxs("div",{className:"bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 space-y-8",children:[A.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",children:[A.jsx(Py,{heroes:o,attrTypes:b,filteredItems:Se,onSubmit:F,validate:O}),A.jsx(ov,{eqItems:Ne,eqCost:xe,cash:d,results:K,alternatives:te})]}),A.jsx("div",{className:"max-w-7xl mx-auto",children:A.jsx(pv,{})})]})}const Hn={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},xl={undo(){return{type:Hn.UNDO}},redo(){return{type:Hn.REDO}},jumpToFuture(l){return{type:Hn.JUMP_TO_FUTURE,index:l}},jumpToPast(l){return{type:Hn.JUMP_TO_PAST,index:l}},jump(l){return{type:Hn.JUMP,index:l}},clearHistory(){return{type:Hn.CLEAR_HISTORY}}};function d0(l,u=[]){return Array.isArray(l)?l:typeof l=="string"?[l]:u}function vv(l){return typeof l.present<"u"&&typeof l.future<"u"&&typeof l.past<"u"&&Array.isArray(l.future)&&Array.isArray(l.past)}function ar(l,u,o,c=null){return{past:l,present:u,future:o,group:c,_latestUnfiltered:u,index:l.length,limit:l.length+o.length+1}}let Gl,Ln;const Ts={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function gv(){Ln={header:[],prev:[],action:[],next:[],msgs:[]}}function Sv(){const{header:l,prev:u,next:o,action:c,msgs:b}=Ln;console.group?(console.groupCollapsed(...l),console.log(...u),console.log(...c),console.log(...o),console.log(...b),console.groupEnd()):(console.log(...l),console.log(...u),console.log(...c),console.log(...o),console.log(...b))}function Rs(l,u,o){return[`%c${l}`,`color: ${u}; font-weight: bold`,o]}function Ev(l,u){gv(),Gl&&(console.group?(Ln.header=["%credux-undo","font-style: italic","action",l.type],Ln.action=Rs("action",Ts.action,l),Ln.prev=Rs("prev history",Ts.prevState,u)):(Ln.header=["redux-undo action",l.type],Ln.action=["action",l],Ln.prev=["prev history",u]))}function zn(l){Gl&&(console.group?Ln.next=Rs("next history",Ts.nextState,l):Ln.next=["next history",l],Sv())}function nn(...l){Gl&&(Ln.msgs=Ln.msgs.concat([...l,`
`]))}function Av(l){Gl=l}function ps(l,u){const o=ar([],l,[]);return u&&(o._latestUnfiltered=null),o}function Tv(l,u,o,c){const b=l.past.length+1;nn("inserting",u),nn("new free: ",o-b);const{past:h,_latestUnfiltered:y}=l,g=o&&o<=b,p=h.slice(g?1:0),d=y!=null?[...p,y]:p;return ar(d,u,[],c)}function G0(l,u){if(u<0||u>=l.future.length)return l;const{past:o,future:c,_latestUnfiltered:b}=l,h=[...o,b,...c.slice(0,u)],y=c[u],g=c.slice(u+1);return ar(h,y,g)}function k0(l,u){if(u<0||u>=l.past.length)return l;const{past:o,future:c,_latestUnfiltered:b}=l,h=o.slice(0,u),y=[...o.slice(u+1),b,...c],g=o[u];return ar(h,g,y)}function hs(l,u){return u>0?G0(l,u-1):u<0?k0(l,l.past.length+u):l}function Rv(l,u){return u.indexOf(l)>-1?l:!l}function _v(l,u={}){Av(u.debug);const o={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:Hn.UNDO,redoType:Hn.REDO,jumpToPastType:Hn.JUMP_TO_PAST,jumpToFutureType:Hn.JUMP_TO_FUTURE,jumpType:Hn.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...u,initTypes:d0(u.initTypes,["@@redux-undo/INIT"]),clearHistoryType:d0(u.clearHistoryType,[Hn.CLEAR_HISTORY])},c=o.neverSkipReducer?(h,y,...g)=>({...h,present:l(h.present,y,...g)}):h=>h;let b;return(h=b,y={},...g)=>{Ev(y,h);let p=h;if(!b)if(nn("history is uninitialized"),h===void 0){const E=l(h,{type:"@@redux-undo/CREATE_HISTORY"},...g);return p=ps(E,o.ignoreInitialState),nn("do not set initialState on probe actions"),zn(p),p}else vv(h)?(p=b=o.ignoreInitialState?h:ar(h.past,h.present,h.future),nn("initialHistory initialized: initialState is a history",b)):(p=b=ps(h,o.ignoreInitialState),nn("initialHistory initialized: initialState is not a history",b));let d;switch(y.type){case void 0:return p;case o.undoType:return d=hs(p,-1),nn("perform undo"),zn(d),c(d,y,...g);case o.redoType:return d=hs(p,1),nn("perform redo"),zn(d),c(d,y,...g);case o.jumpToPastType:return d=k0(p,y.index),nn(`perform jumpToPast to ${y.index}`),zn(d),c(d,y,...g);case o.jumpToFutureType:return d=G0(p,y.index),nn(`perform jumpToFuture to ${y.index}`),zn(d),c(d,y,...g);case o.jumpType:return d=hs(p,y.index),nn(`perform jump to ${y.index}`),zn(d),c(d,y,...g);case Rv(y.type,o.clearHistoryType):return d=ps(p.present,o.ignoreInitialState),nn("perform clearHistory"),zn(d),c(d,y,...g);default:if(d=l(p.present,y,...g),o.initTypes.some(C=>C===y.type))return nn("reset history due to init action"),zn(b),b;if(p._latestUnfiltered===d)return p;if(typeof o.filter=="function"&&!o.filter(y,d,p)){const C=ar(p.past,d,p.future,p.group);return o.syncFilter||(C._latestUnfiltered=p._latestUnfiltered),nn("filter ignored action, not storing it in past"),zn(C),C}const E=o.groupBy(y,d,p);if(E!=null&&E===p.group){const C=ar(p.past,d,p.future,p.group);return nn("groupBy grouped the action with the previous action"),zn(C),C}return p=Tv(p,d,o.limit,E),nn("inserted new state into history"),zn(p),p}}}function Ov(l){return`${l.hero} - $${l.cash}`}function Nv({history:l}){const[u,o]=ue.useState(!1),c=ue.useRef(null);return ue.useEffect(()=>{const b=h=>{c.current&&!c.current.contains(h.target)&&o(!1)};return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[]),A.jsxs("div",{className:"relative",ref:c,children:[A.jsxs("button",{type:"button",onClick:()=>o(b=>!b),className:"flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:["History",A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:A.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),u&&A.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 bg-white text-sm shadow-lg",children:l.length>0?A.jsx("ul",{children:l.map((b,h)=>A.jsx("li",{className:"border-b px-3 py-2 last:border-none",children:Ov(b)},h))}):A.jsx("p",{className:"p-3 text-gray-500",children:"No history"})})]})}function xv(){const l=Wn(),u=sn(c=>c.input.past),o=sn(c=>c.input.future);return ue.useEffect(()=>{const c=b=>{b.ctrlKey&&b.key.toLowerCase()==="z"&&(b.preventDefault(),b.shiftKey?l(xl.redo()):l(xl.undo()))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[l]),A.jsxs("div",{className:"mb-6 flex items-center justify-between gap-4",children:[A.jsxs("div",{className:"flex gap-2",children:[A.jsx("button",{type:"button",disabled:u.length===0,onClick:()=>l(xl.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400",children:"Undo"}),A.jsx("button",{type:"button",disabled:o.length===0,onClick:()=>l(xl.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400",children:"Redo"})]}),A.jsx(Nv,{history:u})]})}function Dv(){return A.jsx("div",{className:"min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-6 text-gray-800",children:A.jsxs("div",{className:"max-w-5xl mx-auto",children:[A.jsx(xv,{}),A.jsx(yv,{})]})})}const Cv=cy({reducer:{input:_v(By)}});mm.createRoot(document.getElementById("root")).render(A.jsx(ue.StrictMode,{children:A.jsx(Mm,{store:Cv,children:A.jsx(Dv,{})})}));
