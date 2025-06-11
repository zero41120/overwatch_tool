(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))s(d);new MutationObserver(d=>{for(const h of d)if(h.type==="childList")for(const S of h.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&s(S)}).observe(document,{childList:!0,subtree:!0});function f(d){const h={};return d.integrity&&(h.integrity=d.integrity),d.referrerPolicy&&(h.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?h.credentials="include":d.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function s(d){if(d.ep)return;d.ep=!0;const h=f(d);fetch(d.href,h)}})();var Lc={exports:{}},Ya={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tb;function hh(){if(tb)return Ya;tb=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(s,d,h){var S=null;if(h!==void 0&&(S=""+h),d.key!==void 0&&(S=""+d.key),"key"in d){h={};for(var M in d)M!=="key"&&(h[M]=d[M])}else h=d;return d=h.ref,{$$typeof:i,type:s,key:S,ref:d!==void 0?d:null,props:h}}return Ya.Fragment=c,Ya.jsx=f,Ya.jsxs=f,Ya}var rb;function ph(){return rb||(rb=1,Lc.exports=hh()),Lc.exports}var _=ph(),Bc={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ab;function mh(){if(ab)return $;ab=1;var i=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),S=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),L=Symbol.iterator;function G(y){return y===null||typeof y!="object"?null:(y=L&&y[L]||y["@@iterator"],typeof y=="function"?y:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,bn={};function F(y,U,z){this.props=y,this.context=U,this.refs=bn,this.updater=z||W}F.prototype.isReactComponent={},F.prototype.setState=function(y,U){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,U,"setState")},F.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function on(){}on.prototype=F.prototype;function fn(y,U,z){this.props=y,this.context=U,this.refs=bn,this.updater=z||W}var mn=fn.prototype=new on;mn.constructor=fn,P(mn,F.prototype),mn.isPureReactComponent=!0;var j=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},nn=Object.prototype.hasOwnProperty;function yn(y,U,z,B,Q,cn){return z=cn.ref,{$$typeof:i,type:y,key:U,ref:z!==void 0?z:null,props:cn}}function Sn(y,U){return yn(y.type,U,void 0,void 0,void 0,y.props)}function Z(y){return typeof y=="object"&&y!==null&&y.$$typeof===i}function Mn(y){var U={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(z){return U[z]})}var Bn=/\/+/g;function Dn(y,U){return typeof y=="object"&&y!==null&&y.key!=null?Mn(""+y.key):U.toString(36)}function ge(){}function Fn(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(ge,ge):(y.status="pending",y.then(function(U){y.status==="pending"&&(y.status="fulfilled",y.value=U)},function(U){y.status==="pending"&&(y.status="rejected",y.reason=U)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function _n(y,U,z,B,Q){var cn=typeof y;(cn==="undefined"||cn==="boolean")&&(y=null);var J=!1;if(y===null)J=!0;else switch(cn){case"bigint":case"string":case"number":J=!0;break;case"object":switch(y.$$typeof){case i:case c:J=!0;break;case D:return J=y._init,_n(J(y._payload),U,z,B,Q)}}if(J)return Q=Q(y),J=B===""?"."+Dn(y,0):B,j(Q)?(z="",J!=null&&(z=J.replace(Bn,"$&/")+"/"),_n(Q,U,z,"",function(hn){return hn})):Q!=null&&(Z(Q)&&(Q=Sn(Q,z+(Q.key==null||y&&y.key===Q.key?"":(""+Q.key).replace(Bn,"$&/")+"/")+J)),U.push(Q)),1;J=0;var $n=B===""?".":B+":";if(j(y))for(var q=0;q<y.length;q++)B=y[q],cn=$n+Dn(B,q),J+=_n(B,U,z,cn,Q);else if(q=G(y),typeof q=="function")for(y=q.call(y),q=0;!(B=y.next()).done;)B=B.value,cn=$n+Dn(B,q++),J+=_n(B,U,z,cn,Q);else if(cn==="object"){if(typeof y.then=="function")return _n(Fn(y),U,z,B,Q);throw U=String(y),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return J}function O(y,U,z){if(y==null)return y;var B=[],Q=0;return _n(y,B,"","",function(cn){return U.call(z,cn,Q++)}),B}function H(y){if(y._status===-1){var U=y._result;U=U(),U.then(function(z){(y._status===0||y._status===-1)&&(y._status=1,y._result=z)},function(z){(y._status===0||y._status===-1)&&(y._status=2,y._result=z)}),y._status===-1&&(y._status=0,y._result=U)}if(y._status===1)return y._result.default;throw y._result}var Y=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function rn(){}return $.Children={map:O,forEach:function(y,U,z){O(y,function(){U.apply(this,arguments)},z)},count:function(y){var U=0;return O(y,function(){U++}),U},toArray:function(y){return O(y,function(U){return U})||[]},only:function(y){if(!Z(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},$.Component=F,$.Fragment=f,$.Profiler=d,$.PureComponent=fn,$.StrictMode=s,$.Suspense=g,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,$.__COMPILER_RUNTIME={__proto__:null,c:function(y){return w.H.useMemoCache(y)}},$.cache=function(y){return function(){return y.apply(null,arguments)}},$.cloneElement=function(y,U,z){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var B=P({},y.props),Q=y.key,cn=void 0;if(U!=null)for(J in U.ref!==void 0&&(cn=void 0),U.key!==void 0&&(Q=""+U.key),U)!nn.call(U,J)||J==="key"||J==="__self"||J==="__source"||J==="ref"&&U.ref===void 0||(B[J]=U[J]);var J=arguments.length-2;if(J===1)B.children=z;else if(1<J){for(var $n=Array(J),q=0;q<J;q++)$n[q]=arguments[q+2];B.children=$n}return yn(y.type,Q,void 0,void 0,cn,B)},$.createContext=function(y){return y={$$typeof:S,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:h,_context:y},y},$.createElement=function(y,U,z){var B,Q={},cn=null;if(U!=null)for(B in U.key!==void 0&&(cn=""+U.key),U)nn.call(U,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(Q[B]=U[B]);var J=arguments.length-2;if(J===1)Q.children=z;else if(1<J){for(var $n=Array(J),q=0;q<J;q++)$n[q]=arguments[q+2];Q.children=$n}if(y&&y.defaultProps)for(B in J=y.defaultProps,J)Q[B]===void 0&&(Q[B]=J[B]);return yn(y,cn,void 0,void 0,null,Q)},$.createRef=function(){return{current:null}},$.forwardRef=function(y){return{$$typeof:M,render:y}},$.isValidElement=Z,$.lazy=function(y){return{$$typeof:D,_payload:{_status:-1,_result:y},_init:H}},$.memo=function(y,U){return{$$typeof:m,type:y,compare:U===void 0?null:U}},$.startTransition=function(y){var U=w.T,z={};w.T=z;try{var B=y(),Q=w.S;Q!==null&&Q(z,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(rn,Y)}catch(cn){Y(cn)}finally{w.T=U}},$.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},$.use=function(y){return w.H.use(y)},$.useActionState=function(y,U,z){return w.H.useActionState(y,U,z)},$.useCallback=function(y,U){return w.H.useCallback(y,U)},$.useContext=function(y){return w.H.useContext(y)},$.useDebugValue=function(){},$.useDeferredValue=function(y,U){return w.H.useDeferredValue(y,U)},$.useEffect=function(y,U,z){var B=w.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(y,U)},$.useId=function(){return w.H.useId()},$.useImperativeHandle=function(y,U,z){return w.H.useImperativeHandle(y,U,z)},$.useInsertionEffect=function(y,U){return w.H.useInsertionEffect(y,U)},$.useLayoutEffect=function(y,U){return w.H.useLayoutEffect(y,U)},$.useMemo=function(y,U){return w.H.useMemo(y,U)},$.useOptimistic=function(y,U){return w.H.useOptimistic(y,U)},$.useReducer=function(y,U,z){return w.H.useReducer(y,U,z)},$.useRef=function(y){return w.H.useRef(y)},$.useState=function(y){return w.H.useState(y)},$.useSyncExternalStore=function(y,U,z){return w.H.useSyncExternalStore(y,U,z)},$.useTransition=function(){return w.H.useTransition()},$.version="19.1.0",$}var lb;function pi(){return lb||(lb=1,Bc.exports=mh()),Bc.exports}var un=pi(),wc={exports:{}},qa={},zc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib;function vh(){return ib||(ib=1,function(i){function c(O,H){var Y=O.length;O.push(H);n:for(;0<Y;){var rn=Y-1>>>1,y=O[rn];if(0<d(y,H))O[rn]=H,O[Y]=y,Y=rn;else break n}}function f(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var H=O[0],Y=O.pop();if(Y!==H){O[0]=Y;n:for(var rn=0,y=O.length,U=y>>>1;rn<U;){var z=2*(rn+1)-1,B=O[z],Q=z+1,cn=O[Q];if(0>d(B,Y))Q<y&&0>d(cn,B)?(O[rn]=cn,O[Q]=Y,rn=Q):(O[rn]=B,O[z]=Y,rn=z);else if(Q<y&&0>d(cn,Y))O[rn]=cn,O[Q]=Y,rn=Q;else break n}}return H}function d(O,H){var Y=O.sortIndex-H.sortIndex;return Y!==0?Y:O.id-H.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var S=Date,M=S.now();i.unstable_now=function(){return S.now()-M}}var g=[],m=[],D=1,L=null,G=3,W=!1,P=!1,bn=!1,F=!1,on=typeof setTimeout=="function"?setTimeout:null,fn=typeof clearTimeout=="function"?clearTimeout:null,mn=typeof setImmediate<"u"?setImmediate:null;function j(O){for(var H=f(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=O)s(m),H.sortIndex=H.expirationTime,c(g,H);else break;H=f(m)}}function w(O){if(bn=!1,j(O),!P)if(f(g)!==null)P=!0,nn||(nn=!0,Dn());else{var H=f(m);H!==null&&_n(w,H.startTime-O)}}var nn=!1,yn=-1,Sn=5,Z=-1;function Mn(){return F?!0:!(i.unstable_now()-Z<Sn)}function Bn(){if(F=!1,nn){var O=i.unstable_now();Z=O;var H=!0;try{n:{P=!1,bn&&(bn=!1,fn(yn),yn=-1),W=!0;var Y=G;try{e:{for(j(O),L=f(g);L!==null&&!(L.expirationTime>O&&Mn());){var rn=L.callback;if(typeof rn=="function"){L.callback=null,G=L.priorityLevel;var y=rn(L.expirationTime<=O);if(O=i.unstable_now(),typeof y=="function"){L.callback=y,j(O),H=!0;break e}L===f(g)&&s(g),j(O)}else s(g);L=f(g)}if(L!==null)H=!0;else{var U=f(m);U!==null&&_n(w,U.startTime-O),H=!1}}break n}finally{L=null,G=Y,W=!1}H=void 0}}finally{H?Dn():nn=!1}}}var Dn;if(typeof mn=="function")Dn=function(){mn(Bn)};else if(typeof MessageChannel<"u"){var ge=new MessageChannel,Fn=ge.port2;ge.port1.onmessage=Bn,Dn=function(){Fn.postMessage(null)}}else Dn=function(){on(Bn,0)};function _n(O,H){yn=on(function(){O(i.unstable_now())},H)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(O){O.callback=null},i.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Sn=0<O?Math.floor(1e3/O):5},i.unstable_getCurrentPriorityLevel=function(){return G},i.unstable_next=function(O){switch(G){case 1:case 2:case 3:var H=3;break;default:H=G}var Y=G;G=H;try{return O()}finally{G=Y}},i.unstable_requestPaint=function(){F=!0},i.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=G;G=O;try{return H()}finally{G=Y}},i.unstable_scheduleCallback=function(O,H,Y){var rn=i.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?rn+Y:rn):Y=rn,O){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=Y+y,O={id:D++,callback:H,priorityLevel:O,startTime:Y,expirationTime:y,sortIndex:-1},Y>rn?(O.sortIndex=Y,c(m,O),f(g)===null&&O===f(m)&&(bn?(fn(yn),yn=-1):bn=!0,_n(w,Y-rn))):(O.sortIndex=y,c(g,O),P||W||(P=!0,nn||(nn=!0,Dn()))),O},i.unstable_shouldYield=Mn,i.unstable_wrapCallback=function(O){var H=G;return function(){var Y=G;G=H;try{return O.apply(this,arguments)}finally{G=Y}}}}(Gc)),Gc}var ub;function gh(){return ub||(ub=1,zc.exports=vh()),zc.exports}var jc={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb;function Sh(){if(cb)return Jn;cb=1;var i=pi();function c(g){var m="https://react.dev/errors/"+g;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var D=2;D<arguments.length;D++)m+="&args[]="+encodeURIComponent(arguments[D])}return"Minified React error #"+g+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var s={d:{f,r:function(){throw Error(c(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},d=Symbol.for("react.portal");function h(g,m,D){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:L==null?null:""+L,children:g,containerInfo:m,implementation:D}}var S=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function M(g,m){if(g==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Jn.createPortal=function(g,m){var D=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(c(299));return h(g,m,null,D)},Jn.flushSync=function(g){var m=S.T,D=s.p;try{if(S.T=null,s.p=2,g)return g()}finally{S.T=m,s.p=D,s.d.f()}},Jn.preconnect=function(g,m){typeof g=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(g,m))},Jn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Jn.preinit=function(g,m){if(typeof g=="string"&&m&&typeof m.as=="string"){var D=m.as,L=M(D,m.crossOrigin),G=typeof m.integrity=="string"?m.integrity:void 0,W=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;D==="style"?s.d.S(g,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:L,integrity:G,fetchPriority:W}):D==="script"&&s.d.X(g,{crossOrigin:L,integrity:G,fetchPriority:W,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Jn.preinitModule=function(g,m){if(typeof g=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var D=M(m.as,m.crossOrigin);s.d.M(g,{crossOrigin:D,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(g)},Jn.preload=function(g,m){if(typeof g=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var D=m.as,L=M(D,m.crossOrigin);s.d.L(g,D,{crossOrigin:L,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Jn.preloadModule=function(g,m){if(typeof g=="string")if(m){var D=M(m.as,m.crossOrigin);s.d.m(g,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:D,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(g)},Jn.requestFormReset=function(g){s.d.r(g)},Jn.unstable_batchedUpdates=function(g,m){return g(m)},Jn.useFormState=function(g,m,D){return S.H.useFormState(g,m,D)},Jn.useFormStatus=function(){return S.H.useHostTransitionStatus()},Jn.version="19.1.0",Jn}var sb;function Eh(){if(sb)return jc.exports;sb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),jc.exports=Sh(),jc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob;function Ah(){if(ob)return qa;ob=1;var i=gh(),c=pi(),f=Eh();function s(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function h(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function S(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function M(n){if(h(n)!==n)throw Error(s(188))}function g(n){var e=n.alternate;if(!e){if(e=h(n),e===null)throw Error(s(188));return e!==n?null:n}for(var t=n,r=e;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(r=a.return,r!==null){t=r;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return M(a),n;if(l===r)return M(a),e;l=l.sibling}throw Error(s(188))}if(t.return!==r.return)t=a,r=l;else{for(var u=!1,o=a.child;o;){if(o===t){u=!0,t=a,r=l;break}if(o===r){u=!0,r=a,t=l;break}o=o.sibling}if(!u){for(o=l.child;o;){if(o===t){u=!0,t=l,r=a;break}if(o===r){u=!0,r=l,t=a;break}o=o.sibling}if(!u)throw Error(s(189))}}if(t.alternate!==r)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?n:e}function m(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=m(n),e!==null)return e;n=n.sibling}return null}var D=Object.assign,L=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),bn=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),on=Symbol.for("react.provider"),fn=Symbol.for("react.consumer"),mn=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),nn=Symbol.for("react.suspense_list"),yn=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),Mn=Symbol.for("react.memo_cache_sentinel"),Bn=Symbol.iterator;function Dn(n){return n===null||typeof n!="object"?null:(n=Bn&&n[Bn]||n["@@iterator"],typeof n=="function"?n:null)}var ge=Symbol.for("react.client.reference");function Fn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===ge?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case P:return"Fragment";case F:return"Profiler";case bn:return"StrictMode";case w:return"Suspense";case nn:return"SuspenseList";case Z:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case W:return"Portal";case mn:return(n.displayName||"Context")+".Provider";case fn:return(n._context.displayName||"Context")+".Consumer";case j:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case yn:return e=n.displayName||null,e!==null?e:Fn(n.type)||"Memo";case Sn:e=n._payload,n=n._init;try{return Fn(n(e))}catch{}}return null}var _n=Array.isArray,O=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},rn=[],y=-1;function U(n){return{current:n}}function z(n){0>y||(n.current=rn[y],rn[y]=null,y--)}function B(n,e){y++,rn[y]=n.current,n.current=e}var Q=U(null),cn=U(null),J=U(null),$n=U(null);function q(n,e){switch(B(J,e),B(cn,n),B(Q,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Cd(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Cd(e),n=xd(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}z(Q),B(Q,n)}function hn(){z(Q),z(cn),z(J)}function ie(n){n.memoizedState!==null&&B($n,n);var e=Q.current,t=xd(e,n.type);e!==t&&(B(cn,n),B(Q,t))}function ue(n){cn.current===n&&(z(Q),z(cn)),$n.current===n&&(z($n),Ba._currentValue=Y)}var Vr=Object.prototype.hasOwnProperty,Wa=i.unstable_scheduleCallback,it=i.unstable_cancelCallback,er=i.unstable_shouldYield,kb=i.unstable_requestPaint,we=i.unstable_now,Ib=i.unstable_getCurrentPriorityLevel,cs=i.unstable_ImmediatePriority,ss=i.unstable_UserBlockingPriority,Za=i.unstable_NormalPriority,Jb=i.unstable_LowPriority,os=i.unstable_IdlePriority,Pb=i.log,Fb=i.unstable_setDisableYieldValue,Kr=null,ce=null;function ut(n){if(typeof Pb=="function"&&Fb(n),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(Kr,n)}catch{}}var se=Math.clz32?Math.clz32:e0,$b=Math.log,n0=Math.LN2;function e0(n){return n>>>=0,n===0?32:31-($b(n)/n0|0)|0}var ka=256,Ia=4194304;function Ht(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Ja(n,e,t){var r=n.pendingLanes;if(r===0)return 0;var a=0,l=n.suspendedLanes,u=n.pingedLanes;n=n.warmLanes;var o=r&134217727;return o!==0?(r=o&~l,r!==0?a=Ht(r):(u&=o,u!==0?a=Ht(u):t||(t=o&~n,t!==0&&(a=Ht(t))))):(o=r&~l,o!==0?a=Ht(o):u!==0?a=Ht(u):t||(t=r&~n,t!==0&&(a=Ht(t)))),a===0?0:e!==0&&e!==a&&(e&l)===0&&(l=a&-a,t=e&-e,l>=t||l===32&&(t&4194048)!==0)?e:a}function Qr(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function t0(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fs(){var n=ka;return ka<<=1,(ka&4194048)===0&&(ka=256),n}function ds(){var n=Ia;return Ia<<=1,(Ia&62914560)===0&&(Ia=4194304),n}function Ri(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Xr(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function r0(n,e,t,r,a,l){var u=n.pendingLanes;n.pendingLanes=t,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=t,n.entangledLanes&=t,n.errorRecoveryDisabledLanes&=t,n.shellSuspendCounter=0;var o=n.entanglements,b=n.expirationTimes,A=n.hiddenUpdates;for(t=u&~t;0<t;){var N=31-se(t),x=1<<N;o[N]=0,b[N]=-1;var R=A[N];if(R!==null)for(A[N]=null,N=0;N<R.length;N++){var T=R[N];T!==null&&(T.lane&=-536870913)}t&=~x}r!==0&&bs(n,r,0),l!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=l&~(u&~e))}function bs(n,e,t){n.pendingLanes|=e,n.suspendedLanes&=~e;var r=31-se(e);n.entangledLanes|=e,n.entanglements[r]=n.entanglements[r]|1073741824|t&4194090}function ys(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var r=31-se(t),a=1<<r;a&e|n[r]&e&&(n[r]|=e),t&=~a}}function Ti(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function _i(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function hs(){var n=H.p;return n!==0?n:(n=window.event,n===void 0?32:Jd(n.type))}function a0(n,e){var t=H.p;try{return H.p=n,e()}finally{H.p=t}}var ct=Math.random().toString(36).slice(2),kn="__reactFiber$"+ct,ee="__reactProps$"+ct,tr="__reactContainer$"+ct,Oi="__reactEvents$"+ct,l0="__reactListeners$"+ct,i0="__reactHandles$"+ct,ps="__reactResources$"+ct,Wr="__reactMarker$"+ct;function Di(n){delete n[kn],delete n[ee],delete n[Oi],delete n[l0],delete n[i0]}function rr(n){var e=n[kn];if(e)return e;for(var t=n.parentNode;t;){if(e=t[tr]||t[kn]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Bd(n);n!==null;){if(t=n[kn])return t;n=Bd(n)}return e}n=t,t=n.parentNode}return null}function ar(n){if(n=n[kn]||n[tr]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Zr(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(s(33))}function lr(n){var e=n[ps];return e||(e=n[ps]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yn(n){n[Wr]=!0}var ms=new Set,vs={};function Lt(n,e){ir(n,e),ir(n+"Capture",e)}function ir(n,e){for(vs[n]=e,n=0;n<e.length;n++)ms.add(e[n])}var u0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gs={},Ss={};function c0(n){return Vr.call(Ss,n)?!0:Vr.call(gs,n)?!1:u0.test(n)?Ss[n]=!0:(gs[n]=!0,!1)}function Pa(n,e,t){if(c0(e))if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+t)}}function Fa(n,e,t){if(t===null)n.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+t)}}function Ke(n,e,t,r){if(r===null)n.removeAttribute(t);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttributeNS(e,t,""+r)}}var Ni,Es;function ur(n){if(Ni===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Ni=e&&e[1]||"",Es=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ni+n+Es}var Mi=!1;function Ci(n,e){if(!n||Mi)return"";Mi=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(T){var R=T}Reflect.construct(n,[],x)}else{try{x.call()}catch(T){R=T}n.call(x.prototype)}}else{try{throw Error()}catch(T){R=T}(x=n())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(T){if(T&&R&&typeof T.stack=="string")return[T.stack,R.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=r.DetermineComponentFrameRoot(),u=l[0],o=l[1];if(u&&o){var b=u.split(`
`),A=o.split(`
`);for(a=r=0;r<b.length&&!b[r].includes("DetermineComponentFrameRoot");)r++;for(;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;if(r===b.length||a===A.length)for(r=b.length-1,a=A.length-1;1<=r&&0<=a&&b[r]!==A[a];)a--;for(;1<=r&&0<=a;r--,a--)if(b[r]!==A[a]){if(r!==1||a!==1)do if(r--,a--,0>a||b[r]!==A[a]){var N=`
`+b[r].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=r&&0<=a);break}}}finally{Mi=!1,Error.prepareStackTrace=t}return(t=n?n.displayName||n.name:"")?ur(t):""}function s0(n){switch(n.tag){case 26:case 27:case 5:return ur(n.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 15:return Ci(n.type,!1);case 11:return Ci(n.type.render,!1);case 1:return Ci(n.type,!0);case 31:return ur("Activity");default:return""}}function As(n){try{var e="";do e+=s0(n),n=n.return;while(n);return e}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function Se(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rs(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function o0(n){var e=Rs(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),r=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(u){r=""+u,l.call(this,u)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(u){r=""+u},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function $a(n){n._valueTracker||(n._valueTracker=o0(n))}function Ts(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),r="";return n&&(r=Rs(n)?n.checked?"true":"false":n.value),n=r,n!==t?(e.setValue(n),!0):!1}function nl(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var f0=/[\n"\\]/g;function Ee(n){return n.replace(f0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xi(n,e,t,r,a,l,u,o){n.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.type=u:n.removeAttribute("type"),e!=null?u==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+Se(e)):n.value!==""+Se(e)&&(n.value=""+Se(e)):u!=="submit"&&u!=="reset"||n.removeAttribute("value"),e!=null?Ui(n,u,Se(e)):t!=null?Ui(n,u,Se(t)):r!=null&&n.removeAttribute("value"),a==null&&l!=null&&(n.defaultChecked=!!l),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?n.name=""+Se(o):n.removeAttribute("name")}function _s(n,e,t,r,a,l,u,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;t=t!=null?""+Se(t):"",e=e!=null?""+Se(e):t,o||e===n.value||(n.value=e),n.defaultValue=e}r=r??a,r=typeof r!="function"&&typeof r!="symbol"&&!!r,n.checked=o?n.checked:!!r,n.defaultChecked=!!r,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(n.name=u)}function Ui(n,e,t){e==="number"&&nl(n.ownerDocument)===n||n.defaultValue===""+t||(n.defaultValue=""+t)}function cr(n,e,t,r){if(n=n.options,e){e={};for(var a=0;a<t.length;a++)e["$"+t[a]]=!0;for(t=0;t<n.length;t++)a=e.hasOwnProperty("$"+n[t].value),n[t].selected!==a&&(n[t].selected=a),a&&r&&(n[t].defaultSelected=!0)}else{for(t=""+Se(t),e=null,a=0;a<n.length;a++){if(n[a].value===t){n[a].selected=!0,r&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function Os(n,e,t){if(e!=null&&(e=""+Se(e),e!==n.value&&(n.value=e),t==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=t!=null?""+Se(t):""}function Ds(n,e,t,r){if(e==null){if(r!=null){if(t!=null)throw Error(s(92));if(_n(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),e=t}t=Se(e),n.defaultValue=t,r=n.textContent,r===t&&r!==""&&r!==null&&(n.value=r)}function sr(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var d0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ns(n,e,t){var r=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?r?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":r?n.setProperty(e,t):typeof t!="number"||t===0||d0.has(e)?e==="float"?n.cssFloat=t:n[e]=(""+t).trim():n[e]=t+"px"}function Ms(n,e,t){if(e!=null&&typeof e!="object")throw Error(s(62));if(n=n.style,t!=null){for(var r in t)!t.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="");for(var a in e)r=e[a],e.hasOwnProperty(a)&&t[a]!==r&&Ns(n,a,r)}else for(var l in e)e.hasOwnProperty(l)&&Ns(n,l,e[l])}function Hi(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var b0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),y0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function el(n){return y0.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Li=null;function Bi(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var or=null,fr=null;function Cs(n){var e=ar(n);if(e&&(n=e.stateNode)){var t=n[ee]||null;n:switch(n=e.stateNode,e.type){case"input":if(xi(n,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ee(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var r=t[e];if(r!==n&&r.form===n.form){var a=r[ee]||null;if(!a)throw Error(s(90));xi(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<t.length;e++)r=t[e],r.form===n.form&&Ts(r)}break n;case"textarea":Os(n,t.value,t.defaultValue);break n;case"select":e=t.value,e!=null&&cr(n,!!t.multiple,e,!1)}}}var wi=!1;function xs(n,e,t){if(wi)return n(e,t);wi=!0;try{var r=n(e);return r}finally{if(wi=!1,(or!==null||fr!==null)&&(Yl(),or&&(e=or,n=fr,fr=or=null,Cs(e),n)))for(e=0;e<n.length;e++)Cs(n[e])}}function kr(n,e){var t=n.stateNode;if(t===null)return null;var r=t[ee]||null;if(r===null)return null;t=r[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(n=n.type,r=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!r;break n;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(s(231,e,typeof t));return t}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zi=!1;if(Qe)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{zi=!1}var st=null,Gi=null,tl=null;function Us(){if(tl)return tl;var n,e=Gi,t=e.length,r,a="value"in st?st.value:st.textContent,l=a.length;for(n=0;n<t&&e[n]===a[n];n++);var u=t-n;for(r=1;r<=u&&e[t-r]===a[l-r];r++);return tl=a.slice(n,1<r?1-r:void 0)}function rl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function al(){return!0}function Hs(){return!1}function te(n){function e(t,r,a,l,u){this._reactName=t,this._targetInst=a,this.type=r,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var o in n)n.hasOwnProperty(o)&&(t=n[o],this[o]=t?t(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?al:Hs,this.isPropagationStopped=Hs,this}return D(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),e}var Bt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ll=te(Bt),Jr=D({},Bt,{view:0,detail:0}),h0=te(Jr),ji,Yi,Pr,il=D({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vi,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pr&&(Pr&&n.type==="mousemove"?(ji=n.screenX-Pr.screenX,Yi=n.screenY-Pr.screenY):Yi=ji=0,Pr=n),ji)},movementY:function(n){return"movementY"in n?n.movementY:Yi}}),Ls=te(il),p0=D({},il,{dataTransfer:0}),m0=te(p0),v0=D({},Jr,{relatedTarget:0}),qi=te(v0),g0=D({},Bt,{animationName:0,elapsedTime:0,pseudoElement:0}),S0=te(g0),E0=D({},Bt,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),A0=te(E0),R0=D({},Bt,{data:0}),Bs=te(R0),T0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function D0(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=O0[n])?!!e[n]:!1}function Vi(){return D0}var N0=D({},Jr,{key:function(n){if(n.key){var e=T0[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vi,charCode:function(n){return n.type==="keypress"?rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),M0=te(N0),C0=D({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ws=te(C0),x0=D({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vi}),U0=te(x0),H0=D({},Bt,{propertyName:0,elapsedTime:0,pseudoElement:0}),L0=te(H0),B0=D({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),w0=te(B0),z0=D({},Bt,{newState:0,oldState:0}),G0=te(z0),j0=[9,13,27,32],Ki=Qe&&"CompositionEvent"in window,Fr=null;Qe&&"documentMode"in document&&(Fr=document.documentMode);var Y0=Qe&&"TextEvent"in window&&!Fr,zs=Qe&&(!Ki||Fr&&8<Fr&&11>=Fr),Gs=" ",js=!1;function Ys(n,e){switch(n){case"keyup":return j0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qs(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var dr=!1;function q0(n,e){switch(n){case"compositionend":return qs(e);case"keypress":return e.which!==32?null:(js=!0,Gs);case"textInput":return n=e.data,n===Gs&&js?null:n;default:return null}}function V0(n,e){if(dr)return n==="compositionend"||!Ki&&Ys(n,e)?(n=Us(),tl=Gi=st=null,dr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zs&&e.locale!=="ko"?null:e.data;default:return null}}var K0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vs(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!K0[n.type]:e==="textarea"}function Ks(n,e,t,r){or?fr?fr.push(r):fr=[r]:or=r,e=Wl(e,"onChange"),0<e.length&&(t=new ll("onChange","change",null,t,r),n.push({event:t,listeners:e}))}var $r=null,na=null;function Q0(n){_d(n,0)}function ul(n){var e=Zr(n);if(Ts(e))return n}function Qs(n,e){if(n==="change")return e}var Xs=!1;if(Qe){var Qi;if(Qe){var Xi="oninput"in document;if(!Xi){var Ws=document.createElement("div");Ws.setAttribute("oninput","return;"),Xi=typeof Ws.oninput=="function"}Qi=Xi}else Qi=!1;Xs=Qi&&(!document.documentMode||9<document.documentMode)}function Zs(){$r&&($r.detachEvent("onpropertychange",ks),na=$r=null)}function ks(n){if(n.propertyName==="value"&&ul(na)){var e=[];Ks(e,na,n,Bi(n)),xs(Q0,e)}}function X0(n,e,t){n==="focusin"?(Zs(),$r=e,na=t,$r.attachEvent("onpropertychange",ks)):n==="focusout"&&Zs()}function W0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ul(na)}function Z0(n,e){if(n==="click")return ul(e)}function k0(n,e){if(n==="input"||n==="change")return ul(e)}function I0(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var oe=typeof Object.is=="function"?Object.is:I0;function ea(n,e){if(oe(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),r=Object.keys(e);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var a=t[r];if(!Vr.call(e,a)||!oe(n[a],e[a]))return!1}return!0}function Is(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Js(n,e){var t=Is(n);n=0;for(var r;t;){if(t.nodeType===3){if(r=n+t.textContent.length,n<=e&&r>=e)return{node:t,offset:e-n};n=r}n:{for(;t;){if(t.nextSibling){t=t.nextSibling;break n}t=t.parentNode}t=void 0}t=Is(t)}}function Ps(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Ps(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Fs(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=nl(n.document);e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=nl(n.document)}return e}function Wi(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var J0=Qe&&"documentMode"in document&&11>=document.documentMode,br=null,Zi=null,ta=null,ki=!1;function $s(n,e,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ki||br==null||br!==nl(r)||(r=br,"selectionStart"in r&&Wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ta&&ea(ta,r)||(ta=r,r=Wl(Zi,"onSelect"),0<r.length&&(e=new ll("onSelect","select",null,e,t),n.push({event:e,listeners:r}),e.target=br)))}function wt(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var yr={animationend:wt("Animation","AnimationEnd"),animationiteration:wt("Animation","AnimationIteration"),animationstart:wt("Animation","AnimationStart"),transitionrun:wt("Transition","TransitionRun"),transitionstart:wt("Transition","TransitionStart"),transitioncancel:wt("Transition","TransitionCancel"),transitionend:wt("Transition","TransitionEnd")},Ii={},no={};Qe&&(no=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function zt(n){if(Ii[n])return Ii[n];if(!yr[n])return n;var e=yr[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in no)return Ii[n]=e[t];return n}var eo=zt("animationend"),to=zt("animationiteration"),ro=zt("animationstart"),P0=zt("transitionrun"),F0=zt("transitionstart"),$0=zt("transitioncancel"),ao=zt("transitionend"),lo=new Map,Ji="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ji.push("scrollEnd");function xe(n,e){lo.set(n,e),Lt(e,[n])}var io=new WeakMap;function Ae(n,e){if(typeof n=="object"&&n!==null){var t=io.get(n);return t!==void 0?t:(e={value:n,source:e,stack:As(e)},io.set(n,e),e)}return{value:n,source:e,stack:As(e)}}var Re=[],hr=0,Pi=0;function cl(){for(var n=hr,e=Pi=hr=0;e<n;){var t=Re[e];Re[e++]=null;var r=Re[e];Re[e++]=null;var a=Re[e];Re[e++]=null;var l=Re[e];if(Re[e++]=null,r!==null&&a!==null){var u=r.pending;u===null?a.next=a:(a.next=u.next,u.next=a),r.pending=a}l!==0&&uo(t,a,l)}}function sl(n,e,t,r){Re[hr++]=n,Re[hr++]=e,Re[hr++]=t,Re[hr++]=r,Pi|=r,n.lanes|=r,n=n.alternate,n!==null&&(n.lanes|=r)}function Fi(n,e,t,r){return sl(n,e,t,r),ol(n)}function pr(n,e){return sl(n,null,null,e),ol(n)}function uo(n,e,t){n.lanes|=t;var r=n.alternate;r!==null&&(r.lanes|=t);for(var a=!1,l=n.return;l!==null;)l.childLanes|=t,r=l.alternate,r!==null&&(r.childLanes|=t),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(a=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,a&&e!==null&&(a=31-se(t),n=l.hiddenUpdates,r=n[a],r===null?n[a]=[e]:r.push(e),e.lane=t|536870912),l):null}function ol(n){if(50<Da)throw Da=0,ac=null,Error(s(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var mr={};function ny(n,e,t,r){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(n,e,t,r){return new ny(n,e,t,r)}function $i(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xe(n,e){var t=n.alternate;return t===null?(t=fe(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&65011712,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t.refCleanup=n.refCleanup,t}function co(n,e){n.flags&=65011714;var t=n.alternate;return t===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,n.type=t.type,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function fl(n,e,t,r,a,l){var u=0;if(r=n,typeof n=="function")$i(n)&&(u=1);else if(typeof n=="string")u=th(n,t,Q.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Z:return n=fe(31,t,e,a),n.elementType=Z,n.lanes=l,n;case P:return Gt(t.children,a,l,e);case bn:u=8,a|=24;break;case F:return n=fe(12,t,e,a|2),n.elementType=F,n.lanes=l,n;case w:return n=fe(13,t,e,a),n.elementType=w,n.lanes=l,n;case nn:return n=fe(19,t,e,a),n.elementType=nn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case on:case mn:u=10;break n;case fn:u=9;break n;case j:u=11;break n;case yn:u=14;break n;case Sn:u=16,r=null;break n}u=29,t=Error(s(130,n===null?"null":typeof n,"")),r=null}return e=fe(u,t,e,a),e.elementType=n,e.type=r,e.lanes=l,e}function Gt(n,e,t,r){return n=fe(7,n,r,e),n.lanes=t,n}function nu(n,e,t){return n=fe(6,n,null,e),n.lanes=t,n}function eu(n,e,t){return e=fe(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var vr=[],gr=0,dl=null,bl=0,Te=[],_e=0,jt=null,We=1,Ze="";function Yt(n,e){vr[gr++]=bl,vr[gr++]=dl,dl=n,bl=e}function so(n,e,t){Te[_e++]=We,Te[_e++]=Ze,Te[_e++]=jt,jt=n;var r=We;n=Ze;var a=32-se(r)-1;r&=~(1<<a),t+=1;var l=32-se(e)+a;if(30<l){var u=a-a%5;l=(r&(1<<u)-1).toString(32),r>>=u,a-=u,We=1<<32-se(e)+a|t<<a|r,Ze=l+n}else We=1<<l|t<<a|r,Ze=n}function tu(n){n.return!==null&&(Yt(n,1),so(n,1,0))}function ru(n){for(;n===dl;)dl=vr[--gr],vr[gr]=null,bl=vr[--gr],vr[gr]=null;for(;n===jt;)jt=Te[--_e],Te[_e]=null,Ze=Te[--_e],Te[_e]=null,We=Te[--_e],Te[_e]=null}var ne=null,xn=null,pn=!1,qt=null,ze=!1,au=Error(s(519));function Vt(n){var e=Error(s(418,""));throw la(Ae(e,n)),au}function oo(n){var e=n.stateNode,t=n.type,r=n.memoizedProps;switch(e[kn]=n,e[ee]=r,t){case"dialog":ln("cancel",e),ln("close",e);break;case"iframe":case"object":case"embed":ln("load",e);break;case"video":case"audio":for(t=0;t<Ma.length;t++)ln(Ma[t],e);break;case"source":ln("error",e);break;case"img":case"image":case"link":ln("error",e),ln("load",e);break;case"details":ln("toggle",e);break;case"input":ln("invalid",e),_s(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),$a(e);break;case"select":ln("invalid",e);break;case"textarea":ln("invalid",e),Ds(e,r.value,r.defaultValue,r.children),$a(e)}t=r.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||r.suppressHydrationWarning===!0||Md(e.textContent,t)?(r.popover!=null&&(ln("beforetoggle",e),ln("toggle",e)),r.onScroll!=null&&ln("scroll",e),r.onScrollEnd!=null&&ln("scrollend",e),r.onClick!=null&&(e.onclick=Zl),e=!0):e=!1,e||Vt(n)}function fo(n){for(ne=n.return;ne;)switch(ne.tag){case 5:case 13:ze=!1;return;case 27:case 3:ze=!0;return;default:ne=ne.return}}function ra(n){if(n!==ne)return!1;if(!pn)return fo(n),pn=!0,!1;var e=n.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=n.type,t=!(t!=="form"&&t!=="button")||Sc(n.type,n.memoizedProps)),t=!t),t&&xn&&Vt(n),fo(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(t=n.data,t==="/$"){if(e===0){xn=He(n.nextSibling);break n}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++;n=n.nextSibling}xn=null}}else e===27?(e=xn,_t(n.type)?(n=Tc,Tc=null,xn=n):xn=e):xn=ne?He(n.stateNode.nextSibling):null;return!0}function aa(){xn=ne=null,pn=!1}function bo(){var n=qt;return n!==null&&(le===null?le=n:le.push.apply(le,n),qt=null),n}function la(n){qt===null?qt=[n]:qt.push(n)}var lu=U(null),Kt=null,ke=null;function ot(n,e,t){B(lu,e._currentValue),e._currentValue=t}function Ie(n){n._currentValue=lu.current,z(lu)}function iu(n,e,t){for(;n!==null;){var r=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),n===t)break;n=n.return}}function uu(n,e,t,r){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){var u=a.child;l=l.firstContext;n:for(;l!==null;){var o=l;l=a;for(var b=0;b<e.length;b++)if(o.context===e[b]){l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),iu(l.return,t,n),r||(u=null);break n}l=o.next}}else if(a.tag===18){if(u=a.return,u===null)throw Error(s(341));u.lanes|=t,l=u.alternate,l!==null&&(l.lanes|=t),iu(u,t,n),u=null}else u=a.child;if(u!==null)u.return=a;else for(u=a;u!==null;){if(u===n){u=null;break}if(a=u.sibling,a!==null){a.return=u.return,u=a;break}u=u.return}a=u}}function ia(n,e,t,r){n=null;for(var a=e,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var u=a.alternate;if(u===null)throw Error(s(387));if(u=u.memoizedProps,u!==null){var o=a.type;oe(a.pendingProps.value,u.value)||(n!==null?n.push(o):n=[o])}}else if(a===$n.current){if(u=a.alternate,u===null)throw Error(s(387));u.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(Ba):n=[Ba])}a=a.return}n!==null&&uu(e,n,t,r),e.flags|=262144}function yl(n){for(n=n.firstContext;n!==null;){if(!oe(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Qt(n){Kt=n,ke=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function In(n){return yo(Kt,n)}function hl(n,e){return Kt===null&&Qt(n),yo(n,e)}function yo(n,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},ke===null){if(n===null)throw Error(s(308));ke=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else ke=ke.next=e;return t}var ey=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(t,r){n.push(r)}};this.abort=function(){e.aborted=!0,n.forEach(function(t){return t()})}},ty=i.unstable_scheduleCallback,ry=i.unstable_NormalPriority,Gn={$$typeof:mn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new ey,data:new Map,refCount:0}}function ua(n){n.refCount--,n.refCount===0&&ty(ry,function(){n.controller.abort()})}var ca=null,su=0,Sr=0,Er=null;function ay(n,e){if(ca===null){var t=ca=[];su=0,Sr=fc(),Er={status:"pending",value:void 0,then:function(r){t.push(r)}}}return su++,e.then(ho,ho),e}function ho(){if(--su===0&&ca!==null){Er!==null&&(Er.status="fulfilled");var n=ca;ca=null,Sr=0,Er=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function ly(n,e){var t=[],r={status:"pending",value:null,reason:null,then:function(a){t.push(a)}};return n.then(function(){r.status="fulfilled",r.value=e;for(var a=0;a<t.length;a++)(0,t[a])(e)},function(a){for(r.status="rejected",r.reason=a,a=0;a<t.length;a++)(0,t[a])(void 0)}),r}var po=O.S;O.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&ay(n,e),po!==null&&po(n,e)};var Xt=U(null);function ou(){var n=Xt.current;return n!==null?n:On.pooledCache}function pl(n,e){e===null?B(Xt,Xt.current):B(Xt,e.pool)}function mo(){var n=ou();return n===null?null:{parent:Gn._currentValue,pool:n}}var sa=Error(s(460)),vo=Error(s(474)),ml=Error(s(542)),fu={then:function(){}};function go(n){return n=n.status,n==="fulfilled"||n==="rejected"}function vl(){}function So(n,e,t){switch(t=n[t],t===void 0?n.push(e):t!==e&&(e.then(vl,vl),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Ao(n),n;default:if(typeof e.status=="string")e.then(vl,vl);else{if(n=On,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=e,n.status="pending",n.then(function(r){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=r}},function(r){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,Ao(n),n}throw oa=e,sa}}var oa=null;function Eo(){if(oa===null)throw Error(s(459));var n=oa;return oa=null,n}function Ao(n){if(n===sa||n===ml)throw Error(s(483))}var ft=!1;function du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function bu(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function dt(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function bt(n,e,t){var r=n.updateQueue;if(r===null)return null;if(r=r.shared,(vn&2)!==0){var a=r.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),r.pending=e,e=ol(n),uo(n,null,t),e}return sl(n,r,e,t),ol(n)}function fa(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ys(n,t)}}function yu(n,e){var t=n.updateQueue,r=n.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var u={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?a=l=u:l=l.next=u,t=t.next}while(t!==null);l===null?a=l=e:l=l.next=e}else a=l=e;t={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,callbacks:r.callbacks},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}var hu=!1;function da(){if(hu){var n=Er;if(n!==null)throw n}}function ba(n,e,t,r){hu=!1;var a=n.updateQueue;ft=!1;var l=a.firstBaseUpdate,u=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var b=o,A=b.next;b.next=null,u===null?l=A:u.next=A,u=b;var N=n.alternate;N!==null&&(N=N.updateQueue,o=N.lastBaseUpdate,o!==u&&(o===null?N.firstBaseUpdate=A:o.next=A,N.lastBaseUpdate=b))}if(l!==null){var x=a.baseState;u=0,N=A=b=null,o=l;do{var R=o.lane&-536870913,T=R!==o.lane;if(T?(sn&R)===R:(r&R)===R){R!==0&&R===Sr&&(hu=!0),N!==null&&(N=N.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});n:{var I=n,X=o;R=e;var Rn=t;switch(X.tag){case 1:if(I=X.payload,typeof I=="function"){x=I.call(Rn,x,R);break n}x=I;break n;case 3:I.flags=I.flags&-65537|128;case 0:if(I=X.payload,R=typeof I=="function"?I.call(Rn,x,R):I,R==null)break n;x=D({},x,R);break n;case 2:ft=!0}}R=o.callback,R!==null&&(n.flags|=64,T&&(n.flags|=8192),T=a.callbacks,T===null?a.callbacks=[R]:T.push(R))}else T={lane:R,tag:o.tag,payload:o.payload,callback:o.callback,next:null},N===null?(A=N=T,b=x):N=N.next=T,u|=R;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;T=o,o=T.next,T.next=null,a.lastBaseUpdate=T,a.shared.pending=null}}while(!0);N===null&&(b=x),a.baseState=b,a.firstBaseUpdate=A,a.lastBaseUpdate=N,l===null&&(a.shared.lanes=0),Et|=u,n.lanes=u,n.memoizedState=x}}function Ro(n,e){if(typeof n!="function")throw Error(s(191,n));n.call(e)}function To(n,e){var t=n.callbacks;if(t!==null)for(n.callbacks=null,n=0;n<t.length;n++)Ro(t[n],e)}var Ar=U(null),gl=U(0);function _o(n,e){n=tt,B(gl,n),B(Ar,e),tt=n|e.baseLanes}function pu(){B(gl,tt),B(Ar,Ar.current)}function mu(){tt=gl.current,z(Ar),z(gl)}var yt=0,en=null,En=null,wn=null,Sl=!1,Rr=!1,Wt=!1,El=0,ya=0,Tr=null,iy=0;function Hn(){throw Error(s(321))}function vu(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!oe(n[t],e[t]))return!1;return!0}function gu(n,e,t,r,a,l){return yt=l,en=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,O.H=n===null||n.memoizedState===null?sf:of,Wt=!1,l=t(r,a),Wt=!1,Rr&&(l=Do(e,t,r,a)),Oo(n),l}function Oo(n){O.H=Dl;var e=En!==null&&En.next!==null;if(yt=0,wn=En=en=null,Sl=!1,ya=0,Tr=null,e)throw Error(s(300));n===null||qn||(n=n.dependencies,n!==null&&yl(n)&&(qn=!0))}function Do(n,e,t,r){en=n;var a=0;do{if(Rr&&(Tr=null),ya=0,Rr=!1,25<=a)throw Error(s(301));if(a+=1,wn=En=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}O.H=by,l=e(t,r)}while(Rr);return l}function uy(){var n=O.H,e=n.useState()[0];return e=typeof e.then=="function"?ha(e):e,n=n.useState()[0],(En!==null?En.memoizedState:null)!==n&&(en.flags|=1024),e}function Su(){var n=El!==0;return El=0,n}function Eu(n,e,t){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~t}function Au(n){if(Sl){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Sl=!1}yt=0,wn=En=en=null,Rr=!1,ya=El=0,Tr=null}function re(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?en.memoizedState=wn=n:wn=wn.next=n,wn}function zn(){if(En===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=En.next;var e=wn===null?en.memoizedState:wn.next;if(e!==null)wn=e,En=n;else{if(n===null)throw en.alternate===null?Error(s(467)):Error(s(310));En=n,n={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},wn===null?en.memoizedState=wn=n:wn=wn.next=n}return wn}function Ru(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ha(n){var e=ya;return ya+=1,Tr===null&&(Tr=[]),n=So(Tr,n,e),e=en,(wn===null?e.memoizedState:wn.next)===null&&(e=e.alternate,O.H=e===null||e.memoizedState===null?sf:of),n}function Al(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ha(n);if(n.$$typeof===mn)return In(n)}throw Error(s(438,String(n)))}function Tu(n){var e=null,t=en.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var r=en.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=Ru(),en.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(n),r=0;r<n;r++)t[r]=Mn;return e.index++,t}function Je(n,e){return typeof e=="function"?e(n):e}function Rl(n){var e=zn();return _u(e,En,n)}function _u(n,e,t){var r=n.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=t;var a=n.baseQueue,l=r.pending;if(l!==null){if(a!==null){var u=a.next;a.next=l.next,l.next=u}e.baseQueue=a=l,r.pending=null}if(l=n.baseState,a===null)n.memoizedState=l;else{e=a.next;var o=u=null,b=null,A=e,N=!1;do{var x=A.lane&-536870913;if(x!==A.lane?(sn&x)===x:(yt&x)===x){var R=A.revertLane;if(R===0)b!==null&&(b=b.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),x===Sr&&(N=!0);else if((yt&R)===R){A=A.next,R===Sr&&(N=!0);continue}else x={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(o=b=x,u=l):b=b.next=x,en.lanes|=R,Et|=R;x=A.action,Wt&&t(l,x),l=A.hasEagerState?A.eagerState:t(l,x)}else R={lane:x,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},b===null?(o=b=R,u=l):b=b.next=R,en.lanes|=x,Et|=x;A=A.next}while(A!==null&&A!==e);if(b===null?u=l:b.next=o,!oe(l,n.memoizedState)&&(qn=!0,N&&(t=Er,t!==null)))throw t;n.memoizedState=l,n.baseState=u,n.baseQueue=b,r.lastRenderedState=l}return a===null&&(r.lanes=0),[n.memoizedState,r.dispatch]}function Ou(n){var e=zn(),t=e.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=n;var r=t.dispatch,a=t.pending,l=e.memoizedState;if(a!==null){t.pending=null;var u=a=a.next;do l=n(l,u.action),u=u.next;while(u!==a);oe(l,e.memoizedState)||(qn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),t.lastRenderedState=l}return[l,r]}function No(n,e,t){var r=en,a=zn(),l=pn;if(l){if(t===void 0)throw Error(s(407));t=t()}else t=e();var u=!oe((En||a).memoizedState,t);u&&(a.memoizedState=t,qn=!0),a=a.queue;var o=xo.bind(null,r,a,n);if(pa(2048,8,o,[n]),a.getSnapshot!==e||u||wn!==null&&wn.memoizedState.tag&1){if(r.flags|=2048,_r(9,Tl(),Co.bind(null,r,a,t,e),null),On===null)throw Error(s(349));l||(yt&124)!==0||Mo(r,e,t)}return t}function Mo(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=en.updateQueue,e===null?(e=Ru(),en.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Co(n,e,t,r){e.value=t,e.getSnapshot=r,Uo(e)&&Ho(n)}function xo(n,e,t){return t(function(){Uo(e)&&Ho(n)})}function Uo(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!oe(n,t)}catch{return!0}}function Ho(n){var e=pr(n,2);e!==null&&pe(e,n,2)}function Du(n){var e=re();if(typeof n=="function"){var t=n;if(n=t(),Wt){ut(!0);try{t()}finally{ut(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:n},e}function Lo(n,e,t,r){return n.baseState=t,_u(n,En,typeof r=="function"?r:Je)}function cy(n,e,t,r,a){if(Ol(n))throw Error(s(485));if(n=e.action,n!==null){var l={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){l.listeners.push(u)}};O.T!==null?t(!0):l.isTransition=!1,r(l),t=e.pending,t===null?(l.next=e.pending=l,Bo(e,l)):(l.next=t.next,e.pending=t.next=l)}}function Bo(n,e){var t=e.action,r=e.payload,a=n.state;if(e.isTransition){var l=O.T,u={};O.T=u;try{var o=t(a,r),b=O.S;b!==null&&b(u,o),wo(n,e,o)}catch(A){Nu(n,e,A)}finally{O.T=l}}else try{l=t(a,r),wo(n,e,l)}catch(A){Nu(n,e,A)}}function wo(n,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(r){zo(n,e,r)},function(r){return Nu(n,e,r)}):zo(n,e,t)}function zo(n,e,t){e.status="fulfilled",e.value=t,Go(e),n.state=t,e=n.pending,e!==null&&(t=e.next,t===e?n.pending=null:(t=t.next,e.next=t,Bo(n,t)))}function Nu(n,e,t){var r=n.pending;if(n.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=t,Go(e),e=e.next;while(e!==r)}n.action=null}function Go(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function jo(n,e){return e}function Yo(n,e){if(pn){var t=On.formState;if(t!==null){n:{var r=en;if(pn){if(xn){e:{for(var a=xn,l=ze;a.nodeType!==8;){if(!l){a=null;break e}if(a=He(a.nextSibling),a===null){a=null;break e}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){xn=He(a.nextSibling),r=a.data==="F!";break n}}Vt(r)}r=!1}r&&(e=t[0])}}return t=re(),t.memoizedState=t.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:e},t.queue=r,t=lf.bind(null,en,r),r.dispatch=t,r=Du(!1),l=Hu.bind(null,en,!1,r.queue),r=re(),a={state:e,dispatch:null,action:n,pending:null},r.queue=a,t=cy.bind(null,en,a,l,t),a.dispatch=t,r.memoizedState=n,[e,t,!1]}function qo(n){var e=zn();return Vo(e,En,n)}function Vo(n,e,t){if(e=_u(n,e,jo)[0],n=Rl(Je)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=ha(e)}catch(u){throw u===sa?ml:u}else r=e;e=zn();var a=e.queue,l=a.dispatch;return t!==e.memoizedState&&(en.flags|=2048,_r(9,Tl(),sy.bind(null,a,t),null)),[r,l,n]}function sy(n,e){n.action=e}function Ko(n){var e=zn(),t=En;if(t!==null)return Vo(e,t,n);zn(),e=e.memoizedState,t=zn();var r=t.queue.dispatch;return t.memoizedState=n,[e,r,!1]}function _r(n,e,t,r){return n={tag:n,create:t,deps:r,inst:e,next:null},e=en.updateQueue,e===null&&(e=Ru(),en.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=n.next=n:(r=t.next,t.next=n,n.next=r,e.lastEffect=n),n}function Tl(){return{destroy:void 0,resource:void 0}}function Qo(){return zn().memoizedState}function _l(n,e,t,r){var a=re();r=r===void 0?null:r,en.flags|=n,a.memoizedState=_r(1|e,Tl(),t,r)}function pa(n,e,t,r){var a=zn();r=r===void 0?null:r;var l=a.memoizedState.inst;En!==null&&r!==null&&vu(r,En.memoizedState.deps)?a.memoizedState=_r(e,l,t,r):(en.flags|=n,a.memoizedState=_r(1|e,l,t,r))}function Xo(n,e){_l(8390656,8,n,e)}function Wo(n,e){pa(2048,8,n,e)}function Zo(n,e){return pa(4,2,n,e)}function ko(n,e){return pa(4,4,n,e)}function Io(n,e){if(typeof e=="function"){n=n();var t=e(n);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Jo(n,e,t){t=t!=null?t.concat([n]):null,pa(4,4,Io.bind(null,e,n),t)}function Mu(){}function Po(n,e){var t=zn();e=e===void 0?null:e;var r=t.memoizedState;return e!==null&&vu(e,r[1])?r[0]:(t.memoizedState=[n,e],n)}function Fo(n,e){var t=zn();e=e===void 0?null:e;var r=t.memoizedState;if(e!==null&&vu(e,r[1]))return r[0];if(r=n(),Wt){ut(!0);try{n()}finally{ut(!1)}}return t.memoizedState=[r,e],r}function Cu(n,e,t){return t===void 0||(yt&1073741824)!==0?n.memoizedState=e:(n.memoizedState=t,n=td(),en.lanes|=n,Et|=n,t)}function $o(n,e,t,r){return oe(t,e)?t:Ar.current!==null?(n=Cu(n,t,r),oe(n,e)||(qn=!0),n):(yt&42)===0?(qn=!0,n.memoizedState=t):(n=td(),en.lanes|=n,Et|=n,e)}function nf(n,e,t,r,a){var l=H.p;H.p=l!==0&&8>l?l:8;var u=O.T,o={};O.T=o,Hu(n,!1,e,t);try{var b=a(),A=O.S;if(A!==null&&A(o,b),b!==null&&typeof b=="object"&&typeof b.then=="function"){var N=ly(b,r);ma(n,e,N,he(n))}else ma(n,e,r,he(n))}catch(x){ma(n,e,{then:function(){},status:"rejected",reason:x},he())}finally{H.p=l,O.T=u}}function oy(){}function xu(n,e,t,r){if(n.tag!==5)throw Error(s(476));var a=ef(n).queue;nf(n,a,e,Y,t===null?oy:function(){return tf(n),t(r)})}function ef(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:Y},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:t},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function tf(n){var e=ef(n).next.queue;ma(n,e,{},he())}function Uu(){return In(Ba)}function rf(){return zn().memoizedState}function af(){return zn().memoizedState}function fy(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var t=he();n=dt(t);var r=bt(e,n,t);r!==null&&(pe(r,e,t),fa(r,e,t)),e={cache:cu()},n.payload=e;return}e=e.return}}function dy(n,e,t){var r=he();t={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},Ol(n)?uf(e,t):(t=Fi(n,e,t,r),t!==null&&(pe(t,n,r),cf(t,e,r)))}function lf(n,e,t){var r=he();ma(n,e,t,r)}function ma(n,e,t,r){var a={lane:r,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ol(n))uf(e,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var u=e.lastRenderedState,o=l(u,t);if(a.hasEagerState=!0,a.eagerState=o,oe(o,u))return sl(n,e,a,0),On===null&&cl(),!1}catch{}finally{}if(t=Fi(n,e,a,r),t!==null)return pe(t,n,r),cf(t,e,r),!0}return!1}function Hu(n,e,t,r){if(r={lane:2,revertLane:fc(),action:r,hasEagerState:!1,eagerState:null,next:null},Ol(n)){if(e)throw Error(s(479))}else e=Fi(n,t,r,2),e!==null&&pe(e,n,2)}function Ol(n){var e=n.alternate;return n===en||e!==null&&e===en}function uf(n,e){Rr=Sl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function cf(n,e,t){if((t&4194048)!==0){var r=e.lanes;r&=n.pendingLanes,t|=r,e.lanes=t,ys(n,t)}}var Dl={readContext:In,use:Al,useCallback:Hn,useContext:Hn,useEffect:Hn,useImperativeHandle:Hn,useLayoutEffect:Hn,useInsertionEffect:Hn,useMemo:Hn,useReducer:Hn,useRef:Hn,useState:Hn,useDebugValue:Hn,useDeferredValue:Hn,useTransition:Hn,useSyncExternalStore:Hn,useId:Hn,useHostTransitionStatus:Hn,useFormState:Hn,useActionState:Hn,useOptimistic:Hn,useMemoCache:Hn,useCacheRefresh:Hn},sf={readContext:In,use:Al,useCallback:function(n,e){return re().memoizedState=[n,e===void 0?null:e],n},useContext:In,useEffect:Xo,useImperativeHandle:function(n,e,t){t=t!=null?t.concat([n]):null,_l(4194308,4,Io.bind(null,e,n),t)},useLayoutEffect:function(n,e){return _l(4194308,4,n,e)},useInsertionEffect:function(n,e){_l(4,2,n,e)},useMemo:function(n,e){var t=re();e=e===void 0?null:e;var r=n();if(Wt){ut(!0);try{n()}finally{ut(!1)}}return t.memoizedState=[r,e],r},useReducer:function(n,e,t){var r=re();if(t!==void 0){var a=t(e);if(Wt){ut(!0);try{t(e)}finally{ut(!1)}}}else a=e;return r.memoizedState=r.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},r.queue=n,n=n.dispatch=dy.bind(null,en,n),[r.memoizedState,n]},useRef:function(n){var e=re();return n={current:n},e.memoizedState=n},useState:function(n){n=Du(n);var e=n.queue,t=lf.bind(null,en,e);return e.dispatch=t,[n.memoizedState,t]},useDebugValue:Mu,useDeferredValue:function(n,e){var t=re();return Cu(t,n,e)},useTransition:function(){var n=Du(!1);return n=nf.bind(null,en,n.queue,!0,!1),re().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,t){var r=en,a=re();if(pn){if(t===void 0)throw Error(s(407));t=t()}else{if(t=e(),On===null)throw Error(s(349));(sn&124)!==0||Mo(r,e,t)}a.memoizedState=t;var l={value:t,getSnapshot:e};return a.queue=l,Xo(xo.bind(null,r,l,n),[n]),r.flags|=2048,_r(9,Tl(),Co.bind(null,r,l,t,e),null),t},useId:function(){var n=re(),e=On.identifierPrefix;if(pn){var t=Ze,r=We;t=(r&~(1<<32-se(r)-1)).toString(32)+t,e="«"+e+"R"+t,t=El++,0<t&&(e+="H"+t.toString(32)),e+="»"}else t=iy++,e="«"+e+"r"+t.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:Uu,useFormState:Yo,useActionState:Yo,useOptimistic:function(n){var e=re();e.memoizedState=e.baseState=n;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=Hu.bind(null,en,!0,t),t.dispatch=e,[n,e]},useMemoCache:Tu,useCacheRefresh:function(){return re().memoizedState=fy.bind(null,en)}},of={readContext:In,use:Al,useCallback:Po,useContext:In,useEffect:Wo,useImperativeHandle:Jo,useInsertionEffect:Zo,useLayoutEffect:ko,useMemo:Fo,useReducer:Rl,useRef:Qo,useState:function(){return Rl(Je)},useDebugValue:Mu,useDeferredValue:function(n,e){var t=zn();return $o(t,En.memoizedState,n,e)},useTransition:function(){var n=Rl(Je)[0],e=zn().memoizedState;return[typeof n=="boolean"?n:ha(n),e]},useSyncExternalStore:No,useId:rf,useHostTransitionStatus:Uu,useFormState:qo,useActionState:qo,useOptimistic:function(n,e){var t=zn();return Lo(t,En,n,e)},useMemoCache:Tu,useCacheRefresh:af},by={readContext:In,use:Al,useCallback:Po,useContext:In,useEffect:Wo,useImperativeHandle:Jo,useInsertionEffect:Zo,useLayoutEffect:ko,useMemo:Fo,useReducer:Ou,useRef:Qo,useState:function(){return Ou(Je)},useDebugValue:Mu,useDeferredValue:function(n,e){var t=zn();return En===null?Cu(t,n,e):$o(t,En.memoizedState,n,e)},useTransition:function(){var n=Ou(Je)[0],e=zn().memoizedState;return[typeof n=="boolean"?n:ha(n),e]},useSyncExternalStore:No,useId:rf,useHostTransitionStatus:Uu,useFormState:Ko,useActionState:Ko,useOptimistic:function(n,e){var t=zn();return En!==null?Lo(t,En,n,e):(t.baseState=n,[n,t.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:af},Or=null,va=0;function Nl(n){var e=va;return va+=1,Or===null&&(Or=[]),So(Or,n,e)}function ga(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function Ml(n,e){throw e.$$typeof===L?Error(s(525)):(n=Object.prototype.toString.call(e),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function ff(n){var e=n._init;return e(n._payload)}function df(n){function e(v,p){if(n){var E=v.deletions;E===null?(v.deletions=[p],v.flags|=16):E.push(p)}}function t(v,p){if(!n)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v){for(var p=new Map;v!==null;)v.key!==null?p.set(v.key,v):p.set(v.index,v),v=v.sibling;return p}function a(v,p){return v=Xe(v,p),v.index=0,v.sibling=null,v}function l(v,p,E){return v.index=E,n?(E=v.alternate,E!==null?(E=E.index,E<p?(v.flags|=67108866,p):E):(v.flags|=67108866,p)):(v.flags|=1048576,p)}function u(v){return n&&v.alternate===null&&(v.flags|=67108866),v}function o(v,p,E,C){return p===null||p.tag!==6?(p=nu(E,v.mode,C),p.return=v,p):(p=a(p,E),p.return=v,p)}function b(v,p,E,C){var V=E.type;return V===P?N(v,p,E.props.children,C,E.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sn&&ff(V)===p.type)?(p=a(p,E.props),ga(p,E),p.return=v,p):(p=fl(E.type,E.key,E.props,null,v.mode,C),ga(p,E),p.return=v,p)}function A(v,p,E,C){return p===null||p.tag!==4||p.stateNode.containerInfo!==E.containerInfo||p.stateNode.implementation!==E.implementation?(p=eu(E,v.mode,C),p.return=v,p):(p=a(p,E.children||[]),p.return=v,p)}function N(v,p,E,C,V){return p===null||p.tag!==7?(p=Gt(E,v.mode,C,V),p.return=v,p):(p=a(p,E),p.return=v,p)}function x(v,p,E){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=nu(""+p,v.mode,E),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case G:return E=fl(p.type,p.key,p.props,null,v.mode,E),ga(E,p),E.return=v,E;case W:return p=eu(p,v.mode,E),p.return=v,p;case Sn:var C=p._init;return p=C(p._payload),x(v,p,E)}if(_n(p)||Dn(p))return p=Gt(p,v.mode,E,null),p.return=v,p;if(typeof p.then=="function")return x(v,Nl(p),E);if(p.$$typeof===mn)return x(v,hl(v,p),E);Ml(v,p)}return null}function R(v,p,E,C){var V=p!==null?p.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return V!==null?null:o(v,p,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case G:return E.key===V?b(v,p,E,C):null;case W:return E.key===V?A(v,p,E,C):null;case Sn:return V=E._init,E=V(E._payload),R(v,p,E,C)}if(_n(E)||Dn(E))return V!==null?null:N(v,p,E,C,null);if(typeof E.then=="function")return R(v,p,Nl(E),C);if(E.$$typeof===mn)return R(v,p,hl(v,E),C);Ml(v,E)}return null}function T(v,p,E,C,V){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return v=v.get(E)||null,o(p,v,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case G:return v=v.get(C.key===null?E:C.key)||null,b(p,v,C,V);case W:return v=v.get(C.key===null?E:C.key)||null,A(p,v,C,V);case Sn:var tn=C._init;return C=tn(C._payload),T(v,p,E,C,V)}if(_n(C)||Dn(C))return v=v.get(E)||null,N(p,v,C,V,null);if(typeof C.then=="function")return T(v,p,E,Nl(C),V);if(C.$$typeof===mn)return T(v,p,E,hl(p,C),V);Ml(p,C)}return null}function I(v,p,E,C){for(var V=null,tn=null,K=p,k=p=0,Kn=null;K!==null&&k<E.length;k++){K.index>k?(Kn=K,K=null):Kn=K.sibling;var dn=R(v,K,E[k],C);if(dn===null){K===null&&(K=Kn);break}n&&K&&dn.alternate===null&&e(v,K),p=l(dn,p,k),tn===null?V=dn:tn.sibling=dn,tn=dn,K=Kn}if(k===E.length)return t(v,K),pn&&Yt(v,k),V;if(K===null){for(;k<E.length;k++)K=x(v,E[k],C),K!==null&&(p=l(K,p,k),tn===null?V=K:tn.sibling=K,tn=K);return pn&&Yt(v,k),V}for(K=r(K);k<E.length;k++)Kn=T(K,v,k,E[k],C),Kn!==null&&(n&&Kn.alternate!==null&&K.delete(Kn.key===null?k:Kn.key),p=l(Kn,p,k),tn===null?V=Kn:tn.sibling=Kn,tn=Kn);return n&&K.forEach(function(Ct){return e(v,Ct)}),pn&&Yt(v,k),V}function X(v,p,E,C){if(E==null)throw Error(s(151));for(var V=null,tn=null,K=p,k=p=0,Kn=null,dn=E.next();K!==null&&!dn.done;k++,dn=E.next()){K.index>k?(Kn=K,K=null):Kn=K.sibling;var Ct=R(v,K,dn.value,C);if(Ct===null){K===null&&(K=Kn);break}n&&K&&Ct.alternate===null&&e(v,K),p=l(Ct,p,k),tn===null?V=Ct:tn.sibling=Ct,tn=Ct,K=Kn}if(dn.done)return t(v,K),pn&&Yt(v,k),V;if(K===null){for(;!dn.done;k++,dn=E.next())dn=x(v,dn.value,C),dn!==null&&(p=l(dn,p,k),tn===null?V=dn:tn.sibling=dn,tn=dn);return pn&&Yt(v,k),V}for(K=r(K);!dn.done;k++,dn=E.next())dn=T(K,v,k,dn.value,C),dn!==null&&(n&&dn.alternate!==null&&K.delete(dn.key===null?k:dn.key),p=l(dn,p,k),tn===null?V=dn:tn.sibling=dn,tn=dn);return n&&K.forEach(function(yh){return e(v,yh)}),pn&&Yt(v,k),V}function Rn(v,p,E,C){if(typeof E=="object"&&E!==null&&E.type===P&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case G:n:{for(var V=E.key;p!==null;){if(p.key===V){if(V=E.type,V===P){if(p.tag===7){t(v,p.sibling),C=a(p,E.props.children),C.return=v,v=C;break n}}else if(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Sn&&ff(V)===p.type){t(v,p.sibling),C=a(p,E.props),ga(C,E),C.return=v,v=C;break n}t(v,p);break}else e(v,p);p=p.sibling}E.type===P?(C=Gt(E.props.children,v.mode,C,E.key),C.return=v,v=C):(C=fl(E.type,E.key,E.props,null,v.mode,C),ga(C,E),C.return=v,v=C)}return u(v);case W:n:{for(V=E.key;p!==null;){if(p.key===V)if(p.tag===4&&p.stateNode.containerInfo===E.containerInfo&&p.stateNode.implementation===E.implementation){t(v,p.sibling),C=a(p,E.children||[]),C.return=v,v=C;break n}else{t(v,p);break}else e(v,p);p=p.sibling}C=eu(E,v.mode,C),C.return=v,v=C}return u(v);case Sn:return V=E._init,E=V(E._payload),Rn(v,p,E,C)}if(_n(E))return I(v,p,E,C);if(Dn(E)){if(V=Dn(E),typeof V!="function")throw Error(s(150));return E=V.call(E),X(v,p,E,C)}if(typeof E.then=="function")return Rn(v,p,Nl(E),C);if(E.$$typeof===mn)return Rn(v,p,hl(v,E),C);Ml(v,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,p!==null&&p.tag===6?(t(v,p.sibling),C=a(p,E),C.return=v,v=C):(t(v,p),C=nu(E,v.mode,C),C.return=v,v=C),u(v)):t(v,p)}return function(v,p,E,C){try{va=0;var V=Rn(v,p,E,C);return Or=null,V}catch(K){if(K===sa||K===ml)throw K;var tn=fe(29,K,null,v.mode);return tn.lanes=C,tn.return=v,tn}finally{}}}var Dr=df(!0),bf=df(!1),Oe=U(null),Ge=null;function ht(n){var e=n.alternate;B(jn,jn.current&1),B(Oe,n),Ge===null&&(e===null||Ar.current!==null||e.memoizedState!==null)&&(Ge=n)}function yf(n){if(n.tag===22){if(B(jn,jn.current),B(Oe,n),Ge===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(Ge=n)}}else pt()}function pt(){B(jn,jn.current),B(Oe,Oe.current)}function Pe(n){z(Oe),Ge===n&&(Ge=null),z(jn)}var jn=U(0);function Cl(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||Rc(t)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Lu(n,e,t,r){e=n.memoizedState,t=t(r,e),t=t==null?e:D({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Bu={enqueueSetState:function(n,e,t){n=n._reactInternals;var r=he(),a=dt(r);a.payload=e,t!=null&&(a.callback=t),e=bt(n,a,r),e!==null&&(pe(e,n,r),fa(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var r=he(),a=dt(r);a.tag=1,a.payload=e,t!=null&&(a.callback=t),e=bt(n,a,r),e!==null&&(pe(e,n,r),fa(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=he(),r=dt(t);r.tag=2,e!=null&&(r.callback=e),e=bt(n,r,t),e!==null&&(pe(e,n,t),fa(e,n,t))}};function hf(n,e,t,r,a,l,u){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(r,l,u):e.prototype&&e.prototype.isPureReactComponent?!ea(t,r)||!ea(a,l):!0}function pf(n,e,t,r){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,r),e.state!==n&&Bu.enqueueReplaceState(e,e.state,null)}function Zt(n,e){var t=e;if("ref"in e){t={};for(var r in e)r!=="ref"&&(t[r]=e[r])}if(n=n.defaultProps){t===e&&(t=D({},t));for(var a in n)t[a]===void 0&&(t[a]=n[a])}return t}var xl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function mf(n){xl(n)}function vf(n){console.error(n)}function gf(n){xl(n)}function Ul(n,e){try{var t=n.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Sf(n,e,t){try{var r=n.onCaughtError;r(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function wu(n,e,t){return t=dt(t),t.tag=3,t.payload={element:null},t.callback=function(){Ul(n,e)},t}function Ef(n){return n=dt(n),n.tag=3,n}function Af(n,e,t,r){var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var l=r.value;n.payload=function(){return a(l)},n.callback=function(){Sf(e,t,r)}}var u=t.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(n.callback=function(){Sf(e,t,r),typeof a!="function"&&(At===null?At=new Set([this]):At.add(this));var o=r.stack;this.componentDidCatch(r.value,{componentStack:o!==null?o:""})})}function yy(n,e,t,r,a){if(t.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=t.alternate,e!==null&&ia(e,t,a,!0),t=Oe.current,t!==null){switch(t.tag){case 13:return Ge===null?ic():t.alternate===null&&Un===0&&(Un=3),t.flags&=-257,t.flags|=65536,t.lanes=a,r===fu?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([r]):e.add(r),cc(n,r,a)),!1;case 22:return t.flags|=65536,r===fu?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([r]):t.add(r)),cc(n,r,a)),!1}throw Error(s(435,t.tag))}return cc(n,r,a),ic(),!1}if(pn)return e=Oe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,r!==au&&(n=Error(s(422),{cause:r}),la(Ae(n,t)))):(r!==au&&(e=Error(s(423),{cause:r}),la(Ae(e,t))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,r=Ae(r,t),a=wu(n.stateNode,r,a),yu(n,a),Un!==4&&(Un=2)),!1;var l=Error(s(520),{cause:r});if(l=Ae(l,t),Oa===null?Oa=[l]:Oa.push(l),Un!==4&&(Un=2),e===null)return!0;r=Ae(r,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,n=a&-a,t.lanes|=n,n=wu(t.stateNode,r,n),yu(t,n),!1;case 1:if(e=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(At===null||!At.has(l))))return t.flags|=65536,a&=-a,t.lanes|=a,a=Ef(a),Af(a,n,t,r),yu(t,a),!1}t=t.return}while(t!==null);return!1}var Rf=Error(s(461)),qn=!1;function Qn(n,e,t,r){e.child=n===null?bf(e,null,t,r):Dr(e,n.child,t,r)}function Tf(n,e,t,r,a){t=t.render;var l=e.ref;if("ref"in r){var u={};for(var o in r)o!=="ref"&&(u[o]=r[o])}else u=r;return Qt(e),r=gu(n,e,t,u,l,a),o=Su(),n!==null&&!qn?(Eu(n,e,a),Fe(n,e,a)):(pn&&o&&tu(e),e.flags|=1,Qn(n,e,r,a),e.child)}function _f(n,e,t,r,a){if(n===null){var l=t.type;return typeof l=="function"&&!$i(l)&&l.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=l,Of(n,e,l,r,a)):(n=fl(t.type,null,r,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!Qu(n,a)){var u=l.memoizedProps;if(t=t.compare,t=t!==null?t:ea,t(u,r)&&n.ref===e.ref)return Fe(n,e,a)}return e.flags|=1,n=Xe(l,r),n.ref=e.ref,n.return=e,e.child=n}function Of(n,e,t,r,a){if(n!==null){var l=n.memoizedProps;if(ea(l,r)&&n.ref===e.ref)if(qn=!1,e.pendingProps=r=l,Qu(n,a))(n.flags&131072)!==0&&(qn=!0);else return e.lanes=n.lanes,Fe(n,e,a)}return zu(n,e,t,r,a)}function Df(n,e,t){var r=e.pendingProps,a=r.children,l=n!==null?n.memoizedState:null;if(r.mode==="hidden"){if((e.flags&128)!==0){if(r=l!==null?l.baseLanes|t:t,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;e.childLanes=l&~r}else e.childLanes=0,e.child=null;return Nf(n,e,r,t)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&pl(e,l!==null?l.cachePool:null),l!==null?_o(e,l):pu(),yf(e);else return e.lanes=e.childLanes=536870912,Nf(n,e,l!==null?l.baseLanes|t:t,t)}else l!==null?(pl(e,l.cachePool),_o(e,l),pt(),e.memoizedState=null):(n!==null&&pl(e,null),pu(),pt());return Qn(n,e,a,t),e.child}function Nf(n,e,t,r){var a=ou();return a=a===null?null:{parent:Gn._currentValue,pool:a},e.memoizedState={baseLanes:t,cachePool:a},n!==null&&pl(e,null),pu(),yf(e),n!==null&&ia(n,e,r,!0),null}function Hl(n,e){var t=e.ref;if(t===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(s(284));(n===null||n.ref!==t)&&(e.flags|=4194816)}}function zu(n,e,t,r,a){return Qt(e),t=gu(n,e,t,r,void 0,a),r=Su(),n!==null&&!qn?(Eu(n,e,a),Fe(n,e,a)):(pn&&r&&tu(e),e.flags|=1,Qn(n,e,t,a),e.child)}function Mf(n,e,t,r,a,l){return Qt(e),e.updateQueue=null,t=Do(e,r,t,a),Oo(n),r=Su(),n!==null&&!qn?(Eu(n,e,l),Fe(n,e,l)):(pn&&r&&tu(e),e.flags|=1,Qn(n,e,t,l),e.child)}function Cf(n,e,t,r,a){if(Qt(e),e.stateNode===null){var l=mr,u=t.contextType;typeof u=="object"&&u!==null&&(l=In(u)),l=new t(r,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Bu,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=r,l.state=e.memoizedState,l.refs={},du(e),u=t.contextType,l.context=typeof u=="object"&&u!==null?In(u):mr,l.state=e.memoizedState,u=t.getDerivedStateFromProps,typeof u=="function"&&(Lu(e,t,u,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(u=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),u!==l.state&&Bu.enqueueReplaceState(l,l.state,null),ba(e,r,l,a),da(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(n===null){l=e.stateNode;var o=e.memoizedProps,b=Zt(t,o);l.props=b;var A=l.context,N=t.contextType;u=mr,typeof N=="object"&&N!==null&&(u=In(N));var x=t.getDerivedStateFromProps;N=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,N||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||A!==u)&&pf(e,l,r,u),ft=!1;var R=e.memoizedState;l.state=R,ba(e,r,l,a),da(),A=e.memoizedState,o||R!==A||ft?(typeof x=="function"&&(Lu(e,t,x,r),A=e.memoizedState),(b=ft||hf(e,t,b,r,R,A,u))?(N||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=A),l.props=r,l.state=A,l.context=u,r=b):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,bu(n,e),u=e.memoizedProps,N=Zt(t,u),l.props=N,x=e.pendingProps,R=l.context,A=t.contextType,b=mr,typeof A=="object"&&A!==null&&(b=In(A)),o=t.getDerivedStateFromProps,(A=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==x||R!==b)&&pf(e,l,r,b),ft=!1,R=e.memoizedState,l.state=R,ba(e,r,l,a),da();var T=e.memoizedState;u!==x||R!==T||ft||n!==null&&n.dependencies!==null&&yl(n.dependencies)?(typeof o=="function"&&(Lu(e,t,o,r),T=e.memoizedState),(N=ft||hf(e,t,N,r,R,T,b)||n!==null&&n.dependencies!==null&&yl(n.dependencies))?(A||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,T,b),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,T,b)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&R===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&R===n.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),l.props=r,l.state=T,l.context=b,r=N):(typeof l.componentDidUpdate!="function"||u===n.memoizedProps&&R===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===n.memoizedProps&&R===n.memoizedState||(e.flags|=1024),r=!1)}return l=r,Hl(n,e),r=(e.flags&128)!==0,l||r?(l=e.stateNode,t=r&&typeof t.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&r?(e.child=Dr(e,n.child,null,a),e.child=Dr(e,null,t,a)):Qn(n,e,t,a),e.memoizedState=l.state,n=e.child):n=Fe(n,e,a),n}function xf(n,e,t,r){return aa(),e.flags|=256,Qn(n,e,t,r),e.child}var Gu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ju(n){return{baseLanes:n,cachePool:mo()}}function Yu(n,e,t){return n=n!==null?n.childLanes&~t:0,e&&(n|=De),n}function Uf(n,e,t){var r=e.pendingProps,a=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=n!==null&&n.memoizedState===null?!1:(jn.current&2)!==0),u&&(a=!0,e.flags&=-129),u=(e.flags&32)!==0,e.flags&=-33,n===null){if(pn){if(a?ht(e):pt(),pn){var o=xn,b;if(b=o){n:{for(b=o,o=ze;b.nodeType!==8;){if(!o){o=null;break n}if(b=He(b.nextSibling),b===null){o=null;break n}}o=b}o!==null?(e.memoizedState={dehydrated:o,treeContext:jt!==null?{id:We,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},b=fe(18,null,null,0),b.stateNode=o,b.return=e,e.child=b,ne=e,xn=null,b=!0):b=!1}b||Vt(e)}if(o=e.memoizedState,o!==null&&(o=o.dehydrated,o!==null))return Rc(o)?e.lanes=32:e.lanes=536870912,null;Pe(e)}return o=r.children,r=r.fallback,a?(pt(),a=e.mode,o=Ll({mode:"hidden",children:o},a),r=Gt(r,a,t,null),o.return=e,r.return=e,o.sibling=r,e.child=o,a=e.child,a.memoizedState=ju(t),a.childLanes=Yu(n,u,t),e.memoizedState=Gu,r):(ht(e),qu(e,o))}if(b=n.memoizedState,b!==null&&(o=b.dehydrated,o!==null)){if(l)e.flags&256?(ht(e),e.flags&=-257,e=Vu(n,e,t)):e.memoizedState!==null?(pt(),e.child=n.child,e.flags|=128,e=null):(pt(),a=r.fallback,o=e.mode,r=Ll({mode:"visible",children:r.children},o),a=Gt(a,o,t,null),a.flags|=2,r.return=e,a.return=e,r.sibling=a,e.child=r,Dr(e,n.child,null,t),r=e.child,r.memoizedState=ju(t),r.childLanes=Yu(n,u,t),e.memoizedState=Gu,e=a);else if(ht(e),Rc(o)){if(u=o.nextSibling&&o.nextSibling.dataset,u)var A=u.dgst;u=A,r=Error(s(419)),r.stack="",r.digest=u,la({value:r,source:null,stack:null}),e=Vu(n,e,t)}else if(qn||ia(n,e,t,!1),u=(t&n.childLanes)!==0,qn||u){if(u=On,u!==null&&(r=t&-t,r=(r&42)!==0?1:Ti(r),r=(r&(u.suspendedLanes|t))!==0?0:r,r!==0&&r!==b.retryLane))throw b.retryLane=r,pr(n,r),pe(u,n,r),Rf;o.data==="$?"||ic(),e=Vu(n,e,t)}else o.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=b.treeContext,xn=He(o.nextSibling),ne=e,pn=!0,qt=null,ze=!1,n!==null&&(Te[_e++]=We,Te[_e++]=Ze,Te[_e++]=jt,We=n.id,Ze=n.overflow,jt=e),e=qu(e,r.children),e.flags|=4096);return e}return a?(pt(),a=r.fallback,o=e.mode,b=n.child,A=b.sibling,r=Xe(b,{mode:"hidden",children:r.children}),r.subtreeFlags=b.subtreeFlags&65011712,A!==null?a=Xe(A,a):(a=Gt(a,o,t,null),a.flags|=2),a.return=e,r.return=e,r.sibling=a,e.child=r,r=a,a=e.child,o=n.child.memoizedState,o===null?o=ju(t):(b=o.cachePool,b!==null?(A=Gn._currentValue,b=b.parent!==A?{parent:A,pool:A}:b):b=mo(),o={baseLanes:o.baseLanes|t,cachePool:b}),a.memoizedState=o,a.childLanes=Yu(n,u,t),e.memoizedState=Gu,r):(ht(e),t=n.child,n=t.sibling,t=Xe(t,{mode:"visible",children:r.children}),t.return=e,t.sibling=null,n!==null&&(u=e.deletions,u===null?(e.deletions=[n],e.flags|=16):u.push(n)),e.child=t,e.memoizedState=null,t)}function qu(n,e){return e=Ll({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function Ll(n,e){return n=fe(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Vu(n,e,t){return Dr(e,n.child,null,t),n=qu(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Hf(n,e,t){n.lanes|=e;var r=n.alternate;r!==null&&(r.lanes|=e),iu(n.return,e,t)}function Ku(n,e,t,r,a){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:a}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=t,l.tailMode=a)}function Lf(n,e,t){var r=e.pendingProps,a=r.revealOrder,l=r.tail;if(Qn(n,e,r.children,t),r=jn.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hf(n,t,e);else if(n.tag===19)Hf(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}r&=1}switch(B(jn,r),a){case"forwards":for(t=e.child,a=null;t!==null;)n=t.alternate,n!==null&&Cl(n)===null&&(a=t),t=t.sibling;t=a,t===null?(a=e.child,e.child=null):(a=t.sibling,t.sibling=null),Ku(e,!1,a,t,l);break;case"backwards":for(t=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&Cl(n)===null){e.child=a;break}n=a.sibling,a.sibling=t,t=a,a=n}Ku(e,!0,t,null,l);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Fe(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Et|=e.lanes,(t&e.childLanes)===0)if(n!==null){if(ia(n,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(s(153));if(e.child!==null){for(n=e.child,t=Xe(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Xe(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Qu(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&yl(n)))}function hy(n,e,t){switch(e.tag){case 3:q(e,e.stateNode.containerInfo),ot(e,Gn,n.memoizedState.cache),aa();break;case 27:case 5:ie(e);break;case 4:q(e,e.stateNode.containerInfo);break;case 10:ot(e,e.type,e.memoizedProps.value);break;case 13:var r=e.memoizedState;if(r!==null)return r.dehydrated!==null?(ht(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Uf(n,e,t):(ht(e),n=Fe(n,e,t),n!==null?n.sibling:null);ht(e);break;case 19:var a=(n.flags&128)!==0;if(r=(t&e.childLanes)!==0,r||(ia(n,e,t,!1),r=(t&e.childLanes)!==0),a){if(r)return Lf(n,e,t);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),B(jn,jn.current),r)break;return null;case 22:case 23:return e.lanes=0,Df(n,e,t);case 24:ot(e,Gn,n.memoizedState.cache)}return Fe(n,e,t)}function Bf(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps)qn=!0;else{if(!Qu(n,t)&&(e.flags&128)===0)return qn=!1,hy(n,e,t);qn=(n.flags&131072)!==0}else qn=!1,pn&&(e.flags&1048576)!==0&&so(e,bl,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var r=e.elementType,a=r._init;if(r=a(r._payload),e.type=r,typeof r=="function")$i(r)?(n=Zt(r,n),e.tag=1,e=Cf(null,e,r,n,t)):(e.tag=0,e=zu(null,e,r,n,t));else{if(r!=null){if(a=r.$$typeof,a===j){e.tag=11,e=Tf(null,e,r,n,t);break n}else if(a===yn){e.tag=14,e=_f(null,e,r,n,t);break n}}throw e=Fn(r)||r,Error(s(306,e,""))}}return e;case 0:return zu(n,e,e.type,e.pendingProps,t);case 1:return r=e.type,a=Zt(r,e.pendingProps),Cf(n,e,r,a,t);case 3:n:{if(q(e,e.stateNode.containerInfo),n===null)throw Error(s(387));r=e.pendingProps;var l=e.memoizedState;a=l.element,bu(n,e),ba(e,r,null,t);var u=e.memoizedState;if(r=u.cache,ot(e,Gn,r),r!==l.cache&&uu(e,[Gn],t,!0),da(),r=u.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:u.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=xf(n,e,r,t);break n}else if(r!==a){a=Ae(Error(s(424)),e),la(a),e=xf(n,e,r,t);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(xn=He(n.firstChild),ne=e,pn=!0,qt=null,ze=!0,t=bf(e,null,r,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(aa(),r===a){e=Fe(n,e,t);break n}Qn(n,e,r,t)}e=e.child}return e;case 26:return Hl(n,e),n===null?(t=jd(e.type,null,e.pendingProps,null))?e.memoizedState=t:pn||(t=e.type,n=e.pendingProps,r=kl(J.current).createElement(t),r[kn]=e,r[ee]=n,Wn(r,t,n),Yn(r),e.stateNode=r):e.memoizedState=jd(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return ie(e),n===null&&pn&&(r=e.stateNode=wd(e.type,e.pendingProps,J.current),ne=e,ze=!0,a=xn,_t(e.type)?(Tc=a,xn=He(r.firstChild)):xn=a),Qn(n,e,e.pendingProps.children,t),Hl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&pn&&((a=r=xn)&&(r=Ky(r,e.type,e.pendingProps,ze),r!==null?(e.stateNode=r,ne=e,xn=He(r.firstChild),ze=!1,a=!0):a=!1),a||Vt(e)),ie(e),a=e.type,l=e.pendingProps,u=n!==null?n.memoizedProps:null,r=l.children,Sc(a,l)?r=null:u!==null&&Sc(a,u)&&(e.flags|=32),e.memoizedState!==null&&(a=gu(n,e,uy,null,null,t),Ba._currentValue=a),Hl(n,e),Qn(n,e,r,t),e.child;case 6:return n===null&&pn&&((n=t=xn)&&(t=Qy(t,e.pendingProps,ze),t!==null?(e.stateNode=t,ne=e,xn=null,n=!0):n=!1),n||Vt(e)),null;case 13:return Uf(n,e,t);case 4:return q(e,e.stateNode.containerInfo),r=e.pendingProps,n===null?e.child=Dr(e,null,r,t):Qn(n,e,r,t),e.child;case 11:return Tf(n,e,e.type,e.pendingProps,t);case 7:return Qn(n,e,e.pendingProps,t),e.child;case 8:return Qn(n,e,e.pendingProps.children,t),e.child;case 12:return Qn(n,e,e.pendingProps.children,t),e.child;case 10:return r=e.pendingProps,ot(e,e.type,r.value),Qn(n,e,r.children,t),e.child;case 9:return a=e.type._context,r=e.pendingProps.children,Qt(e),a=In(a),r=r(a),e.flags|=1,Qn(n,e,r,t),e.child;case 14:return _f(n,e,e.type,e.pendingProps,t);case 15:return Of(n,e,e.type,e.pendingProps,t);case 19:return Lf(n,e,t);case 31:return r=e.pendingProps,t=e.mode,r={mode:r.mode,children:r.children},n===null?(t=Ll(r,t),t.ref=e.ref,e.child=t,t.return=e,e=t):(t=Xe(n.child,r),t.ref=e.ref,e.child=t,t.return=e,e=t),e;case 22:return Df(n,e,t);case 24:return Qt(e),r=In(Gn),n===null?(a=ou(),a===null&&(a=On,l=cu(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=t),a=l),e.memoizedState={parent:r,cache:a},du(e),ot(e,Gn,a)):((n.lanes&t)!==0&&(bu(n,e),ba(e,null,null,t),da()),a=n.memoizedState,l=e.memoizedState,a.parent!==r?(a={parent:r,cache:r},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),ot(e,Gn,r)):(r=l.cache,ot(e,Gn,r),r!==a.cache&&uu(e,[Gn],t,!0))),Qn(n,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(s(156,e.tag))}function $e(n){n.flags|=4}function wf(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Qd(e)){if(e=Oe.current,e!==null&&((sn&4194048)===sn?Ge!==null:(sn&62914560)!==sn&&(sn&536870912)===0||e!==Ge))throw oa=fu,vo;n.flags|=8192}}function Bl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?ds():536870912,n.lanes|=e,xr|=e)}function Sa(n,e){if(!pn)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:r.sibling=null}}function Cn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,r=0;if(e)for(var a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags&65011712,r|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)t|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=r,n.childLanes=t,e}function py(n,e,t){var r=e.pendingProps;switch(ru(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Cn(e),null;case 1:return Cn(e),null;case 3:return t=e.stateNode,r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Ie(Gn),hn(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(n===null||n.child===null)&&(ra(e)?$e(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,bo())),Cn(e),null;case 26:return t=e.memoizedState,n===null?($e(e),t!==null?(Cn(e),wf(e,t)):(Cn(e),e.flags&=-16777217)):t?t!==n.memoizedState?($e(e),Cn(e),wf(e,t)):(Cn(e),e.flags&=-16777217):(n.memoizedProps!==r&&$e(e),Cn(e),e.flags&=-16777217),null;case 27:ue(e),t=J.current;var a=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==r&&$e(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Cn(e),null}n=Q.current,ra(e)?oo(e):(n=wd(a,r,t),e.stateNode=n,$e(e))}return Cn(e),null;case 5:if(ue(e),t=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==r&&$e(e);else{if(!r){if(e.stateNode===null)throw Error(s(166));return Cn(e),null}if(n=Q.current,ra(e))oo(e);else{switch(a=kl(J.current),n){case 1:n=a.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:n=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":n=a.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":n=a.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof r.is=="string"?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?n.multiple=!0:r.size&&(n.size=r.size);break;default:n=typeof r.is=="string"?a.createElement(t,{is:r.is}):a.createElement(t)}}n[kn]=e,n[ee]=r;n:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break n;for(;a.sibling===null;){if(a.return===null||a.return===e)break n;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=n;n:switch(Wn(n,t,r),t){case"button":case"input":case"select":case"textarea":n=!!r.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&$e(e)}}return Cn(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==r&&$e(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(s(166));if(n=J.current,ra(e)){if(n=e.stateNode,t=e.memoizedProps,r=null,a=ne,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}n[kn]=e,n=!!(n.nodeValue===t||r!==null&&r.suppressHydrationWarning===!0||Md(n.nodeValue,t)),n||Vt(e)}else n=kl(n).createTextNode(r),n[kn]=e,e.stateNode=n}return Cn(e),null;case 13:if(r=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=ra(e),r!==null&&r.dehydrated!==null){if(n===null){if(!a)throw Error(s(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(s(317));a[kn]=e}else aa(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Cn(e),a=!1}else a=bo(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Pe(e),e):(Pe(e),null)}if(Pe(e),(e.flags&128)!==0)return e.lanes=t,e;if(t=r!==null,n=n!==null&&n.memoizedState!==null,t){r=e.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool);var l=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==a&&(r.flags|=2048)}return t!==n&&t&&(e.child.flags|=8192),Bl(e,e.updateQueue),Cn(e),null;case 4:return hn(),n===null&&hc(e.stateNode.containerInfo),Cn(e),null;case 10:return Ie(e.type),Cn(e),null;case 19:if(z(jn),a=e.memoizedState,a===null)return Cn(e),null;if(r=(e.flags&128)!==0,l=a.rendering,l===null)if(r)Sa(a,!1);else{if(Un!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=Cl(n),l!==null){for(e.flags|=128,Sa(a,!1),n=l.updateQueue,e.updateQueue=n,Bl(e,n),e.subtreeFlags=0,n=t,t=e.child;t!==null;)co(t,n),t=t.sibling;return B(jn,jn.current&1|2),e.child}n=n.sibling}a.tail!==null&&we()>Gl&&(e.flags|=128,r=!0,Sa(a,!1),e.lanes=4194304)}else{if(!r)if(n=Cl(l),n!==null){if(e.flags|=128,r=!0,n=n.updateQueue,e.updateQueue=n,Bl(e,n),Sa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!pn)return Cn(e),null}else 2*we()-a.renderingStartTime>Gl&&t!==536870912&&(e.flags|=128,r=!0,Sa(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=we(),e.sibling=null,n=jn.current,B(jn,r?n&1|2:n&1),e):(Cn(e),null);case 22:case 23:return Pe(e),mu(),r=e.memoizedState!==null,n!==null?n.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(t&536870912)!==0&&(e.flags&128)===0&&(Cn(e),e.subtreeFlags&6&&(e.flags|=8192)):Cn(e),t=e.updateQueue,t!==null&&Bl(e,t.retryQueue),t=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==t&&(e.flags|=2048),n!==null&&z(Xt),null;case 24:return t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Ie(Gn),Cn(e),null;case 25:return null;case 30:return null}throw Error(s(156,e.tag))}function my(n,e){switch(ru(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ie(Gn),hn(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return ue(e),null;case 13:if(Pe(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(s(340));aa()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return z(jn),null;case 4:return hn(),null;case 10:return Ie(e.type),null;case 22:case 23:return Pe(e),mu(),n!==null&&z(Xt),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return Ie(Gn),null;case 25:return null;default:return null}}function zf(n,e){switch(ru(e),e.tag){case 3:Ie(Gn),hn();break;case 26:case 27:case 5:ue(e);break;case 4:hn();break;case 13:Pe(e);break;case 19:z(jn);break;case 10:Ie(e.type);break;case 22:case 23:Pe(e),mu(),n!==null&&z(Xt);break;case 24:Ie(Gn)}}function Ea(n,e){try{var t=e.updateQueue,r=t!==null?t.lastEffect:null;if(r!==null){var a=r.next;t=a;do{if((t.tag&n)===n){r=void 0;var l=t.create,u=t.inst;r=l(),u.destroy=r}t=t.next}while(t!==a)}}catch(o){Tn(e,e.return,o)}}function mt(n,e,t){try{var r=e.updateQueue,a=r!==null?r.lastEffect:null;if(a!==null){var l=a.next;r=l;do{if((r.tag&n)===n){var u=r.inst,o=u.destroy;if(o!==void 0){u.destroy=void 0,a=e;var b=t,A=o;try{A()}catch(N){Tn(a,b,N)}}}r=r.next}while(r!==l)}}catch(N){Tn(e,e.return,N)}}function Gf(n){var e=n.updateQueue;if(e!==null){var t=n.stateNode;try{To(e,t)}catch(r){Tn(n,n.return,r)}}}function jf(n,e,t){t.props=Zt(n.type,n.memoizedProps),t.state=n.memoizedState;try{t.componentWillUnmount()}catch(r){Tn(n,e,r)}}function Aa(n,e){try{var t=n.ref;if(t!==null){switch(n.tag){case 26:case 27:case 5:var r=n.stateNode;break;case 30:r=n.stateNode;break;default:r=n.stateNode}typeof t=="function"?n.refCleanup=t(r):t.current=r}}catch(a){Tn(n,e,a)}}function je(n,e){var t=n.ref,r=n.refCleanup;if(t!==null)if(typeof r=="function")try{r()}catch(a){Tn(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(a){Tn(n,e,a)}else t.current=null}function Yf(n){var e=n.type,t=n.memoizedProps,r=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&r.focus();break n;case"img":t.src?r.src=t.src:t.srcSet&&(r.srcset=t.srcSet)}}catch(a){Tn(n,n.return,a)}}function Xu(n,e,t){try{var r=n.stateNode;Gy(r,n.type,t,e),r[ee]=e}catch(a){Tn(n,n.return,a)}}function qf(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&_t(n.type)||n.tag===4}function Wu(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||qf(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&_t(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zu(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(n),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(r===27&&_t(n.type)&&(t=n.stateNode,e=null),n=n.child,n!==null))for(Zu(n,e,t),n=n.sibling;n!==null;)Zu(n,e,t),n=n.sibling}function wl(n,e,t){var r=n.tag;if(r===5||r===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(r!==4&&(r===27&&_t(n.type)&&(t=n.stateNode),n=n.child,n!==null))for(wl(n,e,t),n=n.sibling;n!==null;)wl(n,e,t),n=n.sibling}function Vf(n){var e=n.stateNode,t=n.memoizedProps;try{for(var r=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Wn(e,r,t),e[kn]=n,e[ee]=t}catch(l){Tn(n,n.return,l)}}var nt=!1,Ln=!1,ku=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,Vn=null;function vy(n,e){if(n=n.containerInfo,vc=ni,n=Fs(n),Wi(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else n:{t=(t=n.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var a=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break n}var u=0,o=-1,b=-1,A=0,N=0,x=n,R=null;e:for(;;){for(var T;x!==t||a!==0&&x.nodeType!==3||(o=u+a),x!==l||r!==0&&x.nodeType!==3||(b=u+r),x.nodeType===3&&(u+=x.nodeValue.length),(T=x.firstChild)!==null;)R=x,x=T;for(;;){if(x===n)break e;if(R===t&&++A===a&&(o=u),R===l&&++N===r&&(b=u),(T=x.nextSibling)!==null)break;x=R,R=x.parentNode}x=T}t=o===-1||b===-1?null:{start:o,end:b}}else t=null}t=t||{start:0,end:0}}else t=null;for(gc={focusedElem:n,selectionRange:t},ni=!1,Vn=e;Vn!==null;)if(e=Vn,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,Vn=n;else for(;Vn!==null;){switch(e=Vn,l=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,t=e,a=l.memoizedProps,l=l.memoizedState,r=t.stateNode;try{var I=Zt(t.type,a,t.elementType===t.type);n=r.getSnapshotBeforeUpdate(I,l),r.__reactInternalSnapshotBeforeUpdate=n}catch(X){Tn(t,t.return,X)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,t=n.nodeType,t===9)Ac(n);else if(t===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ac(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=e.sibling,n!==null){n.return=e.return,Vn=n;break}Vn=e.return}}function Qf(n,e,t){var r=t.flags;switch(t.tag){case 0:case 11:case 15:vt(n,t),r&4&&Ea(5,t);break;case 1:if(vt(n,t),r&4)if(n=t.stateNode,e===null)try{n.componentDidMount()}catch(u){Tn(t,t.return,u)}else{var a=Zt(t.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(u){Tn(t,t.return,u)}}r&64&&Gf(t),r&512&&Aa(t,t.return);break;case 3:if(vt(n,t),r&64&&(n=t.updateQueue,n!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{To(n,e)}catch(u){Tn(t,t.return,u)}}break;case 27:e===null&&r&4&&Vf(t);case 26:case 5:vt(n,t),e===null&&r&4&&Yf(t),r&512&&Aa(t,t.return);break;case 12:vt(n,t);break;case 13:vt(n,t),r&4&&Zf(n,t),r&64&&(n=t.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(t=Dy.bind(null,t),Xy(n,t))));break;case 22:if(r=t.memoizedState!==null||nt,!r){e=e!==null&&e.memoizedState!==null||Ln,a=nt;var l=Ln;nt=r,(Ln=e)&&!l?gt(n,t,(t.subtreeFlags&8772)!==0):vt(n,t),nt=a,Ln=l}break;case 30:break;default:vt(n,t)}}function Xf(n){var e=n.alternate;e!==null&&(n.alternate=null,Xf(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Di(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Nn=null,ae=!1;function et(n,e,t){for(t=t.child;t!==null;)Wf(n,e,t),t=t.sibling}function Wf(n,e,t){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Kr,t)}catch{}switch(t.tag){case 26:Ln||je(t,e),et(n,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:Ln||je(t,e);var r=Nn,a=ae;_t(t.type)&&(Nn=t.stateNode,ae=!1),et(n,e,t),xa(t.stateNode),Nn=r,ae=a;break;case 5:Ln||je(t,e);case 6:if(r=Nn,a=ae,Nn=null,et(n,e,t),Nn=r,ae=a,Nn!==null)if(ae)try{(Nn.nodeType===9?Nn.body:Nn.nodeName==="HTML"?Nn.ownerDocument.body:Nn).removeChild(t.stateNode)}catch(l){Tn(t,e,l)}else try{Nn.removeChild(t.stateNode)}catch(l){Tn(t,e,l)}break;case 18:Nn!==null&&(ae?(n=Nn,Ld(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.stateNode),ja(n)):Ld(Nn,t.stateNode));break;case 4:r=Nn,a=ae,Nn=t.stateNode.containerInfo,ae=!0,et(n,e,t),Nn=r,ae=a;break;case 0:case 11:case 14:case 15:Ln||mt(2,t,e),Ln||mt(4,t,e),et(n,e,t);break;case 1:Ln||(je(t,e),r=t.stateNode,typeof r.componentWillUnmount=="function"&&jf(t,e,r)),et(n,e,t);break;case 21:et(n,e,t);break;case 22:Ln=(r=Ln)||t.memoizedState!==null,et(n,e,t),Ln=r;break;default:et(n,e,t)}}function Zf(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{ja(n)}catch(t){Tn(e,e.return,t)}}function gy(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Kf),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Kf),e;default:throw Error(s(435,n.tag))}}function Iu(n,e){var t=gy(n);e.forEach(function(r){var a=Ny.bind(null,n,r);t.has(r)||(t.add(r),r.then(a,a))})}function de(n,e){var t=e.deletions;if(t!==null)for(var r=0;r<t.length;r++){var a=t[r],l=n,u=e,o=u;n:for(;o!==null;){switch(o.tag){case 27:if(_t(o.type)){Nn=o.stateNode,ae=!1;break n}break;case 5:Nn=o.stateNode,ae=!1;break n;case 3:case 4:Nn=o.stateNode.containerInfo,ae=!0;break n}o=o.return}if(Nn===null)throw Error(s(160));Wf(l,u,a),Nn=null,ae=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)kf(e,n),e=e.sibling}var Ue=null;function kf(n,e){var t=n.alternate,r=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:de(e,n),be(n),r&4&&(mt(3,n,n.return),Ea(3,n),mt(5,n,n.return));break;case 1:de(e,n),be(n),r&512&&(Ln||t===null||je(t,t.return)),r&64&&nt&&(n=n.updateQueue,n!==null&&(r=n.callbacks,r!==null&&(t=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=t===null?r:t.concat(r))));break;case 26:var a=Ue;if(de(e,n),be(n),r&512&&(Ln||t===null||je(t,t.return)),r&4){var l=t!==null?t.memoizedState:null;if(r=n.memoizedState,t===null)if(r===null)if(n.stateNode===null){n:{r=n.type,t=n.memoizedProps,a=a.ownerDocument||a;e:switch(r){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Wr]||l[kn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(r),a.head.insertBefore(l,a.querySelector("head > title"))),Wn(l,r,t),l[kn]=n,Yn(l),r=l;break n;case"link":var u=Vd("link","href",a).get(r+(t.href||""));if(u){for(var o=0;o<u.length;o++)if(l=u[o],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){u.splice(o,1);break e}}l=a.createElement(r),Wn(l,r,t),a.head.appendChild(l);break;case"meta":if(u=Vd("meta","content",a).get(r+(t.content||""))){for(o=0;o<u.length;o++)if(l=u[o],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){u.splice(o,1);break e}}l=a.createElement(r),Wn(l,r,t),a.head.appendChild(l);break;default:throw Error(s(468,r))}l[kn]=n,Yn(l),r=l}n.stateNode=r}else Kd(a,n.type,n.stateNode);else n.stateNode=qd(a,r,n.memoizedProps);else l!==r?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,r===null?Kd(a,n.type,n.stateNode):qd(a,r,n.memoizedProps)):r===null&&n.stateNode!==null&&Xu(n,n.memoizedProps,t.memoizedProps)}break;case 27:de(e,n),be(n),r&512&&(Ln||t===null||je(t,t.return)),t!==null&&r&4&&Xu(n,n.memoizedProps,t.memoizedProps);break;case 5:if(de(e,n),be(n),r&512&&(Ln||t===null||je(t,t.return)),n.flags&32){a=n.stateNode;try{sr(a,"")}catch(T){Tn(n,n.return,T)}}r&4&&n.stateNode!=null&&(a=n.memoizedProps,Xu(n,a,t!==null?t.memoizedProps:a)),r&1024&&(ku=!0);break;case 6:if(de(e,n),be(n),r&4){if(n.stateNode===null)throw Error(s(162));r=n.memoizedProps,t=n.stateNode;try{t.nodeValue=r}catch(T){Tn(n,n.return,T)}}break;case 3:if(Pl=null,a=Ue,Ue=Il(e.containerInfo),de(e,n),Ue=a,be(n),r&4&&t!==null&&t.memoizedState.isDehydrated)try{ja(e.containerInfo)}catch(T){Tn(n,n.return,T)}ku&&(ku=!1,If(n));break;case 4:r=Ue,Ue=Il(n.stateNode.containerInfo),de(e,n),be(n),Ue=r;break;case 12:de(e,n),be(n);break;case 13:de(e,n),be(n),n.child.flags&8192&&n.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(ec=we()),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,Iu(n,r)));break;case 22:a=n.memoizedState!==null;var b=t!==null&&t.memoizedState!==null,A=nt,N=Ln;if(nt=A||a,Ln=N||b,de(e,n),Ln=N,nt=A,be(n),r&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(t===null||b||nt||Ln||kt(n)),t=null,e=n;;){if(e.tag===5||e.tag===26){if(t===null){b=t=e;try{if(l=b.stateNode,a)u=l.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{o=b.stateNode;var x=b.memoizedProps.style,R=x!=null&&x.hasOwnProperty("display")?x.display:null;o.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(T){Tn(b,b.return,T)}}}else if(e.tag===6){if(t===null){b=e;try{b.stateNode.nodeValue=a?"":b.memoizedProps}catch(T){Tn(b,b.return,T)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}r&4&&(r=n.updateQueue,r!==null&&(t=r.retryQueue,t!==null&&(r.retryQueue=null,Iu(n,t))));break;case 19:de(e,n),be(n),r&4&&(r=n.updateQueue,r!==null&&(n.updateQueue=null,Iu(n,r)));break;case 30:break;case 21:break;default:de(e,n),be(n)}}function be(n){var e=n.flags;if(e&2){try{for(var t,r=n.return;r!==null;){if(qf(r)){t=r;break}r=r.return}if(t==null)throw Error(s(160));switch(t.tag){case 27:var a=t.stateNode,l=Wu(n);wl(n,l,a);break;case 5:var u=t.stateNode;t.flags&32&&(sr(u,""),t.flags&=-33);var o=Wu(n);wl(n,o,u);break;case 3:case 4:var b=t.stateNode.containerInfo,A=Wu(n);Zu(n,A,b);break;default:throw Error(s(161))}}catch(N){Tn(n,n.return,N)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function If(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;If(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function vt(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Qf(n,e.alternate,e),e=e.sibling}function kt(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:mt(4,e,e.return),kt(e);break;case 1:je(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&jf(e,e.return,t),kt(e);break;case 27:xa(e.stateNode);case 26:case 5:je(e,e.return),kt(e);break;case 22:e.memoizedState===null&&kt(e);break;case 30:kt(e);break;default:kt(e)}n=n.sibling}}function gt(n,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var r=e.alternate,a=n,l=e,u=l.flags;switch(l.tag){case 0:case 11:case 15:gt(a,l,t),Ea(4,l);break;case 1:if(gt(a,l,t),r=l,a=r.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(A){Tn(r,r.return,A)}if(r=l,a=r.updateQueue,a!==null){var o=r.stateNode;try{var b=a.shared.hiddenCallbacks;if(b!==null)for(a.shared.hiddenCallbacks=null,a=0;a<b.length;a++)Ro(b[a],o)}catch(A){Tn(r,r.return,A)}}t&&u&64&&Gf(l),Aa(l,l.return);break;case 27:Vf(l);case 26:case 5:gt(a,l,t),t&&r===null&&u&4&&Yf(l),Aa(l,l.return);break;case 12:gt(a,l,t);break;case 13:gt(a,l,t),t&&u&4&&Zf(a,l);break;case 22:l.memoizedState===null&&gt(a,l,t),Aa(l,l.return);break;case 30:break;default:gt(a,l,t)}e=e.sibling}}function Ju(n,e){var t=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==t&&(n!=null&&n.refCount++,t!=null&&ua(t))}function Pu(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ua(n))}function Ye(n,e,t,r){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jf(n,e,t,r),e=e.sibling}function Jf(n,e,t,r){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ye(n,e,t,r),a&2048&&Ea(9,e);break;case 1:Ye(n,e,t,r);break;case 3:Ye(n,e,t,r),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&ua(n)));break;case 12:if(a&2048){Ye(n,e,t,r),n=e.stateNode;try{var l=e.memoizedProps,u=l.id,o=l.onPostCommit;typeof o=="function"&&o(u,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(b){Tn(e,e.return,b)}}else Ye(n,e,t,r);break;case 13:Ye(n,e,t,r);break;case 23:break;case 22:l=e.stateNode,u=e.alternate,e.memoizedState!==null?l._visibility&2?Ye(n,e,t,r):Ra(n,e):l._visibility&2?Ye(n,e,t,r):(l._visibility|=2,Nr(n,e,t,r,(e.subtreeFlags&10256)!==0)),a&2048&&Ju(u,e);break;case 24:Ye(n,e,t,r),a&2048&&Pu(e.alternate,e);break;default:Ye(n,e,t,r)}}function Nr(n,e,t,r,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=n,u=e,o=t,b=r,A=u.flags;switch(u.tag){case 0:case 11:case 15:Nr(l,u,o,b,a),Ea(8,u);break;case 23:break;case 22:var N=u.stateNode;u.memoizedState!==null?N._visibility&2?Nr(l,u,o,b,a):Ra(l,u):(N._visibility|=2,Nr(l,u,o,b,a)),a&&A&2048&&Ju(u.alternate,u);break;case 24:Nr(l,u,o,b,a),a&&A&2048&&Pu(u.alternate,u);break;default:Nr(l,u,o,b,a)}e=e.sibling}}function Ra(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=n,r=e,a=r.flags;switch(r.tag){case 22:Ra(t,r),a&2048&&Ju(r.alternate,r);break;case 24:Ra(t,r),a&2048&&Pu(r.alternate,r);break;default:Ra(t,r)}e=e.sibling}}var Ta=8192;function Mr(n){if(n.subtreeFlags&Ta)for(n=n.child;n!==null;)Pf(n),n=n.sibling}function Pf(n){switch(n.tag){case 26:Mr(n),n.flags&Ta&&n.memoizedState!==null&&ah(Ue,n.memoizedState,n.memoizedProps);break;case 5:Mr(n);break;case 3:case 4:var e=Ue;Ue=Il(n.stateNode.containerInfo),Mr(n),Ue=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=Ta,Ta=16777216,Mr(n),Ta=e):Mr(n));break;default:Mr(n)}}function Ff(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function _a(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var r=e[t];Vn=r,nd(r,n)}Ff(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$f(n),n=n.sibling}function $f(n){switch(n.tag){case 0:case 11:case 15:_a(n),n.flags&2048&&mt(9,n,n.return);break;case 3:_a(n);break;case 12:_a(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,zl(n)):_a(n);break;default:_a(n)}}function zl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var r=e[t];Vn=r,nd(r,n)}Ff(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:mt(8,e,e.return),zl(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,zl(e));break;default:zl(e)}n=n.sibling}}function nd(n,e){for(;Vn!==null;){var t=Vn;switch(t.tag){case 0:case 11:case 15:mt(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var r=t.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ua(t.memoizedState.cache)}if(r=t.child,r!==null)r.return=t,Vn=r;else n:for(t=n;Vn!==null;){r=Vn;var a=r.sibling,l=r.return;if(Xf(r),r===t){Vn=null;break n}if(a!==null){a.return=l,Vn=a;break n}Vn=l}}}var Sy={getCacheForType:function(n){var e=In(Gn),t=e.data.get(n);return t===void 0&&(t=n(),e.data.set(n,t)),t}},Ey=typeof WeakMap=="function"?WeakMap:Map,vn=0,On=null,an=null,sn=0,gn=0,ye=null,St=!1,Cr=!1,Fu=!1,tt=0,Un=0,Et=0,It=0,$u=0,De=0,xr=0,Oa=null,le=null,nc=!1,ec=0,Gl=1/0,jl=null,At=null,Xn=0,Rt=null,Ur=null,Hr=0,tc=0,rc=null,ed=null,Da=0,ac=null;function he(){if((vn&2)!==0&&sn!==0)return sn&-sn;if(O.T!==null){var n=Sr;return n!==0?n:fc()}return hs()}function td(){De===0&&(De=(sn&536870912)===0||pn?fs():536870912);var n=Oe.current;return n!==null&&(n.flags|=32),De}function pe(n,e,t){(n===On&&(gn===2||gn===9)||n.cancelPendingCommit!==null)&&(Lr(n,0),Tt(n,sn,De,!1)),Xr(n,t),((vn&2)===0||n!==On)&&(n===On&&((vn&2)===0&&(It|=t),Un===4&&Tt(n,sn,De,!1)),qe(n))}function rd(n,e,t){if((vn&6)!==0)throw Error(s(327));var r=!t&&(e&124)===0&&(e&n.expiredLanes)===0||Qr(n,e),a=r?Ty(n,e):uc(n,e,!0),l=r;do{if(a===0){Cr&&!r&&Tt(n,e,0,!1);break}else{if(t=n.current.alternate,l&&!Ay(t)){a=uc(n,e,!1),l=!1;continue}if(a===2){if(l=e,n.errorRecoveryDisabledLanes&l)var u=0;else u=n.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){e=u;n:{var o=n;a=Oa;var b=o.current.memoizedState.isDehydrated;if(b&&(Lr(o,u).flags|=256),u=uc(o,u,!1),u!==2){if(Fu&&!b){o.errorRecoveryDisabledLanes|=l,It|=l,a=4;break n}l=le,le=a,l!==null&&(le===null?le=l:le.push.apply(le,l))}a=u}if(l=!1,a!==2)continue}}if(a===1){Lr(n,0),Tt(n,e,0,!0);break}n:{switch(r=n,l=a,l){case 0:case 1:throw Error(s(345));case 4:if((e&4194048)!==e)break;case 6:Tt(r,e,De,!St);break n;case 2:le=null;break;case 3:case 5:break;default:throw Error(s(329))}if((e&62914560)===e&&(a=ec+300-we(),10<a)){if(Tt(r,e,De,!St),Ja(r,0,!0)!==0)break n;r.timeoutHandle=Ud(ad.bind(null,r,t,le,jl,nc,e,De,It,xr,St,l,2,-0,0),a);break n}ad(r,t,le,jl,nc,e,De,It,xr,St,l,0,-0,0)}}break}while(!0);qe(n)}function ad(n,e,t,r,a,l,u,o,b,A,N,x,R,T){if(n.timeoutHandle=-1,x=e.subtreeFlags,(x&8192||(x&16785408)===16785408)&&(La={stylesheets:null,count:0,unsuspend:rh},Pf(e),x=lh(),x!==null)){n.cancelPendingCommit=x(fd.bind(null,n,e,l,t,r,a,u,o,b,N,1,R,T)),Tt(n,l,u,!A);return}fd(n,e,l,t,r,a,u,o,b)}function Ay(n){for(var e=n;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var r=0;r<t.length;r++){var a=t[r],l=a.getSnapshot;a=a.value;try{if(!oe(l(),a))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Tt(n,e,t,r){e&=~$u,e&=~It,n.suspendedLanes|=e,n.pingedLanes&=~e,r&&(n.warmLanes|=e),r=n.expirationTimes;for(var a=e;0<a;){var l=31-se(a),u=1<<l;r[l]=-1,a&=~u}t!==0&&bs(n,t,e)}function Yl(){return(vn&6)===0?(Na(0),!1):!0}function lc(){if(an!==null){if(gn===0)var n=an.return;else n=an,ke=Kt=null,Au(n),Or=null,va=0,n=an;for(;n!==null;)zf(n.alternate,n),n=n.return;an=null}}function Lr(n,e){var t=n.timeoutHandle;t!==-1&&(n.timeoutHandle=-1,Yy(t)),t=n.cancelPendingCommit,t!==null&&(n.cancelPendingCommit=null,t()),lc(),On=n,an=t=Xe(n.current,null),sn=e,gn=0,ye=null,St=!1,Cr=Qr(n,e),Fu=!1,xr=De=$u=It=Et=Un=0,le=Oa=null,nc=!1,(e&8)!==0&&(e|=e&32);var r=n.entangledLanes;if(r!==0)for(n=n.entanglements,r&=e;0<r;){var a=31-se(r),l=1<<a;e|=n[a],r&=~l}return tt=e,cl(),t}function ld(n,e){en=null,O.H=Dl,e===sa||e===ml?(e=Eo(),gn=3):e===vo?(e=Eo(),gn=4):gn=e===Rf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ye=e,an===null&&(Un=1,Ul(n,Ae(e,n.current)))}function id(){var n=O.H;return O.H=Dl,n===null?Dl:n}function ud(){var n=O.A;return O.A=Sy,n}function ic(){Un=4,St||(sn&4194048)!==sn&&Oe.current!==null||(Cr=!0),(Et&134217727)===0&&(It&134217727)===0||On===null||Tt(On,sn,De,!1)}function uc(n,e,t){var r=vn;vn|=2;var a=id(),l=ud();(On!==n||sn!==e)&&(jl=null,Lr(n,e)),e=!1;var u=Un;n:do try{if(gn!==0&&an!==null){var o=an,b=ye;switch(gn){case 8:lc(),u=6;break n;case 3:case 2:case 9:case 6:Oe.current===null&&(e=!0);var A=gn;if(gn=0,ye=null,Br(n,o,b,A),t&&Cr){u=0;break n}break;default:A=gn,gn=0,ye=null,Br(n,o,b,A)}}Ry(),u=Un;break}catch(N){ld(n,N)}while(!0);return e&&n.shellSuspendCounter++,ke=Kt=null,vn=r,O.H=a,O.A=l,an===null&&(On=null,sn=0,cl()),u}function Ry(){for(;an!==null;)cd(an)}function Ty(n,e){var t=vn;vn|=2;var r=id(),a=ud();On!==n||sn!==e?(jl=null,Gl=we()+500,Lr(n,e)):Cr=Qr(n,e);n:do try{if(gn!==0&&an!==null){e=an;var l=ye;e:switch(gn){case 1:gn=0,ye=null,Br(n,e,l,1);break;case 2:case 9:if(go(l)){gn=0,ye=null,sd(e);break}e=function(){gn!==2&&gn!==9||On!==n||(gn=7),qe(n)},l.then(e,e);break n;case 3:gn=7;break n;case 4:gn=5;break n;case 7:go(l)?(gn=0,ye=null,sd(e)):(gn=0,ye=null,Br(n,e,l,7));break;case 5:var u=null;switch(an.tag){case 26:u=an.memoizedState;case 5:case 27:var o=an;if(!u||Qd(u)){gn=0,ye=null;var b=o.sibling;if(b!==null)an=b;else{var A=o.return;A!==null?(an=A,ql(A)):an=null}break e}}gn=0,ye=null,Br(n,e,l,5);break;case 6:gn=0,ye=null,Br(n,e,l,6);break;case 8:lc(),Un=6;break n;default:throw Error(s(462))}}_y();break}catch(N){ld(n,N)}while(!0);return ke=Kt=null,O.H=r,O.A=a,vn=t,an!==null?0:(On=null,sn=0,cl(),Un)}function _y(){for(;an!==null&&!er();)cd(an)}function cd(n){var e=Bf(n.alternate,n,tt);n.memoizedProps=n.pendingProps,e===null?ql(n):an=e}function sd(n){var e=n,t=e.alternate;switch(e.tag){case 15:case 0:e=Mf(t,e,e.pendingProps,e.type,void 0,sn);break;case 11:e=Mf(t,e,e.pendingProps,e.type.render,e.ref,sn);break;case 5:Au(e);default:zf(t,e),e=an=co(e,tt),e=Bf(t,e,tt)}n.memoizedProps=n.pendingProps,e===null?ql(n):an=e}function Br(n,e,t,r){ke=Kt=null,Au(e),Or=null,va=0;var a=e.return;try{if(yy(n,a,e,t,sn)){Un=1,Ul(n,Ae(t,n.current)),an=null;return}}catch(l){if(a!==null)throw an=a,l;Un=1,Ul(n,Ae(t,n.current)),an=null;return}e.flags&32768?(pn||r===1?n=!0:Cr||(sn&536870912)!==0?n=!1:(St=n=!0,(r===2||r===9||r===3||r===6)&&(r=Oe.current,r!==null&&r.tag===13&&(r.flags|=16384))),od(e,n)):ql(e)}function ql(n){var e=n;do{if((e.flags&32768)!==0){od(e,St);return}n=e.return;var t=py(e.alternate,e,tt);if(t!==null){an=t;return}if(e=e.sibling,e!==null){an=e;return}an=e=n}while(e!==null);Un===0&&(Un=5)}function od(n,e){do{var t=my(n.alternate,n);if(t!==null){t.flags&=32767,an=t;return}if(t=n.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(n=n.sibling,n!==null)){an=n;return}an=n=t}while(n!==null);Un=6,an=null}function fd(n,e,t,r,a,l,u,o,b){n.cancelPendingCommit=null;do Vl();while(Xn!==0);if((vn&6)!==0)throw Error(s(327));if(e!==null){if(e===n.current)throw Error(s(177));if(l=e.lanes|e.childLanes,l|=Pi,r0(n,t,l,u,o,b),n===On&&(an=On=null,sn=0),Ur=e,Rt=n,Hr=t,tc=l,rc=a,ed=r,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,My(Za,function(){return pd(),null})):(n.callbackNode=null,n.callbackPriority=0),r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,a=H.p,H.p=2,u=vn,vn|=4;try{vy(n,e,t)}finally{vn=u,H.p=a,O.T=r}}Xn=1,dd(),bd(),yd()}}function dd(){if(Xn===1){Xn=0;var n=Rt,e=Ur,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=O.T,O.T=null;var r=H.p;H.p=2;var a=vn;vn|=4;try{kf(e,n);var l=gc,u=Fs(n.containerInfo),o=l.focusedElem,b=l.selectionRange;if(u!==o&&o&&o.ownerDocument&&Ps(o.ownerDocument.documentElement,o)){if(b!==null&&Wi(o)){var A=b.start,N=b.end;if(N===void 0&&(N=A),"selectionStart"in o)o.selectionStart=A,o.selectionEnd=Math.min(N,o.value.length);else{var x=o.ownerDocument||document,R=x&&x.defaultView||window;if(R.getSelection){var T=R.getSelection(),I=o.textContent.length,X=Math.min(b.start,I),Rn=b.end===void 0?X:Math.min(b.end,I);!T.extend&&X>Rn&&(u=Rn,Rn=X,X=u);var v=Js(o,X),p=Js(o,Rn);if(v&&p&&(T.rangeCount!==1||T.anchorNode!==v.node||T.anchorOffset!==v.offset||T.focusNode!==p.node||T.focusOffset!==p.offset)){var E=x.createRange();E.setStart(v.node,v.offset),T.removeAllRanges(),X>Rn?(T.addRange(E),T.extend(p.node,p.offset)):(E.setEnd(p.node,p.offset),T.addRange(E))}}}}for(x=[],T=o;T=T.parentNode;)T.nodeType===1&&x.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<x.length;o++){var C=x[o];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}ni=!!vc,gc=vc=null}finally{vn=a,H.p=r,O.T=t}}n.current=e,Xn=2}}function bd(){if(Xn===2){Xn=0;var n=Rt,e=Ur,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=O.T,O.T=null;var r=H.p;H.p=2;var a=vn;vn|=4;try{Qf(n,e.alternate,e)}finally{vn=a,H.p=r,O.T=t}}Xn=3}}function yd(){if(Xn===4||Xn===3){Xn=0,kb();var n=Rt,e=Ur,t=Hr,r=ed;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Xn=5:(Xn=0,Ur=Rt=null,hd(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(At=null),_i(t),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Kr,e,void 0,(e.current.flags&128)===128)}catch{}if(r!==null){e=O.T,a=H.p,H.p=2,O.T=null;try{for(var l=n.onRecoverableError,u=0;u<r.length;u++){var o=r[u];l(o.value,{componentStack:o.stack})}}finally{O.T=e,H.p=a}}(Hr&3)!==0&&Vl(),qe(n),a=n.pendingLanes,(t&4194090)!==0&&(a&42)!==0?n===ac?Da++:(Da=0,ac=n):Da=0,Na(0)}}function hd(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,ua(e)))}function Vl(n){return dd(),bd(),yd(),pd()}function pd(){if(Xn!==5)return!1;var n=Rt,e=tc;tc=0;var t=_i(Hr),r=O.T,a=H.p;try{H.p=32>t?32:t,O.T=null,t=rc,rc=null;var l=Rt,u=Hr;if(Xn=0,Ur=Rt=null,Hr=0,(vn&6)!==0)throw Error(s(331));var o=vn;if(vn|=4,$f(l.current),Jf(l,l.current,u,t),vn=o,Na(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Kr,l)}catch{}return!0}finally{H.p=a,O.T=r,hd(n,e)}}function md(n,e,t){e=Ae(t,e),e=wu(n.stateNode,e,2),n=bt(n,e,2),n!==null&&(Xr(n,2),qe(n))}function Tn(n,e,t){if(n.tag===3)md(n,n,t);else for(;e!==null;){if(e.tag===3){md(e,n,t);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(At===null||!At.has(r))){n=Ae(t,n),t=Ef(2),r=bt(e,t,2),r!==null&&(Af(t,r,e,n),Xr(r,2),qe(r));break}}e=e.return}}function cc(n,e,t){var r=n.pingCache;if(r===null){r=n.pingCache=new Ey;var a=new Set;r.set(e,a)}else a=r.get(e),a===void 0&&(a=new Set,r.set(e,a));a.has(t)||(Fu=!0,a.add(t),n=Oy.bind(null,n,e,t),e.then(n,n))}function Oy(n,e,t){var r=n.pingCache;r!==null&&r.delete(e),n.pingedLanes|=n.suspendedLanes&t,n.warmLanes&=~t,On===n&&(sn&t)===t&&(Un===4||Un===3&&(sn&62914560)===sn&&300>we()-ec?(vn&2)===0&&Lr(n,0):$u|=t,xr===sn&&(xr=0)),qe(n)}function vd(n,e){e===0&&(e=ds()),n=pr(n,e),n!==null&&(Xr(n,e),qe(n))}function Dy(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),vd(n,t)}function Ny(n,e){var t=0;switch(n.tag){case 13:var r=n.stateNode,a=n.memoizedState;a!==null&&(t=a.retryLane);break;case 19:r=n.stateNode;break;case 22:r=n.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(e),vd(n,t)}function My(n,e){return Wa(n,e)}var Kl=null,wr=null,sc=!1,Ql=!1,oc=!1,Jt=0;function qe(n){n!==wr&&n.next===null&&(wr===null?Kl=wr=n:wr=wr.next=n),Ql=!0,sc||(sc=!0,xy())}function Na(n,e){if(!oc&&Ql){oc=!0;do for(var t=!1,r=Kl;r!==null;){if(n!==0){var a=r.pendingLanes;if(a===0)var l=0;else{var u=r.suspendedLanes,o=r.pingedLanes;l=(1<<31-se(42|n)+1)-1,l&=a&~(u&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Ad(r,l))}else l=sn,l=Ja(r,r===On?l:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(l&3)===0||Qr(r,l)||(t=!0,Ad(r,l));r=r.next}while(t);oc=!1}}function Cy(){gd()}function gd(){Ql=sc=!1;var n=0;Jt!==0&&(jy()&&(n=Jt),Jt=0);for(var e=we(),t=null,r=Kl;r!==null;){var a=r.next,l=Sd(r,e);l===0?(r.next=null,t===null?Kl=a:t.next=a,a===null&&(wr=t)):(t=r,(n!==0||(l&3)!==0)&&(Ql=!0)),r=a}Na(n)}function Sd(n,e){for(var t=n.suspendedLanes,r=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var u=31-se(l),o=1<<u,b=a[u];b===-1?((o&t)===0||(o&r)!==0)&&(a[u]=t0(o,e)):b<=e&&(n.expiredLanes|=o),l&=~o}if(e=On,t=sn,t=Ja(n,n===e?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),r=n.callbackNode,t===0||n===e&&(gn===2||gn===9)||n.cancelPendingCommit!==null)return r!==null&&r!==null&&it(r),n.callbackNode=null,n.callbackPriority=0;if((t&3)===0||Qr(n,t)){if(e=t&-t,e===n.callbackPriority)return e;switch(r!==null&&it(r),_i(t)){case 2:case 8:t=ss;break;case 32:t=Za;break;case 268435456:t=os;break;default:t=Za}return r=Ed.bind(null,n),t=Wa(t,r),n.callbackPriority=e,n.callbackNode=t,e}return r!==null&&r!==null&&it(r),n.callbackPriority=2,n.callbackNode=null,2}function Ed(n,e){if(Xn!==0&&Xn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var t=n.callbackNode;if(Vl()&&n.callbackNode!==t)return null;var r=sn;return r=Ja(n,n===On?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),r===0?null:(rd(n,r,e),Sd(n,we()),n.callbackNode!=null&&n.callbackNode===t?Ed.bind(null,n):null)}function Ad(n,e){if(Vl())return null;rd(n,e,!0)}function xy(){qy(function(){(vn&6)!==0?Wa(cs,Cy):gd()})}function fc(){return Jt===0&&(Jt=fs()),Jt}function Rd(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:el(""+n)}function Td(n,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,n.id&&t.setAttribute("form",n.id),e.parentNode.insertBefore(t,e),n=new FormData(n),t.parentNode.removeChild(t),n}function Uy(n,e,t,r,a){if(e==="submit"&&t&&t.stateNode===a){var l=Rd((a[ee]||null).action),u=r.submitter;u&&(e=(e=u[ee]||null)?Rd(e.formAction):u.getAttribute("formAction"),e!==null&&(l=e,u=null));var o=new ll("action","action",null,r,a);n.push({event:o,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Jt!==0){var b=u?Td(a,u):new FormData(a);xu(t,{pending:!0,data:b,method:a.method,action:l},null,b)}}else typeof l=="function"&&(o.preventDefault(),b=u?Td(a,u):new FormData(a),xu(t,{pending:!0,data:b,method:a.method,action:l},l,b))},currentTarget:a}]})}}for(var dc=0;dc<Ji.length;dc++){var bc=Ji[dc],Hy=bc.toLowerCase(),Ly=bc[0].toUpperCase()+bc.slice(1);xe(Hy,"on"+Ly)}xe(eo,"onAnimationEnd"),xe(to,"onAnimationIteration"),xe(ro,"onAnimationStart"),xe("dblclick","onDoubleClick"),xe("focusin","onFocus"),xe("focusout","onBlur"),xe(P0,"onTransitionRun"),xe(F0,"onTransitionStart"),xe($0,"onTransitionCancel"),xe(ao,"onTransitionEnd"),ir("onMouseEnter",["mouseout","mouseover"]),ir("onMouseLeave",["mouseout","mouseover"]),ir("onPointerEnter",["pointerout","pointerover"]),ir("onPointerLeave",["pointerout","pointerover"]),Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),By=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ma));function _d(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var r=n[t],a=r.event;r=r.listeners;n:{var l=void 0;if(e)for(var u=r.length-1;0<=u;u--){var o=r[u],b=o.instance,A=o.currentTarget;if(o=o.listener,b!==l&&a.isPropagationStopped())break n;l=o,a.currentTarget=A;try{l(a)}catch(N){xl(N)}a.currentTarget=null,l=b}else for(u=0;u<r.length;u++){if(o=r[u],b=o.instance,A=o.currentTarget,o=o.listener,b!==l&&a.isPropagationStopped())break n;l=o,a.currentTarget=A;try{l(a)}catch(N){xl(N)}a.currentTarget=null,l=b}}}}function ln(n,e){var t=e[Oi];t===void 0&&(t=e[Oi]=new Set);var r=n+"__bubble";t.has(r)||(Od(e,n,2,!1),t.add(r))}function yc(n,e,t){var r=0;e&&(r|=4),Od(t,n,r,e)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function hc(n){if(!n[Xl]){n[Xl]=!0,ms.forEach(function(t){t!=="selectionchange"&&(By.has(t)||yc(t,!1,n),yc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Xl]||(e[Xl]=!0,yc("selectionchange",!1,e))}}function Od(n,e,t,r){switch(Jd(e)){case 2:var a=ch;break;case 8:a=sh;break;default:a=Mc}t=a.bind(null,e,t,n),a=void 0,!zi||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),r?a!==void 0?n.addEventListener(e,t,{capture:!0,passive:a}):n.addEventListener(e,t,!0):a!==void 0?n.addEventListener(e,t,{passive:a}):n.addEventListener(e,t,!1)}function pc(n,e,t,r,a){var l=r;if((e&1)===0&&(e&2)===0&&r!==null)n:for(;;){if(r===null)return;var u=r.tag;if(u===3||u===4){var o=r.stateNode.containerInfo;if(o===a)break;if(u===4)for(u=r.return;u!==null;){var b=u.tag;if((b===3||b===4)&&u.stateNode.containerInfo===a)return;u=u.return}for(;o!==null;){if(u=rr(o),u===null)return;if(b=u.tag,b===5||b===6||b===26||b===27){r=l=u;continue n}o=o.parentNode}}r=r.return}xs(function(){var A=l,N=Bi(t),x=[];n:{var R=lo.get(n);if(R!==void 0){var T=ll,I=n;switch(n){case"keypress":if(rl(t)===0)break n;case"keydown":case"keyup":T=M0;break;case"focusin":I="focus",T=qi;break;case"focusout":I="blur",T=qi;break;case"beforeblur":case"afterblur":T=qi;break;case"click":if(t.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=U0;break;case eo:case to:case ro:T=S0;break;case ao:T=L0;break;case"scroll":case"scrollend":T=h0;break;case"wheel":T=w0;break;case"copy":case"cut":case"paste":T=A0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=ws;break;case"toggle":case"beforetoggle":T=G0}var X=(e&4)!==0,Rn=!X&&(n==="scroll"||n==="scrollend"),v=X?R!==null?R+"Capture":null:R;X=[];for(var p=A,E;p!==null;){var C=p;if(E=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||E===null||v===null||(C=kr(p,v),C!=null&&X.push(Ca(p,C,E))),Rn)break;p=p.return}0<X.length&&(R=new T(R,I,null,t,N),x.push({event:R,listeners:X}))}}if((e&7)===0){n:{if(R=n==="mouseover"||n==="pointerover",T=n==="mouseout"||n==="pointerout",R&&t!==Li&&(I=t.relatedTarget||t.fromElement)&&(rr(I)||I[tr]))break n;if((T||R)&&(R=N.window===N?N:(R=N.ownerDocument)?R.defaultView||R.parentWindow:window,T?(I=t.relatedTarget||t.toElement,T=A,I=I?rr(I):null,I!==null&&(Rn=h(I),X=I.tag,I!==Rn||X!==5&&X!==27&&X!==6)&&(I=null)):(T=null,I=A),T!==I)){if(X=Ls,C="onMouseLeave",v="onMouseEnter",p="mouse",(n==="pointerout"||n==="pointerover")&&(X=ws,C="onPointerLeave",v="onPointerEnter",p="pointer"),Rn=T==null?R:Zr(T),E=I==null?R:Zr(I),R=new X(C,p+"leave",T,t,N),R.target=Rn,R.relatedTarget=E,C=null,rr(N)===A&&(X=new X(v,p+"enter",I,t,N),X.target=E,X.relatedTarget=Rn,C=X),Rn=C,T&&I)e:{for(X=T,v=I,p=0,E=X;E;E=zr(E))p++;for(E=0,C=v;C;C=zr(C))E++;for(;0<p-E;)X=zr(X),p--;for(;0<E-p;)v=zr(v),E--;for(;p--;){if(X===v||v!==null&&X===v.alternate)break e;X=zr(X),v=zr(v)}X=null}else X=null;T!==null&&Dd(x,R,T,X,!1),I!==null&&Rn!==null&&Dd(x,Rn,I,X,!0)}}n:{if(R=A?Zr(A):window,T=R.nodeName&&R.nodeName.toLowerCase(),T==="select"||T==="input"&&R.type==="file")var V=Qs;else if(Vs(R))if(Xs)V=k0;else{V=W0;var tn=X0}else T=R.nodeName,!T||T.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?A&&Hi(A.elementType)&&(V=Qs):V=Z0;if(V&&(V=V(n,A))){Ks(x,V,t,N);break n}tn&&tn(n,R,A),n==="focusout"&&A&&R.type==="number"&&A.memoizedProps.value!=null&&Ui(R,"number",R.value)}switch(tn=A?Zr(A):window,n){case"focusin":(Vs(tn)||tn.contentEditable==="true")&&(br=tn,Zi=A,ta=null);break;case"focusout":ta=Zi=br=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,$s(x,t,N);break;case"selectionchange":if(J0)break;case"keydown":case"keyup":$s(x,t,N)}var K;if(Ki)n:{switch(n){case"compositionstart":var k="onCompositionStart";break n;case"compositionend":k="onCompositionEnd";break n;case"compositionupdate":k="onCompositionUpdate";break n}k=void 0}else dr?Ys(n,t)&&(k="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(k="onCompositionStart");k&&(zs&&t.locale!=="ko"&&(dr||k!=="onCompositionStart"?k==="onCompositionEnd"&&dr&&(K=Us()):(st=N,Gi="value"in st?st.value:st.textContent,dr=!0)),tn=Wl(A,k),0<tn.length&&(k=new Bs(k,n,null,t,N),x.push({event:k,listeners:tn}),K?k.data=K:(K=qs(t),K!==null&&(k.data=K)))),(K=Y0?q0(n,t):V0(n,t))&&(k=Wl(A,"onBeforeInput"),0<k.length&&(tn=new Bs("onBeforeInput","beforeinput",null,t,N),x.push({event:tn,listeners:k}),tn.data=K)),Uy(x,n,A,t,N)}_d(x,e)})}function Ca(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Wl(n,e){for(var t=e+"Capture",r=[];n!==null;){var a=n,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=kr(n,t),a!=null&&r.unshift(Ca(n,a,l)),a=kr(n,e),a!=null&&r.push(Ca(n,a,l))),n.tag===3)return r;n=n.return}return[]}function zr(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Dd(n,e,t,r,a){for(var l=e._reactName,u=[];t!==null&&t!==r;){var o=t,b=o.alternate,A=o.stateNode;if(o=o.tag,b!==null&&b===r)break;o!==5&&o!==26&&o!==27||A===null||(b=A,a?(A=kr(t,l),A!=null&&u.unshift(Ca(t,A,b))):a||(A=kr(t,l),A!=null&&u.push(Ca(t,A,b)))),t=t.return}u.length!==0&&n.push({event:e,listeners:u})}var wy=/\r\n?/g,zy=/\u0000|\uFFFD/g;function Nd(n){return(typeof n=="string"?n:""+n).replace(wy,`
`).replace(zy,"")}function Md(n,e){return e=Nd(e),Nd(n)===e}function Zl(){}function An(n,e,t,r,a,l){switch(t){case"children":typeof r=="string"?e==="body"||e==="textarea"&&r===""||sr(n,r):(typeof r=="number"||typeof r=="bigint")&&e!=="body"&&sr(n,""+r);break;case"className":Fa(n,"class",r);break;case"tabIndex":Fa(n,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Fa(n,t,r);break;case"style":Ms(n,r,l);break;case"data":if(e!=="object"){Fa(n,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||t!=="href")){n.removeAttribute(t);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(t);break}r=el(""+r),n.setAttribute(t,r);break;case"action":case"formAction":if(typeof r=="function"){n.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(e!=="input"&&An(n,e,"name",a.name,a,null),An(n,e,"formEncType",a.formEncType,a,null),An(n,e,"formMethod",a.formMethod,a,null),An(n,e,"formTarget",a.formTarget,a,null)):(An(n,e,"encType",a.encType,a,null),An(n,e,"method",a.method,a,null),An(n,e,"target",a.target,a,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){n.removeAttribute(t);break}r=el(""+r),n.setAttribute(t,r);break;case"onClick":r!=null&&(n.onclick=Zl);break;case"onScroll":r!=null&&ln("scroll",n);break;case"onScrollEnd":r!=null&&ln("scrollend",n);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(s(60));n.innerHTML=t}}break;case"multiple":n.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":n.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){n.removeAttribute("xlink:href");break}t=el(""+r),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,""+r):n.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,""):n.removeAttribute(t);break;case"capture":case"download":r===!0?n.setAttribute(t,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?n.setAttribute(t,r):n.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?n.setAttribute(t,r):n.removeAttribute(t);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?n.removeAttribute(t):n.setAttribute(t,r);break;case"popover":ln("beforetoggle",n),ln("toggle",n),Pa(n,"popover",r);break;case"xlinkActuate":Ke(n,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Ke(n,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Ke(n,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Ke(n,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Ke(n,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Ke(n,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Ke(n,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Pa(n,"is",r);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=b0.get(t)||t,Pa(n,t,r))}}function mc(n,e,t,r,a,l){switch(t){case"style":Ms(n,r,l);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(t=r.__html,t!=null){if(a.children!=null)throw Error(s(60));n.innerHTML=t}}break;case"children":typeof r=="string"?sr(n,r):(typeof r=="number"||typeof r=="bigint")&&sr(n,""+r);break;case"onScroll":r!=null&&ln("scroll",n);break;case"onScrollEnd":r!=null&&ln("scrollend",n);break;case"onClick":r!=null&&(n.onclick=Zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vs.hasOwnProperty(t))n:{if(t[0]==="o"&&t[1]==="n"&&(a=t.endsWith("Capture"),e=t.slice(2,a?t.length-7:void 0),l=n[ee]||null,l=l!=null?l[t]:null,typeof l=="function"&&n.removeEventListener(e,l,a),typeof r=="function")){typeof l!="function"&&l!==null&&(t in n?n[t]=null:n.hasAttribute(t)&&n.removeAttribute(t)),n.addEventListener(e,r,a);break n}t in n?n[t]=r:r===!0?n.setAttribute(t,""):Pa(n,t,r)}}}function Wn(n,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ln("error",n),ln("load",n);var r=!1,a=!1,l;for(l in t)if(t.hasOwnProperty(l)){var u=t[l];if(u!=null)switch(l){case"src":r=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:An(n,e,l,u,t,null)}}a&&An(n,e,"srcSet",t.srcSet,t,null),r&&An(n,e,"src",t.src,t,null);return;case"input":ln("invalid",n);var o=l=u=a=null,b=null,A=null;for(r in t)if(t.hasOwnProperty(r)){var N=t[r];if(N!=null)switch(r){case"name":a=N;break;case"type":u=N;break;case"checked":b=N;break;case"defaultChecked":A=N;break;case"value":l=N;break;case"defaultValue":o=N;break;case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(137,e));break;default:An(n,e,r,N,t,null)}}_s(n,l,o,b,A,u,a,!1),$a(n);return;case"select":ln("invalid",n),r=u=l=null;for(a in t)if(t.hasOwnProperty(a)&&(o=t[a],o!=null))switch(a){case"value":l=o;break;case"defaultValue":u=o;break;case"multiple":r=o;default:An(n,e,a,o,t,null)}e=l,t=u,n.multiple=!!r,e!=null?cr(n,!!r,e,!1):t!=null&&cr(n,!!r,t,!0);return;case"textarea":ln("invalid",n),l=a=r=null;for(u in t)if(t.hasOwnProperty(u)&&(o=t[u],o!=null))switch(u){case"value":r=o;break;case"defaultValue":a=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:An(n,e,u,o,t,null)}Ds(n,r,a,l),$a(n);return;case"option":for(b in t)if(t.hasOwnProperty(b)&&(r=t[b],r!=null))switch(b){case"selected":n.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:An(n,e,b,r,t,null)}return;case"dialog":ln("beforetoggle",n),ln("toggle",n),ln("cancel",n),ln("close",n);break;case"iframe":case"object":ln("load",n);break;case"video":case"audio":for(r=0;r<Ma.length;r++)ln(Ma[r],n);break;case"image":ln("error",n),ln("load",n);break;case"details":ln("toggle",n);break;case"embed":case"source":case"link":ln("error",n),ln("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in t)if(t.hasOwnProperty(A)&&(r=t[A],r!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,e));default:An(n,e,A,r,t,null)}return;default:if(Hi(e)){for(N in t)t.hasOwnProperty(N)&&(r=t[N],r!==void 0&&mc(n,e,N,r,t,void 0));return}}for(o in t)t.hasOwnProperty(o)&&(r=t[o],r!=null&&An(n,e,o,r,t,null))}function Gy(n,e,t,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,u=null,o=null,b=null,A=null,N=null;for(T in t){var x=t[T];if(t.hasOwnProperty(T)&&x!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":b=x;default:r.hasOwnProperty(T)||An(n,e,T,null,r,x)}}for(var R in r){var T=r[R];if(x=t[R],r.hasOwnProperty(R)&&(T!=null||x!=null))switch(R){case"type":l=T;break;case"name":a=T;break;case"checked":A=T;break;case"defaultChecked":N=T;break;case"value":u=T;break;case"defaultValue":o=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(137,e));break;default:T!==x&&An(n,e,R,T,r,x)}}xi(n,u,o,b,A,N,l,a);return;case"select":T=u=o=R=null;for(l in t)if(b=t[l],t.hasOwnProperty(l)&&b!=null)switch(l){case"value":break;case"multiple":T=b;default:r.hasOwnProperty(l)||An(n,e,l,null,r,b)}for(a in r)if(l=r[a],b=t[a],r.hasOwnProperty(a)&&(l!=null||b!=null))switch(a){case"value":R=l;break;case"defaultValue":o=l;break;case"multiple":u=l;default:l!==b&&An(n,e,a,l,r,b)}e=o,t=u,r=T,R!=null?cr(n,!!t,R,!1):!!r!=!!t&&(e!=null?cr(n,!!t,e,!0):cr(n,!!t,t?[]:"",!1));return;case"textarea":T=R=null;for(o in t)if(a=t[o],t.hasOwnProperty(o)&&a!=null&&!r.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:An(n,e,o,null,r,a)}for(u in r)if(a=r[u],l=t[u],r.hasOwnProperty(u)&&(a!=null||l!=null))switch(u){case"value":R=a;break;case"defaultValue":T=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:a!==l&&An(n,e,u,a,r,l)}Os(n,R,T);return;case"option":for(var I in t)if(R=t[I],t.hasOwnProperty(I)&&R!=null&&!r.hasOwnProperty(I))switch(I){case"selected":n.selected=!1;break;default:An(n,e,I,null,r,R)}for(b in r)if(R=r[b],T=t[b],r.hasOwnProperty(b)&&R!==T&&(R!=null||T!=null))switch(b){case"selected":n.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:An(n,e,b,R,r,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var X in t)R=t[X],t.hasOwnProperty(X)&&R!=null&&!r.hasOwnProperty(X)&&An(n,e,X,null,r,R);for(A in r)if(R=r[A],T=t[A],r.hasOwnProperty(A)&&R!==T&&(R!=null||T!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,e));break;default:An(n,e,A,R,r,T)}return;default:if(Hi(e)){for(var Rn in t)R=t[Rn],t.hasOwnProperty(Rn)&&R!==void 0&&!r.hasOwnProperty(Rn)&&mc(n,e,Rn,void 0,r,R);for(N in r)R=r[N],T=t[N],!r.hasOwnProperty(N)||R===T||R===void 0&&T===void 0||mc(n,e,N,R,r,T);return}}for(var v in t)R=t[v],t.hasOwnProperty(v)&&R!=null&&!r.hasOwnProperty(v)&&An(n,e,v,null,r,R);for(x in r)R=r[x],T=t[x],!r.hasOwnProperty(x)||R===T||R==null&&T==null||An(n,e,x,R,r,T)}var vc=null,gc=null;function kl(n){return n.nodeType===9?n:n.ownerDocument}function Cd(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xd(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Sc(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=null;function jy(){var n=window.event;return n&&n.type==="popstate"?n===Ec?!1:(Ec=n,!0):(Ec=null,!1)}var Ud=typeof setTimeout=="function"?setTimeout:void 0,Yy=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,qy=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(n){return Hd.resolve(null).then(n).catch(Vy)}:Ud;function Vy(n){setTimeout(function(){throw n})}function _t(n){return n==="head"}function Ld(n,e){var t=e,r=0,a=0;do{var l=t.nextSibling;if(n.removeChild(t),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(0<r&&8>r){t=r;var u=n.ownerDocument;if(t&1&&xa(u.documentElement),t&2&&xa(u.body),t&4)for(t=u.head,xa(t),u=t.firstChild;u;){var o=u.nextSibling,b=u.nodeName;u[Wr]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&u.rel.toLowerCase()==="stylesheet"||t.removeChild(u),u=o}}if(a===0){n.removeChild(l),ja(e);return}a--}else t==="$"||t==="$?"||t==="$!"?a++:r=t.charCodeAt(0)-48;else r=0;t=l}while(t);ja(e)}function Ac(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Ac(t),Di(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}n.removeChild(t)}}function Ky(n,e,t,r){for(;n.nodeType===1;){var a=t;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(r){if(!n[Wr])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=He(n.nextSibling),n===null)break}return null}function Qy(n,e,t){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=He(n.nextSibling),n===null))return null;return n}function Rc(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function Xy(n,e){var t=n.ownerDocument;if(n.data!=="$?"||t.readyState==="complete")e();else{var r=function(){e(),t.removeEventListener("DOMContentLoaded",r)};t.addEventListener("DOMContentLoaded",r),n._reactRetry=r}}function He(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var Tc=null;function Bd(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}function wd(n,e,t){switch(e=kl(t),n){case"html":if(n=e.documentElement,!n)throw Error(s(452));return n;case"head":if(n=e.head,!n)throw Error(s(453));return n;case"body":if(n=e.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function xa(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Di(n)}var Ne=new Map,zd=new Set;function Il(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var rt=H.d;H.d={f:Wy,r:Zy,D:ky,C:Iy,L:Jy,m:Py,X:$y,S:Fy,M:nh};function Wy(){var n=rt.f(),e=Yl();return n||e}function Zy(n){var e=ar(n);e!==null&&e.tag===5&&e.type==="form"?tf(e):rt.r(n)}var Gr=typeof document>"u"?null:document;function Gd(n,e,t){var r=Gr;if(r&&typeof e=="string"&&e){var a=Ee(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof t=="string"&&(a+='[crossorigin="'+t+'"]'),zd.has(a)||(zd.add(a),n={rel:n,crossOrigin:t,href:e},r.querySelector(a)===null&&(e=r.createElement("link"),Wn(e,"link",n),Yn(e),r.head.appendChild(e)))}}function ky(n){rt.D(n),Gd("dns-prefetch",n,null)}function Iy(n,e){rt.C(n,e),Gd("preconnect",n,e)}function Jy(n,e,t){rt.L(n,e,t);var r=Gr;if(r&&n&&e){var a='link[rel="preload"][as="'+Ee(e)+'"]';e==="image"&&t&&t.imageSrcSet?(a+='[imagesrcset="'+Ee(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(a+='[imagesizes="'+Ee(t.imageSizes)+'"]')):a+='[href="'+Ee(n)+'"]';var l=a;switch(e){case"style":l=jr(n);break;case"script":l=Yr(n)}Ne.has(l)||(n=D({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:n,as:e},t),Ne.set(l,n),r.querySelector(a)!==null||e==="style"&&r.querySelector(Ua(l))||e==="script"&&r.querySelector(Ha(l))||(e=r.createElement("link"),Wn(e,"link",n),Yn(e),r.head.appendChild(e)))}}function Py(n,e){rt.m(n,e);var t=Gr;if(t&&n){var r=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+Ee(r)+'"][href="'+Ee(n)+'"]',l=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Yr(n)}if(!Ne.has(l)&&(n=D({rel:"modulepreload",href:n},e),Ne.set(l,n),t.querySelector(a)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ha(l)))return}r=t.createElement("link"),Wn(r,"link",n),Yn(r),t.head.appendChild(r)}}}function Fy(n,e,t){rt.S(n,e,t);var r=Gr;if(r&&n){var a=lr(r).hoistableStyles,l=jr(n);e=e||"default";var u=a.get(l);if(!u){var o={loading:0,preload:null};if(u=r.querySelector(Ua(l)))o.loading=5;else{n=D({rel:"stylesheet",href:n,"data-precedence":e},t),(t=Ne.get(l))&&_c(n,t);var b=u=r.createElement("link");Yn(b),Wn(b,"link",n),b._p=new Promise(function(A,N){b.onload=A,b.onerror=N}),b.addEventListener("load",function(){o.loading|=1}),b.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Jl(u,e,r)}u={type:"stylesheet",instance:u,count:1,state:o},a.set(l,u)}}}function $y(n,e){rt.X(n,e);var t=Gr;if(t&&n){var r=lr(t).hoistableScripts,a=Yr(n),l=r.get(a);l||(l=t.querySelector(Ha(a)),l||(n=D({src:n,async:!0},e),(e=Ne.get(a))&&Oc(n,e),l=t.createElement("script"),Yn(l),Wn(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function nh(n,e){rt.M(n,e);var t=Gr;if(t&&n){var r=lr(t).hoistableScripts,a=Yr(n),l=r.get(a);l||(l=t.querySelector(Ha(a)),l||(n=D({src:n,async:!0,type:"module"},e),(e=Ne.get(a))&&Oc(n,e),l=t.createElement("script"),Yn(l),Wn(l,"link",n),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},r.set(a,l))}}function jd(n,e,t,r){var a=(a=J.current)?Il(a):null;if(!a)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=jr(t.href),t=lr(a).hoistableStyles,r=t.get(e),r||(r={type:"style",instance:null,count:0,state:null},t.set(e,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){n=jr(t.href);var l=lr(a).hoistableStyles,u=l.get(n);if(u||(a=a.ownerDocument||a,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,u),(l=a.querySelector(Ua(n)))&&!l._p&&(u.instance=l,u.state.loading=5),Ne.has(n)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Ne.set(n,t),l||eh(a,n,t,u.state))),e&&r===null)throw Error(s(528,""));return u}if(e&&r!==null)throw Error(s(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Yr(t),t=lr(a).hoistableScripts,r=t.get(e),r||(r={type:"script",instance:null,count:0,state:null},t.set(e,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function jr(n){return'href="'+Ee(n)+'"'}function Ua(n){return'link[rel="stylesheet"]['+n+"]"}function Yd(n){return D({},n,{"data-precedence":n.precedence,precedence:null})}function eh(n,e,t,r){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?r.loading=1:(e=n.createElement("link"),r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2}),Wn(e,"link",t),Yn(e),n.head.appendChild(e))}function Yr(n){return'[src="'+Ee(n)+'"]'}function Ha(n){return"script[async]"+n}function qd(n,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var r=n.querySelector('style[data-href~="'+Ee(t.href)+'"]');if(r)return e.instance=r,Yn(r),r;var a=D({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return r=(n.ownerDocument||n).createElement("style"),Yn(r),Wn(r,"style",a),Jl(r,t.precedence,n),e.instance=r;case"stylesheet":a=jr(t.href);var l=n.querySelector(Ua(a));if(l)return e.state.loading|=4,e.instance=l,Yn(l),l;r=Yd(t),(a=Ne.get(a))&&_c(r,a),l=(n.ownerDocument||n).createElement("link"),Yn(l);var u=l;return u._p=new Promise(function(o,b){u.onload=o,u.onerror=b}),Wn(l,"link",r),e.state.loading|=4,Jl(l,t.precedence,n),e.instance=l;case"script":return l=Yr(t.src),(a=n.querySelector(Ha(l)))?(e.instance=a,Yn(a),a):(r=t,(a=Ne.get(l))&&(r=D({},t),Oc(r,a)),n=n.ownerDocument||n,a=n.createElement("script"),Yn(a),Wn(a,"link",r),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(s(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Jl(r,t.precedence,n));return e.instance}function Jl(n,e,t){for(var r=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,l=a,u=0;u<r.length;u++){var o=r[u];if(o.dataset.precedence===e)l=o;else if(l!==a)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(n,e.firstChild))}function _c(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Oc(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Pl=null;function Vd(n,e,t){if(Pl===null){var r=new Map,a=Pl=new Map;a.set(t,r)}else a=Pl,r=a.get(t),r||(r=new Map,a.set(t,r));if(r.has(n))return r;for(r.set(n,null),t=t.getElementsByTagName(n),a=0;a<t.length;a++){var l=t[a];if(!(l[Wr]||l[kn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var u=l.getAttribute(e)||"";u=n+u;var o=r.get(u);o?o.push(l):r.set(u,[l])}}return r}function Kd(n,e,t){n=n.ownerDocument||n,n.head.insertBefore(t,e==="title"?n.querySelector("head > title"):null)}function th(n,e,t){if(t===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Qd(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var La=null;function rh(){}function ah(n,e,t){if(La===null)throw Error(s(475));var r=La;if(e.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=jr(t.href),l=n.querySelector(Ua(a));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(r.count++,r=Fl.bind(r),n.then(r,r)),e.state.loading|=4,e.instance=l,Yn(l);return}l=n.ownerDocument||n,t=Yd(t),(a=Ne.get(a))&&_c(t,a),l=l.createElement("link"),Yn(l);var u=l;u._p=new Promise(function(o,b){u.onload=o,u.onerror=b}),Wn(l,"link",t),e.instance=l}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(r.count++,e=Fl.bind(r),n.addEventListener("load",e),n.addEventListener("error",e))}}function lh(){if(La===null)throw Error(s(475));var n=La;return n.stylesheets&&n.count===0&&Dc(n,n.stylesheets),0<n.count?function(e){var t=setTimeout(function(){if(n.stylesheets&&Dc(n,n.stylesheets),n.unsuspend){var r=n.unsuspend;n.unsuspend=null,r()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(t)}}:null}function Fl(){if(this.count--,this.count===0){if(this.stylesheets)Dc(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var $l=null;function Dc(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,$l=new Map,e.forEach(ih,n),$l=null,Fl.call(n))}function ih(n,e){if(!(e.state.loading&4)){var t=$l.get(n);if(t)var r=t.get(null);else{t=new Map,$l.set(n,t);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var u=a[l];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(t.set(u.dataset.precedence,u),r=u)}r&&t.set(null,r)}a=e.instance,u=a.getAttribute("data-precedence"),l=t.get(u)||r,l===r&&t.set(null,a),t.set(u,a),this.count++,r=Fl.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),l?l.parentNode.insertBefore(a,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var Ba={$$typeof:mn,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function uh(n,e,t,r,a,l,u,o){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ri(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ri(0),this.hiddenUpdates=Ri(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=o,this.incompleteTransitions=new Map}function Xd(n,e,t,r,a,l,u,o,b,A,N,x){return n=new uh(n,e,t,u,o,b,A,x),e=1,l===!0&&(e|=24),l=fe(3,null,null,e),n.current=l,l.stateNode=n,e=cu(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:r,isDehydrated:t,cache:e},du(l),n}function Wd(n){return n?(n=mr,n):mr}function Zd(n,e,t,r,a,l){a=Wd(a),r.context===null?r.context=a:r.pendingContext=a,r=dt(e),r.payload={element:t},l=l===void 0?null:l,l!==null&&(r.callback=l),t=bt(n,r,e),t!==null&&(pe(t,n,e),fa(t,n,e))}function kd(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Nc(n,e){kd(n,e),(n=n.alternate)&&kd(n,e)}function Id(n){if(n.tag===13){var e=pr(n,67108864);e!==null&&pe(e,n,67108864),Nc(n,67108864)}}var ni=!0;function ch(n,e,t,r){var a=O.T;O.T=null;var l=H.p;try{H.p=2,Mc(n,e,t,r)}finally{H.p=l,O.T=a}}function sh(n,e,t,r){var a=O.T;O.T=null;var l=H.p;try{H.p=8,Mc(n,e,t,r)}finally{H.p=l,O.T=a}}function Mc(n,e,t,r){if(ni){var a=Cc(r);if(a===null)pc(n,e,r,ei,t),Pd(n,r);else if(fh(a,n,e,t,r))r.stopPropagation();else if(Pd(n,r),e&4&&-1<oh.indexOf(n)){for(;a!==null;){var l=ar(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var u=Ht(l.pendingLanes);if(u!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;u;){var b=1<<31-se(u);o.entanglements[1]|=b,u&=~b}qe(l),(vn&6)===0&&(Gl=we()+500,Na(0))}}break;case 13:o=pr(l,2),o!==null&&pe(o,l,2),Yl(),Nc(l,2)}if(l=Cc(r),l===null&&pc(n,e,r,ei,t),l===a)break;a=l}a!==null&&r.stopPropagation()}else pc(n,e,r,null,t)}}function Cc(n){return n=Bi(n),xc(n)}var ei=null;function xc(n){if(ei=null,n=rr(n),n!==null){var e=h(n);if(e===null)n=null;else{var t=e.tag;if(t===13){if(n=S(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return ei=n,null}function Jd(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ib()){case cs:return 2;case ss:return 8;case Za:case Jb:return 32;case os:return 268435456;default:return 32}default:return 32}}var Uc=!1,Ot=null,Dt=null,Nt=null,wa=new Map,za=new Map,Mt=[],oh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pd(n,e){switch(n){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Dt=null;break;case"mouseover":case"mouseout":Nt=null;break;case"pointerover":case"pointerout":wa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function Ga(n,e,t,r,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:t,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},e!==null&&(e=ar(e),e!==null&&Id(e)),n):(n.eventSystemFlags|=r,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function fh(n,e,t,r,a){switch(e){case"focusin":return Ot=Ga(Ot,n,e,t,r,a),!0;case"dragenter":return Dt=Ga(Dt,n,e,t,r,a),!0;case"mouseover":return Nt=Ga(Nt,n,e,t,r,a),!0;case"pointerover":var l=a.pointerId;return wa.set(l,Ga(wa.get(l)||null,n,e,t,r,a)),!0;case"gotpointercapture":return l=a.pointerId,za.set(l,Ga(za.get(l)||null,n,e,t,r,a)),!0}return!1}function Fd(n){var e=rr(n.target);if(e!==null){var t=h(e);if(t!==null){if(e=t.tag,e===13){if(e=S(t),e!==null){n.blockedOn=e,a0(n.priority,function(){if(t.tag===13){var r=he();r=Ti(r);var a=pr(t,r);a!==null&&pe(a,t,r),Nc(t,r)}});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ti(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Cc(n.nativeEvent);if(t===null){t=n.nativeEvent;var r=new t.constructor(t.type,t);Li=r,t.target.dispatchEvent(r),Li=null}else return e=ar(t),e!==null&&Id(e),n.blockedOn=t,!1;e.shift()}return!0}function $d(n,e,t){ti(n)&&t.delete(e)}function dh(){Uc=!1,Ot!==null&&ti(Ot)&&(Ot=null),Dt!==null&&ti(Dt)&&(Dt=null),Nt!==null&&ti(Nt)&&(Nt=null),wa.forEach($d),za.forEach($d)}function ri(n,e){n.blockedOn===e&&(n.blockedOn=null,Uc||(Uc=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,dh)))}var ai=null;function nb(n){ai!==n&&(ai=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){ai===n&&(ai=null);for(var e=0;e<n.length;e+=3){var t=n[e],r=n[e+1],a=n[e+2];if(typeof r!="function"){if(xc(r||t)===null)continue;break}var l=ar(t);l!==null&&(n.splice(e,3),e-=3,xu(l,{pending:!0,data:a,method:t.method,action:r},r,a))}}))}function ja(n){function e(b){return ri(b,n)}Ot!==null&&ri(Ot,n),Dt!==null&&ri(Dt,n),Nt!==null&&ri(Nt,n),wa.forEach(e),za.forEach(e);for(var t=0;t<Mt.length;t++){var r=Mt[t];r.blockedOn===n&&(r.blockedOn=null)}for(;0<Mt.length&&(t=Mt[0],t.blockedOn===null);)Fd(t),t.blockedOn===null&&Mt.shift();if(t=(n.ownerDocument||n).$$reactFormReplay,t!=null)for(r=0;r<t.length;r+=3){var a=t[r],l=t[r+1],u=a[ee]||null;if(typeof l=="function")u||nb(t);else if(u){var o=null;if(l&&l.hasAttribute("formAction")){if(a=l,u=l[ee]||null)o=u.formAction;else if(xc(a)!==null)continue}else o=u.action;typeof o=="function"?t[r+1]=o:(t.splice(r,3),r-=3),nb(t)}}}function Hc(n){this._internalRoot=n}li.prototype.render=Hc.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(s(409));var t=e.current,r=he();Zd(t,r,n,e,null,null)},li.prototype.unmount=Hc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Zd(n.current,2,null,n,null,null),Yl(),e[tr]=null}};function li(n){this._internalRoot=n}li.prototype.unstable_scheduleHydration=function(n){if(n){var e=hs();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Mt.length&&e!==0&&e<Mt[t].priority;t++);Mt.splice(t,0,n),t===0&&Fd(n)}};var eb=c.version;if(eb!=="19.1.0")throw Error(s(527,eb,"19.1.0"));H.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=g(e),n=n!==null?m(n):null,n=n===null?null:n.stateNode,n};var bh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ii.isDisabled&&ii.supportsFiber)try{Kr=ii.inject(bh),ce=ii}catch{}}return qa.createRoot=function(n,e){if(!d(n))throw Error(s(299));var t=!1,r="",a=mf,l=vf,u=gf,o=null;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(u=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(o=e.unstable_transitionCallbacks)),e=Xd(n,1,!1,null,null,t,r,a,l,u,o,null),n[tr]=e.current,hc(n),new Hc(e)},qa.hydrateRoot=function(n,e,t){if(!d(n))throw Error(s(299));var r=!1,a="",l=mf,u=vf,o=gf,b=null,A=null;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(b=t.unstable_transitionCallbacks),t.formState!==void 0&&(A=t.formState)),e=Xd(n,1,!0,e,t??null,r,a,l,u,o,b,A),e.context=Wd(null),t=e.current,r=he(),r=Ti(r),a=dt(r),a.callback=null,bt(t,a,r),t=r,e.current.lanes=t,Xr(e,t),qe(e),n[tr]=e.current,hc(n),new li(e)},qa.version="19.1.0",qa}var fb;function Rh(){if(fb)return wc.exports;fb=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),wc.exports=Ah(),wc.exports}var Th=Rh();function mi({label:i,options:c,value:f,onChange:s,placeholder:d="Select an option",className:h}){const[S,M]=un.useState(!1),[g,m]=un.useState(!1),[D,L]=un.useState(""),G=un.useRef(null),W=un.useRef(null),P=c.find(j=>j.value===f),bn=(P==null?void 0:P.label)||d,F=P==null?void 0:P.color,on=c.filter(j=>j.label.toLowerCase().includes(D.toLowerCase())),fn=j=>{s(j),M(!1),L("")};return un.useEffect(()=>{const j=w=>{G.current&&!G.current.contains(w.target)&&M(!1)};return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[]),un.useEffect(()=>{if(!S||!W.current)return;const j=W.current.getBoundingClientRect(),w=window.innerHeight||document.documentElement.clientHeight,nn=w*.4,yn=w-j.bottom,Sn=j.top;yn<nn&&Sn>yn?m(!0):m(!1)},[S]),_.jsxs("div",{className:`relative block ${h||""}`,ref:G,children:[_.jsxs("span",{className:"flex w-full divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm",children:[_.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative text-left",onClick:()=>M(!S),ref:W,children:_.jsx("span",{style:{color:F||"inherit"},children:bn})}),_.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative","aria-label":"Menu",onClick:()=>M(!S),children:_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),S&&_.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-lg max-h-[40vh] overflow-y-auto ${g?"bottom-full mb-2":"top-full mt-2"}`,children:c.length>0?_.jsxs("div",{children:[_.jsx("p",{className:"sticky top-0 bg-white px-3 py-2 text-xs uppercase text-gray-500 border-b border-gray-200 z-20",children:i}),_.jsx("input",{type:"text",className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 px-2 py-1 text-sm",placeholder:"Search...",value:D,onChange:j=>L(j.target.value)}),on.map(j=>_.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900",role:"menuitem",onClick:w=>{w.preventDefault(),fn(j.value)},children:_.jsx("span",{style:{color:j.color||"inherit"},children:j.label})},j.value)),on.length===0&&_.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No matching options"})]}):_.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No options available"})})]})}var Yc={exports:{}},qc={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var db;function _h(){if(db)return qc;db=1;var i=pi();function c(g,m){return g===m&&(g!==0||1/g===1/m)||g!==g&&m!==m}var f=typeof Object.is=="function"?Object.is:c,s=i.useSyncExternalStore,d=i.useRef,h=i.useEffect,S=i.useMemo,M=i.useDebugValue;return qc.useSyncExternalStoreWithSelector=function(g,m,D,L,G){var W=d(null);if(W.current===null){var P={hasValue:!1,value:null};W.current=P}else P=W.current;W=S(function(){function F(w){if(!on){if(on=!0,fn=w,w=L(w),G!==void 0&&P.hasValue){var nn=P.value;if(G(nn,w))return mn=nn}return mn=w}if(nn=mn,f(fn,w))return nn;var yn=L(w);return G!==void 0&&G(nn,yn)?(fn=w,nn):(fn=w,mn=yn)}var on=!1,fn,mn,j=D===void 0?null:D;return[function(){return F(m())},j===null?void 0:function(){return F(j())}]},[m,D,L,G]);var bn=s(g,W[0],W[1]);return h(function(){P.hasValue=!0,P.value=bn},[bn]),M(bn),bn},qc}var bb;function Oh(){return bb||(bb=1,Yc.exports=_h()),Yc.exports}var Dh=Oh();function Nh(i){i()}function Mh(){let i=null,c=null;return{clear(){i=null,c=null},notify(){Nh(()=>{let f=i;for(;f;)f.callback(),f=f.next})},get(){const f=[];let s=i;for(;s;)f.push(s),s=s.next;return f},subscribe(f){let s=!0;const d=c={callback:f,next:null,prev:c};return d.prev?d.prev.next=d:i=d,function(){!s||i===null||(s=!1,d.next?d.next.prev=d.prev:c=d.prev,d.prev?d.prev.next=d.next:i=d.next)}}}}var yb={notify(){},get:()=>[]};function Ch(i,c){let f,s=yb,d=0,h=!1;function S(bn){D();const F=s.subscribe(bn);let on=!1;return()=>{on||(on=!0,F(),L())}}function M(){s.notify()}function g(){P.onStateChange&&P.onStateChange()}function m(){return h}function D(){d++,f||(f=i.subscribe(g),s=Mh())}function L(){d--,f&&d===0&&(f(),f=void 0,s.clear(),s=yb)}function G(){h||(h=!0,D())}function W(){h&&(h=!1,L())}const P={addNestedSub:S,notifyNestedSubs:M,handleChangeWrapper:g,isSubscribed:m,trySubscribe:G,tryUnsubscribe:W,getListeners:()=>s};return P}var xh=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Uh=xh(),Hh=()=>typeof navigator<"u"&&navigator.product==="ReactNative",Lh=Hh(),Bh=()=>Uh||Lh?un.useLayoutEffect:un.useEffect,wh=Bh(),Vc=Symbol.for("react-redux-context"),Kc=typeof globalThis<"u"?globalThis:{};function zh(){if(!un.createContext)return{};const i=Kc[Vc]??(Kc[Vc]=new Map);let c=i.get(un.createContext);return c||(c=un.createContext(null),i.set(un.createContext,c)),c}var xt=zh();function Gh(i){const{children:c,context:f,serverState:s,store:d}=i,h=un.useMemo(()=>{const g=Ch(d);return{store:d,subscription:g,getServerState:s?()=>s:void 0}},[d,s]),S=un.useMemo(()=>d.getState(),[d]);wh(()=>{const{subscription:g}=h;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),S!==d.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[h,S]);const M=f||xt;return un.createElement(M.Provider,{value:h},c)}var jh=Gh;function as(i=xt){return function(){return un.useContext(i)}}var Nb=as();function Mb(i=xt){const c=i===xt?Nb:as(i),f=()=>{const{store:s}=c();return s};return Object.assign(f,{withTypes:()=>f}),f}var Yh=Mb();function qh(i=xt){const c=i===xt?Yh:Mb(i),f=()=>c().dispatch;return Object.assign(f,{withTypes:()=>f}),f}var Vh=qh(),Kh=(i,c)=>i===c;function Qh(i=xt){const c=i===xt?Nb:as(i),f=(s,d={})=>{const{equalityFn:h=Kh}=typeof d=="function"?{equalityFn:d}:d,S=c(),{store:M,subscription:g,getServerState:m}=S;un.useRef(!0);const D=un.useCallback({[s.name](G){return s(G)}}[s.name],[s]),L=Dh.useSyncExternalStoreWithSelector(g.addNestedSub,M.getState,m||M.getState,D,h);return un.useDebugValue(L),L};return Object.assign(f,{withTypes:()=>f}),f}var Xh=Qh();const Ut=Vh,Ve=Xh;function Zn(i){return`Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}var Wh=typeof Symbol=="function"&&Symbol.observable||"@@observable",hb=Wh,Qc=()=>Math.random().toString(36).substring(7).split("").join("."),Zh={INIT:`@@redux/INIT${Qc()}`,REPLACE:`@@redux/REPLACE${Qc()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Qc()}`},oi=Zh;function ls(i){if(typeof i!="object"||i===null)return!1;let c=i;for(;Object.getPrototypeOf(c)!==null;)c=Object.getPrototypeOf(c);return Object.getPrototypeOf(i)===c||Object.getPrototypeOf(i)===null}function Cb(i,c,f){if(typeof i!="function")throw new Error(Zn(2));if(typeof c=="function"&&typeof f=="function"||typeof f=="function"&&typeof arguments[3]=="function")throw new Error(Zn(0));if(typeof c=="function"&&typeof f>"u"&&(f=c,c=void 0),typeof f<"u"){if(typeof f!="function")throw new Error(Zn(1));return f(Cb)(i,c)}let s=i,d=c,h=new Map,S=h,M=0,g=!1;function m(){S===h&&(S=new Map,h.forEach((F,on)=>{S.set(on,F)}))}function D(){if(g)throw new Error(Zn(3));return d}function L(F){if(typeof F!="function")throw new Error(Zn(4));if(g)throw new Error(Zn(5));let on=!0;m();const fn=M++;return S.set(fn,F),function(){if(on){if(g)throw new Error(Zn(6));on=!1,m(),S.delete(fn),h=null}}}function G(F){if(!ls(F))throw new Error(Zn(7));if(typeof F.type>"u")throw new Error(Zn(8));if(typeof F.type!="string")throw new Error(Zn(17));if(g)throw new Error(Zn(9));try{g=!0,d=s(d,F)}finally{g=!1}return(h=S).forEach(fn=>{fn()}),F}function W(F){if(typeof F!="function")throw new Error(Zn(10));s=F,G({type:oi.REPLACE})}function P(){const F=L;return{subscribe(on){if(typeof on!="object"||on===null)throw new Error(Zn(11));function fn(){const j=on;j.next&&j.next(D())}return fn(),{unsubscribe:F(fn)}},[hb](){return this}}}return G({type:oi.INIT}),{dispatch:G,subscribe:L,getState:D,replaceReducer:W,[hb]:P}}function kh(i){Object.keys(i).forEach(c=>{const f=i[c];if(typeof f(void 0,{type:oi.INIT})>"u")throw new Error(Zn(12));if(typeof f(void 0,{type:oi.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Zn(13))})}function Ih(i){const c=Object.keys(i),f={};for(let h=0;h<c.length;h++){const S=c[h];typeof i[S]=="function"&&(f[S]=i[S])}const s=Object.keys(f);let d;try{kh(f)}catch(h){d=h}return function(S={},M){if(d)throw d;let g=!1;const m={};for(let D=0;D<s.length;D++){const L=s[D],G=f[L],W=S[L],P=G(W,M);if(typeof P>"u")throw M&&M.type,new Error(Zn(14));m[L]=P,g=g||P!==W}return g=g||s.length!==Object.keys(S).length,g?m:S}}function fi(...i){return i.length===0?c=>c:i.length===1?i[0]:i.reduce((c,f)=>(...s)=>c(f(...s)))}function Jh(...i){return c=>(f,s)=>{const d=c(f,s);let h=()=>{throw new Error(Zn(15))};const S={getState:d.getState,dispatch:(g,...m)=>h(g,...m)},M=i.map(g=>g(S));return h=fi(...M)(d.dispatch),{...d,dispatch:h}}}function Ph(i){return ls(i)&&"type"in i&&typeof i.type=="string"}var xb=Symbol.for("immer-nothing"),pb=Symbol.for("immer-draftable"),me=Symbol.for("immer-state");function Be(i,...c){throw new Error(`[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`)}var qr=Object.getPrototypeOf;function $t(i){return!!i&&!!i[me]}function lt(i){var c;return i?Ub(i)||Array.isArray(i)||!!i[pb]||!!((c=i.constructor)!=null&&c[pb])||gi(i)||Si(i):!1}var Fh=Object.prototype.constructor.toString();function Ub(i){if(!i||typeof i!="object")return!1;const c=qr(i);if(c===null)return!0;const f=Object.hasOwnProperty.call(c,"constructor")&&c.constructor;return f===Object?!0:typeof f=="function"&&Function.toString.call(f)===Fh}function di(i,c){vi(i)===0?Reflect.ownKeys(i).forEach(f=>{c(f,i[f],i)}):i.forEach((f,s)=>c(s,f,i))}function vi(i){const c=i[me];return c?c.type_:Array.isArray(i)?1:gi(i)?2:Si(i)?3:0}function Jc(i,c){return vi(i)===2?i.has(c):Object.prototype.hasOwnProperty.call(i,c)}function Hb(i,c,f){const s=vi(i);s===2?i.set(c,f):s===3?i.add(f):i[c]=f}function $h(i,c){return i===c?i!==0||1/i===1/c:i!==i&&c!==c}function gi(i){return i instanceof Map}function Si(i){return i instanceof Set}function Pt(i){return i.copy_||i.base_}function Pc(i,c){if(gi(i))return new Map(i);if(Si(i))return new Set(i);if(Array.isArray(i))return Array.prototype.slice.call(i);const f=Ub(i);if(c===!0||c==="class_only"&&!f){const s=Object.getOwnPropertyDescriptors(i);delete s[me];let d=Reflect.ownKeys(s);for(let h=0;h<d.length;h++){const S=d[h],M=s[S];M.writable===!1&&(M.writable=!0,M.configurable=!0),(M.get||M.set)&&(s[S]={configurable:!0,writable:!0,enumerable:M.enumerable,value:i[S]})}return Object.create(qr(i),s)}else{const s=qr(i);if(s!==null&&f)return{...i};const d=Object.create(s);return Object.assign(d,i)}}function is(i,c=!1){return Ei(i)||$t(i)||!lt(i)||(vi(i)>1&&(i.set=i.add=i.clear=i.delete=np),Object.freeze(i),c&&Object.entries(i).forEach(([f,s])=>is(s,!0))),i}function np(){Be(2)}function Ei(i){return Object.isFrozen(i)}var ep={};function nr(i){const c=ep[i];return c||Be(0,i),c}var Ka;function Lb(){return Ka}function tp(i,c){return{drafts_:[],parent_:i,immer_:c,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function mb(i,c){c&&(nr("Patches"),i.patches_=[],i.inversePatches_=[],i.patchListener_=c)}function Fc(i){$c(i),i.drafts_.forEach(rp),i.drafts_=null}function $c(i){i===Ka&&(Ka=i.parent_)}function vb(i){return Ka=tp(Ka,i)}function rp(i){const c=i[me];c.type_===0||c.type_===1?c.revoke_():c.revoked_=!0}function gb(i,c){c.unfinalizedDrafts_=c.drafts_.length;const f=c.drafts_[0];return i!==void 0&&i!==f?(f[me].modified_&&(Fc(c),Be(4)),lt(i)&&(i=bi(c,i),c.parent_||yi(c,i)),c.patches_&&nr("Patches").generateReplacementPatches_(f[me].base_,i,c.patches_,c.inversePatches_)):i=bi(c,f,[]),Fc(c),c.patches_&&c.patchListener_(c.patches_,c.inversePatches_),i!==xb?i:void 0}function bi(i,c,f){if(Ei(c))return c;const s=c[me];if(!s)return di(c,(d,h)=>Sb(i,s,c,d,h,f)),c;if(s.scope_!==i)return c;if(!s.modified_)return yi(i,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const d=s.copy_;let h=d,S=!1;s.type_===3&&(h=new Set(d),d.clear(),S=!0),di(h,(M,g)=>Sb(i,s,d,M,g,f,S)),yi(i,d,!1),f&&i.patches_&&nr("Patches").generatePatches_(s,f,i.patches_,i.inversePatches_)}return s.copy_}function Sb(i,c,f,s,d,h,S){if($t(d)){const M=h&&c&&c.type_!==3&&!Jc(c.assigned_,s)?h.concat(s):void 0,g=bi(i,d,M);if(Hb(f,s,g),$t(g))i.canAutoFreeze_=!1;else return}else S&&f.add(d);if(lt(d)&&!Ei(d)){if(!i.immer_.autoFreeze_&&i.unfinalizedDrafts_<1)return;bi(i,d),(!c||!c.scope_.parent_)&&typeof s!="symbol"&&Object.prototype.propertyIsEnumerable.call(f,s)&&yi(i,d)}}function yi(i,c,f=!1){!i.parent_&&i.immer_.autoFreeze_&&i.canAutoFreeze_&&is(c,f)}function ap(i,c){const f=Array.isArray(i),s={type_:f?1:0,scope_:c?c.scope_:Lb(),modified_:!1,finalized_:!1,assigned_:{},parent_:c,base_:i,draft_:null,copy_:null,revoke_:null,isManual_:!1};let d=s,h=us;f&&(d=[s],h=Qa);const{revoke:S,proxy:M}=Proxy.revocable(d,h);return s.draft_=M,s.revoke_=S,M}var us={get(i,c){if(c===me)return i;const f=Pt(i);if(!Jc(f,c))return lp(i,f,c);const s=f[c];return i.finalized_||!lt(s)?s:s===Xc(i.base_,c)?(Wc(i),i.copy_[c]=es(s,i)):s},has(i,c){return c in Pt(i)},ownKeys(i){return Reflect.ownKeys(Pt(i))},set(i,c,f){const s=Bb(Pt(i),c);if(s!=null&&s.set)return s.set.call(i.draft_,f),!0;if(!i.modified_){const d=Xc(Pt(i),c),h=d==null?void 0:d[me];if(h&&h.base_===f)return i.copy_[c]=f,i.assigned_[c]=!1,!0;if($h(f,d)&&(f!==void 0||Jc(i.base_,c)))return!0;Wc(i),ns(i)}return i.copy_[c]===f&&(f!==void 0||c in i.copy_)||Number.isNaN(f)&&Number.isNaN(i.copy_[c])||(i.copy_[c]=f,i.assigned_[c]=!0),!0},deleteProperty(i,c){return Xc(i.base_,c)!==void 0||c in i.base_?(i.assigned_[c]=!1,Wc(i),ns(i)):delete i.assigned_[c],i.copy_&&delete i.copy_[c],!0},getOwnPropertyDescriptor(i,c){const f=Pt(i),s=Reflect.getOwnPropertyDescriptor(f,c);return s&&{writable:!0,configurable:i.type_!==1||c!=="length",enumerable:s.enumerable,value:f[c]}},defineProperty(){Be(11)},getPrototypeOf(i){return qr(i.base_)},setPrototypeOf(){Be(12)}},Qa={};di(us,(i,c)=>{Qa[i]=function(){return arguments[0]=arguments[0][0],c.apply(this,arguments)}});Qa.deleteProperty=function(i,c){return Qa.set.call(this,i,c,void 0)};Qa.set=function(i,c,f){return us.set.call(this,i[0],c,f,i[0])};function Xc(i,c){const f=i[me];return(f?Pt(f):i)[c]}function lp(i,c,f){var d;const s=Bb(c,f);return s?"value"in s?s.value:(d=s.get)==null?void 0:d.call(i.draft_):void 0}function Bb(i,c){if(!(c in i))return;let f=qr(i);for(;f;){const s=Object.getOwnPropertyDescriptor(f,c);if(s)return s;f=qr(f)}}function ns(i){i.modified_||(i.modified_=!0,i.parent_&&ns(i.parent_))}function Wc(i){i.copy_||(i.copy_=Pc(i.base_,i.scope_.immer_.useStrictShallowCopy_))}var ip=class{constructor(i){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(c,f,s)=>{if(typeof c=="function"&&typeof f!="function"){const h=f;f=c;const S=this;return function(g=h,...m){return S.produce(g,D=>f.call(this,D,...m))}}typeof f!="function"&&Be(6),s!==void 0&&typeof s!="function"&&Be(7);let d;if(lt(c)){const h=vb(this),S=es(c,void 0);let M=!0;try{d=f(S),M=!1}finally{M?Fc(h):$c(h)}return mb(h,s),gb(d,h)}else if(!c||typeof c!="object"){if(d=f(c),d===void 0&&(d=c),d===xb&&(d=void 0),this.autoFreeze_&&is(d,!0),s){const h=[],S=[];nr("Patches").generateReplacementPatches_(c,d,h,S),s(h,S)}return d}else Be(1,c)},this.produceWithPatches=(c,f)=>{if(typeof c=="function")return(S,...M)=>this.produceWithPatches(S,g=>c(g,...M));let s,d;return[this.produce(c,f,(S,M)=>{s=S,d=M}),s,d]},typeof(i==null?void 0:i.autoFreeze)=="boolean"&&this.setAutoFreeze(i.autoFreeze),typeof(i==null?void 0:i.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(i.useStrictShallowCopy)}createDraft(i){lt(i)||Be(8),$t(i)&&(i=up(i));const c=vb(this),f=es(i,void 0);return f[me].isManual_=!0,$c(c),f}finishDraft(i,c){const f=i&&i[me];(!f||!f.isManual_)&&Be(9);const{scope_:s}=f;return mb(s,c),gb(void 0,s)}setAutoFreeze(i){this.autoFreeze_=i}setUseStrictShallowCopy(i){this.useStrictShallowCopy_=i}applyPatches(i,c){let f;for(f=c.length-1;f>=0;f--){const d=c[f];if(d.path.length===0&&d.op==="replace"){i=d.value;break}}f>-1&&(c=c.slice(f+1));const s=nr("Patches").applyPatches_;return $t(i)?s(i,c):this.produce(i,d=>s(d,c))}};function es(i,c){const f=gi(i)?nr("MapSet").proxyMap_(i,c):Si(i)?nr("MapSet").proxySet_(i,c):ap(i,c);return(c?c.scope_:Lb()).drafts_.push(f),f}function up(i){return $t(i)||Be(10,i),wb(i)}function wb(i){if(!lt(i)||Ei(i))return i;const c=i[me];let f;if(c){if(!c.modified_)return c.base_;c.finalized_=!0,f=Pc(i,c.scope_.immer_.useStrictShallowCopy_)}else f=Pc(i,!0);return di(f,(s,d)=>{Hb(f,s,wb(d))}),c&&(c.finalized_=!1),f}var ve=new ip,zb=ve.produce;ve.produceWithPatches.bind(ve);ve.setAutoFreeze.bind(ve);ve.setUseStrictShallowCopy.bind(ve);ve.applyPatches.bind(ve);ve.createDraft.bind(ve);ve.finishDraft.bind(ve);function Gb(i){return({dispatch:f,getState:s})=>d=>h=>typeof h=="function"?h(f,s,i):d(h)}var cp=Gb(),sp=Gb,op=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?fi:fi.apply(null,arguments)};function Eb(i,c){function f(...s){if(c){let d=c(...s);if(!d)throw new Error(at(0));return{type:i,payload:d.payload,..."meta"in d&&{meta:d.meta},..."error"in d&&{error:d.error}}}return{type:i,payload:s[0]}}return f.toString=()=>`${i}`,f.type=i,f.match=s=>Ph(s)&&s.type===i,f}var jb=class Va extends Array{constructor(...c){super(...c),Object.setPrototypeOf(this,Va.prototype)}static get[Symbol.species](){return Va}concat(...c){return super.concat.apply(this,c)}prepend(...c){return c.length===1&&Array.isArray(c[0])?new Va(...c[0].concat(this)):new Va(...c.concat(this))}};function Ab(i){return lt(i)?zb(i,()=>{}):i}function ui(i,c,f){return i.has(c)?i.get(c):i.set(c,f(c)).get(c)}function fp(i){return typeof i=="boolean"}var dp=()=>function(c){const{thunk:f=!0,immutableCheck:s=!0,serializableCheck:d=!0,actionCreatorCheck:h=!0}=c??{};let S=new jb;return f&&(fp(f)?S.push(cp):S.push(sp(f.extraArgument))),S},bp="RTK_autoBatch",Rb=i=>c=>{setTimeout(c,i)},yp=(i={type:"raf"})=>c=>(...f)=>{const s=c(...f);let d=!0,h=!1,S=!1;const M=new Set,g=i.type==="tick"?queueMicrotask:i.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Rb(10):i.type==="callback"?i.queueNotification:Rb(i.timeout),m=()=>{S=!1,h&&(h=!1,M.forEach(D=>D()))};return Object.assign({},s,{subscribe(D){const L=()=>d&&D(),G=s.subscribe(L);return M.add(D),()=>{G(),M.delete(D)}},dispatch(D){var L;try{return d=!((L=D==null?void 0:D.meta)!=null&&L[bp]),h=!d,h&&(S||(S=!0,g(m))),s.dispatch(D)}finally{d=!0}}})},hp=i=>function(f){const{autoBatch:s=!0}=f??{};let d=new jb(i);return s&&d.push(yp(typeof s=="object"?s:void 0)),d};function pp(i){const c=dp(),{reducer:f=void 0,middleware:s,devTools:d=!0,preloadedState:h=void 0,enhancers:S=void 0}=i||{};let M;if(typeof f=="function")M=f;else if(ls(f))M=Ih(f);else throw new Error(at(1));let g;typeof s=="function"?g=s(c):g=c();let m=fi;d&&(m=op({trace:!1,...typeof d=="object"&&d}));const D=Jh(...g),L=hp(D);let G=typeof S=="function"?S(L):L();const W=m(...G);return Cb(M,h,W)}function Yb(i){const c={},f=[];let s;const d={addCase(h,S){const M=typeof h=="string"?h:h.type;if(!M)throw new Error(at(28));if(M in c)throw new Error(at(29));return c[M]=S,d},addMatcher(h,S){return f.push({matcher:h,reducer:S}),d},addDefaultCase(h){return s=h,d}};return i(d),[c,f,s]}function mp(i){return typeof i=="function"}function vp(i,c){let[f,s,d]=Yb(c),h;if(mp(i))h=()=>Ab(i());else{const M=Ab(i);h=()=>M}function S(M=h(),g){let m=[f[g.type],...s.filter(({matcher:D})=>D(g)).map(({reducer:D})=>D)];return m.filter(D=>!!D).length===0&&(m=[d]),m.reduce((D,L)=>{if(L)if($t(D)){const W=L(D,g);return W===void 0?D:W}else{if(lt(D))return zb(D,G=>L(G,g));{const G=L(D,g);if(G===void 0){if(D===null)return D;throw Error("A case reducer on a non-draftable value must not return undefined")}return G}}return D},M)}return S.getInitialState=h,S}var gp=Symbol.for("rtk-slice-createasyncthunk");function Sp(i,c){return`${i}/${c}`}function Ep({creators:i}={}){var f;const c=(f=i==null?void 0:i.asyncThunk)==null?void 0:f[gp];return function(d){const{name:h,reducerPath:S=h}=d;if(!h)throw new Error(at(11));const M=(typeof d.reducers=="function"?d.reducers(Tp()):d.reducers)||{},g=Object.keys(M),m={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},D={addCase(j,w){const nn=typeof j=="string"?j:j.type;if(!nn)throw new Error(at(12));if(nn in m.sliceCaseReducersByType)throw new Error(at(13));return m.sliceCaseReducersByType[nn]=w,D},addMatcher(j,w){return m.sliceMatchers.push({matcher:j,reducer:w}),D},exposeAction(j,w){return m.actionCreators[j]=w,D},exposeCaseReducer(j,w){return m.sliceCaseReducersByName[j]=w,D}};g.forEach(j=>{const w=M[j],nn={reducerName:j,type:Sp(h,j),createNotation:typeof d.reducers=="function"};Op(w)?Np(nn,w,D,c):_p(nn,w,D)});function L(){const[j={},w=[],nn=void 0]=typeof d.extraReducers=="function"?Yb(d.extraReducers):[d.extraReducers],yn={...j,...m.sliceCaseReducersByType};return vp(d.initialState,Sn=>{for(let Z in yn)Sn.addCase(Z,yn[Z]);for(let Z of m.sliceMatchers)Sn.addMatcher(Z.matcher,Z.reducer);for(let Z of w)Sn.addMatcher(Z.matcher,Z.reducer);nn&&Sn.addDefaultCase(nn)})}const G=j=>j,W=new Map,P=new WeakMap;let bn;function F(j,w){return bn||(bn=L()),bn(j,w)}function on(){return bn||(bn=L()),bn.getInitialState()}function fn(j,w=!1){function nn(Sn){let Z=Sn[j];return typeof Z>"u"&&w&&(Z=ui(P,nn,on)),Z}function yn(Sn=G){const Z=ui(W,w,()=>new WeakMap);return ui(Z,Sn,()=>{const Mn={};for(const[Bn,Dn]of Object.entries(d.selectors??{}))Mn[Bn]=Ap(Dn,Sn,()=>ui(P,Sn,on),w);return Mn})}return{reducerPath:j,getSelectors:yn,get selectors(){return yn(nn)},selectSlice:nn}}const mn={name:h,reducer:F,actions:m.actionCreators,caseReducers:m.sliceCaseReducersByName,getInitialState:on,...fn(S),injectInto(j,{reducerPath:w,...nn}={}){const yn=w??S;return j.inject({reducerPath:yn,reducer:F},nn),{...mn,...fn(yn,!0)}}};return mn}}function Ap(i,c,f,s){function d(h,...S){let M=c(h);return typeof M>"u"&&s&&(M=f()),i(M,...S)}return d.unwrapped=i,d}var Rp=Ep();function Tp(){function i(c,f){return{_reducerDefinitionType:"asyncThunk",payloadCreator:c,...f}}return i.withTypes=()=>i,{reducer(c){return Object.assign({[c.name](...f){return c(...f)}}[c.name],{_reducerDefinitionType:"reducer"})},preparedReducer(c,f){return{_reducerDefinitionType:"reducerWithPrepare",prepare:c,reducer:f}},asyncThunk:i}}function _p({type:i,reducerName:c,createNotation:f},s,d){let h,S;if("reducer"in s){if(f&&!Dp(s))throw new Error(at(17));h=s.reducer,S=s.prepare}else h=s;d.addCase(i,h).exposeCaseReducer(c,h).exposeAction(c,S?Eb(i,S):Eb(i))}function Op(i){return i._reducerDefinitionType==="asyncThunk"}function Dp(i){return i._reducerDefinitionType==="reducerWithPrepare"}function Np({type:i,reducerName:c},f,s,d){if(!d)throw new Error(at(18));const{payloadCreator:h,fulfilled:S,pending:M,rejected:g,settled:m,options:D}=f,L=d(i,h,D);s.exposeAction(c,L),S&&s.addCase(L.fulfilled,S),M&&s.addCase(L.pending,M),g&&s.addCase(L.rejected,g),m&&s.addMatcher(L.settled,m),s.exposeCaseReducer(c,{fulfilled:S||ci,pending:M||ci,rejected:g||ci,settled:m||ci})}function ci(){}function at(i){return`Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `}const Mp={hero:"Ashe",cash:11e3,equipped:Array(6).fill(""),toBuy:6,avoid:[],weights:[{type:"",weight:1}],error:""},qb=Rp({name:"input",initialState:Mp,reducers:{setHero(i,c){i.hero=c.payload},setCash(i,c){i.cash=c.payload},setEquipped(i,c){i.equipped[c.payload.index]=c.payload.id},setToBuy(i,c){i.toBuy=c.payload},addAvoid(i,c){i.avoid.includes(c.payload)||i.avoid.push(c.payload)},removeAvoid(i,c){i.avoid=i.avoid.filter(f=>f!==c.payload)},setWeightType(i,c){i.weights[c.payload.index].type=c.payload.type},setWeightValue(i,c){i.weights[c.payload.index].weight=c.payload.value},addWeightRow(i,c){i.weights.push({type:c.payload,weight:1})},removeWeightRow(i,c){i.weights.splice(c.payload,1)},setError(i,c){i.error=c.payload}}}),{setHero:Cp,setCash:xp,setEquipped:Tb,setToBuy:Vb,addAvoid:Up,removeAvoid:Hp,setWeightType:Kb,setWeightValue:Lp,addWeightRow:Bp,removeWeightRow:wp,setError:Zc}=qb.actions,zp=qb.reducer;function Gp({heroes:i}){const c=Ve(s=>s.input.present.hero),f=Ut();return _.jsxs("div",{children:[_.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium text-gray-700 mb-1",children:"Hero"}),_.jsx(mi,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...i.map(s=>({value:s,label:s}))],value:c,onChange:s=>f(Cp(s))})]})}function Qb({value:i,onChange:c,min:f,max:s,step:d,placeholder:h,className:S,label:M}){const[g,m]=un.useState(i.toString());un.useEffect(()=>{m(i.toString())},[i]);const D=L=>{const G=L.target.value;if(m(G),G===""||G==="-")return;const W=Number(G);isNaN(W)||c(W)};return _.jsx("div",{className:`relative inline-block ${S||""}`,children:_.jsx("input",{type:"number",className:`block w-full px-3 py-2 text-sm font-medium text-gray-700 rounded border border-gray-300 bg-white shadow-sm
                    transition-colors focus:border-indigo-500 focus:ring-indigo-500`,value:g,onChange:D,inputMode:"decimal",pattern:".*",min:f,max:s,step:d,placeholder:h,"aria-label":M||h||"Number input"})})}function jp(){const i=Ve(f=>f.input.present.cash),c=Ut();return _.jsxs("div",{children:[_.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium text-gray-700",children:"Total Cash"}),_.jsx(Qb,{value:i,onChange:f=>c(xp(f)),min:0,label:"Total Cash",className:"mt-1"})]})}function Yp(i){const c=i.match(/[-+]?\d+(?:\.\d+)?/);return c?parseFloat(c[0]):0}function _b(i){const c=new Map;return i.forEach(f=>{f.attributes.forEach(s=>{const d=Yp(s.value);c.set(s.type,(c.get(s.type)??0)+d)})}),c}function Ob(i,c){let f=0;return c.forEach(s=>{f+=(i.get(s.type)??0)*s.weight}),f}function hi(i){switch(i){case"common":return"green";case"rare":return"blue";case"epic":return"purple";default:return"black"}}function Xa(i){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[i]||i}function qp(i,c){const f=["WP","AP","AS"],s=f.indexOf(i),d=f.indexOf(c);return s!==-1&&d!==-1?s-d:s!==-1?-1:d!==-1?1:i.localeCompare(c)}function Xb(i,c){const f={common:0,rare:1,epic:2},s=f[i.rarity]-f[c.rarity];return s!==0?s:i.name.localeCompare(c.name)}function Vp({items:i}){const c=Ve(S=>S.input.present.equipped),f=Ut(),[s,d]=un.useState(!1),h=S=>{d(S),S||c.forEach((M,g)=>f(Tb({index:g,id:""})))};return _.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Equipped Items"}),_.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[_.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:s,onChange:S=>h(S.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),_.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm text-gray-700 select-none",children:"Use Equipped Item"})]}),s&&_.jsx("div",{className:"space-y-4 mt-1",children:c.map((S,M)=>_.jsx(mi,{label:`Equipped Slot ${M+1}`,placeholder:"None",options:[{value:"",label:"None"},...i.sort(Xb).map(g=>({value:g.id||g.name,label:`${g.name} (${g.cost}) ${g.attributes.filter(m=>m.type!=="description").map(m=>`${Xa(m.type)}-${m.value}`).join(", ")}`,color:hi(g.rarity)}))],value:S,onChange:g=>f(Tb({index:M,id:g})),className:"w-full"},M))})]})}function Kp({items:i}){const c=Ve(h=>h.input.present.avoid),f=Ut(),[s,d]=un.useState("");return _.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Avoid Item"}),_.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[_.jsx(mi,{label:"Avoid Item",placeholder:"Select item",options:[{value:"",label:"Select item"},...i.sort(Xb).map(h=>({value:h.id||h.name,label:`${h.name} (${h.cost})`,color:hi(h.rarity)}))],value:s,onChange:d,className:"flex-grow"}),_.jsx("button",{type:"button",className:"rounded bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300",onClick:()=>{s&&(f(Up(s)),d(""))},children:"Add"})]}),c.length>0&&_.jsx("div",{className:"flex flex-wrap gap-2 mt-2",children:c.map(h=>{const S=i.find(M=>(M.id||M.name)===h);return _.jsxs("span",{className:"flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-800",children:[S?S.name:h,_.jsx("button",{type:"button",className:"ml-1 text-red-500 hover:text-red-700",onClick:()=>f(Hp(h)),children:"×"})]},h)})})]})}function Qp({attrTypes:i}){const c=Ve(d=>d.input.present.weights),f=Ut(),s=i.map(d=>({value:d,label:Xa(d)}));return _.jsxs("div",{children:[_.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Attribute Weights"}),_.jsx("div",{className:"space-y-4 mt-1",children:c.map((d,h)=>_.jsxs("div",{className:"flex items-center gap-2",children:[_.jsx(mi,{label:"Attribute Type",placeholder:"Select type",options:s,value:d.type,onChange:S=>f(Kb({index:h,type:S})),className:"flex-grow"}),_.jsx(Qb,{value:d.weight,onChange:S=>f(Lp({index:h,value:S})),min:0,max:100,step:.01,label:`Weight for ${Xa(d.type)}`,className:"w-24"}),c.length>1&&_.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>f(wp(h)),children:_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},h))}),_.jsx("button",{type:"button",className:"mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:()=>f(Bp(i[0])),children:"Add Row"})]})}function Xp({onSubmit:i,validate:c}){const f=Ut(),s=Ve(h=>h.input.present.toBuy),d=Ve(h=>h.input.present.error);return _.jsxs("div",{className:"!mt-8 border-t pt-6",children:[_.jsx("button",{type:"button",onClick:()=>{c()&&i()},className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",disabled:!c(),children:"Calculate Optimal Build"}),_.jsx("div",{className:"mt-4 grid grid-cols-5 gap-2",children:[2,3,4,5,6].map(h=>_.jsx("button",{type:"button",onClick:()=>f(Vb(h)),className:`rounded-lg py-2 text-sm font-medium ${s===h?"bg-indigo-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:h},h))}),d&&_.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800",children:d})]})}function Wp({heroes:i,attrTypes:c,filteredItems:f,onSubmit:s,validate:d}){return _.jsxs("form",{onSubmit:h=>{h.preventDefault(),d()&&s()},className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[_.jsx(Gp,{heroes:i}),_.jsx(jp,{}),_.jsx(Vp,{items:f}),_.jsx(Kp,{items:f}),_.jsx(Qp,{attrTypes:c}),_.jsx(Xp,{onSubmit:s,validate:d})]})}function Zp(i){return i.replace(/<[^>]*>/g,"")}function kp({eqItems:i,eqCost:c,cash:f,results:s,alternatives:d}){return _.jsxs("div",{className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[_.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"Results"}),s?_.jsxs("div",{className:"space-y-6",children:[_.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[_.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[_.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Weighted Score"}),_.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600",children:s.score.toFixed(2)})]}),_.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[_.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Total Cost"}),_.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600",children:c+s.cost})]}),_.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[_.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Cash Remaining"}),_.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600",children:f-c-s.cost})]})]}),s.breakdown&&_.jsxs("div",{className:"text-sm text-gray-600",children:[_.jsx("strong",{children:"Breakdown:"}),_.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Type"}),_.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Sum"}),_.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Contribution"})]})}),_.jsx("tbody",{children:s.breakdown.map(h=>_.jsxs("tr",{children:[_.jsx("td",{className:"px-2 py-1",children:Xa(h.type)}),_.jsx("td",{className:"px-2 py-1",children:h.sum}),_.jsx("td",{className:"px-2 py-1",children:h.contrib.toFixed(2)})]},h.type))})]})]}),_.jsxs("div",{children:[_.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Final Build"}),_.jsx("ul",{className:"mt-2 space-y-3",children:[...i,...s.items].map(h=>_.jsxs("li",{className:"block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm",style:{borderLeftColor:hi(h.rarity),borderLeftWidth:"4px"},children:[_.jsxs("div",{className:"flex justify-between items-center",children:[_.jsx("strong",{className:"font-semibold",style:{color:hi(h.rarity)},children:h.name}),_.jsxs("span",{className:"text-sm font-mono rounded-full bg-indigo-50 text-indigo-600 px-2 py-0.5",children:[h.cost," G"]})]}),_.jsx("ul",{className:"mt-2 text-xs text-gray-600 space-y-1",children:h.attributes.map((S,M)=>_.jsx("li",{className:"flex items-start",children:_.jsxs("span",{children:[_.jsxs("span",{className:"font-medium",children:[Xa(S.type),":"]}),_.jsx("span",{className:"ml-1 text-gray-800 break-words",children:_.jsx("strong",{children:Zp(S.value)})})]})},M))})]},h.id))})]}),d.length>0&&_.jsxs("div",{children:[_.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Alternative Builds"}),_.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto",children:d.map((h,S)=>_.jsxs("li",{className:"text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100",children:[_.jsxs("strong",{children:["Cost: ",h.cost]})," - ",h.items.map(M=>M.name).join(", ")]},S))})]})]}):_.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 p-12",children:[_.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:_.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),_.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No results yet"}),_.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Fill out the form and click calculate to see the magic."})]})]})}const Ip=`{\r
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
}`,Jp=`{\r
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
}`;function Pp(){const[i,c]=un.useState([]),[f,s]=un.useState([]),[d,h]=un.useState([]),S=Ut(),M=Ve(Z=>Z.input.present),{hero:g,cash:m,equipped:D,toBuy:L,avoid:G,weights:W}=M,[P,bn]=un.useState(null),[F,on]=un.useState([]);un.useEffect(()=>{const Z=JSON.parse(Ip),Mn=JSON.parse(Jp),Bn=[],Dn=(H,Y,rn)=>{rn.forEach(y=>{const U=Mn[y.name],z={...y,tab:H,rarity:Y};U!=null&&U.attributes&&(z.attributes=U.attributes),Bn.push(z)})};["weapon","ability","survival"].forEach(H=>{const Y=Z.tabs[H];Dn(H,"common",Y.common),Dn(H,"rare",Y.rare),Dn(H,"epic",Y.epic)}),c(Bn);const ge=new Set,Fn=new Map,_n=new Set;Bn.forEach(H=>{H.character&&ge.add(H.character),H.attributes.forEach(Y=>{const rn=(Fn.get(Y.type)??0)+1;Fn.set(Y.type,rn),rn===2&&_n.add(Y.type)})}),_n.delete("description"),_n.delete("Editor's Note");const O=Array.from(_n).sort(qp);s(Array.from(ge).sort()),h(O),S(Kb({index:0,type:O[0]}))},[]),un.useEffect(()=>{const Z=D.filter(Mn=>Mn).length;L+Z>6&&S(Vb(Math.max(0,6-Z)))},[S,D,L]);function fn(){return D.map(Z=>i.find(Mn=>Mn.id===Z)).filter(Z=>!!Z)}function mn(){return!(!g||m<0||fn().reduce((Mn,Bn)=>Mn+Bn.cost,0)>m||L+fn().length>6||W.length===0)}function j(Z){const Mn=_b(Z);return Ob(Mn,W)}function w(){S(Zc(""));const Z=fn(),Mn=Z.reduce((q,hn)=>q+hn.cost,0),Bn=m-Mn;if(Bn<0){S(Zc("Equipped items cost exceeds total cash"));return}const Dn=new Set(W.map(q=>q.type)),ge=i.filter(q=>(!q.character||q.character===g)&&!D.includes(q.id??"")&&!G.includes(q.id??"")&&q.attributes.some(hn=>Dn.has(hn.type))),Fn=L;if(Fn===0){const q=j(Z);bn({items:[],cost:0,score:q}),on([]);return}const _n=ge.map(q=>({item:q,score:j([q])}));_n.sort((q,hn)=>hn.score-q.score);const O=[0];for(const q of _n)O.push(O[O.length-1]+q.score);let H=-1/0,Y=0,rn=[];const y=Z.length+Fn===6,U=_n.length;function z(q,hn,ie,ue){if(ue>H||ue===H&&(y?ie>Y:ie<Y)?(H=ue,Y=ie,rn=[{items:[...hn],cost:ie,score:ue}]):ue===H&&(y?ie<=Y:ie>=Y)&&rn.push({items:[...hn],cost:ie,score:ue}),hn.length===Fn||q>=U)return;const Vr=Fn-hn.length;if(!(ue+(O[Math.min(U,q+Vr)]-O[q])<H))for(let it=q;it<U;it++){const er=_n[it];ie+er.item.cost>Bn||(hn.push(er.item),z(it+1,hn,ie+er.item.cost,ue+er.score),hn.pop())}}if(z(0,[],0,0),rn.length===0){S(Zc("Insufficient cash for any purchase"));return}const[B,...Q]=rn.sort((q,hn)=>y?hn.cost-q.cost:q.cost-hn.cost),cn=Q.filter(q=>y?q.cost<B.cost:q.cost>B.cost).sort((q,hn)=>y?hn.cost-q.cost:q.cost-hn.cost),J=_b([...B.items,...Z]),$n=W.map(q=>{const hn=J.get(q.type)??0;return{type:q.type,sum:hn,contrib:hn*q.weight}});bn({items:B.items,cost:B.cost,score:Ob(J,W),breakdown:$n}),on(cn.map(q=>({...q,score:j([...q.items,...Z])})))}if(i.length===0)return _.jsx("div",{className:"p-4",children:"Loading..."});const nn=i.filter(Z=>!g||!Z.character||Z.character===g),yn=fn(),Sn=yn.reduce((Z,Mn)=>Z+Mn.cost,0);return _.jsx("div",{className:"bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8",children:_.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",children:[_.jsx(Wp,{heroes:f,attrTypes:d,filteredItems:nn,onSubmit:w,validate:mn}),_.jsx(kp,{eqItems:yn,eqCost:Sn,cash:m,results:P,alternatives:F})]})})}const Me={UNDO:"@@redux-undo/UNDO",REDO:"@@redux-undo/REDO",JUMP_TO_FUTURE:"@@redux-undo/JUMP_TO_FUTURE",JUMP_TO_PAST:"@@redux-undo/JUMP_TO_PAST",JUMP:"@@redux-undo/JUMP",CLEAR_HISTORY:"@@redux-undo/CLEAR_HISTORY"},si={undo(){return{type:Me.UNDO}},redo(){return{type:Me.REDO}},jumpToFuture(i){return{type:Me.JUMP_TO_FUTURE,index:i}},jumpToPast(i){return{type:Me.JUMP_TO_PAST,index:i}},jump(i){return{type:Me.JUMP,index:i}},clearHistory(){return{type:Me.CLEAR_HISTORY}}};function Db(i,c=[]){return Array.isArray(i)?i:typeof i=="string"?[i]:c}function Fp(i){return typeof i.present<"u"&&typeof i.future<"u"&&typeof i.past<"u"&&Array.isArray(i.future)&&Array.isArray(i.past)}function Ft(i,c,f,s=null){return{past:i,present:c,future:f,group:s,_latestUnfiltered:c,index:i.length,limit:i.length+f.length+1}}let Ai,Ce;const ts={prevState:"#9E9E9E",action:"#03A9F4",nextState:"#4CAF50"};function $p(){Ce={header:[],prev:[],action:[],next:[],msgs:[]}}function nm(){const{header:i,prev:c,next:f,action:s,msgs:d}=Ce;console.group?(console.groupCollapsed(...i),console.log(...c),console.log(...s),console.log(...f),console.log(...d),console.groupEnd()):(console.log(...i),console.log(...c),console.log(...s),console.log(...f),console.log(...d))}function rs(i,c,f){return[`%c${i}`,`color: ${c}; font-weight: bold`,f]}function em(i,c){$p(),Ai&&(console.group?(Ce.header=["%credux-undo","font-style: italic","action",i.type],Ce.action=rs("action",ts.action,i),Ce.prev=rs("prev history",ts.prevState,c)):(Ce.header=["redux-undo action",i.type],Ce.action=["action",i],Ce.prev=["prev history",c]))}function Le(i){Ai&&(console.group?Ce.next=rs("next history",ts.nextState,i):Ce.next=["next history",i],nm())}function Pn(...i){Ai&&(Ce.msgs=Ce.msgs.concat([...i,`
`]))}function tm(i){Ai=i}function kc(i,c){const f=Ft([],i,[]);return c&&(f._latestUnfiltered=null),f}function rm(i,c,f,s){const d=i.past.length+1;Pn("inserting",c),Pn("new free: ",f-d);const{past:h,_latestUnfiltered:S}=i,M=f&&f<=d,g=h.slice(M?1:0),m=S!=null?[...g,S]:g;return Ft(m,c,[],s)}function Wb(i,c){if(c<0||c>=i.future.length)return i;const{past:f,future:s,_latestUnfiltered:d}=i,h=[...f,d,...s.slice(0,c)],S=s[c],M=s.slice(c+1);return Ft(h,S,M)}function Zb(i,c){if(c<0||c>=i.past.length)return i;const{past:f,future:s,_latestUnfiltered:d}=i,h=f.slice(0,c),S=[...f.slice(c+1),d,...s],M=f[c];return Ft(h,M,S)}function Ic(i,c){return c>0?Wb(i,c-1):c<0?Zb(i,i.past.length+c):i}function am(i,c){return c.indexOf(i)>-1?i:!i}function lm(i,c={}){tm(c.debug);const f={limit:void 0,filter:()=>!0,groupBy:()=>null,undoType:Me.UNDO,redoType:Me.REDO,jumpToPastType:Me.JUMP_TO_PAST,jumpToFutureType:Me.JUMP_TO_FUTURE,jumpType:Me.JUMP,neverSkipReducer:!1,ignoreInitialState:!1,syncFilter:!1,...c,initTypes:Db(c.initTypes,["@@redux-undo/INIT"]),clearHistoryType:Db(c.clearHistoryType,[Me.CLEAR_HISTORY])},s=f.neverSkipReducer?(h,S,...M)=>({...h,present:i(h.present,S,...M)}):h=>h;let d;return(h=d,S={},...M)=>{em(S,h);let g=h;if(!d)if(Pn("history is uninitialized"),h===void 0){const D=i(h,{type:"@@redux-undo/CREATE_HISTORY"},...M);return g=kc(D,f.ignoreInitialState),Pn("do not set initialState on probe actions"),Le(g),g}else Fp(h)?(g=d=f.ignoreInitialState?h:Ft(h.past,h.present,h.future),Pn("initialHistory initialized: initialState is a history",d)):(g=d=kc(h,f.ignoreInitialState),Pn("initialHistory initialized: initialState is not a history",d));let m;switch(S.type){case void 0:return g;case f.undoType:return m=Ic(g,-1),Pn("perform undo"),Le(m),s(m,S,...M);case f.redoType:return m=Ic(g,1),Pn("perform redo"),Le(m),s(m,S,...M);case f.jumpToPastType:return m=Zb(g,S.index),Pn(`perform jumpToPast to ${S.index}`),Le(m),s(m,S,...M);case f.jumpToFutureType:return m=Wb(g,S.index),Pn(`perform jumpToFuture to ${S.index}`),Le(m),s(m,S,...M);case f.jumpType:return m=Ic(g,S.index),Pn(`perform jump to ${S.index}`),Le(m),s(m,S,...M);case am(S.type,f.clearHistoryType):return m=kc(g.present,f.ignoreInitialState),Pn("perform clearHistory"),Le(m),s(m,S,...M);default:if(m=i(g.present,S,...M),f.initTypes.some(L=>L===S.type))return Pn("reset history due to init action"),Le(d),d;if(g._latestUnfiltered===m)return g;if(typeof f.filter=="function"&&!f.filter(S,m,g)){const L=Ft(g.past,m,g.future,g.group);return f.syncFilter||(L._latestUnfiltered=g._latestUnfiltered),Pn("filter ignored action, not storing it in past"),Le(L),L}const D=f.groupBy(S,m,g);if(D!=null&&D===g.group){const L=Ft(g.past,m,g.future,g.group);return Pn("groupBy grouped the action with the previous action"),Le(L),L}return g=rm(g,m,f.limit,D),Pn("inserted new state into history"),Le(g),g}}}function im(i){return`${i.hero} - $${i.cash}`}function um({history:i}){const[c,f]=un.useState(!1),s=un.useRef(null);return un.useEffect(()=>{const d=h=>{s.current&&!s.current.contains(h.target)&&f(!1)};return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[]),_.jsxs("div",{className:"relative",ref:s,children:[_.jsxs("button",{type:"button",onClick:()=>f(d=>!d),className:"flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50",children:["History",_.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:_.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})]}),c&&_.jsx("div",{className:"absolute z-10 mt-2 w-48 max-h-40 overflow-y-auto rounded border border-gray-300 bg-white text-sm shadow-lg",children:i.length>0?_.jsx("ul",{children:i.map((d,h)=>_.jsx("li",{className:"border-b px-3 py-2 last:border-none",children:im(d)},h))}):_.jsx("p",{className:"p-3 text-gray-500",children:"No history"})})]})}function cm(){const i=Ut(),c=Ve(s=>s.input.past),f=Ve(s=>s.input.future);return un.useEffect(()=>{const s=d=>{d.ctrlKey&&d.key.toLowerCase()==="z"&&(d.preventDefault(),d.shiftKey?i(si.redo()):i(si.undo()))};return window.addEventListener("keydown",s),()=>window.removeEventListener("keydown",s)},[i]),_.jsxs("div",{className:"mb-6 flex items-center justify-between gap-4",children:[_.jsxs("div",{className:"flex gap-2",children:[_.jsx("button",{type:"button",disabled:c.length===0,onClick:()=>i(si.undo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400",children:"Undo"}),_.jsx("button",{type:"button",disabled:f.length===0,onClick:()=>i(si.redo()),className:"rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 disabled:bg-gray-400",children:"Redo"})]}),_.jsx(um,{history:c})]})}function sm(){return _.jsx("div",{className:"min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-6 text-gray-800",children:_.jsxs("div",{className:"max-w-5xl mx-auto",children:[_.jsx(cm,{}),_.jsx(Pp,{})]})})}const om=pp({reducer:{input:lm(zp)}});Th.createRoot(document.getElementById("root")).render(_.jsx(un.StrictMode,{children:_.jsx(jh,{store:om,children:_.jsx(sm,{})})}));
