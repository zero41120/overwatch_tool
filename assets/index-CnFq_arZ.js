(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function o(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function c(d){if(d.ep)return;d.ep=!0;const h=o(d);fetch(d.href,h)}})();function cy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var as={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xb;function sy(){if(xb)return nl;xb=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function o(c,d,h){var y=null;if(h!==void 0&&(y=""+h),d.key!==void 0&&(y=""+d.key),"key"in d){h={};for(var S in d)S!=="key"&&(h[S]=d[S])}else h=d;return d=h.ref,{$$typeof:r,type:c,key:y,ref:d!==void 0?d:null,props:h}}return nl.Fragment=u,nl.jsx=o,nl.jsxs=o,nl}var Nb;function oy(){return Nb||(Nb=1,as.exports=sy()),as.exports}var v=oy(),is={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Db;function fy(){if(Db)return se;Db=1;var r=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),y=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),_=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=_&&E[_]||E["@@iterator"],typeof E=="function"?E:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,q={};function z(E,B,V){this.props=E,this.context=B,this.refs=q,this.updater=V||k}z.prototype.isReactComponent={},z.prototype.setState=function(E,B){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,B,"setState")},z.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function K(){}K.prototype=z.prototype;function X(E,B,V){this.props=E,this.context=B,this.refs=q,this.updater=V||k}var te=X.prototype=new K;te.constructor=X,I(te,z.prototype),te.isPureReactComponent=!0;var J=Array.isArray,m={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function H(E,B,V,G,F,ce){return V=ce.ref,{$$typeof:r,type:E,key:B,ref:V!==void 0?V:null,props:ce}}function W(E,B){return H(E.type,B,void 0,void 0,void 0,E.props)}function Z(E){return typeof E=="object"&&E!==null&&E.$$typeof===r}function me(E){var B={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(V){return B[V]})}var De=/\/+/g;function Re(E,B){return typeof E=="object"&&E!==null&&E.key!=null?me(""+E.key):B.toString(36)}function fe(){}function le(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(fe,fe):(E.status="pending",E.then(function(B){E.status==="pending"&&(E.status="fulfilled",E.value=B)},function(B){E.status==="pending"&&(E.status="rejected",E.reason=B)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function Ae(E,B,V,G,F){var ce=typeof E;(ce==="undefined"||ce==="boolean")&&(E=null);var ee=!1;if(E===null)ee=!0;else switch(ce){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(E.$$typeof){case r:case u:ee=!0;break;case A:return ee=E._init,Ae(ee(E._payload),B,V,G,F)}}if(ee)return F=F(E),ee=G===""?"."+Re(E,0):G,J(F)?(V="",ee!=null&&(V=ee.replace(De,"$&/")+"/"),Ae(F,B,V,"",function(Qe){return Qe})):F!=null&&(Z(F)&&(F=W(F,V+(F.key==null||E&&E.key===F.key?"":(""+F.key).replace(De,"$&/")+"/")+ee)),B.push(F)),1;ee=0;var Ue=G===""?".":G+":";if(J(E))for(var ge=0;ge<E.length;ge++)G=E[ge],ce=Ue+Re(G,ge),ee+=Ae(G,B,V,ce,F);else if(ge=M(E),typeof ge=="function")for(E=ge.call(E),ge=0;!(G=E.next()).done;)G=G.value,ce=Ue+Re(G,ge++),ee+=Ae(G,B,V,ce,F);else if(ce==="object"){if(typeof E.then=="function")return Ae(le(E),B,V,G,F);throw B=String(E),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return ee}function w(E,B,V){if(E==null)return E;var G=[],F=0;return Ae(E,G,"","",function(ce){return B.call(V,ce,F++)}),G}function P(E){if(E._status===-1){var B=E._result;B=B(),B.then(function(V){(E._status===0||E._status===-1)&&(E._status=1,E._result=V)},function(V){(E._status===0||E._status===-1)&&(E._status=2,E._result=V)}),E._status===-1&&(E._status=0,E._result=B)}if(E._status===1)return E._result.default;throw E._result}var Y=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function ae(){}return se.Children={map:w,forEach:function(E,B,V){w(E,function(){B.apply(this,arguments)},V)},count:function(E){var B=0;return w(E,function(){B++}),B},toArray:function(E){return w(E,function(B){return B})||[]},only:function(E){if(!Z(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},se.Component=z,se.Fragment=o,se.Profiler=d,se.PureComponent=X,se.StrictMode=c,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=m,se.__COMPILER_RUNTIME={__proto__:null,c:function(E){return m.H.useMemoCache(E)}},se.cache=function(E){return function(){return E.apply(null,arguments)}},se.cloneElement=function(E,B,V){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var G=I({},E.props),F=E.key,ce=void 0;if(B!=null)for(ee in B.ref!==void 0&&(ce=void 0),B.key!==void 0&&(F=""+B.key),B)!O.call(B,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&B.ref===void 0||(G[ee]=B[ee]);var ee=arguments.length-2;if(ee===1)G.children=V;else if(1<ee){for(var Ue=Array(ee),ge=0;ge<ee;ge++)Ue[ge]=arguments[ge+2];G.children=Ue}return H(E.type,F,void 0,void 0,ce,G)},se.createContext=function(E){return E={$$typeof:y,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:h,_context:E},E},se.createElement=function(E,B,V){var G,F={},ce=null;if(B!=null)for(G in B.key!==void 0&&(ce=""+B.key),B)O.call(B,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(F[G]=B[G]);var ee=arguments.length-2;if(ee===1)F.children=V;else if(1<ee){for(var Ue=Array(ee),ge=0;ge<ee;ge++)Ue[ge]=arguments[ge+2];F.children=Ue}if(E&&E.defaultProps)for(G in ee=E.defaultProps,ee)F[G]===void 0&&(F[G]=ee[G]);return H(E,ce,void 0,void 0,null,F)},se.createRef=function(){return{current:null}},se.forwardRef=function(E){return{$$typeof:S,render:E}},se.isValidElement=Z,se.lazy=function(E){return{$$typeof:A,_payload:{_status:-1,_result:E},_init:P}},se.memo=function(E,B){return{$$typeof:b,type:E,compare:B===void 0?null:B}},se.startTransition=function(E){var B=m.T,V={};m.T=V;try{var G=E(),F=m.S;F!==null&&F(V,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(ae,Y)}catch(ce){Y(ce)}finally{m.T=B}},se.unstable_useCacheRefresh=function(){return m.H.useCacheRefresh()},se.use=function(E){return m.H.use(E)},se.useActionState=function(E,B,V){return m.H.useActionState(E,B,V)},se.useCallback=function(E,B){return m.H.useCallback(E,B)},se.useContext=function(E){return m.H.useContext(E)},se.useDebugValue=function(){},se.useDeferredValue=function(E,B){return m.H.useDeferredValue(E,B)},se.useEffect=function(E,B,V){var G=m.H;if(typeof V=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(E,B)},se.useId=function(){return m.H.useId()},se.useImperativeHandle=function(E,B,V){return m.H.useImperativeHandle(E,B,V)},se.useInsertionEffect=function(E,B){return m.H.useInsertionEffect(E,B)},se.useLayoutEffect=function(E,B){return m.H.useLayoutEffect(E,B)},se.useMemo=function(E,B){return m.H.useMemo(E,B)},se.useOptimistic=function(E,B){return m.H.useOptimistic(E,B)},se.useReducer=function(E,B,V){return m.H.useReducer(E,B,V)},se.useRef=function(E){return m.H.useRef(E)},se.useState=function(E){return m.H.useState(E)},se.useSyncExternalStore=function(E,B,V){return m.H.useSyncExternalStore(E,B,V)},se.useTransition=function(){return m.H.useTransition()},se.version="19.1.0",se}var Cb;function ai(){return Cb||(Cb=1,is.exports=fy()),is.exports}var ne=ai(),ls={exports:{}},tl={},rs={exports:{}},us={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mb;function dy(){return Mb||(Mb=1,function(r){function u(w,P){var Y=w.length;w.push(P);e:for(;0<Y;){var ae=Y-1>>>1,E=w[ae];if(0<d(E,P))w[ae]=P,w[Y]=E,Y=ae;else break e}}function o(w){return w.length===0?null:w[0]}function c(w){if(w.length===0)return null;var P=w[0],Y=w.pop();if(Y!==P){w[0]=Y;e:for(var ae=0,E=w.length,B=E>>>1;ae<B;){var V=2*(ae+1)-1,G=w[V],F=V+1,ce=w[F];if(0>d(G,Y))F<E&&0>d(ce,G)?(w[ae]=ce,w[F]=Y,ae=F):(w[ae]=G,w[V]=Y,ae=V);else if(F<E&&0>d(ce,Y))w[ae]=ce,w[F]=Y,ae=F;else break e}}return P}function d(w,P){var Y=w.sortIndex-P.sortIndex;return Y!==0?Y:w.id-P.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;r.unstable_now=function(){return h.now()}}else{var y=Date,S=y.now();r.unstable_now=function(){return y.now()-S}}var p=[],b=[],A=1,_=null,M=3,k=!1,I=!1,q=!1,z=!1,K=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function J(w){for(var P=o(b);P!==null;){if(P.callback===null)c(b);else if(P.startTime<=w)c(b),P.sortIndex=P.expirationTime,u(p,P);else break;P=o(b)}}function m(w){if(q=!1,J(w),!I)if(o(p)!==null)I=!0,O||(O=!0,Re());else{var P=o(b);P!==null&&Ae(m,P.startTime-w)}}var O=!1,H=-1,W=5,Z=-1;function me(){return z?!0:!(r.unstable_now()-Z<W)}function De(){if(z=!1,O){var w=r.unstable_now();Z=w;var P=!0;try{e:{I=!1,q&&(q=!1,X(H),H=-1),k=!0;var Y=M;try{n:{for(J(w),_=o(p);_!==null&&!(_.expirationTime>w&&me());){var ae=_.callback;if(typeof ae=="function"){_.callback=null,M=_.priorityLevel;var E=ae(_.expirationTime<=w);if(w=r.unstable_now(),typeof E=="function"){_.callback=E,J(w),P=!0;break n}_===o(p)&&c(p),J(w)}else c(p);_=o(p)}if(_!==null)P=!0;else{var B=o(b);B!==null&&Ae(m,B.startTime-w),P=!1}}break e}finally{_=null,M=Y,k=!1}P=void 0}}finally{P?Re():O=!1}}}var Re;if(typeof te=="function")Re=function(){te(De)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,le=fe.port2;fe.port1.onmessage=De,Re=function(){le.postMessage(null)}}else Re=function(){K(De,0)};function Ae(w,P){H=K(function(){w(r.unstable_now())},P)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(w){w.callback=null},r.unstable_forceFrameRate=function(w){0>w||125<w?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<w?Math.floor(1e3/w):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_next=function(w){switch(M){case 1:case 2:case 3:var P=3;break;default:P=M}var Y=M;M=P;try{return w()}finally{M=Y}},r.unstable_requestPaint=function(){z=!0},r.unstable_runWithPriority=function(w,P){switch(w){case 1:case 2:case 3:case 4:case 5:break;default:w=3}var Y=M;M=w;try{return P()}finally{M=Y}},r.unstable_scheduleCallback=function(w,P,Y){var ae=r.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ae+Y:ae):Y=ae,w){case 1:var E=-1;break;case 2:E=250;break;case 5:E=1073741823;break;case 4:E=1e4;break;default:E=5e3}return E=Y+E,w={id:A++,callback:P,priorityLevel:w,startTime:Y,expirationTime:E,sortIndex:-1},Y>ae?(w.sortIndex=Y,u(b,w),o(p)===null&&w===o(b)&&(q?(X(H),H=-1):q=!0,Ae(m,Y-ae))):(w.sortIndex=E,u(p,w),I||k||(I=!0,O||(O=!0,Re()))),w},r.unstable_shouldYield=me,r.unstable_wrapCallback=function(w){var P=M;return function(){var Y=M;M=P;try{return w.apply(this,arguments)}finally{M=Y}}}}(us)),us}var wb;function by(){return wb||(wb=1,rs.exports=dy()),rs.exports}var cs={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lb;function py(){if(Lb)return tn;Lb=1;var r=ai();function u(p){var b="https://react.dev/errors/"+p;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var A=2;A<arguments.length;A++)b+="&args[]="+encodeURIComponent(arguments[A])}return"Minified React error #"+p+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var c={d:{f:o,r:function(){throw Error(u(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(p,b,A){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:_==null?null:""+_,children:p,containerInfo:b,implementation:A}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(p,b){if(p==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,tn.createPortal=function(p,b){var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(u(299));return h(p,b,null,A)},tn.flushSync=function(p){var b=y.T,A=c.p;try{if(y.T=null,c.p=2,p)return p()}finally{y.T=b,c.p=A,c.d.f()}},tn.preconnect=function(p,b){typeof p=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,c.d.C(p,b))},tn.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},tn.preinit=function(p,b){if(typeof p=="string"&&b&&typeof b.as=="string"){var A=b.as,_=S(A,b.crossOrigin),M=typeof b.integrity=="string"?b.integrity:void 0,k=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;A==="style"?c.d.S(p,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:_,integrity:M,fetchPriority:k}):A==="script"&&c.d.X(p,{crossOrigin:_,integrity:M,fetchPriority:k,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},tn.preinitModule=function(p,b){if(typeof p=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var A=S(b.as,b.crossOrigin);c.d.M(p,{crossOrigin:A,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&c.d.M(p)},tn.preload=function(p,b){if(typeof p=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var A=b.as,_=S(A,b.crossOrigin);c.d.L(p,A,{crossOrigin:_,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},tn.preloadModule=function(p,b){if(typeof p=="string")if(b){var A=S(b.as,b.crossOrigin);c.d.m(p,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:A,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else c.d.m(p)},tn.requestFormReset=function(p){c.d.r(p)},tn.unstable_batchedUpdates=function(p,b){return p(b)},tn.useFormState=function(p,b,A){return y.H.useFormState(p,b,A)},tn.useFormStatus=function(){return y.H.useHostTransitionStatus()},tn.version="19.1.0",tn}var Hb;function hy(){if(Hb)return cs.exports;Hb=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),cs.exports=py(),cs.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function yy(){if(Ub)return tl;Ub=1;var r=by(),u=ai(),o=hy();function c(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function y(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(h(e)!==e)throw Error(c(188))}function p(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(c(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return S(i),e;if(l===a)return S(i),n;l=l.sibling}throw Error(c(188))}if(t.return!==a.return)t=i,a=l;else{for(var s=!1,f=i.child;f;){if(f===t){s=!0,t=i,a=l;break}if(f===a){s=!0,a=i,t=l;break}f=f.sibling}if(!s){for(f=l.child;f;){if(f===t){s=!0,t=l,a=i;break}if(f===a){s=!0,a=l,t=i;break}f=f.sibling}if(!s)throw Error(c(189))}}if(t.alternate!==a)throw Error(c(190))}if(t.tag!==3)throw Error(c(188));return t.stateNode.current===t?e:n}function b(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=b(e),n!==null)return n;e=e.sibling}return null}var A=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),X=Symbol.for("react.consumer"),te=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function Re(e){return e===null||typeof e!="object"?null:(e=De&&e[De]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function le(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case z:return"Profiler";case q:return"StrictMode";case m:return"Suspense";case O:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case te:return(e.displayName||"Context")+".Provider";case X:return(e._context.displayName||"Context")+".Consumer";case J:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:le(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return le(e(n))}catch{}}return null}var Ae=Array.isArray,w=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ae=[],E=-1;function B(e){return{current:e}}function V(e){0>E||(e.current=ae[E],ae[E]=null,E--)}function G(e,n){E++,ae[E]=e.current,e.current=n}var F=B(null),ce=B(null),ee=B(null),Ue=B(null);function ge(e,n){switch(G(ee,n),G(ce,e),G(F,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?nb(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=nb(n),e=tb(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(F),G(F,e)}function Qe(){V(F),V(ce),V(ee)}function Bn(e){e.memoizedState!==null&&G(Ue,e);var n=F.current,t=tb(n,e.type);n!==t&&(G(ce,e),G(F,t))}function Vn(e){ce.current===e&&(V(F),V(ce)),Ue.current===e&&(V(Ue),Zi._currentValue=Y)}var bt=Object.prototype.hasOwnProperty,da=r.unstable_scheduleCallback,ba=r.unstable_cancelCallback,ii=r.unstable_shouldYield,Vr=r.unstable_requestPaint,Rn=r.unstable_now,bl=r.unstable_getCurrentPriorityLevel,pl=r.unstable_ImmediatePriority,pe=r.unstable_UserBlockingPriority,Ce=r.unstable_NormalPriority,zt=r.unstable_LowPriority,jn=r.unstable_IdlePriority,Xr=r.log,Us=r.unstable_setDisableYieldValue,pt=null,Ve=null;function dn(e){if(typeof Xr=="function"&&Us(e),Ve&&typeof Ve.setStrictMode=="function")try{Ve.setStrictMode(pt,e)}catch{}}var bn=Math.clz32?Math.clz32:K0,W0=Math.log,P0=Math.LN2;function K0(e){return e>>>=0,e===0?32:31-(W0(e)/P0|0)|0}var hl=256,yl=4194304;function Gt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ml(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var f=a&134217727;return f!==0?(a=f&~l,a!==0?i=Gt(a):(s&=f,s!==0?i=Gt(s):t||(t=f&~e,t!==0&&(i=Gt(t))))):(f=a&~l,f!==0?i=Gt(f):s!==0?i=Gt(s):t||(t=a&~e,t!==0&&(i=Gt(t)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:i}function li(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Q0(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bs(){var e=hl;return hl<<=1,(hl&4194048)===0&&(hl=256),e}function js(){var e=yl;return yl<<=1,(yl&62914560)===0&&(yl=4194304),e}function Wr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ri(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Z0(e,n,t,a,i,l){var s=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var f=e.entanglements,g=e.expirationTimes,N=e.hiddenUpdates;for(t=s&~t;0<t;){var L=31-bn(t),j=1<<L;f[L]=0,g[L]=-1;var D=N[L];if(D!==null)for(N[L]=null,L=0;L<D.length;L++){var C=D[L];C!==null&&(C.lane&=-536870913)}t&=~j}a!==0&&ks(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~n))}function ks(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-bn(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&4194090}function zs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-bn(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function Pr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gs(){var e=P.p;return e!==0?e:(e=window.event,e===void 0?32:Eb(e.type))}function J0(e,n){var t=P.p;try{return P.p=e,n()}finally{P.p=t}}var ht=Math.random().toString(36).slice(2),en="__reactFiber$"+ht,un="__reactProps$"+ht,pa="__reactContainer$"+ht,Qr="__reactEvents$"+ht,F0="__reactListeners$"+ht,$0="__reactHandles$"+ht,qs="__reactResources$"+ht,ui="__reactMarker$"+ht;function Zr(e){delete e[en],delete e[un],delete e[Qr],delete e[F0],delete e[$0]}function ha(e){var n=e[en];if(n)return n;for(var t=e.parentNode;t;){if(n=t[pa]||t[en]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=rb(e);e!==null;){if(t=e[en])return t;e=rb(e)}return n}e=t,t=e.parentNode}return null}function ya(e){if(e=e[en]||e[pa]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function ci(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(c(33))}function ma(e){var n=e[qs];return n||(n=e[qs]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xe(e){e[ui]=!0}var Ys=new Set,Is={};function qt(e,n){va(e,n),va(e+"Capture",n)}function va(e,n){for(Is[e]=n,e=0;e<n.length;e++)Ys.add(n[e])}var ep=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Xs={};function np(e){return bt.call(Xs,e)?!0:bt.call(Vs,e)?!1:ep.test(e)?Xs[e]=!0:(Vs[e]=!0,!1)}function vl(e,n,t){if(np(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function gl(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Zn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}var Jr,Ws;function ga(e){if(Jr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Jr=n&&n[1]||"",Ws=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jr+e+Ws}var Fr=!1;function $r(e,n){if(!e||Fr)return"";Fr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(C){var D=C}Reflect.construct(e,[],j)}else{try{j.call()}catch(C){D=C}e.call(j.prototype)}}else{try{throw Error()}catch(C){D=C}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(C){if(C&&D&&typeof C.stack=="string")return[C.stack,D.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),s=l[0],f=l[1];if(s&&f){var g=s.split(`
`),N=f.split(`
`);for(i=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(a===g.length||i===N.length)for(a=g.length-1,i=N.length-1;1<=a&&0<=i&&g[a]!==N[i];)i--;for(;1<=a&&0<=i;a--,i--)if(g[a]!==N[i]){if(a!==1||i!==1)do if(a--,i--,0>i||g[a]!==N[i]){var L=`
`+g[a].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=a&&0<=i);break}}}finally{Fr=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?ga(t):""}function tp(e){switch(e.tag){case 26:case 27:case 5:return ga(e.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 15:return $r(e.type,!1);case 11:return $r(e.type.render,!1);case 1:return $r(e.type,!0);case 31:return ga("Activity");default:return""}}function Ps(e){try{var n="";do n+=tp(e),e=e.return;while(e);return n}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Tn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ks(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ap(e){var n=Ks(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sl(e){e._valueTracker||(e._valueTracker=ap(e))}function Qs(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ks(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function El(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ip=/[\n"\\]/g;function _n(e){return e.replace(ip,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function eu(e,n,t,a,i,l,s,f){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),n!=null?s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Tn(n)):e.value!==""+Tn(n)&&(e.value=""+Tn(n)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),n!=null?nu(e,s,Tn(n)):t!=null?nu(e,s,Tn(t)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?e.name=""+Tn(f):e.removeAttribute("name")}function Zs(e,n,t,a,i,l,s,f){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null))return;t=t!=null?""+Tn(t):"",n=n!=null?""+Tn(n):t,f||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=f?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s)}function nu(e,n,t){n==="number"&&El(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Sa(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+Tn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Js(e,n,t){if(n!=null&&(n=""+Tn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+Tn(t):""}function Fs(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(c(92));if(Ae(a)){if(1<a.length)throw Error(c(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=Tn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a)}function Ea(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function $s(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||lp.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function eo(e,n,t){if(n!=null&&typeof n!="object")throw Error(c(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&$s(e,i,a)}else for(var l in n)n.hasOwnProperty(l)&&$s(e,l,n[l])}function tu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),up=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(e){return up.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var au=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Aa=null,Ra=null;function no(e){var n=ya(e);if(n&&(e=n.stateNode)){var t=e[un]||null;e:switch(e=n.stateNode,n.type){case"input":if(eu(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+_n(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[un]||null;if(!i)throw Error(c(90));eu(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Qs(a)}break e;case"textarea":Js(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&Sa(e,!!t.multiple,n,!1)}}}var lu=!1;function to(e,n,t){if(lu)return e(n,t);lu=!0;try{var a=e(n);return a}finally{if(lu=!1,(Aa!==null||Ra!==null)&&(ur(),Aa&&(n=Aa,e=Ra,Ra=Aa=null,no(n),e)))for(n=0;n<e.length;n++)no(e[n])}}function si(e,n){var t=e.stateNode;if(t===null)return null;var a=t[un]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(c(231,n,typeof t));return t}var Jn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=!1;if(Jn)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){ru=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{ru=!1}var yt=null,uu=null,Rl=null;function ao(){if(Rl)return Rl;var e,n=uu,t=n.length,a,i="value"in yt?yt.value:yt.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var s=t-e;for(a=1;a<=s&&n[t-a]===i[l-a];a++);return Rl=i.slice(e,1<a?1-a:void 0)}function Tl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function _l(){return!0}function io(){return!1}function cn(e){function n(t,a,i,l,s){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(t=e[f],this[f]=t?t(l):l[f]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_l:io,this.isPropagationStopped=io,this}return A(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var Yt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=cn(Yt),fi=A({},Yt,{view:0,detail:0}),cp=cn(fi),cu,su,di,xl=A({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==di&&(di&&e.type==="mousemove"?(cu=e.screenX-di.screenX,su=e.screenY-di.screenY):su=cu=0,di=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:su}}),lo=cn(xl),sp=A({},xl,{dataTransfer:0}),op=cn(sp),fp=A({},fi,{relatedTarget:0}),ou=cn(fp),dp=A({},Yt,{animationName:0,elapsedTime:0,pseudoElement:0}),bp=cn(dp),pp=A({},Yt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=cn(pp),yp=A({},Yt,{data:0}),ro=cn(yp),mp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sp(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=gp[e])?!!n[e]:!1}function fu(){return Sp}var Ep=A({},fi,{key:function(e){if(e.key){var n=mp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Tl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fu,charCode:function(e){return e.type==="keypress"?Tl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Tl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ap=cn(Ep),Rp=A({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=cn(Rp),Tp=A({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fu}),_p=cn(Tp),Op=A({},Yt,{propertyName:0,elapsedTime:0,pseudoElement:0}),xp=cn(Op),Np=A({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dp=cn(Np),Cp=A({},Yt,{newState:0,oldState:0}),Mp=cn(Cp),wp=[9,13,27,32],du=Jn&&"CompositionEvent"in window,bi=null;Jn&&"documentMode"in document&&(bi=document.documentMode);var Lp=Jn&&"TextEvent"in window&&!bi,co=Jn&&(!du||bi&&8<bi&&11>=bi),so=" ",oo=!1;function fo(e,n){switch(e){case"keyup":return wp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ta=!1;function Hp(e,n){switch(e){case"compositionend":return bo(n);case"keypress":return n.which!==32?null:(oo=!0,so);case"textInput":return e=n.data,e===so&&oo?null:e;default:return null}}function Up(e,n){if(Ta)return e==="compositionend"||!du&&fo(e,n)?(e=ao(),Rl=uu=yt=null,Ta=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return co&&n.locale!=="ko"?null:n.data;default:return null}}var Bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function po(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bp[e.type]:n==="textarea"}function ho(e,n,t,a){Aa?Ra?Ra.push(a):Ra=[a]:Aa=a,n=br(n,"onChange"),0<n.length&&(t=new Ol("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var pi=null,hi=null;function jp(e){Zd(e,0)}function Nl(e){var n=ci(e);if(Qs(n))return e}function yo(e,n){if(e==="change")return n}var mo=!1;if(Jn){var bu;if(Jn){var pu="oninput"in document;if(!pu){var vo=document.createElement("div");vo.setAttribute("oninput","return;"),pu=typeof vo.oninput=="function"}bu=pu}else bu=!1;mo=bu&&(!document.documentMode||9<document.documentMode)}function go(){pi&&(pi.detachEvent("onpropertychange",So),hi=pi=null)}function So(e){if(e.propertyName==="value"&&Nl(hi)){var n=[];ho(n,hi,e,iu(e)),to(jp,n)}}function kp(e,n,t){e==="focusin"?(go(),pi=n,hi=t,pi.attachEvent("onpropertychange",So)):e==="focusout"&&go()}function zp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nl(hi)}function Gp(e,n){if(e==="click")return Nl(n)}function qp(e,n){if(e==="input"||e==="change")return Nl(n)}function Yp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var pn=typeof Object.is=="function"?Object.is:Yp;function yi(e,n){if(pn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!bt.call(n,i)||!pn(e[i],n[i]))return!1}return!0}function Eo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ao(e,n){var t=Eo(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Eo(t)}}function Ro(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ro(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function To(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=El(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=El(e.document)}return n}function hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ip=Jn&&"documentMode"in document&&11>=document.documentMode,_a=null,yu=null,mi=null,mu=!1;function _o(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mu||_a==null||_a!==El(a)||(a=_a,"selectionStart"in a&&hu(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),mi&&yi(mi,a)||(mi=a,a=br(yu,"onSelect"),0<a.length&&(n=new Ol("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=_a)))}function It(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Oa={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionrun:It("Transition","TransitionRun"),transitionstart:It("Transition","TransitionStart"),transitioncancel:It("Transition","TransitionCancel"),transitionend:It("Transition","TransitionEnd")},vu={},Oo={};Jn&&(Oo=document.createElement("div").style,"AnimationEvent"in window||(delete Oa.animationend.animation,delete Oa.animationiteration.animation,delete Oa.animationstart.animation),"TransitionEvent"in window||delete Oa.transitionend.transition);function Vt(e){if(vu[e])return vu[e];if(!Oa[e])return e;var n=Oa[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Oo)return vu[e]=n[t];return e}var xo=Vt("animationend"),No=Vt("animationiteration"),Do=Vt("animationstart"),Vp=Vt("transitionrun"),Xp=Vt("transitionstart"),Wp=Vt("transitioncancel"),Co=Vt("transitionend"),Mo=new Map,gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gu.push("scrollEnd");function kn(e,n){Mo.set(e,n),qt(n,[e])}var wo=new WeakMap;function On(e,n){if(typeof e=="object"&&e!==null){var t=wo.get(e);return t!==void 0?t:(n={value:e,source:n,stack:Ps(n)},wo.set(e,n),n)}return{value:e,source:n,stack:Ps(n)}}var xn=[],xa=0,Su=0;function Dl(){for(var e=xa,n=Su=xa=0;n<e;){var t=xn[n];xn[n++]=null;var a=xn[n];xn[n++]=null;var i=xn[n];xn[n++]=null;var l=xn[n];if(xn[n++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}l!==0&&Lo(t,i,l)}}function Cl(e,n,t,a){xn[xa++]=e,xn[xa++]=n,xn[xa++]=t,xn[xa++]=a,Su|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Eu(e,n,t,a){return Cl(e,n,t,a),Ml(e)}function Na(e,n){return Cl(e,null,null,n),Ml(e)}function Lo(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&n!==null&&(i=31-bn(t),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),l):null}function Ml(e){if(50<Yi)throw Yi=0,xc=null,Error(c(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Da={};function Pp(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,t,a){return new Pp(e,n,t,a)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fn(e,n){var t=e.alternate;return t===null?(t=hn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function Ho(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function wl(e,n,t,a,i,l){var s=0;if(a=e,typeof e=="function")Au(e)&&(s=1);else if(typeof e=="string")s=Qh(e,t,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=hn(31,t,n,i),e.elementType=Z,e.lanes=l,e;case I:return Xt(t.children,i,l,n);case q:s=8,i|=24;break;case z:return e=hn(12,t,n,i|2),e.elementType=z,e.lanes=l,e;case m:return e=hn(13,t,n,i),e.elementType=m,e.lanes=l,e;case O:return e=hn(19,t,n,i),e.elementType=O,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case K:case te:s=10;break e;case X:s=9;break e;case J:s=11;break e;case H:s=14;break e;case W:s=16,a=null;break e}s=29,t=Error(c(130,e===null?"null":typeof e,"")),a=null}return n=hn(s,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function Xt(e,n,t,a){return e=hn(7,e,a,n),e.lanes=t,e}function Ru(e,n,t){return e=hn(6,e,null,n),e.lanes=t,e}function Tu(e,n,t){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ca=[],Ma=0,Ll=null,Hl=0,Nn=[],Dn=0,Wt=null,$n=1,et="";function Pt(e,n){Ca[Ma++]=Hl,Ca[Ma++]=Ll,Ll=e,Hl=n}function Uo(e,n,t){Nn[Dn++]=$n,Nn[Dn++]=et,Nn[Dn++]=Wt,Wt=e;var a=$n;e=et;var i=32-bn(a)-1;a&=~(1<<i),t+=1;var l=32-bn(n)+i;if(30<l){var s=i-i%5;l=(a&(1<<s)-1).toString(32),a>>=s,i-=s,$n=1<<32-bn(n)+i|t<<i|a,et=l+e}else $n=1<<l|t<<i|a,et=e}function _u(e){e.return!==null&&(Pt(e,1),Uo(e,1,0))}function Ou(e){for(;e===Ll;)Ll=Ca[--Ma],Ca[Ma]=null,Hl=Ca[--Ma],Ca[Ma]=null;for(;e===Wt;)Wt=Nn[--Dn],Nn[Dn]=null,et=Nn[--Dn],Nn[Dn]=null,$n=Nn[--Dn],Nn[Dn]=null}var rn=null,Be=null,Ee=!1,Kt=null,Xn=!1,xu=Error(c(519));function Qt(e){var n=Error(c(418,""));throw Si(On(n,e)),xu}function Bo(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[en]=e,n[un]=a,t){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(t=0;t<Vi.length;t++)ye(Vi[t],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Zs(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Sl(n);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Fs(n,a.value,a.defaultValue,a.children),Sl(n)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||eb(n.textContent,t)?(a.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),a.onScroll!=null&&ye("scroll",n),a.onScrollEnd!=null&&ye("scrollend",n),a.onClick!=null&&(n.onclick=pr),n=!0):n=!1,n||Qt(e)}function jo(e){for(rn=e.return;rn;)switch(rn.tag){case 5:case 13:Xn=!1;return;case 27:case 3:Xn=!0;return;default:rn=rn.return}}function vi(e){if(e!==rn)return!1;if(!Ee)return jo(e),Ee=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ic(e.type,e.memoizedProps)),t=!t),t&&Be&&Qt(e),jo(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(c(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(n===0){Be=Gn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++;e=e.nextSibling}Be=null}}else n===27?(n=Be,wt(e.type)?(e=Pc,Pc=null,Be=e):Be=n):Be=rn?Gn(e.stateNode.nextSibling):null;return!0}function gi(){Be=rn=null,Ee=!1}function ko(){var e=Kt;return e!==null&&(fn===null?fn=e:fn.push.apply(fn,e),Kt=null),e}function Si(e){Kt===null?Kt=[e]:Kt.push(e)}var Nu=B(null),Zt=null,nt=null;function mt(e,n,t){G(Nu,n._currentValue),n._currentValue=t}function tt(e){e._currentValue=Nu.current,V(Nu)}function Du(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function Cu(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var f=l;l=i;for(var g=0;g<n.length;g++)if(f.context===n[g]){l.lanes|=t,f=l.alternate,f!==null&&(f.lanes|=t),Du(l.return,t,e),a||(s=null);break e}l=f.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(c(341));s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Du(s,t,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Ei(e,n,t,a){e=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(c(387));if(s=s.memoizedProps,s!==null){var f=i.type;pn(i.pendingProps.value,s.value)||(e!==null?e.push(f):e=[f])}}else if(i===Ue.current){if(s=i.alternate,s===null)throw Error(c(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Zi):e=[Zi])}i=i.return}e!==null&&Cu(n,e,t,a),n.flags|=262144}function Ul(e){for(e=e.firstContext;e!==null;){if(!pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jt(e){Zt=e,nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return zo(Zt,e)}function Bl(e,n){return Zt===null&&Jt(e),zo(e,n)}function zo(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},nt===null){if(e===null)throw Error(c(308));nt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else nt=nt.next=n;return t}var Kp=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Qp=r.unstable_scheduleCallback,Zp=r.unstable_NormalPriority,Ye={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new Kp,data:new Map,refCount:0}}function Ai(e){e.refCount--,e.refCount===0&&Qp(Zp,function(){e.controller.abort()})}var Ri=null,wu=0,wa=0,La=null;function Jp(e,n){if(Ri===null){var t=Ri=[];wu=0,wa=Hc(),La={status:"pending",value:void 0,then:function(a){t.push(a)}}}return wu++,n.then(Go,Go),n}function Go(){if(--wu===0&&Ri!==null){La!==null&&(La.status="fulfilled");var e=Ri;Ri=null,wa=0,La=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Fp(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var qo=w.S;w.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Jp(e,n),qo!==null&&qo(e,n)};var Ft=B(null);function Lu(){var e=Ft.current;return e!==null?e:we.pooledCache}function jl(e,n){n===null?G(Ft,Ft.current):G(Ft,n.pool)}function Yo(){var e=Lu();return e===null?null:{parent:Ye._currentValue,pool:e}}var Ti=Error(c(460)),Io=Error(c(474)),kl=Error(c(542)),Hu={then:function(){}};function Vo(e){return e=e.status,e==="fulfilled"||e==="rejected"}function zl(){}function Xo(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(zl,zl),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Po(e),e;default:if(typeof n.status=="string")n.then(zl,zl);else{if(e=we,e!==null&&100<e.shellSuspendCounter)throw Error(c(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Po(e),e}throw _i=n,Ti}}var _i=null;function Wo(){if(_i===null)throw Error(c(459));var e=_i;return _i=null,e}function Po(e){if(e===Ti||e===kl)throw Error(c(483))}var vt=!1;function Uu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function gt(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function St(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=Ml(e),Lo(e,null,t),n}return Cl(e,a,n,t),Ml(e)}function Oi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,zs(e,t)}}function ju(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var s={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var ku=!1;function xi(){if(ku){var e=La;if(e!==null)throw e}}function Ni(e,n,t,a){ku=!1;var i=e.updateQueue;vt=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,f=i.shared.pending;if(f!==null){i.shared.pending=null;var g=f,N=g.next;g.next=null,s===null?l=N:s.next=N,s=g;var L=e.alternate;L!==null&&(L=L.updateQueue,f=L.lastBaseUpdate,f!==s&&(f===null?L.firstBaseUpdate=N:f.next=N,L.lastBaseUpdate=g))}if(l!==null){var j=i.baseState;s=0,L=N=g=null,f=l;do{var D=f.lane&-536870913,C=D!==f.lane;if(C?(ve&D)===D:(a&D)===D){D!==0&&D===wa&&(ku=!0),L!==null&&(L=L.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});e:{var ue=e,ie=f;D=n;var Ne=t;switch(ie.tag){case 1:if(ue=ie.payload,typeof ue=="function"){j=ue.call(Ne,j,D);break e}j=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ie.payload,D=typeof ue=="function"?ue.call(Ne,j,D):ue,D==null)break e;j=A({},j,D);break e;case 2:vt=!0}}D=f.callback,D!==null&&(e.flags|=64,C&&(e.flags|=8192),C=i.callbacks,C===null?i.callbacks=[D]:C.push(D))}else C={lane:D,tag:f.tag,payload:f.payload,callback:f.callback,next:null},L===null?(N=L=C,g=j):L=L.next=C,s|=D;if(f=f.next,f===null){if(f=i.shared.pending,f===null)break;C=f,f=C.next,C.next=null,i.lastBaseUpdate=C,i.shared.pending=null}}while(!0);L===null&&(g=j),i.baseState=g,i.firstBaseUpdate=N,i.lastBaseUpdate=L,l===null&&(i.shared.lanes=0),Nt|=s,e.lanes=s,e.memoizedState=j}}function Ko(e,n){if(typeof e!="function")throw Error(c(191,e));e.call(n)}function Qo(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Ko(t[e],n)}var Ha=B(null),Gl=B(0);function Zo(e,n){e=st,G(Gl,e),G(Ha,n),st=e|n.baseLanes}function zu(){G(Gl,st),G(Ha,Ha.current)}function Gu(){st=Gl.current,V(Ha),V(Gl)}var Et=0,de=null,Oe=null,Ge=null,ql=!1,Ua=!1,$t=!1,Yl=0,Di=0,Ba=null,$p=0;function ke(){throw Error(c(321))}function qu(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!pn(e[t],n[t]))return!1;return!0}function Yu(e,n,t,a,i,l){return Et=l,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,w.H=e===null||e.memoizedState===null?Hf:Uf,$t=!1,l=t(a,i),$t=!1,Ua&&(l=Fo(n,t,a,i)),Jo(e),l}function Jo(e){w.H=Kl;var n=Oe!==null&&Oe.next!==null;if(Et=0,Ge=Oe=de=null,ql=!1,Di=0,Ba=null,n)throw Error(c(300));e===null||We||(e=e.dependencies,e!==null&&Ul(e)&&(We=!0))}function Fo(e,n,t,a){de=e;var i=0;do{if(Ua&&(Ba=null),Di=0,Ua=!1,25<=i)throw Error(c(301));if(i+=1,Ge=Oe=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}w.H=rh,l=n(t,a)}while(Ua);return l}function eh(){var e=w.H,n=e.useState()[0];return n=typeof n.then=="function"?Ci(n):n,e=e.useState()[0],(Oe!==null?Oe.memoizedState:null)!==e&&(de.flags|=1024),n}function Iu(){var e=Yl!==0;return Yl=0,e}function Vu(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Xu(e){if(ql){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ql=!1}Et=0,Ge=Oe=de=null,Ua=!1,Di=Yl=0,Ba=null}function sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?de.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function qe(){if(Oe===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Oe.next;var n=Ge===null?de.memoizedState:Ge.next;if(n!==null)Ge=n,Oe=e;else{if(e===null)throw de.alternate===null?Error(c(467)):Error(c(310));Oe=e,e={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Ge===null?de.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Wu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ci(e){var n=Di;return Di+=1,Ba===null&&(Ba=[]),e=Xo(Ba,e,n),n=de,(Ge===null?n.memoizedState:Ge.next)===null&&(n=n.alternate,w.H=n===null||n.memoizedState===null?Hf:Uf),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ci(e);if(e.$$typeof===te)return nn(e)}throw Error(c(438,String(e)))}function Pu(e){var n=null,t=de.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=de.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Wu(),de.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=me;return n.index++,t}function at(e,n){return typeof n=="function"?n(e):n}function Vl(e){var n=qe();return Ku(n,Oe,e)}function Ku(e,n,t){var a=e.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=t;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}n.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{n=i.next;var f=s=null,g=null,N=n,L=!1;do{var j=N.lane&-536870913;if(j!==N.lane?(ve&j)===j:(Et&j)===j){var D=N.revertLane;if(D===0)g!==null&&(g=g.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),j===wa&&(L=!0);else if((Et&D)===D){N=N.next,D===wa&&(L=!0);continue}else j={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},g===null?(f=g=j,s=l):g=g.next=j,de.lanes|=D,Nt|=D;j=N.action,$t&&t(l,j),l=N.hasEagerState?N.eagerState:t(l,j)}else D={lane:j,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},g===null?(f=g=D,s=l):g=g.next=D,de.lanes|=j,Nt|=j;N=N.next}while(N!==null&&N!==n);if(g===null?s=l:g.next=f,!pn(l,e.memoizedState)&&(We=!0,L&&(t=La,t!==null)))throw t;e.memoizedState=l,e.baseState=s,e.baseQueue=g,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Qu(e){var n=qe(),t=n.queue;if(t===null)throw Error(c(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);pn(l,n.memoizedState)||(We=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function $o(e,n,t){var a=de,i=qe(),l=Ee;if(l){if(t===void 0)throw Error(c(407));t=t()}else t=n();var s=!pn((Oe||i).memoizedState,t);s&&(i.memoizedState=t,We=!0),i=i.queue;var f=tf.bind(null,a,i,e);if(Mi(2048,8,f,[e]),i.getSnapshot!==n||s||Ge!==null&&Ge.memoizedState.tag&1){if(a.flags|=2048,ja(9,Xl(),nf.bind(null,a,i,t,n),null),we===null)throw Error(c(349));l||(Et&124)!==0||ef(a,n,t)}return t}function ef(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=de.updateQueue,n===null?(n=Wu(),de.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function nf(e,n,t,a){n.value=t,n.getSnapshot=a,af(n)&&lf(e)}function tf(e,n,t){return t(function(){af(n)&&lf(e)})}function af(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!pn(e,t)}catch{return!0}}function lf(e){var n=Na(e,2);n!==null&&Sn(n,e,2)}function Zu(e){var n=sn();if(typeof e=="function"){var t=e;if(e=t(),$t){dn(!0);try{t()}finally{dn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:e},n}function rf(e,n,t,a){return e.baseState=t,Ku(e,Oe,typeof a=="function"?a:at)}function nh(e,n,t,a,i){if(Pl(e))throw Error(c(485));if(e=n.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};w.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,uf(n,l)):(l.next=t.next,n.pending=t.next=l)}}function uf(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var l=w.T,s={};w.T=s;try{var f=t(i,a),g=w.S;g!==null&&g(s,f),cf(e,n,f)}catch(N){Ju(e,n,N)}finally{w.T=l}}else try{l=t(i,a),cf(e,n,l)}catch(N){Ju(e,n,N)}}function cf(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){sf(e,n,a)},function(a){return Ju(e,n,a)}):sf(e,n,t)}function sf(e,n,t){n.status="fulfilled",n.value=t,of(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,uf(e,t)))}function Ju(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,of(n),n=n.next;while(n!==a)}e.action=null}function of(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function ff(e,n){return n}function df(e,n){if(Ee){var t=we.formState;if(t!==null){e:{var a=de;if(Ee){if(Be){n:{for(var i=Be,l=Xn;i.nodeType!==8;){if(!l){i=null;break n}if(i=Gn(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Be=Gn(i.nextSibling),a=i.data==="F!";break e}}Qt(a)}a=!1}a&&(n=t[0])}}return t=sn(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ff,lastRenderedState:n},t.queue=a,t=Mf.bind(null,de,a),a.dispatch=t,a=Zu(!1),l=tc.bind(null,de,!1,a.queue),a=sn(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=nh.bind(null,de,i,l,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function bf(e){var n=qe();return pf(n,Oe,e)}function pf(e,n,t){if(n=Ku(e,n,ff)[0],e=Vl(at)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Ci(n)}catch(s){throw s===Ti?kl:s}else a=n;n=qe();var i=n.queue,l=i.dispatch;return t!==n.memoizedState&&(de.flags|=2048,ja(9,Xl(),th.bind(null,i,t),null)),[a,l,e]}function th(e,n){e.action=n}function hf(e){var n=qe(),t=Oe;if(t!==null)return pf(n,t,e);qe(),n=n.memoizedState,t=qe();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function ja(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=de.updateQueue,n===null&&(n=Wu(),de.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function Xl(){return{destroy:void 0,resource:void 0}}function yf(){return qe().memoizedState}function Wl(e,n,t,a){var i=sn();a=a===void 0?null:a,de.flags|=e,i.memoizedState=ja(1|n,Xl(),t,a)}function Mi(e,n,t,a){var i=qe();a=a===void 0?null:a;var l=i.memoizedState.inst;Oe!==null&&a!==null&&qu(a,Oe.memoizedState.deps)?i.memoizedState=ja(n,l,t,a):(de.flags|=e,i.memoizedState=ja(1|n,l,t,a))}function mf(e,n){Wl(8390656,8,e,n)}function vf(e,n){Mi(2048,8,e,n)}function gf(e,n){return Mi(4,2,e,n)}function Sf(e,n){return Mi(4,4,e,n)}function Ef(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Af(e,n,t){t=t!=null?t.concat([e]):null,Mi(4,4,Ef.bind(null,n,e),t)}function Fu(){}function Rf(e,n){var t=qe();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&qu(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function Tf(e,n){var t=qe();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&qu(n,a[1]))return a[0];if(a=e(),$t){dn(!0);try{e()}finally{dn(!1)}}return t.memoizedState=[a,n],a}function $u(e,n,t){return t===void 0||(Et&1073741824)!==0?e.memoizedState=n:(e.memoizedState=t,e=xd(),de.lanes|=e,Nt|=e,t)}function _f(e,n,t,a){return pn(t,n)?t:Ha.current!==null?(e=$u(e,t,a),pn(e,n)||(We=!0),e):(Et&42)===0?(We=!0,e.memoizedState=t):(e=xd(),de.lanes|=e,Nt|=e,n)}function Of(e,n,t,a,i){var l=P.p;P.p=l!==0&&8>l?l:8;var s=w.T,f={};w.T=f,tc(e,!1,n,t);try{var g=i(),N=w.S;if(N!==null&&N(f,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var L=Fp(g,a);wi(e,n,L,gn(e))}else wi(e,n,a,gn(e))}catch(j){wi(e,n,{then:function(){},status:"rejected",reason:j},gn())}finally{P.p=l,w.T=s}}function ah(){}function ec(e,n,t,a){if(e.tag!==5)throw Error(c(476));var i=xf(e).queue;Of(e,i,n,Y,t===null?ah:function(){return Nf(e),t(a)})}function xf(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:Y},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:at,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Nf(e){var n=xf(e).next.queue;wi(e,n,{},gn())}function nc(){return nn(Zi)}function Df(){return qe().memoizedState}function Cf(){return qe().memoizedState}function ih(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=gn();e=gt(t);var a=St(n,e,t);a!==null&&(Sn(a,n,t),Oi(a,n,t)),n={cache:Mu()},e.payload=n;return}n=n.return}}function lh(e,n,t){var a=gn();t={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Pl(e)?wf(n,t):(t=Eu(e,n,t,a),t!==null&&(Sn(t,e,a),Lf(t,n,a)))}function Mf(e,n,t){var a=gn();wi(e,n,t,a)}function wi(e,n,t,a){var i={lane:a,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))wf(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var s=n.lastRenderedState,f=l(s,t);if(i.hasEagerState=!0,i.eagerState=f,pn(f,s))return Cl(e,n,i,0),we===null&&Dl(),!1}catch{}finally{}if(t=Eu(e,n,i,a),t!==null)return Sn(t,e,a),Lf(t,n,a),!0}return!1}function tc(e,n,t,a){if(a={lane:2,revertLane:Hc(),action:a,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(n)throw Error(c(479))}else n=Eu(e,t,a,2),n!==null&&Sn(n,e,2)}function Pl(e){var n=e.alternate;return e===de||n!==null&&n===de}function wf(e,n){Ua=ql=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Lf(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,zs(e,t)}}var Kl={readContext:nn,use:Il,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke},Hf={readContext:nn,use:Il,useCallback:function(e,n){return sn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:mf,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Wl(4194308,4,Ef.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Wl(4194308,4,e,n)},useInsertionEffect:function(e,n){Wl(4,2,e,n)},useMemo:function(e,n){var t=sn();n=n===void 0?null:n;var a=e();if($t){dn(!0);try{e()}finally{dn(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=sn();if(t!==void 0){var i=t(n);if($t){dn(!0);try{t(n)}finally{dn(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=lh.bind(null,de,e),[a.memoizedState,e]},useRef:function(e){var n=sn();return e={current:e},n.memoizedState=e},useState:function(e){e=Zu(e);var n=e.queue,t=Mf.bind(null,de,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:Fu,useDeferredValue:function(e,n){var t=sn();return $u(t,e,n)},useTransition:function(){var e=Zu(!1);return e=Of.bind(null,de,e.queue,!0,!1),sn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=de,i=sn();if(Ee){if(t===void 0)throw Error(c(407));t=t()}else{if(t=n(),we===null)throw Error(c(349));(ve&124)!==0||ef(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,mf(tf.bind(null,a,l,e),[e]),a.flags|=2048,ja(9,Xl(),nf.bind(null,a,l,t,n),null),t},useId:function(){var e=sn(),n=we.identifierPrefix;if(Ee){var t=et,a=$n;t=(a&~(1<<32-bn(a)-1)).toString(32)+t,n="«"+n+"R"+t,t=Yl++,0<t&&(n+="H"+t.toString(32)),n+="»"}else t=$p++,n="«"+n+"r"+t.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:nc,useFormState:df,useActionState:df,useOptimistic:function(e){var n=sn();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=tc.bind(null,de,!0,t),t.dispatch=n,[e,n]},useMemoCache:Pu,useCacheRefresh:function(){return sn().memoizedState=ih.bind(null,de)}},Uf={readContext:nn,use:Il,useCallback:Rf,useContext:nn,useEffect:vf,useImperativeHandle:Af,useInsertionEffect:gf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Vl,useRef:yf,useState:function(){return Vl(at)},useDebugValue:Fu,useDeferredValue:function(e,n){var t=qe();return _f(t,Oe.memoizedState,e,n)},useTransition:function(){var e=Vl(at)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Ci(e),n]},useSyncExternalStore:$o,useId:Df,useHostTransitionStatus:nc,useFormState:bf,useActionState:bf,useOptimistic:function(e,n){var t=qe();return rf(t,Oe,e,n)},useMemoCache:Pu,useCacheRefresh:Cf},rh={readContext:nn,use:Il,useCallback:Rf,useContext:nn,useEffect:vf,useImperativeHandle:Af,useInsertionEffect:gf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Qu,useRef:yf,useState:function(){return Qu(at)},useDebugValue:Fu,useDeferredValue:function(e,n){var t=qe();return Oe===null?$u(t,e,n):_f(t,Oe.memoizedState,e,n)},useTransition:function(){var e=Qu(at)[0],n=qe().memoizedState;return[typeof e=="boolean"?e:Ci(e),n]},useSyncExternalStore:$o,useId:Df,useHostTransitionStatus:nc,useFormState:hf,useActionState:hf,useOptimistic:function(e,n){var t=qe();return Oe!==null?rf(t,Oe,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:Pu,useCacheRefresh:Cf},ka=null,Li=0;function Ql(e){var n=Li;return Li+=1,ka===null&&(ka=[]),Xo(ka,e,n)}function Hi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Zl(e,n){throw n.$$typeof===_?Error(c(525)):(e=Object.prototype.toString.call(n),Error(c(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Bf(e){var n=e._init;return n(e._payload)}function jf(e){function n(T,R){if(e){var x=T.deletions;x===null?(T.deletions=[R],T.flags|=16):x.push(R)}}function t(T,R){if(!e)return null;for(;R!==null;)n(T,R),R=R.sibling;return null}function a(T){for(var R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function i(T,R){return T=Fn(T,R),T.index=0,T.sibling=null,T}function l(T,R,x){return T.index=x,e?(x=T.alternate,x!==null?(x=x.index,x<R?(T.flags|=67108866,R):x):(T.flags|=67108866,R)):(T.flags|=1048576,R)}function s(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function f(T,R,x,U){return R===null||R.tag!==6?(R=Ru(x,T.mode,U),R.return=T,R):(R=i(R,x),R.return=T,R)}function g(T,R,x,U){var Q=x.type;return Q===I?L(T,R,x.props.children,U,x.key):R!==null&&(R.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===W&&Bf(Q)===R.type)?(R=i(R,x.props),Hi(R,x),R.return=T,R):(R=wl(x.type,x.key,x.props,null,T.mode,U),Hi(R,x),R.return=T,R)}function N(T,R,x,U){return R===null||R.tag!==4||R.stateNode.containerInfo!==x.containerInfo||R.stateNode.implementation!==x.implementation?(R=Tu(x,T.mode,U),R.return=T,R):(R=i(R,x.children||[]),R.return=T,R)}function L(T,R,x,U,Q){return R===null||R.tag!==7?(R=Xt(x,T.mode,U,Q),R.return=T,R):(R=i(R,x),R.return=T,R)}function j(T,R,x){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return R=Ru(""+R,T.mode,x),R.return=T,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case M:return x=wl(R.type,R.key,R.props,null,T.mode,x),Hi(x,R),x.return=T,x;case k:return R=Tu(R,T.mode,x),R.return=T,R;case W:var U=R._init;return R=U(R._payload),j(T,R,x)}if(Ae(R)||Re(R))return R=Xt(R,T.mode,x,null),R.return=T,R;if(typeof R.then=="function")return j(T,Ql(R),x);if(R.$$typeof===te)return j(T,Bl(T,R),x);Zl(T,R)}return null}function D(T,R,x,U){var Q=R!==null?R.key:null;if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return Q!==null?null:f(T,R,""+x,U);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case M:return x.key===Q?g(T,R,x,U):null;case k:return x.key===Q?N(T,R,x,U):null;case W:return Q=x._init,x=Q(x._payload),D(T,R,x,U)}if(Ae(x)||Re(x))return Q!==null?null:L(T,R,x,U,null);if(typeof x.then=="function")return D(T,R,Ql(x),U);if(x.$$typeof===te)return D(T,R,Bl(T,x),U);Zl(T,x)}return null}function C(T,R,x,U,Q){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return T=T.get(x)||null,f(R,T,""+U,Q);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case M:return T=T.get(U.key===null?x:U.key)||null,g(R,T,U,Q);case k:return T=T.get(U.key===null?x:U.key)||null,N(R,T,U,Q);case W:var be=U._init;return U=be(U._payload),C(T,R,x,U,Q)}if(Ae(U)||Re(U))return T=T.get(x)||null,L(R,T,U,Q,null);if(typeof U.then=="function")return C(T,R,x,Ql(U),Q);if(U.$$typeof===te)return C(T,R,x,Bl(R,U),Q);Zl(R,U)}return null}function ue(T,R,x,U){for(var Q=null,be=null,$=R,re=R=0,Ke=null;$!==null&&re<x.length;re++){$.index>re?(Ke=$,$=null):Ke=$.sibling;var Se=D(T,$,x[re],U);if(Se===null){$===null&&($=Ke);break}e&&$&&Se.alternate===null&&n(T,$),R=l(Se,R,re),be===null?Q=Se:be.sibling=Se,be=Se,$=Ke}if(re===x.length)return t(T,$),Ee&&Pt(T,re),Q;if($===null){for(;re<x.length;re++)$=j(T,x[re],U),$!==null&&(R=l($,R,re),be===null?Q=$:be.sibling=$,be=$);return Ee&&Pt(T,re),Q}for($=a($);re<x.length;re++)Ke=C($,T,re,x[re],U),Ke!==null&&(e&&Ke.alternate!==null&&$.delete(Ke.key===null?re:Ke.key),R=l(Ke,R,re),be===null?Q=Ke:be.sibling=Ke,be=Ke);return e&&$.forEach(function(jt){return n(T,jt)}),Ee&&Pt(T,re),Q}function ie(T,R,x,U){if(x==null)throw Error(c(151));for(var Q=null,be=null,$=R,re=R=0,Ke=null,Se=x.next();$!==null&&!Se.done;re++,Se=x.next()){$.index>re?(Ke=$,$=null):Ke=$.sibling;var jt=D(T,$,Se.value,U);if(jt===null){$===null&&($=Ke);break}e&&$&&jt.alternate===null&&n(T,$),R=l(jt,R,re),be===null?Q=jt:be.sibling=jt,be=jt,$=Ke}if(Se.done)return t(T,$),Ee&&Pt(T,re),Q;if($===null){for(;!Se.done;re++,Se=x.next())Se=j(T,Se.value,U),Se!==null&&(R=l(Se,R,re),be===null?Q=Se:be.sibling=Se,be=Se);return Ee&&Pt(T,re),Q}for($=a($);!Se.done;re++,Se=x.next())Se=C($,T,re,Se.value,U),Se!==null&&(e&&Se.alternate!==null&&$.delete(Se.key===null?re:Se.key),R=l(Se,R,re),be===null?Q=Se:be.sibling=Se,be=Se);return e&&$.forEach(function(uy){return n(T,uy)}),Ee&&Pt(T,re),Q}function Ne(T,R,x,U){if(typeof x=="object"&&x!==null&&x.type===I&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case M:e:{for(var Q=x.key;R!==null;){if(R.key===Q){if(Q=x.type,Q===I){if(R.tag===7){t(T,R.sibling),U=i(R,x.props.children),U.return=T,T=U;break e}}else if(R.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===W&&Bf(Q)===R.type){t(T,R.sibling),U=i(R,x.props),Hi(U,x),U.return=T,T=U;break e}t(T,R);break}else n(T,R);R=R.sibling}x.type===I?(U=Xt(x.props.children,T.mode,U,x.key),U.return=T,T=U):(U=wl(x.type,x.key,x.props,null,T.mode,U),Hi(U,x),U.return=T,T=U)}return s(T);case k:e:{for(Q=x.key;R!==null;){if(R.key===Q)if(R.tag===4&&R.stateNode.containerInfo===x.containerInfo&&R.stateNode.implementation===x.implementation){t(T,R.sibling),U=i(R,x.children||[]),U.return=T,T=U;break e}else{t(T,R);break}else n(T,R);R=R.sibling}U=Tu(x,T.mode,U),U.return=T,T=U}return s(T);case W:return Q=x._init,x=Q(x._payload),Ne(T,R,x,U)}if(Ae(x))return ue(T,R,x,U);if(Re(x)){if(Q=Re(x),typeof Q!="function")throw Error(c(150));return x=Q.call(x),ie(T,R,x,U)}if(typeof x.then=="function")return Ne(T,R,Ql(x),U);if(x.$$typeof===te)return Ne(T,R,Bl(T,x),U);Zl(T,x)}return typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint"?(x=""+x,R!==null&&R.tag===6?(t(T,R.sibling),U=i(R,x),U.return=T,T=U):(t(T,R),U=Ru(x,T.mode,U),U.return=T,T=U),s(T)):t(T,R)}return function(T,R,x,U){try{Li=0;var Q=Ne(T,R,x,U);return ka=null,Q}catch($){if($===Ti||$===kl)throw $;var be=hn(29,$,null,T.mode);return be.lanes=U,be.return=T,be}finally{}}}var za=jf(!0),kf=jf(!1),Cn=B(null),Wn=null;function At(e){var n=e.alternate;G(Ie,Ie.current&1),G(Cn,e),Wn===null&&(n===null||Ha.current!==null||n.memoizedState!==null)&&(Wn=e)}function zf(e){if(e.tag===22){if(G(Ie,Ie.current),G(Cn,e),Wn===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Wn=e)}}else Rt()}function Rt(){G(Ie,Ie.current),G(Cn,Cn.current)}function it(e){V(Cn),Wn===e&&(Wn=null),V(Ie)}var Ie=B(0);function Jl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Wc(t)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function ac(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:A({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ic={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=gn(),i=gt(a);i.payload=n,t!=null&&(i.callback=t),n=St(e,i,a),n!==null&&(Sn(n,e,a),Oi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=gn(),i=gt(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=St(e,i,a),n!==null&&(Sn(n,e,a),Oi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=gn(),a=gt(t);a.tag=2,n!=null&&(a.callback=n),n=St(e,a,t),n!==null&&(Sn(n,e,t),Oi(n,e,t))}};function Gf(e,n,t,a,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,s):n.prototype&&n.prototype.isPureReactComponent?!yi(t,a)||!yi(i,l):!0}function qf(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&ic.enqueueReplaceState(n,n.state,null)}function ea(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=A({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Yf(e){Fl(e)}function If(e){console.error(e)}function Vf(e){Fl(e)}function $l(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Xf(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lc(e,n,t){return t=gt(t),t.tag=3,t.payload={element:null},t.callback=function(){$l(e,n)},t}function Wf(e){return e=gt(e),e.tag=3,e}function Pf(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){Xf(n,t,a)}}var s=t.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Xf(n,t,a),typeof i!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function uh(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&Ei(n,t,i,!0),t=Cn.current,t!==null){switch(t.tag){case 13:return Wn===null?Dc():t.alternate===null&&je===0&&(je=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===Hu?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),Mc(e,a,i)),!1;case 22:return t.flags|=65536,a===Hu?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),Mc(e,a,i)),!1}throw Error(c(435,t.tag))}return Mc(e,a,i),Dc(),!1}if(Ee)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==xu&&(e=Error(c(422),{cause:a}),Si(On(e,t)))):(a!==xu&&(n=Error(c(423),{cause:a}),Si(On(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=On(a,t),i=lc(e.stateNode,a,i),ju(e,i),je!==4&&(je=2)),!1;var l=Error(c(520),{cause:a});if(l=On(l,t),qi===null?qi=[l]:qi.push(l),je!==4&&(je=2),n===null)return!0;a=On(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=lc(t.stateNode,a,e),ju(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(Dt===null||!Dt.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=Wf(i),Pf(i,e,t,a),ju(t,i),!1}t=t.return}while(t!==null);return!1}var Kf=Error(c(461)),We=!1;function Ze(e,n,t,a){n.child=e===null?kf(n,null,t,a):za(n,e.child,t,a)}function Qf(e,n,t,a,i){t=t.render;var l=n.ref;if("ref"in a){var s={};for(var f in a)f!=="ref"&&(s[f]=a[f])}else s=a;return Jt(n),a=Yu(e,n,t,s,l,i),f=Iu(),e!==null&&!We?(Vu(e,n,i),lt(e,n,i)):(Ee&&f&&_u(n),n.flags|=1,Ze(e,n,a,i),n.child)}function Zf(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!Au(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,Jf(e,n,l,a,i)):(e=wl(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!bc(e,i)){var s=l.memoizedProps;if(t=t.compare,t=t!==null?t:yi,t(s,a)&&e.ref===n.ref)return lt(e,n,i)}return n.flags|=1,e=Fn(l,a),e.ref=n.ref,e.return=n,n.child=e}function Jf(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(yi(l,a)&&e.ref===n.ref)if(We=!1,n.pendingProps=a=l,bc(e,i))(e.flags&131072)!==0&&(We=!0);else return n.lanes=e.lanes,lt(e,n,i)}return rc(e,n,t,a,i)}function Ff(e,n,t){var a=n.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden"){if((n.flags&128)!==0){if(a=l!==null?l.baseLanes|t:t,e!==null){for(i=n.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;n.childLanes=l&~a}else n.childLanes=0,n.child=null;return $f(e,n,a,t)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&jl(n,l!==null?l.cachePool:null),l!==null?Zo(n,l):zu(),zf(n);else return n.lanes=n.childLanes=536870912,$f(e,n,l!==null?l.baseLanes|t:t,t)}else l!==null?(jl(n,l.cachePool),Zo(n,l),Rt(),n.memoizedState=null):(e!==null&&jl(n,null),zu(),Rt());return Ze(e,n,i,t),n.child}function $f(e,n,t,a){var i=Lu();return i=i===null?null:{parent:Ye._currentValue,pool:i},n.memoizedState={baseLanes:t,cachePool:i},e!==null&&jl(n,null),zu(),zf(n),e!==null&&Ei(e,n,a,!0),null}function er(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(c(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function rc(e,n,t,a,i){return Jt(n),t=Yu(e,n,t,a,void 0,i),a=Iu(),e!==null&&!We?(Vu(e,n,i),lt(e,n,i)):(Ee&&a&&_u(n),n.flags|=1,Ze(e,n,t,i),n.child)}function ed(e,n,t,a,i,l){return Jt(n),n.updateQueue=null,t=Fo(n,a,t,i),Jo(e),a=Iu(),e!==null&&!We?(Vu(e,n,l),lt(e,n,l)):(Ee&&a&&_u(n),n.flags|=1,Ze(e,n,t,l),n.child)}function nd(e,n,t,a,i){if(Jt(n),n.stateNode===null){var l=Da,s=t.contextType;typeof s=="object"&&s!==null&&(l=nn(s)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ic,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},Uu(n),s=t.contextType,l.context=typeof s=="object"&&s!==null?nn(s):Da,l.state=n.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(ac(n,t,s,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&ic.enqueueReplaceState(l,l.state,null),Ni(n,a,l,i),xi(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var f=n.memoizedProps,g=ea(t,f);l.props=g;var N=l.context,L=t.contextType;s=Da,typeof L=="object"&&L!==null&&(s=nn(L));var j=t.getDerivedStateFromProps;L=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,L||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(f||N!==s)&&qf(n,l,a,s),vt=!1;var D=n.memoizedState;l.state=D,Ni(n,a,l,i),xi(),N=n.memoizedState,f||D!==N||vt?(typeof j=="function"&&(ac(n,t,j,a),N=n.memoizedState),(g=vt||Gf(n,t,g,a,D,N,s))?(L||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=N),l.props=a,l.state=N,l.context=s,a=g):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Bu(e,n),s=n.memoizedProps,L=ea(t,s),l.props=L,j=n.pendingProps,D=l.context,N=t.contextType,g=Da,typeof N=="object"&&N!==null&&(g=nn(N)),f=t.getDerivedStateFromProps,(N=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==j||D!==g)&&qf(n,l,a,g),vt=!1,D=n.memoizedState,l.state=D,Ni(n,a,l,i),xi();var C=n.memoizedState;s!==j||D!==C||vt||e!==null&&e.dependencies!==null&&Ul(e.dependencies)?(typeof f=="function"&&(ac(n,t,f,a),C=n.memoizedState),(L=vt||Gf(n,t,L,a,D,C,g)||e!==null&&e.dependencies!==null&&Ul(e.dependencies))?(N||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,C,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,C,g)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=C),l.props=a,l.state=C,l.context=g,a=L):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,er(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=za(n,e.child,null,i),n.child=za(n,null,t,i)):Ze(e,n,t,i),n.memoizedState=l.state,e=n.child):e=lt(e,n,i),e}function td(e,n,t,a){return gi(),n.flags|=256,Ze(e,n,t,a),n.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cc(e){return{baseLanes:e,cachePool:Yo()}}function sc(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=Mn),e}function ad(e,n,t){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),s&&(i=!0,n.flags&=-129),s=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ee){if(i?At(n):Rt(),Ee){var f=Be,g;if(g=f){e:{for(g=f,f=Xn;g.nodeType!==8;){if(!f){f=null;break e}if(g=Gn(g.nextSibling),g===null){f=null;break e}}f=g}f!==null?(n.memoizedState={dehydrated:f,treeContext:Wt!==null?{id:$n,overflow:et}:null,retryLane:536870912,hydrationErrors:null},g=hn(18,null,null,0),g.stateNode=f,g.return=n,n.child=g,rn=n,Be=null,g=!0):g=!1}g||Qt(n)}if(f=n.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return Wc(f)?n.lanes=32:n.lanes=536870912,null;it(n)}return f=a.children,a=a.fallback,i?(Rt(),i=n.mode,f=nr({mode:"hidden",children:f},i),a=Xt(a,i,t,null),f.return=n,a.return=n,f.sibling=a,n.child=f,i=n.child,i.memoizedState=cc(t),i.childLanes=sc(e,s,t),n.memoizedState=uc,a):(At(n),oc(n,f))}if(g=e.memoizedState,g!==null&&(f=g.dehydrated,f!==null)){if(l)n.flags&256?(At(n),n.flags&=-257,n=fc(e,n,t)):n.memoizedState!==null?(Rt(),n.child=e.child,n.flags|=128,n=null):(Rt(),i=a.fallback,f=n.mode,a=nr({mode:"visible",children:a.children},f),i=Xt(i,f,t,null),i.flags|=2,a.return=n,i.return=n,a.sibling=i,n.child=a,za(n,e.child,null,t),a=n.child,a.memoizedState=cc(t),a.childLanes=sc(e,s,t),n.memoizedState=uc,n=i);else if(At(n),Wc(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var N=s.dgst;s=N,a=Error(c(419)),a.stack="",a.digest=s,Si({value:a,source:null,stack:null}),n=fc(e,n,t)}else if(We||Ei(e,n,t,!1),s=(t&e.childLanes)!==0,We||s){if(s=we,s!==null&&(a=t&-t,a=(a&42)!==0?1:Pr(a),a=(a&(s.suspendedLanes|t))!==0?0:a,a!==0&&a!==g.retryLane))throw g.retryLane=a,Na(e,a),Sn(s,e,a),Kf;f.data==="$?"||Dc(),n=fc(e,n,t)}else f.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Be=Gn(f.nextSibling),rn=n,Ee=!0,Kt=null,Xn=!1,e!==null&&(Nn[Dn++]=$n,Nn[Dn++]=et,Nn[Dn++]=Wt,$n=e.id,et=e.overflow,Wt=n),n=oc(n,a.children),n.flags|=4096);return n}return i?(Rt(),i=a.fallback,f=n.mode,g=e.child,N=g.sibling,a=Fn(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,N!==null?i=Fn(N,i):(i=Xt(i,f,t,null),i.flags|=2),i.return=n,a.return=n,a.sibling=i,n.child=a,a=i,i=n.child,f=e.child.memoizedState,f===null?f=cc(t):(g=f.cachePool,g!==null?(N=Ye._currentValue,g=g.parent!==N?{parent:N,pool:N}:g):g=Yo(),f={baseLanes:f.baseLanes|t,cachePool:g}),i.memoizedState=f,i.childLanes=sc(e,s,t),n.memoizedState=uc,a):(At(n),t=e.child,e=t.sibling,t=Fn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(s=n.deletions,s===null?(n.deletions=[e],n.flags|=16):s.push(e)),n.child=t,n.memoizedState=null,t)}function oc(e,n){return n=nr({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function nr(e,n){return e=hn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function fc(e,n,t){return za(n,e.child,null,t),e=oc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function id(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Du(e.return,n,t)}function dc(e,n,t,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=t,l.tailMode=i)}function ld(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;if(Ze(e,n,a.children,t),a=Ie.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&id(e,t,n);else if(e.tag===19)id(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}switch(G(Ie,a),i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&Jl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),dc(n,!1,i,t,l);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&Jl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}dc(n,!0,t,null,l);break;case"together":dc(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function lt(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Nt|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(Ei(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(c(153));if(n.child!==null){for(e=n.child,t=Fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function bc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ul(e)))}function ch(e,n,t){switch(n.tag){case 3:ge(n,n.stateNode.containerInfo),mt(n,Ye,e.memoizedState.cache),gi();break;case 27:case 5:Bn(n);break;case 4:ge(n,n.stateNode.containerInfo);break;case 10:mt(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(At(n),n.flags|=128,null):(t&n.child.childLanes)!==0?ad(e,n,t):(At(n),e=lt(e,n,t),e!==null?e.sibling:null);At(n);break;case 19:var i=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(Ei(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return ld(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Ie,Ie.current),a)break;return null;case 22:case 23:return n.lanes=0,Ff(e,n,t);case 24:mt(n,Ye,e.memoizedState.cache)}return lt(e,n,t)}function rd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)We=!0;else{if(!bc(e,t)&&(n.flags&128)===0)return We=!1,ch(e,n,t);We=(e.flags&131072)!==0}else We=!1,Ee&&(n.flags&1048576)!==0&&Uo(n,Hl,n.index);switch(n.lanes=0,n.tag){case 16:e:{e=n.pendingProps;var a=n.elementType,i=a._init;if(a=i(a._payload),n.type=a,typeof a=="function")Au(a)?(e=ea(a,e),n.tag=1,n=nd(null,n,a,e,t)):(n.tag=0,n=rc(null,n,a,e,t));else{if(a!=null){if(i=a.$$typeof,i===J){n.tag=11,n=Qf(null,n,a,e,t);break e}else if(i===H){n.tag=14,n=Zf(null,n,a,e,t);break e}}throw n=le(a)||a,Error(c(306,n,""))}}return n;case 0:return rc(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=ea(a,n.pendingProps),nd(e,n,a,i,t);case 3:e:{if(ge(n,n.stateNode.containerInfo),e===null)throw Error(c(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,Bu(e,n),Ni(n,a,null,t);var s=n.memoizedState;if(a=s.cache,mt(n,Ye,a),a!==l.cache&&Cu(n,[Ye],t,!0),xi(),a=s.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:s.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=td(e,n,a,t);break e}else if(a!==i){i=On(Error(c(424)),n),Si(i),n=td(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Be=Gn(e.firstChild),rn=n,Ee=!0,Kt=null,Xn=!0,t=kf(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(gi(),a===i){n=lt(e,n,t);break e}Ze(e,n,a,t)}n=n.child}return n;case 26:return er(e,n),e===null?(t=ob(n.type,null,n.pendingProps,null))?n.memoizedState=t:Ee||(t=n.type,e=n.pendingProps,a=hr(ee.current).createElement(t),a[en]=n,a[un]=e,Fe(a,t,e),Xe(a),n.stateNode=a):n.memoizedState=ob(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Bn(n),e===null&&Ee&&(a=n.stateNode=ub(n.type,n.pendingProps,ee.current),rn=n,Xn=!0,i=Be,wt(n.type)?(Pc=i,Be=Gn(a.firstChild)):Be=i),Ze(e,n,n.pendingProps.children,t),er(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ee&&((i=a=Be)&&(a=Bh(a,n.type,n.pendingProps,Xn),a!==null?(n.stateNode=a,rn=n,Be=Gn(a.firstChild),Xn=!1,i=!0):i=!1),i||Qt(n)),Bn(n),i=n.type,l=n.pendingProps,s=e!==null?e.memoizedProps:null,a=l.children,Ic(i,l)?a=null:s!==null&&Ic(i,s)&&(n.flags|=32),n.memoizedState!==null&&(i=Yu(e,n,eh,null,null,t),Zi._currentValue=i),er(e,n),Ze(e,n,a,t),n.child;case 6:return e===null&&Ee&&((e=t=Be)&&(t=jh(t,n.pendingProps,Xn),t!==null?(n.stateNode=t,rn=n,Be=null,e=!0):e=!1),e||Qt(n)),null;case 13:return ad(e,n,t);case 4:return ge(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=za(n,null,a,t):Ze(e,n,a,t),n.child;case 11:return Qf(e,n,n.type,n.pendingProps,t);case 7:return Ze(e,n,n.pendingProps,t),n.child;case 8:return Ze(e,n,n.pendingProps.children,t),n.child;case 12:return Ze(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,mt(n,n.type,a.value),Ze(e,n,a.children,t),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Jt(n),i=nn(i),a=a(i),n.flags|=1,Ze(e,n,a,t),n.child;case 14:return Zf(e,n,n.type,n.pendingProps,t);case 15:return Jf(e,n,n.type,n.pendingProps,t);case 19:return ld(e,n,t);case 31:return a=n.pendingProps,t=n.mode,a={mode:a.mode,children:a.children},e===null?(t=nr(a,t),t.ref=n.ref,n.child=t,t.return=n,n=t):(t=Fn(e.child,a),t.ref=n.ref,n.child=t,t.return=n,n=t),n;case 22:return Ff(e,n,t);case 24:return Jt(n),a=nn(Ye),e===null?(i=Lu(),i===null&&(i=we,l=Mu(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),n.memoizedState={parent:a,cache:i},Uu(n),mt(n,Ye,i)):((e.lanes&t)!==0&&(Bu(e,n),Ni(n,null,null,t),xi()),i=e.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),mt(n,Ye,a)):(a=l.cache,mt(n,Ye,a),a!==i.cache&&Cu(n,[Ye],t,!0))),Ze(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}function rt(e){e.flags|=4}function ud(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hb(n)){if(n=Cn.current,n!==null&&((ve&4194048)===ve?Wn!==null:(ve&62914560)!==ve&&(ve&536870912)===0||n!==Wn))throw _i=Hu,Io;e.flags|=8192}}function tr(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?js():536870912,e.lanes|=n,Ia|=n)}function Ui(e,n){if(!Ee)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function He(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function sh(e,n,t){var a=n.pendingProps;switch(Ou(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(n),null;case 1:return He(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),tt(Ye),Qe(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(vi(n)?rt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ko())),He(n),null;case 26:return t=n.memoizedState,e===null?(rt(n),t!==null?(He(n),ud(n,t)):(He(n),n.flags&=-16777217)):t?t!==e.memoizedState?(rt(n),He(n),ud(n,t)):(He(n),n.flags&=-16777217):(e.memoizedProps!==a&&rt(n),He(n),n.flags&=-16777217),null;case 27:Vn(n),t=ee.current;var i=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==a&&rt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return He(n),null}e=F.current,vi(n)?Bo(n):(e=ub(i,a,t),n.stateNode=e,rt(n))}return He(n),null;case 5:if(Vn(n),t=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&rt(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return He(n),null}if(e=F.current,vi(n))Bo(n);else{switch(i=hr(ee.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?i.createElement("select",{is:a.is}):i.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?i.createElement(t,{is:a.is}):i.createElement(t)}}e[en]=n,e[un]=a;e:for(i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}n.stateNode=e;e:switch(Fe(e,t,a),t){case"button":case"input":case"select":case"textarea":e=!!a.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&rt(n)}}return He(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&rt(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(e=ee.current,vi(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=rn,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[en]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||eb(e.nodeValue,t)),e||Qt(n)}else e=hr(e).createTextNode(a),e[en]=n,n.stateNode=e}return He(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=vi(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(c(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(c(317));i[en]=n}else gi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;He(n),i=!1}else i=ko(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(it(n),n):(it(n),null)}if(it(n),(n.flags&128)!==0)return n.lanes=t,n;if(t=a!==null,e=e!==null&&e.memoizedState!==null,t){a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool);var l=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)}return t!==e&&t&&(n.child.flags|=8192),tr(n,n.updateQueue),He(n),null;case 4:return Qe(),e===null&&kc(n.stateNode.containerInfo),He(n),null;case 10:return tt(n.type),He(n),null;case 19:if(V(Ie),i=n.memoizedState,i===null)return He(n),null;if(a=(n.flags&128)!==0,l=i.rendering,l===null)if(a)Ui(i,!1);else{if(je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=Jl(e),l!==null){for(n.flags|=128,Ui(i,!1),e=l.updateQueue,n.updateQueue=e,tr(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)Ho(t,e),t=t.sibling;return G(Ie,Ie.current&1|2),n.child}e=e.sibling}i.tail!==null&&Rn()>lr&&(n.flags|=128,a=!0,Ui(i,!1),n.lanes=4194304)}else{if(!a)if(e=Jl(l),e!==null){if(n.flags|=128,a=!0,e=e.updateQueue,n.updateQueue=e,tr(n,e),Ui(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Ee)return He(n),null}else 2*Rn()-i.renderingStartTime>lr&&t!==536870912&&(n.flags|=128,a=!0,Ui(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(e=i.last,e!==null?e.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=Rn(),n.sibling=null,e=Ie.current,G(Ie,a?e&1|2:e&1),n):(He(n),null);case 22:case 23:return it(n),Gu(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(He(n),n.subtreeFlags&6&&(n.flags|=8192)):He(n),t=n.updateQueue,t!==null&&tr(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&V(Ft),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),tt(Ye),He(n),null;case 25:return null;case 30:return null}throw Error(c(156,n.tag))}function oh(e,n){switch(Ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tt(Ye),Qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Vn(n),null;case 13:if(it(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(c(340));gi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(Ie),null;case 4:return Qe(),null;case 10:return tt(n.type),null;case 22:case 23:return it(n),Gu(),e!==null&&V(Ft),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return tt(Ye),null;case 25:return null;default:return null}}function cd(e,n){switch(Ou(n),n.tag){case 3:tt(Ye),Qe();break;case 26:case 27:case 5:Vn(n);break;case 4:Qe();break;case 13:it(n);break;case 19:V(Ie);break;case 10:tt(n.type);break;case 22:case 23:it(n),Gu(),e!==null&&V(Ft);break;case 24:tt(Ye)}}function Bi(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var l=t.create,s=t.inst;a=l(),s.destroy=a}t=t.next}while(t!==i)}}catch(f){Me(n,n.return,f)}}function Tt(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var s=a.inst,f=s.destroy;if(f!==void 0){s.destroy=void 0,i=n;var g=t,N=f;try{N()}catch(L){Me(i,g,L)}}}a=a.next}while(a!==l)}}catch(L){Me(n,n.return,L)}}function sd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Qo(n,t)}catch(a){Me(e,e.return,a)}}}function od(e,n,t){t.props=ea(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){Me(e,n,a)}}function ji(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){Me(e,n,i)}}function Pn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){Me(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){Me(e,n,i)}else t.current=null}function fd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){Me(e,e.return,i)}}function pc(e,n,t){try{var a=e.stateNode;Mh(a,e.type,t,n),a[un]=n}catch(i){Me(e,e.return,i)}}function dd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wt(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yc(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=pr));else if(a!==4&&(a===27&&wt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(yc(e,n,t),e=e.sibling;e!==null;)yc(e,n,t),e=e.sibling}function ar(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&wt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(ar(e,n,t),e=e.sibling;e!==null;)ar(e,n,t),e=e.sibling}function bd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Fe(n,a,t),n[en]=e,n[un]=t}catch(l){Me(e,e.return,l)}}var ut=!1,ze=!1,mc=!1,pd=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function fh(e,n){if(e=e.containerInfo,qc=Er,e=To(e),hu(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var s=0,f=-1,g=-1,N=0,L=0,j=e,D=null;n:for(;;){for(var C;j!==t||i!==0&&j.nodeType!==3||(f=s+i),j!==l||a!==0&&j.nodeType!==3||(g=s+a),j.nodeType===3&&(s+=j.nodeValue.length),(C=j.firstChild)!==null;)D=j,j=C;for(;;){if(j===e)break n;if(D===t&&++N===i&&(f=s),D===l&&++L===a&&(g=s),(C=j.nextSibling)!==null)break;j=D,D=j.parentNode}j=C}t=f===-1||g===-1?null:{start:f,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yc={focusedElem:e,selectionRange:t},Er=!1,Pe=n;Pe!==null;)if(n=Pe,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Pe=e;else for(;Pe!==null;){switch(n=Pe,l=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,i=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var ue=ea(t.type,i,t.elementType===t.type);e=a.getSnapshotBeforeUpdate(ue,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Me(t,t.return,ie)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Xc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(c(163))}if(e=n.sibling,e!==null){e.return=n.return,Pe=e;break}Pe=n.return}}function hd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:_t(e,t),a&4&&Bi(5,t);break;case 1:if(_t(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(s){Me(t,t.return,s)}else{var i=ea(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(s){Me(t,t.return,s)}}a&64&&sd(t),a&512&&ji(t,t.return);break;case 3:if(_t(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Qo(e,n)}catch(s){Me(t,t.return,s)}}break;case 27:n===null&&a&4&&bd(t);case 26:case 5:_t(e,t),n===null&&a&4&&fd(t),a&512&&ji(t,t.return);break;case 12:_t(e,t);break;case 13:_t(e,t),a&4&&vd(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Sh.bind(null,t),kh(e,t))));break;case 22:if(a=t.memoizedState!==null||ut,!a){n=n!==null&&n.memoizedState!==null||ze,i=ut;var l=ze;ut=a,(ze=n)&&!l?Ot(e,t,(t.subtreeFlags&8772)!==0):_t(e,t),ut=i,ze=l}break;case 30:break;default:_t(e,t)}}function yd(e){var n=e.alternate;n!==null&&(e.alternate=null,yd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Zr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Le=null,on=!1;function ct(e,n,t){for(t=t.child;t!==null;)md(e,n,t),t=t.sibling}function md(e,n,t){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(pt,t)}catch{}switch(t.tag){case 26:ze||Pn(t,n),ct(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ze||Pn(t,n);var a=Le,i=on;wt(t.type)&&(Le=t.stateNode,on=!1),ct(e,n,t),Wi(t.stateNode),Le=a,on=i;break;case 5:ze||Pn(t,n);case 6:if(a=Le,i=on,Le=null,ct(e,n,t),Le=a,on=i,Le!==null)if(on)try{(Le.nodeType===9?Le.body:Le.nodeName==="HTML"?Le.ownerDocument.body:Le).removeChild(t.stateNode)}catch(l){Me(t,n,l)}else try{Le.removeChild(t.stateNode)}catch(l){Me(t,n,l)}break;case 18:Le!==null&&(on?(e=Le,lb(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),el(e)):lb(Le,t.stateNode));break;case 4:a=Le,i=on,Le=t.stateNode.containerInfo,on=!0,ct(e,n,t),Le=a,on=i;break;case 0:case 11:case 14:case 15:ze||Tt(2,t,n),ze||Tt(4,t,n),ct(e,n,t);break;case 1:ze||(Pn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&od(t,n,a)),ct(e,n,t);break;case 21:ct(e,n,t);break;case 22:ze=(a=ze)||t.memoizedState!==null,ct(e,n,t),ze=a;break;default:ct(e,n,t)}}function vd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{el(e)}catch(t){Me(n,n.return,t)}}function dh(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pd),n;default:throw Error(c(435,e.tag))}}function vc(e,n){var t=dh(e);n.forEach(function(a){var i=Eh.bind(null,e,a);t.has(a)||(t.add(a),a.then(i,i))})}function yn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],l=e,s=n,f=s;e:for(;f!==null;){switch(f.tag){case 27:if(wt(f.type)){Le=f.stateNode,on=!1;break e}break;case 5:Le=f.stateNode,on=!1;break e;case 3:case 4:Le=f.stateNode.containerInfo,on=!0;break e}f=f.return}if(Le===null)throw Error(c(160));md(l,s,i),Le=null,on=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)gd(n,e),n=n.sibling}var zn=null;function gd(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(n,e),mn(e),a&4&&(Tt(3,e,e.return),Bi(3,e),Tt(5,e,e.return));break;case 1:yn(n,e),mn(e),a&512&&(ze||t===null||Pn(t,t.return)),a&64&&ut&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=zn;if(yn(n,e),mn(e),a&512&&(ze||t===null||Pn(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ui]||l[en]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Fe(l,a,t),l[en]=e,Xe(l),a=l;break e;case"link":var s=bb("link","href",i).get(a+(t.href||""));if(s){for(var f=0;f<s.length;f++)if(l=s[f],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){s.splice(f,1);break n}}l=i.createElement(a),Fe(l,a,t),i.head.appendChild(l);break;case"meta":if(s=bb("meta","content",i).get(a+(t.content||""))){for(f=0;f<s.length;f++)if(l=s[f],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){s.splice(f,1);break n}}l=i.createElement(a),Fe(l,a,t),i.head.appendChild(l);break;default:throw Error(c(468,a))}l[en]=e,Xe(l),a=l}e.stateNode=a}else pb(i,e.type,e.stateNode);else e.stateNode=db(i,a,e.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?pb(i,e.type,e.stateNode):db(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&pc(e,e.memoizedProps,t.memoizedProps)}break;case 27:yn(n,e),mn(e),a&512&&(ze||t===null||Pn(t,t.return)),t!==null&&a&4&&pc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(yn(n,e),mn(e),a&512&&(ze||t===null||Pn(t,t.return)),e.flags&32){i=e.stateNode;try{Ea(i,"")}catch(C){Me(e,e.return,C)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,pc(e,i,t!==null?t.memoizedProps:i)),a&1024&&(mc=!0);break;case 6:if(yn(n,e),mn(e),a&4){if(e.stateNode===null)throw Error(c(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(C){Me(e,e.return,C)}}break;case 3:if(vr=null,i=zn,zn=yr(n.containerInfo),yn(n,e),zn=i,mn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{el(n.containerInfo)}catch(C){Me(e,e.return,C)}mc&&(mc=!1,Sd(e));break;case 4:a=zn,zn=yr(e.stateNode.containerInfo),yn(n,e),mn(e),zn=a;break;case 12:yn(n,e),mn(e);break;case 13:yn(n,e),mn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Tc=Rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vc(e,a)));break;case 22:i=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,N=ut,L=ze;if(ut=N||i,ze=L||g,yn(n,e),ze=L,ut=N,mn(e),a&8192)e:for(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(t===null||g||ut||ze||na(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(l=g.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{f=g.stateNode;var j=g.memoizedProps.style,D=j!=null&&j.hasOwnProperty("display")?j.display:null;f.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(C){Me(g,g.return,C)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(C){Me(g,g.return,C)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,vc(e,t))));break;case 19:yn(n,e),mn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vc(e,a)));break;case 30:break;case 21:break;default:yn(n,e),mn(e)}}function mn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(dd(a)){t=a;break}a=a.return}if(t==null)throw Error(c(160));switch(t.tag){case 27:var i=t.stateNode,l=hc(e);ar(e,l,i);break;case 5:var s=t.stateNode;t.flags&32&&(Ea(s,""),t.flags&=-33);var f=hc(e);ar(e,f,s);break;case 3:case 4:var g=t.stateNode.containerInfo,N=hc(e);yc(e,N,g);break;default:throw Error(c(161))}}catch(L){Me(e,e.return,L)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Sd(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Sd(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _t(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hd(e,n.alternate,n),n=n.sibling}function na(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Tt(4,n,n.return),na(n);break;case 1:Pn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&od(n,n.return,t),na(n);break;case 27:Wi(n.stateNode);case 26:case 5:Pn(n,n.return),na(n);break;case 22:n.memoizedState===null&&na(n);break;case 30:na(n);break;default:na(n)}e=e.sibling}}function Ot(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=e,l=n,s=l.flags;switch(l.tag){case 0:case 11:case 15:Ot(i,l,t),Bi(4,l);break;case 1:if(Ot(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){Me(a,a.return,N)}if(a=l,i=a.updateQueue,i!==null){var f=a.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Ko(g[i],f)}catch(N){Me(a,a.return,N)}}t&&s&64&&sd(l),ji(l,l.return);break;case 27:bd(l);case 26:case 5:Ot(i,l,t),t&&a===null&&s&4&&fd(l),ji(l,l.return);break;case 12:Ot(i,l,t);break;case 13:Ot(i,l,t),t&&s&4&&vd(i,l);break;case 22:l.memoizedState===null&&Ot(i,l,t),ji(l,l.return);break;case 30:break;default:Ot(i,l,t)}n=n.sibling}}function gc(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Ai(t))}function Sc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ai(e))}function Kn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Ed(e,n,t,a),n=n.sibling}function Ed(e,n,t,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Kn(e,n,t,a),i&2048&&Bi(9,n);break;case 1:Kn(e,n,t,a);break;case 3:Kn(e,n,t,a),i&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ai(e)));break;case 12:if(i&2048){Kn(e,n,t,a),e=n.stateNode;try{var l=n.memoizedProps,s=l.id,f=l.onPostCommit;typeof f=="function"&&f(s,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){Me(n,n.return,g)}}else Kn(e,n,t,a);break;case 13:Kn(e,n,t,a);break;case 23:break;case 22:l=n.stateNode,s=n.alternate,n.memoizedState!==null?l._visibility&2?Kn(e,n,t,a):ki(e,n):l._visibility&2?Kn(e,n,t,a):(l._visibility|=2,Ga(e,n,t,a,(n.subtreeFlags&10256)!==0)),i&2048&&gc(s,n);break;case 24:Kn(e,n,t,a),i&2048&&Sc(n.alternate,n);break;default:Kn(e,n,t,a)}}function Ga(e,n,t,a,i){for(i=i&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var l=e,s=n,f=t,g=a,N=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(l,s,f,g,i),Bi(8,s);break;case 23:break;case 22:var L=s.stateNode;s.memoizedState!==null?L._visibility&2?Ga(l,s,f,g,i):ki(l,s):(L._visibility|=2,Ga(l,s,f,g,i)),i&&N&2048&&gc(s.alternate,s);break;case 24:Ga(l,s,f,g,i),i&&N&2048&&Sc(s.alternate,s);break;default:Ga(l,s,f,g,i)}n=n.sibling}}function ki(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:ki(t,a),i&2048&&gc(a.alternate,a);break;case 24:ki(t,a),i&2048&&Sc(a.alternate,a);break;default:ki(t,a)}n=n.sibling}}var zi=8192;function qa(e){if(e.subtreeFlags&zi)for(e=e.child;e!==null;)Ad(e),e=e.sibling}function Ad(e){switch(e.tag){case 26:qa(e),e.flags&zi&&e.memoizedState!==null&&Jh(zn,e.memoizedState,e.memoizedProps);break;case 5:qa(e);break;case 3:case 4:var n=zn;zn=yr(e.stateNode.containerInfo),qa(e),zn=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=zi,zi=16777216,qa(e),zi=n):qa(e));break;default:qa(e)}}function Rd(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Gi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Pe=a,_d(a,e)}Rd(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Td(e),e=e.sibling}function Td(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&Tt(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ir(e)):Gi(e);break;default:Gi(e)}}function ir(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];Pe=a,_d(a,e)}Rd(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Tt(8,n,n.return),ir(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ir(n));break;default:ir(n)}e=e.sibling}}function _d(e,n){for(;Pe!==null;){var t=Pe;switch(t.tag){case 0:case 11:case 15:Tt(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ai(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,Pe=a;else e:for(t=e;Pe!==null;){a=Pe;var i=a.sibling,l=a.return;if(yd(a),a===t){Pe=null;break e}if(i!==null){i.return=l,Pe=i;break e}Pe=l}}}var bh={getCacheForType:function(e){var n=nn(Ye),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t}},ph=typeof WeakMap=="function"?WeakMap:Map,Te=0,we=null,he=null,ve=0,_e=0,vn=null,xt=!1,Ya=!1,Ec=!1,st=0,je=0,Nt=0,ta=0,Ac=0,Mn=0,Ia=0,qi=null,fn=null,Rc=!1,Tc=0,lr=1/0,rr=null,Dt=null,Je=0,Ct=null,Va=null,Xa=0,_c=0,Oc=null,Od=null,Yi=0,xc=null;function gn(){if((Te&2)!==0&&ve!==0)return ve&-ve;if(w.T!==null){var e=wa;return e!==0?e:Hc()}return Gs()}function xd(){Mn===0&&(Mn=(ve&536870912)===0||Ee?Bs():536870912);var e=Cn.current;return e!==null&&(e.flags|=32),Mn}function Sn(e,n,t){(e===we&&(_e===2||_e===9)||e.cancelPendingCommit!==null)&&(Wa(e,0),Mt(e,ve,Mn,!1)),ri(e,t),((Te&2)===0||e!==we)&&(e===we&&((Te&2)===0&&(ta|=t),je===4&&Mt(e,ve,Mn,!1)),Qn(e))}function Nd(e,n,t){if((Te&6)!==0)throw Error(c(327));var a=!t&&(n&124)===0&&(n&e.expiredLanes)===0||li(e,n),i=a?mh(e,n):Cc(e,n,!0),l=a;do{if(i===0){Ya&&!a&&Mt(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!hh(t)){i=Cc(e,n,!1),l=!1;continue}if(i===2){if(l=n,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){n=s;e:{var f=e;i=qi;var g=f.current.memoizedState.isDehydrated;if(g&&(Wa(f,s).flags|=256),s=Cc(f,s,!1),s!==2){if(Ec&&!g){f.errorRecoveryDisabledLanes|=l,ta|=l,i=4;break e}l=fn,fn=i,l!==null&&(fn===null?fn=l:fn.push.apply(fn,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){Wa(e,0),Mt(e,n,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(c(345));case 4:if((n&4194048)!==n)break;case 6:Mt(a,n,Mn,!xt);break e;case 2:fn=null;break;case 3:case 5:break;default:throw Error(c(329))}if((n&62914560)===n&&(i=Tc+300-Rn(),10<i)){if(Mt(a,n,Mn,!xt),ml(a,0,!0)!==0)break e;a.timeoutHandle=ab(Dd.bind(null,a,t,fn,rr,Rc,n,Mn,ta,Ia,xt,l,2,-0,0),i);break e}Dd(a,t,fn,rr,Rc,n,Mn,ta,Ia,xt,l,0,-0,0)}}break}while(!0);Qn(e)}function Dd(e,n,t,a,i,l,s,f,g,N,L,j,D,C){if(e.timeoutHandle=-1,j=n.subtreeFlags,(j&8192||(j&16785408)===16785408)&&(Qi={stylesheets:null,count:0,unsuspend:Zh},Ad(n),j=Fh(),j!==null)){e.cancelPendingCommit=j(Bd.bind(null,e,n,l,t,a,i,s,f,g,L,1,D,C)),Mt(e,l,s,!N);return}Bd(e,n,l,t,a,i,s,f,g)}function hh(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!pn(l(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Mt(e,n,t,a){n&=~Ac,n&=~ta,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var l=31-bn(i),s=1<<l;a[l]=-1,i&=~s}t!==0&&ks(e,t,n)}function ur(){return(Te&6)===0?(Ii(0),!1):!0}function Nc(){if(he!==null){if(_e===0)var e=he.return;else e=he,nt=Zt=null,Xu(e),ka=null,Li=0,e=he;for(;e!==null;)cd(e.alternate,e),e=e.return;he=null}}function Wa(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Lh(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),Nc(),we=e,he=t=Fn(e.current,null),ve=n,_e=0,vn=null,xt=!1,Ya=li(e,n),Ec=!1,Ia=Mn=Ac=ta=Nt=je=0,fn=qi=null,Rc=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var i=31-bn(a),l=1<<i;n|=e[i],a&=~l}return st=n,Dl(),t}function Cd(e,n){de=null,w.H=Kl,n===Ti||n===kl?(n=Wo(),_e=3):n===Io?(n=Wo(),_e=4):_e=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,vn=n,he===null&&(je=1,$l(e,On(n,e.current)))}function Md(){var e=w.H;return w.H=Kl,e===null?Kl:e}function wd(){var e=w.A;return w.A=bh,e}function Dc(){je=4,xt||(ve&4194048)!==ve&&Cn.current!==null||(Ya=!0),(Nt&134217727)===0&&(ta&134217727)===0||we===null||Mt(we,ve,Mn,!1)}function Cc(e,n,t){var a=Te;Te|=2;var i=Md(),l=wd();(we!==e||ve!==n)&&(rr=null,Wa(e,n)),n=!1;var s=je;e:do try{if(_e!==0&&he!==null){var f=he,g=vn;switch(_e){case 8:Nc(),s=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var N=_e;if(_e=0,vn=null,Pa(e,f,g,N),t&&Ya){s=0;break e}break;default:N=_e,_e=0,vn=null,Pa(e,f,g,N)}}yh(),s=je;break}catch(L){Cd(e,L)}while(!0);return n&&e.shellSuspendCounter++,nt=Zt=null,Te=a,w.H=i,w.A=l,he===null&&(we=null,ve=0,Dl()),s}function yh(){for(;he!==null;)Ld(he)}function mh(e,n){var t=Te;Te|=2;var a=Md(),i=wd();we!==e||ve!==n?(rr=null,lr=Rn()+500,Wa(e,n)):Ya=li(e,n);e:do try{if(_e!==0&&he!==null){n=he;var l=vn;n:switch(_e){case 1:_e=0,vn=null,Pa(e,n,l,1);break;case 2:case 9:if(Vo(l)){_e=0,vn=null,Hd(n);break}n=function(){_e!==2&&_e!==9||we!==e||(_e=7),Qn(e)},l.then(n,n);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:Vo(l)?(_e=0,vn=null,Hd(n)):(_e=0,vn=null,Pa(e,n,l,7));break;case 5:var s=null;switch(he.tag){case 26:s=he.memoizedState;case 5:case 27:var f=he;if(!s||hb(s)){_e=0,vn=null;var g=f.sibling;if(g!==null)he=g;else{var N=f.return;N!==null?(he=N,cr(N)):he=null}break n}}_e=0,vn=null,Pa(e,n,l,5);break;case 6:_e=0,vn=null,Pa(e,n,l,6);break;case 8:Nc(),je=6;break e;default:throw Error(c(462))}}vh();break}catch(L){Cd(e,L)}while(!0);return nt=Zt=null,w.H=a,w.A=i,Te=t,he!==null?0:(we=null,ve=0,Dl(),je)}function vh(){for(;he!==null&&!ii();)Ld(he)}function Ld(e){var n=rd(e.alternate,e,st);e.memoizedProps=e.pendingProps,n===null?cr(e):he=n}function Hd(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=ed(t,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=ed(t,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Xu(n);default:cd(t,n),n=he=Ho(n,st),n=rd(t,n,st)}e.memoizedProps=e.pendingProps,n===null?cr(e):he=n}function Pa(e,n,t,a){nt=Zt=null,Xu(n),ka=null,Li=0;var i=n.return;try{if(uh(e,i,n,t,ve)){je=1,$l(e,On(t,e.current)),he=null;return}}catch(l){if(i!==null)throw he=i,l;je=1,$l(e,On(t,e.current)),he=null;return}n.flags&32768?(Ee||a===1?e=!0:Ya||(ve&536870912)!==0?e=!1:(xt=e=!0,(a===2||a===9||a===3||a===6)&&(a=Cn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Ud(n,e)):cr(n)}function cr(e){var n=e;do{if((n.flags&32768)!==0){Ud(n,xt);return}e=n.return;var t=sh(n.alternate,n,st);if(t!==null){he=t;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);je===0&&(je=5)}function Ud(e,n){do{var t=oh(e.alternate,e);if(t!==null){t.flags&=32767,he=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=t}while(e!==null);je=6,he=null}function Bd(e,n,t,a,i,l,s,f,g){e.cancelPendingCommit=null;do sr();while(Je!==0);if((Te&6)!==0)throw Error(c(327));if(n!==null){if(n===e.current)throw Error(c(177));if(l=n.lanes|n.childLanes,l|=Su,Z0(e,t,l,s,f,g),e===we&&(he=we=null,ve=0),Va=n,Ct=e,Xa=t,_c=l,Oc=i,Od=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ah(Ce,function(){return qd(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=w.T,w.T=null,i=P.p,P.p=2,s=Te,Te|=4;try{fh(e,n,t)}finally{Te=s,P.p=i,w.T=a}}Je=1,jd(),kd(),zd()}}function jd(){if(Je===1){Je=0;var e=Ct,n=Va,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=w.T,w.T=null;var a=P.p;P.p=2;var i=Te;Te|=4;try{gd(n,e);var l=Yc,s=To(e.containerInfo),f=l.focusedElem,g=l.selectionRange;if(s!==f&&f&&f.ownerDocument&&Ro(f.ownerDocument.documentElement,f)){if(g!==null&&hu(f)){var N=g.start,L=g.end;if(L===void 0&&(L=N),"selectionStart"in f)f.selectionStart=N,f.selectionEnd=Math.min(L,f.value.length);else{var j=f.ownerDocument||document,D=j&&j.defaultView||window;if(D.getSelection){var C=D.getSelection(),ue=f.textContent.length,ie=Math.min(g.start,ue),Ne=g.end===void 0?ie:Math.min(g.end,ue);!C.extend&&ie>Ne&&(s=Ne,Ne=ie,ie=s);var T=Ao(f,ie),R=Ao(f,Ne);if(T&&R&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==R.node||C.focusOffset!==R.offset)){var x=j.createRange();x.setStart(T.node,T.offset),C.removeAllRanges(),ie>Ne?(C.addRange(x),C.extend(R.node,R.offset)):(x.setEnd(R.node,R.offset),C.addRange(x))}}}}for(j=[],C=f;C=C.parentNode;)C.nodeType===1&&j.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof f.focus=="function"&&f.focus(),f=0;f<j.length;f++){var U=j[f];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}Er=!!qc,Yc=qc=null}finally{Te=i,P.p=a,w.T=t}}e.current=n,Je=2}}function kd(){if(Je===2){Je=0;var e=Ct,n=Va,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=w.T,w.T=null;var a=P.p;P.p=2;var i=Te;Te|=4;try{hd(e,n.alternate,n)}finally{Te=i,P.p=a,w.T=t}}Je=3}}function zd(){if(Je===4||Je===3){Je=0,Vr();var e=Ct,n=Va,t=Xa,a=Od;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Je=5:(Je=0,Va=Ct=null,Gd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(Dt=null),Kr(t),n=n.stateNode,Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(pt,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=w.T,i=P.p,P.p=2,w.T=null;try{for(var l=e.onRecoverableError,s=0;s<a.length;s++){var f=a[s];l(f.value,{componentStack:f.stack})}}finally{w.T=n,P.p=i}}(Xa&3)!==0&&sr(),Qn(e),i=e.pendingLanes,(t&4194090)!==0&&(i&42)!==0?e===xc?Yi++:(Yi=0,xc=e):Yi=0,Ii(0)}}function Gd(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ai(n)))}function sr(e){return jd(),kd(),zd(),qd()}function qd(){if(Je!==5)return!1;var e=Ct,n=_c;_c=0;var t=Kr(Xa),a=w.T,i=P.p;try{P.p=32>t?32:t,w.T=null,t=Oc,Oc=null;var l=Ct,s=Xa;if(Je=0,Va=Ct=null,Xa=0,(Te&6)!==0)throw Error(c(331));var f=Te;if(Te|=4,Td(l.current),Ed(l,l.current,s,t),Te=f,Ii(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(pt,l)}catch{}return!0}finally{P.p=i,w.T=a,Gd(e,n)}}function Yd(e,n,t){n=On(t,n),n=lc(e.stateNode,n,2),e=St(e,n,2),e!==null&&(ri(e,2),Qn(e))}function Me(e,n,t){if(e.tag===3)Yd(e,e,t);else for(;n!==null;){if(n.tag===3){Yd(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dt===null||!Dt.has(a))){e=On(t,e),t=Wf(2),a=St(n,t,2),a!==null&&(Pf(t,a,n,e),ri(a,2),Qn(a));break}}n=n.return}}function Mc(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new ph;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(Ec=!0,i.add(t),e=gh.bind(null,e,n,t),n.then(e,e))}function gh(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,we===e&&(ve&t)===t&&(je===4||je===3&&(ve&62914560)===ve&&300>Rn()-Tc?(Te&2)===0&&Wa(e,0):Ac|=t,Ia===ve&&(Ia=0)),Qn(e)}function Id(e,n){n===0&&(n=js()),e=Na(e,n),e!==null&&(ri(e,n),Qn(e))}function Sh(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Id(e,t)}function Eh(e,n){var t=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),Id(e,t)}function Ah(e,n){return da(e,n)}var or=null,Ka=null,wc=!1,fr=!1,Lc=!1,aa=0;function Qn(e){e!==Ka&&e.next===null&&(Ka===null?or=Ka=e:Ka=Ka.next=e),fr=!0,wc||(wc=!0,Th())}function Ii(e,n){if(!Lc&&fr){Lc=!0;do for(var t=!1,a=or;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var s=a.suspendedLanes,f=a.pingedLanes;l=(1<<31-bn(42|e)+1)-1,l&=i&~(s&~f),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Pd(a,l))}else l=ve,l=ml(a,a===we?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||li(a,l)||(t=!0,Pd(a,l));a=a.next}while(t);Lc=!1}}function Rh(){Vd()}function Vd(){fr=wc=!1;var e=0;aa!==0&&(wh()&&(e=aa),aa=0);for(var n=Rn(),t=null,a=or;a!==null;){var i=a.next,l=Xd(a,n);l===0?(a.next=null,t===null?or=i:t.next=i,i===null&&(Ka=t)):(t=a,(e!==0||(l&3)!==0)&&(fr=!0)),a=i}Ii(e)}function Xd(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-bn(l),f=1<<s,g=i[s];g===-1?((f&t)===0||(f&a)!==0)&&(i[s]=Q0(f,n)):g<=n&&(e.expiredLanes|=f),l&=~f}if(n=we,t=ve,t=ml(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(_e===2||_e===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&ba(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||li(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&ba(a),Kr(t)){case 2:case 8:t=pe;break;case 32:t=Ce;break;case 268435456:t=jn;break;default:t=Ce}return a=Wd.bind(null,e),t=da(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&ba(a),e.callbackPriority=2,e.callbackNode=null,2}function Wd(e,n){if(Je!==0&&Je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(sr()&&e.callbackNode!==t)return null;var a=ve;return a=ml(e,e===we?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Nd(e,a,n),Xd(e,Rn()),e.callbackNode!=null&&e.callbackNode===t?Wd.bind(null,e):null)}function Pd(e,n){if(sr())return null;Nd(e,n,!0)}function Th(){Hh(function(){(Te&6)!==0?da(pl,Rh):Vd()})}function Hc(){return aa===0&&(aa=Bs()),aa}function Kd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Al(""+e)}function Qd(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function _h(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var l=Kd((i[un]||null).action),s=a.submitter;s&&(n=(n=s[un]||null)?Kd(n.formAction):s.getAttribute("formAction"),n!==null&&(l=n,s=null));var f=new Ol("action","action",null,a,i);e.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(aa!==0){var g=s?Qd(i,s):new FormData(i);ec(t,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(f.preventDefault(),g=s?Qd(i,s):new FormData(i),ec(t,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var Uc=0;Uc<gu.length;Uc++){var Bc=gu[Uc],Oh=Bc.toLowerCase(),xh=Bc[0].toUpperCase()+Bc.slice(1);kn(Oh,"on"+xh)}kn(xo,"onAnimationEnd"),kn(No,"onAnimationIteration"),kn(Do,"onAnimationStart"),kn("dblclick","onDoubleClick"),kn("focusin","onFocus"),kn("focusout","onBlur"),kn(Vp,"onTransitionRun"),kn(Xp,"onTransitionStart"),kn(Wp,"onTransitionCancel"),kn(Co,"onTransitionEnd"),va("onMouseEnter",["mouseout","mouseover"]),va("onMouseLeave",["mouseout","mouseover"]),va("onPointerEnter",["pointerout","pointerover"]),va("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vi));function Zd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var s=a.length-1;0<=s;s--){var f=a[s],g=f.instance,N=f.currentTarget;if(f=f.listener,g!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=N;try{l(i)}catch(L){Fl(L)}i.currentTarget=null,l=g}else for(s=0;s<a.length;s++){if(f=a[s],g=f.instance,N=f.currentTarget,f=f.listener,g!==l&&i.isPropagationStopped())break e;l=f,i.currentTarget=N;try{l(i)}catch(L){Fl(L)}i.currentTarget=null,l=g}}}}function ye(e,n){var t=n[Qr];t===void 0&&(t=n[Qr]=new Set);var a=e+"__bubble";t.has(a)||(Jd(n,e,2,!1),t.add(a))}function jc(e,n,t){var a=0;n&&(a|=4),Jd(t,e,a,n)}var dr="_reactListening"+Math.random().toString(36).slice(2);function kc(e){if(!e[dr]){e[dr]=!0,Ys.forEach(function(t){t!=="selectionchange"&&(Nh.has(t)||jc(t,!1,e),jc(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[dr]||(n[dr]=!0,jc("selectionchange",!1,n))}}function Jd(e,n,t,a){switch(Eb(n)){case 2:var i=ny;break;case 8:i=ty;break;default:i=Fc}t=i.bind(null,n,t,e),i=void 0,!ru||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function zc(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var f=a.stateNode.containerInfo;if(f===i)break;if(s===4)for(s=a.return;s!==null;){var g=s.tag;if((g===3||g===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;f!==null;){if(s=ha(f),s===null)return;if(g=s.tag,g===5||g===6||g===26||g===27){a=l=s;continue e}f=f.parentNode}}a=a.return}to(function(){var N=l,L=iu(t),j=[];e:{var D=Mo.get(e);if(D!==void 0){var C=Ol,ue=e;switch(e){case"keypress":if(Tl(t)===0)break e;case"keydown":case"keyup":C=Ap;break;case"focusin":ue="focus",C=ou;break;case"focusout":ue="blur",C=ou;break;case"beforeblur":case"afterblur":C=ou;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=lo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=op;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=_p;break;case xo:case No:case Do:C=bp;break;case Co:C=xp;break;case"scroll":case"scrollend":C=cp;break;case"wheel":C=Dp;break;case"copy":case"cut":case"paste":C=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=uo;break;case"toggle":case"beforetoggle":C=Mp}var ie=(n&4)!==0,Ne=!ie&&(e==="scroll"||e==="scrollend"),T=ie?D!==null?D+"Capture":null:D;ie=[];for(var R=N,x;R!==null;){var U=R;if(x=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||x===null||T===null||(U=si(R,T),U!=null&&ie.push(Xi(R,U,x))),Ne)break;R=R.return}0<ie.length&&(D=new C(D,ue,null,t,L),j.push({event:D,listeners:ie}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",D&&t!==au&&(ue=t.relatedTarget||t.fromElement)&&(ha(ue)||ue[pa]))break e;if((C||D)&&(D=L.window===L?L:(D=L.ownerDocument)?D.defaultView||D.parentWindow:window,C?(ue=t.relatedTarget||t.toElement,C=N,ue=ue?ha(ue):null,ue!==null&&(Ne=h(ue),ie=ue.tag,ue!==Ne||ie!==5&&ie!==27&&ie!==6)&&(ue=null)):(C=null,ue=N),C!==ue)){if(ie=lo,U="onMouseLeave",T="onMouseEnter",R="mouse",(e==="pointerout"||e==="pointerover")&&(ie=uo,U="onPointerLeave",T="onPointerEnter",R="pointer"),Ne=C==null?D:ci(C),x=ue==null?D:ci(ue),D=new ie(U,R+"leave",C,t,L),D.target=Ne,D.relatedTarget=x,U=null,ha(L)===N&&(ie=new ie(T,R+"enter",ue,t,L),ie.target=x,ie.relatedTarget=Ne,U=ie),Ne=U,C&&ue)n:{for(ie=C,T=ue,R=0,x=ie;x;x=Qa(x))R++;for(x=0,U=T;U;U=Qa(U))x++;for(;0<R-x;)ie=Qa(ie),R--;for(;0<x-R;)T=Qa(T),x--;for(;R--;){if(ie===T||T!==null&&ie===T.alternate)break n;ie=Qa(ie),T=Qa(T)}ie=null}else ie=null;C!==null&&Fd(j,D,C,ie,!1),ue!==null&&Ne!==null&&Fd(j,Ne,ue,ie,!0)}}e:{if(D=N?ci(N):window,C=D.nodeName&&D.nodeName.toLowerCase(),C==="select"||C==="input"&&D.type==="file")var Q=yo;else if(po(D))if(mo)Q=qp;else{Q=zp;var be=kp}else C=D.nodeName,!C||C.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?N&&tu(N.elementType)&&(Q=yo):Q=Gp;if(Q&&(Q=Q(e,N))){ho(j,Q,t,L);break e}be&&be(e,D,N),e==="focusout"&&N&&D.type==="number"&&N.memoizedProps.value!=null&&nu(D,"number",D.value)}switch(be=N?ci(N):window,e){case"focusin":(po(be)||be.contentEditable==="true")&&(_a=be,yu=N,mi=null);break;case"focusout":mi=yu=_a=null;break;case"mousedown":mu=!0;break;case"contextmenu":case"mouseup":case"dragend":mu=!1,_o(j,t,L);break;case"selectionchange":if(Ip)break;case"keydown":case"keyup":_o(j,t,L)}var $;if(du)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else Ta?fo(e,t)&&(re="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(re="onCompositionStart");re&&(co&&t.locale!=="ko"&&(Ta||re!=="onCompositionStart"?re==="onCompositionEnd"&&Ta&&($=ao()):(yt=L,uu="value"in yt?yt.value:yt.textContent,Ta=!0)),be=br(N,re),0<be.length&&(re=new ro(re,e,null,t,L),j.push({event:re,listeners:be}),$?re.data=$:($=bo(t),$!==null&&(re.data=$)))),($=Lp?Hp(e,t):Up(e,t))&&(re=br(N,"onBeforeInput"),0<re.length&&(be=new ro("onBeforeInput","beforeinput",null,t,L),j.push({event:be,listeners:re}),be.data=$)),_h(j,e,N,t,L)}Zd(j,n)})}function Xi(e,n,t){return{instance:e,listener:n,currentTarget:t}}function br(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=si(e,t),i!=null&&a.unshift(Xi(e,i,l)),i=si(e,n),i!=null&&a.push(Xi(e,i,l))),e.tag===3)return a;e=e.return}return[]}function Qa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Fd(e,n,t,a,i){for(var l=n._reactName,s=[];t!==null&&t!==a;){var f=t,g=f.alternate,N=f.stateNode;if(f=f.tag,g!==null&&g===a)break;f!==5&&f!==26&&f!==27||N===null||(g=N,i?(N=si(t,l),N!=null&&s.unshift(Xi(t,N,g))):i||(N=si(t,l),N!=null&&s.push(Xi(t,N,g)))),t=t.return}s.length!==0&&e.push({event:n,listeners:s})}var Dh=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Dh,`
`).replace(Ch,"")}function eb(e,n){return n=$d(n),$d(e)===n}function pr(){}function xe(e,n,t,a,i,l){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&Ea(e,""+a);break;case"className":gl(e,"class",a);break;case"tabIndex":gl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":gl(e,t,a);break;case"style":eo(e,a,l);break;case"data":if(n!=="object"){gl(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Al(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&xe(e,n,"name",i.name,i,null),xe(e,n,"formEncType",i.formEncType,i,null),xe(e,n,"formMethod",i.formMethod,i,null),xe(e,n,"formTarget",i.formTarget,i,null)):(xe(e,n,"encType",i.encType,i,null),xe(e,n,"method",i.method,i,null),xe(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=Al(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=pr);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=Al(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":ye("beforetoggle",e),ye("toggle",e),vl(e,"popover",a);break;case"xlinkActuate":Zn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Zn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Zn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Zn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Zn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Zn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Zn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Zn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Zn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":vl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=rp.get(t)||t,vl(e,t,a))}}function Gc(e,n,t,a,i,l){switch(t){case"style":eo(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(c(60));e.innerHTML=t}}break;case"children":typeof a=="string"?Ea(e,a):(typeof a=="number"||typeof a=="bigint")&&Ea(e,""+a);break;case"onScroll":a!=null&&ye("scroll",e);break;case"onScrollEnd":a!=null&&ye("scrollend",e);break;case"onClick":a!=null&&(e.onclick=pr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Is.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),n=t.slice(2,i?t.length-7:void 0),l=e[un]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):vl(e,t,a)}}}function Fe(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var s=t[l];if(s!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:xe(e,n,l,s,t,null)}}i&&xe(e,n,"srcSet",t.srcSet,t,null),a&&xe(e,n,"src",t.src,t,null);return;case"input":ye("invalid",e);var f=l=s=i=null,g=null,N=null;for(a in t)if(t.hasOwnProperty(a)){var L=t[a];if(L!=null)switch(a){case"name":i=L;break;case"type":s=L;break;case"checked":g=L;break;case"defaultChecked":N=L;break;case"value":l=L;break;case"defaultValue":f=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(c(137,n));break;default:xe(e,n,a,L,t,null)}}Zs(e,l,f,g,N,s,i,!1),Sl(e);return;case"select":ye("invalid",e),a=s=l=null;for(i in t)if(t.hasOwnProperty(i)&&(f=t[i],f!=null))switch(i){case"value":l=f;break;case"defaultValue":s=f;break;case"multiple":a=f;default:xe(e,n,i,f,t,null)}n=l,t=s,e.multiple=!!a,n!=null?Sa(e,!!a,n,!1):t!=null&&Sa(e,!!a,t,!0);return;case"textarea":ye("invalid",e),l=i=a=null;for(s in t)if(t.hasOwnProperty(s)&&(f=t[s],f!=null))switch(s){case"value":a=f;break;case"defaultValue":i=f;break;case"children":l=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:xe(e,n,s,f,t,null)}Fs(e,a,i,l),Sl(e);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(a=t[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xe(e,n,g,a,t,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(a=0;a<Vi.length;a++)ye(Vi[a],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in t)if(t.hasOwnProperty(N)&&(a=t[N],a!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:xe(e,n,N,a,t,null)}return;default:if(tu(n)){for(L in t)t.hasOwnProperty(L)&&(a=t[L],a!==void 0&&Gc(e,n,L,a,t,void 0));return}}for(f in t)t.hasOwnProperty(f)&&(a=t[f],a!=null&&xe(e,n,f,a,t,null))}function Mh(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,f=null,g=null,N=null,L=null;for(C in t){var j=t[C];if(t.hasOwnProperty(C)&&j!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":g=j;default:a.hasOwnProperty(C)||xe(e,n,C,null,a,j)}}for(var D in a){var C=a[D];if(j=t[D],a.hasOwnProperty(D)&&(C!=null||j!=null))switch(D){case"type":l=C;break;case"name":i=C;break;case"checked":N=C;break;case"defaultChecked":L=C;break;case"value":s=C;break;case"defaultValue":f=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(c(137,n));break;default:C!==j&&xe(e,n,D,C,a,j)}}eu(e,s,f,g,N,L,l,i);return;case"select":C=s=f=D=null;for(l in t)if(g=t[l],t.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":C=g;default:a.hasOwnProperty(l)||xe(e,n,l,null,a,g)}for(i in a)if(l=a[i],g=t[i],a.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":D=l;break;case"defaultValue":f=l;break;case"multiple":s=l;default:l!==g&&xe(e,n,i,l,a,g)}n=f,t=s,a=C,D!=null?Sa(e,!!t,D,!1):!!a!=!!t&&(n!=null?Sa(e,!!t,n,!0):Sa(e,!!t,t?[]:"",!1));return;case"textarea":C=D=null;for(f in t)if(i=t[f],t.hasOwnProperty(f)&&i!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:xe(e,n,f,null,a,i)}for(s in a)if(i=a[s],l=t[s],a.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":D=i;break;case"defaultValue":C=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(c(91));break;default:i!==l&&xe(e,n,s,i,a,l)}Js(e,D,C);return;case"option":for(var ue in t)if(D=t[ue],t.hasOwnProperty(ue)&&D!=null&&!a.hasOwnProperty(ue))switch(ue){case"selected":e.selected=!1;break;default:xe(e,n,ue,null,a,D)}for(g in a)if(D=a[g],C=t[g],a.hasOwnProperty(g)&&D!==C&&(D!=null||C!=null))switch(g){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:xe(e,n,g,D,a,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in t)D=t[ie],t.hasOwnProperty(ie)&&D!=null&&!a.hasOwnProperty(ie)&&xe(e,n,ie,null,a,D);for(N in a)if(D=a[N],C=t[N],a.hasOwnProperty(N)&&D!==C&&(D!=null||C!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,n));break;default:xe(e,n,N,D,a,C)}return;default:if(tu(n)){for(var Ne in t)D=t[Ne],t.hasOwnProperty(Ne)&&D!==void 0&&!a.hasOwnProperty(Ne)&&Gc(e,n,Ne,void 0,a,D);for(L in a)D=a[L],C=t[L],!a.hasOwnProperty(L)||D===C||D===void 0&&C===void 0||Gc(e,n,L,D,a,C);return}}for(var T in t)D=t[T],t.hasOwnProperty(T)&&D!=null&&!a.hasOwnProperty(T)&&xe(e,n,T,null,a,D);for(j in a)D=a[j],C=t[j],!a.hasOwnProperty(j)||D===C||D==null&&C==null||xe(e,n,j,D,a,C)}var qc=null,Yc=null;function hr(e){return e.nodeType===9?e:e.ownerDocument}function nb(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tb(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ic(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vc=null;function wh(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var ab=typeof setTimeout=="function"?setTimeout:void 0,Lh=typeof clearTimeout=="function"?clearTimeout:void 0,ib=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof ib<"u"?function(e){return ib.resolve(null).then(e).catch(Uh)}:ab;function Uh(e){setTimeout(function(){throw e})}function wt(e){return e==="head"}function lb(e,n){var t=n,a=0,i=0;do{var l=t.nextSibling;if(e.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(0<a&&8>a){t=a;var s=e.ownerDocument;if(t&1&&Wi(s.documentElement),t&2&&Wi(s.body),t&4)for(t=s.head,Wi(t),s=t.firstChild;s;){var f=s.nextSibling,g=s.nodeName;s[ui]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&s.rel.toLowerCase()==="stylesheet"||t.removeChild(s),s=f}}if(i===0){e.removeChild(l),el(n);return}i--}else t==="$"||t==="$?"||t==="$!"?i++:a=t.charCodeAt(0)-48;else a=0;t=l}while(t);el(n)}function Xc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Xc(t),Zr(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function Bh(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=Gn(e.nextSibling),e===null)break}return null}function jh(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gn(e.nextSibling),e===null))return null;return e}function Wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function kh(e,n){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function Gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Pc=null;function rb(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}function ub(e,n,t){switch(n=hr(t),e){case"html":if(e=n.documentElement,!e)throw Error(c(452));return e;case"head":if(e=n.head,!e)throw Error(c(453));return e;case"body":if(e=n.body,!e)throw Error(c(454));return e;default:throw Error(c(451))}}function Wi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Zr(e)}var wn=new Map,cb=new Set;function yr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ot=P.d;P.d={f:zh,r:Gh,D:qh,C:Yh,L:Ih,m:Vh,X:Wh,S:Xh,M:Ph};function zh(){var e=ot.f(),n=ur();return e||n}function Gh(e){var n=ya(e);n!==null&&n.tag===5&&n.type==="form"?Nf(n):ot.r(e)}var Za=typeof document>"u"?null:document;function sb(e,n,t){var a=Za;if(a&&typeof n=="string"&&n){var i=_n(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),cb.has(i)||(cb.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Fe(n,"link",e),Xe(n),a.head.appendChild(n)))}}function qh(e){ot.D(e),sb("dns-prefetch",e,null)}function Yh(e,n){ot.C(e,n),sb("preconnect",e,n)}function Ih(e,n,t){ot.L(e,n,t);var a=Za;if(a&&e&&n){var i='link[rel="preload"][as="'+_n(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+_n(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+_n(t.imageSizes)+'"]')):i+='[href="'+_n(e)+'"]';var l=i;switch(n){case"style":l=Ja(e);break;case"script":l=Fa(e)}wn.has(l)||(e=A({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),wn.set(l,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(Pi(l))||n==="script"&&a.querySelector(Ki(l))||(n=a.createElement("link"),Fe(n,"link",e),Xe(n),a.head.appendChild(n)))}}function Vh(e,n){ot.m(e,n);var t=Za;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+_n(a)+'"][href="'+_n(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Fa(e)}if(!wn.has(l)&&(e=A({rel:"modulepreload",href:e},n),wn.set(l,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ki(l)))return}a=t.createElement("link"),Fe(a,"link",e),Xe(a),t.head.appendChild(a)}}}function Xh(e,n,t){ot.S(e,n,t);var a=Za;if(a&&e){var i=ma(a).hoistableStyles,l=Ja(e);n=n||"default";var s=i.get(l);if(!s){var f={loading:0,preload:null};if(s=a.querySelector(Pi(l)))f.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":n},t),(t=wn.get(l))&&Kc(e,t);var g=s=a.createElement("link");Xe(g),Fe(g,"link",e),g._p=new Promise(function(N,L){g.onload=N,g.onerror=L}),g.addEventListener("load",function(){f.loading|=1}),g.addEventListener("error",function(){f.loading|=2}),f.loading|=4,mr(s,n,a)}s={type:"stylesheet",instance:s,count:1,state:f},i.set(l,s)}}}function Wh(e,n){ot.X(e,n);var t=Za;if(t&&e){var a=ma(t).hoistableScripts,i=Fa(e),l=a.get(i);l||(l=t.querySelector(Ki(i)),l||(e=A({src:e,async:!0},n),(n=wn.get(i))&&Qc(e,n),l=t.createElement("script"),Xe(l),Fe(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Ph(e,n){ot.M(e,n);var t=Za;if(t&&e){var a=ma(t).hoistableScripts,i=Fa(e),l=a.get(i);l||(l=t.querySelector(Ki(i)),l||(e=A({src:e,async:!0,type:"module"},n),(n=wn.get(i))&&Qc(e,n),l=t.createElement("script"),Xe(l),Fe(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function ob(e,n,t,a){var i=(i=ee.current)?yr(i):null;if(!i)throw Error(c(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Ja(t.href),t=ma(i).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Ja(t.href);var l=ma(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(Pi(e)))&&!l._p&&(s.instance=l,s.state.loading=5),wn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},wn.set(e,t),l||Kh(i,e,t,s.state))),n&&a===null)throw Error(c(528,""));return s}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Fa(t),t=ma(i).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,e))}}function Ja(e){return'href="'+_n(e)+'"'}function Pi(e){return'link[rel="stylesheet"]['+e+"]"}function fb(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Kh(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Fe(n,"link",t),Xe(n),e.head.appendChild(n))}function Fa(e){return'[src="'+_n(e)+'"]'}function Ki(e){return"script[async]"+e}function db(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+_n(t.href)+'"]');if(a)return n.instance=a,Xe(a),a;var i=A({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Xe(a),Fe(a,"style",i),mr(a,t.precedence,e),n.instance=a;case"stylesheet":i=Ja(t.href);var l=e.querySelector(Pi(i));if(l)return n.state.loading|=4,n.instance=l,Xe(l),l;a=fb(t),(i=wn.get(i))&&Kc(a,i),l=(e.ownerDocument||e).createElement("link"),Xe(l);var s=l;return s._p=new Promise(function(f,g){s.onload=f,s.onerror=g}),Fe(l,"link",a),n.state.loading|=4,mr(l,t.precedence,e),n.instance=l;case"script":return l=Fa(t.src),(i=e.querySelector(Ki(l)))?(n.instance=i,Xe(i),i):(a=t,(i=wn.get(l))&&(a=A({},t),Qc(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Xe(i),Fe(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,mr(a,t.precedence,e));return n.instance}function mr(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,s=0;s<a.length;s++){var f=a[s];if(f.dataset.precedence===n)l=f;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Qc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vr=null;function bb(e,n,t){if(vr===null){var a=new Map,i=vr=new Map;i.set(t,a)}else i=vr,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[ui]||l[en]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(n)||"";s=e+s;var f=a.get(s);f?f.push(l):a.set(s,[l])}}return a}function pb(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Qh(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function hb(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Qi=null;function Zh(){}function Jh(e,n,t){if(Qi===null)throw Error(c(475));var a=Qi;if(n.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Ja(t.href),l=e.querySelector(Pi(i));if(l){e=l._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=gr.bind(a),e.then(a,a)),n.state.loading|=4,n.instance=l,Xe(l);return}l=e.ownerDocument||e,t=fb(t),(i=wn.get(i))&&Kc(t,i),l=l.createElement("link"),Xe(l);var s=l;s._p=new Promise(function(f,g){s.onload=f,s.onerror=g}),Fe(l,"link",t),n.instance=l}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=gr.bind(a),e.addEventListener("load",n),e.addEventListener("error",n))}}function Fh(){if(Qi===null)throw Error(c(475));var e=Qi;return e.stylesheets&&e.count===0&&Zc(e,e.stylesheets),0<e.count?function(n){var t=setTimeout(function(){if(e.stylesheets&&Zc(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(t)}}:null}function gr(){if(this.count--,this.count===0){if(this.stylesheets)Zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Sr=null;function Zc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Sr=new Map,n.forEach($h,e),Sr=null,gr.call(e))}function $h(e,n){if(!(n.state.loading&4)){var t=Sr.get(e);if(t)var a=t.get(null);else{t=new Map,Sr.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(t.set(s.dataset.precedence,s),a=s)}a&&t.set(null,a)}i=n.instance,s=i.getAttribute("data-precedence"),l=t.get(s)||a,l===a&&t.set(null,i),t.set(s,i),this.count++,a=gr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var Zi={$$typeof:te,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function ey(e,n,t,a,i,l,s,f){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.hiddenUpdates=Wr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function yb(e,n,t,a,i,l,s,f,g,N,L,j){return e=new ey(e,n,t,s,f,g,N,j),n=1,l===!0&&(n|=24),l=hn(3,null,null,n),e.current=l,l.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},Uu(l),e}function mb(e){return e?(e=Da,e):Da}function vb(e,n,t,a,i,l){i=mb(i),a.context===null?a.context=i:a.pendingContext=i,a=gt(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=St(e,a,n),t!==null&&(Sn(t,e,n),Oi(t,e,n))}function gb(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Jc(e,n){gb(e,n),(e=e.alternate)&&gb(e,n)}function Sb(e){if(e.tag===13){var n=Na(e,67108864);n!==null&&Sn(n,e,67108864),Jc(e,67108864)}}var Er=!0;function ny(e,n,t,a){var i=w.T;w.T=null;var l=P.p;try{P.p=2,Fc(e,n,t,a)}finally{P.p=l,w.T=i}}function ty(e,n,t,a){var i=w.T;w.T=null;var l=P.p;try{P.p=8,Fc(e,n,t,a)}finally{P.p=l,w.T=i}}function Fc(e,n,t,a){if(Er){var i=$c(a);if(i===null)zc(e,n,a,Ar,t),Ab(e,a);else if(iy(i,e,n,t,a))a.stopPropagation();else if(Ab(e,a),n&4&&-1<ay.indexOf(e)){for(;i!==null;){var l=ya(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Gt(l.pendingLanes);if(s!==0){var f=l;for(f.pendingLanes|=2,f.entangledLanes|=2;s;){var g=1<<31-bn(s);f.entanglements[1]|=g,s&=~g}Qn(l),(Te&6)===0&&(lr=Rn()+500,Ii(0))}}break;case 13:f=Na(l,2),f!==null&&Sn(f,l,2),ur(),Jc(l,2)}if(l=$c(a),l===null&&zc(e,n,a,Ar,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else zc(e,n,a,null,t)}}function $c(e){return e=iu(e),es(e)}var Ar=null;function es(e){if(Ar=null,e=ha(e),e!==null){var n=h(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=y(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ar=e,null}function Eb(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bl()){case pl:return 2;case pe:return 8;case Ce:case zt:return 32;case jn:return 268435456;default:return 32}default:return 32}}var ns=!1,Lt=null,Ht=null,Ut=null,Ji=new Map,Fi=new Map,Bt=[],ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ab(e,n){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Ji.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(n.pointerId)}}function $i(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=ya(n),n!==null&&Sb(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function iy(e,n,t,a,i){switch(n){case"focusin":return Lt=$i(Lt,e,n,t,a,i),!0;case"dragenter":return Ht=$i(Ht,e,n,t,a,i),!0;case"mouseover":return Ut=$i(Ut,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return Ji.set(l,$i(Ji.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Fi.set(l,$i(Fi.get(l)||null,e,n,t,a,i)),!0}return!1}function Rb(e){var n=ha(e.target);if(n!==null){var t=h(n);if(t!==null){if(n=t.tag,n===13){if(n=y(t),n!==null){e.blockedOn=n,J0(e.priority,function(){if(t.tag===13){var a=gn();a=Pr(a);var i=Na(t,a);i!==null&&Sn(i,t,a),Jc(t,a)}});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=$c(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);au=a,t.target.dispatchEvent(a),au=null}else return n=ya(t),n!==null&&Sb(n),e.blockedOn=t,!1;n.shift()}return!0}function Tb(e,n,t){Rr(e)&&t.delete(n)}function ly(){ns=!1,Lt!==null&&Rr(Lt)&&(Lt=null),Ht!==null&&Rr(Ht)&&(Ht=null),Ut!==null&&Rr(Ut)&&(Ut=null),Ji.forEach(Tb),Fi.forEach(Tb)}function Tr(e,n){e.blockedOn===n&&(e.blockedOn=null,ns||(ns=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ly)))}var _r=null;function _b(e){_r!==e&&(_r=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_r===e&&(_r=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(es(a||t)===null)continue;break}var l=ya(t);l!==null&&(e.splice(n,3),n-=3,ec(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function el(e){function n(g){return Tr(g,e)}Lt!==null&&Tr(Lt,e),Ht!==null&&Tr(Ht,e),Ut!==null&&Tr(Ut,e),Ji.forEach(n),Fi.forEach(n);for(var t=0;t<Bt.length;t++){var a=Bt[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Bt.length&&(t=Bt[0],t.blockedOn===null);)Rb(t),t.blockedOn===null&&Bt.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],s=i[un]||null;if(typeof l=="function")s||_b(t);else if(s){var f=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[un]||null)f=s.formAction;else if(es(i)!==null)continue}else f=s.action;typeof f=="function"?t[a+1]=f:(t.splice(a,3),a-=3),_b(t)}}}function ts(e){this._internalRoot=e}Or.prototype.render=ts.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(c(409));var t=n.current,a=gn();vb(t,a,e,n,null,null)},Or.prototype.unmount=ts.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;vb(e.current,2,null,e,null,null),ur(),n[pa]=null}};function Or(e){this._internalRoot=e}Or.prototype.unstable_scheduleHydration=function(e){if(e){var n=Gs();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Bt.length&&n!==0&&n<Bt[t].priority;t++);Bt.splice(t,0,e),t===0&&Rb(e)}};var Ob=u.version;if(Ob!=="19.1.0")throw Error(c(527,Ob,"19.1.0"));P.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(c(188)):(e=Object.keys(e).join(","),Error(c(268,e)));return e=p(n),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var ry={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:w,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{pt=xr.inject(ry),Ve=xr}catch{}}return tl.createRoot=function(e,n){if(!d(e))throw Error(c(299));var t=!1,a="",i=Yf,l=If,s=Vf,f=null;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(f=n.unstable_transitionCallbacks)),n=yb(e,1,!1,null,null,t,a,i,l,s,f,null),e[pa]=n.current,kc(e),new ts(n)},tl.hydrateRoot=function(e,n,t){if(!d(e))throw Error(c(299));var a=!1,i="",l=Yf,s=If,f=Vf,g=null,N=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(g=t.unstable_transitionCallbacks),t.formState!==void 0&&(N=t.formState)),n=yb(e,1,!0,n,t??null,a,i,l,s,f,g,N),n.context=mb(null),t=n.current,a=gn(),a=Pr(a),i=gt(a),i.callback=null,St(t,i,a),t=a,n.current.lanes=t,ri(n,t),Qn(n),e[pa]=n.current,kc(e),new Or(n)},tl.version="19.1.0",tl}var Bb;function my(){if(Bb)return ls.exports;Bb=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(u){console.error(u)}}return r(),ls.exports=yy(),ls.exports}var vy=my();function gy(r,u){const d=Math.min(u?3.5:7,r*(u?.25:.5));return r-d}function Sy(r,u,o,c,d){if(r<=0||u<=0)return{shots:1/0,totalDamage:0};let h=o,y=c,S=0,p=0;for(;h>0;){S++;for(let b=0;b<u;b++){let A=r;if(y>0){A=gy(A,d);const _=Math.min(A,y);y-=_,A-=_}if(h-=A,p+=r,h<=0)break}}return{shots:S,totalDamage:p}}function Ey(r,u,o,c,d){const h=[];for(let y=100;y<=200;y+=5){const S=r*(y/100),{shots:p,totalDamage:b}=Sy(S,u,o,c,d);h.push({percent:y,shots:p,totalDamage:b})}return h}function Ay(){const[r,u]=ne.useState(75),[o,c]=ne.useState(1),[d,h]=ne.useState(300),[y,S]=ne.useState(0),[p,b]=ne.useState(!1),[A,_]=ne.useState([]),M=()=>{_(Ey(r,o,d,y,p))};return v.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Damage Breakpoints"}),v.jsxs("div",{className:"space-y-4",children:[v.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Damage per Bullet"}),v.jsx("input",{type:"number",value:r,onChange:k=>u(Number(k.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Bullets per Shot"}),v.jsx("input",{type:"number",value:o,onChange:k=>c(Number(k.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy HP"}),v.jsx("input",{type:"number",value:d,onChange:k=>h(Number(k.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"space-y-1",children:[v.jsx("span",{className:"block text-sm text-gray-700 dark:text-gray-300",children:"Enemy Armor"}),v.jsx("input",{type:"number",value:y,onChange:k=>S(Number(k.target.value)),className:"w-full border rounded p-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"})]}),v.jsxs("label",{className:"flex items-center space-x-2 mt-6 text-gray-700 dark:text-gray-300",children:[v.jsx("input",{type:"checkbox",checked:p,onChange:k=>b(k.target.checked)}),v.jsx("span",{children:"Using armor penetration item"})]})]}),v.jsx("button",{onClick:M,className:"bg-indigo-600 text-white px-4 py-1 rounded hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600",children:"Calculate"}),A.length>0&&v.jsx("div",{className:"overflow-x-auto mt-4 max-h-96 overflow-y-auto",children:v.jsxs("table",{className:"min-w-max w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Damage %"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Bullet"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Per Shot"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Shots"}),v.jsx("th",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200",children:"Accumulated"})]})}),v.jsx("tbody",{children:A.map((k,I)=>{const q=I>0?A[I-1].shots:k.shots,z=k.shots<q,K=r*k.percent/100,X=K*o;return v.jsxs("tr",{className:z?"bg-yellow-100 dark:bg-yellow-900":"",children:[v.jsxs("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:[k.percent,"%"]}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:K.toFixed(1)}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:X.toFixed(1)}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:k.shots}),v.jsx("td",{className:"border px-2 py-1 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100",children:k.totalDamage.toFixed(1)})]},k.percent)})})]})})]})]})}var ss={exports:{}},os={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jb;function Ry(){if(jb)return os;jb=1;var r=ai();function u(p,b){return p===b&&(p!==0||1/p===1/b)||p!==p&&b!==b}var o=typeof Object.is=="function"?Object.is:u,c=r.useSyncExternalStore,d=r.useRef,h=r.useEffect,y=r.useMemo,S=r.useDebugValue;return os.useSyncExternalStoreWithSelector=function(p,b,A,_,M){var k=d(null);if(k.current===null){var I={hasValue:!1,value:null};k.current=I}else I=k.current;k=y(function(){function z(m){if(!K){if(K=!0,X=m,m=_(m),M!==void 0&&I.hasValue){var O=I.value;if(M(O,m))return te=O}return te=m}if(O=te,o(X,m))return O;var H=_(m);return M!==void 0&&M(O,H)?(X=m,O):(X=m,te=H)}var K=!1,X,te,J=A===void 0?null:A;return[function(){return z(b())},J===null?void 0:function(){return z(J())}]},[b,A,_,M]);var q=c(p,k[0],k[1]);return h(function(){I.hasValue=!0,I.value=q},[q]),S(q),q},os}var kb;function Ty(){return kb||(kb=1,ss.exports=Ry()),ss.exports}var _y=Ty();function Oy(r){r()}function xy(){let r=null,u=null;return{clear(){r=null,u=null},notify(){Oy(()=>{let o=r;for(;o;)o.callback(),o=o.next})},get(){const o=[];let c=r;for(;c;)o.push(c),c=c.next;return o},subscribe(o){let c=!0;const d=u={callback:o,next:null,prev:u};return d.prev?d.prev.next=d:r=d,function(){!c||r===null||(c=!1,d.next?d.next.prev=d.prev:u=d.prev,d.prev?d.prev.next=d.next:r=d.next)}}}}var zb={notify(){},get:()=>[]};function Ny(r,u){let o,c=zb,d=0,h=!1;function y(q){A();const z=c.subscribe(q);let K=!1;return()=>{K||(K=!0,z(),_())}}function S(){c.notify()}function p(){I.onStateChange&&I.onStateChange()}function b(){return h}function A(){d++,o||(o=r.subscribe(p),c=xy())}function _(){d--,o&&d===0&&(o(),o=void 0,c.clear(),c=zb)}function M(){h||(h=!0,A())}function k(){h&&(h=!1,_())}const I={addNestedSub:y,notifyNestedSubs:S,handleChangeWrapper:p,isSubscribed:b,trySubscribe:M,tryUnsubscribe:k,getListeners:()=>c};return I}var Dy=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cy=Dy(),My=()=>typeof navigator<"u"&&navigator.product==="ReactNative",wy=My(),Ly=()=>Cy||wy?ne.useLayoutEffect:ne.useEffect,Hy=Ly(),fs=Symbol.for("react-redux-context"),ds=typeof globalThis<"u"?globalThis:{};function Uy(){if(!ne.createContext)return{};const r=ds[fs]??(ds[fs]=new Map);let u=r.get(ne.createContext);return u||(u=ne.createContext(null),r.set(ne.createContext,u)),u}var kt=Uy();function By(r){const{children:u,context:o,serverState:c,store:d}=r,h=ne.useMemo(()=>{const p=Ny(d);return{store:d,subscription:p,getServerState:c?()=>c:void 0}},[d,c]),y=ne.useMemo(()=>d.getState(),[d]);Hy(()=>{const{subscription:p}=h;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),y!==d.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[h,y]);const S=o||kt;return ne.createElement(S.Provider,{value:h},u)}var jy=By;function Cs(r=kt){return function(){return ne.useContext(r)}}var m0=Cs();function v0(r=kt){const u=r===kt?m0:Cs(r),o=()=>{const{store:c}=u();return c};return Object.assign(o,{withTypes:()=>o}),o}var ky=v0();function zy(r=kt){const u=r===kt?ky:v0(r),o=()=>u().dispatch;return Object.assign(o,{withTypes:()=>o}),o}var Gy=zy(),qy=(r,u)=>r===u;function Yy(r=kt){const u=r===kt?m0:Cs(r),o=(c,d={})=>{const{equalityFn:h=qy}=typeof d=="function"?{equalityFn:d}:d,y=u(),{store:S,subscription:p,getServerState:b}=y;ne.useRef(!0);const A=ne.useCallback({[c.name](M){return c(M)}}[c.name],[c]),_=_y.useSyncExternalStoreWithSelector(p.addNestedSub,S.getState,b||S.getState,A,h);return ne.useDebugValue(_),_};return Object.assign(o,{withTypes:()=>o}),o}var Iy=Yy();const In=Gy,ln=Iy;function $e(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var Vy=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gb=Vy,bs=()=>Math.random().toString(36).substring(7).split("").join("."),Xy={INIT:`@@redux/INIT${bs()}`,REPLACE:`@@redux/REPLACE${bs()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${bs()}`},Lr=Xy;function Ms(r){if(typeof r!="object"||r===null)return!1;let u=r;for(;Object.getPrototypeOf(u)!==null;)u=Object.getPrototypeOf(u);return Object.getPrototypeOf(r)===u||Object.getPrototypeOf(r)===null}function g0(r,u,o){if(typeof r!="function")throw new Error($e(2));if(typeof u=="function"&&typeof o=="function"||typeof o=="function"&&typeof arguments[3]=="function")throw new Error($e(0));if(typeof u=="function"&&typeof o>"u"&&(o=u,u=void 0),typeof o<"u"){if(typeof o!="function")throw new Error($e(1));return o(g0)(r,u)}let c=r,d=u,h=new Map,y=h,S=0,p=!1;function b(){y===h&&(y=new Map,h.forEach((z,K)=>{y.set(K,z)}))}function A(){if(p)throw new Error($e(3));return d}function _(z){if(typeof z!="function")throw new Error($e(4));if(p)throw new Error($e(5));let K=!0;b();const X=S++;return y.set(X,z),function(){if(K){if(p)throw new Error($e(6));K=!1,b(),y.delete(X),h=null}}}function M(z){if(!Ms(z))throw new Error($e(7));if(typeof z.type>"u")throw new Error($e(8));if(typeof z.type!="string")throw new Error($e(17));if(p)throw new Error($e(9));try{p=!0,d=c(d,z)}finally{p=!1}return(h=y).forEach(X=>{X()}),z}function k(z){if(typeof z!="function")throw new Error($e(10));c=z,M({type:Lr.REPLACE})}function I(){const z=_;return{subscribe(K){if(typeof K!="object"||K===null)throw new Error($e(11));function X(){const J=K;J.next&&J.next(A())}return X(),{unsubscribe:z(X)}},[Gb](){return this}}}return M({type:Lr.INIT}),{dispatch:M,subscribe:_,getState:A,replaceReducer:k,[Gb]:I}}function Wy(r){Object.keys(r).forEach(u=>{const o=r[u];if(typeof o(void 0,{type:Lr.INIT})>"u")throw new Error($e(12));if(typeof o(void 0,{type:Lr.PROBE_UNKNOWN_ACTION()})>"u")throw new Error($e(13))})}function Py(r){const u=Object.keys(r),o={};for(let h=0;h<u.length;h++){const y=u[h];typeof r[y]=="function"&&(o[y]=r[y])}const c=Object.keys(o);let d;try{Wy(o)}catch(h){d=h}return function(y={},S){if(d)throw d;let p=!1;const b={};for(let A=0;A<c.length;A++){const _=c[A],M=o[_],k=y[_],I=M(k,S);if(typeof I>"u")throw S&&S.type,new Error($e(14));b[_]=I,p=p||I!==k}return p=p||c.length!==Object.keys(y).length,p?b:y}}function Hr(...r){return r.length===0?u=>u:r.length===1?r[0]:r.reduce((u,o)=>(...c)=>u(o(...c)))}function Ky(...r){return u=>(o,c)=>{const d=u(o,c);let h=()=>{throw new Error($e(15))};const y={getState:d.getState,dispatch:(p,...b)=>h(p,...b)},S=r.map(p=>p(y));return h=Hr(...S)(d.dispatch),{...d,dispatch:h}}}function Qy(r){return Ms(r)&&"type"in r&&typeof r.type=="string"}var S0=Symbol.for("immer-nothing"),qb=Symbol.for("immer-draftable"),En=Symbol.for("immer-state");function Yn(r,...u){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var ti=Object.getPrototypeOf;function sa(r){return!!r&&!!r[En]}function dt(r){var u;return r?E0(r)||Array.isArray(r)||!!r[qb]||!!((u=r.constructor)!=null&&u[qb])||zr(r)||Gr(r):!1}var Zy=Object.prototype.constructor.toString();function E0(r){if(!r||typeof r!="object")return!1;const u=ti(r);if(u===null)return!0;const o=Object.hasOwnProperty.call(u,"constructor")&&u.constructor;return o===Object?!0:typeof o=="function"&&Function.toString.call(o)===Zy}function Ur(r,u){kr(r)===0?Reflect.ownKeys(r).forEach(o=>{u(o,r[o],r)}):r.forEach((o,c)=>u(c,o,r))}function kr(r){const u=r[En];return u?u.type_:Array.isArray(r)?1:zr(r)?2:Gr(r)?3:0}function Es(r,u){return kr(r)===2?r.has(u):Object.prototype.hasOwnProperty.call(r,u)}function A0(r,u,o){const c=kr(r);c===2?r.set(u,o):c===3?r.add(o):r[u]=o}function Jy(r,u){return r===u?r!==0||1/r===1/u:r!==r&&u!==u}function zr(r){return r instanceof Map}function Gr(r){return r instanceof Set}function ua(r){return r.copy_||r.base_}function As(r,u){if(zr(r))return new Map(r);if(Gr(r))return new Set(r);if(Array.isArray(r))return Array.prototype.slice.call(r);const o=E0(r);if(u===!0||u==="class_only"&&!o){const c=Object.getOwnPropertyDescriptors(r);delete c[En];let d=Reflect.ownKeys(c);for(let h=0;h<d.length;h++){const y=d[h],S=c[y];S.writable===!1&&(S.writable=!0,S.configurable=!0),(S.get||S.set)&&(c[y]={configurable:!0,writable:!0,enumerable:S.enumerable,value:r[y]})}return Object.create(ti(r),c)}else{const c=ti(r);if(c!==null&&o)return{...r};const d=Object.create(c);return Object.assign(d,r)}}function ws(r,u=!1){return qr(r)||sa(r)||!dt(r)||(kr(r)>1&&(r.set=r.add=r.clear=r.delete=Fy),Object.freeze(r),u&&Object.entries(r).forEach(([o,c])=>ws(c,!0))),r}function Fy(){Yn(2)}function qr(r){return Object.isFrozen(r)}var $y={};function oa(r){const u=$y[r];return u||Yn(0,r),u}var sl;function R0(){return sl}function em(r,u){return{drafts_:[],parent_:r,immer_:u,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yb(r,u){u&&(oa("Patches"),r.patches_=[],r.inversePatches_=[],r.patchListener_=u)}function Rs(r){Ts(r),r.drafts_.forEach(nm),r.drafts_=null}function Ts(r){r===sl&&(sl=r.parent_)}function Ib(r){return sl=em(sl,r)}function nm(r){const u=r[En];u.type_===0||u.type_===1?u.revoke_():u.revoked_=!0}function Vb(r,u){u.unfinalizedDrafts_=u.drafts_.length;const o=u.drafts_[0];return r!==void 0&&r!==o?(o[En].modified_&&(Rs(u),Yn(4)),dt(r)&&(r=Br(u,r),u.parent_||jr(u,r)),u.patches_&&oa("Patches").generateReplacementPatches_(o[En].base_,r,u.patches_,u.inversePatches_)):r=Br(u,o,[]),Rs(u),u.patches_&&u.patchListener_(u.patches_,u.inversePatches_),r!==S0?r:void 0}function Br(r,u,o){if(qr(u))return u;const c=u[En];if(!c)return Ur(u,(d,h)=>Xb(r,c,u,d,h,o)),u;if(c.scope_!==r)return u;if(!c.modified_)return jr(r,c.base_,!0),c.base_;if(!c.finalized_){c.finalized_=!0,c.scope_.unfinalizedDrafts_--;const d=c.copy_;let h=d,y=!1;c.type_===3&&(h=new Set(d),d.clear(),y=!0),Ur(h,(S,p)=>Xb(r,c,d,S,p,o,y)),jr(r,d,!1),o&&r.patches_&&oa("Patches").generatePatches_(c,o,r.patches_,r.inversePatches_)}return c.copy_}function Xb(r,u,o,c,d,h,y){if(sa(d)){const S=h&&u&&u.type_!==3&&!Es(u.assigned_,c)?h.concat(c):void 0,p=Br(r,d,S);if(A0(o,c,p),sa(p))r.canAutoFreeze_=!1;else return}else y&&o.add(d);if(dt(d)&&!qr(d)){if(!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1)return;Br(r,d),(!u||!u.scope_.parent_)&&typeof c!="symbol"&&Object.prototype.propertyIsEnumerable.call(o,c)&&jr(r,d)}}function jr(r,u,o=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&ws(u,o)}function tm(r,u){const o=Array.isArray(r),c={type_:o?1:0,scope_:u?u.scope_:R0(),modified_:!1,finalized_:!1,assigned_:{},parent_:u,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=c,h=Ls;o&&(d=[c],h=ol);const{revoke:y,proxy:S}=Proxy.revocable(d,h);return c.draft_=S,c.revoke_=y,S}var Ls={get(r,u){if(u===En)return r;const o=ua(r);if(!Es(o,u))return am(r,o,u);const c=o[u];return r.finalized_||!dt(c)?c:c===ps(r.base_,u)?(hs(r),r.copy_[u]=Os(c,r)):c},has(r,u){return u in ua(r)},ownKeys(r){return Reflect.ownKeys(ua(r))},set(r,u,o){const c=T0(ua(r),u);if(c!=null&&c.set)return c.set.call(r.draft_,o),!0;if(!r.modified_){const d=ps(ua(r),u),h=d==null?void 0:d[En];if(h&&h.base_===o)return r.copy_[u]=o,r.assigned_[u]=!1,!0;if(Jy(o,d)&&(o!==void 0||Es(r.base_,u)))return!0;hs(r),_s(r)}return r.copy_[u]===o&&(o!==void 0||u in r.copy_)||Number.isNaN(o)&&Number.isNaN(r.copy_[u])||(r.copy_[u]=o,r.assigned_[u]=!0),!0},deleteProperty(r,u){return ps(r.base_,u)!==void 0||u in r.base_?(r.assigned_[u]=!1,hs(r),_s(r)):delete r.assigned_[u],r.copy_&&delete r.copy_[u],!0},getOwnPropertyDescriptor(r,u){const o=ua(r),c=Reflect.getOwnPropertyDescriptor(o,u);return c&&{writable:!0,configurable:r.type_!==1||u!=="length",enumerable:c.enumerable,value:o[u]}},defineProperty(){Yn(11)},getPrototypeOf(r){return ti(r.base_)},setPrototypeOf(){Yn(12)}},ol={};Ur(Ls,(r,u)=>{ol[r]=function(){return arguments[0]=arguments[0][0],u.apply(this,arguments)}});ol.deleteProperty=function(r,u){return ol.set.call(this,r,u,void 0)};ol.set=function(r,u,o){return Ls.set.call(this,r[0],u,o,r[0])};function ps(r,u){const o=r[En];return(o?ua(o):r)[u]}function am(r,u,o){var d;const c=T0(u,o);return c?"value"in c?c.value:(d=c.get)==null?void 0:d.call(r.draft_):void 0}function T0(r,u){if(!(u in r))return;let o=ti(r);for(;o;){const c=Object.getOwnPropertyDescriptor(o,u);if(c)return c;o=ti(o)}}function _s(r){r.modified_||(r.modified_=!0,r.parent_&&_s(r.parent_))}function hs(r){r.copy_||(r.copy_=As(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var im=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(u,o,c)=>{if(typeof u=="function"&&typeof o!="function"){const h=o;o=u;const y=this;return function(p=h,...b){return y.produce(p,A=>o.call(this,A,...b))}}typeof o!="function"&&Yn(6),c!==void 0&&typeof c!="function"&&Yn(7);let d;if(dt(u)){const h=Ib(this),y=Os(u,void 0);let S=!0;try{d=o(y),S=!1}finally{S?Rs(h):Ts(h)}return Yb(h,c),Vb(d,h)}else if(!u||typeof u!="object"){if(d=o(u),d===void 0&&(d=u),d===S0&&(d=void 0),this.autoFreeze_&&ws(d,!0),c){const h=[],y=[];oa("Patches").generateReplacementPatches_(u,d,h,y),c(h,y)}return d}else Yn(1,u)},this.produceWithPatches=(u,o)=>{if(typeof u=="function")return(y,...S)=>this.produceWithPatches(y,p=>u(p,...S));let c,d;return[this.produce(u,o,(y,S)=>{c=y,d=S}),c,d]},typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze),typeof(r==null?void 0:r.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(r.useStrictShallowCopy)}createDraft(r){dt(r)||Yn(8),sa(r)&&(r=lm(r));const u=Ib(this),o=Os(r,void 0);return o[En].isManual_=!0,Ts(u),o}finishDraft(r,u){const o=r&&r[En];(!o||!o.isManual_)&&Yn(9);const{scope_:c}=o;return Yb(c,u),Vb(void 0,c)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}applyPatches(r,u){let o;for(o=u.length-1;o>=0;o--){const d=u[o];if(d.path.length===0&&d.op==="replace"){r=d.value;break}}o>-1&&(u=u.slice(o+1));const c=oa("Patches").applyPatches_;return sa(r)?c(r,u):this.produce(r,d=>c(d,u))}};function Os(r,u){const o=zr(r)?oa("MapSet").proxyMap_(r,u):Gr(r)?oa("MapSet").proxySet_(r,u):tm(r,u);return(u?u.scope_:R0()).drafts_.push(o),o}function lm(r){return sa(r)||Yn(10,r),_0(r)}function _0(r){if(!dt(r)||qr(r))return r;const u=r[En];let o;if(u){if(!u.modified_)return u.base_;u.finalized_=!0,o=As(r,u.scope_.immer_.useStrictShallowCopy_)}else o=As(r,!0);return Ur(o,(c,d)=>{A0(o,c,_0(d))}),u&&(u.finalized_=!1),o}var An=new im,O0=An.produce;An.produceWithPatches.bind(An);An.setAutoFreeze.bind(An);An.setUseStrictShallowCopy.bind(An);An.applyPatches.bind(An);An.createDraft.bind(An);An.finishDraft.bind(An);function x0(r){return({dispatch:o,getState:c})=>d=>h=>typeof h=="function"?h(o,c,r):d(h)}var rm=x0(),um=x0,cm=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Hr:Hr.apply(null,arguments)};function Wb(r,u){function o(...c){if(u){let d=u(...c);if(!d)throw new Error(ft(0));return{type:r,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:r,payload:c[0]}}return o.toString=()=>`${r}`,o.type=r,o.match=c=>Qy(c)&&c.type===r,o}var N0=class cl extends Array{constructor(...u){super(...u),Object.setPrototypeOf(this,cl.prototype)}static get[Symbol.species](){return cl}concat(...u){return super.concat.apply(this,u)}prepend(...u){return u.length===1&&Array.isArray(u[0])?new cl(...u[0].concat(this)):new cl(...u.concat(this))}};function Pb(r){return dt(r)?O0(r,()=>{}):r}function Nr(r,u,o){return r.has(u)?r.get(u):r.set(u,o(u)).get(u)}function sm(r){return typeof r=="boolean"}var om=()=>function(u){const{thunk:o=!0,immutableCheck:c=!0,serializableCheck:d=!0,actionCreatorCheck:h=!0}=u??{};let y=new N0;return o&&(sm(o)?y.push(rm):y.push(um(o.extraArgument))),y},fm="RTK_autoBatch",Kb=r=>u=>{setTimeout(u,r)},dm=(r={type:"raf"})=>u=>(...o)=>{const c=u(...o);let d=!0,h=!1,y=!1;const S=new Set,p=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Kb(10):r.type==="callback"?r.queueNotification:Kb(r.timeout),b=()=>{y=!1,h&&(h=!1,S.forEach(A=>A()))};return Object.assign({},c,{subscribe(A){const _=()=>d&&A(),M=c.subscribe(_);return S.add(A),()=>{M(),S.delete(A)}},dispatch(A){var _;try{return d=!((_=A==null?void 0:A.meta)!=null&&_[fm]),h=!d,h&&(y||(y=!0,p(b))),c.dispatch(A)}finally{d=!0}}})},bm=r=>function(o){const{autoBatch:c=!0}=o??{};let d=new N0(r);return c&&d.push(dm(typeof c=="object"?c:void 0)),d};function pm(r){const u=om(),{reducer:o=void 0,middleware:c,devTools:d=!0,preloadedState:h=void 0,enhancers:y=void 0}=r||{};let S;if(typeof o=="function")S=o;else if(Ms(o))S=Py(o);else throw new Error(ft(1));let p;typeof c=="function"?p=c(u):p=u();let b=Hr;d&&(b=cm({trace:!1,...typeof d=="object"&&d}));const A=Ky(...p),_=bm(A);let M=typeof y=="function"?y(_):_();const k=b(...M);return g0(S,h,k)}function D0(r){const u={},o=[];let c;const d={addCase(h,y){const S=typeof h=="string"?h:h.type;if(!S)throw new Error(ft(28));if(S in u)throw new Error(ft(29));return u[S]=y,d},addMatcher(h,y){return o.push({matcher:h,reducer:y}),d},addDefaultCase(h){return c=h,d}};return r(d),[u,o,c]}function hm(r){return typeof r=="function"}function ym(r,u){let[o,c,d]=D0(u),h;if(hm(r))h=()=>Pb(r());else{const S=Pb(r);h=()=>S}function y(S=h(),p){let b=[o[p.type],...c.filter(({matcher:A})=>A(p)).map(({reducer:A})=>A)];return b.filter(A=>!!A).length===0&&(b=[d]),b.reduce((A,_)=>{if(_)if(sa(A)){const k=_(A,p);return k===void 0?A:k}else{if(dt(A))return O0(A,M=>_(M,p));{const M=_(A,p);if(M===void 0){if(A===null)return A;throw Error("A case reducer on a non-draftable value must not return undefined")}return M}}return A},S)}return y.getInitialState=h,y}var mm=Symbol.for("rtk-slice-createasyncthunk");function vm(r,u){return`${r}/${u}`}function gm({creators:r}={}){var o;const u=(o=r==null?void 0:r.asyncThunk)==null?void 0:o[mm];return function(d){const{name:h,reducerPath:y=h}=d;if(!h)throw new Error(ft(11));const S=(typeof d.reducers=="function"?d.reducers(Am()):d.reducers)||{},p=Object.keys(S),b={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},A={addCase(J,m){const O=typeof J=="string"?J:J.type;if(!O)throw new Error(ft(12));if(O in b.sliceCaseReducersByType)throw new Error(ft(13));return b.sliceCaseReducersByType[O]=m,A},addMatcher(J,m){return b.sliceMatchers.push({matcher:J,reducer:m}),A},exposeAction(J,m){return b.actionCreators[J]=m,A},exposeCaseReducer(J,m){return b.sliceCaseReducersByName[J]=m,A}};p.forEach(J=>{const m=S[J],O={reducerName:J,type:vm(h,J),createNotation:typeof d.reducers=="function"};Tm(m)?Om(O,m,A,u):Rm(O,m,A)});function _(){const[J={},m=[],O=void 0]=typeof d.extraReducers=="function"?D0(d.extraReducers):[d.extraReducers],H={...J,...b.sliceCaseReducersByType};return ym(d.initialState,W=>{for(let Z in H)W.addCase(Z,H[Z]);for(let Z of b.sliceMatchers)W.addMatcher(Z.matcher,Z.reducer);for(let Z of m)W.addMatcher(Z.matcher,Z.reducer);O&&W.addDefaultCase(O)})}const M=J=>J,k=new Map,I=new WeakMap;let q;function z(J,m){return q||(q=_()),q(J,m)}function K(){return q||(q=_()),q.getInitialState()}function X(J,m=!1){function O(W){let Z=W[J];return typeof Z>"u"&&m&&(Z=Nr(I,O,K)),Z}function H(W=M){const Z=Nr(k,m,()=>new WeakMap);return Nr(Z,W,()=>{const me={};for(const[De,Re]of Object.entries(d.selectors??{}))me[De]=Sm(Re,W,()=>Nr(I,W,K),m);return me})}return{reducerPath:J,getSelectors:H,get selectors(){return H(O)},selectSlice:O}}const te={name:h,reducer:z,actions:b.actionCreators,caseReducers:b.sliceCaseReducersByName,getInitialState:K,...X(y),injectInto(J,{reducerPath:m,...O}={}){const H=m??y;return J.inject({reducerPath:H,reducer:z},O),{...te,...X(H,!0)}}};return te}}function Sm(r,u,o,c){function d(h,...y){let S=u(h);return typeof S>"u"&&c&&(S=o()),r(S,...y)}return d.unwrapped=r,d}var Em=gm();function Am(){function r(u,o){return{_reducerDefinitionType:"asyncThunk",payloadCreator:u,...o}}return r.withTypes=()=>r,{reducer(u){return Object.assign({[u.name](...o){return u(...o)}}[u.name],{_reducerDefinitionType:"reducer"})},preparedReducer(u,o){return{_reducerDefinitionType:"reducerWithPrepare",prepare:u,reducer:o}},asyncThunk:r}}function Rm({type:r,reducerName:u,createNotation:o},c,d){let h,y;if("reducer"in c){if(o&&!_m(c))throw new Error(ft(17));h=c.reducer,y=c.prepare}else h=c;d.addCase(r,h).exposeCaseReducer(u,h).exposeAction(u,y?Wb(r,y):Wb(r))}function Tm(r){return r._reducerDefinitionType==="asyncThunk"}function _m(r){return r._reducerDefinitionType==="reducerWithPrepare"}function Om({type:r,reducerName:u},o,c,d){if(!d)throw new Error(ft(18));const{payloadCreator:h,fulfilled:y,pending:S,rejected:p,settled:b,options:A}=o,_=d(r,h,A);c.exposeAction(u,_),y&&c.addCase(_.fulfilled,y),S&&c.addCase(_.pending,S),p&&c.addCase(_.rejected,p),b&&c.addMatcher(_.settled,b),c.exposeCaseReducer(u,{fulfilled:y||Dr,pending:S||Dr,rejected:p||Dr,settled:b||Dr})}function Dr(){}function ft(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const xm={hero:"Ashe",cash:11e3,equipped:Array(2).fill(""),equippedEnabled:!1,toBuy:6,avoid:[],avoidEnabled:!1,weights:[{type:"",weight:1}],error:"",minValueEnabled:!1,minAttrGroups:[],useOverrides:!0},C0=Em({name:"input",initialState:xm,reducers:{setHero(r,u){r.hero=u.payload},setCash(r,u){r.cash=u.payload},setEquipped(r,u){r.equipped[u.payload.index]=u.payload.id},addEquippedSlot(r){r.equipped.length<6&&r.equipped.push("")},removeEquippedSlot(r,u){r.equipped.length>2&&r.equipped.splice(u.payload,1)},setToBuy(r,u){r.toBuy=u.payload},addAvoid(r,u){r.avoid.includes(u.payload)||r.avoid.push(u.payload)},removeAvoid(r,u){r.avoid=r.avoid.filter(o=>o!==u.payload)},toggleAvoidEnabled(r){r.avoidEnabled=!r.avoidEnabled},toggleEquippedEnabled(r){r.equippedEnabled=!r.equippedEnabled,r.equippedEnabled||(r.equipped=Array(2).fill(""))},toggleUseOverrides(r){r.useOverrides=!r.useOverrides},setWeightType(r,u){r.weights[u.payload.index].type=u.payload.type},setWeightValue(r,u){r.weights[u.payload.index].weight=u.payload.value},addWeightRow(r,u){r.weights.push({type:u.payload,weight:1})},removeWeightRow(r,u){r.weights.splice(u.payload,1)},setError(r,u){r.error=u.payload},toggleMinValueEnabled(r){r.minValueEnabled=!r.minValueEnabled,r.minValueEnabled&&r.minAttrGroups.length===0&&r.minAttrGroups.push({attrs:["Health","Armor","Shield"],value:50})},addMinGroup(r){r.minAttrGroups.push({attrs:[],value:0})},removeMinGroup(r,u){r.minAttrGroups.splice(u.payload,1)},setMinGroupValue(r,u){r.minAttrGroups[u.payload.index].value=u.payload.value},addAttrToGroup(r,u){const o=r.minAttrGroups[u.payload.index];o.attrs.includes(u.payload.attr)||o.attrs.push(u.payload.attr)},removeAttrFromGroup(r,u){const o=r.minAttrGroups[u.payload.index];o.attrs=o.attrs.filter(c=>c!==u.payload.attr)},importState(r,u){return u.payload}}}),{setHero:Nm,setCash:Dm,setEquipped:Cm,setToBuy:M0,addAvoid:w0,removeAvoid:Mm,toggleAvoidEnabled:L0,toggleEquippedEnabled:wm,setWeightType:H0,setWeightValue:Qb,addWeightRow:Lm,removeWeightRow:Hm,setError:ia,toggleMinValueEnabled:Um,addMinGroup:Bm,removeMinGroup:jm,setMinGroupValue:km,addAttrToGroup:zm,removeAttrFromGroup:Gm,addEquippedSlot:qm,removeEquippedSlot:Ym,toggleUseOverrides:Yv,importState:Im}=C0.actions,Vm=C0.reducer;function U0(r,u){const o={common:0,rare:1,epic:2},c=o[r.rarity]-o[u.rarity];return c!==0?c:r.name.localeCompare(u.name)}function B0(r,u){const o={epic:3,rare:2,common:1},c={weapon:1,ability:2,survival:3},d=o[r.rarity]||0,h=o[u.rarity]||0;if(d!==h)return h-d;const y=c[r.tab]||99,S=c[u.tab]||99;return y!==S?y-S:(r.cost||0)-(u.cost||0)}function Xm(r){const u=r.match(/[-+]?\d+(?:\.\d+)?/);return u?parseFloat(u[0]):0}function xs(r){const u=new Map;return r.forEach(o=>{o.attributes.forEach(c=>{const d=Xm(c.value);u.set(c.type,(u.get(c.type)??0)+d)})}),u}function Zb(r,u){let o=0;return u.forEach(c=>{o+=(r.get(c.type)??0)*c.weight}),o}function fl(r){switch(r){case"common":return"#17a631";case"rare":return"#217dbe";case"epic":return"#8727d6";default:return"black"}}function Wm(r,u){const o=xs(r);return u.every(c=>c.attrs.reduce((h,y)=>h+(o.get(y)??0),0)>=c.value)}function j0(r,u,o){const c=new Set(r.map(d=>d.type));return u&&o.forEach(d=>{d.attrs.forEach(h=>c.add(h))}),c.delete(""),c}function Pm(r,u,o,c){const d=j0(u,o,c),h=[];return u.forEach(y=>{const S=r.get(y.type)??0;h.push({type:y.type,sum:S,contrib:S*y.weight}),d.delete(y.type)}),d.forEach(y=>{const S=r.get(y)??0;h.push({type:y,sum:S,contrib:0})}),h}function k0({label:r,onRemove:u}){return v.jsxs("span",{className:"inline-flex items-center justify-center px-2 rounded-xl bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 border border-gray-300 dark:border-gray-600 text-xs mr-2 align-middle",children:[r,u&&v.jsx("button",{type:"button",onClick:u,"aria-label":"Remove",className:"ml-2 pl-2 pr-2 pt-1 pb-1 text-red-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-300 text-xs align-middle flex items-center justify-center",children:"×"})]})}function dl({label:r,options:u,value:o,onChange:c,placeholder:d="Select an option",className:h}){const[y,S]=ne.useState(!1),[p,b]=ne.useState(!1),[A,_]=ne.useState(""),M=ne.useRef(null),k=ne.useRef(null),I=ne.useRef(null),q=u.find(m=>m.value===o),z=(q==null?void 0:q.label)||d,K=q==null?void 0:q.color,X=u.filter(m=>m.label.toLowerCase().includes(A.toLowerCase())),te=m=>{c(m),S(!1),_("")};return ne.useEffect(()=>{const m=O=>{M.current&&!M.current.contains(O.target)&&S(!1)};return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[]),ne.useEffect(()=>{y&&I.current&&I.current.focus()},[y]),ne.useEffect(()=>{if(!y||!k.current)return;const m=k.current.getBoundingClientRect(),O=window.innerHeight||document.documentElement.clientHeight,H=O*.4,W=O-m.bottom,Z=m.top;W<H&&Z>W?b(!0):b(!1)},[y]),v.jsxs("div",{className:`relative block ${h||""}`,ref:M,children:[v.jsxs("span",{className:"flex w-full divide-x divide-gray-300 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm",children:[v.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative text-left",onClick:()=>{const m=!y;S(m),m&&_("")},ref:k,children:v.jsx("span",{style:{color:K||"inherit"},children:z})}),v.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white focus:relative","aria-label":"Menu",onClick:()=>{const m=!y;S(m),m&&_("")},children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),y&&v.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 dark:divide-gray-700 overflow-hidden rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg max-h-[40vh] overflow-y-auto ${p?"bottom-full mb-2":"top-full mt-2"}`,children:u.length>0?v.jsxs("div",{children:[v.jsx("p",{className:"sticky top-0 bg-white dark:bg-gray-900 px-3 py-2 text-xs uppercase text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 z-20",children:r}),v.jsx("input",{type:"text",ref:I,className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 px-2 py-1 text-base placeholder-gray-400 dark:placeholder-gray-500",placeholder:"Search...",value:A,onChange:m=>_(m.target.value),onKeyDown:m=>{m.key==="Enter"&&X.length===1&&(m.preventDefault(),te(X[0].value))}}),X.map(m=>v.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white",role:"menuitem",onClick:O=>{O.preventDefault(),te(m.value)},children:v.jsx("span",{style:{color:m.color||"inherit"},children:m.label})},m.value)),X.length===0&&v.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No matching options"})]}):v.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500 dark:text-gray-400",children:"No options available"})})]})}const Yr=({onClick:r,text:u})=>v.jsx("button",{type:"button",className:"inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",onClick:r,children:u});function Km({items:r}){const u=ln(y=>y.input.present.avoid),o=ln(y=>y.input.present.avoidEnabled),c=In(),[d,h]=ne.useState("");return v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("input",{id:"avoid-toggle",type:"checkbox",checked:o,onChange:()=>c(L0()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),v.jsx("label",{htmlFor:"avoid-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Avoid Items"})]}),o&&v.jsxs(v.Fragment,{children:[v.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch gap-2 mt-2",children:[v.jsx(dl,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...r.sort(U0).map(y=>({value:y.id||y.name,label:`${y.name} (${y.cost})`,color:fl(y.rarity)}))],value:d,onChange:h,className:"flex-grow w-full"}),v.jsx(Yr,{text:"Add",onClick:()=>{d&&(c(w0(d)),h(""))}})]}),u.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:u.map(y=>{const S=r.find(p=>(p.id||p.name)===y);return v.jsx(k0,{label:S?S.name:y,onRemove:()=>c(Mm(y))},y)})})]})]})}function Hs({value:r,onChange:u,min:o,max:c,step:d,placeholder:h,className:y,label:S}){const[p,b]=ne.useState(r.toString());ne.useEffect(()=>{b(r.toString())},[r]);const A=_=>{const M=_.target.value;if(b(M),M===""||M==="-")return;const k=Number(M);isNaN(k)||u(k)};return v.jsx("div",{className:`relative ${y||""}`,children:v.jsx("input",{type:"number",className:"block w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm transition-colors focus:border-indigo-500 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 placeholder-gray-400 dark:placeholder-gray-500 no-spinner",value:p,onChange:A,inputMode:"decimal",pattern:".*",min:o,max:c,step:d,placeholder:h,"aria-label":S||h||"Number input"})})}function Qm(){const r=ln(o=>o.input.present.cash),u=In();return v.jsxs("div",{children:[v.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium dark:text-gray-300",children:"Total Cash"}),v.jsx(Hs,{value:r,onChange:o=>u(Dm(o)),min:0,label:"Total Cash",className:"mt-1"})]})}function fa(r){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[r]||r}function Zm(r,u){const o=["WP","AP","AS","Health","Armor","Shields"],c=o.indexOf(r),d=o.indexOf(u);return c!==-1&&d!==-1?c-d:c!==-1?-1:d!==-1?1:r.localeCompare(u)}function Jm({items:r}){const u=ln(d=>d.input.present.equipped),o=ln(d=>d.input.present.equippedEnabled),c=In();return v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:o,onChange:()=>c(wm()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),v.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm dark:text-gray-300 select-none",children:"Use Equipped Items"})]}),o&&v.jsxs("div",{className:"space-y-4 mt-2",children:[u.map((d,h)=>v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx(dl,{label:`Equipped Slot ${h+1}`,placeholder:"None",options:[{value:"",label:"None"},...r.sort(U0).map(y=>({value:y.id||y.name,label:`${y.name} (${y.cost}) ${y.attributes.filter(S=>S.type!=="description").map(S=>`${fa(S.type)}-${S.value}`).join(", ")}`,color:fl(y.rarity)}))],value:d,onChange:y=>c(Cm({index:h,id:y})),className:"flex-grow"}),u.length>1&&v.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>c(Ym(h)),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},h)),u.length<6&&v.jsx(Yr,{text:"Add Slot",onClick:()=>c(qm())})]})]})}function Fm({heroes:r}){const u=ln(c=>c.input.present.hero),o=In();return v.jsxs("div",{children:[v.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium mb-1 dark:text-gray-300",children:"Hero"}),v.jsx(dl,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...r.map(c=>({value:c,label:c}))],value:u,onChange:c=>o(Nm(c))})]})}function $m({attrTypes:r}){const u=In(),o=ln(h=>h.input.present.minValueEnabled),c=ln(h=>h.input.present.minAttrGroups),d=r.map(h=>({value:h,label:fa(h)}));return v.jsxs("div",{children:[v.jsxs("div",{className:"flex items-center gap-2",children:[v.jsx("input",{id:"min-value-toggle",type:"checkbox",checked:o,onChange:()=>u(Um()),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),v.jsx("label",{htmlFor:"min-value-toggle",className:"text-sm dark:text-gray-300 select-none",children:"Enable Minimum Values"})]}),o&&v.jsxs("div",{className:"space-y-4  mt-2",children:[c.map((h,y)=>v.jsxs("div",{className:"rounded border p-3 space-y-2",children:[v.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-2",children:[v.jsx("span",{className:"text-sm font-medium dark:text-gray-300",children:"Target Value:"}),v.jsx(Hs,{value:h.value,onChange:S=>u(km({index:y,value:S})),min:0,label:"Minimum Value",className:"w-full sm:w-24"}),c.length>1&&v.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>u(jm(y)),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]}),v.jsx(dl,{label:"Add Attribute",placeholder:"Add attribute",options:d.filter(S=>!h.attrs.includes(S.value)),value:"",onChange:S=>u(zm({index:y,attr:S})),className:"w-full"}),h.attrs.length>0&&v.jsx("div",{className:"flex flex-wrap gap-2",children:h.attrs.map(S=>v.jsx(k0,{label:fa(S),onRemove:()=>u(Gm({index:y,attr:S}))},S))})]},y)),v.jsx(Yr,{text:"Add Group",onClick:()=>u(Bm())})]})]})}function ev({onSubmit:r,validate:u}){const o=In(),c=ln(h=>h.input.present.toBuy),d=ln(h=>h.input.present.error);return v.jsxs("div",{className:"!mt-8 border-t pt-6",children:[v.jsx("button",{type:"button",onClick:()=>{u()&&r()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 dark:bg-teal-700 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 dark:hover:bg-teal-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900",disabled:!u(),children:"Calculate Optimal Build"}),v.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(h=>v.jsx("button",{type:"button",onClick:()=>o(M0(h)),className:`rounded-lg py-2 text-sm font-medium ${c===h?"bg-indigo-600 dark:bg-indigo-700 text-white":"bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"}`,children:h},h))}),d&&v.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 dark:border-red-700 bg-red-50 dark:bg-gray-900 p-4 text-sm font-medium text-red-800 dark:text-red-300",children:d})]})}function nv({value:r,onChange:u,min:o=0,max:c=100,step:d=1,className:h,label:y,showValue:S=!0,disabled:p=!1}){const[b,A]=ne.useState(r);ne.useEffect(()=>{A(r)},[r]);const _=ne.useCallback(k=>{const I=Number(k.target.value);A(I),u(I)},[u]),M=(b-o)/(c-o)*100;return v.jsxs("div",{className:`relative ${h||""}`,children:[y&&v.jsxs("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:[y,S&&v.jsx("span",{className:"ml-2 text-indigo-600 dark:text-indigo-400 font-semibold",children:b})]}),v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg relative overflow-hidden",children:v.jsx("div",{className:"h-full bg-gradient-to-r from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500 rounded-lg transition-all duration-150 ease-out",style:{width:`${M}%`}})}),v.jsx("input",{type:"range",min:o,max:c,step:d,value:b,onChange:_,disabled:p,className:`absolute top-1/2 left-0 w-full h-6 -translate-y-1/2 appearance-none bg-transparent focus:outline-none ${p?"cursor-not-allowed":"cursor-pointer"}`,"aria-label":y||`Slider from ${o} to ${c}`,style:{pointerEvents:p?"none":"auto"}})]}),v.jsxs("div",{className:"flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400",children:[v.jsx("span",{children:o}),v.jsx("span",{children:c})]})]})}function tv({attrTypes:r}){const u=ln(d=>d.input.present.weights),o=In(),c=r.map(d=>({value:d,label:fa(d)}));return v.jsxs("div",{children:[v.jsx("label",{className:"block text-sm font-medium dark:text-gray-300",children:"Attribute Weights"}),v.jsx("div",{className:"space-y-4 mt-1 mb-4",children:u.map((d,h)=>{const y=u.map((p,b)=>b!==h?p.type:null).filter(Boolean),S=c.filter(p=>!y.includes(p.value)||p.value===d.type);return v.jsxs("div",{className:"grid",children:[v.jsxs("div",{className:"flex flex-col gap-2 sm:flex-row sm:items-center",children:[v.jsx("div",{className:"w-full",children:v.jsx(dl,{label:"Attribute Type",placeholder:"Select type",options:S,value:d.type,onChange:p=>o(H0({index:h,type:p})),className:"flex-grow w-full"})}),v.jsx("div",{className:"flex flex-col gap-2 w-full sm:w-auto",children:v.jsxs("div",{className:"flex flex-row items-center gap-2",children:[v.jsx(Hs,{value:d.weight,onChange:p=>o(Qb({index:h,value:p})),min:0,max:100,step:.01,label:`Weight for ${fa(d.type)}`,className:"w-full sm:w-24"}),v.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 dark:text-gray-500 hover:bg-red-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-400",onClick:()=>o(Hm(h)),children:v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]})})]}),v.jsx("div",{className:"w-full",children:v.jsx(nv,{value:d.weight,onChange:p=>o(Qb({index:h,value:p})),min:0,max:1,step:.05,showValue:!1,className:"w-full mt-2"})})]},h)})}),v.jsx(Yr,{onClick:()=>{const d=u.map(y=>y.type),h=r.find(y=>!d.includes(y))||r[0];o(Lm(h))},text:"Add Row"})]})}function av({heroes:r,attrTypes:u,filteredItems:o,onSubmit:c,validate:d}){return v.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8  dark:border-gray-700",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Configuration"}),v.jsxs("form",{onSubmit:h=>{h.preventDefault(),d()&&c()},className:"grid",children:[v.jsxs("div",{className:"grid gap-4 grid-cols-1 sm:grid-cols-2",children:[v.jsx(Fm,{heroes:r}),v.jsx(Qm,{})]}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(Jm,{items:o}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(Km,{items:o}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx($m,{attrTypes:u}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(tv,{attrTypes:u}),v.jsx("hr",{className:"my-4 border-gray-300 dark:border-gray-600"}),v.jsx(ev,{onSubmit:c,validate:d})]})]})}function iv({alternatives:r}){return r.length===0?null:v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Alternative Builds"}),v.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 max-h-48 overflow-y-auto",children:r.map((u,o)=>v.jsxs("li",{className:"text-sm text-gray-700 dark:text-gray-300 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700",children:[v.jsxs("strong",{children:["Cost: ",u.cost]})," -"," ",u.items.map((c,d)=>v.jsxs("span",{style:{color:fl(c.rarity)},children:[c.name,d<u.items.length-1?", ":""]},c.id||c.name))]},o))})]})}function lv({results:r}){return r.breakdown?v.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:[v.jsx("strong",{children:"Breakdown:"}),v.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[v.jsx("thead",{children:v.jsxs("tr",{children:[v.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Type"}),v.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Sum"}),v.jsx("th",{className:"px-2 py-1 border-b border-gray-200 dark:border-gray-700 font-medium",children:"Contribution"})]})}),v.jsx("tbody",{children:r.breakdown.map(u=>v.jsxs("tr",{className:"dark:bg-gray-900",children:[v.jsx("td",{className:"px-2 py-1",children:fa(u.type)}),v.jsx("td",{className:"px-2 py-1",children:u.sum}),v.jsx("td",{className:"px-2 py-1",children:u.contrib.toFixed(2)})]},u.type))})]})]}):null}var al={},$a={},Cr={},la={},ra={},ys={},Jb;function z0(){return Jb||(Jb=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.Doctype=r.CDATA=r.Tag=r.Style=r.Script=r.Comment=r.Directive=r.Text=r.Root=r.isTag=r.ElementType=void 0;var u;(function(c){c.Root="root",c.Text="text",c.Directive="directive",c.Comment="comment",c.Script="script",c.Style="style",c.Tag="tag",c.CDATA="cdata",c.Doctype="doctype"})(u=r.ElementType||(r.ElementType={}));function o(c){return c.type===u.Tag||c.type===u.Script||c.type===u.Style}r.isTag=o,r.Root=u.Root,r.Text=u.Text,r.Directive=u.Directive,r.Comment=u.Comment,r.Script=u.Script,r.Style=u.Style,r.Tag=u.Tag,r.CDATA=u.CDATA,r.Doctype=u.Doctype}(ys)),ys}var oe={},Fb;function $b(){if(Fb)return oe;Fb=1;var r=oe&&oe.__extends||function(){var m=function(O,H){return m=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(W,Z){W.__proto__=Z}||function(W,Z){for(var me in Z)Object.prototype.hasOwnProperty.call(Z,me)&&(W[me]=Z[me])},m(O,H)};return function(O,H){if(typeof H!="function"&&H!==null)throw new TypeError("Class extends value "+String(H)+" is not a constructor or null");m(O,H);function W(){this.constructor=O}O.prototype=H===null?Object.create(H):(W.prototype=H.prototype,new W)}}(),u=oe&&oe.__assign||function(){return u=Object.assign||function(m){for(var O,H=1,W=arguments.length;H<W;H++){O=arguments[H];for(var Z in O)Object.prototype.hasOwnProperty.call(O,Z)&&(m[Z]=O[Z])}return m},u.apply(this,arguments)};Object.defineProperty(oe,"__esModule",{value:!0}),oe.cloneNode=oe.hasChildren=oe.isDocument=oe.isDirective=oe.isComment=oe.isText=oe.isCDATA=oe.isTag=oe.Element=oe.Document=oe.CDATA=oe.NodeWithChildren=oe.ProcessingInstruction=oe.Comment=oe.Text=oe.DataNode=oe.Node=void 0;var o=z0(),c=function(){function m(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(m.prototype,"parentNode",{get:function(){return this.parent},set:function(O){this.parent=O},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"previousSibling",{get:function(){return this.prev},set:function(O){this.prev=O},enumerable:!1,configurable:!0}),Object.defineProperty(m.prototype,"nextSibling",{get:function(){return this.next},set:function(O){this.next=O},enumerable:!1,configurable:!0}),m.prototype.cloneNode=function(O){return O===void 0&&(O=!1),te(this,O)},m}();oe.Node=c;var d=function(m){r(O,m);function O(H){var W=m.call(this)||this;return W.data=H,W}return Object.defineProperty(O.prototype,"nodeValue",{get:function(){return this.data},set:function(H){this.data=H},enumerable:!1,configurable:!0}),O}(c);oe.DataNode=d;var h=function(m){r(O,m);function O(){var H=m!==null&&m.apply(this,arguments)||this;return H.type=o.ElementType.Text,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),O}(d);oe.Text=h;var y=function(m){r(O,m);function O(){var H=m!==null&&m.apply(this,arguments)||this;return H.type=o.ElementType.Comment,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),O}(d);oe.Comment=y;var S=function(m){r(O,m);function O(H,W){var Z=m.call(this,W)||this;return Z.name=H,Z.type=o.ElementType.Directive,Z}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),O}(d);oe.ProcessingInstruction=S;var p=function(m){r(O,m);function O(H){var W=m.call(this)||this;return W.children=H,W}return Object.defineProperty(O.prototype,"firstChild",{get:function(){var H;return(H=this.children[0])!==null&&H!==void 0?H:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"childNodes",{get:function(){return this.children},set:function(H){this.children=H},enumerable:!1,configurable:!0}),O}(c);oe.NodeWithChildren=p;var b=function(m){r(O,m);function O(){var H=m!==null&&m.apply(this,arguments)||this;return H.type=o.ElementType.CDATA,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),O}(p);oe.CDATA=b;var A=function(m){r(O,m);function O(){var H=m!==null&&m.apply(this,arguments)||this;return H.type=o.ElementType.Root,H}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),O}(p);oe.Document=A;var _=function(m){r(O,m);function O(H,W,Z,me){Z===void 0&&(Z=[]),me===void 0&&(me=H==="script"?o.ElementType.Script:H==="style"?o.ElementType.Style:o.ElementType.Tag);var De=m.call(this,Z)||this;return De.name=H,De.attribs=W,De.type=me,De}return Object.defineProperty(O.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"tagName",{get:function(){return this.name},set:function(H){this.name=H},enumerable:!1,configurable:!0}),Object.defineProperty(O.prototype,"attributes",{get:function(){var H=this;return Object.keys(this.attribs).map(function(W){var Z,me;return{name:W,value:H.attribs[W],namespace:(Z=H["x-attribsNamespace"])===null||Z===void 0?void 0:Z[W],prefix:(me=H["x-attribsPrefix"])===null||me===void 0?void 0:me[W]}})},enumerable:!1,configurable:!0}),O}(p);oe.Element=_;function M(m){return(0,o.isTag)(m)}oe.isTag=M;function k(m){return m.type===o.ElementType.CDATA}oe.isCDATA=k;function I(m){return m.type===o.ElementType.Text}oe.isText=I;function q(m){return m.type===o.ElementType.Comment}oe.isComment=q;function z(m){return m.type===o.ElementType.Directive}oe.isDirective=z;function K(m){return m.type===o.ElementType.Root}oe.isDocument=K;function X(m){return Object.prototype.hasOwnProperty.call(m,"children")}oe.hasChildren=X;function te(m,O){O===void 0&&(O=!1);var H;if(I(m))H=new h(m.data);else if(q(m))H=new y(m.data);else if(M(m)){var W=O?J(m.children):[],Z=new _(m.name,u({},m.attribs),W);W.forEach(function(fe){return fe.parent=Z}),m.namespace!=null&&(Z.namespace=m.namespace),m["x-attribsNamespace"]&&(Z["x-attribsNamespace"]=u({},m["x-attribsNamespace"])),m["x-attribsPrefix"]&&(Z["x-attribsPrefix"]=u({},m["x-attribsPrefix"])),H=Z}else if(k(m)){var W=O?J(m.children):[],me=new b(W);W.forEach(function(le){return le.parent=me}),H=me}else if(K(m)){var W=O?J(m.children):[],De=new A(W);W.forEach(function(le){return le.parent=De}),m["x-mode"]&&(De["x-mode"]=m["x-mode"]),H=De}else if(z(m)){var Re=new S(m.name,m.data);m["x-name"]!=null&&(Re["x-name"]=m["x-name"],Re["x-publicId"]=m["x-publicId"],Re["x-systemId"]=m["x-systemId"]),H=Re}else throw new Error("Not implemented yet: ".concat(m.type));return H.startIndex=m.startIndex,H.endIndex=m.endIndex,m.sourceCodeLocation!=null&&(H.sourceCodeLocation=m.sourceCodeLocation),H}oe.cloneNode=te;function J(m){for(var O=m.map(function(W){return te(W,!0)}),H=1;H<O.length;H++)O[H].prev=O[H-1],O[H-1].next=O[H];return O}return oe}var e0;function G0(){return e0||(e0=1,function(r){var u=ra&&ra.__createBinding||(Object.create?function(S,p,b,A){A===void 0&&(A=b);var _=Object.getOwnPropertyDescriptor(p,b);(!_||("get"in _?!p.__esModule:_.writable||_.configurable))&&(_={enumerable:!0,get:function(){return p[b]}}),Object.defineProperty(S,A,_)}:function(S,p,b,A){A===void 0&&(A=b),S[A]=p[b]}),o=ra&&ra.__exportStar||function(S,p){for(var b in S)b!=="default"&&!Object.prototype.hasOwnProperty.call(p,b)&&u(p,S,b)};Object.defineProperty(r,"__esModule",{value:!0}),r.DomHandler=void 0;var c=z0(),d=$b();o($b(),r);var h={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},y=function(){function S(p,b,A){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof b=="function"&&(A=b,b=h),typeof p=="object"&&(b=p,p=void 0),this.callback=p??null,this.options=b??h,this.elementCB=A??null}return S.prototype.onparserinit=function(p){this.parser=p},S.prototype.onreset=function(){this.dom=[],this.root=new d.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},S.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},S.prototype.onerror=function(p){this.handleCallback(p)},S.prototype.onclosetag=function(){this.lastNode=null;var p=this.tagStack.pop();this.options.withEndIndices&&(p.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(p)},S.prototype.onopentag=function(p,b){var A=this.options.xmlMode?c.ElementType.Tag:void 0,_=new d.Element(p,b,void 0,A);this.addNode(_),this.tagStack.push(_)},S.prototype.ontext=function(p){var b=this.lastNode;if(b&&b.type===c.ElementType.Text)b.data+=p,this.options.withEndIndices&&(b.endIndex=this.parser.endIndex);else{var A=new d.Text(p);this.addNode(A),this.lastNode=A}},S.prototype.oncomment=function(p){if(this.lastNode&&this.lastNode.type===c.ElementType.Comment){this.lastNode.data+=p;return}var b=new d.Comment(p);this.addNode(b),this.lastNode=b},S.prototype.oncommentend=function(){this.lastNode=null},S.prototype.oncdatastart=function(){var p=new d.Text(""),b=new d.CDATA([p]);this.addNode(b),p.parent=b,this.lastNode=p},S.prototype.oncdataend=function(){this.lastNode=null},S.prototype.onprocessinginstruction=function(p,b){var A=new d.ProcessingInstruction(p,b);this.addNode(A)},S.prototype.handleCallback=function(p){if(typeof this.callback=="function")this.callback(p,this.dom);else if(p)throw p},S.prototype.addNode=function(p){var b=this.tagStack[this.tagStack.length-1],A=b.children[b.children.length-1];this.options.withStartIndices&&(p.startIndex=this.parser.startIndex),this.options.withEndIndices&&(p.endIndex=this.parser.endIndex),b.children.push(p),A&&(p.prev=A,A.next=p),p.parent=b,this.lastNode=null},S}();r.DomHandler=y,r.default=y}(ra)),ra}var ms={},n0;function rv(){return n0||(n0=1,function(r){Object.defineProperty(r,"__esModule",{value:!0}),r.CARRIAGE_RETURN_PLACEHOLDER_REGEX=r.CARRIAGE_RETURN_PLACEHOLDER=r.CARRIAGE_RETURN_REGEX=r.CARRIAGE_RETURN=r.CASE_SENSITIVE_TAG_NAMES_MAP=r.CASE_SENSITIVE_TAG_NAMES=void 0,r.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],r.CASE_SENSITIVE_TAG_NAMES_MAP=r.CASE_SENSITIVE_TAG_NAMES.reduce(function(u,o){return u[o.toLowerCase()]=o,u},{}),r.CARRIAGE_RETURN="\r",r.CARRIAGE_RETURN_REGEX=new RegExp(r.CARRIAGE_RETURN,"g"),r.CARRIAGE_RETURN_PLACEHOLDER="__HTML_DOM_PARSER_CARRIAGE_RETURN_PLACEHOLDER_".concat(Date.now(),"__"),r.CARRIAGE_RETURN_PLACEHOLDER_REGEX=new RegExp(r.CARRIAGE_RETURN_PLACEHOLDER,"g")}(ms)),ms}var t0;function q0(){if(t0)return la;t0=1,Object.defineProperty(la,"__esModule",{value:!0}),la.formatAttributes=c,la.escapeSpecialCharacters=h,la.revertEscapedCharacters=y,la.formatDOM=S;var r=G0(),u=rv();function o(p){return u.CASE_SENSITIVE_TAG_NAMES_MAP[p]}function c(p){for(var b={},A=0,_=p.length;A<_;A++){var M=p[A];b[M.name]=M.value}return b}function d(p){p=p.toLowerCase();var b=o(p);return b||p}function h(p){return p.replace(u.CARRIAGE_RETURN_REGEX,u.CARRIAGE_RETURN_PLACEHOLDER)}function y(p){return p.replace(u.CARRIAGE_RETURN_PLACEHOLDER_REGEX,u.CARRIAGE_RETURN)}function S(p,b,A){b===void 0&&(b=null);for(var _=[],M,k=0,I=p.length;k<I;k++){var q=p[k];switch(q.nodeType){case 1:{var z=d(q.nodeName);M=new r.Element(z,c(q.attributes)),M.children=S(z==="template"?q.content.childNodes:q.childNodes,M);break}case 3:M=new r.Text(y(q.nodeValue));break;case 8:M=new r.Comment(q.nodeValue);break;default:continue}var K=_[k-1]||null;K&&(K.next=M),M.parent=b,M.prev=K,M.next=null,_.push(M)}return A&&(M=new r.ProcessingInstruction(A.substring(0,A.indexOf(" ")).toLowerCase(),A),M.next=_[0]||null,M.parent=b,_.unshift(M),_[1]&&(_[1].prev=_[0])),_}return la}var a0;function uv(){if(a0)return Cr;a0=1,Object.defineProperty(Cr,"__esModule",{value:!0}),Cr.default=q;var r=q0(),u="html",o="head",c="body",d=/<([a-zA-Z]+[0-9]?)/,h=/<head[^]*>/i,y=/<body[^]*>/i,S=function(z,K){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},p=function(z,K){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},b=typeof window=="object"&&window.DOMParser;if(typeof b=="function"){var A=new b,_="text/html";p=function(z,K){return K&&(z="<".concat(K,">").concat(z,"</").concat(K,">")),A.parseFromString(z,_)},S=p}if(typeof document=="object"&&document.implementation){var M=document.implementation.createHTMLDocument();S=function(z,K){if(K){var X=M.documentElement.querySelector(K);return X&&(X.innerHTML=z),M}return M.documentElement.innerHTML=z,M}}var k=typeof document=="object"&&document.createElement("template"),I;k&&k.content&&(I=function(z){return k.innerHTML=z,k.content.childNodes});function q(z){var K,X;z=(0,r.escapeSpecialCharacters)(z);var te=z.match(d),J=te&&te[1]?te[1].toLowerCase():"";switch(J){case u:{var m=p(z);if(!h.test(z)){var O=m.querySelector(o);(K=O==null?void 0:O.parentNode)===null||K===void 0||K.removeChild(O)}if(!y.test(z)){var O=m.querySelector(c);(X=O==null?void 0:O.parentNode)===null||X===void 0||X.removeChild(O)}return m.querySelectorAll(u)}case o:case c:{var H=S(z).querySelectorAll(J);return y.test(z)&&h.test(z)?H[0].parentNode.childNodes:H}default:{if(I)return I(z);var O=S(z,c).querySelector(c);return O.childNodes}}}return Cr}var i0;function cv(){if(i0)return $a;i0=1;var r=$a&&$a.__importDefault||function(h){return h&&h.__esModule?h:{default:h}};Object.defineProperty($a,"__esModule",{value:!0}),$a.default=d;var u=r(uv()),o=q0(),c=/<(![a-zA-Z\s]+)>/;function d(h){if(typeof h!="string")throw new TypeError("First argument must be a string");if(!h)return[];var y=h.match(c),S=y?y[1]:void 0;return(0,o.formatDOM)((0,u.default)(h),null,S)}return $a}var Mr={},Ln={},il={},l0;function sv(){if(l0)return il;l0=1;var r=0;il.SAME=r;var u=1;return il.CAMELCASE=u,il.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1},il}var r0;function ov(){if(r0)return Ln;r0=1;const r=0,u=1,o=2,c=3,d=4,h=5,y=6;function S(m){return b.hasOwnProperty(m)?b[m]:null}function p(m,O,H,W,Z,me,De){this.acceptsBooleans=O===o||O===c||O===d,this.attributeName=W,this.attributeNamespace=Z,this.mustUseProperty=H,this.propertyName=m,this.type=O,this.sanitizeURL=me,this.removeEmptyString=De}const b={};["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(m=>{b[m]=new p(m,r,!1,m,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([m,O])=>{b[m]=new p(m,u,!1,O,null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(m=>{b[m]=new p(m,o,!1,m.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(m=>{b[m]=new p(m,o,!1,m,null,!1,!1)}),["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(m=>{b[m]=new p(m,c,!1,m.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(m=>{b[m]=new p(m,c,!0,m,null,!1,!1)}),["capture","download"].forEach(m=>{b[m]=new p(m,d,!1,m,null,!1,!1)}),["cols","rows","size","span"].forEach(m=>{b[m]=new p(m,y,!1,m,null,!1,!1)}),["rowSpan","start"].forEach(m=>{b[m]=new p(m,h,!1,m.toLowerCase(),null,!1,!1)});const _=/[\-\:]([a-z])/g,M=m=>m[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(m=>{const O=m.replace(_,M);b[O]=new p(O,u,!1,m,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(m=>{const O=m.replace(_,M);b[O]=new p(O,u,!1,m,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(m=>{const O=m.replace(_,M);b[O]=new p(O,u,!1,m,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(m=>{b[m]=new p(m,u,!1,m.toLowerCase(),null,!1,!1)});const k="xlinkHref";b[k]=new p("xlinkHref",u,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(m=>{b[m]=new p(m,u,!1,m.toLowerCase(),null,!0,!0)});const{CAMELCASE:I,SAME:q,possibleStandardNames:z}=sv(),X=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",te=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+X+"]*$")),J=Object.keys(z).reduce((m,O)=>{const H=z[O];return H===q?m[O]=O:H===I?m[O.toLowerCase()]=O:m[O]=H,m},{});return Ln.BOOLEAN=c,Ln.BOOLEANISH_STRING=o,Ln.NUMERIC=h,Ln.OVERLOADED_BOOLEAN=d,Ln.POSITIVE_NUMERIC=y,Ln.RESERVED=r,Ln.STRING=u,Ln.getPropertyInfo=S,Ln.isCustomAttribute=te,Ln.possibleStandardNames=J,Ln}var ll={},ei={},vs,u0;function fv(){if(u0)return vs;u0=1;var r=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,u=/\n/g,o=/^\s*/,c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,d=/^:\s*/,h=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,y=/^[;\s]*/,S=/^\s+|\s+$/g,p=`
`,b="/",A="*",_="",M="comment",k="declaration";vs=function(q,z){if(typeof q!="string")throw new TypeError("First argument must be a string");if(!q)return[];z=z||{};var K=1,X=1;function te(fe){var le=fe.match(u);le&&(K+=le.length);var Ae=fe.lastIndexOf(p);X=~Ae?fe.length-Ae:X+fe.length}function J(){var fe={line:K,column:X};return function(le){return le.position=new m(fe),W(),le}}function m(fe){this.start=fe,this.end={line:K,column:X},this.source=z.source}m.prototype.content=q;function O(fe){var le=new Error(z.source+":"+K+":"+X+": "+fe);if(le.reason=fe,le.filename=z.source,le.line=K,le.column=X,le.source=q,!z.silent)throw le}function H(fe){var le=fe.exec(q);if(le){var Ae=le[0];return te(Ae),q=q.slice(Ae.length),le}}function W(){H(o)}function Z(fe){var le;for(fe=fe||[];le=me();)le!==!1&&fe.push(le);return fe}function me(){var fe=J();if(!(b!=q.charAt(0)||A!=q.charAt(1))){for(var le=2;_!=q.charAt(le)&&(A!=q.charAt(le)||b!=q.charAt(le+1));)++le;if(le+=2,_===q.charAt(le-1))return O("End of comment missing");var Ae=q.slice(2,le-2);return X+=2,te(Ae),q=q.slice(le),X+=2,fe({type:M,comment:Ae})}}function De(){var fe=J(),le=H(c);if(le){if(me(),!H(d))return O("property missing ':'");var Ae=H(h),w=fe({type:k,property:I(le[0].replace(r,_)),value:Ae?I(Ae[0].replace(r,_)):_});return H(y),w}}function Re(){var fe=[];Z(fe);for(var le;le=De();)le!==!1&&(fe.push(le),Z(fe));return fe}return W(),Re()};function I(q){return q?q.replace(S,_):_}return vs}var c0;function dv(){if(c0)return ei;c0=1;var r=ei&&ei.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(ei,"__esModule",{value:!0}),ei.default=o;var u=r(fv());function o(c,d){var h=null;if(!c||typeof c!="string")return h;var y=(0,u.default)(c),S=typeof d=="function";return y.forEach(function(p){if(p.type==="declaration"){var b=p.property,A=p.value;S?d(b,A,p):A&&(h=h||{},h[b]=A)}}),h}return ei}var rl={},s0;function bv(){if(s0)return rl;s0=1,Object.defineProperty(rl,"__esModule",{value:!0}),rl.camelCase=void 0;var r=/^--[a-zA-Z0-9_-]+$/,u=/-([a-z])/g,o=/^[^-]+$/,c=/^-(webkit|moz|ms|o|khtml)-/,d=/^-(ms)-/,h=function(b){return!b||o.test(b)||r.test(b)},y=function(b,A){return A.toUpperCase()},S=function(b,A){return"".concat(A,"-")},p=function(b,A){return A===void 0&&(A={}),h(b)?b:(b=b.toLowerCase(),A.reactCompat?b=b.replace(d,S):b=b.replace(c,S),b.replace(u,y))};return rl.camelCase=p,rl}var ul,o0;function pv(){if(o0)return ul;o0=1;var r=ul&&ul.__importDefault||function(d){return d&&d.__esModule?d:{default:d}},u=r(dv()),o=bv();function c(d,h){var y={};return!d||typeof d!="string"||(0,u.default)(d,function(S,p){S&&p&&(y[(0,o.camelCase)(S,h)]=p)}),y}return c.default=c,ul=c,ul}var f0;function Y0(){return f0||(f0=1,function(r){var u=ll&&ll.__importDefault||function(A){return A&&A.__esModule?A:{default:A}};Object.defineProperty(r,"__esModule",{value:!0}),r.returnFirstArg=r.canTextBeChildOfNode=r.ELEMENTS_WITH_NO_TEXT_CHILDREN=r.PRESERVE_CUSTOM_ATTRIBUTES=void 0,r.isCustomComponent=h,r.setStyleProp=S;var o=ai(),c=u(pv()),d=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function h(A,_){return A.includes("-")?!d.has(A):!!(_&&typeof _.is=="string")}var y={reactCompat:!0};function S(A,_){if(typeof A=="string"){if(!A.trim()){_.style={};return}try{_.style=(0,c.default)(A,y)}catch{_.style={}}}}r.PRESERVE_CUSTOM_ATTRIBUTES=Number(o.version.split(".")[0])>=16,r.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var p=function(A){return!r.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(A.name)};r.canTextBeChildOfNode=p;var b=function(A){return A};r.returnFirstArg=b}(ll)),ll}var d0;function I0(){if(d0)return Mr;d0=1,Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.default=h;var r=ov(),u=Y0(),o=["checked","value"],c=["input","select","textarea"],d={reset:!0,submit:!0};function h(S,p){S===void 0&&(S={});var b={},A=!!(S.type&&d[S.type]);for(var _ in S){var M=S[_];if((0,r.isCustomAttribute)(_)){b[_]=M;continue}var k=_.toLowerCase(),I=y(k);if(I){var q=(0,r.getPropertyInfo)(I);switch(o.includes(I)&&c.includes(p)&&!A&&(I=y("default"+k)),b[I]=M,q&&q.type){case r.BOOLEAN:b[I]=!0;break;case r.OVERLOADED_BOOLEAN:M===""&&(b[I]=!0);break}continue}u.PRESERVE_CUSTOM_ATTRIBUTES&&(b[_]=M)}return(0,u.setStyleProp)(S.style,b),b}function y(S){return r.possibleStandardNames[S]}return Mr}var ni={},b0;function hv(){if(b0)return ni;b0=1;var r=ni&&ni.__importDefault||function(S){return S&&S.__esModule?S:{default:S}};Object.defineProperty(ni,"__esModule",{value:!0}),ni.default=h;var u=ai(),o=r(I0()),c=Y0(),d={cloneElement:u.cloneElement,createElement:u.createElement,isValidElement:u.isValidElement};function h(S,p){p===void 0&&(p={});for(var b=[],A=typeof p.replace=="function",_=p.transform||c.returnFirstArg,M=p.library||d,k=M.cloneElement,I=M.createElement,q=M.isValidElement,z=S.length,K=0;K<z;K++){var X=S[K];if(A){var te=p.replace(X,K);if(q(te)){z>1&&(te=k(te,{key:te.key||K})),b.push(_(te,X,K));continue}}if(X.type==="text"){var J=!X.data.trim().length;if(J&&X.parent&&!(0,c.canTextBeChildOfNode)(X.parent)||p.trim&&J)continue;b.push(_(X.data,X,K));continue}var m=X,O={};y(m)?((0,c.setStyleProp)(m.attribs.style,m.attribs),O=m.attribs):m.attribs&&(O=(0,o.default)(m.attribs,m.name));var H=void 0;switch(X.type){case"script":case"style":X.children[0]&&(O.dangerouslySetInnerHTML={__html:X.children[0].data});break;case"tag":X.name==="textarea"&&X.children[0]?O.defaultValue=X.children[0].data:X.children&&X.children.length&&(H=h(X.children,p));break;default:continue}z>1&&(O.key=K),b.push(_(I(X.name,O,H),X,K))}return b.length===1?b[0]:b}function y(S){return c.PRESERVE_CUSTOM_ATTRIBUTES&&S.type==="tag"&&(0,c.isCustomComponent)(S.name,S.attribs)}return ni}var p0;function yv(){return p0||(p0=1,function(r){var u=al&&al.__importDefault||function(p){return p&&p.__esModule?p:{default:p}};Object.defineProperty(r,"__esModule",{value:!0}),r.htmlToDOM=r.domToReact=r.attributesToProps=r.Text=r.ProcessingInstruction=r.Element=r.Comment=void 0,r.default=S;var o=u(cv());r.htmlToDOM=o.default;var c=u(I0());r.attributesToProps=c.default;var d=u(hv());r.domToReact=d.default;var h=G0();Object.defineProperty(r,"Comment",{enumerable:!0,get:function(){return h.Comment}}),Object.defineProperty(r,"Element",{enumerable:!0,get:function(){return h.Element}}),Object.defineProperty(r,"ProcessingInstruction",{enumerable:!0,get:function(){return h.ProcessingInstruction}}),Object.defineProperty(r,"Text",{enumerable:!0,get:function(){return h.Text}});var y={lowerCaseAttributeNames:!1};function S(p,b){if(typeof p!="string")throw new TypeError("First argument must be a string");return p?(0,d.default)((0,o.default)(p,(b==null?void 0:b.htmlparser2)||y),b):[]}}(al)),al}var mv=yv();const h0=cy(mv),vv=h0.default||h0;function gv({title:r,subtitle:u,iconUrl:o,content:c,price:d,rarity:h,onAvoid:y,showAvoidButton:S}){return v.jsxs("div",{className:"glass-card flex flex-col font-noto rounded-[10px] overflow-hidden dark:bg-gray-800 dark:border-gray-700",children:[v.jsxs("div",{className:"flex items-center gap-4 px-5 py-4",children:[o&&v.jsx("img",{src:o,alt:"",width:60,height:60,className:"rounded-lg object-cover"}),v.jsxs("div",{children:[v.jsx("div",{className:"text-lg font-bold",style:{color:fl(h)},children:r}),u&&v.jsx("div",{className:"text-sm font-semibold",style:{color:"#f67422"},children:u})]})]}),v.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),v.jsx("div",{className:"flex flex-col gap-2 px-5 py-4",children:c.map((p,b)=>v.jsxs("div",{className:"flex items-center gap-3",children:[p.iconUrl&&v.jsx("img",{src:p.iconUrl,alt:"",width:30,height:30,className:"rounded object-cover",style:{borderRadius:4}}),v.jsx("span",{className:"text-sm font-merriweather",style:{color:"#fdfdfd"},children:vv(p.text)})]},b))}),v.jsx("div",{className:"h-px mx-4",style:{background:"#264268"}}),v.jsxs("div",{className:"flex items-center justify-between px-5 py-3",children:[v.jsx("span",{className:"font-mono text-base font-bold",style:{color:"#fdfdfd"},children:d}),S&&v.jsx("button",{type:"button","aria-label":`Avoid ${r}`,className:"text-xs text-red-500 hover:underline",onClick:y,children:"Avoid"})]})]})}function Sv({eqItems:r,resultItems:u}){const o=In(),c=ln(h=>h.input.present.avoidEnabled),d=[...r,...u].sort(B0);return v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200",children:"Final Build"}),v.jsx("ul",{className:"mt-2 space-y-3 max-h-fit overflow-y-auto pr-2",children:d.map(h=>v.jsx("li",{children:v.jsx(gv,{title:h.name,subtitle:h.tab,rarity:h.rarity,content:h.attributes.map(y=>y.type==="description"?{text:`<span class='font-sm text-[#8fa6d7]'>${y.value}</span>`}:y.type==="Editor's Note"?{text:`<strong>Editor's Note: </strong><br /><span class='font-sm text-[#8fa6d7]'>${y.value}</span>`}:{text:`<strong>${y.value}</strong> <span class='font-sm text-[#8fa6d7]'>${fa(y.type)}</span>`}),price:`${h.cost} G`,showAvoidButton:!0,onAvoid:()=>{c||o(L0()),o(w0(h.id||h.name))}})},h.id))})]})}function Ev({eqItems:r,resultItems:u}){const o=[...r,...u].sort(B0);return v.jsxs("div",{children:[v.jsx("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-200 mb-2",children:"Items Overview"}),v.jsx("table",{className:"w-full text-left border-collapse mb-4",children:v.jsx("tbody",{children:Array.from({length:2}).map((c,d)=>v.jsx("tr",{children:o.slice(d*3,d*3+3).map((h,y)=>v.jsx("td",{className:"px-2 py-1 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-800 dark:text-gray-100 min-w-[80px]",style:{color:h?fl(h.rarity):void 0},children:h?h.name:""},y))},d))})})]})}function Av(){return v.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700 p-12 bg-white dark:bg-gray-900",children:[v.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:v.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),v.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900 dark:text-gray-100",children:"No results yet"}),v.jsx("p",{className:"mt-1 text-sm text-gray-500 dark:text-gray-400",children:"Fill out the form and click calculate to see the magic."})]})}function Rv({results:r,eqCost:u,cash:o}){return v.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[v.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[v.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Weighted Score"}),v.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600 dark:text-teal-400",children:r.score.toFixed(2)})]}),v.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[v.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Total Cost"}),v.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600 dark:text-indigo-400",children:u+r.cost})]}),v.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 p-4",children:[v.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500 dark:text-gray-300",children:"Cash Remaining"}),v.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600 dark:text-green-400",children:o-u-r.cost})]})]})}function Tv({eqItems:r,eqCost:u,cash:o,results:c,alternatives:d}){return v.jsxs("div",{className:"glass-card space-y-6 rounded-xl shadow-lg p-6 sm:p-8   dark:border-gray-700",children:[v.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-gray-100 sm:text-3xl",children:"Results"}),c?v.jsxs("div",{className:"space-y-6",children:[v.jsx(Rv,{results:c,eqCost:u,cash:o}),v.jsx(Ev,{eqItems:r,resultItems:c.items}),v.jsx(lv,{results:c}),v.jsx(Sv,{eqItems:r,resultItems:c.items}),v.jsx(iv,{alternatives:d})]}):v.jsx(Av,{})]})}const Hn={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},wr={undo(){return{type:Hn.UNDO}},redo(){return{type:Hn.REDO}},jumpToFuture(r){return{type:Hn.JUMP_TO_FUTURE,index:r}},jumpToPast(r){return{type:Hn.JUMP_TO_PAST,index:r}},jump(r){return{type:Hn.JUMP,index:r}},clearHistory(){return{type:Hn.CLEAR_HISTORY}}};function y0(r,u=[]){return Array.isArray(r)?r:typeof r=="string"?[r]:u}function _v(r){return typeof r.present<"u"&&typeof r.future<"u"&&typeof r.past<"u"&&Array.isArray(r.future)&&Array.isArray(r.past)}function ca(r,u,o,c=null){return{past:r,present:u,future:o,group:c,_latestUnfiltered:u,index:r.length,limit:r.length+o.length+1}}let Ir,Un;const Ns={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function Ov(){Un={header:[],prev:[],action:[],next:[],msgs:[]}}function xv(){const{header:r,prev:u,next:o,action:c,msgs:d}=Un;console.group?(console.groupCollapsed(...r),console.log(...u),console.log(...c),console.log(...o),console.log(...d),console.groupEnd()):(console.log(...r),console.log(...u),console.log(...c),console.log(...o),console.log(...d))}function Ds(r,u,o){return[`%c${r}`,`color: ${u}; font-weight: bold`,o]}function Nv(r,u){Ov(),Ir&&(console.group?(Un.header=["%credux-undo","font-style: italic","action",r.type],Un.action=Ds("action",Ns.action,r),Un.prev=Ds("prev history",Ns.prevState,u)):(Un.header=["redux-undo action",r.type],Un.action=["action",r],Un.prev=["prev history",u]))}function qn(r){Ir&&(console.group?Un.next=Ds("next history",Ns.nextState,r):Un.next=["next history",r],xv())}function an(...r){Ir&&(Un.msgs=Un.msgs.concat([...r,`
`]))}function Dv(r){Ir=r}function gs(r,u){const o=ca([],r,[]);return u&&(o._latestUnfiltered=null),o}function Cv(r,u,o,c){const d=r.past.length+1;an("inserting",u),an("new free: ",o-d);const{past:h,_latestUnfiltered:y}=r,S=o&&o<=d,p=h.slice(S?1:0),b=y!=null?[...p,y]:p;return ca(b,u,[],c)}function V0(r,u){if(u<0||u>=r.future.length)return r;const{past:o,future:c,_latestUnfiltered:d}=r,h=[...o,d,...c.slice(0,u)],y=c[u],S=c.slice(u+1);return ca(h,y,S)}function X0(r,u){if(u<0||u>=r.past.length)return r;const{past:o,future:c,_latestUnfiltered:d}=r,h=o.slice(0,u),y=[...o.slice(u+1),d,...c],S=o[u];return ca(h,S,y)}function Ss(r,u){return u>0?V0(r,u-1):u<0?X0(r,r.past.length+u):r}function Mv(r,u){return u.indexOf(r)>-1?r:!r}function wv(r,u={}){Dv(u.debug);const o={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:Hn.UNDO,redoType:Hn.REDO,jumpToPastType:Hn.JUMP_TO_PAST,jumpToFutureType:Hn.JUMP_TO_FUTURE,jumpType:Hn.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...u,initTypes:y0(u.initTypes,["@@redux-undo/INIT"]),clearHistoryType:y0(u.clearHistoryType,[Hn.CLEAR_HISTORY])},c=o.neverSkipReducer?(h,y,...S)=>({...h,present:r(h.present,y,...S)}):h=>h;let d;return(h=d,y={},...S)=>{Nv(y,h);let p=h;if(!d)if(an("history is uninitialized"),h===void 0){const A=r(h,{type:"@@redux-undo/CREATE_HISTORY"},...S);return p=gs(A,o.ignoreInitialState),an("do not set initialState on probe actions"),qn(p),p}else _v(h)?(p=d=o.ignoreInitialState?h:ca(h.past,h.present,h.future),an("initialHistory initialized: initialState is a history",d)):(p=d=gs(h,o.ignoreInitialState),an("initialHistory initialized: initialState is not a history",d));let b;switch(y.type){case void 0:return p;case o.undoType:return b=Ss(p,-1),an("perform undo"),qn(b),c(b,y,...S);case o.redoType:return b=Ss(p,1),an("perform redo"),qn(b),c(b,y,...S);case o.jumpToPastType:return b=X0(p,y.index),an(`perform jumpToPast to ${y.index}`),qn(b),c(b,y,...S);case o.jumpToFutureType:return b=V0(p,y.index),an(`perform jumpToFuture to ${y.index}`),qn(b),c(b,y,...S);case o.jumpType:return b=Ss(p,y.index),an(`perform jump to ${y.index}`),qn(b),c(b,y,...S);case Mv(y.type,o.clearHistoryType):return b=gs(p.present,o.ignoreInitialState),an("perform clearHistory"),qn(b),c(b,y,...S);default:if(b=r(p.present,y,...S),o.initTypes.some(_=>_===y.type))return an("reset history due to init action"),qn(d),d;if(p._latestUnfiltered===b)return p;if(typeof o.filter=="function"&&!o.filter(y,b,p)){const _=ca(p.past,b,p.future,p.group);return o.syncFilter||(_._latestUnfiltered=p._latestUnfiltered),an("filter ignored action, not storing it in past"),qn(_),_}const A=o.groupBy(y,b,p);if(A!=null&&A===p.group){const _=ca(p.past,b,p.future,p.group);return an("groupBy grouped the action with the previous action"),qn(_),_}return p=Cv(p,b,o.limit,A),an("inserted new state into history"),qn(p),p}}}function Lv(r){return`${r.hero} - $${r.cash}`}function Hv({history:r}){const[u,o]=ne.useState(!1),c=ne.useRef(null);return ne.useEffect(()=>{const d=h=>{c.current&&!c.current.contains(h.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),v.jsxs("div",{className:"relative",ref:c,children:[v.jsxs("button",{type:"button",onClick:()=>o(d=>!d),className:"flex items-center gap-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800",children:["History",v.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:v.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),u&&v.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm shadow-lg",children:r.length>0?v.jsx("ul",{children:r.map((d,h)=>v.jsx("li",{className:"border-b border-gray-200 dark:border-gray-700 px-3 py-2 last:border-none dark:text-gray-100",children:Lv(d)},h))}):v.jsx("p",{className:"p-3 text-gray-500 dark:text-gray-400",children:"No history"})})]})}function Uv({onClose:r}){const u=In(),o=ln(_=>_.input.present),[c,d]=ne.useState(""),[h,y]=ne.useState(null),S=ne.useRef(null),p=async _=>{const M=await _.text();d(M);try{y(JSON.parse(M))}catch{y(null)}},b=()=>{const _=new Blob([JSON.stringify(o,null,2)],{type:"application/json"}),M=URL.createObjectURL(_),k=document.createElement("a");k.href=M,k.download="state.json",k.click(),URL.revokeObjectURL(M)},A=()=>{h&&(u(Im(h)),r())};return v.jsx("div",{className:"fixed inset-0 z-20 grid place-items-center bg-black/50 p-4",children:v.jsxs("div",{className:"glass-card relative w-full max-w-2xl space-y-4 rounded-xl bg-white dark:bg-gray-800 p-4",children:[v.jsx("button",{type:"button",onClick:r,"aria-label":"Close",className:"absolute right-2 top-2 rounded-full p-2 text-2xl text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"×"}),v.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[v.jsxs("div",{className:"flex flex-col gap-1",children:[v.jsx("label",{htmlFor:"import-text",className:"text-sm font-medium dark:text-gray-300",children:"Import JSON"}),v.jsx("textarea",{id:"import-text",className:"w-full h-40 p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100",placeholder:"Paste JSON here",value:c,onChange:_=>{const M=_.target.value;d(M);try{y(JSON.parse(M))}catch{y(null)}}})]}),v.jsxs("div",{className:"flex flex-col gap-1",children:[v.jsx("label",{htmlFor:"current-state",className:"text-sm font-medium dark:text-gray-300",children:"Current State"}),v.jsx("textarea",{id:"current-state",className:"w-full h-40 p-2 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100",readOnly:!0,value:JSON.stringify(o,null,2)})]})]}),v.jsxs("div",{onDragOver:_=>_.preventDefault(),onDrop:_=>{_.preventDefault();const M=_.dataTransfer.files[0];M&&p(M)},className:"flex items-center justify-center rounded border-2 border-dashed border-gray-400 p-4 text-sm text-gray-600 dark:text-gray-300",children:[v.jsx("input",{type:"file",accept:"application/json",ref:S,onChange:_=>{var k;const M=(k=_.target.files)==null?void 0:k[0];M&&p(M)},className:"hidden"}),v.jsx("button",{type:"button",onClick:()=>{var _;return(_=S.current)==null?void 0:_.click()},children:"Drop file or click to upload"})]}),v.jsxs("div",{className:"flex justify-end gap-2",children:[v.jsx("button",{type:"button",onClick:b,className:"rounded bg-indigo-600 px-3 py-1 text-white hover:bg-indigo-700",children:"Export"}),v.jsx("button",{type:"button",onClick:r,className:"rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600",children:"Cancel"}),v.jsx("button",{type:"button",disabled:!h,onClick:A,className:"rounded bg-teal-600 px-3 py-1 text-white hover:bg-teal-700 disabled:bg-gray-400",children:"Import"})]})]})})}function Bv(){const r=In(),u=ln(h=>h.input.past),o=ln(h=>h.input.future),[c,d]=ne.useState(!1);return ne.useEffect(()=>{const h=y=>{y.ctrlKey&&y.key.toLowerCase()==="z"&&(y.preventDefault(),y.shiftKey?r(wr.redo()):r(wr.undo()))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[r]),v.jsxs("div",{className:"flex items-center justify-between gap-4",children:[v.jsxs("div",{className:"flex gap-2",children:[v.jsx("button",{type:"button",disabled:u.length===0,onClick:()=>r(wr.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Undo"}),v.jsx("button",{type:"button",disabled:o.length===0,onClick:()=>r(wr.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400 dark:bg-indigo-700 dark:hover:bg-indigo-800 dark:disabled:bg-gray-700",children:"Redo"}),v.jsx(Hv,{history:u}),v.jsx("button",{type:"button",onClick:()=>d(!0),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-800",children:"Import"})]}),c&&v.jsx(Uv,{onClose:()=>d(!1)})]})}const jv=`{
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
`,kv=`{\r
  "IRONSIGHTS": {\r
    "attributes": [],\r
    "Ashe": [\r
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
    "attributes": [],\r
    "Ashe": [\r
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
    "attributes": [],\r
    "Ashe": [\r
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
    "attributes": [],\r
    "Ashe": [\r
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
    "attributes": [],\r
    "Ashe": [\r
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
        "value": "25%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "AP can stack up to 25%, estimate having 15% AP up time."\r
      }\r
    ]\r
  },\r
  "WEAPON JAMMER": {\r
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
        "type": "AS",\r
        "value": "10%"\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "Even if enemy has no bonus attack speed, you still gain the 10% attack speed from the item itself if you damage."\r
      }\r
    ]\r
  },\r
  "BLOODHOUND MASK": {\r
    "attributes": [],\r
    "Ashe": [\r
      {\r
        "type": "WP",\r
        "value": "20%"\r
      },\r
      {\r
        "type": "description",\r
        "value": "Gain <b>5%</b> Weapon Power for each enemy with a <b>[Wound]</b> within <b>12m</b>."\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "Instead of 15WP, You almost always have 5% more WP from this item."\r
      }\r
    ]\r
  },\r
  "SLICING SPREE": {\r
    "attributes": [],\r
    "Ashe": [\r
      {\r
        "type": "MS",\r
        "value": "10%"\r
      },\r
      {\r
        "type": "AS",\r
        "value": "10%"\r
      },\r
      {\r
        "type": "description",\r
        "value": "While within 12m of an enemy with a <b>[Wound]</b>, gain <b>5%</b> Move Speed and <b>10%</b> Attack Speed."\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "Instead of 5% MS, You almost always have 5% more MS and 10AS from this item."\r
      }\r
    ]\r
  },\r
  "SHRED AND LEAD": {\r
    "attributes": [],\r
    "Ashe": [\r
      {\r
        "type": "MA",\r
        "value": "33%"\r
      },\r
      {\r
        "type": "WPLS",\r
        "value": "10%"\r
      },\r
      {\r
        "type": "AS",\r
        "value": "10%"\r
      },\r
      {\r
        "type": "description",\r
        "value": "When you <b>[Wound</b> an enemy, gain <b>10%</b> Attack Speed for <b>4s</b>, stacking up to <b>3 times</b>."\r
      },\r
      {\r
        "type": "Editor's Note",\r
        "value": "You almost always have 1 stacks of 10% AS from this item."\r
      }\r
    ]\r
  }\r
}`;function zv(){const[r,u]=ne.useState([]),[o,c]=ne.useState([]),[d,h]=ne.useState([]),y=In(),S=ln(Y=>Y.input.present),{hero:p,cash:b,equipped:A,toBuy:_,avoid:M,avoidEnabled:k,weights:I,minValueEnabled:q,minAttrGroups:z,useOverrides:K}=S,[X,te]=ne.useState(null),[J,m]=ne.useState([]),O=ne.useState(new Map)[0],H=ne.useState(new Map)[0],W=ne.useState(new Map)[0],Z=JSON.parse(kv);ne.useEffect(()=>{const Y=JSON.parse(jv),ae=[],E=(ce,ee,Ue)=>{Ue.forEach(ge=>{const Qe=K?Z[ge.name]:void 0,Bn={...ge,tab:ce,rarity:ee};if(Qe){const Vn=Qe[p]||Qe.attributes;Vn&&(Bn.attributes=Vn)}ae.push(Bn)})};["weapon","ability","survival"].forEach(ce=>{const ee=Y.tabs[ce];E(ce,"common",ee.common),E(ce,"rare",ee.rare),E(ce,"epic",ee.epic)}),u(ae);const B=new Set,V=new Map,G=new Set;ae.forEach(ce=>{ce.character&&B.add(ce.character),ce.attributes.forEach(ee=>{const Ue=(V.get(ee.type)??0)+1;V.set(ee.type,Ue),Ue===2&&G.add(ee.type)})}),G.delete("description"),G.delete("Editor's Note");const F=Array.from(G).sort(Zm);c(Array.from(B).sort()),h(F),y(H0({index:0,type:F[0]}))},[p,K]),ne.useEffect(()=>{const Y=A.filter(ae=>ae).length;_+Y>6&&y(M0(Math.max(0,6-Y)))},[y,A,_]),ne.useEffect(()=>{O.clear(),H.clear()},[I,O,H]),ne.useEffect(()=>{W.clear()},[A,W]);function me(){const Y=A.filter(E=>E).sort().join(",");if(W.has(Y))return W.get(Y);const ae=A.map(E=>r.find(B=>B.id===E)).filter(E=>!!E);return W.set(Y,ae),ae}function De(){if(!p||b<0||me().reduce((ae,E)=>ae+E.cost,0)>b||_+me().length>6||I.length===0)return!1;if(q){for(const ae of z)if(ae.attrs.length===0||ae.value<0)return!1}return!0}function Re(Y){const ae=Y.map(V=>V.id||V.name).sort().join(",");if(O.has(ae))return O.get(ae);let E=H.get(ae);E||(E=xs(Y),H.set(ae,E));const B=Zb(E,I);return O.set(ae,B),B}function fe(Y){return!q||Wm([...Y,...me()],z)}function le(){if(y(ia("")),!De()){y(ia("Please check your inputs - ensure all required fields are filled"));return}const Y=me(),ae=Y.reduce((pe,Ce)=>pe+Ce.cost,0),E=b-ae;if(E<0){y(ia("Equipped items cost exceeds total cash"));return}const B=j0(I,q,z),V=r.filter(pe=>(!pe.character||pe.character===p)&&!A.includes(pe.id??"")&&(!k||!M.includes(pe.id??""))&&pe.attributes.some(Ce=>B.has(Ce.type))),G=_;if(G===0){if(!fe([])){y(ia("Minimum attribute values not met"));return}const pe=Re(Y);te({items:[],cost:0,score:pe}),m([]);return}if(V.length===0){y(ia("No items available that match your criteria"));return}const F=V.map(pe=>({item:pe,score:Re([pe])}));F.sort((pe,Ce)=>Ce.score-pe.score);const ce=F.filter(pe=>pe.item.cost<=E);if(ce.length===0){y(ia("No affordable items available"));return}const Ue=ce.slice(0,50),ge=[0];for(const pe of Ue)ge.push(ge[ge.length-1]+pe.score);let Qe=-1/0,Bn=[];const Vn=Y.length+G===6,bt=Ue.length,da=new Map;function ba(pe,Ce,zt,jn){if(bt>100&&Ce.length===0&&pe>50||(fe(Ce)&&(jn>Qe?(Qe=jn,Bn=[{items:[...Ce],cost:zt,score:jn}]):jn===Qe&&Bn.push({items:[...Ce],cost:zt,score:jn})),Ce.length===G||pe>=bt))return;const Xr=G-Ce.length;if(jn+(ge[Math.min(bt,pe+Xr)]-ge[pe])<Qe)return;const pt=`${pe}-${Ce.length}-${zt}-${Math.floor(jn)}`;if(!da.has(pt)){da.set(pt,!0);for(let Ve=pe;Ve<bt;Ve++){const dn=Ue[Ve];zt+dn.item.cost>E||(Ce.push(dn.item),ba(Ve+1,Ce,zt+dn.item.cost,jn+dn.score),Ce.pop())}}}if(ba(0,[],0,0),Bn.length===0){y(ia("Insufficient cash for any purchase"));return}const[ii,...Vr]=Bn.sort((pe,Ce)=>Vn?Ce.cost-pe.cost:pe.cost-Ce.cost),Rn=Vr.sort((pe,Ce)=>Vn?Ce.cost-pe.cost:pe.cost-Ce.cost),bl=xs([...ii.items,...Y]),pl=Pm(bl,I,q,z);te({items:ii.items,cost:ii.cost,score:Zb(bl,I),breakdown:pl}),m(Rn.map(pe=>({...pe,score:Re([...pe.items,...Y])})))}if(r.length===0)return v.jsx("div",{className:"p-4",children:"Loading..."});const Ae=r.filter(Y=>!p||!Y.character||Y.character===p),w=me(),P=w.reduce((Y,ae)=>Y+ae.cost,0);return v.jsxs("div",{className:"p-4 sm:p-6 lg:p-8 space-y-2",children:[v.jsx(Bv,{}),v.jsxs("div",{className:"mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8",children:[v.jsx(av,{heroes:o,attrTypes:d,filteredItems:Ae,onSubmit:le,validate:De}),v.jsx(Tv,{eqItems:w,eqCost:P,cash:b,results:X,alternatives:J}),v.jsx(Ay,{})]})]})}function Gv(){return v.jsx("div",{className:"dark h-screen overflow-hidden dark:text-gray-100 p-2 box-border",children:v.jsx("div",{className:"border border-[#346291] rounded-md h-full w-full",children:v.jsx("div",{className:"mx-auto grid gap-6 h-full overflow-y-auto",children:v.jsx(zv,{})})})})}const qv=pm({reducer:{input:wv(Vm)}});vy.createRoot(document.getElementById("root")).render(v.jsx(ne.StrictMode,{children:v.jsx(jy,{store:qv,children:v.jsx(Gv,{})})}));
