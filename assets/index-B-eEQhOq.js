(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const p of h)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function s(h){const p={};return h.integrity&&(p.integrity=h.integrity),h.referrerPolicy&&(p.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?p.credentials="include":h.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function c(h){if(h.ep)return;h.ep=!0;const p=s(h);fetch(h.href,p)}})();function uy(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var $c={exports:{}},Fa={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb;function cy(){if(Tb)return Fa;Tb=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function s(c,h,p){var m=null;if(p!==void 0&&(m=""+p),h.key!==void 0&&(m=""+h.key),"key"in h){p={};for(var v in h)v!=="key"&&(p[v]=h[v])}else p=h;return h=p.ref,{$$typeof:l,type:c,key:m,ref:h!==void 0?h:null,props:p}}return Fa.Fragment=u,Fa.jsx=s,Fa.jsxs=s,Fa}var _b;function oy(){return _b||(_b=1,$c.exports=cy()),$c.exports}var S=oy(),eo={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ob;function sy(){if(Ob)return oe;Ob=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),C=Symbol.iterator;function j(A){return A===null||typeof A!="object"?null:(A=C&&A[C]||A["@@iterator"],typeof A=="function"?A:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},X=Object.assign,Y={};function k(A,L,G){this.props=A,this.context=L,this.refs=Y,this.updater=G||z}k.prototype.isReactComponent={},k.prototype.setState=function(A,L){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,L,"setState")},k.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function K(){}K.prototype=k.prototype;function I(A,L,G){this.props=A,this.context=L,this.refs=Y,this.updater=G||z}var re=I.prototype=new K;re.constructor=I,X(re,k.prototype),re.isPureReactComponent=!0;var F=Array.isArray,y={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function w(A,L,G,q,$,ce){return G=ce.ref,{$$typeof:l,type:A,key:L,ref:G!==void 0?G:null,props:ce}}function W(A,L){return w(A.type,L,void 0,void 0,void 0,A.props)}function J(A){return typeof A=="object"&&A!==null&&A.$$typeof===l}function Se(A){var L={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(G){return L[G]})}var xe=/\/+/g;function Ne(A,L){return typeof A=="object"&&A!==null&&A.key!=null?Se(""+A.key):L.toString(36)}function Q(){}function P(A){switch(A.status){case"fulfilled":return A.value;case"rejected":throw A.reason;default:switch(typeof A.status=="string"?A.then(Q,Q):(A.status="pending",A.then(function(L){A.status==="pending"&&(A.status="fulfilled",A.value=L)},function(L){A.status==="pending"&&(A.status="rejected",A.reason=L)})),A.status){case"fulfilled":return A.value;case"rejected":throw A.reason}}throw A}function be(A,L,G,q,$){var ce=typeof A;(ce==="undefined"||ce==="boolean")&&(A=null);var ae=!1;if(A===null)ae=!0;else switch(ce){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(A.$$typeof){case l:case u:ae=!0;break;case E:return ae=A._init,be(ae(A._payload),L,G,q,$)}}if(ae)return $=$(A),ae=q===""?"."+Ne(A,0):q,F($)?(G="",ae!=null&&(G=ae.replace(xe,"$&/")+"/"),be($,L,G,"",function(Gn){return Gn})):$!=null&&(J($)&&($=W($,G+($.key==null||A&&A.key===$.key?"":(""+$.key).replace(xe,"$&/")+"/")+ae)),L.push($)),1;ae=0;var qe=q===""?".":q+":";if(F(A))for(var Ce=0;Ce<A.length;Ce++)q=A[Ce],ce=qe+Ne(q,Ce),ae+=be(q,L,G,ce,$);else if(Ce=j(A),typeof Ce=="function")for(A=Ce.call(A),Ce=0;!(q=A.next()).done;)q=q.value,ce=qe+Ne(q,Ce++),ae+=be(q,L,G,ce,$);else if(ce==="object"){if(typeof A.then=="function")return be(P(A),L,G,q,$);throw L=String(A),Error("Objects are not valid as a React child (found: "+(L==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":L)+"). If you meant to render a collection of children, use an array instead.")}return ae}function M(A,L,G){if(A==null)return A;var q=[],$=0;return be(A,q,"","",function(ce){return L.call(G,ce,$++)}),q}function V(A){if(A._status===-1){var L=A._result;L=L(),L.then(function(G){(A._status===0||A._status===-1)&&(A._status=1,A._result=G)},function(G){(A._status===0||A._status===-1)&&(A._status=2,A._result=G)}),A._status===-1&&(A._status=0,A._result=L)}if(A._status===1)return A._result.default;throw A._result}var ee=typeof reportError=="function"?reportError:function(A){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var L=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof A=="object"&&A!==null&&typeof A.message=="string"?String(A.message):String(A),error:A});if(!window.dispatchEvent(L))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",A);return}console.error(A)};function he(){}return oe.Children={map:M,forEach:function(A,L,G){M(A,function(){L.apply(this,arguments)},G)},count:function(A){var L=0;return M(A,function(){L++}),L},toArray:function(A){return M(A,function(L){return L})||[]},only:function(A){if(!J(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},oe.Component=k,oe.Fragment=s,oe.Profiler=h,oe.PureComponent=I,oe.StrictMode=c,oe.Suspense=b,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=y,oe.__COMPILER_RUNTIME={__proto__:null,c:function(A){return y.H.useMemoCache(A)}},oe.cache=function(A){return function(){return A.apply(null,arguments)}},oe.cloneElement=function(A,L,G){if(A==null)throw Error("The argument must be a React element, but you passed "+A+".");var q=X({},A.props),$=A.key,ce=void 0;if(L!=null)for(ae in L.ref!==void 0&&(ce=void 0),L.key!==void 0&&($=""+L.key),L)!O.call(L,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&L.ref===void 0||(q[ae]=L[ae]);var ae=arguments.length-2;if(ae===1)q.children=G;else if(1<ae){for(var qe=Array(ae),Ce=0;Ce<ae;Ce++)qe[Ce]=arguments[Ce+2];q.children=qe}return w(A.type,$,void 0,void 0,ce,q)},oe.createContext=function(A){return A={$$typeof:m,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null},A.Provider=A,A.Consumer={$$typeof:p,_context:A},A},oe.createElement=function(A,L,G){var q,$={},ce=null;if(L!=null)for(q in L.key!==void 0&&(ce=""+L.key),L)O.call(L,q)&&q!=="key"&&q!=="__self"&&q!=="__source"&&($[q]=L[q]);var ae=arguments.length-2;if(ae===1)$.children=G;else if(1<ae){for(var qe=Array(ae),Ce=0;Ce<ae;Ce++)qe[Ce]=arguments[Ce+2];$.children=qe}if(A&&A.defaultProps)for(q in ae=A.defaultProps,ae)$[q]===void 0&&($[q]=ae[q]);return w(A,ce,void 0,void 0,null,$)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(A){return{$$typeof:v,render:A}},oe.isValidElement=J,oe.lazy=function(A){return{$$typeof:E,_payload:{_status:-1,_result:A},_init:V}},oe.memo=function(A,L){return{$$typeof:d,type:A,compare:L===void 0?null:L}},oe.startTransition=function(A){var L=y.T,G={};y.T=G;try{var q=A(),$=y.S;$!==null&&$(G,q),typeof q=="object"&&q!==null&&typeof q.then=="function"&&q.then(he,ee)}catch(ce){ee(ce)}finally{y.T=L}},oe.unstable_useCacheRefresh=function(){return y.H.useCacheRefresh()},oe.use=function(A){return y.H.use(A)},oe.useActionState=function(A,L,G){return y.H.useActionState(A,L,G)},oe.useCallback=function(A,L){return y.H.useCallback(A,L)},oe.useContext=function(A){return y.H.useContext(A)},oe.useDebugValue=function(){},oe.useDeferredValue=function(A,L){return y.H.useDeferredValue(A,L)},oe.useEffect=function(A,L,G){var q=y.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return q.useEffect(A,L)},oe.useId=function(){return y.H.useId()},oe.useImperativeHandle=function(A,L,G){return y.H.useImperativeHandle(A,L,G)},oe.useInsertionEffect=function(A,L){return y.H.useInsertionEffect(A,L)},oe.useLayoutEffect=function(A,L){return y.H.useLayoutEffect(A,L)},oe.useMemo=function(A,L){return y.H.useMemo(A,L)},oe.useOptimistic=function(A,L){return y.H.useOptimistic(A,L)},oe.useReducer=function(A,L,G){return y.H.useReducer(A,L,G)},oe.useRef=function(A){return y.H.useRef(A)},oe.useState=function(A){return y.H.useState(A)},oe.useSyncExternalStore=function(A,L,G){return y.H.useSyncExternalStore(A,L,G)},oe.useTransition=function(){return y.H.useTransition()},oe.version="19.1.0",oe}var xb;function ea(){return xb||(xb=1,eo.exports=sy()),eo.exports}var ue=ea(),no={exports:{}},$a={},to={exports:{}},ro={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nb;function fy(){return Nb||(Nb=1,function(l){function u(M,V){var ee=M.length;M.push(V);e:for(;0<ee;){var he=ee-1>>>1,A=M[he];if(0<h(A,V))M[he]=V,M[ee]=A,ee=he;else break e}}function s(M){return M.length===0?null:M[0]}function c(M){if(M.length===0)return null;var V=M[0],ee=M.pop();if(ee!==V){M[0]=ee;e:for(var he=0,A=M.length,L=A>>>1;he<L;){var G=2*(he+1)-1,q=M[G],$=G+1,ce=M[$];if(0>h(q,ee))$<A&&0>h(ce,q)?(M[he]=ce,M[$]=ee,he=$):(M[he]=q,M[G]=ee,he=G);else if($<A&&0>h(ce,ee))M[he]=ce,M[$]=ee,he=$;else break e}}return V}function h(M,V){var ee=M.sortIndex-V.sortIndex;return ee!==0?ee:M.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;l.unstable_now=function(){return p.now()}}else{var m=Date,v=m.now();l.unstable_now=function(){return m.now()-v}}var b=[],d=[],E=1,C=null,j=3,z=!1,X=!1,Y=!1,k=!1,K=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function F(M){for(var V=s(d);V!==null;){if(V.callback===null)c(d);else if(V.startTime<=M)c(d),V.sortIndex=V.expirationTime,u(b,V);else break;V=s(d)}}function y(M){if(Y=!1,F(M),!X)if(s(b)!==null)X=!0,O||(O=!0,Ne());else{var V=s(d);V!==null&&be(y,V.startTime-M)}}var O=!1,w=-1,W=5,J=-1;function Se(){return k?!0:!(l.unstable_now()-J<W)}function xe(){if(k=!1,O){var M=l.unstable_now();J=M;var V=!0;try{e:{X=!1,Y&&(Y=!1,I(w),w=-1),z=!0;var ee=j;try{n:{for(F(M),C=s(b);C!==null&&!(C.expirationTime>M&&Se());){var he=C.callback;if(typeof he=="function"){C.callback=null,j=C.priorityLevel;var A=he(C.expirationTime<=M);if(M=l.unstable_now(),typeof A=="function"){C.callback=A,F(M),V=!0;break n}C===s(b)&&c(b),F(M)}else c(b);C=s(b)}if(C!==null)V=!0;else{var L=s(d);L!==null&&be(y,L.startTime-M),V=!1}}break e}finally{C=null,j=ee,z=!1}V=void 0}}finally{V?Ne():O=!1}}}var Ne;if(typeof re=="function")Ne=function(){re(xe)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,P=Q.port2;Q.port1.onmessage=xe,Ne=function(){P.postMessage(null)}}else Ne=function(){K(xe,0)};function be(M,V){w=K(function(){M(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(M){M.callback=null},l.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<M?Math.floor(1e3/M):5},l.unstable_getCurrentPriorityLevel=function(){return j},l.unstable_next=function(M){switch(j){case 1:case 2:case 3:var V=3;break;default:V=j}var ee=j;j=V;try{return M()}finally{j=ee}},l.unstable_requestPaint=function(){k=!0},l.unstable_runWithPriority=function(M,V){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var ee=j;j=M;try{return V()}finally{j=ee}},l.unstable_scheduleCallback=function(M,V,ee){var he=l.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?he+ee:he):ee=he,M){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=ee+A,M={id:E++,callback:V,priorityLevel:M,startTime:ee,expirationTime:A,sortIndex:-1},ee>he?(M.sortIndex=ee,u(d,M),s(b)===null&&M===s(d)&&(Y?(I(w),w=-1):Y=!0,be(y,ee-he))):(M.sortIndex=A,u(b,M),X||z||(X=!0,O||(O=!0,Ne()))),M},l.unstable_shouldYield=Se,l.unstable_wrapCallback=function(M){var V=j;return function(){var ee=j;j=V;try{return M.apply(this,arguments)}finally{j=ee}}}}(ro)),ro}var Db;function dy(){return Db||(Db=1,to.exports=fy()),to.exports}var ao={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cb;function by(){if(Cb)return en;Cb=1;var l=ea();function u(b){var d="https://react.dev/errors/"+b;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)d+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+b+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(u(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},h=Symbol.for("react.portal");function p(b,d,E){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:h,key:C==null?null:""+C,children:b,containerInfo:d,implementation:E}}var m=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(b,d){if(b==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,en.createPortal=function(b,d){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(u(299));return p(b,d,null,E)},en.flushSync=function(b){var d=m.T,E=c.p;try{if(m.T=null,c.p=2,b)return b()}finally{m.T=d,c.p=E,c.d.f()}},en.preconnect=function(b,d){typeof b=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,c.d.C(b,d))},en.prefetchDNS=function(b){typeof b=="string"&&c.d.D(b)},en.preinit=function(b,d){if(typeof b=="string"&&d&&typeof d.as=="string"){var E=d.as,C=v(E,d.crossOrigin),j=typeof d.integrity=="string"?d.integrity:void 0,z=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;E==="style"?c.d.S(b,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:C,integrity:j,fetchPriority:z}):E==="script"&&c.d.X(b,{crossOrigin:C,integrity:j,fetchPriority:z,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},en.preinitModule=function(b,d){if(typeof b=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var E=v(d.as,d.crossOrigin);c.d.M(b,{crossOrigin:E,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&c.d.M(b)},en.preload=function(b,d){if(typeof b=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var E=d.as,C=v(E,d.crossOrigin);c.d.L(b,E,{crossOrigin:C,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},en.preloadModule=function(b,d){if(typeof b=="string")if(d){var E=v(d.as,d.crossOrigin);c.d.m(b,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:E,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else c.d.m(b)},en.requestFormReset=function(b){c.d.r(b)},en.unstable_batchedUpdates=function(b,d){return b(d)},en.useFormState=function(b,d,E){return m.H.useFormState(b,d,E)},en.useFormStatus=function(){return m.H.useHostTransitionStatus()},en.version="19.1.0",en}var Mb;function hy(){if(Mb)return ao.exports;Mb=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),ao.exports=by(),ao.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hb;function py(){if(Hb)return $a;Hb=1;var l=dy(),u=ea(),s=hy();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(p(e)!==e)throw Error(c(188))}function b(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,r=n;;){var a=t.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===t)return v(a),e;if(i===r)return v(a),n;i=i.sibling}throw Error(c(188))}if(t.return!==r.return)t=a,r=i;else{for(var o=!1,f=a.child;f;){if(f===t){o=!0,t=a,r=i;break}if(f===r){o=!0,r=a,t=i;break}f=f.sibling}if(!o){for(f=i.child;f;){if(f===t){o=!0,t=i,r=a;break}if(f===r){o=!0,r=i,t=a;break}f=f.sibling}if(!o)throw Error(c(189))}}if(t.alternate!==r)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function d(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=d(e),n!==null)return n;e=e.sibling}return null}var E=Object.assign,C=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),I=Symbol.for("react.consumer"),re=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),w=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),J=Symbol.for("react.activity"),Se=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function Ne(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function P(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case k:return"Profiler";case Y:return"StrictMode";case y:return"Suspense";case O:return"SuspenseList";case J:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case re:return(e.displayName||"Context")+".Provider";case I:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case w:return n=e.displayName||null,n!==null?n:P(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return P(e(n))}catch{}}return null}var be=Array.isArray,M=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},he=[],A=-1;function L(e){return{current:e}}function G(e){0>A||(e.current=he[A],he[A]=null,A--)}function q(e,n){A++,he[A]=e.current,e.current=n}var $=L(null),ce=L(null),ae=L(null),qe=L(null);function Ce(e,n){switch(q(ae,n),q(ce,e),q($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Fd(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Fd(n),e=$d(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G($),q($,e)}function Gn(){G($),G(ce),G(ae)}function cr(e){e.memoizedState!==null&&q(qe,e);var n=$.current,t=$d(n,e.type);n!==t&&(q(ce,e),q($,t))}function or(e){ce.current===e&&(G($),G(ce)),qe.current===e&&(G(qe),Wa._currentValue=ee)}var pe=Object.prototype.hasOwnProperty,He=l.unstable_scheduleCallback,sn=l.unstable_cancelCallback,qn=l.unstable_shouldYield,ql=l.unstable_requestPaint,wn=l.unstable_now,sr=l.unstable_getCurrentPriorityLevel,Bt=l.unstable_ImmediatePriority,Ho=l.unstable_UserBlockingPriority,si=l.unstable_NormalPriority,Y0=l.unstable_LowPriority,Lo=l.unstable_IdlePriority,I0=l.log,V0=l.unstable_setDisableYieldValue,na=null,fn=null;function ft(e){if(typeof I0=="function"&&V0(e),fn&&typeof fn.setStrictMode=="function")try{fn.setStrictMode(na,e)}catch{}}var dn=Math.clz32?Math.clz32:W0,X0=Math.log,K0=Math.LN2;function W0(e){return e>>>=0,e===0?32:31-(X0(e)/K0|0)|0}var fi=256,di=4194304;function jt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function bi(e,n,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var f=r&134217727;return f!==0?(r=f&~i,r!==0?a=jt(r):(o&=f,o!==0?a=jt(o):t||(t=f&~e,t!==0&&(a=jt(t))))):(f=r&~i,f!==0?a=jt(f):o!==0?a=jt(o):t||(t=r&~e,t!==0&&(a=jt(t)))),a===0?0:n!==0&&n!==a&&(n&i)===0&&(i=a&-a,t=n&-n,i>=t||i===32&&(t&4194048)!==0)?n:a}function ta(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function P0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wo(){var e=fi;return fi<<=1,(fi&4194048)===0&&(fi=256),e}function Uo(){var e=di;return di<<=1,(di&62914560)===0&&(di=4194304),e}function Yl(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ra(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Q0(e,n,t,r,a,i){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,x=e.hiddenUpdates;for(t=o&~t;0<t;){var H=31-dn(t),B=1<<H;f[H]=0,g[H]=-1;var N=x[H];if(N!==null)for(x[H]=null,H=0;H<N.length;H++){var D=N[H];D!==null&&(D.lane&=-536870913)}t&=~B}r!==0&&Bo(e,r,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~n))}function Bo(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-dn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|t&4194090}function jo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-dn(t),a=1<<r;a&n|e[r]&n&&(e[r]|=n),t&=~a}}function Il(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ko(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:vb(e.type))}function Z0(e,n){var t=V.p;try{return V.p=e,n()}finally{V.p=t}}var dt=Math.random().toString(36).slice(2),Fe="__reactFiber$"+dt,rn="__reactProps$"+dt,fr="__reactContainer$"+dt,Xl="__reactEvents$"+dt,J0="__reactListeners$"+dt,F0="__reactHandles$"+dt,zo="__reactResources$"+dt,aa="__reactMarker$"+dt;function Kl(e){delete e[Fe],delete e[rn],delete e[Xl],delete e[J0],delete e[F0]}function dr(e){var n=e[Fe];if(n)return n;for(var t=e.parentNode;t;){if(n=t[fr]||t[Fe]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rb(e);e!==null;){if(t=e[Fe])return t;e=rb(e)}return n}e=t,t=e.parentNode}return null}function br(e){if(e=e[Fe]||e[fr]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ia(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function hr(e){var n=e[zo];return n||(n=e[zo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ve(e){e[aa]=!0}var Go=new Set,qo={};function kt(e,n){pr(e,n),pr(e+"Capture",n)}function pr(e,n){for(qo[e]=n,e=0;e<n.length;e++)Go.add(n[e])}var $0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Yo={},Io={};function eh(e){return pe.call(Io,e)?!0:pe.call(Yo,e)?!1:$0.test(e)?Io[e]=!0:(Yo[e]=!0,!1)}function hi(e,n,t){if(eh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function pi(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Pn(e,n,t,r){if(r===null)e.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+r)}}var Wl,Vo;function yr(e){if(Wl===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Wl=n&&n[1]||"",Vo=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Wl+e+Vo}var Pl=!1;function Ql(e,n){if(!e||Pl)return"";Pl=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var B=function(){throw Error()};if(Object.defineProperty(B.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(B,[])}catch(D){var N=D}Reflect.construct(e,[],B)}else{try{B.call()}catch(D){N=D}e.call(B.prototype)}}else{try{throw Error()}catch(D){N=D}(B=e())&&typeof B.catch=="function"&&B.catch(function(){})}}catch(D){if(D&&N&&typeof D.stack=="string")return[D.stack,N.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],f=i[1];if(o&&f){var g=o.split(`
`),x=f.split(`
`);for(a=r=0;r<g.length&&!g[r].includes("DetermineComponentFrameRoot");)r++;for(;a<x.length&&!x[a].includes("DetermineComponentFrameRoot");)a++;if(r===g.length||a===x.length)for(r=g.length-1,a=x.length-1;1<=r&&0<=a&&g[r]!==x[a];)a--;for(;1<=r&&0<=a;r--,a--)if(g[r]!==x[a]){if(r!==1||a!==1)do if(r--,a--,0>a||g[r]!==x[a]){var H=`
`+g[r].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=r&&0<=a);break}}}finally{Pl=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?yr(t):""}function nh(e){switch(e.tag){case 26:case 27:case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 15:return Ql(e.type,!1);case 11:return Ql(e.type.render,!1);case 1:return Ql(e.type,!0);case 31:return yr("Activity");default:return""}}function Xo(e){try{var n="";do n+=nh(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function An(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ko(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function th(e){var n=Ko(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function yi(e){e._valueTracker||(e._valueTracker=th(e))}function Wo(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=Ko(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var rh=/[\n"\\]/g;function Rn(e){return e.replace(rh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zl(e,n,t,r,a,i,o,f){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+An(n)):e.value!==""+An(n)&&(e.value=""+An(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?Jl(e,o,An(n)):t!=null?Jl(e,o,An(t)):r!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+An(f):e.removeAttribute("name")}function Po(e,n,t,r,a,i,o,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),n!=null||t!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;t=t!=null?""+An(t):"",n=n!=null?""+An(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=f?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o)}function Jl(e,n,t){n==="number"&&mi(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function mr(e,n,t,r){if(e=e.options,n){n={};for(var a=0;a<t.length;a++)n["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=n.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&r&&(e[t].defaultSelected=!0)}else{for(t=""+An(t),n=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}n!==null||e[a].disabled||(n=e[a])}n!==null&&(n.selected=!0)}}function Qo(e,n,t){if(n!=null&&(n=""+An(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+An(t):""}function Zo(e,n,t,r){if(n==null){if(r!=null){if(t!=null)throw Error(c(92));if(be(r)){if(1<r.length)throw Error(c(93));r=r[0]}t=r}t==null&&(t=""),n=t}t=An(n),e.defaultValue=t,r=e.textContent,r===t&&r!==""&&r!==null&&(e.value=r)}function vr(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var ah=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jo(e,n,t){var r=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,t):typeof t!="number"||t===0||ah.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function Fo(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var a in n)r=n[a],n.hasOwnProperty(a)&&t[a]!==r&&Jo(e,a,r)}else for(var i in n)n.hasOwnProperty(i)&&Jo(e,i,n[i])}function Fl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ih=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return lh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var $l=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gr=null,Sr=null;function $o(e){var n=br(e);if(n&&(e=n.stateNode)){var t=e[rn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Zl(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var a=r[rn]||null;if(!a)throw Error(c(90));Zl(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(n=0;n<t.length;n++)r=t[n],r.form===e.form&&Wo(r)}break e;case"textarea":Qo(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&mr(e,!!t.multiple,n,!1)}}}var nu=!1;function es(e,n,t){if(nu)return e(n,t);nu=!0;try{var r=e(n);return r}finally{if(nu=!1,(gr!==null||Sr!==null)&&(rl(),gr&&(n=gr,e=Sr,Sr=gr=null,$o(n),e)))for(n=0;n<e.length;n++)$o(e[n])}}function la(e,n){var t=e.stateNode;if(t===null)return null;var r=t[rn]||null;if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tu=!1;if(Qn)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){tu=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{tu=!1}var bt=null,ru=null,gi=null;function ns(){if(gi)return gi;var e,n=ru,t=n.length,r,a="value"in bt?bt.value:bt.textContent,i=a.length;for(e=0;e<t&&n[e]===a[e];e++);var o=t-e;for(r=1;r<=o&&n[t-r]===a[i-r];r++);return gi=a.slice(e,1<r?1-r:void 0)}function Si(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ei(){return!0}function ts(){return!1}function an(e){function n(t,r,a,i,o){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ei:ts,this.isPropagationStopped=ts,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ei)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ei)},persist:function(){},isPersistent:Ei}),n}var zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ai=an(zt),ca=E({},zt,{view:0,detail:0}),uh=an(ca),au,iu,oa,Ri=E({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oa&&(oa&&e.type==="mousemove"?(au=e.screenX-oa.screenX,iu=e.screenY-oa.screenY):iu=au=0,oa=e),au)},movementY:function(e){return"movementY"in e?e.movementY:iu}}),rs=an(Ri),ch=E({},Ri,{dataTransfer:0}),oh=an(ch),sh=E({},ca,{relatedTarget:0}),lu=an(sh),fh=E({},zt,{animationName:0,elapsedTime:0,pseudoElement:0}),dh=an(fh),bh=E({},zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hh=an(bh),ph=E({},zt,{data:0}),as=an(ph),yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=vh[e])?!!n[e]:!1}function uu(){return gh}var Sh=E({},ca,{key:function(e){if(e.key){var n=yh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Si(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uu,charCode:function(e){return e.type==="keypress"?Si(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Si(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Eh=an(Sh),Ah=E({},Ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),is=an(Ah),Rh=E({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uu}),Th=an(Rh),_h=E({},zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oh=an(_h),xh=E({},Ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nh=an(xh),Dh=E({},zt,{newState:0,oldState:0}),Ch=an(Dh),Mh=[9,13,27,32],cu=Qn&&"CompositionEvent"in window,sa=null;Qn&&"documentMode"in document&&(sa=document.documentMode);var Hh=Qn&&"TextEvent"in window&&!sa,ls=Qn&&(!cu||sa&&8<sa&&11>=sa),us=" ",cs=!1;function os(e,n){switch(e){case"keyup":return Mh.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ss(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Er=!1;function Lh(e,n){switch(e){case"compositionend":return ss(n);case"keypress":return n.which!==32?null:(cs=!0,us);case"textInput":return e=n.data,e===us&&cs?null:e;default:return null}}function wh(e,n){if(Er)return e==="compositionend"||!cu&&os(e,n)?(e=ns(),gi=ru=bt=null,Er=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ls&&n.locale!=="ko"?null:n.data;default:return null}}var Uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Uh[e.type]:n==="textarea"}function ds(e,n,t,r){gr?Sr?Sr.push(r):Sr=[r]:gr=r,n=ol(n,"onChange"),0<n.length&&(t=new Ai("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var fa=null,da=null;function Bh(e){Wd(e,0)}function Ti(e){var n=ia(e);if(Wo(n))return e}function bs(e,n){if(e==="change")return n}var hs=!1;if(Qn){var ou;if(Qn){var su="oninput"in document;if(!su){var ps=document.createElement("div");ps.setAttribute("oninput","return;"),su=typeof ps.oninput=="function"}ou=su}else ou=!1;hs=ou&&(!document.documentMode||9<document.documentMode)}function ys(){fa&&(fa.detachEvent("onpropertychange",ms),da=fa=null)}function ms(e){if(e.propertyName==="value"&&Ti(da)){var n=[];ds(n,da,e,eu(e)),es(Bh,n)}}function jh(e,n,t){e==="focusin"?(ys(),fa=n,da=t,fa.attachEvent("onpropertychange",ms)):e==="focusout"&&ys()}function kh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ti(da)}function zh(e,n){if(e==="click")return Ti(n)}function Gh(e,n){if(e==="input"||e==="change")return Ti(n)}function qh(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var bn=typeof Object.is=="function"?Object.is:qh;function ba(e,n){if(bn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!pe.call(n,a)||!bn(e[a],n[a]))return!1}return!0}function vs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gs(e,n){var t=vs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=vs(t)}}function Ss(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ss(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Es(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=mi(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=mi(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Yh=Qn&&"documentMode"in document&&11>=document.documentMode,Ar=null,du=null,ha=null,bu=!1;function As(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;bu||Ar==null||Ar!==mi(r)||(r=Ar,"selectionStart"in r&&fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ha&&ba(ha,r)||(ha=r,r=ol(du,"onSelect"),0<r.length&&(n=new Ai("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Ar)))}function Gt(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Rr={animationend:Gt("Animation","AnimationEnd"),animationiteration:Gt("Animation","AnimationIteration"),animationstart:Gt("Animation","AnimationStart"),transitionrun:Gt("Transition","TransitionRun"),transitionstart:Gt("Transition","TransitionStart"),transitioncancel:Gt("Transition","TransitionCancel"),transitionend:Gt("Transition","TransitionEnd")},hu={},Rs={};Qn&&(Rs=document.createElement("div").style,"AnimationEvent"in window||(delete Rr.animationend.animation,delete Rr.animationiteration.animation,delete Rr.animationstart.animation),"TransitionEvent"in window||delete Rr.transitionend.transition);function qt(e){if(hu[e])return hu[e];if(!Rr[e])return e;var n=Rr[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Rs)return hu[e]=n[t];return e}var Ts=qt("animationend"),_s=qt("animationiteration"),Os=qt("animationstart"),Ih=qt("transitionrun"),Vh=qt("transitionstart"),Xh=qt("transitioncancel"),xs=qt("transitionend"),Ns=new Map,pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");pu.push("scrollEnd");function Un(e,n){Ns.set(e,n),kt(n,[e])}var Ds=new WeakMap;function Tn(e,n){if(typeof e=="object"&&e!==null){var t=Ds.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Xo(n)},Ds.set(e,n),n)}return{value:e,source:n,stack:Xo(n)}}var _n=[],Tr=0,yu=0;function _i(){for(var e=Tr,n=yu=Tr=0;n<e;){var t=_n[n];_n[n++]=null;var r=_n[n];_n[n++]=null;var a=_n[n];_n[n++]=null;var i=_n[n];if(_n[n++]=null,r!==null&&a!==null){var o=r.pending;o===null?a.next=a:(a.next=o.next,o.next=a),r.pending=a}i!==0&&Cs(t,a,i)}}function Oi(e,n,t,r){_n[Tr++]=e,_n[Tr++]=n,_n[Tr++]=t,_n[Tr++]=r,yu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function mu(e,n,t,r){return Oi(e,n,t,r),xi(e)}function _r(e,n){return Oi(e,null,null,n),xi(e)}function Cs(e,n,t){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t);for(var a=!1,i=e.return;i!==null;)i.childLanes|=t,r=i.alternate,r!==null&&(r.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&n!==null&&(a=31-dn(t),e=i.hiddenUpdates,r=e[a],r===null?e[a]=[n]:r.push(n),n.lane=t|536870912),i):null}function xi(e){if(50<za)throw za=0,Rc=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function Kh(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,r){return new Kh(e,n,t,r)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zn(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Ms(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ni(e,n,t,r,a,i){var o=0;if(r=e,typeof e=="function")vu(e)&&(o=1);else if(typeof e=="string")o=Pp(e,t,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case J:return e=hn(31,t,n,a),e.elementType=J,e.lanes=i,e;case X:return Yt(t.children,a,i,n);case Y:o=8,a|=24;break;case k:return e=hn(12,t,n,a|2),e.elementType=k,e.lanes=i,e;case y:return e=hn(13,t,n,a),e.elementType=y,e.lanes=i,e;case O:return e=hn(19,t,n,a),e.elementType=O,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:case re:o=10;break e;case I:o=9;break e;case F:o=11;break e;case w:o=14;break e;case W:o=16,r=null;break e}o=29,t=Error(c(130,e===null?"null":typeof e,"")),r=null}return n=hn(o,t,n,a),n.elementType=e,n.type=r,n.lanes=i,n}function Yt(e,n,t,r){return e=hn(7,e,r,n),e.lanes=t,e}function gu(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function Su(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var xr=[],Nr=0,Di=null,Ci=0,On=[],xn=0,It=null,Jn=1,Fn="";function Vt(e,n){xr[Nr++]=Ci,xr[Nr++]=Di,Di=e,Ci=n}function Hs(e,n,t){On[xn++]=Jn,On[xn++]=Fn,On[xn++]=It,It=e;var r=Jn;e=Fn;var a=32-dn(r)-1;r&=~(1<<a),t+=1;var i=32-dn(n)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Jn=1<<32-dn(n)+a|t<<a|r,Fn=i+e}else Jn=1<<i|t<<a|r,Fn=e}function Eu(e){e.return!==null&&(Vt(e,1),Hs(e,1,0))}function Au(e){for(;e===Di;)Di=xr[--Nr],xr[Nr]=null,Ci=xr[--Nr],xr[Nr]=null;for(;e===It;)It=On[--xn],On[xn]=null,Fn=On[--xn],On[xn]=null,Jn=On[--xn],On[xn]=null}var tn=null,Ue=null,Ee=!1,Xt=null,Yn=!1,Ru=Error(c(519));function Kt(e){var n=Error(c(418,""));throw ma(Tn(n,e)),Ru}function Ls(e){var n=e.stateNode,t=e.type,r=e.memoizedProps;switch(n[Fe]=e,n[rn]=r,t){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(t=0;t<qa.length;t++)me(qa[t],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Po(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),yi(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Zo(n,r.value,r.defaultValue,r.children),yi(n)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||r.suppressHydrationWarning===!0||Jd(n.textContent,t)?(r.popover!=null&&(me("beforetoggle",n),me("toggle",n)),r.onScroll!=null&&me("scroll",n),r.onScrollEnd!=null&&me("scrollend",n),r.onClick!=null&&(n.onclick=sl),n=!0):n=!1,n||Kt(e)}function ws(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 13:Yn=!1;return;case 27:case 3:Yn=!0;return;default:tn=tn.return}}function pa(e){if(e!==tn)return!1;if(!Ee)return ws(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||zc(e.type,e.memoizedProps)),t=!t),t&&Ue&&Kt(e),ws(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){Ue=jn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}Ue=null}}else n===27?(n=Ue,Dt(e.type)?(e=Ic,Ic=null,Ue=e):Ue=n):Ue=tn?jn(e.stateNode.nextSibling):null;return!0}function ya(){Ue=tn=null,Ee=!1}function Us(){var e=Xt;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),Xt=null),e}function ma(e){Xt===null?Xt=[e]:Xt.push(e)}var Tu=L(null),Wt=null,$n=null;function ht(e,n,t){q(Tu,n._currentValue),n._currentValue=t}function et(e){e._currentValue=Tu.current,G(Tu)}function _u(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function Ou(e,n,t,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var o=a.child;i=i.firstContext;e:for(;i!==null;){var f=i;i=a;for(var g=0;g<n.length;g++)if(f.context===n[g]){i.lanes|=t,f=i.alternate,f!==null&&(f.lanes|=t),_u(i.return,t,e),r||(o=null);break e}i=f.next}}else if(a.tag===18){if(o=a.return,o===null)throw Error(c(341));o.lanes|=t,i=o.alternate,i!==null&&(i.lanes|=t),_u(o,t,e),o=null}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}}function va(e,n,t,r){e=null;for(var a=n,i=!1;a!==null;){if(!i){if((a.flags&524288)!==0)i=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var o=a.alternate;if(o===null)throw Error(c(387));if(o=o.memoizedProps,o!==null){var f=a.type;bn(a.pendingProps.value,o.value)||(e!==null?e.push(f):e=[f])}}else if(a===qe.current){if(o=a.alternate,o===null)throw Error(c(387));o.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Wa):e=[Wa])}a=a.return}e!==null&&Ou(n,e,t,r),n.flags|=262144}function Mi(e){for(e=e.firstContext;e!==null;){if(!bn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pt(e){Wt=e,$n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function $e(e){return Bs(Wt,e)}function Hi(e,n){return Wt===null&&Pt(e),Bs(e,n)}function Bs(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},$n===null){if(e===null)throw Error(c(308));$n=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $n=$n.next=n;return t}var Wh=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Ph=l.unstable_scheduleCallback,Qh=l.unstable_NormalPriority,Ye={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xu(){return{controller:new Wh,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&Ph(Qh,function(){e.controller.abort()})}var Sa=null,Nu=0,Dr=0,Cr=null;function Zh(e,n){if(Sa===null){var t=Sa=[];Nu=0,Dr=Cc(),Cr={status:"pending",value:void 0,then:function(r){t.push(r)}}}return Nu++,n.then(js,js),n}function js(){if(--Nu===0&&Sa!==null){Cr!==null&&(Cr.status="fulfilled");var e=Sa;Sa=null,Dr=0,Cr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jh(e,n){var t=[],r={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var a=0;a<t.length;a++)(0,t[a])(n)},function(a){for(r.status="rejected",r.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),r}var ks=M.S;M.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Zh(e,n),ks!==null&&ks(e,n)};var Qt=L(null);function Du(){var e=Qt.current;return e!==null?e:Me.pooledCache}function Li(e,n){n===null?q(Qt,Qt.current):q(Qt,n.pool)}function zs(){var e=Du();return e===null?null:{parent:Ye._currentValue,pool:e}}var Ea=Error(c(460)),Gs=Error(c(474)),wi=Error(c(542)),Cu={then:function(){}};function qs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ui(){}function Ys(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Ui,Ui),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vs(e),e;default:if(typeof n.status=="string")n.then(Ui,Ui);else{if(e=Me,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var a=n;a.status="fulfilled",a.value=r}},function(r){if(n.status==="pending"){var a=n;a.status="rejected",a.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vs(e),e}throw Aa=n,Ea}}var Aa=null;function Is(){if(Aa===null)throw Error(c(459));var e=Aa;return Aa=null,e}function Vs(e){if(e===Ea||e===wi)throw Error(c(483))}var pt=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function yt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mt(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var a=r.pending;return a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n,n=xi(e),Cs(e,null,t),n}return Oi(e,r,n,t),xi(e)}function Ra(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,jo(e,t)}}function Lu(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};i===null?a=i=o:i=i.next=o,t=t.next}while(t!==null);i===null?a=i=n:i=i.next=n}else a=i=n;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var wu=!1;function Ta(){if(wu){var e=Cr;if(e!==null)throw e}}function _a(e,n,t,r){wu=!1;var a=e.updateQueue;pt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var g=f,x=g.next;g.next=null,o===null?i=x:o.next=x,o=g;var H=e.alternate;H!==null&&(H=H.updateQueue,f=H.lastBaseUpdate,f!==o&&(f===null?H.firstBaseUpdate=x:f.next=x,H.lastBaseUpdate=g))}if(i!==null){var B=a.baseState;o=0,H=x=g=null,f=i;do{var N=f.lane&-536870913,D=N!==f.lane;if(D?(ve&N)===N:(r&N)===N){N!==0&&N===Dr&&(wu=!0),H!==null&&(H=H.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var le=e,te=f;N=n;var Oe=t;switch(te.tag){case 1:if(le=te.payload,typeof le=="function"){B=le.call(Oe,B,N);break e}B=le;break e;case 3:le.flags=le.flags&-65537|128;case 0:if(le=te.payload,N=typeof le=="function"?le.call(Oe,B,N):le,N==null)break e;B=E({},B,N);break e;case 2:pt=!0}}N=f.callback,N!==null&&(e.flags|=64,D&&(e.flags|=8192),D=a.callbacks,D===null?a.callbacks=[N]:D.push(N))}else D={lane:N,tag:f.tag,payload:f.payload,callback:f.callback,next:null},H===null?(x=H=D,g=B):H=H.next=D,o|=N;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;D=f,f=D.next,D.next=null,a.lastBaseUpdate=D,a.shared.pending=null}}while(!0);H===null&&(g=B),a.baseState=g,a.firstBaseUpdate=x,a.lastBaseUpdate=H,i===null&&(a.shared.lanes=0),_t|=o,e.lanes=o,e.memoizedState=B}}function Xs(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Ks(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Xs(t[e],n)}var Mr=L(null),Bi=L(0);function Ws(e,n){e=ut,q(Bi,e),q(Mr,n),ut=e|n.baseLanes}function Uu(){q(Bi,ut),q(Mr,Mr.current)}function Bu(){ut=Bi.current,G(Mr),G(Bi)}var vt=0,fe=null,Te=null,ze=null,ji=!1,Hr=!1,Zt=!1,ki=0,Oa=0,Lr=null,Fh=0;function je(){throw Error(c(321))}function ju(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!bn(e[t],n[t]))return!1;return!0}function ku(e,n,t,r,a,i){return vt=i,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,M.H=e===null||e.memoizedState===null?Mf:Hf,Zt=!1,i=t(r,a),Zt=!1,Hr&&(i=Qs(n,t,r,a)),Ps(e),i}function Ps(e){M.H=Vi;var n=Te!==null&&Te.next!==null;if(vt=0,ze=Te=fe=null,ji=!1,Oa=0,Lr=null,n)throw Error(c(300));e===null||Xe||(e=e.dependencies,e!==null&&Mi(e)&&(Xe=!0))}function Qs(e,n,t,r){fe=e;var a=0;do{if(Hr&&(Lr=null),Oa=0,Hr=!1,25<=a)throw Error(c(301));if(a+=1,ze=Te=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=ip,i=n(t,r)}while(Hr);return i}function $h(){var e=M.H,n=e.useState()[0];return n=typeof n.then=="function"?xa(n):n,e=e.useState()[0],(Te!==null?Te.memoizedState:null)!==e&&(fe.flags|=1024),n}function zu(){var e=ki!==0;return ki=0,e}function Gu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function qu(e){if(ji){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ji=!1}vt=0,ze=Te=fe=null,Hr=!1,Oa=ki=0,Lr=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?fe.memoizedState=ze=e:ze=ze.next=e,ze}function Ge(){if(Te===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Te.next;var n=ze===null?fe.memoizedState:ze.next;if(n!==null)ze=n,Te=e;else{if(e===null)throw fe.alternate===null?Error(c(467)):Error(c(310));Te=e,e={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},ze===null?fe.memoizedState=ze=e:ze=ze.next=e}return ze}function Yu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xa(e){var n=Oa;return Oa+=1,Lr===null&&(Lr=[]),e=Ys(Lr,e,n),n=fe,(ze===null?n.memoizedState:ze.next)===null&&(n=n.alternate,M.H=n===null||n.memoizedState===null?Mf:Hf),e}function zi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xa(e);if(e.$$typeof===re)return $e(e)}throw Error(c(438,String(e)))}function Iu(e){var n=null,t=fe.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(a){return a.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Yu(),fe.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),r=0;r<e;r++)t[r]=Se;return n.index++,t}function nt(e,n){return typeof n=="function"?n(e):n}function Gi(e){var n=Ge();return Vu(n,Te,e)}function Vu(e,n,t){var r=e.queue;if(r===null)throw Error(c(311));r.lastRenderedReducer=t;var a=e.baseQueue,i=r.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}n.baseQueue=a=i,r.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{n=a.next;var f=o=null,g=null,x=n,H=!1;do{var B=x.lane&-536870913;if(B!==x.lane?(ve&B)===B:(vt&B)===B){var N=x.revertLane;if(N===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),B===Dr&&(H=!0);else if((vt&N)===N){x=x.next,N===Dr&&(H=!0);continue}else B={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},g===null?(f=g=B,o=i):g=g.next=B,fe.lanes|=N,_t|=N;B=x.action,Zt&&t(i,B),i=x.hasEagerState?x.eagerState:t(i,B)}else N={lane:B,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},g===null?(f=g=N,o=i):g=g.next=N,fe.lanes|=B,_t|=B;x=x.next}while(x!==null&&x!==n);if(g===null?o=i:g.next=f,!bn(i,e.memoizedState)&&(Xe=!0,H&&(t=Cr,t!==null)))throw t;e.memoizedState=i,e.baseState=o,e.baseQueue=g,r.lastRenderedState=i}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xu(e){var n=Ge(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var r=t.dispatch,a=t.pending,i=n.memoizedState;if(a!==null){t.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);bn(i,n.memoizedState)||(Xe=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,r]}function Zs(e,n,t){var r=fe,a=Ge(),i=Ee;if(i){if(t===void 0)throw Error(c(407));t=t()}else t=n();var o=!bn((Te||a).memoizedState,t);o&&(a.memoizedState=t,Xe=!0),a=a.queue;var f=$s.bind(null,r,a,e);if(Na(2048,8,f,[e]),a.getSnapshot!==n||o||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,wr(9,qi(),Fs.bind(null,r,a,t,n),null),Me===null)throw Error(c(349));i||(vt&124)!==0||Js(r,n,t)}return t}function Js(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=fe.updateQueue,n===null?(n=Yu(),fe.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Fs(e,n,t,r){n.value=t,n.getSnapshot=r,ef(n)&&nf(e)}function $s(e,n,t){return t(function(){ef(n)&&nf(e)})}function ef(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!bn(e,t)}catch{return!0}}function nf(e){var n=_r(e,2);n!==null&&gn(n,e,2)}function Ku(e){var n=ln();if(typeof e=="function"){var t=e;if(e=t(),Zt){ft(!0);try{t()}finally{ft(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:e},n}function tf(e,n,t,r){return e.baseState=t,Vu(e,Te,typeof r=="function"?r:nt)}function ep(e,n,t,r,a){if(Ii(e))throw Error(c(485));if(e=n.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};M.T!==null?t(!0):i.isTransition=!1,r(i),t=n.pending,t===null?(i.next=n.pending=i,rf(n,i)):(i.next=t.next,n.pending=t.next=i)}}function rf(e,n){var t=n.action,r=n.payload,a=e.state;if(n.isTransition){var i=M.T,o={};M.T=o;try{var f=t(a,r),g=M.S;g!==null&&g(o,f),af(e,n,f)}catch(x){Wu(e,n,x)}finally{M.T=i}}else try{i=t(a,r),af(e,n,i)}catch(x){Wu(e,n,x)}}function af(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){lf(e,n,r)},function(r){return Wu(e,n,r)}):lf(e,n,t)}function lf(e,n,t){n.status="fulfilled",n.value=t,uf(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,rf(e,t)))}function Wu(e,n,t){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=t,uf(n),n=n.next;while(n!==r)}e.action=null}function uf(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function cf(e,n){return n}function of(e,n){if(Ee){var t=Me.formState;if(t!==null){e:{var r=fe;if(Ee){if(Ue){n:{for(var a=Ue,i=Yn;a.nodeType!==8;){if(!i){a=null;break n}if(a=jn(a.nextSibling),a===null){a=null;break n}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){Ue=jn(a.nextSibling),r=a.data==="F!";break e}}Kt(r)}r=!1}r&&(n=t[0])}}return t=ln(),t.memoizedState=t.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cf,lastRenderedState:n},t.queue=r,t=Nf.bind(null,fe,r),r.dispatch=t,r=Ku(!1),i=Fu.bind(null,fe,!1,r.queue),r=ln(),a={state:n,dispatch:null,action:e,pending:null},r.queue=a,t=ep.bind(null,fe,a,i,t),a.dispatch=t,r.memoizedState=e,[n,t,!1]}function sf(e){var n=Ge();return ff(n,Te,e)}function ff(e,n,t){if(n=Vu(e,n,cf)[0],e=Gi(nt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=xa(n)}catch(o){throw o===Ea?wi:o}else r=n;n=Ge();var a=n.queue,i=a.dispatch;return t!==n.memoizedState&&(fe.flags|=2048,wr(9,qi(),np.bind(null,a,t),null)),[r,i,e]}function np(e,n){e.action=n}function df(e){var n=Ge(),t=Te;if(t!==null)return ff(n,t,e);Ge(),n=n.memoizedState,t=Ge();var r=t.queue.dispatch;return t.memoizedState=e,[n,r,!1]}function wr(e,n,t,r){return e={tag:e,create:t,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Yu(),fe.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e),e}function qi(){return{destroy:void 0,resource:void 0}}function bf(){return Ge().memoizedState}function Yi(e,n,t,r){var a=ln();r=r===void 0?null:r,fe.flags|=e,a.memoizedState=wr(1|n,qi(),t,r)}function Na(e,n,t,r){var a=Ge();r=r===void 0?null:r;var i=a.memoizedState.inst;Te!==null&&r!==null&&ju(r,Te.memoizedState.deps)?a.memoizedState=wr(n,i,t,r):(fe.flags|=e,a.memoizedState=wr(1|n,i,t,r))}function hf(e,n){Yi(8390656,8,e,n)}function pf(e,n){Na(2048,8,e,n)}function yf(e,n){return Na(4,2,e,n)}function mf(e,n){return Na(4,4,e,n)}function vf(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function gf(e,n,t){t=t!=null?t.concat([e]):null,Na(4,4,vf.bind(null,n,e),t)}function Pu(){}function Sf(e,n){var t=Ge();n=n===void 0?null:n;var r=t.memoizedState;return n!==null&&ju(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Ef(e,n){var t=Ge();n=n===void 0?null:n;var r=t.memoizedState;if(n!==null&&ju(n,r[1]))return r[0];if(r=e(),Zt){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[r,n],r}function Qu(e,n,t){return t===void 0||(vt&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=Td(),fe.lanes|=e,_t|=e,t)}function Af(e,n,t,r){return bn(t,n)?t:Mr.current!==null?(e=Qu(e,t,r),bn(e,n)||(Xe=!0),e):(vt&42)===0?(Xe=!0,e.memoizedState=t):(e=Td(),fe.lanes|=e,_t|=e,n)}function Rf(e,n,t,r,a){var i=V.p;V.p=i!==0&&8>i?i:8;var o=M.T,f={};M.T=f,Fu(e,!1,n,t);try{var g=a(),x=M.S;if(x!==null&&x(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var H=Jh(g,r);Da(e,n,H,vn(e))}else Da(e,n,r,vn(e))}catch(B){Da(e,n,{then:function(){},status:"rejected",reason:B},vn())}finally{V.p=i,M.T=o}}function tp(){}function Zu(e,n,t,r){if(e.tag!==5)throw Error(c(476));var a=Tf(e).queue;Rf(e,a,n,ee,t===null?tp:function(){return _f(e),t(r)})}function Tf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:ee},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:nt,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _f(e){var n=Tf(e).next.queue;Da(e,n,{},vn())}function Ju(){return $e(Wa)}function Of(){return Ge().memoizedState}function xf(){return Ge().memoizedState}function rp(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=vn();e=yt(t);var r=mt(n,e,t);r!==null&&(gn(r,n,t),Ra(r,n,t)),n={cache:xu()},e.payload=n;return}n=n.return}}function ap(e,n,t){var r=vn();t={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Ii(e)?Df(n,t):(t=mu(e,n,t,r),t!==null&&(gn(t,e,r),Cf(t,n,r)))}function Nf(e,n,t){var r=vn();Da(e,n,t,r)}function Da(e,n,t,r){var a={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ii(e))Df(n,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var o=n.lastRenderedState,f=i(o,t);if(a.hasEagerState=!0,a.eagerState=f,bn(f,o))return Oi(e,n,a,0),Me===null&&_i(),!1}catch{}finally{}if(t=mu(e,n,a,r),t!==null)return gn(t,e,r),Cf(t,n,r),!0}return!1}function Fu(e,n,t,r){if(r={lane:2,revertLane:Cc(),action:r,hasEagerState:!1,eagerState:null,next:null},Ii(e)){if(n)throw Error(c(479))}else n=mu(e,t,r,2),n!==null&&gn(n,e,2)}function Ii(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function Df(e,n){Hr=ji=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Cf(e,n,t){if((t&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,jo(e,t)}}var Vi={readContext:$e,use:zi,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je},Mf={readContext:$e,use:zi,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:$e,useEffect:hf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Yi(4194308,4,vf.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Yi(4194308,4,e,n)},useInsertionEffect:function(e,n){Yi(4,2,e,n)},useMemo:function(e,n){var t=ln();n=n===void 0?null:n;var r=e();if(Zt){ft(!0);try{e()}finally{ft(!1)}}return t.memoizedState=[r,n],r},useReducer:function(e,n,t){var r=ln();if(t!==void 0){var a=t(n);if(Zt){ft(!0);try{t(n)}finally{ft(!1)}}}else a=n;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=ap.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Ku(e);var n=e.queue,t=Nf.bind(null,fe,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Pu,useDeferredValue:function(e,n){var t=ln();return Qu(t,e,n)},useTransition:function(){var e=Ku(!1);return e=Rf.bind(null,fe,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var r=fe,a=ln();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),Me===null)throw Error(c(349));(ve&124)!==0||Js(r,n,t)}a.memoizedState=t;var i={value:t,getSnapshot:n};return a.queue=i,hf($s.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,qi(),Fs.bind(null,r,i,t,n),null),t},useId:function(){var e=ln(),n=Me.identifierPrefix;if(Ee){var t=Fn,r=Jn;t=(r&~(1<<32-dn(r)-1)).toString(32)+t,n="«"+n+"R"+t,t=ki++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=Fh++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:Ju,useFormState:of,useActionState:of,useOptimistic:function(e){var n=ln();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Fu.bind(null,fe,!0,t),t.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return ln().memoizedState=rp.bind(null,fe)}},Hf={readContext:$e,use:zi,useCallback:Sf,useContext:$e,useEffect:pf,useImperativeHandle:gf,useInsertionEffect:yf,useLayoutEffect:mf,useMemo:Ef,useReducer:Gi,useRef:bf,useState:function(){return Gi(nt)},useDebugValue:Pu,useDeferredValue:function(e,n){var t=Ge();return Af(t,Te.memoizedState,e,n)},useTransition:function(){var e=Gi(nt)[0],n=Ge().memoizedState;return[typeof e=="boolean"?e:xa(e),n]},useSyncExternalStore:Zs,useId:Of,useHostTransitionStatus:Ju,useFormState:sf,useActionState:sf,useOptimistic:function(e,n){var t=Ge();return tf(t,Te,e,n)},useMemoCache:Iu,useCacheRefresh:xf},ip={readContext:$e,use:zi,useCallback:Sf,useContext:$e,useEffect:pf,useImperativeHandle:gf,useInsertionEffect:yf,useLayoutEffect:mf,useMemo:Ef,useReducer:Xu,useRef:bf,useState:function(){return Xu(nt)},useDebugValue:Pu,useDeferredValue:function(e,n){var t=Ge();return Te===null?Qu(t,e,n):Af(t,Te.memoizedState,e,n)},useTransition:function(){var e=Xu(nt)[0],n=Ge().memoizedState;return[typeof e=="boolean"?e:xa(e),n]},useSyncExternalStore:Zs,useId:Of,useHostTransitionStatus:Ju,useFormState:df,useActionState:df,useOptimistic:function(e,n){var t=Ge();return Te!==null?tf(t,Te,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:xf},Ur=null,Ca=0;function Xi(e){var n=Ca;return Ca+=1,Ur===null&&(Ur=[]),Ys(Ur,e,n)}function Ma(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ki(e,n){throw n.$$typeof===C?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lf(e){var n=e._init;return n(e._payload)}function wf(e){function n(T,R){if(e){var _=T.deletions;_===null?(T.deletions=[R],T.flags|=16):_.push(R)}}function t(T,R){if(!e)return null;for(;R!==null;)n(T,R),R=R.sibling;return null}function r(T){for(var R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function a(T,R){return T=Zn(T,R),T.index=0,T.sibling=null,T}function i(T,R,_){return T.index=_,e?(_=T.alternate,_!==null?(_=_.index,_<R?(T.flags|=67108866,R):_):(T.flags|=67108866,R)):(T.flags|=1048576,R)}function o(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function f(T,R,_,U){return R===null||R.tag!==6?(R=gu(_,T.mode,U),R.return=T,R):(R=a(R,_),R.return=T,R)}function g(T,R,_,U){var Z=_.type;return Z===X?H(T,R,_.props.children,U,_.key):R!==null&&(R.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&Lf(Z)===R.type)?(R=a(R,_.props),Ma(R,_),R.return=T,R):(R=Ni(_.type,_.key,_.props,null,T.mode,U),Ma(R,_),R.return=T,R)}function x(T,R,_,U){return R===null||R.tag!==4||R.stateNode.containerInfo!==_.containerInfo||R.stateNode.implementation!==_.implementation?(R=Su(_,T.mode,U),R.return=T,R):(R=a(R,_.children||[]),R.return=T,R)}function H(T,R,_,U,Z){return R===null||R.tag!==7?(R=Yt(_,T.mode,U,Z),R.return=T,R):(R=a(R,_),R.return=T,R)}function B(T,R,_){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=gu(""+R,T.mode,_),R.return=T,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case j:return _=Ni(R.type,R.key,R.props,null,T.mode,_),Ma(_,R),_.return=T,_;case z:return R=Su(R,T.mode,_),R.return=T,R;case W:var U=R._init;return R=U(R._payload),B(T,R,_)}if(be(R)||Ne(R))return R=Yt(R,T.mode,_,null),R.return=T,R;if(typeof R.then=="function")return B(T,Xi(R),_);if(R.$$typeof===re)return B(T,Hi(T,R),_);Ki(T,R)}return null}function N(T,R,_,U){var Z=R!==null?R.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return Z!==null?null:f(T,R,""+_,U);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case j:return _.key===Z?g(T,R,_,U):null;case z:return _.key===Z?x(T,R,_,U):null;case W:return Z=_._init,_=Z(_._payload),N(T,R,_,U)}if(be(_)||Ne(_))return Z!==null?null:H(T,R,_,U,null);if(typeof _.then=="function")return N(T,R,Xi(_),U);if(_.$$typeof===re)return N(T,R,Hi(T,_),U);Ki(T,_)}return null}function D(T,R,_,U,Z){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return T=T.get(_)||null,f(R,T,""+U,Z);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case j:return T=T.get(U.key===null?_:U.key)||null,g(R,T,U,Z);case z:return T=T.get(U.key===null?_:U.key)||null,x(R,T,U,Z);case W:var de=U._init;return U=de(U._payload),D(T,R,_,U,Z)}if(be(U)||Ne(U))return T=T.get(_)||null,H(R,T,U,Z,null);if(typeof U.then=="function")return D(T,R,_,Xi(U),Z);if(U.$$typeof===re)return D(T,R,_,Hi(R,U),Z);Ki(R,U)}return null}function le(T,R,_,U){for(var Z=null,de=null,ne=R,ie=R=0,We=null;ne!==null&&ie<_.length;ie++){ne.index>ie?(We=ne,ne=null):We=ne.sibling;var ge=N(T,ne,_[ie],U);if(ge===null){ne===null&&(ne=We);break}e&&ne&&ge.alternate===null&&n(T,ne),R=i(ge,R,ie),de===null?Z=ge:de.sibling=ge,de=ge,ne=We}if(ie===_.length)return t(T,ne),Ee&&Vt(T,ie),Z;if(ne===null){for(;ie<_.length;ie++)ne=B(T,_[ie],U),ne!==null&&(R=i(ne,R,ie),de===null?Z=ne:de.sibling=ne,de=ne);return Ee&&Vt(T,ie),Z}for(ne=r(ne);ie<_.length;ie++)We=D(ne,T,ie,_[ie],U),We!==null&&(e&&We.alternate!==null&&ne.delete(We.key===null?ie:We.key),R=i(We,R,ie),de===null?Z=We:de.sibling=We,de=We);return e&&ne.forEach(function(wt){return n(T,wt)}),Ee&&Vt(T,ie),Z}function te(T,R,_,U){if(_==null)throw Error(c(151));for(var Z=null,de=null,ne=R,ie=R=0,We=null,ge=_.next();ne!==null&&!ge.done;ie++,ge=_.next()){ne.index>ie?(We=ne,ne=null):We=ne.sibling;var wt=N(T,ne,ge.value,U);if(wt===null){ne===null&&(ne=We);break}e&&ne&&wt.alternate===null&&n(T,ne),R=i(wt,R,ie),de===null?Z=wt:de.sibling=wt,de=wt,ne=We}if(ge.done)return t(T,ne),Ee&&Vt(T,ie),Z;if(ne===null){for(;!ge.done;ie++,ge=_.next())ge=B(T,ge.value,U),ge!==null&&(R=i(ge,R,ie),de===null?Z=ge:de.sibling=ge,de=ge);return Ee&&Vt(T,ie),Z}for(ne=r(ne);!ge.done;ie++,ge=_.next())ge=D(ne,T,ie,ge.value,U),ge!==null&&(e&&ge.alternate!==null&&ne.delete(ge.key===null?ie:ge.key),R=i(ge,R,ie),de===null?Z=ge:de.sibling=ge,de=ge);return e&&ne.forEach(function(ly){return n(T,ly)}),Ee&&Vt(T,ie),Z}function Oe(T,R,_,U){if(typeof _=="object"&&_!==null&&_.type===X&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case j:e:{for(var Z=_.key;R!==null;){if(R.key===Z){if(Z=_.type,Z===X){if(R.tag===7){t(T,R.sibling),U=a(R,_.props.children),U.return=T,T=U;break e}}else if(R.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&Lf(Z)===R.type){t(T,R.sibling),U=a(R,_.props),Ma(U,_),U.return=T,T=U;break e}t(T,R);break}else n(T,R);R=R.sibling}_.type===X?(U=Yt(_.props.children,T.mode,U,_.key),U.return=T,T=U):(U=Ni(_.type,_.key,_.props,null,T.mode,U),Ma(U,_),U.return=T,T=U)}return o(T);case z:e:{for(Z=_.key;R!==null;){if(R.key===Z)if(R.tag===4&&R.stateNode.containerInfo===_.containerInfo&&R.stateNode.implementation===_.implementation){t(T,R.sibling),U=a(R,_.children||[]),U.return=T,T=U;break e}else{t(T,R);break}else n(T,R);R=R.sibling}U=Su(_,T.mode,U),U.return=T,T=U}return o(T);case W:return Z=_._init,_=Z(_._payload),Oe(T,R,_,U)}if(be(_))return le(T,R,_,U);if(Ne(_)){if(Z=Ne(_),typeof Z!="function")throw Error(c(150));return _=Z.call(_),te(T,R,_,U)}if(typeof _.then=="function")return Oe(T,R,Xi(_),U);if(_.$$typeof===re)return Oe(T,R,Hi(T,_),U);Ki(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,R!==null&&R.tag===6?(t(T,R.sibling),U=a(R,_),U.return=T,T=U):(t(T,R),U=gu(_,T.mode,U),U.return=T,T=U),o(T)):t(T,R)}return function(T,R,_,U){try{Ca=0;var Z=Oe(T,R,_,U);return Ur=null,Z}catch(ne){if(ne===Ea||ne===wi)throw ne;var de=hn(29,ne,null,T.mode);return de.lanes=U,de.return=T,de}finally{}}}var Br=wf(!0),Uf=wf(!1),Nn=L(null),In=null;function gt(e){var n=e.alternate;q(Ie,Ie.current&1),q(Nn,e),In===null&&(n===null||Mr.current!==null||n.memoizedState!==null)&&(In=e)}function Bf(e){if(e.tag===22){if(q(Ie,Ie.current),q(Nn,e),In===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(In=e)}}else St()}function St(){q(Ie,Ie.current),q(Nn,Nn.current)}function tt(e){G(Nn),In===e&&(In=null),G(Ie)}var Ie=L(0);function Wi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Yc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function $u(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:E({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ec={enqueueSetState:function(e,n,t){e=e._reactInternals;var r=vn(),a=yt(r);a.payload=n,t!=null&&(a.callback=t),n=mt(e,a,r),n!==null&&(gn(n,e,r),Ra(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=vn(),a=yt(r);a.tag=1,a.payload=n,t!=null&&(a.callback=t),n=mt(e,a,r),n!==null&&(gn(n,e,r),Ra(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=vn(),r=yt(t);r.tag=2,n!=null&&(r.callback=n),n=mt(e,r,t),n!==null&&(gn(n,e,t),Ra(n,e,t))}};function jf(e,n,t,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):n.prototype&&n.prototype.isPureReactComponent?!ba(t,r)||!ba(a,i):!0}function kf(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&ec.enqueueReplaceState(n,n.state,null)}function Jt(e,n){var t=n;if("ref"in n){t={};for(var r in n)r!=="ref"&&(t[r]=n[r])}if(e=e.defaultProps){t===n&&(t=E({},t));for(var a in e)t[a]===void 0&&(t[a]=e[a])}return t}var Pi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function zf(e){Pi(e)}function Gf(e){console.error(e)}function qf(e){Pi(e)}function Qi(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Yf(e,n,t){try{var r=e.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function nc(e,n,t){return t=yt(t),t.tag=3,t.payload={element:null},t.callback=function(){Qi(e,n)},t}function If(e){return e=yt(e),e.tag=3,e}function Vf(e,n,t,r){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){Yf(n,t,r)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Yf(n,t,r),typeof a!="function"&&(Ot===null?Ot=new Set([this]):Ot.add(this));var f=r.stack;this.componentDidCatch(r.value,{componentStack:f!==null?f:""})})}function lp(e,n,t,r,a){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=t.alternate,n!==null&&va(n,t,a,!0),t=Nn.current,t!==null){switch(t.tag){case 13:return In===null?_c():t.alternate===null&&Be===0&&(Be=3),t.flags&=-257,t.flags|=65536,t.lanes=a,r===Cu?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([r]):n.add(r),xc(e,r,a)),!1;case 22:return t.flags|=65536,r===Cu?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([r]):t.add(r)),xc(e,r,a)),!1}throw Error(c(435,t.tag))}return xc(e,r,a),_c(),!1}if(Ee)return n=Nn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=a,r!==Ru&&(e=Error(c(422),{cause:r}),ma(Tn(e,t)))):(r!==Ru&&(n=Error(c(423),{cause:r}),ma(Tn(n,t))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Tn(r,t),a=nc(e.stateNode,r,a),Lu(e,a),Be!==4&&(Be=2)),!1;var i=Error(c(520),{cause:r});if(i=Tn(i,t),ka===null?ka=[i]:ka.push(i),Be!==4&&(Be=2),n===null)return!0;r=Tn(r,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=a&-a,t.lanes|=e,e=nc(t.stateNode,r,e),Lu(t,e),!1;case 1:if(n=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ot===null||!Ot.has(i))))return t.flags|=65536,a&=-a,t.lanes|=a,a=If(a),Vf(a,e,t,r),Lu(t,a),!1}t=t.return}while(t!==null);return!1}var Xf=Error(c(461)),Xe=!1;function Pe(e,n,t,r){n.child=e===null?Uf(n,null,t,r):Br(n,e.child,t,r)}function Kf(e,n,t,r,a){t=t.render;var i=n.ref;if("ref"in r){var o={};for(var f in r)f!=="ref"&&(o[f]=r[f])}else o=r;return Pt(n),r=ku(e,n,t,o,i,a),f=zu(),e!==null&&!Xe?(Gu(e,n,a),rt(e,n,a)):(Ee&&f&&Eu(n),n.flags|=1,Pe(e,n,r,a),n.child)}function Wf(e,n,t,r,a){if(e===null){var i=t.type;return typeof i=="function"&&!vu(i)&&i.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=i,Pf(e,n,i,r,a)):(e=Ni(t.type,null,r,n,n.mode,a),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!oc(e,a)){var o=i.memoizedProps;if(t=t.compare,t=t!==null?t:ba,t(o,r)&&e.ref===n.ref)return rt(e,n,a)}return n.flags|=1,e=Zn(i,r),e.ref=n.ref,e.return=n,n.child=e}function Pf(e,n,t,r,a){if(e!==null){var i=e.memoizedProps;if(ba(i,r)&&e.ref===n.ref)if(Xe=!1,n.pendingProps=r=i,oc(e,a))(e.flags&131072)!==0&&(Xe=!0);else return n.lanes=e.lanes,rt(e,n,a)}return tc(e,n,t,r,a)}function Qf(e,n,t){var r=n.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((n.flags&128)!==0){if(r=i!==null?i.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;n.childLanes=i&~r}else n.childLanes=0,n.child=null;return Zf(e,n,r,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Li(n,i!==null?i.cachePool:null),i!==null?Ws(n,i):Uu(),Bf(n);else return n.lanes=n.childLanes=536870912,Zf(e,n,i!==null?i.baseLanes|t:t,t)}else i!==null?(Li(n,i.cachePool),Ws(n,i),St(),n.memoizedState=null):(e!==null&&Li(n,null),Uu(),St());return Pe(e,n,a,t),n.child}function Zf(e,n,t,r){var a=Du();return a=a===null?null:{parent:Ye._currentValue,pool:a},n.memoizedState={baseLanes:t,cachePool:a},e!==null&&Li(n,null),Uu(),Bf(n),e!==null&&va(e,n,r,!0),null}function Zi(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function tc(e,n,t,r,a){return Pt(n),t=ku(e,n,t,r,void 0,a),r=zu(),e!==null&&!Xe?(Gu(e,n,a),rt(e,n,a)):(Ee&&r&&Eu(n),n.flags|=1,Pe(e,n,t,a),n.child)}function Jf(e,n,t,r,a,i){return Pt(n),n.updateQueue=null,t=Qs(n,r,t,a),Ps(e),r=zu(),e!==null&&!Xe?(Gu(e,n,i),rt(e,n,i)):(Ee&&r&&Eu(n),n.flags|=1,Pe(e,n,t,i),n.child)}function Ff(e,n,t,r,a){if(Pt(n),n.stateNode===null){var i=Or,o=t.contextType;typeof o=="object"&&o!==null&&(i=$e(o)),i=new t(r,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ec,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=r,i.state=n.memoizedState,i.refs={},Mu(n),o=t.contextType,i.context=typeof o=="object"&&o!==null?$e(o):Or,i.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&($u(n,t,o,r),i.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ec.enqueueReplaceState(i,i.state,null),_a(n,r,i,a),Ta(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){i=n.stateNode;var f=n.memoizedProps,g=Jt(t,f);i.props=g;var x=i.context,H=t.contextType;o=Or,typeof H=="object"&&H!==null&&(o=$e(H));var B=t.getDerivedStateFromProps;H=typeof B=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,H||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||x!==o)&&kf(n,i,r,o),pt=!1;var N=n.memoizedState;i.state=N,_a(n,r,i,a),Ta(),x=n.memoizedState,f||N!==x||pt?(typeof B=="function"&&($u(n,t,B,r),x=n.memoizedState),(g=pt||jf(n,t,g,r,N,x,o))?(H||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=x),i.props=r,i.state=x,i.context=o,r=g):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{i=n.stateNode,Hu(e,n),o=n.memoizedProps,H=Jt(t,o),i.props=H,B=n.pendingProps,N=i.context,x=t.contextType,g=Or,typeof x=="object"&&x!==null&&(g=$e(x)),f=t.getDerivedStateFromProps,(x=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==B||N!==g)&&kf(n,i,r,g),pt=!1,N=n.memoizedState,i.state=N,_a(n,r,i,a),Ta();var D=n.memoizedState;o!==B||N!==D||pt||e!==null&&e.dependencies!==null&&Mi(e.dependencies)?(typeof f=="function"&&($u(n,t,f,r),D=n.memoizedState),(H=pt||jf(n,t,H,r,N,D,g)||e!==null&&e.dependencies!==null&&Mi(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,D,g),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,D,g)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=D),i.props=r,i.state=D,i.context=g,r=H):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&N===e.memoizedState||(n.flags|=1024),r=!1)}return i=r,Zi(e,n),r=(n.flags&128)!==0,i||r?(i=n.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,e!==null&&r?(n.child=Br(n,e.child,null,a),n.child=Br(n,null,t,a)):Pe(e,n,t,a),n.memoizedState=i.state,e=n.child):e=rt(e,n,a),e}function $f(e,n,t,r){return ya(),n.flags|=256,Pe(e,n,t,r),n.child}var rc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ac(e){return{baseLanes:e,cachePool:zs()}}function ic(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Dn),e}function ed(e,n,t){var r=n.pendingProps,a=!1,i=(n.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),o&&(a=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(a?gt(n):St(),Ee){var f=Ue,g;if(g=f){e:{for(g=f,f=Yn;g.nodeType!==8;){if(!f){f=null;break e}if(g=jn(g.nextSibling),g===null){f=null;break e}}f=g}f!==null?(n.memoizedState={dehydrated:f,treeContext:It!==null?{id:Jn,overflow:Fn}:null,retryLane:536870912,hydrationErrors:null},g=hn(18,null,null,0),g.stateNode=f,g.return=n,n.child=g,tn=n,Ue=null,g=!0):g=!1}g||Kt(n)}if(f=n.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Yc(f)?n.lanes=32:n.lanes=536870912,null;tt(n)}return f=r.children,r=r.fallback,a?(St(),a=n.mode,f=Ji({mode:"hidden",children:f},a),r=Yt(r,a,t,null),f.return=n,r.return=n,f.sibling=r,n.child=f,a=n.child,a.memoizedState=ac(t),a.childLanes=ic(e,o,t),n.memoizedState=rc,r):(gt(n),lc(n,f))}if(g=e.memoizedState,g!==null&&(f=g.dehydrated,f!==null)){if(i)n.flags&256?(gt(n),n.flags&=-257,n=uc(e,n,t)):n.memoizedState!==null?(St(),n.child=e.child,n.flags|=128,n=null):(St(),a=r.fallback,f=n.mode,r=Ji({mode:"visible",children:r.children},f),a=Yt(a,f,t,null),a.flags|=2,r.return=n,a.return=n,r.sibling=a,n.child=r,Br(n,e.child,null,t),r=n.child,r.memoizedState=ac(t),r.childLanes=ic(e,o,t),n.memoizedState=rc,n=a);else if(gt(n),Yc(f)){if(o=f.nextSibling&&f.nextSibling.dataset,o)var x=o.dgst;o=x,r=Error(c(419)),r.stack="",r.digest=o,ma({value:r,source:null,stack:null}),n=uc(e,n,t)}else if(Xe||va(e,n,t,!1),o=(t&e.childLanes)!==0,Xe||o){if(o=Me,o!==null&&(r=t&-t,r=(r&42)!==0?1:Il(r),r=(r&(o.suspendedLanes|t))!==0?0:r,r!==0&&r!==g.retryLane))throw g.retryLane=r,_r(e,r),gn(o,e,r),Xf;f.data==="$?"||_c(),n=uc(e,n,t)}else f.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Ue=jn(f.nextSibling),tn=n,Ee=!0,Xt=null,Yn=!1,e!==null&&(On[xn++]=Jn,On[xn++]=Fn,On[xn++]=It,Jn=e.id,Fn=e.overflow,It=n),n=lc(n,r.children),n.flags|=4096);return n}return a?(St(),a=r.fallback,f=n.mode,g=e.child,x=g.sibling,r=Zn(g,{mode:"hidden",children:r.children}),r.subtreeFlags=g.subtreeFlags&65011712,x!==null?a=Zn(x,a):(a=Yt(a,f,t,null),a.flags|=2),a.return=n,r.return=n,r.sibling=a,n.child=r,r=a,a=n.child,f=e.child.memoizedState,f===null?f=ac(t):(g=f.cachePool,g!==null?(x=Ye._currentValue,g=g.parent!==x?{parent:x,pool:x}:g):g=zs(),f={baseLanes:f.baseLanes|t,cachePool:g}),a.memoizedState=f,a.childLanes=ic(e,o,t),n.memoizedState=rc,r):(gt(n),t=e.child,e=t.sibling,t=Zn(t,{mode:"visible",children:r.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function lc(e,n){return n=Ji({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ji(e,n){return e=hn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function uc(e,n,t){return Br(n,e.child,null,t),e=lc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nd(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),_u(e.return,n,t)}function cc(e,n,t,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=t,i.tailMode=a)}function td(e,n,t){var r=n.pendingProps,a=r.revealOrder,i=r.tail;if(Pe(e,n,r.children,t),r=Ie.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nd(e,t,n);else if(e.tag===19)nd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(q(Ie,r),a){case"forwards":for(t=n.child,a=null;t!==null;)e=t.alternate,e!==null&&Wi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=n.child,n.child=null):(a=t.sibling,t.sibling=null),cc(n,!1,a,t,i);break;case"backwards":for(t=null,a=n.child,n.child=null;a!==null;){if(e=a.alternate,e!==null&&Wi(e)===null){n.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}cc(n,!0,t,null,i);break;case"together":cc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function rt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(va(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Zn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Zn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function oc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Mi(e)))}function up(e,n,t){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),ht(n,Ye,e.memoizedState.cache),ya();break;case 27:case 5:cr(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:ht(n,n.type,n.memoizedProps.value);break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(gt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ed(e,n,t):(gt(n),e=rt(e,n,t),e!==null?e.sibling:null);gt(n);break;case 19:var a=(e.flags&128)!==0;if(r=(t&n.childLanes)!==0,r||(va(e,n,t,!1),r=(t&n.childLanes)!==0),a){if(r)return td(e,n,t);n.flags|=128}if(a=n.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),q(Ie,Ie.current),r)break;return null;case 22:case 23:return n.lanes=0,Qf(e,n,t);case 24:ht(n,Ye,e.memoizedState.cache)}return rt(e,n,t)}function rd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)Xe=!0;else{if(!oc(e,t)&&(n.flags&128)===0)return Xe=!1,up(e,n,t);Xe=(e.flags&131072)!==0}else Xe=!1,Ee&&(n.flags&1048576)!==0&&Hs(n,Ci,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var r=n.elementType,a=r._init;if(r=a(r._payload),n.type=r,typeof r=="function")vu(r)?(e=Jt(r,e),n.tag=1,n=Ff(null,n,r,e,t)):(n.tag=0,n=tc(null,n,r,e,t));else{if(r!=null){if(a=r.$$typeof,a===F){n.tag=11,n=Kf(null,n,r,e,t);break e}else if(a===w){n.tag=14,n=Wf(null,n,r,e,t);break e}}throw n=P(r)||r,Error(c(306,n,""))}}return n;case 0:return tc(e,n,n.type,n.pendingProps,t);case 1:return r=n.type,a=Jt(r,n.pendingProps),Ff(e,n,r,a,t);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(c(387));r=n.pendingProps;var i=n.memoizedState;a=i.element,Hu(e,n),_a(n,r,null,t);var o=n.memoizedState;if(r=o.cache,ht(n,Ye,r),r!==i.cache&&Ou(n,[Ye],t,!0),Ta(),r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=$f(e,n,r,t);break e}else if(r!==a){a=Tn(Error(c(424)),n),ma(a),n=$f(e,n,r,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=jn(e.firstChild),tn=n,Ee=!0,Xt=null,Yn=!0,t=Uf(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(ya(),r===a){n=rt(e,n,t);break e}Pe(e,n,r,t)}n=n.child}return n;case 26:return Zi(e,n),e===null?(t=ub(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,r=fl(ae.current).createElement(t),r[Fe]=n,r[rn]=e,Ze(r,t,e),Ve(r),n.stateNode=r):n.memoizedState=ub(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return cr(n),e===null&&Ee&&(r=n.stateNode=ab(n.type,n.pendingProps,ae.current),tn=n,Yn=!0,a=Ue,Dt(n.type)?(Ic=a,Ue=jn(r.firstChild)):Ue=a),Pe(e,n,n.pendingProps.children,t),Zi(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((a=r=Ue)&&(r=Up(r,n.type,n.pendingProps,Yn),r!==null?(n.stateNode=r,tn=n,Ue=jn(r.firstChild),Yn=!1,a=!0):a=!1),a||Kt(n)),cr(n),a=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,r=i.children,zc(a,i)?r=null:o!==null&&zc(a,o)&&(n.flags|=32),n.memoizedState!==null&&(a=ku(e,n,$h,null,null,t),Wa._currentValue=a),Zi(e,n),Pe(e,n,r,t),n.child;case 6:return e===null&&Ee&&((e=t=Ue)&&(t=Bp(t,n.pendingProps,Yn),t!==null?(n.stateNode=t,tn=n,Ue=null,e=!0):e=!1),e||Kt(n)),null;case 13:return ed(e,n,t);case 4:return Ce(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Br(n,null,r,t):Pe(e,n,r,t),n.child;case 11:return Kf(e,n,n.type,n.pendingProps,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:return r=n.pendingProps,ht(n,n.type,r.value),Pe(e,n,r.children,t),n.child;case 9:return a=n.type._context,r=n.pendingProps.children,Pt(n),a=$e(a),r=r(a),n.flags|=1,Pe(e,n,r,t),n.child;case 14:return Wf(e,n,n.type,n.pendingProps,t);case 15:return Pf(e,n,n.type,n.pendingProps,t);case 19:return td(e,n,t);case 31:return r=n.pendingProps,t=n.mode,r={mode:r.mode,children:r.children},e===null?(t=Ji(r,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=Zn(e.child,r),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return Qf(e,n,t);case 24:return Pt(n),r=$e(Ye),e===null?(a=Du(),a===null&&(a=Me,i=xu(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=t),a=i),n.memoizedState={parent:r,cache:a},Mu(n),ht(n,Ye,a)):((e.lanes&t)!==0&&(Hu(e,n),_a(n,null,null,t),Ta()),a=e.memoizedState,i=n.memoizedState,a.parent!==r?(a={parent:r,cache:r},n.memoizedState=a,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=a),ht(n,Ye,r)):(r=i.cache,ht(n,Ye,r),r!==a.cache&&Ou(n,[Ye],t,!0))),Pe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function at(e){e.flags|=4}function ad(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!db(n)){if(n=Nn.current,n!==null&&((ve&4194048)===ve?In!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==In))throw Aa=Cu,Gs;e.flags|=8192}}function Fi(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Uo():536870912,e.lanes|=n,Gr|=n)}function Ha(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function we(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function cp(e,n,t){var r=n.pendingProps;switch(Au(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return we(n),null;case 1:return we(n),null;case 3:return t=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),et(Ye),Gn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(pa(n)?at(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Us())),we(n),null;case 26:return t=n.memoizedState,e===null?(at(n),t!==null?(we(n),ad(n,t)):(we(n),n.flags&=-16777217)):t?t!==e.memoizedState?(at(n),we(n),ad(n,t)):(we(n),n.flags&=-16777217):(e.memoizedProps!==r&&at(n),we(n),n.flags&=-16777217),null;case 27:or(n),t=ae.current;var a=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==r&&at(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return we(n),null}e=$.current,pa(n)?Ls(n):(e=ab(a,r,t),n.stateNode=e,at(n))}return we(n),null;case 5:if(or(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&at(n);else{if(!r){if(n.stateNode===null)throw Error(c(166));return we(n),null}if(e=$.current,pa(n))Ls(n);else{switch(a=fl(ae.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?a.createElement(t,{is:r.is}):a.createElement(t)}}e[Fe]=n,e[rn]=r;e:for(a=n.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}n.stateNode=e;e:switch(Ze(e,t,r),t){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&at(n)}}return we(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&at(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(c(166));if(e=ae.current,pa(n)){if(e=n.stateNode,t=n.memoizedProps,r=null,a=tn,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Fe]=n,e=!!(e.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Jd(e.nodeValue,t)),e||Kt(n)}else e=fl(e).createTextNode(r),e[Fe]=n,n.stateNode=e}return we(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=pa(n),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(c(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(c(317));a[Fe]=n}else ya(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;we(n),a=!1}else a=Us(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return n.flags&256?(tt(n),n):(tt(n),null)}if(tt(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=r!==null,e=e!==null&&e.memoizedState!==null,t){r=n.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),Fi(n,n.updateQueue),we(n),null;case 4:return Gn(),e===null&&wc(n.stateNode.containerInfo),we(n),null;case 10:return et(n.type),we(n),null;case 19:if(G(Ie),a=n.memoizedState,a===null)return we(n),null;if(r=(n.flags&128)!==0,i=a.rendering,i===null)if(r)Ha(a,!1);else{if(Be!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(i=Wi(e),i!==null){for(n.flags|=128,Ha(a,!1),e=i.updateQueue,n.updateQueue=e,Fi(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Ms(t,e),t=t.sibling;return q(Ie,Ie.current&1|2),n.child}e=e.sibling}a.tail!==null&&wn()>nl&&(n.flags|=128,r=!0,Ha(a,!1),n.lanes=4194304)}else{if(!r)if(e=Wi(i),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Fi(n,e),Ha(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!Ee)return we(n),null}else 2*wn()-a.renderingStartTime>nl&&t!==536870912&&(n.flags|=128,r=!0,Ha(a,!1),n.lanes=4194304);a.isBackwards?(i.sibling=n.child,n.child=i):(e=a.last,e!==null?e.sibling=i:n.child=i,a.last=i)}return a.tail!==null?(n=a.tail,a.rendering=n,a.tail=n.sibling,a.renderingStartTime=wn(),n.sibling=null,e=Ie.current,q(Ie,r?e&1|2:e&1),n):(we(n),null);case 22:case 23:return tt(n),Bu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(t&536870912)!==0&&(n.flags&128)===0&&(we(n),n.subtreeFlags&6&&(n.flags|=8192)):we(n),t=n.updateQueue,t!==null&&Fi(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==t&&(n.flags|=2048),e!==null&&G(Qt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),et(Ye),we(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function op(e,n){switch(Au(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return et(Ye),Gn(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return or(n),null;case 13:if(tt(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));ya()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return G(Ie),null;case 4:return Gn(),null;case 10:return et(n.type),null;case 22:case 23:return tt(n),Bu(),e!==null&&G(Qt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return et(Ye),null;case 25:return null;default:return null}}function id(e,n){switch(Au(n),n.tag){case 3:et(Ye),Gn();break;case 26:case 27:case 5:or(n);break;case 4:Gn();break;case 13:tt(n);break;case 19:G(Ie);break;case 10:et(n.type);break;case 22:case 23:tt(n),Bu(),e!==null&&G(Qt);break;case 24:et(Ye)}}function La(e,n){try{var t=n.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var a=r.next;t=a;do{if((t.tag&e)===e){r=void 0;var i=t.create,o=t.inst;r=i(),o.destroy=r}t=t.next}while(t!==a)}}catch(f){De(n,n.return,f)}}function Et(e,n,t){try{var r=n.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,f=o.destroy;if(f!==void 0){o.destroy=void 0,a=n;var g=t,x=f;try{x()}catch(H){De(a,g,H)}}}r=r.next}while(r!==i)}}catch(H){De(n,n.return,H)}}function ld(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Ks(n,t)}catch(r){De(e,e.return,r)}}}function ud(e,n,t){t.props=Jt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(r){De(e,n,r)}}function wa(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof t=="function"?e.refCleanup=t(r):t.current=r}}catch(a){De(e,n,a)}}function Vn(e,n){var t=e.ref,r=e.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(a){De(e,n,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){De(e,n,a)}else t.current=null}function cd(e){var n=e.type,t=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break e;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(a){De(e,e.return,a)}}function sc(e,n,t){try{var r=e.stateNode;Cp(r,e.type,t,n),r[rn]=n}catch(a){De(e,e.return,a)}}function od(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Dt(e.type)||e.tag===4}function fc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Dt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dc(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=sl));else if(r!==4&&(r===27&&Dt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(dc(e,n,t),e=e.sibling;e!==null;)dc(e,n,t),e=e.sibling}function $i(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(r===27&&Dt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for($i(e,n,t),e=e.sibling;e!==null;)$i(e,n,t),e=e.sibling}function sd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var r=e.type,a=n.attributes;a.length;)n.removeAttributeNode(a[0]);Ze(n,r,t),n[Fe]=e,n[rn]=t}catch(i){De(e,e.return,i)}}var it=!1,ke=!1,bc=!1,fd=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function sp(e,n){if(e=e.containerInfo,jc=ml,e=Es(e),fu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var o=0,f=-1,g=-1,x=0,H=0,B=e,N=null;n:for(;;){for(var D;B!==t||a!==0&&B.nodeType!==3||(f=o+a),B!==i||r!==0&&B.nodeType!==3||(g=o+r),B.nodeType===3&&(o+=B.nodeValue.length),(D=B.firstChild)!==null;)N=B,B=D;for(;;){if(B===e)break n;if(N===t&&++x===a&&(f=o),N===i&&++H===r&&(g=o),(D=B.nextSibling)!==null)break;B=N,N=B.parentNode}B=D}t=f===-1||g===-1?null:{start:f,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(kc={focusedElem:e,selectionRange:t},ml=!1,Ke=n;Ke!==null;)if(n=Ke,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Ke=e;else for(;Ke!==null;){switch(n=Ke,i=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,t=n,a=i.memoizedProps,i=i.memoizedState,r=t.stateNode;try{var le=Jt(t.type,a,t.elementType===t.type);e=r.getSnapshotBeforeUpdate(le,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){De(t,t.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)qc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,Ke=e;break}Ke=n.return}}function dd(e,n,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:At(e,t),r&4&&La(5,t);break;case 1:if(At(e,t),r&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(o){De(t,t.return,o)}else{var a=Jt(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(a,n,e.__reactInternalSnapshotBeforeUpdate)}catch(o){De(t,t.return,o)}}r&64&&ld(t),r&512&&wa(t,t.return);break;case 3:if(At(e,t),r&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Ks(e,n)}catch(o){De(t,t.return,o)}}break;case 27:n===null&&r&4&&sd(t);case 26:case 5:At(e,t),n===null&&r&4&&cd(t),r&512&&wa(t,t.return);break;case 12:At(e,t);break;case 13:At(e,t),r&4&&pd(e,t),r&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=gp.bind(null,t),jp(e,t))));break;case 22:if(r=t.memoizedState!==null||it,!r){n=n!==null&&n.memoizedState!==null||ke,a=it;var i=ke;it=r,(ke=n)&&!i?Rt(e,t,(t.subtreeFlags&8772)!==0):At(e,t),it=a,ke=i}break;case 30:break;default:At(e,t)}}function bd(e){var n=e.alternate;n!==null&&(e.alternate=null,bd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Kl(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,un=!1;function lt(e,n,t){for(t=t.child;t!==null;)hd(e,n,t),t=t.sibling}function hd(e,n,t){if(fn&&typeof fn.onCommitFiberUnmount=="function")try{fn.onCommitFiberUnmount(na,t)}catch{}switch(t.tag){case 26:ke||Vn(t,n),lt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ke||Vn(t,n);var r=Le,a=un;Dt(t.type)&&(Le=t.stateNode,un=!1),lt(e,n,t),Ia(t.stateNode),Le=r,un=a;break;case 5:ke||Vn(t,n);case 6:if(r=Le,a=un,Le=null,lt(e,n,t),Le=r,un=a,Le!==null)if(un)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(t.stateNode)}catch(i){De(t,n,i)}else try{Le.removeChild(t.stateNode)}catch(i){De(t,n,i)}break;case 18:Le!==null&&(un?(e=Le,tb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Ja(e)):tb(Le,t.stateNode));break;case 4:r=Le,a=un,Le=t.stateNode.containerInfo,un=!0,lt(e,n,t),Le=r,un=a;break;case 0:case 11:case 14:case 15:ke||Et(2,t,n),ke||Et(4,t,n),lt(e,n,t);break;case 1:ke||(Vn(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"&&ud(t,n,r)),lt(e,n,t);break;case 21:lt(e,n,t);break;case 22:ke=(r=ke)||t.memoizedState!==null,lt(e,n,t),ke=r;break;default:lt(e,n,t)}}function pd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ja(e)}catch(t){De(n,n.return,t)}}function fp(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fd),n;default:throw Error(c(435,e.tag))}}function hc(e,n){var t=fp(e);n.forEach(function(r){var a=Sp.bind(null,e,r);t.has(r)||(t.add(r),r.then(a,a))})}function pn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r],i=e,o=n,f=o;e:for(;f!==null;){switch(f.tag){case 27:if(Dt(f.type)){Le=f.stateNode,un=!1;break e}break;case 5:Le=f.stateNode,un=!1;break e;case 3:case 4:Le=f.stateNode.containerInfo,un=!0;break e}f=f.return}if(Le===null)throw Error(c(160));hd(i,o,a),Le=null,un=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yd(n,e),n=n.sibling}var Bn=null;function yd(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pn(n,e),yn(e),r&4&&(Et(3,e,e.return),La(3,e),Et(5,e,e.return));break;case 1:pn(n,e),yn(e),r&512&&(ke||t===null||Vn(t,t.return)),r&64&&it&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var a=Bn;if(pn(n,e),yn(e),r&512&&(ke||t===null||Vn(t,t.return)),r&4){var i=t!==null?t.memoizedState:null;if(r=e.memoizedState,t===null)if(r===null)if(e.stateNode===null){e:{r=e.type,t=e.memoizedProps,a=a.ownerDocument||a;n:switch(r){case"title":i=a.getElementsByTagName("title")[0],(!i||i[aa]||i[Fe]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),Ze(i,r,t),i[Fe]=e,Ve(i),r=i;break e;case"link":var o=sb("link","href",a).get(r+(t.href||""));if(o){for(var f=0;f<o.length;f++)if(i=o[f],i.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&i.getAttribute("rel")===(t.rel==null?null:t.rel)&&i.getAttribute("title")===(t.title==null?null:t.title)&&i.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(f,1);break n}}i=a.createElement(r),Ze(i,r,t),a.head.appendChild(i);break;case"meta":if(o=sb("meta","content",a).get(r+(t.content||""))){for(f=0;f<o.length;f++)if(i=o[f],i.getAttribute("content")===(t.content==null?null:""+t.content)&&i.getAttribute("name")===(t.name==null?null:t.name)&&i.getAttribute("property")===(t.property==null?null:t.property)&&i.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&i.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(f,1);break n}}i=a.createElement(r),Ze(i,r,t),a.head.appendChild(i);break;default:throw Error(c(468,r))}i[Fe]=e,Ve(i),r=i}e.stateNode=r}else fb(a,e.type,e.stateNode);else e.stateNode=ob(a,r,e.memoizedProps);else i!==r?(i===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):i.count--,r===null?fb(a,e.type,e.stateNode):ob(a,r,e.memoizedProps)):r===null&&e.stateNode!==null&&sc(e,e.memoizedProps,t.memoizedProps)}break;case 27:pn(n,e),yn(e),r&512&&(ke||t===null||Vn(t,t.return)),t!==null&&r&4&&sc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(pn(n,e),yn(e),r&512&&(ke||t===null||Vn(t,t.return)),e.flags&32){a=e.stateNode;try{vr(a,"")}catch(D){De(e,e.return,D)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,sc(e,a,t!==null?t.memoizedProps:a)),r&1024&&(bc=!0);break;case 6:if(pn(n,e),yn(e),r&4){if(e.stateNode===null)throw Error(c(162));r=e.memoizedProps,t=e.stateNode;try{t.nodeValue=r}catch(D){De(e,e.return,D)}}break;case 3:if(hl=null,a=Bn,Bn=dl(n.containerInfo),pn(n,e),Bn=a,yn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{Ja(n.containerInfo)}catch(D){De(e,e.return,D)}bc&&(bc=!1,md(e));break;case 4:r=Bn,Bn=dl(e.stateNode.containerInfo),pn(n,e),yn(e),Bn=r;break;case 12:pn(n,e),yn(e);break;case 13:pn(n,e),yn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Sc=wn()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hc(e,r)));break;case 22:a=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,x=it,H=ke;if(it=x||a,ke=H||g,pn(n,e),ke=H,it=x,yn(e),r&8192)e:for(n=e.stateNode,n._visibility=a?n._visibility&-2:n._visibility|1,a&&(t===null||g||it||ke||Ft(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(i=g.stateNode,a)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{f=g.stateNode;var B=g.memoizedProps.style,N=B!=null&&B.hasOwnProperty("display")?B.display:null;f.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(D){De(g,g.return,D)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=a?"":g.memoizedProps}catch(D){De(g,g.return,D)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,hc(e,t))));break;case 19:pn(n,e),yn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hc(e,r)));break;case 30:break;case 21:break;default:pn(n,e),yn(e)}}function yn(e){var n=e.flags;if(n&2){try{for(var t,r=e.return;r!==null;){if(od(r)){t=r;break}r=r.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var a=t.stateNode,i=fc(e);$i(e,i,a);break;case 5:var o=t.stateNode;t.flags&32&&(vr(o,""),t.flags&=-33);var f=fc(e);$i(e,f,o);break;case 3:case 4:var g=t.stateNode.containerInfo,x=fc(e);dc(e,x,g);break;default:throw Error(c(161))}}catch(H){De(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function md(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;md(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function At(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)dd(e,n.alternate,n),n=n.sibling}function Ft(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Et(4,n,n.return),Ft(n);break;case 1:Vn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&ud(n,n.return,t),Ft(n);break;case 27:Ia(n.stateNode);case 26:case 5:Vn(n,n.return),Ft(n);break;case 22:n.memoizedState===null&&Ft(n);break;case 30:Ft(n);break;default:Ft(n)}e=e.sibling}}function Rt(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,a=e,i=n,o=i.flags;switch(i.tag){case 0:case 11:case 15:Rt(a,i,t),La(4,i);break;case 1:if(Rt(a,i,t),r=i,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(x){De(r,r.return,x)}if(r=i,a=r.updateQueue,a!==null){var f=r.stateNode;try{var g=a.shared.hiddenCallbacks;if(g!==null)for(a.shared.hiddenCallbacks=null,a=0;a<g.length;a++)Xs(g[a],f)}catch(x){De(r,r.return,x)}}t&&o&64&&ld(i),wa(i,i.return);break;case 27:sd(i);case 26:case 5:Rt(a,i,t),t&&r===null&&o&4&&cd(i),wa(i,i.return);break;case 12:Rt(a,i,t);break;case 13:Rt(a,i,t),t&&o&4&&pd(a,i);break;case 22:i.memoizedState===null&&Rt(a,i,t),wa(i,i.return);break;case 30:break;default:Rt(a,i,t)}n=n.sibling}}function pc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&ga(t))}function yc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ga(e))}function Xn(e,n,t,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)vd(e,n,t,r),n=n.sibling}function vd(e,n,t,r){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Xn(e,n,t,r),a&2048&&La(9,n);break;case 1:Xn(e,n,t,r);break;case 3:Xn(e,n,t,r),a&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ga(e)));break;case 12:if(a&2048){Xn(e,n,t,r),e=n.stateNode;try{var i=n.memoizedProps,o=i.id,f=i.onPostCommit;typeof f=="function"&&f(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){De(n,n.return,g)}}else Xn(e,n,t,r);break;case 13:Xn(e,n,t,r);break;case 23:break;case 22:i=n.stateNode,o=n.alternate,n.memoizedState!==null?i._visibility&2?Xn(e,n,t,r):Ua(e,n):i._visibility&2?Xn(e,n,t,r):(i._visibility|=2,jr(e,n,t,r,(n.subtreeFlags&10256)!==0)),a&2048&&pc(o,n);break;case 24:Xn(e,n,t,r),a&2048&&yc(n.alternate,n);break;default:Xn(e,n,t,r)}}function jr(e,n,t,r,a){for(a=a&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=e,o=n,f=t,g=r,x=o.flags;switch(o.tag){case 0:case 11:case 15:jr(i,o,f,g,a),La(8,o);break;case 23:break;case 22:var H=o.stateNode;o.memoizedState!==null?H._visibility&2?jr(i,o,f,g,a):Ua(i,o):(H._visibility|=2,jr(i,o,f,g,a)),a&&x&2048&&pc(o.alternate,o);break;case 24:jr(i,o,f,g,a),a&&x&2048&&yc(o.alternate,o);break;default:jr(i,o,f,g,a)}n=n.sibling}}function Ua(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,r=n,a=r.flags;switch(r.tag){case 22:Ua(t,r),a&2048&&pc(r.alternate,r);break;case 24:Ua(t,r),a&2048&&yc(r.alternate,r);break;default:Ua(t,r)}n=n.sibling}}var Ba=8192;function kr(e){if(e.subtreeFlags&Ba)for(e=e.child;e!==null;)gd(e),e=e.sibling}function gd(e){switch(e.tag){case 26:kr(e),e.flags&Ba&&e.memoizedState!==null&&Zp(Bn,e.memoizedState,e.memoizedProps);break;case 5:kr(e);break;case 3:case 4:var n=Bn;Bn=dl(e.stateNode.containerInfo),kr(e),Bn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Ba,Ba=16777216,kr(e),Ba=n):kr(e));break;default:kr(e)}}function Sd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ja(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Ke=r,Ad(r,e)}Sd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ed(e),e=e.sibling}function Ed(e){switch(e.tag){case 0:case 11:case 15:ja(e),e.flags&2048&&Et(9,e,e.return);break;case 3:ja(e);break;case 12:ja(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,el(e)):ja(e);break;default:ja(e)}}function el(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var r=n[t];Ke=r,Ad(r,e)}Sd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Et(8,n,n.return),el(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,el(n));break;default:el(n)}e=e.sibling}}function Ad(e,n){for(;Ke!==null;){var t=Ke;switch(t.tag){case 0:case 11:case 15:Et(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Ke=r;else e:for(t=e;Ke!==null;){r=Ke;var a=r.sibling,i=r.return;if(bd(r),r===t){Ke=null;break e}if(a!==null){a.return=i,Ke=a;break e}Ke=i}}}var dp={getCacheForType:function(e){var n=$e(Ye),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},bp=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Me=null,ye=null,ve=0,Re=0,mn=null,Tt=!1,zr=!1,mc=!1,ut=0,Be=0,_t=0,$t=0,vc=0,Dn=0,Gr=0,ka=null,cn=null,gc=!1,Sc=0,nl=1/0,tl=null,Ot=null,Qe=0,xt=null,qr=null,Yr=0,Ec=0,Ac=null,Rd=null,za=0,Rc=null;function vn(){if((Ae&2)!==0&&ve!==0)return ve&-ve;if(M.T!==null){var e=Dr;return e!==0?e:Cc()}return ko()}function Td(){Dn===0&&(Dn=(ve&536870912)===0||Ee?wo():536870912);var e=Nn.current;return e!==null&&(e.flags|=32),Dn}function gn(e,n,t){(e===Me&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(Ir(e,0),Nt(e,ve,Dn,!1)),ra(e,t),((Ae&2)===0||e!==Me)&&(e===Me&&((Ae&2)===0&&($t|=t),Be===4&&Nt(e,ve,Dn,!1)),Kn(e))}function _d(e,n,t){if((Ae&6)!==0)throw Error(c(327));var r=!t&&(n&124)===0&&(n&e.expiredLanes)===0||ta(e,n),a=r?yp(e,n):Oc(e,n,!0),i=r;do{if(a===0){zr&&!r&&Nt(e,n,0,!1);break}else{if(t=e.current.alternate,i&&!hp(t)){a=Oc(e,n,!1),i=!1;continue}if(a===2){if(i=n,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var f=e;a=ka;var g=f.current.memoizedState.isDehydrated;if(g&&(Ir(f,o).flags|=256),o=Oc(f,o,!1),o!==2){if(mc&&!g){f.errorRecoveryDisabledLanes|=i,$t|=i,a=4;break e}i=cn,cn=a,i!==null&&(cn===null?cn=i:cn.push.apply(cn,i))}a=o}if(i=!1,a!==2)continue}}if(a===1){Ir(e,0),Nt(e,n,0,!0);break}e:{switch(r=e,i=a,i){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:Nt(r,n,Dn,!Tt);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(a=Sc+300-wn(),10<a)){if(Nt(r,n,Dn,!Tt),bi(r,0,!0)!==0)break e;r.timeoutHandle=eb(Od.bind(null,r,t,cn,tl,gc,n,Dn,$t,Gr,Tt,i,2,-0,0),a);break e}Od(r,t,cn,tl,gc,n,Dn,$t,Gr,Tt,i,0,-0,0)}}break}while(!0);Kn(e)}function Od(e,n,t,r,a,i,o,f,g,x,H,B,N,D){if(e.timeoutHandle=-1,B=n.subtreeFlags,(B&8192||(B&16785408)===16785408)&&(Ka={stylesheets:null,count:0,unsuspend:Qp},gd(n),B=Jp(),B!==null)){e.cancelPendingCommit=B(Ld.bind(null,e,n,i,t,r,a,o,f,g,H,1,N,D)),Nt(e,i,o,!x);return}Ld(e,n,i,t,r,a,o,f,g)}function hp(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var a=t[r],i=a.getSnapshot;a=a.value;try{if(!bn(i(),a))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Nt(e,n,t,r){n&=~vc,n&=~$t,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var a=n;0<a;){var i=31-dn(a),o=1<<i;r[i]=-1,a&=~o}t!==0&&Bo(e,t,n)}function rl(){return(Ae&6)===0?(Ga(0),!1):!0}function Tc(){if(ye!==null){if(Re===0)var e=ye.return;else e=ye,$n=Wt=null,qu(e),Ur=null,Ca=0,e=ye;for(;e!==null;)id(e.alternate,e),e=e.return;ye=null}}function Ir(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Hp(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Tc(),Me=e,ye=t=Zn(e.current,null),ve=n,Re=0,mn=null,Tt=!1,zr=ta(e,n),mc=!1,Gr=Dn=vc=$t=_t=Be=0,cn=ka=null,gc=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var a=31-dn(r),i=1<<a;n|=e[a],r&=~i}return ut=n,_i(),t}function xd(e,n){fe=null,M.H=Vi,n===Ea||n===wi?(n=Is(),Re=3):n===Gs?(n=Is(),Re=4):Re=n===Xf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,mn=n,ye===null&&(Be=1,Qi(e,Tn(n,e.current)))}function Nd(){var e=M.H;return M.H=Vi,e===null?Vi:e}function Dd(){var e=M.A;return M.A=dp,e}function _c(){Be=4,Tt||(ve&4194048)!==ve&&Nn.current!==null||(zr=!0),(_t&134217727)===0&&($t&134217727)===0||Me===null||Nt(Me,ve,Dn,!1)}function Oc(e,n,t){var r=Ae;Ae|=2;var a=Nd(),i=Dd();(Me!==e||ve!==n)&&(tl=null,Ir(e,n)),n=!1;var o=Be;e:do try{if(Re!==0&&ye!==null){var f=ye,g=mn;switch(Re){case 8:Tc(),o=6;break e;case 3:case 2:case 9:case 6:Nn.current===null&&(n=!0);var x=Re;if(Re=0,mn=null,Vr(e,f,g,x),t&&zr){o=0;break e}break;default:x=Re,Re=0,mn=null,Vr(e,f,g,x)}}pp(),o=Be;break}catch(H){xd(e,H)}while(!0);return n&&e.shellSuspendCounter++,$n=Wt=null,Ae=r,M.H=a,M.A=i,ye===null&&(Me=null,ve=0,_i()),o}function pp(){for(;ye!==null;)Cd(ye)}function yp(e,n){var t=Ae;Ae|=2;var r=Nd(),a=Dd();Me!==e||ve!==n?(tl=null,nl=wn()+500,Ir(e,n)):zr=ta(e,n);e:do try{if(Re!==0&&ye!==null){n=ye;var i=mn;n:switch(Re){case 1:Re=0,mn=null,Vr(e,n,i,1);break;case 2:case 9:if(qs(i)){Re=0,mn=null,Md(n);break}n=function(){Re!==2&&Re!==9||Me!==e||(Re=7),Kn(e)},i.then(n,n);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:qs(i)?(Re=0,mn=null,Md(n)):(Re=0,mn=null,Vr(e,n,i,7));break;case 5:var o=null;switch(ye.tag){case 26:o=ye.memoizedState;case 5:case 27:var f=ye;if(!o||db(o)){Re=0,mn=null;var g=f.sibling;if(g!==null)ye=g;else{var x=f.return;x!==null?(ye=x,al(x)):ye=null}break n}}Re=0,mn=null,Vr(e,n,i,5);break;case 6:Re=0,mn=null,Vr(e,n,i,6);break;case 8:Tc(),Be=6;break e;default:throw Error(c(462))}}mp();break}catch(H){xd(e,H)}while(!0);return $n=Wt=null,M.H=r,M.A=a,Ae=t,ye!==null?0:(Me=null,ve=0,_i(),Be)}function mp(){for(;ye!==null&&!qn();)Cd(ye)}function Cd(e){var n=rd(e.alternate,e,ut);e.memoizedProps=e.pendingProps,n===null?al(e):ye=n}function Md(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Jf(t,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=Jf(t,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:qu(n);default:id(t,n),n=ye=Ms(n,ut),n=rd(t,n,ut)}e.memoizedProps=e.pendingProps,n===null?al(e):ye=n}function Vr(e,n,t,r){$n=Wt=null,qu(n),Ur=null,Ca=0;var a=n.return;try{if(lp(e,a,n,t,ve)){Be=1,Qi(e,Tn(t,e.current)),ye=null;return}}catch(i){if(a!==null)throw ye=a,i;Be=1,Qi(e,Tn(t,e.current)),ye=null;return}n.flags&32768?(Ee||r===1?e=!0:zr||(ve&536870912)!==0?e=!1:(Tt=e=!0,(r===2||r===9||r===3||r===6)&&(r=Nn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Hd(n,e)):al(n)}function al(e){var n=e;do{if((n.flags&32768)!==0){Hd(n,Tt);return}e=n.return;var t=cp(n.alternate,n,ut);if(t!==null){ye=t;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);Be===0&&(Be=5)}function Hd(e,n){do{var t=op(e.alternate,e);if(t!==null){t.flags&=32767,ye=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=t}while(e!==null);Be=6,ye=null}function Ld(e,n,t,r,a,i,o,f,g){e.cancelPendingCommit=null;do il();while(Qe!==0);if((Ae&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(i=n.lanes|n.childLanes,i|=yu,Q0(e,t,i,o,f,g),e===Me&&(ye=Me=null,ve=0),qr=n,xt=e,Yr=t,Ec=i,Ac=a,Rd=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ep(si,function(){return kd(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=M.T,M.T=null,a=V.p,V.p=2,o=Ae,Ae|=4;try{sp(e,n,t)}finally{Ae=o,V.p=a,M.T=r}}Qe=1,wd(),Ud(),Bd()}}function wd(){if(Qe===1){Qe=0;var e=xt,n=qr,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=M.T,M.T=null;var r=V.p;V.p=2;var a=Ae;Ae|=4;try{yd(n,e);var i=kc,o=Es(e.containerInfo),f=i.focusedElem,g=i.selectionRange;if(o!==f&&f&&f.ownerDocument&&Ss(f.ownerDocument.documentElement,f)){if(g!==null&&fu(f)){var x=g.start,H=g.end;if(H===void 0&&(H=x),"selectionStart"in f)f.selectionStart=x,f.selectionEnd=Math.min(H,f.value.length);else{var B=f.ownerDocument||document,N=B&&B.defaultView||window;if(N.getSelection){var D=N.getSelection(),le=f.textContent.length,te=Math.min(g.start,le),Oe=g.end===void 0?te:Math.min(g.end,le);!D.extend&&te>Oe&&(o=Oe,Oe=te,te=o);var T=gs(f,te),R=gs(f,Oe);if(T&&R&&(D.rangeCount!==1||D.anchorNode!==T.node||D.anchorOffset!==T.offset||D.focusNode!==R.node||D.focusOffset!==R.offset)){var _=B.createRange();_.setStart(T.node,T.offset),D.removeAllRanges(),te>Oe?(D.addRange(_),D.extend(R.node,R.offset)):(_.setEnd(R.node,R.offset),D.addRange(_))}}}}for(B=[],D=f;D=D.parentNode;)D.nodeType===1&&B.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<B.length;f++){var U=B[f];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}ml=!!jc,kc=jc=null}finally{Ae=a,V.p=r,M.T=t}}e.current=n,Qe=2}}function Ud(){if(Qe===2){Qe=0;var e=xt,n=qr,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=M.T,M.T=null;var r=V.p;V.p=2;var a=Ae;Ae|=4;try{dd(e,n.alternate,n)}finally{Ae=a,V.p=r,M.T=t}}Qe=3}}function Bd(){if(Qe===4||Qe===3){Qe=0,ql();var e=xt,n=qr,t=Yr,r=Rd;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Qe=5:(Qe=0,qr=xt=null,jd(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(Ot=null),Vl(t),n=n.stateNode,fn&&typeof fn.onCommitFiberRoot=="function")try{fn.onCommitFiberRoot(na,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=M.T,a=V.p,V.p=2,M.T=null;try{for(var i=e.onRecoverableError,o=0;o<r.length;o++){var f=r[o];i(f.value,{componentStack:f.stack})}}finally{M.T=n,V.p=a}}(Yr&3)!==0&&il(),Kn(e),a=e.pendingLanes,(t&4194090)!==0&&(a&42)!==0?e===Rc?za++:(za=0,Rc=e):za=0,Ga(0)}}function jd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ga(n)))}function il(e){return wd(),Ud(),Bd(),kd()}function kd(){if(Qe!==5)return!1;var e=xt,n=Ec;Ec=0;var t=Vl(Yr),r=M.T,a=V.p;try{V.p=32>t?32:t,M.T=null,t=Ac,Ac=null;var i=xt,o=Yr;if(Qe=0,qr=xt=null,Yr=0,(Ae&6)!==0)throw Error(c(331));var f=Ae;if(Ae|=4,Ed(i.current),vd(i,i.current,o,t),Ae=f,Ga(0,!1),fn&&typeof fn.onPostCommitFiberRoot=="function")try{fn.onPostCommitFiberRoot(na,i)}catch{}return!0}finally{V.p=a,M.T=r,jd(e,n)}}function zd(e,n,t){n=Tn(t,n),n=nc(e.stateNode,n,2),e=mt(e,n,2),e!==null&&(ra(e,2),Kn(e))}function De(e,n,t){if(e.tag===3)zd(e,e,t);else for(;n!==null;){if(n.tag===3){zd(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ot===null||!Ot.has(r))){e=Tn(t,e),t=If(2),r=mt(n,t,2),r!==null&&(Vf(t,r,n,e),ra(r,2),Kn(r));break}}n=n.return}}function xc(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new bp;var a=new Set;r.set(n,a)}else a=r.get(n),a===void 0&&(a=new Set,r.set(n,a));a.has(t)||(mc=!0,a.add(t),e=vp.bind(null,e,n,t),n.then(e,e))}function vp(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Me===e&&(ve&t)===t&&(Be===4||Be===3&&(ve&62914560)===ve&&300>wn()-Sc?(Ae&2)===0&&Ir(e,0):vc|=t,Gr===ve&&(Gr=0)),Kn(e)}function Gd(e,n){n===0&&(n=Uo()),e=_r(e,n),e!==null&&(ra(e,n),Kn(e))}function gp(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Gd(e,t)}function Sp(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(c(314))}r!==null&&r.delete(n),Gd(e,t)}function Ep(e,n){return He(e,n)}var ll=null,Xr=null,Nc=!1,ul=!1,Dc=!1,er=0;function Kn(e){e!==Xr&&e.next===null&&(Xr===null?ll=Xr=e:Xr=Xr.next=e),ul=!0,Nc||(Nc=!0,Rp())}function Ga(e,n){if(!Dc&&ul){Dc=!0;do for(var t=!1,r=ll;r!==null;){if(e!==0){var a=r.pendingLanes;if(a===0)var i=0;else{var o=r.suspendedLanes,f=r.pingedLanes;i=(1<<31-dn(42|e)+1)-1,i&=a&~(o&~f),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(t=!0,Vd(r,i))}else i=ve,i=bi(r,r===Me?i:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(i&3)===0||ta(r,i)||(t=!0,Vd(r,i));r=r.next}while(t);Dc=!1}}function Ap(){qd()}function qd(){ul=Nc=!1;var e=0;er!==0&&(Mp()&&(e=er),er=0);for(var n=wn(),t=null,r=ll;r!==null;){var a=r.next,i=Yd(r,n);i===0?(r.next=null,t===null?ll=a:t.next=a,a===null&&(Xr=t)):(t=r,(e!==0||(i&3)!==0)&&(ul=!0)),r=a}Ga(e)}function Yd(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-dn(i),f=1<<o,g=a[o];g===-1?((f&t)===0||(f&r)!==0)&&(a[o]=P0(f,n)):g<=n&&(e.expiredLanes|=f),i&=~f}if(n=Me,t=ve,t=bi(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,t===0||e===n&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&sn(r),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||ta(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(r!==null&&sn(r),Vl(t)){case 2:case 8:t=Ho;break;case 32:t=si;break;case 268435456:t=Lo;break;default:t=si}return r=Id.bind(null,e),t=He(t,r),e.callbackPriority=n,e.callbackNode=t,n}return r!==null&&r!==null&&sn(r),e.callbackPriority=2,e.callbackNode=null,2}function Id(e,n){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(il()&&e.callbackNode!==t)return null;var r=ve;return r=bi(e,e===Me?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(_d(e,r,n),Yd(e,wn()),e.callbackNode!=null&&e.callbackNode===t?Id.bind(null,e):null)}function Vd(e,n){if(il())return null;_d(e,n,!0)}function Rp(){Lp(function(){(Ae&6)!==0?He(Bt,Ap):qd()})}function Cc(){return er===0&&(er=wo()),er}function Xd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function Kd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function Tp(e,n,t,r,a){if(n==="submit"&&t&&t.stateNode===a){var i=Xd((a[rn]||null).action),o=r.submitter;o&&(n=(n=o[rn]||null)?Xd(n.formAction):o.getAttribute("formAction"),n!==null&&(i=n,o=null));var f=new Ai("action","action",null,r,a);e.push({event:f,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(er!==0){var g=o?Kd(a,o):new FormData(a);Zu(t,{pending:!0,data:g,method:a.method,action:i},null,g)}}else typeof i=="function"&&(f.preventDefault(),g=o?Kd(a,o):new FormData(a),Zu(t,{pending:!0,data:g,method:a.method,action:i},i,g))},currentTarget:a}]})}}for(var Mc=0;Mc<pu.length;Mc++){var Hc=pu[Mc],_p=Hc.toLowerCase(),Op=Hc[0].toUpperCase()+Hc.slice(1);Un(_p,"on"+Op)}Un(Ts,"onAnimationEnd"),Un(_s,"onAnimationIteration"),Un(Os,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(Ih,"onTransitionRun"),Un(Vh,"onTransitionStart"),Un(Xh,"onTransitionCancel"),Un(xs,"onTransitionEnd"),pr("onMouseEnter",["mouseout","mouseover"]),pr("onMouseLeave",["mouseout","mouseover"]),pr("onPointerEnter",["pointerout","pointerover"]),pr("onPointerLeave",["pointerout","pointerover"]),kt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kt("onBeforeInput",["compositionend","keypress","textInput","paste"]),kt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qa));function Wd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],a=r.event;r=r.listeners;e:{var i=void 0;if(n)for(var o=r.length-1;0<=o;o--){var f=r[o],g=f.instance,x=f.currentTarget;if(f=f.listener,g!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=x;try{i(a)}catch(H){Pi(H)}a.currentTarget=null,i=g}else for(o=0;o<r.length;o++){if(f=r[o],g=f.instance,x=f.currentTarget,f=f.listener,g!==i&&a.isPropagationStopped())break e;i=f,a.currentTarget=x;try{i(a)}catch(H){Pi(H)}a.currentTarget=null,i=g}}}}function me(e,n){var t=n[Xl];t===void 0&&(t=n[Xl]=new Set);var r=e+"__bubble";t.has(r)||(Pd(n,e,2,!1),t.add(r))}function Lc(e,n,t){var r=0;n&&(r|=4),Pd(t,e,r,n)}var cl="_reactListening"+Math.random().toString(36).slice(2);function wc(e){if(!e[cl]){e[cl]=!0,Go.forEach(function(t){t!=="selectionchange"&&(xp.has(t)||Lc(t,!1,e),Lc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[cl]||(n[cl]=!0,Lc("selectionchange",!1,n))}}function Pd(e,n,t,r){switch(vb(n)){case 2:var a=ey;break;case 8:a=ny;break;default:a=Pc}t=a.bind(null,n,t,e),a=void 0,!tu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(n,t,{capture:!0,passive:a}):e.addEventListener(n,t,!0):a!==void 0?e.addEventListener(n,t,{passive:a}):e.addEventListener(n,t,!1)}function Uc(e,n,t,r,a){var i=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var f=r.stateNode.containerInfo;if(f===a)break;if(o===4)for(o=r.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===a)return;o=o.return}for(;f!==null;){if(o=dr(f),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){r=i=o;continue e}f=f.parentNode}}r=r.return}es(function(){var x=i,H=eu(t),B=[];e:{var N=Ns.get(e);if(N!==void 0){var D=Ai,le=e;switch(e){case"keypress":if(Si(t)===0)break e;case"keydown":case"keyup":D=Eh;break;case"focusin":le="focus",D=lu;break;case"focusout":le="blur",D=lu;break;case"beforeblur":case"afterblur":D=lu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=rs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=oh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=Th;break;case Ts:case _s:case Os:D=dh;break;case xs:D=Oh;break;case"scroll":case"scrollend":D=uh;break;case"wheel":D=Nh;break;case"copy":case"cut":case"paste":D=hh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=is;break;case"toggle":case"beforetoggle":D=Ch}var te=(n&4)!==0,Oe=!te&&(e==="scroll"||e==="scrollend"),T=te?N!==null?N+"Capture":null:N;te=[];for(var R=x,_;R!==null;){var U=R;if(_=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||_===null||T===null||(U=la(R,T),U!=null&&te.push(Ya(R,U,_))),Oe)break;R=R.return}0<te.length&&(N=new D(N,le,null,t,H),B.push({event:N,listeners:te}))}}if((n&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",N&&t!==$l&&(le=t.relatedTarget||t.fromElement)&&(dr(le)||le[fr]))break e;if((D||N)&&(N=H.window===H?H:(N=H.ownerDocument)?N.defaultView||N.parentWindow:window,D?(le=t.relatedTarget||t.toElement,D=x,le=le?dr(le):null,le!==null&&(Oe=p(le),te=le.tag,le!==Oe||te!==5&&te!==27&&te!==6)&&(le=null)):(D=null,le=x),D!==le)){if(te=rs,U="onMouseLeave",T="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(te=is,U="onPointerLeave",T="onPointerEnter",R="pointer"),Oe=D==null?N:ia(D),_=le==null?N:ia(le),N=new te(U,R+"leave",D,t,H),N.target=Oe,N.relatedTarget=_,U=null,dr(H)===x&&(te=new te(T,R+"enter",le,t,H),te.target=_,te.relatedTarget=Oe,U=te),Oe=U,D&&le)n:{for(te=D,T=le,R=0,_=te;_;_=Kr(_))R++;for(_=0,U=T;U;U=Kr(U))_++;for(;0<R-_;)te=Kr(te),R--;for(;0<_-R;)T=Kr(T),_--;for(;R--;){if(te===T||T!==null&&te===T.alternate)break n;te=Kr(te),T=Kr(T)}te=null}else te=null;D!==null&&Qd(B,N,D,te,!1),le!==null&&Oe!==null&&Qd(B,Oe,le,te,!0)}}e:{if(N=x?ia(x):window,D=N.nodeName&&N.nodeName.toLowerCase(),D==="select"||D==="input"&&N.type==="file")var Z=bs;else if(fs(N))if(hs)Z=Gh;else{Z=kh;var de=jh}else D=N.nodeName,!D||D.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?x&&Fl(x.elementType)&&(Z=bs):Z=zh;if(Z&&(Z=Z(e,x))){ds(B,Z,t,H);break e}de&&de(e,N,x),e==="focusout"&&x&&N.type==="number"&&x.memoizedProps.value!=null&&Jl(N,"number",N.value)}switch(de=x?ia(x):window,e){case"focusin":(fs(de)||de.contentEditable==="true")&&(Ar=de,du=x,ha=null);break;case"focusout":ha=du=Ar=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,As(B,t,H);break;case"selectionchange":if(Yh)break;case"keydown":case"keyup":As(B,t,H)}var ne;if(cu)e:{switch(e){case"compositionstart":var ie="onCompositionStart";break e;case"compositionend":ie="onCompositionEnd";break e;case"compositionupdate":ie="onCompositionUpdate";break e}ie=void 0}else Er?os(e,t)&&(ie="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ie="onCompositionStart");ie&&(ls&&t.locale!=="ko"&&(Er||ie!=="onCompositionStart"?ie==="onCompositionEnd"&&Er&&(ne=ns()):(bt=H,ru="value"in bt?bt.value:bt.textContent,Er=!0)),de=ol(x,ie),0<de.length&&(ie=new as(ie,e,null,t,H),B.push({event:ie,listeners:de}),ne?ie.data=ne:(ne=ss(t),ne!==null&&(ie.data=ne)))),(ne=Hh?Lh(e,t):wh(e,t))&&(ie=ol(x,"onBeforeInput"),0<ie.length&&(de=new as("onBeforeInput","beforeinput",null,t,H),B.push({event:de,listeners:ie}),de.data=ne)),Tp(B,e,x,t,H)}Wd(B,n)})}function Ya(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ol(e,n){for(var t=n+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=la(e,t),a!=null&&r.unshift(Ya(e,a,i)),a=la(e,n),a!=null&&r.push(Ya(e,a,i))),e.tag===3)return r;e=e.return}return[]}function Kr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Qd(e,n,t,r,a){for(var i=n._reactName,o=[];t!==null&&t!==r;){var f=t,g=f.alternate,x=f.stateNode;if(f=f.tag,g!==null&&g===r)break;f!==5&&f!==26&&f!==27||x===null||(g=x,a?(x=la(t,i),x!=null&&o.unshift(Ya(t,x,g))):a||(x=la(t,i),x!=null&&o.push(Ya(t,x,g)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var Np=/\r\n?/g,Dp=/\u0000|\uFFFD/g;function Zd(e){return(typeof e=="string"?e:""+e).replace(Np,`
`).replace(Dp,"")}function Jd(e,n){return n=Zd(n),Zd(e)===n}function sl(){}function _e(e,n,t,r,a,i){switch(t){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||vr(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&vr(e,""+r);break;case"className":pi(e,"class",r);break;case"tabIndex":pi(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(e,t,r);break;case"style":Fo(e,r,i);break;case"data":if(n!=="object"){pi(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=vi(""+r),e.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(t==="formAction"?(n!=="input"&&_e(e,n,"name",a.name,a,null),_e(e,n,"formEncType",a.formEncType,a,null),_e(e,n,"formMethod",a.formMethod,a,null),_e(e,n,"formTarget",a.formTarget,a,null)):(_e(e,n,"encType",a.encType,a,null),_e(e,n,"method",a.method,a,null),_e(e,n,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(t);break}r=vi(""+r),e.setAttribute(t,r);break;case"onClick":r!=null&&(e.onclick=sl);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}t=vi(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""+r):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":r===!0?e.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(t,r):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(t,r):e.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(t):e.setAttribute(t,r);break;case"popover":me("beforetoggle",e),me("toggle",e),hi(e,"popover",r);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":hi(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=ih.get(t)||t,hi(e,t,r))}}function Bc(e,n,t,r,a,i){switch(t){case"style":Fo(e,r,i);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(c(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof r=="string"?vr(e,r):(typeof r=="number"||typeof r=="bigint")&&vr(e,""+r);break;case"onScroll":r!=null&&me("scroll",e);break;case"onScrollEnd":r!=null&&me("scrollend",e);break;case"onClick":r!=null&&(e.onclick=sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qo.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),n=t.slice(2,a?t.length-7:void 0),i=e[rn]||null,i=i!=null?i[t]:null,typeof i=="function"&&e.removeEventListener(n,i,a),typeof r=="function")){typeof i!="function"&&i!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,r,a);break e}t in e?e[t]=r:r===!0?e.setAttribute(t,""):hi(e,t,r)}}}function Ze(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var r=!1,a=!1,i;for(i in t)if(t.hasOwnProperty(i)){var o=t[i];if(o!=null)switch(i){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:_e(e,n,i,o,t,null)}}a&&_e(e,n,"srcSet",t.srcSet,t,null),r&&_e(e,n,"src",t.src,t,null);return;case"input":me("invalid",e);var f=i=o=a=null,g=null,x=null;for(r in t)if(t.hasOwnProperty(r)){var H=t[r];if(H!=null)switch(r){case"name":a=H;break;case"type":o=H;break;case"checked":g=H;break;case"defaultChecked":x=H;break;case"value":i=H;break;case"defaultValue":f=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(c(137,n));break;default:_e(e,n,r,H,t,null)}}Po(e,i,f,g,x,o,a,!1),yi(e);return;case"select":me("invalid",e),r=o=i=null;for(a in t)if(t.hasOwnProperty(a)&&(f=t[a],f!=null))switch(a){case"value":i=f;break;case"defaultValue":o=f;break;case"multiple":r=f;default:_e(e,n,a,f,t,null)}n=i,t=o,e.multiple=!!r,n!=null?mr(e,!!r,n,!1):t!=null&&mr(e,!!r,t,!0);return;case"textarea":me("invalid",e),i=a=r=null;for(o in t)if(t.hasOwnProperty(o)&&(f=t[o],f!=null))switch(o){case"value":r=f;break;case"defaultValue":a=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:_e(e,n,o,f,t,null)}Zo(e,r,a,i),yi(e);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(r=t[g],r!=null))switch(g){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:_e(e,n,g,r,t,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(r=0;r<qa.length;r++)me(qa[r],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in t)if(t.hasOwnProperty(x)&&(r=t[x],r!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:_e(e,n,x,r,t,null)}return;default:if(Fl(n)){for(H in t)t.hasOwnProperty(H)&&(r=t[H],r!==void 0&&Bc(e,n,H,r,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(r=t[f],r!=null&&_e(e,n,f,r,t,null))}function Cp(e,n,t,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,o=null,f=null,g=null,x=null,H=null;for(D in t){var B=t[D];if(t.hasOwnProperty(D)&&B!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":g=B;default:r.hasOwnProperty(D)||_e(e,n,D,null,r,B)}}for(var N in r){var D=r[N];if(B=t[N],r.hasOwnProperty(N)&&(D!=null||B!=null))switch(N){case"type":i=D;break;case"name":a=D;break;case"checked":x=D;break;case"defaultChecked":H=D;break;case"value":o=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,n));break;default:D!==B&&_e(e,n,N,D,r,B)}}Zl(e,o,f,g,x,H,i,a);return;case"select":D=o=f=N=null;for(i in t)if(g=t[i],t.hasOwnProperty(i)&&g!=null)switch(i){case"value":break;case"multiple":D=g;default:r.hasOwnProperty(i)||_e(e,n,i,null,r,g)}for(a in r)if(i=r[a],g=t[a],r.hasOwnProperty(a)&&(i!=null||g!=null))switch(a){case"value":N=i;break;case"defaultValue":f=i;break;case"multiple":o=i;default:i!==g&&_e(e,n,a,i,r,g)}n=f,t=o,r=D,N!=null?mr(e,!!t,N,!1):!!r!=!!t&&(n!=null?mr(e,!!t,n,!0):mr(e,!!t,t?[]:"",!1));return;case"textarea":D=N=null;for(f in t)if(a=t[f],t.hasOwnProperty(f)&&a!=null&&!r.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:_e(e,n,f,null,r,a)}for(o in r)if(a=r[o],i=t[o],r.hasOwnProperty(o)&&(a!=null||i!=null))switch(o){case"value":N=a;break;case"defaultValue":D=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(c(91));break;default:a!==i&&_e(e,n,o,a,r,i)}Qo(e,N,D);return;case"option":for(var le in t)if(N=t[le],t.hasOwnProperty(le)&&N!=null&&!r.hasOwnProperty(le))switch(le){case"selected":e.selected=!1;break;default:_e(e,n,le,null,r,N)}for(g in r)if(N=r[g],D=t[g],r.hasOwnProperty(g)&&N!==D&&(N!=null||D!=null))switch(g){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:_e(e,n,g,N,r,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in t)N=t[te],t.hasOwnProperty(te)&&N!=null&&!r.hasOwnProperty(te)&&_e(e,n,te,null,r,N);for(x in r)if(N=r[x],D=t[x],r.hasOwnProperty(x)&&N!==D&&(N!=null||D!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(c(137,n));break;default:_e(e,n,x,N,r,D)}return;default:if(Fl(n)){for(var Oe in t)N=t[Oe],t.hasOwnProperty(Oe)&&N!==void 0&&!r.hasOwnProperty(Oe)&&Bc(e,n,Oe,void 0,r,N);for(H in r)N=r[H],D=t[H],!r.hasOwnProperty(H)||N===D||N===void 0&&D===void 0||Bc(e,n,H,N,r,D);return}}for(var T in t)N=t[T],t.hasOwnProperty(T)&&N!=null&&!r.hasOwnProperty(T)&&_e(e,n,T,null,r,N);for(B in r)N=r[B],D=t[B],!r.hasOwnProperty(B)||N===D||N==null&&D==null||_e(e,n,B,N,r,D)}var jc=null,kc=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function Fd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $d(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gc=null;function Mp(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var eb=typeof setTimeout=="function"?setTimeout:void 0,Hp=typeof clearTimeout=="function"?clearTimeout:void 0,nb=typeof Promise=="function"?Promise:void 0,Lp=typeof queueMicrotask=="function"?queueMicrotask:typeof nb<"u"?function(e){return nb.resolve(null).then(e).catch(wp)}:eb;function wp(e){setTimeout(function(){throw e})}function Dt(e){return e==="head"}function tb(e,n){var t=n,r=0,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(0<r&&8>r){t=r;var o=e.ownerDocument;if(t&1&&Ia(o.documentElement),t&2&&Ia(o.body),t&4)for(t=o.head,Ia(t),o=t.firstChild;o;){var f=o.nextSibling,g=o.nodeName;o[aa]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=f}}if(a===0){e.removeChild(i),Ja(n);return}a--}else t==="$"||t==="$?"||t==="$!"?a++:r=t.charCodeAt(0)-48;else r=0;t=i}while(t);Ja(n)}function qc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":qc(t),Kl(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Up(e,n,t,r){for(;e.nodeType===1;){var a=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[aa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=jn(e.nextSibling),e===null)break}return null}function Bp(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=jn(e.nextSibling),e===null))return null;return e}function Yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function jp(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var r=function(){n(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function jn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Ic=null;function rb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function ab(e,n,t){switch(n=fl(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Ia(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Kl(e)}var Cn=new Map,ib=new Set;function dl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ct=V.d;V.d={f:kp,r:zp,D:Gp,C:qp,L:Yp,m:Ip,X:Xp,S:Vp,M:Kp};function kp(){var e=ct.f(),n=rl();return e||n}function zp(e){var n=br(e);n!==null&&n.tag===5&&n.type==="form"?_f(n):ct.r(e)}var Wr=typeof document>"u"?null:document;function lb(e,n,t){var r=Wr;if(r&&typeof n=="string"&&n){var a=Rn(n);a='link[rel="'+e+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),ib.has(a)||(ib.add(a),e={rel:e,crossOrigin:t,href:n},r.querySelector(a)===null&&(n=r.createElement("link"),Ze(n,"link",e),Ve(n),r.head.appendChild(n)))}}function Gp(e){ct.D(e),lb("dns-prefetch",e,null)}function qp(e,n){ct.C(e,n),lb("preconnect",e,n)}function Yp(e,n,t){ct.L(e,n,t);var r=Wr;if(r&&e&&n){var a='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+Rn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+Rn(t.imageSizes)+'"]')):a+='[href="'+Rn(e)+'"]';var i=a;switch(n){case"style":i=Pr(e);break;case"script":i=Qr(e)}Cn.has(i)||(e=E({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Cn.set(i,e),r.querySelector(a)!==null||n==="style"&&r.querySelector(Va(i))||n==="script"&&r.querySelector(Xa(i))||(n=r.createElement("link"),Ze(n,"link",e),Ve(n),r.head.appendChild(n)))}}function Ip(e,n){ct.m(e,n);var t=Wr;if(t&&e){var r=n&&typeof n.as=="string"?n.as:"script",a='link[rel="modulepreload"][as="'+Rn(r)+'"][href="'+Rn(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Qr(e)}if(!Cn.has(i)&&(e=E({rel:"modulepreload",href:e},n),Cn.set(i,e),t.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Xa(i)))return}r=t.createElement("link"),Ze(r,"link",e),Ve(r),t.head.appendChild(r)}}}function Vp(e,n,t){ct.S(e,n,t);var r=Wr;if(r&&e){var a=hr(r).hoistableStyles,i=Pr(e);n=n||"default";var o=a.get(i);if(!o){var f={loading:0,preload:null};if(o=r.querySelector(Va(i)))f.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Cn.get(i))&&Vc(e,t);var g=o=r.createElement("link");Ve(g),Ze(g,"link",e),g._p=new Promise(function(x,H){g.onload=x,g.onerror=H}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,bl(o,n,r)}o={type:"stylesheet",instance:o,count:1,state:f},a.set(i,o)}}}function Xp(e,n){ct.X(e,n);var t=Wr;if(t&&e){var r=hr(t).hoistableScripts,a=Qr(e),i=r.get(a);i||(i=t.querySelector(Xa(a)),i||(e=E({src:e,async:!0},n),(n=Cn.get(a))&&Xc(e,n),i=t.createElement("script"),Ve(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function Kp(e,n){ct.M(e,n);var t=Wr;if(t&&e){var r=hr(t).hoistableScripts,a=Qr(e),i=r.get(a);i||(i=t.querySelector(Xa(a)),i||(e=E({src:e,async:!0,type:"module"},n),(n=Cn.get(a))&&Xc(e,n),i=t.createElement("script"),Ve(i),Ze(i,"link",e),t.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}function ub(e,n,t,r){var a=(a=ae.current)?dl(a):null;if(!a)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Pr(t.href),t=hr(a).hoistableStyles,r=t.get(n),r||(r={type:"style",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Pr(t.href);var i=hr(a).hoistableStyles,o=i.get(e);if(o||(a=a.ownerDocument||a,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=a.querySelector(Va(e)))&&!i._p&&(o.instance=i,o.state.loading=5),Cn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Cn.set(e,t),i||Wp(a,e,t,o.state))),n&&r===null)throw Error(c(528,""));return o}if(n&&r!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qr(t),t=hr(a).hoistableScripts,r=t.get(n),r||(r={type:"script",instance:null,count:0,state:null},t.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Pr(e){return'href="'+Rn(e)+'"'}function Va(e){return'link[rel="stylesheet"]['+e+"]"}function cb(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function Wp(e,n,t,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Ze(n,"link",t),Ve(n),e.head.appendChild(n))}function Qr(e){return'[src="'+Rn(e)+'"]'}function Xa(e){return"script[async]"+e}function ob(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Rn(t.href)+'"]');if(r)return n.instance=r,Ve(r),r;var a=E({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ve(r),Ze(r,"style",a),bl(r,t.precedence,e),n.instance=r;case"stylesheet":a=Pr(t.href);var i=e.querySelector(Va(a));if(i)return n.state.loading|=4,n.instance=i,Ve(i),i;r=cb(t),(a=Cn.get(a))&&Vc(r,a),i=(e.ownerDocument||e).createElement("link"),Ve(i);var o=i;return o._p=new Promise(function(f,g){o.onload=f,o.onerror=g}),Ze(i,"link",r),n.state.loading|=4,bl(i,t.precedence,e),n.instance=i;case"script":return i=Qr(t.src),(a=e.querySelector(Xa(i)))?(n.instance=a,Ve(a),a):(r=t,(a=Cn.get(i))&&(r=E({},t),Xc(r,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ve(a),Ze(a,"link",r),e.head.appendChild(a),n.instance=a);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,bl(r,t.precedence,e));return n.instance}function bl(e,n,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var f=r[o];if(f.dataset.precedence===n)i=f;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Vc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Xc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var hl=null;function sb(e,n,t){if(hl===null){var r=new Map,a=hl=new Map;a.set(t,r)}else a=hl,r=a.get(t),r||(r=new Map,a.set(t,r));if(r.has(e))return r;for(r.set(e,null),t=t.getElementsByTagName(e),a=0;a<t.length;a++){var i=t[a];if(!(i[aa]||i[Fe]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(n)||"";o=e+o;var f=r.get(o);f?f.push(i):r.set(o,[i])}}return r}function fb(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Pp(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function db(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ka=null;function Qp(){}function Zp(e,n,t){if(Ka===null)throw Error(c(475));var r=Ka;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var a=Pr(t.href),i=e.querySelector(Va(a));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=pl.bind(r),e.then(r,r)),n.state.loading|=4,n.instance=i,Ve(i);return}i=e.ownerDocument||e,t=cb(t),(a=Cn.get(a))&&Vc(t,a),i=i.createElement("link"),Ve(i);var o=i;o._p=new Promise(function(f,g){o.onload=f,o.onerror=g}),Ze(i,"link",t),n.instance=i}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(r.count++,n=pl.bind(r),e.addEventListener("load",n),e.addEventListener("error",n))}}function Jp(){if(Ka===null)throw Error(c(475));var e=Ka;return e.stylesheets&&e.count===0&&Kc(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Kc(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function pl(){if(this.count--,this.count===0){if(this.stylesheets)Kc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yl=null;function Kc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yl=new Map,n.forEach(Fp,e),yl=null,pl.call(e))}function Fp(e,n){if(!(n.state.loading&4)){var t=yl.get(e);if(t)var r=t.get(null);else{t=new Map,yl.set(e,t);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),r=o)}r&&t.set(null,r)}a=n.instance,o=a.getAttribute("data-precedence"),i=t.get(o)||r,i===r&&t.set(null,a),t.set(o,a),this.count++,r=pl.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),n.state.loading|=4}}var Wa={$$typeof:re,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function $p(e,n,t,r,a,i,o,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yl(0),this.hiddenUpdates=Yl(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function bb(e,n,t,r,a,i,o,f,g,x,H,B){return e=new $p(e,n,t,o,f,g,x,B),n=1,i===!0&&(n|=24),i=hn(3,null,null,n),e.current=i,i.stateNode=e,n=xu(),n.refCount++,e.pooledCache=n,n.refCount++,i.memoizedState={element:r,isDehydrated:t,cache:n},Mu(i),e}function hb(e){return e?(e=Or,e):Or}function pb(e,n,t,r,a,i){a=hb(a),r.context===null?r.context=a:r.pendingContext=a,r=yt(n),r.payload={element:t},i=i===void 0?null:i,i!==null&&(r.callback=i),t=mt(e,r,n),t!==null&&(gn(t,e,n),Ra(t,e,n))}function yb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Wc(e,n){yb(e,n),(e=e.alternate)&&yb(e,n)}function mb(e){if(e.tag===13){var n=_r(e,67108864);n!==null&&gn(n,e,67108864),Wc(e,67108864)}}var ml=!0;function ey(e,n,t,r){var a=M.T;M.T=null;var i=V.p;try{V.p=2,Pc(e,n,t,r)}finally{V.p=i,M.T=a}}function ny(e,n,t,r){var a=M.T;M.T=null;var i=V.p;try{V.p=8,Pc(e,n,t,r)}finally{V.p=i,M.T=a}}function Pc(e,n,t,r){if(ml){var a=Qc(r);if(a===null)Uc(e,n,r,vl,t),gb(e,r);else if(ry(a,e,n,t,r))r.stopPropagation();else if(gb(e,r),n&4&&-1<ty.indexOf(e)){for(;a!==null;){var i=br(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=jt(i.pendingLanes);if(o!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;o;){var g=1<<31-dn(o);f.entanglements[1]|=g,o&=~g}Kn(i),(Ae&6)===0&&(nl=wn()+500,Ga(0))}}break;case 13:f=_r(i,2),f!==null&&gn(f,i,2),rl(),Wc(i,2)}if(i=Qc(r),i===null&&Uc(e,n,r,vl,t),i===a)break;a=i}a!==null&&r.stopPropagation()}else Uc(e,n,r,null,t)}}function Qc(e){return e=eu(e),Zc(e)}var vl=null;function Zc(e){if(vl=null,e=dr(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vl=e,null}function vb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sr()){case Bt:return 2;case Ho:return 8;case si:case Y0:return 32;case Lo:return 268435456;default:return 32}default:return 32}}var Jc=!1,Ct=null,Mt=null,Ht=null,Pa=new Map,Qa=new Map,Lt=[],ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function gb(e,n){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Mt=null;break;case"mouseover":case"mouseout":Ht=null;break;case"pointerover":case"pointerout":Pa.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(n.pointerId)}}function Za(e,n,t,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},n!==null&&(n=br(n),n!==null&&mb(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,a!==null&&n.indexOf(a)===-1&&n.push(a),e)}function ry(e,n,t,r,a){switch(n){case"focusin":return Ct=Za(Ct,e,n,t,r,a),!0;case"dragenter":return Mt=Za(Mt,e,n,t,r,a),!0;case"mouseover":return Ht=Za(Ht,e,n,t,r,a),!0;case"pointerover":var i=a.pointerId;return Pa.set(i,Za(Pa.get(i)||null,e,n,t,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Qa.set(i,Za(Qa.get(i)||null,e,n,t,r,a)),!0}return!1}function Sb(e){var n=dr(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Z0(e.priority,function(){if(t.tag===13){var r=vn();r=Il(r);var a=_r(t,r);a!==null&&gn(a,t,r),Wc(t,r)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Qc(e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);$l=r,t.target.dispatchEvent(r),$l=null}else return n=br(t),n!==null&&mb(n),e.blockedOn=t,!1;n.shift()}return!0}function Eb(e,n,t){gl(e)&&t.delete(n)}function ay(){Jc=!1,Ct!==null&&gl(Ct)&&(Ct=null),Mt!==null&&gl(Mt)&&(Mt=null),Ht!==null&&gl(Ht)&&(Ht=null),Pa.forEach(Eb),Qa.forEach(Eb)}function Sl(e,n){e.blockedOn===n&&(e.blockedOn=null,Jc||(Jc=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,ay)))}var El=null;function Ab(e){El!==e&&(El=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){El===e&&(El=null);for(var n=0;n<e.length;n+=3){var t=e[n],r=e[n+1],a=e[n+2];if(typeof r!="function"){if(Zc(r||t)===null)continue;break}var i=br(t);i!==null&&(e.splice(n,3),n-=3,Zu(i,{pending:!0,data:a,method:t.method,action:r},r,a))}}))}function Ja(e){function n(g){return Sl(g,e)}Ct!==null&&Sl(Ct,e),Mt!==null&&Sl(Mt,e),Ht!==null&&Sl(Ht,e),Pa.forEach(n),Qa.forEach(n);for(var t=0;t<Lt.length;t++){var r=Lt[t];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Lt.length&&(t=Lt[0],t.blockedOn===null);)Sb(t),t.blockedOn===null&&Lt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var a=t[r],i=t[r+1],o=a[rn]||null;if(typeof i=="function")o||Ab(t);else if(o){var f=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[rn]||null)f=o.formAction;else if(Zc(a)!==null)continue}else f=o.action;typeof f=="function"?t[r+1]=f:(t.splice(r,3),r-=3),Ab(t)}}}function Fc(e){this._internalRoot=e}Al.prototype.render=Fc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,r=vn();pb(t,r,e,n,null,null)},Al.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;pb(e.current,2,null,e,null,null),rl(),n[fr]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var n=ko();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Lt.length&&n!==0&&n<Lt[t].priority;t++);Lt.splice(t,0,e),t===0&&Sb(e)}};var Rb=u.version;if(Rb!=="19.1.0")throw Error(c(527,Rb,"19.1.0"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=b(n),e=e!==null?d(e):null,e=e===null?null:e.stateNode,e};var iy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{na=Rl.inject(iy),fn=Rl}catch{}}return $a.createRoot=function(e,n){if(!h(e))throw Error(c(299));var t=!1,r="",a=zf,i=Gf,o=qf,f=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(f=n.unstable_transitionCallbacks)),n=bb(e,1,!1,null,null,t,r,a,i,o,f,null),e[fr]=n.current,wc(e),new Fc(n)},$a.hydrateRoot=function(e,n,t){if(!h(e))throw Error(c(299));var r=!1,a="",i=zf,o=Gf,f=qf,g=null,x=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks),t.formState!==void 0&&(x=t.formState)),n=bb(e,1,!0,n,t??null,r,a,i,o,f,g,x),n.context=hb(null),t=n.current,r=vn(),r=Il(r),a=yt(r),a.callback=null,mt(t,a,r),t=r,n.current.lanes=t,ra(n,t),Kn(n),e[fr]=n.current,wc(e),new Al(n)},$a.version="19.1.0",$a}var Lb;function yy(){if(Lb)return no.exports;Lb=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),no.exports=py(),no.exports}var my=yy();function vy(l,u){const h=Math.min(u?3.5:7,l*(u?.25:.5));return l-h}function gy(l,u,s,c,h){if(l<=0||u<=0)return{shots:1/0,totalDamage:0};let p=s,m=c,v=0,b=0;for(;p>0;){v++;for(let d=0;d<u;d++){let E=l;if(m>0){E=vy(E,h);const C=Math.min(E,m);m-=C,E-=C}if(p-=E,b+=l,p<=0)break}}return{shots:v,totalDamage:b}}function Sy(l,u,s,c,h){const p=[];for(let m=100;m<=200;m+=5){const v=l*(m/100),{shots:b,totalDamage:d}=gy(v,u,s,c,h);p.push({percent:m,shots:b,totalDamage:d})}return p}function Ey(){const[l,u]=ue.useState(75),[s,c]=ue.useState(1),[h,p]=ue.useState(300),[m,v]=ue.useState(0),[b,d]=ue.useState(!1),[E,C]=ue.useState([]),j=()=>{C(Sy(l,s,h,m,b))};return S.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[S.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Damage Breakpoints"}),S.jsxs("div",{className:"space-y-4",children:[S.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[S.jsxs("label",{className:"space-y-1",children:[S.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Damage per Bullet"}),S.jsx("input",{type:"number",value:l,onChange:z=>u(Number(z.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),S.jsxs("label",{className:"space-y-1",children:[S.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Bullets per Shot"}),S.jsx("input",{type:"number",value:s,onChange:z=>c(Number(z.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),S.jsxs("label",{className:"space-y-1",children:[S.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy HP"}),S.jsx("input",{type:"number",value:h,onChange:z=>p(Number(z.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),S.jsxs("label",{className:"space-y-1",children:[S.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy Armor"}),S.jsx("input",{type:"number",value:m,onChange:z=>v(Number(z.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),S.jsxs("label",{className:"flex items-center space-x-2 mt-6 text-gray-700 dark:text-gray-300",children:[S.jsx("input",{type:"checkbox",checked:b,onChange:z=>d(z.target.checked)}),S.jsx("span",{children:"Using armor penetration item"})]})]}),S.jsx("button",{onClick:j,className:"bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",children:"Calculate"}),E.length>0&&S.jsx("div",{className:"overflow-x-auto mt-4 max-h-96 overflow-y-auto",children:S.jsxs("table",{className:"min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Damage %"}),S.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Bullet"}),S.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Shot"}),S.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Shots"}),S.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Accumulated"})]})}),S.jsx("tbody",{children:E.map((z,X)=>{const Y=X>0?E[X-1].shots:z.shots,k=z.shots<Y,K=l*z.percent/100,I=K*s;return S.jsxs("tr",{className:k?"bg-yellow-100 dark:bg-yellow-900":"",children:[S.jsxs("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:[z.percent,"%"]}),S.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:K.toFixed(1)}),S.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:I.toFixed(1)}),S.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:z.shots}),S.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:z.totalDamage.toFixed(1)})]},z.percent)})})]})})]})]})}var io={exports:{}},lo={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wb;function Ay(){if(wb)return lo;wb=1;var l=ea();function u(b,d){return b===d&&(b!==0||1/b===1/d)||b!==b&&d!==d}var s=typeof Object.is=="function"?Object.is:u,c=l.useSyncExternalStore,h=l.useRef,p=l.useEffect,m=l.useMemo,v=l.useDebugValue;return lo.useSyncExternalStoreWithSelector=function(b,d,E,C,j){var z=h(null);if(z.current===null){var X={hasValue:!1,value:null};z.current=X}else X=z.current;z=m(function(){function k(y){if(!K){if(K=!0,I=y,y=C(y),j!==void 0&&X.hasValue){var O=X.value;if(j(O,y))return re=O}return re=y}if(O=re,s(I,y))return O;var w=C(y);return j!==void 0&&j(O,w)?(I=y,O):(I=y,re=w)}var K=!1,I,re,F=E===void 0?null:E;return[function(){return k(d())},F===null?void 0:function(){return k(F())}]},[d,E,C,j]);var Y=c(b,z[0],z[1]);return p(function(){X.hasValue=!0,X.value=Y},[Y]),v(Y),Y},lo}var Ub;function Ry(){return Ub||(Ub=1,io.exports=Ay()),io.exports}var Ty=Ry();function _y(l){l()}function Oy(){let l=null,u=null;return{clear(){l=null,u=null},notify(){_y(()=>{let s=l;for(;s;)s.callback(),s=s.next})},get(){const s=[];let c=l;for(;c;)s.push(c),c=c.next;return s},subscribe(s){let c=!0;const h=u={callback:s,next:null,prev:u};return h.prev?h.prev.next=h:l=h,function(){!c||l===null||(c=!1,h.next?h.next.prev=h.prev:u=h.prev,h.prev?h.prev.next=h.next:l=h.next)}}}}var Bb={notify(){},get:()=>[]};function xy(l,u){let s,c=Bb,h=0,p=!1;function m(Y){E();const k=c.subscribe(Y);let K=!1;return()=>{K||(K=!0,k(),C())}}function v(){c.notify()}function b(){X.onStateChange&&X.onStateChange()}function d(){return p}function E(){h++,s||(s=l.subscribe(b),c=Oy())}function C(){h--,s&&h===0&&(s(),s=void 0,c.clear(),c=Bb)}function j(){p||(p=!0,E())}function z(){p&&(p=!1,C())}const X={addNestedSub:m,notifyNestedSubs:v,handleChangeWrapper:b,isSubscribed:d,trySubscribe:j,tryUnsubscribe:z,getListeners:()=>c};return X}var Ny=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Dy=Ny(),Cy=()=>typeof navigator<"u"&&navigator.product==="ReactNative",My=Cy(),Hy=()=>Dy||My?ue.useLayoutEffect:ue.useEffect,Ly=Hy(),uo=Symbol.for("react-redux-context"),co=typeof globalThis<"u"?globalThis:{};function wy(){if(!ue.createContext)return{};const l=co[uo]??(co[uo]=new Map);let u=l.get(ue.createContext);return u||(u=ue.createContext(null),l.set(ue.createContext,u)),u}var Ut=wy();function Uy(l){const{children:u,context:s,serverState:c,store:h}=l,p=ue.useMemo(()=>{const b=xy(h);return{store:h,subscription:b,getServerState:c?()=>c:void 0}},[h,c]),m=ue.useMemo(()=>h.getState(),[h]);Ly(()=>{const{subscription:b}=p;return b.onStateChange=b.notifyNestedSubs,b.trySubscribe(),m!==h.getState()&&b.notifyNestedSubs(),()=>{b.tryUnsubscribe(),b.onStateChange=void 0}},[p,m]);const v=s||Ut;return ue.createElement(v.Provider,{value:p},u)}var By=Uy;function xo(l=Ut){return function(){return ue.useContext(l)}}var h0=xo();function p0(l=Ut){const u=l===Ut?h0:xo(l),s=()=>{const{store:c}=u();return c};return Object.assign(s,{withTypes:()=>s}),s}var jy=p0();function ky(l=Ut){const u=l===Ut?jy:p0(l),s=()=>u().dispatch;return Object.assign(s,{withTypes:()=>s}),s}var zy=ky(),Gy=(l,u)=>l===u;function qy(l=Ut){const u=l===Ut?h0:xo(l),s=(c,h={})=>{const{equalityFn:p=Gy}=typeof h=="function"?{equalityFn:h}:h,m=u(),{store:v,subscription:b,getServerState:d}=m;ue.useRef(!0);const E=ue.useCallback({[c.name](j){return c(j)}}[c.name],[c]),C=Ty.useSyncExternalStoreWithSelector(b.addNestedSub,v.getState,d||v.getState,E,p);return ue.useDebugValue(C),C};return Object.assign(s,{withTypes:()=>s}),s}var Yy=qy();const Wn=zy,on=Yy;function Je(l){return`Minified Redux error #${l}; visit https://redux.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}var Iy=typeof Symbol=="function"&&Symbol.observable||"@@observable",jb=Iy,oo=()=>Math.random().toString(36).substring(7).split("").join("."),Vy={INIT:`@@redux/INIT${oo()}`,REPLACE:`@@redux/REPLACE${oo()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${oo()}`},Cl=Vy;function No(l){if(typeof l!="object"||l===null)return!1;let u=l;for(;Object.getPrototypeOf(u)!==null;)u=Object.getPrototypeOf(u);return Object.getPrototypeOf(l)===u||Object.getPrototypeOf(l)===null}function y0(l,u,s){if(typeof l!="function")throw new Error(Je(2));if(typeof u=="function"&&typeof s=="function"||typeof s=="function"&&typeof arguments[3]=="function")throw new Error(Je(0));if(typeof u=="function"&&typeof s>"u"&&(s=u,u=void 0),typeof s<"u"){if(typeof s!="function")throw new Error(Je(1));return s(y0)(l,u)}let c=l,h=u,p=new Map,m=p,v=0,b=!1;function d(){m===p&&(m=new Map,p.forEach((k,K)=>{m.set(K,k)}))}function E(){if(b)throw new Error(Je(3));return h}function C(k){if(typeof k!="function")throw new Error(Je(4));if(b)throw new Error(Je(5));let K=!0;d();const I=v++;return m.set(I,k),function(){if(K){if(b)throw new Error(Je(6));K=!1,d(),m.delete(I),p=null}}}function j(k){if(!No(k))throw new Error(Je(7));if(typeof k.type>"u")throw new Error(Je(8));if(typeof k.type!="string")throw new Error(Je(17));if(b)throw new Error(Je(9));try{b=!0,h=c(h,k)}finally{b=!1}return(p=m).forEach(I=>{I()}),k}function z(k){if(typeof k!="function")throw new Error(Je(10));c=k,j({type:Cl.REPLACE})}function X(){const k=C;return{subscribe(K){if(typeof K!="object"||K===null)throw new Error(Je(11));function I(){const F=K;F.next&&F.next(E())}return I(),{unsubscribe:k(I)}},[jb](){return this}}}return j({type:Cl.INIT}),{dispatch:j,subscribe:C,getState:E,replaceReducer:z,[jb]:X}}function Xy(l){Object.keys(l).forEach(u=>{const s=l[u];if(typeof s(void 0,{type:Cl.INIT})>"u")throw new Error(Je(12));if(typeof s(void 0,{type:Cl.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Je(13))})}function Ky(l){const u=Object.keys(l),s={};for(let p=0;p<u.length;p++){const m=u[p];typeof l[m]=="function"&&(s[m]=l[m])}const c=Object.keys(s);let h;try{Xy(s)}catch(p){h=p}return function(m={},v){if(h)throw h;let b=!1;const d={};for(let E=0;E<c.length;E++){const C=c[E],j=s[C],z=m[C],X=j(z,v);if(typeof X>"u")throw v&&v.type,new Error(Je(14));d[C]=X,b=b||X!==z}return b=b||c.length!==Object.keys(m).length,b?d:m}}function Ml(...l){return l.length===0?u=>u:l.length===1?l[0]:l.reduce((u,s)=>(...c)=>u(s(...c)))}function Wy(...l){return u=>(s,c)=>{const h=u(s,c);let p=()=>{throw new Error(Je(15))};const m={getState:h.getState,dispatch:(b,...d)=>p(b,...d)},v=l.map(b=>b(m));return p=Ml(...v)(h.dispatch),{...h,dispatch:p}}}function Py(l){return No(l)&&"type"in l&&typeof l.type=="string"}var m0=Symbol.for("immer-nothing"),kb=Symbol.for("immer-draftable"),Sn=Symbol.for("immer-state");function zn(l,...u){throw new Error(`[Immer] minified error nr: ${l}. Full error at: https://bit.ly/3cXEKWf`)}var $r=Object.getPrototypeOf;function ir(l){return!!l&&!!l[Sn]}function st(l){var u;return l?v0(l)||Array.isArray(l)||!!l[kb]||!!((u=l.constructor)!=null&&u[kb])||Bl(l)||jl(l):!1}var Qy=Object.prototype.constructor.toString();function v0(l){if(!l||typeof l!="object")return!1;const u=$r(l);if(u===null)return!0;const s=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return s===Object?!0:typeof s=="function"&&Function.toString.call(s)===Qy}function Hl(l,u){Ul(l)===0?Reflect.ownKeys(l).forEach(s=>{u(s,l[s],l)}):l.forEach((s,c)=>u(c,s,l))}function Ul(l){const u=l[Sn];return u?u.type_:Array.isArray(l)?1:Bl(l)?2:jl(l)?3:0}function vo(l,u){return Ul(l)===2?l.has(u):Object.prototype.hasOwnProperty.call(l,u)}function g0(l,u,s){const c=Ul(l);c===2?l.set(u,s):c===3?l.add(s):l[u]=s}function Zy(l,u){return l===u?l!==0||1/l===1/u:l!==l&&u!==u}function Bl(l){return l instanceof Map}function jl(l){return l instanceof Set}function rr(l){return l.copy_||l.base_}function go(l,u){if(Bl(l))return new Map(l);if(jl(l))return new Set(l);if(Array.isArray(l))return Array.prototype.slice.call(l);const s=v0(l);if(u===!0||u==="class_only"&&!s){const c=Object.getOwnPropertyDescriptors(l);delete c[Sn];let h=Reflect.ownKeys(c);for(let p=0;p<h.length;p++){const m=h[p],v=c[m];v.writable===!1&&(v.writable=!0,v.configurable=!0),(v.get||v.set)&&(c[m]={configurable:!0,writable:!0,enumerable:v.enumerable,value:l[m]})}return Object.create($r(l),c)}else{const c=$r(l);if(c!==null&&s)return{...l};const h=Object.create(c);return Object.assign(h,l)}}function Do(l,u=!1){return kl(l)||ir(l)||!st(l)||(Ul(l)>1&&(l.set=l.add=l.clear=l.delete=Jy),Object.freeze(l),u&&Object.entries(l).forEach(([s,c])=>Do(c,!0))),l}function Jy(){zn(2)}function kl(l){return Object.isFrozen(l)}var Fy={};function lr(l){const u=Fy[l];return u||zn(0,l),u}var li;function S0(){return li}function $y(l,u){return{drafts_:[],parent_:l,immer_:u,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function zb(l,u){u&&(lr("Patches"),l.patches_=[],l.inversePatches_=[],l.patchListener_=u)}function So(l){Eo(l),l.drafts_.forEach(em),l.drafts_=null}function Eo(l){l===li&&(li=l.parent_)}function Gb(l){return li=$y(li,l)}function em(l){const u=l[Sn];u.type_===0||u.type_===1?u.revoke_():u.revoked_=!0}function qb(l,u){u.unfinalizedDrafts_=u.drafts_.length;const s=u.drafts_[0];return l!==void 0&&l!==s?(s[Sn].modified_&&(So(u),zn(4)),st(l)&&(l=Ll(u,l),u.parent_||wl(u,l)),u.patches_&&lr("Patches").generateReplacementPatches_(s[Sn].base_,l,u.patches_,u.inversePatches_)):l=Ll(u,s,[]),So(u),u.patches_&&u.patchListener_(u.patches_,u.inversePatches_),l!==m0?l:void 0}function Ll(l,u,s){if(kl(u))return u;const c=u[Sn];if(!c)return Hl(u,(h,p)=>Yb(l,c,u,h,p,s)),u;if(c.scope_!==l)return u;if(!c.modified_)return wl(l,c.base_,!0),c.base_;if(!c.finalized_){c.finalized_=!0,c.scope_.unfinalizedDrafts_--;const h=c.copy_;let p=h,m=!1;c.type_===3&&(p=new Set(h),h.clear(),m=!0),Hl(p,(v,b)=>Yb(l,c,h,v,b,s,m)),wl(l,h,!1),s&&l.patches_&&lr("Patches").generatePatches_(c,s,l.patches_,l.inversePatches_)}return c.copy_}function Yb(l,u,s,c,h,p,m){if(ir(h)){const v=p&&u&&u.type_!==3&&!vo(u.assigned_,c)?p.concat(c):void 0,b=Ll(l,h,v);if(g0(s,c,b),ir(b))l.canAutoFreeze_=!1;else return}else m&&s.add(h);if(st(h)&&!kl(h)){if(!l.immer_.autoFreeze_&&l.unfinalizedDrafts_<1)return;Ll(l,h),(!u||!u.scope_.parent_)&&typeof c!="symbol"&&Object.prototype.propertyIsEnumerable.call(s,c)&&wl(l,h)}}function wl(l,u,s=!1){!l.parent_&&l.immer_.autoFreeze_&&l.canAutoFreeze_&&Do(u,s)}function nm(l,u){const s=Array.isArray(l),c={type_:s?1:0,scope_:u?u.scope_:S0(),modified_:!1,finalized_:!1,assigned_:{},parent_:u,base_:l,draft_:null,copy_:null,revoke_:null,isManual_:!1};let h=c,p=Co;s&&(h=[c],p=ui);const{revoke:m,proxy:v}=Proxy.revocable(h,p);return c.draft_=v,c.revoke_=m,v}var Co={get(l,u){if(u===Sn)return l;const s=rr(l);if(!vo(s,u))return tm(l,s,u);const c=s[u];return l.finalized_||!st(c)?c:c===so(l.base_,u)?(fo(l),l.copy_[u]=Ro(c,l)):c},has(l,u){return u in rr(l)},ownKeys(l){return Reflect.ownKeys(rr(l))},set(l,u,s){const c=E0(rr(l),u);if(c!=null&&c.set)return c.set.call(l.draft_,s),!0;if(!l.modified_){const h=so(rr(l),u),p=h==null?void 0:h[Sn];if(p&&p.base_===s)return l.copy_[u]=s,l.assigned_[u]=!1,!0;if(Zy(s,h)&&(s!==void 0||vo(l.base_,u)))return!0;fo(l),Ao(l)}return l.copy_[u]===s&&(s!==void 0||u in l.copy_)||Number.isNaN(s)&&Number.isNaN(l.copy_[u])||(l.copy_[u]=s,l.assigned_[u]=!0),!0},deleteProperty(l,u){return so(l.base_,u)!==void 0||u in l.base_?(l.assigned_[u]=!1,fo(l),Ao(l)):delete l.assigned_[u],l.copy_&&delete l.copy_[u],!0},getOwnPropertyDescriptor(l,u){const s=rr(l),c=Reflect.getOwnPropertyDescriptor(s,u);return c&&{writable:!0,configurable:l.type_!==1||u!=="length",enumerable:c.enumerable,value:s[u]}},defineProperty(){zn(11)},getPrototypeOf(l){return $r(l.base_)},setPrototypeOf(){zn(12)}},ui={};Hl(Co,(l,u)=>{ui[l]=function(){return arguments[0]=arguments[0][0],u.apply(this,arguments)}});ui.deleteProperty=function(l,u){return ui.set.call(this,l,u,void 0)};ui.set=function(l,u,s){return Co.set.call(this,l[0],u,s,l[0])};function so(l,u){const s=l[Sn];return(s?rr(s):l)[u]}function tm(l,u,s){var h;const c=E0(u,s);return c?"value"in c?c.value:(h=c.get)==null?void 0:h.call(l.draft_):void 0}function E0(l,u){if(!(u in l))return;let s=$r(l);for(;s;){const c=Object.getOwnPropertyDescriptor(s,u);if(c)return c;s=$r(s)}}function Ao(l){l.modified_||(l.modified_=!0,l.parent_&&Ao(l.parent_))}function fo(l){l.copy_||(l.copy_=go(l.base_,l.scope_.immer_.useStrictShallowCopy_))}var rm=class{constructor(l){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(u,s,c)=>{if(typeof u=="function"&&typeof s!="function"){const p=s;s=u;const m=this;return function(b=p,...d){return m.produce(b,E=>s.call(this,E,...d))}}typeof s!="function"&&zn(6),c!==void 0&&typeof c!="function"&&zn(7);let h;if(st(u)){const p=Gb(this),m=Ro(u,void 0);let v=!0;try{h=s(m),v=!1}finally{v?So(p):Eo(p)}return zb(p,c),qb(h,p)}else if(!u||typeof u!="object"){if(h=s(u),h===void 0&&(h=u),h===m0&&(h=void 0),this.autoFreeze_&&Do(h,!0),c){const p=[],m=[];lr("Patches").generateReplacementPatches_(u,h,p,m),c(p,m)}return h}else zn(1,u)},this.produceWithPatches=(u,s)=>{if(typeof u=="function")return(m,...v)=>this.produceWithPatches(m,b=>u(b,...v));let c,h;return[this.produce(u,s,(m,v)=>{c=m,h=v}),c,h]},typeof(l==null?void 0:l.autoFreeze)=="boolean"&&this.setAutoFreeze(l.autoFreeze),typeof(l==null?void 0:l.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(l.useStrictShallowCopy)}createDraft(l){st(l)||zn(8),ir(l)&&(l=am(l));const u=Gb(this),s=Ro(l,void 0);return s[Sn].isManual_=!0,Eo(u),s}finishDraft(l,u){const s=l&&l[Sn];(!s||!s.isManual_)&&zn(9);const{scope_:c}=s;return zb(c,u),qb(void 0,c)}setAutoFreeze(l){this.autoFreeze_=l}setUseStrictShallowCopy(l){this.useStrictShallowCopy_=l}applyPatches(l,u){let s;for(s=u.length-1;s>=0;s--){const h=u[s];if(h.path.length===0&&h.op==="replace"){l=h.value;break}}s>-1&&(u=u.slice(s+1));const c=lr("Patches").applyPatches_;return ir(l)?c(l,u):this.produce(l,h=>c(h,u))}};function Ro(l,u){const s=Bl(l)?lr("MapSet").proxyMap_(l,u):jl(l)?lr("MapSet").proxySet_(l,u):nm(l,u);return(u?u.scope_:S0()).drafts_.push(s),s}function am(l){return ir(l)||zn(10,l),A0(l)}function A0(l){if(!st(l)||kl(l))return l;const u=l[Sn];let s;if(u){if(!u.modified_)return u.base_;u.finalized_=!0,s=go(l,u.scope_.immer_.useStrictShallowCopy_)}else s=go(l,!0);return Hl(s,(c,h)=>{g0(s,c,A0(h))}),u&&(u.finalized_=!1),s}var En=new rm,R0=En.produce;En.produceWithPatches.bind(En);En.setAutoFreeze.bind(En);En.setUseStrictShallowCopy.bind(En);En.applyPatches.bind(En);En.createDraft.bind(En);En.finishDraft.bind(En);function T0(l){return({dispatch:s,getState:c})=>h=>p=>typeof p=="function"?p(s,c,l):h(p)}var im=T0(),lm=T0,um=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ml:Ml.apply(null,arguments)};function Ib(l,u){function s(...c){if(u){let h=u(...c);if(!h)throw new Error(ot(0));return{type:l,payload:h.payload,..."meta"in h&&{meta:h.meta},..."error"in h&&{error:h.error}}}return{type:l,payload:c[0]}}return s.toString=()=>`${l}`,s.type=l,s.match=c=>Py(c)&&c.type===l,s}var _0=class ii extends Array{constructor(...u){super(...u),Object.setPrototypeOf(this,ii.prototype)}static get[Symbol.species](){return ii}concat(...u){return super.concat.apply(this,u)}prepend(...u){return u.length===1&&Array.isArray(u[0])?new ii(...u[0].concat(this)):new ii(...u.concat(this))}};function Vb(l){return st(l)?R0(l,()=>{}):l}function Tl(l,u,s){return l.has(u)?l.get(u):l.set(u,s(u)).get(u)}function cm(l){return typeof l=="boolean"}var om=()=>function(u){const{thunk:s=!0,immutableCheck:c=!0,serializableCheck:h=!0,actionCreatorCheck:p=!0}=u??{};let m=new _0;return s&&(cm(s)?m.push(im):m.push(lm(s.extraArgument))),m},sm="RTK_autoBatch",Xb=l=>u=>{setTimeout(u,l)},fm=(l={type:"raf"})=>u=>(...s)=>{const c=u(...s);let h=!0,p=!1,m=!1;const v=new Set,b=l.type==="tick"?queueMicrotask:l.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Xb(10):l.type==="callback"?l.queueNotification:Xb(l.timeout),d=()=>{m=!1,p&&(p=!1,v.forEach(E=>E()))};return Object.assign({},c,{subscribe(E){const C=()=>h&&E(),j=c.subscribe(C);return v.add(E),()=>{j(),v.delete(E)}},dispatch(E){var C;try{return h=!((C=E==null?void 0:E.meta)!=null&&C[sm]),p=!h,p&&(m||(m=!0,b(d))),c.dispatch(E)}finally{h=!0}}})},dm=l=>function(s){const{autoBatch:c=!0}=s??{};let h=new _0(l);return c&&h.push(fm(typeof c=="object"?c:void 0)),h};function bm(l){const u=om(),{reducer:s=void 0,middleware:c,devTools:h=!0,preloadedState:p=void 0,enhancers:m=void 0}=l||{};let v;if(typeof s=="function")v=s;else if(No(s))v=Ky(s);else throw new Error(ot(1));let b;typeof c=="function"?b=c(u):b=u();let d=Ml;h&&(d=um({trace:!1,...typeof h=="object"&&h}));const E=Wy(...b),C=dm(E);let j=typeof m=="function"?m(C):C();const z=d(...j);return y0(v,p,z)}function O0(l){const u={},s=[];let c;const h={addCase(p,m){const v=typeof p=="string"?p:p.type;if(!v)throw new Error(ot(28));if(v in u)throw new Error(ot(29));return u[v]=m,h},addMatcher(p,m){return s.push({matcher:p,reducer:m}),h},addDefaultCase(p){return c=p,h}};return l(h),[u,s,c]}function hm(l){return typeof l=="function"}function pm(l,u){let[s,c,h]=O0(u),p;if(hm(l))p=()=>Vb(l());else{const v=Vb(l);p=()=>v}function m(v=p(),b){let d=[s[b.type],...c.filter(({matcher:E})=>E(b)).map(({reducer:E})=>E)];return d.filter(E=>!!E).length===0&&(d=[h]),d.reduce((E,C)=>{if(C)if(ir(E)){const z=C(E,b);return z===void 0?E:z}else{if(st(E))return R0(E,j=>C(j,b));{const j=C(E,b);if(j===void 0){if(E===null)return E;throw Error("A case reducer on a non-draftable value must not return undefined")}return j}}return E},v)}return m.getInitialState=p,m}var ym=Symbol.for("rtk-slice-createasyncthunk");function mm(l,u){return`${l}/${u}`}function vm({creators:l}={}){var s;const u=(s=l==null?void 0:l.asyncThunk)==null?void 0:s[ym];return function(h){const{name:p,reducerPath:m=p}=h;if(!p)throw new Error(ot(11));const v=(typeof h.reducers=="function"?h.reducers(Em()):h.reducers)||{},b=Object.keys(v),d={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},E={addCase(F,y){const O=typeof F=="string"?F:F.type;if(!O)throw new Error(ot(12));if(O in d.sliceCaseReducersByType)throw new Error(ot(13));return d.sliceCaseReducersByType[O]=y,E},addMatcher(F,y){return d.sliceMatchers.push({matcher:F,reducer:y}),E},exposeAction(F,y){return d.actionCreators[F]=y,E},exposeCaseReducer(F,y){return d.sliceCaseReducersByName[F]=y,E}};b.forEach(F=>{const y=v[F],O={reducerName:F,type:mm(p,F),createNotation:typeof h.reducers=="function"};Rm(y)?_m(O,y,E,u):Am(O,y,E)});function C(){const[F={},y=[],O=void 0]=typeof h.extraReducers=="function"?O0(h.extraReducers):[h.extraReducers],w={...F,...d.sliceCaseReducersByType};return pm(h.initialState,W=>{for(let J in w)W.addCase(J,w[J]);for(let J of d.sliceMatchers)W.addMatcher(J.matcher,J.reducer);for(let J of y)W.addMatcher(J.matcher,J.reducer);O&&W.addDefaultCase(O)})}const j=F=>F,z=new Map,X=new WeakMap;let Y;function k(F,y){return Y||(Y=C()),Y(F,y)}function K(){return Y||(Y=C()),Y.getInitialState()}function I(F,y=!1){function O(W){let J=W[F];return typeof J>"u"&&y&&(J=Tl(X,O,K)),J}function w(W=j){const J=Tl(z,y,()=>new WeakMap);return Tl(J,W,()=>{const Se={};for(const[xe,Ne]of Object.entries(h.selectors??{}))Se[xe]=gm(Ne,W,()=>Tl(X,W,K),y);return Se})}return{reducerPath:F,getSelectors:w,get selectors(){return w(O)},selectSlice:O}}const re={name:p,reducer:k,actions:d.actionCreators,caseReducers:d.sliceCaseReducersByName,getInitialState:K,...I(m),injectInto(F,{reducerPath:y,...O}={}){const w=y??m;return F.inject({reducerPath:w,reducer:k},O),{...re,...I(w,!0)}}};return re}}function gm(l,u,s,c){function h(p,...m){let v=u(p);return typeof v>"u"&&c&&(v=s()),l(v,...m)}return h.unwrapped=l,h}var Sm=vm();function Em(){function l(u,s){return{_reducerDefinitionType:"asyncThunk",payloadCreator:u,...s}}return l.withTypes=()=>l,{reducer(u){return Object.assign({[u.name](...s){return u(...s)}}[u.name],{_reducerDefinitionType:"reducer"})},preparedReducer(u,s){return{_reducerDefinitionType:"reducerWithPrepare",prepare:u,reducer:s}},asyncThunk:l}}function Am({type:l,reducerName:u,createNotation:s},c,h){let p,m;if("reducer"in c){if(s&&!Tm(c))throw new Error(ot(17));p=c.reducer,m=c.prepare}else p=c;h.addCase(l,p).exposeCaseReducer(u,p).exposeAction(u,m?Ib(l,m):Ib(l))}function Rm(l){return l._reducerDefinitionType==="asyncThunk"}function Tm(l){return l._reducerDefinitionType==="reducerWithPrepare"}function _m({type:l,reducerName:u},s,c,h){if(!h)throw new Error(ot(18));const{payloadCreator:p,fulfilled:m,pending:v,rejected:b,settled:d,options:E}=s,C=h(l,p,E);c.exposeAction(u,C),m&&c.addCase(C.fulfilled,m),v&&c.addCase(C.pending,v),b&&c.addCase(C.rejected,b),d&&c.addMatcher(C.settled,d),c.exposeCaseReducer(u,{fulfilled:m||_l,pending:v||_l,rejected:b||_l,settled:d||_l})}function _l(){}function ot(l){return`Minified Redux Toolkit error #${l}; visit https://redux-toolkit.js.org/Errors?code=${l} for the full message or use the non-minified dev environment for full errors. `}const Om={hero:"Ashe",cash:11e3,equipped:Array(2).fill(""),toBuy:6,avoid:[],avoidEnabled:!1,weights:[{type:"",weight:1}],error:"",minValueEnabled:!1,minAttrGroups:[]},x0=Sm({name:"input",initialState:Om,reducers:{setHero(l,u){l.hero=u.payload},setCash(l,u){l.cash=u.payload},setEquipped(l,u){l.equipped[u.payload.index]=u.payload.id},addEquippedSlot(l){l.equipped.length<6&&l.equipped.push("")},removeEquippedSlot(l,u){l.equipped.length>2&&l.equipped.splice(u.payload,1)},setToBuy(l,u){l.toBuy=u.payload},addAvoid(l,u){l.avoid.includes(u.payload)||l.avoid.push(u.payload)},removeAvoid(l,u){l.avoid=l.avoid.filter(s=>s!==u.payload)},toggleAvoidEnabled(l){l.avoidEnabled=!l.avoidEnabled},setWeightType(l,u){l.weights[u.payload.index].type=u.payload.type},setWeightValue(l,u){l.weights[u.payload.index].weight=u.payload.value},addWeightRow(l,u){l.weights.push({type:u.payload,weight:1})},removeWeightRow(l,u){l.weights.splice(u.payload,1)},setError(l,u){l.error=u.payload},toggleMinValueEnabled(l){l.minValueEnabled=!l.minValueEnabled,l.minValueEnabled&&l.minAttrGroups.length===0&&l.minAttrGroups.push({attrs:["Health","Armor","Shield"],value:50})},addMinGroup(l){l.minAttrGroups.push({attrs:[],value:0})},removeMinGroup(l,u){l.minAttrGroups.splice(u.payload,1)},setMinGroupValue(l,u){l.minAttrGroups[u.payload.index].value=u.payload.value},addAttrToGroup(l,u){const s=l.minAttrGroups[u.payload.index];s.attrs.includes(u.payload.attr)||s.attrs.push(u.payload.attr)},removeAttrFromGroup(l,u){const s=l.minAttrGroups[u.payload.index];s.attrs=s.attrs.filter(c=>c!==u.payload.attr)}}}),{setHero:xm,setCash:Nm,setEquipped:Kb,setToBuy:N0,addAvoid:D0,removeAvoid:Dm,toggleAvoidEnabled:C0,setWeightType:M0,setWeightValue:Cm,addWeightRow:Mm,removeWeightRow:Hm,setError:Ol,toggleMinValueEnabled:Lm,addMinGroup:wm,removeMinGroup:Um,setMinGroupValue:Bm,addAttrToGroup:jm,removeAttrFromGroup:km,addEquippedSlot:zm,removeEquippedSlot:Gm}=x0.actions,qm=x0.reducer;function H0(l,u){const s={common:0,rare:1,epic:2},c=s[l.rarity]-s[u.rarity];return c!==0?c:l.name.localeCompare(u.name)}function Ym(l){const u=l.match(/[-+]?\d+(?:\.\d+)?/);return u?parseFloat(u[0]):0}function To(l){const u=new Map;return l.forEach(s=>{s.attributes.forEach(c=>{const h=Ym(c.value);u.set(c.type,(u.get(c.type)??0)+h)})}),u}function Wb(l,u){let s=0;return u.forEach(c=>{s+=(l.get(c.type)??0)*c.weight}),s}function ci(l){switch(l){case"common":return"#17a631";case"rare":return"#217dbe";case"epic":return"#8727d6";default:return"black"}}function Im(l,u){const s=To(l);return u.every(c=>c.attrs.reduce((p,m)=>p+(s.get(m)??0),0)>=c.value)}function L0(l,u,s){const c=new Set(l.map(h=>h.type));return u&&s.forEach(h=>{h.attrs.forEach(p=>c.add(p))}),c.delete(""),c}function Vm(l,u,s,c){const h=L0(u,s,c),p=[];return u.forEach(m=>{const v=l.get(m.type)??0;p.push({type:m.type,sum:v,contrib:v*m.weight}),h.delete(m.type)}),h.forEach(m=>{const v=l.get(m)??0;p.push({type:m,sum:v,contrib:0})}),p}function w0({label:l,onRemove:u}){return S.jsxs("span",{className:"inline-flex items-center justify-center px-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 text-xs mr-2 align-middle",children:[l,u&&S.jsx("button",{type:"button",onClick:u,"aria-label":"Remove",className:"ml-2 pl-2 pr-2 pt-1 pb-1 text-red-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 text-xs align-middle flex items-center justify-center",children:"×"})]})}function oi({label:l,options:u,value:s,onChange:c,placeholder:h="Select an option",className:p}){const[m,v]=ue.useState(!1),[b,d]=ue.useState(!1),[E,C]=ue.useState(""),j=ue.useRef(null),z=ue.useRef(null),X=ue.useRef(null),Y=u.find(y=>y.value===s),k=(Y==null?void 0:Y.label)||h,K=Y==null?void 0:Y.color,I=u.filter(y=>y.label.toLowerCase().includes(E.toLowerCase())),re=y=>{c(y),v(!1),C("")};return ue.useEffect(()=>{const y=O=>{j.current&&!j.current.contains(O.target)&&v(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[]),ue.useEffect(()=>{m&&X.current&&X.current.focus()},[m]),ue.useEffect(()=>{if(!m||!z.current)return;const y=z.current.getBoundingClientRect(),O=window.innerHeight||document.documentElement.clientHeight,w=O*.4,W=O-y.bottom,J=y.top;W<w&&J>W?d(!0):d(!1)},[m]),S.jsxs("div",{className:`relative block ${p||""}`,ref:j,children:[S.jsxs("span",{className:"flex w-full divide-x divide-gray-300 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm",children:[S.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative text-left",onClick:()=>{const y=!m;v(y),y&&C("")},ref:z,children:S.jsx("span",{style:{color:K||"inherit",minWidth:"135px",display:"inline-block"},children:k})}),S.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative","aria-label":"Menu",onClick:()=>{const y=!m;v(y),y&&C("")},children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),m&&S.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg max-h-[40vh] overflow-y-auto ${b?"bottom-full mb-2":"top-full mt-2"}`,children:u.length>0?S.jsxs("div",{children:[S.jsx("p",{className:"sticky top-0 bg-white dark:bg-gray-900 px-3 py-2 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 z-20",children:l}),S.jsx("input",{type:"text",ref:X,className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 text-sm placeholder-gray-400 dark:placeholder-gray-500",placeholder:"Search...",value:E,onChange:y=>C(y.target.value),onKeyDown:y=>{y.key==="Enter"&&I.length===1&&(y.preventDefault(),re(I[0].value))}}),I.map(y=>S.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",role:"menuitem",onClick:O=>{O.preventDefault(),re(y.value)},children:S.jsx("span",{style:{color:y.color||"inherit"},children:y.label})},y.value)),I.length===0&&S.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No matching options"})]}):S.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No options available"})})]})}const zl=({onClick:l,text:u})=>S.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",onClick:l,children:u});function Xm({items:l}){const u=on(m=>m.input.present.avoid),s=on(m=>m.input.present.avoidEnabled),c=Wn(),[h,p]=ue.useState("");return S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Avoid Items"}),S.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[S.jsx("input",{id:"avoid-toggle",type:"checkbox",checked:s,onChange:()=>c(C0()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),S.jsx("label",{htmlFor:"avoid-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Avoid Items"})]}),s&&S.jsxs(S.Fragment,{children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(oi,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...l.sort(H0).map(m=>({value:m.id||m.name,label:`${m.name} (${m.cost})`,color:ci(m.rarity)}))],value:h,onChange:p,className:"flex-grow"}),S.jsx(zl,{text:"Add",onClick:()=>{h&&(c(D0(h)),p(""))}})]}),u.length>0&&S.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:u.map(m=>{const v=l.find(b=>(b.id||b.name)===m);return S.jsx(w0,{label:v?v.name:m,onRemove:()=>c(Dm(m))},m)})})]})]})}function Mo({value:l,onChange:u,min:s,max:c,step:h,placeholder:p,className:m,label:v}){const[b,d]=ue.useState(l.toString());ue.useEffect(()=>{d(l.toString())},[l]);const E=C=>{const j=C.target.value;if(d(j),j===""||j==="-")return;const z=Number(j);isNaN(z)||u(z)};return S.jsx("div",{className:`relative inline-block ${m||""}`,children:S.jsx("input",{type:"number",className:"block w-full px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 placeholder-gray-400 dark:placeholder-gray-500",value:b,onChange:E,inputMode:"decimal",pattern:".*",min:s,max:c,step:h,placeholder:p,"aria-label":v||p||"Number input"})})}function Km(){const l=on(s=>s.input.present.cash),u=Wn();return S.jsxs("div",{children:[S.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium dark:text-gray-300",children:"Total Cash"}),S.jsx(Mo,{value:l,onChange:s=>u(Nm(s)),min:0,label:"Total Cash",className:"mt-1"})]})}function ur(l){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[l]||l}function Wm(l,u){const s=["WP","AP","AS","Health","Armor","Shields"],c=s.indexOf(l),h=s.indexOf(u);return c!==-1&&h!==-1?c-h:c!==-1?-1:h!==-1?1:l.localeCompare(u)}function Pm({items:l}){const u=on(m=>m.input.present.equipped),s=Wn(),[c,h]=ue.useState(!1),p=m=>{h(m),m||u.forEach((v,b)=>s(Kb({index:b,id:""})))};return S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Equipped Items"}),S.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[S.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:c,onChange:m=>p(m.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),S.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm dark:text-gray-300 select-none",children:"Use Equipped Items"})]}),c&&S.jsxs("div",{className:"space-y-4 mt-1",children:[u.map((m,v)=>S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(oi,{label:`Equipped Slot ${v+1}`,placeholder:"None",options:[{value:"",label:"None"},...l.sort(H0).map(b=>({value:b.id||b.name,label:`${b.name} (${b.cost}) ${b.attributes.filter(d=>d.type!=="description").map(d=>`${ur(d.type)}-${d.value}`).join(", ")}`,color:ci(b.rarity)}))],value:m,onChange:b=>s(Kb({index:v,id:b})),className:"flex-grow"}),u.length>2&&S.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>s(Gm(v)),children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},v)),u.length<6&&S.jsx(zl,{text:"Add Slot",onClick:()=>s(zm())})]})]})}function Qm({heroes:l}){const u=on(c=>c.input.present.hero),s=Wn();return S.jsxs("div",{children:[S.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium mb-1 dark:text-gray-300",children:"Hero"}),S.jsx(oi,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...l.map(c=>({value:c,label:c}))],value:u,onChange:c=>s(xm(c))})]})}function Zm({attrTypes:l}){const u=Wn(),s=on(p=>p.input.present.minValueEnabled),c=on(p=>p.input.present.minAttrGroups),h=l.map(p=>({value:p,label:ur(p)}));return S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Minimum Attribute Totals"}),S.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[S.jsx("input",{id:"min-value-toggle",type:"checkbox",checked:s,onChange:()=>u(Lm()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),S.jsx("label",{htmlFor:"min-value-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Minimum Values"})]}),s&&S.jsxs("div",{className:"space-y-4",children:[c.map((p,m)=>S.jsxs("div",{className:"rounded border p-3 space-y-2",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx("span",{className:"text-sm font-medium dark:text-gray-300",children:"Target Value:"}),S.jsx(Mo,{value:p.value,onChange:v=>u(Bm({index:m,value:v})),min:0,label:"Minimum Value",className:"w-24"}),c.length>1&&S.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>u(Um(m)),children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),S.jsx(oi,{label:"Add Attribute",placeholder:"Add attribute",options:h.filter(v=>!p.attrs.includes(v.value)),value:"",onChange:v=>u(jm({index:m,attr:v})),className:"w-full"}),p.attrs.length>0&&S.jsx("div",{className:"flex flex-wrap gap-2",children:p.attrs.map(v=>S.jsx(w0,{label:ur(v),onRemove:()=>u(km({index:m,attr:v}))},v))})]},m)),S.jsx(zl,{text:"Add Group",onClick:()=>u(wm())})]})]})}function Jm({onSubmit:l,validate:u}){const s=Wn(),c=on(p=>p.input.present.toBuy),h=on(p=>p.input.present.error);return S.jsxs("div",{className:"!mt-8 border-t pt-6",children:[S.jsx("button",{type:"button",onClick:()=>{u()&&l()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 dark:hover:bg-teal-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",disabled:!u(),children:"Calculate Optimal Build"}),S.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(p=>S.jsx("button",{type:"button",onClick:()=>s(N0(p)),className:`rounded-lg py-2 text-sm font-medium ${c===p?"bg-indigo-600 dark:bg-indigo-700 text-white":"bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:p},p))}),h&&S.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 dark:border-red-700 bg-red-50 dark:bg-gray-900 p-4 text-sm font-medium text-red-800 dark:text-red-300",children:h})]})}function Fm({attrTypes:l}){const u=on(h=>h.input.present.weights),s=Wn(),c=l.map(h=>({value:h,label:ur(h)}));return S.jsxs("div",{children:[S.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Attribute Weights"}),S.jsx("div",{className:"space-y-4 mt-1 mb-4",children:u.map((h,p)=>S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(oi,{label:"Attribute Type",placeholder:"Select type",options:c,value:h.type,onChange:m=>s(M0({index:p,type:m})),className:"flex-grow"}),S.jsx(Mo,{value:h.weight,onChange:m=>s(Cm({index:p,value:m})),min:0,max:100,step:.01,label:`Weight for ${ur(h.type)}`,className:"w-24"}),u.length>1&&S.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 dark:text-gray-500 hover:bg-red-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-400",onClick:()=>s(Hm(p)),children:S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},p))}),S.jsx(zl,{onClick:()=>s(Mm(l[0])),text:"Add Row"})]})}function $m({heroes:l,attrTypes:u,filteredItems:s,onSubmit:c,validate:h}){return S.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8  dark:border-gray-700",children:[S.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Configuration"}),S.jsxs("form",{onSubmit:p=>{p.preventDefault(),h()&&c()},className:"grid",children:[S.jsxs("div",{className:"flex flex-row gap-4",children:[S.jsx(Qm,{heroes:l}),S.jsx(Km,{})]}),S.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),S.jsx(Pm,{items:s}),S.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),S.jsx(Xm,{items:s}),S.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),S.jsx(Zm,{attrTypes:u}),S.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),S.jsx(Fm,{attrTypes:u}),S.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),S.jsx(Jm,{onSubmit:c,validate:h})]})]})}var ei={},Zr={},xl={},nr={},tr={},bo={},Pb;function U0(){return Pb||(Pb=1,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.Doctype=l.CDATA=l.Tag=l.Style=l.Script=l.Comment=l.Directive=l.Text=l.Root=l.isTag=l.ElementType=void 0;var u;(function(c){c.Root="root",c.Text="text",c.Directive="directive",c.Comment="comment",c.Script="script",c.Style="style",c.Tag="tag",c.CDATA="cdata",c.Doctype="doctype"})(u=l.ElementType||(l.ElementType={}));function s(c){return c.type===u.Tag||c.type===u.Script||c.type===u.Style}l.isTag=s,l.Root=u.Root,l.Text=u.Text,l.Directive=u.Directive,l.Comment=u.Comment,l.Script=u.Script,l.Style=u.Style,l.Tag=u.Tag,l.CDATA=u.CDATA,l.Doctype=u.Doctype}(bo)),bo}var se={},Qb;function Zb(){if(Qb)return se;Qb=1;var l=se&&se.__extends||function(){var y=function(O,w){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(W,J){W.__proto__=J}||function(W,J){for(var Se in J)Object.prototype.hasOwnProperty.call(J,Se)&&(W[Se]=J[Se])},y(O,w)};return function(O,w){if(typeof w!="function"&&w!==null)throw new TypeError("Class extends value "+String(w)+" is not a constructor or null");y(O,w);function W(){this.constructor=O}O.prototype=w===null?Object.create(w):(W.prototype=w.prototype,new W)}}(),u=se&&se.__assign||function(){return u=Object.assign||function(y){for(var O,w=1,W=arguments.length;w<W;w++){O=arguments[w];for(var J in O)Object.prototype.hasOwnProperty.call(O,J)&&(y[J]=O[J])}return y},u.apply(this,arguments)};Object.defineProperty(se,"__esModule",{value:!0}),se.cloneNode=se.hasChildren=se.isDocument=se.isDirective=se.isComment=se.isText=se.isCDATA=se.isTag=se.Element=se.Document=se.CDATA=se.NodeWithChildren=se.ProcessingInstruction=se.Comment=se.Text=se.DataNode=se.Node=void 0;var s=U0(),c=function(){function y(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(y.prototype,"parentNode",{get:function(){return this.parent},set:function(O){this.parent=O},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"previousSibling",{get:function(){return this.prev},set:function(O){this.prev=O},enumerable:!1,configurable:!0}),Object.defineProperty(y.prototype,"nextSibling",{get:function(){return this.next},set:function(O){this.next=O},enumerable:!1,configurable:!0}),y.prototype.cloneNode=function(O){return O===void 0&&(O=!1),re(this,O)},y}();se.Node=c;var h=function(y){l(O,y);function O(w){var W=y.call(this)||this;return W.data=w,W}return Object.defineProperty(O.prototype,"nodeValue",{get:function(){return this.data},set:function(w){this.data=w},enumerable:!1,configurable:!0}),O}(c);se.DataNode=h;var p=function(y){l(O,y);function O(){var w=y!==null&&y.apply(this,arguments)||this;return w.type=s.ElementType.Text,w}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),O}(h);se.Text=p;var m=function(y){l(O,y);function O(){var w=y!==null&&y.apply(this,arguments)||this;return w.type=s.ElementType.Comment,w}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),O}(h);se.Comment=m;var v=function(y){l(O,y);function O(w,W){var J=y.call(this,W)||this;return J.name=w,J.type=s.ElementType.Directive,J}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),O}(h);se.ProcessingInstruction=v;var b=function(y){l(O,y);function O(w){var W=y.call(this)||this;return W.children=w,W}return Object.defineProperty(O.prototype,"firstChild",{get:function(){var w;return(w=this.children[0])!==null&&w!==void 0?w:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"childNodes",{get:function(){return this.children},set:function(w){this.children=w},enumerable:!1,configurable:!0}),O}(c);se.NodeWithChildren=b;var d=function(y){l(O,y);function O(){var w=y!==null&&y.apply(this,arguments)||this;return w.type=s.ElementType.CDATA,w}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),O}(b);se.CDATA=d;var E=function(y){l(O,y);function O(){var w=y!==null&&y.apply(this,arguments)||this;return w.type=s.ElementType.Root,w}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),O}(b);se.Document=E;var C=function(y){l(O,y);function O(w,W,J,Se){J===void 0&&(J=[]),Se===void 0&&(Se=w==="script"?s.ElementType.Script:w==="style"?s.ElementType.Style:s.ElementType.Tag);var xe=y.call(this,J)||this;return xe.name=w,xe.attribs=W,xe.type=Se,xe}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"tagName",{get:function(){return this.name},set:function(w){this.name=w},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"attributes",{get:function(){var w=this;return Object.keys(this.attribs).map(function(W){var J,Se;return{name:W,value:w.attribs[W],namespace:(J=w["x-attribsNamespace"])===null||J===void 0?void 0:J[W],prefix:(Se=w["x-attribsPrefix"])===null||Se===void 0?void 0:Se[W]}})},enumerable:!1,configurable:!0}),O}(b);se.Element=C;function j(y){return(0,s.isTag)(y)}se.isTag=j;function z(y){return y.type===s.ElementType.CDATA}se.isCDATA=z;function X(y){return y.type===s.ElementType.Text}se.isText=X;function Y(y){return y.type===s.ElementType.Comment}se.isComment=Y;function k(y){return y.type===s.ElementType.Directive}se.isDirective=k;function K(y){return y.type===s.ElementType.Root}se.isDocument=K;function I(y){return Object.prototype.hasOwnProperty.call(y,"children")}se.hasChildren=I;function re(y,O){O===void 0&&(O=!1);var w;if(X(y))w=new p(y.data);else if(Y(y))w=new m(y.data);else if(j(y)){var W=O?F(y.children):[],J=new C(y.name,u({},y.attribs),W);W.forEach(function(Q){return Q.parent=J}),y.namespace!=null&&(J.namespace=y.namespace),y["x-attribsNamespace"]&&(J["x-attribsNamespace"]=u({},y["x-attribsNamespace"])),y["x-attribsPrefix"]&&(J["x-attribsPrefix"]=u({},y["x-attribsPrefix"])),w=J}else if(z(y)){var W=O?F(y.children):[],Se=new d(W);W.forEach(function(P){return P.parent=Se}),w=Se}else if(K(y)){var W=O?F(y.children):[],xe=new E(W);W.forEach(function(P){return P.parent=xe}),y["x-mode"]&&(xe["x-mode"]=y["x-mode"]),w=xe}else if(k(y)){var Ne=new v(y.name,y.data);y["x-name"]!=null&&(Ne["x-name"]=y["x-name"],Ne["x-publicId"]=y["x-publicId"],Ne["x-systemId"]=y["x-systemId"]),w=Ne}else throw new Error("Not implemented yet: ".concat(y.type));return w.startIndex=y.startIndex,w.endIndex=y.endIndex,y.sourceCodeLocation!=null&&(w.sourceCodeLocation=y.sourceCodeLocation),w}se.cloneNode=re;function F(y){for(var O=y.map(function(W){return re(W,!0)}),w=1;w<O.length;w++)O[w].prev=O[w-1],O[w-1].next=O[w];return O}return se}var Jb;function B0(){return Jb||(Jb=1,function(l){var u=tr&&tr.__createBinding||(Object.create?function(v,b,d,E){E===void 0&&(E=d);var C=Object.getOwnPropertyDescriptor(b,d);(!C||("get"in C?!b.__esModule:C.writable||C.configurable))&&(C={enumerable:!0,get:function(){return b[d]}}),Object.defineProperty(v,E,C)}:function(v,b,d,E){E===void 0&&(E=d),v[E]=b[d]}),s=tr&&tr.__exportStar||function(v,b){for(var d in v)d!=="default"&&!Object.prototype.hasOwnProperty.call(b,d)&&u(b,v,d)};Object.defineProperty(l,"__esModule",{value:!0}),l.DomHandler=void 0;var c=U0(),h=Zb();s(Zb(),l);var p={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},m=function(){function v(b,d,E){this.dom=[],this.root=new h.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof d=="function"&&(E=d,d=p),typeof b=="object"&&(d=b,b=void 0),this.callback=b??null,this.options=d??p,this.elementCB=E??null}return v.prototype.onparserinit=function(b){this.parser=b},v.prototype.onreset=function(){this.dom=[],this.root=new h.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},v.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},v.prototype.onerror=function(b){this.handleCallback(b)},v.prototype.onclosetag=function(){this.lastNode=null;var b=this.tagStack.pop();this.options.withEndIndices&&(b.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(b)},v.prototype.onopentag=function(b,d){var E=this.options.xmlMode?c.ElementType.Tag:void 0,C=new h.Element(b,d,void 0,E);this.addNode(C),this.tagStack.push(C)},v.prototype.ontext=function(b){var d=this.lastNode;if(d&&d.type===c.ElementType.Text)d.data+=b,this.options.withEndIndices&&(d.endIndex=this.parser.endIndex);else{var E=new h.Text(b);this.addNode(E),this.lastNode=E}},v.prototype.oncomment=function(b){if(this.lastNode&&this.lastNode.type===c.ElementType.Comment){this.lastNode.data+=b;return}var d=new h.Comment(b);this.addNode(d),this.lastNode=d},v.prototype.oncommentend=function(){this.lastNode=null},v.prototype.oncdatastart=function(){var b=new h.Text(""),d=new h.CDATA([b]);this.addNode(d),b.parent=d,this.lastNode=b},v.prototype.oncdataend=function(){this.lastNode=null},v.prototype.onprocessinginstruction=function(b,d){var E=new h.ProcessingInstruction(b,d);this.addNode(E)},v.prototype.handleCallback=function(b){if(typeof this.callback=="function")this.callback(b,this.dom);else if(b)throw b},v.prototype.addNode=function(b){var d=this.tagStack[this.tagStack.length-1],E=d.children[d.children.length-1];this.options.withStartIndices&&(b.startIndex=this.parser.startIndex),this.options.withEndIndices&&(b.endIndex=this.parser.endIndex),d.children.push(b),E&&(b.prev=E,E.next=b),b.parent=d,this.lastNode=null},v}();l.DomHandler=m,l.default=m}(tr)),tr}var ho={},Fb;function ev(){return Fb||(Fb=1,function(l){Object.defineProperty(l,"__esModule",{value:!0}),l.CARRIAGE_RETURN_PLACEHOLDER_REGEX=l.CARRIAGE_RETURN_PLACEHOLDER=l.CARRIAGE_RETURN_REGEX=l.CARRIAGE_RETURN=l.CASE_SENSITIVE_TAG_NAMES_MAP=l.CASE_SENSITIVE_TAG_NAMES=void 0,l.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],l.CASE_SENSITIVE_TAG_NAMES_MAP=l.CASE_SENSITIVE_TAG_NAMES.reduce(function(u,s){return u[s.toLowerCase()]=s,u},{}),l.CARRIAGE_RETURN="\r",l.CARRIAGE_RETURN_REGEX=new RegExp(l.CARRIAGE_RETURN,"g"),l.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(),"__"),l.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(l.CARRIAGE_RETURN_PLACEHOLDER,"g")}(ho)),ho}var $b;function j0(){if($b)return nr;$b=1,Object.defineProperty(nr,"__esModule",{value:!0}),nr.formatAttributes=c,nr.escapeSpecialCharacters=p,nr.revertEscapedCharacters=m,nr.formatDOM=v;var l=B0(),u=ev();function s(b){return u.CASE_SENSITIVE_TAG_NAMES_MAP[b]}function c(b){for(var d={},E=0,C=b.length;E<C;E++){var j=b[E];d[j.name]=j.value}return d}function h(b){b=b.toLowerCase();var d=s(b);return d||b}function p(b){return b.replace(u.CARRIAGE_RETURN_REGEX,u.CARRIAGE_RETURN_PLACEHOLDER)}function m(b){return b.replace(u.CARRIAGE_RETURN_PLACEHOLDER_REGEX,u.CARRIAGE_RETURN)}function v(b,d,E){d===void 0&&(d=null);for(var C=[],j,z=0,X=b.length;z<X;z++){var Y=b[z];switch(Y.nodeType){case 1:{var k=h(Y.nodeName);j=new l.Element(k,c(Y.attributes)),j.children=v(k==="template"?Y.content.childNodes:Y.childNodes,j);break}case 3:j=new l.Text(m(Y.nodeValue));break;case 8:j=new l.Comment(Y.nodeValue);break;default:continue}var K=C[z-1]||null;K&&(K.next=j),j.parent=d,j.prev=K,j.next=null,C.push(j)}return E&&(j=new l.ProcessingInstruction(E.substring(0,E.indexOf(" ")).toLowerCase(),E),j.next=C[0]||null,j.parent=d,C.unshift(j),C[1]&&(C[1].prev=C[0])),C}return nr}var e0;function nv(){if(e0)return xl;e0=1,Object.defineProperty(xl,"__esModule",{value:!0}),xl.default=Y;var l=j0(),u="html",s="head",c="body",h=/<([a-zA-Z]+[0-9]?)/,p=/<head[^]*>/i,m=/<body[^]*>/i,v=function(k,K){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},b=function(k,K){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},d=typeof window=="object"&&window.DOMParser;if(typeof d=="function"){var E=new d,C="text/html";b=function(k,K){return K&&(k="<".concat(K,">").concat(k,"</").concat(K,">")),E.parseFromString(k,C)},v=b}if(typeof document=="object"&&document.implementation){var j=document.implementation.createHTMLDocument();v=function(k,K){if(K){var I=j.documentElement.querySelector(K);return I&&(I.innerHTML=k),j}return j.documentElement.innerHTML=k,j}}var z=typeof document=="object"&&document.createElement("template"),X;z&&z.content&&(X=function(k){return z.innerHTML=k,z.content.childNodes});function Y(k){var K,I;k=(0,l.escapeSpecialCharacters)(k);var re=k.match(h),F=re&&re[1]?re[1].toLowerCase():"";switch(F){case u:{var y=b(k);if(!p.test(k)){var O=y.querySelector(s);(K=O==null?void 0:O.parentNode)===null||K===void 0||K.removeChild(O)}if(!m.test(k)){var O=y.querySelector(c);(I=O==null?void 0:O.parentNode)===null||I===void 0||I.removeChild(O)}return y.querySelectorAll(u)}case s:case c:{var w=v(k).querySelectorAll(F);return m.test(k)&&p.test(k)?w[0].parentNode.childNodes:w}default:{if(X)return X(k);var O=v(k,c).querySelector(c);return O.childNodes}}}return xl}var n0;function tv(){if(n0)return Zr;n0=1;var l=Zr&&Zr.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.default=h;var u=l(nv()),s=j0(),c=/<(![a-zA-Z\s]+)>/;function h(p){if(typeof p!="string")throw new TypeError("First argument must be a string");if(!p)return[];var m=p.match(c),v=m?m[1]:void 0;return(0,s.formatDOM)((0,u.default)(p),null,v)}return Zr}var Nl={},Mn={},ni={},t0;function rv(){if(t0)return ni;t0=1;var l=0;ni.SAME=l;var u=1;return ni.CAMELCASE=u,ni.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},ni}var r0;function av(){if(r0)return Mn;r0=1;const l=0,u=1,s=2,c=3,h=4,p=5,m=6;function v(y){return d.hasOwnProperty(y)?d[y]:null}function b(y,O,w,W,J,Se,xe){this.acceptsBooleans=O===s||O===c||O===h,this.attributeName=W,this.attributeNamespace=J,this.mustUseProperty=w,this.propertyName=y,this.type=O,this.sanitizeURL=Se,this.removeEmptyString=xe}const d={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(y=>{d[y]=new b(y,l,!1,y,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([y,O])=>{d[y]=new b(y,u,!1,O,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(y=>{d[y]=new b(y,s,!1,y.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(y=>{d[y]=new b(y,s,!1,y,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(y=>{d[y]=new b(y,c,!1,y.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(y=>{d[y]=new b(y,c,!0,y,null,!1,!1)}),["capture","download"].forEach(y=>{d[y]=new b(y,h,!1,y,null,!1,!1)}),["cols","rows","size","span"].forEach(y=>{d[y]=new b(y,m,!1,y,null,!1,!1)}),["rowSpan","start"].forEach(y=>{d[y]=new b(y,p,!1,y.toLowerCase(),null,!1,!1)});const C=/[\-\:]([a-z])/g,j=y=>y[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(y=>{const O=y.replace(C,j);d[O]=new b(O,u,!1,y,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(y=>{const O=y.replace(C,j);d[O]=new b(O,u,!1,y,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(y=>{const O=y.replace(C,j);d[O]=new b(O,u,!1,y,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(y=>{d[y]=new b(y,u,!1,y.toLowerCase(),null,!1,!1)});const z="xlinkHref";d[z]=new b("xlinkHref",u,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(y=>{d[y]=new b(y,u,!1,y.toLowerCase(),null,!0,!0)});const{CAMELCASE:X,SAME:Y,possibleStandardNames:k}=rv(),I=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",re=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+I+"]*$")),F=Object.keys(k).reduce((y,O)=>{const w=k[O];return w===Y?y[O]=O:w===X?y[O.toLowerCase()]=O:y[O]=w,y},{});return Mn.BOOLEAN=c,Mn.BOOLEANISH_STRING=s,Mn.NUMERIC=p,Mn.OVERLOADED_BOOLEAN=h,Mn.POSITIVE_NUMERIC=m,Mn.RESERVED=l,Mn.STRING=u,Mn.getPropertyInfo=v,Mn.isCustomAttribute=re,Mn.possibleStandardNames=F,Mn}var ti={},Jr={},po,a0;function iv(){if(a0)return po;a0=1;var l=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,u=/\n/g,s=/^\s*/,c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,h=/^:\s*/,p=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,m=/^[;\s]*/,v=/^\s+|\s+$/g,b=`
`,d="/",E="*",C="",j="comment",z="declaration";po=function(Y,k){if(typeof Y!="string")throw new TypeError("First argument must be a string");if(!Y)return[];k=k||{};var K=1,I=1;function re(Q){var P=Q.match(u);P&&(K+=P.length);var be=Q.lastIndexOf(b);I=~be?Q.length-be:I+Q.length}function F(){var Q={line:K,column:I};return function(P){return P.position=new y(Q),W(),P}}function y(Q){this.start=Q,this.end={line:K,column:I},this.source=k.source}y.prototype.content=Y;function O(Q){var P=new Error(k.source+":"+K+":"+I+": "+Q);if(P.reason=Q,P.filename=k.source,P.line=K,P.column=I,P.source=Y,!k.silent)throw P}function w(Q){var P=Q.exec(Y);if(P){var be=P[0];return re(be),Y=Y.slice(be.length),P}}function W(){w(s)}function J(Q){var P;for(Q=Q||[];P=Se();)P!==!1&&Q.push(P);return Q}function Se(){var Q=F();if(!(d!=Y.charAt(0)||E!=Y.charAt(1))){for(var P=2;C!=Y.charAt(P)&&(E!=Y.charAt(P)||d!=Y.charAt(P+1));)++P;if(P+=2,C===Y.charAt(P-1))return O("End of comment missing");var be=Y.slice(2,P-2);return I+=2,re(be),Y=Y.slice(P),I+=2,Q({type:j,comment:be})}}function xe(){var Q=F(),P=w(c);if(P){if(Se(),!w(h))return O("property missing ':'");var be=w(p),M=Q({type:z,property:X(P[0].replace(l,C)),value:be?X(be[0].replace(l,C)):C});return w(m),M}}function Ne(){var Q=[];J(Q);for(var P;P=xe();)P!==!1&&(Q.push(P),J(Q));return Q}return W(),Ne()};function X(Y){return Y?Y.replace(v,C):C}return po}var i0;function lv(){if(i0)return Jr;i0=1;var l=Jr&&Jr.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.default=s;var u=l(iv());function s(c,h){var p=null;if(!c||typeof c!="string")return p;var m=(0,u.default)(c),v=typeof h=="function";return m.forEach(function(b){if(b.type==="declaration"){var d=b.property,E=b.value;v?h(d,E,b):E&&(p=p||{},p[d]=E)}}),p}return Jr}var ri={},l0;function uv(){if(l0)return ri;l0=1,Object.defineProperty(ri,"__esModule",{value:!0}),ri.camelCase=void 0;var l=/^--[a-zA-Z0-9_-]+$/,u=/-([a-z])/g,s=/^[^-]+$/,c=/^-(webkit|moz|ms|o|khtml)-/,h=/^-(ms)-/,p=function(d){return!d||s.test(d)||l.test(d)},m=function(d,E){return E.toUpperCase()},v=function(d,E){return"".concat(E,"-")},b=function(d,E){return E===void 0&&(E={}),p(d)?d:(d=d.toLowerCase(),E.reactCompat?d=d.replace(h,v):d=d.replace(c,v),d.replace(u,m))};return ri.camelCase=b,ri}var ai,u0;function cv(){if(u0)return ai;u0=1;var l=ai&&ai.__importDefault||function(h){return h&&h.__esModule?h:{default:h}},u=l(lv()),s=uv();function c(h,p){var m={};return!h||typeof h!="string"||(0,u.default)(h,function(v,b){v&&b&&(m[(0,s.camelCase)(v,p)]=b)}),m}return c.default=c,ai=c,ai}var c0;function k0(){return c0||(c0=1,function(l){var u=ti&&ti.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(l,"__esModule",{value:!0}),l.returnFirstArg=l.canTextBeChildOfNode=l.ELEMENTS_WITH_NO_TEXT_CHILDREN=l.PRESERVE_CUSTOM_ATTRIBUTES=void 0,l.isCustomComponent=p,l.setStyleProp=v;var s=ea(),c=u(cv()),h=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function p(E,C){return E.includes("-")?!h.has(E):!!(C&&typeof C.is=="string")}var m={reactCompat:!0};function v(E,C){if(typeof E=="string"){if(!E.trim()){C.style={};return}try{C.style=(0,c.default)(E,m)}catch{C.style={}}}}l.PRESERVE_CUSTOM_ATTRIBUTES=Number(s.version.split(".")[0])>=16,l.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var b=function(E){return!l.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(E.name)};l.canTextBeChildOfNode=b;var d=function(E){return E};l.returnFirstArg=d}(ti)),ti}var o0;function z0(){if(o0)return Nl;o0=1,Object.defineProperty(Nl,"__esModule",{value:!0}),Nl.default=p;var l=av(),u=k0(),s=["checked","value"],c=["input","select","textarea"],h={reset:!0,submit:!0};function p(v,b){v===void 0&&(v={});var d={},E=!!(v.type&&h[v.type]);for(var C in v){var j=v[C];if((0,l.isCustomAttribute)(C)){d[C]=j;continue}var z=C.toLowerCase(),X=m(z);if(X){var Y=(0,l.getPropertyInfo)(X);switch(s.includes(X)&&c.includes(b)&&!E&&(X=m("default"+z)),d[X]=j,Y&&Y.type){case l.BOOLEAN:d[X]=!0;break;case l.OVERLOADED_BOOLEAN:j===""&&(d[X]=!0);break}continue}u.PRESERVE_CUSTOM_ATTRIBUTES&&(d[C]=j)}return(0,u.setStyleProp)(v.style,d),d}function m(v){return l.possibleStandardNames[v]}return Nl}var Fr={},s0;function ov(){if(s0)return Fr;s0=1;var l=Fr&&Fr.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(Fr,"__esModule",{value:!0}),Fr.default=p;var u=ea(),s=l(z0()),c=k0(),h={cloneElement:u.cloneElement,createElement:u.createElement,isValidElement:u.isValidElement};function p(v,b){b===void 0&&(b={});for(var d=[],E=typeof b.replace=="function",C=b.transform||c.returnFirstArg,j=b.library||h,z=j.cloneElement,X=j.createElement,Y=j.isValidElement,k=v.length,K=0;K<k;K++){var I=v[K];if(E){var re=b.replace(I,K);if(Y(re)){k>1&&(re=z(re,{key:re.key||K})),d.push(C(re,I,K));continue}}if(I.type==="text"){var F=!I.data.trim().length;if(F&&I.parent&&!(0,c.canTextBeChildOfNode)(I.parent)||b.trim&&F)continue;d.push(C(I.data,I,K));continue}var y=I,O={};m(y)?((0,c.setStyleProp)(y.attribs.style,y.attribs),O=y.attribs):y.attribs&&(O=(0,s.default)(y.attribs,y.name));var w=void 0;switch(I.type){case"script":case"style":I.children[0]&&(O.dangerouslySetInnerHTML={__html:I.children[0].data});break;case"tag":I.name==="textarea"&&I.children[0]?O.defaultValue=I.children[0].data:I.children&&I.children.length&&(w=p(I.children,b));break;default:continue}k>1&&(O.key=K),d.push(C(X(I.name,O,w),I,K))}return d.length===1?d[0]:d}function m(v){return c.PRESERVE_CUSTOM_ATTRIBUTES&&v.type==="tag"&&(0,c.isCustomComponent)(v.name,v.attribs)}return Fr}var f0;function sv(){return f0||(f0=1,function(l){var u=ei&&ei.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(l,"__esModule",{value:!0}),l.htmlToDOM=l.domToReact=l.attributesToProps=l.Text=l.ProcessingInstruction=l.Element=l.Comment=void 0,l.default=v;var s=u(tv());l.htmlToDOM=s.default;var c=u(z0());l.attributesToProps=c.default;var h=u(ov());l.domToReact=h.default;var p=B0();Object.defineProperty(l,"Comment",{enumerable:!0,get:function(){return p.Comment}}),Object.defineProperty(l,"Element",{enumerable:!0,get:function(){return p.Element}}),Object.defineProperty(l,"ProcessingInstruction",{enumerable:!0,get:function(){return p.ProcessingInstruction}}),Object.defineProperty(l,"Text",{enumerable:!0,get:function(){return p.Text}});var m={lowerCaseAttributeNames:!1};function v(b,d){if(typeof b!="string")throw new TypeError("First argument must be a string");return b?(0,h.default)((0,s.default)(b,(d==null?void 0:d.htmlparser2)||m),d):[]}}(ei)),ei}var fv=sv();const d0=uy(fv),dv=d0.default||d0;function bv({title:l,subtitle:u,iconUrl:s,content:c,price:h,rarity:p,onAvoid:m,showAvoidButton:v}){return S.jsxs("div",{className:"glass-card flex flex-col font-noto rounded-[10px] overflow-hidden dark:bg-gray-800 dark:border-gray-700",children:[S.jsxs("div",{className:"flex items-center gap-4 px-5 py-4",children:[s&&S.jsx("img",{src:s,alt:"",width:60,height:60,className:"rounded-lg object-cover"}),S.jsxs("div",{children:[S.jsx("div",{className:"text-lg font-bold",style:{color:ci(p)},children:l}),u&&S.jsx("div",{className:"text-sm font-semibold",style:{color:"#f67422"},children:u})]})]}),S.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),S.jsx("div",{className:"flex flex-col gap-2 px-5 py-4",children:c.map((b,d)=>S.jsxs("div",{className:"flex items-center gap-3",children:[b.iconUrl&&S.jsx("img",{src:b.iconUrl,alt:"",width:30,height:30,className:"rounded object-cover",style:{borderRadius:4}}),S.jsx("span",{className:"text-sm font-merriweather",style:{color:"#fdfdfd"},children:dv(b.text)})]},d))}),S.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),S.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[S.jsx("span",{className:"font-mono text-base font-bold",style:{color:"#fdfdfd"},children:h}),v&&S.jsx("button",{type:"button","aria-label":`Avoid ${l}`,className:"text-xs text-red-500 hover:underline",onClick:m,children:"Avoid"})]})]})}function hv({eqItems:l,eqCost:u,cash:s,results:c,alternatives:h}){const p=Wn(),m=on(v=>v.input.present.avoidEnabled);return S.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[S.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Results"}),c?S.jsxs("div",{className:"space-y-6",children:[S.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[S.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[S.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Weighted Score"}),S.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400",children:c.score.toFixed(2)})]}),S.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[S.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Total Cost"}),S.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400",children:u+c.cost})]}),S.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[S.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Cash Remaining"}),S.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600 dark:text-green-400",children:s-u-c.cost})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200 mb-2",children:"Items Overview"}),S.jsx("table",{className:"w-full text-left border-collapse mb-4",children:S.jsx("tbody",{children:Array.from({length:2}).map((v,b)=>S.jsx("tr",{children:[...l,...c.items].sort((d,E)=>(E.rarity||0)>(d.rarity||0)?-1:(E.rarity||0)<(d.rarity||0)?1:(E.tab||"")<(d.tab||"")?-1:(E.tab||"")>(d.tab||"")?1:(E.cost||0)-(d.cost||0)).slice(b*3,b*3+3).map((d,E)=>S.jsx("td",{className:"px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]",style:{color:d?ci(d.rarity):void 0},children:d?d.name:""},E))},b))})})]}),c.breakdown&&S.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[S.jsx("strong",{children:"Breakdown:"}),S.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Type"}),S.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Sum"}),S.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Contribution"})]})}),S.jsx("tbody",{children:c.breakdown.map(v=>S.jsxs("tr",{className:"dark:bg-gray-900",children:[S.jsx("td",{className:"px-2 py-1",children:ur(v.type)}),S.jsx("td",{className:"px-2 py-1",children:v.sum}),S.jsx("td",{className:"px-2 py-1",children:v.contrib.toFixed(2)})]},v.type))})]})]}),S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Final Build"}),S.jsx("ul",{className:"mt-2 space-y-3 max-h-72 overflow-y-auto pr-2",children:[...l,...c.items].sort((v,b)=>(v.tab||"")<(b.tab||"")?-1:(v.tab||"")>(b.tab||"")?1:(v.rarity||0)>(b.rarity||0)?-1:(v.rarity||0)<(b.rarity||0)?1:(v.cost||0)-(b.cost||0)).map(v=>S.jsx("li",{children:S.jsx(bv,{title:v.name,subtitle:v.tab,rarity:v.rarity,content:v.attributes.map(b=>b.type==="description"?{text:`<span class='font-sm text-[#8fa6d7]'>${b.value}</span>`}:b.type==="Editor's Note"?{text:`<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${b.value}</span>`}:{text:`<strong>${b.value}</strong> <span class='font-sm text-[#8fa6d7]'>${ur(b.type)}</span>`}),price:`${v.cost} G`,showAvoidButton:!0,onAvoid:()=>{m||p(C0()),p(D0(v.id||v.name))}})},v.id))})]}),h.length>0&&S.jsxs("div",{children:[S.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Alternative Builds"}),S.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 max-h-48 overflow-y-auto",children:h.map((v,b)=>S.jsxs("li",{className:"text-sm text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",children:[S.jsxs("strong",{children:["Cost: ",v.cost]})," - ",v.items.map((d,E)=>S.jsxs("span",{style:{color:ci(d.rarity)},children:[d.name,E<v.items.length-1?", ":""]},d.id||d.name))]},b))})]})]}):S.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 bg-white dark:bg-gray-900",children:[S.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:S.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),S.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"No results yet"}),S.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Fill out the form and click calculate to see the magic."})]})]})}const Hn={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},Dl={undo(){return{type:Hn.UNDO}},redo(){return{type:Hn.REDO}},jumpToFuture(l){return{type:Hn.JUMP_TO_FUTURE,index:l}},jumpToPast(l){return{type:Hn.JUMP_TO_PAST,index:l}},jump(l){return{type:Hn.JUMP,index:l}},clearHistory(){return{type:Hn.CLEAR_HISTORY}}};function b0(l,u=[]){return Array.isArray(l)?l:typeof l=="string"?[l]:u}function pv(l){return typeof l.present<"u"&&typeof l.future<"u"&&typeof l.past<"u"&&Array.isArray(l.future)&&Array.isArray(l.past)}function ar(l,u,s,c=null){return{past:l,present:u,future:s,group:c,_latestUnfiltered:u,index:l.length,limit:l.length+s.length+1}}let Gl,Ln;const _o={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function yv(){Ln={header:[],prev:[],action:[],next:[],msgs:[]}}function mv(){const{header:l,prev:u,next:s,action:c,msgs:h}=Ln;console.group?(console.groupCollapsed(...l),console.log(...u),console.log(...c),console.log(...s),console.log(...h),console.groupEnd()):(console.log(...l),console.log(...u),console.log(...c),console.log(...s),console.log(...h))}function Oo(l,u,s){return[`%c${l}`,`color: ${u}; font-weight: bold`,s]}function vv(l,u){yv(),Gl&&(console.group?(Ln.header=["%credux-undo","font-style: italic","action",l.type],Ln.action=Oo("action",_o.action,l),Ln.prev=Oo("prev history",_o.prevState,u)):(Ln.header=["redux-undo action",l.type],Ln.action=["action",l],Ln.prev=["prev history",u]))}function kn(l){Gl&&(console.group?Ln.next=Oo("next history",_o.nextState,l):Ln.next=["next history",l],mv())}function nn(...l){Gl&&(Ln.msgs=Ln.msgs.concat([...l,`
`]))}function gv(l){Gl=l}function yo(l,u){const s=ar([],l,[]);return u&&(s._latestUnfiltered=null),s}function Sv(l,u,s,c){const h=l.past.length+1;nn("inserting",u),nn("new free: ",s-h);const{past:p,_latestUnfiltered:m}=l,v=s&&s<=h,b=p.slice(v?1:0),d=m!=null?[...b,m]:b;return ar(d,u,[],c)}function G0(l,u){if(u<0||u>=l.future.length)return l;const{past:s,future:c,_latestUnfiltered:h}=l,p=[...s,h,...c.slice(0,u)],m=c[u],v=c.slice(u+1);return ar(p,m,v)}function q0(l,u){if(u<0||u>=l.past.length)return l;const{past:s,future:c,_latestUnfiltered:h}=l,p=s.slice(0,u),m=[...s.slice(u+1),h,...c],v=s[u];return ar(p,v,m)}function mo(l,u){return u>0?G0(l,u-1):u<0?q0(l,l.past.length+u):l}function Ev(l,u){return u.indexOf(l)>-1?l:!l}function Av(l,u={}){gv(u.debug);const s={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:Hn.UNDO,redoType:Hn.REDO,jumpToPastType:Hn.JUMP_TO_PAST,jumpToFutureType:Hn.JUMP_TO_FUTURE,jumpType:Hn.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...u,initTypes:b0(u.initTypes,["@@redux-undo/INIT"]),clearHistoryType:b0(u.clearHistoryType,[Hn.CLEAR_HISTORY])},c=s.neverSkipReducer?(p,m,...v)=>({...p,present:l(p.present,m,...v)}):p=>p;let h;return(p=h,m={},...v)=>{vv(m,p);let b=p;if(!h)if(nn("history is uninitialized"),p===void 0){const E=l(p,{type:"@@redux-undo/CREATE_HISTORY"},...v);return b=yo(E,s.ignoreInitialState),nn("do not set initialState on probe actions"),kn(b),b}else pv(p)?(b=h=s.ignoreInitialState?p:ar(p.past,p.present,p.future),nn("initialHistory initialized: initialState is a history",h)):(b=h=yo(p,s.ignoreInitialState),nn("initialHistory initialized: initialState is not a history",h));let d;switch(m.type){case void 0:return b;case s.undoType:return d=mo(b,-1),nn("perform undo"),kn(d),c(d,m,...v);case s.redoType:return d=mo(b,1),nn("perform redo"),kn(d),c(d,m,...v);case s.jumpToPastType:return d=q0(b,m.index),nn(`perform jumpToPast to ${m.index}`),kn(d),c(d,m,...v);case s.jumpToFutureType:return d=G0(b,m.index),nn(`perform jumpToFuture to ${m.index}`),kn(d),c(d,m,...v);case s.jumpType:return d=mo(b,m.index),nn(`perform jump to ${m.index}`),kn(d),c(d,m,...v);case Ev(m.type,s.clearHistoryType):return d=yo(b.present,s.ignoreInitialState),nn("perform clearHistory"),kn(d),c(d,m,...v);default:if(d=l(b.present,m,...v),s.initTypes.some(C=>C===m.type))return nn("reset history due to init action"),kn(h),h;if(b._latestUnfiltered===d)return b;if(typeof s.filter=="function"&&!s.filter(m,d,b)){const C=ar(b.past,d,b.future,b.group);return s.syncFilter||(C._latestUnfiltered=b._latestUnfiltered),nn("filter ignored action, not storing it in past"),kn(C),C}const E=s.groupBy(m,d,b);if(E!=null&&E===b.group){const C=ar(b.past,d,b.future,b.group);return nn("groupBy grouped the action with the previous action"),kn(C),C}return b=Sv(b,d,s.limit,E),nn("inserted new state into history"),kn(b),b}}}function Rv(l){return`${l.hero} - $${l.cash}`}function Tv({history:l}){const[u,s]=ue.useState(!1),c=ue.useRef(null);return ue.useEffect(()=>{const h=p=>{c.current&&!c.current.contains(p.target)&&s(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[]),S.jsxs("div",{className:"relative",ref:c,children:[S.jsxs("button",{type:"button",onClick:()=>s(h=>!h),className:"flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800",children:["History",S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:S.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),u&&S.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-lg",children:l.length>0?S.jsx("ul",{children:l.map((h,p)=>S.jsx("li",{className:"border-b border-gray-200 dark:border-gray-700 px-3 py-2 last:border-none dark:text-gray-100",children:Rv(h)},p))}):S.jsx("p",{className:"p-3 text-gray-500 dark:text-gray-400",children:"No history"})})]})}function _v(){const l=Wn(),u=on(c=>c.input.past),s=on(c=>c.input.future);return ue.useEffect(()=>{const c=h=>{h.ctrlKey&&h.key.toLowerCase()==="z"&&(h.preventDefault(),h.shiftKey?l(Dl.redo()):l(Dl.undo()))};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[l]),S.jsx("div",{className:"flex items-center justify-between gap-4",children:S.jsxs("div",{className:"flex gap-2",children:[S.jsx("button",{type:"button",disabled:u.length===0,onClick:()=>l(Dl.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Undo"}),S.jsx("button",{type:"button",disabled:s.length===0,onClick:()=>l(Dl.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Redo"}),S.jsx(Tv,{history:u})]})})}const Ov=`{\r
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
}`,xv=`{\r
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
}`;function Nv(){const[l,u]=ue.useState([]),[s,c]=ue.useState([]),[h,p]=ue.useState([]),m=Wn(),v=on(Q=>Q.input.present),{hero:b,cash:d,equipped:E,toBuy:C,avoid:j,avoidEnabled:z,weights:X,minValueEnabled:Y,minAttrGroups:k}=v,[K,I]=ue.useState(null),[re,F]=ue.useState([]);ue.useEffect(()=>{const Q=JSON.parse(Ov),P=JSON.parse(xv),be=[],M=(L,G,q)=>{q.forEach($=>{const ce=P[$.name],ae={...$,tab:L,rarity:G};ce!=null&&ce.attributes&&(ae.attributes=ce.attributes),be.push(ae)})};["weapon","ability","survival"].forEach(L=>{const G=Q.tabs[L];M(L,"common",G.common),M(L,"rare",G.rare),M(L,"epic",G.epic)}),u(be);const V=new Set,ee=new Map,he=new Set;be.forEach(L=>{L.character&&V.add(L.character),L.attributes.forEach(G=>{const q=(ee.get(G.type)??0)+1;ee.set(G.type,q),q===2&&he.add(G.type)})}),he.delete("description"),he.delete("Editor's Note");const A=Array.from(he).sort(Wm);c(Array.from(V).sort()),p(A),m(M0({index:0,type:A[0]}))},[]),ue.useEffect(()=>{const Q=E.filter(P=>P).length;C+Q>6&&m(N0(Math.max(0,6-Q)))},[m,E,C]);function y(){return E.map(Q=>l.find(P=>P.id===Q)).filter(Q=>!!Q)}function O(){if(!b||d<0||y().reduce((P,be)=>P+be.cost,0)>d||C+y().length>6||X.length===0)return!1;if(Y){for(const P of k)if(P.attrs.length===0||P.value<0)return!1}return!0}function w(Q){const P=To(Q);return Wb(P,X)}function W(Q){return!Y||Im([...Q,...y()],k)}function J(){m(Ol(""));const Q=y(),P=Q.reduce((pe,He)=>pe+He.cost,0),be=d-P;if(be<0){m(Ol("Equipped items cost exceeds total cash"));return}const M=L0(X,Y,k),V=l.filter(pe=>(!pe.character||pe.character===b)&&!E.includes(pe.id??"")&&(!z||!j.includes(pe.id??""))&&pe.attributes.some(He=>M.has(He.type))),ee=C;if(ee===0){if(!W([])){m(Ol("Minimum attribute values not met"));return}const pe=w(Q);I({items:[],cost:0,score:pe}),F([]);return}const he=V.map(pe=>({item:pe,score:w([pe])}));he.sort((pe,He)=>He.score-pe.score);const A=[0];for(const pe of he)A.push(A[A.length-1]+pe.score);let L=-1/0,G=0,q=[];const $=Q.length+ee===6,ce=he.length;function ae(pe,He,sn,qn){if(W(He)&&(qn>L||qn===L&&($?sn>G:sn<G)?(L=qn,G=sn,q=[{items:[...He],cost:sn,score:qn}]):qn===L&&($?sn<=G:sn>=G)&&q.push({items:[...He],cost:sn,score:qn})),He.length===ee||pe>=ce)return;const ql=ee-He.length;if(!(qn+(A[Math.min(ce,pe+ql)]-A[pe])<L))for(let sr=pe;sr<ce;sr++){const Bt=he[sr];sn+Bt.item.cost>be||(He.push(Bt.item),ae(sr+1,He,sn+Bt.item.cost,qn+Bt.score),He.pop())}}if(ae(0,[],0,0),q.length===0){m(Ol("Insufficient cash for any purchase"));return}const[qe,...Ce]=q.sort((pe,He)=>$?He.cost-pe.cost:pe.cost-He.cost),Gn=Ce.filter(pe=>$?pe.cost<qe.cost:pe.cost>qe.cost).sort((pe,He)=>$?He.cost-pe.cost:pe.cost-He.cost),cr=To([...qe.items,...Q]),or=Vm(cr,X,Y,k);I({items:qe.items,cost:qe.cost,score:Wb(cr,X),breakdown:or}),F(Gn.map(pe=>({...pe,score:w([...pe.items,...Q])})))}if(l.length===0)return S.jsx("div",{className:"p-4",children:"Loading..."});const Se=l.filter(Q=>!b||!Q.character||Q.character===b),xe=y(),Ne=xe.reduce((Q,P)=>Q+P.cost,0);return S.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 space-y-2",children:[S.jsx(_v,{}),S.jsxs("div",{className:"mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8",children:[S.jsx($m,{heroes:s,attrTypes:h,filteredItems:Se,onSubmit:J,validate:O}),S.jsx(hv,{eqItems:xe,eqCost:Ne,cash:d,results:K,alternatives:re}),S.jsx(Ey,{})]})]})}function Dv(){return S.jsx("div",{className:"dark h-screen overflow-hidden dark:text-gray-100 p-2 box-border",children:S.jsx("div",{className:"border border-[#346291] rounded-md h-full w-full",children:S.jsx("div",{className:"mx-auto grid gap-6 h-full overflow-y-auto",children:S.jsx(Nv,{})})})})}const Cv=bm({reducer:{input:Av(qm)}});my.createRoot(document.getElementById("root")).render(S.jsx(ue.StrictMode,{children:S.jsx(By,{store:Cv,children:S.jsx(Dv,{})})}));
