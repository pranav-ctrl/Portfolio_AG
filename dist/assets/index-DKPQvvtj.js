(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function w1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ax={exports:{}},ed={},lx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bu=Symbol.for("react.element"),A1=Symbol.for("react.portal"),C1=Symbol.for("react.fragment"),R1=Symbol.for("react.strict_mode"),b1=Symbol.for("react.profiler"),P1=Symbol.for("react.provider"),L1=Symbol.for("react.context"),D1=Symbol.for("react.forward_ref"),N1=Symbol.for("react.suspense"),I1=Symbol.for("react.memo"),U1=Symbol.for("react.lazy"),jg=Symbol.iterator;function O1(n){return n===null||typeof n!="object"?null:(n=jg&&n[jg]||n["@@iterator"],typeof n=="function"?n:null)}var ux={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cx=Object.assign,fx={};function el(n,e,t){this.props=n,this.context=e,this.refs=fx,this.updater=t||ux}el.prototype.isReactComponent={};el.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};el.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function dx(){}dx.prototype=el.prototype;function ym(n,e,t){this.props=n,this.context=e,this.refs=fx,this.updater=t||ux}var Sm=ym.prototype=new dx;Sm.constructor=ym;cx(Sm,el.prototype);Sm.isPureReactComponent=!0;var Yg=Array.isArray,hx=Object.prototype.hasOwnProperty,Mm={current:null},px={key:!0,ref:!0,__self:!0,__source:!0};function mx(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)hx.call(e,i)&&!px.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:bu,type:n,key:s,ref:o,props:r,_owner:Mm.current}}function F1(n,e){return{$$typeof:bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Em(n){return typeof n=="object"&&n!==null&&n.$$typeof===bu}function k1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var qg=/\/+/g;function Rd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?k1(""+n.key):e.toString(36)}function Vc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case bu:case A1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Rd(o,0):i,Yg(r)?(t="",n!=null&&(t=n.replace(qg,"$&/")+"/"),Vc(r,e,t,"",function(u){return u})):r!=null&&(Em(r)&&(r=F1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(qg,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Yg(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Rd(s,a);o+=Vc(s,e,t,l,r)}else if(l=O1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Rd(s,a++),o+=Vc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Hu(n,e,t){if(n==null)return n;var i=[],r=0;return Vc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function z1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Gn={current:null},Gc={transition:null},B1={ReactCurrentDispatcher:Gn,ReactCurrentBatchConfig:Gc,ReactCurrentOwner:Mm};function gx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Hu,forEach:function(n,e,t){Hu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Hu(n,function(){e++}),e},toArray:function(n){return Hu(n,function(e){return e})||[]},only:function(n){if(!Em(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=el;st.Fragment=C1;st.Profiler=b1;st.PureComponent=ym;st.StrictMode=R1;st.Suspense=N1;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B1;st.act=gx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=cx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Mm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)hx.call(e,l)&&!px.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:bu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:L1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:P1,_context:n},n.Consumer=n};st.createElement=mx;st.createFactory=function(n){var e=mx.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:D1,render:n}};st.isValidElement=Em;st.lazy=function(n){return{$$typeof:U1,_payload:{_status:-1,_result:n},_init:z1}};st.memo=function(n,e){return{$$typeof:I1,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Gc.transition;Gc.transition={};try{n()}finally{Gc.transition=e}};st.unstable_act=gx;st.useCallback=function(n,e){return Gn.current.useCallback(n,e)};st.useContext=function(n){return Gn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Gn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Gn.current.useEffect(n,e)};st.useId=function(){return Gn.current.useId()};st.useImperativeHandle=function(n,e,t){return Gn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Gn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Gn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Gn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Gn.current.useReducer(n,e,t)};st.useRef=function(n){return Gn.current.useRef(n)};st.useState=function(n){return Gn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Gn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Gn.current.useTransition()};st.version="18.3.1";lx.exports=st;var ke=lx.exports;const H1=w1(ke);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V1=ke,G1=Symbol.for("react.element"),W1=Symbol.for("react.fragment"),X1=Object.prototype.hasOwnProperty,j1=V1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y1={key:!0,ref:!0,__self:!0,__source:!0};function _x(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)X1.call(e,i)&&!Y1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:G1,type:n,key:s,ref:o,props:r,_owner:j1.current}}ed.Fragment=W1;ed.jsx=_x;ed.jsxs=_x;ax.exports=ed;var k=ax.exports,qh={},vx={exports:{}},Ti={},xx={exports:{}},yx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,H){var b=D.length;D.push(H);e:for(;0<b;){var te=b-1>>>1,me=D[te];if(0<r(me,H))D[te]=H,D[b]=me,b=te;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var H=D[0],b=D.pop();if(b!==H){D[0]=b;e:for(var te=0,me=D.length,Ge=me>>>1;te<Ge;){var G=2*(te+1)-1,ee=D[G],le=G+1,ie=D[le];if(0>r(ee,b))le<me&&0>r(ie,ee)?(D[te]=ie,D[le]=b,te=le):(D[te]=ee,D[G]=b,te=G);else if(le<me&&0>r(ie,b))D[te]=ie,D[le]=b,te=le;else break e}}return H}function r(D,H){var b=D.sortIndex-H.sortIndex;return b!==0?b:D.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,_=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var H=t(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=D)i(u),H.sortIndex=H.expirationTime,e(l,H);else break;H=t(u)}}function S(D){if(g=!1,v(D),!_)if(t(l)!==null)_=!0,$(C);else{var H=t(u);H!==null&&q(S,H.startTime-D)}}function C(D,H){_=!1,g&&(g=!1,h(P),P=-1),p=!0;var b=f;try{for(v(H),d=t(l);d!==null&&(!(d.expirationTime>H)||D&&!I());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var me=te(d.expirationTime<=H);H=n.unstable_now(),typeof me=="function"?d.callback=me:d===t(l)&&i(l),v(H)}else i(l);d=t(l)}if(d!==null)var Ge=!0;else{var G=t(u);G!==null&&q(S,G.startTime-H),Ge=!1}return Ge}finally{d=null,f=b,p=!1}}var A=!1,T=null,P=-1,M=5,y=-1;function I(){return!(n.unstable_now()-y<M)}function U(){if(T!==null){var D=n.unstable_now();y=D;var H=!0;try{H=T(!0,D)}finally{H?N():(A=!1,T=null)}}else A=!1}var N;if(typeof x=="function")N=function(){x(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,X=V.port2;V.port1.onmessage=U,N=function(){X.postMessage(null)}}else N=function(){m(U,0)};function $(D){T=D,A||(A=!0,N())}function q(D,H){P=m(function(){D(n.unstable_now())},H)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,$(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var H=3;break;default:H=f}var b=f;f=H;try{return D()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,H){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var b=f;f=D;try{return H()}finally{f=b}},n.unstable_scheduleCallback=function(D,H,b){var te=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?te+b:te):b=te,D){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=b+me,D={id:c++,callback:H,priorityLevel:D,startTime:b,expirationTime:me,sortIndex:-1},b>te?(D.sortIndex=b,e(u,D),t(l)===null&&D===t(u)&&(g?(h(P),P=-1):g=!0,q(S,b-te))):(D.sortIndex=me,e(l,D),_||p||(_=!0,$(C))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var H=f;return function(){var b=f;f=H;try{return D.apply(this,arguments)}finally{f=b}}}})(yx);xx.exports=yx;var q1=xx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1=ke,Si=q1;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Sx=new Set,nu={};function Io(n,e){Oa(n,e),Oa(n+"Capture",e)}function Oa(n,e){for(nu[n]=e,n=0;n<e.length;n++)Sx.add(e[n])}var kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,K1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$g={},Kg={};function Z1(n){return $h.call(Kg,n)?!0:$h.call($g,n)?!1:K1.test(n)?Kg[n]=!0:($g[n]=!0,!1)}function Q1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function J1(n,e,t,i){if(e===null||typeof e>"u"||Q1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Wn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xn[n]=new Wn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xn[e]=new Wn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xn[n]=new Wn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xn[n]=new Wn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xn[n]=new Wn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xn[n]=new Wn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xn[n]=new Wn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xn[n]=new Wn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xn[n]=new Wn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Tm=/[\-:]([a-z])/g;function wm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Tm,wm);xn[e]=new Wn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Tm,wm);xn[e]=new Wn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Tm,wm);xn[e]=new Wn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!1,!1)});xn.xlinkHref=new Wn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xn[n]=new Wn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Am(n,e,t,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J1(e,t,r,i)&&(t=null),i||r===null?Z1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Xr=$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vu=Symbol.for("react.element"),oa=Symbol.for("react.portal"),aa=Symbol.for("react.fragment"),Cm=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),Mx=Symbol.for("react.provider"),Ex=Symbol.for("react.context"),Rm=Symbol.for("react.forward_ref"),Zh=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),bm=Symbol.for("react.memo"),ns=Symbol.for("react.lazy"),Tx=Symbol.for("react.offscreen"),Zg=Symbol.iterator;function ol(n){return n===null||typeof n!="object"?null:(n=Zg&&n[Zg]||n["@@iterator"],typeof n=="function"?n:null)}var Ht=Object.assign,bd;function Ml(n){if(bd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);bd=e&&e[1]||""}return`
`+bd+n}var Pd=!1;function Ld(n,e){if(!n||Pd)return"";Pd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ml(n):""}function eE(n){switch(n.tag){case 5:return Ml(n.type);case 16:return Ml("Lazy");case 13:return Ml("Suspense");case 19:return Ml("SuspenseList");case 0:case 2:case 15:return n=Ld(n.type,!1),n;case 11:return n=Ld(n.type.render,!1),n;case 1:return n=Ld(n.type,!0),n;default:return""}}function Jh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case aa:return"Fragment";case oa:return"Portal";case Kh:return"Profiler";case Cm:return"StrictMode";case Zh:return"Suspense";case Qh:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Ex:return(n.displayName||"Context")+".Consumer";case Mx:return(n._context.displayName||"Context")+".Provider";case Rm:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case bm:return e=n.displayName||null,e!==null?e:Jh(n.type)||"Memo";case ns:e=n._payload,n=n._init;try{return Jh(n(e))}catch{}}return null}function tE(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Cm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function wx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function nE(n){var e=wx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Gu(n){n._valueTracker||(n._valueTracker=nE(n))}function Ax(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=wx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ff(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ep(n,e){var t=e.checked;return Ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Qg(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=bs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cx(n,e){e=e.checked,e!=null&&Am(n,"checked",e,!1)}function tp(n,e){Cx(n,e);var t=bs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?np(n,e.type,t):e.hasOwnProperty("defaultValue")&&np(n,e.type,bs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Jg(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function np(n,e,t){(e!=="number"||ff(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var El=Array.isArray;function Ma(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+bs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ip(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Ht({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function e_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(El(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:bs(t)}}function Rx(n,e){var t=bs(e.value),i=bs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function t_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function bx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?bx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Wu,Px=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Wu=Wu||document.createElement("div"),Wu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wu.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function iu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Il={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iE=["Webkit","ms","Moz","O"];Object.keys(Il).forEach(function(n){iE.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Il[e]=Il[n]})});function Lx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Il.hasOwnProperty(n)&&Il[n]?(""+e).trim():e+"px"}function Dx(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Lx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var rE=Ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sp(n,e){if(e){if(rE[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function op(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ap=null;function Pm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lp=null,Ea=null,Ta=null;function n_(n){if(n=Du(n)){if(typeof lp!="function")throw Error(se(280));var e=n.stateNode;e&&(e=sd(e),lp(n.stateNode,n.type,e))}}function Nx(n){Ea?Ta?Ta.push(n):Ta=[n]:Ea=n}function Ix(){if(Ea){var n=Ea,e=Ta;if(Ta=Ea=null,n_(n),e)for(n=0;n<e.length;n++)n_(e[n])}}function Ux(n,e){return n(e)}function Ox(){}var Dd=!1;function Fx(n,e,t){if(Dd)return n(e,t);Dd=!0;try{return Ux(n,e,t)}finally{Dd=!1,(Ea!==null||Ta!==null)&&(Ox(),Ix())}}function ru(n,e){var t=n.stateNode;if(t===null)return null;var i=sd(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var up=!1;if(kr)try{var al={};Object.defineProperty(al,"passive",{get:function(){up=!0}}),window.addEventListener("test",al,al),window.removeEventListener("test",al,al)}catch{up=!1}function sE(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ul=!1,df=null,hf=!1,cp=null,oE={onError:function(n){Ul=!0,df=n}};function aE(n,e,t,i,r,s,o,a,l){Ul=!1,df=null,sE.apply(oE,arguments)}function lE(n,e,t,i,r,s,o,a,l){if(aE.apply(this,arguments),Ul){if(Ul){var u=df;Ul=!1,df=null}else throw Error(se(198));hf||(hf=!0,cp=u)}}function Uo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function kx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function i_(n){if(Uo(n)!==n)throw Error(se(188))}function uE(n){var e=n.alternate;if(!e){if(e=Uo(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return i_(r),n;if(s===i)return i_(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function zx(n){return n=uE(n),n!==null?Bx(n):null}function Bx(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Bx(n);if(e!==null)return e;n=n.sibling}return null}var Hx=Si.unstable_scheduleCallback,r_=Si.unstable_cancelCallback,cE=Si.unstable_shouldYield,fE=Si.unstable_requestPaint,jt=Si.unstable_now,dE=Si.unstable_getCurrentPriorityLevel,Lm=Si.unstable_ImmediatePriority,Vx=Si.unstable_UserBlockingPriority,pf=Si.unstable_NormalPriority,hE=Si.unstable_LowPriority,Gx=Si.unstable_IdlePriority,td=null,mr=null;function pE(n){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(td,n,void 0,(n.current.flags&128)===128)}catch{}}var Qi=Math.clz32?Math.clz32:_E,mE=Math.log,gE=Math.LN2;function _E(n){return n>>>=0,n===0?32:31-(mE(n)/gE|0)|0}var Xu=64,ju=4194304;function Tl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Tl(a):(s&=o,s!==0&&(i=Tl(s)))}else o=t&~r,o!==0?i=Tl(o):s!==0&&(i=Tl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Qi(e),r=1<<t,i|=n[t],e&=~r;return i}function vE(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xE(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Qi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=vE(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function fp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Wx(){var n=Xu;return Xu<<=1,!(Xu&4194240)&&(Xu=64),n}function Nd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Pu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Qi(e),n[e]=t}function yE(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Qi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Dm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Qi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var vt=0;function Xx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var jx,Nm,Yx,qx,$x,dp=!1,Yu=[],ms=null,gs=null,_s=null,su=new Map,ou=new Map,rs=[],SE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s_(n,e){switch(n){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":su.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ou.delete(e.pointerId)}}function ll(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Du(e),e!==null&&Nm(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function ME(n,e,t,i,r){switch(e){case"focusin":return ms=ll(ms,n,e,t,i,r),!0;case"dragenter":return gs=ll(gs,n,e,t,i,r),!0;case"mouseover":return _s=ll(_s,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return su.set(s,ll(su.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ou.set(s,ll(ou.get(s)||null,n,e,t,i,r)),!0}return!1}function Kx(n){var e=oo(n.target);if(e!==null){var t=Uo(e);if(t!==null){if(e=t.tag,e===13){if(e=kx(t),e!==null){n.blockedOn=e,$x(n.priority,function(){Yx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=hp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);ap=i,t.target.dispatchEvent(i),ap=null}else return e=Du(t),e!==null&&Nm(e),n.blockedOn=t,!1;e.shift()}return!0}function o_(n,e,t){Wc(n)&&t.delete(e)}function EE(){dp=!1,ms!==null&&Wc(ms)&&(ms=null),gs!==null&&Wc(gs)&&(gs=null),_s!==null&&Wc(_s)&&(_s=null),su.forEach(o_),ou.forEach(o_)}function ul(n,e){n.blockedOn===e&&(n.blockedOn=null,dp||(dp=!0,Si.unstable_scheduleCallback(Si.unstable_NormalPriority,EE)))}function au(n){function e(r){return ul(r,n)}if(0<Yu.length){ul(Yu[0],n);for(var t=1;t<Yu.length;t++){var i=Yu[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ms!==null&&ul(ms,n),gs!==null&&ul(gs,n),_s!==null&&ul(_s,n),su.forEach(e),ou.forEach(e),t=0;t<rs.length;t++)i=rs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rs.length&&(t=rs[0],t.blockedOn===null);)Kx(t),t.blockedOn===null&&rs.shift()}var wa=Xr.ReactCurrentBatchConfig,gf=!0;function TE(n,e,t,i){var r=vt,s=wa.transition;wa.transition=null;try{vt=1,Im(n,e,t,i)}finally{vt=r,wa.transition=s}}function wE(n,e,t,i){var r=vt,s=wa.transition;wa.transition=null;try{vt=4,Im(n,e,t,i)}finally{vt=r,wa.transition=s}}function Im(n,e,t,i){if(gf){var r=hp(n,e,t,i);if(r===null)Gd(n,e,i,_f,t),s_(n,i);else if(ME(r,n,e,t,i))i.stopPropagation();else if(s_(n,i),e&4&&-1<SE.indexOf(n)){for(;r!==null;){var s=Du(r);if(s!==null&&jx(s),s=hp(n,e,t,i),s===null&&Gd(n,e,i,_f,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gd(n,e,i,null,t)}}var _f=null;function hp(n,e,t,i){if(_f=null,n=Pm(i),n=oo(n),n!==null)if(e=Uo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=kx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return _f=n,null}function Zx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dE()){case Lm:return 1;case Vx:return 4;case pf:case hE:return 16;case Gx:return 536870912;default:return 16}default:return 16}}var as=null,Um=null,Xc=null;function Qx(){if(Xc)return Xc;var n,e=Um,t=e.length,i,r="value"in as?as.value:as.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Xc=r.slice(n,1<i?1-i:void 0)}function jc(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function qu(){return!0}function a_(){return!1}function wi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qu:a_,this.isPropagationStopped=a_,this}return Ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qu)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qu)},persist:function(){},isPersistent:qu}),e}var tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Om=wi(tl),Lu=Ht({},tl,{view:0,detail:0}),AE=wi(Lu),Id,Ud,cl,nd=Ht({},Lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fm,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==cl&&(cl&&n.type==="mousemove"?(Id=n.screenX-cl.screenX,Ud=n.screenY-cl.screenY):Ud=Id=0,cl=n),Id)},movementY:function(n){return"movementY"in n?n.movementY:Ud}}),l_=wi(nd),CE=Ht({},nd,{dataTransfer:0}),RE=wi(CE),bE=Ht({},Lu,{relatedTarget:0}),Od=wi(bE),PE=Ht({},tl,{animationName:0,elapsedTime:0,pseudoElement:0}),LE=wi(PE),DE=Ht({},tl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),NE=wi(DE),IE=Ht({},tl,{data:0}),u_=wi(IE),UE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},OE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kE(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=FE[n])?!!e[n]:!1}function Fm(){return kE}var zE=Ht({},Lu,{key:function(n){if(n.key){var e=UE[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=jc(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?OE[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fm,charCode:function(n){return n.type==="keypress"?jc(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?jc(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),BE=wi(zE),HE=Ht({},nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),c_=wi(HE),VE=Ht({},Lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fm}),GE=wi(VE),WE=Ht({},tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),XE=wi(WE),jE=Ht({},nd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),YE=wi(jE),qE=[9,13,27,32],km=kr&&"CompositionEvent"in window,Ol=null;kr&&"documentMode"in document&&(Ol=document.documentMode);var $E=kr&&"TextEvent"in window&&!Ol,Jx=kr&&(!km||Ol&&8<Ol&&11>=Ol),f_=" ",d_=!1;function ey(n,e){switch(n){case"keyup":return qE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var la=!1;function KE(n,e){switch(n){case"compositionend":return ty(e);case"keypress":return e.which!==32?null:(d_=!0,f_);case"textInput":return n=e.data,n===f_&&d_?null:n;default:return null}}function ZE(n,e){if(la)return n==="compositionend"||!km&&ey(n,e)?(n=Qx(),Xc=Um=as=null,la=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Jx&&e.locale!=="ko"?null:e.data;default:return null}}var QE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function h_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!QE[n.type]:e==="textarea"}function ny(n,e,t,i){Nx(i),e=vf(e,"onChange"),0<e.length&&(t=new Om("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Fl=null,lu=null;function JE(n){hy(n,0)}function id(n){var e=fa(n);if(Ax(e))return n}function eT(n,e){if(n==="change")return e}var iy=!1;if(kr){var Fd;if(kr){var kd="oninput"in document;if(!kd){var p_=document.createElement("div");p_.setAttribute("oninput","return;"),kd=typeof p_.oninput=="function"}Fd=kd}else Fd=!1;iy=Fd&&(!document.documentMode||9<document.documentMode)}function m_(){Fl&&(Fl.detachEvent("onpropertychange",ry),lu=Fl=null)}function ry(n){if(n.propertyName==="value"&&id(lu)){var e=[];ny(e,lu,n,Pm(n)),Fx(JE,e)}}function tT(n,e,t){n==="focusin"?(m_(),Fl=e,lu=t,Fl.attachEvent("onpropertychange",ry)):n==="focusout"&&m_()}function nT(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return id(lu)}function iT(n,e){if(n==="click")return id(e)}function rT(n,e){if(n==="input"||n==="change")return id(e)}function sT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var tr=typeof Object.is=="function"?Object.is:sT;function uu(n,e){if(tr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$h.call(e,r)||!tr(n[r],e[r]))return!1}return!0}function g_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function __(n,e){var t=g_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=g_(t)}}function sy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?sy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function oy(){for(var n=window,e=ff();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ff(n.document)}return e}function zm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function oT(n){var e=oy(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&sy(t.ownerDocument.documentElement,t)){if(i!==null&&zm(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=__(t,s);var o=__(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var aT=kr&&"documentMode"in document&&11>=document.documentMode,ua=null,pp=null,kl=null,mp=!1;function v_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;mp||ua==null||ua!==ff(i)||(i=ua,"selectionStart"in i&&zm(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kl&&uu(kl,i)||(kl=i,i=vf(pp,"onSelect"),0<i.length&&(e=new Om("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ua)))}function $u(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ca={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},zd={},ay={};kr&&(ay=document.createElement("div").style,"AnimationEvent"in window||(delete ca.animationend.animation,delete ca.animationiteration.animation,delete ca.animationstart.animation),"TransitionEvent"in window||delete ca.transitionend.transition);function rd(n){if(zd[n])return zd[n];if(!ca[n])return n;var e=ca[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in ay)return zd[n]=e[t];return n}var ly=rd("animationend"),uy=rd("animationiteration"),cy=rd("animationstart"),fy=rd("transitionend"),dy=new Map,x_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(n,e){dy.set(n,e),Io(e,[n])}for(var Bd=0;Bd<x_.length;Bd++){var Hd=x_[Bd],lT=Hd.toLowerCase(),uT=Hd[0].toUpperCase()+Hd.slice(1);Fs(lT,"on"+uT)}Fs(ly,"onAnimationEnd");Fs(uy,"onAnimationIteration");Fs(cy,"onAnimationStart");Fs("dblclick","onDoubleClick");Fs("focusin","onFocus");Fs("focusout","onBlur");Fs(fy,"onTransitionEnd");Oa("onMouseEnter",["mouseout","mouseover"]);Oa("onMouseLeave",["mouseout","mouseover"]);Oa("onPointerEnter",["pointerout","pointerover"]);Oa("onPointerLeave",["pointerout","pointerover"]);Io("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Io("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Io("onBeforeInput",["compositionend","keypress","textInput","paste"]);Io("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Io("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Io("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cT=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function y_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,lE(i,e,void 0,n),n.currentTarget=null}function hy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;y_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;y_(r,a,u),s=l}}}if(hf)throw n=cp,hf=!1,cp=null,n}function Ct(n,e){var t=e[yp];t===void 0&&(t=e[yp]=new Set);var i=n+"__bubble";t.has(i)||(py(e,n,2,!1),t.add(i))}function Vd(n,e,t){var i=0;e&&(i|=4),py(t,n,i,e)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function cu(n){if(!n[Ku]){n[Ku]=!0,Sx.forEach(function(t){t!=="selectionchange"&&(cT.has(t)||Vd(t,!1,n),Vd(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Ku]||(e[Ku]=!0,Vd("selectionchange",!1,e))}}function py(n,e,t,i){switch(Zx(e)){case 1:var r=TE;break;case 4:r=wE;break;default:r=Im}t=r.bind(null,e,t,n),r=void 0,!up||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Gd(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=oo(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Fx(function(){var u=s,c=Pm(t),d=[];e:{var f=dy.get(n);if(f!==void 0){var p=Om,_=n;switch(n){case"keypress":if(jc(t)===0)break e;case"keydown":case"keyup":p=BE;break;case"focusin":_="focus",p=Od;break;case"focusout":_="blur",p=Od;break;case"beforeblur":case"afterblur":p=Od;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=l_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=RE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GE;break;case ly:case uy:case cy:p=LE;break;case fy:p=XE;break;case"scroll":p=AE;break;case"wheel":p=YE;break;case"copy":case"cut":case"paste":p=NE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=c_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?f!==null?f+"Capture":null:f;g=[];for(var x=u,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,h!==null&&(S=ru(x,h),S!=null&&g.push(fu(x,S,v)))),m)break;x=x.return}0<g.length&&(f=new p(f,_,null,t,c),d.push({event:f,listeners:g}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==ap&&(_=t.relatedTarget||t.fromElement)&&(oo(_)||_[zr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?oo(_):null,_!==null&&(m=Uo(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(g=l_,S="onMouseLeave",h="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(g=c_,S="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?f:fa(p),v=_==null?f:fa(_),f=new g(S,x+"leave",p,t,c),f.target=m,f.relatedTarget=v,S=null,oo(c)===u&&(g=new g(h,x+"enter",_,t,c),g.target=v,g.relatedTarget=m,S=g),m=S,p&&_)t:{for(g=p,h=_,x=0,v=g;v;v=Fo(v))x++;for(v=0,S=h;S;S=Fo(S))v++;for(;0<x-v;)g=Fo(g),x--;for(;0<v-x;)h=Fo(h),v--;for(;x--;){if(g===h||h!==null&&g===h.alternate)break t;g=Fo(g),h=Fo(h)}g=null}else g=null;p!==null&&S_(d,f,p,g,!1),_!==null&&m!==null&&S_(d,m,_,g,!0)}}e:{if(f=u?fa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=eT;else if(h_(f))if(iy)C=rT;else{C=nT;var A=tT}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=iT);if(C&&(C=C(n,u))){ny(d,C,t,c);break e}A&&A(n,f,u),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&np(f,"number",f.value)}switch(A=u?fa(u):window,n){case"focusin":(h_(A)||A.contentEditable==="true")&&(ua=A,pp=u,kl=null);break;case"focusout":kl=pp=ua=null;break;case"mousedown":mp=!0;break;case"contextmenu":case"mouseup":case"dragend":mp=!1,v_(d,t,c);break;case"selectionchange":if(aT)break;case"keydown":case"keyup":v_(d,t,c)}var T;if(km)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else la?ey(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Jx&&t.locale!=="ko"&&(la||P!=="onCompositionStart"?P==="onCompositionEnd"&&la&&(T=Qx()):(as=c,Um="value"in as?as.value:as.textContent,la=!0)),A=vf(u,P),0<A.length&&(P=new u_(P,n,null,t,c),d.push({event:P,listeners:A}),T?P.data=T:(T=ty(t),T!==null&&(P.data=T)))),(T=$E?KE(n,t):ZE(n,t))&&(u=vf(u,"onBeforeInput"),0<u.length&&(c=new u_("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=T))}hy(d,e)})}function fu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function vf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ru(n,t),s!=null&&i.unshift(fu(n,s,r)),s=ru(n,e),s!=null&&i.push(fu(n,s,r))),n=n.return}return i}function Fo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function S_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=ru(t,s),l!=null&&o.unshift(fu(t,l,a))):r||(l=ru(t,s),l!=null&&o.push(fu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var fT=/\r\n?/g,dT=/\u0000|\uFFFD/g;function M_(n){return(typeof n=="string"?n:""+n).replace(fT,`
`).replace(dT,"")}function Zu(n,e,t){if(e=M_(e),M_(n)!==e&&t)throw Error(se(425))}function xf(){}var gp=null,_p=null;function vp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xp=typeof setTimeout=="function"?setTimeout:void 0,hT=typeof clearTimeout=="function"?clearTimeout:void 0,E_=typeof Promise=="function"?Promise:void 0,pT=typeof queueMicrotask=="function"?queueMicrotask:typeof E_<"u"?function(n){return E_.resolve(null).then(n).catch(mT)}:xp;function mT(n){setTimeout(function(){throw n})}function Wd(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),au(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);au(e)}function vs(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function T_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var nl=Math.random().toString(36).slice(2),ur="__reactFiber$"+nl,du="__reactProps$"+nl,zr="__reactContainer$"+nl,yp="__reactEvents$"+nl,gT="__reactListeners$"+nl,_T="__reactHandles$"+nl;function oo(n){var e=n[ur];if(e)return e;for(var t=n.parentNode;t;){if(e=t[zr]||t[ur]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=T_(n);n!==null;){if(t=n[ur])return t;n=T_(n)}return e}n=t,t=n.parentNode}return null}function Du(n){return n=n[ur]||n[zr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function fa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function sd(n){return n[du]||null}var Sp=[],da=-1;function ks(n){return{current:n}}function bt(n){0>da||(n.current=Sp[da],Sp[da]=null,da--)}function wt(n,e){da++,Sp[da]=n.current,n.current=e}var Ps={},Dn=ks(Ps),Kn=ks(!1),wo=Ps;function Fa(n,e){var t=n.type.contextTypes;if(!t)return Ps;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function Zn(n){return n=n.childContextTypes,n!=null}function yf(){bt(Kn),bt(Dn)}function w_(n,e,t){if(Dn.current!==Ps)throw Error(se(168));wt(Dn,e),wt(Kn,t)}function my(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,tE(n)||"Unknown",r));return Ht({},t,i)}function Sf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ps,wo=Dn.current,wt(Dn,n),wt(Kn,Kn.current),!0}function A_(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=my(n,e,wo),i.__reactInternalMemoizedMergedChildContext=n,bt(Kn),bt(Dn),wt(Dn,n)):bt(Kn),wt(Kn,t)}var Cr=null,od=!1,Xd=!1;function gy(n){Cr===null?Cr=[n]:Cr.push(n)}function vT(n){od=!0,gy(n)}function zs(){if(!Xd&&Cr!==null){Xd=!0;var n=0,e=vt;try{var t=Cr;for(vt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Cr=null,od=!1}catch(r){throw Cr!==null&&(Cr=Cr.slice(n+1)),Hx(Lm,zs),r}finally{vt=e,Xd=!1}}return null}var ha=[],pa=0,Mf=null,Ef=0,Pi=[],Li=0,Ao=null,Lr=1,Dr="";function Zs(n,e){ha[pa++]=Ef,ha[pa++]=Mf,Mf=n,Ef=e}function _y(n,e,t){Pi[Li++]=Lr,Pi[Li++]=Dr,Pi[Li++]=Ao,Ao=n;var i=Lr;n=Dr;var r=32-Qi(i)-1;i&=~(1<<r),t+=1;var s=32-Qi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Lr=1<<32-Qi(e)+r|t<<r|i,Dr=s+n}else Lr=1<<s|t<<r|i,Dr=n}function Bm(n){n.return!==null&&(Zs(n,1),_y(n,1,0))}function Hm(n){for(;n===Mf;)Mf=ha[--pa],ha[pa]=null,Ef=ha[--pa],ha[pa]=null;for(;n===Ao;)Ao=Pi[--Li],Pi[Li]=null,Dr=Pi[--Li],Pi[Li]=null,Lr=Pi[--Li],Pi[Li]=null}var xi=null,gi=null,It=!1,Ki=null;function vy(n,e){var t=Ui(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function C_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,xi=n,gi=vs(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,xi=n,gi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ao!==null?{id:Lr,overflow:Dr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ui(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,xi=n,gi=null,!0):!1;default:return!1}}function Mp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ep(n){if(It){var e=gi;if(e){var t=e;if(!C_(n,e)){if(Mp(n))throw Error(se(418));e=vs(t.nextSibling);var i=xi;e&&C_(n,e)?vy(i,t):(n.flags=n.flags&-4097|2,It=!1,xi=n)}}else{if(Mp(n))throw Error(se(418));n.flags=n.flags&-4097|2,It=!1,xi=n}}}function R_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;xi=n}function Qu(n){if(n!==xi)return!1;if(!It)return R_(n),It=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vp(n.type,n.memoizedProps)),e&&(e=gi)){if(Mp(n))throw xy(),Error(se(418));for(;e;)vy(n,e),e=vs(e.nextSibling)}if(R_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){gi=vs(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}gi=null}}else gi=xi?vs(n.stateNode.nextSibling):null;return!0}function xy(){for(var n=gi;n;)n=vs(n.nextSibling)}function ka(){gi=xi=null,It=!1}function Vm(n){Ki===null?Ki=[n]:Ki.push(n)}var xT=Xr.ReactCurrentBatchConfig;function fl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function Ju(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function b_(n){var e=n._init;return e(n._payload)}function yy(n){function e(h,x){if(n){var v=h.deletions;v===null?(h.deletions=[x],h.flags|=16):v.push(x)}}function t(h,x){if(!n)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=Ms(h,x),h.index=0,h.sibling=null,h}function s(h,x,v){return h.index=v,n?(v=h.alternate,v!==null?(v=v.index,v<x?(h.flags|=2,x):v):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,x,v,S){return x===null||x.tag!==6?(x=Qd(v,h.mode,S),x.return=h,x):(x=r(x,v),x.return=h,x)}function l(h,x,v,S){var C=v.type;return C===aa?c(h,x,v.props.children,S,v.key):x!==null&&(x.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ns&&b_(C)===x.type)?(S=r(x,v.props),S.ref=fl(h,x,v),S.return=h,S):(S=Jc(v.type,v.key,v.props,null,h.mode,S),S.ref=fl(h,x,v),S.return=h,S)}function u(h,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Jd(v,h.mode,S),x.return=h,x):(x=r(x,v.children||[]),x.return=h,x)}function c(h,x,v,S,C){return x===null||x.tag!==7?(x=mo(v,h.mode,S,C),x.return=h,x):(x=r(x,v),x.return=h,x)}function d(h,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Qd(""+x,h.mode,v),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Vu:return v=Jc(x.type,x.key,x.props,null,h.mode,v),v.ref=fl(h,null,x),v.return=h,v;case oa:return x=Jd(x,h.mode,v),x.return=h,x;case ns:var S=x._init;return d(h,S(x._payload),v)}if(El(x)||ol(x))return x=mo(x,h.mode,v,null),x.return=h,x;Ju(h,x)}return null}function f(h,x,v,S){var C=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(h,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Vu:return v.key===C?l(h,x,v,S):null;case oa:return v.key===C?u(h,x,v,S):null;case ns:return C=v._init,f(h,x,C(v._payload),S)}if(El(v)||ol(v))return C!==null?null:c(h,x,v,S,null);Ju(h,v)}return null}function p(h,x,v,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(v)||null,a(x,h,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Vu:return h=h.get(S.key===null?v:S.key)||null,l(x,h,S,C);case oa:return h=h.get(S.key===null?v:S.key)||null,u(x,h,S,C);case ns:var A=S._init;return p(h,x,v,A(S._payload),C)}if(El(S)||ol(S))return h=h.get(v)||null,c(x,h,S,C,null);Ju(x,S)}return null}function _(h,x,v,S){for(var C=null,A=null,T=x,P=x=0,M=null;T!==null&&P<v.length;P++){T.index>P?(M=T,T=null):M=T.sibling;var y=f(h,T,v[P],S);if(y===null){T===null&&(T=M);break}n&&T&&y.alternate===null&&e(h,T),x=s(y,x,P),A===null?C=y:A.sibling=y,A=y,T=M}if(P===v.length)return t(h,T),It&&Zs(h,P),C;if(T===null){for(;P<v.length;P++)T=d(h,v[P],S),T!==null&&(x=s(T,x,P),A===null?C=T:A.sibling=T,A=T);return It&&Zs(h,P),C}for(T=i(h,T);P<v.length;P++)M=p(T,h,P,v[P],S),M!==null&&(n&&M.alternate!==null&&T.delete(M.key===null?P:M.key),x=s(M,x,P),A===null?C=M:A.sibling=M,A=M);return n&&T.forEach(function(I){return e(h,I)}),It&&Zs(h,P),C}function g(h,x,v,S){var C=ol(v);if(typeof C!="function")throw Error(se(150));if(v=C.call(v),v==null)throw Error(se(151));for(var A=C=null,T=x,P=x=0,M=null,y=v.next();T!==null&&!y.done;P++,y=v.next()){T.index>P?(M=T,T=null):M=T.sibling;var I=f(h,T,y.value,S);if(I===null){T===null&&(T=M);break}n&&T&&I.alternate===null&&e(h,T),x=s(I,x,P),A===null?C=I:A.sibling=I,A=I,T=M}if(y.done)return t(h,T),It&&Zs(h,P),C;if(T===null){for(;!y.done;P++,y=v.next())y=d(h,y.value,S),y!==null&&(x=s(y,x,P),A===null?C=y:A.sibling=y,A=y);return It&&Zs(h,P),C}for(T=i(h,T);!y.done;P++,y=v.next())y=p(T,h,P,y.value,S),y!==null&&(n&&y.alternate!==null&&T.delete(y.key===null?P:y.key),x=s(y,x,P),A===null?C=y:A.sibling=y,A=y);return n&&T.forEach(function(U){return e(h,U)}),It&&Zs(h,P),C}function m(h,x,v,S){if(typeof v=="object"&&v!==null&&v.type===aa&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Vu:e:{for(var C=v.key,A=x;A!==null;){if(A.key===C){if(C=v.type,C===aa){if(A.tag===7){t(h,A.sibling),x=r(A,v.props.children),x.return=h,h=x;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ns&&b_(C)===A.type){t(h,A.sibling),x=r(A,v.props),x.ref=fl(h,A,v),x.return=h,h=x;break e}t(h,A);break}else e(h,A);A=A.sibling}v.type===aa?(x=mo(v.props.children,h.mode,S,v.key),x.return=h,h=x):(S=Jc(v.type,v.key,v.props,null,h.mode,S),S.ref=fl(h,x,v),S.return=h,h=S)}return o(h);case oa:e:{for(A=v.key;x!==null;){if(x.key===A)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(h,x.sibling),x=r(x,v.children||[]),x.return=h,h=x;break e}else{t(h,x);break}else e(h,x);x=x.sibling}x=Jd(v,h.mode,S),x.return=h,h=x}return o(h);case ns:return A=v._init,m(h,x,A(v._payload),S)}if(El(v))return _(h,x,v,S);if(ol(v))return g(h,x,v,S);Ju(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(h,x.sibling),x=r(x,v),x.return=h,h=x):(t(h,x),x=Qd(v,h.mode,S),x.return=h,h=x),o(h)):t(h,x)}return m}var za=yy(!0),Sy=yy(!1),Tf=ks(null),wf=null,ma=null,Gm=null;function Wm(){Gm=ma=wf=null}function Xm(n){var e=Tf.current;bt(Tf),n._currentValue=e}function Tp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Aa(n,e){wf=n,Gm=ma=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&($n=!0),n.firstContext=null)}function Hi(n){var e=n._currentValue;if(Gm!==n)if(n={context:n,memoizedValue:e,next:null},ma===null){if(wf===null)throw Error(se(308));ma=n,wf.dependencies={lanes:0,firstContext:n}}else ma=ma.next=n;return e}var ao=null;function jm(n){ao===null?ao=[n]:ao.push(n)}function My(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,jm(e)):(t.next=r.next,r.next=t),e.interleaved=t,Br(n,i)}function Br(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var is=!1;function Ym(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ey(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Or(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function xs(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,at&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Br(n,t)}return r=i.interleaved,r===null?(e.next=e,jm(i)):(e.next=r.next,r.next=e),i.interleaved=e,Br(n,t)}function Yc(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}function P_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Af(n,e,t,i){var r=n.updateQueue;is=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,g=a;switch(f=e,p=t,g.tag){case 1:if(_=g.payload,typeof _=="function"){d=_.call(p,d,f);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=g.payload,f=typeof _=="function"?_.call(p,d,f):_,f==null)break e;d=Ht({},d,f);break e;case 2:is=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ro|=o,n.lanes=o,n.memoizedState=d}}function L_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var Nu={},gr=ks(Nu),hu=ks(Nu),pu=ks(Nu);function lo(n){if(n===Nu)throw Error(se(174));return n}function qm(n,e){switch(wt(pu,e),wt(hu,n),wt(gr,Nu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=rp(e,n)}bt(gr),wt(gr,e)}function Ba(){bt(gr),bt(hu),bt(pu)}function Ty(n){lo(pu.current);var e=lo(gr.current),t=rp(e,n.type);e!==t&&(wt(hu,n),wt(gr,t))}function $m(n){hu.current===n&&(bt(gr),bt(hu))}var Ft=ks(0);function Cf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jd=[];function Km(){for(var n=0;n<jd.length;n++)jd[n]._workInProgressVersionPrimary=null;jd.length=0}var qc=Xr.ReactCurrentDispatcher,Yd=Xr.ReactCurrentBatchConfig,Co=0,Bt=null,nn=null,fn=null,Rf=!1,zl=!1,mu=0,yT=0;function Mn(){throw Error(se(321))}function Zm(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!tr(n[t],e[t]))return!1;return!0}function Qm(n,e,t,i,r,s){if(Co=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,qc.current=n===null||n.memoizedState===null?TT:wT,n=t(i,r),zl){s=0;do{if(zl=!1,mu=0,25<=s)throw Error(se(301));s+=1,fn=nn=null,e.updateQueue=null,qc.current=AT,n=t(i,r)}while(zl)}if(qc.current=bf,e=nn!==null&&nn.next!==null,Co=0,fn=nn=Bt=null,Rf=!1,e)throw Error(se(300));return n}function Jm(){var n=mu!==0;return mu=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?Bt.memoizedState=fn=n:fn=fn.next=n,fn}function Vi(){if(nn===null){var n=Bt.alternate;n=n!==null?n.memoizedState:null}else n=nn.next;var e=fn===null?Bt.memoizedState:fn.next;if(e!==null)fn=e,nn=n;else{if(n===null)throw Error(se(310));nn=n,n={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},fn===null?Bt.memoizedState=fn=n:fn=fn.next=n}return fn}function gu(n,e){return typeof e=="function"?e(n):e}function qd(n){var e=Vi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=nn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Co&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,Bt.lanes|=c,Ro|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,tr(i,e.memoizedState)||($n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Bt.lanes|=s,Ro|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function $d(n){var e=Vi(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);tr(s,e.memoizedState)||($n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function wy(){}function Ay(n,e){var t=Bt,i=Vi(),r=e(),s=!tr(i.memoizedState,r);if(s&&(i.memoizedState=r,$n=!0),i=i.queue,eg(by.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||fn!==null&&fn.memoizedState.tag&1){if(t.flags|=2048,_u(9,Ry.bind(null,t,i,r,e),void 0,null),dn===null)throw Error(se(349));Co&30||Cy(t,e,r)}return r}function Cy(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Ry(n,e,t,i){e.value=t,e.getSnapshot=i,Py(e)&&Ly(n)}function by(n,e,t){return t(function(){Py(e)&&Ly(n)})}function Py(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!tr(n,t)}catch{return!0}}function Ly(n){var e=Br(n,1);e!==null&&Ji(e,n,1,-1)}function D_(n){var e=rr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:gu,lastRenderedState:n},e.queue=n,n=n.dispatch=ET.bind(null,Bt,n),[e.memoizedState,n]}function _u(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Dy(){return Vi().memoizedState}function $c(n,e,t,i){var r=rr();Bt.flags|=n,r.memoizedState=_u(1|e,t,void 0,i===void 0?null:i)}function ad(n,e,t,i){var r=Vi();i=i===void 0?null:i;var s=void 0;if(nn!==null){var o=nn.memoizedState;if(s=o.destroy,i!==null&&Zm(i,o.deps)){r.memoizedState=_u(e,t,s,i);return}}Bt.flags|=n,r.memoizedState=_u(1|e,t,s,i)}function N_(n,e){return $c(8390656,8,n,e)}function eg(n,e){return ad(2048,8,n,e)}function Ny(n,e){return ad(4,2,n,e)}function Iy(n,e){return ad(4,4,n,e)}function Uy(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Oy(n,e,t){return t=t!=null?t.concat([n]):null,ad(4,4,Uy.bind(null,e,n),t)}function tg(){}function Fy(n,e){var t=Vi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zm(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ky(n,e){var t=Vi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Zm(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function zy(n,e,t){return Co&21?(tr(t,e)||(t=Wx(),Bt.lanes|=t,Ro|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=t)}function ST(n,e){var t=vt;vt=t!==0&&4>t?t:4,n(!0);var i=Yd.transition;Yd.transition={};try{n(!1),e()}finally{vt=t,Yd.transition=i}}function By(){return Vi().memoizedState}function MT(n,e,t){var i=Ss(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Hy(n))Vy(e,t);else if(t=My(n,e,t,i),t!==null){var r=Vn();Ji(t,n,i,r),Gy(t,e,i)}}function ET(n,e,t){var i=Ss(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Hy(n))Vy(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,tr(a,o)){var l=e.interleaved;l===null?(r.next=r,jm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=My(n,e,r,i),t!==null&&(r=Vn(),Ji(t,n,i,r),Gy(t,e,i))}}function Hy(n){var e=n.alternate;return n===Bt||e!==null&&e===Bt}function Vy(n,e){zl=Rf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Gy(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Dm(n,t)}}var bf={readContext:Hi,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},TT={readContext:Hi,useCallback:function(n,e){return rr().memoizedState=[n,e===void 0?null:e],n},useContext:Hi,useEffect:N_,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,$c(4194308,4,Uy.bind(null,e,n),t)},useLayoutEffect:function(n,e){return $c(4194308,4,n,e)},useInsertionEffect:function(n,e){return $c(4,2,n,e)},useMemo:function(n,e){var t=rr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=rr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=MT.bind(null,Bt,n),[i.memoizedState,n]},useRef:function(n){var e=rr();return n={current:n},e.memoizedState=n},useState:D_,useDebugValue:tg,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=D_(!1),e=n[0];return n=ST.bind(null,n[1]),rr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Bt,r=rr();if(It){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),dn===null)throw Error(se(349));Co&30||Cy(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,N_(by.bind(null,i,s,n),[n]),i.flags|=2048,_u(9,Ry.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=rr(),e=dn.identifierPrefix;if(It){var t=Dr,i=Lr;t=(i&~(1<<32-Qi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=mu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=yT++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},wT={readContext:Hi,useCallback:Fy,useContext:Hi,useEffect:eg,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:Iy,useMemo:ky,useReducer:qd,useRef:Dy,useState:function(){return qd(gu)},useDebugValue:tg,useDeferredValue:function(n){var e=Vi();return zy(e,nn.memoizedState,n)},useTransition:function(){var n=qd(gu)[0],e=Vi().memoizedState;return[n,e]},useMutableSource:wy,useSyncExternalStore:Ay,useId:By,unstable_isNewReconciler:!1},AT={readContext:Hi,useCallback:Fy,useContext:Hi,useEffect:eg,useImperativeHandle:Oy,useInsertionEffect:Ny,useLayoutEffect:Iy,useMemo:ky,useReducer:$d,useRef:Dy,useState:function(){return $d(gu)},useDebugValue:tg,useDeferredValue:function(n){var e=Vi();return nn===null?e.memoizedState=n:zy(e,nn.memoizedState,n)},useTransition:function(){var n=$d(gu)[0],e=Vi().memoizedState;return[n,e]},useMutableSource:wy,useSyncExternalStore:Ay,useId:By,unstable_isNewReconciler:!1};function qi(n,e){if(n&&n.defaultProps){e=Ht({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Ht({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ld={isMounted:function(n){return(n=n._reactInternals)?Uo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Ss(n),s=Or(i,r);s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(Ji(e,n,r,i),Yc(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Vn(),r=Ss(n),s=Or(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=xs(n,s,r),e!==null&&(Ji(e,n,r,i),Yc(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Vn(),i=Ss(n),r=Or(t,i);r.tag=2,e!=null&&(r.callback=e),e=xs(n,r,i),e!==null&&(Ji(e,n,i,t),Yc(e,n,i))}};function I_(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!uu(t,i)||!uu(r,s):!0}function Wy(n,e,t){var i=!1,r=Ps,s=e.contextType;return typeof s=="object"&&s!==null?s=Hi(s):(r=Zn(e)?wo:Dn.current,i=e.contextTypes,s=(i=i!=null)?Fa(n,r):Ps),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ld,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function U_(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ld.enqueueReplaceState(e,e.state,null)}function Ap(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Ym(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hi(s):(s=Zn(e)?wo:Dn.current,r.context=Fa(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ld.enqueueReplaceState(r,r.state,null),Af(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ha(n,e){try{var t="",i=e;do t+=eE(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Kd(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Cp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var CT=typeof WeakMap=="function"?WeakMap:Map;function Xy(n,e,t){t=Or(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Lf||(Lf=!0,Fp=i),Cp(n,e)},t}function jy(n,e,t){t=Or(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Cp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Cp(n,e),typeof i!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function O_(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new CT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=HT.bind(null,n,e,t),e.then(n,n))}function F_(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function k_(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Or(-1,1),e.tag=2,xs(t,e,1))),t.lanes|=1),n)}var RT=Xr.ReactCurrentOwner,$n=!1;function Fn(n,e,t,i){e.child=n===null?Sy(e,null,t,i):za(e,n.child,t,i)}function z_(n,e,t,i,r){t=t.render;var s=e.ref;return Aa(e,r),i=Qm(n,e,t,i,s,r),t=Jm(),n!==null&&!$n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hr(n,e,r)):(It&&t&&Bm(e),e.flags|=1,Fn(n,e,i,r),e.child)}function B_(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!ug(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Yy(n,e,s,i,r)):(n=Jc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:uu,t(o,i)&&n.ref===e.ref)return Hr(n,e,r)}return e.flags|=1,n=Ms(s,i),n.ref=e.ref,n.return=e,e.child=n}function Yy(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(uu(s,i)&&n.ref===e.ref)if($n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&($n=!0);else return e.lanes=n.lanes,Hr(n,e,r)}return Rp(n,e,t,i,r)}function qy(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(_a,ci),ci|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,wt(_a,ci),ci|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,wt(_a,ci),ci|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,wt(_a,ci),ci|=i;return Fn(n,e,r,t),e.child}function $y(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rp(n,e,t,i,r){var s=Zn(t)?wo:Dn.current;return s=Fa(e,s),Aa(e,r),t=Qm(n,e,t,i,s,r),i=Jm(),n!==null&&!$n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hr(n,e,r)):(It&&i&&Bm(e),e.flags|=1,Fn(n,e,t,r),e.child)}function H_(n,e,t,i,r){if(Zn(t)){var s=!0;Sf(e)}else s=!1;if(Aa(e,r),e.stateNode===null)Kc(n,e),Wy(e,t,i),Ap(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Hi(u):(u=Zn(t)?wo:Dn.current,u=Fa(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&U_(e,o,i,u),is=!1;var f=e.memoizedState;o.state=f,Af(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Kn.current||is?(typeof c=="function"&&(wp(e,t,c,i),l=e.memoizedState),(a=is||I_(e,t,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ey(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:qi(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Hi(l):(l=Zn(t)?wo:Dn.current,l=Fa(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&U_(e,o,i,l),is=!1,f=e.memoizedState,o.state=f,Af(e,i,o,r);var _=e.memoizedState;a!==d||f!==_||Kn.current||is?(typeof p=="function"&&(wp(e,t,p,i),_=e.memoizedState),(u=is||I_(e,t,u,i,f,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return bp(n,e,t,i,s,r)}function bp(n,e,t,i,r,s){$y(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&A_(e,t,!1),Hr(n,e,s);i=e.stateNode,RT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=za(e,n.child,null,s),e.child=za(e,null,a,s)):Fn(n,e,a,s),e.memoizedState=i.state,r&&A_(e,t,!0),e.child}function Ky(n){var e=n.stateNode;e.pendingContext?w_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&w_(n,e.context,!1),qm(n,e.containerInfo)}function V_(n,e,t,i,r){return ka(),Vm(r),e.flags|=256,Fn(n,e,t,i),e.child}var Pp={dehydrated:null,treeContext:null,retryLane:0};function Lp(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zy(n,e,t){var i=e.pendingProps,r=Ft.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),wt(Ft,r&1),n===null)return Ep(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=fd(o,i,0,null),n=mo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Lp(t),e.memoizedState=Pp,n):ng(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return bT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ms(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ms(a,s):(s=mo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Lp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Pp,i}return s=n.child,n=s.sibling,i=Ms(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function ng(n,e){return e=fd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ec(n,e,t,i){return i!==null&&Vm(i),za(e,n.child,null,t),n=ng(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function bT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Kd(Error(se(422))),ec(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=fd({mode:"visible",children:i.children},r,0,null),s=mo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&za(e,n.child,null,o),e.child.memoizedState=Lp(o),e.memoizedState=Pp,s);if(!(e.mode&1))return ec(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Kd(s,i,void 0),ec(n,e,o,i)}if(a=(o&n.childLanes)!==0,$n||a){if(i=dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Br(n,r),Ji(i,n,r,-1))}return lg(),i=Kd(Error(se(421))),ec(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=VT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,gi=vs(r.nextSibling),xi=e,It=!0,Ki=null,n!==null&&(Pi[Li++]=Lr,Pi[Li++]=Dr,Pi[Li++]=Ao,Lr=n.id,Dr=n.overflow,Ao=e),e=ng(e,i.children),e.flags|=4096,e)}function G_(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Tp(n.return,e,t)}function Zd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Qy(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(n,e,i.children,t),i=Ft.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&G_(n,t,e);else if(n.tag===19)G_(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(wt(Ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Cf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Zd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Cf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Zd(e,!0,t,null,s);break;case"together":Zd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Kc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Hr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ro|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Ms(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Ms(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function PT(n,e,t){switch(e.tag){case 3:Ky(e),ka();break;case 5:Ty(e);break;case 1:Zn(e.type)&&Sf(e);break;case 4:qm(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;wt(Tf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(wt(Ft,Ft.current&1),e.flags|=128,null):t&e.child.childLanes?Zy(n,e,t):(wt(Ft,Ft.current&1),n=Hr(n,e,t),n!==null?n.sibling:null);wt(Ft,Ft.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Qy(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),wt(Ft,Ft.current),i)break;return null;case 22:case 23:return e.lanes=0,qy(n,e,t)}return Hr(n,e,t)}var Jy,Dp,eS,tS;Jy=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Dp=function(){};eS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,lo(gr.current);var s=null;switch(t){case"input":r=ep(n,r),i=ep(n,i),s=[];break;case"select":r=Ht({},r,{value:void 0}),i=Ht({},i,{value:void 0}),s=[];break;case"textarea":r=ip(n,r),i=ip(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=xf)}sp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(nu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(nu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};tS=function(n,e,t,i){t!==i&&(e.flags|=4)};function dl(n,e){if(!It)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function En(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function LT(n,e,t){var i=e.pendingProps;switch(Hm(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(e),null;case 1:return Zn(e.type)&&yf(),En(e),null;case 3:return i=e.stateNode,Ba(),bt(Kn),bt(Dn),Km(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Qu(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ki!==null&&(Bp(Ki),Ki=null))),Dp(n,e),En(e),null;case 5:$m(e);var r=lo(pu.current);if(t=e.type,n!==null&&e.stateNode!=null)eS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return En(e),null}if(n=lo(gr.current),Qu(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ur]=e,i[du]=s,n=(e.mode&1)!==0,t){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(r=0;r<wl.length;r++)Ct(wl[r],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Qg(i,s),Ct("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",i);break;case"textarea":e_(i,s),Ct("invalid",i)}sp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Zu(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Zu(i.textContent,a,n),r=["children",""+a]):nu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ct("scroll",i)}switch(t){case"input":Gu(i),Jg(i,s,!0);break;case"textarea":Gu(i),t_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=bx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ur]=e,n[du]=i,Jy(n,e,!1,!1),e.stateNode=n;e:{switch(o=op(t,i),t){case"dialog":Ct("cancel",n),Ct("close",n),r=i;break;case"iframe":case"object":case"embed":Ct("load",n),r=i;break;case"video":case"audio":for(r=0;r<wl.length;r++)Ct(wl[r],n);r=i;break;case"source":Ct("error",n),r=i;break;case"img":case"image":case"link":Ct("error",n),Ct("load",n),r=i;break;case"details":Ct("toggle",n),r=i;break;case"input":Qg(n,i),r=ep(n,i),Ct("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Ht({},i,{value:void 0}),Ct("invalid",n);break;case"textarea":e_(n,i),r=ip(n,i),Ct("invalid",n);break;default:r=i}sp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Dx(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Px(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&iu(n,l):typeof l=="number"&&iu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(nu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ct("scroll",n):l!=null&&Am(n,s,l,o))}switch(t){case"input":Gu(n),Jg(n,i,!1);break;case"textarea":Gu(n),t_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+bs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ma(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ma(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=xf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return En(e),null;case 6:if(n&&e.stateNode!=null)tS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=lo(pu.current),lo(gr.current),Qu(e)){if(i=e.stateNode,t=e.memoizedProps,i[ur]=e,(s=i.nodeValue!==t)&&(n=xi,n!==null))switch(n.tag){case 3:Zu(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Zu(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ur]=e,e.stateNode=i}return En(e),null;case 13:if(bt(Ft),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(It&&gi!==null&&e.mode&1&&!(e.flags&128))xy(),ka(),e.flags|=98560,s=!1;else if(s=Qu(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[ur]=e}else ka(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;En(e),s=!1}else Ki!==null&&(Bp(Ki),Ki=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ft.current&1?sn===0&&(sn=3):lg())),e.updateQueue!==null&&(e.flags|=4),En(e),null);case 4:return Ba(),Dp(n,e),n===null&&cu(e.stateNode.containerInfo),En(e),null;case 10:return Xm(e.type._context),En(e),null;case 17:return Zn(e.type)&&yf(),En(e),null;case 19:if(bt(Ft),s=e.memoizedState,s===null)return En(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)dl(s,!1);else{if(sn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Cf(n),o!==null){for(e.flags|=128,dl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return wt(Ft,Ft.current&1|2),e.child}n=n.sibling}s.tail!==null&&jt()>Va&&(e.flags|=128,i=!0,dl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Cf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),dl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!It)return En(e),null}else 2*jt()-s.renderingStartTime>Va&&t!==1073741824&&(e.flags|=128,i=!0,dl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=jt(),e.sibling=null,t=Ft.current,wt(Ft,i?t&1|2:t&1),e):(En(e),null);case 22:case 23:return ag(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?ci&1073741824&&(En(e),e.subtreeFlags&6&&(e.flags|=8192)):En(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function DT(n,e){switch(Hm(e),e.tag){case 1:return Zn(e.type)&&yf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Ba(),bt(Kn),bt(Dn),Km(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return $m(e),null;case 13:if(bt(Ft),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));ka()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(Ft),null;case 4:return Ba(),null;case 10:return Xm(e.type._context),null;case 22:case 23:return ag(),null;case 24:return null;default:return null}}var tc=!1,Rn=!1,NT=typeof WeakSet=="function"?WeakSet:Set,_e=null;function ga(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Vt(n,e,i)}else t.current=null}function Np(n,e,t){try{t()}catch(i){Vt(n,e,i)}}var W_=!1;function IT(n,e){if(gp=gf,n=oy(),zm(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,f=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(_p={focusedElem:n,selectionRange:t},gf=!1,_e=e;_e!==null;)if(e=_e,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,_e=n;else for(;_e!==null;){e=_e;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var g=_.memoizedProps,m=_.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:qi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Vt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}return _=W_,W_=!1,_}function Bl(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Np(e,t,s)}r=r.next}while(r!==i)}}function ud(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ip(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function nS(n){var e=n.alternate;e!==null&&(n.alternate=null,nS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ur],delete e[du],delete e[yp],delete e[gT],delete e[_T])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function iS(n){return n.tag===5||n.tag===3||n.tag===4}function X_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||iS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Up(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=xf));else if(i!==4&&(n=n.child,n!==null))for(Up(n,e,t),n=n.sibling;n!==null;)Up(n,e,t),n=n.sibling}function Op(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Op(n,e,t),n=n.sibling;n!==null;)Op(n,e,t),n=n.sibling}var pn=null,$i=!1;function qr(n,e,t){for(t=t.child;t!==null;)rS(n,e,t),t=t.sibling}function rS(n,e,t){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(td,t)}catch{}switch(t.tag){case 5:Rn||ga(t,e);case 6:var i=pn,r=$i;pn=null,qr(n,e,t),pn=i,$i=r,pn!==null&&($i?(n=pn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):pn.removeChild(t.stateNode));break;case 18:pn!==null&&($i?(n=pn,t=t.stateNode,n.nodeType===8?Wd(n.parentNode,t):n.nodeType===1&&Wd(n,t),au(n)):Wd(pn,t.stateNode));break;case 4:i=pn,r=$i,pn=t.stateNode.containerInfo,$i=!0,qr(n,e,t),pn=i,$i=r;break;case 0:case 11:case 14:case 15:if(!Rn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Np(t,e,o),r=r.next}while(r!==i)}qr(n,e,t);break;case 1:if(!Rn&&(ga(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Vt(t,e,a)}qr(n,e,t);break;case 21:qr(n,e,t);break;case 22:t.mode&1?(Rn=(i=Rn)||t.memoizedState!==null,qr(n,e,t),Rn=i):qr(n,e,t);break;default:qr(n,e,t)}}function j_(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new NT),e.forEach(function(i){var r=GT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Gi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pn=a.stateNode,$i=!1;break e;case 3:pn=a.stateNode.containerInfo,$i=!0;break e;case 4:pn=a.stateNode.containerInfo,$i=!0;break e}a=a.return}if(pn===null)throw Error(se(160));rS(s,o,r),pn=null,$i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)sS(e,n),e=e.sibling}function sS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gi(e,n),ir(n),i&4){try{Bl(3,n,n.return),ud(3,n)}catch(g){Vt(n,n.return,g)}try{Bl(5,n,n.return)}catch(g){Vt(n,n.return,g)}}break;case 1:Gi(e,n),ir(n),i&512&&t!==null&&ga(t,t.return);break;case 5:if(Gi(e,n),ir(n),i&512&&t!==null&&ga(t,t.return),n.flags&32){var r=n.stateNode;try{iu(r,"")}catch(g){Vt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cx(r,s),op(a,o);var u=op(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Dx(r,d):c==="dangerouslySetInnerHTML"?Px(r,d):c==="children"?iu(r,d):Am(r,c,d,u)}switch(a){case"input":tp(r,s);break;case"textarea":Rx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ma(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ma(r,!!s.multiple,s.defaultValue,!0):Ma(r,!!s.multiple,s.multiple?[]:"",!1))}r[du]=s}catch(g){Vt(n,n.return,g)}}break;case 6:if(Gi(e,n),ir(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Vt(n,n.return,g)}}break;case 3:if(Gi(e,n),ir(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{au(e.containerInfo)}catch(g){Vt(n,n.return,g)}break;case 4:Gi(e,n),ir(n);break;case 13:Gi(e,n),ir(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sg=jt())),i&4&&j_(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Rn=(u=Rn)||c,Gi(e,n),Rn=u):Gi(e,n),ir(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(_e=n,c=n.child;c!==null;){for(d=_e=c;_e!==null;){switch(f=_e,p=f.child,f.tag){case 0:case 11:case 14:case 15:Bl(4,f,f.return);break;case 1:ga(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(g){Vt(i,t,g)}}break;case 5:ga(f,f.return);break;case 22:if(f.memoizedState!==null){q_(d);continue}}p!==null?(p.return=f,_e=p):q_(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Lx("display",o))}catch(g){Vt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){Vt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gi(e,n),ir(n),i&4&&j_(n);break;case 21:break;default:Gi(e,n),ir(n)}}function ir(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(iS(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(iu(r,""),i.flags&=-33);var s=X_(n);Op(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=X_(n);Up(n,a,o);break;default:throw Error(se(161))}}catch(l){Vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function UT(n,e,t){_e=n,oS(n)}function oS(n,e,t){for(var i=(n.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||tc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Rn;a=tc;var u=Rn;if(tc=o,(Rn=l)&&!u)for(_e=r;_e!==null;)o=_e,l=o.child,o.tag===22&&o.memoizedState!==null?$_(r):l!==null?(l.return=o,_e=l):$_(r);for(;s!==null;)_e=s,oS(s),s=s.sibling;_e=r,tc=a,Rn=u}Y_(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):Y_(n)}}function Y_(n){for(;_e!==null;){var e=_e;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Rn||ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Rn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&L_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}L_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&au(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Rn||e.flags&512&&Ip(e)}catch(f){Vt(e,e.return,f)}}if(e===n){_e=null;break}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}}function q_(n){for(;_e!==null;){var e=_e;if(e===n){_e=null;break}var t=e.sibling;if(t!==null){t.return=e.return,_e=t;break}_e=e.return}}function $_(n){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ud(4,e)}catch(l){Vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Vt(e,r,l)}}var s=e.return;try{Ip(e)}catch(l){Vt(e,s,l)}break;case 5:var o=e.return;try{Ip(e)}catch(l){Vt(e,o,l)}}}catch(l){Vt(e,e.return,l)}if(e===n){_e=null;break}var a=e.sibling;if(a!==null){a.return=e.return,_e=a;break}_e=e.return}}var OT=Math.ceil,Pf=Xr.ReactCurrentDispatcher,ig=Xr.ReactCurrentOwner,zi=Xr.ReactCurrentBatchConfig,at=0,dn=null,Qt=null,_n=0,ci=0,_a=ks(0),sn=0,vu=null,Ro=0,cd=0,rg=0,Hl=null,Yn=null,sg=0,Va=1/0,wr=null,Lf=!1,Fp=null,ys=null,nc=!1,ls=null,Df=0,Vl=0,kp=null,Zc=-1,Qc=0;function Vn(){return at&6?jt():Zc!==-1?Zc:Zc=jt()}function Ss(n){return n.mode&1?at&2&&_n!==0?_n&-_n:xT.transition!==null?(Qc===0&&(Qc=Wx()),Qc):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Zx(n.type)),n):1}function Ji(n,e,t,i){if(50<Vl)throw Vl=0,kp=null,Error(se(185));Pu(n,t,i),(!(at&2)||n!==dn)&&(n===dn&&(!(at&2)&&(cd|=t),sn===4&&ss(n,_n)),Qn(n,i),t===1&&at===0&&!(e.mode&1)&&(Va=jt()+500,od&&zs()))}function Qn(n,e){var t=n.callbackNode;xE(n,e);var i=mf(n,n===dn?_n:0);if(i===0)t!==null&&r_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&r_(t),e===1)n.tag===0?vT(K_.bind(null,n)):gy(K_.bind(null,n)),pT(function(){!(at&6)&&zs()}),t=null;else{switch(Xx(i)){case 1:t=Lm;break;case 4:t=Vx;break;case 16:t=pf;break;case 536870912:t=Gx;break;default:t=pf}t=pS(t,aS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function aS(n,e){if(Zc=-1,Qc=0,at&6)throw Error(se(327));var t=n.callbackNode;if(Ca()&&n.callbackNode!==t)return null;var i=mf(n,n===dn?_n:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Nf(n,i);else{e=i;var r=at;at|=2;var s=uS();(dn!==n||_n!==e)&&(wr=null,Va=jt()+500,po(n,e));do try{zT();break}catch(a){lS(n,a)}while(!0);Wm(),Pf.current=s,at=r,Qt!==null?e=0:(dn=null,_n=0,e=sn)}if(e!==0){if(e===2&&(r=fp(n),r!==0&&(i=r,e=zp(n,r))),e===1)throw t=vu,po(n,0),ss(n,i),Qn(n,jt()),t;if(e===6)ss(n,i);else{if(r=n.current.alternate,!(i&30)&&!FT(r)&&(e=Nf(n,i),e===2&&(s=fp(n),s!==0&&(i=s,e=zp(n,s))),e===1))throw t=vu,po(n,0),ss(n,i),Qn(n,jt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Qs(n,Yn,wr);break;case 3:if(ss(n,i),(i&130023424)===i&&(e=sg+500-jt(),10<e)){if(mf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Vn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=xp(Qs.bind(null,n,Yn,wr),e);break}Qs(n,Yn,wr);break;case 4:if(ss(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Qi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=jt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*OT(i/1960))-i,10<i){n.timeoutHandle=xp(Qs.bind(null,n,Yn,wr),i);break}Qs(n,Yn,wr);break;case 5:Qs(n,Yn,wr);break;default:throw Error(se(329))}}}return Qn(n,jt()),n.callbackNode===t?aS.bind(null,n):null}function zp(n,e){var t=Hl;return n.current.memoizedState.isDehydrated&&(po(n,e).flags|=256),n=Nf(n,e),n!==2&&(e=Yn,Yn=t,e!==null&&Bp(e)),n}function Bp(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function FT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!tr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ss(n,e){for(e&=~rg,e&=~cd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Qi(e),i=1<<t;n[t]=-1,e&=~i}}function K_(n){if(at&6)throw Error(se(327));Ca();var e=mf(n,0);if(!(e&1))return Qn(n,jt()),null;var t=Nf(n,e);if(n.tag!==0&&t===2){var i=fp(n);i!==0&&(e=i,t=zp(n,i))}if(t===1)throw t=vu,po(n,0),ss(n,e),Qn(n,jt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Qs(n,Yn,wr),Qn(n,jt()),null}function og(n,e){var t=at;at|=1;try{return n(e)}finally{at=t,at===0&&(Va=jt()+500,od&&zs())}}function bo(n){ls!==null&&ls.tag===0&&!(at&6)&&Ca();var e=at;at|=1;var t=zi.transition,i=vt;try{if(zi.transition=null,vt=1,n)return n()}finally{vt=i,zi.transition=t,at=e,!(at&6)&&zs()}}function ag(){ci=_a.current,bt(_a)}function po(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,hT(t)),Qt!==null)for(t=Qt.return;t!==null;){var i=t;switch(Hm(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yf();break;case 3:Ba(),bt(Kn),bt(Dn),Km();break;case 5:$m(i);break;case 4:Ba();break;case 13:bt(Ft);break;case 19:bt(Ft);break;case 10:Xm(i.type._context);break;case 22:case 23:ag()}t=t.return}if(dn=n,Qt=n=Ms(n.current,null),_n=ci=e,sn=0,vu=null,rg=cd=Ro=0,Yn=Hl=null,ao!==null){for(e=0;e<ao.length;e++)if(t=ao[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ao=null}return n}function lS(n,e){do{var t=Qt;try{if(Wm(),qc.current=bf,Rf){for(var i=Bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rf=!1}if(Co=0,fn=nn=Bt=null,zl=!1,mu=0,ig.current=null,t===null||t.return===null){sn=1,vu=e,Qt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=_n,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=F_(o);if(p!==null){p.flags&=-257,k_(p,o,a,s,e),p.mode&1&&O_(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var g=new Set;g.add(l),e.updateQueue=g}else _.add(l);break e}else{if(!(e&1)){O_(s,u,e),lg();break e}l=Error(se(426))}}else if(It&&a.mode&1){var m=F_(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),k_(m,o,a,s,e),Vm(Ha(l,a));break e}}s=l=Ha(l,a),sn!==4&&(sn=2),Hl===null?Hl=[s]:Hl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Xy(s,l,e);P_(s,h);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ys===null||!ys.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=jy(s,a,e);P_(s,S);break e}}s=s.return}while(s!==null)}fS(t)}catch(C){e=C,Qt===t&&t!==null&&(Qt=t=t.return);continue}break}while(!0)}function uS(){var n=Pf.current;return Pf.current=bf,n===null?bf:n}function lg(){(sn===0||sn===3||sn===2)&&(sn=4),dn===null||!(Ro&268435455)&&!(cd&268435455)||ss(dn,_n)}function Nf(n,e){var t=at;at|=2;var i=uS();(dn!==n||_n!==e)&&(wr=null,po(n,e));do try{kT();break}catch(r){lS(n,r)}while(!0);if(Wm(),at=t,Pf.current=i,Qt!==null)throw Error(se(261));return dn=null,_n=0,sn}function kT(){for(;Qt!==null;)cS(Qt)}function zT(){for(;Qt!==null&&!cE();)cS(Qt)}function cS(n){var e=hS(n.alternate,n,ci);n.memoizedProps=n.pendingProps,e===null?fS(n):Qt=e,ig.current=null}function fS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=DT(t,e),t!==null){t.flags&=32767,Qt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{sn=6,Qt=null;return}}else if(t=LT(t,e,ci),t!==null){Qt=t;return}if(e=e.sibling,e!==null){Qt=e;return}Qt=e=n}while(e!==null);sn===0&&(sn=5)}function Qs(n,e,t){var i=vt,r=zi.transition;try{zi.transition=null,vt=1,BT(n,e,t,i)}finally{zi.transition=r,vt=i}return null}function BT(n,e,t,i){do Ca();while(ls!==null);if(at&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(yE(n,s),n===dn&&(Qt=dn=null,_n=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||nc||(nc=!0,pS(pf,function(){return Ca(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zi.transition,zi.transition=null;var o=vt;vt=1;var a=at;at|=4,ig.current=null,IT(n,t),sS(t,n),oT(_p),gf=!!gp,_p=gp=null,n.current=t,UT(t),fE(),at=a,vt=o,zi.transition=s}else n.current=t;if(nc&&(nc=!1,ls=n,Df=r),s=n.pendingLanes,s===0&&(ys=null),pE(t.stateNode),Qn(n,jt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Lf)throw Lf=!1,n=Fp,Fp=null,n;return Df&1&&n.tag!==0&&Ca(),s=n.pendingLanes,s&1?n===kp?Vl++:(Vl=0,kp=n):Vl=0,zs(),null}function Ca(){if(ls!==null){var n=Xx(Df),e=zi.transition,t=vt;try{if(zi.transition=null,vt=16>n?16:n,ls===null)var i=!1;else{if(n=ls,ls=null,Df=0,at&6)throw Error(se(331));var r=at;for(at|=4,_e=n.current;_e!==null;){var s=_e,o=s.child;if(_e.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(_e=u;_e!==null;){var c=_e;switch(c.tag){case 0:case 11:case 15:Bl(8,c,s)}var d=c.child;if(d!==null)d.return=c,_e=d;else for(;_e!==null;){c=_e;var f=c.sibling,p=c.return;if(nS(c),c===u){_e=null;break}if(f!==null){f.return=p,_e=f;break}_e=p}}}var _=s.alternate;if(_!==null){var g=_.child;if(g!==null){_.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}_e=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,_e=o;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bl(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,_e=h;break e}_e=s.return}}var x=n.current;for(_e=x;_e!==null;){o=_e;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,_e=v;else e:for(o=x;_e!==null;){if(a=_e,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ud(9,a)}}catch(C){Vt(a,a.return,C)}if(a===o){_e=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,_e=S;break e}_e=a.return}}if(at=r,zs(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(td,n)}catch{}i=!0}return i}finally{vt=t,zi.transition=e}}return!1}function Z_(n,e,t){e=Ha(t,e),e=Xy(n,e,1),n=xs(n,e,1),e=Vn(),n!==null&&(Pu(n,1,e),Qn(n,e))}function Vt(n,e,t){if(n.tag===3)Z_(n,n,t);else for(;e!==null;){if(e.tag===3){Z_(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ys===null||!ys.has(i))){n=Ha(t,n),n=jy(e,n,1),e=xs(e,n,1),n=Vn(),e!==null&&(Pu(e,1,n),Qn(e,n));break}}e=e.return}}function HT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Vn(),n.pingedLanes|=n.suspendedLanes&t,dn===n&&(_n&t)===t&&(sn===4||sn===3&&(_n&130023424)===_n&&500>jt()-sg?po(n,0):rg|=t),Qn(n,e)}function dS(n,e){e===0&&(n.mode&1?(e=ju,ju<<=1,!(ju&130023424)&&(ju=4194304)):e=1);var t=Vn();n=Br(n,e),n!==null&&(Pu(n,e,t),Qn(n,t))}function VT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),dS(n,t)}function GT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),dS(n,t)}var hS;hS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Kn.current)$n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return $n=!1,PT(n,e,t);$n=!!(n.flags&131072)}else $n=!1,It&&e.flags&1048576&&_y(e,Ef,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Kc(n,e),n=e.pendingProps;var r=Fa(e,Dn.current);Aa(e,t),r=Qm(null,e,i,n,r,t);var s=Jm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Zn(i)?(s=!0,Sf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ym(e),r.updater=ld,e.stateNode=r,r._reactInternals=e,Ap(e,i,n,t),e=bp(null,e,i,!0,s,t)):(e.tag=0,It&&s&&Bm(e),Fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Kc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=XT(i),n=qi(i,n),r){case 0:e=Rp(null,e,i,n,t);break e;case 1:e=H_(null,e,i,n,t);break e;case 11:e=z_(null,e,i,n,t);break e;case 14:e=B_(null,e,i,qi(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),Rp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),H_(n,e,i,r,t);case 3:e:{if(Ky(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ey(n,e),Af(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ha(Error(se(423)),e),e=V_(n,e,i,t,r);break e}else if(i!==r){r=Ha(Error(se(424)),e),e=V_(n,e,i,t,r);break e}else for(gi=vs(e.stateNode.containerInfo.firstChild),xi=e,It=!0,Ki=null,t=Sy(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ka(),i===r){e=Hr(n,e,t);break e}Fn(n,e,i,t)}e=e.child}return e;case 5:return Ty(e),n===null&&Ep(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vp(i,r)?o=null:s!==null&&vp(i,s)&&(e.flags|=32),$y(n,e),Fn(n,e,o,t),e.child;case 6:return n===null&&Ep(e),null;case 13:return Zy(n,e,t);case 4:return qm(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=za(e,null,i,t):Fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),z_(n,e,i,r,t);case 7:return Fn(n,e,e.pendingProps,t),e.child;case 8:return Fn(n,e,e.pendingProps.children,t),e.child;case 12:return Fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,wt(Tf,i._currentValue),i._currentValue=o,s!==null)if(tr(s.value,o)){if(s.children===r.children&&!Kn.current){e=Hr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Or(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Tp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Tp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Aa(e,t),r=Hi(r),i=i(r),e.flags|=1,Fn(n,e,i,t),e.child;case 14:return i=e.type,r=qi(i,e.pendingProps),r=qi(i.type,r),B_(n,e,i,r,t);case 15:return Yy(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),Kc(n,e),e.tag=1,Zn(i)?(n=!0,Sf(e)):n=!1,Aa(e,t),Wy(e,i,r),Ap(e,i,r,t),bp(null,e,i,!0,n,t);case 19:return Qy(n,e,t);case 22:return qy(n,e,t)}throw Error(se(156,e.tag))};function pS(n,e){return Hx(n,e)}function WT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ui(n,e,t,i){return new WT(n,e,t,i)}function ug(n){return n=n.prototype,!(!n||!n.isReactComponent)}function XT(n){if(typeof n=="function")return ug(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Rm)return 11;if(n===bm)return 14}return 2}function Ms(n,e){var t=n.alternate;return t===null?(t=Ui(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Jc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")ug(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case aa:return mo(t.children,r,s,e);case Cm:o=8,r|=8;break;case Kh:return n=Ui(12,t,e,r|2),n.elementType=Kh,n.lanes=s,n;case Zh:return n=Ui(13,t,e,r),n.elementType=Zh,n.lanes=s,n;case Qh:return n=Ui(19,t,e,r),n.elementType=Qh,n.lanes=s,n;case Tx:return fd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Mx:o=10;break e;case Ex:o=9;break e;case Rm:o=11;break e;case bm:o=14;break e;case ns:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Ui(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function mo(n,e,t,i){return n=Ui(7,n,i,e),n.lanes=t,n}function fd(n,e,t,i){return n=Ui(22,n,i,e),n.elementType=Tx,n.lanes=t,n.stateNode={isHidden:!1},n}function Qd(n,e,t){return n=Ui(6,n,null,e),n.lanes=t,n}function Jd(n,e,t){return e=Ui(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function jT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nd(0),this.expirationTimes=Nd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function cg(n,e,t,i,r,s,o,a,l){return n=new jT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ui(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ym(s),n}function YT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function mS(n){if(!n)return Ps;n=n._reactInternals;e:{if(Uo(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(Zn(t))return my(n,t,e)}return e}function gS(n,e,t,i,r,s,o,a,l){return n=cg(t,i,!0,n,r,s,o,a,l),n.context=mS(null),t=n.current,i=Vn(),r=Ss(t),s=Or(i,r),s.callback=e??null,xs(t,s,r),n.current.lanes=r,Pu(n,r,i),Qn(n,i),n}function dd(n,e,t,i){var r=e.current,s=Vn(),o=Ss(r);return t=mS(t),e.context===null?e.context=t:e.pendingContext=t,e=Or(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=xs(r,e,o),n!==null&&(Ji(n,r,o,s),Yc(n,r,o)),o}function If(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Q_(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function fg(n,e){Q_(n,e),(n=n.alternate)&&Q_(n,e)}function qT(){return null}var _S=typeof reportError=="function"?reportError:function(n){console.error(n)};function dg(n){this._internalRoot=n}hd.prototype.render=dg.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));dd(n,e,null,null)};hd.prototype.unmount=dg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;bo(function(){dd(null,n,null,null)}),e[zr]=null}};function hd(n){this._internalRoot=n}hd.prototype.unstable_scheduleHydration=function(n){if(n){var e=qx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rs.length&&e!==0&&e<rs[t].priority;t++);rs.splice(t,0,n),t===0&&Kx(n)}};function hg(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function J_(){}function $T(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=If(o);s.call(u)}}var o=gS(e,i,n,0,null,!1,!1,"",J_);return n._reactRootContainer=o,n[zr]=o.current,cu(n.nodeType===8?n.parentNode:n),bo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=If(l);a.call(u)}}var l=cg(n,0,!1,null,null,!1,!1,"",J_);return n._reactRootContainer=l,n[zr]=l.current,cu(n.nodeType===8?n.parentNode:n),bo(function(){dd(e,l,t,i)}),l}function md(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=If(o);a.call(l)}}dd(e,o,n,r)}else o=$T(t,e,n,r,i);return If(o)}jx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Tl(e.pendingLanes);t!==0&&(Dm(e,t|1),Qn(e,jt()),!(at&6)&&(Va=jt()+500,zs()))}break;case 13:bo(function(){var i=Br(n,1);if(i!==null){var r=Vn();Ji(i,n,1,r)}}),fg(n,1)}};Nm=function(n){if(n.tag===13){var e=Br(n,134217728);if(e!==null){var t=Vn();Ji(e,n,134217728,t)}fg(n,134217728)}};Yx=function(n){if(n.tag===13){var e=Ss(n),t=Br(n,e);if(t!==null){var i=Vn();Ji(t,n,e,i)}fg(n,e)}};qx=function(){return vt};$x=function(n,e){var t=vt;try{return vt=n,e()}finally{vt=t}};lp=function(n,e,t){switch(e){case"input":if(tp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=sd(i);if(!r)throw Error(se(90));Ax(i),tp(i,r)}}}break;case"textarea":Rx(n,t);break;case"select":e=t.value,e!=null&&Ma(n,!!t.multiple,e,!1)}};Ux=og;Ox=bo;var KT={usingClientEntryPoint:!1,Events:[Du,fa,sd,Nx,Ix,og]},hl={findFiberByHostInstance:oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZT={bundleType:hl.bundleType,version:hl.version,rendererPackageName:hl.rendererPackageName,rendererConfig:hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zx(n),n===null?null:n.stateNode},findFiberByHostInstance:hl.findFiberByHostInstance||qT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{td=ic.inject(ZT),mr=ic}catch{}}Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KT;Ti.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hg(e))throw Error(se(200));return YT(n,e,null,t)};Ti.createRoot=function(n,e){if(!hg(n))throw Error(se(299));var t=!1,i="",r=_S;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=cg(n,1,!1,null,null,t,!1,i,r),n[zr]=e.current,cu(n.nodeType===8?n.parentNode:n),new dg(e)};Ti.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=zx(e),n=n===null?null:n.stateNode,n};Ti.flushSync=function(n){return bo(n)};Ti.hydrate=function(n,e,t){if(!pd(e))throw Error(se(200));return md(null,n,e,!0,t)};Ti.hydrateRoot=function(n,e,t){if(!hg(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=_S;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=gS(e,null,n,1,t??null,r,!1,s,o),n[zr]=e.current,cu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new hd(e)};Ti.render=function(n,e,t){if(!pd(e))throw Error(se(200));return md(null,n,e,!1,t)};Ti.unmountComponentAtNode=function(n){if(!pd(n))throw Error(se(40));return n._reactRootContainer?(bo(function(){md(null,null,n,!1,function(){n._reactRootContainer=null,n[zr]=null})}),!0):!1};Ti.unstable_batchedUpdates=og;Ti.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!pd(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return md(n,e,t,!1,i)};Ti.version="18.3.1-next-f1338f8080-20240426";function vS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vS)}catch(n){console.error(n)}}vS(),vx.exports=Ti;var QT=vx.exports,e0=QT;qh.createRoot=e0.createRoot,qh.hydrateRoot=e0.hydrateRoot;function Ar(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function xS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var yi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ga={duration:.5,overwrite:!1,delay:0},pg,vn,Ut,Oi=1e8,St=1/Oi,Hp=Math.PI*2,JT=Hp/4,ew=0,yS=Math.sqrt,tw=Math.cos,nw=Math.sin,hn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Vr=function(e){return typeof e=="number"},mg=function(e){return typeof e>"u"},vr=function(e){return typeof e=="object"},Jn=function(e){return e!==!1},gg=function(){return typeof window<"u"},rc=function(e){return Gt(e)||hn(e)},SS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ln=Array.isArray,iw=/random\([^)]+\)/g,rw=/,\s*/g,t0=/(?:-?\.?\d|\.)+/gi,MS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,va=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ES=/[+-]=-?[.\d]+/,sw=/[^,'"\[\]\s]+/gi,ow=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,sr,Vp,_g,Mi={},Uf={},TS,wS=function(e){return(Uf=Wa(e,Mi))&&oi},vg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},xu=function(e,t){return!t&&console.warn(e)},AS=function(e,t){return e&&(Mi[e]=t)&&Uf&&(Uf[e]=t)||Mi},yu=function(){return 0},aw={suppressEvents:!0,isStart:!0,kill:!1},ef={suppressEvents:!0,kill:!1},lw={suppressEvents:!0},xg={},Es=[],Gp={},CS,di={},th={},n0=30,tf=[],yg="",Sg=function(e){var t=e[0],i,r;if(vr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=tf.length;r--&&!tf[r].targetTest(t););i=tf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ZS(e[r],i)))||e.splice(r,1);return e},go=function(e){return e._gsap||Sg(Fi(e))[0]._gsap},RS=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():mg(i)&&e.getAttribute&&e.getAttribute(t)||i},ei=function(e,t){return(e=e.split(",")).forEach(t)||e},Xt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ra=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},uw=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Of=function(){var e=Es.length,t=Es.slice(0),i,r;for(Gp={},Es.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Mg=function(e){return!!(e._initted||e._startAt||e.add)},bS=function(e,t,i,r){Es.length&&!vn&&Of(),e.render(t,i,!!(vn&&t<0&&Mg(e))),Es.length&&!vn&&Of()},PS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(sw).length<2?t:hn(e)?e.trim():e},LS=function(e){return e},Ei=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},cw=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Wa=function(e,t){for(var i in t)e[i]=t[i];return e},i0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=vr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Ff=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Gl=function(e){var t=e.parent||kt,i=e.keyframes?cw(Ln(e.keyframes)):Ei;if(Jn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},fw=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},DS=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},gd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ls=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_o=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},dw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Wp=function(e,t,i,r){return e._startAt&&(vn?e._startAt.revert(ef):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},hw=function n(e){return!e||e._ts&&n(e.parent)},r0=function(e){return e._repeat?Xa(e._tTime,e=e.duration()+e._rDelay)*e:0},Xa=function(e,t){var i=Math.floor(e=Ot(e/t));return e&&i===e?i-1:i},kf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},_d=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||St)||0))},vd=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),_d(e),i._dirty||_o(i,e)),e},NS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=kf(e.rawTime(),t),(!t._dur||Iu(0,t.totalDuration(),i)-t._tTime>St)&&t.render(i,!0)),_o(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-St}},cr=function(e,t,i,r){return t.parent&&Ls(t),t._start=Ot((Vr(i)?i:i||e!==kt?bi(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),DS(e,t,"_first","_last",e._sort?"_start":0),Xp(t)||(e._recent=t),r||NS(e,t),e._ts<0&&vd(e,e._tTime),e},IS=function(e,t){return(Mi.ScrollTrigger||vg("scrollTrigger",t))&&Mi.ScrollTrigger.create(t,e)},US=function(e,t,i,r,s){if(Tg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&CS!==pi.frame)return Es.push(e),e._lazy=[s,r],1},pw=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Xp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mw=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&pw(e)&&!(!e._initted&&Xp(e))||(e._ts<0||e._dp._ts<0)&&!Xp(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Iu(0,e._tDur,t),c=Xa(l,a),e._yoyo&&c&1&&(o=1-o),c!==Xa(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||vn||r||e._zTime===St||!t&&e._zTime){if(!e._initted&&US(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?St:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Wp(e,t,i,!0),e._onUpdate&&!i&&_i(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&_i(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ls(e,1),!i&&!vn&&(_i(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gw=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ja=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&vd(e,e._tTime=e._tDur*a),e.parent&&_d(e),i||_o(e.parent,e),e},s0=function(e){return e instanceof Bn?_o(e):ja(e,e._dur)},_w={_start:0,endTime:yu,totalDuration:yu},bi=function n(e,t,i){var r=e.labels,s=e._recent||_w,o=e.duration()>=Oi?s.endTime(!1):e._dur,a,l,u;return hn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Ln(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Wl=function(e,t,i){var r=Vr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;o.immediateRender=Jn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Zt(t[0],o,t[s+1])},Bs=function(e,t){return e||e===0?t(e):t},Iu=function(e,t,i){return i<e?e:i>t?t:i},bn=function(e,t){return!hn(e)||!(t=ow.exec(e))?"":t[1]},vw=function(e,t,i){return Bs(i,function(r){return Iu(e,t,r)})},jp=[].slice,OS=function(e,t){return e&&vr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&vr(e[0]))&&!e.nodeType&&e!==sr},xw=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return hn(r)&&!t||OS(r,1)?(s=i).push.apply(s,Fi(r)):i.push(r)})||i},Fi=function(e,t,i){return Ut&&!t&&Ut.selector?Ut.selector(e):hn(e)&&!i&&(Vp||!Ya())?jp.call((t||_g).querySelectorAll(e),0):Ln(e)?xw(e,i):OS(e)?jp.call(e,0):e?[e]:[]},Yp=function(e){return e=Fi(e)[0]||xu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?xu("Invalid scope")||_g.createElement("div"):e)}},FS=function(e){return e.sort(function(){return .5-Math.random()})},kS=function(e){if(Gt(e))return e;var t=vr(e)?e:{each:e},i=vo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return hn(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(f,p,_){var g=(_||t).length,m=o[g],h,x,v,S,C,A,T,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Oi])[1],!M){for(T=-Oi;T<(T=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],h=l?Math.min(M,g)*c-.5:r%M,x=M===Oi?0:l?g*d/M-.5:r/M|0,T=0,P=Oi,A=0;A<g;A++)v=A%M-h,S=x-(A/M|0),m[A]=C=u?Math.abs(u==="y"?S:v):yS(v*v+S*S),C>T&&(T=C),C<P&&(P=C);r==="random"&&FS(m),m.max=T-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=bn(t.amount||t.each)||0,i=i&&g<0?qS(i):i}return g=(m[f]-m.min)/m.max||0,Ot(m.b+(i?i(g):g)*m.v)+m.u}},qp=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Vr(i)?0:bn(i))}},zS=function(e,t){var i=Ln(e),r,s;return!i&&vr(e)&&(r=i=e.radius||Oi,e.values?(e=Fi(e.values),(s=!Vr(e[0]))&&(r*=r)):e=qp(e.increment)),Bs(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Oi,c=0,d=e.length,f,p;d--;)s?(f=e[d].x-a,p=e[d].y-l,f=f*f+p*p):f=Math.abs(e[d]-a),f<u&&(u=f,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Vr(o)?c:c+bn(o)}:qp(e))},BS=function(e,t,i,r){return Bs(Ln(e)?!t:i===!0?!!(i=0):!r,function(){return Ln(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},yw=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Sw=function(e,t){return function(i){return e(parseFloat(i))+(t||bn(i))}},Mw=function(e,t,i){return VS(e,t,0,1,i)},HS=function(e,t,i){return Bs(i,function(r){return e[~~t(r)]})},Ew=function n(e,t,i){var r=t-e;return Ln(e)?HS(e,n(0,e.length),t):Bs(i,function(s){return(r+(s-e)%r)%r+e})},Tw=function n(e,t,i){var r=t-e,s=r*2;return Ln(e)?HS(e,n(0,e.length-1),t):Bs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Su=function(e){return e.replace(iw,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(rw);return BS(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},VS=function(e,t,i,r,s){var o=t-e,a=r-i;return Bs(s,function(l){return i+((l-e)/o*a||0)})},ww=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=hn(e),a={},l,u,c,d,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Ln(e)&&!Ln(t)){for(c=[],d=e.length,f=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(_){_*=d;var g=Math.min(f,~~_);return c[g](_-g)},i=t}else r||(e=Wa(Ln(e)?[]:{},e));if(!c){for(l in t)Eg.call(a,e,l,"get",t[l]);s=function(_){return Cg(_,a)||(o?e.p:e)}}}return Bs(i,s)},o0=function(e,t,i){var r=e.labels,s=Oi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_i=function(e,t,i){var r=e.vars,s=r[t],o=Ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Es.length&&Of(),a&&(Ut=a),c=l?s.apply(u,l):s.call(u),Ut=o,c},Al=function(e){return Ls(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&_i(e,"onInterrupt"),e},xa,GS=[],WS=function(e){if(e)if(e=!e.name&&e.default||e,gg()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:yu,render:Cg,add:Eg,kill:Hw,modifier:Bw,rawVars:0},o={targetTest:0,get:0,getSetter:Ag,aliases:{},register:0};if(Ya(),e!==r){if(di[t])return;Ei(r,Ei(Ff(e,s),o)),Wa(r.prototype,Wa(s,Ff(e,o))),di[r.prop=t]=r,e.targetTest&&(tf.push(r),xg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}AS(t,r),e.register&&e.register(oi,r,ti)}else GS.push(e)},yt=255,Cl={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},nh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*yt+.5|0},XS=function(e,t,i){var r=e?Vr(e)?[e>>16,e>>8&yt,e&yt]:0:Cl.black,s,o,a,l,u,c,d,f,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Cl[e])r=Cl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&yt,r&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(t0),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=nh(l+1/3,s,o),r[1]=nh(l,s,o),r[2]=nh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(MS),i&&r.length<4&&(r[3]=1),r}else r=e.match(t0)||Cl.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/yt,o=r[1]/yt,a=r[2]/yt,d=Math.max(s,o,a),f=Math.min(s,o,a),c=(d+f)/2,d===f?l=u=0:(p=d-f,u=c>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},jS=function(e){var t=[],i=[],r=-1;return e.split(Ts).forEach(function(s){var o=s.match(va)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},a0=function(e,t,i){var r="",s=(e+r).match(Ts),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(f){return(f=XS(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=jS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ts,"1").split(va),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ts),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ts=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Cl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Aw=/hsl[a]?\(/,YS=function(e){var t=e.join(" "),i;if(Ts.lastIndex=0,Ts.test(t))return i=Aw.test(t),e[1]=a0(e[1],i),e[0]=a0(e[0],i,jS(e[1])),!0},Mu,pi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,f,p,_=function g(m){var h=n()-r,x=m===!0,v,S,C,A;if((h>e||h<0)&&(i+=h-t),r+=h,C=r-i,v=C-o,(v>0||x)&&(A=++d.frame,f=C-d.time*1e3,d.time=C=C/1e3,o+=v+(v>=s?4:s-v),S=1),x||(l=u(g)),S)for(p=0;p<a.length;p++)a[p](C,f,A,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){TS&&(!Vp&&gg()&&(sr=Vp=window,_g=sr.document||{},Mi.gsap=oi,(sr.gsapVersions||(sr.gsapVersions=[])).push(oi.version),wS(Uf||sr.GreenSockGlobals||!sr.gsap&&sr||{}),GS.forEach(WS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Mu=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Mu=0,u=yu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,h,x){var v=h?function(S,C,A,T){m(S,C,A,T),d.remove(v)}:m;return d.remove(m),a[x?"unshift":"push"](v),Ya(),v},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},d}(),Ya=function(){return!Mu&&pi.wake()},ot={},Cw=/^[\d.\-M][\d.\-,\s]/,Rw=/["']/g,bw=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(Rw,"").trim():+u,r=l.substr(a+1).trim();return t},Pw=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},Lw=function(e){var t=(e+"").split("("),i=ot[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[bw(t[1])]:Pw(e).split(",").map(PS)):ot._CE&&Cw.test(e)?ot._CE("",e):i},qS=function(e){return function(t){return 1-e(1-t)}},$S=function n(e,t){for(var i=e._first,r;i;)i instanceof Bn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},vo=function(e,t){return e&&(Gt(e)?e:ot[e]||Lw(e))||t},Oo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ei(e,function(a){ot[a]=Mi[a]=s,ot[o=a.toLowerCase()]=i;for(var l in s)ot[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[a+"."+l]=s[l]}),s},KS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ih=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Hp*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*nw((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:KS(a);return s=Hp/s,l.config=function(u,c){return n(e,u,c)},l},rh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:KS(i);return r.config=function(s){return n(e,s)},r};ei("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Oo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;Oo("Elastic",ih("in"),ih("out"),ih());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Oo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Oo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Oo("Circ",function(n){return-(yS(1-n*n)-1)});Oo("Sine",function(n){return n===1?1:-tw(n*JT)+1});Oo("Back",rh("in"),rh("out"),rh());ot.SteppedEase=ot.steps=Mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-St;return function(a){return((r*Iu(0,o,a)|0)+s)*i}}};Ga.ease=ot["quad.out"];ei("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yg+=n+","+n+"Params,"});var ZS=function(e,t){this.id=ew++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:RS,this.set=t?t.getSetter:Ag},Eu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ja(this,+t.duration,1,1),this.data=t.data,Ut&&(this._ctx=Ut,Ut.data.push(this)),Mu||pi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ja(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vd(this,i),!s._dp||s.parent||NS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&cr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===St||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),bS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+r0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+r0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Xa(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-St?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?kf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-St?0:this._rts,this.totalTime(Iu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),_d(this),dw(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==St&&(this._tTime-=St)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Ot(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&cr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Jn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kf(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=lw);var r=vn;return vn=i,Mg(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),vn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,s0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,s0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(bi(this,i),Jn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Jn(r)),this._dur||(this._zTime=-St),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-St:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-St,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-St)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Gt(i)?i:LS,l=function(){var c=r.then;r.then=null,s&&s(),Gt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Al(this)},n}();Ei(Eu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-St,_prom:0,_ps:!1,_rts:1});var Bn=function(n){xS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Jn(i.sortChildren),kt&&cr(i.parent||kt,Ar(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&IS(Ar(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Wl(0,arguments,this),this},t.from=function(r,s,o){return Wl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Wl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Gl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Zt(r,s,bi(this,o),1),this},t.call=function(r,s,o){return cr(this,Zt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Zt(r,o,bi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Gl(o).immediateRender=Jn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Gl(a).immediateRender=Jn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),d=this._zTime<0!=r<0&&(this._initted||!u),f,p,_,g,m,h,x,v,S,C,A,T;if(this!==kt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,v=this._ts,h=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Ot(c%m),c===l?(g=this._repeat,f=u):(C=Ot(c/m),g=~~C,g&&g===C&&(f=u,g--),f>u&&(f=u)),C=Xa(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),A&&g&1&&(f=u-f,T=1),g!==C&&!this._lock){var P=A&&C&1,M=P===(A&&g&1);if(g<C&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(T?0:Ot(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,C=g),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;$S(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=gw(this,Ot(a),Ot(f)),x&&(c-=f-(f=x._start))),this._tTime=c,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(_i(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||f>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!h){x=0,_&&(c+=this._zTime=-St);break}}p=_}else{p=this._last;for(var y=r<0?r:f;p;){if(_=p._prev,(p._act||y<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||vn&&Mg(p)),f!==this._time||!this._ts&&!h){x=0,_&&(c+=this._zTime=y?-St:St);break}}p=_}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-St)._zTime=f>=a?1:-1,this._ts))return this._start=S,_d(this),this.render(r,s,o);this._onUpdate&&!s&&_i(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Ls(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(_i(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Vr(s)||(s=bi(this,s,r)),!(r instanceof Eu)){if(Ln(r))return r.forEach(function(a){return o.add(a,s)}),this;if(hn(r))return this.addLabel(r,s);if(Gt(r))r=Zt.delayedCall(0,r);else return this}return this!==r?cr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Oi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Zt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return hn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(r.parent===this&&gd(this,r),r===this._recent&&(this._recent=this._last),_o(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(pi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=bi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Zt.delayedCall(0,s||yu,o);return a.data="isPause",this._hasPause=1,cr(this,a,bi(this,r))},t.removePause=function(r){var s=this._first;for(r=bi(this,r);s;)s._start===r&&s.data==="isPause"&&Ls(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)us!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Fi(r),l=this._first,u=Vr(s),c;l;)l instanceof Zt?uw(l._targets,a)&&(u?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=bi(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,f=l.immediateRender,p,_=Zt.to(o,Ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||St,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==m&&ja(_,m,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,d||[])}},s));return f?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ei({startAt:{time:bi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),o0(this,bi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),o0(this,bi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+St)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Ot(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return _o(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_o(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Oi,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,cr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ot(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;ja(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(kt._ts&&(bS(kt,kf(r,kt)),CS=pi.frame),pi.frame>=n0){n0+=yi.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&yi.autoSleep&&pi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pi.sleep()}}},e}(Eu);Ei(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Dw=function(e,t,i,r,s,o,a){var l=new ti(this._pt,e,t,0,1,iM,null,s),u=0,c=0,d,f,p,_,g,m,h,x;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Su(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),f=i.match(eh)||[];d=eh.exec(r);)_=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:_.charAt(1)==="="?Ra(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},u=eh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(ES.test(r)||h)&&(l.e=0),this._pt=l,l},Eg=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var d=e[t],f=i!=="get"?i:Gt(d)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=Gt(d)?u?Fw:tM:wg,_;if(hn(r)&&(~r.indexOf("random(")&&(r=Su(r)),r.charAt(1)==="="&&(_=Ra(f,r)+(bn(f)||0),(_||_===0)&&(r=_))),!c||f!==r||$p)return!isNaN(f*r)&&r!==""?(_=new ti(this._pt,e,t,+f||0,r-(f||0),typeof d=="boolean"?zw:nM,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&vg(t,r),Dw.call(this,e,t,f,r,p,l||yi.stringFilter,u))},Nw=function(e,t,i,r,s){if(Gt(e)&&(e=Xl(e,s,t,i,r)),!vr(e)||e.style&&e.nodeType||Ln(e)||SS(e))return hn(e)?Xl(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Xl(e[a],s,t,i,r);return o},QS=function(e,t,i,r,s,o){var a,l,u,c;if(di[e]&&(a=new di[e]).init(s,a.rawVars?t[e]:Nw(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ti(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==xa))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},us,$p,Tg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,h=e.parent,x=h&&h.data==="nested"?h.vars.targets:m,v=e._overwrite==="auto"&&!pg,S=e.timeline,C,A,T,P,M,y,I,U,N,V,X,$,q;if(S&&(!f||!s)&&(s="none"),e._ease=vo(s,Ga.ease),e._yEase=d?qS(vo(d===!0?s:d,Ga.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(U=m[0]?go(m[0]).harness:0,$=U&&r[U.prop],C=Ff(r,xg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&_?ef:aw),g._lazy=0),o){if(Ls(e._startAt=Zt.set(m,Ei({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&Jn(l),startAt:null,delay:0,onUpdate:u&&function(){return _i(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!a&&!p)&&e._startAt.revert(ef),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!g){if(t&&(a=!1),T=Ei({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Jn(l),immediateRender:a,stagger:0,parent:h},C),$&&(T[U.prop]=$),Ls(e._startAt=Zt.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(ef):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,St,St);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Jn(l)||l&&!_,A=0;A<m.length;A++){if(M=m[A],I=M._gsap||Sg(m)[A]._gsap,e._ptLookup[A]=V={},Gp[I.id]&&Es.length&&Of(),X=x===m?A:x.indexOf(M),U&&(N=new U).init(M,$||C,e,X,x)!==!1&&(e._pt=P=new ti(e._pt,M,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(D){V[D]=P}),N.priority&&(y=1)),!U||$)for(T in C)di[T]&&(N=QS(T,C,e,X,M,x))?N.priority&&(y=1):V[T]=P=Eg.call(e,M,T,"get",C[T],X,x,0,r.stringFilter);e._op&&e._op[A]&&e.kill(M,e._op[A]),v&&e._pt&&(us=e,kt.killTweensOf(M,V,e.globalTime(t)),q=!e.parent,us=0),e._pt&&l&&(Gp[I.id]=1)}y&&rM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,f&&t<=0&&S.render(Oi,!0,!0)},Iw=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return $p=1,e.vars[t]="+=0",Tg(e,a),$p=0,l?xu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Xt(i)+bn(d.e)),d.b&&(d.b=c.s+bn(d.b))},Uw=function(e,t){var i=e[0]?go(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Wa({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ow=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Ln(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Xl=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):hn(e)&&~e.indexOf("random(")?Su(e):e},JS=yg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",eM={};ei(JS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return eM[n]=1});var Zt=function(n){xS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Gl(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,x=r.parent||kt,v=(Ln(i)||SS(i)?Vr(i[0]):"length"in r)?[i]:Fi(i),S,C,A,T,P,M,y,I;if(a._targets=v.length?Sg(v):xu("GSAP target "+i+" not found. https://gsap.com",!yi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||f||rc(u)||rc(c)){if(r=a.vars,S=a.timeline=new Bn({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:v}),S.kill(),S.parent=S._dp=Ar(a),S._start=0,f||rc(u)||rc(c)){if(T=v.length,y=f&&kS(f),vr(f))for(P in f)~JS.indexOf(P)&&(I||(I={}),I[P]=f[P]);for(C=0;C<T;C++)A=Ff(r,eM),A.stagger=0,h&&(A.yoyoEase=h),I&&Wa(A,I),M=v[C],A.duration=+Xl(u,Ar(a),C,M,v),A.delay=(+Xl(c,Ar(a),C,M,v)||0)-a._delay,!f&&T===1&&A.delay&&(a._delay=c=A.delay,a._start+=c,A.delay=0),S.to(M,A,y?y(C,M,v):0),S._ease=ot.none;S.duration()?u=c=0:a.timeline=0}else if(_){Gl(Ei(S.vars.defaults,{ease:"none"})),S._ease=vo(_.ease||r.ease||"none");var U=0,N,V,X;if(Ln(_))_.forEach(function($){return S.to(v,$,">")}),S.duration();else{A={};for(P in _)P==="ease"||P==="easeEach"||Ow(P,_[P],A,_.easeEach);for(P in A)for(N=A[P].sort(function($,q){return $.t-q.t}),U=0,C=0;C<N.length;C++)V=N[C],X={ease:V.e,duration:(V.t-(C?N[C-1].t:0))/100*u},X[P]=V.v,S.to(v,X,U),U+=X.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!pg&&(us=Ar(a),kt.killTweensOf(v),us=0),cr(x,Ar(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!_&&a._start===Ot(x._time)&&Jn(d)&&hw(Ar(a))&&x.data!=="nested")&&(a._tTime=-St,a.render(Math.max(0,-c)||0)),m&&IS(Ar(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-St&&!c?l:r<St?0:r,f,p,_,g,m,h,x,v,S;if(!u)mw(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=d,v=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(f=Ot(d%g),d===l?(_=this._repeat,f=u):(m=Ot(d/g),_=~~m,_&&_===m?(f=u,_--):f>u&&(f=u)),h=this._yoyo&&_&1,h&&(S=this._yEase,f=u-f),m=Xa(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(v&&this._yEase&&$S(v,h),this.vars.repeatRefresh&&!h&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Ot(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(US(this,c?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(S||this._ease)(f/u),this._from&&(this.ratio=x=1-x),!a&&d&&!s&&!m&&(_i(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Wp(this,r,s,o),_i(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&_i(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Wp(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ls(this,1),!s&&!(c&&!a)&&(d||a||h)&&(_i(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Mu||pi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Tg(this,u),c=this._ease(u/this._dur),Iw(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(vd(this,0),this.parent||DS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Al(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,us&&us.vars.overwrite!==!0)._first||Al(this),this.parent&&o!==this.timeline.totalDuration()&&ja(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Fi(r):a,u=this._ptLookup,c=this._pt,d,f,p,_,g,m,h;if((!s||s==="all")&&fw(a,l))return s==="all"&&(this._pt=0),Al(this);for(d=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},ei(s,function(x){return g[x]=1}),s=g),s=Uw(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){f=u[h],s==="all"?(d[h]=s,_=f,p={}):(p=d[h]=d[h]||{},_=s);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&gd(this,m,"_pt"),delete f[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Al(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Wl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Wl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return kt.killTweensOf(r,s,o)},e}(Eu);Ei(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ei("staggerTo,staggerFrom,staggerFromTo",function(n){Zt[n]=function(){var e=new Bn,t=jp.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var wg=function(e,t,i){return e[t]=i},tM=function(e,t,i){return e[t](i)},Fw=function(e,t,i,r){return e[t](r.fp,i)},kw=function(e,t,i){return e.setAttribute(t,i)},Ag=function(e,t){return Gt(e[t])?tM:mg(e[t])&&e.setAttribute?kw:wg},nM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},zw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},iM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Cg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Bw=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},Hw=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?gd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},Vw=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},rM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ti=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||nM,this.d=l||this,this.set=u||wg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Vw,this.m=i,this.mt=s,this.tween=r},n}();ei(yg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return xg[n]=1});Mi.TweenMax=Mi.TweenLite=Zt;Mi.TimelineLite=Mi.TimelineMax=Bn;kt=new Bn({sortChildren:!1,defaults:Ga,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yi.stringFilter=YS;var xo=[],nf={},Gw=[],l0=0,Ww=0,sh=function(e){return(nf[e]||Gw).map(function(t){return t()})},Kp=function(){var e=Date.now(),t=[];e-l0>2&&(sh("matchMediaInit"),xo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=sr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),sh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),l0=e,sh("matchMedia"))},sM=function(){function n(t,i){this.selector=i&&Yp(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Ww++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Ut,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Yp(s)),Ut=o,d=r.apply(o,arguments),Gt(d)&&o._r.push(d),Ut=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Ut;Ut=null,i(this),Ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Zt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Bn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Zt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=xo.length;o--;)xo[o].id===this.id&&xo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),Xw=function(){function n(t){this.contexts=[],this.scope=t,Ut&&Ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){vr(i)||(i={matches:i});var o=new sM(0,s||this.scope),a=o.conditions={},l,u,c;Ut&&!o.selector&&(o.selector=Ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=sr.matchMedia(i[u]),l&&(xo.indexOf(o)<0&&xo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Kp):l.addEventListener("change",Kp)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),zf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return WS(r)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return kt.getTweensOf(e,t)},getProperty:function(e,t,i,r){hn(e)&&(e=Fi(e)[0]);var s=go(e||{}).get,o=i?LS:PS;return i==="native"&&(i=""),e&&(t?o((di[t]&&di[t].get||s)(e,t,i,r)):function(a,l,u){return o((di[a]&&di[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var r=e.map(function(c){return oi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=di[t],a=go(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;xa._pt=0,d.init(e,i?c+i:c,xa,0,[e]),d.render(1,d),xa._pt&&Cg(1,xa)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=oi.to(e,Ei((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return kt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vo(e.ease,Ga.ease)),i0(Ga,e||{})},config:function(e){return i0(yi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!di[a]&&!Mi[a]&&xu(t+" effect requires "+a+" plugin.")}),th[t]=function(a,l,u){return i(Fi(a),Ei(l||{},s),u)},o&&(Bn.prototype[t]=function(a,l,u){return this.add(th[t](a,vr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){ot[e]=vo(t)},parseEase:function(e,t){return arguments.length?vo(e,t):ot},getById:function(e){return kt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Bn(e),r,s;for(i.smoothChildTiming=Jn(e.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,r=kt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]))&&cr(i,r,r._start-r._delay),r=s;return cr(kt,i,0),i},context:function(e,t){return e?new sM(e,t):Ut},matchMedia:function(e){return new Xw(e)},matchMediaRefresh:function(){return xo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Kp()},addEventListener:function(e,t){var i=nf[e]||(nf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=nf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Ew,wrapYoyo:Tw,distribute:kS,random:BS,snap:zS,normalize:Mw,getUnit:bn,clamp:vw,splitColor:XS,toArray:Fi,selector:Yp,mapRange:VS,pipe:yw,unitize:Sw,interpolate:ww,shuffle:FS},install:wS,effects:th,ticker:pi,updateRoot:Bn.updateRoot,plugins:di,globalTimeline:kt,core:{PropTween:ti,globals:AS,Tween:Zt,Timeline:Bn,Animation:Eu,getCache:go,_removeLinkedListItem:gd,reverting:function(){return vn},context:function(e){return e&&Ut&&(Ut.data.push(e),e._ctx=Ut),Ut},suppressOverwrites:function(e){return pg=e}}};ei("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return zf[n]=Zt[n]});pi.add(Bn.updateRoot);xa=zf.to({},{duration:0});var jw=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Yw=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=jw(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},oh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(hn(s)&&(l={},ei(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}Yw(a,s)}}}},oi=zf.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)vn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},oh("roundProps",qp),oh("modifiers"),oh("snap",zS))||zf;Zt.version=Bn.version=oi.version="3.14.2";TS=1;gg()&&Ya();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var u0,cs,ba,Rg,uo,c0,bg,qw=function(){return typeof window<"u"},Gr={},Js=180/Math.PI,Pa=Math.PI/180,ko=Math.atan2,f0=1e8,Pg=/([A-Z])/g,$w=/(left|right|width|margin|padding|x)/i,Kw=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Jw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},oM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},aM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tA=function(e,t,i){return e.style[t]=i},nA=function(e,t,i){return e.style.setProperty(t,i)},iA=function(e,t,i){return e._gsap[t]=i},rA=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sA=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},oA=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},zt="transform",ni=zt+"Origin",aA=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Gr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=dr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Rr(r,a)}):this.tfm[e]=o.x?o[e]:Rr(r,e),e===ni&&(this.tfm.zOrigin=o.zOrigin);else return dr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(zt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ni,t,"")),e=zt}(s||t)&&this.props.push(e,t,s[e])},lM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lA=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Pg,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=bg(),(!s||!s.isStart)&&!i[zt]&&(lM(i),r.zOrigin&&i[ni]&&(i[ni]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},uM=function(e,t){var i={target:e,props:[],revert:lA,save:aA};return e._gsap||oi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},cM,Qp=function(e,t){var i=cs.createElementNS?cs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cs.createElement(e);return i&&i.style?i:cs.createElement(e)},vi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Pg,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,qa(t)||t,1)||""},d0="O,Moz,ms,Ms,Webkit".split(","),qa=function(e,t,i){var r=t||uo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(d0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?d0[o]:"")+e},Jp=function(){qw()&&window.document&&(u0=window,cs=u0.document,ba=cs.documentElement,uo=Qp("div")||{style:{}},Qp("div"),zt=qa(zt),ni=zt+"Origin",uo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cM=!!qa("perspective"),bg=oi.core.reverting,Rg=1)},h0=function(e){var t=e.ownerSVGElement,i=Qp("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ba.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ba.removeChild(i),s},p0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},fM=function(e){var t,i;try{t=e.getBBox()}catch{t=h0(e),i=1}return t&&(t.width||t.height)||i||(t=h0(e)),t&&!t.width&&!t.x&&!t.y?{x:+p0(e,["x","cx","x1"])||0,y:+p0(e,["y","cy","y1"])||0,width:0,height:0}:t},dM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&fM(e))},Ds=function(e,t){if(t){var i=e.style,r;t in Gr&&t!==ni&&(t=zt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Pg,"-$1").toLowerCase())):i.removeAttribute(t)}},fs=function(e,t,i,r,s,o){var a=new ti(e._pt,t,i,0,1,o?aM:oM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},m0={deg:1,rad:1,turn:1},uA={grid:1,flex:1},Ns=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=uo.style,l=$w.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",_,g,m,h;if(r===o||!s||m0[r]||m0[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),h=e.getCTM&&dM(e),(p||o==="%")&&(Gr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],Xt(p?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(f?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===cs||!g.appendChild)&&(g=cs.body),m=g._gsap,m&&p&&m.width&&l&&m.time===pi.time&&!m.uncache)return Xt(s/m.width*d);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,_=e[c],x?e.style[t]=x:Ds(e,t)}else(p||o==="%")&&!uA[vi(g,"display")]&&(a.position=vi(e,"position")),g===e&&(a.position="static"),g.appendChild(uo),_=uo[c],g.removeChild(uo),a.position="absolute";return l&&p&&(m=go(g),m.time=pi.time,m.width=g[c]),Xt(f?_*s/d:_&&s?d/_*s:0)},Rr=function(e,t,i,r){var s;return Rg||Jp(),t in dr&&t!=="transform"&&(t=dr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Gr[t]&&t!=="transform"?(s=wu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Hf(vi(e,ni))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Bf[t]&&Bf[t](e,t,i)||vi(e,t)||RS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ns(e,t,s,i)+i:s},cA=function(e,t,i,r){if(!i||i==="none"){var s=qa(t,e,1),o=s&&vi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=vi(e,"borderTopColor"))}var a=new ti(this._pt,e.style,t,0,1,iM),l=0,u=0,c,d,f,p,_,g,m,h,x,v,S,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=vi(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=vi(e,t)||r,g?e.style[t]=g:Ds(e,t)),c=[i,r],YS(c),i=c[0],r=c[1],f=i.match(va)||[],C=r.match(va)||[],C.length){for(;d=va.exec(r);)m=d[0],x=r.substring(l,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=f[u++]||"")&&(p=parseFloat(g)||0,S=g.substr((p+"").length),m.charAt(1)==="="&&(m=Ra(p,m)+S),h=parseFloat(m),v=m.substr((h+"").length),l=va.lastIndex-v.length,v||(v=v||yi.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(p=Ns(e,t,g,v)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?aM:oM;return ES.test(r)&&(a.e=0),this._pt=a,a},g0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fA=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=g0[i]||i,t[1]=g0[r]||r,t.join(" ")},dA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Gr[a]&&(l=1,a=a==="transformOrigin"?ni:zt),Ds(i,a);l&&(Ds(i,zt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",wu(i,1),o.uncache=1,lM(r)))}},Bf={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ti(e._pt,t,i,0,0,dA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Tu=[1,0,0,1,0,0],hM={},pM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_0=function(e){var t=vi(e,zt);return pM(t)?Tu:t.substr(7).match(MS).map(Xt)},Lg=function(e,t){var i=e._gsap||go(e),r=e.style,s=_0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Tu:s):(s===Tu&&!e.offsetParent&&e!==ba&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,ba.appendChild(e)),s=_0(e),l?r.display=l:Ds(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ba.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},em=function(e,t,i,r,s,o){var a=e._gsap,l=s||Lg(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],h=l[4],x=l[5],v=t.split(" "),S=parseFloat(v[0])||0,C=parseFloat(v[1])||0,A,T,P,M;i?l!==Tu&&(T=p*m-_*g)&&(P=S*(m/T)+C*(-g/T)+(g*x-m*h)/T,M=S*(-_/T)+C*(p/T)-(p*x-_*h)/T,S=P,C=M):(A=fM(e),S=A.x+(~v[0].indexOf("%")?S/100*A.width:S),C=A.y+(~(v[1]||v[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&a.smooth?(h=S-u,x=C-c,a.xOffset=d+(h*p+x*g)-h,a.yOffset=f+(h*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ni]="0px 0px",o&&(fs(o,a,"xOrigin",u,S),fs(o,a,"yOrigin",c,C),fs(o,a,"xOffset",d,a.xOffset),fs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},wu=function(e,t){var i=e._gsap||new ZS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=vi(e,ni)||"0",c,d,f,p,_,g,m,h,x,v,S,C,A,T,P,M,y,I,U,N,V,X,$,q,D,H,b,te,me,Ge,G,ee;return c=d=f=g=m=h=x=v=S=0,p=_=1,i.svg=!!(e.getCTM&&dM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[zt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[zt]!=="none"?l[zt]:"")),r.scale=r.rotate=r.translate="none"),T=Lg(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),em(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,T)),C=i.xOrigin||0,A=i.yOrigin||0,T!==Tu&&(I=T[0],U=T[1],N=T[2],V=T[3],c=X=T[4],d=$=T[5],T.length===6?(p=Math.sqrt(I*I+U*U),_=Math.sqrt(V*V+N*N),g=I||U?ko(U,I)*Js:0,x=N||V?ko(N,V)*Js+g:0,x&&(_*=Math.abs(Math.cos(x*Pa))),i.svg&&(c-=C-(C*I+A*N),d-=A-(C*U+A*V))):(ee=T[6],Ge=T[7],b=T[8],te=T[9],me=T[10],G=T[11],c=T[12],d=T[13],f=T[14],P=ko(ee,me),m=P*Js,P&&(M=Math.cos(-P),y=Math.sin(-P),q=X*M+b*y,D=$*M+te*y,H=ee*M+me*y,b=X*-y+b*M,te=$*-y+te*M,me=ee*-y+me*M,G=Ge*-y+G*M,X=q,$=D,ee=H),P=ko(-N,me),h=P*Js,P&&(M=Math.cos(-P),y=Math.sin(-P),q=I*M-b*y,D=U*M-te*y,H=N*M-me*y,G=V*y+G*M,I=q,U=D,N=H),P=ko(U,I),g=P*Js,P&&(M=Math.cos(P),y=Math.sin(P),q=I*M+U*y,D=X*M+$*y,U=U*M-I*y,$=$*M-X*y,I=q,X=D),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Xt(Math.sqrt(I*I+U*U+N*N)),_=Xt(Math.sqrt($*$+ee*ee)),P=ko(X,$),x=Math.abs(P)>2e-4?P*Js:0,S=G?1/(G<0?-G:G):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!pM(vi(e,zt)),q&&e.setAttribute("transform",q))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Xt(p),i.scaleY=Xt(_),i.rotation=Xt(g)+a,i.rotationX=Xt(m)+a,i.rotationY=Xt(h)+a,i.skewX=x+a,i.skewY=v+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ni]=Hf(u)),i.xOffset=i.yOffset=0,i.force3D=yi.force3D,i.renderTransform=i.svg?pA:cM?mM:hA,i.uncache=0,i},Hf=function(e){return(e=e.split(" "))[0]+" "+e[1]},ah=function(e,t,i){var r=bn(t);return Xt(parseFloat(t)+parseFloat(Ns(e,"x",i+"px",r)))+r},hA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,mM(e,t)},Gs="0deg",pl="0px",Ws=") ",mM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,f=i.skewX,p=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,x=i.target,v=i.zOrigin,S="",C=h==="auto"&&e&&e!==1||h===!0;if(v&&(d!==Gs||c!==Gs)){var A=parseFloat(c)*Pa,T=Math.sin(A),P=Math.cos(A),M;A=parseFloat(d)*Pa,M=Math.cos(A),o=ah(x,o,T*M*-v),a=ah(x,a,-Math.sin(A)*-v),l=ah(x,l,P*M*-v+v)}m!==pl&&(S+="perspective("+m+Ws),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==pl||a!==pl||l!==pl)&&(S+=l!==pl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ws),u!==Gs&&(S+="rotate("+u+Ws),c!==Gs&&(S+="rotateY("+c+Ws),d!==Gs&&(S+="rotateX("+d+Ws),(f!==Gs||p!==Gs)&&(S+="skew("+f+", "+p+Ws),(_!==1||g!==1)&&(S+="scale("+_+", "+g+Ws),x.style[zt]=S||"translate(0, 0)"},pA=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,f=i.scaleY,p=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,x=i.forceCSS,v=parseFloat(o),S=parseFloat(a),C,A,T,P,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Pa,u*=Pa,C=Math.cos(l)*d,A=Math.sin(l)*d,T=Math.sin(l-u)*-f,P=Math.cos(l-u)*f,u&&(c*=Pa,M=Math.tan(u-c),M=Math.sqrt(1+M*M),T*=M,P*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),C*=M,A*=M)),C=Xt(C),A=Xt(A),T=Xt(T),P=Xt(P)):(C=d,P=f,A=T=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Ns(p,"x",o,"px"),S=Ns(p,"y",a,"px")),(_||g||m||h)&&(v=Xt(v+_-(_*C+g*T)+m),S=Xt(S+g-(_*A+g*P)+h)),(r||s)&&(M=p.getBBox(),v=Xt(v+r/100*M.width),S=Xt(S+s/100*M.height)),M="matrix("+C+","+A+","+T+","+P+","+v+","+S+")",p.setAttribute("transform",M),x&&(p.style[zt]=M)},mA=function(e,t,i,r,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Js:1),u=l-r,c=r+u+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*f0)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*f0)%o-~~(u/o)*o)),e._pt=f=new ti(e._pt,t,i,r,u,Zw),f.e=c,f.u="deg",e._props.push(i),f},v0=function(e,t){for(var i in t)e[i]=t[i];return e},gA=function(e,t,i){var r=v0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,f,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[zt]=t,a=wu(i,1),Ds(i,zt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[zt],o[zt]=t,a=wu(i,1),o[zt]=u);for(l in Gr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=bn(u),_=bn(c),d=p!==_?Ns(i,l,u,_):parseFloat(u),f=parseFloat(c),e._pt=new ti(e._pt,a,l,d,f-d,Zp),e._pt.u=_||0,e._props.push(l));v0(a,r)};ei("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Bf[e>1?"border"+n:n]=function(a,l,u,c,d){var f,p;if(arguments.length<4)return f=o.map(function(_){return Rr(a,_,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(_,g){return p[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,p,d)}});var gM={name:"css",register:Jp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,f,p,_,g,m,h,x,v,S,C,A,T,P,M;Rg||Jp(),this.styles=this.styles||uM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(di[g]&&QS(g,t,i,r,e,s)))){if(p=typeof c,_=Bf[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Su(c)),_)_(this,e,g,c,i)&&(T=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ts.lastIndex=0,Ts.test(u)||(m=bn(u),h=bn(c),h?m!==h&&(u=Ns(e,g,u,h)+h):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],hn(u)&&~u.indexOf("random(")&&(u=Su(u)),bn(u+"")||u==="auto"||(u+=yi.units[g]||bn(Rr(e,g))||""),(u+"").charAt(1)==="="&&(u=Rr(e,g))):u=Rr(e,g),f=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),d=parseFloat(c),g in dr&&(g==="autoAlpha"&&(f===1&&Rr(e,"visibility")==="hidden"&&d&&(f=0),P.push("visibility",0,a.visibility),fs(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=dr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Gr,v){if(this.styles.save(g),M=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=vi(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=vi(e,"perspective"),y?e.style.perspective=y:Ds(e,"perspective")}d=parseFloat(c)}if(S||(C=e._gsap,C.renderTransform&&!t.parseTransform||wu(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new ti(this._pt,a,zt,0,1,C.renderTransform,C,0,-1),S.dep=1),g==="scale")this._pt=new ti(this._pt,C,"scaleY",C.scaleY,(x?Ra(C.scaleY,x+d):d)-C.scaleY||0,Zp),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(ni,0,a[ni]),c=fA(c),C.svg?em(e,c,0,A,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==C.zOrigin&&fs(this,C,"zOrigin",C.zOrigin,h),fs(this,a,g,Hf(u),Hf(c)));continue}else if(g==="svgOrigin"){em(e,c,1,A,0,this);continue}else if(g in hM){mA(this,C,g,f,x?Ra(f,x+c):c);continue}else if(g==="smoothOrigin"){fs(this,C,"smooth",C.smooth,c);continue}else if(g==="force3D"){C[g]=c;continue}else if(g==="transform"){gA(this,c,e);continue}}else g in a||(g=qa(g)||g);if(v||(d||d===0)&&(f||f===0)&&!Kw.test(c)&&g in a)m=(u+"").substr((f+"").length),d||(d=0),h=bn(c)||(g in yi.units?yi.units[g]:m),m!==h&&(f=Ns(e,g,u,h)),this._pt=new ti(this._pt,v?C:a,g,f,(x?Ra(f,x+d):d)-f,!v&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?eA:Zp),this._pt.u=h||0,v&&M!==c?(this._pt.b=u,this._pt.e=M,this._pt.r=Jw):m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=Qw);else if(g in a)cA.call(this,e,g,u,x?x+c:c);else if(g in e)this.add(e,g,u||e[g],x?x+c:c,r,s);else if(g!=="parseTransform"){vg(g,c);continue}v||(g in a?P.push(g,0,a[g]):typeof e[g]=="function"?P.push(g,2,e[g]()):P.push(g,1,u||e[g])),o.push(g)}}T&&rM(this)},render:function(e,t){if(t.tween._time||!bg())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:dr,getSetter:function(e,t,i){var r=dr[t];return r&&r.indexOf(",")<0&&(t=r),t in Gr&&t!==ni&&(e._gsap.x||Rr(e,"x"))?i&&c0===i?t==="scale"?rA:iA:(c0=i||{})&&(t==="scale"?sA:oA):e.style&&!mg(e.style[t])?tA:~t.indexOf("-")?nA:Ag(e,t)},core:{_removeProperty:Ds,_getMatrix:Lg}};oi.utils.checkPrefix=qa;oi.core.getStyleSaver=uM;(function(n,e,t,i){var r=ei(n+","+e+","+t,function(s){Gr[s]=1});ei(e,function(s){yi.units[s]="deg",hM[s]=1}),dr[r[13]]=n+","+e,ei(i,function(s){var o=s.split(":");dr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ei("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){yi.units[n]="px"});oi.registerPlugin(gM);var mt=oi.registerPlugin(gM)||oi;mt.core.Tween;const _A=()=>{const n=ke.useRef(null);return ke.useEffect(()=>{if(window.matchMedia("(pointer: coarse)").matches)return;const e=t=>{const{clientX:i,clientY:r}=t;mt.to(n.current,{x:i,y:r,duration:.1,ease:"power3.out"})};return window.addEventListener("mousemove",e),()=>window.removeEventListener("mousemove",e)},[]),k.jsx("div",{ref:n,className:"fixed w-3 h-3 bg-white mix-blend-difference rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"})},vA=({onComplete:n})=>{const e=ke.useRef(null),t=ke.useRef(null);return ke.useEffect(()=>{mt.timeline({onComplete:()=>{n&&n()}}).to(t.current,{opacity:1,duration:.5,ease:"power2.out"}).to(t.current,{opacity:0,duration:.5,delay:.5,ease:"power2.inOut"}).to(e.current,{yPercent:-100,duration:1,ease:"expo.inOut"})},[n]),k.jsx("div",{ref:e,className:"fixed inset-0 z-[10000] bg-darkBg flex items-center justify-center",children:k.jsxs("div",{ref:t,className:"opacity-0 font-medium tracking-[0.2em] text-textMain uppercase text-xs",children:["Pranav Sinha © ",new Date().getFullYear()]})})};/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=(n,e)=>{const t=ke.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>ke.createElement("svg",{ref:c,...xA,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${yA(n)}`,a].join(" "),...u},[...e.map(([d,f])=>ke.createElement(d,f)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=nr("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=nr("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=nr("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=nr("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=nr("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=nr("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=nr("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=nr("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=nr("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=nr("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.360.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=nr("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),_M=ke.createContext(),bA=({children:n})=>{const[e,t]=ke.useState(!0),[i,r]=ke.useState(localStorage.getItem("accentColor")||"#fff3d6");ke.useEffect(()=>{const o=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches;o==="light"||!o&&!a?(t(!1),document.documentElement.classList.add("light-mode")):(t(!0),document.documentElement.classList.remove("light-mode"))},[]),ke.useEffect(()=>{document.documentElement.style.setProperty("--accent-color",i),localStorage.setItem("accentColor",i)},[i]);const s=o=>{const a=!e,l=o.clientX,u=o.clientY,c=document.createElement("div");c.style.position="fixed",c.style.top="0",c.style.left="0",c.style.width="100vw",c.style.height="100vh",c.style.pointerEvents="none",c.style.zIndex="99999",c.style.backgroundColor=a?"#050505":"#f7f7f7",c.style.clipPath=`circle(0px at ${l}px ${u}px)`,document.body.appendChild(c);const d=c.animate([{clipPath:`circle(0px at ${l}px ${u}px)`},{clipPath:`circle(150vw at ${l}px ${u}px)`}],{duration:600,easing:"cubic-bezier(0.85, 0, 0.15, 1)",fill:"forwards"});d.onfinish=()=>{t(a),a?(document.documentElement.classList.remove("light-mode"),localStorage.setItem("theme","dark")):(document.documentElement.classList.add("light-mode"),localStorage.setItem("theme","light")),c.remove()}};return k.jsx(_M.Provider,{value:{isDarkMode:e,toggleTheme:s,accentColor:i,setAccentColor:r},children:n})},vM=()=>ke.useContext(_M),xM="/assets/profile-BFWYEBtl.png",PA=()=>{const[n,e]=ke.useState(!1),[t,i]=ke.useState(!1),{isDarkMode:r,toggleTheme:s}=vM();ke.useEffect(()=>{const a=()=>e(window.scrollY>50);return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]);const o=["Home","About","Skills","Projects","Experience","Contact"];return k.jsxs("nav",{className:`fixed top-0 left-0 right-0 z-[5000] transition-all duration-500 ease-out ${n?"py-4 bg-darkBg/90 backdrop-blur-md border-b border-borderLight":"py-8"}`,children:[k.jsxs("div",{className:"container mx-auto px-6 md:px-12 flex justify-between items-center",children:[k.jsxs("a",{href:"#home",className:"relative group flex items-center outline-none",children:[k.jsx("div",{className:"absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none",style:{backgroundColor:"var(--accent-color)"}}),k.jsx("img",{src:xM,alt:"Pranav Sinha",className:"w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-borderMedium group-hover:scale-105 group-hover:border-accent transition-all duration-300 relative z-10 shadow-lg shadow-black/20"})]}),k.jsxs("ul",{className:"hidden md:flex space-x-10 items-center",children:[o.map(a=>k.jsx("li",{children:k.jsx("a",{href:`#${a.toLowerCase()}`,className:"text-textMuted hover:text-textMain transition-colors duration-300 text-sm font-medium tracking-wide uppercase",children:a})},a)),k.jsx("li",{children:k.jsxs("button",{onClick:s,className:"ml-4 p-2 relative group flex items-center justify-center text-textMuted hover:text-accent transition-colors duration-300","aria-label":"Toggle Dark Mode",children:[k.jsx("div",{className:"absolute inset-0 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"}),r?k.jsx(y0,{size:20,className:"relative z-10"}):k.jsx(x0,{size:20,className:"relative z-10"})]})})]}),k.jsxs("div",{className:"flex items-center gap-6 md:hidden",children:[k.jsx("button",{onClick:s,className:"p-2 relative group flex items-center justify-center text-textMuted hover:text-accent transition-colors duration-300","aria-label":"Toggle Dark Mode",children:r?k.jsx(y0,{size:20}):k.jsx(x0,{size:20})}),k.jsx("button",{className:"text-textMain",onClick:()=>i(!t),children:t?k.jsx(S0,{size:24,strokeWidth:1.5}):k.jsx(EA,{size:24,strokeWidth:1.5})})]})]}),k.jsxs("div",{className:`fixed inset-0 bg-darkBg z-[4000] flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.85,0,0.15,1)] ${t?"translate-x-0":"translate-x-full"} md:hidden`,children:[k.jsx("button",{className:"absolute top-8 right-6 text-textMain",onClick:()=>i(!1),children:k.jsx(S0,{size:32,strokeWidth:1})}),k.jsx("ul",{className:"flex flex-col space-y-8 text-center pt-10",children:o.map(a=>k.jsx("li",{className:"overflow-hidden",children:k.jsx("a",{href:`#${a.toLowerCase()}`,onClick:()=>i(!1),className:"text-4xl font-light text-textMuted hover:text-textMain transition-colors duration-300 tracking-tight",style:{display:"block",transform:t?"translateY(0)":"translateY(100%)",transition:"transform 0.6s cubic-bezier(0.85, 0, 0.15, 1) 0.2s"},children:a})},a))})]})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dg="163",LA=0,M0=1,DA=2,yM=1,NA=2,Tr=3,Is=0,ii=1,br=2,ws=0,yo=1,Vf=2,E0=3,T0=4,IA=5,ro=100,UA=101,OA=102,FA=103,kA=104,zA=200,BA=201,HA=202,VA=203,tm=204,nm=205,GA=206,WA=207,XA=208,jA=209,YA=210,qA=211,$A=212,KA=213,ZA=214,QA=0,JA=1,eC=2,Gf=3,tC=4,nC=5,iC=6,rC=7,SM=0,sC=1,oC=2,As=0,aC=1,lC=2,uC=3,cC=4,fC=5,dC=6,hC=7,MM=300,$a=301,Ka=302,im=303,rm=304,xd=306,sm=1e3,co=1001,om=1002,ki=1003,pC=1004,sc=1005,Zi=1006,lh=1007,fo=1008,Cs=1009,mC=1010,gC=1011,EM=1012,TM=1013,Za=1014,ds=1015,Wf=1016,wM=1017,AM=1018,Uu=1020,_C=35902,vC=1021,xC=1022,hr=1023,yC=1024,SC=1025,La=1026,Au=1027,MC=1028,CM=1029,EC=1030,RM=1031,bM=1033,uh=33776,ch=33777,fh=33778,dh=33779,w0=35840,A0=35841,C0=35842,R0=35843,PM=36196,b0=37492,P0=37496,L0=37808,D0=37809,N0=37810,I0=37811,U0=37812,O0=37813,F0=37814,k0=37815,z0=37816,B0=37817,H0=37818,V0=37819,G0=37820,W0=37821,hh=36492,X0=36494,j0=36495,TC=36283,Y0=36284,q0=36285,$0=36286,wC=3200,AC=3201,CC=0,RC=1,os="",or="srgb",Hs="srgb-linear",Ng="display-p3",yd="display-p3-linear",Xf="linear",Rt="srgb",jf="rec709",Yf="p3",zo=7680,K0=519,bC=512,PC=513,LC=514,LM=515,DC=516,NC=517,IC=518,UC=519,Z0=35044,Q0="300 es",Nr=2e3,qf=2001;class il{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=Math.PI/180,am=180/Math.PI;function Ou(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function qn(n,e,t){return Math.max(e,Math.min(t,n))}function OC(n,e){return(n%e+e)%e}function mh(n,e,t){return(1-t)*n+t*e}function ml(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,i,r,s,o,a,l,u){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],_=i[8],g=r[0],m=r[3],h=r[6],x=r[1],v=r[4],S=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*g+a*x+l*C,s[3]=o*m+a*v+l*A,s[6]=o*h+a*S+l*T,s[1]=u*g+c*x+d*C,s[4]=u*m+c*v+d*A,s[7]=u*h+c*S+d*T,s[2]=f*g+p*x+_*C,s[5]=f*m+p*v+_*A,s[8]=f*h+p*S+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,_=t*d+i*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=f*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new Ke;function DM(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function $f(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function FC(){const n=$f("canvas");return n.style.display="block",n}const J0={};function kC(n){n in J0||(J0[n]=!0,console.warn(n))}const ev=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tv=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oc={[Hs]:{transfer:Xf,primaries:jf,toReference:n=>n,fromReference:n=>n},[or]:{transfer:Rt,primaries:jf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[yd]:{transfer:Xf,primaries:Yf,toReference:n=>n.applyMatrix3(tv),fromReference:n=>n.applyMatrix3(ev)},[Ng]:{transfer:Rt,primaries:Yf,toReference:n=>n.convertSRGBToLinear().applyMatrix3(tv),fromReference:n=>n.applyMatrix3(ev).convertLinearToSRGB()}},zC=new Set([Hs,yd]),xt={enabled:!0,_workingColorSpace:Hs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zC.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=oc[e].toReference,r=oc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oc[n].primaries},getTransfer:function(n){return n===os?Xf:oc[n].transfer}};function Da(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _h(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Bo;class BC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bo===void 0&&(Bo=$f("canvas")),Bo.width=e.width,Bo.height=e.height;const i=Bo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Bo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$f("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Da(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Da(t[i]/255)*255):t[i]=Da(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HC=0;class NM{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HC++}),this.uuid=Ou(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vh(r[o].image)):s.push(vh(r[o]))}else s=vh(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function vh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?BC.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let VC=0;class ri extends il{constructor(e=ri.DEFAULT_IMAGE,t=ri.DEFAULT_MAPPING,i=co,r=co,s=Zi,o=fo,a=hr,l=Cs,u=ri.DEFAULT_ANISOTROPY,c=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VC++}),this.uuid=Ou(),this.name="",this.source=new NM(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==MM)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sm:e.x=e.x-Math.floor(e.x);break;case co:e.x=e.x<0?0:1;break;case om:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sm:e.y=e.y-Math.floor(e.y);break;case co:e.y=e.y<0?0:1;break;case om:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ri.DEFAULT_IMAGE=null;ri.DEFAULT_MAPPING=MM;ri.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,t=0,i=0,r=1){mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],_=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,S=(p+1)/2,C=(h+1)/2,A=(c+f)/4,T=(d+g)/4,P=(_+m)/4;return v>S&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=P/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-g)/x,this.z=(f-c)/x,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GC extends il{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new ri(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new NM(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Po extends GC{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class IM extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WC extends ri{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ki,this.minFilter=ki,this.wrapR=co,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||u!==p||c!==_){let m=1-a;const h=l*f+u*p+c*_+d*g,x=h>=0?1:-1,v=1-h*h;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,h*x);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*x;if(l=l*m+f*S,u=u*m+p*S,c=c*m+_*S,d=d*m+g*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=C,u*=C,c*=C,d*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*d+l*p-u*f,e[t+1]=l*_+c*f+u*d-a*p,e[t+2]=u*_+c*p+a*f-l*d,e[t+3]=c*_-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"YXZ":this._x=f*c*d+u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"ZXY":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d-f*p*_;break;case"ZYX":this._x=f*c*d-u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d+f*p*_;break;case"YZX":this._x=f*c*d+u*p*_,this._y=u*p*d+f*c*_,this._z=u*c*_-f*p*d,this._w=u*c*d-f*p*_;break;case"XZY":this._x=f*c*d-u*p*_,this._y=u*p*d-f*c*_,this._z=u*c*_+f*p*d,this._w=u*c*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xh.copy(this).projectOnVector(e),this.sub(xh)}reflect(e){return this.sub(xh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new Y,nv=new Fu;class ku{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ac.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ac.copy(i.boundingBox)),ac.applyMatrix4(e.matrixWorld),this.union(ac)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gl),lc.subVectors(this.max,gl),Ho.subVectors(e.a,gl),Vo.subVectors(e.b,gl),Go.subVectors(e.c,gl),$r.subVectors(Vo,Ho),Kr.subVectors(Go,Vo),Xs.subVectors(Ho,Go);let t=[0,-$r.z,$r.y,0,-Kr.z,Kr.y,0,-Xs.z,Xs.y,$r.z,0,-$r.x,Kr.z,0,-Kr.x,Xs.z,0,-Xs.x,-$r.y,$r.x,0,-Kr.y,Kr.x,0,-Xs.y,Xs.x,0];return!yh(t,Ho,Vo,Go,lc)||(t=[1,0,0,0,1,0,0,0,1],!yh(t,Ho,Vo,Go,lc))?!1:(uc.crossVectors($r,Kr),t=[uc.x,uc.y,uc.z],yh(t,Ho,Vo,Go,lc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const xr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Wi=new Y,ac=new ku,Ho=new Y,Vo=new Y,Go=new Y,$r=new Y,Kr=new Y,Xs=new Y,gl=new Y,lc=new Y,uc=new Y,js=new Y;function yh(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){js.fromArray(n,s);const a=r.x*Math.abs(js.x)+r.y*Math.abs(js.y)+r.z*Math.abs(js.z),l=e.dot(js),u=t.dot(js),c=i.dot(js);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const XC=new ku,_l=new Y,Sh=new Y;class Sd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):XC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_l.subVectors(e,this.center);const t=_l.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_l,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_l.copy(e.center).add(Sh)),this.expandByPoint(_l.copy(e.center).sub(Sh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yr=new Y,Mh=new Y,cc=new Y,Zr=new Y,Eh=new Y,fc=new Y,Th=new Y;class UM{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Mh.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(Mh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(cc),a=Zr.dot(this.direction),l=-Zr.dot(cc),u=Zr.lengthSq(),c=Math.abs(1-o*o);let d,f,p,_;if(c>0)if(d=o*l-a,f=o*a-l,_=s*c,d>=0)if(f>=-_)if(f<=_){const g=1/c;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Mh).addScaledVector(cc,f),p}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const i=yr.dot(this.direction),r=yr.dot(yr)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,r,s){Eh.subVectors(t,e),fc.subVectors(i,e),Th.crossVectors(Eh,fc);let o=this.direction.dot(Th),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const l=a*this.direction.dot(fc.crossVectors(Zr,fc));if(l<0)return null;const u=a*this.direction.dot(Eh.cross(Zr));if(u<0||l+u>o)return null;const c=-a*Zr.dot(Th);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,f,p,_,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Wo.setFromMatrixColumn(e,0).length(),s=1/Wo.setFromMatrixColumn(e,1).length(),o=1/Wo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+_*u,t[5]=f-g*u,t[9]=-a*l,t[2]=g-f*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,_=u*c,g=u*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=g-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,_=a*c,g=a*d;t[0]=l*c,t[4]=_*u-p,t[8]=f*u+g,t[1]=l*d,t[5]=g*u+f,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*l,p=o*u,_=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=f*d+g,t[5]=o*c,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*c,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jC,e,YC)}lookAt(e,t,i){const r=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Qr.crossVectors(i,ai),Qr.lengthSq()===0&&(Math.abs(i.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Qr.crossVectors(i,ai)),Qr.normalize(),dc.crossVectors(ai,Qr),r[0]=Qr.x,r[4]=dc.x,r[8]=ai.x,r[1]=Qr.y,r[5]=dc.y,r[9]=ai.y,r[2]=Qr.z,r[6]=dc.z,r[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],_=i[2],g=i[6],m=i[10],h=i[14],x=i[3],v=i[7],S=i[11],C=i[15],A=r[0],T=r[4],P=r[8],M=r[12],y=r[1],I=r[5],U=r[9],N=r[13],V=r[2],X=r[6],$=r[10],q=r[14],D=r[3],H=r[7],b=r[11],te=r[15];return s[0]=o*A+a*y+l*V+u*D,s[4]=o*T+a*I+l*X+u*H,s[8]=o*P+a*U+l*$+u*b,s[12]=o*M+a*N+l*q+u*te,s[1]=c*A+d*y+f*V+p*D,s[5]=c*T+d*I+f*X+p*H,s[9]=c*P+d*U+f*$+p*b,s[13]=c*M+d*N+f*q+p*te,s[2]=_*A+g*y+m*V+h*D,s[6]=_*T+g*I+m*X+h*H,s[10]=_*P+g*U+m*$+h*b,s[14]=_*M+g*N+m*q+h*te,s[3]=x*A+v*y+S*V+C*D,s[7]=x*T+v*I+S*X+C*H,s[11]=x*P+v*U+S*$+C*b,s[15]=x*M+v*N+S*q+C*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],h=e[15];return _*(+s*l*d-r*u*d-s*a*f+i*u*f+r*a*p-i*l*p)+g*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*d+t*a*f+r*o*d-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],h=e[15],x=d*m*u-g*f*u+g*l*p-a*m*p-d*l*h+a*f*h,v=_*f*u-c*m*u-_*l*p+o*m*p+c*l*h-o*f*h,S=c*g*u-_*d*u+_*a*p-o*g*p-c*a*h+o*d*h,C=_*d*l-c*g*l-_*a*f+o*g*f+c*a*m-o*d*m,A=t*x+i*v+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=x*T,e[1]=(g*f*s-d*m*s-g*r*p+i*m*p+d*r*h-i*f*h)*T,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*T,e[3]=(d*l*s-a*f*s-d*r*u+i*f*u+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(c*m*s-_*f*s+_*r*p-t*m*p-c*r*h+t*f*h)*T,e[6]=(_*l*s-o*m*s-_*r*u+t*m*u+o*r*h-t*l*h)*T,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*T,e[8]=S*T,e[9]=(_*d*s-c*g*s-_*i*p+t*g*p+c*i*h-t*d*h)*T,e[10]=(o*g*s-_*a*s+_*i*u-t*g*u-o*i*h+t*a*h)*T,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*T,e[12]=C*T,e[13]=(c*g*r-_*d*r+_*i*f-t*g*f-c*i*m+t*d*m)*T,e[14]=(_*a*r-o*g*r-_*i*l+t*g*l+o*i*m-t*a*m)*T,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,_=s*d,g=o*c,m=o*d,h=a*d,x=l*u,v=l*c,S=l*d,C=i.x,A=i.y,T=i.z;return r[0]=(1-(g+h))*C,r[1]=(p+S)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+h))*A,r[6]=(m+x)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-x)*T,r[10]=(1-(f+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Wo.set(r[0],r[1],r[2]).length();const o=Wo.set(r[4],r[5],r[6]).length(),a=Wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xi.copy(this);const u=1/s,c=1/o,d=1/a;return Xi.elements[0]*=u,Xi.elements[1]*=u,Xi.elements[2]*=u,Xi.elements[4]*=c,Xi.elements[5]*=c,Xi.elements[6]*=c,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,t.setFromRotationMatrix(Xi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Nr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let p,_;if(a===Nr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===qf)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Nr){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),f=(t+e)*u,p=(i+r)*c;let _,g;if(a===Nr)_=(o+s)*d,g=-2*d;else if(a===qf)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Wo=new Y,Xi=new Jt,jC=new Y(0,0,0),YC=new Y(1,1,1),Qr=new Y,dc=new Y,ai=new Y,iv=new Jt,rv=new Fu;class Wr{constructor(e=0,t=0,i=0,r=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(qn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iv,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rv.setFromEuler(this),this.setFromQuaternion(rv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class OM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qC=0;const sv=new Y,Xo=new Fu,Sr=new Jt,hc=new Y,vl=new Y,$C=new Y,KC=new Fu,ov=new Y(1,0,0),av=new Y(0,1,0),lv=new Y(0,0,1),uv={type:"added"},ZC={type:"removed"},jo={type:"childadded",child:null},wh={type:"childremoved",child:null};class si extends il{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qC++}),this.uuid=Ou(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=si.DEFAULT_UP.clone();const e=new Y,t=new Wr,i=new Fu,r=new Y(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ke}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=si.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new OM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,t){return Xo.setFromAxisAngle(e,t),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(ov,e)}rotateY(e){return this.rotateOnAxis(av,e)}rotateZ(e){return this.rotateOnAxis(lv,e)}translateOnAxis(e,t){return sv.copy(e).applyQuaternion(this.quaternion),this.position.add(sv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ov,e)}translateY(e){return this.translateOnAxis(av,e)}translateZ(e){return this.translateOnAxis(lv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?hc.copy(e):hc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(vl,hc,this.up):Sr.lookAt(hc,vl,this.up),this.quaternion.setFromRotationMatrix(Sr),r&&(Sr.extractRotation(r.matrixWorld),Xo.setFromRotationMatrix(Sr),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uv),jo.child=e,this.dispatchEvent(jo),jo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ZC),wh.child=e,this.dispatchEvent(wh),wh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uv),jo.child=e,this.dispatchEvent(jo),jo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,e,$C),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vl,KC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}si.DEFAULT_UP=new Y(0,1,0);si.DEFAULT_MATRIX_AUTO_UPDATE=!0;si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new Y,Mr=new Y,Ah=new Y,Er=new Y,Yo=new Y,qo=new Y,cv=new Y,Ch=new Y,Rh=new Y,bh=new Y;class fr{constructor(e=new Y,t=new Y,i=new Y){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),Mr.subVectors(i,t),Ah.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(Mr),l=ji.dot(Ah),u=Mr.dot(Mr),c=Mr.dot(Ah),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,_=(o*c-a*l)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Er.x),l.addScaledVector(o,Er.y),l.addScaledVector(a,Er.z),l)}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),Mr.subVectors(e,t),ji.cross(Mr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),ji.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return fr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Yo.subVectors(r,i),qo.subVectors(s,i),Ch.subVectors(e,i);const l=Yo.dot(Ch),u=qo.dot(Ch);if(l<=0&&u<=0)return t.copy(i);Rh.subVectors(e,r);const c=Yo.dot(Rh),d=qo.dot(Rh);if(c>=0&&d<=c)return t.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Yo,o);bh.subVectors(e,s);const p=Yo.dot(bh),_=qo.dot(bh);if(_>=0&&p<=_)return t.copy(s);const g=p*u-l*_;if(g<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(qo,a);const m=c*_-p*d;if(m<=0&&d-c>=0&&p-_>=0)return cv.subVectors(s,r),a=(d-c)/(d-c+(p-_)),t.copy(r).addScaledVector(cv,a);const h=1/(m+g+f);return o=g*h,a=f*h,t.copy(i).addScaledVector(Yo,o).addScaledVector(qo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const FM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Ph(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class pt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=or){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=OC(e,1),t=qn(t,0,1),i=qn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ph(o,s,e+1/3),this.g=Ph(o,s,e),this.b=Ph(o,s,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=or){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=or){const i=FM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}copyLinearToSRGB(e){return this.r=_h(e.r),this.g=_h(e.g),this.b=_h(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=or){return xt.fromWorkingColorSpace(wn.copy(this),e),Math.round(qn(wn.r*255,0,255))*65536+Math.round(qn(wn.g*255,0,255))*256+Math.round(qn(wn.b*255,0,255))}getHexString(e=or){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,s=wn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=or){xt.fromWorkingColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,r=wn.b;return e!==or?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(pc);const i=mh(Jr.h,pc.h,t),r=mh(Jr.s,pc.s,t),s=mh(Jr.l,pc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new pt;pt.NAMES=FM;let QC=0;class zu extends il{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=Ou(),this.name="",this.type="Material",this.blending=yo,this.side=Is,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tm,this.blendDst=nm,this.blendEquation=ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Gf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=K0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yo&&(i.blending=this.blending),this.side!==Is&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==tm&&(i.blendSrc=this.blendSrc),this.blendDst!==nm&&(i.blendDst=this.blendDst),this.blendEquation!==ro&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==K0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class kM extends zu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=SM,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new Y,mc=new ft;class er{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Z0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return kC("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ml(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ml(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ml(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ml(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ml(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),r=Xn(r,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Z0&&(e.usage=this.usage),e}}class zM extends er{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class BM extends er{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class So extends er{constructor(e,t,i){super(new Float32Array(e),t,i)}}let JC=0;const Ri=new Jt,Lh=new si,$o=new Y,li=new ku,xl=new ku,ln=new Y;class jr extends il{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JC++}),this.uuid=Ou(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DM(e)?BM:zM)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Lh.lookAt(e),Lh.updateMatrix(),this.applyMatrix4(Lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new So(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ku);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];li.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];xl.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(li.min,xl.min),li.expandByPoint(ln),ln.addVectors(li.max,xl.max),li.expandByPoint(ln)):(li.expandByPoint(xl.min),li.expandByPoint(xl.max))}li.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)ln.fromBufferAttribute(a,u),l&&($o.fromBufferAttribute(e,u),ln.add($o)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new er(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new Y,l[P]=new Y;const u=new Y,c=new Y,d=new Y,f=new ft,p=new ft,_=new ft,g=new Y,m=new Y;function h(P,M,y){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),_.fromBufferAttribute(s,y),c.sub(u),d.sub(u),p.sub(f),_.sub(f);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(g.copy(c).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(I),a[P].add(g),a[M].add(g),a[y].add(g),l[P].add(m),l[M].add(m),l[y].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,M=x.length;P<M;++P){const y=x[P],I=y.start,U=y.count;for(let N=I,V=I+U;N<V;N+=3)h(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const v=new Y,S=new Y,C=new Y,A=new Y;function T(P){C.fromBufferAttribute(r,P),A.copy(C);const M=a[P];v.copy(M),v.sub(C.multiplyScalar(C.dot(M))).normalize(),S.crossVectors(A,M);const I=S.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,I)}for(let P=0,M=x.length;P<M;++P){const y=x[P],I=y.start,U=y.count;for(let N=I,V=I+U;N<V;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new er(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,d=new Y;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)f[_++]=u[p++]}return new er(f,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fv=new Jt,Ys=new UM,gc=new Sd,dv=new Y,Ko=new Y,Zo=new Y,Qo=new Y,Dh=new Y,_c=new Y,vc=new ft,xc=new ft,yc=new ft,hv=new Y,pv=new Y,mv=new Y,Sc=new Y,Mc=new Y;class Ir extends si{constructor(e=new jr,t=new kM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_c.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Dh.fromBufferAttribute(d,e),o?_c.addScaledVector(Dh,c):_c.addScaledVector(Dh.sub(t),c))}t.add(_c)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),Ys.copy(e.ray).recast(e.near),!(gc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(gc,dv)===null||Ys.origin.distanceToSquared(dv)>(e.far-e.near)**2))&&(fv.copy(s).invert(),Ys.copy(e.ray).applyMatrix4(fv),!(i.boundingBox!==null&&Ys.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ys)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=Ec(this,h,e,i,u,c,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const x=a.getX(m),v=a.getX(m+1),S=a.getX(m+2);r=Ec(this,o,e,i,u,c,d,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],h=o[m.materialIndex],x=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=x,C=v;S<C;S+=3){const A=S,T=S+1,P=S+2;r=Ec(this,h,e,i,u,c,d,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,h=g;m<h;m+=3){const x=m,v=m+1,S=m+2;r=Ec(this,o,e,i,u,c,d,x,v,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function eR(n,e,t,i,r,s,o,a){let l;if(e.side===ii?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Is,a),l===null)return null;Mc.copy(a),Mc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Mc);return u<t.near||u>t.far?null:{distance:u,point:Mc.clone(),object:n}}function Ec(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Ko),n.getVertexPosition(l,Zo),n.getVertexPosition(u,Qo);const c=eR(n,e,t,i,Ko,Zo,Qo,Sc);if(c){r&&(vc.fromBufferAttribute(r,a),xc.fromBufferAttribute(r,l),yc.fromBufferAttribute(r,u),c.uv=fr.getInterpolation(Sc,Ko,Zo,Qo,vc,xc,yc,new ft)),s&&(vc.fromBufferAttribute(s,a),xc.fromBufferAttribute(s,l),yc.fromBufferAttribute(s,u),c.uv1=fr.getInterpolation(Sc,Ko,Zo,Qo,vc,xc,yc,new ft)),o&&(hv.fromBufferAttribute(o,a),pv.fromBufferAttribute(o,l),mv.fromBufferAttribute(o,u),c.normal=fr.getInterpolation(Sc,Ko,Zo,Qo,hv,pv,mv,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};fr.getNormal(Ko,Zo,Qo,d.normal),c.face=d}return c}class Bu extends jr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new So(u,3)),this.setAttribute("normal",new So(c,3)),this.setAttribute("uv",new So(d,2));function _(g,m,h,x,v,S,C,A,T,P,M){const y=S/T,I=C/P,U=S/2,N=C/2,V=A/2,X=T+1,$=P+1;let q=0,D=0;const H=new Y;for(let b=0;b<$;b++){const te=b*I-N;for(let me=0;me<X;me++){const Ge=me*y-U;H[g]=Ge*x,H[m]=te*v,H[h]=V,u.push(H.x,H.y,H.z),H[g]=0,H[m]=0,H[h]=A>0?1:-1,c.push(H.x,H.y,H.z),d.push(me/T),d.push(1-b/P),q+=1}}for(let b=0;b<P;b++)for(let te=0;te<T;te++){const me=f+te+X*b,Ge=f+te+X*(b+1),G=f+(te+1)+X*(b+1),ee=f+(te+1)+X*b;l.push(me,Ge,ee),l.push(Ge,G,ee),D+=6}a.addGroup(p,D,M),p+=D,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qa(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const i=Qa(n[t]);for(const r in i)e[r]=i[r]}return e}function tR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function HM(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const nR={clone:Qa,merge:Un};var iR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Us extends zu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iR,this.fragmentShader=rR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qa(e.uniforms),this.uniformsGroups=tR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class VM extends si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Nr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const es=new Y,gv=new ft,_v=new ft;class Di extends VM{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=am*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ph*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return am*2*Math.atan(Math.tan(ph*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(es.x,es.y).multiplyScalar(-e/es.z),es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(es.x,es.y).multiplyScalar(-e/es.z)}getViewSize(e,t){return this.getViewBounds(e,gv,_v),t.subVectors(_v,gv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ph*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Jo=-90,ea=1;class sR extends si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Di(Jo,ea,e,t);r.layers=this.layers,this.add(r);const s=new Di(Jo,ea,e,t);s.layers=this.layers,this.add(s);const o=new Di(Jo,ea,e,t);o.layers=this.layers,this.add(o);const a=new Di(Jo,ea,e,t);a.layers=this.layers,this.add(a);const l=new Di(Jo,ea,e,t);l.layers=this.layers,this.add(l);const u=new Di(Jo,ea,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Nr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===qf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,f,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class GM extends ri{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:$a,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oR extends Po{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new GM(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bu(5,5,5),s=new Us({name:"CubemapFromEquirect",uniforms:Qa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:ws});s.uniforms.tEquirect.value=t;const o=new Ir(r,s),a=t.minFilter;return t.minFilter===fo&&(t.minFilter=Zi),new sR(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Nh=new Y,aR=new Y,lR=new Ke;class eo{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Nh.subVectors(i,t).cross(aR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Nh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lR.getNormalMatrix(e),r=this.coplanarPoint(Nh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qs=new Sd,Tc=new Y;class WM{constructor(e=new eo,t=new eo,i=new eo,r=new eo,s=new eo,o=new eo){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Nr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],h=r[12],x=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-h).normalize(),i[1].setComponents(l+s,f+u,m+p,S+h).normalize(),i[2].setComponents(l+o,f+c,m+_,S+x).normalize(),i[3].setComponents(l-o,f-c,m-_,S-x).normalize(),i[4].setComponents(l-a,f-d,m-g,S-v).normalize(),t===Nr)i[5].setComponents(l+a,f+d,m+g,S+v).normalize();else if(t===qf)i[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){return qs.center.set(0,0,0),qs.radius=.7071067811865476,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Tc.x=r.normal.x>0?e.max.x:e.min.x,Tc.y=r.normal.y>0?e.max.y:e.min.y,Tc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function XM(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function uR(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l._updateRange,f=l.updateRanges;if(n.bindBuffer(u,a),d.count===-1&&f.length===0&&n.bufferSubData(u,0,c),f.length!==0){for(let p=0,_=f.length;p<_;p++){const g=f[p];n.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(n.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Md extends jr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=t/l,p=[],_=[],g=[],m=[];for(let h=0;h<c;h++){const x=h*f-o;for(let v=0;v<u;v++){const S=v*d-s;_.push(S,-x,0),g.push(0,0,1),m.push(v/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const v=x+u*h,S=x+u*(h+1),C=x+1+u*(h+1),A=x+1+u*h;p.push(v,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new So(_,3)),this.setAttribute("normal",new So(g,3)),this.setAttribute("uv",new So(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.width,e.height,e.widthSegments,e.heightSegments)}}var cR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fR=`#ifdef USE_ALPHAHASH
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
#endif`,dR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gR=`#ifdef USE_AOMAP
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
#endif`,_R=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,xR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ER=`#ifdef USE_IRIDESCENCE
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
#endif`,TR=`#ifdef USE_BUMPMAP
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
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,NR=`#define PI 3.141592653589793
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
} // validated`,IR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UR=`vec3 transformedNormal = objectNormal;
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
#endif`,OR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BR="gl_FragColor = linearToOutputTexel( gl_FragColor );",HR=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,VR=`#ifdef USE_ENVMAP
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
#endif`,GR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WR=`#ifdef USE_ENVMAP
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
#endif`,XR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jR=`#ifdef USE_ENVMAP
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
#endif`,YR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZR=`#ifdef USE_GRADIENTMAP
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
}`,QR=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,JR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nb=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
#endif`,ib=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ab=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,ub=`struct PhysicalMaterial {
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,cb=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,fb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_b=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yb=`#if defined( USE_POINTS_UV )
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
#endif`,Sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wb=`#ifdef USE_MORPHNORMALS
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
#endif`,Ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cb=`#ifdef USE_MORPHTARGETS
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
#endif`,Rb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nb=`#ifdef USE_NORMALMAP
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
#endif`,Ib=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Yb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$b=`float getShadowMask() {
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
}`,Kb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zb=`#ifdef USE_SKINNING
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
#endif`,Qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jb=`#ifdef USE_SKINNING
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
#endif`,e2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i2=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r2=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s2=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,o2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f2=`uniform sampler2D t2D;
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
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g2=`#include <common>
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
}`,_2=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,v2=`#define DISTANCE
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
}`,x2=`#define DISTANCE
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
	gl_FragColor = packDepthToRGBA( dist );
}`,y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`uniform float scale;
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
}`,E2=`uniform vec3 diffuse;
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
}`,T2=`#include <common>
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
}`,w2=`uniform vec3 diffuse;
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
}`,A2=`#define LAMBERT
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
}`,C2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,R2=`#define MATCAP
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
}`,b2=`#define MATCAP
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
}`,P2=`#define NORMAL
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
}`,L2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,D2=`#define PHONG
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
}`,N2=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,I2=`#define STANDARD
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
}`,U2=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,O2=`#define TOON
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
}`,F2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,k2=`uniform float size;
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
}`,z2=`uniform vec3 diffuse;
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
}`,B2=`#include <common>
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
}`,H2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,V2=`uniform float rotation;
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
}`,G2=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:cR,alphahash_pars_fragment:fR,alphamap_fragment:dR,alphamap_pars_fragment:hR,alphatest_fragment:pR,alphatest_pars_fragment:mR,aomap_fragment:gR,aomap_pars_fragment:_R,batching_pars_vertex:vR,batching_vertex:xR,begin_vertex:yR,beginnormal_vertex:SR,bsdfs:MR,iridescence_fragment:ER,bumpmap_pars_fragment:TR,clipping_planes_fragment:wR,clipping_planes_pars_fragment:AR,clipping_planes_pars_vertex:CR,clipping_planes_vertex:RR,color_fragment:bR,color_pars_fragment:PR,color_pars_vertex:LR,color_vertex:DR,common:NR,cube_uv_reflection_fragment:IR,defaultnormal_vertex:UR,displacementmap_pars_vertex:OR,displacementmap_vertex:FR,emissivemap_fragment:kR,emissivemap_pars_fragment:zR,colorspace_fragment:BR,colorspace_pars_fragment:HR,envmap_fragment:VR,envmap_common_pars_fragment:GR,envmap_pars_fragment:WR,envmap_pars_vertex:XR,envmap_physical_pars_fragment:ib,envmap_vertex:jR,fog_vertex:YR,fog_pars_vertex:qR,fog_fragment:$R,fog_pars_fragment:KR,gradientmap_pars_fragment:ZR,lightmap_fragment:QR,lightmap_pars_fragment:JR,lights_lambert_fragment:eb,lights_lambert_pars_fragment:tb,lights_pars_begin:nb,lights_toon_fragment:rb,lights_toon_pars_fragment:sb,lights_phong_fragment:ob,lights_phong_pars_fragment:ab,lights_physical_fragment:lb,lights_physical_pars_fragment:ub,lights_fragment_begin:cb,lights_fragment_maps:fb,lights_fragment_end:db,logdepthbuf_fragment:hb,logdepthbuf_pars_fragment:pb,logdepthbuf_pars_vertex:mb,logdepthbuf_vertex:gb,map_fragment:_b,map_pars_fragment:vb,map_particle_fragment:xb,map_particle_pars_fragment:yb,metalnessmap_fragment:Sb,metalnessmap_pars_fragment:Mb,morphinstance_vertex:Eb,morphcolor_vertex:Tb,morphnormal_vertex:wb,morphtarget_pars_vertex:Ab,morphtarget_vertex:Cb,normal_fragment_begin:Rb,normal_fragment_maps:bb,normal_pars_fragment:Pb,normal_pars_vertex:Lb,normal_vertex:Db,normalmap_pars_fragment:Nb,clearcoat_normal_fragment_begin:Ib,clearcoat_normal_fragment_maps:Ub,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:Fb,opaque_fragment:kb,packing:zb,premultiplied_alpha_fragment:Bb,project_vertex:Hb,dithering_fragment:Vb,dithering_pars_fragment:Gb,roughnessmap_fragment:Wb,roughnessmap_pars_fragment:Xb,shadowmap_pars_fragment:jb,shadowmap_pars_vertex:Yb,shadowmap_vertex:qb,shadowmask_pars_fragment:$b,skinbase_vertex:Kb,skinning_pars_vertex:Zb,skinning_vertex:Qb,skinnormal_vertex:Jb,specularmap_fragment:e2,specularmap_pars_fragment:t2,tonemapping_fragment:n2,tonemapping_pars_fragment:i2,transmission_fragment:r2,transmission_pars_fragment:s2,uv_pars_fragment:o2,uv_pars_vertex:a2,uv_vertex:l2,worldpos_vertex:u2,background_vert:c2,background_frag:f2,backgroundCube_vert:d2,backgroundCube_frag:h2,cube_vert:p2,cube_frag:m2,depth_vert:g2,depth_frag:_2,distanceRGBA_vert:v2,distanceRGBA_frag:x2,equirect_vert:y2,equirect_frag:S2,linedashed_vert:M2,linedashed_frag:E2,meshbasic_vert:T2,meshbasic_frag:w2,meshlambert_vert:A2,meshlambert_frag:C2,meshmatcap_vert:R2,meshmatcap_frag:b2,meshnormal_vert:P2,meshnormal_frag:L2,meshphong_vert:D2,meshphong_frag:N2,meshphysical_vert:I2,meshphysical_frag:U2,meshtoon_vert:O2,meshtoon_frag:F2,points_vert:k2,points_frag:z2,shadow_vert:B2,shadow_frag:H2,sprite_vert:V2,sprite_frag:G2},fe={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},lr={basic:{uniforms:Un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Un([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Un([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new pt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Un([fe.points,fe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Un([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Un([fe.common,fe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Un([fe.sprite,fe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Un([fe.common,fe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Un([fe.lights,fe.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};lr.physical={uniforms:Un([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const wc={r:0,b:0,g:0},$s=new Wr,W2=new Jt;function X2(n,e,t,i,r,s,o){const a=new pt(0);let l=s===!0?0:1,u,c,d=null,f=0,p=null;function _(m,h){let x=!1,v=h.isScene===!0?h.background:null;v&&v.isTexture&&(v=(h.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),x=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===xd)?(c===void 0&&(c=new Ir(new Bu(1,1,1),new Us({name:"BackgroundCubeMaterial",uniforms:Qa(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),$s.copy(h.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W2.makeRotationFromEuler($s)),c.material.toneMapped=xt.getTransfer(v.colorSpace)!==Rt,(d!==v||f!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ir(new Md(2,2),new Us({name:"BackgroundMaterial",uniforms:Qa(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Is,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=xt.getTransfer(v.colorSpace)!==Rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,f=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(wc,HM(n)),i.buffers.color.setClear(wc.r,wc.g,wc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function j2(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,I,U,N,V){let X=!1;const $=d(N,U,I);s!==$&&(s=$,u(s.object)),X=p(y,N,U,V),X&&_(y,N,U,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(y,I,U,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function d(y,I,U){const N=U.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let X=V[I.id];X===void 0&&(X={},V[I.id]=X);let $=X[N];return $===void 0&&($=f(l()),X[N]=$),$}function f(y){const I=[],U=[],N=[];for(let V=0;V<t;V++)I[V]=0,U[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,I,U,N){const V=s.attributes,X=I.attributes;let $=0;const q=U.getAttributes();for(const D in q)if(q[D].location>=0){const b=V[D];let te=X[D];if(te===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),b===void 0||b.attribute!==te||te&&b.data!==te.data)return!0;$++}return s.attributesNum!==$||s.index!==N}function _(y,I,U,N){const V={},X=I.attributes;let $=0;const q=U.getAttributes();for(const D in q)if(q[D].location>=0){let b=X[D];b===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(b=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(b=y.instanceColor));const te={};te.attribute=b,b&&b.data&&(te.data=b.data),V[D]=te,$++}s.attributes=V,s.attributesNum=$,s.index=N}function g(){const y=s.newAttributes;for(let I=0,U=y.length;I<U;I++)y[I]=0}function m(y){h(y,0)}function h(y,I){const U=s.newAttributes,N=s.enabledAttributes,V=s.attributeDivisors;U[y]=1,N[y]===0&&(n.enableVertexAttribArray(y),N[y]=1),V[y]!==I&&(n.vertexAttribDivisor(y,I),V[y]=I)}function x(){const y=s.newAttributes,I=s.enabledAttributes;for(let U=0,N=I.length;U<N;U++)I[U]!==y[U]&&(n.disableVertexAttribArray(U),I[U]=0)}function v(y,I,U,N,V,X,$){$===!0?n.vertexAttribIPointer(y,I,U,V,X):n.vertexAttribPointer(y,I,U,N,V,X)}function S(y,I,U,N){g();const V=N.attributes,X=U.getAttributes(),$=I.defaultAttributeValues;for(const q in X){const D=X[q];if(D.location>=0){let H=V[q];if(H===void 0&&(q==="instanceMatrix"&&y.instanceMatrix&&(H=y.instanceMatrix),q==="instanceColor"&&y.instanceColor&&(H=y.instanceColor)),H!==void 0){const b=H.normalized,te=H.itemSize,me=e.get(H);if(me===void 0)continue;const Ge=me.buffer,G=me.type,ee=me.bytesPerElement,le=G===n.INT||G===n.UNSIGNED_INT||H.gpuType===TM;if(H.isInterleavedBufferAttribute){const ie=H.data,Ce=ie.stride,Pe=H.offset;if(ie.isInstancedInterleavedBuffer){for(let We=0;We<D.locationSize;We++)h(D.location+We,ie.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let We=0;We<D.locationSize;We++)m(D.location+We);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let We=0;We<D.locationSize;We++)v(D.location+We,te/D.locationSize,G,b,Ce*ee,(Pe+te/D.locationSize*We)*ee,le)}else{if(H.isInstancedBufferAttribute){for(let ie=0;ie<D.locationSize;ie++)h(D.location+ie,H.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ie=0;ie<D.locationSize;ie++)m(D.location+ie);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let ie=0;ie<D.locationSize;ie++)v(D.location+ie,te/D.locationSize,G,b,te*ee,te/D.locationSize*ie*ee,le)}}else if($!==void 0){const b=$[q];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(D.location,b);break;case 3:n.vertexAttrib3fv(D.location,b);break;case 4:n.vertexAttrib4fv(D.location,b);break;default:n.vertexAttrib1fv(D.location,b)}}}}x()}function C(){P();for(const y in i){const I=i[y];for(const U in I){const N=I[U];for(const V in N)c(N[V].object),delete N[V];delete I[U]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const U in I){const N=I[U];for(const V in N)c(N[V].object),delete N[V];delete I[U]}delete i[y.id]}function T(y){for(const I in i){const U=i[I];if(U[y.id]===void 0)continue;const N=U[y.id];for(const V in N)c(N[V].object),delete N[V];delete U[y.id]}}function P(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function Y2(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function o(l,u,c){c!==0&&(n.drawArraysInstanced(i,l,u,c),t.update(u,i,c))}function a(l,u,c){if(c===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<c;f++)this.render(l[f],u[f]);else{d.multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];t.update(f,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function q2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),c=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),m=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),h=c>0,x=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:c,maxTextureSize:d,maxCubemapSize:f,maxAttributes:p,maxVertexUniforms:_,maxVaryings:g,maxFragmentUniforms:m,vertexTextures:h,maxSamples:x}}function $2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new eo,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=c(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,v=x*4;let S=h.clippingState||null;l.value=S,S=c(_,f,v,p);for(let C=0;C!==v;++C)S[C]=t[C];h.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,S=p;v!==g;++v,S+=4)o.copy(d[v]).applyMatrix4(x,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function K2(n){let e=new WeakMap;function t(o,a){return a===im?o.mapping=$a:a===rm&&(o.mapping=Ka),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===im||a===rm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new oR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Z2 extends VM{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ya=4,vv=[.125,.215,.35,.446,.526,.582],so=20,Ih=new Z2,xv=new pt;let Uh=null,Oh=0,Fh=0,kh=!1;const to=(1+Math.sqrt(5))/2,ta=1/to,yv=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,to,ta),new Y(0,to,-ta),new Y(ta,0,to),new Y(-ta,0,to),new Y(to,ta,0),new Y(-to,ta,0)];class Sv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Uh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uh,Oh,Fh),this._renderer.xr.enabled=kh,e.scissorTest=!1,Ac(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$a||e.mapping===Ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uh=this._renderer.getRenderTarget(),Oh=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zi,minFilter:Zi,generateMipmaps:!1,type:Wf,format:hr,colorSpace:Hs,depthBuffer:!1},r=Mv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Q2(s)),this._blurMaterial=J2(s,e,t)}return r}_compileMaterial(e){const t=new Ir(this._lodPlanes[0],e);this._renderer.compile(t,Ih)}_sceneToCubeUV(e,t,i,r){const a=new Di(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,f=c.toneMapping;c.getClearColor(xv),c.toneMapping=As,c.autoClear=!1;const p=new kM({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1}),_=new Ir(new Bu,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(xv),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const v=this._cubeSize;Ac(r,x*v,h>2?v:0,v,v),c.setRenderTarget(r),g&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$a||e.mapping===Ka;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ev());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ir(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ac(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ih)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=yv[(r-1)%yv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ir(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*so-1),g=s/_,m=isFinite(s)?1+Math.floor(c*g):so;m>so&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${so}`);const h=[];let x=0;for(let T=0;T<so;++T){const P=T/g,M=Math.exp(-P*P/2);h.push(M),T===0?x+=M:T<m&&(x+=2*M)}for(let T=0;T<h.length;T++)h[T]=h[T]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const S=this._sizeLods[r],C=3*S*(r>v-ya?r-v+ya:0),A=4*(this._cubeSize-S);Ac(t,C,A,3*S,2*S),l.setRenderTarget(t),l.render(d,Ih)}}function Q2(n){const e=[],t=[],i=[];let r=n;const s=n-ya+1+vv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ya?l=vv[o-n+ya-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,_=6,g=3,m=2,h=1,x=new Float32Array(g*_*p),v=new Float32Array(m*_*p),S=new Float32Array(h*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];x.set(M,g*_*A),v.set(f,m*_*A);const y=[A,A,A,A,A,A];S.set(y,h*_*A)}const C=new jr;C.setAttribute("position",new er(x,g)),C.setAttribute("uv",new er(v,m)),C.setAttribute("faceIndex",new er(S,h)),e.push(C),r>ya&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Mv(n,e,t){const i=new Po(n,e,t);return i.texture.mapping=xd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ac(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function J2(n,e,t){const i=new Float32Array(so),r=new Y(0,1,0);return new Us({name:"SphericalGaussianBlur",defines:{n:so,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ig(),fragmentShader:`

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
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Ev(){return new Us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ig(),fragmentShader:`

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
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Tv(){return new Us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ig(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Ig(){return`

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
	`}function eP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===im||l===rm,c=l===$a||l===Ka;if(u||c){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Sv(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Sv(n)),d=u?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function tP(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nP(n,e,t,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let v=0,S=x.length;v<S;v+=3){const C=x[v+0],A=x[v+1],T=x[v+2];f.push(C,A,A,T,T,C)}}else if(_!==void 0){const x=_.array;g=_.version;for(let v=0,S=x.length/3-1;v<S;v+=3){const C=v+0,A=v+1,T=v+2;f.push(C,A,A,T,T,C)}}else return;const m=new(DM(f)?BM:zM)(f,1);m.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function iP(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function u(d,f,p){p!==0&&(n.drawElementsInstanced(i,f,s,d*o,p),t.update(f,i,p))}function c(d,f,p){if(p===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<p;g++)this.render(d[g]/o,f[g]);else{_.multiDrawElementsWEBGL(i,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function rP(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function sP(n,e,t){const i=new WeakMap,r=new mn;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*A*4*d),P=new IM(T,C,A,d);P.type=ds,P.needsUpdate=!0;const M=S*4;for(let I=0;I<d;I++){const U=h[I],N=x[I],V=v[I],X=C*A*4*I;for(let $=0;$<U.count;$++){const q=$*M;_===!0&&(r.fromBufferAttribute(U,$),T[X+q+0]=r.x,T[X+q+1]=r.y,T[X+q+2]=r.z,T[X+q+3]=0),g===!0&&(r.fromBufferAttribute(N,$),T[X+q+4]=r.x,T[X+q+5]=r.y,T[X+q+6]=r.z,T[X+q+7]=0),m===!0&&(r.fromBufferAttribute(V,$),T[X+q+8]=r.x,T[X+q+9]=r.y,T[X+q+10]=r.z,T[X+q+11]=V.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new ft(C,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function oP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class jM extends ri{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:La,c!==La&&c!==Au)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===La&&(i=Za),i===void 0&&c===Au&&(i=Uu),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ki,this.minFilter=l!==void 0?l:ki,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const YM=new ri,qM=new jM(1,1);qM.compareFunction=LM;const $M=new IM,KM=new WC,ZM=new GM,wv=[],Av=[],Cv=new Float32Array(16),Rv=new Float32Array(9),bv=new Float32Array(4);function rl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=wv[r];if(s===void 0&&(s=new Float32Array(r),wv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function on(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function an(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ed(n,e){let t=Av[e];t===void 0&&(t=new Int32Array(e),Av[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function aP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function lP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2fv(this.addr,e),an(t,e)}}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;n.uniform3fv(this.addr,e),an(t,e)}}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4fv(this.addr,e),an(t,e)}}function fP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;bv.set(i),n.uniformMatrix2fv(this.addr,!1,bv),an(t,i)}}function dP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Rv.set(i),n.uniformMatrix3fv(this.addr,!1,Rv),an(t,i)}}function hP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(on(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,i))return;Cv.set(i),n.uniformMatrix4fv(this.addr,!1,Cv),an(t,i)}}function pP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function mP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2iv(this.addr,e),an(t,e)}}function gP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3iv(this.addr,e),an(t,e)}}function _P(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4iv(this.addr,e),an(t,e)}}function vP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;n.uniform2uiv(this.addr,e),an(t,e)}}function yP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;n.uniform3uiv(this.addr,e),an(t,e)}}function SP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;n.uniform4uiv(this.addr,e),an(t,e)}}function MP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?qM:YM;t.setTexture2D(e||s,r)}function EP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||KM,r)}function TP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ZM,r)}function wP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$M,r)}function AP(n){switch(n){case 5126:return aP;case 35664:return lP;case 35665:return uP;case 35666:return cP;case 35674:return fP;case 35675:return dP;case 35676:return hP;case 5124:case 35670:return pP;case 35667:case 35671:return mP;case 35668:case 35672:return gP;case 35669:case 35673:return _P;case 5125:return vP;case 36294:return xP;case 36295:return yP;case 36296:return SP;case 35678:case 36198:case 36298:case 36306:case 35682:return MP;case 35679:case 36299:case 36307:return EP;case 35680:case 36300:case 36308:case 36293:return TP;case 36289:case 36303:case 36311:case 36292:return wP}}function CP(n,e){n.uniform1fv(this.addr,e)}function RP(n,e){const t=rl(e,this.size,2);n.uniform2fv(this.addr,t)}function bP(n,e){const t=rl(e,this.size,3);n.uniform3fv(this.addr,t)}function PP(n,e){const t=rl(e,this.size,4);n.uniform4fv(this.addr,t)}function LP(n,e){const t=rl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function DP(n,e){const t=rl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function NP(n,e){const t=rl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function IP(n,e){n.uniform1iv(this.addr,e)}function UP(n,e){n.uniform2iv(this.addr,e)}function OP(n,e){n.uniform3iv(this.addr,e)}function FP(n,e){n.uniform4iv(this.addr,e)}function kP(n,e){n.uniform1uiv(this.addr,e)}function zP(n,e){n.uniform2uiv(this.addr,e)}function BP(n,e){n.uniform3uiv(this.addr,e)}function HP(n,e){n.uniform4uiv(this.addr,e)}function VP(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||YM,s[o])}function GP(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||KM,s[o])}function WP(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ZM,s[o])}function XP(n,e,t){const i=this.cache,r=e.length,s=Ed(t,r);on(i,s)||(n.uniform1iv(this.addr,s),an(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$M,s[o])}function jP(n){switch(n){case 5126:return CP;case 35664:return RP;case 35665:return bP;case 35666:return PP;case 35674:return LP;case 35675:return DP;case 35676:return NP;case 5124:case 35670:return IP;case 35667:case 35671:return UP;case 35668:case 35672:return OP;case 35669:case 35673:return FP;case 5125:return kP;case 36294:return zP;case 36295:return BP;case 36296:return HP;case 35678:case 36198:case 36298:case 36306:case 35682:return VP;case 35679:case 36299:case 36307:return GP;case 35680:case 36300:case 36308:case 36293:return WP;case 36289:case 36303:case 36311:case 36292:return XP}}class YP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=AP(t.type)}}class qP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jP(t.type)}}class $P{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function Pv(n,e){n.seq.push(e),n.map[e.id]=e}function KP(n,e,t){const i=n.name,r=i.length;for(zh.lastIndex=0;;){const s=zh.exec(i),o=zh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Pv(t,u===void 0?new YP(a,n,e):new qP(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new $P(a),Pv(t,d)),t=d}}}class rf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);KP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Lv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ZP=37297;let QP=0;function JP(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function eL(n){const e=xt.getPrimaries(xt.workingColorSpace),t=xt.getPrimaries(n);let i;switch(e===t?i="":e===Yf&&t===jf?i="LinearDisplayP3ToLinearSRGB":e===jf&&t===Yf&&(i="LinearSRGBToLinearDisplayP3"),n){case Hs:case yd:return[i,"LinearTransferOETF"];case or:case Ng:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Dv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+JP(n.getShaderSource(e),o)}else return r}function tL(n,e){const t=eL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nL(n,e){let t;switch(e){case aC:t="Linear";break;case lC:t="Reinhard";break;case uC:t="OptimizedCineon";break;case cC:t="ACESFilmic";break;case dC:t="AgX";break;case hC:t="Neutral";break;case fC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function iL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function rL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function sL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rl(n){return n!==""}function Nv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oL=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(n){return n.replace(oL,lL)}const aL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function lL(n,e){let t=$e[e];if(t===void 0){const i=aL.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lm(t)}const uL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uv(n){return n.replace(uL,cL)}function cL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ov(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===yM?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===NA?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function dL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $a:case Ka:e="ENVMAP_TYPE_CUBE";break;case xd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ka:e="ENVMAP_MODE_REFRACTION";break}return e}function pL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case SM:e="ENVMAP_BLENDING_MULTIPLY";break;case sC:e="ENVMAP_BLENDING_MIX";break;case oC:e="ENVMAP_BLENDING_ADD";break}return e}function mL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function gL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=fL(t),u=dL(t),c=hL(t),d=pL(t),f=mL(t),p=iL(t),_=rL(s),g=r.createProgram();let m,h,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rl).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Rl).join(`
`),h.length>0&&(h+=`
`)):(m=[Ov(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),h=[Ov(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==As?"#define TONE_MAPPING":"",t.toneMapping!==As?$e.tonemapping_pars_fragment:"",t.toneMapping!==As?nL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,tL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rl).join(`
`)),o=lm(o),o=Nv(o,t),o=Iv(o,t),a=lm(a),a=Nv(a,t),a=Iv(a,t),o=Uv(o),a=Uv(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=x+m+o,S=x+h+a,C=Lv(r,r.VERTEX_SHADER,v),A=Lv(r,r.FRAGMENT_SHADER,S);r.attachShader(g,C),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(I){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(C).trim(),V=r.getShaderInfoLog(A).trim();let X=!0,$=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,A);else{const q=Dv(r,C,"vertex"),D=Dv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+q+`
`+D)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||V==="")&&($=!1);$&&(I.diagnostics={runnable:X,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:V,prefix:h}})}r.deleteShader(C),r.deleteShader(A),P=new rf(r,g),M=sL(r,g)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,ZP)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QP++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=A,this}let _L=0;class vL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xL(e),t.set(e,i)),i}}class xL{constructor(e){this.id=_L++,this.code=e,this.usedTimes=0}}function yL(n,e,t,i,r,s,o){const a=new OM,l=new vL,u=new Set,c=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,y,I,U,N){const V=U.fog,X=N.geometry,$=M.isMeshStandardMaterial?U.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),D=q&&q.mapping===xd?q.image.height:null,H=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const b=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,te=b!==void 0?b.length:0;let me=0;X.morphAttributes.position!==void 0&&(me=1),X.morphAttributes.normal!==void 0&&(me=2),X.morphAttributes.color!==void 0&&(me=3);let Ge,G,ee,le;if(H){const Mt=lr[H];Ge=Mt.vertexShader,G=Mt.fragmentShader}else Ge=M.vertexShader,G=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const ie=n.getRenderTarget(),Ce=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,We=!!M.map,F=!!M.matcap,Oe=!!q,ue=!!M.aoMap,Xe=!!M.lightMap,we=!!M.bumpMap,je=!!M.normalMap,E=!!M.displacementMap,w=!!M.emissiveMap,j=!!M.metalnessMap,Z=!!M.roughnessMap,K=M.anisotropy>0,J=M.clearcoat>0,Re=M.iridescence>0,re=M.sheen>0,pe=M.transmission>0,Le=K&&!!M.anisotropyMap,ne=J&&!!M.clearcoatMap,de=J&&!!M.clearcoatNormalMap,De=J&&!!M.clearcoatRoughnessMap,ge=Re&&!!M.iridescenceMap,Se=Re&&!!M.iridescenceThicknessMap,Ne=re&&!!M.sheenColorMap,et=re&&!!M.sheenRoughnessMap,Ze=!!M.specularMap,rt=!!M.specularColorMap,ut=!!M.specularIntensityMap,ye=pe&&!!M.transmissionMap,L=pe&&!!M.thicknessMap,Q=!!M.gradientMap,ae=!!M.alphaMap,ve=M.alphaTest>0,Me=!!M.alphaHash,tt=!!M.extensions;let lt=As;M.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(lt=n.toneMapping);const dt={shaderID:H,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:G,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pe,instancing:Ce,instancingColor:Ce&&N.instanceColor!==null,instancingMorph:Ce&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Hs,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:F,envMap:Oe,envMapMode:Oe&&q.mapping,envMapCubeUVHeight:D,aoMap:ue,lightMap:Xe,bumpMap:we,normalMap:je,displacementMap:f&&E,emissiveMap:w,normalMapObjectSpace:je&&M.normalMapType===RC,normalMapTangentSpace:je&&M.normalMapType===CC,metalnessMap:j,roughnessMap:Z,anisotropy:K,anisotropyMap:Le,clearcoat:J,clearcoatMap:ne,clearcoatNormalMap:de,clearcoatRoughnessMap:De,iridescence:Re,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:re,sheenColorMap:Ne,sheenRoughnessMap:et,specularMap:Ze,specularColorMap:rt,specularIntensityMap:ut,transmission:pe,transmissionMap:ye,thicknessMap:L,gradientMap:Q,opaque:M.transparent===!1&&M.blending===yo&&M.alphaToCoverage===!1,alphaMap:ae,alphaTest:ve,alphaHash:Me,combine:M.combine,mapUv:We&&g(M.map.channel),aoMapUv:ue&&g(M.aoMap.channel),lightMapUv:Xe&&g(M.lightMap.channel),bumpMapUv:we&&g(M.bumpMap.channel),normalMapUv:je&&g(M.normalMap.channel),displacementMapUv:E&&g(M.displacementMap.channel),emissiveMapUv:w&&g(M.emissiveMap.channel),metalnessMapUv:j&&g(M.metalnessMap.channel),roughnessMapUv:Z&&g(M.roughnessMap.channel),anisotropyMapUv:Le&&g(M.anisotropyMap.channel),clearcoatMapUv:ne&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:et&&g(M.sheenRoughnessMap.channel),specularMapUv:Ze&&g(M.specularMap.channel),specularColorMapUv:rt&&g(M.specularColorMap.channel),specularIntensityMapUv:ut&&g(M.specularIntensityMap.channel),transmissionMapUv:ye&&g(M.transmissionMap.channel),thicknessMapUv:L&&g(M.thicknessMap.channel),alphaMapUv:ae&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(je||K),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!X.attributes.uv&&(We||ae),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&xt.getTransfer(M.map.colorSpace)===Rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===br,flipSided:M.side===ii,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:tt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:tt&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=u.has(1),dt.vertexUv2s=u.has(2),dt.vertexUv3s=u.has(3),u.clear(),dt}function h(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const I in M.defines)y.push(I),y.push(M.defines[I]);return M.isRawShaderMaterial===!1&&(x(y,M),v(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function x(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function v(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.skinning&&a.enable(4),y.morphTargets&&a.enable(5),y.morphNormals&&a.enable(6),y.morphColors&&a.enable(7),y.premultipliedAlpha&&a.enable(8),y.shadowMapEnabled&&a.enable(9),y.useLegacyLights&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),M.push(a.mask)}function S(M){const y=_[M.type];let I;if(y){const U=lr[y];I=nR.clone(U.uniforms)}else I=M.uniforms;return I}function C(M,y){let I;for(let U=0,N=c.length;U<N;U++){const V=c[U];if(V.cacheKey===y){I=V,++I.usedTimes;break}}return I===void 0&&(I=new gL(n,y,M,s),c.push(I)),I}function A(M){if(--M.usedTimes===0){const y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:P}}function SL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ML(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Fv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,p,_,g,m){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=m),e++,h}function a(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(d,f,p,_,g,m){const h=o(d,f,p,_,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(d,f){t.length>1&&t.sort(d||ML),i.length>1&&i.sort(f||Fv),r.length>1&&r.sort(f||Fv)}function c(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function EL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new kv,n.set(i,[o])):r>=s.length?(o=new kv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function TL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new pt};break;case"SpotLight":t={position:new Y,direction:new Y,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[e.id]=t,t}}}function wL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let AL=0;function CL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function RL(n){const e=new TL,t=wL(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new Jt,o=new Jt;function a(u,c){let d=0,f=0,p=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,g=0,m=0,h=0,x=0,v=0,S=0,C=0,A=0,T=0,P=0;u.sort(CL);const M=c===!0?Math.PI:1;for(let I=0,U=u.length;I<U;I++){const N=u[I],V=N.color,X=N.intensity,$=N.distance,q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=V.r*X*M,f+=V.g*X*M,p+=V.b*X*M;else if(N.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(N.sh.coefficients[D],X);P++}else if(N.isDirectionalLight){const D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const H=N.shadow,b=t.get(N);b.shadowBias=H.bias,b.shadowNormalBias=H.normalBias,b.shadowRadius=H.radius,b.shadowMapSize=H.mapSize,i.directionalShadow[_]=b,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=N.shadow.matrix,v++}i.directional[_]=D,_++}else if(N.isSpotLight){const D=e.get(N);D.position.setFromMatrixPosition(N.matrixWorld),D.color.copy(V).multiplyScalar(X*M),D.distance=$,D.coneCos=Math.cos(N.angle),D.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),D.decay=N.decay,i.spot[m]=D;const H=N.shadow;if(N.map&&(i.spotLightMap[A]=N.map,A++,H.updateMatrices(N),N.castShadow&&T++),i.spotLightMatrix[m]=H.matrix,N.castShadow){const b=t.get(N);b.shadowBias=H.bias,b.shadowNormalBias=H.normalBias,b.shadowRadius=H.radius,b.shadowMapSize=H.mapSize,i.spotShadow[m]=b,i.spotShadowMap[m]=q,C++}m++}else if(N.isRectAreaLight){const D=e.get(N);D.color.copy(V).multiplyScalar(X),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),i.rectArea[h]=D,h++}else if(N.isPointLight){const D=e.get(N);if(D.color.copy(N.color).multiplyScalar(N.intensity*M),D.distance=N.distance,D.decay=N.decay,N.castShadow){const H=N.shadow,b=t.get(N);b.shadowBias=H.bias,b.shadowNormalBias=H.normalBias,b.shadowRadius=H.radius,b.shadowMapSize=H.mapSize,b.shadowCameraNear=H.camera.near,b.shadowCameraFar=H.camera.far,i.pointShadow[g]=b,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=N.shadow.matrix,S++}i.point[g]=D,g++}else if(N.isHemisphereLight){const D=e.get(N);D.skyColor.copy(N.color).multiplyScalar(X*M),D.groundColor.copy(N.groundColor).multiplyScalar(X*M),i.hemi[x]=D,x++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=p;const y=i.hash;(y.directionalLength!==_||y.pointLength!==g||y.spotLength!==m||y.rectAreaLength!==h||y.hemiLength!==x||y.numDirectionalShadows!==v||y.numPointShadows!==S||y.numSpotShadows!==C||y.numSpotMaps!==A||y.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=h,i.point.length=g,i.hemi.length=x,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,y.directionalLength=_,y.pointLength=g,y.spotLength=m,y.rectAreaLength=h,y.hemiLength=x,y.numDirectionalShadows=v,y.numPointShadows=S,y.numSpotShadows=C,y.numSpotMaps=A,y.numLightProbes=P,i.version=AL++)}function l(u,c){let d=0,f=0,p=0,_=0,g=0;const m=c.matrixWorldInverse;for(let h=0,x=u.length;h<x;h++){const v=u[h];if(v.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(v.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function zv(n){const e=new RL(n),t=[],i=[];function r(){t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(c){e.setup(t,c)}function l(c){e.setupView(t,c)}return{init:r,state:{lightsArray:t,shadowsArray:i,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bL(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new zv(n),e.set(r,[a])):s>=o.length?(a=new zv(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class PL extends zu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LL extends zu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NL=`uniform sampler2D shadow_pass;
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
}`;function IL(n,e,t){let i=new WM;const r=new ft,s=new ft,o=new mn,a=new PL({depthPacking:AC}),l=new LL,u={},c=t.maxTextureSize,d={[Is]:ii,[ii]:Is,[br]:br},f=new Us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:DL,fragmentShader:NL}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new jr;_.setAttribute("position",new er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Ir(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yM;let h=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=n.getRenderTarget(),y=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ws),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=h!==Tr&&this.type===Tr,V=h===Tr&&this.type!==Tr;for(let X=0,$=A.length;X<$;X++){const q=A[X],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const H=D.getFrameExtents();if(r.multiply(H),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/H.x),r.x=s.x*H.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/H.y),r.y=s.y*H.y,D.mapSize.y=s.y)),D.map===null||N===!0||V===!0){const te=this.type!==Tr?{minFilter:ki,magFilter:ki}:{};D.map!==null&&D.map.dispose(),D.map=new Po(r.x,r.y,te),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const b=D.getViewportCount();for(let te=0;te<b;te++){const me=D.getViewport(te);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),U.viewport(o),D.updateMatrices(q,te),i=D.getFrustum(),S(T,P,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===Tr&&x(D,P),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,I)};function x(A,T){const P=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Po(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,P,p,g,null)}function v(A,T,P,M){let y=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)y=I;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=y.uuid,N=T.uuid;let V=u[U];V===void 0&&(V={},u[U]=V);let X=V[N];X===void 0&&(X=y.clone(),V[N]=X,T.addEventListener("dispose",C)),y=X}if(y.visible=T.visible,y.wireframe=T.wireframe,M===Tr?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=n.properties.get(y);U.light=P}return y}function S(A,T,P,M,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Tr)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const N=e.update(A),V=A.material;if(Array.isArray(V)){const X=N.groups;for(let $=0,q=X.length;$<q;$++){const D=X[$],H=V[D.materialIndex];if(H&&H.visible){const b=v(A,H,M,y);A.onBeforeShadow(n,A,T,P,N,b,D),n.renderBufferDirect(P,null,N,b,A,D),A.onAfterShadow(n,A,T,P,N,b,D)}}}else if(V.visible){const X=v(A,V,M,y);A.onBeforeShadow(n,A,T,P,N,X,null),n.renderBufferDirect(P,null,N,X,A,null),A.onAfterShadow(n,A,T,P,N,X,null)}}const U=A.children;for(let N=0,V=U.length;N<V;N++)S(U[N],T,P,M,y)}function C(A){A.target.removeEventListener("dispose",C);for(const P in u){const M=u[P],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function UL(n){function e(){let L=!1;const Q=new mn;let ae=null;const ve=new mn(0,0,0,0);return{setMask:function(Me){ae!==Me&&!L&&(n.colorMask(Me,Me,Me,Me),ae=Me)},setLocked:function(Me){L=Me},setClear:function(Me,tt,lt,dt,Mt){Mt===!0&&(Me*=dt,tt*=dt,lt*=dt),Q.set(Me,tt,lt,dt),ve.equals(Q)===!1&&(n.clearColor(Me,tt,lt,dt),ve.copy(Q))},reset:function(){L=!1,ae=null,ve.set(-1,0,0,0)}}}function t(){let L=!1,Q=null,ae=null,ve=null;return{setTest:function(Me){Me?le(n.DEPTH_TEST):ie(n.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!L&&(n.depthMask(Me),Q=Me)},setFunc:function(Me){if(ae!==Me){switch(Me){case QA:n.depthFunc(n.NEVER);break;case JA:n.depthFunc(n.ALWAYS);break;case eC:n.depthFunc(n.LESS);break;case Gf:n.depthFunc(n.LEQUAL);break;case tC:n.depthFunc(n.EQUAL);break;case nC:n.depthFunc(n.GEQUAL);break;case iC:n.depthFunc(n.GREATER);break;case rC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=Me}},setLocked:function(Me){L=Me},setClear:function(Me){ve!==Me&&(n.clearDepth(Me),ve=Me)},reset:function(){L=!1,Q=null,ae=null,ve=null}}}function i(){let L=!1,Q=null,ae=null,ve=null,Me=null,tt=null,lt=null,dt=null,Mt=null;return{setTest:function(ct){L||(ct?le(n.STENCIL_TEST):ie(n.STENCIL_TEST))},setMask:function(ct){Q!==ct&&!L&&(n.stencilMask(ct),Q=ct)},setFunc:function(ct,Ue,Te){(ae!==ct||ve!==Ue||Me!==Te)&&(n.stencilFunc(ct,Ue,Te),ae=ct,ve=Ue,Me=Te)},setOp:function(ct,Ue,Te){(tt!==ct||lt!==Ue||dt!==Te)&&(n.stencilOp(ct,Ue,Te),tt=ct,lt=Ue,dt=Te)},setLocked:function(ct){L=ct},setClear:function(ct){Mt!==ct&&(n.clearStencil(ct),Mt=ct)},reset:function(){L=!1,Q=null,ae=null,ve=null,Me=null,tt=null,lt=null,dt=null,Mt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,x=null,v=null,S=null,C=null,A=new pt(0,0,0),T=0,P=!1,M=null,y=null,I=null,U=null,N=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=$>=2);let D=null,H={};const b=n.getParameter(n.SCISSOR_BOX),te=n.getParameter(n.VIEWPORT),me=new mn().fromArray(b),Ge=new mn().fromArray(te);function G(L,Q,ae,ve){const Me=new Uint8Array(4),tt=n.createTexture();n.bindTexture(L,tt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let lt=0;lt<ae;lt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,ve,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(Q+lt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return tt}const ee={};ee[n.TEXTURE_2D]=G(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=G(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=G(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=G(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),le(n.DEPTH_TEST),s.setFunc(Gf),we(!1),je(M0),le(n.CULL_FACE),ue(ws);function le(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ie(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function Ce(L,Q){return c[L]!==Q?(n.bindFramebuffer(L,Q),c[L]=Q,L===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=Q),L===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Pe(L,Q){let ae=f,ve=!1;if(L){ae=d.get(Q),ae===void 0&&(ae=[],d.set(Q,ae));const Me=L.textures;if(ae.length!==Me.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,lt=Me.length;tt<lt;tt++)ae[tt]=n.COLOR_ATTACHMENT0+tt;ae.length=Me.length,ve=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ve=!0);ve&&n.drawBuffers(ae)}function We(L){return p!==L?(n.useProgram(L),p=L,!0):!1}const F={[ro]:n.FUNC_ADD,[UA]:n.FUNC_SUBTRACT,[OA]:n.FUNC_REVERSE_SUBTRACT};F[FA]=n.MIN,F[kA]=n.MAX;const Oe={[zA]:n.ZERO,[BA]:n.ONE,[HA]:n.SRC_COLOR,[tm]:n.SRC_ALPHA,[YA]:n.SRC_ALPHA_SATURATE,[XA]:n.DST_COLOR,[GA]:n.DST_ALPHA,[VA]:n.ONE_MINUS_SRC_COLOR,[nm]:n.ONE_MINUS_SRC_ALPHA,[jA]:n.ONE_MINUS_DST_COLOR,[WA]:n.ONE_MINUS_DST_ALPHA,[qA]:n.CONSTANT_COLOR,[$A]:n.ONE_MINUS_CONSTANT_COLOR,[KA]:n.CONSTANT_ALPHA,[ZA]:n.ONE_MINUS_CONSTANT_ALPHA};function ue(L,Q,ae,ve,Me,tt,lt,dt,Mt,ct){if(L===ws){_===!0&&(ie(n.BLEND),_=!1);return}if(_===!1&&(le(n.BLEND),_=!0),L!==IA){if(L!==g||ct!==P){if((m!==ro||v!==ro)&&(n.blendEquation(n.FUNC_ADD),m=ro,v=ro),ct)switch(L){case yo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.ONE,n.ONE);break;case E0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case T0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case yo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case E0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case T0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}h=null,x=null,S=null,C=null,A.set(0,0,0),T=0,g=L,P=ct}return}Me=Me||Q,tt=tt||ae,lt=lt||ve,(Q!==m||Me!==v)&&(n.blendEquationSeparate(F[Q],F[Me]),m=Q,v=Me),(ae!==h||ve!==x||tt!==S||lt!==C)&&(n.blendFuncSeparate(Oe[ae],Oe[ve],Oe[tt],Oe[lt]),h=ae,x=ve,S=tt,C=lt),(dt.equals(A)===!1||Mt!==T)&&(n.blendColor(dt.r,dt.g,dt.b,Mt),A.copy(dt),T=Mt),g=L,P=!1}function Xe(L,Q){L.side===br?ie(n.CULL_FACE):le(n.CULL_FACE);let ae=L.side===ii;Q&&(ae=!ae),we(ae),L.blending===yo&&L.transparent===!1?ue(ws):ue(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),r.setMask(L.colorWrite);const ve=L.stencilWrite;o.setTest(ve),ve&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),w(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):ie(n.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){M!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),M=L)}function je(L){L!==LA?(le(n.CULL_FACE),L!==y&&(L===M0?n.cullFace(n.BACK):L===DA?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ie(n.CULL_FACE),y=L}function E(L){L!==I&&(X&&n.lineWidth(L),I=L)}function w(L,Q,ae){L?(le(n.POLYGON_OFFSET_FILL),(U!==Q||N!==ae)&&(n.polygonOffset(Q,ae),U=Q,N=ae)):ie(n.POLYGON_OFFSET_FILL)}function j(L){L?le(n.SCISSOR_TEST):ie(n.SCISSOR_TEST)}function Z(L){L===void 0&&(L=n.TEXTURE0+V-1),D!==L&&(n.activeTexture(L),D=L)}function K(L,Q,ae){ae===void 0&&(D===null?ae=n.TEXTURE0+V-1:ae=D);let ve=H[ae];ve===void 0&&(ve={type:void 0,texture:void 0},H[ae]=ve),(ve.type!==L||ve.texture!==Q)&&(D!==ae&&(n.activeTexture(ae),D=ae),n.bindTexture(L,Q||ee[L]),ve.type=L,ve.texture=Q)}function J(){const L=H[D];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Re(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(L){me.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),me.copy(L))}function Ze(L){Ge.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function rt(L,Q){let ae=l.get(Q);ae===void 0&&(ae=new WeakMap,l.set(Q,ae));let ve=ae.get(L);ve===void 0&&(ve=n.getUniformBlockIndex(Q,L.name),ae.set(L,ve))}function ut(L,Q){const ve=l.get(Q).get(L);a.get(Q)!==ve&&(n.uniformBlockBinding(Q,ve,L.__bindingPointIndex),a.set(Q,ve))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,H={},c={},d=new WeakMap,f=[],p=null,_=!1,g=null,m=null,h=null,x=null,v=null,S=null,C=null,A=new pt(0,0,0),T=0,P=!1,M=null,y=null,I=null,U=null,N=null,me.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:le,disable:ie,bindFramebuffer:Ce,drawBuffers:Pe,useProgram:We,setBlending:ue,setMaterial:Xe,setFlipSided:we,setCullFace:je,setLineWidth:E,setPolygonOffset:w,setScissorTest:j,activeTexture:Z,bindTexture:K,unbindTexture:J,compressedTexImage2D:Re,compressedTexImage3D:re,texImage2D:Se,texImage3D:Ne,updateUBOMapping:rt,uniformBlockBinding:ut,texStorage2D:De,texStorage3D:ge,texSubImage2D:pe,texSubImage3D:Le,compressedTexSubImage2D:ne,compressedTexSubImage3D:de,scissor:et,viewport:Ze,reset:ye}}function OL(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ft,c=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,w){return p?new OffscreenCanvas(E,w):$f("canvas")}function g(E,w,j){let Z=1;const K=je(E);if((K.width>j||K.height>j)&&(Z=j/Math.max(K.width,K.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(Z*K.width),Re=Math.floor(Z*K.height);d===void 0&&(d=_(J,Re));const re=w?_(J,Re):d;return re.width=J,re.height=Re,re.getContext("2d").drawImage(E,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+Re+")."),re}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==ki&&E.minFilter!==Zi}function h(E){n.generateMipmap(E)}function x(E,w,j,Z,K=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=w;if(w===n.RED&&(j===n.FLOAT&&(J=n.R32F),j===n.HALF_FLOAT&&(J=n.R16F),j===n.UNSIGNED_BYTE&&(J=n.R8)),w===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(J=n.R8UI),j===n.UNSIGNED_SHORT&&(J=n.R16UI),j===n.UNSIGNED_INT&&(J=n.R32UI),j===n.BYTE&&(J=n.R8I),j===n.SHORT&&(J=n.R16I),j===n.INT&&(J=n.R32I)),w===n.RG&&(j===n.FLOAT&&(J=n.RG32F),j===n.HALF_FLOAT&&(J=n.RG16F),j===n.UNSIGNED_BYTE&&(J=n.RG8)),w===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(J=n.RG8UI),j===n.UNSIGNED_SHORT&&(J=n.RG16UI),j===n.UNSIGNED_INT&&(J=n.RG32UI),j===n.BYTE&&(J=n.RG8I),j===n.SHORT&&(J=n.RG16I),j===n.INT&&(J=n.RG32I)),w===n.RGB&&j===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),w===n.RGBA){const Re=K?Xf:xt.getTransfer(Z);j===n.FLOAT&&(J=n.RGBA32F),j===n.HALF_FLOAT&&(J=n.RGBA16F),j===n.UNSIGNED_BYTE&&(J=Re===Rt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(E,w){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ki&&E.minFilter!==Zi?Math.log2(Math.max(w.width,w.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?w.mipmaps.length:1}function S(E){const w=E.target;w.removeEventListener("dispose",S),A(w),w.isVideoTexture&&c.delete(w)}function C(E){const w=E.target;w.removeEventListener("dispose",C),P(w)}function A(E){const w=i.get(E);if(w.__webglInit===void 0)return;const j=E.source,Z=f.get(j);if(Z){const K=Z[w.__cacheKey];K.usedTimes--,K.usedTimes===0&&T(E),Object.keys(Z).length===0&&f.delete(j)}i.remove(E)}function T(E){const w=i.get(E);n.deleteTexture(w.__webglTexture);const j=E.source,Z=f.get(j);delete Z[w.__cacheKey],o.memory.textures--}function P(E){const w=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let K=0;K<w.__webglFramebuffer[Z].length;K++)n.deleteFramebuffer(w.__webglFramebuffer[Z][K]);else n.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)n.deleteFramebuffer(w.__webglFramebuffer[Z]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=E.textures;for(let Z=0,K=j.length;Z<K;Z++){const J=i.get(j[Z]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(j[Z])}i.remove(E)}let M=0;function y(){M=0}function I(){const E=M;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),M+=1,E}function U(E){const w=[];return w.push(E.wrapS),w.push(E.wrapT),w.push(E.wrapR||0),w.push(E.magFilter),w.push(E.minFilter),w.push(E.anisotropy),w.push(E.internalFormat),w.push(E.format),w.push(E.type),w.push(E.generateMipmaps),w.push(E.premultiplyAlpha),w.push(E.flipY),w.push(E.unpackAlignment),w.push(E.colorSpace),w.join()}function N(E,w){const j=i.get(E);if(E.isVideoTexture&&Xe(E),E.isRenderTargetTexture===!1&&E.version>0&&j.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(j,E,w);return}}t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+w)}function V(E,w){const j=i.get(E);if(E.version>0&&j.__version!==E.version){me(j,E,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+w)}function X(E,w){const j=i.get(E);if(E.version>0&&j.__version!==E.version){me(j,E,w);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+w)}function $(E,w){const j=i.get(E);if(E.version>0&&j.__version!==E.version){Ge(j,E,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+w)}const q={[sm]:n.REPEAT,[co]:n.CLAMP_TO_EDGE,[om]:n.MIRRORED_REPEAT},D={[ki]:n.NEAREST,[pC]:n.NEAREST_MIPMAP_NEAREST,[sc]:n.NEAREST_MIPMAP_LINEAR,[Zi]:n.LINEAR,[lh]:n.LINEAR_MIPMAP_NEAREST,[fo]:n.LINEAR_MIPMAP_LINEAR},H={[bC]:n.NEVER,[UC]:n.ALWAYS,[PC]:n.LESS,[LM]:n.LEQUAL,[LC]:n.EQUAL,[IC]:n.GEQUAL,[DC]:n.GREATER,[NC]:n.NOTEQUAL};function b(E,w){if(w.type===ds&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zi||w.magFilter===lh||w.magFilter===sc||w.magFilter===fo||w.minFilter===Zi||w.minFilter===lh||w.minFilter===sc||w.minFilter===fo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,q[w.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,q[w.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,q[w.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,D[w.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,D[w.minFilter]),w.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,H[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ki||w.minFilter!==sc&&w.minFilter!==fo||w.type===ds&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function te(E,w){let j=!1;E.__webglInit===void 0&&(E.__webglInit=!0,w.addEventListener("dispose",S));const Z=w.source;let K=f.get(Z);K===void 0&&(K={},f.set(Z,K));const J=U(w);if(J!==E.__cacheKey){K[J]===void 0&&(K[J]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),K[J].usedTimes++;const Re=K[E.__cacheKey];Re!==void 0&&(K[E.__cacheKey].usedTimes--,Re.usedTimes===0&&T(w)),E.__cacheKey=J,E.__webglTexture=K[J].texture}return j}function me(E,w,j){let Z=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=n.TEXTURE_3D);const K=te(E,w),J=w.source;t.bindTexture(Z,E.__webglTexture,n.TEXTURE0+j);const Re=i.get(J);if(J.version!==Re.__version||K===!0){t.activeTexture(n.TEXTURE0+j);const re=xt.getPrimaries(xt.workingColorSpace),pe=w.colorSpace===os?null:xt.getPrimaries(w.colorSpace),Le=w.colorSpace===os||re===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ne=g(w.image,!1,r.maxTextureSize);ne=we(w,ne);const de=s.convert(w.format,w.colorSpace),De=s.convert(w.type);let ge=x(w.internalFormat,de,De,w.colorSpace,w.isVideoTexture);b(Z,w);let Se;const Ne=w.mipmaps,et=w.isVideoTexture!==!0&&ge!==PM,Ze=Re.__version===void 0||K===!0,rt=J.dataReady,ut=v(w,ne);if(w.isDepthTexture)ge=n.DEPTH_COMPONENT16,w.type===ds?ge=n.DEPTH_COMPONENT32F:w.type===Za?ge=n.DEPTH_COMPONENT24:w.type===Uu&&(ge=n.DEPTH24_STENCIL8),Ze&&(et?t.texStorage2D(n.TEXTURE_2D,1,ge,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,ge,ne.width,ne.height,0,de,De,null));else if(w.isDataTexture)if(Ne.length>0){et&&Ze&&t.texStorage2D(n.TEXTURE_2D,ut,ge,Ne[0].width,Ne[0].height);for(let ye=0,L=Ne.length;ye<L;ye++)Se=Ne[ye],et?rt&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Se.width,Se.height,de,De,Se.data):t.texImage2D(n.TEXTURE_2D,ye,ge,Se.width,Se.height,0,de,De,Se.data);w.generateMipmaps=!1}else et?(Ze&&t.texStorage2D(n.TEXTURE_2D,ut,ge,ne.width,ne.height),rt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,de,De,ne.data)):t.texImage2D(n.TEXTURE_2D,0,ge,ne.width,ne.height,0,de,De,ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,ge,Ne[0].width,Ne[0].height,ne.depth);for(let ye=0,L=Ne.length;ye<L;ye++)Se=Ne[ye],w.format!==hr?de!==null?et?rt&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,de,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ye,ge,Se.width,Se.height,ne.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?rt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ye,0,0,0,Se.width,Se.height,ne.depth,de,De,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ye,ge,Se.width,Se.height,ne.depth,0,de,De,Se.data)}else{et&&Ze&&t.texStorage2D(n.TEXTURE_2D,ut,ge,Ne[0].width,Ne[0].height);for(let ye=0,L=Ne.length;ye<L;ye++)Se=Ne[ye],w.format!==hr?de!==null?et?rt&&t.compressedTexSubImage2D(n.TEXTURE_2D,ye,0,0,Se.width,Se.height,de,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ye,ge,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?rt&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,Se.width,Se.height,de,De,Se.data):t.texImage2D(n.TEXTURE_2D,ye,ge,Se.width,Se.height,0,de,De,Se.data)}else if(w.isDataArrayTexture)et?(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ut,ge,ne.width,ne.height,ne.depth),rt&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(w.isData3DTexture)et?(Ze&&t.texStorage3D(n.TEXTURE_3D,ut,ge,ne.width,ne.height,ne.depth),rt&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(w.isFramebufferTexture){if(Ze)if(et)t.texStorage2D(n.TEXTURE_2D,ut,ge,ne.width,ne.height);else{let ye=ne.width,L=ne.height;for(let Q=0;Q<ut;Q++)t.texImage2D(n.TEXTURE_2D,Q,ge,ye,L,0,de,De,null),ye>>=1,L>>=1}}else if(Ne.length>0){if(et&&Ze){const ye=je(Ne[0]);t.texStorage2D(n.TEXTURE_2D,ut,ge,ye.width,ye.height)}for(let ye=0,L=Ne.length;ye<L;ye++)Se=Ne[ye],et?rt&&t.texSubImage2D(n.TEXTURE_2D,ye,0,0,de,De,Se):t.texImage2D(n.TEXTURE_2D,ye,ge,de,De,Se);w.generateMipmaps=!1}else if(et){if(Ze){const ye=je(ne);t.texStorage2D(n.TEXTURE_2D,ut,ge,ye.width,ye.height)}rt&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,De,ne)}else t.texImage2D(n.TEXTURE_2D,0,ge,de,De,ne);m(w)&&h(Z),Re.__version=J.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function Ge(E,w,j){if(w.image.length!==6)return;const Z=te(E,w),K=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+j);const J=i.get(K);if(K.version!==J.__version||Z===!0){t.activeTexture(n.TEXTURE0+j);const Re=xt.getPrimaries(xt.workingColorSpace),re=w.colorSpace===os?null:xt.getPrimaries(w.colorSpace),pe=w.colorSpace===os||Re===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Le=w.isCompressedTexture||w.image[0].isCompressedTexture,ne=w.image[0]&&w.image[0].isDataTexture,de=[];for(let L=0;L<6;L++)!Le&&!ne?de[L]=g(w.image[L],!0,r.maxCubemapSize):de[L]=ne?w.image[L].image:w.image[L],de[L]=we(w,de[L]);const De=de[0],ge=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),Ne=x(w.internalFormat,ge,Se,w.colorSpace),et=w.isVideoTexture!==!0,Ze=J.__version===void 0||Z===!0,rt=K.dataReady;let ut=v(w,De);b(n.TEXTURE_CUBE_MAP,w);let ye;if(Le){et&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ne,De.width,De.height);for(let L=0;L<6;L++){ye=de[L].mipmaps;for(let Q=0;Q<ye.length;Q++){const ae=ye[Q];w.format!==hr?ge!==null?et?rt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q,0,0,ae.width,ae.height,ge,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q,Ne,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q,0,0,ae.width,ae.height,ge,Se,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q,Ne,ae.width,ae.height,0,ge,Se,ae.data)}}}else{if(ye=w.mipmaps,et&&Ze){ye.length>0&&ut++;const L=je(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Ne,L.width,L.height)}for(let L=0;L<6;L++)if(ne){et?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,de[L].width,de[L].height,ge,Se,de[L].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ne,de[L].width,de[L].height,0,ge,Se,de[L].data);for(let Q=0;Q<ye.length;Q++){const ve=ye[Q].image[L].image;et?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q+1,0,0,ve.width,ve.height,ge,Se,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q+1,Ne,ve.width,ve.height,0,ge,Se,ve.data)}}else{et?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ge,Se,de[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,Ne,ge,Se,de[L]);for(let Q=0;Q<ye.length;Q++){const ae=ye[Q];et?rt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q+1,0,0,ge,Se,ae.image[L]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,Q+1,Ne,ge,Se,ae.image[L])}}}m(w)&&h(n.TEXTURE_CUBE_MAP),J.__version=K.version,w.onUpdate&&w.onUpdate(w)}E.__version=w.version}function G(E,w,j,Z,K,J){const Re=s.convert(j.format,j.colorSpace),re=s.convert(j.type),pe=x(j.internalFormat,Re,re,j.colorSpace);if(!i.get(w).__hasExternalTextures){const ne=Math.max(1,w.width>>J),de=Math.max(1,w.height>>J);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,J,pe,ne,de,w.depth,0,Re,re,null):t.texImage2D(K,J,pe,ne,de,0,Re,re,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,K,i.get(j).__webglTexture,0,Oe(w)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,K,i.get(j).__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(E,w,j){if(n.bindRenderbuffer(n.RENDERBUFFER,E),w.depthBuffer&&!w.stencilBuffer){let Z=n.DEPTH_COMPONENT24;if(j||ue(w)){const K=w.depthTexture;K&&K.isDepthTexture&&(K.type===ds?Z=n.DEPTH_COMPONENT32F:K.type===Za&&(Z=n.DEPTH_COMPONENT24));const J=Oe(w);ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,Z,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Z,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(w.depthBuffer&&w.stencilBuffer){const Z=Oe(w);j&&ue(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,w.width,w.height):ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{const Z=w.textures;for(let K=0;K<Z.length;K++){const J=Z[K],Re=s.convert(J.format,J.colorSpace),re=s.convert(J.type),pe=x(J.internalFormat,Re,re,J.colorSpace),Le=Oe(w);j&&ue(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,pe,w.width,w.height):ue(w)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Le,pe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,pe,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function le(E,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),N(w.depthTexture,0);const Z=i.get(w.depthTexture).__webglTexture,K=Oe(w);if(w.depthTexture.format===La)ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Au)ue(w)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ie(E){const w=i.get(E),j=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!w.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,E)}else if(j){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]=n.createRenderbuffer(),ee(w.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),ee(w.__webglDepthbuffer,E,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ce(E,w,j){const Z=i.get(E);w!==void 0&&G(Z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&ie(E)}function Pe(E){const w=E.texture,j=i.get(E),Z=i.get(w);E.addEventListener("dispose",C);const K=E.textures,J=E.isWebGLCubeRenderTarget===!0,Re=K.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=w.version,o.memory.textures++),J){j.__webglFramebuffer=[];for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[re]=[];for(let pe=0;pe<w.mipmaps.length;pe++)j.__webglFramebuffer[re][pe]=n.createFramebuffer()}else j.__webglFramebuffer[re]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let re=0;re<w.mipmaps.length;re++)j.__webglFramebuffer[re]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Re)for(let re=0,pe=K.length;re<pe;re++){const Le=i.get(K[re]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ue(E)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let re=0;re<K.length;re++){const pe=K[re];j.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[re]);const Le=s.convert(pe.format,pe.colorSpace),ne=s.convert(pe.type),de=x(pe.internalFormat,Le,ne,pe.colorSpace,E.isXRRenderTarget===!0),De=Oe(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,de,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,j.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(j.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),b(n.TEXTURE_CUBE_MAP,w);for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)G(j.__webglFramebuffer[re][pe],E,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,pe);else G(j.__webglFramebuffer[re],E,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(w)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let re=0,pe=K.length;re<pe;re++){const Le=K[re],ne=i.get(Le);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),b(n.TEXTURE_2D,Le),G(j.__webglFramebuffer,E,Le,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),m(Le)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(re=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(re,Z.__webglTexture),b(re,w),w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)G(j.__webglFramebuffer[pe],E,w,n.COLOR_ATTACHMENT0,re,pe);else G(j.__webglFramebuffer,E,w,n.COLOR_ATTACHMENT0,re,0);m(w)&&h(re),t.unbindTexture()}E.depthBuffer&&ie(E)}function We(E){const w=E.textures;for(let j=0,Z=w.length;j<Z;j++){const K=w[j];if(m(K)){const J=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Re=i.get(K).__webglTexture;t.bindTexture(J,Re),h(J),t.unbindTexture()}}}function F(E){if(E.samples>0&&ue(E)===!1){const w=E.textures,j=E.width,Z=E.height;let K=n.COLOR_BUFFER_BIT;const J=[],Re=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=i.get(E),pe=w.length>1;if(pe)for(let Le=0;Le<w.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let Le=0;Le<w.length;Le++){J.push(n.COLOR_ATTACHMENT0+Le),E.depthBuffer&&J.push(Re);const ne=re.__ignoreDepthValues!==void 0?re.__ignoreDepthValues:!1;if(ne===!1&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&re.__isTransmissionRenderTarget!==!0&&(K|=n.STENCIL_BUFFER_BIT)),pe&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,re.__webglColorRenderbuffer[Le]),ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Re]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Re])),pe){const de=i.get(w[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,de,0)}n.blitFramebuffer(0,0,j,Z,0,0,j,Z,K,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let Le=0;Le<w.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,re.__webglColorRenderbuffer[Le]);const ne=i.get(w[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}}function Oe(E){return Math.min(r.maxSamples,E.samples)}function ue(E){const w=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(E){const w=o.render.frame;c.get(E)!==w&&(c.set(E,w),E.update())}function we(E,w){const j=E.colorSpace,Z=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||j!==Hs&&j!==os&&(xt.getTransfer(j)===Rt?(Z!==hr||K!==Cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),w}function je(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(u.width=E.naturalWidth||E.width,u.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(u.width=E.displayWidth,u.height=E.displayHeight):(u.width=E.width,u.height=E.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=y,this.setTexture2D=N,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Ce,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=G,this.useMultisampledRTT=ue}function FL(n,e){function t(i,r=os){let s;const o=xt.getTransfer(r);if(i===Cs)return n.UNSIGNED_BYTE;if(i===wM)return n.UNSIGNED_SHORT_4_4_4_4;if(i===AM)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_C)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mC)return n.BYTE;if(i===gC)return n.SHORT;if(i===EM)return n.UNSIGNED_SHORT;if(i===TM)return n.INT;if(i===Za)return n.UNSIGNED_INT;if(i===ds)return n.FLOAT;if(i===Wf)return n.HALF_FLOAT;if(i===vC)return n.ALPHA;if(i===xC)return n.RGB;if(i===hr)return n.RGBA;if(i===yC)return n.LUMINANCE;if(i===SC)return n.LUMINANCE_ALPHA;if(i===La)return n.DEPTH_COMPONENT;if(i===Au)return n.DEPTH_STENCIL;if(i===MC)return n.RED;if(i===CM)return n.RED_INTEGER;if(i===EC)return n.RG;if(i===RM)return n.RG_INTEGER;if(i===bM)return n.RGBA_INTEGER;if(i===uh||i===ch||i===fh||i===dh)if(o===Rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===uh)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ch)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dh)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===uh)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ch)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fh)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dh)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===w0||i===A0||i===C0||i===R0)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===w0)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===A0)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===C0)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===R0)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===PM)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===b0||i===P0)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===b0)return o===Rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===P0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===L0||i===D0||i===N0||i===I0||i===U0||i===O0||i===F0||i===k0||i===z0||i===B0||i===H0||i===V0||i===G0||i===W0)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===L0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===D0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===N0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===I0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===U0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===O0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===F0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===k0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===z0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===B0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===H0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===V0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===G0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===W0)return o===Rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hh||i===X0||i===j0)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hh)return o===Rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===X0)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===j0)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===TC||i===Y0||i===q0||i===$0)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Y0)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===q0)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$0)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Uu?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class kL extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cc extends si{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zL={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,_=.005;u.inputState.pinching&&f>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zL)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const BL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HL=`
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

}`;class VL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ri,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new Us({vertexShader:BL,fragmentShader:HL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ir(new Md(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class GL extends il{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,_=null;const g=new VL,m=t.getContextAttributes();let h=null,x=null;const v=[],S=[],C=new ft;let A=null;const T=new Di;T.layers.enable(1),T.viewport=new mn;const P=new Di;P.layers.enable(2),P.viewport=new mn;const M=[T,P],y=new kL;y.layers.enable(1),y.layers.enable(2);let I=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=v[G];return ee===void 0&&(ee=new Bh,v[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=v[G];return ee===void 0&&(ee=new Bh,v[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=v[G];return ee===void 0&&(ee=new Bh,v[G]=ee),ee.getHandSpace()};function N(G){const ee=S.indexOf(G.inputSource);if(ee===-1)return;const le=v[ee];le!==void 0&&(le.update(G.inputSource,G.frame,u||o),le.dispatchEvent({type:G.type,data:G.inputSource}))}function V(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",X);for(let G=0;G<v.length;G++){const ee=S[G];ee!==null&&(S[G]=null,v[G].disconnect(ee))}I=null,U=null,g.reset(),e.setRenderTarget(h),p=null,f=null,d=null,r=null,x=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",V),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Po(p.framebufferWidth,p.framebufferHeight,{format:hr,type:Cs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,le=null,ie=null;m.depth&&(ie=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Au:La,le=m.stencil?Uu:Za);const Ce={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Po(f.textureWidth,f.textureHeight,{format:hr,type:Cs,depthTexture:new jM(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Pe=e.properties.get(x);Pe.__ignoreDepthValues=f.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(G){for(let ee=0;ee<G.removed.length;ee++){const le=G.removed[ee],ie=S.indexOf(le);ie>=0&&(S[ie]=null,v[ie].disconnect(le))}for(let ee=0;ee<G.added.length;ee++){const le=G.added[ee];let ie=S.indexOf(le);if(ie===-1){for(let Pe=0;Pe<v.length;Pe++)if(Pe>=S.length){S.push(le),ie=Pe;break}else if(S[Pe]===null){S[Pe]=le,ie=Pe;break}if(ie===-1)break}const Ce=v[ie];Ce&&Ce.connect(le)}}const $=new Y,q=new Y;function D(G,ee,le){$.setFromMatrixPosition(ee.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);const ie=$.distanceTo(q),Ce=ee.projectionMatrix.elements,Pe=le.projectionMatrix.elements,We=Ce[14]/(Ce[10]-1),F=Ce[14]/(Ce[10]+1),Oe=(Ce[9]+1)/Ce[5],ue=(Ce[9]-1)/Ce[5],Xe=(Ce[8]-1)/Ce[0],we=(Pe[8]+1)/Pe[0],je=We*Xe,E=We*we,w=ie/(-Xe+we),j=w*-Xe;ee.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(j),G.translateZ(w),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Z=We+w,K=F+w,J=je-j,Re=E+(ie-j),re=Oe*F/K*Z,pe=ue*F/K*Z;G.projectionMatrix.makePerspective(J,Re,re,pe,Z,K),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function H(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;g.texture!==null&&(G.near=g.depthNear,G.far=g.depthFar),y.near=P.near=T.near=G.near,y.far=P.far=T.far=G.far,(I!==y.near||U!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,U=y.far,T.near=I,T.far=U,P.near=I,P.far=U,T.updateProjectionMatrix(),P.updateProjectionMatrix(),G.updateProjectionMatrix());const ee=G.parent,le=y.cameras;H(y,ee);for(let ie=0;ie<le.length;ie++)H(le[ie],ee);le.length===2?D(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),b(G,y,ee)};function b(G,ee,le){le===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(le.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=am*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return g.texture!==null};let te=null;function me(G,ee){if(c=ee.getViewerPose(u||o),_=ee,c!==null){const le=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ie=!1;le.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let Pe=0;Pe<le.length;Pe++){const We=le[Pe];let F=null;if(p!==null)F=p.getViewport(We);else{const ue=d.getViewSubImage(f,We);F=ue.viewport,Pe===0&&(e.setRenderTargetTextures(x,ue.colorTexture,f.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(x))}let Oe=M[Pe];Oe===void 0&&(Oe=new Di,Oe.layers.enable(Pe),Oe.viewport=new mn,M[Pe]=Oe),Oe.matrix.fromArray(We.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(We.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(F.x,F.y,F.width,F.height),Pe===0&&(y.matrix.copy(Oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(Oe)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Pe=d.getDepthInformation(le[0]);Pe&&Pe.isValid&&Pe.texture&&g.init(e,Pe,r.renderState)}}for(let le=0;le<v.length;le++){const ie=S[le],Ce=v[le];ie!==null&&Ce!==void 0&&Ce.update(ie,ee,u||o)}g.render(e,y),te&&te(G,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),_=null}const Ge=new XM;Ge.setAnimationLoop(me),this.setAnimationLoop=function(G){te=G},this.dispose=function(){}}}const Ks=new Wr,WL=new Jt;function XL(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,HM(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,v,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,S)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,v):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ii&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ii&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),v=x.envMap,S=x.envMapRotation;if(v&&(m.envMap.value=v,Ks.copy(S),Ks.x*=-1,Ks.y*=-1,Ks.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ks.y*=-1,Ks.z*=-1),m.envMapRotation.value.setFromMatrix4(WL.makeRotationFromEuler(Ks)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const C=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*C,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ii&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jL(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const S=v.program;i.uniformBlockBinding(x,S)}function u(x,v){let S=r[x.id];S===void 0&&(_(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",m));const C=v.program;i.updateUBOMapping(x,C);const A=e.render.frame;s[x.id]!==A&&(f(x),s[x.id]=A)}function c(x){const v=d();x.__bindingPointIndex=v;const S=n.createBuffer(),C=x.__size,A=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,S),S}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const v=r[x.id],S=x.uniforms,C=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=P.length;M<y;M++){const I=P[M];if(p(I,A,M,C)===!0){const U=I.__offset,N=Array.isArray(I.value)?I.value:[I.value];let V=0;for(let X=0;X<N.length;X++){const $=N[X],q=g($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,U+V,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,V),V+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,v,S,C){const A=x.value,T=v+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function _(x){const v=x.uniforms;let S=0;const C=16;for(let T=0,P=v.length;T<P;T++){const M=Array.isArray(v[T])?v[T]:[v[T]];for(let y=0,I=M.length;y<I;y++){const U=M[y],N=Array.isArray(U.value)?U.value:[U.value];for(let V=0,X=N.length;V<X;V++){const $=N[V],q=g($),D=S%C;D!==0&&C-D<q.boundary&&(S+=C-D),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=q.storage}}}const A=S%C;return A>0&&(S+=C-A),x.__size=S,x.__cache={},this}function g(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class YL{constructor(e={}){const{canvas:t=FC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=or,this._useLegacyLights=!1,this.toneMapping=As,this.toneMappingExposure=1;const v=this;let S=!1,C=0,A=0,T=null,P=-1,M=null;const y=new mn,I=new mn;let U=null;const N=new pt(0);let V=0,X=t.width,$=t.height,q=1,D=null,H=null;const b=new mn(0,0,X,$),te=new mn(0,0,X,$);let me=!1;const Ge=new WM;let G=!1,ee=!1;const le=new Jt,ie=new ft,Ce=new Y,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return T===null?q:1}let F=i;function Oe(R,O){const B=t.getContext(R,O);return B!==null?B:null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dg}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ve,!1),F===null){const O="webgl2";if(F=Oe(O,R),F===null)throw Oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,Xe,we,je,E,w,j,Z,K,J,Re,re,pe,Le,ne,de,De,ge,Se,Ne,et,Ze,rt,ut;function ye(){ue=new tP(F),ue.init(),Xe=new q2(F,ue,e),Ze=new FL(F,ue),we=new UL(F),je=new rP(F),E=new SL,w=new OL(F,ue,we,E,Xe,Ze,je),j=new K2(v),Z=new eP(v),K=new uR(F),rt=new j2(F,K),J=new nP(F,K,je,rt),Re=new oP(F,J,K,je),Se=new sP(F,Xe,w),de=new $2(E),re=new yL(v,j,Z,ue,Xe,rt,de),pe=new XL(v,E),Le=new EL,ne=new bL(ue),ge=new X2(v,j,Z,we,Re,f,l),De=new IL(v,Re,Xe),ut=new jL(F,je,Xe,we),Ne=new Y2(F,ue,je),et=new iP(F,ue,je),je.programs=re.programs,v.capabilities=Xe,v.extensions=ue,v.properties=E,v.renderLists=Le,v.shadowMap=De,v.state=we,v.info=je}ye();const L=new GL(v,F);this.xr=L,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(X,$,!1))},this.getSize=function(R){return R.set(X,$)},this.setSize=function(R,O,B=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,$=O,t.width=Math.floor(R*q),t.height=Math.floor(O*q),B===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(X*q,$*q).floor()},this.setDrawingBufferSize=function(R,O,B){X=R,$=O,q=B,t.width=Math.floor(R*B),t.height=Math.floor(O*B),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(y)},this.getViewport=function(R){return R.copy(b)},this.setViewport=function(R,O,B,W){R.isVector4?b.set(R.x,R.y,R.z,R.w):b.set(R,O,B,W),we.viewport(y.copy(b).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(te)},this.setScissor=function(R,O,B,W){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,O,B,W),we.scissor(I.copy(te).multiplyScalar(q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(R){we.setScissorTest(me=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){H=R},this.getClearColor=function(R){return R.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(R=!0,O=!0,B=!0){let W=0;if(R){let z=!1;if(T!==null){const oe=T.texture.format;z=oe===bM||oe===RM||oe===CM}if(z){const oe=T.texture.type,he=oe===Cs||oe===Za||oe===EM||oe===Uu||oe===wM||oe===AM,be=ge.getClearColor(),ze=ge.getClearAlpha(),Ae=be.r,Ee=be.g,Fe=be.b;he?(p[0]=Ae,p[1]=Ee,p[2]=Fe,p[3]=ze,F.clearBufferuiv(F.COLOR,0,p)):(_[0]=Ae,_[1]=Ee,_[2]=Fe,_[3]=ze,F.clearBufferiv(F.COLOR,0,_))}else W|=F.COLOR_BUFFER_BIT}O&&(W|=F.DEPTH_BUFFER_BIT),B&&(W|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Le.dispose(),ne.dispose(),E.dispose(),j.dispose(),Z.dispose(),Re.dispose(),rt.dispose(),ut.dispose(),re.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ue),L.removeEventListener("sessionend",Te),Qe.stop()};function Q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=je.autoReset,O=De.enabled,B=De.autoUpdate,W=De.needsUpdate,z=De.type;ye(),je.autoReset=R,De.enabled=O,De.autoUpdate=B,De.needsUpdate=W,De.type=z}function ve(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Me(R){const O=R.target;O.removeEventListener("dispose",Me),tt(O)}function tt(R){lt(R),E.remove(R)}function lt(R){const O=E.get(R).programs;O!==void 0&&(O.forEach(function(B){re.releaseProgram(B)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,B,W,z,oe){O===null&&(O=Pe);const he=z.isMesh&&z.matrixWorld.determinant()<0,be=Lt(R,O,B,W,z);we.setMaterial(W,he);let ze=B.index,Ae=1;if(W.wireframe===!0){if(ze=J.getWireframeAttribute(B),ze===void 0)return;Ae=2}const Ee=B.drawRange,Fe=B.attributes.position;let At=Ee.start*Ae,yn=(Ee.start+Ee.count)*Ae;oe!==null&&(At=Math.max(At,oe.start*Ae),yn=Math.min(yn,(oe.start+oe.count)*Ae)),ze!==null?(At=Math.max(At,0),yn=Math.min(yn,ze.count)):Fe!=null&&(At=Math.max(At,0),yn=Math.min(yn,Fe.count));const Dt=yn-At;if(Dt<0||Dt===1/0)return;rt.setup(z,W,be,B,ze);let qt,_t=Ne;if(ze!==null&&(qt=K.get(ze),_t=et,_t.setIndex(qt)),z.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*We()),_t.setMode(F.LINES)):_t.setMode(F.TRIANGLES);else if(z.isLine){let Ve=W.linewidth;Ve===void 0&&(Ve=1),we.setLineWidth(Ve*We()),z.isLineSegments?_t.setMode(F.LINES):z.isLineLoop?_t.setMode(F.LINE_LOOP):_t.setMode(F.LINE_STRIP)}else z.isPoints?_t.setMode(F.POINTS):z.isSprite&&_t.setMode(F.TRIANGLES);if(z.isBatchedMesh)_t.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)_t.renderInstances(At,Dt,z.count);else if(B.isInstancedBufferGeometry){const Ve=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ai=Math.min(B.instanceCount,Ve);_t.renderInstances(At,Dt,Ai)}else _t.render(At,Dt)};function dt(R,O,B){R.transparent===!0&&R.side===br&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,qe(R,O,B),R.side=Is,R.needsUpdate=!0,qe(R,O,B),R.side=br):qe(R,O,B)}this.compile=function(R,O,B=null){B===null&&(B=R),m=ne.get(B),m.init(),x.push(m),B.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),R!==B&&R.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights);const W=new Set;return R.traverse(function(z){const oe=z.material;if(oe)if(Array.isArray(oe))for(let he=0;he<oe.length;he++){const be=oe[he];dt(be,B,z),W.add(be)}else dt(oe,B,z),W.add(oe)}),x.pop(),m=null,W},this.compileAsync=function(R,O,B=null){const W=this.compile(R,O,B);return new Promise(z=>{function oe(){if(W.forEach(function(he){E.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){z(R);return}setTimeout(oe,10)}ue.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Mt=null;function ct(R){Mt&&Mt(R)}function Ue(){Qe.stop()}function Te(){Qe.start()}const Qe=new XM;Qe.setAnimationLoop(ct),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(R){Mt=R,L.setAnimationLoop(R),R===null?Qe.stop():Qe.start()},L.addEventListener("sessionstart",Ue),L.addEventListener("sessionend",Te),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,O,T),m=ne.get(R,x.length),m.init(),x.push(m),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ge.setFromProjectionMatrix(le),ee=this.localClippingEnabled,G=de.init(this.clippingPlanes,ee),g=Le.get(R,h.length),g.init(),h.push(g),ce(R,O,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(D,H),this.info.render.frame++,G===!0&&de.beginShadows();const B=m.state.shadowsArray;if(De.render(B,R,O),G===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1)&&ge.render(g,R),m.setupLights(v._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let z=0,oe=W.length;z<oe;z++){const he=W[z];He(g,R,he,he.viewport)}}else He(g,R,O);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),R.isScene===!0&&R.onAfterRender(v,R,O),rt.resetDefaultState(),P=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function ce(R,O,B,W){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)B=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ge.intersectsSprite(R)){W&&Ce.setFromMatrixPosition(R.matrixWorld).applyMatrix4(le);const he=Re.update(R),be=R.material;be.visible&&g.push(R,he,be,B,Ce.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ge.intersectsObject(R))){const he=Re.update(R),be=R.material;if(W&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ce.copy(R.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ce.copy(he.boundingSphere.center)),Ce.applyMatrix4(R.matrixWorld).applyMatrix4(le)),Array.isArray(be)){const ze=he.groups;for(let Ae=0,Ee=ze.length;Ae<Ee;Ae++){const Fe=ze[Ae],At=be[Fe.materialIndex];At&&At.visible&&g.push(R,he,At,B,Ce.z,Fe)}}else be.visible&&g.push(R,he,be,B,Ce.z,null)}}const oe=R.children;for(let he=0,be=oe.length;he<be;he++)ce(oe[he],O,B,W)}function He(R,O,B,W){const z=R.opaque,oe=R.transmissive,he=R.transparent;m.setupLightsView(B),G===!0&&de.setGlobalState(v.clippingPlanes,B),oe.length>0&&Ie(z,oe,O,B),W&&we.viewport(y.copy(W)),z.length>0&&Be(z,O,B),oe.length>0&&Be(oe,O,B),he.length>0&&Be(he,O,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ie(R,O,B,W){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget===null){m.state.transmissionRenderTarget=new Po(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?Wf:Cs,minFilter:fo,samples:4,stencilBuffer:s});const Ae=E.get(m.state.transmissionRenderTarget);Ae.__isTransmissionRenderTarget=!0}const oe=m.state.transmissionRenderTarget;v.getDrawingBufferSize(ie),oe.setSize(ie.x,ie.y);const he=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(N),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear();const be=v.toneMapping;v.toneMapping=As,Be(R,B,W),w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe);let ze=!1;for(let Ae=0,Ee=O.length;Ae<Ee;Ae++){const Fe=O[Ae],At=Fe.object,yn=Fe.geometry,Dt=Fe.material,qt=Fe.group;if(Dt.side===br&&At.layers.test(W.layers)){const _t=Dt.side;Dt.side=ii,Dt.needsUpdate=!0,Wt(At,B,W,yn,Dt,qt),Dt.side=_t,Dt.needsUpdate=!0,ze=!0}}ze===!0&&(w.updateMultisampleRenderTarget(oe),w.updateRenderTargetMipmap(oe)),v.setRenderTarget(he),v.setClearColor(N,V),v.toneMapping=be}function Be(R,O,B){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,oe=R.length;z<oe;z++){const he=R[z],be=he.object,ze=he.geometry,Ae=W===null?he.material:W,Ee=he.group;be.layers.test(B.layers)&&Wt(be,O,B,ze,Ae,Ee)}}function Wt(R,O,B,W,z,oe){R.onBeforeRender(v,O,B,W,z,oe),R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(v,O,B,W,R,oe),z.transparent===!0&&z.side===br&&z.forceSinglePass===!1?(z.side=ii,z.needsUpdate=!0,v.renderBufferDirect(B,O,W,z,R,oe),z.side=Is,z.needsUpdate=!0,v.renderBufferDirect(B,O,W,z,R,oe),z.side=br):v.renderBufferDirect(B,O,W,z,R,oe),R.onAfterRender(v,O,B,W,z,oe)}function qe(R,O,B){O.isScene!==!0&&(O=Pe);const W=E.get(R),z=m.state.lights,oe=m.state.shadowsArray,he=z.state.version,be=re.getParameters(R,z.state,oe,O,B),ze=re.getProgramCacheKey(be);let Ae=W.programs;W.environment=R.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(R.isMeshStandardMaterial?Z:j).get(R.envMap||W.environment),W.envMapRotation=W.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,Ae===void 0&&(R.addEventListener("dispose",Me),Ae=new Map,W.programs=Ae);let Ee=Ae.get(ze);if(Ee!==void 0){if(W.currentProgram===Ee&&W.lightsStateVersion===he)return en(R,be),Ee}else be.uniforms=re.getUniforms(R),R.onBuild(B,be,v),R.onBeforeCompile(be,v),Ee=re.acquireProgram(be,ze),Ae.set(ze,Ee),W.uniforms=be.uniforms;const Fe=W.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Fe.clippingPlanes=de.uniform),en(R,be),W.needsLights=gt(R),W.lightsStateVersion=he,W.needsLights&&(Fe.ambientLightColor.value=z.state.ambient,Fe.lightProbe.value=z.state.probe,Fe.directionalLights.value=z.state.directional,Fe.directionalLightShadows.value=z.state.directionalShadow,Fe.spotLights.value=z.state.spot,Fe.spotLightShadows.value=z.state.spotShadow,Fe.rectAreaLights.value=z.state.rectArea,Fe.ltc_1.value=z.state.rectAreaLTC1,Fe.ltc_2.value=z.state.rectAreaLTC2,Fe.pointLights.value=z.state.point,Fe.pointLightShadows.value=z.state.pointShadow,Fe.hemisphereLights.value=z.state.hemi,Fe.directionalShadowMap.value=z.state.directionalShadowMap,Fe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Fe.spotShadowMap.value=z.state.spotShadowMap,Fe.spotLightMatrix.value=z.state.spotLightMatrix,Fe.spotLightMap.value=z.state.spotLightMap,Fe.pointShadowMap.value=z.state.pointShadowMap,Fe.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Ee,W.uniformsList=null,Ee}function Pt(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=rf.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function en(R,O){const B=E.get(R);B.outputColorSpace=O.outputColorSpace,B.batching=O.batching,B.instancing=O.instancing,B.instancingColor=O.instancingColor,B.instancingMorph=O.instancingMorph,B.skinning=O.skinning,B.morphTargets=O.morphTargets,B.morphNormals=O.morphNormals,B.morphColors=O.morphColors,B.morphTargetsCount=O.morphTargetsCount,B.numClippingPlanes=O.numClippingPlanes,B.numIntersection=O.numClipIntersection,B.vertexAlphas=O.vertexAlphas,B.vertexTangents=O.vertexTangents,B.toneMapping=O.toneMapping}function Lt(R,O,B,W,z){O.isScene!==!0&&(O=Pe),w.resetTextureUnits();const oe=O.fog,he=W.isMeshStandardMaterial?O.environment:null,be=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hs,ze=(W.isMeshStandardMaterial?Z:j).get(W.envMap||he),Ae=W.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ee=!!B.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Fe=!!B.morphAttributes.position,At=!!B.morphAttributes.normal,yn=!!B.morphAttributes.color;let Dt=As;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Dt=v.toneMapping);const qt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,_t=qt!==void 0?qt.length:0,Ve=E.get(W),Ai=m.state.lights;if(G===!0&&(ee===!0||R!==M)){const Ci=R===M&&W.id===P;de.setState(W,R,Ci)}let Nt=!1;W.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ai.state.version||Ve.outputColorSpace!==be||z.isBatchedMesh&&Ve.batching===!1||!z.isBatchedMesh&&Ve.batching===!0||z.isInstancedMesh&&Ve.instancing===!1||!z.isInstancedMesh&&Ve.instancing===!0||z.isSkinnedMesh&&Ve.skinning===!1||!z.isSkinnedMesh&&Ve.skinning===!0||z.isInstancedMesh&&Ve.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ve.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ve.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ve.instancingMorph===!1&&z.morphTexture!==null||Ve.envMap!==ze||W.fog===!0&&Ve.fog!==oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==de.numPlanes||Ve.numIntersection!==de.numIntersection)||Ve.vertexAlphas!==Ae||Ve.vertexTangents!==Ee||Ve.morphTargets!==Fe||Ve.morphNormals!==At||Ve.morphColors!==yn||Ve.toneMapping!==Dt||Ve.morphTargetsCount!==_t)&&(Nt=!0):(Nt=!0,Ve.__version=W.version);let Vs=Ve.currentProgram;Nt===!0&&(Vs=qe(W,O,z));let Wg=!1,sl=!1,wd=!1;const Sn=Vs.getUniforms(),Yr=Ve.uniforms;if(we.useProgram(Vs.program)&&(Wg=!0,sl=!0,wd=!0),W.id!==P&&(P=W.id,sl=!0),Wg||M!==R){Sn.setValue(F,"projectionMatrix",R.projectionMatrix),Sn.setValue(F,"viewMatrix",R.matrixWorldInverse);const Ci=Sn.map.cameraPosition;Ci!==void 0&&Ci.setValue(F,Ce.setFromMatrixPosition(R.matrixWorld)),Xe.logarithmicDepthBuffer&&Sn.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Sn.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,sl=!0,wd=!0)}if(z.isSkinnedMesh){Sn.setOptional(F,z,"bindMatrix"),Sn.setOptional(F,z,"bindMatrixInverse");const Ci=z.skeleton;Ci&&(Ci.boneTexture===null&&Ci.computeBoneTexture(),Sn.setValue(F,"boneTexture",Ci.boneTexture,w))}z.isBatchedMesh&&(Sn.setOptional(F,z,"batchingTexture"),Sn.setValue(F,"batchingTexture",z._matricesTexture,w));const Ad=B.morphAttributes;if((Ad.position!==void 0||Ad.normal!==void 0||Ad.color!==void 0)&&Se.update(z,B,Vs),(sl||Ve.receiveShadow!==z.receiveShadow)&&(Ve.receiveShadow=z.receiveShadow,Sn.setValue(F,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Yr.envMap.value=ze,Yr.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Yr.envMapIntensity.value=O.environmentIntensity),sl&&(Sn.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&Et(Yr,wd),oe&&W.fog===!0&&pe.refreshFogUniforms(Yr,oe),pe.refreshMaterialUniforms(Yr,W,q,$,m.state.transmissionRenderTarget),rf.upload(F,Pt(Ve),Yr,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rf.upload(F,Pt(Ve),Yr,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Sn.setValue(F,"center",z.center),Sn.setValue(F,"modelViewMatrix",z.modelViewMatrix),Sn.setValue(F,"normalMatrix",z.normalMatrix),Sn.setValue(F,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ci=W.uniformsGroups;for(let Cd=0,T1=Ci.length;Cd<T1;Cd++){const Xg=Ci[Cd];ut.update(Xg,Vs),ut.bind(Xg,Vs)}}return Vs}function Et(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function gt(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(R,O,B){E.get(R.texture).__webglTexture=O,E.get(R.depthTexture).__webglTexture=B;const W=E.get(R);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=B===void 0,W.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const B=E.get(R);B.__webglFramebuffer=O,B.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,B=0){T=R,C=O,A=B;let W=!0,z=null,oe=!1,he=!1;if(R){const ze=E.get(R);ze.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(F.FRAMEBUFFER,null),W=!1):ze.__webglFramebuffer===void 0?w.setupRenderTarget(R):ze.__hasExternalTextures&&w.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);const Ae=R.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const Ee=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ee[O])?z=Ee[O][B]:z=Ee[O],oe=!0):R.samples>0&&w.useMultisampledRTT(R)===!1?z=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Ee)?z=Ee[B]:z=Ee,y.copy(R.viewport),I.copy(R.scissor),U=R.scissorTest}else y.copy(b).multiplyScalar(q).floor(),I.copy(te).multiplyScalar(q).floor(),U=me;if(we.bindFramebuffer(F.FRAMEBUFFER,z)&&W&&we.drawBuffers(R,z),we.viewport(y),we.scissor(I),we.setScissorTest(U),oe){const ze=E.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ze.__webglTexture,B)}else if(he){const ze=E.get(R.texture),Ae=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ze.__webglTexture,B||0,Ae)}P=-1},this.readRenderTargetPixels=function(R,O,B,W,z,oe,he){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&he!==void 0&&(be=be[he]),be){we.bindFramebuffer(F.FRAMEBUFFER,be);try{const ze=R.texture,Ae=ze.format,Ee=ze.type;if(Ae!==hr&&Ze.convert(Ae)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ee===Wf&&(ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float"));if(Ee!==Cs&&Ze.convert(Ee)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&Ee!==ds&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-W&&B>=0&&B<=R.height-z&&F.readPixels(O,B,W,z,Ze.convert(Ae),Ze.convert(Ee),oe)}finally{const ze=T!==null?E.get(T).__webglFramebuffer:null;we.bindFramebuffer(F.FRAMEBUFFER,ze)}}},this.copyFramebufferToTexture=function(R,O,B=0){const W=Math.pow(2,-B),z=Math.floor(O.image.width*W),oe=Math.floor(O.image.height*W);w.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,B,0,0,R.x,R.y,z,oe),we.unbindTexture()},this.copyTextureToTexture=function(R,O,B,W=0){const z=O.image.width,oe=O.image.height,he=Ze.convert(B.format),be=Ze.convert(B.type);w.setTexture2D(B,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,W,R.x,R.y,z,oe,he,be,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,W,R.x,R.y,O.mipmaps[0].width,O.mipmaps[0].height,he,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,W,R.x,R.y,he,be,O.image),W===0&&B.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(R,O,B,W,z=0){const oe=Math.round(R.max.x-R.min.x),he=Math.round(R.max.y-R.min.y),be=R.max.z-R.min.z+1,ze=Ze.convert(W.format),Ae=Ze.convert(W.type);let Ee;if(W.isData3DTexture)w.setTexture3D(W,0),Ee=F.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)w.setTexture2DArray(W,0),Ee=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),At=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),Dt=F.getParameter(F.UNPACK_SKIP_ROWS),qt=F.getParameter(F.UNPACK_SKIP_IMAGES),_t=B.isCompressedTexture?B.mipmaps[z]:B.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,_t.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_t.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,R.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,R.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,R.min.z),B.isDataTexture||B.isData3DTexture?F.texSubImage3D(Ee,z,O.x,O.y,O.z,oe,he,be,ze,Ae,_t.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(Ee,z,O.x,O.y,O.z,oe,he,be,ze,_t.data):F.texSubImage3D(Ee,z,O.x,O.y,O.z,oe,he,be,ze,Ae,_t),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,At),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,qt),z===0&&W.generateMipmaps&&F.generateMipmap(Ee),we.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?w.setTextureCube(R,0):R.isData3DTexture?w.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?w.setTexture2DArray(R,0):w.setTexture2D(R,0),we.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,we.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ng?"display-p3":"srgb",t.unpackColorSpace=xt.workingColorSpace===yd?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Ug{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(e),this.density=t}clone(){return new Ug(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class qL extends si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class QM extends zu{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bv=new Jt,um=new UM,Rc=new Sd,bc=new Y;class $L extends si{constructor(e=new jr,t=new QM){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rc.copy(i.boundingSphere),Rc.applyMatrix4(r),Rc.radius+=s,e.ray.intersectsSphere(Rc)===!1)return;Bv.copy(r).invert(),um.copy(e.ray).applyMatrix4(Bv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p;_<g;_++){const m=u.getX(_);bc.fromBufferAttribute(d,m),Hv(bc,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,g=p;_<g;_++)bc.fromBufferAttribute(d,_),Hv(bc,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Hv(n,e,t,i,r,s,o){const a=um.distanceSqToPoint(n);if(a<t){const l=new Y;um.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class KL{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vv();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vv(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dg);const ZL=()=>{const n=ke.useRef(null),e=ke.useRef(null),t=ke.useRef(null),{isDarkMode:i,accentColor:r,setAccentColor:s}=vM(),o=ke.useRef(null),a=ke.useRef(null);return ke.useEffect(()=>{o.current&&(o.current.color.setHex(8947848),o.current.blending=i?Vf:yo,o.current.opacity=i?.4:.8,a.current&&a.current.fog.color.setHex(i?328965:16250871))},[i]),ke.useEffect(()=>{const l=mt.context(()=>{mt.to(".hero-image-container",{y:-15,duration:3,yoyo:!0,repeat:-1,ease:"sine.inOut"}),mt.from(".hero-element",{y:40,opacity:0,duration:1.5,stagger:.15,ease:"power4.out",delay:.5})},e);if(!t.current)return;const u=new qL;a.current=u,u.fog=new Ug(328965,.002);const c=new Di(75,window.innerWidth/window.innerHeight,1,1e3);c.position.z=200,c.position.y=50;const d=new YL({canvas:t.current,alpha:!0,antialias:!0});d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=new jr,p=3e3,_=new Float32Array(p*3);for(let y=0;y<p;y++){const I=(Math.random()-.5)*600,U=(Math.random()-.5)*600,N=Math.sin(I*.02)*20+Math.cos(U*.02)*20;_[y*3]=I,_[y*3+1]=N,_[y*3+2]=U}f.setAttribute("position",new er(_,3));const g=new QM({size:1.5,color:8947848,transparent:!0,opacity:.4,blending:Vf});o.current=g;const m=new $L(f,g);u.add(m);let h=0,x=0;const v=window.innerWidth/2,S=window.innerHeight/2,C=y=>{h=(y.clientX-v)*.05,x=(y.clientY-S)*.05};document.addEventListener("mousemove",C);const A=new KL;let T;const P=()=>{const y=A.getElapsedTime(),I=f.attributes.position.array;for(let U=0;U<p;U++){const N=I[U*3],V=I[U*3+2];I[U*3+1]=Math.sin((N+y*10)*.02)*15+Math.cos((V+y*8)*.02)*15}f.attributes.position.needsUpdate=!0,c.position.x+=(h-c.position.x)*.02,c.position.y+=(-x+50-c.position.y)*.02,c.lookAt(u.position),d.render(u,c),T=requestAnimationFrame(P)};P();const M=()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",M),()=>{l.revert(),document.removeEventListener("mousemove",C),window.removeEventListener("resize",M),cancelAnimationFrame(T),d.dispose(),f.dispose(),g.dispose()}},[]),k.jsxs("section",{id:"home",ref:n,className:"relative w-full h-screen flex items-center justify-center overflow-hidden bg-darkBg transition-theme",children:[k.jsx("canvas",{ref:t,className:"absolute inset-0 z-0 pointer-events-none transition-theme"}),k.jsxs("div",{ref:e,className:"relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20 md:mt-16",children:[k.jsxs("div",{className:"hero-element hero-image-container relative group mb-8 md:mb-12 mt-10 md:mt-0 flex flex-col items-center",children:[k.jsx("div",{className:"absolute inset-0 rounded-full blur-xl opacity-40 group-hover:opacity-80 group-hover:blur-2xl animate-pulse transition-all duration-700 pointer-events-none",style:{backgroundColor:"var(--accent-color)"}}),k.jsx("div",{className:"p-[3px] rounded-full relative z-10 group-hover:scale-[1.03] transition-transform duration-500",style:{backgroundColor:"var(--accent-color)",boxShadow:"0 0 35px var(--accent-color)"},children:k.jsx("img",{src:xM,alt:"Pranav Sinha",className:"w-32 h-32 md:w-44 md:h-44 rounded-full object-cover border-[6px] border-surface bg-surface shadow-black/50"})}),k.jsxs("div",{className:"absolute -right-2 bottom-0 md:-right-6 md:bottom-2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50",children:[k.jsx("span",{className:"text-[9px] text-textMain uppercase tracking-widest font-bold bg-darkBg/80 backdrop-blur-md px-2 py-1 rounded-md border border-borderLight shadow-lg whitespace-nowrap hidden sm:block",children:"Accent"}),k.jsx("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-surface shadow-xl cursor-pointer relative ring-2 ring-borderLight hover:ring-accent transition-all",title:"Change Theme Accent",children:k.jsx("input",{type:"color",value:r,onChange:l=>s(l.target.value),className:"absolute inset-[-25%] w-[150%] h-[150%] cursor-pointer p-0 m-0 border-none outline-none bg-transparent"})})]})]}),k.jsx("span",{className:"hero-element text-sm md:text-md uppercase tracking-[0.3em] text-textMuted mb-6 font-medium",children:"Portfolio"}),k.jsx("h1",{className:"hero-element text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-textMain leading-[0.9] mb-8 transition-theme",children:"Pranav Sinha"}),k.jsx("h2",{className:"hero-element text-xl md:text-2xl text-textMuted font-normal max-w-2xl leading-relaxed mb-12 transition-theme",children:"Aspiring Software Developer engineering sophisticated digital experiences across the full stack."}),k.jsxs("div",{className:"hero-element flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto",children:[k.jsx("a",{href:"#projects",className:"w-full sm:w-auto px-8 py-4 bg-textMain text-darkBg text-sm font-bold tracking-widest uppercase hover:bg-textMuted transition-theme duration-300",children:"Selected Works"}),k.jsx("a",{href:"#contact",className:"w-full sm:w-auto px-8 py-4 border border-borderMedium text-textMain text-sm font-bold tracking-widest uppercase hover:bg-overlay transition-theme duration-300",children:"Contact Me"})]})]})]})};function QL(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function JL(n,e,t){return e&&QL(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gn,sf,mi,hs,ps,Na,JM,no,jl,e1,Ur,Yi,t1,n1=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},i1=1,Sa=[],it=[],_r=[],Yl=Date.now,cm=function(e,t){return t},eD=function(){var e=jl.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,it),r.push.apply(r,_r),it=i,_r=r,cm=function(o,a){return t[o](a)}},Rs=function(e,t){return~_r.indexOf(e)&&_r[_r.indexOf(e)+1][t]},ql=function(e){return!!~e1.indexOf(e)},In=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Nn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Pc="scrollLeft",Lc="scrollTop",fm=function(){return Ur&&Ur.isPressed||it.cache++},Kf=function(e,t){var i=function r(s){if(s||s===0){i1&&(mi.history.scrollRestoration="manual");var o=Ur&&Ur.isPressed;s=r.v=Math.round(s)||(Ur&&Ur.iOS?1:0),e(s),r.cacheID=it.cache,o&&cm("ss",s)}else(t||it.cache!==r.cacheID||cm("ref"))&&(r.cacheID=it.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Hn={s:Pc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kf(function(n){return arguments.length?mi.scrollTo(n,rn.sc()):mi.pageXOffset||hs[Pc]||ps[Pc]||Na[Pc]||0})},rn={s:Lc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Hn,sc:Kf(function(n){return arguments.length?mi.scrollTo(Hn.sc(),n):mi.pageYOffset||hs[Lc]||ps[Lc]||Na[Lc]||0})},jn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tD=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},Os=function(e,t){var i=t.s,r=t.sc;ql(e)&&(e=hs.scrollingElement||ps);var s=it.indexOf(e),o=r===rn.sc?1:2;!~s&&(s=it.push(e)-1),it[s+o]||In(e,"scroll",fm);var a=it[s+o],l=a||(it[s+o]=Kf(Rs(e,i),!0)||(ql(e)?r:Kf(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},dm=function(e,t,i){var r=e,s=e,o=Yl(),a=o,l=t||50,u=Math.max(500,l*3),c=function(_,g){var m=Yl();g||m-o>l?(s=r,r=_,a=o,o=m):i?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=i?0:r,a=o=0},f=function(_){var g=a,m=s,h=Yl();return(_||_===0)&&_!==r&&c(_),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:d,getVelocity:f}},yl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Gv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},r1=function(){jl=gn.core.globals().ScrollTrigger,jl&&jl.core&&eD()},s1=function(e){return gn=e||n1(),!sf&&gn&&typeof document<"u"&&document.body&&(mi=window,hs=document,ps=hs.documentElement,Na=hs.body,e1=[mi,hs,ps,Na],gn.utils.clamp,t1=gn.core.context||function(){},no="onpointerenter"in Na?"pointer":"mouse",JM=Yt.isTouch=mi.matchMedia&&mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yi=Yt.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return i1=0},500),r1(),sf=1),sf};Hn.op=rn;it.cache=0;var Yt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){sf||s1(gn)||console.warn("Please gsap.registerPlugin(Observer)"),jl||r1();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,d=i.onStop,f=i.onStopDelay,p=i.ignore,_=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,x=i.onDrag,v=i.onPress,S=i.onRelease,C=i.onRight,A=i.onLeft,T=i.onUp,P=i.onDown,M=i.onChangeX,y=i.onChangeY,I=i.onChange,U=i.onToggleX,N=i.onToggleY,V=i.onHover,X=i.onHoverEnd,$=i.onMove,q=i.ignoreCheck,D=i.isNormalizer,H=i.onGestureStart,b=i.onGestureEnd,te=i.onWheel,me=i.onEnable,Ge=i.onDisable,G=i.onClick,ee=i.scrollSpeed,le=i.capture,ie=i.allowClicks,Ce=i.lockAxis,Pe=i.onLockAxis;this.target=a=jn(a)||ps,this.vars=i,p&&(p=gn.utils.toArray(p)),r=r||1e-9,s=s||0,_=_||1,ee=ee||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(mi.getComputedStyle(Na).lineHeight)||22);var We,F,Oe,ue,Xe,we,je,E=this,w=0,j=0,Z=i.passive||!c&&i.passive!==!1,K=Os(a,Hn),J=Os(a,rn),Re=K(),re=J(),pe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Yi[0]==="pointerdown",Le=ql(a),ne=a.ownerDocument||hs,de=[0,0,0],De=[0,0,0],ge=0,Se=function(){return ge=Yl()},Ne=function(Te,Qe){return(E.event=Te)&&p&&tD(Te.target,p)||Qe&&pe&&Te.pointerType!=="touch"||q&&q(Te,Qe)},et=function(){E._vx.reset(),E._vy.reset(),F.pause(),d&&d(E)},Ze=function(){var Te=E.deltaX=Gv(de),Qe=E.deltaY=Gv(De),ce=Math.abs(Te)>=r,He=Math.abs(Qe)>=r;I&&(ce||He)&&I(E,Te,Qe,de,De),ce&&(C&&E.deltaX>0&&C(E),A&&E.deltaX<0&&A(E),M&&M(E),U&&E.deltaX<0!=w<0&&U(E),w=E.deltaX,de[0]=de[1]=de[2]=0),He&&(P&&E.deltaY>0&&P(E),T&&E.deltaY<0&&T(E),y&&y(E),N&&E.deltaY<0!=j<0&&N(E),j=E.deltaY,De[0]=De[1]=De[2]=0),(ue||Oe)&&($&&$(E),Oe&&(m&&Oe===1&&m(E),x&&x(E),Oe=0),ue=!1),we&&!(we=!1)&&Pe&&Pe(E),Xe&&(te(E),Xe=!1),We=0},rt=function(Te,Qe,ce){de[ce]+=Te,De[ce]+=Qe,E._vx.update(Te),E._vy.update(Qe),u?We||(We=requestAnimationFrame(Ze)):Ze()},ut=function(Te,Qe){Ce&&!je&&(E.axis=je=Math.abs(Te)>Math.abs(Qe)?"x":"y",we=!0),je!=="y"&&(de[2]+=Te,E._vx.update(Te,!0)),je!=="x"&&(De[2]+=Qe,E._vy.update(Qe,!0)),u?We||(We=requestAnimationFrame(Ze)):Ze()},ye=function(Te){if(!Ne(Te,1)){Te=yl(Te,c);var Qe=Te.clientX,ce=Te.clientY,He=Qe-E.x,Ie=ce-E.y,Be=E.isDragging;E.x=Qe,E.y=ce,(Be||(He||Ie)&&(Math.abs(E.startX-Qe)>=s||Math.abs(E.startY-ce)>=s))&&(Oe||(Oe=Be?2:1),Be||(E.isDragging=!0),ut(He,Ie))}},L=E.onPress=function(Ue){Ne(Ue,1)||Ue&&Ue.button||(E.axis=je=null,F.pause(),E.isPressed=!0,Ue=yl(Ue),w=j=0,E.startX=E.x=Ue.clientX,E.startY=E.y=Ue.clientY,E._vx.reset(),E._vy.reset(),In(D?a:ne,Yi[1],ye,Z,!0),E.deltaX=E.deltaY=0,v&&v(E))},Q=E.onRelease=function(Ue){if(!Ne(Ue,1)){Nn(D?a:ne,Yi[1],ye,!0);var Te=!isNaN(E.y-E.startY),Qe=E.isDragging,ce=Qe&&(Math.abs(E.x-E.startX)>3||Math.abs(E.y-E.startY)>3),He=yl(Ue);!ce&&Te&&(E._vx.reset(),E._vy.reset(),c&&ie&&gn.delayedCall(.08,function(){if(Yl()-ge>300&&!Ue.defaultPrevented){if(Ue.target.click)Ue.target.click();else if(ne.createEvent){var Ie=ne.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,mi,1,He.screenX,He.screenY,He.clientX,He.clientY,!1,!1,!1,!1,0,null),Ue.target.dispatchEvent(Ie)}}})),E.isDragging=E.isGesturing=E.isPressed=!1,d&&Qe&&!D&&F.restart(!0),Oe&&Ze(),h&&Qe&&h(E),S&&S(E,ce)}},ae=function(Te){return Te.touches&&Te.touches.length>1&&(E.isGesturing=!0)&&H(Te,E.isDragging)},ve=function(){return(E.isGesturing=!1)||b(E)},Me=function(Te){if(!Ne(Te)){var Qe=K(),ce=J();rt((Qe-Re)*ee,(ce-re)*ee,1),Re=Qe,re=ce,d&&F.restart(!0)}},tt=function(Te){if(!Ne(Te)){Te=yl(Te,c),te&&(Xe=!0);var Qe=(Te.deltaMode===1?l:Te.deltaMode===2?mi.innerHeight:1)*_;rt(Te.deltaX*Qe,Te.deltaY*Qe,0),d&&!D&&F.restart(!0)}},lt=function(Te){if(!Ne(Te)){var Qe=Te.clientX,ce=Te.clientY,He=Qe-E.x,Ie=ce-E.y;E.x=Qe,E.y=ce,ue=!0,d&&F.restart(!0),(He||Ie)&&ut(He,Ie)}},dt=function(Te){E.event=Te,V(E)},Mt=function(Te){E.event=Te,X(E)},ct=function(Te){return Ne(Te)||yl(Te,c)&&G(E)};F=E._dc=gn.delayedCall(f||.25,et).pause(),E.deltaX=E.deltaY=0,E._vx=dm(0,50,!0),E._vy=dm(0,50,!0),E.scrollX=K,E.scrollY=J,E.isDragging=E.isGesturing=E.isPressed=!1,t1(this),E.enable=function(Ue){return E.isEnabled||(In(Le?ne:a,"scroll",fm),o.indexOf("scroll")>=0&&In(Le?ne:a,"scroll",Me,Z,le),o.indexOf("wheel")>=0&&In(a,"wheel",tt,Z,le),(o.indexOf("touch")>=0&&JM||o.indexOf("pointer")>=0)&&(In(a,Yi[0],L,Z,le),In(ne,Yi[2],Q),In(ne,Yi[3],Q),ie&&In(a,"click",Se,!0,!0),G&&In(a,"click",ct),H&&In(ne,"gesturestart",ae),b&&In(ne,"gestureend",ve),V&&In(a,no+"enter",dt),X&&In(a,no+"leave",Mt),$&&In(a,no+"move",lt)),E.isEnabled=!0,E.isDragging=E.isGesturing=E.isPressed=ue=Oe=!1,E._vx.reset(),E._vy.reset(),Re=K(),re=J(),Ue&&Ue.type&&L(Ue),me&&me(E)),E},E.disable=function(){E.isEnabled&&(Sa.filter(function(Ue){return Ue!==E&&ql(Ue.target)}).length||Nn(Le?ne:a,"scroll",fm),E.isPressed&&(E._vx.reset(),E._vy.reset(),Nn(D?a:ne,Yi[1],ye,!0)),Nn(Le?ne:a,"scroll",Me,le),Nn(a,"wheel",tt,le),Nn(a,Yi[0],L,le),Nn(ne,Yi[2],Q),Nn(ne,Yi[3],Q),Nn(a,"click",Se,!0),Nn(a,"click",ct),Nn(ne,"gesturestart",ae),Nn(ne,"gestureend",ve),Nn(a,no+"enter",dt),Nn(a,no+"leave",Mt),Nn(a,no+"move",lt),E.isEnabled=E.isPressed=E.isDragging=!1,Ge&&Ge(E))},E.kill=E.revert=function(){E.disable();var Ue=Sa.indexOf(E);Ue>=0&&Sa.splice(Ue,1),Ur===E&&(Ur=0)},Sa.push(E),D&&ql(a)&&(Ur=E),E.enable(g)},JL(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Yt.version="3.14.2";Yt.create=function(n){return new Yt(n)};Yt.register=s1;Yt.getAll=function(){return Sa.slice()};Yt.getById=function(n){return Sa.filter(function(e){return e.vars.id===n})[0]};n1()&&gn.registerPlugin(Yt);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xe,ra,nt,Tt,hi,ht,Og,Zf,Cu,$l,bl,Dc,An,Td,hm,kn,Wv,Xv,sa,o1,Hh,a1,On,pm,l1,u1,ts,mm,Fg,Ia,kg,Kl,gm,Vh,Nc=1,Cn=Date.now,Gh=Cn(),Bi=0,Pl=0,jv=function(e,t,i){var r=fi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Yv=function(e,t){return t&&(!fi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nD=function n(){return Pl&&requestAnimationFrame(n)},qv=function(){return Td=1},$v=function(){return Td=0},ar=function(e){return e},Ll=function(e){return Math.round(e*1e5)/1e5||0},c1=function(){return typeof window<"u"},f1=function(){return xe||c1()&&(xe=window.gsap)&&xe.registerPlugin&&xe},Lo=function(e){return!!~Og.indexOf(e)},d1=function(e){return(e==="Height"?kg:nt["inner"+e])||hi["client"+e]||ht["client"+e]},h1=function(e){return Rs(e,"getBoundingClientRect")||(Lo(e)?function(){return cf.width=nt.innerWidth,cf.height=kg,cf}:function(){return Pr(e)})},iD=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Rs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?d1(s):e["client"+s])||0}},rD=function(e,t){return!t||~_r.indexOf(e)?h1(e):function(){return cf}},pr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Rs(e,i))?o()-h1(e)()[s]:Lo(e)?(hi[i]||ht[i])-d1(r):e[i]-e["offset"+r])},Ic=function(e,t){for(var i=0;i<sa.length;i+=3)(!t||~t.indexOf(sa[i+1]))&&e(sa[i],sa[i+1],sa[i+2])},fi=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},Dl=function(e){return typeof e=="number"},io=function(e){return typeof e=="object"},Sl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Wh=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},na=Math.abs,p1="left",m1="top",zg="right",Bg="bottom",Mo="width",Eo="height",Zl="Right",Ql="Left",Jl="Top",eu="Bottom",Kt="padding",Ni="margin",Ja="Width",Hg="Height",tn="px",Ii=function(e){return nt.getComputedStyle(e)},sD=function(e){var t=Ii(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Kv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Pr=function(e,t){var i=t&&Ii(e)[hm]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},Qf=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},g1=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},oD=function(e){return function(t){return xe.utils.snap(g1(e),t)}},Vg=function(e){var t=xe.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},aD=function(e){return function(t,i){return Vg(g1(e))(t,i.direction)}},Uc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},cn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},un=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Oc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Zv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Fc={toggleActions:"play",anticipatePin:0},Jf={top:0,left:0,center:.5,bottom:1,right:1},of=function(e,t){if(fi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in Jf?Jf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},kc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,d=s.fontSize,f=s.indent,p=s.fontWeight,_=Tt.createElement("div"),g=Lo(i)||Rs(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?ht:i,x=e.indexOf("start")!==-1,v=x?u:c,S="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(r===rn?zg:Bg)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=S,_.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(_,h.children[0]):h.appendChild(_),_._offset=_["offset"+r.op.d2],af(_,0,r,x),_},af=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+Ja]=1,s["border"+a+Ja]=0,s[i.p]=t+"px",xe.set(e,s)},Je=[],_m={},Ru,Qv=function(){return Cn()-Bi>34&&(Ru||(Ru=requestAnimationFrame(Fr)))},ia=function(){(!On||!On.isPressed||On.startX>ht.clientWidth)&&(it.cache++,On?Ru||(Ru=requestAnimationFrame(Fr)):Fr(),Bi||No("scrollStart"),Bi=Cn())},Xh=function(){u1=nt.innerWidth,l1=nt.innerHeight},Nl=function(e){it.cache++,(e===!0||!An&&!a1&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!pm||u1!==nt.innerWidth||Math.abs(nt.innerHeight-l1)>nt.innerHeight*.25))&&Zf.restart(!0)},Do={},lD=[],_1=function n(){return un(Ye,"scrollEnd",n)||ho(!0)},No=function(e){return Do[e]&&Do[e].map(function(t){return t()})||lD},ui=[],v1=function(e){for(var t=0;t<ui.length;t+=5)(!e||ui[t+4]&&ui[t+4].query===e)&&(ui[t].style.cssText=ui[t+1],ui[t].getBBox&&ui[t].setAttribute("transform",ui[t+2]||""),ui[t+3].uncache=1)},x1=function(){return it.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},Gg=function(e,t){var i;for(kn=0;kn<Je.length;kn++)i=Je[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));Kl=!0,t&&v1(t),t||No("revert")},y1=function(e,t){it.cache++,(t||!zn)&&it.forEach(function(i){return Pn(i)&&i.cacheID++&&(i.rec=0)}),fi(e)&&(nt.history.scrollRestoration=Fg=e)},zn,To=0,Jv,uD=function(){if(Jv!==To){var e=Jv=To;requestAnimationFrame(function(){return e===To&&ho(!0)})}},S1=function(){ht.appendChild(Ia),kg=!On&&Ia.offsetHeight||nt.innerHeight,ht.removeChild(Ia)},ex=function(e){return Cu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ho=function(e,t){if(hi=Tt.documentElement,ht=Tt.body,Og=[nt,Tt,hi,ht],Bi&&!e&&!Kl){cn(Ye,"scrollEnd",_1);return}S1(),zn=Ye.isRefreshing=!0,Kl||x1();var i=No("refreshInit");o1&&Ye.sort(),t||Gg(),it.forEach(function(r){Pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),Kl=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),gm=1,ex(!0),Je.forEach(function(r){var s=pr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),ex(!1),gm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),it.forEach(function(r){Pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),y1(Fg,1),Zf.pause(),To++,zn=2,Fr(2),Je.forEach(function(r){return Pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=Ye.isRefreshing=!1,No("refresh")},vm=0,lf=1,tu,Fr=function(e){if(e===2||!zn&&!Kl){Ye.isUpdating=!0,tu&&tu.update(0);var t=Je.length,i=Cn(),r=i-Gh>=50,s=t&&Je[0].scroll();if(lf=vm>s?-1:1,zn||(vm=s),r&&(Bi&&!Td&&i-Bi>200&&(Bi=0,No("scrollEnd")),bl=Gh,Gh=i),lf<0){for(kn=t;kn-- >0;)Je[kn]&&Je[kn].update(0,r);lf=1}else for(kn=0;kn<t;kn++)Je[kn]&&Je[kn].update(0,r);Ye.isUpdating=!1}Ru=0},xm=[p1,m1,Bg,zg,Ni+eu,Ni+Zl,Ni+Jl,Ni+Ql,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],uf=xm.concat([Mo,Eo,"boxSizing","max"+Ja,"max"+Hg,"position",Ni,Kt,Kt+Jl,Kt+Zl,Kt+eu,Kt+Ql]),cD=function(e,t,i){Ua(i);var r=e._gsap;if(r.spacerIsNative)Ua(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},jh=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=xm.length,o=t.style,a=e.style,l;s--;)l=xm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Bg]=a[zg]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Mo]=Qf(e,Hn)+tn,o[Eo]=Qf(e,rn)+tn,o[Kt]=a[Ni]=a[m1]=a[p1]="0",Ua(r),a[Mo]=a["max"+Ja]=i[Mo],a[Eo]=a["max"+Hg]=i[Eo],a[Kt]=i[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},fD=/([A-Z])/g,Ua=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(fD,"-$1").toLowerCase())}},zc=function(e){for(var t=uf.length,i=e.style,r=[],s=0;s<t;s++)r.push(uf[s],i[uf[s]]);return r.t=e,r},dD=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},cf={left:0,top:0},tx=function(e,t,i,r,s,o,a,l,u,c,d,f,p,_){Pn(e)&&(e=e(l)),fi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?of("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,x;if(p&&p.seek(0),isNaN(e)||(e=+e),Dl(e))p&&(e=xe.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&af(a,i,r,!0);else{Pn(t)&&(t=t(l));var v=(e||"0").split(" "),S,C,A,T;x=jn(t,l)||ht,S=Pr(x)||{},(!S||!S.left&&!S.top)&&Ii(x).display==="none"&&(T=x.style.display,x.style.display="block",S=Pr(x),T?x.style.display=T:x.style.removeProperty("display")),C=of(v[0],S[r.d]),A=of(v[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-A,a&&af(a,A,r,i-A<20||a._isStart&&A>20),i-=i-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var P=e+i,M=o._isStart;m="scroll"+r.d2,af(o,P,r,M&&P>20||!M&&(d?Math.max(ht[m],hi[m]):o.parentNode[m])<=P+1),d&&(u=Pr(a),d&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+tn))}return p&&x&&(m=Pr(x),p.seek(f),h=Pr(x),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},hD=/(webkit|moz|length|cssText|inset)/i,nx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===ht){e._stOrig=s.cssText,a=Ii(e);for(o in a)!+o&&!hD.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},M1=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Bc=function(e,t,i){var r={};r[t.p]="+="+i,xe.set(e,r)},ix=function(e,t){var i=Os(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,d){var f=o.tween,p=l.onComplete,_={};u=u||i();var g=M1(i,u,function(){f.kill(),o.tween=0});return d=c&&d||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(u+c*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){it.cache++,o.tween&&Fr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=xe.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(e,"wheel",i.wheelHandler),Ye.isTouch&&cn(e,"touchmove",i.wheelHandler),s},Ye=function(){function n(t,i){ra||n.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),mm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pl){this.update=this.refresh=this.kill=ar;return}i=Kv(fi(i)||Dl(i)||i.nodeType?{trigger:i}:i,Fc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,d=s.scrub,f=s.trigger,p=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,x=s.onSnapComplete,v=s.once,S=s.snap,C=s.pinReparent,A=s.pinSpacer,T=s.containerAnimation,P=s.fastScrollEnd,M=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Hn:rn,I=!d&&d!==0,U=jn(i.scroller||nt),N=xe.core.getCache(U),V=Lo(U),X=("pinType"in i?i.pinType:Rs(U,"pinType")||V&&"fixed")==="fixed",$=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],q=I&&i.toggleActions.split(" "),D="markers"in i?i.markers:Fc.markers,H=V?0:parseFloat(Ii(U)["border"+y.p2+Ja])||0,b=this,te=i.onRefreshInit&&function(){return i.onRefreshInit(b)},me=iD(U,V,y),Ge=rD(U,V),G=0,ee=0,le=0,ie=Os(U,y),Ce,Pe,We,F,Oe,ue,Xe,we,je,E,w,j,Z,K,J,Re,re,pe,Le,ne,de,De,ge,Se,Ne,et,Ze,rt,ut,ye,L,Q,ae,ve,Me,tt,lt,dt,Mt;if(b._startClamp=b._endClamp=!1,b._dir=y,m*=45,b.scroller=U,b.scroll=T?T.time.bind(T):ie,F=ie(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(o1=1,i.refreshPriority===-9999&&(tu=b)),N.tweenScroll=N.tweenScroll||{top:ix(U,rn),left:ix(U,Hn)},b.tweenTo=Ce=N.tweenScroll[y.p],b.scrubDuration=function(ce){ae=Dl(ce)&&ce,ae?Q?Q.duration(ce):Q=xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ae,paused:!0,onComplete:function(){return h&&h(b)}}):(Q&&Q.progress(1).kill(),Q=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(d),ye=0,l||(l=r.vars.id)),S&&((!io(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in ht.style&&xe.set(V?[ht,hi]:U,{scrollBehavior:"auto"}),it.forEach(function(ce){return Pn(ce)&&ce.target===(V?Tt.scrollingElement||hi:U)&&(ce.smooth=!1)}),We=Pn(S.snapTo)?S.snapTo:S.snapTo==="labels"?oD(r):S.snapTo==="labelsDirectional"?aD(r):S.directional!==!1?function(ce,He){return Vg(S.snapTo)(ce,Cn()-ee<500?0:He.direction)}:xe.utils.snap(S.snapTo),ve=S.duration||{min:.1,max:2},ve=io(ve)?$l(ve.min,ve.max):$l(ve,ve),Me=xe.delayedCall(S.delay||ae/2||.1,function(){var ce=ie(),He=Cn()-ee<500,Ie=Ce.tween;if((He||Math.abs(b.getVelocity())<10)&&!Ie&&!Td&&G!==ce){var Be=(ce-ue)/K,Wt=r&&!I?r.totalProgress():Be,qe=He?0:(Wt-L)/(Cn()-bl)*1e3||0,Pt=xe.utils.clamp(-Be,1-Be,na(qe/2)*qe/.185),en=Be+(S.inertia===!1?0:Pt),Lt,Et,gt=S,R=gt.onStart,O=gt.onInterrupt,B=gt.onComplete;if(Lt=We(en,b),Dl(Lt)||(Lt=en),Et=Math.max(0,Math.round(ue+Lt*K)),ce<=Xe&&ce>=ue&&Et!==ce){if(Ie&&!Ie._initted&&Ie.data<=na(Et-ce))return;S.inertia===!1&&(Pt=Lt-Be),Ce(Et,{duration:ve(na(Math.max(na(en-Wt),na(Lt-Wt))*.185/qe/.05||0)),ease:S.ease||"power3",data:na(Et-ce),onInterrupt:function(){return Me.restart(!0)&&O&&O(b)},onComplete:function(){b.update(),G=ie(),r&&!I&&(Q?Q.resetTo("totalProgress",Lt,r._tTime/r._tDur):r.progress(Lt)),ye=L=r&&!I?r.totalProgress():b.progress,x&&x(b),B&&B(b)}},ce,Pt*K,Et-ce-Pt*K),R&&R(b,Ce.tween)}}else b.isActive&&G!==ce&&Me.restart(!0)}).pause()),l&&(_m[l]=b),f=b.trigger=jn(f||p!==!0&&p),Mt=f&&f._gsap&&f._gsap.stRevert,Mt&&(Mt=Mt(b)),p=p===!0?f:jn(p),fi(a)&&(a={targets:f,className:a}),p&&(_===!1||_===Ni||(_=!_&&p.parentNode&&p.parentNode.style&&Ii(p.parentNode).display==="flex"?!1:Kt),b.pin=p,Pe=xe.core.getCache(p),Pe.spacer?J=Pe.pinState:(A&&(A=jn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Pe.spacerIsNative=!!A,A&&(Pe.spacerState=zc(A))),Pe.spacer=pe=A||Tt.createElement("div"),pe.classList.add("pin-spacer"),l&&pe.classList.add("pin-spacer-"+l),Pe.pinState=J=zc(p)),i.force3D!==!1&&xe.set(p,{force3D:!0}),b.spacer=pe=Pe.spacer,ut=Ii(p),Se=ut[_+y.os2],ne=xe.getProperty(p),de=xe.quickSetter(p,y.a,tn),jh(p,pe,ut),re=zc(p)),D){j=io(D)?Kv(D,Zv):Zv,E=kc("scroller-start",l,U,y,j,0),w=kc("scroller-end",l,U,y,j,0,E),Le=E["offset"+y.op.d2];var ct=jn(Rs(U,"content")||U);we=this.markerStart=kc("start",l,ct,y,j,Le,0,T),je=this.markerEnd=kc("end",l,ct,y,j,Le,0,T),T&&(dt=xe.quickSetter([we,je],y.a,tn)),!X&&!(_r.length&&Rs(U,"fixedMarkers")===!0)&&(sD(V?ht:U),xe.set([E,w],{force3D:!0}),et=xe.quickSetter(E,y.a,tn),rt=xe.quickSetter(w,y.a,tn))}if(T){var Ue=T.vars.onUpdate,Te=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){b.update(0,0,1),Ue&&Ue.apply(T,Te||[])})}if(b.previous=function(){return Je[Je.indexOf(b)-1]},b.next=function(){return Je[Je.indexOf(b)+1]},b.revert=function(ce,He){if(!He)return b.kill(!0);var Ie=ce!==!1||!b.enabled,Be=An;Ie!==b.isReverted&&(Ie&&(tt=Math.max(ie(),b.scroll.rec||0),le=b.progress,lt=r&&r.progress()),we&&[we,je,E,w].forEach(function(Wt){return Wt.style.display=Ie?"none":"block"}),Ie&&(An=b,b.update(Ie)),p&&(!C||!b.isActive)&&(Ie?cD(p,pe,J):jh(p,pe,Ii(p),Ne)),Ie||b.update(Ie),An=Be,b.isReverted=Ie)},b.refresh=function(ce,He,Ie,Be){if(!((An||!b.enabled)&&!He)){if(p&&ce&&Bi){cn(n,"scrollEnd",_1);return}!zn&&te&&te(b),An=b,Ce.tween&&!Ie&&(Ce.tween.kill(),Ce.tween=0),Q&&Q.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(Ai){return Ai.vars.immediateRender&&Ai.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Wt=me(),qe=Ge(),Pt=T?T.duration():pr(U,y),en=K<=.01||!K,Lt=0,Et=Be||0,gt=io(Ie)?Ie.end:i.end,R=i.endTrigger||f,O=io(Ie)?Ie.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),B=b.pinnedContainer=i.pinnedContainer&&jn(i.pinnedContainer,b),W=f&&Math.max(0,Je.indexOf(b))||0,z=W,oe,he,be,ze,Ae,Ee,Fe,At,yn,Dt,qt,_t,Ve;for(D&&io(Ie)&&(_t=xe.getProperty(E,y.p),Ve=xe.getProperty(w,y.p));z-- >0;)Ee=Je[z],Ee.end||Ee.refresh(0,1)||(An=b),Fe=Ee.pin,Fe&&(Fe===f||Fe===p||Fe===B)&&!Ee.isReverted&&(Dt||(Dt=[]),Dt.unshift(Ee),Ee.revert(!0,!0)),Ee!==Je[z]&&(W--,z--);for(Pn(O)&&(O=O(b)),O=jv(O,"start",b),ue=tx(O,f,Wt,y,ie(),we,E,b,qe,H,X,Pt,T,b._startClamp&&"_startClamp")||(p?-.001:0),Pn(gt)&&(gt=gt(b)),fi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(fi(O)?O.split(" ")[0]:"")+gt:(Lt=of(gt.substr(2),Wt),gt=fi(O)?O:(T?xe.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,ue):ue)+Lt,R=f)),gt=jv(gt,"end",b),Xe=Math.max(ue,tx(gt||(R?"100% 0":Pt),R,Wt,y,ie()+Lt,je,w,b,qe,H,X,Pt,T,b._endClamp&&"_endClamp"))||-.001,Lt=0,z=W;z--;)Ee=Je[z]||{},Fe=Ee.pin,Fe&&Ee.start-Ee._pinPush<=ue&&!T&&Ee.end>0&&(oe=Ee.end-(b._startClamp?Math.max(0,Ee.start):Ee.start),(Fe===f&&Ee.start-Ee._pinPush<ue||Fe===B)&&isNaN(O)&&(Lt+=oe*(1-Ee.progress)),Fe===p&&(Et+=oe));if(ue+=Lt,Xe+=Lt,b._startClamp&&(b._startClamp+=Lt),b._endClamp&&!zn&&(b._endClamp=Xe||-.001,Xe=Math.min(Xe,pr(U,y))),K=Xe-ue||(ue-=.01)&&.001,en&&(le=xe.utils.clamp(0,1,xe.utils.normalize(ue,Xe,tt))),b._pinPush=Et,we&&Lt&&(oe={},oe[y.a]="+="+Lt,B&&(oe[y.p]="-="+ie()),xe.set([we,je],oe)),p&&!(gm&&b.end>=pr(U,y)))oe=Ii(p),ze=y===rn,be=ie(),De=parseFloat(ne(y.a))+Et,!Pt&&Xe>1&&(qt=(V?Tt.scrollingElement||hi:U).style,qt={style:qt,value:qt["overflow"+y.a.toUpperCase()]},V&&Ii(ht)["overflow"+y.a.toUpperCase()]!=="scroll"&&(qt.style["overflow"+y.a.toUpperCase()]="scroll")),jh(p,pe,oe),re=zc(p),he=Pr(p,!0),At=X&&Os(U,ze?Hn:rn)(),_?(Ne=[_+y.os2,K+Et+tn],Ne.t=pe,z=_===Kt?Qf(p,y)+K+Et:0,z&&(Ne.push(y.d,z+tn),pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=z+tn)),Ua(Ne),B&&Je.forEach(function(Ai){Ai.pin===B&&Ai.vars.pinSpacing!==!1&&(Ai._subPinOffset=!0)}),X&&ie(tt)):(z=Qf(p,y),z&&pe.style.flexBasis!=="auto"&&(pe.style.flexBasis=z+tn)),X&&(Ae={top:he.top+(ze?be-ue:At)+tn,left:he.left+(ze?At:be-ue)+tn,boxSizing:"border-box",position:"fixed"},Ae[Mo]=Ae["max"+Ja]=Math.ceil(he.width)+tn,Ae[Eo]=Ae["max"+Hg]=Math.ceil(he.height)+tn,Ae[Ni]=Ae[Ni+Jl]=Ae[Ni+Zl]=Ae[Ni+eu]=Ae[Ni+Ql]="0",Ae[Kt]=oe[Kt],Ae[Kt+Jl]=oe[Kt+Jl],Ae[Kt+Zl]=oe[Kt+Zl],Ae[Kt+eu]=oe[Kt+eu],Ae[Kt+Ql]=oe[Kt+Ql],Re=dD(J,Ae,C),zn&&ie(0)),r?(yn=r._initted,Hh(1),r.render(r.duration(),!0,!0),ge=ne(y.a)-De+K+Et,Ze=Math.abs(K-ge)>1,X&&Ze&&Re.splice(Re.length-2,2),r.render(0,!0,!0),yn||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Hh(0)):ge=K,qt&&(qt.value?qt.style["overflow"+y.a.toUpperCase()]=qt.value:qt.style.removeProperty("overflow-"+y.a));else if(f&&ie()&&!T)for(he=f.parentNode;he&&he!==ht;)he._pinOffset&&(ue-=he._pinOffset,Xe-=he._pinOffset),he=he.parentNode;Dt&&Dt.forEach(function(Ai){return Ai.revert(!1,!0)}),b.start=ue,b.end=Xe,F=Oe=zn?tt:ie(),!T&&!zn&&(F<tt&&ie(tt),b.scroll.rec=0),b.revert(!1,!0),ee=Cn(),Me&&(G=-1,Me.restart(!0)),An=0,r&&I&&(r._initted||lt)&&r.progress()!==lt&&r.progress(lt||0,!0).render(r.time(),!0,!0),(en||le!==b.progress||T||g||r&&!r._initted)&&(r&&!I&&(r._initted||le||r.vars.immediateRender!==!1)&&r.totalProgress(T&&ue<-.001&&!le?xe.utils.normalize(ue,Xe,0):le,!0),b.progress=en||(F-ue)/K===le?0:le),p&&_&&(pe._pinOffset=Math.round(b.progress*ge)),Q&&Q.invalidate(),isNaN(_t)||(_t-=xe.getProperty(E,y.p),Ve-=xe.getProperty(w,y.p),Bc(E,y,_t),Bc(we,y,_t-(Be||0)),Bc(w,y,Ve),Bc(je,y,Ve-(Be||0))),en&&!zn&&b.update(),c&&!zn&&!Z&&(Z=!0,c(b),Z=!1)}},b.getVelocity=function(){return(ie()-Oe)/(Cn()-bl)*1e3||0},b.endAnimation=function(){Sl(b.callbackAnimation),r&&(Q?Q.progress(1):r.paused()?I||Sl(r,b.direction<0,1):Sl(r,r.reversed()))},b.labelToScroll=function(ce){return r&&r.labels&&(ue||b.refresh()||ue)+r.labels[ce]/r.duration()*K||0},b.getTrailing=function(ce){var He=Je.indexOf(b),Ie=b.direction>0?Je.slice(0,He).reverse():Je.slice(He+1);return(fi(ce)?Ie.filter(function(Be){return Be.vars.preventOverlaps===ce}):Ie).filter(function(Be){return b.direction>0?Be.end<=ue:Be.start>=Xe})},b.update=function(ce,He,Ie){if(!(T&&!Ie&&!ce)){var Be=zn===!0?tt:b.scroll(),Wt=ce?0:(Be-ue)/K,qe=Wt<0?0:Wt>1?1:Wt||0,Pt=b.progress,en,Lt,Et,gt,R,O,B,W;if(He&&(Oe=F,F=T?ie():Be,S&&(L=ye,ye=r&&!I?r.totalProgress():qe)),m&&p&&!An&&!Nc&&Bi&&(!qe&&ue<Be+(Be-Oe)/(Cn()-bl)*m?qe=1e-4:qe===1&&Xe>Be+(Be-Oe)/(Cn()-bl)*m&&(qe=.9999)),qe!==Pt&&b.enabled){if(en=b.isActive=!!qe&&qe<1,Lt=!!Pt&&Pt<1,O=en!==Lt,R=O||!!qe!=!!Pt,b.direction=qe>Pt?1:-1,b.progress=qe,R&&!An&&(Et=qe&&!Pt?0:qe===1?1:Pt===1?2:3,I&&(gt=!O&&q[Et+1]!=="none"&&q[Et+1]||q[Et],W=r&&(gt==="complete"||gt==="reset"||gt in r))),M&&(O||W)&&(W||d||!r)&&(Pn(M)?M(b):b.getTrailing(M).forEach(function(be){return be.endAnimation()})),I||(Q&&!An&&!Nc?(Q._dp._time-Q._start!==Q._time&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",qe,r._tTime/r._tDur):(Q.vars.totalProgress=qe,Q.invalidate().restart())):r&&r.totalProgress(qe,!!(An&&(ee||ce)))),p){if(ce&&_&&(pe.style[_+y.os2]=Se),!X)de(Ll(De+ge*qe));else if(R){if(B=!ce&&qe>Pt&&Xe+1>Be&&Be+1>=pr(U,y),C)if(!ce&&(en||B)){var z=Pr(p,!0),oe=Be-ue;nx(p,ht,z.top+(y===rn?oe:0)+tn,z.left+(y===rn?0:oe)+tn)}else nx(p,pe);Ua(en||B?Re:re),Ze&&qe<1&&en||de(De+(qe===1&&!B?ge:0))}}S&&!Ce.tween&&!An&&!Nc&&Me.restart(!0),a&&(O||v&&qe&&(qe<1||!Vh))&&Cu(a.targets).forEach(function(be){return be.classList[en||v?"add":"remove"](a.className)}),o&&!I&&!ce&&o(b),R&&!An?(I&&(W&&(gt==="complete"?r.pause().totalProgress(1):gt==="reset"?r.restart(!0).pause():gt==="restart"?r.restart(!0):r[gt]()),o&&o(b)),(O||!Vh)&&(u&&O&&Wh(b,u),$[Et]&&Wh(b,$[Et]),v&&(qe===1?b.kill(!1,1):$[Et]=0),O||(Et=qe===1?1:3,$[Et]&&Wh(b,$[Et]))),P&&!en&&Math.abs(b.getVelocity())>(Dl(P)?P:2500)&&(Sl(b.callbackAnimation),Q?Q.progress(1):Sl(r,gt==="reverse"?1:!qe,1))):I&&o&&!An&&o(b)}if(rt){var he=T?Be/T.duration()*(T._caScrollDist||0):Be;et(he+(E._isFlipped?1:0)),rt(he)}dt&&dt(-Be/T.duration()*(T._caScrollDist||0))}},b.enable=function(ce,He){b.enabled||(b.enabled=!0,cn(U,"resize",Nl),V||cn(U,"scroll",ia),te&&cn(n,"refreshInit",te),ce!==!1&&(b.progress=le=0,F=Oe=G=ie()),He!==!1&&b.refresh())},b.getTween=function(ce){return ce&&Ce?Ce.tween:Q},b.setPositions=function(ce,He,Ie,Be){if(T){var Wt=T.scrollTrigger,qe=T.duration(),Pt=Wt.end-Wt.start;ce=Wt.start+Pt*ce/qe,He=Wt.start+Pt*He/qe}b.refresh(!1,!1,{start:Yv(ce,Ie&&!!b._startClamp),end:Yv(He,Ie&&!!b._endClamp)},Be),b.update()},b.adjustPinSpacing=function(ce){if(Ne&&ce){var He=Ne.indexOf(y.d)+1;Ne[He]=parseFloat(Ne[He])+ce+tn,Ne[1]=parseFloat(Ne[1])+ce+tn,Ua(Ne)}},b.disable=function(ce,He){if(ce!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,He||Q&&Q.pause(),tt=0,Pe&&(Pe.uncache=1),te&&un(n,"refreshInit",te),Me&&(Me.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!V)){for(var Ie=Je.length;Ie--;)if(Je[Ie].scroller===U&&Je[Ie]!==b)return;un(U,"resize",Nl),V||un(U,"scroll",ia)}},b.kill=function(ce,He){b.disable(ce,He),Q&&!He&&Q.kill(),l&&delete _m[l];var Ie=Je.indexOf(b);Ie>=0&&Je.splice(Ie,1),Ie===kn&&lf>0&&kn--,Ie=0,Je.forEach(function(Be){return Be.scroller===b.scroller&&(Ie=1)}),Ie||zn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,ce&&r.revert({kill:!1}),He||r.kill()),we&&[we,je,E,w].forEach(function(Be){return Be.parentNode&&Be.parentNode.removeChild(Be)}),tu===b&&(tu=0),p&&(Pe&&(Pe.uncache=1),Ie=0,Je.forEach(function(Be){return Be.pin===p&&Ie++}),Ie||(Pe.spacer=0)),i.onKill&&i.onKill(b)},Je.push(b),b.enable(!1,!1),Mt&&Mt(b),r&&r.add&&!K){var Qe=b.update;b.update=function(){b.update=Qe,it.cache++,ue||Xe||b.refresh()},xe.delayedCall(.01,b.update),K=.01,ue=Xe=0}else b.refresh();p&&uD()},n.register=function(i){return ra||(xe=i||f1(),c1()&&window.document&&n.enable(),ra=Pl),ra},n.defaults=function(i){if(i)for(var r in i)Fc[r]=i[r];return Fc},n.disable=function(i,r){Pl=0,Je.forEach(function(o){return o[r?"kill":"disable"](i)}),un(nt,"wheel",ia),un(Tt,"scroll",ia),clearInterval(Dc),un(Tt,"touchcancel",ar),un(ht,"touchstart",ar),Uc(un,Tt,"pointerdown,touchstart,mousedown",qv),Uc(un,Tt,"pointerup,touchend,mouseup",$v),Zf.kill(),Ic(un);for(var s=0;s<it.length;s+=3)Oc(un,it[s],it[s+1]),Oc(un,it[s],it[s+2])},n.enable=function(){if(nt=window,Tt=document,hi=Tt.documentElement,ht=Tt.body,xe&&(Cu=xe.utils.toArray,$l=xe.utils.clamp,mm=xe.core.context||ar,Hh=xe.core.suppressOverwrites||ar,Fg=nt.history.scrollRestoration||"auto",vm=nt.pageYOffset||0,xe.core.globals("ScrollTrigger",n),ht)){Pl=1,Ia=document.createElement("div"),Ia.style.height="100vh",Ia.style.position="absolute",S1(),nD(),Yt.register(xe),n.isTouch=Yt.isTouch,ts=Yt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),pm=Yt.isTouch===1,cn(nt,"wheel",ia),Og=[nt,Tt,hi,ht],xe.matchMedia?(n.matchMedia=function(u){var c=xe.matchMedia(),d;for(d in u)c.add(d,u[d]);return c},xe.addEventListener("matchMediaInit",function(){x1(),Gg()}),xe.addEventListener("matchMediaRevert",function(){return v1()}),xe.addEventListener("matchMedia",function(){ho(0,1),No("matchMedia")}),xe.matchMedia().add("(orientation: portrait)",function(){return Xh(),Xh})):console.warn("Requires GSAP 3.11.0 or later"),Xh(),cn(Tt,"scroll",ia);var i=ht.hasAttribute("style"),r=ht.style,s=r.borderTopStyle,o=xe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Pr(ht),rn.m=Math.round(a.top+rn.sc())||0,Hn.m=Math.round(a.left+Hn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(ht.setAttribute("style",""),ht.removeAttribute("style")),Dc=setInterval(Qv,250),xe.delayedCall(.5,function(){return Nc=0}),cn(Tt,"touchcancel",ar),cn(ht,"touchstart",ar),Uc(cn,Tt,"pointerdown,touchstart,mousedown",qv),Uc(cn,Tt,"pointerup,touchend,mouseup",$v),hm=xe.utils.checkPrefix("transform"),uf.push(hm),ra=Cn(),Zf=xe.delayedCall(.2,ho).pause(),sa=[Tt,"visibilitychange",function(){var u=nt.innerWidth,c=nt.innerHeight;Tt.hidden?(Wv=u,Xv=c):(Wv!==u||Xv!==c)&&Nl()},Tt,"DOMContentLoaded",ho,nt,"load",ho,nt,"resize",Nl],Ic(cn),Je.forEach(function(u){return u.enable(0,1)}),l=0;l<it.length;l+=3)Oc(un,it[l],it[l+1]),Oc(un,it[l],it[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Vh=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Dc)||(Dc=r)&&setInterval(Qv,r),"ignoreMobileResize"in i&&(pm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Ic(un)||Ic(cn,i.autoRefreshEvents||"none"),a1=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=jn(i),o=it.indexOf(s),a=Lo(s);~o&&it.splice(o,a?6:2),r&&(a?_r.unshift(nt,r,ht,r,hi,r):_r.unshift(s,r))},n.clearMatchMedia=function(i){Je.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(fi(i)?jn(i):i).getBoundingClientRect(),a=o[s?Mo:Eo]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},n.positionInViewport=function(i,r,s){fi(i)&&(i=jn(i));var o=i.getBoundingClientRect(),a=o[s?Mo:Eo],l=r==null?a/2:r in Jf?Jf[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},n.killAll=function(i){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=Do.killAll||[];Do={},r.forEach(function(s){return s()})}},n}();Ye.version="3.14.2";Ye.saveStyles=function(n){return n?Cu(n).forEach(function(e){if(e&&e.style){var t=ui.indexOf(e);t>=0&&ui.splice(t,5),ui.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),mm())}}):ui};Ye.revert=function(n,e){return Gg(!n,e)};Ye.create=function(n,e){return new Ye(n,e)};Ye.refresh=function(n){return n?Nl(!0):(ra||Ye.register())&&ho(!0)};Ye.update=function(n){return++it.cache&&Fr(n===!0?2:0)};Ye.clearScrollMemory=y1;Ye.maxScroll=function(n,e){return pr(n,e?Hn:rn)};Ye.getScrollFunc=function(n,e){return Os(jn(n),e?Hn:rn)};Ye.getById=function(n){return _m[n]};Ye.getAll=function(){return Je.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!Bi};Ye.snapDirectional=Vg;Ye.addEventListener=function(n,e){var t=Do[n]||(Do[n]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(n,e){var t=Do[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};Ye.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var d=[],f=[],p=xe.delayedCall(r,function(){c(d,f),d=[],f=[]}).pause();return function(_){d.length||p.restart(!0),d.push(_.trigger),f.push(_),s<=d.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Pn(s)&&(s=s(),cn(Ye,"refresh",function(){return s=e.batchMax()})),Cu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(Ye.create(u))}),t};var rx=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Yh=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Yt.isTouch?" pinch-zoom":""):"none",e===hi&&n(ht,t)},Hc={auto:1,scroll:1},pD=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||xe.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ht&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hc[(l=Ii(s)).overflowY]||Hc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!Lo(s)&&(Hc[(l=Ii(s)).overflowY]||Hc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},E1=function(e,t,i,r){return Yt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&pD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&cn(Tt,Yt.eventTypes[0],ox,!1,!0)},onDisable:function(){return un(Tt,Yt.eventTypes[0],ox,!0)}})},mD=/(input|label|select|textarea)/i,sx,ox=function(e){var t=mD.test(e.target.tagName);(t||sx)&&(e._gsapAllow=!0,sx=t)},gD=function(e){io(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=jn(e.target)||hi,c=xe.core.globals().ScrollSmoother,d=c&&c.get(),f=ts&&(e.content&&jn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),p=Os(u,rn),_=Os(u,Hn),g=1,m=(Yt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,h=0,x=Pn(r)?function(){return r(a)}:function(){return r||2.8},v,S,C=E1(u,e.type,!0,s),A=function(){return S=!1},T=ar,P=ar,M=function(){l=pr(u,rn),P=$l(ts?1:0,l),i&&(T=$l(0,pr(u,Hn))),v=To},y=function(){f._gsap.y=Ll(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},I=function(){if(S){requestAnimationFrame(A);var D=Ll(a.deltaY/2),H=P(p.v-D);if(f&&H!==p.v+p.offset){p.offset=H-p.v;var b=Ll((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",p.cacheID=it.cache,Fr()}return!0}p.offset&&y(),S=!0},U,N,V,X,$=function(){M(),U.isActive()&&U.vars.scrollY>l&&(p()>l?U.progress(1)&&p(l):U.resetTo("scrollY",l))};return f&&xe.set(f,{y:"+=0"}),e.ignoreCheck=function(q){return ts&&q.type==="touchmove"&&I()||g>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){S=!1;var q=g;g=Ll((nt.visualViewport&&nt.visualViewport.scale||1)/m),U.pause(),q!==g&&Yh(u,g>1.01?!0:i?!1:"x"),N=_(),V=p(),M(),v=To},e.onRelease=e.onGestureStart=function(q,D){if(p.offset&&y(),!D)X.restart(!0);else{it.cache++;var H=x(),b,te;i&&(b=_(),te=b+H*.05*-q.velocityX/.227,H*=rx(_,b,te,pr(u,Hn)),U.vars.scrollX=T(te)),b=p(),te=b+H*.05*-q.velocityY/.227,H*=rx(p,b,te,pr(u,rn)),U.vars.scrollY=P(te),U.invalidate().duration(H).play(.01),(ts&&U.vars.scrollY>=l||b>=l-1)&&xe.to({},{onUpdate:$,duration:H})}o&&o(q)},e.onWheel=function(){U._ts&&U.pause(),Cn()-h>1e3&&(v=0,h=Cn())},e.onChange=function(q,D,H,b,te){if(To!==v&&M(),D&&i&&_(T(b[2]===D?N+(q.startX-q.x):_()+D-b[1])),H){p.offset&&y();var me=te[2]===H,Ge=me?V+q.startY-q.y:p()+H-te[1],G=P(Ge);me&&Ge!==G&&(V+=G-Ge),p(G)}(H||D)&&Fr()},e.onEnable=function(){Yh(u,i?!1:"x"),Ye.addEventListener("refresh",$),cn(nt,"resize",$),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=_.smooth=!1),C.enable()},e.onDisable=function(){Yh(u,!0),un(nt,"resize",$),Ye.removeEventListener("refresh",$),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new Yt(e),a.iOS=ts,ts&&!p()&&p(1),ts&&xe.ticker.add(ar),X=a._dc,U=xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:M1(p,p(),function(){return U.pause()})},onUpdate:Fr,onComplete:X.vars.onComplete}),a};Ye.sort=function(n){if(Pn(n))return Je.sort(n);var e=nt.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+nt.innerHeight}),Je.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(n){return new Yt(n)};Ye.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof Yt?n:gD(n);return On&&On.target===e.target&&On.kill(),Lo(e.target)&&(On=e),e};Ye.core={_getVelocityProp:dm,_inputObserver:E1,_scrollers:it,_proxies:_r,bridge:{ss:function(){Bi||No("scrollStart"),Bi=Cn()},ref:function(){return An}}};f1()&&xe.registerPlugin(Ye);mt.registerPlugin(Ye);const _D=()=>{const n=ke.useRef(null);return ke.useEffect(()=>{const e=mt.context(()=>{mt.fromTo(".about-element",{y:40,opacity:0},{scrollTrigger:{trigger:n.current,start:"top 75%"},y:0,opacity:1,duration:1.2,stagger:.15,ease:"power4.out"})},n);return()=>e.revert()},[]),k.jsx("section",{id:"about",ref:n,className:"py-32 px-6 relative z-10 bg-darkBg transition-theme",children:k.jsx("div",{className:"container mx-auto max-w-6xl",children:k.jsxs("div",{className:"grid md:grid-cols-12 gap-12 items-start",children:[k.jsxs("div",{className:"md:col-span-4",children:[k.jsx("h2",{className:"about-element text-4xl md:text-5xl font-bold tracking-tighter text-textMain mb-6 transition-theme",children:"About"}),k.jsx("div",{className:"about-element w-12 h-[1px] bg-borderMedium mb-8 transition-theme"})]}),k.jsxs("div",{className:"md:col-span-8 space-y-8 text-xl md:text-2xl text-textMuted font-light leading-relaxed tracking-tight",children:[k.jsx("p",{className:"about-element text-textMain transition-theme",children:"I am a passionate Computer Science student dedicated to crafting premium digital experiences. I specialize in bridging the gap between elegant design and complex engineering."}),k.jsx("p",{className:"about-element",children:"My focus is on writing clean, modular code to build intuitive web applications. Whether it's animating complex frontend user interfaces with React and GSAP or structuring robust full-stack architectures, I am consistently exploring the bleeding edge of modern web development."}),k.jsxs("div",{className:"about-element pt-12 grid grid-cols-2 sm:grid-cols-3 gap-8",children:[k.jsxs("div",{children:[k.jsx("span",{className:"block text-textMain font-bold tracking-wide text-sm mb-2 transition-theme",children:"01"}),k.jsx("span",{className:"block text-xs uppercase tracking-[0.2em] text-textMuted",children:"Clean Code"})]}),k.jsxs("div",{children:[k.jsx("span",{className:"block text-textMain font-bold tracking-wide text-sm mb-2 transition-theme",children:"02"}),k.jsx("span",{className:"block text-xs uppercase tracking-[0.2em] text-textMuted",children:"Modern UI"})]}),k.jsxs("div",{children:[k.jsx("span",{className:"block text-textMain font-bold tracking-wide text-sm mb-2 transition-theme",children:"03"}),k.jsx("span",{className:"block text-xs uppercase tracking-[0.2em] text-textMuted",children:"Full Stack"})]})]})]})]})})})};mt.registerPlugin(Ye);const vD=[{title:"Programming",icon:CA,skills:["Java","Python","JavaScript","C","C++"]},{title:"Frontend",icon:TA,skills:["React.js","Next.js","Tailwind","GSAP","Three.js"]},{title:"Backend & DB",icon:wA,skills:["Node.js","Express","PostgreSQL","Firebase","MongoDB"]},{title:"Systems & Tools",icon:RA,skills:["Git","Docker","Linux","Vercel","Figma"]},{title:"Architecture",icon:MA,skills:["Microservices","REST APIs","System Design"]},{title:"Mobile Dev",icon:AA,skills:["React Native","Flutter","Swift","Kotlin"]}],xD=({title:n,icon:e,skills:t})=>{const i=ke.useRef(null),r=ke.useRef(null),s=a=>{if(!i.current||!r.current)return;const l=i.current.getBoundingClientRect(),u=a.clientX-l.left,c=a.clientY-l.top,d=l.width/2,f=l.height/2,p=(c-f)/f*-12,_=(u-d)/d*12,g=(u-d)/d*12,m=(c-f)/f*12;mt.to(i.current,{rotateX:p,rotateY:_,scale:1.03,duration:.5,ease:"power3.out",transformPerspective:1e3,borderColor:"var(--border-medium)",boxShadow:"0 20px 40px rgba(var(--glow-rgb), 0.05)"}),mt.to(r.current,{x:g,y:m,duration:.5,ease:"power3.out"})},o=()=>{!i.current||!r.current||(mt.to(i.current,{rotateX:0,rotateY:0,scale:1,duration:.8,ease:"power4.out",borderColor:"var(--border-light)",boxShadow:"0 0px 0px rgba(0,0,0,0)"}),mt.to(r.current,{x:0,y:0,duration:.8,ease:"power4.out"}))};return k.jsxs("div",{ref:i,className:"flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] h-[450px] bg-surface/50 backdrop-blur-2xl border border-borderLight rounded-[2rem] p-8 md:p-10 flex flex-col items-center justify-center text-center transform-gpu relative overflow-hidden group/card z-10 transition-theme",onMouseMove:s,onMouseLeave:o,style:{willChange:"transform"},children:[k.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-overlay to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-700 pointer-events-none"}),k.jsxs("div",{ref:r,className:"w-full h-full flex flex-col items-center justify-center relative z-10 pointer-events-none",children:[k.jsx("div",{className:"text-textMuted mb-10 transition-colors duration-500 group-hover/card:text-textMain",children:k.jsx(e,{size:52,strokeWidth:1})}),k.jsx("h3",{className:"text-2xl font-bold mb-8 text-textMain tracking-tight transition-theme",children:n}),k.jsx("div",{className:"flex flex-wrap justify-center gap-3 pointer-events-auto",children:t.map(a=>k.jsx("span",{className:"px-4 py-1.5 md:px-5 md:py-2 text-[11px] md:text-xs font-semibold tracking-wider uppercase border border-borderMedium rounded-full text-textMuted hover:text-darkBg hover:bg-textMain hover:scale-105 transition-all duration-300 cursor-pointer",children:a},a))})]})]})},yD=()=>{const n=ke.useRef(null),e=ke.useRef(null),t=ke.useRef(null),i=ke.useRef(null),[r,s]=ke.useState(0),o=ke.useRef(!1),a=ke.useRef(0),l=ke.useRef(0),u=f=>{o.current=!0,a.current=f.clientX,l.current=window.scrollY},c=f=>{if(!o.current)return;const p=(a.current-f.clientX)*2.5;window.scrollTo(0,l.current+p)},d=()=>{o.current=!1};return ke.useEffect(()=>{const f=mt.context(()=>{mt.fromTo(".skills-header",{y:40,opacity:0},{scrollTrigger:{trigger:n.current,start:"top 80%"},y:0,opacity:1,duration:1.2,ease:"power4.out"});const p=t.current,_=()=>-(p.scrollWidth-window.innerWidth+(window.innerWidth>768?160:48));mt.to(p,{x:_,ease:"none",scrollTrigger:{trigger:e.current,start:"center center",end:()=>`+=${p.scrollWidth}`,pin:!0,scrub:1,invalidateOnRefresh:!0,onUpdate:g=>s(g.progress)}}),i.current&&mt.to(i.current,{x:-300,ease:"none",scrollTrigger:{trigger:e.current,start:"center center",end:()=>`+=${p.scrollWidth}`,scrub:1,invalidateOnRefresh:!0}}),mt.fromTo(p.children,{opacity:0,scale:.9,y:30},{opacity:1,scale:1,y:0,duration:1,stagger:.15,ease:"power4.out",scrollTrigger:{trigger:n.current,start:"top 60%"}})},n);return()=>f.revert()},[]),k.jsx("section",{id:"skills",ref:n,className:"relative z-10 bg-darkBg overflow-hidden transition-theme",children:k.jsxs("div",{ref:e,className:"w-full h-screen flex flex-col justify-center cursor-grab active:cursor-grabbing select-none relative",onPointerDown:u,onPointerMove:c,onPointerUp:d,onPointerLeave:d,style:{touchAction:"pan-y"},children:[k.jsx("div",{ref:i,className:"absolute top-1/2 left-1/2 w-[150vw] -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-0 hidden md:block",style:{WebkitMaskImage:"linear-gradient(to right, transparent, black 15%, black 85%, transparent)",maskImage:"linear-gradient(to right, transparent, black 15%, black 85%, transparent)"}}),k.jsxs("div",{className:"absolute top-24 md:top-32 left-6 md:left-20 skills-header z-20 pointer-events-none",children:[k.jsx("h2",{className:"text-4xl md:text-6xl font-bold tracking-tighter text-textMain mb-4 transition-theme",children:"Capabilities"}),k.jsx("div",{className:"w-12 h-[1px] bg-borderMedium mb-4 transition-theme"})]}),k.jsx("div",{ref:t,className:"flex gap-6 md:gap-16 w-max items-center px-6 md:px-20 relative z-10 mt-20 md:mt-32",children:vD.map(f=>k.jsx(xD,{...f},f.title))}),k.jsxs("div",{className:"absolute bottom-12 left-6 md:left-20 right-6 md:right-20 flex items-center gap-6 skills-header z-20 pointer-events-none",children:[k.jsx("span",{className:"text-xs font-bold text-textMuted tracking-widest w-8",children:"0%"}),k.jsx("div",{className:"flex-1 h-[2px] bg-borderLight relative overflow-hidden rounded-full transition-theme",children:k.jsx("div",{className:"absolute top-0 left-0 bottom-0 bg-textMain transition-all duration-300 ease-out",style:{width:`${Math.max(0,Math.min(100,r*100))}%`}})}),k.jsx("span",{className:"text-xs font-bold text-textMain tracking-widest w-10 text-right transition-theme",children:"100%"})]})]})})};mt.registerPlugin(Ye);const SD=[{title:"GFG Campus Platform",description:"An interactive chapter portal featuring algorithmic leaderboards and rich event tracking.",tech:["React","Tailwind","Firebase"],year:"2025",link:"https://gfg-srmncr.netlify.app"},{title:"ICMETE Conference",description:"Official platform for an international technological conference with complex registration flows.",tech:["Next.js","Framer","Stripe"],year:"2025",link:"https://www.icmete.in"},{title:"AstroCal Web",description:"A feature-rich astronomy calendar tracking celestial events in real-time.",tech:["JavaScript","Space APIs","Three.js"],year:"2024",link:"https://pranav-ctrl.github.io/astocral-hosting/"}],MD=()=>{const n=ke.useRef(null),e=ke.useRef(null);return ke.useEffect(()=>{const t=mt.context(()=>{mt.fromTo(".proj-heading",{y:40,opacity:0},{scrollTrigger:{trigger:n.current,start:"top 80%"},y:0,opacity:1,duration:1.2,ease:"power4.out"}),mt.fromTo(e.current.children,{y:40,opacity:0},{scrollTrigger:{trigger:e.current,start:"top 75%"},y:0,opacity:1,duration:1.2,stagger:.15,ease:"power4.out"})},n);return()=>t.revert()},[]),k.jsx("section",{id:"projects",ref:n,className:"py-32 px-6 relative z-10 bg-darkBg transition-theme",children:k.jsxs("div",{className:"container mx-auto max-w-5xl",children:[k.jsxs("div",{className:"flex flex-col items-center mb-20 md:items-start md:text-left",children:[k.jsx("h2",{className:"proj-heading text-4xl md:text-5xl font-bold tracking-tighter text-textMain mb-6 transition-theme",children:"Selected Works"}),k.jsx("div",{className:"proj-heading w-12 h-[1px] bg-borderMedium transition-theme"})]}),k.jsx("div",{ref:e,className:"flex flex-col border-t border-borderLight transition-theme",children:SD.map((t,i)=>k.jsxs("a",{href:t.link,target:t.link!=="#"?"_blank":"_self",rel:t.link!=="#"?"noopener noreferrer":"","aria-label":`Open ${t.title}`,className:"group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-12 border-b border-borderLight transition-all duration-500 ease-out hover:px-6 hover:bg-surface",children:[k.jsxs("div",{className:"flex-1 md:pr-12",children:[k.jsx("h3",{className:"text-3xl font-bold text-textMain mb-3 tracking-tight group-hover:text-accent transition-colors duration-300",children:t.title}),k.jsx("p",{className:"text-textMuted text-lg font-light leading-relaxed mb-6 md:mb-0 max-w-2xl transition-theme",children:t.description})]}),k.jsxs("div",{className:"flex flex-col md:items-end gap-4 min-w-[200px]",children:[k.jsx("div",{className:"flex flex-wrap gap-2 justify-start md:justify-end",children:t.tech.map(r=>k.jsx("span",{className:"text-xs tracking-widest uppercase font-medium text-textMuted opacity-70 border border-borderLight rounded-full px-3 py-1 transition-all duration-300 group-hover:border-borderMedium group-hover:opacity-100",children:r},r))}),k.jsxs("div",{className:"flex items-center gap-4 text-textMuted group-hover:text-textMain transition-colors duration-500 mt-2 md:mt-0",children:[k.jsx("span",{className:"text-sm font-medium",children:t.year}),k.jsx("div",{className:"w-12 h-12 rounded-full border border-borderLight flex items-center justify-center group-hover:bg-textMain group-hover:text-darkBg group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(var(--glow-rgb),0.2)] transition-all duration-500",children:k.jsx(SA,{size:20,strokeWidth:1.5,className:"transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-12"})})]})]})]},i))})]})})};mt.registerPlugin(Ye);const ED=()=>{const n=ke.useRef(null),e=ke.useRef(null);return ke.useEffect(()=>{const t=mt.context(()=>{mt.fromTo(".exp-header",{y:40,opacity:0},{scrollTrigger:{trigger:n.current,start:"top 80%"},y:0,opacity:1,duration:1.2,ease:"power4.out"}),mt.fromTo(".exp-row",{y:40,opacity:0},{scrollTrigger:{trigger:e.current,start:"top 75%"},y:0,opacity:1,duration:1.2,stagger:.15,ease:"power4.out"})},n);return()=>t.revert()},[]),k.jsx("section",{id:"experience",ref:n,className:"py-32 px-6 relative z-10 bg-darkBg border-t border-borderLight transition-theme",children:k.jsxs("div",{className:"container mx-auto max-w-5xl",ref:e,children:[k.jsxs("div",{className:"flex justify-between items-end border-b border-borderMedium pb-8 mb-16 exp-header transition-theme",children:[k.jsx("div",{children:k.jsx("h2",{className:"text-4xl md:text-5xl font-bold tracking-tighter text-textMain transition-theme",children:"Experience"})}),k.jsx("span",{className:"text-sm tracking-widest uppercase text-textMuted hidden sm:block",children:"Career Timeline"})]}),k.jsxs("div",{className:"space-y-16",children:[k.jsxs("div",{className:"grid md:grid-cols-12 gap-8 exp-row group",children:[k.jsx("div",{className:"md:col-span-3 text-textMuted tracking-wider text-sm mt-1",children:"2024 — Present"}),k.jsxs("div",{className:"md:col-span-9",children:[k.jsx("h3",{className:"text-2xl font-bold text-textMain tracking-tight mb-2 group-hover:translate-x-2 transition-all duration-500",children:"Web Developer Intern"}),k.jsx("h4",{className:"text-lg text-textMuted font-light mb-6 transition-theme",children:"Oasis Infobyte"}),k.jsx("p",{className:"text-textMuted leading-relaxed max-w-2xl font-light transition-theme",children:"Developed responsive web pages and implemented core logic using vanilla JavaScript and modern frameworks. Focused on modular architecture, reducing redundant renders and improving layout paints."})]})]}),k.jsxs("div",{className:"grid md:grid-cols-12 gap-8 exp-row group",children:[k.jsx("div",{className:"md:col-span-3 text-textMuted tracking-wider text-sm mt-1",children:"2023 — 2024"}),k.jsxs("div",{className:"md:col-span-9",children:[k.jsx("h3",{className:"text-2xl font-bold text-textMain tracking-tight mb-2 group-hover:translate-x-2 transition-all duration-500",children:"Software Engineering Intern"}),k.jsx("h4",{className:"text-lg text-textMuted font-light mb-6 transition-theme",children:"CodeAlpha"}),k.jsx("p",{className:"text-textMuted leading-relaxed max-w-2xl font-light transition-theme",children:"Executed massive layout overhauls and resolved complex UI bugs. Streamlined the internal styling documentation to accelerate team onboarding speed and improve overall site accessibility."})]})]})]})]})})};mt.registerPlugin(Ye);const TD=()=>{const n=ke.useRef(null),e=ke.useRef(null),[t,i]=ke.useState("idle");ke.useEffect(()=>{const s=mt.context(()=>{mt.fromTo(e.current.children,{y:40,opacity:0},{scrollTrigger:{trigger:n.current,start:"top 75%"},y:0,opacity:1,duration:1.2,stagger:.15,ease:"power4.out"})},n);return()=>s.revert()},[]);const r=s=>{s.preventDefault(),i("sending"),setTimeout(()=>{i("sent"),setTimeout(()=>i("idle"),3e3),s.target.reset()},1500)};return k.jsxs("section",{id:"contact",ref:n,className:"py-32 px-6 relative z-10 bg-darkBg border-t border-borderLight transition-theme",children:[k.jsxs("div",{className:"container mx-auto max-w-5xl",ref:e,children:[k.jsxs("h2",{className:"text-6xl md:text-8xl font-bold tracking-tighter text-textMain mb-6 text-center lg:text-left leading-[0.9] transition-theme",children:["Let's Work",k.jsx("br",{}),"Together."]}),k.jsxs("div",{className:"grid lg:grid-cols-12 gap-16 mt-20",children:[k.jsx("div",{className:"lg:col-span-5 flex flex-col justify-between",children:k.jsxs("div",{className:"space-y-8",children:[k.jsx("p",{className:"text-xl text-textMuted font-light leading-relaxed max-w-md transition-theme",children:"I am currently open to exciting new opportunities traversing software engineering and premium frontend design."}),k.jsxs("div",{className:"flex flex-col space-y-4",children:[k.jsx("a",{href:"mailto:hello@pranavsinha.com",className:"text-textMain text-lg font-medium tracking-tight hover:text-textMuted transition-colors py-2 border-b border-transparent hover:border-textMuted w-max",children:"hello@pranavsinha.com"}),k.jsxs("div",{className:"flex gap-6 pt-4",children:[k.jsx("a",{href:"#",className:"text-sm tracking-widest uppercase text-textMuted hover:text-textMain transition-colors",children:"LinkedIn"}),k.jsx("a",{href:"#",className:"text-sm tracking-widest uppercase text-textMuted hover:text-textMain transition-colors",children:"GitHub"}),k.jsx("a",{href:"#",className:"text-sm tracking-widest uppercase text-textMuted hover:text-textMain transition-colors",children:"Twitter"})]})]})]})}),k.jsx("div",{className:"lg:col-span-7",children:k.jsxs("form",{onSubmit:r,className:"flex flex-col space-y-12",children:[k.jsx("div",{className:"relative group",children:k.jsx("input",{type:"text",required:!0,placeholder:"What's your name?",className:"w-full bg-transparent border-b border-borderMedium py-4 text-textMain placeholder-textMuted focus:outline-none focus:border-textMain transition-theme text-xl font-light"})}),k.jsx("div",{className:"relative group",children:k.jsx("input",{type:"email",required:!0,placeholder:"What's your email?",className:"w-full bg-transparent border-b border-borderMedium py-4 text-textMain placeholder-textMuted focus:outline-none focus:border-textMain transition-theme text-xl font-light"})}),k.jsx("div",{className:"relative group",children:k.jsx("textarea",{required:!0,rows:"3",placeholder:"Tell me about your project.",className:"w-full bg-transparent border-b border-borderMedium py-4 text-textMain placeholder-textMuted focus:outline-none focus:border-textMain transition-theme text-xl font-light resize-none"})}),k.jsx("button",{type:"submit",disabled:t!=="idle",className:"self-end px-12 py-5 rounded-full font-bold text-darkBg bg-textMain hover:bg-surface hover:text-textMain hover:border hover:border-borderLight hover:scale-105 transition-all duration-500 tracking-widest uppercase text-sm disabled:opacity-50 disabled:hover:scale-100 border border-transparent",children:t==="idle"?"Send Inquiry":t==="sending"?"Sending...":"Message Sent"})]})})]})]}),k.jsx("div",{className:"absolute bottom-8 left-0 right-0 text-center pointer-events-none",children:k.jsxs("span",{className:"text-xs tracking-widest uppercase text-textMuted transition-theme",children:["© ",new Date().getFullYear()," Pranav Sinha. Built with React & GSAP."]})})]})};function wD(){const[n,e]=ke.useState(!0),t=()=>{e(!1)};return k.jsxs("div",{className:"relative w-full bg-darkBg text-white font-sans selection:bg-primaryPurple selection:text-white",children:[k.jsx(_A,{}),n&&k.jsx(vA,{onComplete:t}),k.jsx(PA,{}),k.jsxs("main",{children:[k.jsx(ZL,{}),k.jsx(_D,{}),k.jsx(yD,{}),k.jsx(MD,{}),k.jsx(ED,{}),k.jsx(TD,{})]})]})}qh.createRoot(document.getElementById("root")).render(k.jsx(H1.StrictMode,{children:k.jsx(bA,{children:k.jsx(wD,{})})}));
