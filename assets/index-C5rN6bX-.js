(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))b(x);new MutationObserver(x=>{for(const B of x)if(B.type==="childList")for(const K of B.addedNodes)K.tagName==="LINK"&&K.rel==="modulepreload"&&b(K)}).observe(document,{childList:!0,subtree:!0});function q(x){const B={};return x.integrity&&(B.integrity=x.integrity),x.referrerPolicy&&(B.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?B.credentials="include":x.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function b(x){if(x.ep)return;x.ep=!0;const B=q(x);fetch(x.href,B)}})();var Fu={exports:{}},Ra={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rb;function L0(){if(rb)return Ra;rb=1;var T=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function q(b,x,B){var K=null;if(B!==void 0&&(K=""+B),x.key!==void 0&&(K=""+x.key),"key"in x){B={};for(var sn in x)sn!=="key"&&(B[sn]=x[sn])}else B=x;return x=B.ref,{$$typeof:T,type:b,key:K,ref:x!==void 0?x:null,props:B}}return Ra.Fragment=w,Ra.jsx=q,Ra.jsxs=q,Ra}var tb;function x0(){return tb||(tb=1,Fu.exports=L0()),Fu.exports}var R=x0(),Pu={exports:{}},X={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ab;function B0(){if(ab)return X;ab=1;var T=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),K=Symbol.for("react.context"),sn=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),tn=Symbol.iterator;function Q(s){return s===null||typeof s!="object"?null:(s=tn&&s[tn]||s["@@iterator"],typeof s=="function"?s:null)}var pn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rn=Object.assign,Mn={};function Un(s,g,_){this.props=s,this.context=g,this.refs=Mn,this.updater=_||pn}Un.prototype.isReactComponent={},Un.prototype.setState=function(s,g){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,g,"setState")},Un.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function kn(){}kn.prototype=Un.prototype;function Zn(s,g,_){this.props=s,this.context=g,this.refs=Mn,this.updater=_||pn}var On=Zn.prototype=new kn;On.constructor=Zn,rn(On,Un.prototype),On.isPureReactComponent=!0;var an=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},nn=Object.prototype.hasOwnProperty;function vn(s,g,_,O,H,Z){return _=Z.ref,{$$typeof:T,type:s,key:g,ref:_!==void 0?_:null,props:Z}}function ln(s,g){return vn(s.type,g,void 0,void 0,void 0,s.props)}function Bn(s){return typeof s=="object"&&s!==null&&s.$$typeof===T}function ke(s){var g={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(_){return g[_]})}var he=/\/+/g;function Yn(s,g){return typeof s=="object"&&s!==null&&s.key!=null?ke(""+s.key):g.toString(36)}function k(){}function dn(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(k,k):(s.status="pending",s.then(function(g){s.status==="pending"&&(s.status="fulfilled",s.value=g)},function(g){s.status==="pending"&&(s.status="rejected",s.reason=g)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function en(s,g,_,O,H){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var z=!1;if(s===null)z=!0;else switch(Z){case"bigint":case"string":case"number":z=!0;break;case"object":switch(s.$$typeof){case T:case w:z=!0;break;case N:return z=s._init,en(z(s._payload),g,_,O,H)}}if(z)return H=H(s),z=O===""?"."+Yn(s,0):O,an(H)?(_="",z!=null&&(_=z.replace(he,"$&/")+"/"),en(H,g,_,"",function(Oe){return Oe})):H!=null&&(Bn(H)&&(H=ln(H,_+(H.key==null||s&&s.key===H.key?"":(""+H.key).replace(he,"$&/")+"/")+z)),g.push(H)),1;z=0;var Fn=O===""?".":O+":";if(an(s))for(var Sn=0;Sn<s.length;Sn++)O=s[Sn],Z=Fn+Yn(O,Sn),z+=en(O,g,_,Z,H);else if(Sn=Q(s),typeof Sn=="function")for(s=Sn.call(s),Sn=0;!(O=s.next()).done;)O=O.value,Z=Fn+Yn(O,Sn++),z+=en(O,g,_,Z,H);else if(Z==="object"){if(typeof s.then=="function")return en(dn(s),g,_,O,H);throw g=String(s),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.")}return z}function p(s,g,_){if(s==null)return s;var O=[],H=0;return en(s,O,"","",function(Z){return g.call(_,Z,H++)}),O}function D(s){if(s._status===-1){var g=s._result;g=g(),g.then(function(_){(s._status===0||s._status===-1)&&(s._status=1,s._result=_)},function(_){(s._status===0||s._status===-1)&&(s._status=2,s._result=_)}),s._status===-1&&(s._status=0,s._result=g)}if(s._status===1)return s._result.default;throw s._result}var L=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var g=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(g))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function F(){}return X.Children={map:p,forEach:function(s,g,_){p(s,function(){g.apply(this,arguments)},_)},count:function(s){var g=0;return p(s,function(){g++}),g},toArray:function(s){return p(s,function(g){return g})||[]},only:function(s){if(!Bn(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},X.Component=Un,X.Fragment=q,X.Profiler=x,X.PureComponent=Zn,X.StrictMode=b,X.Suspense=M,X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,X.__COMPILER_RUNTIME={__proto__:null,c:function(s){return V.H.useMemoCache(s)}},X.cache=function(s){return function(){return s.apply(null,arguments)}},X.cloneElement=function(s,g,_){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var O=rn({},s.props),H=s.key,Z=void 0;if(g!=null)for(z in g.ref!==void 0&&(Z=void 0),g.key!==void 0&&(H=""+g.key),g)!nn.call(g,z)||z==="key"||z==="__self"||z==="__source"||z==="ref"&&g.ref===void 0||(O[z]=g[z]);var z=arguments.length-2;if(z===1)O.children=_;else if(1<z){for(var Fn=Array(z),Sn=0;Sn<z;Sn++)Fn[Sn]=arguments[Sn+2];O.children=Fn}return vn(s.type,H,void 0,void 0,Z,O)},X.createContext=function(s){return s={$$typeof:K,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:B,_context:s},s},X.createElement=function(s,g,_){var O,H={},Z=null;if(g!=null)for(O in g.key!==void 0&&(Z=""+g.key),g)nn.call(g,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(H[O]=g[O]);var z=arguments.length-2;if(z===1)H.children=_;else if(1<z){for(var Fn=Array(z),Sn=0;Sn<z;Sn++)Fn[Sn]=arguments[Sn+2];H.children=Fn}if(s&&s.defaultProps)for(O in z=s.defaultProps,z)H[O]===void 0&&(H[O]=z[O]);return vn(s,Z,void 0,void 0,null,H)},X.createRef=function(){return{current:null}},X.forwardRef=function(s){return{$$typeof:sn,render:s}},X.isValidElement=Bn,X.lazy=function(s){return{$$typeof:N,_payload:{_status:-1,_result:s},_init:D}},X.memo=function(s,g){return{$$typeof:E,type:s,compare:g===void 0?null:g}},X.startTransition=function(s){var g=V.T,_={};V.T=_;try{var O=s(),H=V.S;H!==null&&H(_,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(F,L)}catch(Z){L(Z)}finally{V.T=g}},X.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},X.use=function(s){return V.H.use(s)},X.useActionState=function(s,g,_){return V.H.useActionState(s,g,_)},X.useCallback=function(s,g){return V.H.useCallback(s,g)},X.useContext=function(s){return V.H.useContext(s)},X.useDebugValue=function(){},X.useDeferredValue=function(s,g){return V.H.useDeferredValue(s,g)},X.useEffect=function(s,g,_){var O=V.H;if(typeof _=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return O.useEffect(s,g)},X.useId=function(){return V.H.useId()},X.useImperativeHandle=function(s,g,_){return V.H.useImperativeHandle(s,g,_)},X.useInsertionEffect=function(s,g){return V.H.useInsertionEffect(s,g)},X.useLayoutEffect=function(s,g){return V.H.useLayoutEffect(s,g)},X.useMemo=function(s,g){return V.H.useMemo(s,g)},X.useOptimistic=function(s,g){return V.H.useOptimistic(s,g)},X.useReducer=function(s,g,_){return V.H.useReducer(s,g,_)},X.useRef=function(s){return V.H.useRef(s)},X.useState=function(s){return V.H.useState(s)},X.useSyncExternalStore=function(s,g,_){return V.H.useSyncExternalStore(s,g,_)},X.useTransition=function(){return V.H.useTransition()},X.version="19.1.0",X}var lb;function ic(){return lb||(lb=1,Pu.exports=B0()),Pu.exports}var Tn=ic(),$u={exports:{}},Ta={},nc={exports:{}},ec={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ib;function z0(){return ib||(ib=1,function(T){function w(p,D){var L=p.length;p.push(D);n:for(;0<L;){var F=L-1>>>1,s=p[F];if(0<x(s,D))p[F]=D,p[L]=s,L=F;else break n}}function q(p){return p.length===0?null:p[0]}function b(p){if(p.length===0)return null;var D=p[0],L=p.pop();if(L!==D){p[0]=L;n:for(var F=0,s=p.length,g=s>>>1;F<g;){var _=2*(F+1)-1,O=p[_],H=_+1,Z=p[H];if(0>x(O,L))H<s&&0>x(Z,O)?(p[F]=Z,p[H]=L,F=H):(p[F]=O,p[_]=L,F=_);else if(H<s&&0>x(Z,L))p[F]=Z,p[H]=L,F=H;else break n}}return D}function x(p,D){var L=p.sortIndex-D.sortIndex;return L!==0?L:p.id-D.id}if(T.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var B=performance;T.unstable_now=function(){return B.now()}}else{var K=Date,sn=K.now();T.unstable_now=function(){return K.now()-sn}}var M=[],E=[],N=1,tn=null,Q=3,pn=!1,rn=!1,Mn=!1,Un=!1,kn=typeof setTimeout=="function"?setTimeout:null,Zn=typeof clearTimeout=="function"?clearTimeout:null,On=typeof setImmediate<"u"?setImmediate:null;function an(p){for(var D=q(E);D!==null;){if(D.callback===null)b(E);else if(D.startTime<=p)b(E),D.sortIndex=D.expirationTime,w(M,D);else break;D=q(E)}}function V(p){if(Mn=!1,an(p),!rn)if(q(M)!==null)rn=!0,nn||(nn=!0,Yn());else{var D=q(E);D!==null&&en(V,D.startTime-p)}}var nn=!1,vn=-1,ln=5,Bn=-1;function ke(){return Un?!0:!(T.unstable_now()-Bn<ln)}function he(){if(Un=!1,nn){var p=T.unstable_now();Bn=p;var D=!0;try{n:{rn=!1,Mn&&(Mn=!1,Zn(vn),vn=-1),pn=!0;var L=Q;try{e:{for(an(p),tn=q(M);tn!==null&&!(tn.expirationTime>p&&ke());){var F=tn.callback;if(typeof F=="function"){tn.callback=null,Q=tn.priorityLevel;var s=F(tn.expirationTime<=p);if(p=T.unstable_now(),typeof s=="function"){tn.callback=s,an(p),D=!0;break e}tn===q(M)&&b(M),an(p)}else b(M);tn=q(M)}if(tn!==null)D=!0;else{var g=q(E);g!==null&&en(V,g.startTime-p),D=!1}}break n}finally{tn=null,Q=L,pn=!1}D=void 0}}finally{D?Yn():nn=!1}}}var Yn;if(typeof On=="function")Yn=function(){On(he)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,dn=k.port2;k.port1.onmessage=he,Yn=function(){dn.postMessage(null)}}else Yn=function(){kn(he,0)};function en(p,D){vn=kn(function(){p(T.unstable_now())},D)}T.unstable_IdlePriority=5,T.unstable_ImmediatePriority=1,T.unstable_LowPriority=4,T.unstable_NormalPriority=3,T.unstable_Profiling=null,T.unstable_UserBlockingPriority=2,T.unstable_cancelCallback=function(p){p.callback=null},T.unstable_forceFrameRate=function(p){0>p||125<p?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ln=0<p?Math.floor(1e3/p):5},T.unstable_getCurrentPriorityLevel=function(){return Q},T.unstable_next=function(p){switch(Q){case 1:case 2:case 3:var D=3;break;default:D=Q}var L=Q;Q=D;try{return p()}finally{Q=L}},T.unstable_requestPaint=function(){Un=!0},T.unstable_runWithPriority=function(p,D){switch(p){case 1:case 2:case 3:case 4:case 5:break;default:p=3}var L=Q;Q=p;try{return D()}finally{Q=L}},T.unstable_scheduleCallback=function(p,D,L){var F=T.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?F+L:F):L=F,p){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=L+s,p={id:N++,callback:D,priorityLevel:p,startTime:L,expirationTime:s,sortIndex:-1},L>F?(p.sortIndex=L,w(E,p),q(M)===null&&p===q(E)&&(Mn?(Zn(vn),vn=-1):Mn=!0,en(V,L-F))):(p.sortIndex=s,w(M,p),rn||pn||(rn=!0,nn||(nn=!0,Yn()))),p},T.unstable_shouldYield=ke,T.unstable_wrapCallback=function(p){var D=Q;return function(){var L=Q;Q=D;try{return p.apply(this,arguments)}finally{Q=L}}}}(ec)),ec}var ub;function G0(){return ub||(ub=1,nc.exports=z0()),nc.exports}var rc={exports:{}},Jn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb;function Y0(){if(cb)return Jn;cb=1;var T=ic();function w(M){var E="https://react.dev/errors/"+M;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var N=2;N<arguments.length;N++)E+="&args[]="+encodeURIComponent(arguments[N])}return"Minified React error #"+M+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function q(){}var b={d:{f:q,r:function(){throw Error(w(522))},D:q,C:q,L:q,m:q,X:q,S:q,M:q},p:0,findDOMNode:null},x=Symbol.for("react.portal");function B(M,E,N){var tn=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:x,key:tn==null?null:""+tn,children:M,containerInfo:E,implementation:N}}var K=T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function sn(M,E){if(M==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Jn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=b,Jn.createPortal=function(M,E){var N=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(w(299));return B(M,E,null,N)},Jn.flushSync=function(M){var E=K.T,N=b.p;try{if(K.T=null,b.p=2,M)return M()}finally{K.T=E,b.p=N,b.d.f()}},Jn.preconnect=function(M,E){typeof M=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,b.d.C(M,E))},Jn.prefetchDNS=function(M){typeof M=="string"&&b.d.D(M)},Jn.preinit=function(M,E){if(typeof M=="string"&&E&&typeof E.as=="string"){var N=E.as,tn=sn(N,E.crossOrigin),Q=typeof E.integrity=="string"?E.integrity:void 0,pn=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;N==="style"?b.d.S(M,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:tn,integrity:Q,fetchPriority:pn}):N==="script"&&b.d.X(M,{crossOrigin:tn,integrity:Q,fetchPriority:pn,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Jn.preinitModule=function(M,E){if(typeof M=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var N=sn(E.as,E.crossOrigin);b.d.M(M,{crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&b.d.M(M)},Jn.preload=function(M,E){if(typeof M=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var N=E.as,tn=sn(N,E.crossOrigin);b.d.L(M,N,{crossOrigin:tn,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Jn.preloadModule=function(M,E){if(typeof M=="string")if(E){var N=sn(E.as,E.crossOrigin);b.d.m(M,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:N,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else b.d.m(M)},Jn.requestFormReset=function(M){b.d.r(M)},Jn.unstable_batchedUpdates=function(M,E){return M(E)},Jn.useFormState=function(M,E,N){return K.H.useFormState(M,E,N)},Jn.useFormStatus=function(){return K.H.useHostTransitionStatus()},Jn.version="19.1.0",Jn}var sb;function j0(){if(sb)return rc.exports;sb=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(w){console.error(w)}}return T(),rc.exports=Y0(),rc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ob;function w0(){if(ob)return Ta;ob=1;var T=G0(),w=ic(),q=j0();function b(n){var e="https://react.dev/errors/"+n;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)e+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function B(n){var e=n,r=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,(e.flags&4098)!==0&&(r=e.return),n=e.return;while(n)}return e.tag===3?r:null}function K(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function sn(n){if(B(n)!==n)throw Error(b(188))}function M(n){var e=n.alternate;if(!e){if(e=B(n),e===null)throw Error(b(188));return e!==n?null:n}for(var r=n,t=e;;){var a=r.return;if(a===null)break;var l=a.alternate;if(l===null){if(t=a.return,t!==null){r=t;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===r)return sn(a),n;if(l===t)return sn(a),e;l=l.sibling}throw Error(b(188))}if(r.return!==t.return)r=a,t=l;else{for(var i=!1,u=a.child;u;){if(u===r){i=!0,r=a,t=l;break}if(u===t){i=!0,t=a,r=l;break}u=u.sibling}if(!i){for(u=l.child;u;){if(u===r){i=!0,r=l,t=a;break}if(u===t){i=!0,t=l,r=a;break}u=u.sibling}if(!i)throw Error(b(189))}}if(r.alternate!==t)throw Error(b(190))}if(r.tag!==3)throw Error(b(188));return r.stateNode.current===r?n:e}function E(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n;for(n=n.child;n!==null;){if(e=E(n),e!==null)return e;n=n.sibling}return null}var N=Object.assign,tn=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),pn=Symbol.for("react.portal"),rn=Symbol.for("react.fragment"),Mn=Symbol.for("react.strict_mode"),Un=Symbol.for("react.profiler"),kn=Symbol.for("react.provider"),Zn=Symbol.for("react.consumer"),On=Symbol.for("react.context"),an=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),nn=Symbol.for("react.suspense_list"),vn=Symbol.for("react.memo"),ln=Symbol.for("react.lazy"),Bn=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),he=Symbol.iterator;function Yn(n){return n===null||typeof n!="object"?null:(n=he&&n[he]||n["@@iterator"],typeof n=="function"?n:null)}var k=Symbol.for("react.client.reference");function dn(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===k?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case rn:return"Fragment";case Un:return"Profiler";case Mn:return"StrictMode";case V:return"Suspense";case nn:return"SuspenseList";case Bn:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case pn:return"Portal";case On:return(n.displayName||"Context")+".Provider";case Zn:return(n._context.displayName||"Context")+".Consumer";case an:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case vn:return e=n.displayName||null,e!==null?e:dn(n.type)||"Memo";case ln:e=n._payload,n=n._init;try{return dn(n(e))}catch{}}return null}var en=Array.isArray,p=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D=q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},F=[],s=-1;function g(n){return{current:n}}function _(n){0>s||(n.current=F[s],F[s]=null,s--)}function O(n,e){s++,F[s]=n.current,n.current=e}var H=g(null),Z=g(null),z=g(null),Fn=g(null);function Sn(n,e){switch(O(z,e),O(Z,n),O(H,null),e.nodeType){case 9:case 11:n=(n=e.documentElement)&&(n=n.namespaceURI)?Cf(n):0;break;default:if(n=e.tagName,e=e.namespaceURI)e=Cf(e),n=Hf(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}_(H),O(H,n)}function Oe(){_(H),_(Z),_(z)}function Ot(n){n.memoizedState!==null&&O(Fn,n);var e=H.current,r=Hf(e,n.type);e!==r&&(O(Z,n),O(H,r))}function W(n){Z.current===n&&(_(H),_(Z)),Fn.current===n&&(_(Fn),va._currentValue=L)}var En=Object.prototype.hasOwnProperty,_e=T.unstable_scheduleCallback,ye=T.unstable_cancelCallback,jl=T.unstable_shouldYield,uc=T.unstable_requestPaint,Pn=T.unstable_now,jr=T.unstable_getCurrentPriorityLevel,cc=T.unstable_ImmediatePriority,sc=T.unstable_UserBlockingPriority,Oa=T.unstable_NormalPriority,hb=T.unstable_LowPriority,oc=T.unstable_IdlePriority,yb=T.log,mb=T.unstable_setDisableYieldValue,_t=null,le=null;function Fe(n){if(typeof yb=="function"&&mb(n),le&&typeof le.setStrictMode=="function")try{le.setStrictMode(_t,n)}catch{}}var ie=Math.clz32?Math.clz32:gb,pb=Math.log,vb=Math.LN2;function gb(n){return n>>>=0,n===0?32:31-(pb(n)/vb|0)|0}var _a=256,Da=4194304;function Ar(n){var e=n&42;if(e!==0)return e;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Na(n,e,r){var t=n.pendingLanes;if(t===0)return 0;var a=0,l=n.suspendedLanes,i=n.pingedLanes;n=n.warmLanes;var u=t&134217727;return u!==0?(t=u&~l,t!==0?a=Ar(t):(i&=u,i!==0?a=Ar(i):r||(r=u&~n,r!==0&&(a=Ar(r))))):(u=t&~l,u!==0?a=Ar(u):i!==0?a=Ar(i):r||(r=t&~n,r!==0&&(a=Ar(r)))),a===0?0:e!==0&&e!==a&&(e&l)===0&&(l=a&-a,r=e&-e,l>=r||l===32&&(r&4194048)!==0)?e:a}function Dt(n,e){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&e)===0}function Sb(n,e){switch(n){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fc(){var n=_a;return _a<<=1,(_a&4194048)===0&&(_a=256),n}function bc(){var n=Da;return Da<<=1,(Da&62914560)===0&&(Da=4194304),n}function wl(n){for(var e=[],r=0;31>r;r++)e.push(n);return e}function Nt(n,e){n.pendingLanes|=e,e!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function Ab(n,e,r,t,a,l){var i=n.pendingLanes;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=r,n.entangledLanes&=r,n.errorRecoveryDisabledLanes&=r,n.shellSuspendCounter=0;var u=n.entanglements,c=n.expirationTimes,h=n.hiddenUpdates;for(r=i&~r;0<r;){var v=31-ie(r),A=1<<v;u[v]=0,c[v]=-1;var y=h[v];if(y!==null)for(h[v]=null,v=0;v<y.length;v++){var m=y[v];m!==null&&(m.lane&=-536870913)}r&=~A}t!==0&&dc(n,t,0),l!==0&&a===0&&n.tag!==0&&(n.suspendedLanes|=l&~(i&~e))}function dc(n,e,r){n.pendingLanes|=e,n.suspendedLanes&=~e;var t=31-ie(e);n.entangledLanes|=e,n.entanglements[t]=n.entanglements[t]|1073741824|r&4194090}function hc(n,e){var r=n.entangledLanes|=e;for(n=n.entanglements;r;){var t=31-ie(r),a=1<<t;a&e|n[t]&e&&(n[t]|=e),r&=~a}}function ql(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Vl(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function yc(){var n=D.p;return n!==0?n:(n=window.event,n===void 0?32:kf(n.type))}function Eb(n,e){var r=D.p;try{return D.p=n,e()}finally{D.p=r}}var Pe=Math.random().toString(36).slice(2),Wn="__reactFiber$"+Pe,ne="__reactProps$"+Pe,wr="__reactContainer$"+Pe,Ql="__reactEvents$"+Pe,Rb="__reactListeners$"+Pe,Tb="__reactHandles$"+Pe,mc="__reactResources$"+Pe,Mt="__reactMarker$"+Pe;function Kl(n){delete n[Wn],delete n[ne],delete n[Ql],delete n[Rb],delete n[Tb]}function qr(n){var e=n[Wn];if(e)return e;for(var r=n.parentNode;r;){if(e=r[wr]||r[Wn]){if(r=e.alternate,e.child!==null||r!==null&&r.child!==null)for(n=Bf(n);n!==null;){if(r=n[Wn])return r;n=Bf(n)}return e}n=r,r=n.parentNode}return null}function Vr(n){if(n=n[Wn]||n[wr]){var e=n.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return n}return null}function Ct(n){var e=n.tag;if(e===5||e===26||e===27||e===6)return n.stateNode;throw Error(b(33))}function Qr(n){var e=n[mc];return e||(e=n[mc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function jn(n){n[Mt]=!0}var pc=new Set,vc={};function Er(n,e){Kr(n,e),Kr(n+"Capture",e)}function Kr(n,e){for(vc[n]=e,n=0;n<e.length;n++)pc.add(e[n])}var Ob=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},Sc={};function _b(n){return En.call(Sc,n)?!0:En.call(gc,n)?!1:Ob.test(n)?Sc[n]=!0:(gc[n]=!0,!1)}function Ma(n,e,r){if(_b(e))if(r===null)n.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":n.removeAttribute(e);return;case"boolean":var t=e.toLowerCase().slice(0,5);if(t!=="data-"&&t!=="aria-"){n.removeAttribute(e);return}}n.setAttribute(e,""+r)}}function Ca(n,e,r){if(r===null)n.removeAttribute(e);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(e);return}n.setAttribute(e,""+r)}}function Be(n,e,r,t){if(t===null)n.removeAttribute(r);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttributeNS(e,r,""+t)}}var Xl,Ac;function Xr(n){if(Xl===void 0)try{throw Error()}catch(r){var e=r.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||"",Ac=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xl+n+Ac}var Zl=!1;function Wl(n,e){if(!n||Zl)return"";Zl=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var t={DetermineComponentFrameRoot:function(){try{if(e){var A=function(){throw Error()};if(Object.defineProperty(A.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(A,[])}catch(m){var y=m}Reflect.construct(n,[],A)}else{try{A.call()}catch(m){y=m}n.call(A.prototype)}}else{try{throw Error()}catch(m){y=m}(A=n())&&typeof A.catch=="function"&&A.catch(function(){})}}catch(m){if(m&&y&&typeof m.stack=="string")return[m.stack,y.stack]}return[null,null]}};t.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(t.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(t.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=t.DetermineComponentFrameRoot(),i=l[0],u=l[1];if(i&&u){var c=i.split(`
`),h=u.split(`
`);for(a=t=0;t<c.length&&!c[t].includes("DetermineComponentFrameRoot");)t++;for(;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;if(t===c.length||a===h.length)for(t=c.length-1,a=h.length-1;1<=t&&0<=a&&c[t]!==h[a];)a--;for(;1<=t&&0<=a;t--,a--)if(c[t]!==h[a]){if(t!==1||a!==1)do if(t--,a--,0>a||c[t]!==h[a]){var v=`
`+c[t].replace(" at new "," at ");return n.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",n.displayName)),v}while(1<=t&&0<=a);break}}}finally{Zl=!1,Error.prepareStackTrace=r}return(r=n?n.displayName||n.name:"")?Xr(r):""}function Db(n){switch(n.tag){case 26:case 27:case 5:return Xr(n.type);case 16:return Xr("Lazy");case 13:return Xr("Suspense");case 19:return Xr("SuspenseList");case 0:case 15:return Wl(n.type,!1);case 11:return Wl(n.type.render,!1);case 1:return Wl(n.type,!0);case 31:return Xr("Activity");default:return""}}function Ec(n){try{var e="";do e+=Db(n),n=n.return;while(n);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}function me(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Rc(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Nb(n){var e=Rc(n)?"checked":"value",r=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),t=""+n[e];if(!n.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,l=r.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return a.call(this)},set:function(i){t=""+i,l.call(this,i)}}),Object.defineProperty(n,e,{enumerable:r.enumerable}),{getValue:function(){return t},setValue:function(i){t=""+i},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Ha(n){n._valueTracker||(n._valueTracker=Nb(n))}function Tc(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var r=e.getValue(),t="";return n&&(t=Rc(n)?n.checked?"true":"false":n.value),n=t,n!==r?(e.setValue(n),!0):!1}function Ua(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Mb=/[\n"\\]/g;function pe(n){return n.replace(Mb,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Il(n,e,r,t,a,l,i,u){n.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?n.type=i:n.removeAttribute("type"),e!=null?i==="number"?(e===0&&n.value===""||n.value!=e)&&(n.value=""+me(e)):n.value!==""+me(e)&&(n.value=""+me(e)):i!=="submit"&&i!=="reset"||n.removeAttribute("value"),e!=null?Jl(n,i,me(e)):r!=null?Jl(n,i,me(r)):t!=null&&n.removeAttribute("value"),a==null&&l!=null&&(n.defaultChecked=!!l),a!=null&&(n.checked=a&&typeof a!="function"&&typeof a!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+me(u):n.removeAttribute("name")}function Oc(n,e,r,t,a,l,i,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(n.type=l),e!=null||r!=null){if(!(l!=="submit"&&l!=="reset"||e!=null))return;r=r!=null?""+me(r):"",e=e!=null?""+me(e):r,u||e===n.value||(n.value=e),n.defaultValue=e}t=t??a,t=typeof t!="function"&&typeof t!="symbol"&&!!t,n.checked=u?n.checked:!!t,n.defaultChecked=!!t,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.name=i)}function Jl(n,e,r){e==="number"&&Ua(n.ownerDocument)===n||n.defaultValue===""+r||(n.defaultValue=""+r)}function Zr(n,e,r,t){if(n=n.options,e){e={};for(var a=0;a<r.length;a++)e["$"+r[a]]=!0;for(r=0;r<n.length;r++)a=e.hasOwnProperty("$"+n[r].value),n[r].selected!==a&&(n[r].selected=a),a&&t&&(n[r].defaultSelected=!0)}else{for(r=""+me(r),e=null,a=0;a<n.length;a++){if(n[a].value===r){n[a].selected=!0,t&&(n[a].defaultSelected=!0);return}e!==null||n[a].disabled||(e=n[a])}e!==null&&(e.selected=!0)}}function _c(n,e,r){if(e!=null&&(e=""+me(e),e!==n.value&&(n.value=e),r==null)){n.defaultValue!==e&&(n.defaultValue=e);return}n.defaultValue=r!=null?""+me(r):""}function Dc(n,e,r,t){if(e==null){if(t!=null){if(r!=null)throw Error(b(92));if(en(t)){if(1<t.length)throw Error(b(93));t=t[0]}r=t}r==null&&(r=""),e=r}r=me(e),n.defaultValue=r,t=n.textContent,t===r&&t!==""&&t!==null&&(n.value=t)}function Wr(n,e){if(e){var r=n.firstChild;if(r&&r===n.lastChild&&r.nodeType===3){r.nodeValue=e;return}}n.textContent=e}var Cb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nc(n,e,r){var t=e.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?t?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="":t?n.setProperty(e,r):typeof r!="number"||r===0||Cb.has(e)?e==="float"?n.cssFloat=r:n[e]=(""+r).trim():n[e]=r+"px"}function Mc(n,e,r){if(e!=null&&typeof e!="object")throw Error(b(62));if(n=n.style,r!=null){for(var t in r)!r.hasOwnProperty(t)||e!=null&&e.hasOwnProperty(t)||(t.indexOf("--")===0?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="");for(var a in e)t=e[a],e.hasOwnProperty(a)&&r[a]!==t&&Nc(n,a,t)}else for(var l in e)e.hasOwnProperty(l)&&Nc(n,l,e[l])}function kl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ub=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function La(n){return Ub.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Fl=null;function Pl(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ir=null,Jr=null;function Cc(n){var e=Vr(n);if(e&&(n=e.stateNode)){var r=n[ne]||null;n:switch(n=e.stateNode,e.type){case"input":if(Il(n,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),e=r.name,r.type==="radio"&&e!=null){for(r=n;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+pe(""+e)+'"][type="radio"]'),e=0;e<r.length;e++){var t=r[e];if(t!==n&&t.form===n.form){var a=t[ne]||null;if(!a)throw Error(b(90));Il(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(e=0;e<r.length;e++)t=r[e],t.form===n.form&&Tc(t)}break n;case"textarea":_c(n,r.value,r.defaultValue);break n;case"select":e=r.value,e!=null&&Zr(n,!!r.multiple,e,!1)}}}var $l=!1;function Hc(n,e,r){if($l)return n(e,r);$l=!0;try{var t=n(e);return t}finally{if($l=!1,(Ir!==null||Jr!==null)&&(vl(),Ir&&(e=Ir,n=Jr,Jr=Ir=null,Cc(e),n)))for(e=0;e<n.length;e++)Cc(n[e])}}function Ht(n,e){var r=n.stateNode;if(r===null)return null;var t=r[ne]||null;if(t===null)return null;r=t[e];n:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(n=n.type,t=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!t;break n;default:n=!1}if(n)return null;if(r&&typeof r!="function")throw Error(b(231,e,typeof r));return r}var ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ni=!1;if(ze)try{var Ut={};Object.defineProperty(Ut,"passive",{get:function(){ni=!0}}),window.addEventListener("test",Ut,Ut),window.removeEventListener("test",Ut,Ut)}catch{ni=!1}var $e=null,ei=null,xa=null;function Uc(){if(xa)return xa;var n,e=ei,r=e.length,t,a="value"in $e?$e.value:$e.textContent,l=a.length;for(n=0;n<r&&e[n]===a[n];n++);var i=r-n;for(t=1;t<=i&&e[r-t]===a[l-t];t++);return xa=a.slice(n,1<t?1-t:void 0)}function Ba(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function za(){return!0}function Lc(){return!1}function ee(n){function e(r,t,a,l,i){this._reactName=r,this._targetInst=a,this.type=t,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(r=n[u],this[u]=r?r(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?za:Lc,this.isPropagationStopped=Lc,this}return N(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=za)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=za)},persist:function(){},isPersistent:za}),e}var Rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=ee(Rr),Lt=N({},Rr,{view:0,detail:0}),Lb=ee(Lt),ri,ti,xt,Ya=N({},Lt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xt&&(xt&&n.type==="mousemove"?(ri=n.screenX-xt.screenX,ti=n.screenY-xt.screenY):ti=ri=0,xt=n),ri)},movementY:function(n){return"movementY"in n?n.movementY:ti}}),xc=ee(Ya),xb=N({},Ya,{dataTransfer:0}),Bb=ee(xb),zb=N({},Lt,{relatedTarget:0}),ai=ee(zb),Gb=N({},Rr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yb=ee(Gb),jb=N({},Rr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),wb=ee(jb),qb=N({},Rr,{data:0}),Bc=ee(qb),Vb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xb(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Kb[n])?!!e[n]:!1}function li(){return Xb}var Zb=N({},Lt,{key:function(n){if(n.key){var e=Vb[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Ba(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Qb[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(n){return n.type==="keypress"?Ba(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ba(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wb=ee(Zb),Ib=N({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zc=ee(Ib),Jb=N({},Lt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),kb=ee(Jb),Fb=N({},Rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pb=ee(Fb),$b=N({},Ya,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),nd=ee($b),ed=N({},Rr,{newState:0,oldState:0}),rd=ee(ed),td=[9,13,27,32],ii=ze&&"CompositionEvent"in window,Bt=null;ze&&"documentMode"in document&&(Bt=document.documentMode);var ad=ze&&"TextEvent"in window&&!Bt,Gc=ze&&(!ii||Bt&&8<Bt&&11>=Bt),Yc=" ",jc=!1;function wc(n,e){switch(n){case"keyup":return td.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qc(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var kr=!1;function ld(n,e){switch(n){case"compositionend":return qc(e);case"keypress":return e.which!==32?null:(jc=!0,Yc);case"textInput":return n=e.data,n===Yc&&jc?null:n;default:return null}}function id(n,e){if(kr)return n==="compositionend"||!ii&&wc(n,e)?(n=Uc(),xa=ei=$e=null,kr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gc&&e.locale!=="ko"?null:e.data;default:return null}}var ud={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ud[n.type]:e==="textarea"}function Qc(n,e,r,t){Ir?Jr?Jr.push(t):Jr=[t]:Ir=t,e=Tl(e,"onChange"),0<e.length&&(r=new Ga("onChange","change",null,r,t),n.push({event:r,listeners:e}))}var zt=null,Gt=null;function cd(n){Of(n,0)}function ja(n){var e=Ct(n);if(Tc(e))return n}function Kc(n,e){if(n==="change")return e}var Xc=!1;if(ze){var ui;if(ze){var ci="oninput"in document;if(!ci){var Zc=document.createElement("div");Zc.setAttribute("oninput","return;"),ci=typeof Zc.oninput=="function"}ui=ci}else ui=!1;Xc=ui&&(!document.documentMode||9<document.documentMode)}function Wc(){zt&&(zt.detachEvent("onpropertychange",Ic),Gt=zt=null)}function Ic(n){if(n.propertyName==="value"&&ja(Gt)){var e=[];Qc(e,Gt,n,Pl(n)),Hc(cd,e)}}function sd(n,e,r){n==="focusin"?(Wc(),zt=e,Gt=r,zt.attachEvent("onpropertychange",Ic)):n==="focusout"&&Wc()}function od(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ja(Gt)}function fd(n,e){if(n==="click")return ja(e)}function bd(n,e){if(n==="input"||n==="change")return ja(e)}function dd(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ue=typeof Object.is=="function"?Object.is:dd;function Yt(n,e){if(ue(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var r=Object.keys(n),t=Object.keys(e);if(r.length!==t.length)return!1;for(t=0;t<r.length;t++){var a=r[t];if(!En.call(e,a)||!ue(n[a],e[a]))return!1}return!0}function Jc(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kc(n,e){var r=Jc(n);n=0;for(var t;r;){if(r.nodeType===3){if(t=n+r.textContent.length,n<=e&&t>=e)return{node:r,offset:e-n};n=t}n:{for(;r;){if(r.nextSibling){r=r.nextSibling;break n}r=r.parentNode}r=void 0}r=Jc(r)}}function Fc(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Fc(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Pc(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var e=Ua(n.document);e instanceof n.HTMLIFrameElement;){try{var r=typeof e.contentWindow.location.href=="string"}catch{r=!1}if(r)n=e.contentWindow;else break;e=Ua(n.document)}return e}function si(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}var hd=ze&&"documentMode"in document&&11>=document.documentMode,Fr=null,oi=null,jt=null,fi=!1;function $c(n,e,r){var t=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;fi||Fr==null||Fr!==Ua(t)||(t=Fr,"selectionStart"in t&&si(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),jt&&Yt(jt,t)||(jt=t,t=Tl(oi,"onSelect"),0<t.length&&(e=new Ga("onSelect","select",null,e,r),n.push({event:e,listeners:t}),e.target=Fr)))}function Tr(n,e){var r={};return r[n.toLowerCase()]=e.toLowerCase(),r["Webkit"+n]="webkit"+e,r["Moz"+n]="moz"+e,r}var Pr={animationend:Tr("Animation","AnimationEnd"),animationiteration:Tr("Animation","AnimationIteration"),animationstart:Tr("Animation","AnimationStart"),transitionrun:Tr("Transition","TransitionRun"),transitionstart:Tr("Transition","TransitionStart"),transitioncancel:Tr("Transition","TransitionCancel"),transitionend:Tr("Transition","TransitionEnd")},bi={},ns={};ze&&(ns=document.createElement("div").style,"AnimationEvent"in window||(delete Pr.animationend.animation,delete Pr.animationiteration.animation,delete Pr.animationstart.animation),"TransitionEvent"in window||delete Pr.transitionend.transition);function Or(n){if(bi[n])return bi[n];if(!Pr[n])return n;var e=Pr[n],r;for(r in e)if(e.hasOwnProperty(r)&&r in ns)return bi[n]=e[r];return n}var es=Or("animationend"),rs=Or("animationiteration"),ts=Or("animationstart"),yd=Or("transitionrun"),md=Or("transitionstart"),pd=Or("transitioncancel"),as=Or("transitionend"),ls=new Map,di="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");di.push("scrollEnd");function De(n,e){ls.set(n,e),Er(e,[n])}var is=new WeakMap;function ve(n,e){if(typeof n=="object"&&n!==null){var r=is.get(n);return r!==void 0?r:(e={value:n,source:e,stack:Ec(e)},is.set(n,e),e)}return{value:n,source:e,stack:Ec(e)}}var ge=[],$r=0,hi=0;function wa(){for(var n=$r,e=hi=$r=0;e<n;){var r=ge[e];ge[e++]=null;var t=ge[e];ge[e++]=null;var a=ge[e];ge[e++]=null;var l=ge[e];if(ge[e++]=null,t!==null&&a!==null){var i=t.pending;i===null?a.next=a:(a.next=i.next,i.next=a),t.pending=a}l!==0&&us(r,a,l)}}function qa(n,e,r,t){ge[$r++]=n,ge[$r++]=e,ge[$r++]=r,ge[$r++]=t,hi|=t,n.lanes|=t,n=n.alternate,n!==null&&(n.lanes|=t)}function yi(n,e,r,t){return qa(n,e,r,t),Va(n)}function nt(n,e){return qa(n,null,null,e),Va(n)}function us(n,e,r){n.lanes|=r;var t=n.alternate;t!==null&&(t.lanes|=r);for(var a=!1,l=n.return;l!==null;)l.childLanes|=r,t=l.alternate,t!==null&&(t.childLanes|=r),l.tag===22&&(n=l.stateNode,n===null||n._visibility&1||(a=!0)),n=l,l=l.return;return n.tag===3?(l=n.stateNode,a&&e!==null&&(a=31-ie(r),n=l.hiddenUpdates,t=n[a],t===null?n[a]=[e]:t.push(e),e.lane=r|536870912),l):null}function Va(n){if(50<oa)throw oa=0,Au=null,Error(b(185));for(var e=n.return;e!==null;)n=e,e=n.return;return n.tag===3?n.stateNode:null}var et={};function vd(n,e,r,t){this.tag=n,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ce(n,e,r,t){return new vd(n,e,r,t)}function mi(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ge(n,e){var r=n.alternate;return r===null?(r=ce(n.tag,e,n.key,n.mode),r.elementType=n.elementType,r.type=n.type,r.stateNode=n.stateNode,r.alternate=n,n.alternate=r):(r.pendingProps=e,r.type=n.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=n.flags&65011712,r.childLanes=n.childLanes,r.lanes=n.lanes,r.child=n.child,r.memoizedProps=n.memoizedProps,r.memoizedState=n.memoizedState,r.updateQueue=n.updateQueue,e=n.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},r.sibling=n.sibling,r.index=n.index,r.ref=n.ref,r.refCleanup=n.refCleanup,r}function cs(n,e){n.flags&=65011714;var r=n.alternate;return r===null?(n.childLanes=0,n.lanes=e,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=r.childLanes,n.lanes=r.lanes,n.child=r.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=r.memoizedProps,n.memoizedState=r.memoizedState,n.updateQueue=r.updateQueue,n.type=r.type,e=r.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n}function Qa(n,e,r,t,a,l){var i=0;if(t=n,typeof n=="function")mi(n)&&(i=1);else if(typeof n=="string")i=S0(n,r,H.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(n){case Bn:return n=ce(31,r,e,a),n.elementType=Bn,n.lanes=l,n;case rn:return _r(r.children,a,l,e);case Mn:i=8,a|=24;break;case Un:return n=ce(12,r,e,a|2),n.elementType=Un,n.lanes=l,n;case V:return n=ce(13,r,e,a),n.elementType=V,n.lanes=l,n;case nn:return n=ce(19,r,e,a),n.elementType=nn,n.lanes=l,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case kn:case On:i=10;break n;case Zn:i=9;break n;case an:i=11;break n;case vn:i=14;break n;case ln:i=16,t=null;break n}i=29,r=Error(b(130,n===null?"null":typeof n,"")),t=null}return e=ce(i,r,e,a),e.elementType=n,e.type=t,e.lanes=l,e}function _r(n,e,r,t){return n=ce(7,n,t,e),n.lanes=r,n}function pi(n,e,r){return n=ce(6,n,null,e),n.lanes=r,n}function vi(n,e,r){return e=ce(4,n.children!==null?n.children:[],n.key,e),e.lanes=r,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}var rt=[],tt=0,Ka=null,Xa=0,Se=[],Ae=0,Dr=null,Ye=1,je="";function Nr(n,e){rt[tt++]=Xa,rt[tt++]=Ka,Ka=n,Xa=e}function ss(n,e,r){Se[Ae++]=Ye,Se[Ae++]=je,Se[Ae++]=Dr,Dr=n;var t=Ye;n=je;var a=32-ie(t)-1;t&=~(1<<a),r+=1;var l=32-ie(e)+a;if(30<l){var i=a-a%5;l=(t&(1<<i)-1).toString(32),t>>=i,a-=i,Ye=1<<32-ie(e)+a|r<<a|t,je=l+n}else Ye=1<<l|r<<a|t,je=n}function gi(n){n.return!==null&&(Nr(n,1),ss(n,1,0))}function Si(n){for(;n===Ka;)Ka=rt[--tt],rt[tt]=null,Xa=rt[--tt],rt[tt]=null;for(;n===Dr;)Dr=Se[--Ae],Se[Ae]=null,je=Se[--Ae],Se[Ae]=null,Ye=Se[--Ae],Se[Ae]=null}var $n=null,Dn=null,on=!1,Mr=null,Ce=!1,Ai=Error(b(519));function Cr(n){var e=Error(b(418,""));throw Vt(ve(e,n)),Ai}function os(n){var e=n.stateNode,r=n.type,t=n.memoizedProps;switch(e[Wn]=n,e[ne]=t,r){case"dialog":$("cancel",e),$("close",e);break;case"iframe":case"object":case"embed":$("load",e);break;case"video":case"audio":for(r=0;r<ba.length;r++)$(ba[r],e);break;case"source":$("error",e);break;case"img":case"image":case"link":$("error",e),$("load",e);break;case"details":$("toggle",e);break;case"input":$("invalid",e),Oc(e,t.value,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name,!0),Ha(e);break;case"select":$("invalid",e);break;case"textarea":$("invalid",e),Dc(e,t.value,t.defaultValue,t.children),Ha(e)}r=t.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||e.textContent===""+r||t.suppressHydrationWarning===!0||Mf(e.textContent,r)?(t.popover!=null&&($("beforetoggle",e),$("toggle",e)),t.onScroll!=null&&$("scroll",e),t.onScrollEnd!=null&&$("scrollend",e),t.onClick!=null&&(e.onclick=Ol),e=!0):e=!1,e||Cr(n)}function fs(n){for($n=n.return;$n;)switch($n.tag){case 5:case 13:Ce=!1;return;case 27:case 3:Ce=!0;return;default:$n=$n.return}}function wt(n){if(n!==$n)return!1;if(!on)return fs(n),on=!0,!1;var e=n.tag,r;if((r=e!==3&&e!==27)&&((r=e===5)&&(r=n.type,r=!(r!=="form"&&r!=="button")||Gu(n.type,n.memoizedProps)),r=!r),r&&Dn&&Cr(n),fs(n),e===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8)if(r=n.data,r==="/$"){if(e===0){Dn=Me(n.nextSibling);break n}e--}else r!=="$"&&r!=="$!"&&r!=="$?"||e++;n=n.nextSibling}Dn=null}}else e===27?(e=Dn,yr(n.type)?(n=qu,qu=null,Dn=n):Dn=e):Dn=$n?Me(n.stateNode.nextSibling):null;return!0}function qt(){Dn=$n=null,on=!1}function bs(){var n=Mr;return n!==null&&(ae===null?ae=n:ae.push.apply(ae,n),Mr=null),n}function Vt(n){Mr===null?Mr=[n]:Mr.push(n)}var Ei=g(null),Hr=null,we=null;function nr(n,e,r){O(Ei,e._currentValue),e._currentValue=r}function qe(n){n._currentValue=Ei.current,_(Ei)}function Ri(n,e,r){for(;n!==null;){var t=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,t!==null&&(t.childLanes|=e)):t!==null&&(t.childLanes&e)!==e&&(t.childLanes|=e),n===r)break;n=n.return}}function Ti(n,e,r,t){var a=n.child;for(a!==null&&(a.return=n);a!==null;){var l=a.dependencies;if(l!==null){var i=a.child;l=l.firstContext;n:for(;l!==null;){var u=l;l=a;for(var c=0;c<e.length;c++)if(u.context===e[c]){l.lanes|=r,u=l.alternate,u!==null&&(u.lanes|=r),Ri(l.return,r,n),t||(i=null);break n}l=u.next}}else if(a.tag===18){if(i=a.return,i===null)throw Error(b(341));i.lanes|=r,l=i.alternate,l!==null&&(l.lanes|=r),Ri(i,r,n),i=null}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===n){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}}function Qt(n,e,r,t){n=null;for(var a=e,l=!1;a!==null;){if(!l){if((a.flags&524288)!==0)l=!0;else if((a.flags&262144)!==0)break}if(a.tag===10){var i=a.alternate;if(i===null)throw Error(b(387));if(i=i.memoizedProps,i!==null){var u=a.type;ue(a.pendingProps.value,i.value)||(n!==null?n.push(u):n=[u])}}else if(a===Fn.current){if(i=a.alternate,i===null)throw Error(b(387));i.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(n!==null?n.push(va):n=[va])}a=a.return}n!==null&&Ti(e,n,r,t),e.flags|=262144}function Za(n){for(n=n.firstContext;n!==null;){if(!ue(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ur(n){Hr=n,we=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function In(n){return ds(Hr,n)}function Wa(n,e){return Hr===null&&Ur(n),ds(n,e)}function ds(n,e){var r=e._currentValue;if(e={context:e,memoizedValue:r,next:null},we===null){if(n===null)throw Error(b(308));we=e,n.dependencies={lanes:0,firstContext:e},n.flags|=524288}else we=we.next=e;return r}var gd=typeof AbortController<"u"?AbortController:function(){var n=[],e=this.signal={aborted:!1,addEventListener:function(r,t){n.push(t)}};this.abort=function(){e.aborted=!0,n.forEach(function(r){return r()})}},Sd=T.unstable_scheduleCallback,Ad=T.unstable_NormalPriority,zn={$$typeof:On,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oi(){return{controller:new gd,data:new Map,refCount:0}}function Kt(n){n.refCount--,n.refCount===0&&Sd(Ad,function(){n.controller.abort()})}var Xt=null,_i=0,at=0,lt=null;function Ed(n,e){if(Xt===null){var r=Xt=[];_i=0,at=Nu(),lt={status:"pending",value:void 0,then:function(t){r.push(t)}}}return _i++,e.then(hs,hs),e}function hs(){if(--_i===0&&Xt!==null){lt!==null&&(lt.status="fulfilled");var n=Xt;Xt=null,at=0,lt=null;for(var e=0;e<n.length;e++)(0,n[e])()}}function Rd(n,e){var r=[],t={status:"pending",value:null,reason:null,then:function(a){r.push(a)}};return n.then(function(){t.status="fulfilled",t.value=e;for(var a=0;a<r.length;a++)(0,r[a])(e)},function(a){for(t.status="rejected",t.reason=a,a=0;a<r.length;a++)(0,r[a])(void 0)}),t}var ys=p.S;p.S=function(n,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Ed(n,e),ys!==null&&ys(n,e)};var Lr=g(null);function Di(){var n=Lr.current;return n!==null?n:An.pooledCache}function Ia(n,e){e===null?O(Lr,Lr.current):O(Lr,e.pool)}function ms(){var n=Di();return n===null?null:{parent:zn._currentValue,pool:n}}var Zt=Error(b(460)),ps=Error(b(474)),Ja=Error(b(542)),Ni={then:function(){}};function vs(n){return n=n.status,n==="fulfilled"||n==="rejected"}function ka(){}function gs(n,e,r){switch(r=n[r],r===void 0?n.push(e):r!==e&&(e.then(ka,ka),e=r),e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,As(n),n;default:if(typeof e.status=="string")e.then(ka,ka);else{if(n=An,n!==null&&100<n.shellSuspendCounter)throw Error(b(482));n=e,n.status="pending",n.then(function(t){if(e.status==="pending"){var a=e;a.status="fulfilled",a.value=t}},function(t){if(e.status==="pending"){var a=e;a.status="rejected",a.reason=t}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw n=e.reason,As(n),n}throw Wt=e,Zt}}var Wt=null;function Ss(){if(Wt===null)throw Error(b(459));var n=Wt;return Wt=null,n}function As(n){if(n===Zt||n===Ja)throw Error(b(483))}var er=!1;function Mi(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ci(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function rr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function tr(n,e,r){var t=n.updateQueue;if(t===null)return null;if(t=t.shared,(fn&2)!==0){var a=t.pending;return a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e,e=Va(n),us(n,null,r),e}return qa(n,t,e,r),Va(n)}function It(n,e,r){if(e=e.updateQueue,e!==null&&(e=e.shared,(r&4194048)!==0)){var t=e.lanes;t&=n.pendingLanes,r|=t,e.lanes=r,hc(n,r)}}function Hi(n,e){var r=n.updateQueue,t=n.alternate;if(t!==null&&(t=t.updateQueue,r===t)){var a=null,l=null;if(r=r.firstBaseUpdate,r!==null){do{var i={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};l===null?a=l=i:l=l.next=i,r=r.next}while(r!==null);l===null?a=l=e:l=l.next=e}else a=l=e;r={baseState:t.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:t.shared,callbacks:t.callbacks},n.updateQueue=r;return}n=r.lastBaseUpdate,n===null?r.firstBaseUpdate=e:n.next=e,r.lastBaseUpdate=e}var Ui=!1;function Jt(){if(Ui){var n=lt;if(n!==null)throw n}}function kt(n,e,r,t){Ui=!1;var a=n.updateQueue;er=!1;var l=a.firstBaseUpdate,i=a.lastBaseUpdate,u=a.shared.pending;if(u!==null){a.shared.pending=null;var c=u,h=c.next;c.next=null,i===null?l=h:i.next=h,i=c;var v=n.alternate;v!==null&&(v=v.updateQueue,u=v.lastBaseUpdate,u!==i&&(u===null?v.firstBaseUpdate=h:u.next=h,v.lastBaseUpdate=c))}if(l!==null){var A=a.baseState;i=0,v=h=c=null,u=l;do{var y=u.lane&-536870913,m=y!==u.lane;if(m?(un&y)===y:(t&y)===y){y!==0&&y===at&&(Ui=!0),v!==null&&(v=v.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var j=n,G=u;y=e;var mn=r;switch(G.tag){case 1:if(j=G.payload,typeof j=="function"){A=j.call(mn,A,y);break n}A=j;break n;case 3:j.flags=j.flags&-65537|128;case 0:if(j=G.payload,y=typeof j=="function"?j.call(mn,A,y):j,y==null)break n;A=N({},A,y);break n;case 2:er=!0}}y=u.callback,y!==null&&(n.flags|=64,m&&(n.flags|=8192),m=a.callbacks,m===null?a.callbacks=[y]:m.push(y))}else m={lane:y,tag:u.tag,payload:u.payload,callback:u.callback,next:null},v===null?(h=v=m,c=A):v=v.next=m,i|=y;if(u=u.next,u===null){if(u=a.shared.pending,u===null)break;m=u,u=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);v===null&&(c=A),a.baseState=c,a.firstBaseUpdate=h,a.lastBaseUpdate=v,l===null&&(a.shared.lanes=0),fr|=i,n.lanes=i,n.memoizedState=A}}function Es(n,e){if(typeof n!="function")throw Error(b(191,n));n.call(e)}function Rs(n,e){var r=n.callbacks;if(r!==null)for(n.callbacks=null,n=0;n<r.length;n++)Es(r[n],e)}var it=g(null),Fa=g(0);function Ts(n,e){n=Ie,O(Fa,n),O(it,e),Ie=n|e.baseLanes}function Li(){O(Fa,Ie),O(it,it.current)}function xi(){Ie=Fa.current,_(it),_(Fa)}var ar=0,I=null,hn=null,Ln=null,Pa=!1,ut=!1,xr=!1,$a=0,Ft=0,ct=null,Td=0;function Cn(){throw Error(b(321))}function Bi(n,e){if(e===null)return!1;for(var r=0;r<e.length&&r<n.length;r++)if(!ue(n[r],e[r]))return!1;return!0}function zi(n,e,r,t,a,l){return ar=l,I=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,p.H=n===null||n.memoizedState===null?uo:co,xr=!1,l=r(t,a),xr=!1,ut&&(l=_s(e,r,t,a)),Os(n),l}function Os(n){p.H=ll;var e=hn!==null&&hn.next!==null;if(ar=0,Ln=hn=I=null,Pa=!1,Ft=0,ct=null,e)throw Error(b(300));n===null||wn||(n=n.dependencies,n!==null&&Za(n)&&(wn=!0))}function _s(n,e,r,t){I=n;var a=0;do{if(ut&&(ct=null),Ft=0,ut=!1,25<=a)throw Error(b(301));if(a+=1,Ln=hn=null,n.updateQueue!=null){var l=n.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}p.H=Hd,l=e(r,t)}while(ut);return l}function Od(){var n=p.H,e=n.useState()[0];return e=typeof e.then=="function"?Pt(e):e,n=n.useState()[0],(hn!==null?hn.memoizedState:null)!==n&&(I.flags|=1024),e}function Gi(){var n=$a!==0;return $a=0,n}function Yi(n,e,r){e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r}function ji(n){if(Pa){for(n=n.memoizedState;n!==null;){var e=n.queue;e!==null&&(e.pending=null),n=n.next}Pa=!1}ar=0,Ln=hn=I=null,ut=!1,Ft=$a=0,ct=null}function re(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ln===null?I.memoizedState=Ln=n:Ln=Ln.next=n,Ln}function xn(){if(hn===null){var n=I.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var e=Ln===null?I.memoizedState:Ln.next;if(e!==null)Ln=e,hn=n;else{if(n===null)throw I.alternate===null?Error(b(467)):Error(b(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},Ln===null?I.memoizedState=Ln=n:Ln=Ln.next=n}return Ln}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pt(n){var e=Ft;return Ft+=1,ct===null&&(ct=[]),n=gs(ct,n,e),e=I,(Ln===null?e.memoizedState:Ln.next)===null&&(e=e.alternate,p.H=e===null||e.memoizedState===null?uo:co),n}function nl(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Pt(n);if(n.$$typeof===On)return In(n)}throw Error(b(438,String(n)))}function qi(n){var e=null,r=I.updateQueue;if(r!==null&&(e=r.memoCache),e==null){var t=I.alternate;t!==null&&(t=t.updateQueue,t!==null&&(t=t.memoCache,t!=null&&(e={data:t.data.map(function(a){return a.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),r===null&&(r=wi(),I.updateQueue=r),r.memoCache=e,r=e.data[e.index],r===void 0)for(r=e.data[e.index]=Array(n),t=0;t<n;t++)r[t]=ke;return e.index++,r}function Ve(n,e){return typeof e=="function"?e(n):e}function el(n){var e=xn();return Vi(e,hn,n)}function Vi(n,e,r){var t=n.queue;if(t===null)throw Error(b(311));t.lastRenderedReducer=r;var a=n.baseQueue,l=t.pending;if(l!==null){if(a!==null){var i=a.next;a.next=l.next,l.next=i}e.baseQueue=a=l,t.pending=null}if(l=n.baseState,a===null)n.memoizedState=l;else{e=a.next;var u=i=null,c=null,h=e,v=!1;do{var A=h.lane&-536870913;if(A!==h.lane?(un&A)===A:(ar&A)===A){var y=h.revertLane;if(y===0)c!==null&&(c=c.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),A===at&&(v=!0);else if((ar&y)===y){h=h.next,y===at&&(v=!0);continue}else A={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(u=c=A,i=l):c=c.next=A,I.lanes|=y,fr|=y;A=h.action,xr&&r(l,A),l=h.hasEagerState?h.eagerState:r(l,A)}else y={lane:A,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},c===null?(u=c=y,i=l):c=c.next=y,I.lanes|=A,fr|=A;h=h.next}while(h!==null&&h!==e);if(c===null?i=l:c.next=u,!ue(l,n.memoizedState)&&(wn=!0,v&&(r=lt,r!==null)))throw r;n.memoizedState=l,n.baseState=i,n.baseQueue=c,t.lastRenderedState=l}return a===null&&(t.lanes=0),[n.memoizedState,t.dispatch]}function Qi(n){var e=xn(),r=e.queue;if(r===null)throw Error(b(311));r.lastRenderedReducer=n;var t=r.dispatch,a=r.pending,l=e.memoizedState;if(a!==null){r.pending=null;var i=a=a.next;do l=n(l,i.action),i=i.next;while(i!==a);ue(l,e.memoizedState)||(wn=!0),e.memoizedState=l,e.baseQueue===null&&(e.baseState=l),r.lastRenderedState=l}return[l,t]}function Ds(n,e,r){var t=I,a=xn(),l=on;if(l){if(r===void 0)throw Error(b(407));r=r()}else r=e();var i=!ue((hn||a).memoizedState,r);i&&(a.memoizedState=r,wn=!0),a=a.queue;var u=Cs.bind(null,t,a,n);if($t(2048,8,u,[n]),a.getSnapshot!==e||i||Ln!==null&&Ln.memoizedState.tag&1){if(t.flags|=2048,st(9,rl(),Ms.bind(null,t,a,r,e),null),An===null)throw Error(b(349));l||(ar&124)!==0||Ns(t,e,r)}return r}function Ns(n,e,r){n.flags|=16384,n={getSnapshot:e,value:r},e=I.updateQueue,e===null?(e=wi(),I.updateQueue=e,e.stores=[n]):(r=e.stores,r===null?e.stores=[n]:r.push(n))}function Ms(n,e,r,t){e.value=r,e.getSnapshot=t,Hs(e)&&Us(n)}function Cs(n,e,r){return r(function(){Hs(e)&&Us(n)})}function Hs(n){var e=n.getSnapshot;n=n.value;try{var r=e();return!ue(n,r)}catch{return!0}}function Us(n){var e=nt(n,2);e!==null&&de(e,n,2)}function Ki(n){var e=re();if(typeof n=="function"){var r=n;if(n=r(),xr){Fe(!0);try{r()}finally{Fe(!1)}}}return e.memoizedState=e.baseState=n,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:n},e}function Ls(n,e,r,t){return n.baseState=r,Vi(n,hn,typeof t=="function"?t:Ve)}function _d(n,e,r,t,a){if(al(n))throw Error(b(485));if(n=e.action,n!==null){var l={payload:a,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){l.listeners.push(i)}};p.T!==null?r(!0):l.isTransition=!1,t(l),r=e.pending,r===null?(l.next=e.pending=l,xs(e,l)):(l.next=r.next,e.pending=r.next=l)}}function xs(n,e){var r=e.action,t=e.payload,a=n.state;if(e.isTransition){var l=p.T,i={};p.T=i;try{var u=r(a,t),c=p.S;c!==null&&c(i,u),Bs(n,e,u)}catch(h){Xi(n,e,h)}finally{p.T=l}}else try{l=r(a,t),Bs(n,e,l)}catch(h){Xi(n,e,h)}}function Bs(n,e,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(t){zs(n,e,t)},function(t){return Xi(n,e,t)}):zs(n,e,r)}function zs(n,e,r){e.status="fulfilled",e.value=r,Gs(e),n.state=r,e=n.pending,e!==null&&(r=e.next,r===e?n.pending=null:(r=r.next,e.next=r,xs(n,r)))}function Xi(n,e,r){var t=n.pending;if(n.pending=null,t!==null){t=t.next;do e.status="rejected",e.reason=r,Gs(e),e=e.next;while(e!==t)}n.action=null}function Gs(n){n=n.listeners;for(var e=0;e<n.length;e++)(0,n[e])()}function Ys(n,e){return e}function js(n,e){if(on){var r=An.formState;if(r!==null){n:{var t=I;if(on){if(Dn){e:{for(var a=Dn,l=Ce;a.nodeType!==8;){if(!l){a=null;break e}if(a=Me(a.nextSibling),a===null){a=null;break e}}l=a.data,a=l==="F!"||l==="F"?a:null}if(a){Dn=Me(a.nextSibling),t=a.data==="F!";break n}}Cr(t)}t=!1}t&&(e=r[0])}}return r=re(),r.memoizedState=r.baseState=e,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:e},r.queue=t,r=ao.bind(null,I,t),t.dispatch=r,t=Ki(!1),l=ki.bind(null,I,!1,t.queue),t=re(),a={state:e,dispatch:null,action:n,pending:null},t.queue=a,r=_d.bind(null,I,a,l,r),a.dispatch=r,t.memoizedState=n,[e,r,!1]}function ws(n){var e=xn();return qs(e,hn,n)}function qs(n,e,r){if(e=Vi(n,e,Ys)[0],n=el(Ve)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var t=Pt(e)}catch(i){throw i===Zt?Ja:i}else t=e;e=xn();var a=e.queue,l=a.dispatch;return r!==e.memoizedState&&(I.flags|=2048,st(9,rl(),Dd.bind(null,a,r),null)),[t,l,n]}function Dd(n,e){n.action=e}function Vs(n){var e=xn(),r=hn;if(r!==null)return qs(e,r,n);xn(),e=e.memoizedState,r=xn();var t=r.queue.dispatch;return r.memoizedState=n,[e,t,!1]}function st(n,e,r,t){return n={tag:n,create:r,deps:t,inst:e,next:null},e=I.updateQueue,e===null&&(e=wi(),I.updateQueue=e),r=e.lastEffect,r===null?e.lastEffect=n.next=n:(t=r.next,r.next=n,n.next=t,e.lastEffect=n),n}function rl(){return{destroy:void 0,resource:void 0}}function Qs(){return xn().memoizedState}function tl(n,e,r,t){var a=re();t=t===void 0?null:t,I.flags|=n,a.memoizedState=st(1|e,rl(),r,t)}function $t(n,e,r,t){var a=xn();t=t===void 0?null:t;var l=a.memoizedState.inst;hn!==null&&t!==null&&Bi(t,hn.memoizedState.deps)?a.memoizedState=st(e,l,r,t):(I.flags|=n,a.memoizedState=st(1|e,l,r,t))}function Ks(n,e){tl(8390656,8,n,e)}function Xs(n,e){$t(2048,8,n,e)}function Zs(n,e){return $t(4,2,n,e)}function Ws(n,e){return $t(4,4,n,e)}function Is(n,e){if(typeof e=="function"){n=n();var r=e(n);return function(){typeof r=="function"?r():e(null)}}if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Js(n,e,r){r=r!=null?r.concat([n]):null,$t(4,4,Is.bind(null,e,n),r)}function Zi(){}function ks(n,e){var r=xn();e=e===void 0?null:e;var t=r.memoizedState;return e!==null&&Bi(e,t[1])?t[0]:(r.memoizedState=[n,e],n)}function Fs(n,e){var r=xn();e=e===void 0?null:e;var t=r.memoizedState;if(e!==null&&Bi(e,t[1]))return t[0];if(t=n(),xr){Fe(!0);try{n()}finally{Fe(!1)}}return r.memoizedState=[t,e],t}function Wi(n,e,r){return r===void 0||(ar&1073741824)!==0?n.memoizedState=e:(n.memoizedState=r,n=ef(),I.lanes|=n,fr|=n,r)}function Ps(n,e,r,t){return ue(r,e)?r:it.current!==null?(n=Wi(n,r,t),ue(n,e)||(wn=!0),n):(ar&42)===0?(wn=!0,n.memoizedState=r):(n=ef(),I.lanes|=n,fr|=n,e)}function $s(n,e,r,t,a){var l=D.p;D.p=l!==0&&8>l?l:8;var i=p.T,u={};p.T=u,ki(n,!1,e,r);try{var c=a(),h=p.S;if(h!==null&&h(u,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var v=Rd(c,t);na(n,e,v,be(n))}else na(n,e,t,be(n))}catch(A){na(n,e,{then:function(){},status:"rejected",reason:A},be())}finally{D.p=l,p.T=i}}function Nd(){}function Ii(n,e,r,t){if(n.tag!==5)throw Error(b(476));var a=no(n).queue;$s(n,a,e,L,r===null?Nd:function(){return eo(n),r(t)})}function no(n){var e=n.memoizedState;if(e!==null)return e;e={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:L},next:null};var r={};return e.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ve,lastRenderedState:r},next:null},n.memoizedState=e,n=n.alternate,n!==null&&(n.memoizedState=e),e}function eo(n){var e=no(n).next.queue;na(n,e,{},be())}function Ji(){return In(va)}function ro(){return xn().memoizedState}function to(){return xn().memoizedState}function Md(n){for(var e=n.return;e!==null;){switch(e.tag){case 24:case 3:var r=be();n=rr(r);var t=tr(e,n,r);t!==null&&(de(t,e,r),It(t,e,r)),e={cache:Oi()},n.payload=e;return}e=e.return}}function Cd(n,e,r){var t=be();r={lane:t,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null},al(n)?lo(e,r):(r=yi(n,e,r,t),r!==null&&(de(r,n,t),io(r,e,t)))}function ao(n,e,r){var t=be();na(n,e,r,t)}function na(n,e,r,t){var a={lane:t,revertLane:0,action:r,hasEagerState:!1,eagerState:null,next:null};if(al(n))lo(e,a);else{var l=n.alternate;if(n.lanes===0&&(l===null||l.lanes===0)&&(l=e.lastRenderedReducer,l!==null))try{var i=e.lastRenderedState,u=l(i,r);if(a.hasEagerState=!0,a.eagerState=u,ue(u,i))return qa(n,e,a,0),An===null&&wa(),!1}catch{}finally{}if(r=yi(n,e,a,t),r!==null)return de(r,n,t),io(r,e,t),!0}return!1}function ki(n,e,r,t){if(t={lane:2,revertLane:Nu(),action:t,hasEagerState:!1,eagerState:null,next:null},al(n)){if(e)throw Error(b(479))}else e=yi(n,r,t,2),e!==null&&de(e,n,2)}function al(n){var e=n.alternate;return n===I||e!==null&&e===I}function lo(n,e){ut=Pa=!0;var r=n.pending;r===null?e.next=e:(e.next=r.next,r.next=e),n.pending=e}function io(n,e,r){if((r&4194048)!==0){var t=e.lanes;t&=n.pendingLanes,r|=t,e.lanes=r,hc(n,r)}}var ll={readContext:In,use:nl,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useLayoutEffect:Cn,useInsertionEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useSyncExternalStore:Cn,useId:Cn,useHostTransitionStatus:Cn,useFormState:Cn,useActionState:Cn,useOptimistic:Cn,useMemoCache:Cn,useCacheRefresh:Cn},uo={readContext:In,use:nl,useCallback:function(n,e){return re().memoizedState=[n,e===void 0?null:e],n},useContext:In,useEffect:Ks,useImperativeHandle:function(n,e,r){r=r!=null?r.concat([n]):null,tl(4194308,4,Is.bind(null,e,n),r)},useLayoutEffect:function(n,e){return tl(4194308,4,n,e)},useInsertionEffect:function(n,e){tl(4,2,n,e)},useMemo:function(n,e){var r=re();e=e===void 0?null:e;var t=n();if(xr){Fe(!0);try{n()}finally{Fe(!1)}}return r.memoizedState=[t,e],t},useReducer:function(n,e,r){var t=re();if(r!==void 0){var a=r(e);if(xr){Fe(!0);try{r(e)}finally{Fe(!1)}}}else a=e;return t.memoizedState=t.baseState=a,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:a},t.queue=n,n=n.dispatch=Cd.bind(null,I,n),[t.memoizedState,n]},useRef:function(n){var e=re();return n={current:n},e.memoizedState=n},useState:function(n){n=Ki(n);var e=n.queue,r=ao.bind(null,I,e);return e.dispatch=r,[n.memoizedState,r]},useDebugValue:Zi,useDeferredValue:function(n,e){var r=re();return Wi(r,n,e)},useTransition:function(){var n=Ki(!1);return n=$s.bind(null,I,n.queue,!0,!1),re().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,e,r){var t=I,a=re();if(on){if(r===void 0)throw Error(b(407));r=r()}else{if(r=e(),An===null)throw Error(b(349));(un&124)!==0||Ns(t,e,r)}a.memoizedState=r;var l={value:r,getSnapshot:e};return a.queue=l,Ks(Cs.bind(null,t,l,n),[n]),t.flags|=2048,st(9,rl(),Ms.bind(null,t,l,r,e),null),r},useId:function(){var n=re(),e=An.identifierPrefix;if(on){var r=je,t=Ye;r=(t&~(1<<32-ie(t)-1)).toString(32)+r,e="«"+e+"R"+r,r=$a++,0<r&&(e+="H"+r.toString(32)),e+="»"}else r=Td++,e="«"+e+"r"+r.toString(32)+"»";return n.memoizedState=e},useHostTransitionStatus:Ji,useFormState:js,useActionState:js,useOptimistic:function(n){var e=re();e.memoizedState=e.baseState=n;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=r,e=ki.bind(null,I,!0,r),r.dispatch=e,[n,e]},useMemoCache:qi,useCacheRefresh:function(){return re().memoizedState=Md.bind(null,I)}},co={readContext:In,use:nl,useCallback:ks,useContext:In,useEffect:Xs,useImperativeHandle:Js,useInsertionEffect:Zs,useLayoutEffect:Ws,useMemo:Fs,useReducer:el,useRef:Qs,useState:function(){return el(Ve)},useDebugValue:Zi,useDeferredValue:function(n,e){var r=xn();return Ps(r,hn.memoizedState,n,e)},useTransition:function(){var n=el(Ve)[0],e=xn().memoizedState;return[typeof n=="boolean"?n:Pt(n),e]},useSyncExternalStore:Ds,useId:ro,useHostTransitionStatus:Ji,useFormState:ws,useActionState:ws,useOptimistic:function(n,e){var r=xn();return Ls(r,hn,n,e)},useMemoCache:qi,useCacheRefresh:to},Hd={readContext:In,use:nl,useCallback:ks,useContext:In,useEffect:Xs,useImperativeHandle:Js,useInsertionEffect:Zs,useLayoutEffect:Ws,useMemo:Fs,useReducer:Qi,useRef:Qs,useState:function(){return Qi(Ve)},useDebugValue:Zi,useDeferredValue:function(n,e){var r=xn();return hn===null?Wi(r,n,e):Ps(r,hn.memoizedState,n,e)},useTransition:function(){var n=Qi(Ve)[0],e=xn().memoizedState;return[typeof n=="boolean"?n:Pt(n),e]},useSyncExternalStore:Ds,useId:ro,useHostTransitionStatus:Ji,useFormState:Vs,useActionState:Vs,useOptimistic:function(n,e){var r=xn();return hn!==null?Ls(r,hn,n,e):(r.baseState=n,[n,r.queue.dispatch])},useMemoCache:qi,useCacheRefresh:to},ot=null,ea=0;function il(n){var e=ea;return ea+=1,ot===null&&(ot=[]),gs(ot,n,e)}function ra(n,e){e=e.props.ref,n.ref=e!==void 0?e:null}function ul(n,e){throw e.$$typeof===tn?Error(b(525)):(n=Object.prototype.toString.call(e),Error(b(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)))}function so(n){var e=n._init;return e(n._payload)}function oo(n){function e(f,o){if(n){var d=f.deletions;d===null?(f.deletions=[o],f.flags|=16):d.push(o)}}function r(f,o){if(!n)return null;for(;o!==null;)e(f,o),o=o.sibling;return null}function t(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function a(f,o){return f=Ge(f,o),f.index=0,f.sibling=null,f}function l(f,o,d){return f.index=d,n?(d=f.alternate,d!==null?(d=d.index,d<o?(f.flags|=67108866,o):d):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function i(f){return n&&f.alternate===null&&(f.flags|=67108866),f}function u(f,o,d,S){return o===null||o.tag!==6?(o=pi(d,f.mode,S),o.return=f,o):(o=a(o,d),o.return=f,o)}function c(f,o,d,S){var C=d.type;return C===rn?v(f,o,d.props.children,S,d.key):o!==null&&(o.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ln&&so(C)===o.type)?(o=a(o,d.props),ra(o,d),o.return=f,o):(o=Qa(d.type,d.key,d.props,null,f.mode,S),ra(o,d),o.return=f,o)}function h(f,o,d,S){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=vi(d,f.mode,S),o.return=f,o):(o=a(o,d.children||[]),o.return=f,o)}function v(f,o,d,S,C){return o===null||o.tag!==7?(o=_r(d,f.mode,S,C),o.return=f,o):(o=a(o,d),o.return=f,o)}function A(f,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=pi(""+o,f.mode,d),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Q:return d=Qa(o.type,o.key,o.props,null,f.mode,d),ra(d,o),d.return=f,d;case pn:return o=vi(o,f.mode,d),o.return=f,o;case ln:var S=o._init;return o=S(o._payload),A(f,o,d)}if(en(o)||Yn(o))return o=_r(o,f.mode,d,null),o.return=f,o;if(typeof o.then=="function")return A(f,il(o),d);if(o.$$typeof===On)return A(f,Wa(f,o),d);ul(f,o)}return null}function y(f,o,d,S){var C=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return C!==null?null:u(f,o,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Q:return d.key===C?c(f,o,d,S):null;case pn:return d.key===C?h(f,o,d,S):null;case ln:return C=d._init,d=C(d._payload),y(f,o,d,S)}if(en(d)||Yn(d))return C!==null?null:v(f,o,d,S,null);if(typeof d.then=="function")return y(f,o,il(d),S);if(d.$$typeof===On)return y(f,o,Wa(f,d),S);ul(f,d)}return null}function m(f,o,d,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return f=f.get(d)||null,u(o,f,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Q:return f=f.get(S.key===null?d:S.key)||null,c(o,f,S,C);case pn:return f=f.get(S.key===null?d:S.key)||null,h(o,f,S,C);case ln:var J=S._init;return S=J(S._payload),m(f,o,d,S,C)}if(en(S)||Yn(S))return f=f.get(d)||null,v(o,f,S,C,null);if(typeof S.then=="function")return m(f,o,d,il(S),C);if(S.$$typeof===On)return m(f,o,d,Wa(o,S),C);ul(o,S)}return null}function j(f,o,d,S){for(var C=null,J=null,U=o,Y=o=0,Vn=null;U!==null&&Y<d.length;Y++){U.index>Y?(Vn=U,U=null):Vn=U.sibling;var cn=y(f,U,d[Y],S);if(cn===null){U===null&&(U=Vn);break}n&&U&&cn.alternate===null&&e(f,U),o=l(cn,o,Y),J===null?C=cn:J.sibling=cn,J=cn,U=Vn}if(Y===d.length)return r(f,U),on&&Nr(f,Y),C;if(U===null){for(;Y<d.length;Y++)U=A(f,d[Y],S),U!==null&&(o=l(U,o,Y),J===null?C=U:J.sibling=U,J=U);return on&&Nr(f,Y),C}for(U=t(U);Y<d.length;Y++)Vn=m(U,f,Y,d[Y],S),Vn!==null&&(n&&Vn.alternate!==null&&U.delete(Vn.key===null?Y:Vn.key),o=l(Vn,o,Y),J===null?C=Vn:J.sibling=Vn,J=Vn);return n&&U.forEach(function(Sr){return e(f,Sr)}),on&&Nr(f,Y),C}function G(f,o,d,S){if(d==null)throw Error(b(151));for(var C=null,J=null,U=o,Y=o=0,Vn=null,cn=d.next();U!==null&&!cn.done;Y++,cn=d.next()){U.index>Y?(Vn=U,U=null):Vn=U.sibling;var Sr=y(f,U,cn.value,S);if(Sr===null){U===null&&(U=Vn);break}n&&U&&Sr.alternate===null&&e(f,U),o=l(Sr,o,Y),J===null?C=Sr:J.sibling=Sr,J=Sr,U=Vn}if(cn.done)return r(f,U),on&&Nr(f,Y),C;if(U===null){for(;!cn.done;Y++,cn=d.next())cn=A(f,cn.value,S),cn!==null&&(o=l(cn,o,Y),J===null?C=cn:J.sibling=cn,J=cn);return on&&Nr(f,Y),C}for(U=t(U);!cn.done;Y++,cn=d.next())cn=m(U,f,Y,cn.value,S),cn!==null&&(n&&cn.alternate!==null&&U.delete(cn.key===null?Y:cn.key),o=l(cn,o,Y),J===null?C=cn:J.sibling=cn,J=cn);return n&&U.forEach(function(U0){return e(f,U0)}),on&&Nr(f,Y),C}function mn(f,o,d,S){if(typeof d=="object"&&d!==null&&d.type===rn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case Q:n:{for(var C=d.key;o!==null;){if(o.key===C){if(C=d.type,C===rn){if(o.tag===7){r(f,o.sibling),S=a(o,d.props.children),S.return=f,f=S;break n}}else if(o.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ln&&so(C)===o.type){r(f,o.sibling),S=a(o,d.props),ra(S,d),S.return=f,f=S;break n}r(f,o);break}else e(f,o);o=o.sibling}d.type===rn?(S=_r(d.props.children,f.mode,S,d.key),S.return=f,f=S):(S=Qa(d.type,d.key,d.props,null,f.mode,S),ra(S,d),S.return=f,f=S)}return i(f);case pn:n:{for(C=d.key;o!==null;){if(o.key===C)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){r(f,o.sibling),S=a(o,d.children||[]),S.return=f,f=S;break n}else{r(f,o);break}else e(f,o);o=o.sibling}S=vi(d,f.mode,S),S.return=f,f=S}return i(f);case ln:return C=d._init,d=C(d._payload),mn(f,o,d,S)}if(en(d))return j(f,o,d,S);if(Yn(d)){if(C=Yn(d),typeof C!="function")throw Error(b(150));return d=C.call(d),G(f,o,d,S)}if(typeof d.then=="function")return mn(f,o,il(d),S);if(d.$$typeof===On)return mn(f,o,Wa(f,d),S);ul(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(r(f,o.sibling),S=a(o,d),S.return=f,f=S):(r(f,o),S=pi(d,f.mode,S),S.return=f,f=S),i(f)):r(f,o)}return function(f,o,d,S){try{ea=0;var C=mn(f,o,d,S);return ot=null,C}catch(U){if(U===Zt||U===Ja)throw U;var J=ce(29,U,null,f.mode);return J.lanes=S,J.return=f,J}finally{}}}var ft=oo(!0),fo=oo(!1),Ee=g(null),He=null;function lr(n){var e=n.alternate;O(Gn,Gn.current&1),O(Ee,n),He===null&&(e===null||it.current!==null||e.memoizedState!==null)&&(He=n)}function bo(n){if(n.tag===22){if(O(Gn,Gn.current),O(Ee,n),He===null){var e=n.alternate;e!==null&&e.memoizedState!==null&&(He=n)}}else ir()}function ir(){O(Gn,Gn.current),O(Ee,Ee.current)}function Qe(n){_(Ee),He===n&&(He=null),_(Gn)}var Gn=g(0);function cl(n){for(var e=n;e!==null;){if(e.tag===13){var r=e.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||wu(r)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function Fi(n,e,r,t){e=n.memoizedState,r=r(t,e),r=r==null?e:N({},e,r),n.memoizedState=r,n.lanes===0&&(n.updateQueue.baseState=r)}var Pi={enqueueSetState:function(n,e,r){n=n._reactInternals;var t=be(),a=rr(t);a.payload=e,r!=null&&(a.callback=r),e=tr(n,a,t),e!==null&&(de(e,n,t),It(e,n,t))},enqueueReplaceState:function(n,e,r){n=n._reactInternals;var t=be(),a=rr(t);a.tag=1,a.payload=e,r!=null&&(a.callback=r),e=tr(n,a,t),e!==null&&(de(e,n,t),It(e,n,t))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var r=be(),t=rr(r);t.tag=2,e!=null&&(t.callback=e),e=tr(n,t,r),e!==null&&(de(e,n,r),It(e,n,r))}};function ho(n,e,r,t,a,l,i){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(t,l,i):e.prototype&&e.prototype.isPureReactComponent?!Yt(r,t)||!Yt(a,l):!0}function yo(n,e,r,t){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(r,t),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(r,t),e.state!==n&&Pi.enqueueReplaceState(e,e.state,null)}function Br(n,e){var r=e;if("ref"in e){r={};for(var t in e)t!=="ref"&&(r[t]=e[t])}if(n=n.defaultProps){r===e&&(r=N({},r));for(var a in n)r[a]===void 0&&(r[a]=n[a])}return r}var sl=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function mo(n){sl(n)}function po(n){console.error(n)}function vo(n){sl(n)}function ol(n,e){try{var r=n.onUncaughtError;r(e.value,{componentStack:e.stack})}catch(t){setTimeout(function(){throw t})}}function go(n,e,r){try{var t=n.onCaughtError;t(r.value,{componentStack:r.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function $i(n,e,r){return r=rr(r),r.tag=3,r.payload={element:null},r.callback=function(){ol(n,e)},r}function So(n){return n=rr(n),n.tag=3,n}function Ao(n,e,r,t){var a=r.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;n.payload=function(){return a(l)},n.callback=function(){go(e,r,t)}}var i=r.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){go(e,r,t),typeof a!="function"&&(br===null?br=new Set([this]):br.add(this));var u=t.stack;this.componentDidCatch(t.value,{componentStack:u!==null?u:""})})}function Ud(n,e,r,t,a){if(r.flags|=32768,t!==null&&typeof t=="object"&&typeof t.then=="function"){if(e=r.alternate,e!==null&&Qt(e,r,a,!0),r=Ee.current,r!==null){switch(r.tag){case 13:return He===null?Ru():r.alternate===null&&Nn===0&&(Nn=3),r.flags&=-257,r.flags|=65536,r.lanes=a,t===Ni?r.flags|=16384:(e=r.updateQueue,e===null?r.updateQueue=new Set([t]):e.add(t),Ou(n,t,a)),!1;case 22:return r.flags|=65536,t===Ni?r.flags|=16384:(e=r.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([t])},r.updateQueue=e):(r=e.retryQueue,r===null?e.retryQueue=new Set([t]):r.add(t)),Ou(n,t,a)),!1}throw Error(b(435,r.tag))}return Ou(n,t,a),Ru(),!1}if(on)return e=Ee.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=a,t!==Ai&&(n=Error(b(422),{cause:t}),Vt(ve(n,r)))):(t!==Ai&&(e=Error(b(423),{cause:t}),Vt(ve(e,r))),n=n.current.alternate,n.flags|=65536,a&=-a,n.lanes|=a,t=ve(t,r),a=$i(n.stateNode,t,a),Hi(n,a),Nn!==4&&(Nn=2)),!1;var l=Error(b(520),{cause:t});if(l=ve(l,r),sa===null?sa=[l]:sa.push(l),Nn!==4&&(Nn=2),e===null)return!0;t=ve(t,r),r=e;do{switch(r.tag){case 3:return r.flags|=65536,n=a&-a,r.lanes|=n,n=$i(r.stateNode,t,n),Hi(r,n),!1;case 1:if(e=r.type,l=r.stateNode,(r.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(br===null||!br.has(l))))return r.flags|=65536,a&=-a,r.lanes|=a,a=So(a),Ao(a,n,r,t),Hi(r,a),!1}r=r.return}while(r!==null);return!1}var Eo=Error(b(461)),wn=!1;function Qn(n,e,r,t){e.child=n===null?fo(e,null,r,t):ft(e,n.child,r,t)}function Ro(n,e,r,t,a){r=r.render;var l=e.ref;if("ref"in t){var i={};for(var u in t)u!=="ref"&&(i[u]=t[u])}else i=t;return Ur(e),t=zi(n,e,r,i,l,a),u=Gi(),n!==null&&!wn?(Yi(n,e,a),Ke(n,e,a)):(on&&u&&gi(e),e.flags|=1,Qn(n,e,t,a),e.child)}function To(n,e,r,t,a){if(n===null){var l=r.type;return typeof l=="function"&&!mi(l)&&l.defaultProps===void 0&&r.compare===null?(e.tag=15,e.type=l,Oo(n,e,l,t,a)):(n=Qa(r.type,null,t,e,e.mode,a),n.ref=e.ref,n.return=e,e.child=n)}if(l=n.child,!uu(n,a)){var i=l.memoizedProps;if(r=r.compare,r=r!==null?r:Yt,r(i,t)&&n.ref===e.ref)return Ke(n,e,a)}return e.flags|=1,n=Ge(l,t),n.ref=e.ref,n.return=e,e.child=n}function Oo(n,e,r,t,a){if(n!==null){var l=n.memoizedProps;if(Yt(l,t)&&n.ref===e.ref)if(wn=!1,e.pendingProps=t=l,uu(n,a))(n.flags&131072)!==0&&(wn=!0);else return e.lanes=n.lanes,Ke(n,e,a)}return nu(n,e,r,t,a)}function _o(n,e,r){var t=e.pendingProps,a=t.children,l=n!==null?n.memoizedState:null;if(t.mode==="hidden"){if((e.flags&128)!==0){if(t=l!==null?l.baseLanes|r:r,n!==null){for(a=e.child=n.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;e.childLanes=l&~t}else e.childLanes=0,e.child=null;return Do(n,e,t,r)}if((r&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ia(e,l!==null?l.cachePool:null),l!==null?Ts(e,l):Li(),bo(e);else return e.lanes=e.childLanes=536870912,Do(n,e,l!==null?l.baseLanes|r:r,r)}else l!==null?(Ia(e,l.cachePool),Ts(e,l),ir(),e.memoizedState=null):(n!==null&&Ia(e,null),Li(),ir());return Qn(n,e,a,r),e.child}function Do(n,e,r,t){var a=Di();return a=a===null?null:{parent:zn._currentValue,pool:a},e.memoizedState={baseLanes:r,cachePool:a},n!==null&&Ia(e,null),Li(),bo(e),n!==null&&Qt(n,e,t,!0),null}function fl(n,e){var r=e.ref;if(r===null)n!==null&&n.ref!==null&&(e.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(b(284));(n===null||n.ref!==r)&&(e.flags|=4194816)}}function nu(n,e,r,t,a){return Ur(e),r=zi(n,e,r,t,void 0,a),t=Gi(),n!==null&&!wn?(Yi(n,e,a),Ke(n,e,a)):(on&&t&&gi(e),e.flags|=1,Qn(n,e,r,a),e.child)}function No(n,e,r,t,a,l){return Ur(e),e.updateQueue=null,r=_s(e,t,r,a),Os(n),t=Gi(),n!==null&&!wn?(Yi(n,e,l),Ke(n,e,l)):(on&&t&&gi(e),e.flags|=1,Qn(n,e,r,l),e.child)}function Mo(n,e,r,t,a){if(Ur(e),e.stateNode===null){var l=et,i=r.contextType;typeof i=="object"&&i!==null&&(l=In(i)),l=new r(t,l),e.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Pi,e.stateNode=l,l._reactInternals=e,l=e.stateNode,l.props=t,l.state=e.memoizedState,l.refs={},Mi(e),i=r.contextType,l.context=typeof i=="object"&&i!==null?In(i):et,l.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Fi(e,r,i,t),l.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(i=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),i!==l.state&&Pi.enqueueReplaceState(l,l.state,null),kt(e,t,l,a),Jt(),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!0}else if(n===null){l=e.stateNode;var u=e.memoizedProps,c=Br(r,u);l.props=c;var h=l.context,v=r.contextType;i=et,typeof v=="object"&&v!==null&&(i=In(v));var A=r.getDerivedStateFromProps;v=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=e.pendingProps!==u,v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||h!==i)&&yo(e,l,t,i),er=!1;var y=e.memoizedState;l.state=y,kt(e,t,l,a),Jt(),h=e.memoizedState,u||y!==h||er?(typeof A=="function"&&(Fi(e,r,A,t),h=e.memoizedState),(c=er||ho(e,r,c,t,y,h,i))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=t,e.memoizedState=h),l.props=t,l.state=h,l.context=i,t=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),t=!1)}else{l=e.stateNode,Ci(n,e),i=e.memoizedProps,v=Br(r,i),l.props=v,A=e.pendingProps,y=l.context,h=r.contextType,c=et,typeof h=="object"&&h!==null&&(c=In(h)),u=r.getDerivedStateFromProps,(h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==A||y!==c)&&yo(e,l,t,c),er=!1,y=e.memoizedState,l.state=y,kt(e,t,l,a),Jt();var m=e.memoizedState;i!==A||y!==m||er||n!==null&&n.dependencies!==null&&Za(n.dependencies)?(typeof u=="function"&&(Fi(e,r,u,t),m=e.memoizedState),(v=er||ho(e,r,v,t,y,m,c)||n!==null&&n.dependencies!==null&&Za(n.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(t,m,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(t,m,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),e.memoizedProps=t,e.memoizedState=m),l.props=t,l.state=m,l.context=c,t=v):(typeof l.componentDidUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===n.memoizedProps&&y===n.memoizedState||(e.flags|=1024),t=!1)}return l=t,fl(n,e),t=(e.flags&128)!==0,l||t?(l=e.stateNode,r=t&&typeof r.getDerivedStateFromError!="function"?null:l.render(),e.flags|=1,n!==null&&t?(e.child=ft(e,n.child,null,a),e.child=ft(e,null,r,a)):Qn(n,e,r,a),e.memoizedState=l.state,n=e.child):n=Ke(n,e,a),n}function Co(n,e,r,t){return qt(),e.flags|=256,Qn(n,e,r,t),e.child}var eu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ru(n){return{baseLanes:n,cachePool:ms()}}function tu(n,e,r){return n=n!==null?n.childLanes&~r:0,e&&(n|=Re),n}function Ho(n,e,r){var t=e.pendingProps,a=!1,l=(e.flags&128)!==0,i;if((i=l)||(i=n!==null&&n.memoizedState===null?!1:(Gn.current&2)!==0),i&&(a=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,n===null){if(on){if(a?lr(e):ir(),on){var u=Dn,c;if(c=u){n:{for(c=u,u=Ce;c.nodeType!==8;){if(!u){u=null;break n}if(c=Me(c.nextSibling),c===null){u=null;break n}}u=c}u!==null?(e.memoizedState={dehydrated:u,treeContext:Dr!==null?{id:Ye,overflow:je}:null,retryLane:536870912,hydrationErrors:null},c=ce(18,null,null,0),c.stateNode=u,c.return=e,e.child=c,$n=e,Dn=null,c=!0):c=!1}c||Cr(e)}if(u=e.memoizedState,u!==null&&(u=u.dehydrated,u!==null))return wu(u)?e.lanes=32:e.lanes=536870912,null;Qe(e)}return u=t.children,t=t.fallback,a?(ir(),a=e.mode,u=bl({mode:"hidden",children:u},a),t=_r(t,a,r,null),u.return=e,t.return=e,u.sibling=t,e.child=u,a=e.child,a.memoizedState=ru(r),a.childLanes=tu(n,i,r),e.memoizedState=eu,t):(lr(e),au(e,u))}if(c=n.memoizedState,c!==null&&(u=c.dehydrated,u!==null)){if(l)e.flags&256?(lr(e),e.flags&=-257,e=lu(n,e,r)):e.memoizedState!==null?(ir(),e.child=n.child,e.flags|=128,e=null):(ir(),a=t.fallback,u=e.mode,t=bl({mode:"visible",children:t.children},u),a=_r(a,u,r,null),a.flags|=2,t.return=e,a.return=e,t.sibling=a,e.child=t,ft(e,n.child,null,r),t=e.child,t.memoizedState=ru(r),t.childLanes=tu(n,i,r),e.memoizedState=eu,e=a);else if(lr(e),wu(u)){if(i=u.nextSibling&&u.nextSibling.dataset,i)var h=i.dgst;i=h,t=Error(b(419)),t.stack="",t.digest=i,Vt({value:t,source:null,stack:null}),e=lu(n,e,r)}else if(wn||Qt(n,e,r,!1),i=(r&n.childLanes)!==0,wn||i){if(i=An,i!==null&&(t=r&-r,t=(t&42)!==0?1:ql(t),t=(t&(i.suspendedLanes|r))!==0?0:t,t!==0&&t!==c.retryLane))throw c.retryLane=t,nt(n,t),de(i,n,t),Eo;u.data==="$?"||Ru(),e=lu(n,e,r)}else u.data==="$?"?(e.flags|=192,e.child=n.child,e=null):(n=c.treeContext,Dn=Me(u.nextSibling),$n=e,on=!0,Mr=null,Ce=!1,n!==null&&(Se[Ae++]=Ye,Se[Ae++]=je,Se[Ae++]=Dr,Ye=n.id,je=n.overflow,Dr=e),e=au(e,t.children),e.flags|=4096);return e}return a?(ir(),a=t.fallback,u=e.mode,c=n.child,h=c.sibling,t=Ge(c,{mode:"hidden",children:t.children}),t.subtreeFlags=c.subtreeFlags&65011712,h!==null?a=Ge(h,a):(a=_r(a,u,r,null),a.flags|=2),a.return=e,t.return=e,t.sibling=a,e.child=t,t=a,a=e.child,u=n.child.memoizedState,u===null?u=ru(r):(c=u.cachePool,c!==null?(h=zn._currentValue,c=c.parent!==h?{parent:h,pool:h}:c):c=ms(),u={baseLanes:u.baseLanes|r,cachePool:c}),a.memoizedState=u,a.childLanes=tu(n,i,r),e.memoizedState=eu,t):(lr(e),r=n.child,n=r.sibling,r=Ge(r,{mode:"visible",children:t.children}),r.return=e,r.sibling=null,n!==null&&(i=e.deletions,i===null?(e.deletions=[n],e.flags|=16):i.push(n)),e.child=r,e.memoizedState=null,r)}function au(n,e){return e=bl({mode:"visible",children:e},n.mode),e.return=n,n.child=e}function bl(n,e){return n=ce(22,n,null,e),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function lu(n,e,r){return ft(e,n.child,null,r),n=au(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Uo(n,e,r){n.lanes|=e;var t=n.alternate;t!==null&&(t.lanes|=e),Ri(n.return,e,r)}function iu(n,e,r,t,a){var l=n.memoizedState;l===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:t,tail:r,tailMode:a}:(l.isBackwards=e,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=r,l.tailMode=a)}function Lo(n,e,r){var t=e.pendingProps,a=t.revealOrder,l=t.tail;if(Qn(n,e,t.children,r),t=Gn.current,(t&2)!==0)t=t&1|2,e.flags|=128;else{if(n!==null&&(n.flags&128)!==0)n:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Uo(n,r,e);else if(n.tag===19)Uo(n,r,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break n;for(;n.sibling===null;){if(n.return===null||n.return===e)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}t&=1}switch(O(Gn,t),a){case"forwards":for(r=e.child,a=null;r!==null;)n=r.alternate,n!==null&&cl(n)===null&&(a=r),r=r.sibling;r=a,r===null?(a=e.child,e.child=null):(a=r.sibling,r.sibling=null),iu(e,!1,a,r,l);break;case"backwards":for(r=null,a=e.child,e.child=null;a!==null;){if(n=a.alternate,n!==null&&cl(n)===null){e.child=a;break}n=a.sibling,a.sibling=r,r=a,a=n}iu(e,!0,r,null,l);break;case"together":iu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ke(n,e,r){if(n!==null&&(e.dependencies=n.dependencies),fr|=e.lanes,(r&e.childLanes)===0)if(n!==null){if(Qt(n,e,r,!1),(r&e.childLanes)===0)return null}else return null;if(n!==null&&e.child!==n.child)throw Error(b(153));if(e.child!==null){for(n=e.child,r=Ge(n,n.pendingProps),e.child=r,r.return=e;n.sibling!==null;)n=n.sibling,r=r.sibling=Ge(n,n.pendingProps),r.return=e;r.sibling=null}return e.child}function uu(n,e){return(n.lanes&e)!==0?!0:(n=n.dependencies,!!(n!==null&&Za(n)))}function Ld(n,e,r){switch(e.tag){case 3:Sn(e,e.stateNode.containerInfo),nr(e,zn,n.memoizedState.cache),qt();break;case 27:case 5:Ot(e);break;case 4:Sn(e,e.stateNode.containerInfo);break;case 10:nr(e,e.type,e.memoizedProps.value);break;case 13:var t=e.memoizedState;if(t!==null)return t.dehydrated!==null?(lr(e),e.flags|=128,null):(r&e.child.childLanes)!==0?Ho(n,e,r):(lr(e),n=Ke(n,e,r),n!==null?n.sibling:null);lr(e);break;case 19:var a=(n.flags&128)!==0;if(t=(r&e.childLanes)!==0,t||(Qt(n,e,r,!1),t=(r&e.childLanes)!==0),a){if(t)return Lo(n,e,r);e.flags|=128}if(a=e.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),O(Gn,Gn.current),t)break;return null;case 22:case 23:return e.lanes=0,_o(n,e,r);case 24:nr(e,zn,n.memoizedState.cache)}return Ke(n,e,r)}function xo(n,e,r){if(n!==null)if(n.memoizedProps!==e.pendingProps)wn=!0;else{if(!uu(n,r)&&(e.flags&128)===0)return wn=!1,Ld(n,e,r);wn=(n.flags&131072)!==0}else wn=!1,on&&(e.flags&1048576)!==0&&ss(e,Xa,e.index);switch(e.lanes=0,e.tag){case 16:n:{n=e.pendingProps;var t=e.elementType,a=t._init;if(t=a(t._payload),e.type=t,typeof t=="function")mi(t)?(n=Br(t,n),e.tag=1,e=Mo(null,e,t,n,r)):(e.tag=0,e=nu(null,e,t,n,r));else{if(t!=null){if(a=t.$$typeof,a===an){e.tag=11,e=Ro(null,e,t,n,r);break n}else if(a===vn){e.tag=14,e=To(null,e,t,n,r);break n}}throw e=dn(t)||t,Error(b(306,e,""))}}return e;case 0:return nu(n,e,e.type,e.pendingProps,r);case 1:return t=e.type,a=Br(t,e.pendingProps),Mo(n,e,t,a,r);case 3:n:{if(Sn(e,e.stateNode.containerInfo),n===null)throw Error(b(387));t=e.pendingProps;var l=e.memoizedState;a=l.element,Ci(n,e),kt(e,t,null,r);var i=e.memoizedState;if(t=i.cache,nr(e,zn,t),t!==l.cache&&Ti(e,[zn],r,!0),Jt(),t=i.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=Co(n,e,t,r);break n}else if(t!==a){a=ve(Error(b(424)),e),Vt(a),e=Co(n,e,t,r);break n}else{switch(n=e.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Dn=Me(n.firstChild),$n=e,on=!0,Mr=null,Ce=!0,r=fo(e,null,t,r),e.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(qt(),t===a){e=Ke(n,e,r);break n}Qn(n,e,t,r)}e=e.child}return e;case 26:return fl(n,e),n===null?(r=jf(e.type,null,e.pendingProps,null))?e.memoizedState=r:on||(r=e.type,n=e.pendingProps,t=_l(z.current).createElement(r),t[Wn]=e,t[ne]=n,Xn(t,r,n),jn(t),e.stateNode=t):e.memoizedState=jf(e.type,n.memoizedProps,e.pendingProps,n.memoizedState),null;case 27:return Ot(e),n===null&&on&&(t=e.stateNode=zf(e.type,e.pendingProps,z.current),$n=e,Ce=!0,a=Dn,yr(e.type)?(qu=a,Dn=Me(t.firstChild)):Dn=a),Qn(n,e,e.pendingProps.children,r),fl(n,e),n===null&&(e.flags|=4194304),e.child;case 5:return n===null&&on&&((a=t=Dn)&&(t=u0(t,e.type,e.pendingProps,Ce),t!==null?(e.stateNode=t,$n=e,Dn=Me(t.firstChild),Ce=!1,a=!0):a=!1),a||Cr(e)),Ot(e),a=e.type,l=e.pendingProps,i=n!==null?n.memoizedProps:null,t=l.children,Gu(a,l)?t=null:i!==null&&Gu(a,i)&&(e.flags|=32),e.memoizedState!==null&&(a=zi(n,e,Od,null,null,r),va._currentValue=a),fl(n,e),Qn(n,e,t,r),e.child;case 6:return n===null&&on&&((n=r=Dn)&&(r=c0(r,e.pendingProps,Ce),r!==null?(e.stateNode=r,$n=e,Dn=null,n=!0):n=!1),n||Cr(e)),null;case 13:return Ho(n,e,r);case 4:return Sn(e,e.stateNode.containerInfo),t=e.pendingProps,n===null?e.child=ft(e,null,t,r):Qn(n,e,t,r),e.child;case 11:return Ro(n,e,e.type,e.pendingProps,r);case 7:return Qn(n,e,e.pendingProps,r),e.child;case 8:return Qn(n,e,e.pendingProps.children,r),e.child;case 12:return Qn(n,e,e.pendingProps.children,r),e.child;case 10:return t=e.pendingProps,nr(e,e.type,t.value),Qn(n,e,t.children,r),e.child;case 9:return a=e.type._context,t=e.pendingProps.children,Ur(e),a=In(a),t=t(a),e.flags|=1,Qn(n,e,t,r),e.child;case 14:return To(n,e,e.type,e.pendingProps,r);case 15:return Oo(n,e,e.type,e.pendingProps,r);case 19:return Lo(n,e,r);case 31:return t=e.pendingProps,r=e.mode,t={mode:t.mode,children:t.children},n===null?(r=bl(t,r),r.ref=e.ref,e.child=r,r.return=e,e=r):(r=Ge(n.child,t),r.ref=e.ref,e.child=r,r.return=e,e=r),e;case 22:return _o(n,e,r);case 24:return Ur(e),t=In(zn),n===null?(a=Di(),a===null&&(a=An,l=Oi(),a.pooledCache=l,l.refCount++,l!==null&&(a.pooledCacheLanes|=r),a=l),e.memoizedState={parent:t,cache:a},Mi(e),nr(e,zn,a)):((n.lanes&r)!==0&&(Ci(n,e),kt(e,null,null,r),Jt()),a=n.memoizedState,l=e.memoizedState,a.parent!==t?(a={parent:t,cache:t},e.memoizedState=a,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=a),nr(e,zn,t)):(t=l.cache,nr(e,zn,t),t!==a.cache&&Ti(e,[zn],r,!0))),Qn(n,e,e.pendingProps.children,r),e.child;case 29:throw e.pendingProps}throw Error(b(156,e.tag))}function Xe(n){n.flags|=4}function Bo(n,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Kf(e)){if(e=Ee.current,e!==null&&((un&4194048)===un?He!==null:(un&62914560)!==un&&(un&536870912)===0||e!==He))throw Wt=Ni,ps;n.flags|=8192}}function dl(n,e){e!==null&&(n.flags|=4),n.flags&16384&&(e=n.tag!==22?bc():536870912,n.lanes|=e,yt|=e)}function ta(n,e){if(!on)switch(n.tailMode){case"hidden":e=n.tail;for(var r=null;e!==null;)e.alternate!==null&&(r=e),e=e.sibling;r===null?n.tail=null:r.sibling=null;break;case"collapsed":r=n.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:t.sibling=null}}function _n(n){var e=n.alternate!==null&&n.alternate.child===n.child,r=0,t=0;if(e)for(var a=n.child;a!==null;)r|=a.lanes|a.childLanes,t|=a.subtreeFlags&65011712,t|=a.flags&65011712,a.return=n,a=a.sibling;else for(a=n.child;a!==null;)r|=a.lanes|a.childLanes,t|=a.subtreeFlags,t|=a.flags,a.return=n,a=a.sibling;return n.subtreeFlags|=t,n.childLanes=r,e}function xd(n,e,r){var t=e.pendingProps;switch(Si(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(e),null;case 1:return _n(e),null;case 3:return r=e.stateNode,t=null,n!==null&&(t=n.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),qe(zn),Oe(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(n===null||n.child===null)&&(wt(e)?Xe(e):n===null||n.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,bs())),_n(e),null;case 26:return r=e.memoizedState,n===null?(Xe(e),r!==null?(_n(e),Bo(e,r)):(_n(e),e.flags&=-16777217)):r?r!==n.memoizedState?(Xe(e),_n(e),Bo(e,r)):(_n(e),e.flags&=-16777217):(n.memoizedProps!==t&&Xe(e),_n(e),e.flags&=-16777217),null;case 27:W(e),r=z.current;var a=e.type;if(n!==null&&e.stateNode!=null)n.memoizedProps!==t&&Xe(e);else{if(!t){if(e.stateNode===null)throw Error(b(166));return _n(e),null}n=H.current,wt(e)?os(e):(n=zf(a,t,r),e.stateNode=n,Xe(e))}return _n(e),null;case 5:if(W(e),r=e.type,n!==null&&e.stateNode!=null)n.memoizedProps!==t&&Xe(e);else{if(!t){if(e.stateNode===null)throw Error(b(166));return _n(e),null}if(n=H.current,wt(e))os(e);else{switch(a=_l(z.current),n){case 1:n=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:n=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":n=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":n=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":n=a.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof t.is=="string"?a.createElement("select",{is:t.is}):a.createElement("select"),t.multiple?n.multiple=!0:t.size&&(n.size=t.size);break;default:n=typeof t.is=="string"?a.createElement(r,{is:t.is}):a.createElement(r)}}n[Wn]=e,n[ne]=t;n:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break n;for(;a.sibling===null;){if(a.return===null||a.return===e)break n;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=n;n:switch(Xn(n,r,t),r){case"button":case"input":case"select":case"textarea":n=!!t.autoFocus;break n;case"img":n=!0;break n;default:n=!1}n&&Xe(e)}}return _n(e),e.flags&=-16777217,null;case 6:if(n&&e.stateNode!=null)n.memoizedProps!==t&&Xe(e);else{if(typeof t!="string"&&e.stateNode===null)throw Error(b(166));if(n=z.current,wt(e)){if(n=e.stateNode,r=e.memoizedProps,t=null,a=$n,a!==null)switch(a.tag){case 27:case 5:t=a.memoizedProps}n[Wn]=e,n=!!(n.nodeValue===r||t!==null&&t.suppressHydrationWarning===!0||Mf(n.nodeValue,r)),n||Cr(e)}else n=_l(n).createTextNode(t),n[Wn]=e,e.stateNode=n}return _n(e),null;case 13:if(t=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(a=wt(e),t!==null&&t.dehydrated!==null){if(n===null){if(!a)throw Error(b(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(b(317));a[Wn]=e}else qt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;_n(e),a=!1}else a=bs(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),a=!0;if(!a)return e.flags&256?(Qe(e),e):(Qe(e),null)}if(Qe(e),(e.flags&128)!==0)return e.lanes=r,e;if(r=t!==null,n=n!==null&&n.memoizedState!==null,r){t=e.child,a=null,t.alternate!==null&&t.alternate.memoizedState!==null&&t.alternate.memoizedState.cachePool!==null&&(a=t.alternate.memoizedState.cachePool.pool);var l=null;t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048)}return r!==n&&r&&(e.child.flags|=8192),dl(e,e.updateQueue),_n(e),null;case 4:return Oe(),n===null&&Uu(e.stateNode.containerInfo),_n(e),null;case 10:return qe(e.type),_n(e),null;case 19:if(_(Gn),a=e.memoizedState,a===null)return _n(e),null;if(t=(e.flags&128)!==0,l=a.rendering,l===null)if(t)ta(a,!1);else{if(Nn!==0||n!==null&&(n.flags&128)!==0)for(n=e.child;n!==null;){if(l=cl(n),l!==null){for(e.flags|=128,ta(a,!1),n=l.updateQueue,e.updateQueue=n,dl(e,n),e.subtreeFlags=0,n=r,r=e.child;r!==null;)cs(r,n),r=r.sibling;return O(Gn,Gn.current&1|2),e.child}n=n.sibling}a.tail!==null&&Pn()>ml&&(e.flags|=128,t=!0,ta(a,!1),e.lanes=4194304)}else{if(!t)if(n=cl(l),n!==null){if(e.flags|=128,t=!0,n=n.updateQueue,e.updateQueue=n,dl(e,n),ta(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!on)return _n(e),null}else 2*Pn()-a.renderingStartTime>ml&&r!==536870912&&(e.flags|=128,t=!0,ta(a,!1),e.lanes=4194304);a.isBackwards?(l.sibling=e.child,e.child=l):(n=a.last,n!==null?n.sibling=l:e.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Pn(),e.sibling=null,n=Gn.current,O(Gn,t?n&1|2:n&1),e):(_n(e),null);case 22:case 23:return Qe(e),xi(),t=e.memoizedState!==null,n!==null?n.memoizedState!==null!==t&&(e.flags|=8192):t&&(e.flags|=8192),t?(r&536870912)!==0&&(e.flags&128)===0&&(_n(e),e.subtreeFlags&6&&(e.flags|=8192)):_n(e),r=e.updateQueue,r!==null&&dl(e,r.retryQueue),r=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==r&&(e.flags|=2048),n!==null&&_(Lr),null;case 24:return r=null,n!==null&&(r=n.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),qe(zn),_n(e),null;case 25:return null;case 30:return null}throw Error(b(156,e.tag))}function Bd(n,e){switch(Si(e),e.tag){case 1:return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return qe(zn),Oe(),n=e.flags,(n&65536)!==0&&(n&128)===0?(e.flags=n&-65537|128,e):null;case 26:case 27:case 5:return W(e),null;case 13:if(Qe(e),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(b(340));qt()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _(Gn),null;case 4:return Oe(),null;case 10:return qe(e.type),null;case 22:case 23:return Qe(e),xi(),n!==null&&_(Lr),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 24:return qe(zn),null;case 25:return null;default:return null}}function zo(n,e){switch(Si(e),e.tag){case 3:qe(zn),Oe();break;case 26:case 27:case 5:W(e);break;case 4:Oe();break;case 13:Qe(e);break;case 19:_(Gn);break;case 10:qe(e.type);break;case 22:case 23:Qe(e),xi(),n!==null&&_(Lr);break;case 24:qe(zn)}}function aa(n,e){try{var r=e.updateQueue,t=r!==null?r.lastEffect:null;if(t!==null){var a=t.next;r=a;do{if((r.tag&n)===n){t=void 0;var l=r.create,i=r.inst;t=l(),i.destroy=t}r=r.next}while(r!==a)}}catch(u){gn(e,e.return,u)}}function ur(n,e,r){try{var t=e.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var l=a.next;t=l;do{if((t.tag&n)===n){var i=t.inst,u=i.destroy;if(u!==void 0){i.destroy=void 0,a=e;var c=r,h=u;try{h()}catch(v){gn(a,c,v)}}}t=t.next}while(t!==l)}}catch(v){gn(e,e.return,v)}}function Go(n){var e=n.updateQueue;if(e!==null){var r=n.stateNode;try{Rs(e,r)}catch(t){gn(n,n.return,t)}}}function Yo(n,e,r){r.props=Br(n.type,n.memoizedProps),r.state=n.memoizedState;try{r.componentWillUnmount()}catch(t){gn(n,e,t)}}function la(n,e){try{var r=n.ref;if(r!==null){switch(n.tag){case 26:case 27:case 5:var t=n.stateNode;break;case 30:t=n.stateNode;break;default:t=n.stateNode}typeof r=="function"?n.refCleanup=r(t):r.current=t}}catch(a){gn(n,e,a)}}function Ue(n,e){var r=n.ref,t=n.refCleanup;if(r!==null)if(typeof t=="function")try{t()}catch(a){gn(n,e,a)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(a){gn(n,e,a)}else r.current=null}function jo(n){var e=n.type,r=n.memoizedProps,t=n.stateNode;try{n:switch(e){case"button":case"input":case"select":case"textarea":r.autoFocus&&t.focus();break n;case"img":r.src?t.src=r.src:r.srcSet&&(t.srcset=r.srcSet)}}catch(a){gn(n,n.return,a)}}function cu(n,e,r){try{var t=n.stateNode;r0(t,n.type,r,e),t[ne]=e}catch(a){gn(n,n.return,a)}}function wo(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&yr(n.type)||n.tag===4}function su(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||wo(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&yr(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ou(n,e,r){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(n,e):(e=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,e.appendChild(n),r=r._reactRootContainer,r!=null||e.onclick!==null||(e.onclick=Ol));else if(t!==4&&(t===27&&yr(n.type)&&(r=n.stateNode,e=null),n=n.child,n!==null))for(ou(n,e,r),n=n.sibling;n!==null;)ou(n,e,r),n=n.sibling}function hl(n,e,r){var t=n.tag;if(t===5||t===6)n=n.stateNode,e?r.insertBefore(n,e):r.appendChild(n);else if(t!==4&&(t===27&&yr(n.type)&&(r=n.stateNode),n=n.child,n!==null))for(hl(n,e,r),n=n.sibling;n!==null;)hl(n,e,r),n=n.sibling}function qo(n){var e=n.stateNode,r=n.memoizedProps;try{for(var t=n.type,a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Xn(e,t,r),e[Wn]=n,e[ne]=r}catch(l){gn(n,n.return,l)}}var Ze=!1,Hn=!1,fu=!1,Vo=typeof WeakSet=="function"?WeakSet:Set,qn=null;function zd(n,e){if(n=n.containerInfo,Bu=Ul,n=Pc(n),si(n)){if("selectionStart"in n)var r={start:n.selectionStart,end:n.selectionEnd};else n:{r=(r=n.ownerDocument)&&r.defaultView||window;var t=r.getSelection&&r.getSelection();if(t&&t.rangeCount!==0){r=t.anchorNode;var a=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{r.nodeType,l.nodeType}catch{r=null;break n}var i=0,u=-1,c=-1,h=0,v=0,A=n,y=null;e:for(;;){for(var m;A!==r||a!==0&&A.nodeType!==3||(u=i+a),A!==l||t!==0&&A.nodeType!==3||(c=i+t),A.nodeType===3&&(i+=A.nodeValue.length),(m=A.firstChild)!==null;)y=A,A=m;for(;;){if(A===n)break e;if(y===r&&++h===a&&(u=i),y===l&&++v===t&&(c=i),(m=A.nextSibling)!==null)break;A=y,y=A.parentNode}A=m}r=u===-1||c===-1?null:{start:u,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(zu={focusedElem:n,selectionRange:r},Ul=!1,qn=e;qn!==null;)if(e=qn,n=e.child,(e.subtreeFlags&1024)!==0&&n!==null)n.return=e,qn=n;else for(;qn!==null;){switch(e=qn,l=e.alternate,n=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&l!==null){n=void 0,r=e,a=l.memoizedProps,l=l.memoizedState,t=r.stateNode;try{var j=Br(r.type,a,r.elementType===r.type);n=t.getSnapshotBeforeUpdate(j,l),t.__reactInternalSnapshotBeforeUpdate=n}catch(G){gn(r,r.return,G)}}break;case 3:if((n&1024)!==0){if(n=e.stateNode.containerInfo,r=n.nodeType,r===9)ju(n);else if(r===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":ju(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(b(163))}if(n=e.sibling,n!==null){n.return=e.return,qn=n;break}qn=e.return}}function Qo(n,e,r){var t=r.flags;switch(r.tag){case 0:case 11:case 15:cr(n,r),t&4&&aa(5,r);break;case 1:if(cr(n,r),t&4)if(n=r.stateNode,e===null)try{n.componentDidMount()}catch(i){gn(r,r.return,i)}else{var a=Br(r.type,e.memoizedProps);e=e.memoizedState;try{n.componentDidUpdate(a,e,n.__reactInternalSnapshotBeforeUpdate)}catch(i){gn(r,r.return,i)}}t&64&&Go(r),t&512&&la(r,r.return);break;case 3:if(cr(n,r),t&64&&(n=r.updateQueue,n!==null)){if(e=null,r.child!==null)switch(r.child.tag){case 27:case 5:e=r.child.stateNode;break;case 1:e=r.child.stateNode}try{Rs(n,e)}catch(i){gn(r,r.return,i)}}break;case 27:e===null&&t&4&&qo(r);case 26:case 5:cr(n,r),e===null&&t&4&&jo(r),t&512&&la(r,r.return);break;case 12:cr(n,r);break;case 13:cr(n,r),t&4&&Zo(n,r),t&64&&(n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(r=Xd.bind(null,r),s0(n,r))));break;case 22:if(t=r.memoizedState!==null||Ze,!t){e=e!==null&&e.memoizedState!==null||Hn,a=Ze;var l=Hn;Ze=t,(Hn=e)&&!l?sr(n,r,(r.subtreeFlags&8772)!==0):cr(n,r),Ze=a,Hn=l}break;case 30:break;default:cr(n,r)}}function Ko(n){var e=n.alternate;e!==null&&(n.alternate=null,Ko(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&Kl(e)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Rn=null,te=!1;function We(n,e,r){for(r=r.child;r!==null;)Xo(n,e,r),r=r.sibling}function Xo(n,e,r){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(_t,r)}catch{}switch(r.tag){case 26:Hn||Ue(r,e),We(n,e,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Hn||Ue(r,e);var t=Rn,a=te;yr(r.type)&&(Rn=r.stateNode,te=!1),We(n,e,r),ha(r.stateNode),Rn=t,te=a;break;case 5:Hn||Ue(r,e);case 6:if(t=Rn,a=te,Rn=null,We(n,e,r),Rn=t,te=a,Rn!==null)if(te)try{(Rn.nodeType===9?Rn.body:Rn.nodeName==="HTML"?Rn.ownerDocument.body:Rn).removeChild(r.stateNode)}catch(l){gn(r,e,l)}else try{Rn.removeChild(r.stateNode)}catch(l){gn(r,e,l)}break;case 18:Rn!==null&&(te?(n=Rn,xf(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,r.stateNode),Ea(n)):xf(Rn,r.stateNode));break;case 4:t=Rn,a=te,Rn=r.stateNode.containerInfo,te=!0,We(n,e,r),Rn=t,te=a;break;case 0:case 11:case 14:case 15:Hn||ur(2,r,e),Hn||ur(4,r,e),We(n,e,r);break;case 1:Hn||(Ue(r,e),t=r.stateNode,typeof t.componentWillUnmount=="function"&&Yo(r,e,t)),We(n,e,r);break;case 21:We(n,e,r);break;case 22:Hn=(t=Hn)||r.memoizedState!==null,We(n,e,r),Hn=t;break;default:We(n,e,r)}}function Zo(n,e){if(e.memoizedState===null&&(n=e.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Ea(n)}catch(r){gn(e,e.return,r)}}function Gd(n){switch(n.tag){case 13:case 19:var e=n.stateNode;return e===null&&(e=n.stateNode=new Vo),e;case 22:return n=n.stateNode,e=n._retryCache,e===null&&(e=n._retryCache=new Vo),e;default:throw Error(b(435,n.tag))}}function bu(n,e){var r=Gd(n);e.forEach(function(t){var a=Zd.bind(null,n,t);r.has(t)||(r.add(t),t.then(a,a))})}function se(n,e){var r=e.deletions;if(r!==null)for(var t=0;t<r.length;t++){var a=r[t],l=n,i=e,u=i;n:for(;u!==null;){switch(u.tag){case 27:if(yr(u.type)){Rn=u.stateNode,te=!1;break n}break;case 5:Rn=u.stateNode,te=!1;break n;case 3:case 4:Rn=u.stateNode.containerInfo,te=!0;break n}u=u.return}if(Rn===null)throw Error(b(160));Xo(l,i,a),Rn=null,te=!1,l=a.alternate,l!==null&&(l.return=null),a.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Wo(e,n),e=e.sibling}var Ne=null;function Wo(n,e){var r=n.alternate,t=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:se(e,n),oe(n),t&4&&(ur(3,n,n.return),aa(3,n),ur(5,n,n.return));break;case 1:se(e,n),oe(n),t&512&&(Hn||r===null||Ue(r,r.return)),t&64&&Ze&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(r=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=r===null?t:r.concat(t))));break;case 26:var a=Ne;if(se(e,n),oe(n),t&512&&(Hn||r===null||Ue(r,r.return)),t&4){var l=r!==null?r.memoizedState:null;if(t=n.memoizedState,r===null)if(t===null)if(n.stateNode===null){n:{t=n.type,r=n.memoizedProps,a=a.ownerDocument||a;e:switch(t){case"title":l=a.getElementsByTagName("title")[0],(!l||l[Mt]||l[Wn]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=a.createElement(t),a.head.insertBefore(l,a.querySelector("head > title"))),Xn(l,t,r),l[Wn]=n,jn(l),t=l;break n;case"link":var i=Vf("link","href",a).get(t+(r.href||""));if(i){for(var u=0;u<i.length;u++)if(l=i[u],l.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&l.getAttribute("rel")===(r.rel==null?null:r.rel)&&l.getAttribute("title")===(r.title==null?null:r.title)&&l.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){i.splice(u,1);break e}}l=a.createElement(t),Xn(l,t,r),a.head.appendChild(l);break;case"meta":if(i=Vf("meta","content",a).get(t+(r.content||""))){for(u=0;u<i.length;u++)if(l=i[u],l.getAttribute("content")===(r.content==null?null:""+r.content)&&l.getAttribute("name")===(r.name==null?null:r.name)&&l.getAttribute("property")===(r.property==null?null:r.property)&&l.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&l.getAttribute("charset")===(r.charSet==null?null:r.charSet)){i.splice(u,1);break e}}l=a.createElement(t),Xn(l,t,r),a.head.appendChild(l);break;default:throw Error(b(468,t))}l[Wn]=n,jn(l),t=l}n.stateNode=t}else Qf(a,n.type,n.stateNode);else n.stateNode=qf(a,t,n.memoizedProps);else l!==t?(l===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):l.count--,t===null?Qf(a,n.type,n.stateNode):qf(a,t,n.memoizedProps)):t===null&&n.stateNode!==null&&cu(n,n.memoizedProps,r.memoizedProps)}break;case 27:se(e,n),oe(n),t&512&&(Hn||r===null||Ue(r,r.return)),r!==null&&t&4&&cu(n,n.memoizedProps,r.memoizedProps);break;case 5:if(se(e,n),oe(n),t&512&&(Hn||r===null||Ue(r,r.return)),n.flags&32){a=n.stateNode;try{Wr(a,"")}catch(m){gn(n,n.return,m)}}t&4&&n.stateNode!=null&&(a=n.memoizedProps,cu(n,a,r!==null?r.memoizedProps:a)),t&1024&&(fu=!0);break;case 6:if(se(e,n),oe(n),t&4){if(n.stateNode===null)throw Error(b(162));t=n.memoizedProps,r=n.stateNode;try{r.nodeValue=t}catch(m){gn(n,n.return,m)}}break;case 3:if(Ml=null,a=Ne,Ne=Dl(e.containerInfo),se(e,n),Ne=a,oe(n),t&4&&r!==null&&r.memoizedState.isDehydrated)try{Ea(e.containerInfo)}catch(m){gn(n,n.return,m)}fu&&(fu=!1,Io(n));break;case 4:t=Ne,Ne=Dl(n.stateNode.containerInfo),se(e,n),oe(n),Ne=t;break;case 12:se(e,n),oe(n);break;case 13:se(e,n),oe(n),n.child.flags&8192&&n.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(vu=Pn()),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,bu(n,t)));break;case 22:a=n.memoizedState!==null;var c=r!==null&&r.memoizedState!==null,h=Ze,v=Hn;if(Ze=h||a,Hn=v||c,se(e,n),Hn=v,Ze=h,oe(n),t&8192)n:for(e=n.stateNode,e._visibility=a?e._visibility&-2:e._visibility|1,a&&(r===null||c||Ze||Hn||zr(n)),r=null,e=n;;){if(e.tag===5||e.tag===26){if(r===null){c=r=e;try{if(l=c.stateNode,a)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=c.stateNode;var A=c.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(m){gn(c,c.return,m)}}}else if(e.tag===6){if(r===null){c=e;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(m){gn(c,c.return,m)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===n)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break n;for(;e.sibling===null;){if(e.return===null||e.return===n)break n;r===e&&(r=null),e=e.return}r===e&&(r=null),e.sibling.return=e.return,e=e.sibling}t&4&&(t=n.updateQueue,t!==null&&(r=t.retryQueue,r!==null&&(t.retryQueue=null,bu(n,r))));break;case 19:se(e,n),oe(n),t&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,bu(n,t)));break;case 30:break;case 21:break;default:se(e,n),oe(n)}}function oe(n){var e=n.flags;if(e&2){try{for(var r,t=n.return;t!==null;){if(wo(t)){r=t;break}t=t.return}if(r==null)throw Error(b(160));switch(r.tag){case 27:var a=r.stateNode,l=su(n);hl(n,l,a);break;case 5:var i=r.stateNode;r.flags&32&&(Wr(i,""),r.flags&=-33);var u=su(n);hl(n,u,i);break;case 3:case 4:var c=r.stateNode.containerInfo,h=su(n);ou(n,h,c);break;default:throw Error(b(161))}}catch(v){gn(n,n.return,v)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Io(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var e=n;Io(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),n=n.sibling}}function cr(n,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Qo(n,e.alternate,e),e=e.sibling}function zr(n){for(n=n.child;n!==null;){var e=n;switch(e.tag){case 0:case 11:case 14:case 15:ur(4,e,e.return),zr(e);break;case 1:Ue(e,e.return);var r=e.stateNode;typeof r.componentWillUnmount=="function"&&Yo(e,e.return,r),zr(e);break;case 27:ha(e.stateNode);case 26:case 5:Ue(e,e.return),zr(e);break;case 22:e.memoizedState===null&&zr(e);break;case 30:zr(e);break;default:zr(e)}n=n.sibling}}function sr(n,e,r){for(r=r&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var t=e.alternate,a=n,l=e,i=l.flags;switch(l.tag){case 0:case 11:case 15:sr(a,l,r),aa(4,l);break;case 1:if(sr(a,l,r),t=l,a=t.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(h){gn(t,t.return,h)}if(t=l,a=t.updateQueue,a!==null){var u=t.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)Es(c[a],u)}catch(h){gn(t,t.return,h)}}r&&i&64&&Go(l),la(l,l.return);break;case 27:qo(l);case 26:case 5:sr(a,l,r),r&&t===null&&i&4&&jo(l),la(l,l.return);break;case 12:sr(a,l,r);break;case 13:sr(a,l,r),r&&i&4&&Zo(a,l);break;case 22:l.memoizedState===null&&sr(a,l,r),la(l,l.return);break;case 30:break;default:sr(a,l,r)}e=e.sibling}}function du(n,e){var r=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==r&&(n!=null&&n.refCount++,r!=null&&Kt(r))}function hu(n,e){n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kt(n))}function Le(n,e,r,t){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Jo(n,e,r,t),e=e.sibling}function Jo(n,e,r,t){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Le(n,e,r,t),a&2048&&aa(9,e);break;case 1:Le(n,e,r,t);break;case 3:Le(n,e,r,t),a&2048&&(n=null,e.alternate!==null&&(n=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==n&&(e.refCount++,n!=null&&Kt(n)));break;case 12:if(a&2048){Le(n,e,r,t),n=e.stateNode;try{var l=e.memoizedProps,i=l.id,u=l.onPostCommit;typeof u=="function"&&u(i,e.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(c){gn(e,e.return,c)}}else Le(n,e,r,t);break;case 13:Le(n,e,r,t);break;case 23:break;case 22:l=e.stateNode,i=e.alternate,e.memoizedState!==null?l._visibility&2?Le(n,e,r,t):ia(n,e):l._visibility&2?Le(n,e,r,t):(l._visibility|=2,bt(n,e,r,t,(e.subtreeFlags&10256)!==0)),a&2048&&du(i,e);break;case 24:Le(n,e,r,t),a&2048&&hu(e.alternate,e);break;default:Le(n,e,r,t)}}function bt(n,e,r,t,a){for(a=a&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var l=n,i=e,u=r,c=t,h=i.flags;switch(i.tag){case 0:case 11:case 15:bt(l,i,u,c,a),aa(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?bt(l,i,u,c,a):ia(l,i):(v._visibility|=2,bt(l,i,u,c,a)),a&&h&2048&&du(i.alternate,i);break;case 24:bt(l,i,u,c,a),a&&h&2048&&hu(i.alternate,i);break;default:bt(l,i,u,c,a)}e=e.sibling}}function ia(n,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var r=n,t=e,a=t.flags;switch(t.tag){case 22:ia(r,t),a&2048&&du(t.alternate,t);break;case 24:ia(r,t),a&2048&&hu(t.alternate,t);break;default:ia(r,t)}e=e.sibling}}var ua=8192;function dt(n){if(n.subtreeFlags&ua)for(n=n.child;n!==null;)ko(n),n=n.sibling}function ko(n){switch(n.tag){case 26:dt(n),n.flags&ua&&n.memoizedState!==null&&E0(Ne,n.memoizedState,n.memoizedProps);break;case 5:dt(n);break;case 3:case 4:var e=Ne;Ne=Dl(n.stateNode.containerInfo),dt(n),Ne=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=ua,ua=16777216,dt(n),ua=e):dt(n));break;default:dt(n)}}function Fo(n){var e=n.alternate;if(e!==null&&(n=e.child,n!==null)){e.child=null;do e=n.sibling,n.sibling=null,n=e;while(n!==null)}}function ca(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var r=0;r<e.length;r++){var t=e[r];qn=t,$o(t,n)}Fo(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Po(n),n=n.sibling}function Po(n){switch(n.tag){case 0:case 11:case 15:ca(n),n.flags&2048&&ur(9,n,n.return);break;case 3:ca(n);break;case 12:ca(n);break;case 22:var e=n.stateNode;n.memoizedState!==null&&e._visibility&2&&(n.return===null||n.return.tag!==13)?(e._visibility&=-3,yl(n)):ca(n);break;default:ca(n)}}function yl(n){var e=n.deletions;if((n.flags&16)!==0){if(e!==null)for(var r=0;r<e.length;r++){var t=e[r];qn=t,$o(t,n)}Fo(n)}for(n=n.child;n!==null;){switch(e=n,e.tag){case 0:case 11:case 15:ur(8,e,e.return),yl(e);break;case 22:r=e.stateNode,r._visibility&2&&(r._visibility&=-3,yl(e));break;default:yl(e)}n=n.sibling}}function $o(n,e){for(;qn!==null;){var r=qn;switch(r.tag){case 0:case 11:case 15:ur(8,r,e);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var t=r.memoizedState.cachePool.pool;t!=null&&t.refCount++}break;case 24:Kt(r.memoizedState.cache)}if(t=r.child,t!==null)t.return=r,qn=t;else n:for(r=n;qn!==null;){t=qn;var a=t.sibling,l=t.return;if(Ko(t),t===r){qn=null;break n}if(a!==null){a.return=l,qn=a;break n}qn=l}}}var Yd={getCacheForType:function(n){var e=In(zn),r=e.data.get(n);return r===void 0&&(r=n(),e.data.set(n,r)),r}},jd=typeof WeakMap=="function"?WeakMap:Map,fn=0,An=null,P=null,un=0,bn=0,fe=null,or=!1,ht=!1,yu=!1,Ie=0,Nn=0,fr=0,Gr=0,mu=0,Re=0,yt=0,sa=null,ae=null,pu=!1,vu=0,ml=1/0,pl=null,br=null,Kn=0,dr=null,mt=null,pt=0,gu=0,Su=null,nf=null,oa=0,Au=null;function be(){if((fn&2)!==0&&un!==0)return un&-un;if(p.T!==null){var n=at;return n!==0?n:Nu()}return yc()}function ef(){Re===0&&(Re=(un&536870912)===0||on?fc():536870912);var n=Ee.current;return n!==null&&(n.flags|=32),Re}function de(n,e,r){(n===An&&(bn===2||bn===9)||n.cancelPendingCommit!==null)&&(vt(n,0),hr(n,un,Re,!1)),Nt(n,r),((fn&2)===0||n!==An)&&(n===An&&((fn&2)===0&&(Gr|=r),Nn===4&&hr(n,un,Re,!1)),xe(n))}function rf(n,e,r){if((fn&6)!==0)throw Error(b(327));var t=!r&&(e&124)===0&&(e&n.expiredLanes)===0||Dt(n,e),a=t?Vd(n,e):Tu(n,e,!0),l=t;do{if(a===0){ht&&!t&&hr(n,e,0,!1);break}else{if(r=n.current.alternate,l&&!wd(r)){a=Tu(n,e,!1),l=!1;continue}if(a===2){if(l=e,n.errorRecoveryDisabledLanes&l)var i=0;else i=n.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;n:{var u=n;a=sa;var c=u.current.memoizedState.isDehydrated;if(c&&(vt(u,i).flags|=256),i=Tu(u,i,!1),i!==2){if(yu&&!c){u.errorRecoveryDisabledLanes|=l,Gr|=l,a=4;break n}l=ae,ae=a,l!==null&&(ae===null?ae=l:ae.push.apply(ae,l))}a=i}if(l=!1,a!==2)continue}}if(a===1){vt(n,0),hr(n,e,0,!0);break}n:{switch(t=n,l=a,l){case 0:case 1:throw Error(b(345));case 4:if((e&4194048)!==e)break;case 6:hr(t,e,Re,!or);break n;case 2:ae=null;break;case 3:case 5:break;default:throw Error(b(329))}if((e&62914560)===e&&(a=vu+300-Pn(),10<a)){if(hr(t,e,Re,!or),Na(t,0,!0)!==0)break n;t.timeoutHandle=Uf(tf.bind(null,t,r,ae,pl,pu,e,Re,Gr,yt,or,l,2,-0,0),a);break n}tf(t,r,ae,pl,pu,e,Re,Gr,yt,or,l,0,-0,0)}}break}while(!0);xe(n)}function tf(n,e,r,t,a,l,i,u,c,h,v,A,y,m){if(n.timeoutHandle=-1,A=e.subtreeFlags,(A&8192||(A&16785408)===16785408)&&(pa={stylesheets:null,count:0,unsuspend:A0},ko(e),A=R0(),A!==null)){n.cancelPendingCommit=A(ff.bind(null,n,e,l,r,t,a,i,u,c,v,1,y,m)),hr(n,l,i,!h);return}ff(n,e,l,r,t,a,i,u,c)}function wd(n){for(var e=n;;){var r=e.tag;if((r===0||r===11||r===15)&&e.flags&16384&&(r=e.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var t=0;t<r.length;t++){var a=r[t],l=a.getSnapshot;a=a.value;try{if(!ue(l(),a))return!1}catch{return!1}}if(r=e.child,e.subtreeFlags&16384&&r!==null)r.return=e,e=r;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(n,e,r,t){e&=~mu,e&=~Gr,n.suspendedLanes|=e,n.pingedLanes&=~e,t&&(n.warmLanes|=e),t=n.expirationTimes;for(var a=e;0<a;){var l=31-ie(a),i=1<<l;t[l]=-1,a&=~i}r!==0&&dc(n,r,e)}function vl(){return(fn&6)===0?(fa(0),!1):!0}function Eu(){if(P!==null){if(bn===0)var n=P.return;else n=P,we=Hr=null,ji(n),ot=null,ea=0,n=P;for(;n!==null;)zo(n.alternate,n),n=n.return;P=null}}function vt(n,e){var r=n.timeoutHandle;r!==-1&&(n.timeoutHandle=-1,a0(r)),r=n.cancelPendingCommit,r!==null&&(n.cancelPendingCommit=null,r()),Eu(),An=n,P=r=Ge(n.current,null),un=e,bn=0,fe=null,or=!1,ht=Dt(n,e),yu=!1,yt=Re=mu=Gr=fr=Nn=0,ae=sa=null,pu=!1,(e&8)!==0&&(e|=e&32);var t=n.entangledLanes;if(t!==0)for(n=n.entanglements,t&=e;0<t;){var a=31-ie(t),l=1<<a;e|=n[a],t&=~l}return Ie=e,wa(),r}function af(n,e){I=null,p.H=ll,e===Zt||e===Ja?(e=Ss(),bn=3):e===ps?(e=Ss(),bn=4):bn=e===Eo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,fe=e,P===null&&(Nn=1,ol(n,ve(e,n.current)))}function lf(){var n=p.H;return p.H=ll,n===null?ll:n}function uf(){var n=p.A;return p.A=Yd,n}function Ru(){Nn=4,or||(un&4194048)!==un&&Ee.current!==null||(ht=!0),(fr&134217727)===0&&(Gr&134217727)===0||An===null||hr(An,un,Re,!1)}function Tu(n,e,r){var t=fn;fn|=2;var a=lf(),l=uf();(An!==n||un!==e)&&(pl=null,vt(n,e)),e=!1;var i=Nn;n:do try{if(bn!==0&&P!==null){var u=P,c=fe;switch(bn){case 8:Eu(),i=6;break n;case 3:case 2:case 9:case 6:Ee.current===null&&(e=!0);var h=bn;if(bn=0,fe=null,gt(n,u,c,h),r&&ht){i=0;break n}break;default:h=bn,bn=0,fe=null,gt(n,u,c,h)}}qd(),i=Nn;break}catch(v){af(n,v)}while(!0);return e&&n.shellSuspendCounter++,we=Hr=null,fn=t,p.H=a,p.A=l,P===null&&(An=null,un=0,wa()),i}function qd(){for(;P!==null;)cf(P)}function Vd(n,e){var r=fn;fn|=2;var t=lf(),a=uf();An!==n||un!==e?(pl=null,ml=Pn()+500,vt(n,e)):ht=Dt(n,e);n:do try{if(bn!==0&&P!==null){e=P;var l=fe;e:switch(bn){case 1:bn=0,fe=null,gt(n,e,l,1);break;case 2:case 9:if(vs(l)){bn=0,fe=null,sf(e);break}e=function(){bn!==2&&bn!==9||An!==n||(bn=7),xe(n)},l.then(e,e);break n;case 3:bn=7;break n;case 4:bn=5;break n;case 7:vs(l)?(bn=0,fe=null,sf(e)):(bn=0,fe=null,gt(n,e,l,7));break;case 5:var i=null;switch(P.tag){case 26:i=P.memoizedState;case 5:case 27:var u=P;if(!i||Kf(i)){bn=0,fe=null;var c=u.sibling;if(c!==null)P=c;else{var h=u.return;h!==null?(P=h,gl(h)):P=null}break e}}bn=0,fe=null,gt(n,e,l,5);break;case 6:bn=0,fe=null,gt(n,e,l,6);break;case 8:Eu(),Nn=6;break n;default:throw Error(b(462))}}Qd();break}catch(v){af(n,v)}while(!0);return we=Hr=null,p.H=t,p.A=a,fn=r,P!==null?0:(An=null,un=0,wa(),Nn)}function Qd(){for(;P!==null&&!jl();)cf(P)}function cf(n){var e=xo(n.alternate,n,Ie);n.memoizedProps=n.pendingProps,e===null?gl(n):P=e}function sf(n){var e=n,r=e.alternate;switch(e.tag){case 15:case 0:e=No(r,e,e.pendingProps,e.type,void 0,un);break;case 11:e=No(r,e,e.pendingProps,e.type.render,e.ref,un);break;case 5:ji(e);default:zo(r,e),e=P=cs(e,Ie),e=xo(r,e,Ie)}n.memoizedProps=n.pendingProps,e===null?gl(n):P=e}function gt(n,e,r,t){we=Hr=null,ji(e),ot=null,ea=0;var a=e.return;try{if(Ud(n,a,e,r,un)){Nn=1,ol(n,ve(r,n.current)),P=null;return}}catch(l){if(a!==null)throw P=a,l;Nn=1,ol(n,ve(r,n.current)),P=null;return}e.flags&32768?(on||t===1?n=!0:ht||(un&536870912)!==0?n=!1:(or=n=!0,(t===2||t===9||t===3||t===6)&&(t=Ee.current,t!==null&&t.tag===13&&(t.flags|=16384))),of(e,n)):gl(e)}function gl(n){var e=n;do{if((e.flags&32768)!==0){of(e,or);return}n=e.return;var r=xd(e.alternate,e,Ie);if(r!==null){P=r;return}if(e=e.sibling,e!==null){P=e;return}P=e=n}while(e!==null);Nn===0&&(Nn=5)}function of(n,e){do{var r=Bd(n.alternate,n);if(r!==null){r.flags&=32767,P=r;return}if(r=n.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!e&&(n=n.sibling,n!==null)){P=n;return}P=n=r}while(n!==null);Nn=6,P=null}function ff(n,e,r,t,a,l,i,u,c){n.cancelPendingCommit=null;do Sl();while(Kn!==0);if((fn&6)!==0)throw Error(b(327));if(e!==null){if(e===n.current)throw Error(b(177));if(l=e.lanes|e.childLanes,l|=hi,Ab(n,r,l,i,u,c),n===An&&(P=An=null,un=0),mt=e,dr=n,pt=r,gu=l,Su=a,nf=t,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Wd(Oa,function(){return mf(),null})):(n.callbackNode=null,n.callbackPriority=0),t=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||t){t=p.T,p.T=null,a=D.p,D.p=2,i=fn,fn|=4;try{zd(n,e,r)}finally{fn=i,D.p=a,p.T=t}}Kn=1,bf(),df(),hf()}}function bf(){if(Kn===1){Kn=0;var n=dr,e=mt,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=p.T,p.T=null;var t=D.p;D.p=2;var a=fn;fn|=4;try{Wo(e,n);var l=zu,i=Pc(n.containerInfo),u=l.focusedElem,c=l.selectionRange;if(i!==u&&u&&u.ownerDocument&&Fc(u.ownerDocument.documentElement,u)){if(c!==null&&si(u)){var h=c.start,v=c.end;if(v===void 0&&(v=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(v,u.value.length);else{var A=u.ownerDocument||document,y=A&&A.defaultView||window;if(y.getSelection){var m=y.getSelection(),j=u.textContent.length,G=Math.min(c.start,j),mn=c.end===void 0?G:Math.min(c.end,j);!m.extend&&G>mn&&(i=mn,mn=G,G=i);var f=kc(u,G),o=kc(u,mn);if(f&&o&&(m.rangeCount!==1||m.anchorNode!==f.node||m.anchorOffset!==f.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)){var d=A.createRange();d.setStart(f.node,f.offset),m.removeAllRanges(),G>mn?(m.addRange(d),m.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),m.addRange(d))}}}}for(A=[],m=u;m=m.parentNode;)m.nodeType===1&&A.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<A.length;u++){var S=A[u];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ul=!!Bu,zu=Bu=null}finally{fn=a,D.p=t,p.T=r}}n.current=e,Kn=2}}function df(){if(Kn===2){Kn=0;var n=dr,e=mt,r=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||r){r=p.T,p.T=null;var t=D.p;D.p=2;var a=fn;fn|=4;try{Qo(n,e.alternate,e)}finally{fn=a,D.p=t,p.T=r}}Kn=3}}function hf(){if(Kn===4||Kn===3){Kn=0,uc();var n=dr,e=mt,r=pt,t=nf;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Kn=5:(Kn=0,mt=dr=null,yf(n,n.pendingLanes));var a=n.pendingLanes;if(a===0&&(br=null),Vl(r),e=e.stateNode,le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(_t,e,void 0,(e.current.flags&128)===128)}catch{}if(t!==null){e=p.T,a=D.p,D.p=2,p.T=null;try{for(var l=n.onRecoverableError,i=0;i<t.length;i++){var u=t[i];l(u.value,{componentStack:u.stack})}}finally{p.T=e,D.p=a}}(pt&3)!==0&&Sl(),xe(n),a=n.pendingLanes,(r&4194090)!==0&&(a&42)!==0?n===Au?oa++:(oa=0,Au=n):oa=0,fa(0)}}function yf(n,e){(n.pooledCacheLanes&=e)===0&&(e=n.pooledCache,e!=null&&(n.pooledCache=null,Kt(e)))}function Sl(n){return bf(),df(),hf(),mf()}function mf(){if(Kn!==5)return!1;var n=dr,e=gu;gu=0;var r=Vl(pt),t=p.T,a=D.p;try{D.p=32>r?32:r,p.T=null,r=Su,Su=null;var l=dr,i=pt;if(Kn=0,mt=dr=null,pt=0,(fn&6)!==0)throw Error(b(331));var u=fn;if(fn|=4,Po(l.current),Jo(l,l.current,i,r),fn=u,fa(0,!1),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(_t,l)}catch{}return!0}finally{D.p=a,p.T=t,yf(n,e)}}function pf(n,e,r){e=ve(r,e),e=$i(n.stateNode,e,2),n=tr(n,e,2),n!==null&&(Nt(n,2),xe(n))}function gn(n,e,r){if(n.tag===3)pf(n,n,r);else for(;e!==null;){if(e.tag===3){pf(e,n,r);break}else if(e.tag===1){var t=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(br===null||!br.has(t))){n=ve(r,n),r=So(2),t=tr(e,r,2),t!==null&&(Ao(r,t,e,n),Nt(t,2),xe(t));break}}e=e.return}}function Ou(n,e,r){var t=n.pingCache;if(t===null){t=n.pingCache=new jd;var a=new Set;t.set(e,a)}else a=t.get(e),a===void 0&&(a=new Set,t.set(e,a));a.has(r)||(yu=!0,a.add(r),n=Kd.bind(null,n,e,r),e.then(n,n))}function Kd(n,e,r){var t=n.pingCache;t!==null&&t.delete(e),n.pingedLanes|=n.suspendedLanes&r,n.warmLanes&=~r,An===n&&(un&r)===r&&(Nn===4||Nn===3&&(un&62914560)===un&&300>Pn()-vu?(fn&2)===0&&vt(n,0):mu|=r,yt===un&&(yt=0)),xe(n)}function vf(n,e){e===0&&(e=bc()),n=nt(n,e),n!==null&&(Nt(n,e),xe(n))}function Xd(n){var e=n.memoizedState,r=0;e!==null&&(r=e.retryLane),vf(n,r)}function Zd(n,e){var r=0;switch(n.tag){case 13:var t=n.stateNode,a=n.memoizedState;a!==null&&(r=a.retryLane);break;case 19:t=n.stateNode;break;case 22:t=n.stateNode._retryCache;break;default:throw Error(b(314))}t!==null&&t.delete(e),vf(n,r)}function Wd(n,e){return _e(n,e)}var Al=null,St=null,_u=!1,El=!1,Du=!1,Yr=0;function xe(n){n!==St&&n.next===null&&(St===null?Al=St=n:St=St.next=n),El=!0,_u||(_u=!0,Jd())}function fa(n,e){if(!Du&&El){Du=!0;do for(var r=!1,t=Al;t!==null;){if(n!==0){var a=t.pendingLanes;if(a===0)var l=0;else{var i=t.suspendedLanes,u=t.pingedLanes;l=(1<<31-ie(42|n)+1)-1,l&=a&~(i&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(r=!0,Ef(t,l))}else l=un,l=Na(t,t===An?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),(l&3)===0||Dt(t,l)||(r=!0,Ef(t,l));t=t.next}while(r);Du=!1}}function Id(){gf()}function gf(){El=_u=!1;var n=0;Yr!==0&&(t0()&&(n=Yr),Yr=0);for(var e=Pn(),r=null,t=Al;t!==null;){var a=t.next,l=Sf(t,e);l===0?(t.next=null,r===null?Al=a:r.next=a,a===null&&(St=r)):(r=t,(n!==0||(l&3)!==0)&&(El=!0)),t=a}fa(n)}function Sf(n,e){for(var r=n.suspendedLanes,t=n.pingedLanes,a=n.expirationTimes,l=n.pendingLanes&-62914561;0<l;){var i=31-ie(l),u=1<<i,c=a[i];c===-1?((u&r)===0||(u&t)!==0)&&(a[i]=Sb(u,e)):c<=e&&(n.expiredLanes|=u),l&=~u}if(e=An,r=un,r=Na(n,n===e?r:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t=n.callbackNode,r===0||n===e&&(bn===2||bn===9)||n.cancelPendingCommit!==null)return t!==null&&t!==null&&ye(t),n.callbackNode=null,n.callbackPriority=0;if((r&3)===0||Dt(n,r)){if(e=r&-r,e===n.callbackPriority)return e;switch(t!==null&&ye(t),Vl(r)){case 2:case 8:r=sc;break;case 32:r=Oa;break;case 268435456:r=oc;break;default:r=Oa}return t=Af.bind(null,n),r=_e(r,t),n.callbackPriority=e,n.callbackNode=r,e}return t!==null&&t!==null&&ye(t),n.callbackPriority=2,n.callbackNode=null,2}function Af(n,e){if(Kn!==0&&Kn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var r=n.callbackNode;if(Sl()&&n.callbackNode!==r)return null;var t=un;return t=Na(n,n===An?t:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),t===0?null:(rf(n,t,e),Sf(n,Pn()),n.callbackNode!=null&&n.callbackNode===r?Af.bind(null,n):null)}function Ef(n,e){if(Sl())return null;rf(n,e,!0)}function Jd(){l0(function(){(fn&6)!==0?_e(cc,Id):gf()})}function Nu(){return Yr===0&&(Yr=fc()),Yr}function Rf(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:La(""+n)}function Tf(n,e){var r=e.ownerDocument.createElement("input");return r.name=e.name,r.value=e.value,n.id&&r.setAttribute("form",n.id),e.parentNode.insertBefore(r,e),n=new FormData(n),r.parentNode.removeChild(r),n}function kd(n,e,r,t,a){if(e==="submit"&&r&&r.stateNode===a){var l=Rf((a[ne]||null).action),i=t.submitter;i&&(e=(e=i[ne]||null)?Rf(e.formAction):i.getAttribute("formAction"),e!==null&&(l=e,i=null));var u=new Ga("action","action",null,t,a);n.push({event:u,listeners:[{instance:null,listener:function(){if(t.defaultPrevented){if(Yr!==0){var c=i?Tf(a,i):new FormData(a);Ii(r,{pending:!0,data:c,method:a.method,action:l},null,c)}}else typeof l=="function"&&(u.preventDefault(),c=i?Tf(a,i):new FormData(a),Ii(r,{pending:!0,data:c,method:a.method,action:l},l,c))},currentTarget:a}]})}}for(var Mu=0;Mu<di.length;Mu++){var Cu=di[Mu],Fd=Cu.toLowerCase(),Pd=Cu[0].toUpperCase()+Cu.slice(1);De(Fd,"on"+Pd)}De(es,"onAnimationEnd"),De(rs,"onAnimationIteration"),De(ts,"onAnimationStart"),De("dblclick","onDoubleClick"),De("focusin","onFocus"),De("focusout","onBlur"),De(yd,"onTransitionRun"),De(md,"onTransitionStart"),De(pd,"onTransitionCancel"),De(as,"onTransitionEnd"),Kr("onMouseEnter",["mouseout","mouseover"]),Kr("onMouseLeave",["mouseout","mouseover"]),Kr("onPointerEnter",["pointerout","pointerover"]),Kr("onPointerLeave",["pointerout","pointerover"]),Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Er("onBeforeInput",["compositionend","keypress","textInput","paste"]),Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$d=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ba));function Of(n,e){e=(e&4)!==0;for(var r=0;r<n.length;r++){var t=n[r],a=t.event;t=t.listeners;n:{var l=void 0;if(e)for(var i=t.length-1;0<=i;i--){var u=t[i],c=u.instance,h=u.currentTarget;if(u=u.listener,c!==l&&a.isPropagationStopped())break n;l=u,a.currentTarget=h;try{l(a)}catch(v){sl(v)}a.currentTarget=null,l=c}else for(i=0;i<t.length;i++){if(u=t[i],c=u.instance,h=u.currentTarget,u=u.listener,c!==l&&a.isPropagationStopped())break n;l=u,a.currentTarget=h;try{l(a)}catch(v){sl(v)}a.currentTarget=null,l=c}}}}function $(n,e){var r=e[Ql];r===void 0&&(r=e[Ql]=new Set);var t=n+"__bubble";r.has(t)||(_f(e,n,2,!1),r.add(t))}function Hu(n,e,r){var t=0;e&&(t|=4),_f(r,n,t,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Uu(n){if(!n[Rl]){n[Rl]=!0,pc.forEach(function(r){r!=="selectionchange"&&($d.has(r)||Hu(r,!1,n),Hu(r,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,Hu("selectionchange",!1,e))}}function _f(n,e,r,t){switch(kf(e)){case 2:var a=_0;break;case 8:a=D0;break;default:a=Zu}r=a.bind(null,e,r,n),a=void 0,!ni||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(a=!0),t?a!==void 0?n.addEventListener(e,r,{capture:!0,passive:a}):n.addEventListener(e,r,!0):a!==void 0?n.addEventListener(e,r,{passive:a}):n.addEventListener(e,r,!1)}function Lu(n,e,r,t,a){var l=t;if((e&1)===0&&(e&2)===0&&t!==null)n:for(;;){if(t===null)return;var i=t.tag;if(i===3||i===4){var u=t.stateNode.containerInfo;if(u===a)break;if(i===4)for(i=t.return;i!==null;){var c=i.tag;if((c===3||c===4)&&i.stateNode.containerInfo===a)return;i=i.return}for(;u!==null;){if(i=qr(u),i===null)return;if(c=i.tag,c===5||c===6||c===26||c===27){t=l=i;continue n}u=u.parentNode}}t=t.return}Hc(function(){var h=l,v=Pl(r),A=[];n:{var y=ls.get(n);if(y!==void 0){var m=Ga,j=n;switch(n){case"keypress":if(Ba(r)===0)break n;case"keydown":case"keyup":m=Wb;break;case"focusin":j="focus",m=ai;break;case"focusout":j="blur",m=ai;break;case"beforeblur":case"afterblur":m=ai;break;case"click":if(r.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kb;break;case es:case rs:case ts:m=Yb;break;case as:m=Pb;break;case"scroll":case"scrollend":m=Lb;break;case"wheel":m=nd;break;case"copy":case"cut":case"paste":m=wb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=zc;break;case"toggle":case"beforetoggle":m=rd}var G=(e&4)!==0,mn=!G&&(n==="scroll"||n==="scrollend"),f=G?y!==null?y+"Capture":null:y;G=[];for(var o=h,d;o!==null;){var S=o;if(d=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||d===null||f===null||(S=Ht(o,f),S!=null&&G.push(da(o,S,d))),mn)break;o=o.return}0<G.length&&(y=new m(y,j,null,r,v),A.push({event:y,listeners:G}))}}if((e&7)===0){n:{if(y=n==="mouseover"||n==="pointerover",m=n==="mouseout"||n==="pointerout",y&&r!==Fl&&(j=r.relatedTarget||r.fromElement)&&(qr(j)||j[wr]))break n;if((m||y)&&(y=v.window===v?v:(y=v.ownerDocument)?y.defaultView||y.parentWindow:window,m?(j=r.relatedTarget||r.toElement,m=h,j=j?qr(j):null,j!==null&&(mn=B(j),G=j.tag,j!==mn||G!==5&&G!==27&&G!==6)&&(j=null)):(m=null,j=h),m!==j)){if(G=xc,S="onMouseLeave",f="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(G=zc,S="onPointerLeave",f="onPointerEnter",o="pointer"),mn=m==null?y:Ct(m),d=j==null?y:Ct(j),y=new G(S,o+"leave",m,r,v),y.target=mn,y.relatedTarget=d,S=null,qr(v)===h&&(G=new G(f,o+"enter",j,r,v),G.target=d,G.relatedTarget=mn,S=G),mn=S,m&&j)e:{for(G=m,f=j,o=0,d=G;d;d=At(d))o++;for(d=0,S=f;S;S=At(S))d++;for(;0<o-d;)G=At(G),o--;for(;0<d-o;)f=At(f),d--;for(;o--;){if(G===f||f!==null&&G===f.alternate)break e;G=At(G),f=At(f)}G=null}else G=null;m!==null&&Df(A,y,m,G,!1),j!==null&&mn!==null&&Df(A,mn,j,G,!0)}}n:{if(y=h?Ct(h):window,m=y.nodeName&&y.nodeName.toLowerCase(),m==="select"||m==="input"&&y.type==="file")var C=Kc;else if(Vc(y))if(Xc)C=bd;else{C=od;var J=sd}else m=y.nodeName,!m||m.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?h&&kl(h.elementType)&&(C=Kc):C=fd;if(C&&(C=C(n,h))){Qc(A,C,r,v);break n}J&&J(n,y,h),n==="focusout"&&h&&y.type==="number"&&h.memoizedProps.value!=null&&Jl(y,"number",y.value)}switch(J=h?Ct(h):window,n){case"focusin":(Vc(J)||J.contentEditable==="true")&&(Fr=J,oi=h,jt=null);break;case"focusout":jt=oi=Fr=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,$c(A,r,v);break;case"selectionchange":if(hd)break;case"keydown":case"keyup":$c(A,r,v)}var U;if(ii)n:{switch(n){case"compositionstart":var Y="onCompositionStart";break n;case"compositionend":Y="onCompositionEnd";break n;case"compositionupdate":Y="onCompositionUpdate";break n}Y=void 0}else kr?wc(n,r)&&(Y="onCompositionEnd"):n==="keydown"&&r.keyCode===229&&(Y="onCompositionStart");Y&&(Gc&&r.locale!=="ko"&&(kr||Y!=="onCompositionStart"?Y==="onCompositionEnd"&&kr&&(U=Uc()):($e=v,ei="value"in $e?$e.value:$e.textContent,kr=!0)),J=Tl(h,Y),0<J.length&&(Y=new Bc(Y,n,null,r,v),A.push({event:Y,listeners:J}),U?Y.data=U:(U=qc(r),U!==null&&(Y.data=U)))),(U=ad?ld(n,r):id(n,r))&&(Y=Tl(h,"onBeforeInput"),0<Y.length&&(J=new Bc("onBeforeInput","beforeinput",null,r,v),A.push({event:J,listeners:Y}),J.data=U)),kd(A,n,h,r,v)}Of(A,e)})}function da(n,e,r){return{instance:n,listener:e,currentTarget:r}}function Tl(n,e){for(var r=e+"Capture",t=[];n!==null;){var a=n,l=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||l===null||(a=Ht(n,r),a!=null&&t.unshift(da(n,a,l)),a=Ht(n,e),a!=null&&t.push(da(n,a,l))),n.tag===3)return t;n=n.return}return[]}function At(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function Df(n,e,r,t,a){for(var l=e._reactName,i=[];r!==null&&r!==t;){var u=r,c=u.alternate,h=u.stateNode;if(u=u.tag,c!==null&&c===t)break;u!==5&&u!==26&&u!==27||h===null||(c=h,a?(h=Ht(r,l),h!=null&&i.unshift(da(r,h,c))):a||(h=Ht(r,l),h!=null&&i.push(da(r,h,c)))),r=r.return}i.length!==0&&n.push({event:e,listeners:i})}var n0=/\r\n?/g,e0=/\u0000|\uFFFD/g;function Nf(n){return(typeof n=="string"?n:""+n).replace(n0,`
`).replace(e0,"")}function Mf(n,e){return e=Nf(e),Nf(n)===e}function Ol(){}function yn(n,e,r,t,a,l){switch(r){case"children":typeof t=="string"?e==="body"||e==="textarea"&&t===""||Wr(n,t):(typeof t=="number"||typeof t=="bigint")&&e!=="body"&&Wr(n,""+t);break;case"className":Ca(n,"class",t);break;case"tabIndex":Ca(n,"tabindex",t);break;case"dir":case"role":case"viewBox":case"width":case"height":Ca(n,r,t);break;case"style":Mc(n,t,l);break;case"data":if(e!=="object"){Ca(n,"data",t);break}case"src":case"href":if(t===""&&(e!=="a"||r!=="href")){n.removeAttribute(r);break}if(t==null||typeof t=="function"||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(r);break}t=La(""+t),n.setAttribute(r,t);break;case"action":case"formAction":if(typeof t=="function"){n.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(r==="formAction"?(e!=="input"&&yn(n,e,"name",a.name,a,null),yn(n,e,"formEncType",a.formEncType,a,null),yn(n,e,"formMethod",a.formMethod,a,null),yn(n,e,"formTarget",a.formTarget,a,null)):(yn(n,e,"encType",a.encType,a,null),yn(n,e,"method",a.method,a,null),yn(n,e,"target",a.target,a,null)));if(t==null||typeof t=="symbol"||typeof t=="boolean"){n.removeAttribute(r);break}t=La(""+t),n.setAttribute(r,t);break;case"onClick":t!=null&&(n.onclick=Ol);break;case"onScroll":t!=null&&$("scroll",n);break;case"onScrollEnd":t!=null&&$("scrollend",n);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(b(61));if(r=t.__html,r!=null){if(a.children!=null)throw Error(b(60));n.innerHTML=r}}break;case"multiple":n.multiple=t&&typeof t!="function"&&typeof t!="symbol";break;case"muted":n.muted=t&&typeof t!="function"&&typeof t!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(t==null||typeof t=="function"||typeof t=="boolean"||typeof t=="symbol"){n.removeAttribute("xlink:href");break}r=La(""+t),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(r,""+t):n.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":t&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(r,""):n.removeAttribute(r);break;case"capture":case"download":t===!0?n.setAttribute(r,""):t!==!1&&t!=null&&typeof t!="function"&&typeof t!="symbol"?n.setAttribute(r,t):n.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":t!=null&&typeof t!="function"&&typeof t!="symbol"&&!isNaN(t)&&1<=t?n.setAttribute(r,t):n.removeAttribute(r);break;case"rowSpan":case"start":t==null||typeof t=="function"||typeof t=="symbol"||isNaN(t)?n.removeAttribute(r):n.setAttribute(r,t);break;case"popover":$("beforetoggle",n),$("toggle",n),Ma(n,"popover",t);break;case"xlinkActuate":Be(n,"http://www.w3.org/1999/xlink","xlink:actuate",t);break;case"xlinkArcrole":Be(n,"http://www.w3.org/1999/xlink","xlink:arcrole",t);break;case"xlinkRole":Be(n,"http://www.w3.org/1999/xlink","xlink:role",t);break;case"xlinkShow":Be(n,"http://www.w3.org/1999/xlink","xlink:show",t);break;case"xlinkTitle":Be(n,"http://www.w3.org/1999/xlink","xlink:title",t);break;case"xlinkType":Be(n,"http://www.w3.org/1999/xlink","xlink:type",t);break;case"xmlBase":Be(n,"http://www.w3.org/XML/1998/namespace","xml:base",t);break;case"xmlLang":Be(n,"http://www.w3.org/XML/1998/namespace","xml:lang",t);break;case"xmlSpace":Be(n,"http://www.w3.org/XML/1998/namespace","xml:space",t);break;case"is":Ma(n,"is",t);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Hb.get(r)||r,Ma(n,r,t))}}function xu(n,e,r,t,a,l){switch(r){case"style":Mc(n,t,l);break;case"dangerouslySetInnerHTML":if(t!=null){if(typeof t!="object"||!("__html"in t))throw Error(b(61));if(r=t.__html,r!=null){if(a.children!=null)throw Error(b(60));n.innerHTML=r}}break;case"children":typeof t=="string"?Wr(n,t):(typeof t=="number"||typeof t=="bigint")&&Wr(n,""+t);break;case"onScroll":t!=null&&$("scroll",n);break;case"onScrollEnd":t!=null&&$("scrollend",n);break;case"onClick":t!=null&&(n.onclick=Ol);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vc.hasOwnProperty(r))n:{if(r[0]==="o"&&r[1]==="n"&&(a=r.endsWith("Capture"),e=r.slice(2,a?r.length-7:void 0),l=n[ne]||null,l=l!=null?l[r]:null,typeof l=="function"&&n.removeEventListener(e,l,a),typeof t=="function")){typeof l!="function"&&l!==null&&(r in n?n[r]=null:n.hasAttribute(r)&&n.removeAttribute(r)),n.addEventListener(e,t,a);break n}r in n?n[r]=t:t===!0?n.setAttribute(r,""):Ma(n,r,t)}}}function Xn(n,e,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":$("error",n),$("load",n);var t=!1,a=!1,l;for(l in r)if(r.hasOwnProperty(l)){var i=r[l];if(i!=null)switch(l){case"src":t=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:yn(n,e,l,i,r,null)}}a&&yn(n,e,"srcSet",r.srcSet,r,null),t&&yn(n,e,"src",r.src,r,null);return;case"input":$("invalid",n);var u=l=i=a=null,c=null,h=null;for(t in r)if(r.hasOwnProperty(t)){var v=r[t];if(v!=null)switch(t){case"name":a=v;break;case"type":i=v;break;case"checked":c=v;break;case"defaultChecked":h=v;break;case"value":l=v;break;case"defaultValue":u=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(b(137,e));break;default:yn(n,e,t,v,r,null)}}Oc(n,l,u,c,h,i,a,!1),Ha(n);return;case"select":$("invalid",n),t=i=l=null;for(a in r)if(r.hasOwnProperty(a)&&(u=r[a],u!=null))switch(a){case"value":l=u;break;case"defaultValue":i=u;break;case"multiple":t=u;default:yn(n,e,a,u,r,null)}e=l,r=i,n.multiple=!!t,e!=null?Zr(n,!!t,e,!1):r!=null&&Zr(n,!!t,r,!0);return;case"textarea":$("invalid",n),l=a=t=null;for(i in r)if(r.hasOwnProperty(i)&&(u=r[i],u!=null))switch(i){case"value":t=u;break;case"defaultValue":a=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(b(91));break;default:yn(n,e,i,u,r,null)}Dc(n,t,a,l),Ha(n);return;case"option":for(c in r)if(r.hasOwnProperty(c)&&(t=r[c],t!=null))switch(c){case"selected":n.selected=t&&typeof t!="function"&&typeof t!="symbol";break;default:yn(n,e,c,t,r,null)}return;case"dialog":$("beforetoggle",n),$("toggle",n),$("cancel",n),$("close",n);break;case"iframe":case"object":$("load",n);break;case"video":case"audio":for(t=0;t<ba.length;t++)$(ba[t],n);break;case"image":$("error",n),$("load",n);break;case"details":$("toggle",n);break;case"embed":case"source":case"link":$("error",n),$("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in r)if(r.hasOwnProperty(h)&&(t=r[h],t!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,e));default:yn(n,e,h,t,r,null)}return;default:if(kl(e)){for(v in r)r.hasOwnProperty(v)&&(t=r[v],t!==void 0&&xu(n,e,v,t,r,void 0));return}}for(u in r)r.hasOwnProperty(u)&&(t=r[u],t!=null&&yn(n,e,u,t,r,null))}function r0(n,e,r,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,l=null,i=null,u=null,c=null,h=null,v=null;for(m in r){var A=r[m];if(r.hasOwnProperty(m)&&A!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":c=A;default:t.hasOwnProperty(m)||yn(n,e,m,null,t,A)}}for(var y in t){var m=t[y];if(A=r[y],t.hasOwnProperty(y)&&(m!=null||A!=null))switch(y){case"type":l=m;break;case"name":a=m;break;case"checked":h=m;break;case"defaultChecked":v=m;break;case"value":i=m;break;case"defaultValue":u=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(b(137,e));break;default:m!==A&&yn(n,e,y,m,t,A)}}Il(n,i,u,c,h,v,l,a);return;case"select":m=i=u=y=null;for(l in r)if(c=r[l],r.hasOwnProperty(l)&&c!=null)switch(l){case"value":break;case"multiple":m=c;default:t.hasOwnProperty(l)||yn(n,e,l,null,t,c)}for(a in t)if(l=t[a],c=r[a],t.hasOwnProperty(a)&&(l!=null||c!=null))switch(a){case"value":y=l;break;case"defaultValue":u=l;break;case"multiple":i=l;default:l!==c&&yn(n,e,a,l,t,c)}e=u,r=i,t=m,y!=null?Zr(n,!!r,y,!1):!!t!=!!r&&(e!=null?Zr(n,!!r,e,!0):Zr(n,!!r,r?[]:"",!1));return;case"textarea":m=y=null;for(u in r)if(a=r[u],r.hasOwnProperty(u)&&a!=null&&!t.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:yn(n,e,u,null,t,a)}for(i in t)if(a=t[i],l=r[i],t.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case"value":y=a;break;case"defaultValue":m=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(b(91));break;default:a!==l&&yn(n,e,i,a,t,l)}_c(n,y,m);return;case"option":for(var j in r)if(y=r[j],r.hasOwnProperty(j)&&y!=null&&!t.hasOwnProperty(j))switch(j){case"selected":n.selected=!1;break;default:yn(n,e,j,null,t,y)}for(c in t)if(y=t[c],m=r[c],t.hasOwnProperty(c)&&y!==m&&(y!=null||m!=null))switch(c){case"selected":n.selected=y&&typeof y!="function"&&typeof y!="symbol";break;default:yn(n,e,c,y,t,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var G in r)y=r[G],r.hasOwnProperty(G)&&y!=null&&!t.hasOwnProperty(G)&&yn(n,e,G,null,t,y);for(h in t)if(y=t[h],m=r[h],t.hasOwnProperty(h)&&y!==m&&(y!=null||m!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(b(137,e));break;default:yn(n,e,h,y,t,m)}return;default:if(kl(e)){for(var mn in r)y=r[mn],r.hasOwnProperty(mn)&&y!==void 0&&!t.hasOwnProperty(mn)&&xu(n,e,mn,void 0,t,y);for(v in t)y=t[v],m=r[v],!t.hasOwnProperty(v)||y===m||y===void 0&&m===void 0||xu(n,e,v,y,t,m);return}}for(var f in r)y=r[f],r.hasOwnProperty(f)&&y!=null&&!t.hasOwnProperty(f)&&yn(n,e,f,null,t,y);for(A in t)y=t[A],m=r[A],!t.hasOwnProperty(A)||y===m||y==null&&m==null||yn(n,e,A,y,t,m)}var Bu=null,zu=null;function _l(n){return n.nodeType===9?n:n.ownerDocument}function Cf(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hf(n,e){if(n===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&e==="foreignObject"?0:n}function Gu(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yu=null;function t0(){var n=window.event;return n&&n.type==="popstate"?n===Yu?!1:(Yu=n,!0):(Yu=null,!1)}var Uf=typeof setTimeout=="function"?setTimeout:void 0,a0=typeof clearTimeout=="function"?clearTimeout:void 0,Lf=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof Lf<"u"?function(n){return Lf.resolve(null).then(n).catch(i0)}:Uf;function i0(n){setTimeout(function(){throw n})}function yr(n){return n==="head"}function xf(n,e){var r=e,t=0,a=0;do{var l=r.nextSibling;if(n.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(0<t&&8>t){r=t;var i=n.ownerDocument;if(r&1&&ha(i.documentElement),r&2&&ha(i.body),r&4)for(r=i.head,ha(r),i=r.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[Mt]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||r.removeChild(i),i=u}}if(a===0){n.removeChild(l),Ea(e);return}a--}else r==="$"||r==="$?"||r==="$!"?a++:t=r.charCodeAt(0)-48;else t=0;r=l}while(r);Ea(e)}function ju(n){var e=n.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var r=e;switch(e=e.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ju(r),Kl(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}n.removeChild(r)}}function u0(n,e,r,t){for(;n.nodeType===1;){var a=r;if(n.nodeName.toLowerCase()!==e.toLowerCase()){if(!t&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(t){if(!n[Mt])switch(e){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(l=n.getAttribute("rel"),l==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(l!==a.rel||n.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||n.getAttribute("title")!==(a.title==null?null:a.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(l=n.getAttribute("src"),(l!==(a.src==null?null:a.src)||n.getAttribute("type")!==(a.type==null?null:a.type)||n.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&l&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(e==="input"&&n.type==="hidden"){var l=a.name==null?null:""+a.name;if(a.type==="hidden"&&n.getAttribute("name")===l)return n}else return n;if(n=Me(n.nextSibling),n===null)break}return null}function c0(n,e,r){if(e==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Me(n.nextSibling),n===null))return null;return n}function wu(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function s0(n,e){var r=n.ownerDocument;if(n.data!=="$?"||r.readyState==="complete")e();else{var t=function(){e(),r.removeEventListener("DOMContentLoaded",t)};r.addEventListener("DOMContentLoaded",t),n._reactRetry=t}}function Me(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return n}var qu=null;function Bf(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var r=n.data;if(r==="$"||r==="$!"||r==="$?"){if(e===0)return n;e--}else r==="/$"&&e++}n=n.previousSibling}return null}function zf(n,e,r){switch(e=_l(r),n){case"html":if(n=e.documentElement,!n)throw Error(b(452));return n;case"head":if(n=e.head,!n)throw Error(b(453));return n;case"body":if(n=e.body,!n)throw Error(b(454));return n;default:throw Error(b(451))}}function ha(n){for(var e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Kl(n)}var Te=new Map,Gf=new Set;function Dl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Je=D.d;D.d={f:o0,r:f0,D:b0,C:d0,L:h0,m:y0,X:p0,S:m0,M:v0};function o0(){var n=Je.f(),e=vl();return n||e}function f0(n){var e=Vr(n);e!==null&&e.tag===5&&e.type==="form"?eo(e):Je.r(n)}var Et=typeof document>"u"?null:document;function Yf(n,e,r){var t=Et;if(t&&typeof e=="string"&&e){var a=pe(e);a='link[rel="'+n+'"][href="'+a+'"]',typeof r=="string"&&(a+='[crossorigin="'+r+'"]'),Gf.has(a)||(Gf.add(a),n={rel:n,crossOrigin:r,href:e},t.querySelector(a)===null&&(e=t.createElement("link"),Xn(e,"link",n),jn(e),t.head.appendChild(e)))}}function b0(n){Je.D(n),Yf("dns-prefetch",n,null)}function d0(n,e){Je.C(n,e),Yf("preconnect",n,e)}function h0(n,e,r){Je.L(n,e,r);var t=Et;if(t&&n&&e){var a='link[rel="preload"][as="'+pe(e)+'"]';e==="image"&&r&&r.imageSrcSet?(a+='[imagesrcset="'+pe(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(a+='[imagesizes="'+pe(r.imageSizes)+'"]')):a+='[href="'+pe(n)+'"]';var l=a;switch(e){case"style":l=Rt(n);break;case"script":l=Tt(n)}Te.has(l)||(n=N({rel:"preload",href:e==="image"&&r&&r.imageSrcSet?void 0:n,as:e},r),Te.set(l,n),t.querySelector(a)!==null||e==="style"&&t.querySelector(ya(l))||e==="script"&&t.querySelector(ma(l))||(e=t.createElement("link"),Xn(e,"link",n),jn(e),t.head.appendChild(e)))}}function y0(n,e){Je.m(n,e);var r=Et;if(r&&n){var t=e&&typeof e.as=="string"?e.as:"script",a='link[rel="modulepreload"][as="'+pe(t)+'"][href="'+pe(n)+'"]',l=a;switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Tt(n)}if(!Te.has(l)&&(n=N({rel:"modulepreload",href:n},e),Te.set(l,n),r.querySelector(a)===null)){switch(t){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(ma(l)))return}t=r.createElement("link"),Xn(t,"link",n),jn(t),r.head.appendChild(t)}}}function m0(n,e,r){Je.S(n,e,r);var t=Et;if(t&&n){var a=Qr(t).hoistableStyles,l=Rt(n);e=e||"default";var i=a.get(l);if(!i){var u={loading:0,preload:null};if(i=t.querySelector(ya(l)))u.loading=5;else{n=N({rel:"stylesheet",href:n,"data-precedence":e},r),(r=Te.get(l))&&Vu(n,r);var c=i=t.createElement("link");jn(c),Xn(c,"link",n),c._p=new Promise(function(h,v){c.onload=h,c.onerror=v}),c.addEventListener("load",function(){u.loading|=1}),c.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Nl(i,e,t)}i={type:"stylesheet",instance:i,count:1,state:u},a.set(l,i)}}}function p0(n,e){Je.X(n,e);var r=Et;if(r&&n){var t=Qr(r).hoistableScripts,a=Tt(n),l=t.get(a);l||(l=r.querySelector(ma(a)),l||(n=N({src:n,async:!0},e),(e=Te.get(a))&&Qu(n,e),l=r.createElement("script"),jn(l),Xn(l,"link",n),r.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(a,l))}}function v0(n,e){Je.M(n,e);var r=Et;if(r&&n){var t=Qr(r).hoistableScripts,a=Tt(n),l=t.get(a);l||(l=r.querySelector(ma(a)),l||(n=N({src:n,async:!0,type:"module"},e),(e=Te.get(a))&&Qu(n,e),l=r.createElement("script"),jn(l),Xn(l,"link",n),r.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},t.set(a,l))}}function jf(n,e,r,t){var a=(a=z.current)?Dl(a):null;if(!a)throw Error(b(446));switch(n){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(e=Rt(r.href),r=Qr(a).hoistableStyles,t=r.get(e),t||(t={type:"style",instance:null,count:0,state:null},r.set(e,t)),t):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){n=Rt(r.href);var l=Qr(a).hoistableStyles,i=l.get(n);if(i||(a=a.ownerDocument||a,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(n,i),(l=a.querySelector(ya(n)))&&!l._p&&(i.instance=l,i.state.loading=5),Te.has(n)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},Te.set(n,r),l||g0(a,n,r,i.state))),e&&t===null)throw Error(b(528,""));return i}if(e&&t!==null)throw Error(b(529,""));return null;case"script":return e=r.async,r=r.src,typeof r=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Tt(r),r=Qr(a).hoistableScripts,t=r.get(e),t||(t={type:"script",instance:null,count:0,state:null},r.set(e,t)),t):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,n))}}function Rt(n){return'href="'+pe(n)+'"'}function ya(n){return'link[rel="stylesheet"]['+n+"]"}function wf(n){return N({},n,{"data-precedence":n.precedence,precedence:null})}function g0(n,e,r,t){n.querySelector('link[rel="preload"][as="style"]['+e+"]")?t.loading=1:(e=n.createElement("link"),t.preload=e,e.addEventListener("load",function(){return t.loading|=1}),e.addEventListener("error",function(){return t.loading|=2}),Xn(e,"link",r),jn(e),n.head.appendChild(e))}function Tt(n){return'[src="'+pe(n)+'"]'}function ma(n){return"script[async]"+n}function qf(n,e,r){if(e.count++,e.instance===null)switch(e.type){case"style":var t=n.querySelector('style[data-href~="'+pe(r.href)+'"]');if(t)return e.instance=t,jn(t),t;var a=N({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return t=(n.ownerDocument||n).createElement("style"),jn(t),Xn(t,"style",a),Nl(t,r.precedence,n),e.instance=t;case"stylesheet":a=Rt(r.href);var l=n.querySelector(ya(a));if(l)return e.state.loading|=4,e.instance=l,jn(l),l;t=wf(r),(a=Te.get(a))&&Vu(t,a),l=(n.ownerDocument||n).createElement("link"),jn(l);var i=l;return i._p=new Promise(function(u,c){i.onload=u,i.onerror=c}),Xn(l,"link",t),e.state.loading|=4,Nl(l,r.precedence,n),e.instance=l;case"script":return l=Tt(r.src),(a=n.querySelector(ma(l)))?(e.instance=a,jn(a),a):(t=r,(a=Te.get(l))&&(t=N({},r),Qu(t,a)),n=n.ownerDocument||n,a=n.createElement("script"),jn(a),Xn(a,"link",t),n.head.appendChild(a),e.instance=a);case"void":return null;default:throw Error(b(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(t=e.instance,e.state.loading|=4,Nl(t,r.precedence,n));return e.instance}function Nl(n,e,r){for(var t=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=t.length?t[t.length-1]:null,l=a,i=0;i<t.length;i++){var u=t[i];if(u.dataset.precedence===e)l=u;else if(l!==a)break}l?l.parentNode.insertBefore(n,l.nextSibling):(e=r.nodeType===9?r.head:r,e.insertBefore(n,e.firstChild))}function Vu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.title==null&&(n.title=e.title)}function Qu(n,e){n.crossOrigin==null&&(n.crossOrigin=e.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=e.referrerPolicy),n.integrity==null&&(n.integrity=e.integrity)}var Ml=null;function Vf(n,e,r){if(Ml===null){var t=new Map,a=Ml=new Map;a.set(r,t)}else a=Ml,t=a.get(r),t||(t=new Map,a.set(r,t));if(t.has(n))return t;for(t.set(n,null),r=r.getElementsByTagName(n),a=0;a<r.length;a++){var l=r[a];if(!(l[Mt]||l[Wn]||n==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var i=l.getAttribute(e)||"";i=n+i;var u=t.get(i);u?u.push(l):t.set(i,[l])}}return t}function Qf(n,e,r){n=n.ownerDocument||n,n.head.insertBefore(r,e==="title"?n.querySelector("head > title"):null)}function S0(n,e,r){if(r===1||e.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return n=e.disabled,typeof e.precedence=="string"&&n==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Kf(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var pa=null;function A0(){}function E0(n,e,r){if(pa===null)throw Error(b(475));var t=pa;if(e.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var a=Rt(r.href),l=n.querySelector(ya(a));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Cl.bind(t),n.then(t,t)),e.state.loading|=4,e.instance=l,jn(l);return}l=n.ownerDocument||n,r=wf(r),(a=Te.get(a))&&Vu(r,a),l=l.createElement("link"),jn(l);var i=l;i._p=new Promise(function(u,c){i.onload=u,i.onerror=c}),Xn(l,"link",r),e.instance=l}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=Cl.bind(t),n.addEventListener("load",e),n.addEventListener("error",e))}}function R0(){if(pa===null)throw Error(b(475));var n=pa;return n.stylesheets&&n.count===0&&Ku(n,n.stylesheets),0<n.count?function(e){var r=setTimeout(function(){if(n.stylesheets&&Ku(n,n.stylesheets),n.unsuspend){var t=n.unsuspend;n.unsuspend=null,t()}},6e4);return n.unsuspend=e,function(){n.unsuspend=null,clearTimeout(r)}}:null}function Cl(){if(this.count--,this.count===0){if(this.stylesheets)Ku(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Hl=null;function Ku(n,e){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Hl=new Map,e.forEach(T0,n),Hl=null,Cl.call(n))}function T0(n,e){if(!(e.state.loading&4)){var r=Hl.get(n);if(r)var t=r.get(null);else{r=new Map,Hl.set(n,r);for(var a=n.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<a.length;l++){var i=a[l];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(r.set(i.dataset.precedence,i),t=i)}t&&r.set(null,t)}a=e.instance,i=a.getAttribute("data-precedence"),l=r.get(i)||t,l===t&&r.set(null,a),r.set(i,a),this.count++,t=Cl.bind(this),a.addEventListener("load",t),a.addEventListener("error",t),l?l.parentNode.insertBefore(a,l.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(a,n.firstChild)),e.state.loading|=4}}var va={$$typeof:On,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function O0(n,e,r,t,a,l,i,u){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wl(0),this.hiddenUpdates=wl(null),this.identifierPrefix=t,this.onUncaughtError=a,this.onCaughtError=l,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function Xf(n,e,r,t,a,l,i,u,c,h,v,A){return n=new O0(n,e,r,i,u,c,h,A),e=1,l===!0&&(e|=24),l=ce(3,null,null,e),n.current=l,l.stateNode=n,e=Oi(),e.refCount++,n.pooledCache=e,e.refCount++,l.memoizedState={element:t,isDehydrated:r,cache:e},Mi(l),n}function Zf(n){return n?(n=et,n):et}function Wf(n,e,r,t,a,l){a=Zf(a),t.context===null?t.context=a:t.pendingContext=a,t=rr(e),t.payload={element:r},l=l===void 0?null:l,l!==null&&(t.callback=l),r=tr(n,t,e),r!==null&&(de(r,n,e),It(r,n,e))}function If(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var r=n.retryLane;n.retryLane=r!==0&&r<e?r:e}}function Xu(n,e){If(n,e),(n=n.alternate)&&If(n,e)}function Jf(n){if(n.tag===13){var e=nt(n,67108864);e!==null&&de(e,n,67108864),Xu(n,67108864)}}var Ul=!0;function _0(n,e,r,t){var a=p.T;p.T=null;var l=D.p;try{D.p=2,Zu(n,e,r,t)}finally{D.p=l,p.T=a}}function D0(n,e,r,t){var a=p.T;p.T=null;var l=D.p;try{D.p=8,Zu(n,e,r,t)}finally{D.p=l,p.T=a}}function Zu(n,e,r,t){if(Ul){var a=Wu(t);if(a===null)Lu(n,e,t,Ll,r),Ff(n,t);else if(M0(a,n,e,r,t))t.stopPropagation();else if(Ff(n,t),e&4&&-1<N0.indexOf(n)){for(;a!==null;){var l=Vr(a);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var i=Ar(l.pendingLanes);if(i!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;i;){var c=1<<31-ie(i);u.entanglements[1]|=c,i&=~c}xe(l),(fn&6)===0&&(ml=Pn()+500,fa(0))}}break;case 13:u=nt(l,2),u!==null&&de(u,l,2),vl(),Xu(l,2)}if(l=Wu(t),l===null&&Lu(n,e,t,Ll,r),l===a)break;a=l}a!==null&&t.stopPropagation()}else Lu(n,e,t,null,r)}}function Wu(n){return n=Pl(n),Iu(n)}var Ll=null;function Iu(n){if(Ll=null,n=qr(n),n!==null){var e=B(n);if(e===null)n=null;else{var r=e.tag;if(r===13){if(n=K(e),n!==null)return n;n=null}else if(r===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null)}}return Ll=n,null}function kf(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jr()){case cc:return 2;case sc:return 8;case Oa:case hb:return 32;case oc:return 268435456;default:return 32}default:return 32}}var Ju=!1,mr=null,pr=null,vr=null,ga=new Map,Sa=new Map,gr=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ff(n,e){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(e.pointerId)}}function Aa(n,e,r,t,a,l){return n===null||n.nativeEvent!==l?(n={blockedOn:e,domEventName:r,eventSystemFlags:t,nativeEvent:l,targetContainers:[a]},e!==null&&(e=Vr(e),e!==null&&Jf(e)),n):(n.eventSystemFlags|=t,e=n.targetContainers,a!==null&&e.indexOf(a)===-1&&e.push(a),n)}function M0(n,e,r,t,a){switch(e){case"focusin":return mr=Aa(mr,n,e,r,t,a),!0;case"dragenter":return pr=Aa(pr,n,e,r,t,a),!0;case"mouseover":return vr=Aa(vr,n,e,r,t,a),!0;case"pointerover":var l=a.pointerId;return ga.set(l,Aa(ga.get(l)||null,n,e,r,t,a)),!0;case"gotpointercapture":return l=a.pointerId,Sa.set(l,Aa(Sa.get(l)||null,n,e,r,t,a)),!0}return!1}function Pf(n){var e=qr(n.target);if(e!==null){var r=B(e);if(r!==null){if(e=r.tag,e===13){if(e=K(r),e!==null){n.blockedOn=e,Eb(n.priority,function(){if(r.tag===13){var t=be();t=ql(t);var a=nt(r,t);a!==null&&de(a,r,t),Xu(r,t)}});return}}else if(e===3&&r.stateNode.current.memoizedState.isDehydrated){n.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var r=Wu(n.nativeEvent);if(r===null){r=n.nativeEvent;var t=new r.constructor(r.type,r);Fl=t,r.target.dispatchEvent(t),Fl=null}else return e=Vr(r),e!==null&&Jf(e),n.blockedOn=r,!1;e.shift()}return!0}function $f(n,e,r){xl(n)&&r.delete(e)}function C0(){Ju=!1,mr!==null&&xl(mr)&&(mr=null),pr!==null&&xl(pr)&&(pr=null),vr!==null&&xl(vr)&&(vr=null),ga.forEach($f),Sa.forEach($f)}function Bl(n,e){n.blockedOn===e&&(n.blockedOn=null,Ju||(Ju=!0,T.unstable_scheduleCallback(T.unstable_NormalPriority,C0)))}var zl=null;function nb(n){zl!==n&&(zl=n,T.unstable_scheduleCallback(T.unstable_NormalPriority,function(){zl===n&&(zl=null);for(var e=0;e<n.length;e+=3){var r=n[e],t=n[e+1],a=n[e+2];if(typeof t!="function"){if(Iu(t||r)===null)continue;break}var l=Vr(r);l!==null&&(n.splice(e,3),e-=3,Ii(l,{pending:!0,data:a,method:r.method,action:t},t,a))}}))}function Ea(n){function e(c){return Bl(c,n)}mr!==null&&Bl(mr,n),pr!==null&&Bl(pr,n),vr!==null&&Bl(vr,n),ga.forEach(e),Sa.forEach(e);for(var r=0;r<gr.length;r++){var t=gr[r];t.blockedOn===n&&(t.blockedOn=null)}for(;0<gr.length&&(r=gr[0],r.blockedOn===null);)Pf(r),r.blockedOn===null&&gr.shift();if(r=(n.ownerDocument||n).$$reactFormReplay,r!=null)for(t=0;t<r.length;t+=3){var a=r[t],l=r[t+1],i=a[ne]||null;if(typeof l=="function")i||nb(r);else if(i){var u=null;if(l&&l.hasAttribute("formAction")){if(a=l,i=l[ne]||null)u=i.formAction;else if(Iu(a)!==null)continue}else u=i.action;typeof u=="function"?r[t+1]=u:(r.splice(t,3),t-=3),nb(r)}}}function ku(n){this._internalRoot=n}Gl.prototype.render=ku.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(b(409));var r=e.current,t=be();Wf(r,t,n,e,null,null)},Gl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Wf(n.current,2,null,n,null,null),vl(),e[wr]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var e=yc();n={blockedOn:null,target:n,priority:e};for(var r=0;r<gr.length&&e!==0&&e<gr[r].priority;r++);gr.splice(r,0,n),r===0&&Pf(n)}};var eb=w.version;if(eb!=="19.1.0")throw Error(b(527,eb,"19.1.0"));D.findDOMNode=function(n){var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(b(188)):(n=Object.keys(n).join(","),Error(b(268,n)));return n=M(e),n=n!==null?E(n):null,n=n===null?null:n.stateNode,n};var H0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:p,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{_t=Yl.inject(H0),le=Yl}catch{}}return Ta.createRoot=function(n,e){if(!x(n))throw Error(b(299));var r=!1,t="",a=mo,l=po,i=vo,u=null;return e!=null&&(e.unstable_strictMode===!0&&(r=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(a=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(u=e.unstable_transitionCallbacks)),e=Xf(n,1,!1,null,null,r,t,a,l,i,u,null),n[wr]=e.current,Uu(n),new ku(e)},Ta.hydrateRoot=function(n,e,r){if(!x(n))throw Error(b(299));var t=!1,a="",l=mo,i=po,u=vo,c=null,h=null;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onUncaughtError!==void 0&&(l=r.onUncaughtError),r.onCaughtError!==void 0&&(i=r.onCaughtError),r.onRecoverableError!==void 0&&(u=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(c=r.unstable_transitionCallbacks),r.formState!==void 0&&(h=r.formState)),e=Xf(n,1,!0,e,r??null,t,a,l,i,u,c,h),e.context=Zf(null),r=e.current,t=be(),t=ql(t),a=rr(t),a.callback=null,tr(r,a,t),r=t,e.current.lanes=r,Nt(e,r),xe(e),n[wr]=e.current,Uu(n),new Gl(e)},Ta.version="19.1.0",Ta}var fb;function q0(){if(fb)return $u.exports;fb=1;function T(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(T)}catch(w){console.error(w)}}return T(),$u.exports=w0(),$u.exports}var V0=q0();function Q0(T){return{ALS:"Ability Life Steal",AP:"Ability Power",AS:"Attack Speed",Armor:"Armor",CR:"Cooldown Reduction",Health:"Health","Knockback Resist":"Knockback Resistance",MA:"Max Ammo",MD:"Melee Damage",MS:"Movement Speed",RS:"Reload Speed",Shields:"Shields",WP:"Weapon Power",WPLS:"Weapon Life Steal"}[T]||T}function K0(T,w){const q=["WP","AP","AS"],b=q.indexOf(T),x=q.indexOf(w);return b!==-1&&x!==-1?b-x:b!==-1?-1:x!==-1?1:T.localeCompare(w)}function X0(T){const w=T.match(/[-+]?\d+(?:\.\d+)?/);return w?parseFloat(w[0]):0}function bb(T){const w=new Map;return T.forEach(q=>{q.attributes.forEach(b=>{const x=X0(b.value);w.set(b.type,(w.get(b.type)??0)+x)})}),w}function db(T,w){let q=0;return w.forEach(b=>{q+=(T.get(b.type)??0)*b.weight}),q}function lc(T){switch(T){case"common":return"green";case"rare":return"blue";case"epic":return"purple";default:return"black"}}function tc({label:T,options:w,value:q,onChange:b,placeholder:x="Select an option",className:B}){const[K,sn]=Tn.useState(!1),[M,E]=Tn.useState(!1),[N,tn]=Tn.useState(""),Q=Tn.useRef(null),pn=Tn.useRef(null),rn=w.find(an=>an.value===q),Mn=(rn==null?void 0:rn.label)||x,Un=rn==null?void 0:rn.color,kn=w.filter(an=>an.label.toLowerCase().includes(N.toLowerCase())),Zn=an=>{b(an),sn(!1),tn("")};return Tn.useEffect(()=>{const an=V=>{Q.current&&!Q.current.contains(V.target)&&sn(!1)};return document.addEventListener("mousedown",an),()=>document.removeEventListener("mousedown",an)},[]),Tn.useEffect(()=>{if(!K||!pn.current)return;const an=pn.current.getBoundingClientRect(),V=window.innerHeight||document.documentElement.clientHeight,nn=V*.4,vn=V-an.bottom,ln=an.top;vn<nn&&ln>vn?E(!0):E(!1)},[K]),R.jsxs("div",{className:`relative block ${B||""}`,ref:Q,children:[R.jsxs("span",{className:"flex w-full divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm",children:[R.jsx("button",{type:"button",className:"flex-grow px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative text-left",onClick:()=>sn(!K),ref:pn,children:R.jsx("span",{style:{color:Un||"inherit"},children:Mn})}),R.jsx("button",{type:"button",className:"flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative","aria-label":"Menu",onClick:()=>sn(!K),children:R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-4",children:R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"})})})]}),K&&R.jsx("div",{role:"menu",className:`absolute end-0 z-10 w-full divide-y divide-gray-200 overflow-hidden rounded border border-gray-300 bg-white shadow-lg max-h-[40vh] overflow-y-auto ${M?"bottom-full mb-2":"top-full mt-2"}`,children:w.length>0?R.jsxs("div",{children:[R.jsx("p",{className:"sticky top-0 bg-white px-3 py-2 text-xs uppercase text-gray-500 border-b border-gray-200 z-20",children:T}),R.jsx("input",{type:"text",className:"mx-3 my-2 w-[calc(100%-1.5rem)] rounded border border-gray-300 px-2 py-1 text-sm",placeholder:"Search...",value:N,onChange:an=>tn(an.target.value)}),kn.map(an=>R.jsx("a",{href:"#",className:"block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900",role:"menuitem",onClick:V=>{V.preventDefault(),Zn(an.value)},children:R.jsx("span",{style:{color:an.color||"inherit"},children:an.label})},an.value)),kn.length===0&&R.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No matching options"})]}):R.jsx("p",{className:"block px-3 py-2 text-sm text-gray-500",children:"No options available"})})]})}function ac({value:T,onChange:w,min:q,max:b,step:x,placeholder:B,className:K,label:sn}){const[M,E]=Tn.useState(T.toString());Tn.useEffect(()=>{E(T.toString())},[T]);const N=tn=>{const Q=tn.target.value;if(E(Q),Q===""||Q==="-")return;const pn=Number(Q);isNaN(pn)||w(pn)};return R.jsx("div",{className:`relative inline-block ${K||""}`,children:R.jsx("input",{type:"number",className:`block w-full px-3 py-2 text-sm font-medium text-gray-700 rounded border border-gray-300 bg-white shadow-sm
                    transition-colors focus:border-indigo-500 focus:ring-indigo-500`,value:M,onChange:N,inputMode:"decimal",pattern:".*",min:q,max:b,step:x,placeholder:B,"aria-label":sn||B||"Number input"})})}function Z0({heroes:T,attrTypes:w,filteredItems:q,hero:b,cash:x,equipped:B,toBuy:K,weights:sn,error:M,onHeroChange:E,onCashChange:N,onEquippedChange:tn,onToBuyChange:Q,onWeightTypeChange:pn,onWeightValueChange:rn,addWeightRow:Mn,removeWeightRow:Un,onSubmit:kn,validate:Zn}){const[On,an]=Tn.useState(!1),V=w.map(nn=>({value:nn,label:Q0(nn)}));return R.jsxs("form",{onSubmit:nn=>{nn.preventDefault(),Zn()&&kn()},className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[R.jsxs("div",{children:[R.jsx("label",{htmlFor:"hero-select",className:"block text-sm font-medium text-gray-700 mb-1",children:"Hero"}),R.jsx(tc,{label:"Hero",placeholder:"Select hero",options:[{value:"",label:"Select hero"},...T.map(nn=>({value:nn,label:nn}))],value:b,onChange:E})]}),R.jsxs("div",{children:[R.jsx("label",{htmlFor:"total-cash",className:"block text-sm font-medium text-gray-700",children:"Total Cash"}),R.jsx(ac,{value:x,onChange:N,min:0,label:"Total Cash",className:"mt-1"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Equipped Items"}),R.jsxs("div",{className:"flex items-center gap-2 mt-1 mb-2",children:[R.jsx("input",{id:"use-equipped-checkbox",type:"checkbox",checked:On,onChange:nn=>an(nn.target.checked),className:"h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"}),R.jsx("label",{htmlFor:"use-equipped-checkbox",className:"text-sm text-gray-700 select-none",children:"Use Equipped Item"})]}),On&&R.jsx("div",{className:"space-y-4 mt-1",children:B.map((nn,vn)=>R.jsx(tc,{label:`Equipped Slot ${vn+1}`,placeholder:"None",options:[{value:"",label:"None"},...q.sort((ln,Bn)=>ln.cost-Bn.cost).map(ln=>({value:ln.id||ln.name,label:`${ln.name} (${ln.cost}) ${ln.attributes.filter(Bn=>Bn.type!=="description").map(Bn=>`${Bn.type}-${Bn.value}`).join(", ")}`,color:lc(ln.rarity)}))],value:nn,onChange:ln=>tn(vn,ln),className:"w-full"},vn))})]}),R.jsxs("div",{children:[R.jsx("label",{htmlFor:"items-to-buy",className:"block text-sm font-medium text-gray-700",children:"Items to Purchase"}),R.jsx(ac,{value:K,onChange:Q,min:0,max:6,label:"Items to Purchase",className:"mt-1"})]}),R.jsxs("div",{children:[R.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Attribute Weights"}),R.jsx("div",{className:"space-y-4 mt-1",children:sn.map((nn,vn)=>R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(tc,{label:"Attribute Type",placeholder:"Select type",options:V,value:nn.type,onChange:ln=>pn(vn,ln),className:"flex-grow"}),R.jsx(ac,{value:nn.weight,onChange:ln=>rn(vn,ln),min:0,max:100,step:.01,label:`Weight for ${nn.type}`,className:"w-24"}),sn.length>1&&R.jsx("button",{type:"button",className:"flex-shrink-0 rounded p-2 text-gray-400 hover:bg-red-50 hover:text-red-600",onClick:()=>Un(vn),children:R.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:R.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})]},vn))}),R.jsx("button",{type:"button",className:"mt-3 inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",onClick:Mn,children:"Add Row"})]}),R.jsxs("div",{className:"!mt-8 border-t pt-6",children:[R.jsx("button",{type:"submit",className:"w-full inline-flex items-center justify-center rounded-lg bg-teal-600 px-5 py-3 text-white text-base font-medium shadow-lg transition hover:bg-teal-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2",disabled:!Zn(),children:"Calculate Optimal Build"}),M&&R.jsx("div",{role:"alert",className:"mt-4 rounded border-s-4 border-red-500 bg-red-50 p-4 text-sm font-medium text-red-800",children:M})]})]})}function W0(T){return T.replace(/<[^>]*>/g,"")}function I0({eqItems:T,eqCost:w,cash:q,results:b,alternatives:x}){return R.jsxs("div",{className:"space-y-6 bg-white rounded-xl shadow-lg p-6 sm:p-8",children:[R.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:text-3xl",children:"Results"}),b?R.jsxs("div",{className:"space-y-6",children:[R.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[R.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[R.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Weighted Score"}),R.jsx("dd",{className:"order-1 text-2xl font-extrabold text-teal-600",children:b.score.toFixed(2)})]}),R.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[R.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Total Cost"}),R.jsx("dd",{className:"order-1 text-2xl font-extrabold text-indigo-600",children:w+b.cost})]}),R.jsxs("div",{className:"flex flex-col rounded-lg border border-gray-100 bg-white p-4",children:[R.jsx("dt",{className:"order-2 text-sm font-medium text-gray-500",children:"Cash Remaining"}),R.jsx("dd",{className:"order-1 text-2xl font-extrabold text-green-600",children:q-w-b.cost})]})]}),b.breakdown&&R.jsxs("div",{className:"text-sm text-gray-600",children:[R.jsx("strong",{children:"Breakdown:"}),R.jsxs("table",{className:"mt-2 w-full text-left border-collapse",children:[R.jsx("thead",{children:R.jsxs("tr",{children:[R.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Type"}),R.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Sum"}),R.jsx("th",{className:"px-2 py-1 border-b font-medium",children:"Contribution"})]})}),R.jsx("tbody",{children:b.breakdown.map(B=>R.jsxs("tr",{children:[R.jsx("td",{className:"px-2 py-1",children:B.type}),R.jsx("td",{className:"px-2 py-1",children:B.sum}),R.jsx("td",{className:"px-2 py-1",children:B.contrib.toFixed(2)})]},B.type))})]})]}),R.jsxs("div",{children:[R.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Final Build"}),R.jsx("ul",{className:"mt-2 space-y-3",children:[...T,...b.items].map(B=>R.jsxs("li",{className:"block rounded-lg border border-gray-200 p-4 transition hover:shadow-sm",style:{borderLeftColor:lc(B.rarity),borderLeftWidth:"4px"},children:[R.jsxs("div",{className:"flex justify-between items-center",children:[R.jsx("strong",{className:"font-semibold",style:{color:lc(B.rarity)},children:B.name}),R.jsxs("span",{className:"text-sm font-mono rounded-full bg-indigo-50 text-indigo-600 px-2 py-0.5",children:[B.cost," G"]})]}),R.jsx("ul",{className:"mt-2 text-xs text-gray-600 space-y-1",children:B.attributes.map((K,sn)=>R.jsx("li",{className:"flex items-start",children:R.jsxs("span",{children:[R.jsxs("span",{className:"font-medium",children:[K.type,":"]}),R.jsx("span",{className:"ml-1 text-gray-800 break-words",children:R.jsx("strong",{children:W0(K.value)})})]})},sn))})]},B.id))})]}),x.length>0&&R.jsxs("div",{children:[R.jsx("h3",{className:"text-lg font-bold text-gray-800",children:"Alternative Builds"}),R.jsx("ul",{className:"mt-2 space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-3 max-h-48 overflow-y-auto",children:x.map((B,K)=>R.jsxs("li",{className:"text-sm text-gray-700 p-2 rounded-md hover:bg-gray-100",children:[R.jsxs("strong",{children:["Cost: ",B.cost]})," - ",B.items.map(sn=>sn.name).join(", ")]},K))})]})]}):R.jsxs("div",{className:"text-center rounded-lg border-2 border-dashed border-gray-200 p-12",children:[R.jsx("svg",{className:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:R.jsx("path",{vectorEffect:"non-scaling-stroke",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})}),R.jsx("h3",{className:"mt-2 text-sm font-medium text-gray-900",children:"No results yet"}),R.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Fill out the form and click calculate to see the magic."})]})]})}const J0=`{\r
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
}`,k0=`{\r
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
}`;function F0(){const[T,w]=Tn.useState([]),[q,b]=Tn.useState([]),[x,B]=Tn.useState([]),[K,sn]=Tn.useState("Ashe"),[M,E]=Tn.useState(11e3),[N,tn]=Tn.useState(Array(6).fill("")),[Q,pn]=Tn.useState(6),[rn,Mn]=Tn.useState([{type:"",weight:1}]),[Un,kn]=Tn.useState(null),[Zn,On]=Tn.useState([]),[an,V]=Tn.useState("");Tn.useEffect(()=>{const k=JSON.parse(J0),dn=JSON.parse(k0),en=[],p=(g,_,O)=>{O.forEach(H=>{const Z=dn[H.name],z={...H,tab:g,rarity:_};Z!=null&&Z.attributes&&(z.attributes=Z.attributes),en.push(z)})};["weapon","ability","survival"].forEach(g=>{const _=k.tabs[g];p(g,"common",_.common),p(g,"rare",_.rare),p(g,"epic",_.epic)}),w(en);const D=new Set,L=new Map,F=new Set;en.forEach(g=>{g.character&&D.add(g.character),g.attributes.forEach(_=>{const O=(L.get(_.type)??0)+1;L.set(_.type,O),O===2&&F.add(_.type)})}),F.delete("description"),F.delete("Editor's Note");const s=Array.from(F).sort(K0);b(Array.from(D).sort()),B(s),Mn([{type:s[0],weight:1}])},[]),Tn.useEffect(()=>{const k=N.filter(dn=>dn).length;Q+k>6&&pn(Math.max(0,6-k))},[N,Q]);function nn(){return N.map(k=>T.find(dn=>dn.id===k)).filter(k=>!!k)}function vn(){return!(!K||M<0||nn().reduce((dn,en)=>dn+en.cost,0)>M||Q+nn().length>6||rn.length===0)}function ln(k){const dn=bb(k);return db(dn,rn)}function Bn(){V("");const k=nn(),dn=k.reduce((W,En)=>W+En.cost,0),en=M-dn;if(en<0){V("Equipped items cost exceeds total cash");return}const p=new Set(rn.map(W=>W.type)),D=T.filter(W=>(!W.character||W.character===K)&&!N.includes(W.id??"")&&W.attributes.some(En=>p.has(En.type))),L=Q;if(L===0){const W=ln(k);kn({items:[],cost:0,score:W}),On([]);return}const F=D.map(W=>({item:W,score:ln([W])}));F.sort((W,En)=>En.score-W.score);const s=[0];for(const W of F)s.push(s[s.length-1]+W.score);let g=-1/0,_=0,O=[];const H=F.length;function Z(W,En,_e,ye){if(ye>g||ye===g&&_e<_?(g=ye,_=_e,O=[{items:[...En],cost:_e,score:ye}]):ye===g&&_e>=_&&O.push({items:[...En],cost:_e,score:ye}),En.length===L||W>=H)return;const jl=L-En.length;if(!(ye+(s[Math.min(H,W+jl)]-s[W])<g))for(let Pn=W;Pn<H;Pn++){const jr=F[Pn];_e+jr.item.cost>en||(En.push(jr.item),Z(Pn+1,En,_e+jr.item.cost,ye+jr.score),En.pop())}}if(Z(0,[],0,0),O.length===0){V("Insufficient cash for any purchase");return}const[z,...Fn]=O.sort((W,En)=>W.cost-En.cost),Sn=Fn.filter(W=>W.cost>z.cost).sort((W,En)=>W.cost-En.cost),Oe=bb([...z.items,...k]),Ot=rn.map(W=>{const En=Oe.get(W.type)??0;return{type:W.type,sum:En,contrib:En*W.weight}});kn({items:z.items,cost:z.cost,score:db(Oe,rn),breakdown:Ot}),On(Sn.map(W=>({...W,score:ln([...W.items,...k])})))}if(T.length===0)return R.jsx("div",{className:"p-4",children:"Loading..."});const ke=T.filter(k=>!K||!k.character||k.character===K),he=nn(),Yn=he.reduce((k,dn)=>k+dn.cost,0);return R.jsx("div",{className:"bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8",children:R.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",children:[R.jsx(Z0,{heroes:q,attrTypes:x,filteredItems:ke,hero:K,cash:M,equipped:N,toBuy:Q,weights:rn,error:an,onHeroChange:sn,onCashChange:E,onEquippedChange:(k,dn)=>{const en=[...N];en[k]=dn,tn(en)},onToBuyChange:pn,onWeightTypeChange:(k,dn)=>{const en=[...rn];en[k].type=dn,Mn(en)},onWeightValueChange:(k,dn)=>{const en=[...rn];en[k].weight=dn,Mn(en)},addWeightRow:()=>Mn([...rn,{type:x[0],weight:1}]),removeWeightRow:k=>Mn(rn.filter((dn,en)=>en!==k)),onSubmit:Bn,validate:vn}),R.jsx(I0,{eqItems:he,eqCost:Yn,cash:M,results:Un,alternatives:Zn})]})})}function P0(){return R.jsx("div",{className:"min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 p-6 text-gray-800",children:R.jsx("div",{className:"max-w-5xl mx-auto",children:R.jsx(F0,{})})})}V0.createRoot(document.getElementById("root")).render(R.jsx(Tn.StrictMode,{children:R.jsx(P0,{})}));
